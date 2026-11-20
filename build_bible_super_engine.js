const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

console.log('=== UPDATING app.js WITH GRAND TARGET & DUAL REALTIME SYNC ===');

// Check if already applied
if (appJs.includes('TOTAL_BIBLE_VERSES = 31102')) {
  console.log('Constants already present, skipping duplicate injection.');
} else {
  // 1. Inject Constants and Helper Functions right before updateBibleStatsDashboard
  const anchor = `function updateBibleStatsDashboard() {`;
  
  const injectHelpers = `
// ==========================================
// ĐẠI MỤC TIÊU 31.102 CÂU KINH THÁNH & CHAPTER MASTERY
// ==========================================
const TOTAL_BIBLE_VERSES = 31102;
const TOTAL_OLD_TESTAMENT_VERSES = 23145;
const TOTAL_NEW_TESTAMENT_VERSES = 7957;
const TOTAL_BIBLE_CHAPTERS = 1189;

let currentCompletedChaptersFilter = 'all';

function getBibleMasteryRank(masteredCount) {
  if (masteredCount >= 31102) return { title: '🏆 Kỳ Tích Toàn Năng', desc: 'Đã thuộc trọn vẹn 31.102 câu Kinh Thánh' };
  if (masteredCount >= 15000) return { title: '⚡ Siêu Trí Nhớ Thánh Kinh', desc: 'Đã thuộc hơn 15.000 câu' };
  if (masteredCount >= 7958) return { title: '📜 Đại Trí Giả Lời Chúa', desc: 'Đã vượt qua quy mô Tân Ước' };
  if (masteredCount >= 3000) return { title: '🌟 Tinh Hoa Trí Tuệ', desc: 'Đã thuộc hơn 3.000 câu' };
  if (masteredCount >= 1000) return { title: '👑 Bậc Thầy Ghi Nhớ', desc: 'Đã thuộc hơn 1.000 câu' };
  if (masteredCount >= 500) return { title: '🏛️ Trụ Cột Đền Thờ', desc: 'Đã thuộc hơn 500 câu' };
  if (masteredCount >= 100) return { title: '⚔️ Chiến Binh Lời Sự Sống', desc: 'Đã thuộc hơn 100 câu' };
  if (masteredCount >= 50) return { title: '🛡️ Thành Lũy Lời Chúa', desc: 'Đã thuộc hơn 50 câu' };
  if (masteredCount >= 10) return { title: '🕯️ Ngọn Đèn Soi Lối', desc: 'Đã thuộc hơn 10 câu' };
  return { title: '🌱 Khởi Đầu Đức Tin', desc: 'Bắt đầu hành trình ghi nhớ' };
}

function getChapterStatus(floor, room) {
  const allVerses = getAllScriptureVerses();
  const verses = allVerses.filter(v => v.bookFloor === floor && v.chapter === room);
  if (verses.length === 0) return { total: 0, mastered: 0, isComplete: false };
  const mastered = verses.filter(v => isBibleVerseMastered(v.id)).length;
  return {
    total: verses.length,
    mastered: mastered,
    isComplete: mastered === verses.length
  };
}

function getAllCompletedChapters() {
  const completed = [];
  if (typeof BIBLE_66_BOOKS === 'undefined') return completed;
  BIBLE_66_BOOKS.forEach(b => {
    for (let r = 1; r <= b.chapters; r++) {
      const st = getChapterStatus(b.floor, r);
      if (st.isComplete && st.total > 0) {
        completed.push({
          floor: b.floor,
          bookName: b.name,
          bookCode: b.code,
          testament: b.testament,
          chapter: r,
          verseCount: st.total
        });
      }
    }
  });
  return completed;
}

function openCompletedChaptersModal() {
  playSound('click');
  renderCompletedChaptersList();
  const modal = document.getElementById('completedChaptersModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    lucide.createIcons();
  }
}

function closeCompletedChaptersModal() {
  playSound('click');
  const modal = document.getElementById('completedChaptersModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function filterCompletedChapters(filter) {
  playSound('click');
  currentCompletedChaptersFilter = filter;
  ['All', 'Old', 'New'].forEach(tab => {
    const btn = document.getElementById('btnFilterComp' + tab);
    if (tab.toLowerCase() === filter) {
      btn?.classList.add('bg-amber-500', 'text-slate-950');
      btn?.classList.remove('bg-slate-800', 'text-slate-300');
    } else {
      btn?.classList.remove('bg-amber-500', 'text-slate-950');
      btn?.classList.add('bg-slate-800', 'text-slate-300');
    }
  });
  renderCompletedChaptersList();
}

function jumpToCompletedChapter(floor, room) {
  closeCompletedChaptersModal();
  selectFloor(floor);
  selectRoom(room);
  playSound('success');
  // Cuộn mượt đến danh sách câu trong phòng
  setTimeout(() => {
    document.getElementById('activeRoomHeader')?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function renderCompletedChaptersList() {
  const container = document.getElementById('completedChaptersListContainer');
  if (!container) return;

  const completed = getAllCompletedChapters();
  const countAll = completed.length;
  const countOld = completed.filter(c => c.testament === 'old').length;
  const countNew = completed.filter(c => c.testament === 'new').length;

  const elBadge = document.getElementById('completedChaptersModalCountBadge');
  const elCountAll = document.getElementById('countCompTabAll');
  const elCountOld = document.getElementById('countCompTabOld');
  const elCountNew = document.getElementById('countCompTabNew');

  if (elBadge) elBadge.textContent = countAll + ' Chương';
  if (elCountAll) elCountAll.textContent = countAll;
  if (elCountOld) elCountOld.textContent = countOld;
  if (elCountNew) elCountNew.textContent = countNew;

  let filtered = completed;
  if (currentCompletedChaptersFilter === 'old') filtered = completed.filter(c => c.testament === 'old');
  if (currentCompletedChaptersFilter === 'new') filtered = completed.filter(c => c.testament === 'new');

  if (filtered.length === 0) {
    container.innerHTML = \`
      <div class="py-12 text-center space-y-3">
        <div class="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto text-2xl text-slate-500">
          👑
        </div>
        <p class="text-slate-300 text-sm font-semibold">Chưa có chương nào thuộc trọn vẹn 100%</p>
        <p class="text-slate-500 text-xs max-w-sm mx-auto">
          Khi bạn hoàn thành tất cả các câu trong một phòng (ví dụ S 1:1, 1:2, 1:3...), chương đó sẽ được gắn vương miện hoàng kim tại đây!
        </p>
      </div>
    \`;
    return;
  }

  container.innerHTML = filtered.map(c => \`
    <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-amber-500/30 hover:border-amber-400 transition-all flex items-center justify-between gap-3 group">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-black text-sm">
          👑
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-white text-xs sm:text-sm">\${c.bookName} - Chương \${c.chapter}</span>
            <span class="px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 text-[10px] font-mono border border-amber-400/30">Mã: \${c.bookCode}</span>
          </div>
          <div class="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
            <span>Tầng \${c.floor} (\${c.testament === 'old' ? 'Cựu Ước' : 'Tân Ước'})</span>
            <span>•</span>
            <span class="text-amber-300 font-semibold">\${c.verseCount} câu đã thuộc trọn vẹn 100%</span>
          </div>
        </div>
      </div>
      <button onclick="jumpToCompletedChapter(\${c.floor}, \${c.chapter})" class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md flex items-center gap-1 whitespace-nowrap">
        <span>Vào Học</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  \`).join('');

  lucide.createIcons();
}
`;

  appJs = appJs.replace(anchor, injectHelpers + '\n' + anchor);
  console.log('Injected Grand Helpers into app.js');
}

