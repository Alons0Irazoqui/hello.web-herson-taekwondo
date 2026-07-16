/* Herson Taekwondo — interacciones de la landing page */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Loader ---------- */
  const MIN_LOADER_MS = 1400;
  const loadStart = Date.now();
  window.addEventListener('load', () => {
    const elapsed = Date.now() - loadStart;
    const wait = Math.max(0, MIN_LOADER_MS - elapsed);
    setTimeout(() => document.body.classList.add('loaded'), wait);
  });

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobMenu = document.getElementById('mob-menu');
  const toggleMenu = (open) => {
    const willOpen = open ?? !mobMenu.classList.contains('open');
    mobMenu.classList.toggle('open', willOpen);
    hamburger.classList.toggle('active', willOpen);
    hamburger.setAttribute('aria-expanded', String(willOpen));
    document.body.style.overflow = willOpen ? 'hidden' : '';
  };
  hamburger.addEventListener('click', () => toggleMenu());
  mobMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion) {
    revealEls.forEach((el) => el.classList.add('in-view'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Marquee content ---------- */
  const marquee = document.getElementById('marquee');
  if (marquee) {
    const words = [
      'HERSON TAEKWONDO', '태권도', 'DISCIPLINA', 'RESPETO', 'PERSEVERANCIA',
      'AUTOCONTROL', 'ESPÍRITU INDOMABLE', 'CORTESÍA', 'WORLD TAEKWONDO',
    ];
    const buildTrack = () => words.map((w) => `<span class="marquee-item">${w}</span>`).join('');
    marquee.innerHTML = buildTrack() + buildTrack();
  }

  /* ---------- Hero title: typewriter + shimmer ---------- */
  const heroLines = document.querySelectorAll('.hero-title .line > span');
  if (heroLines.length && !reduceMotion) {
    const originals = Array.from(heroLines).map((el) => el.textContent);
    heroLines.forEach((el) => { el.textContent = ''; });

    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.innerHTML = '&nbsp;';

    let lineIndex = 0;
    let charIndex = 0;

    const typeNext = () => {
      if (lineIndex >= heroLines.length) { cursor.remove(); return; }
      const el = heroLines[lineIndex];
      const text = originals[lineIndex];

      if (charIndex === 0) {
        el.classList.add('typed');
        el.after(cursor);
      }

      if (charIndex < text.length) {
        el.textContent = text.slice(0, charIndex + 1);
        el.after(cursor);
        charIndex += 1;
        setTimeout(typeNext, 46);
      } else {
        lineIndex += 1;
        charIndex = 0;
        setTimeout(typeNext, 220);
      }
    };
    setTimeout(typeNext, 500);
  } else {
    heroLines.forEach((el) => el.classList.add('typed'));
  }

  /* ---------- Stat counters ---------- */
  const statEls = document.querySelectorAll('.stat-num[data-count]');
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (statEls.length) {
    if (reduceMotion) {
      statEls.forEach((el) => { el.textContent = el.dataset.count + (el.dataset.suffix || ''); });
    } else {
      const statObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              statObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      statEls.forEach((el) => statObserver.observe(el));
    }
  }

  /* ---------- Hero particles ---------- */
  const canvas = document.getElementById('hero-canvas');
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    const hero = document.getElementById('hero');
    let particles = [];

    const resize = () => {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
      const count = Math.round((canvas.width * canvas.height) / 26000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        a: Math.random() * 0.35 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 185, 44, ${p.a})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(draw);
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Contact form → Instagram DM ---------- */
  const form = document.getElementById('ig-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      window.open('https://ig.me/m/academia.herson', '_blank', 'noopener');
    });
  }
})();
