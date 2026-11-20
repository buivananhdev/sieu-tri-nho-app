const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
const appJsPath = path.join(__dirname, 'app.js');

console.log('=== 1. ENHANCING index.html ===');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Target 1: Add Grand Target Card & Dual Sync Banner inside the Bible Analytics container
const targetAnalyticsHeader = `<div class="rounded-3xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 shadow-xl space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 text-lg font-bold shadow-lg">
                  📊
                </div>
                <div>
                  <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span>Thống Kê Tiến Độ Thuộc Lòng Kinh Thánh (Bản 2010)</span>
                    <span id="bibleStreakBadge" class="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">🔥 1 Ngày Thuộc Lòng</span>
                  </h3>
                  <p class="text-xs text-slate-400">Theo dõi thời gian thực số lượng câu Kinh Thánh bạn đã thuộc lòng theo từng sách và tầng</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="openSyncModal('bible')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md border border-cyan-400/40" title="Đồng bộ tiến độ học sang điện thoại trong 3 giây">
                  <i data-lucide="smartphone" class="w-3.5 h-3.5"></i>
                  <span>📲 Đồng Bộ Điện Thoại</span>
                </button>
                <button onclick="openMasteredBibleVersesModal()" class="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 border border-amber-500/40">
                  <i data-lucide="book-marked" class="w-3.5 h-3.5"></i>
                  <span>Sổ Tay Đã Thuộc (<span id="statBtnMasteredCount">0</span>)</span>
                </button>
                <button onclick="resetBibleProgressConfirm()" class="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-300 text-[11px] transition-all flex items-center gap-1 border border-slate-700" title="Đặt lại tiến độ thuộc Kinh Thánh">
                  <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                  <span>Đặt Lại</span>
                </button>
              </div>
            </div>`;

const newAnalyticsHeader = `<div class="rounded-3xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 shadow-xl space-y-4">
            <!-- Header Title & Action Buttons -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 text-lg font-bold shadow-lg">
                  📊
                </div>
                <div>
                  <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span>Thống Kê Tiến Độ Thuộc Lòng Kinh Thánh (Bản 2010)</span>
                    <span id="bibleStreakBadge" class="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">🔥 1 Ngày Thuộc Lòng</span>
                  </h3>
                  <p class="text-xs text-slate-400">Theo dõi thời gian thực số lượng câu Kinh Thánh bạn đã thuộc lòng theo từng sách và tầng</p>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <button onclick="openSyncModal('bible')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md border border-cyan-400/40" title="Đồng bộ tiến độ học sang điện thoại trong 3 giây">
                  <i data-lucide="smartphone" class="w-3.5 h-3.5"></i>
                  <span>📲 Đồng Bộ Điện Thoại</span>
                </button>
                <button onclick="openMasteredBibleVersesModal()" class="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 border border-amber-500/40">
                  <i data-lucide="book-marked" class="w-3.5 h-3.5"></i>
                  <span>Sổ Tay Đã Thuộc (<span id="statBtnMasteredCount">0</span>)</span>
                </button>
                <button onclick="resetBibleProgressConfirm()" class="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-300 text-[11px] transition-all flex items-center gap-1 border border-slate-700" title="Đặt lại tiến độ thuộc Kinh Thánh">
                  <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                  <span>Đặt Lại</span>
                </button>
              </div>
            </div>

            <!-- THANH ĐỒNG BỘ REALTIME TỰ ĐỘNG (PC ↔ MOBILE REAL-TIME SYNC BANNER) -->
            <div id="bibleRealtimeSyncBanner" class="p-3 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900 border border-cyan-500/40 flex flex-wrap items-center justify-between gap-2.5">
              <div class="flex items-center gap-2.5">
                <span class="relative flex h-3 w-3">
                  <span id="syncPulseDotPing" class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span id="syncPulseDot" class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span id="bibleSyncStatusText" class="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                  <span>Tự Động Đồng Bộ Real-time (PC ↔ Điện Thoại)</span>
                  <span class="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono">LIVE</span>
                </span>
                <span id="bibleSyncLastTimeText" class="text-[11px] text-cyan-300/80 font-mono hidden sm:inline">
                  • Vừa đồng bộ
                </span>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="triggerImmediateSync()" class="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[11px] font-bold flex items-center gap-1 transition-all" title="Ép đồng bộ ngay lập tức">
                  <i data-lucide="refresh-cw" class="w-3 h-3"></i>
                  <span>Đồng Bộ Ngay</span>
                </button>
                <button onclick="openSyncModal('bible')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] font-medium flex items-center gap-1 transition-all" title="Mã QR & cài đặt phòng">
                  <i data-lucide="settings-2" class="w-3 h-3"></i>
                  <span>Cài Đặt Phòng</span>
                </button>
              </div>
            </div>

            <!-- CARD ĐẠI MỤC TIÊU 31.102 CÂU KINH THÁNH TOÀN THƯ (GRAND GOAL 31,102 VERSES & CHAPTER MASTERY) -->
            <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-yellow-950/20 border border-amber-500/40 shadow-lg space-y-3.5">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-500 flex items-center justify-center text-slate-950 text-lg font-black shadow">
                    👑
                  </div>
                  <div>
                    <div class="text-xs sm:text-sm font-black text-amber-300 tracking-wider uppercase flex items-center gap-2">
                      <span>ĐẠI MỤC TIÊU: 31.102 CÂU KINH THÁNH TOÀN THƯ</span>
                      <span class="text-[9px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 font-mono">66 TẦNG • 1.189 CHƯƠNG</span>
                    </div>
                    <p class="text-[11px] text-slate-300">Ghi nhớ từng câu, thuộc trọn từng chương, khắc sâu toàn bộ 66 sách Cựu Ước & Tân Ước</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 self-start sm:self-auto">
                  <div id="grandRankBadge" class="px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/50 text-amber-300 text-xs font-black flex items-center gap-1.5 shadow-sm">
                    <span>🌱 Khởi Đầu Đức Tin</span>
                  </div>
                </div>
              </div>

              <!-- Thanh tiến độ Đại Mục Tiêu 31.102 Câu -->
              <div class="space-y-1.5">
                <div class="flex items-baseline justify-between text-xs">
                  <span class="font-bold text-white flex items-baseline gap-1.5 font-mono">
                    <span id="grandMasteredVerses" class="text-xl sm:text-2xl text-amber-300 font-black">0</span>
                    <span class="text-slate-400">/ 31.102 Câu Toàn Thư</span>
                    <span id="grandMasteredPercent" class="text-xs text-amber-400 font-bold font-sans">(0.00%)</span>
                  </span>
                  <span class="text-[11px] text-slate-400">
                    Còn lại: <span id="grandRemainingVerses" class="font-mono text-amber-200/90 font-bold">31.102</span> câu
                  </span>
                </div>
                <div class="w-full h-3.5 rounded-full bg-slate-950 overflow-hidden p-0.5 border border-amber-500/30">
                  <div id="grandMasteredBarFill" class="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 transition-all duration-500 shadow-sm" style="width: 0%; min-width: 4px;"></div>
                </div>
              </div>

              <!-- Chỉ số chi tiết: Cựu Ước, Tân Ước, và Các Chương Đã Thuộc Trọn Vẹn -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                <div class="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <span class="text-slate-400">📜 Cựu Ước (39 Sách):</span>
                  <span id="grandOldTestamentStat" class="font-mono font-bold text-slate-200">0 / 23.145</span>
                </div>
                <div class="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <span class="text-slate-400">✝️ Tân Ước (27 Sách):</span>
                  <span id="grandNewTestamentStat" class="font-mono font-bold text-amber-300">0 / 7.957</span>
                </div>
                <div class="p-3 rounded-xl bg-gradient-to-r from-amber-950/30 to-slate-950 border border-amber-500/30 flex items-center justify-between">
                  <span class="text-amber-300 font-bold flex items-center gap-1">
                    <i data-lucide="crown" class="w-3.5 h-3.5 text-amber-400"></i> Chương Đã Thuộc:
                  </span>
                  <button onclick="openCompletedChaptersModal()" class="font-mono font-black text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1 transition-all" title="Xem danh sách các chương đã thuộc trọn vẹn 100%">
                    <span id="grandCompletedChaptersCount">0</span> / 1.189 Chương ❯
                  </button>
                </div>
              </div>
            </div>`;