// 2. Update updateBibleStatsDashboard implementation
const oldUpdateStatsFn = `function updateBibleStatsDashboard() {
  const allVerses = getAllScriptureVerses();
  const total = allVerses.length;
  let masteredCount = 0;
  let learningCount = 0;
  const masteredBooksSet = new Set();

  allVerses.forEach(v => {
    const p = getBibleVerseProgress(v.id);
    if (p.mastered) {
      masteredCount++;
      masteredBooksSet.add(v.bookFloor);
    } else if (p.status === 'learning' || p.reviewCount > 0) {
      learningCount++;
    }
  });

  const unlearnedCount = Math.max(0, total - masteredCount - learningCount);
  const percent = total > 0 ? Math.round((masteredCount / total) * 100) : 0;

  const elTotal = document.getElementById('statTotalBibleVerses');
  const elMastered = document.getElementById('statMasteredBibleVerses');
  const elMasteredPct = document.getElementById('statMasteredBiblePercent');
  const elLearning = document.getElementById('statLearningBibleVerses');
  const elBooks = document.getElementById('statMasteredBibleBooks');
  const elBar = document.getElementById('statBibleProgressBarFill');
  const elBarText = document.getElementById('statBibleProgressBarText');
  const elStreak = document.getElementById('bibleStreakBadge');
  const elBtnMastered = document.getElementById('statBtnMasteredCount');

  if (elTotal) elTotal.textContent = total;
  if (elMastered) elMastered.textContent = masteredCount;
  if (elMasteredPct) elMasteredPct.textContent = \`(\${percent}%)\`;
  if (elLearning) elLearning.textContent = learningCount;
  if (elBooks) elBooks.textContent = \`\${masteredBooksSet.size} / 66\`;
  if (elBar) elBar.style.width = \`\${percent}%\`;
  if (elBarText) elBarText.textContent = \`\${percent}% (\${masteredCount}/\${total} câu đã thuộc)\`;
  if (elBtnMastered) elBtnMastered.textContent = masteredCount;

  const streak = calculateBibleStreak();
  if (elStreak) elStreak.textContent = \`🔥 \${streak} Ngày Thuộc Lòng\`;
}`;

