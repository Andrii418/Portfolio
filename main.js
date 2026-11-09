/* Shared interactions. i18n.js is loaded before this file on each public page. */

(function initNavigation() {
  const navbar = document.getElementById('navbar');
  const nav = navbar?.querySelector('.nav-inner');
  const drawer = document.getElementById('drawer');
  const menu = document.getElementById('ham');
  if (!nav || !drawer || !menu) return;

  const root = document.documentElement;
  const copy = {
    pl: { nav: 'Nawigacja główna', theme: 'Tryb ciemny', lang: 'Język strony', menu: 'Menu' },
    en: { nav: 'Main navigation', theme: 'Dark mode', lang: 'Site language', menu: 'Menu' },
    ua: { nav: 'Головна навігація', theme: 'Темна тема', lang: 'Мова сайту', menu: 'Меню' },
  };

  const theme = document.createElement('button');
  theme.type = 'button';
  theme.className = 'nav-icon-btn';
  theme.id = 'themeBtn';
  theme.innerHTML = '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20 15a8.5 8.5 0 0 1-11-11A8.5 8.5 0 1 0 20 15Z"/></svg><svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/></svg>';
  nav.insertBefore(theme, menu);

  function setTheme(dark) {
    root.classList.toggle('dark', dark);
    root.classList.toggle('light', !dark);
    theme.setAttribute('aria-pressed', String(dark));
    const color = document.querySelector('meta[name="theme-color"]');
    if (color) color.content = dark ? '#202124' : '#f8f6f1';
  }

  try { setTheme(localStorage.getItem('theme') === 'dark'); } catch { setTheme(false); }
  theme.addEventListener('click', () => {
    const dark = !root.classList.contains('dark');
    setTheme(dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
  });

  const links = Array.from(nav.querySelectorAll('.nav-link'));
  const mobileLinks = Array.from(drawer.querySelectorAll('.mob-link'));
  const normalize = path => path.replace(/\/index\.html$/i, '/').replace(/\/$/, '');
  const current = normalize(location.pathname);
  links.forEach((link, i) => {
    const mobile = mobileLinks[i];
    if (!link.classList.contains('active')) return;
    const match = normalize(new URL(link.href).pathname) === current;
    link.setAttribute('aria-current', match ? 'page' : 'location');
    mobile?.setAttribute('aria-current', match ? 'page' : 'location');
  });

  function setDrawer(open, restoreFocus = false) {
    drawer.classList.toggle('open', open);
    drawer.inert = !open;
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
    if (restoreFocus) menu.focus();
  }

  menu.setAttribute('aria-controls', drawer.id);
  setDrawer(false);
  menu.addEventListener('click', () => setDrawer(!drawer.classList.contains('open')));
  mobileLinks.forEach(link => link.addEventListener('click', () => setDrawer(false, link.hasAttribute('download'))));
  navbar.addEventListener('keydown', event => {
    if (event.key === 'Escape' && drawer.classList.contains('open')) setDrawer(false, true);
  });
  document.addEventListener('pointerdown', event => {
    if (!navbar.contains(event.target) && drawer.classList.contains('open')) setDrawer(false);
  });
  matchMedia('(max-width: 960px)').addEventListener('change', () => setDrawer(false));

  const i18n = window.I18N;
  const langs = i18n?.supportedLangs || [];
  const groups = [nav, drawer].map((container, i) => {
    const group = document.createElement('div');
    group.className = 'lang-switch';
    group.setAttribute('role', 'group');
    langs.forEach(code => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'lang-switch-btn';
      button.dataset.lang = code;
      button.textContent = code.toUpperCase();
      button.addEventListener('click', () => {
        i18n.apply(code);
        if (i === 1) setDrawer(false, true);
      });
      group.appendChild(button);
    });
    container.insertBefore(group, i === 0 ? menu : container.firstChild);
    return group;
  });

  function updateLanguage(lang) {
    const labels = copy[lang] || copy.pl;
    navbar.setAttribute('aria-label', labels.nav);
    theme.setAttribute('aria-label', labels.theme);
    menu.setAttribute('aria-label', labels.menu);
    groups.forEach(group => {
      group.setAttribute('aria-label', labels.lang);
      group.querySelectorAll('button').forEach(button => {
        const selected = button.dataset.lang === lang;
        button.classList.toggle('active', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
    });
  }

  navbar.classList.add('nav-ready');
  document.addEventListener('i18n:changed', event => updateLanguage(event.detail.lang));
  let lang = 'pl';
  try { lang = i18n?.getLang() || lang; } catch {}
  if (lang !== 'pl') i18n.apply(lang);
  else updateLanguage(lang);
})();

(function initAnalyticsAndSettings() {
  const path = window.location.pathname;
  if (path.endsWith('/admin.html') || path.endsWith('admin.html')) return;

  function scriptBase() {
    const scripts = document.querySelectorAll('script[src*="main.js"]');
    const src = scripts[scripts.length - 1]?.getAttribute('src') || 'main.js';
    return src.includes('/') ? src.replace(/[^/]+$/, '') : '';
  }

  const base = scriptBase();
  const SETTINGS_KEY = 'portfolio-site-settings';

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src*="${src.split('/').pop()}"]`)) {
        resolve();
        return;
      }
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function readSettings() {
    try {
      return JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    } catch {
      return {};
    }
  }

  function applySettings(settings) {
    const mode = settings.mode || 'recruitment';

    const badge = document.querySelector('.hero-badge');
    if (badge) {
      if (!badge.dataset.originalHtml) badge.dataset.originalHtml = badge.innerHTML;
      if (mode === 'freelance') {
        badge.innerHTML = '<span class="badge-dot"></span> Dostępny do współpracy freelance &nbsp;·&nbsp; Remote / Hybrid';
      } else {
        badge.innerHTML = badge.dataset.originalHtml;
      }
    }

    const heroDesc = document.querySelector('.hero-desc');
    if (heroDesc && mode === 'freelance') {
      heroDesc.dataset.originalText = heroDesc.dataset.originalText || heroDesc.textContent;
      heroDesc.textContent = 'Tworzę nowoczesne strony i aplikacje webowe dla firm i startupów. Od szybkiego MVP po pełne wdrożenie — z naciskiem na jakość kodu i UX.';
    } else if (heroDesc?.dataset.originalText) {
      heroDesc.textContent = heroDesc.dataset.originalText;
    }

    let banner = document.getElementById('admin-promo-banner');
    if (settings.promoEnabled && settings.promoText) {
      if (!banner) {
        banner = document.createElement('div');
        banner.id = 'admin-promo-banner';
        document.body.appendChild(banner);
      }
      const link = settings.promoLink ? `<a href="${settings.promoLink}">→</a>` : '';
      banner.innerHTML = settings.promoText + link;
      banner.style.display = 'block';
    } else if (banner) {
      banner.style.display = 'none';
    }
  }

  async function fetchRemoteSettings() {
    const CFG = window.PORTFOLIO_ANALYTICS_CONFIG || {};
    if (CFG.storageMode !== 'supabase' || !CFG.supabaseUrl) return null;
    try {
      const res = await fetch(`${CFG.supabaseUrl}/rest/v1/portfolio_settings?id=eq.1`, {
        headers: { apikey: CFG.supabaseAnonKey, Authorization: `Bearer ${CFG.supabaseAnonKey}` }
      });
      if (!res.ok) return null;
      const rows = await res.json();
      const row = rows[0];
      if (!row) return null;
      return {
        mode: row.mode,
        promoEnabled: row.promo_enabled,
        promoText: row.promo_text,
        promoLink: row.promo_link,
        updatedAt: row.updated_at
      };
    } catch {
      return null;
    }
  }

  async function syncAndApply() {
    const remote = await fetchRemoteSettings();
    const local = readSettings();
    const settings = remote && remote.updatedAt > (local.updatedAt || '')
      ? remote
      : { mode: 'recruitment', promoEnabled: false, promoText: '', promoLink: '', ...local };
    applySettings(settings);
  }

  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
      e.preventDefault();
      window.location.href = base + 'admin.html';
    }
  });

  loadScript(base + 'js/analytics-config.js')
    .then(() => loadScript(base + 'js/analytics.js'))
    .then(() => {
      syncAndApply();
      window.addEventListener('storage', e => { if (e.key === SETTINGS_KEY) applySettings(readSettings()); });
      setInterval(syncAndApply, 30000);
    })
    .catch(() => {});
})();

(function initReveals() {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: .08 });

    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    document.documentElement.classList.add('reveal-ready');
  }

  document.querySelector('.hero')?.classList.add('hero-intro');
})();

/* Contact form */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = form.querySelector('.form-status');
  const submitButton = form.querySelector('.form-submit');
  const submitLabel = submitButton.querySelector('.form-submit-label');
  const fields = Array.from(form.querySelectorAll('.form-field'), field => ({
    input: field.querySelector('.form-input'),
    feedback: field.querySelector('.form-feedback'),
  }));
  const translate = (key, lang = I18N.getLang()) => I18N.t(`contact.form.${key}`, lang);
  let outcome = '';

  function renderStatus(lang) {
    status.textContent = outcome ? translate(outcome, lang) : '';
    status.classList.toggle('success', outcome === 'success');
    status.classList.toggle('error', outcome === 'error' || outcome === 'file');
  }

  function renderField({ input, feedback }, lang) {
    if (input.validity.valid) {
      input.removeAttribute('aria-invalid');
      feedback.textContent = '';
      return;
    }

    input.setAttribute('aria-invalid', 'true');
    feedback.textContent = translate(input.validity.typeMismatch ? 'email.invalid' : 'required', lang);
  }

  document.addEventListener('i18n:changed', ({ detail: { lang } }) => {
    renderStatus(lang);
    fields.filter(({ input }) => input.hasAttribute('aria-invalid')).forEach(field => renderField(field, lang));
  });

  if (window.location.protocol === 'file:') {
    outcome = 'file';
    submitButton.disabled = true;
    renderStatus();
    return;
  }

  fields.forEach(field => {
    const { input } = field;

    input.addEventListener('invalid', event => {
      event.preventDefault();
      renderField(field);
      const firstInvalid = fields.find(entry => !entry.input.validity.valid);
      if (firstInvalid === field) input.focus();
    });

    input.addEventListener('input', () => {
      if (input.hasAttribute('aria-invalid')) renderField(field);
    });
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submitButton.disabled) return;

    outcome = '';
    renderStatus();
    form.setAttribute('aria-busy', 'true');
    submitButton.disabled = true;
    submitLabel.textContent = translate('sending');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (data?.success !== true && data?.success !== 'true') throw new Error('Form submission failed');

      outcome = 'success';
      form.reset();
    } catch (error) {
      console.warn('Contact form error:', error);
      outcome = 'error';
    } finally {
      form.removeAttribute('aria-busy');
      submitButton.disabled = false;
      submitLabel.textContent = translate('send');
      renderStatus();
    }
  });
})();
