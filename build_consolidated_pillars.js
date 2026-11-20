const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
const appJsPath = path.join(__dirname, 'app.js');

console.log('--- 1. BUILDING CONSOLIDATED PILLARS IN index.html ---');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// 1.1 Replace Desktop Navbar with 4 Master Pillars
const oldDesktopNavRegex = /<!-- Navigation Tabs \(Desktop\)[\s\S]*?<nav class="hidden md:flex items-center gap-[\s\S]*?<\/nav>/;
const newDesktopNav = `<!-- Navigation Tabs (Desktop) - 4 TRỤ CỘT CHUẨN MỰC TỐI GIẢN -->
        <nav class="hidden md:flex items-center gap-2 text-sm font-semibold">
          <button onclick="switchTab('overview')" class="nav-tab active flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all" data-tab="overview">
            <i data-lucide="compass" class="w-4 h-4 text-cyan-400"></i> Tổng Quan
          </button>
          <button onclick="switchTab('subjects')" class="nav-tab flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all" data-tab="subjects">
            <i data-lucide="graduation-cap" class="w-4 h-4 text-amber-400"></i> Bách Khoa Môn Học
          </button>
          <button onclick="switchTab('methods')" class="nav-tab flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all" data-tab="methods">
            <i data-lucide="brain" class="w-4 h-4 text-purple-400"></i> Phương Pháp Trí Não
          </button>
          <button onclick="switchTab('practice')" class="nav-tab flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all" data-tab="practice">
            <i data-lucide="swords" class="w-4 h-4 text-emerald-400"></i> Đấu Trường & Luyện Tập
          </button>
        </nav>`;

if (oldDesktopNavRegex.test(html)) {
  html = html.replace(oldDesktopNavRegex, newDesktopNav);
}

// 1.2 Replace Mobile Bottom Navbar with 4 Clean Icons
const oldMobileNavRegex = /<!-- Mobile Nav Bar \(Bottom pinned\)[\s\S]*?<nav class="md:hidden fixed bottom-0[\s\S]*?<\/nav>/;
const newMobileNav = `<!-- Mobile Nav Bar (Bottom pinned) - 4 ICON CHUẨN VỪA VẶN KHÔNG CUỘN -->
  <nav class="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-slate-800 bg-darkBg/95 backdrop-blur-xl py-2 px-2 text-[11px] font-bold shadow-2xl safe-area-bottom">
    <button onclick="switchTab('overview')" class="mobile-nav-btn flex flex-col items-center gap-1 py-1 text-brand-400" data-tab="overview">
      <i data-lucide="compass" class="w-5 h-5"></i> Tổng Quan
    </button>
    <button onclick="switchTab('subjects')" class="mobile-nav-btn flex flex-col items-center gap-1 py-1 text-slate-400" data-tab="subjects">
      <i data-lucide="graduation-cap" class="w-5 h-5 text-amber-400"></i> Môn Học
    </button>
    <button onclick="switchTab('methods')" class="mobile-nav-btn flex flex-col items-center gap-1 py-1 text-slate-400" data-tab="methods">
      <i data-lucide="brain" class="w-5 h-5 text-purple-400"></i> Phương Pháp
    </button>
    <button onclick="switchTab('practice')" class="mobile-nav-btn flex flex-col items-center gap-1 py-1 text-slate-400" data-tab="practice">
      <i data-lucide="swords" class="w-5 h-5 text-emerald-400"></i> Luyện Tập
    </button>
  </nav>`;

if (oldMobileNavRegex.test(html)) {
  html = html.replace(oldMobileNavRegex, newMobileNav);
}

// 1.3 Add back button to Chinese view if missing
if (html.includes('<section id="tab-chinese"') && !html.includes('id="backToSubjectsFromChineseBtn"')) {
  const chineseTopBanner = `<section id="tab-chinese" class="tab-content hidden space-y-8">
      <!-- Back to Subjects Hub Bar -->
      <div class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
        <button id="backToSubjectsFromChineseBtn" onclick="switchTab('subjects')" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-500/40 text-xs font-bold flex items-center gap-2 transition-all">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Quay Lại Bách Khoa Môn Học
        </button>
        <span class="text-xs text-slate-400 hidden sm:inline font-mono">
          Đại Ngành: <strong class="text-rose-400">Ngôn Ngữ & Ngoại Ngữ</strong> • Hán Tự & Viết
        </span>
      </div>`;

  html = html.replace('<section id="tab-chinese" class="tab-content hidden space-y-8">', chineseTopBanner);
}

