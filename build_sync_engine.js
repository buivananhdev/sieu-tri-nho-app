const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
const appJsPath = path.join(__dirname, 'app.js');

console.log('--- 1. UPDATING index.html ---');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// 1.1 Add qrcode.min.js before app.js
if (!html.includes('qrcode.min.js')) {
  html = html.replace('<script src="app.js"></script>', '<script src="qrcode.min.js"></script>\n  <script src="app.js"></script>');
  console.log('Added qrcode.min.js script tag to index.html');
}

// 1.2 Add "📲 Đồng Bộ Điện Thoại" button to Bible Dashboard Header
const targetBibleHeaderBtns = `<button onclick="openMasteredBibleVersesModal()" class="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 border border-amber-500/40">
                  <i data-lucide="book-marked" class="w-3.5 h-3.5"></i>
                  <span>Sổ Tay Đã Thuộc (<span id="statBtnMasteredCount">0</span>)</span>
                </button>`;

const newBibleHeaderBtns = `<button onclick="openSyncModal('bible')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md border border-cyan-400/40" title="Đồng bộ tiến độ học sang điện thoại trong 3 giây">
                  <i data-lucide="smartphone" class="w-3.5 h-3.5"></i>
                  <span>📲 Đồng Bộ Điện Thoại</span>
                </button>
                <button onclick="openMasteredBibleVersesModal()" class="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 border border-amber-500/40">
                  <i data-lucide="book-marked" class="w-3.5 h-3.5"></i>
                  <span>Sổ Tay Đã Thuộc (<span id="statBtnMasteredCount">0</span>)</span>
                </button>`;

if (html.includes(targetBibleHeaderBtns) && !html.includes("openSyncModal('bible')")) {
  html = html.replace(targetBibleHeaderBtns, newBibleHeaderBtns);
  console.log('Added sync button to Bible dashboard header in index.html');
}

