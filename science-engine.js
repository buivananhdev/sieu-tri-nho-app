// =========================================================================
// ĐẠI HỌC VIỆN KHOA HỌC TỰ NHIÊN & KHOA HỌC CHÍNH XÁC (SCIENCE ENGINE)
// HỖ TRỢ TRẢI NGHIỆM HỌC TẬP 30 TRỤ CỘT KHOA HỌC VĨ ĐẠI NHẤT NHÂN LOẠI
// =========================================================================

const SCIENCE_STORAGE_KEY = 'supermind_science_progress_v1';

let currentScienceSubTab = 'curriculum'; // 'curriculum' | 'constants' | 'thought_experiments'
let currentSelectedScienceBranchId = 'all';
let currentScienceSearchQuery = '';
let currentScienceStatusFilter = 'all'; // 'all' | 'mastered' | 'unlearned'
let currentActiveScienceModalId = null;

function getScienceProgress() {
  try {
    const raw = localStorage.getItem(SCIENCE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : { masteredLessons: {}, timestamp: Date.now() };
  } catch (e) {
    return { masteredLessons: {}, timestamp: Date.now() };
  }
}

function saveScienceProgress(data) {
  try {
    data.timestamp = Date.now();
    localStorage.setItem(SCIENCE_STORAGE_KEY, JSON.stringify(data));
    if (typeof dispatchRealtimeAutoSync === 'function') {
      dispatchRealtimeAutoSync();
    }
  } catch (e) {}
}

function switchScienceSubTab(tab) {
  playSound('click');
  currentScienceSubTab = tab;
  renderScienceView();
}

function setScienceBranchFilter(branchId) {
  playSound('click');
  currentSelectedScienceBranchId = branchId;
  renderScienceView();
}

function setScienceStatusFilter(status) {
  playSound('click');
  currentScienceStatusFilter = status;
  renderScienceView();
}

function handleScienceSearch(query) {
  currentScienceSearchQuery = (query || '').toLowerCase().trim();
  renderScienceView();
}

function toggleMasterScienceLesson(lessonId) {
  playSound('click');
  const progress = getScienceProgress();
  progress.masteredLessons = progress.masteredLessons || {};
  progress.masteredLessons[lessonId] = !progress.masteredLessons[lessonId];
  saveScienceProgress(progress);
  renderScienceView();
  if (currentActiveScienceModalId === lessonId) {
    openScienceLessonModal(lessonId);
  }
}

function openScienceLessonModal(lessonId) {
  playSound('click');
  currentActiveScienceModalId = lessonId;
  const lessons = window.SCIENCE_CANONICAL_LESSONS_30 || [];
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  const progress = getScienceProgress();
  const isMastered = !!(progress.masteredLessons && progress.masteredLessons[lessonId]);

  let modalEl = document.getElementById('scienceLessonModal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'scienceLessonModal';
    modalEl.className = 'fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto';
    document.body.appendChild(modalEl);
  }

  modalEl.classList.remove('hidden');
  modalEl.innerHTML = `
    <div class="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto text-slate-200">
      <!-- TOP ACTION BAR -->
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 rounded-full text-xs font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
            ${lesson.code}
          </span>
          <span class="text-xs font-bold text-slate-400">
            ${lesson.branchName}
          </span>
        </div>
        <button onclick="closeScienceLessonModal()" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- HEADER TITLE -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-amber-400">NHÀ KHOA HỌC TIÊN PHONG:</span>
          <span class="text-xs text-slate-300 font-medium">${lesson.pioneers}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
          <i data-lucide="${lesson.icon || 'atom'}" class="w-8 h-8 text-cyan-400"></i>
          ${lesson.title}
        </h2>
        <div class="text-sm font-semibold text-cyan-300 italic">${lesson.origTitle}</div>
      </div>

      <!-- EQUATION HERO BOX -->
      ${lesson.equation ? `
        <div class="p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 border border-cyan-500/40 text-center space-y-1 shadow-inner">
          <div class="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Phương Trình Bất Biến Của Vũ Trụ</div>
          <div class="text-xl sm:text-2xl font-mono font-black text-cyan-300 py-1 tracking-wide">
            ${lesson.equation}
          </div>
        </div>
      ` : ''}

      <!-- ĐỊNH LUẬT CỐT LÕI -->
      <div class="p-5 rounded-2xl bg-cardBg border border-slate-800 space-y-2">
        <div class="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="compass" class="w-4 h-4 text-cyan-400"></i> Định Luật & Chân Lý Cốt Lõi (Core Law)
        </div>
        <p class="text-sm text-slate-200 leading-relaxed font-medium">
          ${lesson.coreLaw}
        </p>
      </div>

      <!-- GIẢI THÍCH BẢN CHẤT CƠ CHẾ -->
      <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
        <div class="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="microscope" class="w-4 h-4 text-purple-400"></i> Giải Phẫu Cơ Chế Vận Hành Tự Nhiên:
        </div>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          ${lesson.explanation}
        </p>
      </div>

      <!-- ỨNG DỤNG VĂN MINH NHÂN LOẠI -->
      <div class="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
        <div class="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="rocket" class="w-4 h-4 text-emerald-400"></i> Đột Phá Làm Thay Đổi Nền Văn Minh Nhân Loại:
        </div>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          ${lesson.humanImpact}
        </p>
      </div>

      <!-- CUNG ĐIỆN KÝ ỨC & BÀI HỌC TƯ DUY CUỘC ĐỜI -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-1.5">
          <div class="text-xs font-bold text-amber-300 flex items-center gap-1.5">
            <i data-lucide="building-2" class="w-4 h-4 text-amber-400"></i> Mỏ Neo Siêu Trí Nhớ (Memory Anchor):
          </div>
          <div class="text-xs text-slate-300 leading-relaxed">${lesson.memoryAnchor}</div>
        </div>

        <div class="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-1.5">
          <div class="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
            <i data-lucide="sparkles" class="w-4 h-4 text-indigo-400"></i> Bài Học Khai Phóng Cho Cuộc Đời Bạn:
          </div>
          <div class="text-xs text-slate-300 leading-relaxed">${lesson.mindsetTakeaway}</div>
        </div>
      </div>

      <!-- FOOTER ACTIONS -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button onclick="toggleMasterScienceLesson('${lesson.id}')" class="w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
          isMastered
            ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400'
            : 'bg-cyan-600 text-white hover:bg-cyan-500 shadow-lg shadow-cyan-500/25'
        }">
          <i data-lucide="${isMastered ? 'check-circle-2' : 'bookmark'}" class="w-4 h-4"></i>
          <span>${isMastered ? 'ĐÃ NẮM VỮNG VÀ LÀM CHỦ (BẤM ĐỂ HỦY)' : 'ĐÁNH DẤU: TÔI ĐÃ NẮM VỮNG ĐỊNH LUẬT NÀY'}</span>
        </button>

        <button onclick="closeScienceLessonModal()" class="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs sm:text-sm transition-all">
          Đóng Lại
        </button>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function closeScienceLessonModal() {
  currentActiveScienceModalId = null;
  const modalEl = document.getElementById('scienceLessonModal');
  if (modalEl) modalEl.classList.add('hidden');
}

function renderScienceView() {
  const container = document.getElementById('subjectScienceView');
  if (!container) return;

  const progress = getScienceProgress();
  const masteredCount = Object.keys(progress.masteredLessons || {}).filter(k => progress.masteredLessons[k]).length;
  const allLessons = window.SCIENCE_CANONICAL_LESSONS_30 || [];
  const totalLessons = allLessons.length;
  const progressPercent = Math.round((masteredCount / Math.max(totalLessons, 1)) * 100);

  container.innerHTML = `
    <!-- HEADER HERO BANNER -->
    <div class="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950/40 to-slate-950 border border-teal-500/30 shadow-2xl space-y-5">
      <div class="absolute -right-12 -top-12 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -left-12 -bottom-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
        <div class="space-y-2 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-bold tracking-wide">
            <i data-lucide="atom" class="w-3.5 h-3.5 text-teal-400"></i> ĐẠI HỌC VIỆN KHOA HỌC TỰ NHIÊN & KHOA HỌC CHÍNH XÁC
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Khoa Học Tự Nhiên & Các Quy Luật Vũ Trụ
          </h2>
          <div class="text-xs sm:text-sm font-semibold text-teal-300 uppercase tracking-widest">
            6 Phân Viện Khoa Học • 30 Trụ Cột Định Luật Vĩ Đại • Hằng Số Vũ Trụ Bất Biến
          </div>
          <p class="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1">
            Tổng hợp toàn bộ các định luật, phương trình và chân lý khoa học chi phối sự vận hành của vũ trụ: từ Cơ học lượng tử, Thuyết tương đối, Bảng tuần hoàn Mendeleev, Mật mã ADN, Giải tích vi phân đến Trí tuệ nhân tạo và Vũ trụ học quy mô lớn.
          </p>
        </div>

        <!-- PROGRESS BOX -->
        <div class="p-5 rounded-2xl bg-cardBg/90 border border-teal-500/30 flex flex-col items-center justify-center space-y-2 shrink-0 min-w-[200px] text-center shadow-lg">
          <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Tiến Độ Lĩnh Hội Khoa Học</div>
          <div class="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            ${masteredCount} / ${totalLessons}
          </div>
          <div class="text-[11px] font-semibold text-teal-300">
            Đã làm chủ ${progressPercent}% định luật
          </div>
          <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-1">
            <div class="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full transition-all duration-500" style="width: ${progressPercent}%"></div>
          </div>
        </div>
      </div>

      <!-- SUB-NAVIGATION TABS (3 TABS) -->
      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none border-t border-slate-800/80 pt-4 relative z-10 text-xs font-bold">
        <button onclick="switchScienceSubTab('curriculum')" class="px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
          currentScienceSubTab === 'curriculum'
            ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/25 border border-teal-400/50'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }">
          <i data-lucide="book-open" class="w-4 h-4 text-teal-400"></i>
          <span>1. 30 Trụ Cột Khoa Học Vĩ Đại (${totalLessons})</span>
        </button>

        <button onclick="switchScienceSubTab('constants')" class="px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
          currentScienceSubTab === 'constants'
            ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/25 border border-teal-400/50'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }">
          <i data-lucide="sparkles" class="w-4 h-4 text-teal-400"></i>
          <span>2. Các Hằng Số Vũ Trụ Bất Biến</span>
        </button>

        <button onclick="switchScienceSubTab('thought_experiments')" class="px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
          currentScienceSubTab === 'thought_experiments'
            ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/25 border border-teal-400/50'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }">
          <i data-lucide="flask-conical" class="w-4 h-4 text-teal-400"></i>
          <span>3. Phòng Thí Nghiệm Tư Duy</span>
        </button>
      </div>
    </div>

    <!-- MAIN BODY BASED ON TAB -->
    <div class="pt-2">
      ${
        currentScienceSubTab === 'curriculum'
          ? renderScienceCurriculumTab()
          : currentScienceSubTab === 'constants'
          ? renderScienceConstantsTab()
          : renderScienceThoughtExperimentsTab()
      }
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }
}

