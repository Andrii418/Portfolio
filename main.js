/* ═══════════════════════════════════════════════
   PORTFOLIO · main.js
   Wymaga: i18n.js załadowanego PRZED tym plikiem,
   lub jako moduł. GitHub Pages: oba pliki w root.
═══════════════════════════════════════════════ */

/* ── 0. LANG SWITCH — INJECT STYLES (raz na stronę) ──
   Animowany segmentowany przełącznik PL / EN / UA.
   Samowystarczalny — nie wymaga zmian w style.css.
─────────────────────────────────────────────── */
(function injectLangSwitchStyles() {
  if (document.getElementById('lang-switch-styles')) return;
  const style = document.createElement('style');
  style.id = 'lang-switch-styles';
  style.textContent = `
    .lang-switch {
      position: relative;
      display: inline-flex;
      align-items: center;
      padding: 4px;
      border-radius: 999px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.10);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      overflow: hidden;
      user-select: none;
    }
    .lang-switch-indicator {
      position: absolute;
      top: 4px;
      left: 4px;
      bottom: 4px;
      width: calc((100% - 8px) / 3);
      border-radius: 999px;
      background: linear-gradient(135deg, #7dffd4, #a8edff);
      transition: transform .38s cubic-bezier(.22,.85,.2,1);
      z-index: 0;
      will-change: transform;
    }
    .lang-switch-btn {
      position: relative;
      z-index: 1;
      min-width: 34px;
      padding: 6px 10px;
      border: none;
      background: transparent;
      color: rgba(255,255,255,0.55);
      font: 600 11px/1 'JetBrains Mono', ui-monospace, monospace;
      letter-spacing: .04em;
      border-radius: 999px;
      cursor: pointer;
      transition: color .25s ease;
    }
    .lang-switch-btn.active {
      color: #05131a;
    }
    .lang-switch-btn:hover:not(.active) {
      color: rgba(255,255,255,0.9);
    }
    html.light .lang-switch {
      background: rgba(10,10,20,0.05);
      border-color: rgba(10,10,20,0.12);
    }
    html.light .lang-switch-btn {
      color: rgba(10,10,20,0.5);
    }
    html.light .lang-switch-btn:hover:not(.active) {
      color: rgba(10,10,20,0.85);
    }
  `;
  document.head.appendChild(style);
})();

/* ── 1. INJECT NAVBAR BUTTONS ────────────────────
   Wstrzykuje przyciski motywu i przełącznik języka
   do navbara. Działa na każdej podstronie bo navbar
   jest wspólny.
─────────────────────────────────────────────── */
(function injectNavButtons() {
  const navInner = document.querySelector('.nav-inner');
  const ham      = document.getElementById('ham');
  if (!navInner || !ham) return;

  /* Theme toggle */
  const themeBtn = document.createElement('button');
  themeBtn.id = 'themeBtn';
  themeBtn.className = 'nav-icon-btn';
  themeBtn.setAttribute('aria-label', 'Przełącz motyw');
  themeBtn.innerHTML = `
    <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
    <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1"  y1="12" x2="3"  y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>`;
  navInner.insertBefore(themeBtn, ham);

  /* Animated language switch: PL / EN / UA */
  const LANGS = [
    { code: 'pl', label: 'PL' },
    { code: 'en', label: 'EN' },
    { code: 'ua', label: 'UA' },
  ];

  const langSwitch = document.createElement('div');
  langSwitch.id = 'langSwitch';
  langSwitch.className = 'lang-switch';
  langSwitch.setAttribute('role', 'tablist');
  langSwitch.setAttribute('aria-label', 'Wybór języka strony');

  const indicator = document.createElement('span');
  indicator.className = 'lang-switch-indicator';
  langSwitch.appendChild(indicator);

  LANGS.forEach(({ code, label }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang-switch-btn';
    btn.dataset.lang = code;
    btn.setAttribute('role', 'tab');
    btn.textContent = label;
    langSwitch.appendChild(btn);
  });

  navInner.insertBefore(langSwitch, ham);
})();

/* ── 2. THEME TOGGLE ──────────────────────────── */
(function initTheme() {
  const root = document.documentElement;
  if (localStorage.getItem('theme') === 'light') root.classList.add('light');

  document.getElementById('themeBtn')?.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
})();

