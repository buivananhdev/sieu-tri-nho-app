const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
const appJsPath = path.join(__dirname, 'app.js');

console.log('--- 1. UPDATING index.html WITH CLOUD REALTIME SYNC TAB ---');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Add Cloud Sync Tab Button and Tab Content to syncBackupModal
const oldTabsHeader = `<div class="flex border-b border-slate-800 bg-slate-900/50 p-2 gap-1.5 text-xs">
          <button id="syncTabBtnQr" onclick="switchSyncTab('qr')" class="flex-1 py-2 rounded-xl font-bold transition-all bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center gap-1.5">
            <i data-lucide="qr-code" class="w-3.5 h-3.5"></i> Quét Mã QR (Nhanh)
          </button>
          <button id="syncTabBtnCode" onclick="switchSyncTab('code')" class="flex-1 py-2 rounded-xl font-bold transition-all text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i> Dán Mã / Link
          </button>
          <button id="syncTabBtnFile" onclick="switchSyncTab('file')" class="flex-1 py-2 rounded-xl font-bold transition-all text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5">
            <i data-lucide="download" class="w-3.5 h-3.5"></i> File Backup
          </button>
        </div>`;

const newTabsHeader = `<div class="flex flex-wrap border-b border-slate-800 bg-slate-900/50 p-2 gap-1.5 text-xs">
          <button id="syncTabBtnCloud" onclick="switchSyncTab('cloud')" class="flex-1 min-w-[130px] py-2 rounded-xl font-bold transition-all bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center gap-1.5">
            <i data-lucide="cloud" class="w-3.5 h-3.5"></i> ☁️ Đám Mây Trực Tiếp
          </button>
          <button id="syncTabBtnQr" onclick="switchSyncTab('qr')" class="flex-1 min-w-[110px] py-2 rounded-xl font-bold transition-all text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5">
            <i data-lucide="qr-code" class="w-3.5 h-3.5"></i> Quét Mã QR
          </button>
          <button id="syncTabBtnCode" onclick="switchSyncTab('code')" class="flex-1 min-w-[100px] py-2 rounded-xl font-bold transition-all text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i> Mã Đồng Bộ
          </button>
          <button id="syncTabBtnFile" onclick="switchSyncTab('file')" class="flex-1 min-w-[90px] py-2 rounded-xl font-bold transition-all text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5">
            <i data-lucide="download" class="w-3.5 h-3.5"></i> File JSON
          </button>
        </div>`;

if (html.includes(oldTabsHeader)) {
  html = html.replace(oldTabsHeader, newTabsHeader);
  console.log('Updated tabs header in index.html');
}

// Add Cloud Content into Body of Modal
const targetBodyStart = `<div class="p-5 overflow-y-auto space-y-4">`;

