/**
 * Admin Dashboard — Portfolio Command Center
 */
(function initAdminDashboard() {
  'use strict';

  const ADMIN_HASH = '797e0d4cc71977aeca601aa187ee91ed118122ec5d26dd75518cd595a89039dc';
  const AUTH_KEY = 'portfolio-admin-auth';
  const AUTH_TTL = 24 * 60 * 60 * 1000;
  const SETTINGS_KEY = 'portfolio-site-settings';
  const EVENTS_KEY = 'portfolio-analytics-events-v1';
  const SESSIONS_KEY = 'portfolio-analytics-sessions-v1';
  const VISITORS_KEY = 'portfolio-analytics-visitors-v1';

  const CFG = window.PORTFOLIO_ANALYTICS_CONFIG || {};

  const $ = id => document.getElementById(id);

  async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function readJson(key, fb) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fb;
    } catch {
      return fb;
    }
  }

  function writeJson(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  function isAuthed() {
    const raw = sessionStorage.getItem(AUTH_KEY);
    if (!raw) return false;
    try {
      const { ts } = JSON.parse(raw);
      return Date.now() - ts < AUTH_TTL;
    } catch {
      return false;
    }
  }

  function setAuthed() {
    sessionStorage.setItem(AUTH_KEY, JSON.stringify({ ts: Date.now() }));
  }

  function formatTime(iso) {
    if (!iso) return '—';
    const d = new Date(iso);
    return d.toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  function formatDuration(ms) {
    if (ms === undefined || ms === null) return 'w trakcie';
    if (ms < 1000) return `${Math.max(0, ms / 1000).toFixed(1)}s`;
    const s = Math.floor(ms / 1000);
    if (s < 60) return `${s}s`;
    const m = Math.floor(s / 60);
    const rs = s % 60;
    return `${m}m ${rs}s`;
  }

  function isoWeekNumber(date) {
    const target = new Date(date.valueOf());
    target.setHours(0, 0, 0, 0);
    target.setDate(target.getDate() + 3 - ((target.getDay() + 6) % 7));
    const firstThursday = new Date(target.getFullYear(), 0, 4);
    const diff = target - firstThursday + ((firstThursday.getDay() + 6) % 7) * 86400000;
    return 1 + Math.round(diff / 604800000);
  }

  async function getCountApi(key) {
    const api = `https://api.countapi.xyz/get/andrii-portfolio-at/${key}`;
    try {
      const res = await fetch(api);
      const data = res.ok ? await res.json() : { value: 0 };
      return Number(data.value || 0);
    } catch {
      return 0;
    }
  }

  async function loadCountApiStats() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const week = String(isoWeekNumber(date)).padStart(2, '0');
    const keys = {
      day: `site-day-${year}-${month}-${day}`,
      week: `site-week-${year}-W${week}`,
      month: `site-month-${year}-${month}`,
      total: 'site-total'
    };
    const [dayCount, weekCount, monthCount, totalCount] = await Promise.all([
      getCountApi(keys.day),
      getCountApi(keys.week),
      getCountApi(keys.month),
      getCountApi(keys.total)
    ]);
    $('statDay').textContent = dayCount;
    $('statWeek').textContent = weekCount;
    $('statMonth').textContent = monthCount;
    $('statTotal').textContent = totalCount;
  }

  async function fetchSupabaseEvents(limit = 500) {
    if (CFG.storageMode !== 'supabase' || !CFG.supabaseUrl) return null;
    try {
      const res = await fetch(
        `${CFG.supabaseUrl}/rest/v1/analytics_events?order=created_at.desc&limit=${limit}`,
        {
          headers: {
            apikey: CFG.supabaseAnonKey,
            Authorization: `Bearer ${CFG.supabaseAnonKey}`
          }
        }
      );
      if (!res.ok) return null;
      const rows = await res.json();
      return rows.map(r => ({
        id: r.id,
        sessionId: r.session_id,
        visitorId: r.visitor_id,
        type: r.event_type,
        page: r.page,
        path: r.path,
        data: r.payload || {},
        geo: r.geo || {},
        isLead: r.is_lead,
        timestamp: r.created_at
      }));
    } catch {
      return null;
    }
  }

  function getLocalEvents() {
    return readJson(EVENTS_KEY, []);
  }

  function getSessions() {
    return readJson(SESSIONS_KEY, {});
  }

  function sessionsFromEvents(events) {
    const sessions = {};
    events.forEach(ev => {
      if (!ev.sessionId) return;
      const session = sessions[ev.sessionId] ||= {
        sessionId: ev.sessionId,
        visitorId: ev.visitorId,
        firstSeen: ev.timestamp,
        lastSeen: ev.timestamp,
        totalTimeMs: 0,
        geo: ev.geo || {}
      };
      if (new Date(ev.timestamp) < new Date(session.firstSeen)) session.firstSeen = ev.timestamp;
      if (new Date(ev.timestamp) > new Date(session.lastSeen)) session.lastSeen = ev.timestamp;
      if (ev.type === 'page_leave') session.totalTimeMs += ev.data?.durationMs || 0;
      if (ev.type === 'copy_contact') session.contactCopied = true;
    });
    return sessions;
  }

  function eventLabel(ev) {
    const geo = ev.geo?.city ? `${ev.geo.city}${ev.geo.country ? ', ' + ev.geo.country : ''}` : 'Gość';

    switch (ev.type) {
      case 'pageview':
        return `<strong>${geo}</strong> wszedł na <em>${ev.page}</em>`;
      case 'copy_contact':
        return `<strong>${geo}</strong> skopiował dane kontaktowe`;
      case 'page_leave':
        return `<strong>${geo}</strong> opuścił <em>${ev.page}</em> po ${formatDuration(ev.data?.durationMs)}`;
      default:
        return '';
    }
  }

  function renderLiveFeed(events) {
    const feed = $('liveFeed');
    if (!feed) return;
    const recent = events.filter(ev => ['pageview', 'page_leave', 'copy_contact'].includes(ev.type)).slice(0, 40);
    if (!recent.length) {
      feed.innerHTML = '<div class="empty-state">Brak zdarzeń — odwiedź portfolio w innej karcie, aby zobaczyć aktywność na żywo.</div>';
      return;
    }
    feed.innerHTML = recent.map(ev => `
      <div class="live-item${ev.type === 'copy_contact' ? ' lead' : ''}">
        <span class="live-time">${formatTime(ev.timestamp)}</span>
        <span class="live-text">${eventLabel(ev)}</span>
      </div>
    `).join('');
  }

  function renderVisitLog(events) {
    const tbody = $('visitLogBody');
    if (!tbody) return;
    const pageviews = events.filter(e => e.type === 'pageview').slice(0, 50);
    if (!pageviews.length) {
      tbody.innerHTML = '<tr><td colspan="5" class="empty-state">Brak wizyt</td></tr>';
      return;
    }
    tbody.innerHTML = pageviews.map(ev => {
      const loc = ev.geo?.city ? `${ev.geo.city}, ${ev.geo.country || ''}` : `Sesja ${ev.sessionId?.slice(0, 8)}`;
      const leave = events.find(item => item.type === 'page_leave' && item.sessionId === ev.sessionId && item.page === ev.page && new Date(item.timestamp) >= new Date(ev.timestamp));
      return `<tr>
        <td>${formatTime(ev.timestamp)}</td>
        <td>${loc}</td>
        <td>${ev.page}</td>
        <td>${formatDuration(leave?.data?.durationMs)}</td>
        <td><code>${ev.sessionId?.slice(0, 8)}</code></td>
      </tr>`;
    }).join('');
  }

  function renderProjects(events) {
    const container = $('projectBars');
    if (!container) return;
    const counts = {};
    events.filter(e => e.type === 'pageview' && e.page?.startsWith('Projekt:')).forEach(e => {
      const name = e.page.replace('Projekt: ', '');
      counts[name] = (counts[name] || 0) + 1;
    });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 10);
    if (!sorted.length) {
      container.innerHTML = '<div class="empty-state">Brak wizyt na projektach</div>';
      return;
    }
    const max = sorted[0][1];
    container.innerHTML = sorted.map(([name, count]) => `
      <div class="project-bar-row">
        <span class="project-bar-label" title="${name}">${name}</span>
        <div class="project-bar-track"><div class="project-bar-fill" style="width:${Math.round(count / max * 100)}%"></div></div>
        <span class="project-bar-count">${count}</span>
      </div>
    `).join('');
  }

  function renderPageDurations(events) {
    const el = $('pageDurations');
    if (!el) return;
    const totals = {};
    events.filter(e => e.type === 'page_leave').forEach(e => {
      totals[e.page] = (totals[e.page] || 0) + (e.data?.durationMs || 0);
    });
    const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    if (!sorted.length) {
      el.innerHTML = '<div class="empty-state">Brak zakończonych wizyt</div>';
      return;
    }
    el.innerHTML = sorted.slice(0, 10).map(([page, ms]) => `<div class="section-eng-row"><span>${page}</span><strong>${formatDuration(ms)}</strong></div>`).join('');
  }

  function renderSessionJourneys(events) {
    const container = $('sessionJourneys');
    if (!container) return;
    const grouped = {};
    events.filter(e => e.type === 'pageview').forEach(view => {
      const leave = events.find(item => item.type === 'page_leave' && item.sessionId === view.sessionId && item.page === view.page && new Date(item.timestamp) >= new Date(view.timestamp));
      (grouped[view.sessionId] ||= []).push({ page: view.page, timestamp: view.timestamp, durationMs: leave?.data?.durationMs });
    });
    const journeys = Object.entries(grouped).slice(0, 20);
    if (!journeys.length) {
      container.innerHTML = '<div class="empty-state">Brak sesji</div>';
      return;
    }
    container.innerHTML = journeys.map(([sessionId, pages]) => `
      <div class="journey-row">
        <div><strong>Sesja ${sessionId.slice(0, 8)}</strong><span>${formatTime(pages[0].timestamp)}</span></div>
        <p>${pages.map(item => `${item.page} <b>${formatDuration(item.durationMs)}</b>`).join(' → ')}</p>
      </div>
    `).join('');
  }

  function renderLeads(sessions) {
    const container = $('leadsList');
    if (!container) return;
    const leads = Object.values(sessions).filter(s => s.contactCopied).sort((a, b) => (b.lastSeen || '').localeCompare(a.lastSeen || ''));
    if (!leads.length) {
      container.innerHTML = '<div class="empty-state">Brak jawnych akcji kontaktowych</div>';
      return;
    }
    container.innerHTML = leads.slice(0, 12).map(s => {
      const loc = s.geo?.city ? `${s.geo.city}, ${s.geo.country}` : `Sesja ${s.sessionId?.slice(0, 8)}`;
      return `<div class="lead-card">
        <strong>Skopiowano dane kontaktowe</strong>
        <p>${loc} · ${formatTime(s.lastSeen)} · ${formatDuration(s.totalTimeMs)}</p>
      </div>`;
    }).join('');
  }

  function renderOverview(events, sessions) {
    const visitors = readJson(VISITORS_KEY, []);
    const pageviews = events.filter(e => e.type === 'pageview').length;
    $('statPageviews').textContent = pageviews;
    $('statUnique').textContent = visitors.length || new Set(events.map(e => e.visitorId)).size;
    $('statSessions').textContent = Object.keys(sessions).length;
    $('statLeads').textContent = events.filter(e => e.type === 'copy_contact').length;
  }

  async function refreshDashboard() {
    let events = await fetchSupabaseEvents();
    if (!events) events = getLocalEvents();
    const sessions = Object.keys(getSessions()).length ? getSessions() : sessionsFromEvents(events);
    events.filter(e => e.type === 'copy_contact').forEach(e => {
      if (sessions[e.sessionId]) sessions[e.sessionId].contactCopied = true;
    });

    renderOverview(events, sessions);
    renderLiveFeed(events);
    renderVisitLog(events);
    renderProjects(events);
    renderPageDurations(events);
    renderSessionJourneys(events);
    renderLeads(sessions);
    await loadCountApiStats();
  }

  function loadSettingsUI() {
    const settings = readJson(SETTINGS_KEY, { mode: 'recruitment', promoEnabled: false, promoText: '', promoLink: '' });
    document.querySelectorAll('[data-mode]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === settings.mode);
    });
    $('promoEnabled').checked = !!settings.promoEnabled;
    $('promoText').value = settings.promoText || '';
    $('promoLink').value = settings.promoLink || '';
  }

  function saveSettings(patch) {
    const current = readJson(SETTINGS_KEY, { mode: 'recruitment', promoEnabled: false, promoText: '', promoLink: '' });
    const next = { ...current, ...patch, updatedAt: new Date().toISOString() };
    writeJson(SETTINGS_KEY, next);

    if (CFG.storageMode === 'supabase' && CFG.supabaseUrl) {
      fetch(`${CFG.supabaseUrl}/rest/v1/portfolio_settings?id=eq.1`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          apikey: CFG.supabaseAnonKey,
          Authorization: `Bearer ${CFG.supabaseAnonKey}`,
          Prefer: 'return=minimal'
        },
        body: JSON.stringify({
          mode: next.mode,
          promo_enabled: next.promoEnabled,
          promo_text: next.promoText,
          promo_link: next.promoLink,
          updated_at: next.updatedAt
        })
      }).catch(() => {});
    }

    $('settingsSaved').textContent = 'Zapisano · zmiany widoczne po odświeżeniu portfolio';
    setTimeout(() => { $('settingsSaved').textContent = ''; }, 3000);
  }

  function bindSettings() {
    document.querySelectorAll('[data-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-mode]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        saveSettings({ mode: btn.dataset.mode });
      });
    });

    $('savePromo')?.addEventListener('click', () => {
      saveSettings({
        promoEnabled: $('promoEnabled').checked,
        promoText: $('promoText').value.trim(),
        promoLink: $('promoLink').value.trim()
      });
    });
  }

  function showDashboard() {
    $('loginView').style.display = 'none';
    $('dashboardView').style.display = 'block';
    document.body.classList.add('admin-body');
    loadSettingsUI();
    bindSettings();
    refreshDashboard();
    setInterval(refreshDashboard, 3000);

    window.addEventListener('storage', e => {
      if ([EVENTS_KEY, SESSIONS_KEY, VISITORS_KEY, SETTINGS_KEY].includes(e.key)) {
        refreshDashboard();
      }
    });
  }

  function showLogin() {
    $('loginView').style.display = 'flex';
    $('dashboardView').style.display = 'none';
  }

  $('authButton')?.addEventListener('click', async () => {
    const password = $('adminPassword').value.trim();
    const msg = $('authMessage');
    if (!password) {
      if (msg) msg.textContent = 'Wpisz hasło.';
      return;
    }
    try {
      if (!crypto?.subtle) {
        if (msg) msg.textContent = 'Logowanie wymaga HTTPS lub localhost — otwórz stronę przez serwer, nie jako plik file://.';
        return;
      }
      const hash = await sha256(password);
      if (hash === ADMIN_HASH) {
        setAuthed();
        if (msg) msg.textContent = '';
        showDashboard();
      } else if (msg) {
        msg.textContent = 'Błędne hasło. Spróbuj ponownie.';
      }
    } catch {
      if (msg) msg.textContent = 'Błąd logowania — odśwież stronę i spróbuj ponownie.';
    }
  });

  $('adminPassword')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') $('authButton').click();
  });

  $('logoutBtn')?.addEventListener('click', () => {
    sessionStorage.removeItem(AUTH_KEY);
    showLogin();
  });

  $('clearDataBtn')?.addEventListener('click', () => {
    if (!confirm('Usunąć lokalne dane analityki? Tej operacji nie można cofnąć.')) return;
    localStorage.removeItem(EVENTS_KEY);
    localStorage.removeItem(SESSIONS_KEY);
    localStorage.removeItem(VISITORS_KEY);
    refreshDashboard();
  });

  const modeBadge = $('storageModeBadge');
  if (modeBadge) {
    modeBadge.textContent = CFG.storageMode === 'supabase' && CFG.supabaseUrl
      ? 'Supabase'
      : 'LocalStorage';
  }

  if (isAuthed()) {
    showDashboard();
  } else {
    showLogin();
  }
})();
