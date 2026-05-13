/* ═══════════════════════════════════════════════
   PORTFOLIO · main.js
   Wymaga: i18n.js załadowanego PRZED tym plikiem,
   lub jako moduł. GitHub Pages: oba pliki w root.
═══════════════════════════════════════════════ */

/* ── 1. INJECT NAVBAR BUTTONS ────────────────────
   Wstrzykuje przyciski motywu i języka do navbara.
   Działa na każdej podstronie bo navbar jest wspólny.
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

  /* Lang toggle */
  const langBtn = document.createElement('button');
  langBtn.id = 'langBtn';
  langBtn.className = 'nav-icon-btn';
  langBtn.setAttribute('aria-label', 'Zmień język');
  langBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
    <span id="langLabel">EN</span>`;
  navInner.insertBefore(langBtn, ham);
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

/* ── 3. LANGUAGE TOGGLE ───────────────────────── */
(function initLang() {
  /* i18n.js must be loaded before main.js */
  if (!window.I18N) {
    console.warn('i18n.js not loaded');
    return;
  }

  let lang = window.I18N.getLang();

  function updateLabel() {
    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'pl' ? 'EN' : 'PL';
  }

  /* Apply on load if EN was saved */
  if (lang === 'en') {
    window.I18N.apply('en');
  }
  updateLabel();

  document.getElementById('langBtn')?.addEventListener('click', () => {
    lang = lang === 'pl' ? 'en' : 'pl';
    localStorage.setItem('lang', lang);
    window.I18N.apply(lang);
    updateLabel();
  });
})();

/* ── 4. NAVBAR SCROLL ─────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── 5. HAMBURGER MENU ────────────────────────── */
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

/* ── 6. SCROLL-REVEAL ─────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── 7. CANVAS — STAR FIELD + SHOOTING STARS ──── */
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

/* ── 8. GLASS CARD TILT ───────────────────────── */
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

/* ── 9. CONTACT FORM ─────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = form.querySelector('.form-status');
  const submitBtn = form.querySelector('button[type="submit"]');

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
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      if (data.success === 'true' || response.status === 200) {
        status.textContent = '✅ Wiadomość została wysłana. Dziękuję za kontakt!';
        status.classList.add('success', 'visible');
        status.classList.remove('error');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      status.textContent = '⚠️ Wystąpił błąd podczas wysyłania. Spróbuj jeszcze raz.';
      status.classList.add('error', 'visible');
      status.classList.remove('success');
      console.warn('Contact form error:', error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
})();

/* ── 10. STACK PILL STAGGER ────────────────────── */
document.querySelectorAll('.stack-pill').forEach((p, i) => {
  p.style.transitionDelay = (i * 18) + 'ms';
});