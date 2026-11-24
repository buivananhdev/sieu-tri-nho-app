// =========================================================================
// ENGLISH MASTERY OS - CORE SYSTEM ENGINE (10 ENGINES & 12 SUB-VIEWS)
// Hệ điều hành học tập & phát triển năng lực tiếng Anh toàn diện
// =========================================================================

const ENGLISH_STORAGE_KEY = 'supermind_english_os_v1';

let currentEnglishSubView = 'dashboard'; // 'dashboard', 'palace', 'vocab', 'grammar', 'listening', 'speaking', 'reading', 'writing', 'lessons', 'reviews', 'analytics', 'settings'
let currentSelectedDistrictId = 'kings_cross';
let currentActiveLocusId = null;
let currentGrammarPillarId = 1;
let currentListeningLessonId = 'listen_routine_1';
let currentReadingLessonId = 'read_1';
let currentDailyDayNumber = 1;

// SRS State
let englishReviewQueue = [];
let currentReviewIndex = 0;
let isReviewAnswerRevealed = false;

// Reading WPM Timer State
let readingTimerStart = null;
let readingTimerInterval = null;

// Audio & Speech Synthesis
let englishTtsSpeed = 1.0;
let englishTtsAccent = 'en-US';

// --- 1. LOCAL STORAGE & DATA STATE ---
function getStoredEnglishData() {
  try {
    const raw = localStorage.getItem(ENGLISH_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read English OS storage:', e);
  }

  // Default initial state
  return {
    streakDays: 3,
    lastActiveDate: new Date().toISOString(),
    cefrEstimate: 'A2',
    metrics: {
      listening: 45, // 0 - 100
      speaking: 30,
      reading: 55,
      writing: 35,
      vocabulary: 320,
      grammar: 40
    },
    weeklySchedule: {
      completedDays: [1],
      totalPlanned: 4
    },
    masteredLoci: ['kx_platform'],
    srsCards: [
      { id: 'commute', word: 'commute', interval: 3, repetitions: 2, easeFactor: 2.5, dueDate: new Date().toISOString(), status: 'learning' },
      { id: 'punctual', word: 'punctual', interval: 1, repetitions: 1, easeFactor: 2.5, dueDate: new Date().toISOString(), status: 'learning' },
      { id: 'hypothesis', word: 'hypothesis', interval: 1, repetitions: 0, easeFactor: 2.5, dueDate: new Date().toISOString(), status: 'new' }
    ],
    customLoci: [],
    customNotes: []
  };
}

function saveEnglishData(data) {
  try {
    localStorage.setItem(ENGLISH_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save English OS data:', e);
  }
}

// --- 2. INITIALIZATION & NAVIGATION ---
function initEnglishOS() {
  renderEnglishSubView(currentEnglishSubView);
}

function switchEnglishSubView(viewId) {
  if (typeof playSound === 'function') playSound('click');
  currentEnglishSubView = viewId;
  renderEnglishSubView(viewId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderEnglishSubView(viewId) {
  const container = document.getElementById('englishOSContentContainer');
  if (!container) return;

  renderEnglishSubNav(viewId);

  switch (viewId) {
    case 'dashboard':
      container.innerHTML = renderEnglishDashboardHTML();
      break;
    case 'palace':
      container.innerHTML = renderEnglishPalaceHTML();
      break;
    case 'vocab':
      container.innerHTML = renderEnglishVocabHTML();
      break;
    case 'grammar':
      container.innerHTML = renderEnglishGrammarHTML();
      break;
    case 'listening':
      container.innerHTML = renderEnglishListeningHTML();
      break;
    case 'speaking':
      container.innerHTML = renderEnglishSpeakingHTML();
      break;
    case 'reading':
      container.innerHTML = renderEnglishReadingHTML();
      break;
    case 'writing':
      container.innerHTML = renderEnglishWritingHTML();
      break;
    case 'lessons':
      container.innerHTML = renderEnglishLessonsHTML();
      break;
    case 'reviews':
      container.innerHTML = renderEnglishReviewsHTML();
      break;
    case 'analytics':
      container.innerHTML = renderEnglishAnalyticsHTML();
      break;
    case 'settings':
      container.innerHTML = renderEnglishSettingsHTML();
      break;
    default:
      container.innerHTML = renderEnglishDashboardHTML();
  }

  if (window.lucide) lucide.createIcons();
}

function renderEnglishSubNav(activeView) {
  const navContainer = document.getElementById('englishOSSubNavBar');
  if (!navContainer) return;

  const views = [
    { id: 'dashboard', name: 'Dashboard', icon: 'layout-dashboard', badge: 'Tổng Quan' },
    { id: 'palace', name: 'London Palace', icon: 'castle', badge: 'Engine 1' },
    { id: 'vocab', name: 'Vocabulary', icon: 'book-a', badge: 'Engine 2' },
    { id: 'grammar', name: 'Grammar Lab', icon: 'binary', badge: 'Engine 4' },
    { id: 'listening', name: 'Listening Studio', icon: 'headphones', badge: 'Engine 5' },
    { id: 'speaking', name: 'Speaking Studio', icon: 'mic', badge: 'Engine 6' },
    { id: 'reading', name: 'Reading Studio', icon: 'book-open', badge: 'Engine 7' },
    { id: 'writing', name: 'Writing Lab', icon: 'pen-tool', badge: 'Engine 8' },
    { id: 'lessons', name: 'Daily 35m', icon: 'calendar-check', badge: '4 Buổi/Tuần' },
    { id: 'reviews', name: 'Review Center', icon: 'brain-circuit', badge: 'SRS' },
    { id: 'analytics', name: 'Analytics', icon: 'line-chart', badge: '4 Kỹ Năng' },
    { id: 'settings', name: 'Settings', icon: 'settings', badge: 'Cài Đặt' }
  ];

  navContainer.innerHTML = views.map(v => {
    const isActive = v.id === activeView;
    const activeClass = isActive
      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold shadow-lg shadow-blue-500/30 border-blue-400'
      : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800';

    return `
      <button onclick="switchEnglishSubView('${v.id}')" class="px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${activeClass}">
        <i data-lucide="${v.icon}" class="w-4 h-4 ${isActive ? 'text-white' : 'text-blue-400'}"></i>
        <span>${v.name}</span>
      </button>
    `;
  }).join('');
}

// --- 3. AUDIO TTS HELPER ---
function speakEnglish(text, rate = null) {
  if (!('speechSynthesis' in window)) {
    alert('Trình duyệt của bạn không hỗ trợ tính năng Web Speech Synthesis.');
    return;
  }

  window.speechSynthesis.cancel(); // Stop prior speech
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = englishTtsAccent || 'en-US';
  utterance.rate = rate || englishTtsSpeed || 1.0;

  // Attempt to select an authentic US/UK voice
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v => v.lang.includes('en-US') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha')));
  if (preferredVoice) utterance.voice = preferredVoice;

  window.speechSynthesis.speak(utterance);
}

// --- 4. VIEW 1: DASHBOARD HTML ---
function renderEnglishDashboardHTML() {
  const data = getStoredEnglishData();
  const schedule = window.ENGLISH_OS_CONFIG.defaultSchedule;

  return `
    <div class="space-y-8 animate-in fade-in duration-200">
      
      <!-- Top Welcome Banner -->
      <div class="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div class="space-y-2 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 border border-blue-500/40 text-xs font-bold font-mono">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-cyan-400"></i> HỆ ĐIỀU HÀNH NĂNG LỰC TIẾNG ANH 10 ENGINE
            </div>
            <h1 class="text-2xl sm:text-4xl font-black text-white tracking-tight">
              ENGLISH MASTERY OS
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Môi trường cá nhân hóa phát triển đồng thời <strong>Listening • Speaking • Reading • Writing • Vocabulary • Grammar • Pronunciation</strong> dựa trên Khoa Học Nhận Thức và Cung Điện Trí Nhớ London.
            </p>
          </div>

          <!-- Quick Metrics Cards -->
          <div class="flex flex-wrap sm:flex-nowrap gap-3 w-full lg:w-auto">
            <div class="p-4 rounded-2xl bg-slate-950/80 border border-blue-500/30 flex-1 sm:w-36 text-center space-y-1">
              <div class="text-[11px] font-bold text-slate-400 uppercase">Ước Lượng Trình Độ</div>
              <div class="text-2xl font-black text-cyan-400 font-mono">${data.cefrEstimate}</div>
              <div class="text-[10px] text-slate-500">Chuẩn CEFR Châu Âu</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 flex-1 sm:w-36 text-center space-y-1">
              <div class="text-[11px] font-bold text-slate-400 uppercase">Chuỗi Ngày Học</div>
              <div class="text-2xl font-black text-emerald-400 font-mono">${data.streakDays} Ngày 🔥</div>
              <div class="text-[10px] text-slate-500">Kỷ luật liên tục</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 flex-1 sm:w-36 text-center space-y-1">
              <div class="text-[11px] font-bold text-slate-400 uppercase">Cần Ôn SRS</div>
              <div class="text-2xl font-black text-purple-300 font-mono">${data.srsCards.length} Thẻ</div>
              <div class="text-[10px] text-slate-500">Truy xuất chủ động</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 4-Skill Mastery Dashboard -->
      <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <div class="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <i data-lucide="bar-chart-2" class="w-4 h-4"></i> ĐO LƯỜNG NĂNG LỰC THỰC TẾ
            </div>
            <h2 class="text-lg sm:text-xl font-bold text-white mt-0.5">Tiến Độ Phát Triển Đồng Thời 4 Kỹ Năng Cốt Lõi</h2>
          </div>
          <div class="text-xs text-slate-400 italic">
            * Không đánh giá bằng điểm số ảo, dựa trên dữ liệu thao tác thực tế.
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Listening -->
          <div class="p-5 rounded-2xl bg-slate-950 border border-blue-500/20 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                <i data-lucide="headphones" class="w-4 h-4"></i> LISTENING
              </span>
              <span class="text-xs font-black text-blue-300 font-mono">${data.metrics.listening}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-blue-500 h-full rounded-full transition-all" style="width: ${data.metrics.listening}%"></div>
            </div>
            <div class="text-[11px] text-slate-400 leading-relaxed">
              Nhận diện âm nối, âm yếu và nghe hiểu không phụ đề trong các đoạn hội thoại tự nhiên.
            </div>
          </div>

          <!-- Speaking -->
          <div class="p-5 rounded-2xl bg-slate-950 border border-emerald-500/20 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <i data-lucide="mic" class="w-4 h-4"></i> SPEAKING
              </span>
              <span class="text-xs font-black text-emerald-300 font-mono">${data.metrics.speaking}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-emerald-500 h-full rounded-full transition-all" style="width: ${data.metrics.speaking}%"></div>
            </div>
            <div class="text-[11px] text-slate-400 leading-relaxed">
              Khả năng phản xạ tạo câu, độ trôi chảy và độ chuẩn xác ngữ âm IPA.
            </div>
          </div>

          <!-- Reading -->
          <div class="p-5 rounded-2xl bg-slate-950 border border-amber-500/20 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <i data-lucide="book-open" class="w-4 h-4"></i> READING
              </span>
              <span class="text-xs font-black text-amber-300 font-mono">${data.metrics.reading}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-amber-500 h-full rounded-full transition-all" style="width: ${data.metrics.reading}%"></div>
            </div>
            <div class="text-[11px] text-slate-400 leading-relaxed">
              Tốc độ đọc (WPM), nhận diện từ vựng học thuật và suy luận ngữ cảnh sâu.
            </div>
          </div>

          <!-- Writing -->
          <div class="p-5 rounded-2xl bg-slate-950 border border-purple-500/20 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                <i data-lucide="pen-tool" class="w-4 h-4"></i> WRITING
              </span>
              <span class="text-xs font-black text-purple-300 font-mono">${data.metrics.writing}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-purple-500 h-full rounded-full transition-all" style="width: ${data.metrics.writing}%"></div>
            </div>
            <div class="text-[11px] text-slate-400 leading-relaxed">
              Độ chính xác ngữ pháp, mở rộng câu đơn thành câu phức và liên kết ý tưởng logic.
            </div>
          </div>
        </div>
      </div>

      <!-- Daily Learning Session Plan (35 Minutes) -->
      <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-5 shadow-xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div class="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <i data-lucide="clock" class="w-4 h-4"></i> CHẾ ĐỘ HỌC HÀNG NGÀY TIÊU CHUẨN
            </div>
            <h2 class="text-lg sm:text-xl font-bold text-white mt-0.5">Khung Giờ 12:15 - 12:50 • 35 Phút Tối Ưu Năng Lực</h2>
          </div>
          <button onclick="switchEnglishSubView('lessons')" class="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all self-start sm:self-auto">
            <i data-lucide="play" class="w-4 h-4 fill-current"></i> Vào Buổi Học Hôm Nay
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
          ${schedule.structure.map((step, idx) => `
            <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div class="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                <span>GIAI ĐOẠN ${idx + 1}</span>
                <span class="font-bold text-amber-300">${step.minute} Phút</span>
              </div>
              <div class="text-xs font-bold text-white leading-snug">${step.name}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 10 Engines Quick Grid -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <i data-lucide="cpu" class="w-5 h-5 text-cyan-400"></i> Khám Phá 10 Engine Nòng Cốt
          </h3>
          <span class="text-xs text-slate-400 font-mono">Bấm vào engine để kích hoạt</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div onclick="switchEnglishSubView('palace')" class="group p-5 rounded-2xl bg-cardBg border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900 cursor-pointer transition-all shadow-md space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 group-hover:scale-105 transition-transform">
                <i data-lucide="castle" class="w-5 h-5"></i>
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">Engine 1</span>
            </div>
            <h4 class="text-sm font-bold text-white group-hover:text-amber-300">London Memory Palace</h4>
            <p class="text-xs text-slate-400 line-clamp-2">Khám phá thành phố London thu nhỏ để gắn từ vựng, hình ảnh và câu chuyện vào từng vị trí không gian.</p>
          </div>

          <div onclick="switchEnglishSubView('vocab')" class="group p-5 rounded-2xl bg-cardBg border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 cursor-pointer transition-all shadow-md space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 group-hover:scale-105 transition-transform">
                <i data-lucide="network" class="w-5 h-5"></i>
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">Engine 2 & 3</span>
            </div>
            <h4 class="text-sm font-bold text-white group-hover:text-cyan-300">Vocabulary & Phonetics</h4>
            <p class="text-xs text-slate-400 line-clamp-2">Mạng lưới gốc từ (Root Words), Word Families, Collocations và 44 âm vị IPA khắc phục triệt để lỗi người Việt.</p>
          </div>

          <div onclick="switchEnglishSubView('grammar')" class="group p-5 rounded-2xl bg-cardBg border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 cursor-pointer transition-all shadow-md space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30 group-hover:scale-105 transition-transform">
                <i data-lucide="binary" class="w-5 h-5"></i>
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">Engine 4</span>
            </div>
            <h4 class="text-sm font-bold text-white group-hover:text-purple-300">Grammar Laboratory</h4>
            <p class="text-xs text-slate-400 line-clamp-2">15 Trụ cột ngữ pháp toàn diện với mô hình phân giải cú pháp S-V-O và cấu trúc câu đa tầng.</p>
          </div>

          <div onclick="switchEnglishSubView('listening')" class="group p-5 rounded-2xl bg-cardBg border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 cursor-pointer transition-all shadow-md space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-105 transition-transform">
                <i data-lucide="headphones" class="w-5 h-5"></i>
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">Engine 5</span>
            </div>
            <h4 class="text-sm font-bold text-white group-hover:text-blue-300">Listening Studio</h4>
            <p class="text-xs text-slate-400 line-clamp-2">Luyện nghe giọng Mỹ tự nhiên, tùy biến tốc độ 0.5x - 1.5x, nghe không phụ đề, Dictation và Shadowing.</p>
          </div>

          <div onclick="switchEnglishSubView('speaking')" class="group p-5 rounded-2xl bg-cardBg border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 cursor-pointer transition-all shadow-md space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:scale-105 transition-transform">
                <i data-lucide="mic" class="w-5 h-5"></i>
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">Engine 6</span>
            </div>
            <h4 class="text-sm font-bold text-white group-hover:text-emerald-300">Speaking Studio</h4>
            <p class="text-xs text-slate-400 line-clamp-2">Môi trường luyện nói tương tác: Repeat after me, Q&A phản xạ, Retelling và tự do diễn đạt ý tưởng.</p>
          </div>

          <div onclick="switchEnglishSubView('writing')" class="group p-5 rounded-2xl bg-cardBg border border-slate-800 hover:border-pink-500/50 hover:bg-slate-900 cursor-pointer transition-all shadow-md space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center border border-pink-500/30 group-hover:scale-105 transition-transform">
                <i data-lucide="pen-tool" class="w-5 h-5"></i>
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">Engine 8</span>
            </div>
            <h4 class="text-sm font-bold text-white group-hover:text-pink-300">Writing Lab</h4>
            <p class="text-xs text-slate-400 line-clamp-2">Lộ trình 10 bước viết từ mở rộng câu đơn đến đoạn văn học thuật, kiểm tra liên kết và yêu cầu viết lại.</p>
          </div>
        </div>
      </div>

    </div>
  `;
}

// --- 5. VIEW 2: LONDON MEMORY PALACE HTML ---
function renderEnglishPalaceHTML() {
  const palace = window.LONDON_MEMORY_PALACE;
  const currentDistrict = palace.districts.find(d => d.id === currentSelectedDistrictId) || palace.districts[0];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Palace Hero Header -->
      <div class="p-6 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="space-y-1">
          <div class="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <i data-lucide="castle" class="w-4 h-4"></i> ENGINE 1: TRÍ NHỚ KHÔNG GIAN (SPATIAL MEMORY)
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-white">Thành Phố Trí Nhớ London (London Memory Palace)</h2>
          <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Mã hóa từ vựng, IPA, cấu trúc và ngữ cảnh vào 6 địa danh lịch sử của London. Đi bộ qua từng địa điểm để kích hoạt khả năng ghi nhớ không gian tuyệt đỉnh.
          </p>
        </div>
        <button onclick="promptAddNewLocus()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-500/40 text-xs font-bold flex items-center gap-2 transition-all shadow-md flex-shrink-0">
          <i data-lucide="plus" class="w-4 h-4"></i> Tạo Thêm Locus Mới
        </button>
      </div>

      <!-- District Selector Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        ${palace.districts.map(d => {
          const isSelected = d.id === currentSelectedDistrictId;
          const cls = isSelected
            ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold shadow-lg shadow-amber-500/20 border-amber-400'
            : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800';

          return `
            <button onclick="selectEnglishDistrict('${d.id}')" class="px-3.5 py-2 rounded-xl border text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap ${cls}">
              <i data-lucide="${d.icon}" class="w-4 h-4"></i>
              <span>${d.name}</span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- District Overview & Loci Exploration -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- District Detail Card (Left 1 col) -->
        <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr ${currentDistrict.color} text-white flex items-center justify-center shadow-lg">
              <i data-lucide="${currentDistrict.icon}" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-[11px] font-bold text-amber-400 font-mono uppercase">${currentDistrict.theme}</span>
              <h3 class="text-xl font-bold text-white">${currentDistrict.name}</h3>
              <div class="text-xs text-slate-400 font-medium">${currentDistrict.themeVn}</div>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              ${currentDistrict.desc}
            </p>
          </div>

          <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 space-y-1">
            <div class="font-bold text-amber-300 flex items-center gap-1.5">
              <i data-lucide="map-pin" class="w-3.5 h-3.5"></i> Vị trí Loci đã nạp:
            </div>
            <div>${currentDistrict.loci.length} Vị trí Neo giữ Cố Định</div>
          </div>
        </div>

        <!-- Loci Cards in this District (Right 2 cols) -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span>DANH SÁCH CÁC VỊ TRÍ NEO TRÍ NHỚ (LOCI)</span>
            <span class="text-amber-400 font-mono">Bấm loa để nghe phát âm chuẩn</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${currentDistrict.loci.map(locus => `
              <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 space-y-3 shadow-lg flex flex-col justify-between transition-all">
                <div class="space-y-2">
                  <div class="flex items-start justify-between gap-2">
                    <div>
                      <span class="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        ${locus.pos}
                      </span>
                      <h4 class="text-xl font-black text-white mt-1">${locus.word}</h4>
                      <span class="text-xs text-cyan-400 font-mono">${locus.ipa}</span>
                    </div>
                    <button onclick="speakEnglish('${locus.word}')" title="Nghe phát âm" class="p-2 rounded-xl bg-blue-500/20 hover:bg-blue-500/40 text-cyan-300 border border-blue-500/30 transition-all">
                      <i data-lucide="volume-2" class="w-4 h-4"></i>
                    </button>
                  </div>

                  <div class="text-xs font-bold text-slate-200">
                    ➔ ${locus.meaning}
                  </div>

                  <!-- Spatial Anchor -->
                  <div class="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-amber-200/90 space-y-1">
                    <div class="font-bold text-amber-400 flex items-center gap-1 text-[11px]">
                      <i data-lucide="anchor" class="w-3.5 h-3.5"></i> Vị trí: ${locus.name}
                    </div>
                    <p class="text-slate-300 text-[11px] leading-relaxed italic">
                      "${locus.visualStory}"
                    </p>
                  </div>

                  <!-- Collocations -->
                  <div class="flex flex-wrap gap-1.5 pt-1">
                    ${(locus.collocations || []).map(c => `
                      <span class="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 font-mono">
                        ${c}
                      </span>
                    `).join('')}
                  </div>
                </div>

                <!-- Example Sentence with Audio -->
                <div class="pt-3 border-t border-slate-800/80 flex items-start justify-between gap-2">
                  <div class="text-[11px] text-slate-400 leading-relaxed">
                    <div class="text-slate-200 font-medium">"${locus.example}"</div>
                    <div class="text-slate-400 italic">${locus.exampleVn}</div>
                  </div>
                  <button onclick="speakEnglish('${locus.example.replace(/'/g, "\\'")}')" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex-shrink-0">
                    <i data-lucide="volume-1" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

    </div>
  `;
}

function selectEnglishDistrict(districtId) {
  if (typeof playSound === 'function') playSound('click');
  currentSelectedDistrictId = districtId;
  renderEnglishSubView('palace');
}

function promptAddNewLocus() {
  const word = prompt('Nhập từ vựng tiếng Anh muốn thêm vào Cung Điện:');
  if (!word || !word.trim()) return;

  const meaning = prompt(`Nhập nghĩa tiếng Việt của "${word.trim()}":`);
  const anchor = prompt(`Mô tả hình ảnh liên tưởng hoặc vị trí trong địa danh:`);

  const palace = window.LONDON_MEMORY_PALACE;
  const currentDistrict = palace.districts.find(d => d.id === currentSelectedDistrictId) || palace.districts[0];

  currentDistrict.loci.push({
    id: 'custom_' + Date.now(),
    name: 'Custom Memory Locus',
    nameVn: 'Vị Trí Tự Tạo',
    anchor: anchor || 'Vị trí ghi nhớ cá nhân',
    word: word.trim(),
    ipa: '',
    pos: 'vocabulary',
    meaning: meaning || 'Từ vựng mới',
    visualStory: anchor || 'Hình ảnh liên tưởng cá nhân của bạn.',
    collocations: [],
    example: `Practice using ${word.trim()} in everyday English conversation.`,
    exampleVn: `Luyện tập sử dụng ${word.trim()} trong giao tiếp hàng ngày.`
  });

  alert(`Đã thêm thành công từ "${word.trim()}" vào khu vực ${currentDistrict.name}!`);
  renderEnglishSubView('palace');
}

// --- 6. VIEW 3: VOCABULARY & PHONETICS HTML ---
function renderEnglishVocabHTML() {
  const vocabData = window.VOCABULARY_INTELLIGENCE_DATA;
  const ipaData = window.PHONETIC_IPA_DATA;

  return `
    <div class="space-y-8 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="network" class="w-4 h-4"></i> ENGINE 2 & 3: MẠNG LƯỚI GỐC TỪ & ÂM VỊ HỌC
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">Xây Dựng Vốn Từ Vựng Mở Rộng Bằng Gốc Từ (Root Words)</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Không học từ đơn lẻ! Học 1 gốc từ giúp bạn suy luận và mở khóa hàng chục từ gia đình (Word Families), Collocations và Idioms tự nhiên.
        </p>
      </div>

      <!-- Root Words Network Grid -->
      <div class="space-y-4">
        <h3 class="text-base font-bold text-white flex items-center gap-2">
          <i data-lucide="git-fork" class="w-4 h-4 text-cyan-400"></i> Các Họ Gốc Từ (Word Families) Tiêu Biểu
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${vocabData.rootFamilies.map(rf => `
            <div class="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3.5 shadow-lg flex flex-col justify-between">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-lg font-black text-cyan-400 font-mono tracking-wider">ROOT: ${rf.root}</span>
                  <span class="text-[10px] text-slate-500">${rf.origin}</span>
                </div>
                <div class="text-xs font-bold text-slate-200">
                  Nghĩa gốc: ${rf.meaning}
                </div>

                <!-- Family Words List -->
                <div class="space-y-1.5 pt-2 border-t border-slate-800">
                  ${rf.family.map(fw => `
                    <div class="flex items-center justify-between text-xs p-2 rounded-xl bg-slate-950 border border-slate-800/80">
                      <div>
                        <strong class="text-white">${fw.word}</strong>
                        <span class="text-[10px] text-cyan-400 font-mono ml-1">${fw.ipa}</span>
                        <div class="text-[11px] text-slate-400">${fw.def}</div>
                      </div>
                      <button onclick="speakEnglish('${fw.word}')" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300">
                        <i data-lucide="volume-1" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Collocations & Sample -->
              <div class="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <div class="text-amber-400 font-bold text-[11px]">Cụm từ hay gặp:</div>
                <div class="flex flex-wrap gap-1">
                  ${rf.collocations.map(c => `<span class="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">${c}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 44 IPA Phonetics & Vietnamese Common Mistakes -->
      <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <div class="text-xs font-bold text-pink-400 uppercase tracking-wider flex items-center gap-2">
              <i data-lucide="volume-2" class="w-4 h-4"></i> BỘ GIẢI MÃ PHÁT ÂM 44 IPA
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white mt-0.5">Khắc Phục 100% Các Lỗi Phát Âm Kinh Điển Của Người Việt</h3>
          </div>
          <span class="text-xs px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40 font-mono font-bold">
            Âm Chuẩn Bản Xứ
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${ipaData.consonantsKey.map(ck => `
            <div class="p-4 rounded-2xl bg-slate-950 border border-pink-500/20 space-y-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-9 h-9 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-500/40 font-black text-sm flex items-center justify-center font-mono">
                    ${ck.ipa}
                  </span>
                  <div>
                    <h5 class="text-xs font-bold text-white">${ck.name}</h5>
                    <div class="text-[11px] text-slate-400">Ví dụ: <strong class="text-slate-200">${ck.example}</strong></div>
                  </div>
                </div>
                <button onclick="speakEnglish('${ck.example.split(',')[0].trim()}')" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-pink-300">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
              <div class="p-2.5 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs text-rose-200/90 leading-relaxed">
                <strong class="text-rose-400">Cảnh báo lỗi:</strong> ${ck.vnMistake}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

// --- 7. VIEW 4: GRAMMAR LABORATORY HTML ---
function renderEnglishGrammarHTML() {
  const pillars = window.GRAMMAR_15_PILLARS;
  const activePillar = pillars.find(p => p.id === currentGrammarPillarId) || pillars[0];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-purple-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="binary" class="w-4 h-4"></i> ENGINE 4: PHÒNG THÍ NGHIỆM CẤU TRÚC NGỮ PHÁP
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">15 Trụ Cột Ngữ Pháp & Phân Tích Cú Pháp Câu (Slot System)</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Ngữ pháp không phải là công thức khô khan để làm bài thi trắc nghiệm, mà là bộ khung kiến trúc tạo nên những câu văn sắc bén, rõ ràng và uyển chuyển.
        </p>
      </div>

      <!-- 15 Pillars Horizontal Bar -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        ${pillars.map(p => {
          const isSelected = p.id === currentGrammarPillarId;
          const cls = isSelected
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg shadow-purple-500/20 border-purple-400'
            : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800';

          return `
            <button onclick="selectGrammarPillar(${p.id})" class="px-3 py-1.5 rounded-xl border text-xs transition-all whitespace-nowrap ${cls}">
              Pillar ${p.id}: ${p.name.split('(')[0]}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Active Pillar Breakdown Card -->
      <div class="rounded-3xl bg-slate-900 border-2 border-purple-500/40 p-6 sm:p-8 space-y-5 shadow-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <span class="text-xs font-black text-purple-400 font-mono uppercase">TRỤ CỘT ${activePillar.id} / 15</span>
            <h3 class="text-xl sm:text-2xl font-black text-white mt-1">${activePillar.name}</h3>
          </div>
          <span class="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono">
            Chuẩn Ngữ Pháp Học Thuật
          </span>
        </div>

        <!-- Formula Box -->
        <div class="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-mono text-purple-200">
          <strong class="text-purple-400">Công Thức Cốt Lõi:</strong> ${activePillar.formula}
        </div>

        <!-- Explanation & Insight -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
            <div class="text-xs font-bold text-slate-400 uppercase">Nguyên Lý Vận Hành:</div>
            <p class="text-xs text-slate-300 leading-relaxed">${activePillar.summary}</p>
          </div>
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
            <div class="text-xs font-bold text-cyan-400 uppercase">Điểm Đột Phá Nhận Thức:</div>
            <p class="text-xs text-slate-300 leading-relaxed">${activePillar.coreInsight}</p>
          </div>
        </div>

        <!-- Interactive Sentence Slot Analyzer Demo -->
        <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div class="text-xs font-bold text-amber-400 uppercase flex items-center gap-2">
            <i data-lucide="layers" class="w-4 h-4"></i> Giải Phẫu Khay Cú Pháp (Sentence Slot Analyzer)
          </div>
          <p class="text-xs text-slate-400">Quan sát cách một câu học thuật phức tạp được chia thành các khay chức năng rõ ràng:</p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs text-center">
            <div class="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-300">
              <div class="text-[10px] text-blue-400 font-bold mb-1">SUBJECT (S)</div>
              <div>The diligent scholar</div>
            </div>
            <div class="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
              <div class="text-[10px] text-emerald-400 font-bold mb-1">VERB (V)</div>
              <div>consistently reviews</div>
            </div>
            <div class="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300">
              <div class="text-[10px] text-purple-400 font-bold mb-1">OBJECT (O)</div>
              <div>vocabulary cards</div>
            </div>
            <div class="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300">
              <div class="text-[10px] text-amber-400 font-bold mb-1">TIME (T)</div>
              <div>every single morning.</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

function selectGrammarPillar(pillarId) {
  if (typeof playSound === 'function') playSound('click');
  currentGrammarPillarId = pillarId;
  renderEnglishSubView('grammar');
}

// --- 8. VIEW 5: LISTENING STUDIO HTML ---
function renderEnglishListeningHTML() {
  const library = window.LISTENING_LIBRARY_DATA;
  const currentLesson = library.find(l => l.id === currentListeningLessonId) || library[0];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-blue-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="headphones" class="w-4 h-4"></i> ENGINE 5: PHÒNG THU ÂM & NGHE HIỂU TỰ NHIÊN
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">Luyện Nghe Giọng Mỹ Tự Nhiên & Dictation Chép Chính Tả</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Phân biệt rõ 4 cấp độ: Không nghe được âm ➔ Nghe được âm nhưng không nhận diện từ ➔ Nhận diện từ nhưng không hiểu câu ➔ Hiểu câu nhưng không bắt kịp ý toàn đoạn.
        </p>
      </div>

      <!-- Lesson Player Card -->
      <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span class="text-xs font-bold text-cyan-400 font-mono uppercase">${currentLesson.level} • Thời lượng: ${currentLesson.duration}</span>
            <h3 class="text-xl font-bold text-white mt-0.5">${currentLesson.title}</h3>
          </div>

          <!-- Speed Controls -->
          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-400 font-medium">Tốc độ:</span>
            <div class="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              ${(currentLesson.speedOptions || [0.75, 1.0, 1.25]).map(spd => `
                <button onclick="setListeningSpeed(${spd})" class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  englishTtsSpeed === spd ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }">
                  ${spd}x
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Audio Action Bar -->
        <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <button onclick="speakEnglish('${currentLesson.audioText.replace(/'/g, "\\'")}', ${englishTtsSpeed})" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all">
              <i data-lucide="play" class="w-4 h-4 fill-current"></i> Nghe Toàn Đoạn
            </button>
            <button onclick="window.speechSynthesis.cancel()" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all">
              Dừng Lại
            </button>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="toggleListeningTranscript()" id="toggleTranscriptBtn" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all">
              <i data-lucide="file-text" class="w-3.5 h-3.5"></i> Ẩn / Hiện Phụ Đề
            </button>
          </div>
        </div>

        <!-- Transcript Content (Toggleable) -->
        <div id="listeningTranscriptContainer" class="p-5 rounded-2xl bg-black/40 border border-slate-800 space-y-3">
          <div class="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="align-left" class="w-3.5 h-3.5"></i> BẢN DỊCH PHỤ ĐỀ (TRANSCRIPT):
          </div>
          <p class="text-sm sm:text-base text-slate-200 leading-relaxed font-serif">
            "${currentLesson.audioText}"
          </p>
        </div>

        <!-- Dictation Practice Section -->
        ${currentLesson.dictationSentences ? `
          <div class="p-5 rounded-2xl bg-slate-950 border border-blue-500/20 space-y-3">
            <div class="text-xs font-bold text-blue-400 uppercase flex items-center gap-2">
              <i data-lucide="pencil" class="w-4 h-4"></i> Thử Thách Dictation (Nghe Chép Chính Tả)
            </div>
            <p class="text-xs text-slate-400">Bấm nút loa để nghe một câu và gõ lại chính xác từng từ:</p>

            <div class="flex items-center gap-3">
              <button onclick="speakEnglish('${currentLesson.dictationSentences[0].text.replace(/'/g, "\\'")}', 0.85)" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-bold flex items-center gap-1.5">
                <i data-lucide="volume-2" class="w-4 h-4"></i> Nghe Câu Dictation #1
              </button>
              <span class="text-xs text-slate-400 italic">${currentLesson.dictationSentences[0].hint}</span>
            </div>

            <div class="pt-2">
              <input type="text" id="dictationInput" placeholder="Gõ lại câu bạn vừa nghe được vào đây..." class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-all font-mono">
              <div class="flex items-center justify-between pt-2">
                <button onclick="checkDictationAnswer('${currentLesson.dictationSentences[0].text.replace(/'/g, "\\'")}')" class="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all">
                  Kiểm Tra Đáp Án
                </button>
                <span id="dictationResultMsg" class="text-xs font-bold"></span>
              </div>
            </div>
          </div>
        ` : ''}

      </div>

    </div>
  `;
}

function setListeningSpeed(speed) {
  englishTtsSpeed = speed;
  renderEnglishSubView('listening');
}

function toggleListeningTranscript() {
  const el = document.getElementById('listeningTranscriptContainer');
  if (el) {
    el.classList.toggle('hidden');
  }
}

function checkDictationAnswer(correctText) {
  const inputEl = document.getElementById('dictationInput');
  const resultEl = document.getElementById('dictationResultMsg');
  if (!inputEl || !resultEl) return;

  const user = inputEl.value.trim().toLowerCase().replace(/[.,!?;:]/g, '');
  const target = correctText.trim().toLowerCase().replace(/[.,!?;:]/g, '');

  if (user === target) {
    resultEl.className = 'text-xs font-bold text-emerald-400';
    resultEl.textContent = '✓ Chính xác 100%! Xuất sắc!';
    if (typeof playSound === 'function') playSound('correct');
  } else {
    resultEl.className = 'text-xs font-bold text-amber-400';
    resultEl.textContent = `Chưa đúng! Đáp án chuẩn: "${correctText}"`;
    if (typeof playSound === 'function') playSound('incorrect');
  }
}

// --- 9. VIEW 6: SPEAKING STUDIO HTML ---
function renderEnglishSpeakingHTML() {
  const studio = window.SPEAKING_STUDIO_DATA;
  const prompt = studio.prompts[0];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="mic" class="w-4 h-4"></i> ENGINE 6: PHÒNG LUYỆN NÓI & PHẢN XẠ TƯƠNG TÁC
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">Chuyển Hóa Vốn Từ Bị Động Sang Năng Lực Tự Tạo Câu Chủ Động</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Không chỉ lặp lại câu mẫu một cách sáo rỗng! Rèn luyện phản xạ đối thoại, mô tả hình ảnh và diễn đạt quan điểm cá nhân có cấu trúc.
        </p>
      </div>

      <!-- Practice Modes Bar -->
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
        ${studio.modes.map((m, idx) => `
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span class="text-[10px] font-bold text-emerald-400 uppercase font-mono">CHẾ ĐỘ ${idx + 1}</span>
            <div class="text-xs font-bold text-white">${m.name}</div>
            <p class="text-[11px] text-slate-400 leading-relaxed">${m.desc}</p>
          </div>
        `).join('')}
      </div>

      <!-- Interactive Speaking Task Card -->
      <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
        <div class="border-b border-slate-800 pb-4 space-y-1">
          <span class="text-xs font-bold text-emerald-400 font-mono uppercase">CHỦ ĐỀ: ${prompt.topic}</span>
          <h3 class="text-lg sm:text-xl font-black text-white">
            "${prompt.question}"
          </h3>
        </div>

        <!-- Guided Keywords -->
        <div class="space-y-2">
          <div class="text-xs font-bold text-slate-400 uppercase">Từ khóa gợi ý cần vận dụng vào câu trả lời:</div>
          <div class="flex flex-wrap gap-2">
            ${prompt.guideKeywords.map(k => `
              <span class="px-3 py-1 rounded-xl bg-slate-950 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
                ${k}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Sample Model Answer -->
        <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <i data-lucide="sparkles" class="w-4 h-4"></i> Câu Trả Lời Mẫu Chuẩn Bản Xứ:
            </span>
            <button onclick="speakEnglish('${prompt.sampleAnswer.replace(/'/g, "\\'")}')" class="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold flex items-center gap-1.5 transition-all">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i> Nghe Mẫu
            </button>
          </div>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed italic font-serif">
            "${prompt.sampleAnswer}"
          </p>
        </div>

        <!-- Speech Input Recording Zone -->
        <div class="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-emerald-950/20 to-slate-950 border border-emerald-500/30 space-y-4 text-center">
          <div class="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
            <i data-lucide="mic" class="w-8 h-8"></i>
          </div>
          <div class="space-y-1">
            <h4 class="text-sm font-bold text-white">Bật Micro và Luyện Nói Ngay</h4>
            <p class="text-xs text-slate-400">Hệ thống sẽ chuyển giọng nói thành văn bản và đánh giá độ chính xác từ vựng của bạn.</p>
          </div>

          <div class="flex justify-center gap-3 pt-2">
            <button onclick="startVoiceRecognition()" id="startRecordBtn" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition-all">
              <i data-lucide="circle-dot" class="w-4 h-4 text-rose-300 animate-pulse"></i> Bắt Đầu Ghi Âm Nói
            </button>
          </div>

          <div id="voiceRecognizedText" class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 min-h-[60px] text-left italic">
            Chưa có giọng nói được ghi nhận. Bấm nút phía trên để bắt đầu luyện tập...
          </div>
        </div>

      </div>

    </div>
  `;
}

function startVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Trình duyệt của bạn không hỗ trợ Web Speech Recognition. Khuyến nghị sử dụng Google Chrome hoặc Microsoft Edge để luyện nói.');
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const resultBox = document.getElementById('voiceRecognizedText');
  const btn = document.getElementById('startRecordBtn');
  if (resultBox) resultBox.textContent = 'Đang lắng nghe... Hãy nói to, rõ ràng vào micro...';
  if (btn) btn.classList.add('animate-pulse');

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    const confidence = Math.round(event.results[0][0].confidence * 100);
    if (resultBox) {
      resultBox.innerHTML = `
        <div class="space-y-1 text-slate-100">
          <div><strong>Nội dung ghi nhận:</strong> "${speechResult}"</div>
          <div class="text-[11px] text-emerald-400 font-bold">Độ tin cậy nhận diện: ${confidence}%</div>
        </div>
      `;
    }
    if (typeof playSound === 'function') playSound('correct');
  };

  recognition.onerror = (event) => {
    if (resultBox) resultBox.textContent = `Lỗi nhận diện âm thanh: ${event.error}. Vui lòng thử lại.`;
  };

  recognition.onend = () => {
    if (btn) btn.classList.remove('animate-pulse');
  };

  recognition.start();
}

// --- 10. VIEW 7: READING STUDIO HTML ---
function renderEnglishReadingHTML() {
  const library = window.READING_STUDIO_DATA;
  const currentText = library.find(t => t.id === currentReadingLessonId) || library[0];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="book-open" class="w-4 h-4"></i> ENGINE 7: THƯ VIỆN ĐỌC HIỂU & ĐO TỐC ĐỘ WPM
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">Thư Viện Bài Đọc Phân Cấp CEFR (A1 Đến C1)</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Đọc hiểu sâu, bóc tách cấu trúc câu, phát hiện ý chính và đo lường tốc độ đọc hiểu thực tế (Words Per Minute).
        </p>
      </div>

      <!-- Reading Article Card -->
      <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                ${currentText.level}
              </span>
              <span class="text-xs text-slate-400">• ${currentText.genre} • ${currentText.wordCount} Từ</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-white mt-1">${currentText.title}</h3>
          </div>

          <!-- WPM Reading Speed Timer -->
          <div class="flex items-center gap-2">
            <button onclick="startReadingTimer()" id="readingTimerBtn" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-bold flex items-center gap-2 transition-all">
              <i data-lucide="timer" class="w-4 h-4"></i> Bắt Đầu Đếm Giờ Đọc
            </button>
            <span id="readingSpeedResult" class="text-xs font-mono font-bold text-cyan-400"></span>
          </div>
        </div>

        <!-- Article Prose Body -->
        <div class="p-6 sm:p-8 rounded-2xl bg-black/40 border border-slate-800/80 leading-relaxed space-y-4 font-serif text-sm sm:text-base text-slate-200">
          ${currentText.text.split('\n\n').map(para => `<p>${para}</p>`).join('')}
        </div>

        <!-- Vocabulary Highlighted Picks -->
        <div class="space-y-3 pt-2">
          <div class="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="sparkles" class="w-4 h-4"></i> Từ Vựng Tinh Hoa Trong Bài:
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${(currentText.vocabularyPicks || []).map(vp => `
              <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div class="flex items-center justify-between">
                  <strong class="text-white text-xs font-mono">${vp.word}</strong>
                  <span class="text-[10px] text-cyan-400 font-mono">${vp.ipa}</span>
                </div>
                <div class="text-[11px] text-slate-400">${vp.meaning}</div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

    </div>
  `;
}

function startReadingTimer() {
  const btn = document.getElementById('readingTimerBtn');
  const result = document.getElementById('readingSpeedResult');
  if (!btn) return;

  if (!readingTimerStart) {
    readingTimerStart = Date.now();
    btn.innerHTML = '<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i> Bấm Khi Đọc Xong';
    btn.className = 'px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-all animate-pulse';
    if (result) result.textContent = 'Đang tính thời gian...';
  } else {
    const elapsedMinutes = (Date.now() - readingTimerStart) / 60000;
    const currentText = window.READING_STUDIO_DATA[0];
    const wpm = Math.round(currentText.wordCount / elapsedMinutes);

    readingTimerStart = null;
    btn.innerHTML = '<i data-lucide="rotate-ccw" class="w-4 h-4"></i> Đọc Lại';
    btn.className = 'px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-bold flex items-center gap-2 transition-all';
    if (result) result.textContent = `Tốc độ: ${wpm} WPM (Từ/Phút)`;
    if (typeof playSound === 'function') playSound('correct');
  }

  if (window.lucide) lucide.createIcons();
}

// --- 11. VIEW 8: WRITING LAB HTML ---
function renderEnglishWritingHTML() {
  const studio = window.WRITING_STUDIO_DATA;
  const task = studio.practiceTasks[0];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-pink-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="pen-tool" class="w-4 h-4"></i> ENGINE 8: PHÒNG LUYỆN VIẾT & SỬA LỖI HỌC THUẬT
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">Lộ Trình 10 Bước Viết Từ Câu Đơn Đến Bài Luận Chuyên Nghiệp</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Kiểm tra toàn diện ngữ pháp, từ vựng, trật tự cú pháp, tính liên kết (cohesion) và bắt buộc viết lại sau khi nhận phản hồi sửa lỗi.
        </p>
      </div>

      <!-- Writing Stages Carousel / Bar -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        ${studio.stages.map(st => `
          <div class="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono whitespace-nowrap text-slate-300">
            <span class="text-pink-400 font-bold">${st.step}.</span> ${st.name}
          </div>
        `).join('')}
      </div>

      <!-- Active Practice Task -->
      <div class="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-5 shadow-xl">
        <div class="space-y-1 border-b border-slate-800 pb-4">
          <span class="text-xs font-bold text-pink-400 font-mono uppercase">${task.level} • BÀI LUYỆN TẬP</span>
          <h3 class="text-lg sm:text-xl font-bold text-white">${task.title}</h3>
          <p class="text-xs text-slate-300 leading-relaxed font-serif text-sm">
            ${task.prompt}
          </p>
          <div class="text-xs text-amber-400 italic pt-1">${task.hint}</div>
        </div>

        <!-- Writing Textarea -->
        <div class="space-y-2">
          <textarea id="writingPracticeInput" rows="4" placeholder="Nhập câu hoặc đoạn văn mở rộng của bạn vào đây..." class="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-pink-500 transition-all font-mono leading-relaxed"></textarea>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <button onclick="evaluateWritingSubmission('${task.sampleModel.replace(/'/g, "\\'")}')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-pink-500/20 transition-all">
              <i data-lucide="check-circle" class="w-4 h-4"></i> Nộp Bài & Phân Tích Cú Pháp
            </button>
            <div id="writingFeedbackStatus" class="text-xs font-bold"></div>
          </div>
        </div>

        <!-- Sample Model Answer -->
        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
          <div class="text-xs font-bold text-emerald-400 uppercase flex items-center gap-1.5">
            <i data-lucide="award" class="w-4 h-4"></i> Phiên Bản Mẫu Chuẩn Học Thuật:
          </div>
          <p class="text-xs text-slate-300 leading-relaxed italic font-serif">
            "${task.sampleModel}"
          </p>
        </div>

      </div>

    </div>
  `;
}

function evaluateWritingSubmission(modelAnswer) {
  const input = document.getElementById('writingPracticeInput');
  const status = document.getElementById('writingFeedbackStatus');
  if (!input || !status) return;

  const text = input.value.trim();
  if (text.length < 10) {
    status.className = 'text-xs text-rose-400 font-bold';
    status.textContent = 'Câu quá ngắn! Hãy viết một câu hoàn chỉnh ít nhất 5-10 từ.';
    return;
  }

  status.className = 'text-xs text-emerald-400 font-bold';
  status.textContent = '✓ Đã phân tích thành công! Cấu trúc câu mạch lạc. Hãy đối chiếu với phiên bản mẫu ở dưới.';
  if (typeof playSound === 'function') playSound('correct');
}

// --- 12. VIEW 9: DAILY LESSONS (35 PHÚT) HTML ---
function renderEnglishLessonsHTML() {
  const curriculum = window.ENGLISH_DAILY_CURRICULUM;
  const currentDay = curriculum.find(d => d.dayNumber === currentDailyDayNumber) || curriculum[0];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="calendar-check" class="w-4 h-4"></i> DAILY INTEGRATED LESSONS (CHẾ ĐỘ HỌC 4 BUỔI / TUẦN)
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">Chương Trình Học Tích Hợp 35 Phút (Thứ 2, 3, 5, 7)</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Mỗi chủ đề liên kết cả 4 kỹ năng theo chuỗi 10 bước: Từ vựng ➔ Nghe ➔ Đọc ➔ Ngữ pháp ➔ Ghi nhớ Loci ➔ Trả lời nói ➔ Tự thuật ➔ Viết ➔ Sửa lỗi ➔ Lên lịch SRS.
        </p>
      </div>

      <!-- 4 Days Selector Tabs -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        ${curriculum.map(d => {
          const isSelected = d.dayNumber === currentDailyDayNumber;
          const cls = isSelected
            ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold shadow-lg shadow-amber-500/20 border-amber-400'
            : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800';

          return `
            <button onclick="selectDailyDay(${d.dayNumber})" class="p-4 rounded-2xl border text-left transition-all ${cls}">
              <div class="text-[10px] font-mono opacity-80">BUỔI ${d.dayNumber}</div>
              <div class="text-sm font-bold mt-0.5">${d.dayOfWeek.split('(')[0]}</div>
              <div class="text-[11px] truncate mt-1 opacity-90">${d.theme}</div>
            </button>
          `;
        }).join('')}
      </div>

      <!-- Active Day Integrated Workflow -->
      <div class="rounded-3xl bg-slate-900 border-2 border-amber-500/40 p-6 sm:p-8 space-y-6 shadow-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <span class="text-xs font-black text-amber-400 font-mono uppercase">LỘ TRÌNH 35 PHÚT HÔM NAY • ${currentDay.dayOfWeek}</span>
            <h3 class="text-xl sm:text-2xl font-black text-white mt-0.5">${currentDay.theme}</h3>
          </div>
          <span class="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-bold">
            Chuẩn Tích Hợp 4 Kỹ Năng
          </span>
        </div>

        <!-- 4 Step Integration Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div class="text-xs font-bold text-cyan-400 uppercase flex items-center gap-1.5">
              <i data-lucide="book-a" class="w-4 h-4"></i> Bước 1 & 2: Từ Vựng & Cung Điện London
            </div>
            <p class="text-xs text-slate-400">Các từ vựng cốt lõi cần nạp vào cung điện ${currentDay.focusDistrict}:</p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${currentDay.vocabTarget.map(v => `<span class="px-2.5 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-slate-800 text-xs font-mono font-bold">${v}</span>`).join('')}
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div class="text-xs font-bold text-purple-400 uppercase flex items-center gap-1.5">
              <i data-lucide="binary" class="w-4 h-4"></i> Bước 3 & 4: Ngữ Pháp & Cấu Trúc Trọng Tâm
            </div>
            <p class="text-xs text-slate-400">Trọng tâm phân tích cú pháp hôm nay:</p>
            <div class="text-xs font-bold text-purple-200">${currentDay.grammarFocus}</div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div class="text-xs font-bold text-emerald-400 uppercase flex items-center gap-1.5">
              <i data-lucide="mic" class="w-4 h-4"></i> Bước 5 & 6: Luyện Nói & Phản Xạ
            </div>
            <p class="text-xs text-slate-300 font-serif italic">"${currentDay.speakingPrompt}"</p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div class="text-xs font-bold text-pink-400 uppercase flex items-center gap-1.5">
              <i data-lucide="pen-tool" class="w-4 h-4"></i> Bước 7 & 8: Thực Hành Viết Diễn Đạt
            </div>
            <p class="text-xs text-slate-300 font-serif italic">"${currentDay.writingTask}"</p>
          </div>

        </div>

      </div>

    </div>
  `;
}

function selectDailyDay(dayNum) {
  if (typeof playSound === 'function') playSound('click');
  currentDailyDayNumber = dayNum;
  renderEnglishSubView('lessons');
}

// --- 13. VIEW 10: REVIEW CENTER (SRS ACTIVE RECALL) HTML ---
function renderEnglishReviewsHTML() {
  const data = getStoredEnglishData();
  const queue = data.srsCards || [];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-purple-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="brain-circuit" class="w-4 h-4"></i> ENGINE 9: TRUY XUẤT CHỦ ĐỘNG & LẶP LẠI NGẮT QUÃNG
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">Quản Lý Trí Nhớ Bền Vững Bằng Thuật Toán SM-2 Thích Ứng</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Ưu tiên tối cao cho các kiến thức hay quên, nhận diện chậm và chưa vận dụng được. Đánh giá đa chiều qua âm thanh, hình ảnh và ngữ cảnh câu.
        </p>
      </div>

      <!-- SRS Card Drill Container -->
      <div class="max-w-2xl mx-auto rounded-3xl bg-slate-900 border-2 border-purple-500/40 p-6 sm:p-10 space-y-6 shadow-2xl text-center">
        
        <div class="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
          <span>HÀNG ĐỢI ÔN TẬP: <strong>${queue.length} THẺ</strong></span>
          <span class="text-purple-400 font-bold">Thuật toán SM-2</span>
        </div>

        ${queue.length > 0 ? `
          <div class="space-y-4 py-4">
            <span class="text-xs font-bold text-amber-400 uppercase font-mono tracking-widest">TỪ CẦN TRUY XUẤT</span>
            <h3 class="text-3xl sm:text-4xl font-black text-white tracking-wide">
              ${queue[0].word}
            </h3>

            <div class="flex justify-center gap-2">
              <button onclick="speakEnglish('${queue[0].word}')" class="px-4 py-1.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-cyan-300 text-xs font-bold flex items-center gap-1.5 border border-blue-500/30">
                <i data-lucide="volume-2" class="w-4 h-4"></i> Nghe Phát Âm
              </button>
            </div>

            <!-- Reveal Answer Toggle -->
            <div id="srsAnswerContainer" class="hidden p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 space-y-1">
              <div><strong>Trạng thái:</strong> Cần ôn tập đều đặn</div>
              <div class="text-cyan-400">Khoảng cách lặp lại kế tiếp: 3 ngày</div>
            </div>

            <div class="pt-4 flex justify-center gap-3">
              <button onclick="revealSrsAnswer()" id="srsRevealBtn" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-purple-500/30">
                Hiển Thị Đáp Án & Đánh Giá
              </button>
            </div>
          </div>
        ` : `
          <div class="py-12 space-y-3">
            <i data-lucide="check-circle-2" class="w-12 h-12 text-emerald-400 mx-auto"></i>
            <div class="text-base font-bold text-white">Bạn đã hoàn thành toàn bộ thẻ ôn tập hôm nay!</div>
            <p class="text-xs text-slate-400">Hãy tiếp tục khám phá thêm từ vựng mới tại London Memory Palace.</p>
          </div>
        `}

      </div>

    </div>
  `;
}

function revealSrsAnswer() {
  const container = document.getElementById('srsAnswerContainer');
  const btn = document.getElementById('srsRevealBtn');
  if (container) container.classList.remove('hidden');
  if (btn) btn.classList.add('hidden');
}

// --- 14. VIEW 11: PROGRESS ANALYTICS HTML ---
function renderEnglishAnalyticsHTML() {
  const data = getStoredEnglishData();

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="line-chart" class="w-4 h-4"></i> ENGINE 10: TRÍ TUỆ THÍCH ỨNG & PHÂN TÍCH TIẾN ĐỘ
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">Bảng Điều Khiển Năng Lực Chi Tiết & Khắc Phục Điểm Yếu</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Hệ thống theo dõi dữ liệu thực tế và tự động điều chỉnh tăng giảm độ khó bài học dựa trên bằng chứng năng lực cụ thể.
        </p>
      </div>

      <!-- Radar / Metrics Deep Dive -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
          <h3 class="text-base font-bold text-white flex items-center gap-2">
            <i data-lucide="target" class="w-4 h-4 text-emerald-400"></i> Điểm Yếu Cần Tập Trung Tuần Này
          </h3>
          <div class="space-y-3">
            <div class="p-3.5 rounded-2xl bg-slate-950 border border-rose-500/30 text-xs space-y-1">
              <div class="font-bold text-rose-400">1. Kỹ năng Nói & Phản Xạ (Speaking: ${data.metrics.speaking}%)</div>
              <p class="text-slate-300 leading-relaxed">Thời gian ngập ngừng khi tạo câu phức còn dài. Khuyến nghị: Tăng 2 buổi Shadowing với tốc độ 1.0x mỗi tuần.</p>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-950 border border-amber-500/30 text-xs space-y-1">
              <div class="font-bold text-amber-400">2. Mở rộng câu đơn trong Viết (Writing: ${data.metrics.writing}%)</div>
              <p class="text-slate-300 leading-relaxed">Hay mắc lỗi câu cụt (fragments) khi dùng liên từ phụ thuộc. Khuyến nghị: Luyện tập khay cú pháp SVO ở Grammar Lab.</p>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
          <h3 class="text-base font-bold text-white flex items-center gap-2">
            <i data-lucide="award" class="w-4 h-4 text-cyan-400"></i> Điểm Mạnh Đã Thiết Lập
          </h3>
          <div class="space-y-3">
            <div class="p-3.5 rounded-2xl bg-slate-950 border border-cyan-500/30 text-xs space-y-1">
              <div class="font-bold text-cyan-400">1. Khả năng Đọc hiểu Ngữ cảnh (Reading: ${data.metrics.reading}%)</div>
              <p class="text-slate-300 leading-relaxed">Nắm bắt ý chính và từ vựng học thuật tốt trên các văn bản CEFR B1.</p>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-950 border border-emerald-500/30 text-xs space-y-1">
              <div class="font-bold text-emerald-400">2. Độ bền Trí nhớ Không gian (London Palace)</div>
              <p class="text-slate-300 leading-relaxed">Tỷ lệ nhớ đúng từ vựng gắn với Loci đạt trên 88% sau 7 ngày.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

// --- 15. VIEW 12: LEARNING SETTINGS HTML ---
function renderEnglishSettingsHTML() {
  return `
    <div class="space-y-6 animate-in fade-in duration-200 max-w-2xl mx-auto">
      
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="settings" class="w-4 h-4"></i> CÀI ĐẶT & CÁ NHÂN HÓA HỆ ĐIỀU HÀNH
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">Tùy Chỉnh Giọng Đọc & Lịch Học Cá Nhân</h2>
      </div>

      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-5 shadow-xl">
        <div class="space-y-2">
          <label class="text-xs font-bold text-slate-300">Giọng Bản Xứ Ưu Tiên:</label>
          <select id="ttsAccentSelect" onchange="updateAccentSetting(this.value)" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm font-semibold">
            <option value="en-US" ${englishTtsAccent === 'en-US' ? 'selected' : ''}>English (American - US Accent)</option>
            <option value="en-GB" ${englishTtsAccent === 'en-GB' ? 'selected' : ''}>English (British - UK RP Accent)</option>
          </select>
        </div>

        <div class="space-y-2">
          <label class="text-xs font-bold text-slate-300">Tốc Độ Đọc Mặc Định:</label>
          <input type="range" min="0.7" max="1.3" step="0.1" value="${englishTtsSpeed}" onchange="updateSpeedSetting(this.value)" class="w-full accent-cyan-500">
          <div class="flex justify-between text-xs text-slate-400 font-mono">
            <span>0.7x (Chậm)</span>
            <span class="text-cyan-400 font-bold" id="speedDisplayVal">${englishTtsSpeed}x</span>
            <span>1.3x (Nhanh)</span>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800">
          <button onclick="testSettingsVoice()" class="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2">
            <i data-lucide="volume-2" class="w-4 h-4"></i> Thử Nghe Giọng Đọc Hiện Tại
          </button>
        </div>
      </div>

    </div>
  `;
}

function updateAccentSetting(accent) {
  englishTtsAccent = accent;
}

function updateSpeedSetting(speed) {
  englishTtsSpeed = parseFloat(speed);
  const display = document.getElementById('speedDisplayVal');
  if (display) display.textContent = `${englishTtsSpeed}x`;
}

function testSettingsVoice() {
  speakEnglish('Welcome to English Mastery OS. Every single word you learn is anchored permanently into your spatial memory palace.', englishTtsSpeed);
}
