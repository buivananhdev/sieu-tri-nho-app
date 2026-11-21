const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8899;
const PUBLIC_DIR = __dirname;
const SYNC_FILE = path.join(__dirname, 'sync_storage.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

function readSyncStorage() {
  try {
    if (fs.existsSync(SYNC_FILE)) {
      const raw = fs.readFileSync(SYNC_FILE, 'utf8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading sync storage:', err);
  }
  return {
    app: 'supermind',
    timestamp: Date.now(),
    data: {}
  };
}

function writeSyncStorage(data) {
  try {
    fs.writeFileSync(SYNC_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing sync storage:', err);
    return false;
  }
}

function mergeIncomingData(currentData, incomingData) {
  const cur = currentData || {};
  const inc = incomingData || {};

  // 1. Merge Bible Progress
  let curProgress = {};
  let incProgress = {};
  try { curProgress = JSON.parse(cur.bible_progress || '{}'); } catch (e) {}
  try { incProgress = JSON.parse(inc.bible_progress || '{}'); } catch (e) {}
  const mergedProgress = { ...curProgress };
  Object.keys(incProgress).forEach(k => {
    const iItem = incProgress[k];
    const cItem = mergedProgress[k];
    if (!cItem) {
      mergedProgress[k] = iItem;
    } else {
      mergedProgress[k] = {
        status: (iItem.mastered || cItem.mastered) ? 'mastered' : (iItem.status || cItem.status),
        mastered: !!(iItem.mastered || cItem.mastered),
        reviewCount: Math.max(iItem.reviewCount || 0, cItem.reviewCount || 0),
        lastReviewed: Math.max(iItem.lastReviewed || 0, cItem.lastReviewed || 0)
      };
    }
  });

  // 2. Merge Custom Verses (Union by ID and Coordinate)
  let curCustom = [];
  let incCustom = [];
  try { curCustom = JSON.parse(cur.bible_custom_verses || '[]'); } catch (e) {}
  try { incCustom = JSON.parse(inc.bible_custom_verses || '[]'); } catch (e) {}
  const customMap = new Map();
  if (Array.isArray(curCustom)) {
    curCustom.forEach(v => customMap.set(v.id || `${v.bookFloor}_${v.chapter}_${v.verse}`, v));
  }
  if (Array.isArray(incCustom)) {
    incCustom.forEach(v => customMap.set(v.id || `${v.bookFloor}_${v.chapter}_${v.verse}`, v));
  }
  const mergedCustom = Array.from(customMap.values());

  return {
    ...cur,
    ...inc,
    timestamp: Date.now(),
    bible_progress: JSON.stringify(mergedProgress),
    bible_custom_verses: JSON.stringify(mergedCustom),
    study_streak: String(Math.max(parseInt(cur.study_streak || '1', 10), parseInt(inc.study_streak || '1', 10)))
  };
}

const server = http.createServer((req, res) => {
  // Common CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let reqPath = decodeURI(req.url.split('?')[0]);

  // REST API: /api/sync
  if (reqPath === '/api/sync') {
    if (req.method === 'GET') {
      const storage = readSyncStorage();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8', 'Cache-Control': 'no-cache' });
      res.end(JSON.stringify(storage));
      return;
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk;
        if (body.length > 5 * 1024 * 1024) { // 5MB limit
          res.writeHead(413, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Payload too large' }));
          req.destroy();
        }
      });

      req.on('end', () => {
        try {
          const incoming = JSON.parse(body);
          const current = readSyncStorage();

          const incomingData = incoming.data || incoming;

          // Merge incoming payload with existing storage
          const mergedData = mergeIncomingData(current.data, incomingData);
          const merged = {
            app: 'supermind',
            roomKey: incoming.roomKey || current.roomKey || 'buivananhdev',
            timestamp: mergedData.timestamp,
            data: mergedData
          };

          writeSyncStorage(merged);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
          res.end(JSON.stringify({ success: true, timestamp: merged.timestamp, updated: true }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=UTF-8' });
          res.end(JSON.stringify({ error: 'Invalid JSON body: ' + err.message }));
        }
      });
      return;
    }
  }

  // Static File Serving
  if (reqPath === '/') reqPath = '/index.html';
  
  const filePath = path.join(PUBLIC_DIR, reqPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('500 Server Error: ' + err.code);
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(content);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`SuperMind Server running at http://localhost:${PORT}/ and http://0.0.0.0:${PORT}/ (API /api/sync ready)`);
});