// 1.3 Add SYNC MODAL and INCOMING SYNC PROMPT MODAL before closing body
const syncModalsHtml = `
    <!-- MODAL: ĐỒNG BỘ TIẾN ĐỘ HỌC TẬP (MÁY TÍNH ⇄ ĐIỆN THOẠI) -->
    <div id="syncBackupModal" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md hidden items-center justify-center p-3 sm:p-4">
      <div class="bg-cardBg border border-cyan-500/40 rounded-3xl max-w-xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <!-- Header -->
        <div class="p-5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-lg font-bold shadow-lg">
              📲
            </div>
            <div>
              <h3 class="text-base font-bold text-white flex items-center gap-2">
                <span>Đồng Bộ Tiến Độ (Máy Tính ⇄ Điện Thoại)</span>
              </h3>
              <p class="text-xs text-slate-400">Chuyển toàn bộ câu đã thuộc & câu đã thêm sang điện thoại không cần đăng nhập</p>
            </div>
          </div>
          <button onclick="closeSyncModal()" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Tab Selector -->
        <div class="flex border-b border-slate-800 bg-slate-900/50 p-2 gap-1.5 text-xs">
          <button id="syncTabBtnQr" onclick="switchSyncTab('qr')" class="flex-1 py-2 rounded-xl font-bold transition-all bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center gap-1.5">
            <i data-lucide="qr-code" class="w-3.5 h-3.5"></i> Quét Mã QR (Nhanh)
          </button>
          <button id="syncTabBtnCode" onclick="switchSyncTab('code')" class="flex-1 py-2 rounded-xl font-bold transition-all text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i> Dán Mã / Link
          </button>
          <button id="syncTabBtnFile" onclick="switchSyncTab('file')" class="flex-1 py-2 rounded-xl font-bold transition-all text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5">
            <i data-lucide="download" class="w-3.5 h-3.5"></i> File Backup
          </button>
        </div>

        <!-- Body Content -->
        <div class="p-5 overflow-y-auto space-y-4">
          <!-- TAB 1: QR CODE SYNC -->
          <div id="syncTabContentQr" class="space-y-4 text-center">
            <div class="p-3 bg-cyan-950/20 border border-cyan-500/30 rounded-2xl text-xs text-cyan-300/90 leading-relaxed text-left flex items-start gap-2.5">
              <span class="text-base">💡</span>
              <div>
                <strong>Cách đồng bộ sang điện thoại siêu tốc:</strong><br>
                1. Mở camera trên điện thoại và quét mã QR bên dưới.<br>
                2. Chạm vào thông báo để mở trang web trên điện thoại.<br>
                3. Bấm <strong>"Đồng Ý"</strong> trên điện thoại là toàn bộ câu đã thuộc & câu đã nhập sẽ nạp vào máy ngay!
              </div>
            </div>

            <!-- Stats Preview of Current Device -->
            <div class="grid grid-cols-2 gap-2 text-left">
              <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <span class="text-slate-400">Câu Kinh Thánh đã thuộc:</span>
                <div class="font-bold text-amber-300 font-mono text-sm mt-0.5" id="syncPreviewMasteredCount">0 Câu</div>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <span class="text-slate-400">Câu tự thêm vào kho:</span>
                <div class="font-bold text-cyan-300 font-mono text-sm mt-0.5" id="syncPreviewCustomCount">0 Câu</div>
              </div>
            </div>

            <!-- QR Container -->
            <div class="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-inner mx-auto w-[240px] h-[240px]">
              <div id="syncQrCodeContainer" class="flex items-center justify-center"></div>
            </div>

            <!-- Quick Copy Link Button -->
            <div class="space-y-2">
              <button onclick="copySyncLinkToClipboard()" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all">
                <i data-lucide="link" class="w-4 h-4"></i>
                <span id="copySyncLinkBtnText">Sao Chép Link Đồng Bộ (Gửi qua Zalo / Facebook)</span>
              </button>
              <p class="text-[11px] text-slate-500">Hoặc sao chép link trên và gửi sang điện thoại của bạn, chỉ cần bấm mở là đồng bộ xong!</p>
            </div>
          </div>

          <!-- TAB 2: CODE COPY / PASTE -->
          <div id="syncTabContentCode" class="space-y-4 hidden text-left">
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>Mã đồng bộ của thiết bị này (Xuất ra):</span>
                <button onclick="copySyncCodeToClipboard()" class="text-[11px] text-cyan-400 hover:underline">Sao chép mã</button>
              </label>
              <textarea id="syncExportCodeArea" readonly rows="3" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-[11px] font-mono text-slate-300 focus:outline-none select-all"></textarea>
            </div>

            <div class="pt-2 border-t border-slate-800 space-y-2">
              <label class="text-xs font-bold text-amber-300">Nhập mã đồng bộ từ thiết bị khác vào đây:</label>
              <textarea id="syncImportCodeArea" rows="3" placeholder="Dán mã đồng bộ bạn nhận được vào đây..." class="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"></textarea>
              <button onclick="applySyncCodeFromInput()" class="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5">
                <i data-lucide="download-cloud" class="w-4 h-4"></i> Nạp Dữ Liệu Vào Thiết Bị Này
              </button>
            </div>
          </div>

          <!-- TAB 3: FILE BACKUP -->
          <div id="syncTabContentFile" class="space-y-4 hidden text-left">
            <div class="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-300 space-y-2">
              <div class="font-bold text-white flex items-center gap-1.5">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i> Sao Lưu Dự Phòng Vĩnh Viễn (.json)
              </div>
              <p class="text-slate-400 text-[11px]">Tải toàn bộ tiến độ học tập (Kinh Thánh, Tiếng Trung, Siêu Trí Nhớ) về máy tính/điện thoại dạng file JSON để lưu giữ an toàn.</p>
              <button onclick="exportBackupJsonFile()" class="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold border border-slate-700 text-xs flex items-center justify-center gap-2 transition-all">
                <i data-lucide="download" class="w-4 h-4"></i> Tải File Sao Lưu (.json) Về Máy
              </button>
            </div>

            <div class="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-300 space-y-2">
              <div class="font-bold text-white flex items-center gap-1.5">
                <i data-lucide="upload-cloud" class="w-4 h-4 text-amber-400"></i> Phục Hồi Từ File Sao Lưu
              </div>
              <p class="text-slate-400 text-[11px]">Chọn file JSON bạn đã tải về trước đó để phục hồi lại toàn bộ dữ liệu học tập.</p>
              <input type="file" id="syncBackupFileInput" accept=".json" onchange="importBackupJsonFile(event)" class="w-full text-xs text-slate-400 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-cyan-600 file:text-white hover:file:bg-cyan-500 cursor-pointer">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL: BÁO CÓ DỮ LIỆU ĐỒNG BỘ ĐẾN TỪ LINK/QR (INCOMING SYNC PROMPT) -->
    <div id="incomingSyncPromptModal" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md hidden items-center justify-center p-3 sm:p-4">
      <div class="bg-cardBg border border-emerald-500/50 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200 text-center">
        <div class="w-16 h-16 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-3xl mx-auto shadow-lg">
          📲
        </div>

        <div class="space-y-1.5">
          <h3 class="text-lg font-black text-white">Phát Hiện Dữ Liệu Đồng Bộ!</h3>
          <p class="text-xs text-slate-300">Tìm thấy tiến độ học tập được gửi từ thiết bị của bạn:</p>
        </div>

        <div class="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-left space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-slate-400">Câu Kinh Thánh đã thuộc:</span>
            <span class="font-bold text-amber-300 font-mono" id="incomingMasteredCount">0 Câu</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-400">Câu bạn đã thêm vào kho:</span>
            <span class="font-bold text-cyan-300 font-mono" id="incomingCustomCount">0 Câu</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-400">Thời gian sao lưu:</span>
            <span class="text-slate-400 font-mono text-[11px]" id="incomingDateStr">Vừa xong</span>
          </div>
        </div>

        <p class="text-[11px] text-slate-400">Bạn có muốn nạp dữ liệu này vào điện thoại ngay không? Các câu hiện có sẽ được hợp nhất an toàn mà không bị mất.</p>

        <div class="flex gap-2">
          <button onclick="rejectIncomingSync()" class="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all">
            Bỏ Qua
          </button>
          <button onclick="acceptIncomingSync()" class="flex-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs transition-all shadow-lg flex items-center justify-center gap-1.5">
            <i data-lucide="check-circle" class="w-4 h-4"></i> Đồng Bộ Ngay
          </button>
        </div>
      </div>
    </div>
`;

