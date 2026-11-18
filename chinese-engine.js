/**
 * CHINESE LEARNING & STROKE CANVAS ENGINE (TRUNG VĂN TOÀN THƯ)
 * Developed for buivananhdev/sieu-tri-nho-app
 * Hỗ trợ cảm ứng điện thoại (Touch) & chuột máy tính (Mouse)
 */

let currentChineseCharId = 'hsk_hao';
let currentChineseFilterLevel = 'all';
let currentChineseSearchQuery = '';
let currentChineseSubTab = 'writer';
let isGhostCharVisible = true;

// Canvas Drawing State
let chineseCanvas = null;
let chineseCtx = null;
let isDrawingChinese = false;
let lastPoint = null;
let userStrokes = [];

// Quiz State
let chineseQuizList = [];
let currentChineseQuizIdx = 0;
let chineseQuizScore = 0;

// ==========================================
// 1. DATA ACCESS & PROGRESS
// ==========================================
const CHINESE_PROGRESS_KEY = 'supermind_chinese_progress_v1';

function getChineseProgressMap() {
  try {
    const raw = localStorage.getItem(CHINESE_PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function setChineseCharMastered(charId, isMastered) {
  const map = getChineseProgressMap();
  map[charId] = isMastered;
  localStorage.setItem(CHINESE_PROGRESS_KEY, JSON.stringify(map));
  if (isMastered && typeof playSound === 'function') playSound('success');
  updateChineseMasteredButtonUI(charId);
  renderChineseCharGrid();
}

function isChineseCharMastered(charId) {
  const map = getChineseProgressMap();
  return !!map[charId];
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

// ==========================================
// 2. CANVAS ENGINE: LƯỚI Ô MỄ (米字格) & NÉT VẼ CẢM ỨNG
// ==========================================
function initChineseCanvas() {
  chineseCanvas = document.getElementById('chineseCanvas');
  if (!chineseCanvas) return;

  chineseCtx = chineseCanvas.getContext('2d');
  
  // Thiết lập kích thước chuẩn
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

  // Bắt sự kiện cảm ứng (Điện thoại & Tablet)
  chineseCanvas.addEventListener('touchstart', handleTouchStart, { passive: false });
  chineseCanvas.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('touchend', handleTouchEnd);
  chineseCanvas.addEventListener('touchcancel', handleTouchEnd);
}

function drawMiZiGe() {
  if (!chineseCtx || !chineseCanvas) return;
  const w = chineseCanvas.width;
  const h = chineseCanvas.height;

  // Xóa trắng
  chineseCtx.clearRect(0, 0, w, h);

  // Nền lưới truyền thống
  chineseCtx.save();

  // 1. Khung viền ngoài
  chineseCtx.strokeStyle = '#f43f5e';
  chineseCtx.lineWidth = 3;
  chineseCtx.strokeRect(2, 2, w - 4, h - 4);

  // 2. Đường kẻ nét đứt màu đỏ nhạt (Đường thập + Đường chéo)
  chineseCtx.strokeStyle = '#fda4af';
  chineseCtx.lineWidth = 1;
  chineseCtx.setLineDash([4, 4]);

  // Ngang giữa
  chineseCtx.beginPath();
  chineseCtx.moveTo(0, h / 2);
  chineseCtx.lineTo(w, h / 2);
  chineseCtx.stroke();

  // Dọc giữa
  chineseCtx.beginPath();
  chineseCtx.moveTo(w / 2, 0);
  chineseCtx.lineTo(w / 2, h);
  chineseCtx.stroke();

  // Chéo 1 (Từ trên trái xuống dưới phải)
  chineseCtx.beginPath();
  chineseCtx.moveTo(0, 0);
  chineseCtx.lineTo(w, h);
  chineseCtx.stroke();

  // Chéo 2 (Từ trên phải xuống dưới trái)
  chineseCtx.beginPath();
  chineseCtx.moveTo(w, 0);
  chineseCtx.lineTo(0, h);
  chineseCtx.stroke();

  chineseCtx.restore();

  // Vẽ lại các nét người dùng đã vẽ
  redrawUserStrokes();
}

function redrawUserStrokes() {
  if (!chineseCtx) return;
  chineseCtx.save();
  chineseCtx.strokeStyle = '#0f172a'; // Mực đen đậm
  chineseCtx.lineWidth = 14;
  chineseCtx.lineCap = 'round';
  chineseCtx.lineJoin = 'round';

  userStrokes.forEach(stroke => {
    if (stroke.length < 2) return;
    chineseCtx.beginPath();
    chineseCtx.moveTo(stroke[0].x, stroke[0].y);
    for (let i = 1; i < stroke.length; i++) {
      chineseCtx.lineTo(stroke[i].x, stroke[i].y);
    }
    chineseCtx.stroke();
  });

  chineseCtx.restore();
}

function getCanvasCoordinates(e) {
  if (!chineseCanvas) return { x: 0, y: 0 };
  const rect = chineseCanvas.getBoundingClientRect();
  const scaleX = chineseCanvas.width / rect.width;
  const scaleY = chineseCanvas.height / rect.height;

  let clientX = e.clientX;
  let clientY = e.clientY;

  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  }

  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY
  };
}

function handlePointerDown(e) {
  isDrawingChinese = true;
  const pt = getCanvasCoordinates(e);
  lastPoint = pt;
  userStrokes.push([pt]);
  drawSinglePoint(pt);
}

function handlePointerMove(e) {
  if (!isDrawingChinese) return;
  const pt = getCanvasCoordinates(e);
  if (!pt || !lastPoint) return;

  const currentStroke = userStrokes[userStrokes.length - 1];
  if (currentStroke) {
    currentStroke.push(pt);
  }

  // Vẽ đoạn thẳng nối giữa 2 điểm
  chineseCtx.save();
  chineseCtx.strokeStyle = '#0f172a';
  chineseCtx.lineWidth = 14;
  chineseCtx.lineCap = 'round';
  chineseCtx.lineJoin = 'round';

  chineseCtx.beginPath();
  chineseCtx.moveTo(lastPoint.x, lastPoint.y);
  chineseCtx.lineTo(pt.x, pt.y);
  chineseCtx.stroke();
  chineseCtx.restore();

  lastPoint = pt;
}

function handlePointerUp() {
  if (isDrawingChinese) {
    isDrawingChinese = false;
    lastPoint = null;
    updateStrokeCountInfo();
  }
}

function handleTouchStart(e) {
  e.preventDefault(); // Ngăn cuộn trang khi đang viết
  handlePointerDown(e);
}

function handleTouchMove(e) {
  e.preventDefault();
  handlePointerMove(e);
}

function handleTouchEnd(e) {
  handlePointerUp();
}

function drawSinglePoint(pt) {
  if (!chineseCtx) return;
  chineseCtx.save();
  chineseCtx.fillStyle = '#0f172a';
  chineseCtx.beginPath();
  chineseCtx.arc(pt.x, pt.y, 7, 0, Math.PI * 2);
  chineseCtx.fill();
  chineseCtx.restore();
}

function clearChineseCanvas() {
  if (typeof playSound === 'function') playSound('click');
  userStrokes = [];
  drawMiZiGe();
  updateStrokeCountInfo();
}

function toggleChineseGhostChar() {
  if (typeof playSound === 'function') playSound('click');
  isGhostCharVisible = !isGhostCharVisible;
  const ghostEl = document.getElementById('chineseGhostChar');
  const btnEl = document.getElementById('btnToggleGhost');

  if (ghostEl) {
    ghostEl.style.opacity = isGhostCharVisible ? '1' : '0';
  }
  if (btnEl) {
    btnEl.className = isGhostCharVisible 
      ? 'p-2.5 rounded-xl bg-rose-950/60 text-rose-300 border border-rose-500/50 font-semibold flex flex-col items-center gap-1 transition-all'
      : 'p-2.5 rounded-xl bg-slate-800 text-slate-400 border border-slate-700 font-semibold flex flex-col items-center gap-1 transition-all';
  }
}

function updateStrokeCountInfo() {
  const infoEl = document.getElementById('canvasStrokeCountInfo');
  if (infoEl) {
    infoEl.textContent = `Đã hạ ${userStrokes.length} nét bút`;
  }
}

// ==========================================
// 3. SELECTION & RENDERING
// ==========================================
function selectChineseChar(id) {
  if (typeof playSound === 'function') playSound('click');
  currentChineseCharId = id;
  const list = getStoredChineseChars();
  const charObj = list.find(c => c.id === id);
  if (!charObj) return;

  // Cập nhật Canvas chữ mẫu mờ
  const ghostEl = document.getElementById('chineseGhostChar');
  if (ghostEl) {
    ghostEl.textContent = charObj.char;
  }

  // Xóa nét vẽ cũ để người dùng viết mới
  clearChineseCanvas();

  // Cập nhật thông tin chiết tự cột bên phải
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
  if (levelEl) levelEl.textContent = charObj.level;
  if (strokesEl) strokesEl.textContent = `${charObj.strokeCount} nét`;
  if (meaningEl) meaningEl.textContent = charObj.meaning;
  if (radicalsEl) radicalsEl.textContent = charObj.radicals || 'Bộ thủ độc lập';
  if (storyEl) storyEl.textContent = `"${charObj.story}"`;
  if (strokeOrderEl) strokeOrderEl.textContent = charObj.strokeOrder;
  if (exampleEl) exampleEl.textContent = charObj.example;

  updateChineseMasteredButtonUI(id);
  renderChineseCharGrid();
  
  // Phát âm chữ vừa chọn
  speakChinese(charObj.char);
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
// 4. CHAR GRID & SEARCH & FILTER
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
    // Level filter
    if (currentChineseFilterLevel === 'radicals' && item.category !== 'radicals') return false;
    if (currentChineseFilterLevel === 'hsk1' && item.category !== 'hsk1') return false;

    // Search query
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
        Không tìm thấy chữ Hán nào phù hợp với từ khóa "${q}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isSelected = item.id === currentChineseCharId;
    const isMastered = isChineseCharMastered(item.id);

    const borderStyle = isSelected
      ? 'border-2 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)] bg-rose-950/40'
      : (isMastered 
          ? 'border border-amber-500/40 bg-cardBg hover:border-amber-400/80' 
          : 'border border-slate-800 bg-cardBg hover:border-rose-500/40');

    return `
      <div onclick="selectChineseChar('${item.id}')" class="p-3 rounded-2xl ${borderStyle} flex flex-col items-center justify-between cursor-pointer transition-all hover:scale-105 group relative select-none">
        ${isMastered ? `<span class="absolute top-1.5 right-1.5 text-xs">👑</span>` : ''}
        <span class="text-2xl sm:text-3xl font-serif font-black text-amber-300 group-hover:text-rose-300 transition-colors">
          ${item.char}
        </span>
        <div class="text-center mt-1 w-full">
          <div class="text-xs font-mono font-bold text-white">${item.pinyin}</div>
          <div class="text-[10px] text-slate-400 truncate">${item.hanviet} • ${item.meaning.split(',')[0]}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 5. SUB-TAB SWITCHER (WRITER vs DICTIONARY)
// ==========================================
function switchChineseSubTab(subTab) {
  if (typeof playSound === 'function') playSound('click');
  currentChineseSubTab = subTab;

  const writerView = document.getElementById('chineseWriterView');
  const dictView = document.getElementById('chineseDictView');

  if (subTab === 'writer') {
    if (writerView) writerView.classList.remove('hidden');
    if (dictView) dictView.classList.add('hidden');
  } else {
    if (writerView) writerView.classList.add('hidden');
    if (dictView) dictView.classList.remove('hidden');
    renderChineseDictView();
  }

  document.querySelectorAll('.chinese-sub-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-sub') === subTab) {
      btn.className = 'chinese-sub-nav-btn px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2';
    } else {
      btn.className = 'chinese-sub-nav-btn px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold transition-all flex items-center gap-2';
    }
  });

  lucide.createIcons();
}

function renderChineseDictView() {
  const container = document.getElementById('chineseDictList');
  if (!container) return;

  const list = getStoredChineseChars();

  container.innerHTML = list.map(item => `
    <div class="p-5 rounded-3xl bg-cardBg border border-slate-800 space-y-3 hover:border-rose-500/40 transition-all">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <div class="w-14 h-14 rounded-2xl bg-rose-950/40 border border-rose-500/30 flex items-center justify-center text-3xl font-serif font-black text-amber-300">
            ${item.char}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xl font-black text-white font-mono">${item.pinyin}</span>
              <button onclick="speakChinese('${item.char}')" class="p-1 rounded bg-slate-800 hover:bg-slate-700 text-rose-300">
                <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
              </button>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-rose-300 border border-slate-700 font-bold">${item.level}</span>
            </div>
            <p class="text-xs text-slate-400">Hán Việt: <strong class="text-amber-400 font-bold">${item.hanviet}</strong> • ${item.strokeCount} nét</p>
          </div>
        </div>
        <button onclick="switchChineseSubTab('writer'); selectChineseChar('${item.id}');" class="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all flex items-center gap-1 shadow">
          <span>Luyện Viết</span> <i data-lucide="pen-tool" class="w-3 h-3"></i>
        </button>
      </div>

      <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
        <div class="text-slate-400 font-semibold">Nghĩa: <strong class="text-emerald-300 font-bold">${item.meaning}</strong></div>
        <div class="text-slate-400">Bộ thủ: <span class="text-amber-200 font-semibold">${item.radicals}</span></div>
      </div>

      <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-800/30 text-xs text-slate-300 italic font-serif">
        💡 Câu chuyện siêu nhớ: "${item.story}"
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// ==========================================
// 6. AUDIO TTS (PHÁT ÂM TIẾNG TRUNG BẮC KINH)
// ==========================================
function speakChinese(text) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  try {
    window.speechSynthesis.cancel(); // Dừng câu trước nếu có
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN'; // Tiếng Trung đại lục chuẩn
    utterance.rate = 0.85; // Tốc độ vừa phải cho người học
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn('Speech synthesis error:', e);
  }
}

function speakCurrentChineseChar() {
  const list = getStoredChineseChars();
  const c = list.find(item => item.id === currentChineseCharId);
  if (c) {
    speakChinese(c.char);
  }
}

// ==========================================
// 7. CHINESE QUIZ MODAL
// ==========================================
function openChineseQuizModal() {
  if (typeof playSound === 'function') playSound('click');
  const allChars = getStoredChineseChars();
  if (allChars.length === 0) return;

  chineseQuizList = [...allChars].sort(() => Math.random() - 0.5).slice(0, 10);
  currentChineseQuizIdx = 0;
  chineseQuizScore = 0;

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
    // Hoàn thành bài quiz
    if (typeof playSound === 'function') playSound('success');
    if (scoreText) scoreText.textContent = `Kết Quả: ${chineseQuizScore} / ${chineseQuizList.length}`;
    container.innerHTML = `
      <div class="py-6 space-y-4">
        <div class="text-5xl">🏆</div>
        <h4 class="text-xl font-bold text-white">Xuất Sắc! Bạn Đã Vượt Qua Thử Thách!</h4>
        <p class="text-sm text-slate-300">
          Điểm số của bạn: <strong class="text-amber-400 text-lg font-mono">${chineseQuizScore} / ${chineseQuizList.length}</strong>
        </p>
        <button onclick="openChineseQuizModal()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs shadow-lg">
          Luyện Tập Lại Vòng Khác
        </button>
      </div>
    `;
    return;
  }

  const currentItem = chineseQuizList[currentChineseQuizIdx];
  if (scoreText) scoreText.textContent = `Câu ${currentChineseQuizIdx + 1} / ${chineseQuizList.length} • Điểm: ${chineseQuizScore}`;

  // Tự động phát âm câu hỏi
  speakChinese(currentItem.char);

  // Tạo 4 phương án lựa chọn ngẫu nhiên
  const allChars = getStoredChineseChars();
  const distractors = allChars.filter(c => c.id !== currentItem.id).sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [currentItem, ...distractors].sort(() => Math.random() - 0.5);

  container.innerHTML = `
    <div class="space-y-4">
      <div class="p-6 rounded-2xl bg-gradient-to-tr from-rose-950/40 via-cardBg to-slate-900 border border-rose-500/30 text-center space-y-2">
        <div class="text-6xl font-serif font-black text-amber-300 cursor-pointer" onclick="speakChinese('${currentItem.char}')" title="Bấm để nghe lại">
          ${currentItem.char}
        </div>
        <button onclick="speakChinese('${currentItem.char}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-rose-300 hover:text-white text-xs font-semibold">
          <i data-lucide="volume-2" class="w-3.5 h-3.5"></i> Nghe Lại Phát Âm
        </button>
        <p class="text-xs text-slate-400">Chọn Phiên Âm Pinyin & Ý Nghĩa Chính Xác Nhất:</p>
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
    if (typeof playSound === 'function') playSound('success');
    btnEl.classList.remove('bg-slate-900', 'border-slate-700');
    btnEl.classList.add('bg-emerald-950/80', 'border-emerald-500', 'ring-2', 'ring-emerald-400');
  } else {
    if (typeof playSound === 'function') playSound('error');
    btnEl.classList.remove('bg-slate-900', 'border-slate-700');
    btnEl.classList.add('bg-rose-950/80', 'border-rose-500', 'ring-2', 'ring-rose-400');
  }

  setTimeout(() => {
    currentChineseQuizIdx++;
    renderChineseQuizQuestion();
  }, 1000);
}

// ==========================================
// 8. KHỞI CHẠY TIẾNG TRUNG KHI NẠP TRANG
// ==========================================
function initChineseHub() {
  initChineseCanvas();
  renderChineseCharGrid();
  selectChineseChar(currentChineseCharId);
}
