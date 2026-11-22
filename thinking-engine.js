// =========================================================================
// THƯ VIỆN ĐỘNG CƠ TƯ DUY & NGHỆ THUẬT ĐẶT CÂU HỎI (THINKING ENGINE)
// HỖ TRỢ TRẢI NGHIỆM TƯƠNG TÁC TỪ CĂN BẢN ĐẾN GIÁO SƯ KHỦNG
// =========================================================================

const THINKING_STORAGE_KEY = 'supermind_thinking_progress_v1';

let currentThinkingSubTab = 'levels'; // 'levels' | 'elevator' | 'models' | 'arena'
let currentSelectedLevelIndex = 0; // 0 to 6 (Levels 1 to 7)
let currentSelectedElevatorCaseId = 'case_wealth';
let currentArenaScenarioIndex = 0;
let userArenaScore = 0;

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

function renderThinkingView() {
  const container = document.getElementById('subjectThinkingView');
  if (!container) return;

  const progress = getThinkingProgress();
  const masteredCount = Object.keys(progress.masteredModels || {}).filter(k => progress.masteredModels[k]).length;
  const totalModels = (window.THINKING_MENTAL_MODELS_12 || []).length;
  const progressPercent = Math.round((masteredCount / Math.max(totalModels, 1)) * 100);

  container.innerHTML = `
    <!-- HEADER HERO BANNER -->
    <div class="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-950 border border-purple-500/30 shadow-2xl space-y-5">
      <div class="absolute -right-12 -top-12 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -left-12 -bottom-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
        <div class="space-y-2 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="brain-circuit" class="w-3.5 h-3.5"></i> Đại Học Viện Tư Duy Cấp Cao
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <span>Tư Duy & Nghệ Thuật Đặt Câu Hỏi</span>
            <span class="text-xs px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black shadow-md">TỪ CĂN BẢN ➔ GIÁO SƯ KHỦNG</span>
          </h2>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            "Chất lượng cuộc sống của bạn được quyết định bởi chất lượng những CÂU HỎI bạn tự đặt ra cho chính mình." — Khám phá Thang 7 cấp độ câu hỏi, làm chủ 12 mô hình tư duy kinh điển và rèn luyện tại Đấu trường phản biện thực chiến.
          </p>
        </div>

        <!-- Progress Widget -->
        <div class="p-4 rounded-2xl bg-slate-950/70 border border-purple-500/30 flex flex-col gap-2 min-w-[220px]">
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-400 font-medium">Mô Hình Đã Làm Chủ:</span>
            <span class="font-mono font-black text-amber-300">${masteredCount}/${totalModels}</span>
          </div>
          <div class="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
          </div>
          <div class="flex items-center justify-between text-[11px] text-slate-400">
            <span>Thành thạo: <strong class="text-white">${progressPercent}%</strong></span>
            <span class="text-purple-300 font-semibold">${progressPercent >= 100 ? '🏆 Bậc Thầy Tư Duy' : '🌱 Đang Tôi Luyện'}</span>
          </div>
        </div>
      </div>

      <!-- NAVIGATION SUB-TABS -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-slate-800/80 pt-4 relative z-10 text-xs font-bold">
        <button onclick="switchThinkingSubTab('levels')" class="px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
          currentThinkingSubTab === 'levels'
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/50'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }">
          <i data-lucide="layers" class="w-4 h-4 text-purple-400"></i>
          <span>1. Thang 7 Cấp Độ Đặt Câu Hỏi</span>
        </button>

        <button onclick="switchThinkingSubTab('elevator')" class="px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
          currentThinkingSubTab === 'elevator'
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/50'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }">
          <i data-lucide="sparkles" class="w-4 h-4 text-amber-400"></i>
          <span>2. Đấu Trường Nâng Cấp Câu Hỏi</span>
        </button>

        <button onclick="switchThinkingSubTab('models')" class="px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
          currentThinkingSubTab === 'models'
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/50'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }">
          <i data-lucide="brain" class="w-4 h-4 text-cyan-400"></i>
          <span>3. Kho 12 Mô Hình Tư Duy Kinh Điển</span>
          <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/40 text-amber-300 font-mono">${masteredCount}/${totalModels}</span>
        </button>

        <button onclick="switchThinkingSubTab('arena')" class="px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
          currentThinkingSubTab === 'arena'
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/50'
            : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
        }">
          <i data-lucide="swords" class="w-4 h-4 text-emerald-400"></i>
          <span>4. Thử Thách Vấn Đáp Phản Biện</span>
        </button>
      </div>
    </div>

    <!-- DYNAMIC SUB-VIEW CONTAINER -->
    <div id="thinkingSubViewContent" class="space-y-6">
      ${renderThinkingSubViewContent()}
    </div>
  `;

  lucide.createIcons();
}