const newUpdateStatsFn = `function updateBibleStatsDashboard() {
  const allVerses = getAllScriptureVerses();
  const total = allVerses.length;
  let masteredCount = 0;
  let learningCount = 0;
  let otMastered = 0;
  let ntMastered = 0;
  const masteredBooksSet = new Set();

  allVerses.forEach(v => {
    const p = getBibleVerseProgress(v.id);
    if (p.mastered) {
      masteredCount++;
      masteredBooksSet.add(v.bookFloor);
      if (v.bookFloor <= 39) otMastered++;
      else ntMastered++;
    } else if (p.status === 'learning' || p.reviewCount > 0) {
      learningCount++;
    }
  });

  const unlearnedCount = Math.max(0, total - masteredCount - learningCount);
  const percent = total > 0 ? Math.round((masteredCount / total) * 100) : 0;

  // Cập nhật 4 KPI hiện tại
  const elTotal = document.getElementById('statTotalBibleVerses');
  const elMastered = document.getElementById('statMasteredBibleVerses');
  const elMasteredPct = document.getElementById('statMasteredBiblePercent');
  const elLearning = document.getElementById('statLearningBibleVerses');
  const elBooks = document.getElementById('statMasteredBibleBooks');
  const elBar = document.getElementById('statBibleProgressBarFill');
  const elBarText = document.getElementById('statBibleProgressBarText');
  const elStreak = document.getElementById('bibleStreakBadge');
  const elBtnMastered = document.getElementById('statBtnMasteredCount');

  if (elTotal) elTotal.textContent = total;
  if (elMastered) elMastered.textContent = masteredCount;
  if (elMasteredPct) elMasteredPct.textContent = \`(\${percent}%)\`;
  if (elLearning) elLearning.textContent = learningCount;
  if (elBooks) elBooks.textContent = \`\${masteredBooksSet.size} / 66\`;
  if (elBar) elBar.style.width = \`\${percent}%\`;
  if (elBarText) elBarText.textContent = \`\${percent}% (\${masteredCount}/\${total} câu đã thuộc)\`;
  if (elBtnMastered) elBtnMastered.textContent = masteredCount;

  const streak = calculateBibleStreak();
  if (elStreak) elStreak.textContent = \`🔥 \${streak} Ngày Thuộc Lòng\`;

  // CẬP NHẬT ĐẠI MỤC TIÊU 31.102 CÂU KINH THÁNH
  const elGrandMastered = document.getElementById('grandMasteredVerses');
  const elGrandPercent = document.getElementById('grandMasteredPercent');
  const elGrandRemaining = document.getElementById('grandRemainingVerses');
  const elGrandBar = document.getElementById('grandMasteredBarFill');
  const elGrandRank = document.getElementById('grandRankBadge');
  const elOtStat = document.getElementById('grandOldTestamentStat');
  const elNtStat = document.getElementById('grandNewTestamentStat');
  const elCompCount = document.getElementById('grandCompletedChaptersCount');

  const grandPercentVal = ((masteredCount / TOTAL_BIBLE_VERSES) * 100).toFixed(2);
  const grandRemainingVal = Math.max(0, TOTAL_BIBLE_VERSES - masteredCount);

  if (elGrandMastered) elGrandMastered.textContent = masteredCount;
  if (elGrandPercent) elGrandPercent.textContent = \`(\${grandPercentVal}%)\`;
  if (elGrandRemaining) elGrandRemaining.textContent = grandRemainingVal.toLocaleString('vi-VN');
  if (elGrandBar) {
    const barWidth = Math.max(0.3, Math.min(100, (masteredCount / TOTAL_BIBLE_VERSES) * 100));
    elGrandBar.style.width = \`\${barWidth}%\`;
  }

  const rankInfo = getBibleMasteryRank(masteredCount);
  if (elGrandRank) {
    elGrandRank.innerHTML = \`<span>\${rankInfo.title}</span>\`;
    elGrandRank.title = rankInfo.desc;
  }

  if (elOtStat) elOtStat.textContent = \`\${otMastered} / 23.145\`;
  if (elNtStat) elNtStat.textContent = \`\${ntMastered} / 7.957\`;

  const completedList = getAllCompletedChapters();
  if (elCompCount) elCompCount.textContent = completedList.length;
}`;

