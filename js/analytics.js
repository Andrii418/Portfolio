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
  const GEO_KEY = 'portfolio-analytics-geo-v1';

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
  const sessionStart = Date.now();
  let geo = readJson(GEO_KEY, null);
  let maxScroll = 0;
  const sectionTimes = {};
  const sectionEnter = {};
  let currentSection = null;

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
      writeJson(GEO_KEY, geo);
    } catch {
      geo = { city: 'Lokalnie', country: '—', region: '' };
    }
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
      leadReasons: [],
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

  function markLead(reason) {
    const sessions = readJson(STORAGE_SESSIONS, {});
    const s = sessions[sessionId];
    if (!s) return;
    if (!s.leadReasons.includes(reason)) s.leadReasons.push(reason);
    s.isLead = true;
    writeJson(STORAGE_SESSIONS, sessions);
    pushEvent('lead', { reason, isLead: true });
  }

  function trackScrollDepth() {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const depth = height > 0 ? Math.round((scrollTop / height) * 100) : 0;
    if (depth > maxScroll) {
      const prev = maxScroll;
      maxScroll = depth;
      upsertSession({ maxScrollDepth: maxScroll });
      if (depth >= 25 && prev < 25) pushEvent('scroll', { depth: 25 });
      else if (depth >= 50 && prev < 50) pushEvent('scroll', { depth: 50 });
      else if (depth >= 75 && prev < 75) pushEvent('scroll', { depth: 75 });
      else if (depth >= 90 && prev < 90) pushEvent('scroll', { depth: 90 });
    }
  }

  function trackSections() {
    document.querySelectorAll('[data-section]').forEach(el => {
      const name = el.dataset.section;
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            sectionEnter[name] = Date.now();
            currentSection = name;
            pushEvent('section_enter', { section: name });
          } else if (sectionEnter[name]) {
            const dur = Date.now() - sectionEnter[name];
            sectionTimes[name] = (sectionTimes[name] || 0) + dur;
            pushEvent('section_leave', { section: name, durationMs: dur });
            if (currentSection === name) currentSection = null;
            delete sectionEnter[name];
          }
        });
      }, { threshold: 0.35 });
      obs.observe(el);
    });
  }

  function trackProjectClicks() {
    document.addEventListener('click', e => {
      const card = e.target.closest('.project-card, a[href*="/projects/"]');
      if (!card) return;
      const titleEl = card.querySelector('.project-card-title, h1, h2');
      const href = card.getAttribute('href') || card.closest('a')?.getAttribute('href') || '';
      const name = titleEl?.textContent?.trim() || href.split('/').filter(Boolean).pop() || 'Projekt';
      pushEvent('project_click', { project: name, href });
    }, true);
  }

  function trackCopy() {
    const contacts = (CFG.trackedContacts || []).map(c => c.toLowerCase());
    document.addEventListener('copy', () => {
      const text = (window.getSelection()?.toString() || '').toLowerCase();
      const matched = contacts.some(c => text.includes(c));
      if (matched) {
        markLead('Skopiowano kontakt');
        pushEvent('copy_contact', { text: text.slice(0, 80), isLead: true });
      }
    });
  }

  function trackNavClicks() {
    document.addEventListener('click', e => {
      const link = e.target.closest('a.nav-link, a.mob-link, .nav-cta, .btn');
      if (!link) return;
      const label = link.textContent?.trim().slice(0, 60) || link.getAttribute('href');
      pushEvent('nav_click', { label, href: link.getAttribute('href') });
    });
  }

  function heartbeat() {
    const elapsed = Date.now() - sessionStart;
    upsertSession({ totalTimeMs: elapsed });
    pushEvent('heartbeat', {
      elapsedMs: elapsed,
      section: currentSection,
      scrollDepth: maxScroll
    });

    const threshold = CFG.leadTimeThresholdMs || 180000;
    if (elapsed >= threshold) {
      markLead(`Czas na stronie > ${Math.round(threshold / 60000)} min`);
    }
  }

  function trackLeave() {
    const elapsed = Date.now() - sessionStart;
    Object.keys(sectionEnter).forEach(name => {
      sectionTimes[name] = (sectionTimes[name] || 0) + (Date.now() - sectionEnter[name]);
    });
    upsertSession({
      totalTimeMs: elapsed,
      maxScrollDepth: maxScroll,
      sectionTimes
    });
    pushEvent('leave', { elapsedMs: elapsed, scrollDepth: maxScroll, sectionTimes });
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

    trackSections();
    trackProjectClicks();
    trackCopy();
    trackNavClicks();

    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    setInterval(heartbeat, CFG.heartbeatIntervalMs || 15000);
    window.addEventListener('beforeunload', trackLeave);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') trackLeave();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.PortfolioAnalytics = { pushEvent, markLead, getSessionId, pageName };
})();