const cloudContentHtml = `<div class="p-5 overflow-y-auto space-y-4">
          <!-- TAB 0: CLOUD REALTIME AUTO-SYNC -->
          <div id="syncTabContentCloud" class="space-y-4 text-left">
            <div class="p-3.5 bg-gradient-to-r from-blue-950/40 to-cyan-950/30 border border-cyan-500/40 rounded-2xl space-y-2">
              <div class="flex items-center justify-between">
                <span class="font-bold text-white text-xs flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Tự Động Cập Nhật Trực Tiếp Hai Chiều (Realtime Sync)
                </span>
                <span id="cloudSyncStatusBadge" class="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">Chưa kết nối</span>
              </div>
              <p class="text-[11px] text-slate-300 leading-relaxed">
                Khi tính năng này bật: Bạn học hoặc thêm câu trên <strong>Điện thoại</strong> thì <strong>Máy tính</strong> tự động nhảy số ngay lập tức, và ngược lại (hoàn toàn tự động ngầm, không cần quét mã hay gửi link nữa)!
              </p>
            </div>

            <!-- Cloud Config Form -->
            <div class="space-y-3 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
              <div class="space-y-1">
                <label class="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <i data-lucide="key" class="w-3.5 h-3.5"></i> Mã Phòng Đồng Bộ Riêng Của Bạn (Sync Room Key):
                </label>
                <input type="text" id="inputCloudRoomKey" value="buivananhdev" placeholder="Ví dụ: buivananhdev hoặc ma-ri-a" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono">
                <p class="text-[10px] text-slate-500">Đặt tên phòng bất kỳ. Cả Máy tính và Điện thoại chỉ cần nhập chung tên này là 2 thiết bị sẽ tự động bắt tay nhau.</p>
              </div>

              <div class="space-y-1">
                <label class="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <i data-lucide="database" class="w-3.5 h-3.5 text-cyan-400"></i> Đường dẫn Cloud Database (Firebase / REST URL):
                </label>
                <input type="text" id="inputCloudDbUrl" placeholder="https://your-project-rtdb.firebaseio.com (Tùy chọn hoặc dùng mặc định)" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono">
              </div>

              <div class="flex items-center justify-between pt-1">
                <label class="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                  <input type="checkbox" id="checkCloudAutoSync" checked class="w-4 h-4 rounded text-cyan-500 bg-slate-950 border-slate-700 focus:ring-0">
                  <span>Tự động đẩy dữ liệu lên mây khi học</span>
                </label>
                <button onclick="saveAndConnectCloudSync()" class="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs transition-all shadow-md flex items-center gap-1.5">
                  <i data-lucide="save" class="w-3.5 h-3.5"></i> Lưu & Kích Hoạt
                </button>
              </div>
            </div>

            <!-- Manual Cloud Actions -->
            <div class="grid grid-cols-2 gap-2">
              <button onclick="triggerManualCloudPush()" class="py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-cyan-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all">
                <i data-lucide="upload-cloud" class="w-3.5 h-3.5"></i> Đẩy Lên Mây Ngay
              </button>
              <button onclick="triggerManualCloudPull()" class="py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all">
                <i data-lucide="download-cloud" class="w-3.5 h-3.5"></i> Kéo Từ Mây Về Máy
              </button>
            </div>

            <!-- Guide on Free Firebase Setup -->
            <details class="p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-xs text-slate-400">
              <summary class="font-bold text-slate-300 cursor-pointer flex items-center gap-1.5 hover:text-cyan-300">
                <i data-lucide="help-circle" class="w-3.5 h-3.5 text-cyan-400"></i> Hướng Dẫn Thiết Lập Firebase Miễn Phí 100% Trọn Đời (1 Phút)
              </summary>
              <div class="mt-2.5 space-y-1.5 text-[11px] leading-relaxed text-slate-400 pl-2 border-l border-slate-800">
                <p>1. Truy cập <strong>firebase.google.com</strong> và bấm <em>Go to Console</em> (đăng nhập bằng tài khoản Google của bạn).</p>
                <p>2. Bấm <em>Add Project</em> ➔ Tạo tên dự án bất kỳ (ví dụ: <code>supermind-app</code>).</p>
                <p>3. Chọn <em>Realtime Database</em> ➔ Bấm <em>Create Database</em> (chọn chế độ <em>Test mode</em>: cho phép đọc/ghi).</p>
                <p>4. Sao chép đường dẫn (ví dụ: <code>https://supermind-app-default-rtdb.firebaseio.com</code>) và dán vào ô trên rồi bấm <strong>Lưu & Kích Hoạt</strong>.</p>
                <p>👉 Sau khi cấu hình một lần duy nhất, cả điện thoại và máy tính của bạn sẽ tự động đồng bộ tức thì trọn đời!</p>
              </div>
            </details>
          </div>`;

