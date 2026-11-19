/**
 * CHINESE LEARNING APPLICATION ENGINE (TRUNG VĂN TOÀN THƯ)
 * Developed for buivananhdev/sieu-tri-nho-app
 * Tính năng toàn diện:
 * 1. Bàn luyện viết thư pháp cảm ứng Ô Mễ (米字格) & Ô Điền (田字格)
 * 2. 8 Nét Cơ Bản & 7 Quy Tắc Bút Thuận Vàng
 * 3. Ngữ âm Pinyin toàn diện (21 Thanh mẫu, 36 Vận mẫu, 4 Thanh điệu, Biến điệu)
 * 4. 214 Bộ Thủ Khang Hy tra cứu & luyện viết
 * 5. Kho Từ Vựng HSK 1 toàn bộ 150 từ theo 10 chủ đề thực chiến
 * 6. 12 Bài Học Ngữ Pháp Cơ Bản Thực Chiến
 * 7. Đấu trường Luyện tập & Quiz phản xạ 4 kỹ năng
 */

// ==========================================
// 1. STATE & DATA REPOSITORY
// ==========================================
let currentChineseCharId = 'hsk1_nihao';
let currentChineseFilterLevel = 'all';
let currentChineseSearchQuery = '';
let currentChineseSubTab = 'writer';
let currentRadicalStrokeFilter = 'all';
let currentRadicalSearchQuery = '';
let currentVocabTopicFilter = 'all';
let currentVocabSearchQuery = '';
let isGhostCharVisible = true;
let currentProgressStatusFilter = 'all';
let currentChineseGridStyle = 'mizi'; // 'mizi', 'tianzi', 'none'

// Canvas Drawing State
let chineseCanvas = null;
let chineseCtx = null;
let isDrawingChinese = false;
let lastPoint = null;
let userStrokesCount = 0;

// Flashcard 3D SRS State
let currentChineseFlashcardIdx = 0;
let isChineseFlashcardFlipped = false;

// Quiz State
let chineseQuizList = [];
let currentChineseQuizIdx = 0;
let chineseQuizScore = 0;
let chineseQuizStreak = 0;

const CHINESE_PROGRESS_KEY = 'supermind_chinese_progress_v2';

function getChineseProgressMap() {
  try {
    const raw = localStorage.getItem(CHINESE_PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function getChineseCharProgress(charId) {
  const map = getChineseProgressMap();
  const val = map[charId];
  if (!val) return { status: 'unlearned', mastered: false, reviewCount: 0 };
  if (typeof val === 'boolean') {
    return { status: val ? 'mastered' : 'unlearned', mastered: val, reviewCount: val ? 1 : 0 };
  }
  return {
    status: val.status || (val.mastered ? 'mastered' : 'unlearned'),
    mastered: !!val.mastered,
    reviewCount: val.reviewCount || 0,
    lastReviewed: val.lastReviewed || null
  };
}

function setChineseCharStatus(charId, status) {
  const map = getChineseProgressMap();
  const current = getChineseCharProgress(charId);
  const isMastered = status === 'mastered';
  map[charId] = {
    status: status,
    mastered: isMastered,
    reviewCount: (current.reviewCount || 0) + 1,
    lastReviewed: Date.now()
  };
  localStorage.setItem(CHINESE_PROGRESS_KEY, JSON.stringify(map));
  updateChineseMasteredButtonUI(charId);
  updateChineseStatsDashboard();
  renderChineseCharGrid();
}

function setChineseCharMastered(charId, isMastered) {
  setChineseCharStatus(charId, isMastered ? 'mastered' : 'unlearned');
  if (isMastered && typeof playSound === 'function') playSound('success');
}

function isChineseCharMastered(charId) {
  return getChineseCharProgress(charId).mastered;
}

function calculateChineseStreak() {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const lastDate = localStorage.getItem('chinese_last_study_date');
    let streak = parseInt(localStorage.getItem('chinese_study_streak') || '1', 10);
    if (!lastDate) {
      localStorage.setItem('chinese_last_study_date', today);
      localStorage.setItem('chinese_study_streak', '1');
      return 1;
    }
    if (lastDate === today) return streak;
    const diffDays = Math.round((new Date(today) - new Date(lastDate)) / (1000 * 3600 * 24));
    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1;
    }
    localStorage.setItem('chinese_last_study_date', today);
    localStorage.setItem('chinese_study_streak', String(streak));
    return streak;
  } catch (e) {
    return 1;
  }
}

function updateChineseStatsDashboard() {
  const chars = getStoredChineseChars();
  const total = chars.length || 396;
  let masteredCount = 0;
  let learningCount = 0;

  chars.forEach(c => {
    const p = getChineseCharProgress(c.id);
    if (p.mastered || p.status === 'mastered') {
      masteredCount++;
    } else if (p.status === 'learning' || p.reviewCount > 0) {
      learningCount++;
    }
  });

  const unlearnedCount = Math.max(0, total - masteredCount - learningCount);
  const percent = total > 0 ? Math.round((masteredCount / total) * 100) : 0;

  const elTotal = document.getElementById('statTotalChars');
  const elMastered = document.getElementById('statMasteredChars');
  const elMasteredPct = document.getElementById('statMasteredPercent');
  const elLearning = document.getElementById('statLearningChars');
  const elUnlearned = document.getElementById('statUnlearnedChars');
  const elBar = document.getElementById('statProgressBarFill');
  const elBarText = document.getElementById('statProgressBarText');
  const elStreak = document.getElementById('chineseStreakBadge');

  if (elTotal) elTotal.textContent = total;
  if (elMastered) elMastered.textContent = masteredCount;
  if (elMasteredPct) elMasteredPct.textContent = `(${percent}%)`;
  if (elLearning) elLearning.textContent = learningCount;
  if (elUnlearned) elUnlearned.textContent = unlearnedCount;
  if (elBar) elBar.style.width = `${percent}%`;
  if (elBarText) elBarText.textContent = `${percent}% (${masteredCount}/${total} từ)`;

  const streak = calculateChineseStreak();
  if (elStreak) elStreak.textContent = `🔥 ${streak} Ngày Liên Tục`;
}

function filterChineseProgressStatus(status) {
  currentProgressStatusFilter = status;
  document.querySelectorAll('.chinese-stat-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-status') === status) {
      btn.className = 'chinese-stat-filter-btn px-2.5 py-1 rounded-lg bg-rose-600 text-white font-bold transition-all text-xs';
    } else {
      btn.className = 'chinese-stat-filter-btn px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all text-xs';
    }
  });
  renderChineseCharGrid();
}

function resetChineseProgressConfirm() {
  if (confirm('Bạn có chắc muốn đặt lại toàn bộ tiến độ ghi nhớ tiếng Trung không? Dữ liệu đã thuộc sẽ được xóa để học lại từ đầu.')) {
    localStorage.removeItem(CHINESE_PROGRESS_KEY);
    updateChineseStatsDashboard();
    updateChineseMasteredButtonUI(currentChineseCharId);
    renderChineseCharGrid();
    if (typeof playSound === 'function') playSound('click');
    alert('Đã đặt lại tiến độ học tiếng Trung thành công!');
  }
}

function setChineseGridStyle(style) {
  currentChineseGridStyle = style;
  ['mizi', 'tianzi', 'none'].forEach(s => {
    const btn = document.getElementById(`btnGrid${s.charAt(0).toUpperCase() + s.slice(1)}`);
    if (btn) {
      if (s === style) {
        btn.className = 'px-2 py-1 rounded-lg bg-rose-600 text-white font-bold transition-all';
      } else {
        btn.className = 'px-2 py-1 rounded-lg text-slate-400 hover:text-white transition-all';
      }
    }
  });
  clearChineseCanvas();
}

