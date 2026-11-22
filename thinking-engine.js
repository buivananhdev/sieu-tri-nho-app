// =========================================================================
// THƯ VIỆN ĐỘNG CƠ TƯ DUY & NGHỆ THUẬT ĐẶT CÂU HỎI (THINKING ENGINE V2)
// HỖ TRỢ TRẢI NGHIỆM ĐẠI HỌC VIỆN TƯ DUY TOÀN CẦU VỚI 34 BÀI HỌC CHUYÊN SÂU
// =========================================================================

const THINKING_STORAGE_KEY = 'supermind_thinking_progress_v1';

let currentThinkingSubTab = 'curriculum'; // 'curriculum' | 'levels' | 'elevator' | 'arena'
let currentSelectedTrackId = 'all';
let currentThinkingSearchQuery = '';
let currentThinkingStatusFilter = 'all'; // 'all' | 'mastered' | 'unlearned'
let currentSelectedLevelIndex = 0; // 0 to 6 (Levels 1 to 7)
let currentSelectedElevatorCaseId = 'case_wealth';
let currentArenaScenarioIndex = 0;
let userArenaScore = 0;
let currentActiveLessonModalId = null;

function getThinkingProgress() {
  try {
    const raw = localStorage.getItem(THINKING_STORAGE_KEY);
    return raw ? JSON.parse(raw) : { masteredModels: {}, arenaAnswers: {}, score: 0 };
  } catch (e) {
    return { masteredModels: {}, arenaAnswers: {}, score: 0 };
  }
}

function saveThinkingProgress(data) {
  try {
    localStorage.setItem(THINKING_STORAGE_KEY, JSON.stringify(data));
    if (typeof dispatchRealtimeAutoSync === 'function') {
      dispatchRealtimeAutoSync();
    }
  } catch (e) {}
}

function switchThinkingSubTab(tab) {
  playSound('click');
  currentThinkingSubTab = tab;
  renderThinkingView();
}

function setThinkingTrackFilter(trackId) {
  playSound('click');
  currentSelectedTrackId = trackId;
  renderThinkingView();
}

function setThinkingStatusFilter(status) {
  playSound('click');
  currentThinkingStatusFilter = status;
  renderThinkingView();
}

function handleThinkingSearch(query) {
  currentThinkingSearchQuery = (query || '').toLowerCase().trim();
  renderThinkingView();
}

function toggleMasterLesson(lessonId) {
  playSound('click');
  const progress = getThinkingProgress();
  progress.masteredModels = progress.masteredModels || {};
  progress.masteredModels[lessonId] = !progress.masteredModels[lessonId];
  saveThinkingProgress(progress);
  renderThinkingView();
  if (currentActiveLessonModalId === lessonId) {
    openLessonDetailModal(lessonId);
  }
}

