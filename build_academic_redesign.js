const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
const appJsPath = path.join(__dirname, 'app.js');

console.log('--- 1. REDESIGNING subjectsListScreen in index.html ---');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Replace subjectsListScreen with Academy Level UI
const oldScreenRegex = /<div id="subjectsListScreen" class="space-y-6">[\s\S]*?<div id="subjectsCardsContainer"[\s\S]*?<\/div>\s*<\/div>/;

const newScreenHtml = `<div id="subjectsListScreen" class="space-y-6">
        <!-- Header & Stats Overview -->
        <div class="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl space-y-4">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div class="space-y-1.5">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Viện Hàn Lâm Tri Thức & Cung Điện Ký Ức Đa Ngành
              </div>
              <h2 class="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
                <i data-lucide="graduation-cap" class="w-8 h-8 text-amber-400"></i> Bách Khoa Các Đại Ngành & Môn Học
              </h2>
              <p class="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Mỗi môn học là một Cung Điện độc lập, thuộc đúng Đại Ngành chuyên môn. Phát triển và nạp dữ liệu sâu từng môn một mà không bị xáo trộn.
              </p>
            </div>
            
            <div class="flex flex-wrap items-center gap-2">
              <button onclick="openAddSubjectModal()" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-xs shadow-md flex items-center gap-2 transition-all">
                <i data-lucide="plus-circle" class="w-4 h-4"></i> + Thêm Môn Học Mới
              </button>
            </div>
          </div>

          <!-- Academy Discipline Counter Bar -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
            <div class="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div class="text-[11px] text-slate-400">Tổng Số Đại Ngành:</div>
              <div class="text-xl font-mono font-black text-white mt-0.5">6 Ngành Lớn</div>
            </div>
            <div class="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div class="text-[11px] text-slate-400">Tổng Số Môn Chuẩn:</div>
              <div class="text-xl font-mono font-black text-amber-300 mt-0.5" id="statTotalSubjectsCount">9 Môn</div>
            </div>
            <div class="p-3 rounded-2xl bg-slate-950/60 border border-emerald-500/30 bg-emerald-950/10">
              <div class="text-[11px] text-emerald-300">Đang Học Chuyên Sâu:</div>
              <div class="text-xl font-mono font-black text-emerald-400 mt-0.5">2 Môn (Kinh Thánh + Hán Tự)</div>
            </div>
            <div class="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div class="text-[11px] text-slate-400">Sẵn Sàng Nạp Dữ Liệu:</div>
              <div class="text-xl font-mono font-black text-cyan-300 mt-0.5">7 Môn Tiếp Theo</div>
            </div>
          </div>
        </div>

        <!-- Discipline Filters & Search -->
        <div class="space-y-3">
          <!-- Search Box -->
          <div class="relative max-w-md">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="subjectSearchInput" oninput="handleSubjectSearch(this.value)" placeholder="Tìm kiếm nhanh môn học, từ khóa, đại ngành..." class="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 shadow-sm">
          </div>

          <!-- Discipline Filter Tabs -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs" id="disciplineFilterTabsBar">
            <!-- Rendered by JS -->
          </div>
        </div>

        <!-- Subject Selection Cards Grid -->
        <div id="subjectsCardsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Rendered via JS -->
        </div>
      </div>`;

if (oldScreenRegex.test(html)) {
  html = html.replace(oldScreenRegex, newScreenHtml);
  console.log('Replaced subjectsListScreen successfully!');
}

// Update addSubjectModal in index.html to include Discipline selector
const oldAddFormContent = `<div>
            <label class="block font-semibold text-slate-300 mb-1">Tên Môn Học:</label>
            <input type="text" id="inputSubjectName" placeholder="Ví dụ: Tiếng Anh Chuyên Ngành, Luật Dân Sự, Y Dược..." required class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-amber-400">
          </div>`;