function getStoredChineseChars() {
  if (typeof window !== 'undefined' && window.CHINESE_DATA_REPOSITORY && window.CHINESE_DATA_REPOSITORY.length > 0) {
    return window.CHINESE_DATA_REPOSITORY;
  }
  if (typeof CHINESE_DATA_REPOSITORY !== 'undefined' && Array.isArray(CHINESE_DATA_REPOSITORY)) {
    return CHINESE_DATA_REPOSITORY;
  }
  return [];
}

function getKangxiRadicals() {
  if (typeof window !== 'undefined' && window.CHINESE_RADICALS_DATA) return window.CHINESE_RADICALS_DATA;
  if (typeof CHINESE_RADICALS_DATA !== 'undefined') return CHINESE_RADICALS_DATA;
  return [];
}

function getPinyinData() {
  if (typeof window !== 'undefined' && window.CHINESE_PINYIN_DATA) return window.CHINESE_PINYIN_DATA;
  if (typeof CHINESE_PINYIN_DATA !== 'undefined') return CHINESE_PINYIN_DATA;
  return { initials: [], finals: [], tones: [], rules: [] };
}

function getHskVocabData() {
  if (typeof window !== 'undefined' && window.CHINESE_HSK_VOCAB_DATA) return window.CHINESE_HSK_VOCAB_DATA;
  if (typeof CHINESE_HSK_VOCAB_DATA !== 'undefined') return CHINESE_HSK_VOCAB_DATA;
  return [];
}

function getGrammarData() {
  if (typeof window !== 'undefined' && window.CHINESE_GRAMMAR_DATA) return window.CHINESE_GRAMMAR_DATA;
  if (typeof CHINESE_GRAMMAR_DATA !== 'undefined') return CHINESE_GRAMMAR_DATA;
  return [];
}

function getStrokesData() {
  if (typeof window !== 'undefined' && window.CHINESE_STROKES_DATA) return window.CHINESE_STROKES_DATA;
  if (typeof CHINESE_STROKES_DATA !== 'undefined') return CHINESE_STROKES_DATA;
  return { basicStrokes: [], strokeRules: [] };
}

function getMemoryMethodsData() {
  if (typeof window !== 'undefined' && window.CHINESE_MEMORY_METHODS) return window.CHINESE_MEMORY_METHODS;
  if (typeof CHINESE_MEMORY_METHODS !== 'undefined') return CHINESE_MEMORY_METHODS;
  return [];
}

function getLessonsData() {
  if (typeof window !== 'undefined' && window.CHINESE_LESSONS_DATA) return window.CHINESE_LESSONS_DATA;
  if (typeof CHINESE_LESSONS_DATA !== 'undefined') return CHINESE_LESSONS_DATA;
  return [];
}

// ==========================================
// 2. CANVAS ENGINE: LƯỚI Ô MỄ (米字格) & CẢM ỨNG
// ==========================================
function initChineseCanvas() {
  chineseCanvas = document.getElementById('chineseCanvas');
  if (!chineseCanvas) return;

  chineseCtx = chineseCanvas.getContext('2d');
  
  // Thiết lập kích thước
  const rect = chineseCanvas.getBoundingClientRect();
  const size = Math.round(rect.width) || 320;
  chineseCanvas.width = size;
  chineseCanvas.height = size;

  // Vẽ lưới ô Mễ nền
  drawMiZiGe();

  // Bắt sự kiện chuột (Desktop)
  chineseCanvas.addEventListener('mousedown', handlePointerDown);
  chineseCanvas.addEventListener('mousemove', handlePointerMove);
  window.addEventListener('mouseup', handlePointerUp);
  chineseCanvas.addEventListener('mouseleave', handlePointerUp);

  // Bắt sự kiện cảm ứng (Mobile & Tablet)
  chineseCanvas.addEventListener('touchstart', handleTouchStart, { passive: false });
  chineseCanvas.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('touchend', handleTouchEnd);
  chineseCanvas.addEventListener('touchcancel', handleTouchEnd);

  window.addEventListener('resize', () => {
    if (!chineseCanvas) return;
    const r = chineseCanvas.getBoundingClientRect();
    if (r.width > 0 && Math.round(r.width) !== chineseCanvas.width) {
      chineseCanvas.width = Math.round(r.width);
      chineseCanvas.height = Math.round(r.width);
      drawMiZiGe();
    }
  });
}

function drawMiZiGe() {
  if (!chineseCtx || !chineseCanvas) return;
  const w = chineseCanvas.width;
  const h = chineseCanvas.height;

  chineseCtx.clearRect(0, 0, w, h);
  if (currentChineseGridStyle === 'none') return;

  chineseCtx.save();

  // 1. Khung viền ngoài màu đỏ son thư pháp
  chineseCtx.strokeStyle = '#e11d48';
  chineseCtx.lineWidth = 3;
  chineseCtx.strokeRect(2, 2, w - 4, h - 4);

  // 2. Đường kẻ nét đứt màu đỏ hồng nhạt
  chineseCtx.strokeStyle = '#fda4af';
  chineseCtx.lineWidth = 1;
  chineseCtx.setLineDash([4, 4]);

  // Đường thập ngang & dọc (Có ở cả Ô Mễ & Ô Điền)
  chineseCtx.beginPath();
  chineseCtx.moveTo(0, h / 2);
  chineseCtx.lineTo(w, h / 2);
  chineseCtx.moveTo(w / 2, 0);
  chineseCtx.lineTo(w / 2, h);
  chineseCtx.stroke();

  // Hai đường chéo chỉ vẽ khi ở chế độ Ô Mễ (mizi)
  if (currentChineseGridStyle === 'mizi') {
    chineseCtx.beginPath();
    chineseCtx.moveTo(0, 0);
    chineseCtx.lineTo(w, h);
    chineseCtx.moveTo(w, 0);
    chineseCtx.lineTo(0, h);
    chineseCtx.stroke();
  }

  chineseCtx.restore();
}

function getCanvasCoordinates(e) {
  const rect = chineseCanvas.getBoundingClientRect();
  const scaleX = chineseCanvas.width / rect.width;
  const scaleY = chineseCanvas.height / rect.height;
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  };
}

function handlePointerDown(e) {
  isDrawingChinese = true;
  lastPoint = getCanvasCoordinates(e);
  userStrokesCount++;
  updateStrokeCounterUI();
}

function handlePointerMove(e) {
  if (!isDrawingChinese || !lastPoint) return;
  const currentPoint = getCanvasCoordinates(e);
  drawInkStroke(lastPoint, currentPoint);
  lastPoint = currentPoint;
}

function handlePointerUp() {
  if (isDrawingChinese) {
    isDrawingChinese = false;
    lastPoint = null;
  }
}

function handleTouchStart(e) {
  e.preventDefault();
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    isDrawingChinese = true;
    lastPoint = getCanvasCoordinates(touch);
    userStrokesCount++;
    updateStrokeCounterUI();
  }
}

function handleTouchMove(e) {
  e.preventDefault();
  if (!isDrawingChinese || !lastPoint || e.touches.length === 0) return;
  const touch = e.touches[0];
  const currentPoint = getCanvasCoordinates(touch);
  drawInkStroke(lastPoint, currentPoint);
  lastPoint = currentPoint;
}

function handleTouchEnd(e) {
  isDrawingChinese = false;
  lastPoint = null;
}