/* ── 3. VISIT COUNTER ─────────────────────────── */
(function initVisitCounter() {
  const path = window.location.pathname;
  if (path.endsWith('/admin.html') || path.endsWith('admin.html')) return;

  const namespace = 'andrii-portfolio-at';
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  function isoWeekNumber(d) {
    const dateCopy = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = (dateCopy.getUTCDay() + 6) % 7;
    dateCopy.setUTCDate(dateCopy.getUTCDate() - dayNum + 3);
    const firstThursday = new Date(Date.UTC(dateCopy.getUTCFullYear(), 0, 4));
    const diff = dateCopy - firstThursday + ((firstThursday.getUTCDay() + 6) % 7) * 86400000;
    return 1 + Math.round(diff / 604800000);
  }

  const week = String(isoWeekNumber(date)).padStart(2, '0');
  const keys = [
    'site-total',
    `site-day-${year}-${month}-${day}`,
    `site-week-${year}-W${week}`,
    `site-month-${year}-${month}`
  ];

  keys.forEach(key => {
    const api = `https://api.countapi.xyz/hit/${namespace}/${key}`;
    fetch(api).catch(() => { /* ignore errors */ });
  });
})();

/* ── 4. LANGUAGE TOGGLE ───────────────────────── */
(function initLang() {
  /* i18n.js must be loaded before main.js */
  if (!window.I18N) {
    console.warn('i18n.js not loaded');
    return;
  }

  const switchEl  = document.getElementById('langSwitch');
  const indicator = switchEl?.querySelector('.lang-switch-indicator');
  const buttons   = switchEl ? Array.from(switchEl.querySelectorAll('.lang-switch-btn')) : [];
  const langs     = window.I18N.supportedLangs || ['pl', 'en', 'ua'];

  function moveIndicator(lang, animate) {
    if (!indicator) return;
    const idx = langs.indexOf(lang);
    if (idx === -1) return;

    if (!animate) {
      indicator.style.transition = 'none';
      indicator.style.transform = `translateX(${idx * 100}%)`;
      /* wymuszenie reflow, żeby kolejna zmiana już się animowała */
      void indicator.offsetWidth;
      indicator.style.transition = '';
    } else {
      indicator.style.transform = `translateX(${idx * 100}%)`;
    }
  }

  function setActive(lang) {
    buttons.forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  let lang = window.I18N.getLang();

  /* Zastosuj zapisany język i ustaw pozycję suwaka BEZ animacji na starcie */
  if (lang !== 'pl') window.I18N.apply(lang);
  setActive(lang);
  moveIndicator(lang, false);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.lang;
      if (next === lang) return;

      lang = next;
      localStorage.setItem('lang', lang);
      window.I18N.apply(lang);
      setActive(lang);
      moveIndicator(lang, true);
    });
  });

  /* Reaguj na zmianę języka wywołaną z innego miejsca (np. i18n.apply()) */
  document.addEventListener('i18n:changed', e => {
    const newLang = e.detail?.lang;
    if (!newLang || newLang === lang) return;
    lang = newLang;
    setActive(lang);
    moveIndicator(lang, true);
  });
})();

/* ── 5. NAVBAR SCROLL ─────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── 6. HAMBURGER MENU ────────────────────────── */
const ham    = document.getElementById('ham');
const drawer = document.getElementById('drawer');

ham?.addEventListener('click', () => {
  const isOpen = drawer.classList.toggle('open');
  ham.classList.toggle('open', isOpen);
  ham.setAttribute('aria-expanded', isOpen);
});

drawer?.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('open');
    ham.classList.remove('open');
  });
});

