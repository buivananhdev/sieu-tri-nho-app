const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

console.log('=== FIXING CELEBRATION BANNER IN app.js ===');

// 1. Clean up renderMasteredModalList: remove misplaced celebrationBannerHtml
const badMasteredSection = `  let celebrationBannerHtml = '';
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

const goodMasteredSection = `  container.innerHTML = filtered.map(v => {`;

if (appJs.includes(badMasteredSection)) {
  appJs = appJs.replace(badMasteredSection, goodMasteredSection);
  console.log('Cleaned up renderMasteredModalList successfully.');
} else {
  console.warn('Could not find exact badMasteredSection, trying regex/partial');
}

// 2. Properly add celebrationBannerHtml inside renderVersesInRoom
const targetRoomFunction = `function renderVersesInRoom() {
  const container = document.getElementById('versesInRoomList');
  if (!container) return;

  const allVerses = getAllScriptureVerses();
  let filtered = allVerses.filter(v => v.bookFloor === currentSelectedFloor && v.chapter === currentSelectedRoom);

  // LUÔN LUÔN SẮP XẾP THỨ TỰ TỪ THẤP ĐẾN CAO (CÂU 1 -> CÂU 2 -> CÂU 3...)
  filtered.sort((a, b) => (Number(a.verse) || 0) - (Number(b.verse) || 0));

  // Áp dụng bộ lọc trạng thái ghi nhớ
  if (currentBibleFilterStatus === 'mastered') {
    filtered = filtered.filter(v => isBibleVerseMastered(v.id));
  } else if (currentBibleFilterStatus === 'learning') {
    filtered = filtered.filter(v => {
      const p = getBibleVerseProgress(v.id);
      return !p.mastered && (p.status === 'learning' || p.reviewCount > 0);
    });
  } else if (currentBibleFilterStatus === 'unlearned') {
    filtered = filtered.filter(v => {
      const p = getBibleVerseProgress(v.id);
      return !p.mastered && p.reviewCount === 0;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = \`
      <div class="h-full flex flex-col items-center justify-center text-center p-8 text-slate-500 border border-dashed border-slate-800 rounded-2xl">
        <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 mb-3">
          <i data-lucide="bookmark" class="w-6 h-6"></i>
        </div>
        <div class="text-sm font-semibold text-slate-300 mb-1">\${currentBibleFilterStatus !== 'all' ? 'Không có câu nào khớp với bộ lọc này ở Phòng ' + currentSelectedRoom : 'Chưa có câu nào được lưu ở Phòng ' + currentSelectedRoom}</div>
        <p class="text-xs text-slate-400 max-w-sm mb-4">Bạn có thể bấm nút bên dưới để thêm câu Kinh Thánh Bản 2010 kèm từ khóa mỏ neo vào phòng này!</p>
        <button onclick="openAddVerseForCurrentFloor()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all flex items-center gap-1.5">
          <i data-lucide="plus" class="w-4 h-4"></i> Thêm Câu Vào Phòng Này
        </button>
      </div>
    \`;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(v => {`;

const enhancedRoomFunction = `function renderVersesInRoom() {
  const container = document.getElementById('versesInRoomList');
  if (!container) return;

  const allVerses = getAllScriptureVerses();
  const roomVerses = allVerses.filter(v => v.bookFloor === currentSelectedFloor && v.chapter === currentSelectedRoom);
  const chapterStatus = getChapterStatus(currentSelectedFloor, currentSelectedRoom);
  const currentBook = BIBLE_66_BOOKS.find(b => b.floor === currentSelectedFloor);

  let filtered = [...roomVerses];

  // LUÔN LUÔN SẮP XẾP THỨ TỰ TỪ THẤP ĐẾN CAO (CÂU 1 -> CÂU 2 -> CÂU 3...)
  filtered.sort((a, b) => (Number(a.verse) || 0) - (Number(b.verse) || 0));

  // Áp dụng bộ lọc trạng thái ghi nhớ
  if (currentBibleFilterStatus === 'mastered') {
    filtered = filtered.filter(v => isBibleVerseMastered(v.id));
  } else if (currentBibleFilterStatus === 'learning') {
    filtered = filtered.filter(v => {
      const p = getBibleVerseProgress(v.id);
      return !p.mastered && (p.status === 'learning' || p.reviewCount > 0);
    });
  } else if (currentBibleFilterStatus === 'unlearned') {
    filtered = filtered.filter(v => {
      const p = getBibleVerseProgress(v.id);
      return !p.mastered && p.reviewCount === 0;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = \`
      <div class="h-full flex flex-col items-center justify-center text-center p-8 text-slate-500 border border-dashed border-slate-800 rounded-2xl">
        <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 mb-3">
          <i data-lucide="bookmark" class="w-6 h-6"></i>
        </div>
        <div class="text-sm font-semibold text-slate-300 mb-1">\${currentBibleFilterStatus !== 'all' ? 'Không có câu nào khớp với bộ lọc này ở Phòng ' + currentSelectedRoom : 'Chưa có câu nào được lưu ở Phòng ' + currentSelectedRoom}</div>
        <p class="text-xs text-slate-400 max-w-sm mb-4">Bạn có thể bấm nút bên dưới để thêm câu Kinh Thánh Bản 2010 kèm từ khóa mỏ neo vào phòng này!</p>
        <button onclick="openAddVerseForCurrentFloor()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all flex items-center gap-1.5">
          <i data-lucide="plus" class="w-4 h-4"></i> Thêm Câu Vào Phòng Này
        </button>
      </div>
    \`;
    lucide.createIcons();
    return;
  }

  let celebrationBannerHtml = '';
  if (chapterStatus.isComplete && chapterStatus.total > 0) {
    celebrationBannerHtml = \`
      <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/10 border border-amber-400/50 flex flex-wrap items-center justify-between gap-3 text-amber-200 shadow-lg animate-in fade-in duration-300 mb-3">
        <div class="flex items-center gap-3">
          <span class="text-2xl sm:text-3xl">👑</span>
          <div>
            <div class="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <span>CHƯƠNG ĐÃ THUỘC TRỌN VẸN 100%!</span>
              <span class="px-2 py-0.2 text-[9px] bg-amber-400 text-slate-950 font-black rounded-full">HOÀN TẤT</span>
            </div>
            <div class="text-[11px] sm:text-xs text-amber-200/90 font-medium mt-0.5">
              Toàn bộ \${chapterStatus.total} câu trong Phòng \${currentSelectedRoom} (\${currentBook?.name || ''}) đã được bạn ghi nhớ khắc sâu vào tâm trí!
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

if (appJs.includes(targetRoomFunction)) {
  appJs = appJs.replace(targetRoomFunction, enhancedRoomFunction);
  console.log('Injected celebration banner properly into renderVersesInRoom');
} else {
  console.warn('Could not find targetRoomFunction, searching partial...');
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('=== Finished fixing app.js ===');