function drawInkStroke(p1, p2) {
  if (!chineseCtx) return;
  chineseCtx.save();
  chineseCtx.strokeStyle = '#0f172a'; // Mực tàu đen đậm
  chineseCtx.lineWidth = 10;
  chineseCtx.lineCap = 'round';
  chineseCtx.lineJoin = 'round';

  chineseCtx.beginPath();
  chineseCtx.moveTo(p1.x, p1.y);
  chineseCtx.lineTo(p2.x, p2.y);
  chineseCtx.stroke();
  chineseCtx.restore();
}

function clearChineseCanvas() {
  if (typeof playSound === 'function') playSound('click');
  userStrokesCount = 0;
  updateStrokeCounterUI();
  drawMiZiGe();
}

function updateStrokeCounterUI() {
  const infoEl = document.getElementById('canvasStrokeCountInfo');
  if (infoEl) {
    infoEl.textContent = userStrokesCount > 0 ? `Đã hạ ${userStrokesCount} nét` : 'Nét bút thư pháp';
  }
}

function toggleChineseGhostChar() {
  if (typeof playSound === 'function') playSound('click');
  isGhostCharVisible = !isGhostCharVisible;
  const ghostEl = document.getElementById('chineseGhostChar');
  const btn = document.getElementById('btnToggleGhost');
  if (ghostEl) {
    ghostEl.style.opacity = isGhostCharVisible ? '0.25' : '0.02';
  }
  if (btn) {
    btn.classList.toggle('text-rose-400', isGhostCharVisible);
    btn.classList.toggle('text-slate-500', !isGhostCharVisible);
  }
}

// ==========================================
// 3. SELECT & NAVIGATE CHARACTERS
// ==========================================
function selectChineseChar(id) {
  const allChars = getStoredChineseChars();
  const charObj = allChars.find(c => c.id === id) || allChars[0];
  if (!charObj) return;

  currentChineseCharId = charObj.id;
  clearChineseCanvas();

  // Đổi chữ mẫu mờ dưới Canvas
  const ghostEl = document.getElementById('chineseGhostChar');
  if (ghostEl) {
    ghostEl.textContent = charObj.char;
  }

  // Cập nhật thông tin chiết tự
  const bigCharEl = document.getElementById('charBigDisplay');
  const pinyinEl = document.getElementById('charPinyinDisplay');
  const hanvietEl = document.getElementById('charHanvietDisplay');
  const levelEl = document.getElementById('charLevelBadge');
  const strokesEl = document.getElementById('charStrokeCountDisplay');
  const meaningEl = document.getElementById('charMeaningDisplay');
  const radicalsEl = document.getElementById('charRadicalsDisplay');
  const storyEl = document.getElementById('charStoryDisplay');
  const strokeOrderEl = document.getElementById('charStrokeOrderDisplay');
  const exampleEl = document.getElementById('charExampleDisplay');

  if (bigCharEl) bigCharEl.textContent = charObj.char;
  if (pinyinEl) pinyinEl.textContent = charObj.pinyin;
  if (hanvietEl) hanvietEl.textContent = charObj.hanviet;
  if (levelEl) levelEl.textContent = charObj.level || 'HSK 1';
  if (strokesEl) strokesEl.textContent = `${charObj.strokeCount || 2} nét`;
  if (meaningEl) meaningEl.textContent = charObj.meaning;
  if (radicalsEl) radicalsEl.textContent = charObj.radicals || 'Bộ thủ độc lập';
  if (storyEl) storyEl.textContent = `"${charObj.story}"`;
  if (strokeOrderEl) strokeOrderEl.textContent = charObj.strokeOrder || 'Viết theo thứ tự bút thuận chuẩn.';
  if (exampleEl) exampleEl.textContent = charObj.example;

  updateChineseMasteredButtonUI(charObj.id);
  renderChineseCharGrid();
  speakChinese(charObj.char);
}