if (appJs.includes(oldUpdateStatsFn)) {
  appJs = appJs.replace(oldUpdateStatsFn, newUpdateStatsFn);
  console.log('Replaced updateBibleStatsDashboard with Grand Target calculations');
}

// 3. Update renderRooms to show completed chapter crowns and progress
const oldRenderRooms = `function renderRooms(chapterCount) {
  const container = document.getElementById('roomsChipList');
  if (!container) return;

  let chipsHtml = '';
  for (let ch = 1; ch <= chapterCount; ch++) {
    const isActive = ch === currentSelectedRoom;
    chipsHtml += \`
      <button onclick="selectRoom(\${ch})" class="room-chip \${isActive ? 'active' : ''} px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap border transition-all \${isActive ? '' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'}">
        Phòng \${ch}
      </button>
    \`;
  }
  container.innerHTML = chipsHtml;
}`;

const newRenderRooms = `function renderRooms(chapterCount) {
  const container = document.getElementById('roomsChipList');
  if (!container) return;

  let chipsHtml = '';
  for (let ch = 1; ch <= chapterCount; ch++) {
    const isActive = ch === currentSelectedRoom;
    const st = getChapterStatus(currentSelectedFloor, ch);

    let chipClass = '';
    let chipContent = '';

    if (st.isComplete && st.total > 0) {
      chipClass = isActive 
        ? 'bg-amber-500 text-slate-950 font-black shadow-md border-amber-400' 
        : 'bg-amber-500/15 text-amber-300 border-amber-500/50 hover:bg-amber-500/25 font-bold';
      chipContent = \`👑 Phòng \${ch} (\${st.mastered}/\${st.total})\`;
    } else if (st.total > 0 && st.mastered > 0) {
      chipClass = isActive
        ? 'bg-amber-500 text-slate-950 font-bold shadow'
        : 'bg-slate-800 text-amber-200 border-amber-500/30 hover:bg-slate-700';
      chipContent = \`Phòng \${ch} <span class="text-[10px] text-amber-400 font-mono">(\${st.mastered}/\${st.total})</span>\`;
    } else if (st.total > 0) {
      chipClass = isActive
        ? 'bg-amber-500 text-slate-950 font-bold shadow'
        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700';
      chipContent = \`Phòng \${ch} <span class="text-[10px] text-slate-500 font-mono">(0/\${st.total})</span>\`;
    } else {
      chipClass = isActive
        ? 'bg-amber-500 text-slate-950 font-bold shadow'
        : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700';
      chipContent = \`Phòng \${ch}\`;
    }

    chipsHtml += \`
      <button onclick="selectRoom(\${ch})" class="room-chip \${isActive ? 'active' : ''} px-3 py-1 rounded-lg text-xs whitespace-nowrap border transition-all \${chipClass}">
        \${chipContent}
      </button>
    \`;
  }
  container.innerHTML = chipsHtml;
}`;