const newAddFormContent = `<div>
            <label class="block font-semibold text-slate-300 mb-1">Thuộc Đại Ngành Nào:</label>
            <select id="inputSubjectDiscipline" required class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-amber-400">
              <option value="theology">📜 Tâm Linh & Thần Học</option>
              <option value="languages">🌐 Ngôn Ngữ & Ngoại Ngữ</option>
              <option value="law">⚖️ Khoa Học Pháp Lý</option>
              <option value="medicine">🩺 Y Dược & Sức Khỏe</option>
              <option value="humanities">🏛️ Khoa Học Xã Hội & Nhân Văn</option>
              <option value="stem">🔬 STEM & Công Nghệ</option>
              <option value="general">💡 Kỹ Năng & Lĩnh Vực Khác</option>
            </select>
          </div>
          <div>
            <label class="block font-semibold text-slate-300 mb-1">Tên Môn Học:</label>
            <input type="text" id="inputSubjectName" placeholder="Ví dụ: Luật Dân Sự, Tiếng Anh Oxford, Giải Phẫu Học..." required class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-amber-400">
          </div>`;

if (html.includes(oldAddFormContent)) {
  html = html.replace(oldAddFormContent, newAddFormContent);
  console.log('Updated addSubjectModal with Discipline selector');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('index.html updated successfully!');

console.log('--- 2. UPDATING app.js WITH ACADEMIC TAXONOMY & DISCIPLINE FILTERS ---');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const academicEngineJs = `
// ==========================================
// 16. VIỆN HÀN LÂM MÔN HỌC & ĐẠI NGÀNH (ACADEMIC DISCIPLINES TAXONOMY)
// ==========================================

const ACADEMIC_DISCIPLINES = [
  { id: 'all', name: 'Tất Cả Đại Ngành', icon: 'layers' },
  { id: 'theology', name: 'Tâm Linh & Thần Học', icon: 'sparkles', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
  { id: 'languages', name: 'Ngôn Ngữ & Ngoại Ngữ', icon: 'languages', badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
  { id: 'law', name: 'Khoa Học Pháp Lý', icon: 'scale', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
  { id: 'medicine', name: 'Y Dược & Sức Khỏe', icon: 'heart-pulse', badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
  { id: 'humanities', name: 'Khoa Học Xã Hội & Nhân Văn', icon: 'landmark', badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
  { id: 'stem', name: 'Khoa Học Tự Nhiên & STEM', icon: 'cpu', badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40' }
];

let currentSelectedDiscipline = 'all';
let currentSubjectSearchQuery = '';

const DEFAULT_ACADEMIC_SUBJECTS = [
  // 1. TÂM LINH & THẦN HỌC
  {
    id: 'bibletower',
    disciplineId: 'theology',
    disciplineName: 'Tâm Linh & Thần Học',
    name: 'Kinh Thánh (Tòa Nhà 66 Tầng)',
    badge: 'Cựu Ước & Tân Ước • 66 Tầng',
    status: 'active', // Đang học sâu
    desc: 'Mã hóa 66 sách thành 66 tầng, 1.189 chương là phòng nhớ, kích hoạt bằng Từ Khóa Mỏ Neo & First-Letter Drill.',
    icon: 'building-2',
    color: 'from-amber-600 to-yellow-600',
    type: 'bible',
    statsSummary: '66 Sách • 1.189 Chương • 31.102 Câu'
  },
  {
    id: 'church_history',
    disciplineId: 'theology',
    disciplineName: 'Tâm Linh & Thần Học',
    name: 'Lịch Sử Giáo Hội & Thần Học Hệ Thống',
    badge: 'Lịch Sử & Giáo Lý Cốt Lõi',
    status: 'ready',
    desc: 'Phân kỳ tư tưởng qua 5 thời kỳ: Sứ đồ ➔ Giáo phụ ➔ Trung cổ ➔ Cải chánh ➔ Cận hiện đại bằng Trục Thời Gian Loci.',
    icon: 'scroll',
    color: 'from-amber-700 to-yellow-800',
    type: 'custom',
    statsSummary: '5 Thời Kỳ • 20 Mốc Lịch Sử Lớn',
    topics: [
      { title: 'Thời kỳ 1: Hội thánh đầu tiên & Kỷ nguyên Sứ đồ (Thế kỷ 1)', notes: 'Neo vào phòng Tiền sảnh' },
      { title: 'Thời kỳ 2: Kỷ nguyên Giáo Phụ & Tín điều Nicea (325 SC)', notes: 'Neo vào phòng Nghị viện' }
    ]
  },

  // 2. NGÔN NGỮ & NGOẠI NGỮ
  {
    id: 'chinese_mastery',
    disciplineId: 'languages',
    disciplineName: 'Ngôn Ngữ & Ngoại Ngữ',
    name: 'Tiếng Trung & Hán Tự Chuyên Sâu',
    badge: 'Chiết Tự • Bàn Luyện Viết • HSK 1-6',
    status: 'active',
    desc: 'Bàn vẽ tương tác, 214 Bộ thủ cốt lõi, giải nghĩa hình tượng chữ và Cung điện 5000 từ vựng HSK.',
    icon: 'languages',
    color: 'from-rose-600 to-red-600',
    type: 'chinese_link',
    statsSummary: '214 Bộ Thủ • HSK 1-6 • Bàn Luyện Viết'
  },
  {
    id: 'english_oxford',
    disciplineId: 'languages',
    disciplineName: 'Ngôn Ngữ & Ngoại Ngữ',
    name: 'Tiếng Anh Toàn Diện (Oxford & Academic)',
    badge: 'IPA • 3000 Từ Cốt Lõi • Collocations',
    status: 'ready',
    desc: 'Áp dụng Kỹ thuật Âm Thanh Tương Tự (Sound-alike) và Cung Điện Không Gian để ghi nhớ 3000 từ vựng học thuật.',
    icon: 'globe-2',
    color: 'from-blue-600 to-cyan-600',
    type: 'custom',
    statsSummary: '3000 Từ Oxford • 44 Âm IPA',
    topics: [
      { title: 'Chủ đề 1: Giao Tiếp & Ẩm Thực Cốt Lõi (30 từ)', notes: 'Cung điện Bếp ăn' },
      { title: 'Chủ đề 2: Du Lịch & Sân Bay Quốc Tế (40 từ)', notes: 'Cung điện Ga hàng không' }
    ]
  },

  // 3. KHOA HỌC PHÁP LÝ
  {
    id: 'law_vietnam',
    disciplineId: 'law',
    disciplineName: 'Khoa Học Pháp Lý',
    name: 'Pháp Luật Việt Nam & Quốc Tế',
    badge: 'Hiến Pháp • Dân Sự • Hình Sự',
    status: 'ready',
    desc: 'Mã hóa số điều luật theo Major System 00-99 và gắn các tình huống thực tiễn vào Cung Điện Tòa Án.',
    icon: 'scale',
    color: 'from-emerald-600 to-teal-600',
    type: 'custom',
    statsSummary: 'Bộ Luật Dân Sự • Bộ Luật Hình Sự',
    topics: [
      { title: 'Chương 1: Các Nguyên Tắc Cơ Bản Của Bộ Luật Dân Sự', notes: 'Gắn Điều 1 đến Điều 15 vào Cổng vào và Hành lang Tòa án' },
      { title: 'Chương 2: Cấu Thành Tội Phạm Trong Luật Hình Sự', notes: 'Gắn 4 yếu tố cấu thành vào 4 góc phòng xử án' }
    ]
  },

  // 4. Y DƯỢC & SỨC KHỎE
  {
    id: 'anatomy_medicine',
    disciplineId: 'medicine',
    disciplineName: 'Y Dược & Sức Khỏe',
    name: 'Giải Phẫu Học & Dược Lý (Cung Điện Cơ Thể)',
    badge: 'Hệ Cơ Quan • Dược Chất • Bệnh Học',
    status: 'ready',
    desc: 'Biến cơ thể người thành Cung Điện Ký Ức (Body Palace) để đặt tên cơ, xương, dây thần kinh và phân nhóm dược chất.',
    icon: 'heart-pulse',
    color: 'from-cyan-600 to-teal-500',
    type: 'custom',
    statsSummary: '206 Xương • 12 Đôi Dây Thần Kinh • Nhóm Dược',
    topics: [
      { title: 'Phân khu 1: Hệ Thần Kinh Trung Ương & 12 Đôi Dây Thần Kinh Sọ', notes: 'Neo từ Đỉnh đầu xuống Vùng cổ' },
      { title: 'Phân khu 2: Nhóm Kháng Sinh & Cơ Chế Diệt Khuẩn', notes: 'Neo vào phòng Xét nghiệm' }
    ]
  },

  // 5. KHOA HỌC XÃ HỘI & NHÂN VĂN
  {
    id: 'philosophy',
    disciplineId: 'humanities',
    disciplineName: 'Khoa Học Xã Hội & Nhân Văn',
    name: 'Triết Học Toàn Thư (Ma Trận 5D)',
    badge: 'Chuẩn Giáo Sư • 5 Thời Kỳ',
    status: 'active',
    desc: 'Bắt đầu từ Cột mốc số 0 (Thales & Sự kinh ngạc) qua 5 thời kỳ lịch sử tư tưởng bằng Bộ Khung 5 Chiều Đại Tư Duy.',
    icon: 'sparkles',
    color: 'from-indigo-600 via-purple-600 to-amber-500',
    type: 'philosophy',
    statsSummary: '5 Thời Kỳ • 32 Triết Gia Đại Thụ'
  },
  {
    id: 'history_world_vn',
    disciplineId: 'humanities',
    disciplineName: 'Khoa Học Xã Hội & Nhân Văn',
    name: 'Lịch Sử Dân Tộc & Lịch Sử Thế Giới',
    badge: 'Niên Biểu • Trục Thời Gian Loci',
    status: 'ready',
    desc: 'Mã hóa các mốc năm lịch sử bằng Major System 00-99 kết hợp chuỗi sự kiện nguyên nhân - diễn biến - kết quả.',
    icon: 'history',
    color: 'from-purple-700 to-indigo-800',
    type: 'custom',
    statsSummary: 'Trục Niên Biểu 4000 Năm • Mốc Cận Hiện Đại',
    topics: [
      { title: 'Kỷ nguyên 1: Các triều đại phong kiến độc lập tự chủ', notes: 'Ngô - Đinh - Tiền Lê - Lý - Trần - Lê' },
      { title: 'Kỷ nguyên 2: Hai cuộc Thế chiến & Trật tự thế giới', notes: 'Mã hóa các năm 1914, 1918, 1939, 1945' }
    ]
  },

  // 6. STEM & CÔNG NGHỆ
  {
    id: 'stem_math_logic',
    disciplineId: 'stem',
    disciplineName: 'Khoa Học Tự Nhiên & STEM',
    name: 'Toán Học Tư Duy & Mô Hình Thuật Toán',
    badge: 'Công Thức • Ký Hiệu Hình Ảnh • Logic',
    status: 'ready',
    desc: 'Chuyển đổi công thức đại số, giải tích và cấu trúc thuật toán thành biểu tượng hình ảnh mỏ neo.',
    icon: 'cpu',
    color: 'from-blue-600 to-indigo-700',
    type: 'custom',
    statsSummary: 'Đại Số • Giải Tích • Thuật Toán Cốt Lõi',
    topics: [
      { title: 'Mô hình 1: Các hằng đẳng thức & Bất đẳng thức kinh điển', notes: 'Mã hóa hình học không gian' },
      { title: 'Mô hình 2: Tư duy thuật toán đệ quy & Quy hoạch động', notes: 'Mô hình bậc thang Loci' }
    ]
  }
];

function getStoredSubjects() {
  try {
    const raw = localStorage.getItem(SUBJECTS_STORAGE_KEY);
    const custom = raw ? JSON.parse(raw) : [];
    // Ensure all subjects have discipline info
    const sanitizedCustom = custom.map(s => ({
      ...s,
      disciplineId: s.disciplineId || 'general',
      disciplineName: s.disciplineName || 'Kỹ Năng & Lĩnh Vực Khác',
      status: s.status || 'custom'
    }));
    return [...DEFAULT_ACADEMIC_SUBJECTS, ...sanitizedCustom];
  } catch (e) {
    return DEFAULT_ACADEMIC_SUBJECTS;
  }
}

function renderDisciplineFilterTabs() {
  const container = document.getElementById('disciplineFilterTabsBar');
  if (!container) return;

  const subjects = getStoredSubjects();

  container.innerHTML = ACADEMIC_DISCIPLINES.map(d => {
    const isActive = d.id === currentSelectedDiscipline;
    const count = d.id === 'all' 
      ? subjects.length 
      : subjects.filter(s => s.disciplineId === d.id).length;

    return \`
      <button onclick="filterByDiscipline('\${d.id}')" class="px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shadow-sm \${
        isActive 
          ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black shadow-md border border-amber-300' 
          : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
      }">
        <i data-lucide="\${d.icon || 'folder'}" class="w-3.5 h-3.5"></i>
        <span>\${d.name}</span>
        <span class="text-[10px] px-1.5 py-0.2 rounded-full \${isActive ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-amber-300 font-mono'} font-bold">\${count}</span>
      </button>
    \`;
  }).join('');

  lucide.createIcons();
}

function filterByDiscipline(disciplineId) {
  playSound('click');
  currentSelectedDiscipline = disciplineId;
  renderDisciplineFilterTabs();
  renderSubjectsGrid();
}

function handleSubjectSearch(query) {
  currentSubjectSearchQuery = (query || '').toLowerCase().trim();
  renderSubjectsGrid();
}

function renderSubjectsGrid() {
  const container = document.getElementById('subjectsCardsContainer');
  if (!container) return;

  const allSubjects = getStoredSubjects();
  let filtered = allSubjects;

  // Filter by Discipline
  if (currentSelectedDiscipline !== 'all') {
    filtered = filtered.filter(s => s.disciplineId === currentSelectedDiscipline);
  }

  // Filter by Search Query
  if (currentSubjectSearchQuery) {
    const q = currentSubjectSearchQuery;
    filtered = filtered.filter(s => {
      return s.name.toLowerCase().includes(q) ||
             (s.desc && s.desc.toLowerCase().includes(q)) ||
             (s.badge && s.badge.toLowerCase().includes(q)) ||
             (s.disciplineName && s.disciplineName.toLowerCase().includes(q));
    });
  }

  // Update counter
  const counterEl = document.getElementById('statTotalSubjectsCount');
  if (counterEl) counterEl.textContent = allSubjects.length + ' Môn';

  if (filtered.length === 0) {
    container.innerHTML = \`
      <div class="col-span-full py-12 text-center text-slate-500 border border-dashed border-slate-800 rounded-3xl p-8 space-y-3">
        <div class="w-12 h-12 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center mx-auto">
          <i data-lucide="search-x" class="w-6 h-6"></i>
        </div>
        <div class="text-sm font-bold text-slate-300">Không tìm thấy môn học nào phù hợp!</div>
        <p class="text-xs text-slate-500">Hãy thử xóa bộ lọc tìm kiếm hoặc bấm nút bên dưới để tạo môn học mới.</p>
        <button onclick="openAddSubjectModal()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all inline-flex items-center gap-1.5">
          <i data-lucide="plus" class="w-4 h-4"></i> Thêm Môn Vào Ngành Này
        </button>
      </div>
    \`;
    lucide.createIcons();
    return;
  }

  let html = filtered.map(s => {
    const isActiveStudy = s.status === 'active';
    const disc = ACADEMIC_DISCIPLINES.find(d => d.id === s.disciplineId) || { badgeColor: 'bg-slate-800 text-slate-300 border-slate-700' };

    return \`
      <div onclick="openSubjectDetail('\${s.id}')" class="p-5 rounded-3xl bg-cardBg border \${isActiveStudy ? 'border-amber-500/50 shadow-amber-950/20' : 'border-slate-800 hover:border-slate-700'} hover:scale-[1.01] hover:bg-slate-900/80 cursor-pointer flex flex-col justify-between transition-all group shadow-lg space-y-4">
        <div>
          <!-- Top Discipline Banner & Status -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1 \${disc.badgeColor}">
              <i data-lucide="bookmark" class="w-2.5 h-2.5"></i>
              \${s.disciplineName || 'Đại Ngành'}
            </span>
            \${isActiveStudy ? \`
              <span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1 animate-pulse">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ĐANG HỌC SÂU
              </span>
            \` : \`
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                SẴN SÀNG NẠP
              </span>
            \`}
          </div>

          <!-- Main Subject Info -->
          <div class="flex items-start gap-3.5 mb-2.5">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr \${s.color || 'from-indigo-600 to-purple-600'} text-white flex items-center justify-center text-lg shadow-md shrink-0 group-hover:scale-105 transition-transform">
              <i data-lucide="\${s.icon || 'book-open'}" class="w-6 h-6"></i>
            </div>
            <div class="space-y-1">
              <h4 class="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                \${s.name}
              </h4>
              <div class="text-[11px] font-semibold text-amber-400/90 font-mono">
                \${s.badge || 'Cung Điện Ghi Nhớ'}
              </div>
            </div>
          </div>

          <!-- Description -->
          <p class="text-xs text-slate-400 leading-relaxed line-clamp-2 mt-2">
            \${s.desc}
          </p>

          <!-- Stats Pill -->
          \${s.statsSummary ? \`
            <div class="mt-3 p-2 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-300 flex items-center gap-1.5 font-mono">
              <i data-lucide="layers" class="w-3.5 h-3.5 text-amber-400 shrink-0"></i>
              <span class="truncate">\${s.statsSummary}</span>
            </div>
          \` : ''}
        </div>

        <!-- Action Footer -->
        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold \${isActiveStudy ? 'text-amber-300' : 'text-slate-300 group-hover:text-amber-400'}">
          <span class="flex items-center gap-1">
            \${isActiveStudy ? 'Vào Không Gian Học Sâu' : 'Xem & Nạp Dữ Liệu'}
          </span>
          <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1.5 transition-transform"></i>
        </div>
      </div>
    \`;
  }).join('');

  // Add "+" card to prompt adding custom subjects
  html += \`
    <div onclick="openAddSubjectModal()" class="p-6 rounded-3xl border border-dashed border-slate-800 hover:border-amber-400/60 bg-slate-900/40 hover:bg-slate-900/80 cursor-pointer flex flex-col items-center justify-center text-center transition-all group min-h-[220px] space-y-2">
      <div class="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
        <i data-lucide="plus" class="w-6 h-6"></i>
      </div>
      <div class="text-sm font-bold text-white group-hover:text-amber-300">+ Thêm Môn Học Mới Của Bạn</div>
      <p class="text-xs text-slate-400 max-w-xs leading-relaxed">
        Phân loại vào đúng Đại Ngành và thiết lập Cung điện Ký ức riêng biệt
      </p>
    </div>
  \`;

  container.innerHTML = html;
  lucide.createIcons();
}

// Redirect Chinese to Chinese Hub
const _orig_openSubjectDetail = openSubjectDetail;
openSubjectDetail = function(subjectId) {
  if (subjectId === 'chinese_mastery') {
    switchTab('chinese');
    return;
  }
  _orig_openSubjectDetail(subjectId);
};
`;

// Replace old renderSubjectsGrid and DEFAULT_SUBJECTS in appJs
const oldSubjectsDefRegex = /const DEFAULT_SUBJECTS = \[[\s\S]*?const SUBJECTS_STORAGE_KEY = 'supermind_custom_user_subjects_v1';[\s\S]*?function renderSubjectsGrid\(\) \{[\s\S]*?container\.innerHTML = html;[\s\S]*?lucide\.createIcons\(\);[\s\S]*?\}/;

if (oldSubjectsDefRegex.test(appJs)) {
  appJs = appJs.replace(oldSubjectsDefRegex, academicEngineJs + '\nconst SUBJECTS_STORAGE_KEY = \'supermind_custom_user_subjects_v1\';\nlet currentActiveSubjectId = \'bibletower\';');
  console.log('Replaced DEFAULT_SUBJECTS and renderSubjectsGrid with Academic Engine');
} else {
  console.log('Appending academicEngineJs to app.js');
  appJs += '\n' + academicEngineJs;
}

// In saveCustomSubject, capture discipline
const oldSaveCustomSubj = `function saveCustomSubject(e) {
  e.preventDefault();
  playSound('success');

  const name = document.getElementById('inputSubjectName').value.trim();
  const model = document.getElementById('inputSubjectModel').value.trim();
  const desc = document.getElementById('inputSubjectDesc').value.trim();`;

const newSaveCustomSubj = `function saveCustomSubject(e) {
  e.preventDefault();
  playSound('success');

  const disciplineId = document.getElementById('inputSubjectDiscipline')?.value || 'general';
  const discObj = ACADEMIC_DISCIPLINES.find(d => d.id === disciplineId) || { name: 'Kỹ Năng & Lĩnh Vực Khác' };
  const name = document.getElementById('inputSubjectName').value.trim();
  const model = document.getElementById('inputSubjectModel').value.trim();
  const desc = document.getElementById('inputSubjectDesc').value.trim();`;

const oldNewSubjObj = `  const newSubj = {
    id: 'subj_' + Date.now(),
    name: name,
    badge: model || 'Cung Điện Riêng',
    desc: desc || \`Ứng dụng phương pháp \${model} để ghi nhớ môn \${name}.\`,
    icon: 'book-open',
    color: 'from-purple-600 to-indigo-600',
    type: 'custom',
    topics: []
  };`;

const newNewSubjObj = `  const newSubj = {
    id: 'subj_' + Date.now(),
    disciplineId: disciplineId,
    disciplineName: discObj.name,
    name: name,
    badge: model || 'Cung Điện Riêng',
    status: 'ready',
    desc: desc || \`Ứng dụng phương pháp \${model} để ghi nhớ môn \${name}.\`,
    icon: 'book-open',
    color: 'from-purple-600 to-indigo-600',
    type: 'custom',
    statsSummary: \`Mô hình: \${model}\`,
    topics: []
  };`;

if (appJs.includes(oldSaveCustomSubj)) {
  appJs = appJs.replace(oldSaveCustomSubj, newSaveCustomSubj);
}
if (appJs.includes(oldNewSubjObj)) {
  appJs = appJs.replace(oldNewSubjObj, newNewSubjObj);
}

// In DOMContentLoaded, call renderDisciplineFilterTabs()
if (!appJs.includes('renderDisciplineFilterTabs();')) {
  appJs = appJs.replace(
    'renderSubjectsGrid();',
    'renderDisciplineFilterTabs();\n  renderSubjectsGrid();'
  );
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('app.js updated successfully with Academic Taxonomy Engine!');
