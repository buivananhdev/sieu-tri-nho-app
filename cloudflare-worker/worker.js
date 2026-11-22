export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    // GET /sync?room=buivananhdev
    if (request.method === 'GET') {
      const key = url.searchParams.get('room') || 'buivananhdev';
      const stored = await env.SUPERMIND_KV.get(key);
      return new Response(stored || '{"app":"supermind","timestamp":0,"data":{}}', {
        headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'no-cache, no-store, must-revalidate' }
      });
    }

    // POST or PUT /sync
    if (request.method === 'POST' || request.method === 'PUT') {
      try {
        const body = await request.json();
        const key = body.room || url.searchParams.get('room') || 'buivananhdev';

        // Lấy dữ liệu hiện tại trong KV để hợp nhất an toàn
        let current = {};
        try {
          const raw = await env.SUPERMIND_KV.get(key);
          if (raw) current = JSON.parse(raw);
        } catch (e) {}

        const curData = current.data || {};
        const incData = body.data || body;

        // 1. Hợp nhất tiến độ câu đã thuộc (safe parse object / string)
        let curMap = {};
        let incMap = {};
        try {
          if (typeof curData.bible_progress === 'string') {
            curMap = JSON.parse(curData.bible_progress || '{}');
          } else if (typeof curData.bible_progress === 'object' && curData.bible_progress !== null) {
            curMap = curData.bible_progress;
          }
        } catch (e) {}

        try {
          if (typeof incData.bible_progress === 'string') {
            incMap = JSON.parse(incData.bible_progress || '{}');
          } else if (typeof incData.bible_progress === 'object' && incData.bible_progress !== null) {
            incMap = incData.bible_progress;
          }
        } catch (e) {}

        const mergedMap = { ...curMap };
        Object.keys(incMap).forEach(k => {
          const iItem = incMap[k];
          if (!iItem) return;
          const cItem = mergedMap[k];
          if (!cItem) {
            mergedMap[k] = iItem;
          } else {
            mergedMap[k] = {
              status: (iItem.mastered || cItem.mastered) ? 'mastered' : (iItem.status || cItem.status || 'learning'),
              mastered: !!(iItem.mastered || cItem.mastered),
              reviewCount: Math.max(iItem.reviewCount || 0, cItem.reviewCount || 0),
              lastReviewed: Math.max(iItem.lastReviewed || 0, cItem.lastReviewed || 0)
            };
          }
        });

        // 2. Hợp nhất câu tự thêm (safe parse array / string)
        let curCustom = [];
        let incCustom = [];
        try {
          if (typeof curData.bible_custom_verses === 'string') {
            curCustom = JSON.parse(curData.bible_custom_verses || '[]');
          } else if (Array.isArray(curData.bible_custom_verses)) {
            curCustom = curData.bible_custom_verses;
          }
        } catch (e) {}

        try {
          if (typeof incData.bible_custom_verses === 'string') {
            incCustom = JSON.parse(incData.bible_custom_verses || '[]');
          } else if (Array.isArray(incData.bible_custom_verses)) {
            incCustom = incData.bible_custom_verses;
          }
        } catch (e) {}

        const customMap = new Map();
        if (Array.isArray(curCustom)) {
          curCustom.forEach(v => {
            if (v) customMap.set(v.id || `${v.bookFloor}_${v.chapter}_${v.verse}`, v);
          });
        }
        if (Array.isArray(incCustom)) {
          incCustom.forEach(v => {
            if (v) customMap.set(v.id || `${v.bookFloor}_${v.chapter}_${v.verse}`, v);
          });
        }
        const mergedCustom = Array.from(customMap.values());

        // 3. Hợp nhất tiến độ Đại Tư Duy (Thinking Progress)
        let curThinking = {};
        let incThinking = {};
        try {
          if (typeof curData.thinking_progress === 'string') {
            curThinking = JSON.parse(curData.thinking_progress || '{}');
          } else if (typeof curData.thinking_progress === 'object' && curData.thinking_progress !== null) {
            curThinking = curData.thinking_progress;
          }
        } catch (e) {}

        try {
          if (typeof incData.thinking_progress === 'string') {
            incThinking = JSON.parse(incData.thinking_progress || '{}');
          } else if (typeof incData.thinking_progress === 'object' && incData.thinking_progress !== null) {
            incThinking = incData.thinking_progress;
          }
        } catch (e) {}

        const mergedMasteredModels = { ...(curThinking.masteredModels || {}), ...(incThinking.masteredModels || {}) };
        const mergedArenaAnswers = { ...(curThinking.arenaAnswers || {}), ...(incThinking.arenaAnswers || {}) };
        const mergedThinking = {
          masteredModels: mergedMasteredModels,
          arenaAnswers: mergedArenaAnswers,
          score: Math.max(curThinking.score || 0, incThinking.score || 0),
          lastUpdated: Date.now()
        };

        const now = Date.now();
        const mergedPayload = {
          app: 'supermind',
          room: key,
          timestamp: now,
          data: {
            bible_progress: JSON.stringify(mergedMap),
            bible_custom_verses: JSON.stringify(mergedCustom),
            study_streak: String(Math.max(parseInt(curData.study_streak || '1', 10), parseInt(incData.study_streak || '1', 10))),
            thinking_progress: JSON.stringify(mergedThinking),
            timestamp: now
          }
        };

        // Lưu vào Cloudflare KV vĩnh viễn
        await env.SUPERMIND_KV.put(key, JSON.stringify(mergedPayload));

        return new Response(JSON.stringify({
          success: true,
          timestamp: mergedPayload.timestamp,
          updated: true,
          masteredCount: Object.values(mergedMap).filter(v => v && v.mastered).length,
          customCount: mergedCustom.length,
          thinkingModelsMastered: Object.values(mergedMasteredModels).filter(Boolean).length
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response('Not found', { status: 404, headers: corsHeaders });
  }
};
