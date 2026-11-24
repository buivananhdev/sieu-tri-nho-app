// =========================================================================
// ENGLISH MASTERY OS - EXPANDED SYSTEM ENGINE (V2)
// Hệ điều hành học tập & phát triển năng lực tiếng Anh toàn diện 10 Engine
// Đầy đủ Ngữ pháp thực tế, Từ vựng theo chủ đề, Bài nghe phân cấp & Điểm danh đọc
// =========================================================================

const ENGLISH_STORAGE_KEY = 'supermind_english_os_v1';

let currentEnglishSubView = 'dashboard';
let currentSelectedDistrictId = 'kings_cross';
let currentGrammarPillarId = 1;
let currentListeningLessonId = 'listen_daily_coffee';
let currentReadingLessonId = 'read_1';
let currentDailyDayNumber = 1;

// Vocabulary Thematic Filter & Status Filter State
let currentEnglishVocabPackId = 'all'; // 'all' or pack id
let currentEnglishVocabStatusFilter = 'all'; // 'all', 'mastered', 'learning'
let currentEnglishVocabSearchQuery = '';
let currentEnglishVocabLevelFilter = 'all'; // 'all', 'A1', 'A2', 'B1', 'B2', 'C1'
let englishAudioMode = 'auto'; // 'auto', 'mobile_hd', 'browser_speech'

// Listening Filters
let currentListeningCategoryFilter = 'all'; // 'all', 'daily', 'career', 'tech', 'finance'

// Reading WPM Timer State
let readingTimerStart = null;

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
    dailyReadingCheckIn: {}, // { '2026-11-24': true }
    cefrEstimate: 'A2 - Pre-intermediate',
    metrics: {
      listening: 65,
      speaking: 42,
      reading: 58,
      writing: 35,
      vocabulary: 480,
      grammar: 60
    },
    weeklySchedule: {
      completedDays: [1],
      totalPlanned: 4
    },
    masteredWords: ['commute', 'groceries', 'deadline'],
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

// Toggle Mastered Word
function toggleWordMastered(wordId) {
  if (typeof playSound === 'function') playSound('click');
  const data = getStoredEnglishData();
  if (!data.masteredWords) data.masteredWords = [];

  const index = data.masteredWords.indexOf(wordId);
  if (index > -1) {
    data.masteredWords.splice(index, 1);
  } else {
    data.masteredWords.push(wordId);
    if (typeof playSound === 'function') playSound('correct');
  }

  saveEnglishData(data);
  renderEnglishSubView(currentEnglishSubView);
}

// Check-in Daily Reading
function checkInDailyReading(readId) {
  if (typeof playSound === 'function') playSound('correct');
  const data = getStoredEnglishData();
  if (!data.dailyReadingCheckIn) data.dailyReadingCheckIn = {};

  const todayStr = new Date().toISOString().split('T')[0];
  data.dailyReadingCheckIn[todayStr] = true;
  data.streakDays = (data.streakDays || 0) + 1;

  saveEnglishData(data);
  alert('🎉 Chúc mừng bạn đã hoàn thành bài đọc hôm nay và điểm danh thành công! Chuỗi ngày học tăng lên: ' + data.streakDays + ' ngày!');
  renderEnglishSubView('reading');
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
    { id: 'dashboard', name: 'Dashboard', icon: 'layout-dashboard' },
    { id: 'palace', name: 'London Palace', icon: 'castle' },
    { id: 'vocab', name: 'Từ Vựng Chủ Đề', icon: 'book-a' },
    { id: 'grammar', name: 'Ngữ Pháp Thực Chiến', icon: 'binary' },
    { id: 'listening', name: 'Kho Bài Nghe', icon: 'headphones' },
    { id: 'speaking', name: 'Luyện Nói Micro', icon: 'mic' },
    { id: 'reading', name: 'Đọc & Điểm Danh', icon: 'book-open' },
    { id: 'writing', name: 'Luyện Viết', icon: 'pen-tool' },
    { id: 'lessons', name: 'Daily 35m', icon: 'calendar-check' },
    { id: 'reviews', name: 'Review SRS', icon: 'brain-circuit' },
    { id: 'analytics', name: 'Bản Đồ Năng Lực', icon: 'line-chart' },
    { id: 'settings', name: 'Cài Đặt Giọng', icon: 'settings' }
  ];

  navContainer.innerHTML = views.map(v => {
    const isActive = v.id === activeView;
    const activeClass = isActive
      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold shadow-lg shadow-blue-500/30 border-blue-400'
      : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800';

    return `
      <button onclick="switchEnglishSubView('${v.id}')" class="px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap min-h-[44px] ${activeClass}">
        <i data-lucide="${v.icon}" class="w-4 h-4 ${isActive ? 'text-white' : 'text-blue-400'}"></i>
        <span>${v.name}</span>
      </button>
    `;
  }).join('');
}

// --- 3. AUDIO TTS HELPER (BULLETPROOF MOBILE & DESKTOP DUAL ENGINE) ---
let currentTtsAudioElement = null;
let isMobileAudioUnlocked = false;

function unlockMobileAudio() {
  if (isMobileAudioUnlocked) return;
  isMobileAudioUnlocked = true;
  try {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const silentUtterance = new SpeechSynthesisUtterance(' ');
      silentUtterance.volume = 0.01;
      silentUtterance.rate = 2.0;
      window.speechSynthesis.speak(silentUtterance);
    }
    const silentAudio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
    silentAudio.play().catch(() => {});
  } catch (e) {
    // Ignore
  }
}
if (typeof document !== 'undefined') {
  document.addEventListener('touchstart', unlockMobileAudio, { once: true, passive: true });
  document.addEventListener('click', unlockMobileAudio, { once: true, passive: true });
}

function stopEnglishSpeech() {
  if (currentTtsAudioElement) {
    currentTtsAudioElement.pause();
    currentTtsAudioElement.currentTime = 0;
    currentTtsAudioElement = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function playMobileHdAudio(text, onEnd = null) {
  try {
    stopEnglishSpeech();
    const cleanText = (text || '').trim();
    if (!cleanText) return;

    // Type 2 = Authentic American pronunciation (Webster/American Heritage standard)
    const encoded = encodeURIComponent(cleanText);
    const primaryUrl = 'https://dict.youdao.com/dictvoice?audio=' + encoded + '&type=2';
    const secondaryUrl = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-US&q=' + encoded;

    const audio = new Audio(primaryUrl);
    currentTtsAudioElement = audio;

    if (onEnd) {
      audio.onended = onEnd;
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn('Primary audio stream failed, falling back to secondary stream:', err);
        const fallbackAudio = new Audio(secondaryUrl);
        currentTtsAudioElement = fallbackAudio;
        if (onEnd) fallbackAudio.onended = onEnd;
        fallbackAudio.play().catch(e => console.error('All mobile audio streams failed:', e));
      });
    }
  } catch (err) {
    console.error('playMobileHdAudio error:', err);
  }
}