if (html.includes(targetBodyStart) && !html.includes('id="syncTabContentCloud"')) {
  html = html.replace(targetBodyStart, cloudContentHtml);
  console.log('Added Cloud Sync Tab Content to index.html');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Updated index.html successfully!');

console.log('--- 2. UPDATING app.js WITH REALTIME CLOUD SYNC ENGINE ---');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const cloudEngineJs = `
// ==========================================
// 15D. HỆ THỐNG ĐỒNG BỘ ĐÁM MÂY THỜI GIAN THỰC (REALTIME CLOUD SYNC)
// ==========================================
const CLOUD_SYNC_CONFIG_KEY = 'supermind_cloud_sync_config_v1';
let cloudEventSourceInstance = null;
let cloudPollingIntervalId = null;

function getCloudSyncConfig() {
  try {
    const raw = localStorage.getItem(CLOUD_SYNC_CONFIG_KEY);
    return raw ? JSON.parse(raw) : {
      enabled: false,
      roomKey: 'buivananhdev',
      dbUrl: ''
    };
  } catch (e) {
    return { enabled: false, roomKey: 'buivananhdev', dbUrl: '' };
  }
}

function saveCloudSyncConfig(cfg) {
  try {
    localStorage.setItem(CLOUD_SYNC_CONFIG_KEY, JSON.stringify(cfg));
  } catch (e) {
    console.error(e);
  }
}

function updateCloudSyncBadgeUI() {
  const cfg = getCloudSyncConfig();
  const badge = document.getElementById('cloudSyncStatusBadge');
  if (!badge) return;

  if (cfg.enabled && cfg.dbUrl) {
    badge.className = 'text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-bold flex items-center gap-1';
    badge.innerHTML = '<span class=\"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse\"></span> Đang Kết Nối Mây';
  } else {
    badge.className = 'text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono';
    badge.textContent = 'Chưa Kết Nối Mây';
  }

  const inputRoom = document.getElementById('inputCloudRoomKey');
  const inputUrl = document.getElementById('inputCloudDbUrl');
  const checkAuto = document.getElementById('checkCloudAutoSync');
  if (inputRoom && !inputRoom.value) inputRoom.value = cfg.roomKey || 'buivananhdev';
  if (inputUrl && !inputUrl.value && cfg.dbUrl) inputUrl.value = cfg.dbUrl;
  if (checkAuto) checkAuto.checked = !!cfg.enabled;
}

async function saveAndConnectCloudSync() {
  playSound('click');
  const roomKey = (document.getElementById('inputCloudRoomKey')?.value || 'buivananhdev').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
  let dbUrl = (document.getElementById('inputCloudDbUrl')?.value || '').trim();
  const enabled = document.getElementById('checkCloudAutoSync')?.checked ?? true;

  if (dbUrl.endsWith('/')) dbUrl = dbUrl.slice(0, -1);

  const cfg = {
    enabled: enabled,
    roomKey: roomKey || 'buivananhdev',
    dbUrl: dbUrl
  };

  saveCloudSyncConfig(cfg);
  updateCloudSyncBadgeUI();

  if (cfg.enabled && cfg.dbUrl) {
    // Thử đẩy dữ liệu hiện tại lên và kích hoạt lắng nghe
    const ok = await pushToCloud(true);
    if (ok) {
      initCloudRealtimeListener();
      alert('Kết nối Đám Mây thành công! Kể từ bây giờ, mọi câu bạn thuộc hoặc thêm mới sẽ tự động đồng bộ trực tiếp giữa máy tính và điện thoại!');
    } else {
      alert('Đã lưu cấu hình! Tuy nhiên kiểm tra kết nối tới Database chưa thành công, vui lòng kiểm tra lại URL Firebase hoặc quyền đọc/ghi.');
    }
  } else {
    alert('Đã lưu cấu hình mã phòng!');
  }
}

// Đẩy dữ liệu hiện tại lên Cloud
async function pushToCloud(isInitial = false) {
  const cfg = getCloudSyncConfig();
  if (!cfg.enabled || !cfg.dbUrl) return false;

  try {
    const packet = generateSyncPacket();
    const endpoint = \`\${cfg.dbUrl}/sync/\${cfg.roomKey}.json\`;

    const res = await fetch(endpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(packet)
    });

    if (res.ok) {
      console.log('Push to cloud success:', cfg.roomKey);
      return true;
    } else {
      console.warn('Push to cloud failed, status:', res.status);
      return false;
    }
  } catch (err) {
    console.warn('Push to cloud error:', err);
    return false;
  }
}

// Kéo dữ liệu từ Cloud về máy
async function pullFromCloud(silent = false) {
  const cfg = getCloudSyncConfig();
  if (!cfg.enabled || !cfg.dbUrl) {
    if (!silent) alert('Vui lòng nhập đường dẫn Cloud Database (Firebase) trước khi kéo dữ liệu!');
    return false;
  }

  try {
    const endpoint = \`\${cfg.dbUrl}/sync/\${cfg.roomKey}.json\`;
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error('Không thể tải từ đám mây, mã lỗi: ' + res.status);

    const packet = await res.json();
    if (!packet || packet.app !== 'supermind') {
      if (!silent) alert('Chưa tìm thấy dữ liệu trên mây ở phòng này.');
      return false;
    }

    mergeSyncDataIntoLocalStorage(packet);
    if (!silent) {
      alert(\`Kéo dữ liệu từ mây thành công! Đã cập nhật \${packet.stats?.bibleMasteredCount || 0} câu đã thuộc và \${packet.stats?.bibleCustomCount || 0} câu tự thêm!\`);
    }
    return true;
  } catch (err) {
    console.warn('Pull from cloud error:', err);
    if (!silent) alert('Lỗi kéo dữ liệu từ mây: ' + err.message);
    return false;
  }
}

async function triggerManualCloudPush() {
  playSound('click');
  const ok = await pushToCloud(false);
  if (ok) alert('Đã đẩy toàn bộ tiến độ hiện tại lên Đám Mây thành công!');
  else alert('Đẩy lên mây thất bại. Hãy kiểm tra URL Cloud Database trong cấu hình.');
}

async function triggerManualCloudPull() {
  playSound('click');
  await pullFromCloud(false);
}

// Lắng nghe dữ liệu thời gian thực từ Cloud
function initCloudRealtimeListener() {
  const cfg = getCloudSyncConfig();
  if (!cfg.enabled || !cfg.dbUrl) return;

  // 1. Thử EventSource (Firebase Server-Sent Events - Realtime Streaming)
  try {
    if (cloudEventSourceInstance) {
      cloudEventSourceInstance.close();
      cloudEventSourceInstance = null;
    }

    const sseUrl = \`\${cfg.dbUrl}/sync/\${cfg.roomKey}.json\`;
    cloudEventSourceInstance = new EventSource(sseUrl);

    cloudEventSourceInstance.addEventListener('put', (e) => {
      try {
        const payload = JSON.parse(e.data);
        if (payload && payload.data && payload.data.app === 'supermind') {
          // Bỏ qua nếu dữ liệu vừa được đẩy từ chính tab này trong vòng 2 giây
          const diff = Date.now() - (payload.data.timestamp || 0);
          if (diff > 1500) {
            mergeSyncDataIntoLocalStorage(payload.data);
            console.log('Realtime update received from cloud!');
          }
        }
      } catch (err) {
        console.warn('SSE parse error:', err);
      }
    });

    cloudEventSourceInstance.onerror = () => {
      // Nếu EventSource không kết nối được, fallback sang Polling
      setupCloudPollingFallback();
    };
  } catch (e) {
    setupCloudPollingFallback();
  }
}

function setupCloudPollingFallback() {
  if (cloudPollingIntervalId) clearInterval(cloudPollingIntervalId);
  // Kiểm tra định kỳ mỗi 8 giây khi tab hoạt động
  cloudPollingIntervalId = setInterval(() => {
    if (document.visibilityState === 'visible') {
      pullFromCloud(true);
    }
  }, 8000);
}

// Tự động đẩy lên mây sau khi có thay đổi (Debounce)
let cloudPushDebounceTimer = null;
function autoNotifyCloudSync() {
  const cfg = getCloudSyncConfig();
  if (!cfg.enabled || !cfg.dbUrl) return;

  if (cloudPushDebounceTimer) clearTimeout(cloudPushDebounceTimer);
  cloudPushDebounceTimer = setTimeout(() => {
    pushToCloud(false);
  }, 1000);
}
`;

if (!appJs.includes('function getCloudSyncConfig')) {
  appJs += '\n' + cloudEngineJs;
  console.log('Appended cloud engine to app.js');
}

// In toggleBibleVerseMastered & saveCustomVerse, call autoNotifyCloudSync()
if (!appJs.includes('autoNotifyCloudSync()')) {
  appJs = appJs.replace(
    'updateBibleStatsDashboard();\n  renderVersesInRoom();',
    'updateBibleStatsDashboard();\n  renderVersesInRoom();\n  autoNotifyCloudSync();'
  );
  console.log('Hooked autoNotifyCloudSync into verse actions');
}

// In switchSyncTab, support 'cloud' tab
const oldSwitchSyncTab = `function switchSyncTab(tab) {
  playSound('click');
  const tabs = ['qr', 'code', 'file'];`;

const newSwitchSyncTab = `function switchSyncTab(tab) {
  playSound('click');
  const tabs = ['cloud', 'qr', 'code', 'file'];`;

if (appJs.includes(oldSwitchSyncTab)) {
  appJs = appJs.replace(oldSwitchSyncTab, newSwitchSyncTab);
  console.log('Updated switchSyncTab with cloud tab');
}

// In openSyncModal, updateCloudSyncBadgeUI()
if (!appJs.includes('updateCloudSyncBadgeUI()')) {
  appJs = appJs.replace(
    'function openSyncModal(scope = \'bible\') {',
    'function openSyncModal(scope = \'bible\') {\n  updateCloudSyncBadgeUI();'
  );
}

// On DOMContentLoaded, pullFromCloud(true) and initCloudRealtimeListener()
if (!appJs.includes('initCloudRealtimeListener()')) {
  appJs = appJs.replace(
    'checkIncomingSyncFromUrl();',
    'checkIncomingSyncFromUrl();\n  pullFromCloud(true);\n  initCloudRealtimeListener();'
  );
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Updated app.js successfully!');