// 1.4 Consolidate tab-memory and tab-intelligence into tab-methods
const oldMemoryAndIntelRegex = /<!-- TAB 2: SUPER MEMORY METHODS -->[\s\S]*?<section id="tab-memory"[\s\S]*?<\/section>\s*<!-- TAB 3: SUPER INTELLIGENCE & THINKING MODELS -->[\s\S]*?<section id="tab-intelligence"[\s\S]*?<\/section>/;

const newMethodsSection = `<!-- TRỤ CỘT 3: PHƯƠNG PHÁP TRÍ NÃO & MÔ HÌNH TƯ DUY (UNIFIED METHODS) -->
    <section id="tab-methods" class="tab-content hidden space-y-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-2">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Vũ Khí Trí Não & Tư Duy Toàn Cầu
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <i data-lucide="brain" class="w-8 h-8 text-purple-400"></i> Phương Pháp Trí Não & Mô Hình Tư Duy
          </h2>
          <p class="text-slate-400 text-xs sm:text-sm mt-1">Hợp nhất các phương pháp ghi nhớ huyền thoại và các mô hình tư duy đỉnh cao của các thiên tài.</p>
        </div>

        <!-- Sub-tab switcher -->
        <div class="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 self-start sm:self-auto">
          <button onclick="switchMethodsSubTab('memory')" id="btnSubTabMemory" class="px-4 py-2 rounded-xl text-xs font-bold transition-all bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md flex items-center gap-1.5">
            <i data-lucide="zap" class="w-3.5 h-3.5"></i> Siêu Trí Nhớ (6 Kỹ Thuật)
          </button>
          <button onclick="switchMethodsSubTab('intelligence')" id="btnSubTabIntelligence" class="px-4 py-2 rounded-xl text-xs font-bold transition-all text-slate-400 hover:text-white flex items-center gap-1.5">
            <i data-lucide="lightbulb" class="w-3.5 h-3.5"></i> Siêu Trí Tuệ (7 Mô Hình)
          </button>
        </div>
      </div>

      <!-- SUB-SECTION 1: SIÊU TRÍ NHỚ (MEMORY METHODS) -->
      <div id="methodsSubSectionMemory" class="space-y-6">
        <div id="memoryMethodsList" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Dynamically rendered via app.js -->
        </div>
      </div>

      <!-- SUB-SECTION 2: SIÊU TRÍ TUỆ (INTELLIGENCE MODELS) -->
      <div id="methodsSubSectionIntelligence" class="hidden space-y-6">
        <div id="intelligenceList" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Dynamically rendered via app.js -->
        </div>
      </div>
    </section>`;

if (oldMemoryAndIntelRegex.test(html)) {
  html = html.replace(oldMemoryAndIntelRegex, newMethodsSection);
  console.log('Consolidated Memory and Intelligence into tab-methods in index.html');
}

// 1.5 Consolidate tab-converter, tab-practice, tab-roadmap into tab-practice with sub-tabs
// Check if tab-converter is still before tab-practice
const oldConverterAndPracticeRegex = /<!-- TAB 4: NUMBER 00-99 CONVERTER[\s\S]*?<section id="tab-converter"[\s\S]*?<\/section>\s*<!-- TAB 5: PRACTICE ARENA -->[\s\S]*?<section id="tab-practice" class="tab-content hidden space-y-8">([\s\S]*?)<\/section>\s*<!-- TAB 6: 30-DAY ROADMAP -->[\s\S]*?<section id="tab-roadmap" class="tab-content hidden space-y-8">([\s\S]*?)<\/section>/;

// Let's inspect how tab-converter and tab-roadmap are defined
let converterContentMatch = html.match(/<section id="tab-converter" class="tab-content hidden space-y-8">([\s\S]*?)<\/section>/);
let roadmapContentMatch = html.match(/<section id="tab-roadmap" class="tab-content hidden space-y-8">([\s\S]*?)<\/section>/);
let practiceInnerMatch = html.match(/<section id="tab-practice" class="tab-content hidden space-y-8">([\s\S]*?)<\/section>/);