// =========================================================================
// TAB 1: 30 TRỤ CỘT KHOA HỌC VĨ ĐẠI
// =========================================================================
function renderScienceCurriculumTab() {
  const branches = window.SCIENCE_BRANCHES_6 || [];
  const allLessons = window.SCIENCE_CANONICAL_LESSONS_30 || [];
  const progress = getScienceProgress();
  const masteredMap = progress.masteredLessons || {};

  // Lọc theo Phân viện (Branch)
  let filtered = allLessons;
  if (currentSelectedScienceBranchId !== 'all') {
    filtered = filtered.filter(l => l.branchId === currentSelectedScienceBranchId);
  }

  // Lọc theo Trạng thái (Status)
  if (currentScienceStatusFilter === 'mastered') {
    filtered = filtered.filter(l => !!masteredMap[l.id]);
  } else if (currentScienceStatusFilter === 'unlearned') {
    filtered = filtered.filter(l => !masteredMap[l.id]);
  }

  // Lọc theo Tìm kiếm (Search)
  if (currentScienceSearchQuery) {
    const q = currentScienceSearchQuery;
    filtered = filtered.filter(l =>
      l.title.toLowerCase().includes(q) ||
      l.origTitle.toLowerCase().includes(q) ||
      l.pioneers.toLowerCase().includes(q) ||
      l.code.toLowerCase().includes(q) ||
      (l.coreLaw && l.coreLaw.toLowerCase().includes(q)) ||
      (l.equation && l.equation.toLowerCase().includes(q))
    );
  }

  return `
    <div class="space-y-6">
      <!-- BỘ LỌC TÌM KIẾM & TRẠNG THÁI -->
      <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-5 rounded-3xl bg-cardBg border border-slate-800 shadow-xl">
        <div class="relative flex-1">
          <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
          <input
            type="text"
            placeholder="Tìm theo tên định luật, mã bài (PHYS-01), nhà khoa học (Newton, Einstein, Darwin)..."
            value="${currentScienceSearchQuery}"
            oninput="handleScienceSearch(this.value)"
            class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60"
          />
        </div>

        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none text-xs font-bold shrink-0">
          <button onclick="setScienceStatusFilter('all')" class="px-3.5 py-2 rounded-xl transition-all ${
            currentScienceStatusFilter === 'all'
              ? 'bg-teal-600 text-white shadow-md shadow-teal-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }">
            Tất Cả (${allLessons.length})
          </button>
          <button onclick="setScienceStatusFilter('mastered')" class="px-3.5 py-2 rounded-xl transition-all ${
            currentScienceStatusFilter === 'mastered'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-emerald-300 border border-slate-800'
          }">
            ✓ Đã Nắm Vững (${Object.keys(masteredMap).filter(k => masteredMap[k]).length})
          </button>
          <button onclick="setScienceStatusFilter('unlearned')" class="px-3.5 py-2 rounded-xl transition-all ${
            currentScienceStatusFilter === 'unlearned'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-amber-300 border border-slate-800'
          }">
            ○ Chưa Nạp (${allLessons.length - Object.keys(masteredMap).filter(k => masteredMap[k]).length})
          </button>
        </div>
      </div>

      <!-- DANH MỤC 6 PHÂN VIỆN KHOA HỌC (BRANCH PILLS) -->
      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none pb-1 text-xs font-bold">
        ${branches.map(b => {
          const isActive = currentSelectedScienceBranchId === b.id;
          return `
            <button onclick="setScienceBranchFilter('${b.id}')" class="px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
              isActive
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-500/25 border border-teal-400/50'
                : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
            }">
              <i data-lucide="${b.icon || 'atom'}" class="w-3.5 h-3.5 text-teal-400"></i>
              <span>${b.name}</span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- KẾT QUẢ ĐẾM -->
      <div class="flex items-center justify-between text-xs text-slate-400 px-1">
        <div>Hiển thị <strong class="text-white">${filtered.length}</strong> định luật khoa học</div>
        <div class="text-[11px] italic">Bấm vào bất kỳ định luật nào để mở bài giảng & ứng dụng văn minh chi tiết</div>
      </div>

      <!-- GRID CÁC ĐỊNH LUẬT KHOA HỌC -->
      ${filtered.length === 0 ? `
        <div class="py-12 text-center text-slate-500 border border-dashed border-slate-800 rounded-3xl p-8 space-y-3">
          <i data-lucide="search-x" class="w-12 h-12 text-slate-600 mx-auto"></i>
          <p class="text-sm font-semibold">Không tìm thấy định luật khoa học nào phù hợp với bộ lọc hiện tại.</p>
          <button onclick="setScienceBranchFilter('all'); setScienceStatusFilter('all'); handleScienceSearch('');" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-bold">
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
                  : 'border-slate-800 hover:border-teal-500/40'
              } shadow-xl flex flex-col justify-between space-y-5 transition-all group hover:scale-[1.01]">
                <div class="space-y-4">
                  <!-- TOP BADGE & CODE -->
                  <div class="flex items-center justify-between gap-2">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-teal-500/20 text-teal-300 border border-teal-500/40">
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

                  <!-- TITLE & PIONEERS -->
                  <div>
                    <h4 class="text-base font-black text-white group-hover:text-teal-300 transition-colors flex items-center gap-2">
                      <i data-lucide="${lesson.icon || 'atom'}" class="w-5 h-5 text-teal-400 shrink-0"></i>
                      <span>${lesson.title}</span>
                    </h4>
                    <div class="text-[11px] font-semibold text-slate-400 italic mt-0.5">
                      ${lesson.origTitle}
                    </div>
                    <div class="text-[10px] text-amber-300 font-semibold mt-1 flex items-center gap-1">
                      <i data-lucide="user-check" class="w-3 h-3 text-amber-400"></i> ${lesson.pioneers}
                    </div>
                  </div>

                  <!-- EQUATION IF ANY -->
                  ${lesson.equation ? `
                    <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-cyan-300 text-center truncate">
                      ${lesson.equation}
                    </div>
                  ` : ''}

                  <!-- CORE LAW PREVIEW -->
                  <div class="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed line-clamp-3">
                    ${lesson.coreLaw}
                  </div>
                </div>

                <!-- ACTIONS -->
                <div class="space-y-2 pt-2 border-t border-slate-800/80">
                  <button onclick="openScienceLessonModal('${lesson.id}')" class="w-full py-2.5 rounded-xl bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 border border-teal-500/40 text-xs font-bold transition-all flex items-center justify-center gap-1.5">
                    <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
                    <span>Khám Phá Chi Tiết & Ứng Dụng</span>
                  </button>

                  <button onclick="toggleMasterScienceLesson('${lesson.id}')" class="w-full py-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 ${
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
// TAB 2: CÁC HẰNG SỐ VŨ TRỤ BẤT BIẾN
// =========================================================================
function renderScienceConstantsTab() {
  const constants = window.SCIENCE_COSMIC_CONSTANTS || [];

  return `
    <div class="space-y-6">
      <div class="border-b border-slate-800 pb-4">
        <h3 class="text-lg font-black text-white flex items-center gap-2">
          <i data-lucide="sparkles" class="w-5 h-5 text-teal-400"></i>
          Các Hằng Số Bất Biến Giữ Cho Vũ Trụ Tồn Tại (Cosmic Constants)
        </h3>
        <p class="text-xs text-slate-400 mt-0.5">Nếu bất kỳ hằng số nào trong số này chỉ cần lệch đi 0,00001%, toàn bộ nguyên tử, các vì sao và sự sống sẽ tan rã.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${constants.map(c => `
          <div class="p-5 rounded-3xl bg-cardBg border border-slate-800 hover:border-teal-500/40 transition-all space-y-3 shadow-xl">
            <div class="flex items-center justify-between">
              <span class="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-300 flex items-center justify-center font-mono font-black text-base">
                ${c.symbol}
              </span>
              <span class="text-[10px] font-bold text-amber-300 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                HẰNG SỐ CƠ BẢN
              </span>
            </div>
            <div>
              <div class="text-sm font-bold text-white">${c.name}</div>
              <div class="text-base font-mono font-black text-cyan-300 mt-1">${c.value}</div>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-2">
              ${c.meaning}
            </p>
          </div>
        `).join('')}
      </div>

      <!-- SPECIAL FINE-TUNED UNIVERSE CALLOUT -->
      <div class="p-6 rounded-3xl bg-gradient-to-r from-purple-950/30 via-slate-900 to-teal-950/30 border border-purple-500/30 space-y-3">
        <div class="text-xs font-black text-purple-300 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="eye" class="w-4 h-4 text-purple-400"></i> Vũ Trụ Tinh Chỉnh Hoàn Hảo (The Fine-Tuned Universe)
        </div>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Nhà vật lý học đoạt giải Nobel Paul Dirac từng nhận xét: 'Dường như có một nhà toán học siêu việt đã dùng những con số này để xây dựng nên vũ trụ'. Tỷ lệ khối lượng giữa proton và electron, độ mạnh của lực hạt nhân mạnh, và mật độ năng lượng tối được tinh chỉnh chính xác đến từng phần tỷ tỷ để cho phép nước lỏng, phản ứng hóa sinh và não người xuất hiện.
        </p>
      </div>
    </div>
  `;
}

// =========================================================================
// TAB 3: PHÒNG THÍ NGHIỆM TƯ DUY KHOA HỌC
// =========================================================================
function renderScienceThoughtExperimentsTab() {
  const experiments = window.SCIENCE_THOUGHT_EXPERIMENTS || [];

  return `
    <div class="space-y-6">
      <div class="border-b border-slate-800 pb-4">
        <h3 class="text-lg font-black text-white flex items-center gap-2">
          <i data-lucide="flask-conical" class="w-5 h-5 text-teal-400"></i>
          Phòng Thí Nghiệm Tư Duy (Gedankenexperiment)
        </h3>
        <p class="text-xs text-slate-400 mt-0.5">Những cuộc cách mạng khoa học vĩ đại nhất không bắt đầu trong phòng thí nghiệm hàng triệu USD, mà bắt đầu bằng những thí nghiệm tư duy trong đầu các vĩ nhân.</p>
      </div>

      <div class="grid grid-cols-1 gap-6">
        ${experiments.map(exp => `
          <div class="p-6 sm:p-8 rounded-3xl bg-cardBg border border-slate-800 hover:border-teal-500/40 transition-all space-y-4 shadow-xl">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span class="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40">
                  THÍ NGHIỆM TƯ DUY KINH ĐIỂN
                </span>
                <h4 class="text-xl font-black text-white pt-1">${exp.title}</h4>
              </div>
              <div class="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <i data-lucide="user-check" class="w-4 h-4 text-amber-400"></i> Tác giả: ${exp.scientist}
              </div>
            </div>

            <div class="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
              <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <strong class="text-cyan-300">Bối cảnh thí nghiệm:</strong> ${exp.context}
              </div>

              <div class="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 text-red-200">
                <strong class="text-red-300">Nghịch lý nhận thức:</strong> ${exp.paradox}
              </div>

              <div class="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200">
                <strong class="text-emerald-300">Lời giải phá vỡ nhận thức:</strong> ${exp.resolution}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