function openLessonDetailModal(lessonId) {
  playSound('click');
  currentActiveLessonModalId = lessonId;
  const lessons = window.THINKING_MASTER_LESSONS_34 || [];
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  const progress = getThinkingProgress();
  const isMastered = !!(progress.masteredModels && progress.masteredModels[lessonId]);

  let modalEl = document.getElementById('thinkingLessonModal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'thinkingLessonModal';
    modalEl.className = 'fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto';
    document.body.appendChild(modalEl);
  }

  modalEl.classList.remove('hidden');
  modalEl.innerHTML = `
    <div class="relative w-full max-w-4xl bg-slate-900 border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto text-slate-200">
      <!-- TOP ACTION BAR -->
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-full text-xs font-black bg-purple-500/20 text-purple-300 border border-purple-500/40">
            ${lesson.code}
          </span>
          <span class="text-xs font-bold text-slate-400">
            ${lesson.trackName}
          </span>
        </div>
        <button onclick="closeLessonDetailModal()" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- HEADER TITLE -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-amber-400">XUẤT XỨ HÀN LÂM CHUẨN XÁC:</span>
          <span class="text-xs text-slate-300 italic">${lesson.master}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
          <i data-lucide="${lesson.icon || 'atom'}" class="w-8 h-8 text-purple-400"></i>
          ${lesson.name}
        </h2>
        <div class="text-sm font-semibold text-purple-300 italic">${lesson.origName}</div>
        <div class="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 font-mono">
          📚 Tài liệu nguồn: ${lesson.academicSource}
        </div>
      </div>

      <!-- TIÊN ĐỀ CỐT LÕI -->
      <div class="p-5 rounded-2xl bg-gradient-to-r from-purple-950/30 to-indigo-950/30 border border-purple-500/40 space-y-2">
        <div class="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="sparkles" class="w-4 h-4 text-purple-400"></i> Tiên Đề & Chân Lý Cốt Lõi (Core Axiom)
        </div>
        <div class="text-sm sm:text-base font-semibold text-white leading-relaxed italic">
          "${lesson.axiom}"
        </div>
        <p class="text-xs text-slate-300 leading-relaxed pt-1">
          ${lesson.summary}
        </p>
      </div>

      <!-- THUẬT TOÁN 4 BƯỚC THỰC THI -->
      <div class="space-y-4">
        <div class="text-sm font-black text-white flex items-center gap-2 uppercase tracking-wide">
          <i data-lucide="cpu" class="w-4 h-4 text-cyan-400"></i> Thuật Toán Tư Duy 4 Bước Để Giải Quyết Vấn Đề:
        </div>
        <div class="grid grid-cols-1 gap-3">
          ${lesson.algorithm.map(item => `
            <div class="p-4 rounded-2xl bg-cardBg border border-slate-800 hover:border-cyan-500/40 transition-all flex items-start gap-4">
              <div class="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-black text-sm shrink-0">
                ${item.step}
              </div>
              <div class="space-y-1">
                <div class="text-sm font-bold text-white">${item.title}</div>
                <div class="text-xs text-slate-300 leading-relaxed">${item.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- BỘ CÂU HỎI QUYỀN NĂNG -->
      <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
        <div class="text-xs font-black text-amber-300 uppercase tracking-wide flex items-center gap-2">
          <i data-lucide="help-circle" class="w-4 h-4 text-amber-400"></i> Bộ Câu Hỏi Khai Phóng Não Bộ (Killer Questions):
        </div>
        <ul class="space-y-2">
          ${lesson.powerQuestions.map(q => `
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
              <i data-lucide="chevron-right" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
              <span class="font-medium">${q}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- CASE STUDY THỰC CHIẾN -->
      <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
        <div class="text-xs font-black text-emerald-300 uppercase tracking-wide flex items-center gap-2">
          <i data-lucide="award" class="w-4 h-4 text-emerald-400"></i> Case Study Thực Chiến Đỉnh Cao: ${lesson.canonicalCase.title}
        </div>
        <div class="space-y-2 text-xs leading-relaxed text-slate-300">
          <div><strong class="text-slate-100">Bối cảnh:</strong> ${lesson.canonicalCase.context}</div>
          <div><strong class="text-slate-100">Cách thực thi:</strong> ${lesson.canonicalCase.execution}</div>
          <div><strong class="text-emerald-300">Kết quả:</strong> ${lesson.canonicalCase.result}</div>
        </div>
      </div>

      <!-- CẢNH BÁO BẪY & BÀI TẬP -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-1.5">
          <div class="text-xs font-bold text-red-300 flex items-center gap-1.5">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-red-400"></i> Cạm Bẫy Trí Não Cần Tránh:
          </div>
          <div class="text-xs text-slate-300 leading-relaxed">${lesson.fatalPitfall}</div>
        </div>

        <div class="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-1.5">
          <div class="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
            <i data-lucide="zap" class="w-4 h-4 text-indigo-400"></i> Bài Tập Phản Xạ Hàng Ngày:
          </div>
          <div class="text-xs text-slate-300 leading-relaxed">${lesson.mindsetPractice}</div>
        </div>
      </div>

      <!-- FOOTER ACTIONS -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button onclick="toggleMasterLesson('${lesson.id}')" class="w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
          isMastered
            ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400'
            : 'bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-500/25'
        }">
          <i data-lucide="${isMastered ? 'check-circle-2' : 'bookmark'}" class="w-4 h-4"></i>
          <span>${isMastered ? 'ĐÃ NẮM VỮNG VÀ LÀM CHỦ (BẤM ĐỂ HỦY)' : 'ĐÁNH DẤU: TÔI ĐÃ NẮM VỮNG BÀI NÀY'}</span>
        </button>

        <button onclick="closeLessonDetailModal()" class="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs sm:text-sm transition-all">
          Đóng Lại
        </button>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function closeLessonDetailModal() {
  currentActiveLessonModalId = null;
  const modalEl = document.getElementById('thinkingLessonModal');
  if (modalEl) modalEl.classList.add('hidden');
}

function renderThinkingView() {
  const container = document.getElementById('subjectThinkingView');
  if (!container) return;

  const progress = getThinkingProgress();
  const masteredCount = Object.keys(progress.masteredModels || {}).filter(k => progress.masteredModels[k]).length;
  const allLessons = window.THINKING_MASTER_LESSONS_34 || [];
  const totalLessons = allLessons.length;
  const progressPercent = Math.round((masteredCount / Math.max(totalLessons, 1)) * 100);

  container.innerHTML = `
    <!-- HEADER HERO BANNER -->
    <div class="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-950 border border-purple-500/30 shadow-2xl space-y-5">
      <div class="absolute -right-12 -top-12 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -left-12 -bottom-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
        <div class="space-y-2 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold tracking-wide">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-purple-400"></i> ĐẠI HỌC VIỆN TƯ DUY & NGHỆ THUẬT ĐẶT CÂU HỎI QUỐC TẾ
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Khoa Học Tư Duy & Nghệ Thuật Đặt Câu Hỏi
          </h2>
          <div class="text-xs sm:text-sm font-semibold text-purple-300 uppercase tracking-widest">
            34 Chuyên Đề Hàn Lâm Chuẩn Quốc Tế • Thang 7 Cấp Độ Câu Hỏi Socratic
          </div>
          <p class="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1">
            Tổng hợp tinh hoa tư duy của nhân loại được dịch thuật chuẩn xác từ các tài liệu học thuật gốc tiếng Anh (MIT, Oxford, Stanford, các nhà khoa học Nobel). Mỗi chuyên đề được trang bị một <strong>Thuật toán tư duy 4 bước</strong> để bạn bóc tách và giải quyết bất kỳ vấn đề thực tế nào ngoài đời.
          </p>
        </div>

        <!-- PROGRESS CIRCLE / BOX -->
        <div class="p-5 rounded-2xl bg-cardBg/90 border border-purple-500/30 flex flex-col items-center justify-center space-y-2 shrink-0 min-w-[200px] text-center shadow-lg">
          <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Tiến Độ Lĩnh Hội Cá Nhân</div>
          <div class="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-400">
            ${masteredCount} / ${totalLessons}
          </div>
          <div class="text-[11px] font-semibold text-purple-300">
            Đã làm chủ ${progressPercent}% giáo trình
          </div>
          <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-1">
            <div class="bg-gradient-to-r from-purple-500 to-amber-400 h-full transition-all duration-500" style="width: ${progressPercent}%"></div>
          </div>
        </div>
      </div>

      <!-- SUB-NAVIGATION TABS (4 TABS) -->
      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none border-t border-slate-800/80 pt-4 relative z-10 text-xs font-bold">
        <button onclick="switchThinkingSubTab('curriculum')" class="px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
          currentThinkingSubTab === 'curriculum'
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/50'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }">
          <i data-lucide="book-open" class="w-4 h-4 text-purple-400"></i>
          <span>1. Bách Khoa 34 Bài Học Tư Duy (${totalLessons})</span>
        </button>

        <button onclick="switchThinkingSubTab('levels')" class="px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
          currentThinkingSubTab === 'levels'
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/50'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }">
          <i data-lucide="layers" class="w-4 h-4 text-purple-400"></i>
          <span>2. Thang 7 Cấp Độ Đặt Câu Hỏi</span>
        </button>

        <button onclick="switchThinkingSubTab('elevator')" class="px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
          currentThinkingSubTab === 'elevator'
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/50'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }">
          <i data-lucide="arrow-up-right" class="w-4 h-4 text-purple-400"></i>
          <span>3. Thang Tiến Hóa Câu Hỏi</span>
        </button>

        <button onclick="switchThinkingSubTab('arena')" class="px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
          currentThinkingSubTab === 'arena'
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/50'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }">
          <i data-lucide="swords" class="w-4 h-4 text-purple-400"></i>
          <span>4. Đấu Trường Socratic</span>
        </button>
      </div>
    </div>

    <!-- MAIN BODY BASED ON TAB -->
    <div class="pt-2">
      ${
        currentThinkingSubTab === 'curriculum'
          ? renderThinkingCurriculumTab()
          : currentThinkingSubTab === 'levels'
          ? renderThinkingLevelsTab()
          : currentThinkingSubTab === 'elevator'
          ? renderThinkingElevatorTab()
          : renderThinkingArenaTab()
      }
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }
}

// =========================================================================
// TAB 1: BÁCH KHOA 34 BÀI HỌC TƯ DUY TOÀN DIỆN
// =========================================================================
function renderThinkingCurriculumTab() {
  const tracks = window.THINKING_TRACKS_7 || [];
  const allLessons = window.THINKING_MASTER_LESSONS_34 || [];
  const progress = getThinkingProgress();
  const masteredMap = progress.masteredModels || {};

  // Lọc theo Chuyên đề (Track)
  let filtered = allLessons;
  if (currentSelectedTrackId !== 'all') {
    filtered = filtered.filter(l => l.trackId === currentSelectedTrackId);
  }

  // Lọc theo Trạng thái (Status)
  if (currentThinkingStatusFilter === 'mastered') {
    filtered = filtered.filter(l => !!masteredMap[l.id]);
  } else if (currentThinkingStatusFilter === 'unlearned') {
    filtered = filtered.filter(l => !masteredMap[l.id]);
  }

  // Lọc theo Tìm kiếm (Search)
  if (currentThinkingSearchQuery) {
    const q = currentThinkingSearchQuery;
    filtered = filtered.filter(l =>
      l.name.toLowerCase().includes(q) ||
      l.origName.toLowerCase().includes(q) ||
      l.master.toLowerCase().includes(q) ||
      l.code.toLowerCase().includes(q) ||
      (l.axiom && l.axiom.toLowerCase().includes(q))
    );
  }

  return `
    <div class="space-y-6">
      <!-- BỘ LỌC TÌM KIẾM & TRẠNG THÁI -->
      <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-5 rounded-3xl bg-cardBg border border-slate-800 shadow-xl">
        <!-- Search bar -->
        <div class="relative flex-1">
          <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
          <input
            type="text"
            placeholder="Tìm theo tên bài học, mã bài (LOGIC-01), tác giả (Descartes, Munger, Feynman)..."
            value="${currentThinkingSearchQuery}"
            oninput="handleThinkingSearch(this.value)"
            class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/60"
          />
        </div>

        <!-- Status filter buttons -->
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none text-xs font-bold shrink-0">
          <button onclick="setThinkingStatusFilter('all')" class="px-3.5 py-2 rounded-xl transition-all ${
            currentThinkingStatusFilter === 'all'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }">
            Tất Cả (${allLessons.length})
          </button>
          <button onclick="setThinkingStatusFilter('mastered')" class="px-3.5 py-2 rounded-xl transition-all ${
            currentThinkingStatusFilter === 'mastered'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-emerald-300 border border-slate-800'
          }">
            ✓ Đã Nắm Vững (${Object.keys(masteredMap).filter(k => masteredMap[k]).length})
          </button>
          <button onclick="setThinkingStatusFilter('unlearned')" class="px-3.5 py-2 rounded-xl transition-all ${
            currentThinkingStatusFilter === 'unlearned'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-amber-300 border border-slate-800'
          }">
            ○ Chưa Nạp (${allLessons.length - Object.keys(masteredMap).filter(k => masteredMap[k]).length})
          </button>
        </div>
      </div>

      <!-- DANH MỤC 7 CHUYÊN ĐỀ (TRACKS PILLS) -->
      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none pb-1 text-xs font-bold">
        ${tracks.map(t => {
          const isActive = currentSelectedTrackId === t.id;
          return `
            <button onclick="setThinkingTrackFilter('${t.id}')" class="px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
              isActive
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/25 border border-purple-400/50'
                : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
            }">
              <i data-lucide="${t.icon || 'folder'}" class="w-3.5 h-3.5 text-purple-400"></i>
              <span>${t.name}</span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- KẾT QUẢ ĐẾM -->
      <div class="flex items-center justify-between text-xs text-slate-400 px-1">
        <div>Hiển thị <strong class="text-white">${filtered.length}</strong> bài học phù hợp</div>
        <div class="text-[11px] italic">Bấm vào bất kỳ bài nào để mở toàn bộ bài giảng & thuật toán 4 bước chi tiết</div>
      </div>

      <!-- GRID CÁC BÀI HỌC -->
      ${filtered.length === 0 ? `
        <div class="py-12 text-center text-slate-500 border border-dashed border-slate-800 rounded-3xl p-8 space-y-3">
          <i data-lucide="search-x" class="w-12 h-12 text-slate-600 mx-auto"></i>
          <p class="text-sm font-semibold">Không tìm thấy bài học nào phù hợp với bộ lọc hiện tại.</p>
          <button onclick="setThinkingTrackFilter('all'); setThinkingStatusFilter('all'); handleThinkingSearch('');" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-purple-300 text-xs font-bold">
            Xóa Toàn Bộ Bộ Lọc
          </button>
        </div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          ${filtered.map(lesson => {
            const isMastered = !!masteredMap[lesson.id];
            return `
              <div class="p-6 rounded-3xl bg-cardBg border ${
                isMastered
                  ? 'border-emerald-500/50 shadow-emerald-500/10 bg-slate-900/90'
                  : 'border-slate-800 hover:border-purple-500/40'
              } shadow-xl flex flex-col justify-between space-y-5 transition-all group hover:scale-[1.01]">
                <div class="space-y-4">
                  <!-- TOP BADGE & CODE -->
                  <div class="flex items-center justify-between gap-2">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-500/20 text-purple-300 border border-purple-500/40">
                      ${lesson.code}
                    </span>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isMastered
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }">
                      ${isMastered ? '✓ ĐÃ NẮM VỮNG' : '○ CHƯA LÀM CHỦ'}
                    </span>
                  </div>

                  <!-- TITLE & MASTER -->
                  <div>
                    <h4 class="text-base font-black text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                      <i data-lucide="${lesson.icon || 'atom'}" class="w-5 h-5 text-purple-400 shrink-0"></i>
                      <span>${lesson.name}</span>
                    </h4>
                    <div class="text-[11px] font-semibold text-slate-400 italic mt-0.5">
                      ${lesson.origName}
                    </div>
                    <div class="text-[10px] text-amber-300 font-semibold mt-1 flex items-center gap-1">
                      <i data-lucide="user-check" class="w-3 h-3 text-amber-400"></i> ${lesson.master}
                    </div>
                  </div>

                  <!-- AXIOM -->
                  <div class="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 italic leading-relaxed">
                    "${lesson.axiom}"
                  </div>

                  <!-- ALGORITHM PREVIEW -->
                  <div class="space-y-1.5 text-xs text-slate-400">
                    <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                      <i data-lucide="cpu" class="w-3 h-3 text-cyan-400"></i> Thuật Toán 4 Bước Thực Thi:
                    </div>
                    <div class="space-y-1 text-[11px]">
                      ${lesson.algorithm.slice(0, 2).map(a => `
                        <div class="flex items-center gap-1.5 text-slate-300">
                          <span class="w-4 h-4 rounded bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-[9px] font-bold">${a.step}</span>
                          <span class="truncate">${a.title}</span>
                        </div>
                      `).join('')}
                      <div class="text-[10px] text-purple-400 italic pl-5">+ 2 bước tiếp theo bên trong...</div>
                    </div>
                  </div>
                </div>

                <!-- ACTIONS -->
                <div class="space-y-2 pt-2 border-t border-slate-800/80">
                  <button onclick="openLessonDetailModal('${lesson.id}')" class="w-full py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/40 text-xs font-bold transition-all flex items-center justify-center gap-1.5">
                    <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
                    <span>Mở Toàn Bộ Bài Giảng & Thuật Toán</span>
                  </button>

                  <button onclick="toggleMasterLesson('${lesson.id}')" class="w-full py-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 ${
                    isMastered
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-red-500/20 hover:text-red-300'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }">
                    <i data-lucide="${isMastered ? 'check-circle-2' : 'circle'}" class="w-3.5 h-3.5"></i>
                    <span>${isMastered ? 'Đã Nắm Vững (Bấm Để Bỏ)' : 'Đánh Dấu: Đã Nắm Vững'}</span>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

// =========================================================================
// TAB 2: THANG 7 CẤP ĐỘ CÂU HỎI
// =========================================================================
function renderThinkingLevelsTab() {
  const levels = window.THINKING_LEVELS_7 || [];
  const currentLevel = levels[currentSelectedLevelIndex] || levels[0];

  return `
    <div class="space-y-6">
      <div class="border-b border-slate-800 pb-4">
        <h3 class="text-lg font-black text-white flex items-center gap-2">
          <i data-lucide="layers" class="w-5 h-5 text-purple-400"></i>
          Thang 7 Cấp Độ Đặt Câu Hỏi (Từ Thụ Động Đến Giáo Sư Khủng)
        </h3>
        <p class="text-xs text-slate-400 mt-0.5">Chọn từng cấp độ để xem tư duy, bộ câu hỏi quyền năng và cách chuyển đổi câu hỏi thực tế.</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        ${levels.map((lvl, idx) => {
          const isSelected = idx === currentSelectedLevelIndex;
          return `
            <button onclick="selectThinkingLevel(${idx})" class="p-3 rounded-2xl border transition-all text-left flex flex-col justify-between ${
              isSelected
                ? 'bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-purple-400 shadow-lg shadow-purple-500/20'
                : 'bg-cardBg border-slate-800 hover:border-slate-700'
            }">
              <div class="flex items-center justify-between gap-1 mb-2">
                <span class="text-[10px] font-black px-2 py-0.5 rounded-full ${lvl.bgBadge}">${lvl.badge}</span>
                <i data-lucide="${lvl.icon || 'help-circle'}" class="w-4 h-4 text-slate-400"></i>
              </div>
              <div class="text-xs font-bold text-white line-clamp-1">${lvl.title.split(':')[1] || lvl.title}</div>
            </button>
          `;
        }).join('')}
      </div>

      <!-- ACTIVE LEVEL CARD DETAIL -->
      <div class="p-6 sm:p-8 rounded-3xl bg-cardBg border border-purple-500/30 shadow-2xl space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div class="space-y-1">
            <span class="text-xs font-black px-3 py-1 rounded-full ${currentLevel.bgBadge} border ${currentLevel.border}">
              ${currentLevel.badge}
            </span>
            <h3 class="text-xl sm:text-2xl font-black text-white pt-2">${currentLevel.title}</h3>
            <div class="text-xs font-semibold text-purple-300 italic">${currentLevel.subtitle}</div>
          </div>
          <div class="p-3 rounded-2xl bg-slate-900 border border-slate-800 max-w-sm text-xs text-slate-300">
            <strong class="text-amber-300">Mục tiêu cốt lõi:</strong> ${currentLevel.target}
          </div>
        </div>

        <div class="space-y-3">
          <div class="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="compass" class="w-4 h-4 text-cyan-400"></i> Tư Duy Cốt Lõi Của Cấp Độ Này:
          </div>
          <p class="text-sm text-slate-200 leading-relaxed bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80">
            ${currentLevel.coreMindset}
          </p>
        </div>

        <div class="space-y-3">
          <div class="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="help-circle" class="w-4 h-4 text-purple-400"></i> 4 Câu Hỏi Quyền Năng Đặc Trưng:
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${currentLevel.coreQuestions.map(q => `
              <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-1 hover:border-purple-500/40 transition-all">
                <div class="text-sm font-bold text-white flex items-start gap-2">
                  <i data-lucide="chevron-right" class="w-4 h-4 text-purple-400 shrink-0 mt-0.5"></i>
                  <span>"${q.q}"</span>
                </div>
                <div class="text-xs text-slate-400 pl-6">${q.note}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div class="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
            <div class="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <i data-lucide="refresh-cw" class="w-4 h-4 text-emerald-400"></i> Chuyển Đổi Câu Hỏi Trước & Sau:
            </div>
            <div class="text-xs text-slate-300 space-y-1">
              <div><strong class="text-red-400">Câu hỏi nông (Trước):</strong> "${currentLevel.beforeAfter.before}"</div>
              <div><strong class="text-emerald-400">Câu hỏi sâu (Sau):</strong> "${currentLevel.beforeAfter.after}"</div>
              <div class="text-slate-400 italic pt-1">${currentLevel.beforeAfter.explanation}</div>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
            <div class="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-400"></i> Bẫy Nhận Thức & Lời Dặn Của Đại Sư:
            </div>
            <div class="text-xs text-slate-300 space-y-1">
              <div><strong class="text-red-300">Bẫy nhận thức:</strong> ${currentLevel.trap}</div>
              <div class="italic text-purple-300 pt-1">"${currentLevel.quote}"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function selectThinkingLevel(idx) {
  playSound('click');
  currentSelectedLevelIndex = idx;
  renderThinkingView();
}

// =========================================================================
// TAB 3: THANG TIẾN HÓA CÂU HỎI
// =========================================================================
function renderThinkingElevatorTab() {
  const cases = window.THINKING_QUESTION_ELEVATOR_CASES || [];
  const currentCase = cases.find(c => c.id === currentSelectedElevatorCaseId) || cases[0];

  return `
    <div class="space-y-6">
      <div class="border-b border-slate-800 pb-4">
        <h3 class="text-lg font-black text-white flex items-center gap-2">
          <i data-lucide="arrow-up-right" class="w-5 h-5 text-purple-400"></i>
          Thang Tiến Hóa Câu Hỏi Qua 3 Tình Huống Thực Tế
        </h3>
        <p class="text-xs text-slate-400 mt-0.5">Chứng kiến một câu hỏi bình dân tiến hóa qua 7 nấc thang nhận thức để chạm tới tầng Giáo sư.</p>
      </div>

      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none pb-1">
        ${cases.map(c => `
          <button onclick="selectElevatorCase('${c.id}')" class="px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
            c.id === currentSelectedElevatorCaseId
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400'
              : 'bg-cardBg hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
          }">
            <i data-lucide="target" class="w-4 h-4 text-purple-300"></i>
            <span>${c.topic}</span>
          </button>
        `).join('')}
      </div>

      <div class="p-6 rounded-3xl bg-cardBg border border-purple-500/30 space-y-4 shadow-xl">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span class="text-xs font-bold text-purple-300 uppercase tracking-wider">Chủ Đề Thực Chiến:</span>
            <h4 class="text-xl font-black text-white">${currentCase.topic}</h4>
          </div>
          <div class="text-xs text-slate-400 italic max-w-sm text-right">
            "${currentCase.rawQuestion}" ➔ Tiến hóa qua 7 nấc thang bên dưới:
          </div>
        </div>

        <div class="space-y-3 pt-2">
          ${currentCase.levels.map(step => `
            <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center font-black text-xs">
                    ${step.level}
                  </span>
                  <span class="text-xs font-bold text-purple-300">${step.name}</span>
                </div>
                <div class="text-sm font-bold text-white pl-8">"${step.question}"</div>
              </div>
              <div class="text-xs text-slate-400 italic sm:text-right sm:max-w-xs pl-8 sm:pl-0">
                ${step.shift}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function selectElevatorCase(caseId) {
  playSound('click');
  currentSelectedElevatorCaseId = caseId;
  renderThinkingView();
}

// =========================================================================
// TAB 4: ĐẤU TRƯỜNG SOCRATIC
// =========================================================================
function renderThinkingArenaTab() {
  const scenarios = window.THINKING_PRACTICE_SCENARIOS || [];
  const currentScenario = scenarios[currentArenaScenarioIndex] || scenarios[0];
  const progress = getThinkingProgress();
  const arenaAnswers = progress.arenaAnswers || {};
  const answeredChoice = arenaAnswers[currentScenario.id];

  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h3 class="text-lg font-black text-white flex items-center gap-2">
            <i data-lucide="swords" class="w-5 h-5 text-purple-400"></i> Đấu Trường Socratic: Nâng Cấp Câu Hỏi
          </h3>
          <p class="text-xs text-slate-400 mt-0.5">Đặt mình vào tình huống thực tế và lựa chọn câu hỏi mang tầm vóc Giáo sư.</p>
        </div>
        <div class="text-xs font-bold px-3 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40">
          Tình huống ${currentArenaScenarioIndex + 1} / ${scenarios.length}
        </div>
      </div>

      <div class="p-6 sm:p-8 rounded-3xl bg-cardBg border border-purple-500/30 shadow-2xl space-y-6">
        <div class="space-y-2">
          <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Tình Huống Thử Thách:</span>
          <h4 class="text-xl font-black text-white">${currentScenario.title}</h4>
          <p class="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-2xl border border-slate-800">
            ${currentScenario.context}
          </p>
        </div>

        <div class="space-y-3">
          <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Nếu là bạn, bạn sẽ dùng câu hỏi nào để xoay chuyển hoàn toàn tình thế?
          </div>
          <div class="space-y-2.5">
            ${currentScenario.options.map(opt => {
              const isSelected = answeredChoice === opt.id;
              const hasAnswered = !!answeredChoice;
              let btnStyle = 'bg-slate-950 hover:bg-slate-900 border-slate-800 text-slate-300';
              if (hasAnswered) {
                if (opt.isBest) {
                  btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-red-950/40 border-red-500 text-red-200';
                }
              }

              return `
                <button
                  onclick="selectArenaAnswer('${currentScenario.id}', '${opt.id}')"
                  ${hasAnswered ? 'disabled' : ''}
                  class="w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${btnStyle}"
                >
                  <span class="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    ${opt.id}
                  </span>
                  <div class="space-y-1">
                    <div class="text-sm font-semibold">${opt.text}</div>
                    <div class="text-[11px] text-slate-400 italic">${opt.level}</div>
                  </div>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        ${answeredChoice ? `
          <div class="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/40 space-y-2 animate-fadeIn">
            <div class="text-xs font-bold text-purple-300 flex items-center gap-1.5 uppercase tracking-wide">
              <i data-lucide="award" class="w-4 h-4 text-amber-400"></i> Phân Tích Của Bậc Thầy Socratic:
            </div>
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
              ${currentScenario.explanation}
            </p>
          </div>
        ` : ''}

        <div class="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onclick="prevArenaScenario()"
            ${currentArenaScenarioIndex === 0 ? 'disabled' : ''}
            class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 text-xs font-bold transition-all"
          >
            ← Tình Huống Trước
          </button>

          <button
            onclick="nextArenaScenario()"
            ${currentArenaScenarioIndex === scenarios.length - 1 ? 'disabled' : ''}
            class="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-30 text-white text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>Tình Huống Tiếp Theo</span> →
          </button>
        </div>
      </div>
    </div>
  `;
}

function selectArenaAnswer(scenarioId, optionId) {
  playSound('click');
  const progress = getThinkingProgress();
  progress.arenaAnswers = progress.arenaAnswers || {};
  progress.arenaAnswers[scenarioId] = optionId;
  saveThinkingProgress(progress);
  renderThinkingView();
}

function prevArenaScenario() {
  if (currentArenaScenarioIndex > 0) {
    playSound('click');
    currentArenaScenarioIndex--;
    renderThinkingView();
  }
}

function nextArenaScenario() {
  const scenarios = window.THINKING_PRACTICE_SCENARIOS || [];
  if (currentArenaScenarioIndex < scenarios.length - 1) {
    playSound('click');
    currentArenaScenarioIndex++;
    renderThinkingView();
  }
}
