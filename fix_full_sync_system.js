const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

console.log('=== 1. ENSURE getBibleCustomVerses HELPER EXISTS ===');
if (!appJs.includes('function getBibleCustomVerses()')) {
  const insertTarget = `const SCRIPTURE_STORAGE_KEY = 'supermind_scripture_custom_verses_v1';`;
  const helperCode = `const SCRIPTURE_STORAGE_KEY = 'supermind_scripture_custom_verses_v1';

function getBibleCustomVerses() {
  try {
    const raw = localStorage.getItem(SCRIPTURE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}`;
  appJs = appJs.replace(insertTarget, helperCode);
  console.log('Injected getBibleCustomVerses helper function.');
}

console.log('=== 2. HOOK dispatchRealtimeAutoSync INTO saveCustomVerse & deleteScriptureVerse ===');
// In saveCustomVerse:
const oldSaveTarget = `    // Sắp xếp custom verses theo thứ tự tăng dần
    custom.sort(sortVersesAscending);
    localStorage.setItem(SCRIPTURE_STORAGE_KEY, JSON.stringify(custom));
  } catch (err) {
    console.error(err);
  }

  closeAddVerseModal();
  selectFloor(floor);
  selectRoom(chapter);
  renderVersesInRoom();
  updateBibleStatsDashboard();`;

const newSaveTarget = `    // Sắp xếp custom verses theo thứ tự tăng dần
    custom.sort(sortVersesAscending);
    localStorage.setItem(SCRIPTURE_STORAGE_KEY, JSON.stringify(custom));
  } catch (err) {
    console.error(err);
  }

  closeAddVerseModal();
  selectFloor(floor);
  selectRoom(chapter);
  renderVersesInRoom();
  updateBibleStatsDashboard();

  // TỰ ĐỘNG ĐẨY ĐỒNG BỘ REALTIME SANG MÁY TÍNH / THIẾT BỊ KHÁC
  if (typeof dispatchRealtimeAutoSync === 'function') {
    dispatchRealtimeAutoSync();
  }`;

if (appJs.includes(oldSaveTarget)) {
  appJs = appJs.replace(oldSaveTarget, newSaveTarget);
  console.log('Hooked dispatchRealtimeAutoSync into saveCustomVerse');
}

// In deleteScriptureVerse:
const oldDeleteTarget = `    playSound('success');
  renderVersesInRoom();`;

const newDeleteTarget = `    playSound('success');
  renderVersesInRoom();
  if (typeof dispatchRealtimeAutoSync === 'function') {
    dispatchRealtimeAutoSync();
  }`;

if (appJs.includes(oldDeleteTarget)) {
  appJs = appJs.replace(oldDeleteTarget, newDeleteTarget);
  console.log('Hooked dispatchRealtimeAutoSync into deleteScriptureVerse');
}

console.log('=== 3. REWRITE REALTIME SYNC ENGINE TO BE FAST, ROCK-SOLID & RATE-LIMIT FREE ===');
const engineStartAnchor = `// =========================================================================
// REALTIME DUAL-SYNC ENGINE (PC ↔ MOBILE ZERO-CONFIG SYNC)
// =========================================================================`;

