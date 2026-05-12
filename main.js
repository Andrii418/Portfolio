/* ═══════════════════════════════════════════════
   PORTFOLIO · main.js
═══════════════════════════════════════════════ */

/* ── 1. INJECT NAVBAR BUTTONS into nav-inner ─────
   We add two buttons BEFORE the hamburger:
   [🌙/☀] theme toggle  and  [PL/EN] lang toggle
   All nav HTML stays untouched.
─────────────────────────────────────────────── */
(function injectNavButtons() {
  const navInner = document.querySelector('.nav-inner');
  const ham      = document.getElementById('ham');
  if (!navInner || !ham) return;

  /* ── Theme button ── */
  const themeBtn = document.createElement('button');
  themeBtn.id = 'themeBtn';
  themeBtn.className = 'nav-icon-btn';
  themeBtn.setAttribute('aria-label', 'Przełącz motyw');
  themeBtn.innerHTML = `
    <svg class="icon-moon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    <svg class="icon-sun"  viewBox="0 0 24 24">
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

  /* ── Lang button ── */
  const langBtn = document.createElement('button');
  langBtn.id = 'langBtn';
  langBtn.className = 'nav-icon-btn';
  langBtn.setAttribute('aria-label', 'Zmień język');
  langBtn.innerHTML = `
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
    <span id="langLabel">EN</span>`;
  navInner.insertBefore(langBtn, ham);
})();

/* ── 2. THEME TOGGLE ─────────────────────────────── */
(function initTheme() {
  const root = document.documentElement;
  const btn  = document.getElementById('themeBtn');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');

  btn && btn.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
})();

/* ── 3. LANGUAGE TOGGLE ──────────────────────────── */
(function initLang() {
  const TRANSLATIONS = {
    /* badge */
    '[data-i18n="badge"]': {
      pl: 'Poszukuję pracy\u00a0·\u00a0Kraków, Rzeszów, Tarnów / Remote',
      en: 'Open to work\u00a0·\u00a0Kraków, Rzeszów, Tarnów / Remote',
    },
    /* hero */
    '[data-i18n="title-line"]':  { pl: 'Nazywam się',        en: 'My name is' },
    '[data-i18n="hero-role"]':   { pl: 'Full-stack Developer | Student III roku Informatyki',
                                   en: 'Full-stack Developer | 3rd-year CS Student' },
    '[data-i18n="hero-desc"]':   {
      pl: 'Buduję skalowalne aplikacje webowe i systemy, łącząc wydajną logikę backendową z dopracowanymi interfejsami użytkownika. Skupiam się na pisaniu czystego kodu, bezpieczeństwie danych oraz optymalizacji wydajności systemów.',
      en: 'I build scalable web applications and systems, combining efficient backend logic with polished user interfaces. I focus on writing clean code, data security, and performance optimization.',
    },
    '[data-i18n="btn-projects"]': { pl: 'Moje projekty',          en: 'My projects' },
    '[data-i18n="btn-contact"]':  { pl: 'Formularz kontaktowy',   en: 'Contact form' },
    /* card */
    '[data-i18n="card-role"]':   { pl: 'Full-stack Developer', en: 'Full-stack Developer' },
    '[data-i18n="cs-l-1"]':      { pl: 'lata studiów',         en: 'years of study' },
    '[data-i18n="cs-l-2"]':      { pl: 'repozytoriów',         en: 'repositories' },
    '[data-i18n="cs-l-3"]':      { pl: 'technologii',          en: 'technologies' },
    /* nav */
    '[data-i18n="nav-projects"]': { pl: 'Projekty', en: 'Projects' },
    '[data-i18n="nav-contact"]':  { pl: 'Kontakt',  en: 'Contact' },
    '[data-i18n="nav-cv"]':       { pl: 'Pobierz CV', en: 'Download CV' },
    /* about */
    '[data-i18n="eyebrow"]':     { pl: 'Profil zawodowy',        en: 'Professional profile' },
    '[data-i18n="about-title"]': { pl: 'Rozwiązania Full-stack:<br/><span class="gradient-text">od architektury po UI</span>',
                                   en: 'Full-stack Solutions:<br/><span class="gradient-text">from architecture to UI</span>' },
    '[data-i18n="about-p1"]':    {
      pl: 'Jako student Inżynierii Oprogramowania podchodzę do tworzenia aplikacji w sposób kompleksowy. Moje kompetencje obejmują budowę skalowalnych API, zarządzanie relacyjnymi bazami danych oraz implementację nowoczesnych, intuicyjnych frontendów.',
      en: 'As a Software Engineering student, I take a holistic approach to application development. My competencies include building scalable APIs, managing relational databases, and implementing modern, intuitive frontends.',
    },
    '[data-i18n="about-p2"]':    {
      pl: 'Równolegle rozwijam projekty mobilne i desktopowe, dbając o spójność technologiczną i wysoką jakość dostarczanego oprogramowania niezależnie od platformy docelowej.',
      en: 'I also develop mobile and desktop projects, ensuring technological consistency and high software quality regardless of the target platform.',
    },
    '[data-i18n="about-link"]':  { pl: 'Przeglądaj stos technologiczny →', en: 'Browse tech stack →' },
    /* timeline */
    '[data-i18n="tl-1-title"]':  { pl: 'Studia Inżynierskie: Informatyka',         en: 'Bachelor\'s: Computer Science' },
    '[data-i18n="tl-1-sub"]':    { pl: 'Akademia Tarnowska (spec. Inżynieria Oprogramowania)', en: 'Tarnów Academy (Software Engineering)' },
    '[data-i18n="tl-2-title"]':  { pl: 'Rozwój projektów mobilnych i desktopowych', en: 'Mobile & Desktop Project Development' },
    '[data-i18n="tl-2-sub"]':    { pl: 'Implementacja w środowiskach Android Studio oraz Spring Boot', en: 'Built with Android Studio and Spring Boot' },
    '[data-i18n="tl-3-title"]':  { pl: 'Freelance: Strony internetowe',             en: 'Freelance: Web Development' },
    '[data-i18n="tl-3-sub"]':    { pl: 'Architektura i wdrożenia systemów CMS/E-commerce', en: 'CMS/E-commerce architecture & deployments' },
    '[data-i18n="tl-4-title"]':  { pl: 'Poszukuję pracy',    en: 'Looking for a job' },
    '[data-i18n="tl-4-sub"]':    { pl: 'Junior Software Engineer', en: 'Junior Software Engineer' },
    /* footer */
    '[data-i18n="footer-copy"]': { pl: '© 2026 Andrii Torianyk', en: '© 2026 Andrii Torianyk' },
  };

  /* Patch HTML with data-i18n attributes — runs once to add them */
  function patchDOM() {
    const $ = s => document.querySelector(s);

    const map = {
      '.hero-badge':              'badge',
      '.title-line':              'title-line',
      '.hero-desc':               'hero-desc',
      '.section-eyebrow':         'eyebrow',
      '.about-body:nth-of-type(1)': null, /* handled below */
    };

    /* badge */
    const badge = $('.hero-badge');
    if (badge) {
      const textNode = [...badge.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
      if (textNode) {
        const span = document.createElement('span');
        span.setAttribute('data-i18n', 'badge');
        span.textContent = textNode.textContent.trim();
        badge.replaceChild(span, textNode);
      }
    }

    function tag(sel, key, useHTML = false) {
      const el = $(sel);
      if (!el) return;
      if (useHTML) el.setAttribute('data-i18n-html', key);
      else el.setAttribute('data-i18n', key);
    }

    tag('.title-line',      'title-line');
    tag('.hero-desc',       'hero-desc');
    tag('.section-eyebrow', 'eyebrow');
    tag('.section-title',   'about-title', true);
    tag('.about-link',      'about-link');
    tag('.footer-copy',     'footer-copy');

    /* hero role — strip cursor span then re-add */
    const roleEl = $('.hero-role');
    if (roleEl) roleEl.setAttribute('data-i18n-role', '1');

    /* buttons */
    const btns = document.querySelectorAll('.btn');
    if (btns[0]) btns[0].setAttribute('data-i18n-btn', 'btn-projects');
    if (btns[1]) btns[1].setAttribute('data-i18n-btn', 'btn-contact');

    /* card role / stats labels */
    const cardRole = $('.card-role');
    if (cardRole) cardRole.setAttribute('data-i18n', 'card-role');

    const csLabels = document.querySelectorAll('.cs-l');
    if (csLabels[0]) csLabels[0].setAttribute('data-i18n', 'cs-l-1');
    if (csLabels[1]) csLabels[1].setAttribute('data-i18n', 'cs-l-2');
    if (csLabels[2]) csLabels[2].setAttribute('data-i18n', 'cs-l-3');

    /* nav links */
    const navLinks = document.querySelectorAll('.nav-link');
    const navKeys  = ['nav-projects', 'nav-contact'];
    navLinks.forEach((l, i) => {
      if (navKeys[i]) l.setAttribute('data-i18n', navKeys[i]);
    });
    const navCta = $('.nav-cta');
    if (navCta) navCta.setAttribute('data-i18n-cta', 'nav-cv');

    /* about paragraphs */
    const aboutPs = document.querySelectorAll('.about-body');
    if (aboutPs[0]) aboutPs[0].setAttribute('data-i18n', 'about-p1');
    if (aboutPs[1]) aboutPs[1].setAttribute('data-i18n', 'about-p2');

    /* timeline */
    const tlTitles = document.querySelectorAll('.tl-title');
    const tlSubs   = document.querySelectorAll('.tl-sub');
    ['tl-1-title','tl-2-title','tl-3-title','tl-4-title'].forEach((k,i) => {
      if (tlTitles[i]) tlTitles[i].setAttribute('data-i18n', k);
    });
    ['tl-1-sub','tl-2-sub','tl-3-sub','tl-4-sub'].forEach((k,i) => {
      if (tlSubs[i]) tlSubs[i].setAttribute('data-i18n', k);
    });
  }

  function applyLang(lang) {
    /* simple text nodes */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const sel = `[data-i18n="${key}"]`;
      if (TRANSLATIONS[sel] && TRANSLATIONS[sel][lang] !== undefined)
        el.textContent = TRANSLATIONS[sel][lang];
    });

    /* innerHTML nodes */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const sel = `[data-i18n="${key}"]`;
      if (TRANSLATIONS[sel] && TRANSLATIONS[sel][lang] !== undefined)
        el.innerHTML = TRANSLATIONS[sel][lang];
    });

    /* hero role (preserves cursor span) */
    const roleEl = document.querySelector('[data-i18n-role]');
    if (roleEl) {
      const cursor = roleEl.querySelector('.role-cursor');
      const k = '[data-i18n="hero-role"]';
      roleEl.textContent = TRANSLATIONS[k][lang];
      if (cursor) roleEl.prepend(cursor);
    }

    /* buttons with text + svg */
    document.querySelectorAll('[data-i18n-btn]').forEach(el => {
      const key = el.getAttribute('data-i18n-btn');
      const sel = `[data-i18n="${key}"]`;
      if (!TRANSLATIONS[sel]) return;
      const svg = el.querySelector('svg');
      el.textContent = TRANSLATIONS[sel][lang];
      if (svg) el.appendChild(svg);
    });

    /* nav cta */
    const cta = document.querySelector('[data-i18n-cta]');
    if (cta) {
      const key = cta.getAttribute('data-i18n-cta');
      const sel = `[data-i18n="${key}"]`;
      if (TRANSLATIONS[sel]) {
        const svg = cta.querySelector('svg');
        cta.textContent = TRANSLATIONS[sel][lang];
        if (svg) cta.prepend(svg);
      }
    }

    /* badge span */
    const badgeSpan = document.querySelector('.hero-badge [data-i18n="badge"]');
    if (badgeSpan && TRANSLATIONS['[data-i18n="badge"]']) {
      badgeSpan.textContent = TRANSLATIONS['[data-i18n="badge"]'][lang];
    }

    /* label */
    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'pl' ? 'EN' : 'PL';

    localStorage.setItem('lang', lang);
  }

  let currentLang = localStorage.getItem('lang') || 'pl';

  patchDOM();

  if (currentLang === 'en') applyLang('en');

  const btn = document.getElementById('langBtn');
  btn && btn.addEventListener('click', () => {
    currentLang = currentLang === 'pl' ? 'en' : 'pl';
    applyLang(currentLang);
  });
})();

/* ── 4. NAVBAR SCROLL ─────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── 5. HAMBURGER MENU ────────────────────────────── */
const ham    = document.getElementById('ham');
const drawer = document.getElementById('drawer');

ham.addEventListener('click', () => {
  const isOpen = drawer.classList.toggle('open');
  ham.classList.toggle('open', isOpen);
  ham.setAttribute('aria-expanded', isOpen);
});

drawer.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('open');
    ham.classList.remove('open');
  });
});

/* ── 6. SCROLL-REVEAL ─────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── 7. CANVAS — STAR FIELD + SHOOTING STARS ──────── */
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
    const light = isLight();
    const alphaScale = light ? .4 : 1;

    stars.forEach(s => {
      const a = s.a * (.5 + .5 * Math.sin(t * s.spd * 60 + s.phase)) * alphaScale;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.c[0]},${s.c[1]},${s.c[2]},${a})`;
      ctx.fill();
    });

    shootTimer++;
    if (shootTimer > 420 + Math.random() * 300) {
      shooters.push(mkShooter());
      shootTimer = 0;
    }

    shooters = shooters.filter(s => s.life > 0);
    shooters.forEach(s => {
      const tailX = s.x - s.vx * 12;
      const tailY = s.y - s.vy * 12;
      const g = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
      g.addColorStop(0, `rgba(${s.c[0]},${s.c[1]},${s.c[2]},0)`);
      g.addColorStop(1, `rgba(${s.c[0]},${s.c[1]},${s.c[2]},${s.life * .65 * alphaScale})`);
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(s.x, s.y);
      ctx.strokeStyle = g;
      ctx.lineWidth   = 1.2;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.c[0]},${s.c[1]},${s.c[2]},${s.life * .9 * alphaScale})`;
      ctx.fill();
      s.x += s.vx; s.y += s.vy; s.life -= s.decay;
      if (s.x > W + 50 || s.y > H + 50) s.life = 0;
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();
  requestAnimationFrame(draw);
})();

/* ── 8. GLASS CARD TILT ───────────────────────────── */
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

/* ── 9. STACK PILL STAGGER ────────────────────────── */
document.querySelectorAll('.stack-pill').forEach((p, i) => {
  p.style.transitionDelay = (i * 18) + 'ms';
});