function loadCharToWriter(charId) {
  switchChineseSubTab('writer');
  selectChineseChar(charId);
  const container = document.getElementById('chineseWriterView');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function updateChineseMasteredButtonUI(charId) {
  const isMastered = isChineseCharMastered(charId);
  const btn = document.getElementById('btnChineseMastered');
  if (!btn) return;

  if (isMastered) {
    btn.className = 'p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/60 font-semibold flex flex-col items-center gap-1 transition-all shadow-md';
    btn.innerHTML = `<i data-lucide="award" class="w-4 h-4 text-amber-400"></i><span class="text-[10px]">Đã Tinh Thông</span>`;
  } else {
    btn.className = 'p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-semibold flex flex-col items-center gap-1 transition-all';
    btn.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i><span class="text-[10px]">Đánh Dấu Thuộc</span>`;
  }
  lucide.createIcons();
}

function toggleChineseMasteredCurrent() {
  if (!currentChineseCharId) return;
  const current = isChineseCharMastered(currentChineseCharId);
  setChineseCharMastered(currentChineseCharId, !current);
}

function navigateChineseChar(delta) {
  const list = getStoredChineseChars();
  if (list.length === 0) return;
  let idx = list.findIndex(c => c.id === currentChineseCharId);
  if (idx === -1) idx = 0;
  idx = (idx + delta + list.length) % list.length;
  selectChineseChar(list[idx].id);
}

// ==========================================
// 4. CHAR GRID & SEARCH & FILTER (WRITER VIEW)
// ==========================================
function filterChineseLevel(level) {
  if (typeof playSound === 'function') playSound('click');
  currentChineseFilterLevel = level;

  document.querySelectorAll('.chinese-lvl-btn').forEach(btn => {
    if (btn.getAttribute('data-lvl') === level) {
      btn.className = 'chinese-lvl-btn px-3 py-1 rounded-lg font-bold bg-rose-600 text-white shadow';
    } else {
      btn.className = 'chinese-lvl-btn px-3 py-1 rounded-lg text-slate-400 hover:text-white transition-all';
    }
  });

  renderChineseCharGrid();
}

function searchChineseChars(query) {
  currentChineseSearchQuery = (query || '').toLowerCase().trim();
  renderChineseCharGrid();
}

function renderChineseCharGrid() {
  const container = document.getElementById('chineseCharGrid');
  if (!container) return;

  const list = getStoredChineseChars();
  const q = currentChineseSearchQuery;

  const filtered = list.filter(item => {
    // 1. Phân loại theo Level / Cấp độ
    if (currentChineseFilterLevel === 'radicals' && item.category !== 'radicals') return false;
    if (currentChineseFilterLevel === 'hsk1' && item.category !== 'hsk1') return false;
    if (currentChineseFilterLevel === 'hsk2' && item.category !== 'hsk2') return false;
    if (currentChineseFilterLevel === 'hsk3' && item.category !== 'hsk3') return false;

    // 2. Bộ lọc trạng thái ghi nhớ cá nhân
    if (currentProgressStatusFilter === 'mastered') {
      const p = getChineseCharProgress(item.id);
      if (!p.mastered) return false;
    } else if (currentProgressStatusFilter === 'learning') {
      const p = getChineseCharProgress(item.id);
      if (p.mastered || (p.status !== 'learning' && p.reviewCount === 0)) return false;
    } else if (currentProgressStatusFilter === 'unlearned') {
      const p = getChineseCharProgress(item.id);
      if (p.mastered || p.reviewCount > 0) return false;
    }

    // 3. Tìm kiếm từ khóa đa năng
    if (q) {
      const match = item.char.includes(q) ||
                    item.pinyin.toLowerCase().includes(q) ||
                    item.hanviet.toLowerCase().includes(q) ||
                    item.meaning.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-8 text-center text-slate-500 text-xs">
        Không tìm thấy Hán tự phù hợp với bộ lọc hoặc từ khóa "${q}"
      </div>
    `;
    return;
  }

  // Giới hạn hiển thị 72 ký tự đầu tiên để tải mượt mà
  const displayList = filtered.slice(0, 72);

  container.innerHTML = displayList.map(item => {
    const isSelected = item.id === currentChineseCharId;
    const isMastered = isChineseCharMastered(item.id);

    return `
      <div onclick="selectChineseChar('${item.id}')"
        class="cursor-pointer p-3 rounded-2xl border transition-all duration-200 flex flex-col items-center justify-between group relative select-none
        ${isSelected 
          ? 'bg-rose-950/60 border-rose-500 ring-2 ring-rose-500/50 shadow-lg scale-105' 
          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'}">
        
        ${isMastered ? `
          <div class="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white" title="Đã thuộc">
            ✓
          </div>
        ` : ''}

        <span class="text-2xl sm:text-3xl font-serif font-black ${isSelected ? 'text-amber-300' : 'text-slate-200 group-hover:text-rose-400'}">
          ${item.char}
        </span>
        <div class="text-center mt-1 w-full">
          <div class="text-xs font-mono font-bold text-white truncate">${item.pinyin}</div>
          <div class="text-[10px] text-slate-400 truncate">${item.hanviet}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 5. SUB-TAB SWITCHER (WRITER, FLASHCARD, LESSONS, METHODS, PINYIN, RADICALS, VOCAB, GRAMMAR)
// ==========================================
function switchChineseSubTab(subTab) {
  if (typeof playSound === 'function') playSound('click');
  currentChineseSubTab = subTab;

  const views = {
    writer: document.getElementById('chineseWriterView'),
    flashcard: document.getElementById('chineseFlashcardView'),
    lessons: document.getElementById('chineseLessonsView'),
    methods: document.getElementById('chineseMethodsView'),
    pinyin: document.getElementById('chinesePinyinView'),
    radicals: document.getElementById('chineseRadicalsView'),
    vocab: document.getElementById('chineseVocabView'),
    grammar: document.getElementById('chineseGrammarView')
  };

  Object.keys(views).forEach(k => {
    if (views[k]) {
      if (k === subTab) {
        views[k].classList.remove('hidden');
      } else {
        views[k].classList.add('hidden');
      }
    }
  });

  // Cập nhật button sub-nav
  document.querySelectorAll('.chinese-sub-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-sub') === subTab) {
      btn.className = 'chinese-sub-nav-btn whitespace-nowrap px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-1.5';
    } else {
      btn.className = 'chinese-sub-nav-btn whitespace-nowrap px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold transition-all flex items-center gap-1.5';
    }
  });

  if (subTab === 'flashcard') renderChineseFlashcardView();
  if (subTab === 'lessons') renderChineseLessonsView();
  if (subTab === 'methods') renderChineseMethodsView();
  if (subTab === 'pinyin') renderChinesePinyinView();
  if (subTab === 'radicals') renderChineseRadicalsView();
  if (subTab === 'vocab') renderChineseVocabView();
  if (subTab === 'grammar') renderChineseGrammarView();

  lucide.createIcons();
}

// ==========================================
// 6. VIEW 2: PINYIN MATRIX VIEW
// ==========================================
function renderChinesePinyinView() {
  const container = document.getElementById('chinesePinyinContent');
  if (!container) return;

  const pinyinData = getPinyinData();

  container.innerHTML = `
    <!-- PHẦN 1: 21 THANH MẪU (INITIALS) -->
    <div class="space-y-4">
      <div class="flex items-center justify-between pb-2 border-b border-slate-800">
        <div>
          <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span class="text-rose-400">1.</span> Bảng 21 Thanh Mẫu (Phụ Âm Đầu)
          </h3>
          <p class="text-xs text-slate-400">Bấm vào bất kỳ âm nào để nghe phát âm giọng chuẩn Bắc Kinh</p>
        </div>
        <span class="px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold">21 Thanh Mẫu</span>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        ${pinyinData.initials.map(item => `
          <div onclick="speakPinyin('${item.sound}')" class="cursor-pointer p-4 rounded-2xl bg-cardBg border border-slate-800 hover:border-rose-500/50 hover:bg-rose-950/20 transition-all flex flex-col items-center justify-between group shadow-sm">
            <div class="text-2xl font-mono font-black text-rose-400 group-hover:scale-110 transition-transform">
              ${item.sound}
            </div>
            <div class="text-[11px] font-mono text-slate-400 mt-1">${item.ipa}</div>
            <div class="text-[10px] text-slate-300 text-center mt-1 truncate max-w-full">${item.example}</div>
            <button class="mt-2 p-1.5 rounded-lg bg-slate-900 group-hover:bg-rose-600 text-slate-400 group-hover:text-white transition-colors" title="Nghe âm">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- PHẦN 2: 36 VẬN MẪU (FINALS) -->
    <div class="space-y-4 pt-4">
      <div class="flex items-center justify-between pb-2 border-b border-slate-800">
        <div>
          <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span class="text-amber-400">2.</span> Bảng 36 Vận Mẫu (Vần: Đơn, Kép, Mũi)
          </h3>
          <p class="text-xs text-slate-400">Bao gồm 6 vận mẫu đơn, 13 vận mẫu kép và 16 vận mẫu mũi cùng vần cuốn lưỡi</p>
        </div>
        <span class="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">36 Vận Mẫu</span>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        ${pinyinData.finals.map(item => `
          <div onclick="speakPinyin('${item.sound.split(' ')[0]}')" class="cursor-pointer p-4 rounded-2xl bg-cardBg border border-slate-800 hover:border-amber-500/50 hover:bg-amber-950/20 transition-all flex flex-col items-center justify-between group shadow-sm">
            <div class="text-2xl font-mono font-black text-amber-300 group-hover:scale-110 transition-transform">
              ${item.sound}
            </div>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 mt-1 border border-slate-800">${item.type}</span>
            <p class="text-[10px] text-slate-400 text-center mt-1.5 leading-snug line-clamp-2">${item.desc}</p>
            <button class="mt-2 p-1.5 rounded-lg bg-slate-900 group-hover:bg-amber-600 text-slate-400 group-hover:text-white transition-colors" title="Nghe âm">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- PHẦN 3: 4 THANH ĐIỆU & QUY TẮC BIẾN ĐIỆU -->
    <div class="space-y-4 pt-4">
      <div class="pb-2 border-b border-slate-800">
        <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <span class="text-emerald-400">3.</span> 4 Thanh Điệu & 3 Quy Tắc Biến Điệu Cốt Lõi
        </h3>
        <p class="text-xs text-slate-400">Độ cao và sự biến đổi ngữ điệu đặc trưng của tiếng Trung</p>
      </div>

      <!-- Grid 4 Thanh Điệu -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        ${pinyinData.tones.map(t => `
          <div onclick="speakPinyin('${t.mark.split(' ')[0]}')" class="cursor-pointer p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 space-y-2 transition-all group">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-emerald-400 uppercase tracking-wide font-mono">${t.symbol} ${t.pitch}</span>
              <button class="p-1 rounded-md bg-slate-800 text-slate-400 group-hover:text-emerald-300">
                <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
            <div class="text-xl font-mono font-black text-white">${t.mark}</div>
            <div class="text-xs font-bold text-slate-200">${t.name}</div>
            <p class="text-[11px] text-slate-400 leading-relaxed">${t.desc}</p>
          </div>
        `).join('')}
      </div>

      <!-- 3 Quy tắc biến điệu vàng -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        ${pinyinData.rules.map(r => `
          <div class="p-4 rounded-2xl bg-cardBg border border-slate-800 space-y-2">
            <div class="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wide">
              <i data-lucide="sparkles" class="w-4 h-4 text-amber-400"></i>
              <span>${r.title}</span>
            </div>
            <div class="px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono text-xs font-bold inline-block">
              ${r.rule}
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${r.desc}</p>
            <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-amber-300">
              ${r.example}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  lucide.createIcons();
}

// ==========================================
// 7. VIEW 3: 214 KANGXI RADICALS HUB
// ==========================================
function filterChineseRadicals(stroke) {
  if (typeof playSound === 'function') playSound('click');
  currentRadicalStrokeFilter = stroke;

  document.querySelectorAll('.rad-stroke-btn').forEach(btn => {
    if (btn.getAttribute('data-stroke') === String(stroke)) {
      btn.className = 'rad-stroke-btn px-3 py-1 rounded-lg font-bold bg-amber-600 text-white shadow text-xs';
    } else {
      btn.className = 'rad-stroke-btn px-3 py-1 rounded-lg text-slate-400 hover:text-white transition-all text-xs';
    }
  });

  renderChineseRadicalsView();
}

function searchChineseRadicals(query) {
  currentRadicalSearchQuery = (query || '').toLowerCase().trim();
  renderChineseRadicalsView();
}

function renderChineseRadicalsView() {
  const container = document.getElementById('chineseRadicalsList');
  if (!container) return;

  const radicals = getKangxiRadicals();
  const q = currentRadicalSearchQuery;
  const strokeFilter = currentRadicalStrokeFilter;

  const filtered = radicals.filter(r => {
    if (strokeFilter !== 'all') {
      if (strokeFilter === '6+') {
        if (r.strokes < 6) return false;
      } else {
        if (r.strokes !== parseInt(strokeFilter)) return false;
      }
    }

    if (q) {
      const match = r.char.includes(q) ||
                    (r.alt && r.alt.includes(q)) ||
                    r.pinyin.toLowerCase().includes(q) ||
                    r.hanviet.toLowerCase().includes(q) ||
                    r.meaning.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  const countBadge = document.getElementById('radicalsCountBadge');
  if (countBadge) countBadge.textContent = `${filtered.length} / 214 Bộ Thủ`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500 text-xs">
        Không tìm thấy bộ thủ nào phù hợp với bộ lọc.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(r => `
    <div class="p-4 rounded-2xl bg-cardBg border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-3 group shadow-sm">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl font-serif font-black text-amber-300 group-hover:scale-105 transition-transform">
            ${r.char}
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-sm font-bold text-white font-mono">${r.pinyin}</span>
              ${r.alt ? `<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-rose-300 border border-slate-800" title="Biến thể">(${r.alt})</span>` : ''}
              <button onclick="speakChinese('${r.char}')" class="p-1 rounded text-slate-400 hover:text-white" title="Nghe phát âm">
                <i data-lucide="volume-2" class="w-3 h-3"></i>
              </button>
            </div>
            <div class="text-xs text-amber-400 font-bold">
              ${r.hanviet} • <span class="text-slate-400 font-normal font-mono">${r.strokes} nét (#${r.no})</span>
            </div>
          </div>
        </div>
        <button onclick="loadCharToWriter('rad_${r.no}')" class="p-2 rounded-xl bg-slate-900 hover:bg-rose-600 text-slate-300 hover:text-white transition-all text-xs font-semibold flex items-center gap-1" title="Luyện viết bộ thủ này">
          <i data-lucide="pen-tool" class="w-3.5 h-3.5"></i>
          <span class="text-[11px] hidden sm:inline">Viết</span>
        </button>
      </div>

      <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
        <span class="text-slate-500">Ý nghĩa:</span> <strong class="text-emerald-300 font-medium">${r.meaning}</strong>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// ==========================================
// 8. VIEW 4: HSK 1 VOCABULARY HUB (150 WORDS)
// ==========================================
function filterChineseVocabTopic(topic) {
  if (typeof playSound === 'function') playSound('click');
  currentVocabTopicFilter = topic;

  document.querySelectorAll('.vocab-topic-btn').forEach(btn => {
    if (btn.getAttribute('data-topic') === topic) {
      btn.className = 'vocab-topic-btn whitespace-nowrap px-3 py-1.5 rounded-xl font-bold bg-emerald-600 text-white shadow text-xs';
    } else {
      btn.className = 'vocab-topic-btn whitespace-nowrap px-3 py-1.5 rounded-xl text-slate-400 hover:text-white transition-all text-xs bg-slate-900 border border-slate-800';
    }
  });

  renderChineseVocabView();
}

function searchChineseVocab(query) {
  currentVocabSearchQuery = (query || '').toLowerCase().trim();
  renderChineseVocabView();
}

function renderChineseVocabView() {
  const container = document.getElementById('chineseVocabList');
  if (!container) return;

  const vocabList = getHskVocabData();
  const q = currentVocabSearchQuery;
  const topicFilter = currentVocabTopicFilter;

  const filtered = vocabList.filter(v => {
    if (topicFilter !== 'all' && v.topic !== topicFilter) return false;

    if (q) {
      const match = v.char.includes(q) ||
                    v.pinyin.toLowerCase().includes(q) ||
                    v.hanviet.toLowerCase().includes(q) ||
                    v.meaning.toLowerCase().includes(q) ||
                    v.example.includes(q);
      if (!match) return false;
    }
    return true;
  });

  const countBadge = document.getElementById('vocabCountBadge');
  if (countBadge) countBadge.textContent = `${filtered.length} / ${vocabList.length} Từ HSK 1`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500 text-xs">
        Không tìm thấy từ vựng HSK 1 phù hợp với từ khóa "${q}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(v => `
    <div class="p-5 rounded-3xl bg-cardBg border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4 group shadow-lg">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3.5">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-950/40 via-cardBg to-slate-900 border border-emerald-500/30 flex items-center justify-center text-3xl font-serif font-black text-amber-300 group-hover:scale-105 transition-transform">
            ${v.char}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-lg font-black text-white font-mono">${v.pinyin}</span>
              <button onclick="speakChinese('${v.char}')" class="p-1 rounded-md bg-slate-800 text-emerald-400 hover:text-white transition-colors" title="Nghe đọc">
                <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
              </button>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-emerald-300 border border-slate-800 font-medium">${v.pos}</span>
            </div>
            <div class="text-xs text-slate-400 mt-0.5">
              Hán Việt: <strong class="text-amber-400 font-bold">${v.hanviet}</strong>
            </div>
          </div>
        </div>

        <button onclick="loadCharToWriter('${v.id}')" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-200 hover:text-white transition-all text-xs font-bold flex items-center gap-1 shadow">
          <span>Luyện Viết</span> <i data-lucide="pen-tool" class="w-3 h-3"></i>
        </button>
      </div>

      <!-- Nghĩa & Chiết tự -->
      <div class="p-3 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1 text-xs">
        <div>Nghĩa: <strong class="text-emerald-300 font-bold">${v.meaning}</strong></div>
        <div class="text-slate-400 text-[11px]">Cấu tạo: <span class="text-amber-200">${v.radicals}</span></div>
      </div>

      <!-- Câu ví dụ thực tế -->
      <div class="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-800/30 space-y-1 text-xs">
        <div class="flex items-center justify-between">
          <span class="text-emerald-400 font-bold flex items-center gap-1">
            <i data-lucide="message-square" class="w-3 h-3"></i> Ví dụ thực tế:
          </span>
          <button onclick="speakChinese('${v.example}')" class="text-slate-400 hover:text-white p-1" title="Nghe câu ví dụ">
            <i data-lucide="volume-2" class="w-3.5 h-3.5 text-emerald-400"></i>
          </button>
        </div>
        <p class="font-serif text-white text-sm">${v.example}</p>
        <p class="font-mono text-emerald-300/80 text-[11px]">${v.examplePinyin}</p>
        <p class="text-slate-300 text-[11px] italic">${v.exampleVi}</p>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// ==========================================
// 9. VIEW 5: GRAMMAR MASTERY (12 LESSONS)
// ==========================================
function renderChineseGrammarView() {
  const container = document.getElementById('chineseGrammarList');
  if (!container) return;

  const lessons = getGrammarData();

  container.innerHTML = lessons.map(lesson => `
    <div class="p-6 rounded-3xl bg-cardBg border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4 shadow-xl">
      <div class="flex items-start justify-between pb-3 border-b border-slate-800">
        <div>
          <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span class="text-cyan-400">#</span> ${lesson.title}
          </h3>
        </div>
        <span class="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">HSK 1-2</span>
      </div>

      <!-- Công thức ngữ pháp nổi bật -->
      <div class="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/40 text-cyan-200 font-mono text-xs font-bold leading-relaxed flex items-center gap-2">
        <i data-lucide="terminal" class="w-4 h-4 text-cyan-400 flex-shrink-0"></i>
        <span>${lesson.formula}</span>
      </div>

      <!-- Phân tích chi tiết -->
      <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
        ${lesson.explanation}
      </p>

      <!-- Các câu ví dụ song ngữ -->
      <div class="space-y-2 pt-1">
        <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Các mẫu câu ví dụ:</span>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          ${lesson.examples.map(ex => `
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
              <div class="flex items-center justify-between">
                <span class="font-serif text-white font-bold text-sm">${ex.zh}</span>
                <button onclick="speakChinese('${ex.zh}')" class="p-1 text-cyan-400 hover:text-white" title="Nghe câu này">
                  <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
              <div class="font-mono text-cyan-300 text-[11px]">${ex.pinyin}</div>
              <div class="text-slate-400 text-[11px] italic">${ex.vi}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// ==========================================
// 10. MODAL 8 NÉT CƠ BẢN & 7 QUY TẮC BÚT THUẬN
// ==========================================
function openChineseStrokesModal() {
  if (typeof playSound === 'function') playSound('click');
  const modal = document.getElementById('chineseStrokesModal');
  const body = document.getElementById('chineseStrokesBody');
  if (!modal || !body) return;

  const data = getStrokesData();

  body.innerHTML = `
    <!-- 8 NÉT CƠ BẢN -->
    <div class="space-y-3">
      <div class="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wide">
        <i data-lucide="pen-tool" class="w-4 h-4"></i>
        <span>1. Tám Nét Cơ Bản Trong Chữ Hán (Vĩnh Tự Bát Pháp)</span>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        ${data.basicStrokes.map(s => `
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center space-y-1">
            <div class="text-3xl font-serif font-black text-amber-300">${s.symbol}</div>
            <div class="text-xs font-bold text-white">${s.name}</div>
            <div class="text-[10px] text-slate-400 font-mono">${s.pinyin}</div>
            <p class="text-[10px] text-slate-300 leading-tight">${s.desc}</p>
            <div class="text-[10px] text-rose-400 font-mono pt-1">VD: ${s.example}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 7 QUY TẮC BÚT THUẬN -->
    <div class="space-y-3 pt-4">
      <div class="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wide">
        <i data-lucide="list-ordered" class="w-4 h-4"></i>
        <span>2. Bảy Quy Tắc Bút Thuận Vàng (Thứ Tự Viết Nét)</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${data.strokeRules.map(r => `
          <div class="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center font-mono">${r.no}</span>
              <span class="text-xs font-bold text-white">${r.rule}</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${r.desc}</p>
            <div class="p-2 rounded-xl bg-slate-950 font-mono text-[11px] text-amber-300 border border-slate-800/80">
              💡 Ví dụ: ${r.example}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function closeChineseStrokesModal() {
  if (typeof playSound === 'function') playSound('click');
  const modal = document.getElementById('chineseStrokesModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ==========================================
// 11. AUDIO TTS ENGINE
// ==========================================
function speakChinese(text) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn('Speech synthesis error:', e);
  }
}

function speakPinyin(sound) {
  const clean = (sound || '').replace(/\[.*\]/g, '').trim();
  speakChinese(clean);
}

function speakCurrentChineseChar() {
  const list = getStoredChineseChars();
  const c = list.find(item => item.id === currentChineseCharId);
  if (c) {
    speakChinese(c.char);
  }
}

// ==========================================
// 12. UPGRADED MULTI-MODE QUIZ ENGINE
// ==========================================
function openChineseQuizModal() {
  if (typeof playSound === 'function') playSound('click');
  const allChars = getStoredChineseChars();
  if (allChars.length === 0) return;

  chineseQuizList = [...allChars].sort(() => Math.random() - 0.5).slice(0, 10);
  currentChineseQuizIdx = 0;
  chineseQuizScore = 0;
  chineseQuizStreak = 0;

  renderChineseQuizQuestion();

  const modal = document.getElementById('chineseQuizModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    lucide.createIcons();
  }
}

function closeChineseQuizModal() {
  if (typeof playSound === 'function') playSound('click');
  const modal = document.getElementById('chineseQuizModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function renderChineseQuizQuestion() {
  const container = document.getElementById('chineseQuizBody');
  const scoreText = document.getElementById('chineseQuizScoreText');
  if (!container) return;

  if (currentChineseQuizIdx >= chineseQuizList.length) {
    if (typeof playSound === 'function') playSound('success');
    if (scoreText) scoreText.textContent = `Kết Quả: ${chineseQuizScore} / ${chineseQuizList.length}`;
    container.innerHTML = `
      <div class="py-8 space-y-4">
        <div class="text-6xl animate-bounce">🏆</div>
        <h4 class="text-xl font-bold text-white">Chúc Mừng Bạn Đã Hoàn Thành Thử Thách!</h4>
        <p class="text-sm text-slate-300">
          Điểm số đạt được: <strong class="text-amber-400 text-xl font-mono">${chineseQuizScore} / ${chineseQuizList.length}</strong>
          ${chineseQuizStreak > 3 ? `<br><span class="text-xs text-rose-400 font-bold">🔥 Chuỗi đúng dài nhất: ${chineseQuizStreak} câu liên tiếp!</span>` : ''}
        </p>
        <button onclick="openChineseQuizModal()" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs shadow-xl transition-all">
          Luyện Tập Lại Vòng Khác
        </button>
      </div>
    `;
    return;
  }

  const currentItem = chineseQuizList[currentChineseQuizIdx];
  if (scoreText) scoreText.textContent = `Câu ${currentChineseQuizIdx + 1} / ${chineseQuizList.length} • Điểm: ${chineseQuizScore} ${chineseQuizStreak > 1 ? `🔥 Streak x${chineseQuizStreak}` : ''}`;

  const qMode = currentChineseQuizIdx % 3;
  const allChars = getStoredChineseChars();
  const distractors = allChars.filter(c => c.id !== currentItem.id).sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [currentItem, ...distractors].sort(() => Math.random() - 0.5);

  speakChinese(currentItem.char);

  if (qMode === 0) {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-6 rounded-2xl bg-gradient-to-tr from-rose-950/40 via-cardBg to-slate-900 border border-rose-500/30 text-center space-y-3">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold">
            🎧 Thử Thách Luyện Nghe Phản Xạ
          </div>
          <div class="py-2">
            <button onclick="speakChinese('${currentItem.char}')" class="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-600 to-amber-600 hover:scale-105 text-white flex items-center justify-center mx-auto shadow-xl transition-transform" title="Bấm để nghe lại">
              <i data-lucide="volume-2" class="w-9 h-9"></i>
            </button>
          </div>
          <p class="text-xs text-slate-300">Lắng nghe phát âm và chọn đúng chữ Hán tương ứng:</p>
        </div>

        <div class="grid grid-cols-2 gap-3" id="quizOptionsGrid">
          ${options.map(opt => `
            <button onclick="checkChineseQuizAnswer('${opt.id}', '${currentItem.id}', this)" class="p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-center transition-all group flex flex-col items-center justify-center">
              <div class="text-3xl font-serif font-black text-amber-300 group-hover:scale-105 transition-transform">${opt.char}</div>
              <div class="text-xs font-mono text-slate-400 mt-1">${opt.pinyin}</div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  } else if (qMode === 1) {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-6 rounded-2xl bg-gradient-to-tr from-rose-950/40 via-cardBg to-slate-900 border border-rose-500/30 text-center space-y-2">
          <div class="text-6xl font-serif font-black text-amber-300 cursor-pointer" onclick="speakChinese('${currentItem.char}')" title="Bấm để nghe">
            ${currentItem.char}
          </div>
          <button onclick="speakChinese('${currentItem.char}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-rose-300 hover:text-white text-xs font-semibold">
            <i data-lucide="volume-2" class="w-3.5 h-3.5"></i> Nghe Lại Phát Âm
          </button>
          <p class="text-xs text-slate-400">Chọn Phiên Âm Pinyin & Nghĩa Đúng:</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="quizOptionsGrid">
          ${options.map(opt => `
            <button onclick="checkChineseQuizAnswer('${opt.id}', '${currentItem.id}', this)" class="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-left transition-all group flex flex-col justify-between">
              <div class="font-mono text-base font-bold text-white group-hover:text-rose-300">${opt.pinyin} (${opt.hanviet})</div>
              <div class="text-xs text-slate-400 mt-1 truncate">${opt.meaning}</div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-6 rounded-2xl bg-gradient-to-tr from-rose-950/40 via-cardBg to-slate-900 border border-rose-500/30 text-center space-y-2">
          <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">Từ này có nghĩa là gì trong chữ Hán?</div>
          <div class="text-xl font-bold text-emerald-300">${currentItem.meaning}</div>
          <div class="text-xs font-mono text-slate-400">Phiên âm: <span class="text-amber-400 font-bold">${currentItem.pinyin}</span> (${currentItem.hanviet})</div>
        </div>

        <div class="grid grid-cols-2 gap-3" id="quizOptionsGrid">
          ${options.map(opt => `
            <button onclick="checkChineseQuizAnswer('${opt.id}', '${currentItem.id}', this)" class="p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-center transition-all group flex flex-col items-center justify-center">
              <div class="text-4xl font-serif font-black text-amber-300 group-hover:scale-105 transition-transform">${opt.char}</div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  lucide.createIcons();
}

function checkChineseQuizAnswer(chosenId, correctId, btnEl) {
  const isCorrect = chosenId === correctId;
  const grid = document.getElementById('quizOptionsGrid');
  if (grid) {
    Array.from(grid.children).forEach(btn => btn.disabled = true);
  }

  if (isCorrect) {
    chineseQuizScore++;
    chineseQuizStreak++;
    if (typeof playSound === 'function') playSound('success');
    btnEl.classList.remove('bg-slate-900', 'border-slate-700');
    btnEl.classList.add('bg-emerald-950/80', 'border-emerald-500', 'ring-2', 'ring-emerald-400');
  } else {
    chineseQuizStreak = 0;
    if (typeof playSound === 'function') playSound('error');
    btnEl.classList.remove('bg-slate-900', 'border-slate-700');
    btnEl.classList.add('bg-rose-950/80', 'border-rose-500', 'ring-2', 'ring-rose-400');
  }

  setTimeout(() => {
    currentChineseQuizIdx++;
    renderChineseQuizQuestion();
  }, 900);
}

// ==========================================
// 13. FLASHCARD 3D SRS ENGINE
// ==========================================
function renderChineseFlashcardView() {
  const chars = getStoredChineseChars();
  if (!chars || chars.length === 0) return;
  if (currentChineseFlashcardIdx >= chars.length) currentChineseFlashcardIdx = 0;
  if (currentChineseFlashcardIdx < 0) currentChineseFlashcardIdx = chars.length - 1;

  const item = chars[currentChineseFlashcardIdx];
  const progress = getChineseCharProgress(item.id);

  const counterEl = document.getElementById('flashcardCounterText');
  if (counterEl) {
    const statusText = progress.mastered ? '🟢 Đã Thuộc' : (progress.reviewCount > 0 ? '🟡 Đang Ôn' : '⚪ Chưa Học');
    counterEl.textContent = `Thẻ ${currentChineseFlashcardIdx + 1} / ${chars.length} • [${item.level ? item.level.toUpperCase() : 'HÁN TỰ'}] • ${statusText}`;
  }

  const fcChar = document.getElementById('fcCharDisplay');
  const fcPinyin = document.getElementById('fcPinyinDisplay');
  const fcHanviet = document.getElementById('fcHanvietDisplay');
  const fcMeaning = document.getElementById('fcMeaningDisplay');
  const fcStory = document.getElementById('fcStoryDisplay');
  const fcExample = document.getElementById('fcExampleDisplay');

  if (fcChar) fcChar.textContent = item.char;
  if (fcPinyin) fcPinyin.textContent = item.pinyin;
  if (fcHanviet) fcHanviet.textContent = `(${item.hanviet})`;
  if (fcMeaning) fcMeaning.textContent = item.meaning;
  if (fcStory) fcStory.textContent = item.story ? `"${item.story}"` : (item.radicals ? `Bộ cấu thành: ${item.radicals}` : '');
  if (fcExample) {
    if (item.examples && item.examples.length > 0) {
      const ex = item.examples[0];
      fcExample.textContent = `${ex.zh} ${ex.py} (${ex.vi})`;
    } else if (item.example) {
      fcExample.textContent = item.example;
    } else {
      fcExample.textContent = `Phần mềm Siêu Trí Nhớ • Luyện nhớ phản xạ`;
    }
  }

  // Luôn hiển thị mặt trước khi đổi thẻ mới
  isChineseFlashcardFlipped = false;
  const front = document.getElementById('flashcardFront');
  const back = document.getElementById('flashcardBack');
  if (front && back) {
    front.classList.remove('hidden');
    back.classList.add('hidden');
  }
}

function flipChineseFlashcard() {
  isChineseFlashcardFlipped = !isChineseFlashcardFlipped;
  const front = document.getElementById('flashcardFront');
  const back = document.getElementById('flashcardBack');
  const box = document.getElementById('chineseFlashcardBox');

  if (front && back) {
    if (isChineseFlashcardFlipped) {
      front.classList.add('hidden');
      back.classList.remove('hidden');
    } else {
      front.classList.remove('hidden');
      back.classList.add('hidden');
    }
  }
  if (box) {
    box.classList.add('scale-[0.98]');
    setTimeout(() => box.classList.remove('scale-[0.98]'), 150);
  }
  if (typeof playSound === 'function') playSound('card');
}

function rateFlashcard(rating) {
  const chars = getStoredChineseChars();
  const item = chars[currentChineseFlashcardIdx];
  if (!item) return;

  if (rating === 'easy') {
    setChineseCharStatus(item.id, 'mastered');
    if (typeof playSound === 'function') playSound('success');
  } else if (rating === 'good') {
    setChineseCharStatus(item.id, 'learning');
    if (typeof playSound === 'function') playSound('click');
  } else { // again
    setChineseCharStatus(item.id, 'learning');
    if (typeof playSound === 'function') playSound('error');
  }

  // Tự động lật sang thẻ kế tiếp
  setTimeout(() => {
    navigateFlashcard(1);
  }, 250);
}

function navigateFlashcard(delta) {
  const chars = getStoredChineseChars();
  currentChineseFlashcardIdx = (currentChineseFlashcardIdx + delta + chars.length) % chars.length;
  renderChineseFlashcardView();
}

function loadCurrentFlashcardToWriter() {
  const chars = getStoredChineseChars();
  const item = chars[currentChineseFlashcardIdx];
  if (item) {
    loadCharToWriter(item.id);
  }
}

function speakFlashcardCurrent() {
  const chars = getStoredChineseChars();
  const item = chars[currentChineseFlashcardIdx];
  if (item) {
    speakChinese(item.char);
  }
}

// ==========================================
// 14. VIEW: LỘ TRÌNH BÀI HỌC & HỘI THOẠI THỰC CHIẾN
// ==========================================
function renderChineseLessonsView() {
  const container = document.getElementById('chineseLessonsList');
  if (!container) return;

  const lessons = getLessonsData();
  if (!lessons || lessons.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-500">Đang cập nhật danh sách bài học...</div>`;
    return;
  }

  const allChars = getStoredChineseChars();

  container.innerHTML = lessons.map(lesson => {
    // Tra cứu từ vựng theo vocabIds
    const vocabItems = (lesson.vocabIds || []).map(vid => {
      const found = allChars.find(c => c.id === vid);
      if (found) {
        return { id: found.id, zh: found.char, py: found.pinyin, vi: found.meaning };
      }
      return null;
    }).filter(Boolean);

    return `
      <div class="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 space-y-5 hover:border-slate-700 transition-all shadow-xl">
        <!-- Lesson Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold font-mono">
                HSK ${lesson.level || 1}
              </span>
              <span class="text-xs text-slate-400 font-medium">Lộ Trình Thực Chiến</span>
            </div>
            <h4 class="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span>${lesson.title}</span>
            </h4>
            <p class="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
              <i data-lucide="target" class="w-3.5 h-3.5 text-rose-400"></i>
              <span>Mục tiêu: ${lesson.objective || 'Nắm vững ngữ cảnh giao tiếp thực tế'}</span>
            </p>
          </div>
        </div>

        <!-- Key Vocab -->
        <div class="space-y-2">
          <div class="text-xs font-bold text-amber-400 flex items-center gap-1.5">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
            <span>Từ Vựng Trọng Tâm Bài Học (${vocabItems.length} từ):</span>
          </div>
          <div class="flex flex-wrap gap-2">
            ${vocabItems.map(v => `
              <div class="px-3 py-1.5 rounded-xl bg-cardBg border border-slate-700/80 text-xs flex items-center gap-2 hover:border-amber-500/50 transition-all">
                <span class="font-serif text-base font-bold text-amber-300 cursor-pointer hover:text-rose-400" onclick="speakChinese('${v.zh}')" title="Bấm nghe phát âm">${v.zh}</span>
                <span class="font-mono text-[11px] text-cyan-300">${v.py}</span>
                <span class="text-slate-400 text-[11px]">: ${v.vi}</span>
                <button onclick="loadCharToWriter('${v.id}')" class="text-[10px] text-rose-400 hover:text-rose-300 ml-1" title="Luyện viết chữ này">✍️</button>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Dialogue Box -->
        <div class="space-y-3 pt-1">
          <div class="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
            <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
            <span>Đoạn Hội Thoại Thực Tế (Bấm nút loa để luyện nghe - nói):</span>
          </div>
          <div class="space-y-2.5">
            ${(lesson.dialogue || []).map(d => `
              <div class="p-3.5 rounded-2xl ${d.speaker.includes('A') ? 'bg-slate-950/70 border-l-4 border-l-rose-500' : 'bg-slate-950/70 border-l-4 border-l-sky-500'} border border-slate-800 flex items-start justify-between gap-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold ${d.speaker.includes('A') ? 'text-rose-400' : 'text-sky-400'} font-mono">${d.speaker}:</span>
                    <span class="text-base font-serif font-black text-white">${d.zh}</span>
                  </div>
                  <div class="text-xs font-mono text-amber-300 pl-6">${d.pinyin || d.py || ''}</div>
                  <div class="text-xs text-slate-300 pl-6 italic">${d.vi}</div>
                </div>
                <button onclick="speakDialogueLine('${d.zh.replace(/'/g, "\\'")}')" class="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 flex-shrink-0 transition-colors" title="Nghe phát âm câu này">
                  <i data-lucide="volume-2" class="w-4 h-4 text-emerald-400"></i>
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function speakDialogueLine(text) {
  speakChinese(text);
}

// ==========================================
// 15. VIEW: 4 TRỤ CỘT PHƯƠNG PHÁP SIÊU TRÍ NHỚ
// ==========================================
function renderChineseMethodsView() {
  const container = document.getElementById('chineseMethodsList');
  if (!container) return;

  const methods = getMemoryMethodsData();
  if (!methods || methods.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-500">Đang cập nhật phương pháp siêu trí nhớ...</div>`;
    return;
  }

  const iconMap = {
    split: '⚡',
    brain: '🧠',
    link: '🔗',
    clock: '⏳'
  };

  container.innerHTML = methods.map(m => {
    const iconDisplay = iconMap[m.icon] || '🏮';

    return `
      <div class="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl">
              ${iconDisplay}
            </div>
            <div>
              <h4 class="text-base sm:text-lg font-bold text-white">${m.title}</h4>
              <span class="text-xs text-amber-400 font-mono font-medium">${m.tagline || ''}</span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${m.desc}</p>

          <!-- Principles -->
          ${m.principles && m.principles.length > 0 ? `
            <div class="space-y-1.5 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div class="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Nguyên Lý Cốt Lõi:</div>
              ${m.principles.map(p => `
                <div class="text-xs text-slate-300 flex items-start gap-2">
                  <span class="text-rose-400 font-bold">•</span>
                  <span>${p}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <!-- Practical Examples -->
          ${m.examples && m.examples.length > 0 ? `
            <div class="space-y-2">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">Ví Dụ Thực Nghiệm Ứng Dụng:</div>
              <div class="space-y-2">
                ${m.examples.map(ex => `
                  <div class="p-3 rounded-2xl bg-cardBg border border-slate-800/90 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="text-base font-serif font-black text-rose-400">${ex.char}</span>
                      <span class="text-xs font-bold text-amber-300 font-mono">${ex.formula || ''}</span>
                    </div>
                    <p class="text-xs text-slate-300 italic pl-1">👉 ${ex.meaning || ex.story || ''}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200 flex items-center gap-2 mt-2">
          <i data-lucide="lightbulb" class="w-4 h-4 text-amber-400 flex-shrink-0"></i>
          <span><strong>Bí kíp thực hành:</strong> Áp dụng liên tục khi học chữ mới để kích hoạt tư duy liên tưởng não bộ.</span>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// ==========================================
// 16. KHỞI TẠO TOÀN DIỆN APP TIẾNG TRUNG
// ==========================================
function initChineseHub() {
  initChineseCanvas();
  renderChineseCharGrid();
  selectChineseChar(currentChineseCharId);
  updateChineseStatsDashboard();

  const badge = document.getElementById('chineseCountBadge');
  if (badge) {
    const list = getStoredChineseChars();
    badge.textContent = `🏮 ${list.length} Hán Tự & 214 Bộ Thủ Khang Hy`;
  }
}
