const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
const appJsPath = path.join(__dirname, 'app.js');

console.log('=== 1. ADD peerjs.min.js TO index.html ===');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

if (!html.includes('peerjs.min.js')) {
  html = html.replace('<script src="app.js"></script>', '<script src="peerjs.min.js"></script>\n  <script src="app.js"></script>');
  fs.writeFileSync(indexHtmlPath, html, 'utf8');
  console.log('Added peerjs.min.js script tag to index.html.');
} else {
  console.log('peerjs.min.js already in index.html.');
}

console.log('=== 2. UPDATE app.js WITH WEBRTC P2P REALTIME ENGINE ===');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const targetP2pCode = `
// =========================================================================
// WEBRTC REALTIME P2P SYNC ENGINE (DIRECT PHONE ↔ PC SYNC FOR GITHUB PAGES)
// =========================================================================
let peerInstance = null;
const activePeerConnections = new Map();
let isPeerConnecting = false;

function initWebRtcP2pEngine() {
  if (typeof Peer === 'undefined') {
    console.warn('PeerJS library not loaded, skipping WebRTC.');
    return;
  }

  const roomKey = (getCloudSyncConfig().roomKey || 'buivananhdev').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
  const hostId = \`supermind-\${roomKey}-host\`;
  const guestPrefix = \`supermind-\${roomKey}-guest-\`;

  tryRegisterAsHost(hostId, guestPrefix);
}

function tryRegisterAsHost(hostId, guestPrefix) {
  try {
    const peer = new Peer(hostId, { debug: 0 });

    peer.on('open', (id) => {
      console.log('✅ WebRTC Host Registered:', id);
      peerInstance = peer;
      updateSyncStatusUI('synced', 'P2P Realtime Live (Máy Chủ)');
    });

    peer.on('connection', (conn) => {
      console.log('🔗 Client connected to Host:', conn.peer);
      handleIncomingPeerConnection(conn);
    });

    peer.on('error', (err) => {
      if (err.type === 'unavailable-id') {
        console.log('Host ID already active on other device. Connecting as Guest...');
        try { peer.destroy(); } catch (e) {}
        initAsGuestClient(hostId, guestPrefix);
      } else {
        console.warn('Peer error:', err.type);
      }
    });
  } catch (e) {
    console.warn('tryRegisterAsHost error:', e);
  }
}

function initAsGuestClient(hostId, guestPrefix) {
  try {
    const guestId = guestPrefix + Math.random().toString(36).substring(2, 8);
    const peer = new Peer(guestId, { debug: 0 });

    peer.on('open', (id) => {
      console.log('✅ WebRTC Guest Registered:', id);
      peerInstance = peer;
      connectToHost(peer, hostId);
    });

    peer.on('error', (err) => {
      console.warn('Guest peer error:', err.type);
    });
  } catch (e) {
    console.warn('initAsGuestClient error:', e);
  }
}

function connectToHost(peer, hostId) {
  if (isPeerConnecting) return;
  isPeerConnecting = true;

  try {
    const conn = peer.connect(hostId, { reliable: true });
    handleIncomingPeerConnection(conn);

    conn.on('close', () => {
      console.log('Host connection closed, will retry...');
      activePeerConnections.delete(conn.peer);
      isPeerConnecting = false;
      setTimeout(() => {
        const roomKey = (getCloudSyncConfig().roomKey || 'buivananhdev').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
        tryRegisterAsHost(\`supermind-\${roomKey}-host\`, \`supermind-\${roomKey}-guest-\`);
      }, 3000);
    });
  } catch (e) {
    isPeerConnecting = false;
  }
}

function handleIncomingPeerConnection(conn) {
  conn.on('open', () => {
    console.log('🚀 P2P DataChannel OPEN with:', conn.peer);
    activePeerConnections.set(conn.peer, conn);
    isPeerConnecting = false;
    updateSyncStatusUI('synced', 'P2P Realtime Live (Đã kết nối)');

    // 1. Tự động gửi toàn bộ dữ liệu của máy mình sang thiết bị vừa bắt tay
    const payload = buildSyncPayload();
    conn.send({
      type: 'SUPERMIND_HANDSHAKE',
      payload: payload
    });
  });

  conn.on('data', (data) => {
    if (!data || !data.payload) return;
    console.log('⚡ Received P2P Realtime Update:', data.type);
    applyIncomingP2pPayload(data.payload);
  });

  conn.on('error', (err) => {
    console.warn('P2P connection error:', err);
    activePeerConnections.delete(conn.peer);
  });
}

function broadcastP2pUpdate(payload) {
  if (!activePeerConnections || activePeerConnections.size === 0) return;

  const msg = {
    type: 'SUPERMIND_INSTANT_UPDATE',
    payload: payload
  };

  activePeerConnections.forEach((conn) => {
    try {
      if (conn.open) {
        conn.send(msg);
        console.log('Broadcasted P2P update to:', conn.peer);
      }
    } catch (e) {}
  });
}

function applyIncomingP2pPayload(remoteData) {
  if (!remoteData) return;

  // HỢP NHẤT TIẾN ĐỘ THUỘC KINH THÁNH
  const currentMap = getBibleProgressMap();
  let remoteMap = {};
  try {
    remoteMap = JSON.parse(remoteData.bible_progress || '{}');
  } catch (e) {}

  const mergedMap = { ...currentMap };
  Object.keys(remoteMap).forEach(k => {
    const rItem = remoteMap[k];
    const cItem = mergedMap[k];
    if (!cItem) {
      mergedMap[k] = rItem;
    } else {
      mergedMap[k] = {
        status: (rItem.mastered || cItem.mastered) ? 'mastered' : (rItem.status || cItem.status),
        mastered: !!(rItem.mastered || cItem.mastered),
        reviewCount: Math.max(rItem.reviewCount || 0, cItem.reviewCount || 0),
        lastReviewed: Math.max(rItem.lastReviewed || 0, cItem.lastReviewed || 0)
      };
    }
  });
  localStorage.setItem(BIBLE_PROGRESS_KEY, JSON.stringify(mergedMap));

  // HỢP NHẤT CÂU KINH THÁNH TỰ THÊM
  let remoteCustom = [];
  try {
    remoteCustom = JSON.parse(remoteData.bible_custom_verses || '[]');
  } catch (e) {}
  if (Array.isArray(remoteCustom) && remoteCustom.length > 0) {
    const localCustom = getBibleCustomVerses();
    const customMap = new Map();
    localCustom.forEach(v => customMap.set(v.id, v));
    remoteCustom.forEach(v => {
      const s = sanitizeVerseObject(v);
      customMap.set(s.id, s);
    });
    const mergedCustom = Array.from(customMap.values()).sort(sortVersesAscending);
    localStorage.setItem(SCRIPTURE_STORAGE_KEY, JSON.stringify(mergedCustom));
  }

  // Refresh lại giao diện tức thì
  migrateAndSanitizeBibleStorage();
  updateBibleStatsDashboard();
  renderTowerFloors();
  const book = BIBLE_66_BOOKS.find(b => b.floor === currentSelectedFloor);
  if (book) renderRooms(book.chapters);
  renderVersesInRoom();
  if (typeof renderMasteredModalList === 'function') renderMasteredModalList();
  playSound('success');
  updateSyncStatusUI('synced');
}
`;

