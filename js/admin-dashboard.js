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
    if (!ms || ms < 1000) return '<1s';
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

  function eventLabel(ev) {
    const geo = ev.geo?.city ? `${ev.geo.city}${ev.geo.country ? ', ' + ev.geo.country : ''}` : 'Gość';
    const sid = ev.sessionId?.slice(0, 8) || '???';

    switch (ev.type) {
      case 'pageview':
        return `<strong>${geo}</strong> wszedł na <em>${ev.page}</em>`;
      case 'project_click':
        return `<strong>${geo}</strong> kliknął projekt <em>${ev.data?.project || '?'}</em>`;
      case 'section_enter':
        return `<strong>${geo}</strong> czyta sekcję <em>${ev.data?.section}</em>`;
      case 'section_leave': {
        const dur = formatDuration(ev.data?.durationMs);
        return `<strong>${geo}</strong> opuścił sekcję <em>${ev.data?.section}</em> (${dur})`;
      }
      case 'scroll':
        return `<strong>${geo}</strong> przewinął ${ev.data?.depth}% na <em>${ev.page}</em>`;
      case 'copy_contact':
        return `<strong>${geo}</strong> skopiował dane kontaktowe ⭐`;
      case 'lead':
        return `<strong>${geo}</strong> — potencjalny lead: ${ev.data?.reason}`;
      case 'heartbeat': {
        const elapsed = formatDuration(ev.data?.elapsedMs);
        const sec = ev.data?.section ? ` · sekcja: ${ev.data.section}` : '';
        return `<strong>${geo}</strong> aktywny ${elapsed}${sec}`;
      }
      case 'nav_click':
        return `<strong>${geo}</strong> kliknął „${ev.data?.label}”`;
      case 'leave':
        return `<strong>${geo}</strong> opuścił stronę (${formatDuration(ev.data?.elapsedMs)}, scroll ${ev.data?.scrollDepth || 0}%)`;
      default:
        return `<strong>${geo}</strong> · ${ev.type} · ${ev.page}`;
    }
  }

  function renderLiveFeed(events) {
    const feed = $('liveFeed');
    if (!feed) return;
    const recent = events.slice(0, 40);
    if (!recent.length) {
      feed.innerHTML = '<div class="empty-state">Brak zdarzeń — odwiedź portfolio w innej karcie, aby zobaczyć aktywność na żywo.</div>';
      return;
    }
    feed.innerHTML = recent.map(ev => `
      <div class="live-item${ev.isLead || ev.type === 'copy_contact' || ev.type === 'lead' ? ' lead' : ''}">
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
      tbody.innerHTML = '<tr><td colspan="4" class="empty-state">Brak wizyt</td></tr>';
      return;
    }
    tbody.innerHTML = pageviews.map(ev => {
      const loc = ev.geo?.city ? `${ev.geo.city}, ${ev.geo.country || ''}` : `Sesja ${ev.sessionId?.slice(0, 8)}`;
      return `<tr>
        <td>${formatTime(ev.timestamp)}</td>
        <td>${loc}</td>
        <td>${ev.page}</td>
        <td><code>${ev.sessionId?.slice(0, 8)}</code></td>
      </tr>`;
    }).join('');
  }

  function renderProjects(events) {
    const container = $('projectBars');
    if (!container) return;
    const counts = {};
    events.filter(e => e.type === 'project_click').forEach(e => {
      const name = e.data?.project || 'Unknown';
      counts[name] = (counts[name] || 0) + 1;
    });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 10);
    if (!sorted.length) {
      container.innerHTML = '<div class="empty-state">Brak kliknięć w projekty</div>';
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

  function renderSectionEngagement(events, sessions) {
    const container = $('sectionEngagement');
    if (!container) return;
    const totals = {};
    events.filter(e => e.type === 'section_leave').forEach(e => {
      const sec = e.data?.section;
      if (!sec) return;
      totals[sec] = (totals[sec] || 0) + (e.data.durationMs || 0);
    });
    Object.values(sessions).forEach(s => {
      if (s.sectionTimes) {
        Object.entries(s.sectionTimes).forEach(([sec, ms]) => {
          totals[sec] = (totals[sec] || 0) + ms;
        });
      }
    });
    const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    if (!sorted.length) {
      container.innerHTML = '<div class="empty-state">Brak danych o sekcjach — dodaj data-section na stronach</div>';
      return;
    }
    const sessionCount = Object.keys(sessions).length || 1;
    container.innerHTML = sorted.map(([sec, ms]) => {
      const avg = Math.round(ms / sessionCount);
      return `<div class="section-eng-row">
        <span>${sec}</span>
        <span>łącznie ${formatDuration(ms)} · śr. ${formatDuration(avg)}</span>
      </div>`;
    }).join('');
  }

  function renderScrollStats(sessions) {
    const el = $('scrollStats');
    if (!el) return;
    const depths = Object.values(sessions).map(s => s.maxScrollDepth || 0);
    if (!depths.length) {
      el.innerHTML = '<div class="empty-state">Brak danych</div>';
      return;
    }
    const avg = Math.round(depths.reduce((a, b) => a + b, 0) / depths.length);
    const over75 = depths.filter(d => d >= 75).length;
    el.innerHTML = `
      <div class="stat-value">${avg}%</div>
      <div class="stat-sub">Średnia głębokość przewijania · ${over75} sesji ≥75%</div>
    `;
  }

  function renderTimeStats(sessions) {
    const el = $('timeStats');
    if (!el) return;
    const times = Object.values(sessions).map(s => s.totalTimeMs || 0).filter(t => t > 0);
    if (!times.length) {
      el.innerHTML = '<div class="stat-value">—</div><div class="stat-sub">Brak danych czasu</div>';
      return;
    }
    const total = times.reduce((a, b) => a + b, 0);
    const avg = Math.round(total / times.length);
    el.innerHTML = `
      <div class="stat-value">${formatDuration(avg)}</div>
      <div class="stat-sub">Średni czas sesji · łącznie ${formatDuration(total)}</div>
    `;
  }

  function renderLeads(sessions) {
    const container = $('leadsList');
    if (!container) return;
    const leads = Object.values(sessions).filter(s => s.isLead).sort((a, b) => (b.lastSeen || '').localeCompare(a.lastSeen || ''));
    if (!leads.length) {
      container.innerHTML = '<div class="empty-state">Brak leadów — pojawią się po skopiowaniu kontaktu lub >3 min na stronie</div>';
      return;
    }
    container.innerHTML = leads.slice(0, 12).map(s => {
      const loc = s.geo?.city ? `${s.geo.city}, ${s.geo.country}` : `Sesja ${s.sessionId?.slice(0, 8)}`;
      return `<div class="lead-card">
        <strong>⭐ Potencjalny Rekruter / Klient</strong>
        <p>${loc} · ${formatTime(s.lastSeen)} · ${formatDuration(s.totalTimeMs)} · ${(s.leadReasons || []).join(', ')}</p>
      </div>`;
    }).join('');
  }

  function renderOverview(events, sessions) {
    const visitors = readJson(VISITORS_KEY, []);
    const pageviews = events.filter(e => e.type === 'pageview').length;
    $('statPageviews').textContent = pageviews;
    $('statUnique').textContent = visitors.length || new Set(events.map(e => e.visitorId)).size;
    $('statSessions').textContent = Object.keys(sessions).length;
    $('statLeads').textContent = Object.values(sessions).filter(s => s.isLead).length;
  }

  async function refreshDashboard() {
    let events = await fetchSupabaseEvents();
    if (!events) events = getLocalEvents();
    const sessions = getSessions();

    renderOverview(events, sessions);
    renderLiveFeed(events);
    renderVisitLog(events);
    renderProjects(events);
    renderSectionEngagement(events, sessions);
    renderScrollStats(sessions);
    renderTimeStats(sessions);
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