function renderThinkingSubViewContent() {
  if (currentThinkingSubTab === 'levels') {
    return renderThinkingLevelsTab();
  } else if (currentThinkingSubTab === 'elevator') {
    return renderThinkingElevatorTab();
  } else if (currentThinkingSubTab === 'models') {
    return renderThinkingModelsTab();
  } else if (currentThinkingSubTab === 'arena') {
    return renderThinkingArenaTab();
  }
  return '';
}

// =========================================================================
// TAB 1: THANG 7 CẤP ĐỘ ĐẶT CÂU HỎI
// =========================================================================
function renderThinkingLevelsTab() {
  const levels = window.THINKING_LEVELS_7 || [];
  const current = levels[currentSelectedLevelIndex] || levels[0];

  return `
    <div class="space-y-6">
      <!-- LEVEL SELECTION STRIP -->
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        ${levels.map((lvl, idx) => {
          const isSelected = idx === currentSelectedLevelIndex;
          const isMonster = lvl.level === 7;
          return `
            <button onclick="selectThinkingLevel(${idx})" class="p-3 rounded-2xl flex flex-col items-center justify-between gap-1.5 text-center transition-all ${
              isSelected
                ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-2 ' + (isMonster ? 'border-amber-400 shadow-amber-500/30' : 'border-purple-500 shadow-purple-500/30') + ' shadow-lg scale-105'
                : 'bg-cardBg/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700'
            }">
              <div class="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black ${
                isMonster ? 'bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 shadow' : 'bg-slate-800 text-purple-300'
              }">
                ${isMonster ? '👑' : lvl.level}
              </div>
              <div class="text-[11px] font-bold ${isSelected ? (isMonster ? 'text-amber-300' : 'text-purple-300') : 'text-slate-300'} line-clamp-1">
                L.${lvl.level}: ${lvl.title.split(':')[1] || lvl.title}
              </div>
              <span class="text-[9px] px-1.5 py-0.2 rounded-md ${lvl.bgBadge} font-mono font-semibold">
                ${lvl.badge.split('•')[1] || lvl.badge}
              </span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- ACTIVE LEVEL HERO CARD -->
      <div class="p-6 sm:p-8 rounded-3xl bg-cardBg border ${current.border} shadow-2xl space-y-6">
        <!-- Title & Badge -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr ${current.color} flex items-center justify-center text-white text-2xl font-black shadow-lg">
              <i data-lucide="${current.icon}"></i>
            </div>
            <div>
              <div class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <span>${current.subtitle}</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full ${current.bgBadge}">${current.badge}</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-0.5">${current.title}</h3>
            </div>
          </div>
        </div>

        <!-- Target & Mindset -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
            <div class="text-xs font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
              <i data-lucide="crosshair" class="w-3.5 h-3.5"></i> Mục Tiêu Cốt Lõi
            </div>
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${current.target}</p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
            <div class="text-xs font-bold text-cyan-300 flex items-center gap-1.5 uppercase tracking-wide">
              <i data-lucide="lightbulb" class="w-3.5 h-3.5"></i> Triết Lý Tư Duy (Core Mindset)
            </div>
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${current.coreMindset}</p>
          </div>
        </div>

        <!-- POWER QUESTIONS TOOLKIT -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-black text-purple-300 flex items-center gap-2 uppercase tracking-wide">
              <i data-lucide="help-circle" class="w-4 h-4 text-purple-400"></i> Bộ Câu Hỏi Quyền Lực (Power Questions Toolkit)
            </h4>
            <span class="text-[11px] text-slate-400">Bấm để sao chép</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${current.coreQuestions.map((item, qIdx) => `
              <div onclick="copyQuestionToClipboard('${item.q.replace(/'/g, "\\'")}')" class="p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-purple-500/40 transition-all cursor-pointer group flex flex-col justify-between space-y-2">
                <div class="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors flex items-start gap-2">
                  <span class="text-purple-400 font-mono font-bold">#${qIdx + 1}</span>
                  <span>"${item.q}"</span>
                </div>
                <div class="text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/60 pt-2">
                  <span class="italic">💡 ${item.note}</span>
                  <i data-lucide="copy" class="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400"></i>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- BEFORE & AFTER TRANSFORMATION -->
        <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 space-y-3">
          <div class="text-xs font-black text-slate-300 uppercase tracking-wide flex items-center gap-2">
            <i data-lucide="arrow-right-left" class="w-4 h-4 text-amber-400"></i> Minh Họa Chuyển Hóa (Before ➔ After)
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 space-y-1">
              <div class="text-[11px] font-bold text-rose-400 flex items-center gap-1.5">
                <i data-lucide="x-circle" class="w-3.5 h-3.5"></i> Câu Hỏi Tầm Thường / Bề Mặt:
              </div>
              <p class="text-slate-200 italic">"${current.beforeAfter.weak}"</p>
            </div>

            <div class="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
              <div class="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Nâng Cấp Lên Cấp Độ Này:
              </div>
              <p class="text-slate-100 font-medium">"${current.beforeAfter.elevated}"</p>
            </div>
          </div>
        </div>

        <!-- COGNITIVE TRAP & MASTER QUOTE -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
          <div class="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-2.5">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-amber-300 block mb-0.5">Bẫy Nhận Thức Cần Tránh:</strong>
              <span class="text-slate-300 leading-relaxed">${current.cognitiveTrap}</span>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 flex items-start gap-2.5">
            <i data-lucide="quote" class="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-purple-300 block mb-0.5">Lời Vàng Đại Trí Tuệ:</strong>
              <span class="text-slate-300 italic leading-relaxed">${current.masterQuote}</span>
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

function copyQuestionToClipboard(q) {
  navigator.clipboard.writeText(q).then(() => {
    playSound('success');
    alert('Đã sao chép câu hỏi vào bộ nhớ tạm: \n\n"' + q + '"');
  }).catch(() => {});
}

// =========================================================================
// TAB 2: ĐẤU TRƯỜNG NÂNG CẤP CÂU HỎI (THE QUESTION ELEVATOR)
// =========================================================================
function renderThinkingElevatorTab() {
  const cases = window.THINKING_QUESTION_ELEVATOR_CASES || [];
  const activeCase = cases.find(c => c.id === currentSelectedElevatorCaseId) || cases[0];

  return `
    <div class="space-y-6">
      <!-- INTRO CARD -->
      <div class="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 to-slate-900 border border-purple-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 class="text-base font-black text-white flex items-center gap-2">
            <i data-lucide="sparkles" class="w-5 h-5 text-amber-400"></i> Đấu Trường Nâng Cấp Câu Hỏi (The Question Elevator)
          </h3>
          <p class="text-xs text-slate-300 mt-1 max-w-2xl">
            Nhìn thấy tận mắt một câu hỏi ngây ngô được "phù phép" từng nấc thang tư duy để tiến hóa thành câu hỏi của những bộ óc vĩ đại nhất nhân loại.
          </p>
        </div>

        <!-- Case Switchers -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          ${cases.map(c => `
            <button onclick="selectElevatorCase('${c.id}')" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              c.id === activeCase.id
                ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }">
              ${c.topic}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- CUSTOM QUESTION LAB -->
      <div class="p-5 rounded-2xl bg-cardBg border border-slate-800 space-y-3">
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center justify-between">
          <span>⚡ Nhập Câu Hỏi Bất Kỳ Của Bạn Để Phân Tích:</span>
          <span class="text-slate-500 font-normal lowercase">thử nghiệm tương tác</span>
        </label>
        <div class="flex flex-col sm:flex-row gap-2.5">
          <input type="text" id="customUserQuestionInput" placeholder="Ví dụ: Làm sao để tìm được công việc lương cao? / Làm sao kinh doanh online không phá sản?..." class="flex-grow bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 shadow-inner">
          <button onclick="elevateCustomUserQuestion()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:brightness-110 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all">
            <i data-lucide="zap" class="w-4 h-4"></i> Nâng Cấp Ngay
          </button>
        </div>
      </div>

      <!-- EVOLUTION STAIRCASE -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <div class="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
            <i data-lucide="trending-up" class="w-4 h-4"></i> Tiến Hóa Qua 7 Nấc Thang: "${activeCase.originalQuestion}"
          </div>
          <span class="text-[11px] text-slate-400 font-mono">7 Tầng Tư Duy</span>
        </div>

        <div class="space-y-3">
          ${activeCase.levels.map((lvlItem, idx) => {
            const isMonster = lvlItem.level === 7;
            return `
              <div class="p-4 sm:p-5 rounded-2xl transition-all ${
                isMonster
                  ? 'bg-gradient-to-r from-slate-950 via-purple-950/40 to-slate-950 border-2 border-amber-400/60 shadow-xl shadow-amber-500/10'
                  : 'bg-cardBg border border-slate-800 hover:border-slate-700'
              } space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black ${
                      isMonster ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-purple-400'
                    }">
                      ${isMonster ? '👑' : lvlItem.level}
                    </span>
                    <strong class="text-xs font-black ${isMonster ? 'text-amber-300 text-sm' : 'text-slate-300'}">
                      ${lvlItem.title}
                    </strong>
                  </div>
                  <span class="text-[10px] px-2 py-0.5 rounded-full ${
                    isMonster ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 font-black' : 'bg-slate-800 text-slate-400 font-mono'
                  }">
                    ${isMonster ? 'ĐỈNH CAO KHAI PHÁ' : 'Tầng ' + lvlItem.level}
                  </span>
                </div>

                <p class="text-xs sm:text-sm ${isMonster ? 'text-white font-semibold' : 'text-slate-200'} pl-8 leading-relaxed">
                  "${lvlItem.q}"
                </p>
              </div>
            `;
          }).join('')}
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

function elevateCustomUserQuestion() {
  const input = document.getElementById('customUserQuestionInput');
  const q = (input ? input.value : '').trim();
  if (!q) {
    alert('Vui lòng nhập câu hỏi bạn muốn nâng cấp!');
    return;
  }

  playSound('success');
  alert(`⚡ PHÂN TÍCH NÂNG CẤP CÂU HỎI CỦA BẠN: \n"${q}"\n\n` +
    `1. Căn Bản (Factual): Xác định rõ sự thật, con số đo lường cụ thể của vấn đề.\n` +
    `2. Cơ Chế (Mechanism): Áp dụng 5 Whys - Tìm nguyên nhân gốc rễ đằng sau.\n` +
    `3. Nguyên Lý Đầu Tiên (First Principles): Tước bỏ thói quen xã hội, phân rã về bản chất vật lý tối thiểu.\n` +
    `4. Nghịch Đảo Munger (Inversion): Làm thế nào để điều này thất bại thảm hại nhất, rồi né tránh triệt để?\n` +
    `5. Hệ Thống (Second-Order): Và rồi sau đó thì sao? Hậu quả sau 3 năm là gì?\n` +
    `👑 Cấp Độ Giáo Sư Khủng: Liệu chúng ta có đang hùng hục giải đúng đáp án cho một CÂU HỎI SAI không? Bản chất thực tại sâu nhất ở đây là gì?`
  );
}

// =========================================================================
// TAB 3: KHO 12 MÔ HÌNH TƯ DUY KINH ĐIỂN (MENTAL MODELS)
// =========================================================================
function renderThinkingModelsTab() {
  const models = window.THINKING_MENTAL_MODELS_12 || [];
  const progress = getThinkingProgress();
  const masteredMap = progress.masteredModels || {};

  return `
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <h3 class="text-lg font-black text-white flex items-center gap-2">
            <i data-lucide="brain" class="w-5 h-5 text-purple-400"></i> Kho 12 Mô Hình Tư Duy Kinh Điển Của Các Bậc Thầy
          </h3>
          <p class="text-xs text-slate-400 mt-0.5">Bấm nút "Đã Nắm Vững" trên từng mô hình để lưu vào hồ sơ trí tuệ cá nhân (tự động đồng bộ Cloudflare).</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${models.map(m => {
          const isMastered = !!masteredMap[m.id];
          return `
            <div class="p-5 rounded-3xl bg-cardBg border ${isMastered ? 'border-amber-400/50 shadow-amber-500/10' : 'border-slate-800 hover:border-slate-700'} shadow-xl flex flex-col justify-between space-y-4 transition-all">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr ${m.color} flex items-center justify-center text-white shadow-md">
                    <i data-lucide="${m.icon}"></i>
                  </div>
                  <span class="text-[10px] px-2 py-0.5 rounded-full ${isMastered ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold' : 'bg-slate-800 text-slate-400'} font-mono">
                    ${isMastered ? '👑 ĐÃ NẮM VỮNG' : m.badge}
                  </span>
                </div>

                <div>
                  <h4 class="text-base font-black text-white">${m.name}</h4>
                  <div class="text-[11px] text-slate-400 font-mono">${m.origName} • ${m.master}</div>
                </div>

                <p class="text-xs text-slate-300 leading-relaxed">${m.summary}</p>

                <!-- Trigger Question -->
                <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <span class="text-[10px] font-bold text-amber-300 block uppercase tracking-wider">⚡ Câu Hỏi Kích Hoạt Tư Duy:</span>
                  <p class="text-xs text-slate-100 italic font-medium">${m.triggerQuestion}</p>
                </div>

                <!-- How to apply -->
                <div class="text-[11px] text-slate-300 space-y-1">
                  <strong class="text-cyan-300 block">🛠️ Cách Áp Dụng:</strong>
                  <p class="text-slate-400 leading-relaxed">${m.howToApply}</p>
                </div>
              </div>

              <!-- Action button -->
              <div class="border-t border-slate-800 pt-3">
                <button onclick="toggleMasterMentalModel('${m.id}')" class="w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  isMastered
                    ? 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/40 shadow-sm'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700'
                }">
                  <i data-lucide="${isMastered ? 'check-circle-2' : 'circle'}" class="w-4 h-4"></i>
                  <span>${isMastered ? 'Đã Nắm Vững (Bấm để hủy)' : 'Đánh Dấu Đã Nắm Vững'}</span>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function toggleMasterMentalModel(modelId) {
  playSound('click');
  const progress = getThinkingProgress();
  if (!progress.masteredModels) progress.masteredModels = {};
  progress.masteredModels[modelId] = !progress.masteredModels[modelId];
  saveThinkingProgress(progress);
  playSound(progress.masteredModels[modelId] ? 'success' : 'click');
  renderThinkingView();
}

// =========================================================================
// TAB 4: ĐẤU TRƯỜNG VẤN ĐÁP PHẢN BIỆN (SOCRATIC ARENA)
// =========================================================================
function renderThinkingArenaTab() {
  const scenarios = window.THINKING_PRACTICE_SCENARIOS || [];
  const activeScen = scenarios[currentArenaScenarioIndex] || scenarios[0];
  const progress = getThinkingProgress();
  const answered = (progress.arenaAnswers || {})[activeScen.id];

  return `
    <div class="max-w-3xl mx-auto space-y-6">
      <!-- Scenario Selector Header -->
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <span class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">🎯 Thử Thách Vấn Đáp Socrates #${currentArenaScenarioIndex + 1}/${scenarios.length}</span>
          <h3 class="text-lg font-black text-white mt-0.5">${activeScen.title}</h3>
        </div>

        <div class="flex items-center gap-1.5">
          ${scenarios.map((s, sIdx) => `
            <button onclick="selectArenaScenario(${sIdx})" class="w-8 h-8 rounded-xl text-xs font-bold transition-all ${
              sIdx === currentArenaScenarioIndex
                ? 'bg-emerald-500 text-slate-950 font-black shadow'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }">
              ${sIdx + 1}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- CONTEXT CARD -->
      <div class="p-5 rounded-2xl bg-cardBg border border-slate-800 space-y-3">
        <div class="text-xs font-bold text-amber-300 uppercase tracking-wide flex items-center gap-2">
          <i data-lucide="alert-circle" class="w-4 h-4 text-amber-400"></i> Tình Huống Thực Tế:
        </div>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium bg-slate-950/70 p-4 rounded-xl border border-slate-800/80">
          "${activeScen.context}"
        </p>
        <div class="text-xs font-bold text-white pt-2">
          👉 ${activeScen.questionToAsk}
        </div>
      </div>

      <!-- OPTIONS LIST -->
      <div class="space-y-3">
        ${activeScen.options.map((opt, optIdx) => {
          const isSelected = answered && answered.optIndex === optIdx;
          return `
            <div onclick="answerArenaScenario(${optIdx})" class="p-4 rounded-2xl border transition-all cursor-pointer ${
              answered
                ? opt.isBest
                  ? 'bg-emerald-950/30 border-emerald-500/60 shadow-lg'
                  : isSelected
                    ? 'bg-rose-950/30 border-rose-500/60'
                    : 'bg-cardBg border-slate-800 opacity-60'
                : 'bg-cardBg hover:bg-slate-800/70 border-slate-800 hover:border-emerald-500/40'
            } space-y-2">
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 flex-shrink-0 mt-0.5">
                  ${String.fromCharCode(65 + optIdx)}
                </span>
                <div class="text-xs sm:text-sm text-slate-100 font-medium">
                  "${opt.text}"
                </div>
              </div>

              ${answered ? `
                <div class="pl-9 pt-2 border-t border-slate-800/60 text-xs ${opt.isBest ? 'text-emerald-300' : 'text-rose-300'}">
                  <strong>${opt.isBest ? '👑 ĐÁP ÁN BẬC THẦY' : '⚠️ CHƯA ĐẠT CẤP ĐỘ CAO'}:</strong> ${opt.explanation}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function selectArenaScenario(idx) {
  playSound('click');
  currentArenaScenarioIndex = idx;
  renderThinkingView();
}

function answerArenaScenario(optIdx) {
  const scenarios = window.THINKING_PRACTICE_SCENARIOS || [];
  const activeScen = scenarios[currentArenaScenarioIndex];
  if (!activeScen) return;

  const opt = activeScen.options[optIdx];
  const progress = getThinkingProgress();
  if (!progress.arenaAnswers) progress.arenaAnswers = {};
  progress.arenaAnswers[activeScen.id] = { optIndex: optIdx, isBest: !!opt.isBest };

  saveThinkingProgress(progress);
  playSound(opt.isBest ? 'success' : 'click');
  renderThinkingView();
}

// Auto initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(renderThinkingView, 150);
  });
} else {
  setTimeout(renderThinkingView, 150);
}
