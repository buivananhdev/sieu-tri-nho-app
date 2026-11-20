const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
const appJsPath = path.join(__dirname, 'app.js');

console.log('--- 1. CLEANING UP NAVBAR IN index.html (8 BUTTONS -> 4 MASTER PILLARS) ---');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Replace Desktop Navbar
const oldDesktopNavRegex = /<!-- Navigation Tabs \(Desktop\) -->[\s\S]*?<nav class="hidden md:flex items-center gap-1 text-sm font-medium">[\s\S]*?<\/nav>/;

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
  console.log('Replaced Desktop Navbar with 4 Master Pillars');
}

// Replace Mobile Navbar
const oldMobileNavRegex = /<!-- Mobile Nav Bar \(Bottom pinned\) -->[\s\S]*?<nav class="md:hidden fixed bottom-0[\s\S]*?<\/nav>/;

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
  console.log('Replaced Mobile Navbar with 4 Clean Icons');
}

// In tab-chinese, add a Return to Subjects Hub button at top if not present
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
  console.log('Added Back to Subjects Hub button in Chinese tab');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('index.html updated successfully!');