if (converterContentMatch && roadmapContentMatch && practiceInnerMatch) {
  const converterInner = converterContentMatch[1];
  const roadmapInner = roadmapContentMatch[1];
  const practiceInner = practiceInnerMatch[1];

  const consolidatedPractice = `<!-- TRỤ CỘT 4: ĐẤU TRƯỜNG & THỰC HÀNH TRÍ NÃO (UNIFIED PRACTICE & TOOLS) -->
    <section id="tab-practice" class="tab-content hidden space-y-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2">
            <i data-lucide="swords" class="w-3.5 h-3.5"></i> Huấn Luyện Phản Xạ & Công Cụ Thực Chiến
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <i data-lucide="swords" class="w-8 h-8 text-emerald-400"></i> Đấu Trường & Luyện Tập
          </h2>
          <p class="text-slate-400 text-xs sm:text-sm mt-1">Biến các kỹ thuật lý thuyết thành phản xạ thần kinh tự nhiên thông qua đấu trường và lộ trình rèn luyện.</p>
        </div>

        <!-- Sub-tab switcher -->
        <div class="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 self-start sm:self-auto overflow-x-auto scrollbar-none">
          <button onclick="switchPracticeSubTab('arena')" id="btnSubTabArena" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <i data-lucide="target" class="w-3.5 h-3.5"></i> Đấu Trường Phản Xạ
          </button>
          <button onclick="switchPracticeSubTab('converter')" id="btnSubTabConverter" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-slate-400 hover:text-white flex items-center gap-1.5 whitespace-nowrap">
            <i data-lucide="binary" class="w-3.5 h-3.5"></i> Bảng Mã 00 - 99
          </button>
          <button onclick="switchPracticeSubTab('roadmap')" id="btnSubTabRoadmap" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-slate-400 hover:text-white flex items-center gap-1.5 whitespace-nowrap">
            <i data-lucide="calendar" class="w-3.5 h-3.5"></i> Lộ Trình 30 Ngày
          </button>
        </div>
      </div>

      <!-- SUB-PANEL 1: ĐẤU TRƯỜNG PHẢN XẠ (FLASHCARDS & ARENA) -->
      <div id="practiceSubSectionArena" class="space-y-6">
        ${practiceInner}
      </div>

      <!-- SUB-PANEL 2: BẢNG MÃ SỐ 00 - 99 -->
      <div id="practiceSubSectionConverter" class="hidden space-y-6">
        ${converterInner}
      </div>

      <!-- SUB-PANEL 3: LỘ TRÌNH 30 NGÀY -->
      <div id="practiceSubSectionRoadmap" class="hidden space-y-6">
        ${roadmapInner}
      </div>
    </section>`;

  // Replace tab-converter, tab-practice, tab-roadmap with consolidatedPractice
  html = html.replace(/<section id="tab-converter"[\s\S]*?<\/section>/, '');
  html = html.replace(/<section id="tab-roadmap"[\s\S]*?<\/section>/, '');
  html = html.replace(/<section id="tab-practice"[\s\S]*?<\/section>/, consolidatedPractice);

  console.log('Successfully consolidated Practice, Converter, and Roadmap into unified tab-practice!');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Updated index.html successfully!');

console.log('--- 2. UPDATING app.js WITH MASTER PILLARS NAVIGATION LOGIC ---');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const navLogicJs = `
// ==========================================
// ĐIỀU HƯỚNG 4 TRỤ CỘT CHUẨN MỰC TỐI GIẢN (MASTER PILLARS NAVIGATION)
// ==========================================

function switchMethodsSubTab(sub) {
  playSound('click');
  const btnMemory = document.getElementById('btnSubTabMemory');
  const btnIntel = document.getElementById('btnSubTabIntelligence');
  const secMemory = document.getElementById('methodsSubSectionMemory');
  const secIntel = document.getElementById('methodsSubSectionIntelligence');

  if (sub === 'memory') {
    btnMemory?.classList.add('bg-gradient-to-r', 'from-purple-600', 'to-indigo-600', 'text-white', 'shadow-md');
    btnMemory?.classList.remove('text-slate-400');
    btnIntel?.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-indigo-600', 'text-white', 'shadow-md');
    btnIntel?.classList.add('text-slate-400');

    secMemory?.classList.remove('hidden');
    secIntel?.classList.add('hidden');
  } else {
    btnIntel?.classList.add('bg-gradient-to-r', 'from-purple-600', 'to-indigo-600', 'text-white', 'shadow-md');
    btnIntel?.classList.remove('text-slate-400');
    btnMemory?.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-indigo-600', 'text-white', 'shadow-md');
    btnMemory?.classList.add('text-slate-400');

    secIntel?.classList.remove('hidden');
    secMemory?.classList.add('hidden');
  }
  lucide.createIcons();
}

function switchPracticeSubTab(sub) {
  playSound('click');
  const tabs = ['arena', 'converter', 'roadmap'];
  tabs.forEach(t => {
    const btn = document.getElementById('btnSubTab' + t.charAt(0).toUpperCase() + t.slice(1));
    const sec = document.getElementById('practiceSubSection' + t.charAt(0).toUpperCase() + t.slice(1));

    if (t === sub) {
      btn?.classList.add('bg-gradient-to-r', 'from-emerald-600', 'to-teal-600', 'text-white', 'shadow-md');
      btn?.classList.remove('text-slate-400');
      sec?.classList.remove('hidden');
    } else {
      btn?.classList.remove('bg-gradient-to-r', 'from-emerald-600', 'to-teal-600', 'text-white', 'shadow-md');
      btn?.classList.add('text-slate-400');
      sec?.classList.add('hidden');
    }
  });
  lucide.createIcons();
}

// Master Unified switchTab with Full Backward Compatibility
function switchTab(tabId) {
  let targetTabId = tabId;
  let subSection = null;

  // Map sub-tabs into their Parent Pillars
  if (tabId === 'memory') {
    targetTabId = 'methods';
    subSection = 'memory';
  } else if (tabId === 'intelligence') {
    targetTabId = 'methods';
    subSection = 'intelligence';
  } else if (tabId === 'converter') {
    targetTabId = 'practice';
    subSection = 'converter';
  } else if (tabId === 'roadmap') {
    targetTabId = 'practice';
    subSection = 'roadmap';
  }

  currentTab = targetTabId;
  playSound('click');

  // Hide all main tab contents
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('block'));

  // Show active tab
  const target = document.getElementById(\`tab-\${targetTabId}\`);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('block');
  }

  if (targetTabId === 'subjects') {
    renderSubjectsGrid();
    updateProgressDashboard();
    updateOverviewPhiloMetrics();
    renderPhilosophyView();
  }

  if (targetTabId === 'chinese' && typeof initChineseHub === 'function') {
    initChineseHub();
  }

  // Trigger subtab activations if mapped
  if (subSection === 'memory' || subSection === 'intelligence') {
    switchMethodsSubTab(subSection);
  } else if (subSection === 'converter' || subSection === 'roadmap') {
    switchPracticeSubTab(subSection);
  }

  // Update navigation pillar active states
  // Note: Chinese tab is considered part of Bách Khoa Môn Học (subjects pillar)
  const navPillar = (targetTabId === 'chinese' ? 'subjects' : targetTabId);

  document.querySelectorAll('.nav-tab').forEach(btn => {
    if (btn.dataset.tab === navPillar || btn.dataset.tab === targetTabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    if (btn.dataset.tab === navPillar || btn.dataset.tab === targetTabId) {
      btn.classList.remove('text-slate-400');
      btn.classList.add('text-brand-400');
    } else {
      btn.classList.add('text-slate-400');
      btn.classList.remove('text-brand-400');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
`;

// Replace existing switchTab in appJs
const oldSwitchTabRegex = /function switchTab\(tabId\) \{[\s\S]*?window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\);\s*\}/;

if (oldSwitchTabRegex.test(appJs)) {
  appJs = appJs.replace(oldSwitchTabRegex, navLogicJs);
  console.log('Replaced switchTab with Master Pillars Navigation Engine');
} else {
  appJs += '\n' + navLogicJs;
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Updated app.js successfully!');