/* ── 7. SCROLL-REVEAL ─────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── 8. CANVAS — STAR FIELD + SHOOTING STARS ──── */
(function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  const COLORS = [
    [168, 237, 255],
    [201, 184, 255],
    [255, 194, 227],
    [125, 255, 212],
  ];

  const STAR_COUNT = 70;
  let stars = [];

  function mkStar() {
    const c = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: .4 + Math.random() * 1.1,
      a: .08 + Math.random() * .28,
      c,
      phase: Math.random() * Math.PI * 2,
      spd:   .0008 + Math.random() * .0014,
    };
  }

  let shooters = [];

  function mkShooter() {
    const c = COLORS[Math.floor(Math.random() * COLORS.length)];
    const angle = (Math.random() * 30 - 15) * Math.PI / 180;
    const speed = 7 + Math.random() * 6;
    return {
      x: Math.random() * W * .6,
      y: Math.random() * H * .5,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed + .5,
      life: 1,
      decay: .018 + Math.random() * .012,
      c,
    };
  }

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    stars = Array.from({ length: STAR_COUNT }, mkStar);
  }

  const t0 = performance.now();
  let shootTimer = 0;
  function isLight() { return document.documentElement.classList.contains('light'); }

  function draw(ts) {
    ctx.clearRect(0, 0, W, H);
    const t = (ts - t0) / 1000;
    const scale = isLight() ? .4 : 1;

    stars.forEach(s => {
      const a = s.a * (.5 + .5 * Math.sin(t * s.spd * 60 + s.phase)) * scale;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.c[0]},${s.c[1]},${s.c[2]},${a})`;
      ctx.fill();
    });

    shootTimer++;
    if (shootTimer > 420 + Math.random() * 300) { shooters.push(mkShooter()); shootTimer = 0; }
    shooters = shooters.filter(s => s.life > 0);
    shooters.forEach(s => {
      const tx = s.x - s.vx * 12, ty = s.y - s.vy * 12;
      const g = ctx.createLinearGradient(tx, ty, s.x, s.y);
      g.addColorStop(0, `rgba(${s.c[0]},${s.c[1]},${s.c[2]},0)`);
      g.addColorStop(1, `rgba(${s.c[0]},${s.c[1]},${s.c[2]},${s.life * .65 * scale})`);
      ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(s.x, s.y);
      ctx.strokeStyle = g; ctx.lineWidth = 1.2; ctx.stroke();
      ctx.beginPath(); ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.c[0]},${s.c[1]},${s.c[2]},${s.life * .9 * scale})`; ctx.fill();
      s.x += s.vx; s.y += s.vy; s.life -= s.decay;
      if (s.x > W + 50 || s.y > H + 50) s.life = 0;
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();
  requestAnimationFrame(draw);
})();

/* ── 9. GLASS CARD TILT ───────────────────────── */
(function cardTilt() {
  const card = document.querySelector('.glass-card');
  if (!card) return;
  card.addEventListener('mousemove', e => {
    const r  = card.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
    const dy = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
    card.style.transform = `perspective(800px) rotateY(${dx * 9}deg) rotateX(${-dy * 7}deg) scale(1.025)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1)';
    setTimeout(() => card.style.transition = '', 600);
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform .18s cubic-bezier(.2,.8,.2,1)';
  });
})();

/* ── 10. CONTACT FORM ─────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = form.querySelector('.form-status');
  const submitBtn = form.querySelector('button[type="submit"]');
  const nextInput = form.querySelector('input[name="_next"]');

  if (nextInput) {
    nextInput.value = `${window.location.origin}${window.location.pathname}?sent=1`;
  }

  if (status) {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
      status.textContent = '✅ Wiadomość została wysłana. Dziękuję za kontakt!';
      status.classList.add('success', 'visible');
      status.classList.remove('error');
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }

  if (window.location.protocol === 'file:') {
    if (status) {
      status.textContent = 'Formularz wymaga uruchomienia strony przez serwer HTTP. Użyj lokalnego serwera lub wdroż stronę online.';
      status.classList.add('error');
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('disabled');
    }
    return;
  }

  const ajaxAction = form.action.replace(/\/$/, '') + '/ajax';
  const originalSubmitText = submitBtn?.innerHTML || 'Wyślij wiadomość';

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!submitBtn) return;

    submitBtn.disabled = true;
    submitBtn.classList.add('disabled');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Wysyłanie...';
    status.textContent = '';
    status.classList.remove('success', 'error');

    try {
      const response = await fetch(ajaxAction, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Network response was not ok');

      let data = null;
      try {
        data = await response.json();
      } catch (parseError) {
        console.warn('Contact form JSON parse failed', parseError);
      }

      if (data?.success === 'true' || response.status === 200) {
        status.textContent = '✅ Wiadomość została wysłana. Dziękuję za kontakt!';
        status.classList.add('success', 'visible');
        status.classList.remove('error');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.warn('Contact form error:', error);
      status.textContent = '⚠️ Wystąpił problem z wysyłką AJAX. Wysyłam formularz standardowo...';
      status.classList.add('error', 'visible');
      status.classList.remove('success');
      form.submit();
      return;
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('disabled');
      submitBtn.innerHTML = originalSubmitText;
    }
  });
})();

/* ── 11. STACK PILL STAGGER ────────────────────── */
document.querySelectorAll('.stack-pill').forEach((p, i) => {
  p.style.transitionDelay = (i * 18) + 'ms';
});