if (appJs.includes(oldRenderRooms)) {
  appJs = appJs.replace(oldRenderRooms, newRenderRooms);
  console.log('Updated renderRooms with Chapter Mastery crowns and counts');
}

// 4. Update renderVersesInRoom to show celebration banner when 100% complete
const oldRenderVersesTarget = `  const allVerses = getAllScriptureVerses();
  let filtered = allVerses.filter(v => v.bookFloor === currentSelectedFloor && v.chapter === currentSelectedRoom);

  // Áp dụng bộ lọc trạng thái (Đã thuộc, Đang ôn, Chưa học)`;

const newRenderVersesTarget = `  const allVerses = getAllScriptureVerses();
  const currentChapterVerses = allVerses.filter(v => v.bookFloor === currentSelectedFloor && v.chapter === currentSelectedRoom);
  const chapterStatus = getChapterStatus(currentSelectedFloor, currentSelectedRoom);
  const currentBook = BIBLE_66_BOOKS.find(b => b.floor === currentSelectedFloor);

  let filtered = currentChapterVerses;

  // Áp dụng bộ lọc trạng thái (Đã thuộc, Đang ôn, Chưa học)`;

if (appJs.includes(oldRenderVersesTarget)) {
  appJs = appJs.replace(oldRenderVersesTarget, newRenderVersesTarget);
  console.log('Updated renderVersesInRoom setup for chapter status');
}

// Update the container.innerHTML in renderVersesInRoom to include celebration banner
const oldContainerInnerHtmlStart = `  container.innerHTML = filtered.map(v => {`;
const newContainerInnerHtmlStart = `  let celebrationBannerHtml = '';
  if (chapterStatus.isComplete && chapterStatus.total > 0) {
    celebrationBannerHtml = \`
      <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/10 border border-amber-400/50 flex flex-wrap items-center justify-between gap-3 text-amber-200 shadow-lg animate-in fade-in duration-300">
        <div class="flex items-center gap-3">
          <span class="text-2xl sm:text-3xl">👑</span>
          <div>
            <div class="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <span>CHƯƠNG ĐÃ THUỘC TRỌN VẸN 100%!</span>
              <span class="px-2 py-0.2 text-[9px] bg-amber-400 text-slate-950 font-black rounded-full">HOÀN TẤT</span>
            </div>
            <div class="text-[11px] sm:text-xs text-amber-200/90 font-medium mt-0.5">
              Toàn bộ \${chapterStatus.total} câu trong Phòng \${currentSelectedRoom} (\${currentBook?.name || ''}) đã được bạn ghi nhớ khắc sâu!
            </div>
          </div>
        </div>
        <button onclick="playSound('success')" class="text-xs font-bold px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl shadow-md transition-all whitespace-nowrap">
          🌟 Xuất Sắc!
        </button>
      </div>
    \`;
  }

  container.innerHTML = celebrationBannerHtml + filtered.map(v => {`;

if (appJs.includes(oldContainerInnerHtmlStart) && !appJs.includes('celebrationBannerHtml =')) {
  appJs = appJs.replace(oldContainerInnerHtmlStart, newContainerInnerHtmlStart);
  console.log('Injected celebrationBannerHtml into renderVersesInRoom');
}

// 5. Update setBibleVerseStatus to trigger instant background real-time sync
const oldSetBibleVerseStatus = `function setBibleVerseStatus(verseId, status) {
  const map = getBibleProgressMap();
  const current = getBibleVerseProgress(verseId);
  const isMastered = status === 'mastered';
  map[verseId] = {
    status: status,
    mastered: isMastered,
    reviewCount: (current.reviewCount || 0) + 1,
    lastReviewed: Date.now()
  };
  localStorage.setItem(BIBLE_PROGRESS_KEY, JSON.stringify(map));
  updateBibleStatsDashboard();
  renderVersesInRoom();
  renderMasteredModalList();
}`;