// Insert targetP2pCode right before dispatchRealtimeAutoSync
if (!appJs.includes('WEBRTC REALTIME P2P SYNC ENGINE')) {
  appJs = appJs.replace('async function dispatchRealtimeAutoSync() {', targetP2pCode + '\nasync function dispatchRealtimeAutoSync() {');
  console.log('Injected WebRTC P2P Engine into app.js');
}

// In dispatchRealtimeAutoSync: add broadcastP2pUpdate(payload)
const oldDispatchStart = `async function dispatchRealtimeAutoSync() {
  if (isSyncingInProgress) return;
  isSyncingInProgress = true;
  updateSyncStatusUI('syncing');

  try {
    const payload = buildSyncPayload();
    lastSyncTimestampLocal = payload.timestamp;
    localStorage.setItem('bible_last_sync_timestamp', String(lastSyncTimestampLocal));`;

const newDispatchStart = `async function dispatchRealtimeAutoSync() {
  if (isSyncingInProgress) return;
  isSyncingInProgress = true;
  updateSyncStatusUI('syncing');

  try {
    const payload = buildSyncPayload();
    lastSyncTimestampLocal = payload.timestamp;
    localStorage.setItem('bible_last_sync_timestamp', String(lastSyncTimestampLocal));

    // 1. PHÁT SÓNG TRỰC TIẾP QUA WEBRTC P2P TỨC THÌ (CHO GITHUB PAGES VÀ ĐIỆN THOẠI)
    broadcastP2pUpdate(payload);`;

if (appJs.includes(oldDispatchStart) && !appJs.includes('broadcastP2pUpdate(payload)')) {
  appJs = appJs.replace(oldDispatchStart, newDispatchStart);
  console.log('Added broadcastP2pUpdate into dispatchRealtimeAutoSync');
}

// In initRealtimeSyncEngine: start initWebRtcP2pEngine()
const oldInitStart = `function initRealtimeSyncEngine() {`;
const newInitStart = `function initRealtimeSyncEngine() {
  // Khởi động WebRTC P2P Realtime cho GitHub Pages
  try { initWebRtcP2pEngine(); } catch (e) {}`;

if (appJs.includes(oldInitStart) && !appJs.includes('initWebRtcP2pEngine()')) {
  appJs = appJs.replace(oldInitStart, newInitStart);
  console.log('Added initWebRtcP2pEngine call into initRealtimeSyncEngine');
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('=== Finished updating app.js with WebRTC P2P ===');
