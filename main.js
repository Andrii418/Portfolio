/* ═══════════════════════════════════════════════
   PORTFOLIO · main.js
═══════════════════════════════════════════════ */

/* ── 1. NAVBAR SCROLL STATE ───────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── 2. HAMBURGER MENU ────────────────────────── */
const ham     = document.getElementById('ham');
const drawer  = document.getElementById('drawer');

ham.addEventListener('click', () => {
  const isOpen = drawer.classList.toggle('open');
  ham.classList.toggle('open', isOpen);
  ham.setAttribute('aria-expanded', isOpen);
});

/* close drawer when link clicked */
drawer.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('open');
    ham.classList.remove('open');
  });
});

/* ── 3. SCROLL-REVEAL ─────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObs.observe(el));

/* ── 4. CANVAS PARTICLE BACKGROUND ───────────────
   Subtle floating particles that react slightly
   to mouse movement.
─────────────────────────────────────────────── */
(function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, mouse = { x: 0, y: 0 };

  const COLORS = [
    'rgba(79,142,247,',   // blue
    'rgba(139,92,246,',   // violet
    'rgba(34,211,238,',   // cyan
    'rgba(236,72,153,',   // pink
  ];

  const PARTICLE_COUNT = 55;
  let particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  function makeParticle() {
    return {
      x:    Math.random() * (W || window.innerWidth),
      y:    Math.random() * (H || window.innerHeight),
      r:    1.2 + Math.random() * 2.2,
      vx:   (Math.random() - .5) * .35,
      vy:   (Math.random() - .5) * .35,
      a:    .18 + Math.random() * .25,
      color: randomColor(),
      phase: Math.random() * Math.PI * 2,
      speed: .004 + Math.random() * .006,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const t = performance.now() / 1000;

    particles.forEach(p => {
      /* gentle mouse attraction */
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 280) {
        p.vx += (dx / dist) * .008;
        p.vy += (dy / dist) * .008;
      }

      /* dampen velocity */
      p.vx *= .98;
      p.vy *= .98;

      p.x += p.vx;
      p.y += p.vy;

      /* wrap edges */
      if (p.x < -20)  p.x = W + 20;
      if (p.x > W+20) p.x = -20;
      if (p.y < -20)  p.y = H + 20;
      if (p.y > H+20) p.y = -20;

      /* breathing opacity */
      const alpha = p.a * (.6 + .4 * Math.sin(t * p.speed * 60 + p.phase));

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + alpha + ')';
      ctx.fill();
    });

    /* draw faint connecting lines between close particles */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 130) {
          const lineAlpha = (1 - d / 130) * .07;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(79,142,247,${lineAlpha})`;
          ctx.lineWidth   = .6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  init();
  draw();
})();

/* ── 5. GLASS CARD TILT on hover ─────────────── */
(function cardTilt() {
  const card = document.querySelector('.glass-card');
  if (!card) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const dx   = (e.clientX - cx) / (rect.width  / 2);
    const dy   = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `perspective(700px) rotateY(${dx * 8}deg) rotateX(${-dy * 6}deg) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
})();