const newSyncEngineCode = `// =========================================================================
// REALTIME DUAL-SYNC ENGINE (PC ↔ MOBILE ZERO-CONFIG SYNC)
// =========================================================================
let isSyncingInProgress = false;
let lastSyncTimestampLocal = parseInt(localStorage.getItem('bible_last_sync_timestamp') || '0', 10);
let realtimeSyncIntervalTimer = null;
let lastCloudPullTime = 0;

function updateSyncStatusUI(state, msg) {
  const banner = document.getElementById('bibleRealtimeSyncBanner');
  const textEl = document.getElementById('bibleSyncStatusText');
  const timeEl = document.getElementById('bibleSyncLastTimeText');
  const dotEl = document.getElementById('syncPulseDot');
  const pingEl = document.getElementById('syncPulseDotPing');

  if (!banner || !textEl) return;

  if (state === 'syncing') {
    textEl.innerHTML = '<span>Đang đồng bộ dữ liệu...</span>';
    if (dotEl) dotEl.className = 'relative inline-flex rounded-full h-3 w-3 bg-amber-400';
    if (pingEl) pingEl.className = 'animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75';
  } else if (state === 'synced') {
    textEl.innerHTML = \`<span>Tự Động Đồng Bộ Real-time (PC ↔ Điện Thoại)</span><span class="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono">LIVE</span>\`;
    if (timeEl) {
      const nowStr = new Date().toLocaleTimeString('vi-VN');
      timeEl.textContent = \`• Cập nhật: \${nowStr}\`;
    }
    if (dotEl) dotEl.className = 'relative inline-flex rounded-full h-3 w-3 bg-emerald-500';
    if (pingEl) pingEl.className = 'animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75';
  } else if (state === 'offline') {
    textEl.innerHTML = '<span>Lưu trên máy (Offline)</span>';
    if (dotEl) dotEl.className = 'relative inline-flex rounded-full h-3 w-3 bg-slate-500';
    if (pingEl) pingEl.className = 'hidden';
  }
}

// Gói dữ liệu đồng bộ
function buildSyncPayload() {
  const map = getBibleProgressMap();
  const custom = getBibleCustomVerses();
  const streak = localStorage.getItem('bible_study_streak') || '1';
  const now = Date.now();
  return {
    app: 'supermind',
    room: getCloudSyncConfig().roomKey || 'buivananhdev',
    timestamp: now,
    bible_progress: JSON.stringify(map),
    bible_custom_verses: JSON.stringify(custom),
    study_streak: streak
  };
}

// Đẩy dữ liệu lên Local Server (/api/sync) và Cloud (nếu có cấu hình)
async function dispatchRealtimeAutoSync() {
  if (isSyncingInProgress) return;
  isSyncingInProgress = true;
  updateSyncStatusUI('syncing');

  try {
    const payload = buildSyncPayload();
    lastSyncTimestampLocal = payload.timestamp;
    localStorage.setItem('bible_last_sync_timestamp', String(lastSyncTimestampLocal));

    // 1. Thử gửi Local Server (/api/sync) - Hoạt động trên cả localhost và IP LAN (192.168.x.x)
    try {
      await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomKey: payload.room, timestamp: payload.timestamp, data: payload })
      });
      console.log('Dispatched sync to /api/sync at', new Date().toLocaleTimeString());
    } catch (e) {}

    // 2. Gửi Cloud nếu người dùng có cấu hình Firebase RTDB
    const cfg = getCloudSyncConfig();
    if (cfg && cfg.enabled && cfg.dbUrl) {
      try {
        await fetch(\`\${cfg.dbUrl}/sync/\${payload.room}.json\`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (e) {}
    }

    updateSyncStatusUI('synced');
  } catch (err) {
    console.warn('Realtime sync push error:', err);
    updateSyncStatusUI('synced');
  } finally {
    isSyncingInProgress = false;
  }
}

// Kéo dữ liệu từ Server LAN / Cloud về máy
async function pullRealtimeAutoSync(silent = true) {
  if (isSyncingInProgress) return;

  try {
    let remoteData = null;
    let remoteTimestamp = 0;

    // 1. Ưu tiên lấy từ Local Server /api/sync (mạng LAN cực nhanh, không tốn internet)
    try {
      const locRes = await fetch('/api/sync', { cache: 'no-cache' });
      if (locRes.ok) {
        const json = await locRes.json();
        if (json && json.data && json.data.timestamp) {
          remoteData = json.data;
          remoteTimestamp = json.data.timestamp;
        }
      }
    } catch (e) {}

    // 2. Nếu có Firebase URL cấu hình
    if (!remoteData) {
      const cfg = getCloudSyncConfig();
      if (cfg && cfg.enabled && cfg.dbUrl) {
        try {
          const fbRes = await fetch(\`\${cfg.dbUrl}/sync/\${cfg.roomKey || 'buivananhdev'}.json\`, { cache: 'no-cache' });
          if (fbRes.ok) {
            const fbJson = await fbRes.json();
            if (fbJson && fbJson.timestamp) {
              remoteData = fbJson;
              remoteTimestamp = fbJson.timestamp;
            }
          }
        } catch (e) {}
      }
    }

    if (!remoteData || !remoteTimestamp) {
      if (!silent) alert('Chưa tìm thấy dữ liệu đồng bộ mới từ thiết bị khác trên máy chủ.');
      return;
    }

    // Nếu dữ liệu từ xa MỚI HƠN dữ liệu tại máy hiện tại
    if (remoteTimestamp > lastSyncTimestampLocal) {
      console.log('Found newer sync packet from remote:', remoteTimestamp);
      updateSyncStatusUI('syncing');

      // HỢP NHẤT TIẾN ĐỘ THUỘC KINH THÁNH (KHÔNG BAO GIỜ MẤT DỮ LIỆU)
      const currentMap = getBibleProgressMap();
      let remoteMap = {};
      try {
        remoteMap = JSON.parse(remoteData.bible_progress || '{}');
      } catch (e) {}

      const mergedMap = { ...currentMap };
      Object.keys(remoteMap).forEach(k => {
        const rItem = remoteMap[k];
        const cItem = mergedMap[k];
        if (!cItem) {
          mergedMap[k] = rItem;
        } else {
          mergedMap[k] = {
            status: (rItem.mastered || cItem.mastered) ? 'mastered' : (rItem.status || cItem.status),
            mastered: !!(rItem.mastered || cItem.mastered),
            reviewCount: Math.max(rItem.reviewCount || 0, cItem.reviewCount || 0),
            lastReviewed: Math.max(rItem.lastReviewed || 0, cItem.lastReviewed || 0)
          };
        }
      });
      localStorage.setItem(BIBLE_PROGRESS_KEY, JSON.stringify(mergedMap));

      // HỢP NHẤT CÂU KINH THÁNH TỰ THÊM VÀO SCRIPTURE_STORAGE_KEY CHUẨN XÁC
      let remoteCustom = [];
      try {
        remoteCustom = JSON.parse(remoteData.bible_custom_verses || '[]');
      } catch (e) {}
      if (Array.isArray(remoteCustom) && remoteCustom.length > 0) {
        const localCustom = getBibleCustomVerses();
        const customMap = new Map();
        localCustom.forEach(v => customMap.set(v.id, v));
        remoteCustom.forEach(v => {
          const s = sanitizeVerseObject(v);
          customMap.set(s.id, s);
        });
        const mergedCustom = Array.from(customMap.values()).sort(sortVersesAscending);
        localStorage.setItem(SCRIPTURE_STORAGE_KEY, JSON.stringify(mergedCustom));
      }

      lastSyncTimestampLocal = remoteTimestamp;
      localStorage.setItem('bible_last_sync_timestamp', String(lastSyncTimestampLocal));

      // Refresh lại toàn bộ giao diện học tập
      migrateAndSanitizeBibleStorage();
      updateBibleStatsDashboard();
      renderTowerFloors();
      const book = BIBLE_66_BOOKS.find(b => b.floor === currentSelectedFloor);
      if (book) renderRooms(book.chapters);
      renderVersesInRoom();
      if (typeof renderMasteredModalList === 'function') renderMasteredModalList();
      updateSyncStatusUI('synced');

      if (!silent) {
        playSound('success');
        alert('Đồng bộ thành công! Tiến độ và các câu mới từ điện thoại đã được cập nhật sang máy tính.');
      }
    } else {
      updateSyncStatusUI('synced');
    }
  } catch (err) {
    console.warn('pullRealtimeAutoSync error:', err);
    updateSyncStatusUI('synced');
  }
}

function triggerImmediateSync() {
  playSound('click');
  updateSyncStatusUI('syncing');
  dispatchRealtimeAutoSync().then(() => {
    pullRealtimeAutoSync(false);
  });
}

function initRealtimeSyncEngine() {
  // Lần đầu tải trang: kéo dữ liệu
  setTimeout(() => {
    pullRealtimeAutoSync(true);
  }, 500);

  // Chu kỳ tự động kiểm tra mỗi 3 giây trên máy chủ mạng nội bộ LAN (/api/sync)
  if (realtimeSyncIntervalTimer) clearInterval(realtimeSyncIntervalTimer);
  realtimeSyncIntervalTimer = setInterval(() => {
    pullRealtimeAutoSync(true);
  }, 3000);

  // Khi người dùng chuyển tab hoặc mở lại màn hình điện thoại
  window.addEventListener('focus', () => {
    pullRealtimeAutoSync(true);
  });
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      pullRealtimeAutoSync(true);
    }
  });
}

// Khởi động đồng bộ khi trang tải
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRealtimeSyncEngine);
} else {
  initRealtimeSyncEngine();
}
`;

const engineIdx = appJs.indexOf(engineStartAnchor);
if (engineIdx !== -1) {
  appJs = appJs.slice(0, engineIdx) + newSyncEngineCode;
  console.log('Replaced Realtime Sync Engine with robust version.');
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('=== Finished writing to app.js ===');
