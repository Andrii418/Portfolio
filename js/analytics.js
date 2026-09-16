/**
 * Portfolio Analytics — lekki tracker zdarzeń.
 * Wymaga: analytics-config.js załadowanego wcześniej.
 */
(function initPortfolioAnalytics() {
  'use strict';

  const path = window.location.pathname;
  if (path.endsWith('/admin.html') || path.endsWith('admin.html')) return;

  const CFG = window.PORTFOLIO_ANALYTICS_CONFIG || {};
  const STORAGE_EVENTS = 'portfolio-analytics-events-v1';
  const STORAGE_SESSIONS = 'portfolio-analytics-sessions-v1';
  const STORAGE_VISITORS = 'portfolio-analytics-visitors-v1';
  const SESSION_KEY = 'portfolio-analytics-session-id';
  const VISITOR_KEY = 'portfolio-analytics-visitor-id';
  const GEO_KEY = 'portfolio-analytics-geo-session-v2';

  function uuid() {
    return crypto.randomUUID?.() ||
      'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
  }

  function getSessionId() {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = uuid();
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  }

  function getVisitorId() {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = uuid();
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  }

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function pageName() {
    const p = window.location.pathname;
    if (p.includes('/contact/')) return 'Kontakt';
    const projectMatch = p.match(/\/projects\/([^/]+)\//);
    if (projectMatch) return `Projekt: ${projectMatch[1]}`;
    if (p.includes('/projects')) return 'Projekty';
    return 'Home';
  }

  const sessionId = getSessionId();
  const visitorId = getVisitorId();
  let activeMs = 0;
  let activeStartedAt = document.visibilityState === 'visible' ? Date.now() : null;
  let pageClosed = false;
  let persistedActiveMs = 0;
  let geo = (() => {
    try {
      const raw = sessionStorage.getItem(GEO_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })();

  async function fetchGeo() {
    if (geo) return geo;
    try {
      const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(4000) });
      if (!res.ok) throw new Error('geo fail');
      const data = await res.json();
      geo = {
        city: data.city || 'Nieznane',
        country: data.country_name || data.country || '—',
        region: data.region || ''
      };
    } catch {
      try {
        const res = await fetch('https://ipwho.is/', { signal: AbortSignal.timeout(4000) });
        const data = res.ok ? await res.json() : null;
        if (!data?.success) throw new Error('fallback geo fail');
        geo = {
          city: data.city || 'Nieznane',
          country: data.country || '—',
          region: data.region || ''
        };
      } catch {
        geo = { city: 'Nieznane', country: '—', region: '' };
      }
    }
    sessionStorage.setItem(GEO_KEY, JSON.stringify(geo));
    return geo;
  }

  function upsertSession(patch) {
    const sessions = readJson(STORAGE_SESSIONS, {});
    const existing = sessions[sessionId] || {
      sessionId,
      visitorId,
      firstSeen: new Date().toISOString(),
      pages: [],
      totalTimeMs: 0,
      maxScrollDepth: 0,
      isLead: false,
      geo: geo || {},
      events: 0
    };
    Object.assign(existing, patch);
    existing.lastSeen = new Date().toISOString();
    existing.geo = geo || existing.geo;
    sessions[sessionId] = existing;
    writeJson(STORAGE_SESSIONS, sessions);
    return existing;
  }

  function registerVisitor() {
    const visitors = readJson(STORAGE_VISITORS, []);
    if (!visitors.includes(visitorId)) {
      visitors.push(visitorId);
      writeJson(STORAGE_VISITORS, visitors);
    }
  }

  async function pushEvent(type, data = {}) {
    await fetchGeo();
    const event = {
      id: uuid(),
      sessionId,
      visitorId,
      type,
      page: pageName(),
      path: window.location.pathname,
      data,
      geo: geo || {},
      isLead: !!data.isLead,
      timestamp: new Date().toISOString()
    };

    if (CFG.storageMode === 'supabase' && CFG.supabaseUrl && CFG.supabaseAnonKey) {
      fetch(`${CFG.supabaseUrl}/rest/v1/analytics_events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: CFG.supabaseAnonKey,
          Authorization: `Bearer ${CFG.supabaseAnonKey}`,
          Prefer: 'return=minimal'
        },
        body: JSON.stringify({
          session_id: sessionId,
          visitor_id: visitorId,
          event_type: type,
          page: event.page,
          path: event.path,
          payload: data,
          geo: event.geo,
          is_lead: event.isLead
        }),
        keepalive: true
      }).catch(() => {});
    }

    const events = readJson(STORAGE_EVENTS, []);
    events.unshift(event);
    const limit = CFG.localEventLimit || 2000;
    if (events.length > limit) events.length = limit;
    writeJson(STORAGE_EVENTS, events);

    const sess = upsertSession({ events: (readJson(STORAGE_SESSIONS, {})[sessionId]?.events || 0) + 1 });
    if (type === 'pageview' && !sess.pages.includes(event.page)) {
      sess.pages.push(event.page);
      upsertSession({ pages: sess.pages });
    }

    window.dispatchEvent(new CustomEvent('portfolio-analytics:event', { detail: event }));
    return event;
  }

  function currentActiveMs() {
    return activeMs + (activeStartedAt ? Date.now() - activeStartedAt : 0);
  }

  function updateActiveTime() {
    const elapsed = currentActiveMs();
    const delta = Math.max(0, elapsed - persistedActiveMs);
    persistedActiveMs = elapsed;
    activeMs = elapsed;
    if (activeStartedAt) activeStartedAt = Date.now();
    if (delta) upsertSession({ totalTimeMs: getSessionTotalTime() + delta });
    return elapsed;
  }

  function getSessionTotalTime() {
    return readJson(STORAGE_SESSIONS, {})[sessionId]?.totalTimeMs || 0;
  }

  function trackVisibility() {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        updateActiveTime();
        activeStartedAt = null;
      } else if (!pageClosed) {
        activeStartedAt = Date.now();
      }
    });
  }

  function trackCopy() {
    const contacts = (CFG.trackedContacts || []).map(c => c.toLowerCase());
    document.addEventListener('copy', () => {
      const text = (window.getSelection()?.toString() || '').toLowerCase();
      if (contacts.some(c => text.includes(c))) pushEvent('copy_contact', { text: text.slice(0, 80) });
    });
  }

  function trackLeave() {
    if (pageClosed) return;
    pageClosed = true;
    const durationMs = updateActiveTime();
    pushEvent('page_leave', { durationMs });
  }

  /* countapi — zachowanie wstecznej kompatybilności */
  function hitCountApi() {
    const namespace = 'andrii-portfolio-at';
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    function isoWeekNumber(d) {
      const dc = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
      const dayNum = (dc.getUTCDay() + 6) % 7;
      dc.setUTCDate(dc.getUTCDate() - dayNum + 3);
      const firstThursday = new Date(Date.UTC(dc.getUTCFullYear(), 0, 4));
      const diff = dc - firstThursday + ((firstThursday.getUTCDay() + 6) % 7) * 86400000;
      return 1 + Math.round(diff / 604800000);
    }
    const week = String(isoWeekNumber(date)).padStart(2, '0');
    ['site-total', `site-day-${year}-${month}-${day}`, `site-week-${year}-W${week}`, `site-month-${year}-${month}`]
      .forEach(key => fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`).catch(() => {}));
  }

  async function init() {
    registerVisitor();
    await fetchGeo();
    upsertSession({});
    hitCountApi();
    await pushEvent('pageview', { referrer: document.referrer || 'direct' });

    trackCopy();
    trackVisibility();
    setInterval(() => {
      if (document.visibilityState === 'visible') updateActiveTime();
    }, CFG.activeTimeIntervalMs || 5000);
    window.addEventListener('pagehide', trackLeave);
    window.addEventListener('beforeunload', trackLeave);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.PortfolioAnalytics = { pushEvent, getSessionId, pageName };
})();