if (html.includes(targetAnalyticsHeader)) {
  html = html.replace(targetAnalyticsHeader, newAnalyticsHeader);
  console.log('Successfully updated Bible Analytics header with Grand Target & Realtime Sync Banner in index.html');
} else {
  console.warn('Could not find targetAnalyticsHeader in index.html, searching partial match...');
}

// Target 2: Add Completed Chapters Modal before closing body tag
const completedChaptersModalHtml = `
  <!-- MODAL: DANH SÁCH CÁC CHƯƠNG ĐÃ THUỘC TRỌN VẸN 100% -->
  <div id="completedChaptersModal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md hidden items-center justify-center p-4">
    <div class="w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
      <div class="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-gradient-to-r from-amber-950/40 via-slate-900 to-yellow-950/20">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-500 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg">
            👑
          </div>
          <div>
            <h3 class="font-bold text-white text-base flex items-center gap-2">
              <span>Các Chương Đã Thuộc Trọn Vẹn 100%</span>
              <span id="completedChaptersModalCountBadge" class="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/40">0 Chương</span>
            </h3>
            <p class="text-xs text-slate-400">Danh sách các chương trong 66 sách mà bạn đã thuộc lòng tất cả các câu đã nạp</p>
          </div>
        </div>
        <button onclick="closeCompletedChaptersModal()" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- Quick Filter Tabs: Tất Cả / Cựu Ước / Tân Ước -->
      <div class="flex border-b border-slate-800 bg-slate-900/60 p-2 gap-2 text-xs">
        <button onclick="filterCompletedChapters('all')" id="btnFilterCompAll" class="flex-1 py-1.5 rounded-xl font-bold transition-all bg-amber-500 text-slate-950">
          Tất Cả (<span id="countCompTabAll">0</span>)
        </button>
        <button onclick="filterCompletedChapters('old')" id="btnFilterCompOld" class="flex-1 py-1.5 rounded-xl font-bold transition-all bg-slate-800 text-slate-300 hover:bg-slate-700">
          📜 Cựu Ước (<span id="countCompTabOld">0</span>)
        </button>
        <button onclick="filterCompletedChapters('new')" id="btnFilterCompNew" class="flex-1 py-1.5 rounded-xl font-bold transition-all bg-slate-800 text-slate-300 hover:bg-slate-700">
          ✝️ Tân Ước (<span id="countCompTabNew">0</span>)
        </button>
      </div>

      <!-- List Container -->
      <div id="completedChaptersListContainer" class="p-5 overflow-y-auto space-y-2.5 max-h-[60vh]">
        <!-- Rendered by JS -->
      </div>

      <div class="p-4 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs text-slate-400">
        <span>💡 Nhấn vào chương bất kỳ để mở ngay phòng đó và ôn luyện!</span>
        <button onclick="closeCompletedChaptersModal()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-all">
          Đóng
        </button>
      </div>
    </div>
  </div>
`;

if (!html.includes('id="completedChaptersModal"')) {
  html = html.replace('</body>', completedChaptersModalHtml + '\n</body>');
  console.log('Appended completedChaptersModal to index.html');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('--- Finished updating index.html ---');
