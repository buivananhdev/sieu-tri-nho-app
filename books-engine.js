// =========================================================================
// THƯ VIỆN SÁCH TINH HOA - BỘ ĐIỀU KHIỂN GIAO DIỆN CHUẨN 100% (7 NỐT NHẠC)
// Quản lý Kệ Sách, Đánh Dấu Đã Làm Chủ, Kiểm Tra Thấu Hiểu (Active Recall),
// và Tự Nạp Sách Mới Cá Nhân
// =========================================================================

const BOOKS_MASTERY_STORAGE_KEY = 'supermind_books_mastery_v1';
const CUSTOM_BOOKS_STORAGE_KEY = 'supermind_custom_books_v1';

let currentBookGenre = 'all';
let currentBookStatusFilter = 'all'; // 'all', 'mastered', 'studying', 'unread'
let currentBookSearchQuery = '';
let activeDetailBookId = null;
let isMethodologyGuideOpen = false;

// Active Recall Drill State
let currentDrillBook = null;
let currentDrillIndex = 0;
let currentDrillScore = 0;
let isDrillAnswerRevealed = false;

// --- 1. LOCAL STORAGE HELPERS ---
function getStoredBooksMastery() {
  try {
    const raw = localStorage.getItem(BOOKS_MASTERY_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveBookMastery(bookId, status, score, total) {
  try {
    const data = getStoredBooksMastery();
    data[bookId] = {
      status: status, // 'unread', 'studying', 'mastered'
      score: score || 0,
      total: total || 4,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(BOOKS_MASTERY_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save book mastery:', e);
  }
}

function getStoredCustomBooks() {
  try {
    const raw = localStorage.getItem(CUSTOM_BOOKS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCustomBookToStorage(book) {
  try {
    const books = getStoredCustomBooks();
    books.unshift(book);
    localStorage.setItem(CUSTOM_BOOKS_STORAGE_KEY, JSON.stringify(books));
  } catch (e) {
    console.error('Failed to save custom book:', e);
  }
}

function getAllBooks() {
  const master = window.MASTER_BOOKS_DATA || [];
  const custom = getStoredCustomBooks();
  return [...master, ...custom];
}

// --- 2. INITIALIZATION & NAVIGATION ---
function initBooksLibrary() {
  renderBooksGenresBar();
  renderBooksMethodologyBanner();
  renderBooksGrid();
}

function renderBooksGenresBar() {
  const container = document.getElementById('booksGenreFilterBar');
  if (!container) return;

  container.innerHTML = window.BOOKS_GENRES.map(g => {
    const isActive = g.id === currentBookGenre;
    const activeClasses = isActive 
      ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold shadow-lg shadow-amber-600/30 border-amber-500' 
      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border-slate-800';

    return `
      <button onclick="selectBookGenre('${g.id}')" class="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${activeClasses}">
        <i data-lucide="${g.icon}" class="w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}"></i>
        <span>${g.name}</span>
      </button>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function selectBookGenre(genreId) {
  if (typeof playSound === 'function') playSound('click');
  currentBookGenre = genreId;
  activeDetailBookId = null;
  renderBooksGenresBar();
  renderBooksGrid();
}

function selectBookStatusFilter(status) {
  if (typeof playSound === 'function') playSound('click');
  currentBookStatusFilter = status;
  renderBooksGrid();
}

function handleBookSearch(query) {
  currentBookSearchQuery = (query || '').trim().toLowerCase();
  renderBooksGrid();
}

function toggleMethodologyGuide() {
  if (typeof playSound === 'function') playSound('click');
  isMethodologyGuideOpen = !isMethodologyGuideOpen;
  renderBooksMethodologyBanner();
}

function renderBooksMethodologyBanner() {
  const container = document.getElementById('booksMethodologyContainer');
  if (!container) return;

  const guide = window.BOOKS_METHODOLOGY_GUIDE;
  if (!guide) return;

  if (!isMethodologyGuideOpen) {
    container.innerHTML = `
      <div onclick="toggleMethodologyGuide()" class="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 hover:border-amber-500/60 p-4 sm:p-5 flex items-center justify-between cursor-pointer transition-all shadow-md group">
        <div class="flex items-center gap-3.5">
          <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg border border-amber-500/30 group-hover:scale-105 transition-transform flex-shrink-0">
            <i data-lucide="book-open-check" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
              <span>Cẩm Nang Phương Pháp Luận "7 Nốt Nhạc" Của Các Giáo Sư Đỉnh Cao</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">Chuẩn 100%</span>
            </div>
            <div class="text-[11px] text-slate-400 mt-0.5">Dựa trên 4 công trình khoa học kinh điển: Syntopical Reading, 3-Pass Method, Zettelkasten và Thuyết Tải Nhận Thức.</div>
          </div>
        </div>
        <div class="flex items-center gap-1.5 text-xs text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
          <span>Xem Phương Pháp Luận</span>
          <i data-lucide="chevron-down" class="w-4 h-4"></i>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="rounded-3xl bg-slate-900 border-2 border-amber-500/50 p-6 sm:p-8 space-y-6 shadow-2xl relative">
        <div class="flex items-start justify-between gap-4">
          <div class="space-y-1">
            <div class="text-xs font-black tracking-wider uppercase text-amber-400 flex items-center gap-2">
              <i data-lucide="award" class="w-4 h-4"></i> CƠ SỞ KHOA HỌC CHUẨN 100%
            </div>
            <h2 class="text-lg sm:text-2xl font-black text-white">${guide.title}</h2>
            <p class="text-xs sm:text-sm text-slate-300">${guide.subtitle}</p>
          </div>
          <button onclick="toggleMethodologyGuide()" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 text-xs font-bold transition-all">
            <i data-lucide="x" class="w-4 h-4"></i> Đóng Lại
          </button>
        </div>

        <!-- 4 Scientific Pillars -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${guide.scientificBasis.map((sb, idx) => `
            <div class="p-4 rounded-2xl bg-black/40 border border-slate-800 space-y-1.5">
              <div class="flex items-center justify-between text-xs font-bold text-amber-300">
                <span>#${idx + 1}. ${sb.name}</span>
              </div>
              <div class="text-[11px] text-cyan-300 font-medium">${sb.author}</div>
              <p class="text-xs text-slate-300 leading-relaxed">${sb.summary}</p>
            </div>
          `).join('')}
        </div>

        <!-- 7 Canonical Notes Matrix -->
        <div class="space-y-3 pt-2 border-t border-slate-800">
          <div class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <i data-lucide="music-2" class="w-4 h-4 text-yellow-400"></i> BẢNG MÃ HÓA KHUÔN MẪU ĐÚNG ĐỦ 7 NỐT NHẠC CHO MỌI CUỐN SÁCH:
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${guide.the7CanonicalNotesGuide.map(n => `
              <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-black flex items-center justify-center">
                    ${n.note}
                  </span>
                  <span class="text-xs font-bold text-white">${n.name}</span>
                </div>
                <p class="text-[11px] text-slate-400 leading-relaxed">${n.role}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  if (window.lucide) lucide.createIcons();
}

// --- 3. RENDER BOOKS GRID & STATUS FILTERING ---
function renderBooksGrid() {
  const listScreen = document.getElementById('booksListScreen');
  const detailScreen = document.getElementById('bookDetailScreen');
  const drillScreen = document.getElementById('bookRecallDrillScreen');
  const gridContainer = document.getElementById('booksCardsGrid');
  const countBadge = document.getElementById('booksCountBadge');
  const statsOverviewEl = document.getElementById('booksMasteryStatsBar');

  if (!listScreen || !gridContainer) return;

  listScreen.classList.remove('hidden');
  if (detailScreen) detailScreen.classList.add('hidden');
  if (drillScreen) drillScreen.classList.add('hidden');

  const allBooks = getAllBooks();
  const masteryData = getStoredBooksMastery();

  // Calculate mastery statistics
  let masteredCount = 0;
  let studyingCount = 0;
  let unreadCount = 0;

  allBooks.forEach(b => {
    const m = masteryData[b.id];
    if (m && m.status === 'mastered') masteredCount++;
    else if (m && m.status === 'studying') studyingCount++;
    else unreadCount++;
  });

  if (statsOverviewEl) {
    statsOverviewEl.innerHTML = `
      <div class="flex flex-wrap items-center gap-2 text-xs">
        <button onclick="selectBookStatusFilter('all')" class="px-3 py-1.5 rounded-lg border font-bold transition-all ${currentBookStatusFilter === 'all' ? 'bg-amber-500 text-black border-amber-400 shadow' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}">
          Tất Cả (${allBooks.length})
        </button>
        <button onclick="selectBookStatusFilter('mastered')" class="px-3 py-1.5 rounded-lg border font-bold transition-all flex items-center gap-1 ${currentBookStatusFilter === 'mastered' ? 'bg-emerald-600 text-white border-emerald-500 shadow' : 'bg-slate-900 text-emerald-400 border-slate-800 hover:bg-slate-800'}">
          <i data-lucide="check-check" class="w-3.5 h-3.5"></i> Đã Làm Chủ (${masteredCount})
        </button>
        <button onclick="selectBookStatusFilter('studying')" class="px-3 py-1.5 rounded-lg border font-bold transition-all flex items-center gap-1 ${currentBookStatusFilter === 'studying' ? 'bg-amber-600 text-white border-amber-500 shadow' : 'bg-slate-900 text-amber-400 border-slate-800 hover:bg-slate-800'}">
          <i data-lucide="flame" class="w-3.5 h-3.5"></i> Đang Nạp (${studyingCount})
        </button>
        <button onclick="selectBookStatusFilter('unread')" class="px-3 py-1.5 rounded-lg border font-bold transition-all ${currentBookStatusFilter === 'unread' ? 'bg-slate-700 text-white border-slate-600 shadow' : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'}">
          Chưa Học (${unreadCount})
        </button>
      </div>
    `;
  }

  // Filter books by genre, status, and search query
  let filtered = allBooks;

  if (currentBookGenre !== 'all') {
    filtered = filtered.filter(b => b.genreId === currentBookGenre);
  }

  if (currentBookStatusFilter !== 'all') {
    filtered = filtered.filter(b => {
      const m = masteryData[b.id];
      const status = m ? m.status : 'unread';
      return status === currentBookStatusFilter;
    });
  }

  if (currentBookSearchQuery) {
    filtered = filtered.filter(b => 
      b.title.toLowerCase().includes(currentBookSearchQuery) ||
      (b.origTitle && b.origTitle.toLowerCase().includes(currentBookSearchQuery)) ||
      b.author.toLowerCase().includes(currentBookSearchQuery) ||
      b.axiom.toLowerCase().includes(currentBookSearchQuery)
    );
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Cuốn Kinh Điển • ${masteredCount} Đã Làm Chủ`;
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center space-y-3 bg-slate-900/50 rounded-3xl border border-slate-800">
        <i data-lucide="book-x" class="w-12 h-12 text-slate-500 mx-auto"></i>
        <div class="text-sm font-semibold text-slate-300">Không tìm thấy cuốn sách nào trong bộ lọc này</div>
        <div class="text-xs text-slate-500">Hãy chọn lại bộ lọc hoặc bấm nút "+ Thêm Sách Mới" ở trên!</div>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  gridContainer.innerHTML = filtered.map(book => {
    const mastery = masteryData[book.id];
    const status = mastery ? mastery.status : 'unread';
    const score = mastery ? mastery.score : 0;
    const total = mastery ? mastery.total : 4;

    let statusPill = '';
    if (status === 'mastered') {
      statusPill = `
        <span class="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1 shadow-sm">
          <i data-lucide="check-check" class="w-3.5 h-3.5 text-emerald-400"></i> ĐÃ LÀM CHỦ (${score}/${total})
        </span>
      `;
    } else if (status === 'studying') {
      statusPill = `
        <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
          <i data-lucide="flame" class="w-3 h-3 text-amber-400"></i> ĐANG NẠP (${score}/${total})
        </span>
      `;
    } else {
      statusPill = `
        <span class="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/80">
          CHƯA HỌC
        </span>
      `;
    }

    return `
      <div onclick="openBookDetail('${book.id}')" class="group rounded-3xl bg-slate-900/90 border border-slate-800/90 hover:border-amber-500/50 hover:bg-slate-900 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-amber-500/10">
        <div class="space-y-4">
          <!-- Top Row: Icon + Badges -->
          <div class="flex items-start justify-between gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr ${book.color || 'from-amber-600 to-yellow-600'} text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
              <i data-lucide="${book.icon || 'book-open'}" class="w-6 h-6"></i>
            </div>
            <div class="flex flex-col items-end gap-1.5">
              ${statusPill}
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60 flex items-center gap-1">
                <i data-lucide="clock" class="w-3 h-3 text-cyan-400"></i> ${book.readingTime || '15 - 20 Phút'}
              </span>
            </div>
          </div>

          <!-- Title & Author -->
          <div>
            <div class="text-[11px] font-bold text-amber-400/90 uppercase tracking-wider mb-1">${book.genreName || 'Kinh Điển'} • ${book.year || '2024'}</div>
            <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
              ${book.title}
            </h3>
            <div class="text-xs text-slate-400 font-medium mt-0.5 line-clamp-1">${book.author}</div>
          </div>

          <!-- Short Desc -->
          <p class="text-xs text-slate-300/90 leading-relaxed line-clamp-2">
            ${book.shortDesc || book.axiom}
          </p>

          <!-- Axiom Preview -->
          <div class="p-3 rounded-xl bg-slate-950/70 border border-amber-500/20 text-xs text-amber-200/90 italic flex items-start gap-2">
            <i data-lucide="quote" class="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5"></i>
            <span class="line-clamp-2">"${book.axiom}"</span>
          </div>
        </div>

        <!-- Bottom Action CTA -->
        <div class="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <span class="text-slate-400 font-medium flex items-center gap-1.5">
            <i data-lucide="music-2" class="w-3.5 h-3.5 text-yellow-400"></i> Đủ 7 Nốt Nhạc Cốt Lõi
          </span>
          <span class="text-amber-400 font-bold group-hover:text-amber-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            ${status === 'mastered' ? 'Ôn Lại Sách' : 'Mổ Xẻ Sách'} <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </span>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

// --- 4. RENDER BOOK DETAIL (BÀN MỔ XẺ 6 TẦNG) ---
function openBookDetail(bookId) {
  if (typeof playSound === 'function') playSound('click');
  activeDetailBookId = bookId;

  const allBooks = getAllBooks();
  const book = allBooks.find(b => b.id === bookId);
  if (!book) return;

  const listScreen = document.getElementById('booksListScreen');
  const detailScreen = document.getElementById('bookDetailScreen');
  const drillScreen = document.getElementById('bookRecallDrillScreen');

  if (listScreen) listScreen.classList.add('hidden');
  if (drillScreen) drillScreen.classList.add('hidden');

  if (detailScreen) {
    detailScreen.classList.remove('hidden');
    detailScreen.innerHTML = renderBookDetailHTML(book);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update status to 'studying' if previously 'unread'
  const masteryData = getStoredBooksMastery();
  if (!masteryData[bookId] || masteryData[bookId].status === 'unread') {
    saveBookMastery(bookId, 'studying', 0, 4);
  }

  if (window.lucide) lucide.createIcons();
}

function closeBookDetail() {
  if (typeof playSound === 'function') playSound('click');
  activeDetailBookId = null;
  const listScreen = document.getElementById('booksListScreen');
  const detailScreen = document.getElementById('bookDetailScreen');
  const drillScreen = document.getElementById('bookRecallDrillScreen');

  if (detailScreen) detailScreen.classList.add('hidden');
  if (drillScreen) drillScreen.classList.add('hidden');
  if (listScreen) listScreen.classList.remove('hidden');

  renderBooksGrid();
  if (window.lucide) lucide.createIcons();
}

function renderBookDetailHTML(book) {
  const masteryData = getStoredBooksMastery();
  const mastery = masteryData[book.id];
  const isMastered = mastery && mastery.status === 'mastered';

  return `
    <div class="space-y-8 animate-in fade-in duration-200">
      
      <!-- Top Action Bar -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
        <button onclick="closeBookDetail()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-500/40 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md self-start sm:self-auto">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Quay Lại Kệ Sách
        </button>

        <!-- Right Quick Action: Recall Drill Button -->
        <div class="flex flex-wrap items-center gap-3">
          ${isMastered ? `
            <span class="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-black flex items-center gap-1.5">
              <i data-lucide="check-check" class="w-4 h-4 text-emerald-400"></i> ĐÃ LÀM CHỦ (Điểm: ${mastery.score}/${mastery.total})
            </span>
          ` : ''}
          <button onclick="startBookRecallDrill('${book.id}')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all">
            <i data-lucide="brain-circuit" class="w-4 h-4"></i> Bắt Đầu Kiểm Tra Phản Xạ (4 Câu Hỏi)
          </button>
        </div>
      </div>

      <!-- Book Hero Header -->
      <div class="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr ${book.color || 'from-amber-600 to-yellow-600'} text-white flex items-center justify-center text-3xl shadow-2xl flex-shrink-0">
            <i data-lucide="${book.icon || 'book-open'}" class="w-10 h-10 sm:w-12 sm:h-12"></i>
          </div>
          <div class="space-y-2 flex-grow">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-bold">
                ${book.badge || 'Kinh Điển Khai Sáng'}
              </span>
              <span class="text-xs text-slate-400 font-semibold">• ${book.genreName || 'Chuyên Ngành'} • Năm ${book.year || '2024'}</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">${book.title}</h1>
            <div class="text-sm sm:text-base text-amber-300/90 font-medium">Tác giả: <strong>${book.author}</strong></div>
            ${book.origTitle ? `<div class="text-xs text-slate-400 italic font-mono">Tên gốc: "${book.origTitle}"</div>` : ''}
            ${book.academicSource ? `<div class="text-xs text-cyan-300/80 pt-0.5">Nguồn học thuật: ${book.academicSource}</div>` : ''}
            <p class="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed pt-1">
              ${book.shortDesc || book.axiom}
            </p>
          </div>
        </div>
      </div>

      <!-- TẦNG 1: TIÊN ĐỀ CHÂN LÝ TUYỆT ĐỐI (AXIOM) -->
      <div class="rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/30 border-2 border-amber-500/50 p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div class="flex items-center gap-2 text-xs font-black text-amber-400 tracking-wider uppercase mb-2">
          <i data-lucide="crown" class="w-4 h-4"></i> TẦNG 1: TIÊN ĐỀ CHÂN LÝ TUYỆT ĐỐI (THE ONE THING)
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white leading-snug mb-4">
          "${book.axiom}"
        </h2>
        ${book.masterQuote ? `
          <div class="p-4 rounded-2xl bg-black/50 border border-amber-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed italic flex items-start gap-3">
            <i data-lucide="quote" class="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"></i>
            <div>${book.masterQuote}</div>
          </div>
        ` : ''}
      </div>

      <!-- TẦNG 2: BỘ ĐỦ ĐÚNG 7 NỐT NHẠC BẤT BIẾN -->
      <div class="space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div class="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
            <i data-lucide="music-2" class="w-5 h-5 text-yellow-400"></i>
            <span>TẦNG 2: BỘ ĐỦ ĐÚNG 7 NỐT NHẠC BẤT BIẾN (TỪ NỐT 1 ĐẾN NỐT 7)</span>
          </div>
          <span class="text-xs px-2.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 font-mono">
            Khuôn Mẫu 7 Nốt Chuẩn Xác 100%
          </span>
        </div>

        <div class="grid grid-cols-1 gap-4">
          ${(book.the7Notes || []).map(n => `
            <div class="rounded-2xl bg-cardBg border border-slate-800 p-5 sm:p-7 space-y-3.5 hover:border-amber-500/40 transition-all shadow-lg">
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-3">
                  <span class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-600 text-black font-black text-sm flex items-center justify-center shadow-md flex-shrink-0">
                    NỐT ${n.note}
                  </span>
                  <h3 class="text-base sm:text-lg font-bold text-white">${n.title}</h3>
                </div>
              </div>

              <!-- Rule Box -->
              <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm font-semibold text-amber-200">
                <strong class="text-amber-400">Quy Luật Bất Biến:</strong> ${n.rule}
              </div>

              <!-- Explanation -->
              <div class="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1">
                <strong class="text-slate-100">Bản Chất Giải Phẫu:</strong> ${n.explanation}
              </div>

              <!-- Key Insight -->
              <div class="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                <i data-lucide="sparkles" class="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5"></i>
                <div><strong class="text-cyan-400">Điểm Đột Phá Khai Sáng:</strong> ${n.keyInsight}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TẦNG 3: THUẬT TOÁN THỰC THI 4 BƯỚC -->
      <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
            <i data-lucide="play-circle" class="w-5 h-5 text-emerald-400"></i>
            <span>TẦNG 3: THUẬT TOÁN THỰC THI 4 BƯỚC (HỌC ĐỂ LÀM NGAY)</span>
          </div>
          <span class="text-xs text-emerald-400 font-mono">Quy Trình 4 Bước</span>
        </div>
        <p class="text-xs text-slate-400">Chuyển hóa toàn bộ lý thuyết sách thành 4 bước hành động cụ thể không thể chối từ:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
          ${(book.algorithm || []).map(alg => `
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 flex flex-col justify-between">
              <div class="space-y-2">
                <span class="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  BƯỚC ${alg.step}
                </span>
                <div class="text-xs sm:text-sm font-bold text-white">
                  ${alg.title}
                </div>
              </div>
              <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                ${alg.desc}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TẦNG 4: BỘ CÂU HỎI SOCRATIC KHAI SÁNG -->
      <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
            <i data-lucide="help-circle" class="w-5 h-5 text-purple-400"></i>
            <span>TẦNG 4: BỘ CÂU HỎI SOCRATIC KHAI SÁNG (TỰ VẤN ĐỈNH CAO)</span>
          </div>
          <span class="text-xs text-purple-300 font-mono">4 Câu Hỏi Sát Thủ</span>
        </div>
        <p class="text-xs text-slate-400">Đặt đúng câu hỏi là giải quyết được 80% vấn đề. Dùng 4 câu hỏi này để tự chất vấn bản thân:</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          ${(book.powerQuestions || []).map((q, idx) => `
            <div class="p-4 rounded-2xl bg-black/40 border border-purple-500/30 space-y-2 flex items-start gap-3">
              <span class="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                ${idx + 1}
              </span>
              <div class="text-xs sm:text-sm text-purple-100 font-semibold leading-relaxed">
                "${q}"
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TẦNG 5: CASE STUDY THỰC CHIẾN THẾ GIỚI -->
      ${book.caseStudy ? `
        <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
              <i data-lucide="target" class="w-5 h-5 text-blue-400"></i>
              <span>TẦNG 5: CASE STUDY THỰC CHIẾN THẾ GIỚI (MINH CHỨNG SỰ THẬT)</span>
            </div>
            <span class="text-xs text-blue-300 font-mono">Thực Nghiệm Thực Tế</span>
          </div>

          <div class="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div class="text-sm sm:text-base font-bold text-amber-300 flex items-center gap-2">
              <i data-lucide="check-circle" class="w-5 h-5 text-emerald-400"></i> ${book.caseStudy.subject}
            </div>
            <div class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong class="text-slate-100">Bối cảnh:</strong> ${book.caseStudy.context}
            </div>
            <div class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong class="text-slate-100">Diễn biến & Kết quả:</strong> ${book.caseStudy.outcome}
            </div>
            <div class="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs sm:text-sm text-blue-200 font-semibold flex items-start gap-2">
              <i data-lucide="lightbulb" class="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5"></i>
              <div><strong class="text-blue-300">Bài Học Xương Máu:</strong> ${book.caseStudy.lesson}</div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- TẦNG 6: MỎ NEO CUNG ĐIỆN KÝ ỨC -->
      ${book.memoryPalaceAnchor ? `
        <div class="rounded-3xl bg-gradient-to-r from-purple-950/30 via-slate-900 to-indigo-950/30 border border-purple-500/40 p-6 sm:p-8 space-y-4 shadow-xl">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
              <i data-lucide="castle" class="w-5 h-5 text-purple-400"></i>
              <span>TẦNG 6: MỎ NEO GHI NHỚ VĨNH VIỄN (CUNG ĐIỆN KÝ ỨC)</span>
            </div>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-mono">Nhớ Cả Đời</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div class="p-4 rounded-2xl bg-black/40 border border-purple-500/20 space-y-2">
              <div class="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                <i data-lucide="eye" class="w-4 h-4 text-purple-400"></i> Biểu Tượng Mã Hóa: <strong>${book.memoryPalaceAnchor.symbol}</strong>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                ${book.memoryPalaceAnchor.visualDescription}
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-black/40 border border-purple-500/20 space-y-2">
              <div class="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                <i data-lucide="map-pin" class="w-4 h-4 text-indigo-400"></i> Vị Trí Đặt (Loci Room) & Cảm Giác
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                <strong>Vị trí:</strong> ${book.memoryPalaceAnchor.lociLocation}
              </p>
              <p class="text-xs text-slate-400 leading-relaxed">
                <strong>Kích hoạt giác quan:</strong> ${book.memoryPalaceAnchor.sensoryCue}
              </p>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Bottom Action CTA & Recall Trigger -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <button onclick="closeBookDetail()" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-sm border border-slate-700 hover:border-amber-500/40 flex items-center justify-center gap-2 transition-all shadow-md">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Quay Lại Kệ Sách
        </button>

        <button onclick="startBookRecallDrill('${book.id}')" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all">
          <i data-lucide="brain-circuit" class="w-5 h-5"></i> Làm Bài Kiểm Tra Thấu Hiểu (Active Recall)
        </button>
      </div>

    </div>
  `;
}

// --- 5. ACTIVE RECALL DRILL MODE (KIỂM TRA THẤU HIỂU) ---
function startBookRecallDrill(bookId) {
  if (typeof playSound === 'function') playSound('click');
  const allBooks = getAllBooks();
  const book = allBooks.find(b => b.id === bookId);
  if (!book) return;

  currentDrillBook = book;
  currentDrillIndex = 0;
  currentDrillScore = 0;
  isDrillAnswerRevealed = false;

  const detailScreen = document.getElementById('bookDetailScreen');
  const drillScreen = document.getElementById('bookRecallDrillScreen');
  const listScreen = document.getElementById('booksListScreen');

  if (listScreen) listScreen.classList.add('hidden');
  if (detailScreen) detailScreen.classList.add('hidden');
  if (drillScreen) {
    drillScreen.classList.remove('hidden');
    renderDrillCard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (window.lucide) lucide.createIcons();
}

function closeBookRecallDrill() {
  if (typeof playSound === 'function') playSound('click');
  const drillScreen = document.getElementById('bookRecallDrillScreen');
  const detailScreen = document.getElementById('bookDetailScreen');

  if (drillScreen) drillScreen.classList.add('hidden');
  if (detailScreen) detailScreen.classList.remove('hidden');

  currentDrillBook = null;
  if (window.lucide) lucide.createIcons();
}

function revealDrillAnswer() {
  if (typeof playSound === 'function') playSound('click');
  isDrillAnswerRevealed = true;
  renderDrillCard();
}

function handleDrillAnswer(isCorrect) {
  if (isCorrect) {
    currentDrillScore++;
    if (typeof playSound === 'function') playSound('correct');
  } else {
    if (typeof playSound === 'function') playSound('incorrect');
  }

  currentDrillIndex++;
  isDrillAnswerRevealed = false;
  renderDrillCard();
}

function renderDrillCard() {
  const container = document.getElementById('bookRecallDrillScreen');
  if (!container || !currentDrillBook) return;

  const cards = currentDrillBook.recallCards || [];
  const total = cards.length;

  // Finished drill!
  if (currentDrillIndex >= total) {
    const isMastered = currentDrillScore >= Math.ceil(total * 0.75);
    const status = isMastered ? 'mastered' : 'studying';

    saveBookMastery(currentDrillBook.id, status, currentDrillScore, total);

    container.innerHTML = `
      <div class="max-w-2xl mx-auto space-y-6 py-8 animate-in zoom-in-95 duration-200">
        <div class="rounded-3xl bg-slate-900 border-2 ${isMastered ? 'border-emerald-500 shadow-emerald-500/20' : 'border-amber-500 shadow-amber-500/20'} p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          
          <div class="w-20 h-20 mx-auto rounded-3xl ${isMastered ? 'bg-gradient-to-tr from-emerald-500 to-teal-600 text-white' : 'bg-gradient-to-tr from-amber-500 to-yellow-600 text-black'} flex items-center justify-center text-4xl shadow-xl">
            <i data-lucide="${isMastered ? 'award' : 'refresh-cw'}" class="w-10 h-10"></i>
          </div>

          <div class="space-y-2">
            <span class="text-xs font-black uppercase px-3 py-1 rounded-full ${isMastered ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'}">
              ${isMastered ? 'XÁC THỰC THÀNH CÔNG • ĐÃ LÀM CHỦ' : 'CẦN CỦNG CỐ THÊM'}
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white">
              ${isMastered ? 'Chúc Mừng! Bạn Đã Làm Chủ Cuốn Sách' : 'Hoàn Thành Bài Kiểm Tra'}
            </h2>
            <p class="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
              ${isMastered 
                ? `Bạn đã xuất sắc vượt qua bài kiểm tra phản xạ với kết quả <strong>${currentDrillScore}/${total} câu hỏi cốt tử</strong>. Cuốn sách đã chính thức chuyển sang trạng thái <strong>ĐÃ LÀM CHỦ</strong>!`
                : `Bạn trả lời đúng <strong>${currentDrillScore}/${total} câu</strong>. Hãy đọc lại các nốt nhạc và thử lại để khóa chặt kiến thức vào Cung Điện Trí Nhớ!`}
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-black/50 border border-slate-800 text-sm font-mono text-slate-200 flex items-center justify-around">
            <div>Điểm Đạt: <strong class="${isMastered ? 'text-emerald-400' : 'text-amber-400'} text-lg">${currentDrillScore}/${total}</strong></div>
            <div class="w-px h-8 bg-slate-800"></div>
            <div>Trạng Thái: <strong class="${isMastered ? 'text-emerald-400' : 'text-amber-400'}">${isMastered ? 'ĐÃ LÀM CHỦ ✅' : 'ĐANG NẠP ⏳'}</strong></div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button onclick="startBookRecallDrill('${currentDrillBook.id}')" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i> Làm Lại Kiểm Tra
            </button>
            <button onclick="closeBookDetail()" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg transition-all">
              <i data-lucide="check" class="w-4 h-4"></i> Hoàn Tất & Về Kệ Sách
            </button>
          </div>

        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons();
    return;
  }

  // Active question card
  const card = cards[currentDrillIndex];

  container.innerHTML = `
    <div class="max-w-3xl mx-auto space-y-6 py-6 animate-in fade-in duration-200">
      
      <!-- Top Bar -->
      <div class="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800">
        <button onclick="closeBookRecallDrill()" class="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors">
          <i data-lucide="x" class="w-4 h-4"></i> Thoát Kiểm Tra
        </button>
        <div class="flex items-center gap-2">
          <span class="text-xs text-slate-400">Câu Hỏi:</span>
          <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
            ${currentDrillIndex + 1} / ${total}
          </span>
        </div>
      </div>

      <!-- Flash Card Box -->
      <div class="rounded-3xl bg-slate-900 border-2 border-slate-800 p-6 sm:p-10 space-y-6 shadow-2xl relative">
        
        <div class="space-y-3">
          <span class="text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
            TRUY HỒI CHỦ ĐỘNG • ACTIVE RECALL
          </span>
          <h2 class="text-lg sm:text-2xl font-bold text-white leading-relaxed">
            "${card.question}"
          </h2>
          ${card.hint ? `
            <div class="text-xs text-slate-400 italic flex items-center gap-1.5">
              <i data-lucide="help-circle" class="w-3.5 h-3.5 text-cyan-400"></i> Gợi ý: ${card.hint}
            </div>
          ` : ''}
        </div>

        <!-- Hidden / Revealed Answer Section -->
        ${!isDrillAnswerRevealed ? `
          <div class="py-10 text-center space-y-4 bg-slate-950/60 rounded-2xl border border-slate-800/80 p-6">
            <p class="text-xs sm:text-sm text-slate-400">
              Hãy dừng lại 15 giây và tự trả lời câu hỏi này trong đầu hoặc nói thành tiếng!
            </p>
            <button onclick="revealDrillAnswer()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 mx-auto transition-all">
              <i data-lucide="eye" class="w-4 h-4"></i> Bấm Để Lật Mở Đáp Án Cốt Tử
            </button>
          </div>
        ` : `
          <div class="p-6 rounded-2xl bg-black/60 border-2 border-emerald-500/50 space-y-3 animate-in zoom-in-95 duration-150">
            <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <i data-lucide="check-circle" class="w-4 h-4"></i> ĐÁP ÁN CHUẨN XÁC:
            </div>
            <p class="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
              ${card.answer}
            </p>
          </div>

          <!-- Self Evaluation Buttons -->
          <div class="pt-4 border-t border-slate-800 space-y-2">
            <div class="text-center text-xs text-slate-400 font-medium mb-3">Bạn vừa tự nhớ và trả lời có đúng không?</div>
            <div class="grid grid-cols-2 gap-3">
              <button onclick="handleDrillAnswer(false)" class="py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-400 border border-rose-500/30 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all">
                <i data-lucide="x" class="w-4 h-4"></i> Chưa Nhớ Kỹ (0 Điểm)
              </button>
              <button onclick="handleDrillAnswer(true)" class="py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all">
                <i data-lucide="check" class="w-4 h-4"></i> Đã Nhớ Rõ Ràng (1 Điểm)
              </button>
            </div>
          </div>
        `}

      </div>

    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

// --- 6. ADD CUSTOM BOOK MODAL ---
function openAddCustomBookModal() {
  if (typeof playSound === 'function') playSound('click');
  const modal = document.getElementById('addCustomBookModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeAddCustomBookModal() {
  if (typeof playSound === 'function') playSound('click');
  const modal = document.getElementById('addCustomBookModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleSaveCustomBookForm(e) {
  e.preventDefault();
  if (typeof playSound === 'function') playSound('click');

  const title = document.getElementById('customBookTitle').value.trim();
  const author = document.getElementById('customBookAuthor').value.trim() || 'Tác giả';
  const year = document.getElementById('customBookYear').value.trim() || '2024';
  const genreId = document.getElementById('customBookGenre').value;
  const axiom = document.getElementById('customBookAxiom').value.trim();
  const notesText = document.getElementById('customBookNotes').value.trim();
  const actionText = document.getElementById('customBookAction').value.trim();
  const palaceText = document.getElementById('customBookPalace').value.trim();

  if (!title || !axiom) {
    alert('Vui lòng nhập Tên Sách và Tiên Đề Tối Thượng (Axiom)!');
    return;
  }

  const genreObj = window.BOOKS_GENRES.find(g => g.id === genreId) || window.BOOKS_GENRES[1];

  // Parse notes or create standard 7 notes
  const notesLines = notesText.split('\n').filter(l => l.trim().length > 0);
  const the7Notes = [];
  const defaultNoteTitles = [
    'Bối Cảnh & Vấn Đề Nhức Nhối',
    'Ý Niệm Tối Thượng Cốt Tử',
    'Cái Bẫy Nhận Thức Phổ Quát',
    'Nguyên Lý Nền Tảng Thứ Nhất',
    'Nguyên Lý Nền Tảng Thứ Hai',
    'Mô Hình Chiến Lược Toàn Diện',
    'Giới Hạn & Điểm Phản Biện'
  ];

  for (let i = 0; i < 7; i++) {
    const customLine = notesLines[i] || `Nội dung cốt lõi của nốt ${i + 1} được bóc tách từ sách.`;
    the7Notes.push({
      note: i + 1,
      title: defaultNoteTitles[i],
      rule: customLine,
      explanation: `Chi tiết nguyên lý: ${customLine}`,
      keyInsight: `Điểm đột phá của nốt ${i + 1}: Áp dụng ngay vào thực tiễn.`
    });
  }

  const newBook = {
    id: 'custom_' + Date.now(),
    title: title,
    origTitle: title,
    author: author,
    year: year,
    genreId: genreId,
    genreName: genreObj.name,
    badge: 'Sách Cá Nhân Bóc Tách',
    readingTime: '15 Phút',
    color: 'from-amber-600 via-orange-600 to-yellow-700',
    icon: 'book-open',
    academicSource: 'Tài liệu cá nhân bóc tách theo chuẩn 7 Nốt Nhạc.',
    shortDesc: `Bóc tách tinh hoa cuốn sách ${title} của tác giả ${author}.`,
    axiom: axiom,
    masterQuote: axiom,
    the7Notes: the7Notes,
    algorithm: [
      { step: 1, title: 'Bước 1: Tiếp nhận và đối chiếu', desc: actionText || 'Đọc kỹ 7 nốt nhạc và ghi nhớ bản chất.' },
      { step: 2, title: 'Bước 2: Kích hoạt tình huống đời thực', desc: 'Khi gặp bối cảnh liên quan, áp dụng ngay nguyên lý số 1.' },
      { step: 3, title: 'Bước 3: Tự vấn bằng câu hỏi Socratic', desc: 'Chất vấn bản thân để đảm bảo không bị ngộ nhận.' },
      { step: 4, title: 'Bước 4: Cố định vào Cung điện trí nhớ', desc: palaceText || 'Gắn vào phòng Loci tương ứng.' }
    ],
    powerQuestions: [
      `Cuốn sách ${title} thay đổi niềm tin cốt lõi nào của bạn?`,
      `Đâu là cái bẫy lớn nhất bạn hay mắc phải trong lĩnh vực này?`,
      `Làm thế nào để áp dụng nguyên lý của cuốn sách này vào ngày hôm nay?`,
      `Nếu có người phản bác luận điểm của cuốn sách này, bạn sẽ bảo vệ ra sao?`
    ],
    memoryPalaceAnchor: {
      symbol: palaceText ? palaceText.slice(0, 30) : 'Chiếc Chìa Khóa Vàng Tri Thức',
      visualDescription: palaceText || 'Hình dung một chiếc chìa khóa vàng phát sáng mở ra cánh cửa tri thức.',
      lociLocation: 'Đặt tại Bàn Làm Việc trong Cung Điện Ký Ức.',
      sensoryCue: 'Cảm nhận ánh sáng ấm áp và sự thông suốt trong tâm trí.'
    },
    recallCards: [
      {
        question: `Tiên đề cốt tử (Axiom) của cuốn sách ${title} là gì?`,
        hint: 'Nghĩ về câu nói lớn nhất của tác giả.',
        answer: axiom
      },
      {
        question: `Nốt 1 & 2 của cuốn sách ${title} giải quyết vấn đề gì?`,
        hint: 'Bối cảnh và ý niệm trung tâm.',
        answer: `${the7Notes[0].rule} • ${the7Notes[1].rule}`
      },
      {
        question: `Quy tắc hành động thực tế cần làm là gì?`,
        hint: 'Hành động cụ thể ngoài đời.',
        answer: actionText || 'Áp dụng nguyên tắc cốt lõi ngay khi tình huống phát sinh.'
      },
      {
        question: `Mỏ neo ghi nhớ của cuốn sách này đặt ở đâu?`,
        hint: 'Vị trí trong Cung Điện Trí Nhớ.',
        answer: palaceText || 'Đặt tại Cung Điện Trí Nhớ cá nhân của bạn.'
      }
    ]
  };

  saveCustomBookToStorage(newBook);
  closeAddCustomBookModal();
  renderBooksGrid();

  // Reset form
  document.getElementById('customBookTitle').value = '';
  document.getElementById('customBookAuthor').value = '';
  document.getElementById('customBookAxiom').value = '';
  document.getElementById('customBookNotes').value = '';
  document.getElementById('customBookAction').value = '';
  document.getElementById('customBookPalace').value = '';

  alert(`Đã thêm thành công cuốn sách "${title}" vào Thư Viện Sách 7 Nốt Nhạc của bạn!`);
}