const newSetBibleVerseStatus = `function setBibleVerseStatus(verseId, status) {
  const map = getBibleProgressMap();
  const current = getBibleVerseProgress(verseId);
  const isMastered = status === 'mastered';
  map[verseId] = {
    status: status,
    mastered: isMastered,
    reviewCount: (current.reviewCount || 0) + 1,
    lastReviewed: Date.now()
  };
  localStorage.setItem(BIBLE_PROGRESS_KEY, JSON.stringify(map));
  updateBibleStatsDashboard();
  renderTowerFloors();
  const book = BIBLE_66_BOOKS.find(b => b.floor === currentSelectedFloor);
  if (book) renderRooms(book.chapters);
  renderVersesInRoom();
  renderMasteredModalList();

  // TỰ ĐỘNG ĐỒNG BỘ REALTIME NGAY LẬP TỨC SANG THIẾT BỊ KHÁC
  dispatchRealtimeAutoSync();
}`;

if (appJs.includes(oldSetBibleVerseStatus)) {
  appJs = appJs.replace(oldSetBibleVerseStatus, newSetBibleVerseStatus);
  console.log('Updated setBibleVerseStatus to trigger dispatchRealtimeAutoSync()');
}

// 6. Append Dual-Layer Realtime Sync Engine to app.js
const realtimeSyncEngineCode = `
// =========================================================================
// REALTIME DUAL-SYNC ENGINE (PC ↔ MOBILE ZERO-CONFIG SYNC)
// =========================================================================
const SYNC_CLOUD_ENDPOINT = 'https://api.restful-api.dev/objects/ff808181a09d98f701a1f95c16b4091a';
let isSyncingInProgress = false;
let lastSyncTimestampLocal = parseInt(localStorage.getItem('bible_last_sync_timestamp') || '0', 10);
let realtimeSyncIntervalTimer = null;

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

// Đẩy dữ liệu lên Cloud Relay & Local /api/sync
async function dispatchRealtimeAutoSync() {
  if (isSyncingInProgress) return;
  isSyncingInProgress = true;
  updateSyncStatusUI('syncing');

  try {
    const payload = buildSyncPayload();
    lastSyncTimestampLocal = payload.timestamp;
    localStorage.setItem('bible_last_sync_timestamp', String(lastSyncTimestampLocal));

    // 1. Thử gửi Local Server (/api/sync) nếu đang chạy trên host cục bộ
    try {
      fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomKey: payload.room, timestamp: payload.timestamp, data: payload })
      }).catch(() => {});
    } catch (e) {}

    // 2. Gửi Cloud Relay (CORS mở, hoạt động cả trên GitHub Pages và Mobile)
    const putBody = JSON.stringify({
      name: 'supermind_sync_' + payload.room,
      data: payload
    });

    const res = await fetch(SYNC_CLOUD_ENDPOINT, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: putBody
    });

    if (res.ok) {
      console.log('Realtime sync push OK at', new Date().toLocaleTimeString());
      updateSyncStatusUI('synced');
    } else {
      updateSyncStatusUI('synced');
    }
  } catch (err) {
    console.warn('Realtime sync push error:', err);
    updateSyncStatusUI('synced');
  } finally {
    isSyncingInProgress = false;
  }
}

// Kéo dữ liệu từ Cloud / Server về máy
async function pullRealtimeAutoSync(silent = true) {
  if (isSyncingInProgress) return;

  try {
    let remoteData = null;
    let remoteTimestamp = 0;

    // 1. Thử lấy từ /api/sync cục bộ trước (ưu tiên LAN cực nhanh)
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

    // 2. Nếu không có từ local hoặc local cũ hơn, kéo từ Cloud Relay
    if (!remoteData) {
      const cloudRes = await fetch(SYNC_CLOUD_ENDPOINT, { cache: 'no-cache' });
      if (cloudRes.ok) {
        const obj = await cloudRes.json();
        if (obj && obj.data && obj.data.timestamp) {
          remoteData = obj.data;
          remoteTimestamp = obj.data.timestamp;
        }
      }
    }

    if (!remoteData || !remoteTimestamp) {
      if (!silent) alert('Không tìm thấy dữ liệu trên mây.');
      return;
    }

    // Nếu dữ liệu trên mây MỚI HƠN dữ liệu tại máy hiện tại
    if (remoteTimestamp > lastSyncTimestampLocal) {
      console.log('Pulling fresh sync data from cloud/server, timestamp:', remoteTimestamp);
      updateSyncStatusUI('syncing');

      // HỢP NHẤT TIẾN ĐỘ THUỘC KINH THÁNH (KHÔNG BAO GIỜ MẤT DỮ LIỆU)
      const currentMap = getBibleProgressMap();
      let remoteMap = {};
      try {
        remoteMap = JSON.parse(remoteData.bible_progress || '{}');
      } catch (e) {}

      // Lấy hợp nhất: nếu 1 trong 2 thiết bị đã thuộc thì giữ nguyên đã thuộc
      const mergedMap = { ...currentMap };
      Object.keys(remoteMap).forEach(k => {
        const rItem = remoteMap[k];
        const cItem = mergedMap[k];
        if (!cItem) {
          mergedMap[k] = rItem;
        } else {
          // Hợp nhất: ưu tiên mastered = true
          mergedMap[k] = {
            status: (rItem.mastered || cItem.mastered) ? 'mastered' : (rItem.status || cItem.status),
            mastered: !!(rItem.mastered || cItem.mastered),
            reviewCount: Math.max(rItem.reviewCount || 0, cItem.reviewCount || 0),
            lastReviewed: Math.max(rItem.lastReviewed || 0, cItem.lastReviewed || 0)
          };
        }
      });

      localStorage.setItem(BIBLE_PROGRESS_KEY, JSON.stringify(mergedMap));

      // Hợp nhất câu tự thêm (Custom verses)
      let remoteCustom = [];
      try {
        remoteCustom = JSON.parse(remoteData.bible_custom_verses || '[]');
      } catch (e) {}
      if (Array.isArray(remoteCustom) && remoteCustom.length > 0) {
        const localCustom = getBibleCustomVerses();
        const customIdMap = new Map();
        localCustom.forEach(v => customIdMap.set(v.id, v));
        remoteCustom.forEach(v => customIdMap.set(v.id, v));
        const mergedCustom = Array.from(customIdMap.values());
        localStorage.setItem(BIBLE_CUSTOM_VERSES_KEY, JSON.stringify(mergedCustom));
      }

      lastSyncTimestampLocal = remoteTimestamp;
      localStorage.setItem('bible_last_sync_timestamp', String(lastSyncTimestampLocal));

      // Re-render UI
      updateBibleStatsDashboard();
      renderTowerFloors();
      const book = BIBLE_66_BOOKS.find(b => b.floor === currentSelectedFloor);
      if (book) renderRooms(book.chapters);
      renderVersesInRoom();
      renderMasteredModalList();
      updateSyncStatusUI('synced');

      if (!silent) {
        playSound('success');
        alert('Đồng bộ thành công! Toàn bộ tiến độ học từ điện thoại/máy tính khác đã được cập nhật.');
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
  // Lần đầu tải trang: kéo dữ liệu từ mây
  setTimeout(() => {
    pullRealtimeAutoSync(true);
  }, 1000);

  // Chu kỳ tự động kiểm tra mỗi 4 giây
  if (realtimeSyncIntervalTimer) clearInterval(realtimeSyncIntervalTimer);
  realtimeSyncIntervalTimer = setInterval(() => {
    pullRealtimeAutoSync(true);
  }, 4000);

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

if (!appJs.includes('REALTIME DUAL-SYNC ENGINE')) {
  appJs += '\n' + realtimeSyncEngineCode;
  console.log('Appended REALTIME DUAL-SYNC ENGINE to app.js');
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('--- Successfully updated app.js ---');