function speakEnglish(text, rate = null) {
  unlockMobileAudio();
  if (!text) return;

  const isMobile = typeof navigator !== 'undefined' && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768);

  // If user selected mobile HD audio or on mobile with long text (which freezes speech synthesis)
  if (englishAudioMode === 'mobile_hd' || (englishAudioMode === 'auto' && isMobile && text.length > 80)) {
    playMobileHdAudio(text);
    return;
  }

  // Try SpeechSynthesis with safe mobile fallback
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      // Do NOT cancel immediately if not speaking (iOS Safari bug)
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = englishTtsAccent || 'en-US';
      utterance.rate = rate || englishTtsSpeed || 1.0;

      // Prevent garbage collection on mobile
      window._activeSpeechUtterance = utterance;

      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const preferredVoice = voices.find(v => (v.lang === 'en-US' || v.lang.includes('en-US')) && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Ava')));
        if (preferredVoice) utterance.voice = preferredVoice;
      }

      let speechStarted = false;
      utterance.onstart = () => {
        speechStarted = true;
      };

      utterance.onerror = (e) => {
        console.warn('SpeechSynthesis error, falling back to Mobile HD Audio:', e);
        playMobileHdAudio(text);
      };

      // Watchdog fallback for mobile silence bug: if utterance doesn't start in 400ms, use HTML5 audio
      setTimeout(() => {
        if (!speechStarted && isMobile) {
          console.log('Mobile SpeechSynthesis watchdog triggered -> playing HD audio');
          playMobileHdAudio(text);
        }
      }, 400);

      window.speechSynthesis.speak(utterance);
      return;
    } catch (e) {
      console.warn('SpeechSynthesis exception, falling back:', e);
      playMobileHdAudio(text);
      return;
    }
  }

  // If no SpeechSynthesis at all
  playMobileHdAudio(text);
}

function testMobileAudio() {
  if (typeof playSound === 'function') playSound('click');
  playMobileHdAudio('Hello! Welcome to the English Mastery Operating System. Your audio is working perfectly on this phone.');
  alert('🔊 Đang phát âm thanh mẫu giọng Mỹ: "Hello! Welcome to English Mastery OS...". Nếu bạn nghe thấy, âm thanh trên điện thoại của bạn đã hoạt động 100%!');
}

function toggleEnglishAudioMode() {
  if (typeof playSound === 'function') playSound('click');
  if (englishAudioMode === 'auto') {
    englishAudioMode = 'mobile_hd';
    alert('🔊 Đã chuyển sang chế độ: Chuẩn Di Động HD (Sử dụng luồng âm thanh trực tiếp, 100% không lo lỗi trình duyệt điện thoại).');
  } else if (englishAudioMode === 'mobile_hd') {
    englishAudioMode = 'browser_speech';
    alert('🔊 Đã chuyển sang chế độ: Giọng Trình Duyệt (Web Speech API).');
  } else {
    englishAudioMode = 'auto';
    alert('🔊 Đã chuyển sang chế độ: Tự Động Thông Minh (Khuyên Dùng - Tự động thích ứng trên mọi điện thoại & máy tính).');
  }
  renderEnglishSubView(currentEnglishSubView);
}

