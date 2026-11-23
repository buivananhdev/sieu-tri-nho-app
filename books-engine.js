// ==========================================
// THƯ VIỆN SÁCH TINH HOA (7 NỐT NHẠC) - UI ENGINE
// Quản lý hiển thị kệ sách, lọc thể loại và mổ xẻ chi tiết 4 tầng
// ==========================================

let currentBookGenre = 'all';
let currentBookSearchQuery = '';
let activeDetailBookId = null;

function initBooksLibrary() {
  renderBooksGenresBar();
  renderBooksGrid();
}

// 1. Render Genre Filter Pills
function renderBooksGenresBar() {
  const container = document.getElementById('booksGenreFilterBar');
  if (!container) return;

  container.innerHTML = BOOKS_GENRES.map(g => {
    const isActive = g.id === currentBookGenre;
    const activeClasses = isActive 
      ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold shadow-lg shadow-amber-600/30 border-amber-500' 
      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border-slate-800';

    return `
      <button onclick="selectBookGenre('${g.id}')" class="px-4 py-2 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${activeClasses}">
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
  activeDetailBookId = null; // reset detail if open
  renderBooksGenresBar();
  renderBooksGrid();
}

function handleBookSearch(query) {
  currentBookSearchQuery = (query || '').trim().toLowerCase();
  renderBooksGrid();
}

// 2. Render Book Grid (Tầng 2)
function renderBooksGrid() {
  const listScreen = document.getElementById('booksListScreen');
  const detailScreen = document.getElementById('bookDetailScreen');
  const gridContainer = document.getElementById('booksCardsGrid');
  const countBadge = document.getElementById('booksCountBadge');

  if (!listScreen || !gridContainer) return;

  // Ensure list is shown, detail is hidden
  listScreen.classList.remove('hidden');
  if (detailScreen) detailScreen.classList.add('hidden');

  let filtered = MASTER_BOOKS_DATA;
  if (currentBookGenre !== 'all') {
    filtered = filtered.filter(b => b.genreId === currentBookGenre);
  }
  if (currentBookSearchQuery) {
    filtered = filtered.filter(b => 
      b.title.toLowerCase().includes(currentBookSearchQuery) ||
      b.subTitle.toLowerCase().includes(currentBookSearchQuery) ||
      b.author.toLowerCase().includes(currentBookSearchQuery) ||
      b.bigIdea.toLowerCase().includes(currentBookSearchQuery)
    );
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Cuốn Kinh Điển`;
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center space-y-3 bg-slate-900/50 rounded-3xl border border-slate-800">
        <i data-lucide="book-x" class="w-12 h-12 text-slate-500 mx-auto"></i>
        <div class="text-sm font-semibold text-slate-300">Không tìm thấy cuốn sách nào phù hợp</div>
        <div class="text-xs text-slate-500">Hãy thử tìm với từ khóa khác hoặc chuyển sang "Tất Cả Thể Loại"</div>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  gridContainer.innerHTML = filtered.map(book => {
    return `
      <div onclick="openBookDetail('${book.id}')" class="group rounded-3xl bg-slate-900/90 border border-slate-800/90 hover:border-amber-500/50 hover:bg-slate-900 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-amber-500/10">
        <div class="space-y-4">
          <!-- Top Row: Icon + Badges -->
          <div class="flex items-start justify-between gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr ${book.color} text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
              <i data-lucide="${book.icon}" class="w-6 h-6"></i>
            </div>
            <div class="flex flex-col items-end gap-1.5">
              <span class="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <i data-lucide="sparkles" class="w-3 h-3 text-amber-400"></i> ${book.badge}
              </span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60 flex items-center gap-1">
                <i data-lucide="clock" class="w-3 h-3 text-cyan-400"></i> ${book.readingTime}
              </span>
            </div>
          </div>

          <!-- Title & Author -->
          <div>
            <div class="text-[11px] font-bold text-amber-400/90 uppercase tracking-wider mb-1">${book.genreName} • ${book.year}</div>
            <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
              ${book.title}
            </h3>
            <div class="text-xs text-slate-400 font-medium mt-0.5">${book.author} (${book.subTitle})</div>
          </div>

          <!-- Short Desc -->
          <p class="text-xs text-slate-300/90 leading-relaxed line-clamp-2">
            ${book.shortDesc}
          </p>

          <!-- The Big Idea Preview -->
          <div class="p-3 rounded-xl bg-slate-950/70 border border-amber-500/20 text-xs text-amber-200/90 italic flex items-start gap-2">
            <i data-lucide="quote" class="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5"></i>
            <span class="line-clamp-2">"${book.bigIdea}"</span>
          </div>
        </div>

        <!-- Bottom Action CTA -->
        <div class="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <span class="text-slate-400 font-medium flex items-center gap-1.5">
            <i data-lucide="music-2" class="w-3.5 h-3.5 text-yellow-400"></i> ${book.coreNotes.length} Nốt Nhạc Cốt Lõi
          </span>
          <span class="text-amber-400 font-bold group-hover:text-amber-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Mở Mổ Xẻ Sách <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </span>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

// 3. Render Book Detail (Tầng 3: Mổ Xẻ 4 Tầng)
function openBookDetail(bookId) {
  if (typeof playSound === 'function') playSound('click');
  activeDetailBookId = bookId;

  const book = MASTER_BOOKS_DATA.find(b => b.id === bookId);
  if (!book) return;

  const listScreen = document.getElementById('booksListScreen');
  const detailScreen = document.getElementById('bookDetailScreen');

  if (listScreen) listScreen.classList.add('hidden');
  if (detailScreen) {
    detailScreen.classList.remove('hidden');
    detailScreen.innerHTML = renderBookDetailHTML(book);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (window.lucide) lucide.createIcons();
}

function closeBookDetail() {
  if (typeof playSound === 'function') playSound('click');
  activeDetailBookId = null;
  const listScreen = document.getElementById('booksListScreen');
  const detailScreen = document.getElementById('bookDetailScreen');

  if (detailScreen) detailScreen.classList.add('hidden');
  if (listScreen) listScreen.classList.remove('hidden');

  if (window.lucide) lucide.createIcons();
}

function renderBookDetailHTML(book) {
  return `
    <div class="space-y-8 animate-in fade-in duration-200">
      
      <!-- Top Navigation & Return Bar -->
      <div class="flex items-center justify-between p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
        <button onclick="closeBookDetail()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-500/40 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Quay Lại Kệ Sách
        </button>
        <div class="flex items-center gap-2">
          <span class="text-xs text-slate-400 hidden sm:inline">Thời gian nạp tinh hoa:</span>
          <span class="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center gap-1.5">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${book.readingTime}
          </span>
        </div>
      </div>

      <!-- Book Hero Header -->
      <div class="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr ${book.color} text-white flex items-center justify-center text-3xl shadow-2xl flex-shrink-0">
            <i data-lucide="${book.icon}" class="w-10 h-10 sm:w-12 sm:h-12"></i>
          </div>
          <div class="space-y-2 flex-grow">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-bold">
                ${book.badge}
              </span>
              <span class="text-xs text-slate-400 font-semibold">• ${book.genreName} • Xuất bản năm ${book.year}</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">${book.title}</h1>
            <div class="text-sm sm:text-base text-amber-300/90 font-medium">Tác giả: <strong>${book.author}</strong> (${book.subTitle})</div>
            <p class="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed pt-1">
              ${book.shortDesc}
            </p>
          </div>
        </div>
      </div>

      <!-- TẦNG 1: THE BIG IDEA (Ý NIỆM TỐI THƯỢNG) -->
      <div class="rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/30 border-2 border-amber-500/50 p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div class="flex items-center gap-2 text-xs font-black text-amber-400 tracking-wider uppercase mb-2">
          <i data-lucide="crown" class="w-4 h-4"></i> TẦNG 1: Ý NIỆM TỐI THƯỢNG (THE ONE BIG IDEA)
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white leading-snug mb-4">
          "${book.bigIdea}"
        </h2>
        <div class="p-4 rounded-2xl bg-black/40 border border-amber-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed italic flex items-start gap-3">
          <i data-lucide="quote" class="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"></i>
          <div>${book.bigIdeaQuote}</div>
        </div>
      </div>

      <!-- TẦNG 2: BỘ NỐT NHẠC NGUYÊN LÝ CỐT LÕI -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
            <i data-lucide="music-2" class="w-5 h-5 text-yellow-400"></i>
            <span>TẦNG 2: BỘ ${book.coreNotes.length} NỐT NHẠC BẤT BIẾN (HỌC ĐỂ CHƠI MỌI BÀI HÁT)</span>
          </div>
          <span class="text-xs text-slate-400">Rút xương sống 300 trang</span>
        </div>

        <div class="grid grid-cols-1 gap-4">
          ${book.coreNotes.map(note => `
            <div class="rounded-2xl bg-cardBg border border-slate-800 p-5 sm:p-7 space-y-3.5 hover:border-amber-500/40 transition-all shadow-lg">
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-600 text-black font-black text-sm flex items-center justify-center shadow-md flex-shrink-0">
                    ${note.number}
                  </span>
                  <h3 class="text-base sm:text-lg font-bold text-white">${note.title}</h3>
                </div>
              </div>

              <!-- Rule Box -->
              <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm font-semibold text-amber-200">
                <strong class="text-amber-400">Quy Luật Bất Biến:</strong> ${note.rule}
              </div>

              <!-- Explanation -->
              <div class="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1">
                <strong class="text-slate-100">Bản Chất:</strong> ${note.explanation}
              </div>

              <!-- Real Example -->
              <div class="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                <i data-lucide="lightbulb" class="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"></i>
                <div><strong class="text-emerald-400">Ví Dụ Thực Tế Ngoài Đời:</strong> ${note.realExample}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TẦNG 3: THUẬT TOÁN HÀNH ĐỘNG ĐỜI THỰC (IF-THEN) -->
      <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
        <div class="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
          <i data-lucide="play-circle" class="w-5 h-5 text-emerald-400"></i>
          <span>TẦNG 3: THUẬT TOÁN HÀNH ĐỘNG ĐỜI THỰC (KHI NÀO DÙNG & DÙNG THẾ NÀO?)</span>
        </div>
        <p class="text-xs text-slate-400">Đọc sách mà không biến thành hành vi phản xạ là lãng phí thời gian. Đây là bộ kích hoạt phản xạ trong đời sống:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          ${book.actionAlgorithm.map((act, idx) => `
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
              <div class="space-y-2">
                <span class="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  TÌNH HUỐNG KÍCH HOẠT #${idx + 1}
                </span>
                <div class="text-xs font-semibold text-slate-200">
                  <i data-lucide="bell-ring" class="w-3.5 h-3.5 text-amber-400 inline mr-1"></i> ${act.trigger}
                </div>
              </div>
              <div class="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs text-emerald-300 leading-relaxed font-medium">
                <strong>Hành động:</strong> ${act.action}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TẦNG 4: MỎ NEO CUNG ĐIỆN KÝ ỨC (MEMORY PALACE ANCHOR) -->
      <div class="rounded-3xl bg-gradient-to-r from-purple-950/30 via-slate-900 to-indigo-950/30 border border-purple-500/40 p-6 sm:p-8 space-y-4 shadow-xl">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
            <i data-lucide="castle" class="w-5 h-5 text-purple-400"></i>
            <span>TẦNG 4: MỎ NEO GHI NHỚ VĨNH VIỄN (CUNG ĐIỆN KÝ ỨC)</span>
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

      <!-- Bottom Return Footer -->
      <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
        <button onclick="closeBookDetail()" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-sm border border-slate-700 hover:border-amber-500/40 flex items-center justify-center gap-2 transition-all shadow-md">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Hoàn Thành & Quay Lại Kệ Sách
        </button>
        <div class="text-xs text-slate-400 text-center sm:text-right">
          Đã hoàn thành nạp tinh hoa cuốn <strong>${book.title}</strong> trong 15-20 phút.
        </div>
      </div>

    </div>
  `;
}
