/* ═══════════════════════════════════════════════
   PORTFOLIO · main.js
   Wymaga: i18n.js załadowanego PRZED tym plikiem,
   lub jako moduł. GitHub Pages: oba pliki w root.
═══════════════════════════════════════════════ */

/* ── 0. NAVBAR — PREMIUM GLASSMORPHISM STYLES (raz na stronę) ──
   Floating pill navbar w stylu Apple / Vercel / Linear:
   - szklany, rozmyty kontener wyśrodkowany u góry
   - animowany gradientowy border-ring
   - logo z gradientowym fillem tekstu
   - sliding pill-indicator pod linkami nawigacji
   - neonowy CTA z shimmerem i pulsującą poświatą
   - okrągłe glass-ikony (motyw) z rotacją na hover
   - odświeżony przełącznik języka PL/EN/UA
   Samowystarczalne — nie wymaga zmian w style.css ani HTML.
─────────────────────────────────────────────── */
(function injectNavbarPremiumStyles() {
  if (document.getElementById('navbar-premium-styles')) return;
  const style = document.createElement('style');
  style.id = 'navbar-premium-styles';
  style.textContent = `
    :root {
      --nav-bg: rgba(10, 10, 15, 0.68);
      --nav-bg-scrolled: rgba(8, 8, 13, 0.82);
      --nav-border: rgba(255, 255, 255, 0.08);
      --nav-glow: rgba(125, 255, 212, 0.32);
      --nav-radius: 9999px;
      --nav-ease: cubic-bezier(0.16, 1, 0.3, 1);
      --accent-1: #7dffd4;
      --accent-2: #a8edff;
      --accent-3: #c9b8ff;
      --accent-4: #ffc2e3;
    }

    /* ═══ FLOATING PILL CONTAINER ═══ */
    #navbar {
      position: fixed;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      width: max-content;
      max-width: calc(100vw - 1.5rem);
    }

    #navbar .nav-inner {
      position: relative;
      display: flex;
      align-items: center;
      gap: 1.9rem;
      padding: 0.55rem 0.55rem 0.55rem 1.35rem;
      border-radius: var(--nav-radius);
      background: var(--nav-bg);
      backdrop-filter: blur(18px) saturate(160%);
      -webkit-backdrop-filter: blur(18px) saturate(160%);
      border: 1px solid var(--nav-border);
      box-shadow:
        0 8px 32px -14px rgba(0, 0, 0, 0.65),
        0 0 0 1px rgba(255, 255, 255, 0.02) inset,
        0 0 26px -10px var(--nav-glow);
      transition: background-color .5s ease, box-shadow .5s var(--nav-ease),
                  border-color .5s ease, padding .4s var(--nav-ease);
    }

    /* animowany gradientowy ring-border */
    #navbar .nav-inner::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(120deg,
        rgba(125,255,212,.55), rgba(168,237,255,.30),
        rgba(201,184,255,.55), rgba(255,194,227,.30),
        rgba(125,255,212,.55));
      background-size: 300% 300%;
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      opacity: .45;
      animation: navGradientRing 9s linear infinite;
      pointer-events: none;
    }
    @keyframes navGradientRing {
      0%   { background-position: 0% 50%; }
      100% { background-position: 300% 50%; }
    }

    #navbar.scrolled .nav-inner {
      background: var(--nav-bg-scrolled);
      box-shadow:
        0 14px 44px -14px rgba(0, 0, 0, 0.7),
        0 0 0 1px rgba(255, 255, 255, 0.03) inset,
        0 0 30px -8px var(--nav-glow);
    }
    #navbar .nav-inner:hover {
      box-shadow:
        0 10px 40px -12px rgba(0, 0, 0, 0.7),
        0 0 34px -6px var(--nav-glow),
        0 0 0 1px rgba(255, 255, 255, 0.04) inset;
    }
    #navbar .nav-inner:hover::before { opacity: .75; }

    /* ═══ LOGO ═══ */
    .nav-logo {
      position: relative;
      display: inline-flex;
      align-items: center;
      font-weight: 700;
      letter-spacing: .01em;
      background: linear-gradient(120deg, var(--accent-1), var(--accent-2) 55%, var(--accent-3));
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      transition: transform .45s var(--nav-ease), filter .45s var(--nav-ease), background-position .6s ease;
    }
    .nav-logo .logo-bracket {
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      background: inherit;
    }
    .nav-logo:hover {
      transform: scale(1.06);
      background-position: 100% 50%;
      filter: drop-shadow(0 0 10px rgba(125, 255, 212, .55));
    }

    /* ═══ NAV LINKS + SLIDING PILL INDICATOR ═══ */
    .nav-links {
      position: relative;
      display: flex;
      align-items: center;
      gap: .15rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nav-links li { position: relative; z-index: 1; list-style: none; }

    .nav-link-indicator {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.075);
      box-shadow: 0 0 0 1px rgba(255,255,255,.07) inset, 0 0 18px -3px rgba(125,255,212,.4);
      transition: transform .5s var(--nav-ease), width .5s var(--nav-ease), opacity .3s ease;
      opacity: 0;
      pointer-events: none;
      z-index: 0;
      will-change: transform, width;
    }
    .nav-links.indicator-ready .nav-link-indicator { opacity: 1; }

    .nav-link {
      position: relative;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      padding: .5rem .95rem;
      border-radius: 999px;
      font-size: 13.5px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.58);
      transition: color .35s ease;
      white-space: nowrap;
    }
    .nav-link:hover,
    .nav-link.active { color: #f4fbff; }

    /* ═══ CTA "Pobierz CV" — neon premium button ═══ */
    .nav-cta {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: .4rem;
      padding: .58rem 1.15rem .58rem 1rem;
      border-radius: 999px;
      font-size: 12.5px;
      font-weight: 600;
      letter-spacing: .01em;
      color: #05140f;
      background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
      background-size: 220% 220%;
      overflow: hidden;
      isolation: isolate;
      box-shadow: 0 0 0 1px rgba(255,255,255,.15) inset, 0 6px 20px -8px rgba(125,255,212,.5);
      transition: transform .4s var(--nav-ease), box-shadow .4s var(--nav-ease), background-position .6s ease;
      animation: ctaBreathe 3.4s ease-in-out infinite;
    }
    @keyframes ctaBreathe {
      0%, 100% { box-shadow: 0 0 0 1px rgba(255,255,255,.15) inset, 0 6px 20px -8px rgba(125,255,212,.42); }
      50%      { box-shadow: 0 0 0 1px rgba(255,255,255,.15) inset, 0 9px 28px -6px rgba(125,255,212,.78); }
    }
    .nav-cta::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,.65) 48%, transparent 66%);
      transform: translateX(-130%);
      transition: transform .8s ease;
    }
    /* magnetyczna poświata pod kursorem */
    .nav-cta.wow-glow-ready::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      opacity: 0;
      background: radial-gradient(140px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,.55), transparent 65%);
      transition: opacity .35s ease;
    }
    .nav-cta:hover::after { opacity: 1; }
    .nav-cta:hover {
      transform: translateY(-2px) scale(1.035);
      background-position: 100% 0%;
      box-shadow: 0 0 0 1px rgba(255,255,255,.25) inset, 0 0 22px rgba(0,255,170,.45), 0 12px 30px -8px rgba(125,255,212,.6);
    }
    .nav-cta:hover::before { transform: translateX(130%); }
    .nav-cta:active { transform: translateY(0) scale(.97); }
    .nav-cta svg { transition: transform .35s var(--nav-ease); }
    .nav-cta:hover svg { transform: translateY(2px); }

    /* ═══ ICON BUTTONS (theme toggle) — circular glass ═══ */
    .nav-icon-btn {
      position: relative;
      width: 34px;
      height: 34px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.09);
      color: rgba(255, 255, 255, 0.62);
      transition: transform .4s var(--nav-ease), color .3s ease, border-color .3s ease, box-shadow .3s ease, background-color .3s ease;
    }
    .nav-icon-btn::after {
      content: '';
      position: absolute;
      inset: -6px;
      border-radius: 999px;
      background: radial-gradient(circle, rgba(168,237,255,.28), transparent 70%);
      opacity: 0;
      transform: scale(.6);
      transition: opacity .3s ease, transform .3s ease;
      z-index: -1;
    }
    .nav-icon-btn:hover {
      transform: rotate(15deg) scale(1.07);
      color: var(--accent-2);
      border-color: rgba(168, 237, 255, 0.4);
      background: rgba(168, 237, 255, 0.06);
      box-shadow: 0 0 16px -2px rgba(168, 237, 255, .5);
    }
    .nav-icon-btn:hover::after { opacity: 1; transform: scale(1); }
    .nav-icon-btn:active { transform: rotate(15deg) scale(.94); }

    /* ═══ LANGUAGE SWITCHER — glass pill, sliding highlight ═══ */
    .lang-switch {
      position: relative;
      display: inline-flex;
      align-items: center;
      padding: 3px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.09);
      overflow: hidden;
      user-select: none;
      transition: border-color .3s ease, box-shadow .3s ease;
    }
    .lang-switch:hover {
      border-color: rgba(168, 237, 255, 0.35);
      box-shadow: 0 0 0 1px rgba(168, 237, 255, 0.16), 0 6px 20px -10px rgba(168, 237, 255, .4);
    }
    .lang-switch-indicator {
      position: absolute;
      top: 3px;
      left: 3px;
      bottom: 3px;
      width: calc((100% - 6px) / 3);
      border-radius: 999px;
      background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
      box-shadow: 0 0 14px rgba(168, 237, 255, .55);
      transition: transform .42s var(--nav-ease);
      z-index: 0;
      will-change: transform;
    }
    .lang-switch-btn {
      position: relative;
      z-index: 1;
      min-width: 32px;
      padding: 6px 9px;
      border: none;
      background: transparent;
      color: rgba(255, 255, 255, 0.55);
      font: 600 11px/1 'JetBrains Mono', ui-monospace, monospace;
      letter-spacing: .04em;
      border-radius: 999px;
      cursor: pointer;
      transition: color .25s ease;
    }
    .lang-switch-btn.active { color: #05131a; }
    .lang-switch-btn:hover:not(.active) { color: #fff; }

    html.light .lang-switch { background: rgba(10,10,20,0.05); border-color: rgba(10,10,20,0.12); }
    html.light .lang-switch-btn { color: rgba(10,10,20,0.5); }
    html.light .lang-switch-btn:hover:not(.active) { color: rgba(10,10,20,0.85); }

    /* ═══ HAMBURGER — matching glass skin ═══ */
    .hamburger {
      position: relative;
      width: 34px;
      height: 34px;
      display: none !important;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.09);
      transition: transform .35s var(--nav-ease), background-color .3s ease, border-color .3s ease;
    }
    .hamburger::after {
      content: '';
      position: absolute;
      inset: -6px;
      border-radius: 999px;
      background: radial-gradient(circle, rgba(201, 184, 255, .28), transparent 70%);
      opacity: 0;
      transition: opacity .3s ease;
      z-index: -1;
    }
    .hamburger span { transition: background-color .3s ease, transform .3s ease; }
    .hamburger:hover { border-color: rgba(201, 184, 255, .35); }
    .hamburger:hover::after { opacity: 1; }
    .hamburger:hover span { background-color: var(--accent-3); }
    /* usuń wszystkie stare podkreślenia linków */
  #navbar .nav-link,
  #navbar .nav-link:hover,
  #navbar .nav-link:focus,
  #navbar .nav-link:active,
  #navbar .nav-link.active {
  text-decoration: none !important;
  border-bottom: none !important;
  box-shadow: none !important;
  }

#navbar .nav-link::after,
#navbar .nav-link::before {
  content: none !important;
  display: none !important;
}
    
    /* ═══ RESPONSIVE ═══ */
    
    @media (max-width: 860px) {
    /* Compact mobile navbar: keep the pill centered and items grouped */
    #navbar {
      left: 50%;
      transform: translateX(-50%);
      width: max-content;
      max-width: calc(100vw - 1rem);
      top: .6rem;
    }

    #navbar .nav-inner {
      gap: .6rem;
      padding: .4rem .75rem;
      justify-content: center;
      align-items: center;
    }

  /* Hide full nav links to prevent overflow and free space for icons */
  .nav-links { display: none !important; }

  /* Compact logo */
  .nav-logo { font-size: 15px; }

  /* Hide large CTA on mobile (we expose CV via icons/drawer) */
  .nav-cta { display: none !important; }

  /* Hamburger visible on mobile */
  #navbar .hamburger { display: inline-flex !important; }

  /* Ensure mobile quick actions are visible and not pushed to the edge */
  #mobileQuick { display: flex !important; margin-left: 0; }
}

@media (min-width: 861px) {
  #navbar .hamburger {
    display: none !important;
  }
}
    @media (max-width: 640px) {
      #navbar { top: .7rem; max-width: calc(100vw - 1rem); }
    }

    @media (prefers-reduced-motion: reduce) {
      #navbar .nav-inner::before,
      .nav-cta { animation: none !important; }
      .nav-logo, .nav-link, .nav-cta, .nav-cta::before,
      .nav-icon-btn, .hamburger, .lang-switch-btn, .lang-switch-indicator,
      .nav-link-indicator { transition: none !important; }
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
  if (!navInner) return;
  let ham = document.getElementById('ham');
  // If the hamburger button is missing in some pages, create it for mobile
  if (!ham) {
    ham = document.createElement('button');
    ham.className = 'hamburger';
    ham.id = 'ham';
    ham.setAttribute('aria-label', 'Menu');
    ham.innerHTML = '<span></span><span></span><span></span>';
    navInner.appendChild(ham);
  }

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

  // Prefer inserting before hamburger if present, otherwise append to the end
  if (ham) navInner.insertBefore(langSwitch, ham);
  else navInner.appendChild(langSwitch);

  // If there's a mobile drawer, add a mobile copy of the language switch (without duplicate id)
  const drawer = document.getElementById('drawer');
  if (drawer) {
    const mobileLang = langSwitch.cloneNode(true);
    mobileLang.id = 'langSwitchMobile';
    // Place language switch at the top of the drawer for visibility
    drawer.insertBefore(mobileLang, drawer.firstChild);

    // Ensure CV download link exists in drawer for mobile users
    const hasCv = Array.from(drawer.querySelectorAll('a')).some(a => /CV\.pdf$/i.test(a.getAttribute('href') || ''));
    if (!hasCv) {
      const cvLink = document.createElement('a');
      cvLink.href = 'assets/CV.pdf';
      cvLink.className = 'mob-link';
      cvLink.setAttribute('download', '');
      cvLink.textContent = 'Pobierz CV';
      drawer.appendChild(cvLink);
    }
  }

  // Mobile quick actions: visible only on small screens
  const mobileQuick = document.createElement('div');
  mobileQuick.id = 'mobileQuick';
  mobileQuick.style.display = 'none';
  mobileQuick.style.gap = '8px';
  mobileQuick.style.alignItems = 'center';
  mobileQuick.style.marginLeft = '8px';
  mobileQuick.style.display = 'flex';

  // CV download button (icon)
  const cvBtn = document.createElement('a');
  cvBtn.href = 'assets/CV.pdf';
  cvBtn.setAttribute('download', '');
  cvBtn.className = 'nav-icon-btn';
  cvBtn.style.width = '36px';
  cvBtn.style.height = '36px';
  cvBtn.style.display = 'inline-flex';
  cvBtn.style.alignItems = 'center';
  cvBtn.style.justifyContent = 'center';
  cvBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

  // Language cycle button (icon)
  // (removed mobile language quick-button to avoid duplicate/unwanted icon)
  mobileQuick.appendChild(cvBtn);

  // Insert mobileQuick into navInner at the end
  navInner.appendChild(mobileQuick);

  function updateMobileQuickVisibility() {
    if (window.innerWidth <= 860) mobileQuick.style.display = 'flex';
    else mobileQuick.style.display = 'none';
  }
  updateMobileQuickVisibility();
  window.addEventListener('resize', updateMobileQuickVisibility, { passive: true });

  // langQuick cycles language using i18n API
  // mobile quick language button removed — language switching handled by
  // the main lang switch and drawer buttons to avoid duplicated controls.
})();

/* ── 2. NAV LINKS — SLIDING PILL INDICATOR ────────
   Śledzi hover/active link i płynnie przesuwa
   podświetloną „kapsułę" pod właściwy element.
─────────────────────────────────────────────── */
(function initNavIndicator() {
  const nav = document.querySelector('.nav-links');
  if (!nav) return;

  const indicator = document.createElement('span');
  indicator.className = 'nav-link-indicator';
  nav.prepend(indicator);

  const links = [...nav.querySelectorAll('.nav-link')];

  function normalize(path) {
    path = path.replace(/\/index\.html$/, '/');
    path = path.replace(/\.html$/, '');
    path = path.replace(/\/$/, '');
    return path || '/';
  }

  function getCurrentLink() {
    // Prefer an element already marked active in the server-rendered HTML
    const preactive = links.find(l => l.classList.contains('active'));
    if (preactive) return preactive;

    const current = normalize(window.location.pathname);

    return links.find(link => {
      const href = link.getAttribute('href') || '';
      const url = new URL(href, window.location.href);

      return normalize(url.pathname) === current;
    }) || links[0];
  }

  // Extra fallback: try to match by the last path segment if exact match fails
  function findBySegment() {
    const seg = normalize(window.location.pathname).split('/').pop();
    if (!seg) return null;
    return links.find(link => {
      const href = (link.getAttribute('href') || '').replace(/\\/g, '/');
      return href.endsWith(seg) || href.endsWith(seg + '/');
    }) || null;
  }

  function moveTo(link, animate = true) {
    if (!link) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const x = linkRect.left - navRect.left + nav.scrollLeft;

    // set width using bounding width for precision
    indicator.style.width = `${Math.round(linkRect.width)}px`;

    if (!animate) {
      indicator.style.transition = 'none';
      indicator.style.transform = `translateX(${Math.round(x)}px)`;
      // force layout and restore transition
      void indicator.offsetWidth;
      indicator.style.transition = '';
      return;
    }

    indicator.style.transform = `translateX(${Math.round(x)}px)`;
  }

  function setActive(link) {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    moveTo(link);
  }

  let currentLink = getCurrentLink();
  if (!currentLink || currentLink === links[0]) {
    // try a segment-based fallback
    const fb = findBySegment();
    if (fb) currentLink = fb;
  }

  links.forEach(link => {
    link.classList.remove('active');

    link.addEventListener('mouseenter', () => {
      moveTo(link);
    });

    link.addEventListener('mouseleave', () => {
      moveTo(getCurrentLink());
    });

    link.addEventListener('click', () => {
      setActive(link);
    });
  });

  // Ensure active state is set consistently and the indicator is positioned
  setActive(currentLink);

  requestAnimationFrame(() => {
    moveTo(getCurrentLink(), false);
    nav.classList.add('indicator-ready');
  });

  // Recompute position when page is returned from bfcache or fully loaded
  window.addEventListener('pageshow', () => moveTo(getCurrentLink(), false));
  window.addEventListener('load', () => moveTo(getCurrentLink(), false));

  // Also recompute shortly after DOM ready in case fonts/layout shift
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') setTimeout(() => moveTo(getCurrentLink(), false), 80);
  });

  window.addEventListener('resize', () => {
    moveTo(getCurrentLink(), false);
  });
})();

/* ── 3. CTA — MAGNETYCZNA POŚWIATA PODĄŻAJĄCA ZA KURSOREM ── */
(function initCtaGlow() {
  const cta = document.querySelector('.nav-cta');
  if (!cta) return;
  cta.classList.add('wow-glow-ready');
  cta.addEventListener('mousemove', e => {
    const r = cta.getBoundingClientRect();
    cta.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    cta.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  });
})();

/* ── 4. THEME TOGGLE ──────────────────────────── */
(function initTheme() {
  const root = document.documentElement;
  if (localStorage.getItem('theme') === 'light') root.classList.add('light');

  document.getElementById('themeBtn')?.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
})();

/* ── 5. ANALYTICS + ADMIN SHORTCUT + SITE SETTINGS ─ */
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
        banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:999;padding:12px 20px;background:linear-gradient(90deg,rgba(125,255,212,.15),rgba(168,237,255,.12));border-top:1px solid rgba(125,255,212,.25);text-align:center;font-size:.9rem;backdrop-filter:blur(12px);';
        document.body.appendChild(banner);
      }
      const link = settings.promoLink ? `<a href="${settings.promoLink}" style="color:#7dffd4;margin-left:8px;">→</a>` : '';
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

/* ── 6. LANGUAGE TOGGLE ───────────────────────── */
(function initLang() {
  /* i18n.js must be loaded before main.js */
  if (!window.I18N) {
    console.warn('i18n.js not loaded');
    return;
  }

  const switchEl  = document.getElementById('langSwitch');
  const mobileSwitchEl = document.getElementById('langSwitchMobile');
  const indicator = switchEl?.querySelector('.lang-switch-indicator');
  const buttons   = switchEl ? Array.from(switchEl.querySelectorAll('.lang-switch-btn')) : [];
  const mobileButtons = mobileSwitchEl ? Array.from(mobileSwitchEl.querySelectorAll('.lang-switch-btn')) : [];
  const langs     = window.I18N.supportedLangs || ['pl', 'en', 'ua'];

  function moveIndicator(lang, animate) {
    if (!indicator) return;
    const idx = langs.indexOf(lang);
    if (idx === -1) return;

    if (!animate) {
      indicator.style.transition = 'none';
      indicator.style.transform = `translateX(${idx * 100}%)`;
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
    mobileButtons.forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  let lang = window.I18N.getLang();

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

  // Wire mobile buttons if present
  mobileButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.lang;
      if (next === lang) return;

      lang = next;
      localStorage.setItem('lang', lang);
      window.I18N.apply(lang);
      setActive(lang);
      // keep desktop indicator in sync if exists
      moveIndicator(lang, true);
      // close drawer if it's open
      const drawer = document.getElementById('drawer');
      if (drawer) drawer.classList.remove('open');
      const hamEl = document.getElementById('ham');
      if (hamEl) hamEl.classList.remove('open');
    });
  });

  document.addEventListener('i18n:changed', e => {
    const newLang = e.detail?.lang;
    if (!newLang || newLang === lang) return;
    lang = newLang;
    setActive(lang);
    moveIndicator(lang, true);
  });
})();

/* ── 7. NAVBAR SCROLL ─────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── 8. HAMBURGER MENU ────────────────────────── */
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

/* ── 9. SCROLL-REVEAL ─────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── 10. CANVAS — STAR FIELD + SHOOTING STARS ──── */
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

/* ── 11. GLASS CARD TILT ───────────────────────── */
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

/* ── 12. CONTACT FORM ─────────────────────────── */
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

/* ── 13. STACK PILL STAGGER ────────────────────── */
document.querySelectorAll('.stack-pill').forEach((p, i) => {
  p.style.transitionDelay = (i * 18) + 'ms';
});