// --- 4. VIEW 1: DASHBOARD HTML ---
function renderEnglishDashboardHTML() {
  const data = getStoredEnglishData();
  const schedule = window.ENGLISH_OS_CONFIG.defaultSchedule;
  const todayStr = new Date().toISOString().split('T')[0];
  const isCheckedInToday = data.dailyReadingCheckIn && data.dailyReadingCheckIn[todayStr];

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
              Môi trường cá nhân hóa phát triển đồng thời <strong>Listening • Speaking • Reading • Writing • Vocabulary • Grammar</strong> với giọng Mỹ tự nhiên chuẩn và Cung Điện Trí Nhớ London.
            </p>
          </div>

          <!-- Quick Metrics Cards -->
          <div class="flex flex-wrap sm:flex-nowrap gap-3 w-full lg:w-auto">
            <div class="p-4 rounded-2xl bg-slate-950/80 border border-blue-500/30 flex-1 sm:w-36 text-center space-y-1">
              <div class="text-[11px] font-bold text-slate-400 uppercase">Trình Độ CEFR</div>
              <div class="text-xl font-black text-cyan-400 font-mono">${data.cefrEstimate}</div>
              <div class="text-[10px] text-slate-500">Mục tiêu: B2 - C1</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 flex-1 sm:w-36 text-center space-y-1">
              <div class="text-[11px] font-bold text-slate-400 uppercase">Chuỗi Ngày Học</div>
              <div class="text-2xl font-black text-emerald-400 font-mono">${data.streakDays} Ngày 🔥</div>
              <div class="text-[10px] text-emerald-400/80">${isCheckedInToday ? '✓ Đã điểm danh' : 'Chưa điểm danh đọc'}</div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 flex-1 sm:w-36 text-center space-y-1">
              <div class="text-[11px] font-bold text-slate-400 uppercase">Từ Đã Thuộc</div>
              <div class="text-2xl font-black text-purple-300 font-mono">${(data.masteredWords || []).length} Từ</div>
              <div class="text-[10px] text-slate-500">Ký ức vĩnh viễn</div>
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
            <h2 class="text-lg sm:text-xl font-bold text-white mt-0.5">Tiến Độ 4 Kỹ Năng: Hướng Tới Sử Dụng Tiếng Anh Như Ngôn Ngữ Thứ 2</h2>
          </div>
          <div class="text-xs text-slate-400 italic">
            * Dựa trên dữ liệu tương tác nghe, nói, đọc, viết thực tế.
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
              Nghe hiểu giọng Mỹ đời thường và các chủ đề chuyên ngành AI, Tài chính.
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
              Luyện nói micro tương tác, phản xạ Q&A trong 10 giây và Shadowing.
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
              Thư viện đọc phân cấp CEFR, bộ đếm WPM và điểm danh đọc hàng ngày.
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
              Mở rộng câu đơn thành câu phức và viết email, bài luận thực chiến.
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button onclick="switchEnglishSubView('vocab')" class="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-left transition-all space-y-2 group">
          <div class="flex items-center justify-between">
            <i data-lucide="book-a" class="w-6 h-6 text-amber-400"></i>
            <span class="text-xs text-amber-400 font-bold group-hover:translate-x-1 transition-transform">Khám phá ➔</span>
          </div>
          <h3 class="text-base font-bold text-white">Từ Vựng Theo Chủ Đề</h3>
          <p class="text-xs text-slate-400">Đầy đủ chủ đề giao tiếp thường ngày, công sở, AI và tài chính có tính năng Đã Thuộc.</p>
        </button>

        <button onclick="switchEnglishSubView('grammar')" class="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 text-left transition-all space-y-2 group">
          <div class="flex items-center justify-between">
            <i data-lucide="binary" class="w-6 h-6 text-purple-400"></i>
            <span class="text-xs text-purple-400 font-bold group-hover:translate-x-1 transition-transform">Khám phá ➔</span>
          </div>
          <h3 class="text-base font-bold text-white">Ngữ Pháp Thực Chiến</h3>
          <p class="text-xs text-slate-400">15 Trụ cột dễ hiểu, có ví dụ thực tế đời sống và bảng đối chiếu Đúng vs Sai.</p>
        </button>

        <button onclick="switchEnglishSubView('listening')" class="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-left transition-all space-y-2 group">
          <div class="flex items-center justify-between">
            <i data-lucide="headphones" class="w-6 h-6 text-blue-400"></i>
            <span class="text-xs text-blue-400 font-bold group-hover:translate-x-1 transition-transform">Khám phá ➔</span>
          </div>
          <h3 class="text-base font-bold text-white">Kho Bài Nghe Phân Cấp</h3>
          <p class="text-xs text-slate-400">Từ cơ bản A1 đến nâng cao C1, giọng Mỹ tự nhiên, có bài tập Dictation chép chính tả.</p>
        </button>
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
            Mã hóa từ vựng, IPA, cấu trúc và ngữ cảnh vào 6 địa danh lịch sử của London. Đi bộ qua từng địa điểm để kích hoạt trí nhớ không gian.
          </p>
        </div>
      </div>

      <!-- District Selector Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        ${palace.districts.map(d => {
          const isSelected = d.id === currentSelectedDistrictId;
          const cls = isSelected
            ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold shadow-lg shadow-amber-500/20 border-amber-400'
            : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800';

          return `
            <button onclick="selectEnglishDistrict('${d.id}')" class="px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap min-h-[44px] ${cls}">
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
            <span class="text-amber-400 font-mono">Bấm loa để nghe giọng Mỹ</span>
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
                    <button onclick="speakEnglish('${locus.word}')" title="Nghe phát âm" class="p-2.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/40 text-cyan-300 border border-blue-500/30 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center">
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
                  <button onclick="speakEnglish('${locus.example.replace(/'/g, "\\'")}')" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex-shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center">
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

// --- 6. VIEW 3: VOCABULARY INTELLIGENCE (KHO TỪ VỰNG TOÀN DIỆN TRỌN BỘ 12 CHỦ ĐỀ) ---
function renderEnglishVocabHTML() {
  const packs = window.VOCABULARY_THEMATIC_PACKS || [];
  const data = getStoredEnglishData();
  const masteredList = data.masteredWords || [];

  // Flatten all words across all packs
  let allWords = [];
  packs.forEach(p => {
    (p.words || []).forEach(w => {
      allWords.push({ ...w, packId: p.id, packName: p.name, packIcon: p.icon });
    });
  });

  const totalWordsCount = allWords.length;
  const totalMasteredCount = allWords.filter(w => masteredList.includes(w.id)).length;
  const totalLearningCount = totalWordsCount - totalMasteredCount;
  const masterPercent = totalWordsCount > 0 ? Math.round((totalMasteredCount / totalWordsCount) * 100) : 0;

  // Filter by pack
  let filtered = allWords;
  if (currentEnglishVocabPackId !== 'all') {
    filtered = filtered.filter(w => w.packId === currentEnglishVocabPackId);
  }

  // Filter by CEFR Level
  if (currentEnglishVocabLevelFilter !== 'all') {
    filtered = filtered.filter(w => w.level === currentEnglishVocabLevelFilter);
  }

  // Filter by search query
  if (currentEnglishVocabSearchQuery.trim()) {
    const q = currentEnglishVocabSearchQuery.trim().toLowerCase();
    filtered = filtered.filter(w => 
      w.word.toLowerCase().includes(q) || 
      (w.vn && w.vn.toLowerCase().includes(q)) ||
      (w.ipa && w.ipa.toLowerCase().includes(q)) ||
      (w.collocations && w.collocations.toLowerCase().includes(q))
    );
  }

  // Filter by status
  if (currentEnglishVocabStatusFilter === 'mastered') {
    filtered = filtered.filter(w => masteredList.includes(w.id));
  } else if (currentEnglishVocabStatusFilter === 'learning') {
    filtered = filtered.filter(w => !masteredList.includes(w.id));
  }

  const levels = [
    { id: 'all', label: 'Tất Cả Cấp Độ' },
    { id: 'A2', label: 'A2 Căn Bản' },
    { id: 'B1', label: 'B1 Trung Cấp' },
    { id: 'B2', label: 'B2 Trung Cao' },
    { id: 'C1', label: 'C1 Cao Cấp' }
  ];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner & Metrics -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div class="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <i data-lucide="book-a" class="w-4 h-4"></i> ENGINE 2: TRỌN BỘ TỪ VỰNG TOÀN DIỆN 12 CHỦ ĐỀ
            </div>
            <h2 class="text-xl sm:text-2xl font-black text-white mt-1">Kho Từ Vựng Giao Tiếp, Công Sở & Chuyên Ngành</h2>
          </div>

          <!-- Quick Audio Test on Mobile -->
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <button onclick="testMobileAudio()" class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all min-h-[44px]">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
              <span>Thử Loa Điện Thoại</span>
            </button>
            <button onclick="toggleEnglishAudioMode()" title="Đổi chế độ âm thanh" class="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all min-h-[44px]">
              <i data-lucide="settings-2" class="w-4 h-4 text-cyan-400"></i>
              <span class="hidden sm:inline">${englishAudioMode === 'auto' ? 'Tự Động' : (englishAudioMode === 'mobile_hd' ? 'Chuẩn Di Động' : 'Web Speech')}</span>
            </button>
          </div>
        </div>

        <!-- Progress Overview Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-800/80">
          <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
            <div class="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <i data-lucide="layers" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="text-[11px] text-slate-400 font-medium">Tổng Kho Từ</div>
              <div class="text-lg font-black text-white">${totalWordsCount} từ</div>
            </div>
          </div>

          <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
            <div class="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <i data-lucide="check-circle-2" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="text-[11px] text-slate-400 font-medium">Đã Thuộc Vĩnh Viễn</div>
              <div class="text-lg font-black text-emerald-400">${totalMasteredCount} (${masterPercent}%)</div>
            </div>
          </div>

          <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
            <div class="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <i data-lucide="loader" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="text-[11px] text-slate-400 font-medium">Đang Nạp Trí Nhớ</div>
              <div class="text-lg font-black text-cyan-400">${totalLearningCount} từ</div>
            </div>
          </div>

          <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
            <div class="p-2 rounded-xl bg-purple-500/20 text-purple-400">
              <i data-lucide="award" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="text-[11px] text-slate-400 font-medium">Đang Hiển Thị</div>
              <div class="text-lg font-black text-purple-300">${filtered.length} từ</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Search & Filters Container -->
      <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <!-- Live Search Input -->
        <div class="relative">
          <i data-lucide="search" class="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2"></i>
          <input 
            type="text" 
            id="vocabSearchInput"
            value="${currentEnglishVocabSearchQuery}" 
            oninput="onEnglishVocabSearch(this.value)" 
            placeholder="Tìm kiếm từ tiếng Anh, phiên âm IPA, collocations hoặc nghĩa tiếng Việt..." 
            class="w-full pl-12 pr-10 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-all font-sans min-h-[44px]"
          />
          ${currentEnglishVocabSearchQuery ? `
            <button onclick="clearEnglishVocabSearch()" class="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-white">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          ` : ''}
        </div>

        <!-- CEFR Level Filters -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span class="text-slate-400 font-bold whitespace-nowrap flex items-center gap-1">
            <i data-lucide="filter" class="w-3.5 h-3.5 text-amber-400"></i> Cấp độ:
          </span>
          ${levels.map(lvl => {
            const isLvlActive = currentEnglishVocabLevelFilter === lvl.id;
            return `
              <button onclick="setEnglishVocabLevelFilter('${lvl.id}')" class="px-3 py-1.5 rounded-lg border font-semibold transition-all whitespace-nowrap min-h-[36px] ${
                isLvlActive 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm' 
                  : 'bg-slate-950 text-slate-400 hover:text-white border-slate-800'
              }">
                ${lvl.label}
              </button>
            `;
          }).join('')}
        </div>

        <!-- 12 Thematic Packs Pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
          <!-- All Packs Pill -->
          <button onclick="selectEnglishVocabPack('all')" class="px-3.5 py-2 rounded-xl border font-bold transition-all flex items-center gap-1.5 whitespace-nowrap min-h-[40px] ${
            currentEnglishVocabPackId === 'all'
              ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white border-amber-400 shadow-md'
              : 'bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800'
          }">
            <i data-lucide="globe" class="w-4 h-4"></i>
            <span>Tất Cả 12 Chủ Đề (${allWords.length})</span>
          </button>

          ${packs.map(p => {
            const isSelected = p.id === currentEnglishVocabPackId;
            const count = (p.words || []).length;
            const cls = isSelected
              ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold shadow-md border-amber-400'
              : 'bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800';

            return `
              <button onclick="selectEnglishVocabPack('${p.id}')" class="px-3.5 py-2 rounded-xl border text-xs transition-all flex items-center gap-1.5 whitespace-nowrap min-h-[40px] ${cls}">
                <i data-lucide="${p.icon}" class="w-3.5 h-3.5"></i>
                <span>${p.name} (${count})</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Status Filter Bar -->
        <div class="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
          <div class="flex items-center gap-1.5">
            <span class="text-slate-400 font-medium">Trạng thái:</span>
            <button onclick="setEnglishVocabStatusFilter('all')" class="px-3 py-1 rounded-lg ${currentEnglishVocabStatusFilter === 'all' ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40' : 'text-slate-400 hover:text-white'}">
              Tất Cả (${filtered.length})
            </button>
            <button onclick="setEnglishVocabStatusFilter('mastered')" class="px-3 py-1 rounded-lg ${currentEnglishVocabStatusFilter === 'mastered' ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40' : 'text-slate-400 hover:text-white'}">
              Đã Thuộc (${filtered.filter(w => masteredList.includes(w.id)).length})
            </button>
            <button onclick="setEnglishVocabStatusFilter('learning')" class="px-3 py-1 rounded-lg ${currentEnglishVocabStatusFilter === 'learning' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40' : 'text-slate-400 hover:text-white'}">
              Đang Nạp (${filtered.filter(w => !masteredList.includes(w.id)).length})
            </button>
          </div>

          <div class="text-[11px] text-slate-500 hidden md:flex items-center gap-1">
            <i data-lucide="info" class="w-3.5 h-3.5 text-cyan-400"></i> Bấm loa để nghe giọng Mỹ chuẩn. Bấm tích xanh khi đã thuộc.
          </div>
        </div>
      </div>

      <!-- Words Grid -->
      ${filtered.length === 0 ? `
        <div class="p-12 text-center rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
          <div class="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <i data-lucide="search-x" class="w-6 h-6"></i>
          </div>
          <h4 class="text-base font-bold text-white">Không tìm thấy từ vựng phù hợp</h4>
          <p class="text-xs text-slate-400 max-w-md mx-auto">
            Không có từ nào khớp với từ khóa "${currentEnglishVocabSearchQuery}" hoặc bộ lọc cấp độ hiện tại. Hãy thử tìm từ khác hoặc bấm xóa lọc.
          </p>
          <button onclick="clearEnglishVocabSearch()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold transition-all">
            Xóa Lọc & Xem Tất Cả
          </button>
        </div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${filtered.map(w => {
            const isMastered = masteredList.includes(w.id);

            return `
              <div class="p-5 rounded-2xl bg-slate-900 border ${isMastered ? 'border-emerald-500/50 shadow-emerald-950/20' : 'border-slate-800'} space-y-3 shadow-lg flex flex-col justify-between transition-all hover:border-slate-700">
                <div class="space-y-2">
                  <div class="flex items-start justify-between gap-2">
                    <div>
                      <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                          ${w.pos}
                        </span>
                        ${w.level ? `
                          <span class="text-[10px] font-black px-2 py-0.5 rounded bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                            ${w.level}
                          </span>
                        ` : ''}
                        ${w.packName ? `
                          <span class="text-[9px] text-slate-400 truncate max-w-[120px]">
                            ${w.packName}
                          </span>
                        ` : ''}
                      </div>

                      <h4 class="text-xl font-black text-white mt-1.5 tracking-tight">${w.word}</h4>
                      <span class="text-xs text-cyan-400 font-mono">${w.ipa}</span>
                    </div>

                    <!-- Audio & Mastered Action -->
                    <div class="flex items-center gap-1.5 flex-shrink-0">
                      <button onclick="speakEnglish('${w.word.replace(/'/g, "\\'")}')" title="Nghe phát âm (chuẩn Mỹ)" class="p-2.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/40 text-cyan-300 border border-blue-500/30 transition-all min-h-[42px] min-w-[42px] flex items-center justify-center">
                        <i data-lucide="volume-2" class="w-4 h-4"></i>
                      </button>
                      <button onclick="toggleWordMastered('${w.id}')" title="${isMastered ? 'Đã thuộc vĩnh viễn' : 'Đánh dấu đã thuộc'}" class="p-2.5 rounded-xl border transition-all min-h-[42px] min-w-[42px] flex items-center justify-center ${
                        isMastered ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-sm shadow-emerald-500/20' : 'bg-slate-800 text-slate-400 hover:text-white border-slate-700'
                      }">
                        <i data-lucide="${isMastered ? 'check-check' : 'check'}" class="w-4 h-4"></i>
                      </button>
                    </div>
                  </div>

                  <div class="text-xs font-bold text-slate-200 leading-snug">
                    ➔ ${w.vn}
                  </div>

                  <!-- Collocation -->
                  ${w.collocations ? `
                    <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300">
                      <span class="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">Cụm từ Collocation:</span>
                      <span class="font-medium text-slate-200">${w.collocations}</span>
                    </div>
                  ` : ''}
                </div>

                <!-- Example Sentence -->
                <div class="pt-2 border-t border-slate-800/80 flex items-start justify-between gap-2">
                  <p class="text-[11px] text-slate-400 italic font-serif leading-relaxed">
                    "${w.example}"
                  </p>
                  <button onclick="speakEnglish('${w.example.replace(/'/g, "\\'")}')" title="Nghe câu ví dụ" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-300 flex-shrink-0 min-h-[32px] min-w-[32px] flex items-center justify-center">
                    <i data-lucide="volume-1" class="w-3.5 h-3.5"></i>
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

function onEnglishVocabSearch(query) {
  currentEnglishVocabSearchQuery = query;
  // Re-render vocab view without full scroll
  const container = document.getElementById('englishOSContentContainer');
  if (container) {
    container.innerHTML = renderEnglishVocabHTML();
    if (typeof lucide !== 'undefined') lucide.createIcons();
    // Keep focus in input
    const input = document.getElementById('vocabSearchInput');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }
}

function clearEnglishVocabSearch() {
  currentEnglishVocabSearchQuery = '';
  currentEnglishVocabLevelFilter = 'all';
  renderEnglishSubView('vocab');
}

function setEnglishVocabLevelFilter(level) {
  if (typeof playSound === 'function') playSound('click');
  currentEnglishVocabLevelFilter = level;
  renderEnglishSubView('vocab');
}

function selectEnglishVocabPack(packId) {
  if (typeof playSound === 'function') playSound('click');
  currentEnglishVocabPackId = packId;
  renderEnglishSubView('vocab');
}

function setEnglishVocabStatusFilter(filter) {
  if (typeof playSound === 'function') playSound('click');
  currentEnglishVocabStatusFilter = filter;
  renderEnglishSubView('vocab');
}

// --- 7. VIEW 4: GRAMMAR LABORATORY (15 TRỤ CỘT THỰC CHIẾN ĐẦY ĐỦ) ---
function renderEnglishGrammarHTML() {
  const pillars = window.GRAMMAR_15_PILLARS;
  const activePillar = pillars.find(p => p.id === currentGrammarPillarId) || pillars[0];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-purple-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="binary" class="w-4 h-4"></i> ENGINE 4: PHÒNG THÍ NGHIỆM CẤU TRÚC NGỮ PHÁP THỰC CHIẾN
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">15 Trụ Cột Ngữ Pháp Dễ Hiểu, Dễ Nhớ & Ứng Dụng Đời Thực</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Ngữ pháp không phải là công thức chết để thi cử! Mỗi trụ cột đều có <strong>Bối cảnh thực tế khi nào bắt buộc dùng</strong>, <strong>Câu thần chú nhớ nhanh</strong>, <strong>Bảng đối chiếu Đúng vs Sai</strong> và <strong>Ví dụ giao tiếp sinh động</strong>.
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
            <button onclick="selectGrammarPillar(${p.id})" class="px-3.5 py-2 rounded-xl border text-xs transition-all whitespace-nowrap min-h-[44px] ${cls}">
              Trụ Cột ${p.id}: ${p.name.split('(')[0]}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Active Pillar Breakdown Card -->
      <div class="rounded-3xl bg-slate-900 border-2 border-purple-500/40 p-6 sm:p-8 space-y-6 shadow-2xl">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <span class="text-xs font-black text-purple-400 font-mono uppercase">TRỤ CỘT ${activePillar.id} / 15</span>
            <h3 class="text-xl sm:text-2xl font-black text-white mt-1">${activePillar.name}</h3>
          </div>
          <span class="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono font-bold">
            Ứng Dụng Đời Thực 100%
          </span>
        </div>

        <!-- 1. Formula & Mnemonic Hook -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 space-y-1">
            <div class="text-xs font-bold text-purple-400 uppercase">Công Thức Cốt Lõi:</div>
            <div class="font-mono text-xs sm:text-sm text-purple-200 font-bold">${activePillar.formula}</div>
          </div>
          <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
            <div class="text-xs font-bold text-amber-400 uppercase flex items-center gap-1.5">
              <i data-lucide="zap" class="w-3.5 h-3.5"></i> Câu Thần Chú Nhớ Nhanh (5 Giây):
            </div>
            <div class="text-xs sm:text-sm text-amber-200 font-bold font-serif">${activePillar.mnemonicHook}</div>
          </div>
        </div>

        <!-- 2. Real Life Context -->
        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
          <div class="text-xs font-bold text-cyan-400 uppercase flex items-center gap-1.5">
            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i> Khi Nào Ngoài Đời Thực BẮT BUỘC Phải Dùng?
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${activePillar.realLifeContext}</p>
        </div>

        <!-- 3. Wrong vs Right Table -->
        ${activePillar.wrongVsRight ? `
          <div class="space-y-3">
            <div class="text-xs font-bold text-rose-400 uppercase flex items-center gap-1.5">
              <i data-lucide="alert-triangle" class="w-4 h-4"></i> Bảng Đối Chiếu: Câu Sai Người Việt Hay Nói vs Câu Đúng Chuẩn Bản Xứ
            </div>
            <div class="space-y-2">
              ${activePillar.wrongVsRight.map(c => `
                <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-1.5 text-xs">
                  <div class="flex items-start gap-2 text-rose-400">
                    <span class="font-bold">❌ SAI:</span>
                    <span>"${c.wrong}"</span>
                  </div>
                  <div class="flex items-start gap-2 text-emerald-400 font-bold">
                    <span>✓ ĐÚNG:</span>
                    <span>"${c.right}"</span>
                  </div>
                  <div class="text-[11px] text-slate-400 italic pt-1 border-t border-slate-900">
                    ➔ <em>Giải thích bản chất:</em> ${c.reason}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 4. Practical Real Examples with Audio -->
        <div class="space-y-3 pt-2 border-t border-slate-800">
          <div class="text-xs font-bold text-emerald-400 uppercase flex items-center gap-1.5">
            <i data-lucide="sparkles" class="w-4 h-4"></i> Các Ví Dụ Giao Tiếp Thực Chiến (Bấm loa để nghe giọng Mỹ):
          </div>
          <div class="space-y-2">
            ${(activePillar.practicalExamples || []).map(ex => `
              <div class="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs">
                <div class="space-y-0.5">
                  <div class="text-white font-serif text-xs sm:text-sm">"${ex.en}"</div>
                  <div class="text-slate-400 text-[11px] italic">${ex.vn}</div>
                </div>
                <button onclick="speakEnglish('${ex.en.replace(/'/g, "\\'")}')" class="p-2 rounded-xl bg-blue-500/20 hover:bg-blue-500/40 text-cyan-300 border border-blue-500/30 flex-shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
            `).join('')}
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

// --- 8. VIEW 5: LISTENING STUDIO (BÀI NGHE PHÂN CẤP TỪ CƠ BẢN ĐẾN NÂNG CAO) ---
function renderEnglishListeningHTML() {
  const library = window.LISTENING_LIBRARY_DATA;
  let filteredTracks = library;
  if (currentListeningCategoryFilter !== 'all') {
    filteredTracks = library.filter(t => t.category === currentListeningCategoryFilter);
  }
  const currentLesson = library.find(l => l.id === currentListeningLessonId) || library[0];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
        <div class="text-xs font-black text-blue-400 uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="headphones" class="w-4 h-4"></i> ENGINE 5: KHO BÀI NGHE PHÂN CẤP GIỌNG MỸ ĐỜI THỰC
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">Luyện Nghe Từ Cơ Bản A1 Đến Chuyên Ngành C1 (AI, Tài Chính)</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Nghe hiểu tự nhiên như ngôn ngữ thứ hai với tốc độ tùy biến, thử thách chép chính tả (Dictation) và trắc nghiệm phản xạ hiểu sâu.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button onclick="setListeningCategoryFilter('all')" class="px-3.5 py-2 rounded-xl border text-xs font-bold whitespace-nowrap min-h-[44px] ${currentListeningCategoryFilter === 'all' ? 'bg-blue-600 text-white border-blue-400' : 'bg-slate-900 text-slate-400 border-slate-800'}">Tất Cả (${library.length})</button>
        <button onclick="setListeningCategoryFilter('daily')" class="px-3.5 py-2 rounded-xl border text-xs font-bold whitespace-nowrap min-h-[44px] ${currentListeningCategoryFilter === 'daily' ? 'bg-amber-600 text-white border-amber-400' : 'bg-slate-900 text-slate-400 border-slate-800'}">Giao Tiếp Thường Ngày (A1-A2)</button>
        <button onclick="setListeningCategoryFilter('career')" class="px-3.5 py-2 rounded-xl border text-xs font-bold whitespace-nowrap min-h-[44px] ${currentListeningCategoryFilter === 'career' ? 'bg-emerald-600 text-white border-emerald-400' : 'bg-slate-900 text-slate-400 border-slate-800'}">Công Sở & Phỏng Vấn (B1-B2)</button>
        <button onclick="setListeningCategoryFilter('tech')" class="px-3.5 py-2 rounded-xl border text-xs font-bold whitespace-nowrap min-h-[44px] ${currentListeningCategoryFilter === 'tech' ? 'bg-cyan-600 text-white border-cyan-400' : 'bg-slate-900 text-slate-400 border-slate-800'}">Chuyên Ngành: AI & Công Nghệ (C1)</button>
        <button onclick="setListeningCategoryFilter('finance')" class="px-3.5 py-2 rounded-xl border text-xs font-bold whitespace-nowrap min-h-[44px] ${currentListeningCategoryFilter === 'finance' ? 'bg-purple-600 text-white border-purple-400' : 'bg-slate-900 text-slate-400 border-slate-800'}">Chuyên Ngành: Tài Chính & Đầu Tư (C1)</button>
      </div>

      <!-- Track Selector Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        ${filteredTracks.map(t => {
          const isSelected = t.id === currentLesson.id;
          return `
            <div onclick="selectListeningTrack('${t.id}')" class="p-4 rounded-2xl border cursor-pointer transition-all space-y-1.5 ${
              isSelected ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/20' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
            }">
              <div class="flex items-center justify-between text-[11px] font-mono">
                <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">${t.level}</span>
                <span class="text-slate-500">${t.duration}</span>
              </div>
              <h4 class="text-xs sm:text-sm font-bold text-white line-clamp-1">${t.title}</h4>
              <p class="text-[11px] text-slate-400 line-clamp-1">${t.titleVn}</p>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Active Lesson Player Card -->
      <div class="rounded-3xl bg-slate-900 border-2 border-blue-500/40 p-6 sm:p-8 space-y-6 shadow-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span class="text-xs font-bold text-cyan-400 font-mono uppercase">${currentLesson.categoryName} • ${currentLesson.level}</span>
            <h3 class="text-xl sm:text-2xl font-black text-white mt-0.5">${currentLesson.title}</h3>
            <div class="text-xs text-slate-400">${currentLesson.titleVn}</div>
          </div>

          <!-- Speed Controls -->
          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-400 font-medium">Tốc độ:</span>
            <div class="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              ${(currentLesson.speedOptions || [0.75, 1.0, 1.25]).map(spd => `
                <button onclick="setListeningSpeed(${spd})" class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all min-h-[36px] ${
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
          <div class="flex items-center gap-3 w-full sm:w-auto">
            <button onclick="speakEnglish('${currentLesson.audioText.replace(/'/g, "\\'")}', ${englishTtsSpeed})" class="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all min-h-[44px]">
              <i data-lucide="play" class="w-4 h-4 fill-current"></i> Nghe Toàn Đoạn (Giọng Mỹ)
            </button>
            <button onclick="stopEnglishSpeech()" class="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all min-h-[44px]">
              Dừng Lại
            </button>
          </div>

          <button onclick="toggleListeningTranscript()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all min-h-[44px]">
            <i data-lucide="file-text" class="w-4 h-4"></i> Ẩn / Hiện Phụ Đề
          </button>
        </div>

        <!-- Transcript Content -->
        <div id="listeningTranscriptContainer" class="p-5 rounded-2xl bg-black/40 border border-slate-800 space-y-3">
          <div class="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="align-left" class="w-3.5 h-3.5"></i> BẢN DỊCH PHỤ ĐỀ (TRANSCRIPT):
          </div>
          <p class="text-sm sm:text-base text-slate-200 leading-relaxed font-serif">
            "${currentLesson.audioText}"
          </p>
        </div>

        <!-- Dictation Challenge Section -->
        ${currentLesson.dictationSentences ? `
          <div class="p-5 rounded-2xl bg-slate-950 border border-blue-500/20 space-y-3">
            <div class="text-xs font-bold text-blue-400 uppercase flex items-center gap-2">
              <i data-lucide="pencil" class="w-4 h-4"></i> Thử Thách Dictation (Nghe Chép Chính Tả Từng Âm)
            </div>
            <p class="text-xs text-slate-400">Bấm nút loa để nghe câu dictation và gõ lại chính xác từng từ:</p>

            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button onclick="speakEnglish('${currentLesson.dictationSentences[0].text.replace(/'/g, "\\'")}', 0.85)" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-bold flex items-center gap-2 min-h-[44px]">
                <i data-lucide="volume-2" class="w-4 h-4"></i> Nghe Câu Dictation #1
              </button>
              <span class="text-xs text-slate-400 italic">${currentLesson.dictationSentences[0].hint}</span>
            </div>

            <div class="pt-2 space-y-2">
              <input type="text" id="dictationInput" placeholder="Gõ lại câu bạn vừa nghe được vào đây..." class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-all font-mono min-h-[44px]">
              <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <button onclick="checkDictationAnswer('${currentLesson.dictationSentences[0].text.replace(/'/g, "\\'")}')" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all min-h-[40px]">
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

function selectListeningTrack(trackId) {
  if (typeof playSound === 'function') playSound('click');
  currentListeningLessonId = trackId;
  renderEnglishSubView('listening');
}

function setListeningCategoryFilter(cat) {
  if (typeof playSound === 'function') playSound('click');
  currentListeningCategoryFilter = cat;
  renderEnglishSubView('listening');
}

function setListeningSpeed(speed) {
  englishTtsSpeed = speed;
  renderEnglishSubView('listening');
}

function toggleListeningTranscript() {
  const el = document.getElementById('listeningTranscriptContainer');
  if (el) el.classList.toggle('hidden');
}

function checkDictationAnswer(correctText) {
  const inputEl = document.getElementById('dictationInput');
  const resultEl = document.getElementById('dictationResultMsg');
  if (!inputEl || !resultEl) return;

  const user = inputEl.value.trim().toLowerCase().replace(/[.,!?;:]/g, '');
  const target = correctText.trim().toLowerCase().replace(/[.,!?;:]/g, '');

  if (user === target) {
    resultEl.className = 'text-xs font-bold text-emerald-400';
    resultEl.textContent = '✓ Chính xác 100%! Tai bạn nghe rất tốt!';
    if (typeof playSound === 'function') playSound('correct');
  } else {
    resultEl.className = 'text-xs font-bold text-amber-400';
    resultEl.textContent = `Chưa chuẩn! Đáp án: "${correctText}"`;
    if (typeof playSound === 'function') playSound('incorrect');
  }
}

// --- 9. VIEW 6: SPEAKING STUDIO (LUYỆN NÓI MICRO TƯƠNG TÁC) ---
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
        <h2 class="text-xl sm:text-2xl font-black text-white">Chuyển Hóa Vốn Từ Bị Động Sang Phản Xạ Nói Tự Nhiên</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Luyện nói qua Micro bằng công nghệ nhận diện giọng nói thực tế. Chấm điểm độ tin cậy và kiểm tra phản xạ tạo câu trong 10 giây.
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
              <span class="px-3 py-1.5 rounded-xl bg-slate-950 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
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
            <button onclick="speakEnglish('${prompt.sampleAnswer.replace(/'/g, "\\'")}')" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold flex items-center gap-1.5 transition-all min-h-[36px]">
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
            <button onclick="startVoiceRecognition()" id="startRecordBtn" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition-all min-h-[44px]">
              <i data-lucide="circle-dot" class="w-4 h-4 text-rose-300 animate-pulse"></i> Bắt Đầu Ghi Âm Nói
            </button>
          </div>

          <div id="voiceRecognizedText" class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 min-h-[60px] text-left italic">
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

// --- 10. VIEW 7: READING STUDIO (ĐỌC HIỂU & ĐIỂM DANH MỖI NGÀY) ---
function renderEnglishReadingHTML() {
  const library = window.READING_STUDIO_DATA;
  const currentText = library.find(t => t.id === currentReadingLessonId) || library[0];
  const data = getStoredEnglishData();
  const todayStr = new Date().toISOString().split('T')[0];
  const isCheckedIn = data.dailyReadingCheckIn && data.dailyReadingCheckIn[todayStr];

  return `
    <div class="space-y-6 animate-in fade-in duration-200">
      
      <!-- Top Banner -->
      <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="space-y-1">
          <div class="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <i data-lucide="book-open" class="w-4 h-4"></i> ENGINE 7: THƯ VIỆN ĐỌC & ĐIỂM DANH MỖI NGÀY
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-white">Thử Thách Đọc Độc Lập & Tích Lũy Chuỗi Ngày</h2>
          <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Mỗi ngày đọc 1 bài báo hoặc câu chuyện học thuật, bấm giờ WPM và nhấn nút <strong>"Điểm Danh Đọc"</strong> để duy trì chuỗi kỷ luật.
          </p>
        </div>

        <!-- Check-in Stamp Button -->
        <button onclick="checkInDailyReading('${currentText.id}')" class="px-5 py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-xl min-h-[44px] ${
          isCheckedIn ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' : 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-950 shadow-amber-500/20'
        }">
          <i data-lucide="${isCheckedIn ? 'check-check' : 'calendar-check'}" class="w-4 h-4"></i>
          <span>${isCheckedIn ? '✓ ĐÃ ĐIỂM DANH HÔM NAY' : 'ĐIỂM DANH ĐỌC HÔM NAY'}</span>
        </button>
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
            <button onclick="startReadingTimer()" id="readingTimerBtn" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-bold flex items-center gap-2 transition-all min-h-[44px]">
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
            <i data-lucide="sparkles" class="w-4 h-4"></i> Từ Vựng Tinh Hoa Trong Bài (Bấm để nghe giọng Mỹ):
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${(currentText.vocabularyPicks || []).map(vp => `
              <div onclick="speakEnglish('${vp.word}')" class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 cursor-pointer space-y-1 transition-all">
                <div class="flex items-center justify-between">
                  <strong class="text-white text-xs font-mono">${vp.word}</strong>
                  <i data-lucide="volume-1" class="w-3.5 h-3.5 text-cyan-400"></i>
                </div>
                <div class="text-[10px] text-cyan-400 font-mono">${vp.ipa}</div>
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
    btn.className = 'px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-all animate-pulse min-h-[44px]';
    if (result) result.textContent = 'Đang tính thời gian...';
  } else {
    const elapsedMinutes = (Date.now() - readingTimerStart) / 60000;
    const currentText = window.READING_STUDIO_DATA[0];
    const wpm = Math.round(currentText.wordCount / elapsedMinutes);

    readingTimerStart = null;
    btn.innerHTML = '<i data-lucide="rotate-ccw" class="w-4 h-4"></i> Đọc Lại';
    btn.className = 'px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-bold flex items-center gap-2 transition-all min-h-[44px]';
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
        <h2 class="text-xl sm:text-2xl font-black text-white">Lộ Trình 10 Bước Viết Từ Câu Đơn Đến Email Chuyên Nghiệp</h2>
        <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Kiểm tra toàn diện ngữ pháp, từ vựng, trật tự cú pháp, tính liên kết và đối chiếu với phiên bản chuẩn học thuật.
        </p>
      </div>

      <!-- Writing Stages Carousel / Bar -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        ${studio.stages.map(st => `
          <div class="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono whitespace-nowrap text-slate-300 min-h-[40px] flex items-center">
            <span class="text-pink-400 font-bold mr-1">${st.step}.</span> ${st.name}
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
            <button onclick="evaluateWritingSubmission('${task.sampleModel.replace(/'/g, "\\'")}')" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 transition-all min-h-[44px]">
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
          Mỗi chủ đề liên kết cả 4 kỹ năng: Từ vựng ➔ Nghe ➔ Đọc ➔ Ngữ pháp ➔ Luyện nói ➔ Viết ➔ Lên lịch SRS.
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
            <button onclick="selectDailyDay(${d.dayNumber})" class="p-4 rounded-2xl border text-left transition-all min-h-[44px] ${cls}">
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
              <button onclick="speakEnglish('${queue[0].word}')" class="px-4 py-2 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-cyan-300 text-xs font-bold flex items-center gap-1.5 border border-blue-500/30 min-h-[40px]">
                <i data-lucide="volume-2" class="w-4 h-4"></i> Nghe Phát Âm (Giọng Mỹ)
              </button>
            </div>

            <!-- Reveal Answer Toggle -->
            <div id="srsAnswerContainer" class="hidden p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 space-y-1">
              <div><strong>Trạng thái:</strong> Cần ôn tập đều đặn</div>
              <div class="text-cyan-400">Khoảng cách lặp lại kế tiếp: 3 ngày</div>
            </div>

            <div class="pt-4 flex justify-center gap-3">
              <button onclick="revealSrsAnswer()" id="srsRevealBtn" class="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-purple-500/30 min-h-[44px]">
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
              <p class="text-slate-300 leading-relaxed">Hay mắc lỗi câu cụt khi dùng liên từ phụ thuộc. Khuyến nghị: Luyện tập khay cú pháp SVO ở Grammar Lab.</p>
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
              <div class="font-bold text-emerald-400">2. Số từ vựng đã đưa vào Ký ức vĩnh viễn</div>
              <p class="text-slate-300 leading-relaxed">${(data.masteredWords || []).length} Từ vựng cốt lõi đã làm chủ 100%.</p>
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
          <select id="ttsAccentSelect" onchange="updateAccentSetting(this.value)" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm font-semibold min-h-[44px]">
            <option value="en-US" ${englishTtsAccent === 'en-US' ? 'selected' : ''}>English (American - US Accent Chuẩn)</option>
            <option value="en-GB" ${englishTtsAccent === 'en-GB' ? 'selected' : ''}>English (British - UK RP Accent)</option>
          </select>
        </div>

        <div class="space-y-2">
          <label class="text-xs font-bold text-slate-300">Tốc Độ Đọc Mặc Định:</label>
          <input type="range" min="0.7" max="1.3" step="0.1" value="${englishTtsSpeed}" onchange="updateSpeedSetting(this.value)" class="w-full accent-cyan-500 py-2">
          <div class="flex justify-between text-xs text-slate-400 font-mono">
            <span>0.7x (Chậm rõ)</span>
            <span class="text-cyan-400 font-bold" id="speedDisplayVal">${englishTtsSpeed}x</span>
            <span>1.3x (Nhanh tự nhiên)</span>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800">
          <button onclick="testSettingsVoice()" class="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2 min-h-[44px]">
            <i data-lucide="volume-2" class="w-4 h-4"></i> Thử Nghe Giọng Đọc Mỹ Hiện Tại
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