if (!html.includes('id="syncBackupModal"')) {
  html = html.replace('</body>', syncModalsHtml + '\n</body>');
  console.log('Added sync modals to index.html');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully updated index.html!');

console.log('--- 2. UPDATING app.js WITH CROSS-DEVICE SYNC ENGINE ---');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const syncEngineJs = `
// ==========================================
// 15C. HỆ THỐNG ĐỒNG BỘ DỮ LIỆU ĐA THIẾT BỊ (MÁY TÍNH ⇄ ĐIỆN THOẠI)
// ==========================================

let activeSyncQrInstance = null;
let pendingIncomingSyncPayload = null;

function browserUtf8ToBase64(str) {
  try {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode(parseInt(p1, 16));
    }));
  } catch (e) {
    console.error('Base64 encode error:', e);
    return '';
  }
}

function browserBase64ToUtf8(b64) {
  try {
    const binary = atob(b64);
    const percentEncoded = Array.from(binary).map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('');
    return decodeURIComponent(percentEncoded);
  } catch (e) {
    console.error('Base64 decode error:', e);
    return null;
  }
}

function generateSyncPacket() {
  const bibleProgress = localStorage.getItem('supermind_bible_progress_v1');
  const bibleCustom = localStorage.getItem('supermind_scripture_custom_verses_v1');
  const bibleDeleted = localStorage.getItem('supermind_scripture_deleted_verses_v1');
  const chineseProgress = localStorage.getItem('supermind_chinese_progress_v1');
  const chineseCustom = localStorage.getItem('supermind_chinese_custom_vocab_v1');
  const majorProgress = localStorage.getItem('supermind_major_system_progress_v1');

  const progressMap = getBibleProgressMap();
  const masteredCount = Object.values(progressMap).filter(v => v.mastered || v === true).length;
  const customList = bibleCustom ? JSON.parse(bibleCustom) : [];

  return {
    v: 1,
    app: 'supermind',
    timestamp: Date.now(),
    dateStr: new Date().toLocaleString('vi-VN'),
    stats: {
      bibleMasteredCount: masteredCount,
      bibleCustomCount: customList.length
    },
    data: {
      supermind_bible_progress_v1: progressMap,
      supermind_scripture_custom_verses_v1: customList,
      supermind_scripture_deleted_verses_v1: bibleDeleted ? JSON.parse(bibleDeleted) : [],
      supermind_chinese_progress_v1: chineseProgress ? JSON.parse(chineseProgress) : {},
      supermind_chinese_custom_vocab_v1: chineseCustom ? JSON.parse(chineseCustom) : [],
      supermind_major_system_progress_v1: majorProgress ? JSON.parse(majorProgress) : {}
    }
  };
}

function getSyncUrl() {
  const packet = generateSyncPacket();
  const json = JSON.stringify(packet);
  const base64 = browserUtf8ToBase64(json);
  // Dùng base URL của site (GitHub Pages hoặc host hiện tại)
  const base = window.location.origin + window.location.pathname;
  return base + '#sync=' + base64;
}

function openSyncModal(scope = 'bible') {
  playSound('click');
  const modal = document.getElementById('syncBackupModal');
  if (!modal) return;

  const packet = generateSyncPacket();

  // Cập nhật thống kê xem trước
  const elMastered = document.getElementById('syncPreviewMasteredCount');
  const elCustom = document.getElementById('syncPreviewCustomCount');
  if (elMastered) elMastered.textContent = packet.stats.bibleMasteredCount + ' Câu';
  if (elCustom) elCustom.textContent = packet.stats.bibleCustomCount + ' Câu';

  // Hiển thị mã văn bản
  const codeArea = document.getElementById('syncExportCodeArea');
  if (codeArea) {
    codeArea.value = browserUtf8ToBase64(JSON.stringify(packet));
  }

  // Tạo mã QR Code
  const qrContainer = document.getElementById('syncQrCodeContainer');
  if (qrContainer) {
    qrContainer.innerHTML = '';
    const syncUrl = getSyncUrl();
    try {
      if (typeof QRCode !== 'undefined') {
        activeSyncQrInstance = new QRCode(qrContainer, {
          text: syncUrl,
          width: 200,
          height: 200,
          colorDark: '#0b0f19',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.M
        });
      } else {
        qrContainer.innerHTML = \`<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=\${encodeURIComponent(syncUrl)}" alt="QR Code" class="w-[200px] h-[200px] rounded-lg" />\`;
      }
    } catch (err) {
      console.warn('QR Code generation fallback:', err);
      qrContainer.innerHTML = \`<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=\${encodeURIComponent(syncUrl)}" alt="QR Code" class="w-[200px] h-[200px] rounded-lg" />\`;
    }
  }

  switchSyncTab('qr');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function closeSyncModal() {
  playSound('click');
  const modal = document.getElementById('syncBackupModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function switchSyncTab(tab) {
  playSound('click');
  const tabs = ['qr', 'code', 'file'];
  tabs.forEach(t => {
    const btn = document.getElementById('syncTabBtn' + t.charAt(0).toUpperCase() + t.slice(1));
    const content = document.getElementById('syncTabContent' + t.charAt(0).toUpperCase() + t.slice(1));
    if (t === tab) {
      btn?.classList.add('bg-cyan-500/20', 'text-cyan-300', 'border', 'border-cyan-500/40');
      btn?.classList.remove('text-slate-400');
      content?.classList.remove('hidden');
    } else {
      btn?.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border', 'border-cyan-500/40');
      btn?.classList.add('text-slate-400');
      content?.classList.add('hidden');
    }
  });
  lucide.createIcons();
}

function copySyncLinkToClipboard() {
  const syncUrl = getSyncUrl();
  navigator.clipboard.writeText(syncUrl).then(() => {
    playSound('success');
    const btnText = document.getElementById('copySyncLinkBtnText');
    if (btnText) {
      const orig = btnText.textContent;
      btnText.textContent = '✓ ĐÃ SAO CHÉP LINK VÀO BỘ NHỚ ĐỆM!';
      setTimeout(() => { btnText.textContent = orig; }, 2500);
    }
    alert('Đã sao chép link đồng bộ! Bạn chỉ cần gửi link này qua Zalo hoặc Messenger của bạn rồi mở trên điện thoại nhé.');
  }).catch(() => {
    prompt('Hãy sao chép đường link đồng bộ này và mở trên điện thoại:', syncUrl);
  });
}

function copySyncCodeToClipboard() {
  const codeArea = document.getElementById('syncExportCodeArea');
  if (codeArea && codeArea.value) {
    navigator.clipboard.writeText(codeArea.value).then(() => {
      playSound('success');
      alert('Đã sao chép mã đồng bộ vào bộ nhớ đệm!');
    });
  }
}

function applySyncCodeFromInput() {
  const input = document.getElementById('syncImportCodeArea')?.value.trim();
  if (!input) {
    alert('Vui lòng dán mã đồng bộ vào ô trống trước khi nạp!');
    return;
  }

  try {
    const jsonStr = browserBase64ToUtf8(input);
    if (!jsonStr) throw new Error('Mã đồng bộ không hợp lệ');
    const packet = JSON.parse(jsonStr);
    mergeSyncDataIntoLocalStorage(packet);
    closeSyncModal();
    alert(\`Đồng bộ thành công! Đã nạp \${packet.stats?.bibleMasteredCount || 0} câu thuộc lòng và \${packet.stats?.bibleCustomCount || 0} câu tự thêm vào thiết bị này!\`);
  } catch (err) {
    alert('Lỗi: Mã đồng bộ không hợp lệ hoặc đã bị lỗi ký tự!');
    console.error(err);
  }
}

function exportBackupJsonFile() {
  playSound('success');
  const packet = generateSyncPacket();
  const blob = new Blob([JSON.stringify(packet, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const dateStr = new Date().toISOString().slice(0, 10);
  a.download = \`supermind_backup_\${dateStr}.json\`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importBackupJsonFile(e) {
  const file = e.target?.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const packet = JSON.parse(event.target.result);
      mergeSyncDataIntoLocalStorage(packet);
      closeSyncModal();
      alert('Phục hồi dữ liệu từ file backup thành công!');
    } catch (err) {
      alert('Lỗi: File JSON không đúng định dạng!');
      console.error(err);
    }
  };
  reader.readAsText(file);
}

function mergeSyncDataIntoLocalStorage(packet) {
  if (!packet || !packet.data) return;

  const d = packet.data;

  // 1. Merge Bible Progress
  if (d.supermind_bible_progress_v1) {
    const existing = getBibleProgressMap();
    const merged = { ...existing, ...d.supermind_bible_progress_v1 };
    localStorage.setItem(BIBLE_PROGRESS_KEY, JSON.stringify(merged));
  }

  // 2. Merge Custom Verses
  if (Array.isArray(d.supermind_scripture_custom_verses_v1)) {
    const rawExisting = localStorage.getItem(SCRIPTURE_STORAGE_KEY);
    const existingList = rawExisting ? JSON.parse(rawExisting) : [];
    const map = new Map(existingList.map(v => [v.id, v]));

    for (const v of d.supermind_scripture_custom_verses_v1) {
      const sanitized = sanitizeVerseObject(v);
      map.set(sanitized.id, sanitized);
    }

    const mergedList = Array.from(map.values()).sort(sortVersesAscending);
    localStorage.setItem(SCRIPTURE_STORAGE_KEY, JSON.stringify(mergedList));
  }

  // 3. Merge Chinese Progress
  if (d.supermind_chinese_progress_v1) {
    const raw = localStorage.getItem('supermind_chinese_progress_v1');
    const existing = raw ? JSON.parse(raw) : {};
    const merged = { ...existing, ...d.supermind_chinese_progress_v1 };
    localStorage.setItem('supermind_chinese_progress_v1', JSON.stringify(merged));
  }

  // 4. Merge Chinese Custom
  if (Array.isArray(d.supermind_chinese_custom_vocab_v1)) {
    const raw = localStorage.getItem('supermind_chinese_custom_vocab_v1');
    const existing = raw ? JSON.parse(raw) : [];
    const map = new Map(existing.map(v => [v.id, v]));
    for (const v of d.supermind_chinese_custom_vocab_v1) map.set(v.id, v);
    localStorage.setItem('supermind_chinese_custom_vocab_v1', JSON.stringify(Array.from(map.values())));
  }

  // Run cleanup and refresh UI
  migrateAndSanitizeBibleStorage();
  updateBibleStatsDashboard();
  renderVersesInRoom();
  if (typeof renderMasteredModalList === 'function') renderMasteredModalList();
  if (typeof renderChineseOverviewStats === 'function') renderChineseOverviewStats();
  playSound('success');
}

// ==========================================
// AUTO-DETECT INCOMING SYNC FROM URL HASH
// ==========================================
function checkIncomingSyncFromUrl() {
  const hash = window.location.hash || '';
  if (!hash.startsWith('#sync=')) return;

  const b64 = hash.replace('#sync=', '').trim();
  if (!b64) return;

  try {
    const json = browserBase64ToUtf8(b64);
    if (!json) return;
    const packet = JSON.parse(json);
    if (!packet || packet.app !== 'supermind') return;

    pendingIncomingSyncPayload = packet;

    // Show prompt modal
    const modal = document.getElementById('incomingSyncPromptModal');
    if (!modal) return;

    const elMastered = document.getElementById('incomingMasteredCount');
    const elCustom = document.getElementById('incomingCustomCount');
    const elDate = document.getElementById('incomingDateStr');

    if (elMastered) elMastered.textContent = (packet.stats?.bibleMasteredCount || 0) + ' Câu';
    if (elCustom) elCustom.textContent = (packet.stats?.bibleCustomCount || 0) + ' Câu';
    if (elDate) elDate.textContent = packet.dateStr || 'Gần đây';

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    lucide.createIcons();
    playSound('success');
  } catch (err) {
    console.warn('Invalid sync hash payload:', err);
  }
}

function acceptIncomingSync() {
  if (pendingIncomingSyncPayload) {
    mergeSyncDataIntoLocalStorage(pendingIncomingSyncPayload);
    pendingIncomingSyncPayload = null;
  }
  // Clear hash from URL
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  } else {
    window.location.hash = '';
  }

  const modal = document.getElementById('incomingSyncPromptModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  alert('Đã đồng bộ thành công vào điện thoại của bạn!');
}

function rejectIncomingSync() {
  pendingIncomingSyncPayload = null;
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  } else {
    window.location.hash = '';
  }

  const modal = document.getElementById('incomingSyncPromptModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
`;

if (!appJs.includes('function generateSyncPacket')) {
  appJs += '\n' + syncEngineJs;
  console.log('Appended sync engine to app.js');
}

// In DOMContentLoaded, call checkIncomingSyncFromUrl()
if (!appJs.includes('checkIncomingSyncFromUrl()')) {
  appJs = appJs.replace(
    'document.addEventListener(\'DOMContentLoaded\', () => {',
    'document.addEventListener(\'DOMContentLoaded\', () => {\n  checkIncomingSyncFromUrl();'
  );
  console.log('Registered checkIncomingSyncFromUrl in DOMContentLoaded');
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Successfully updated app.js with Cross-Device Sync Engine!');
