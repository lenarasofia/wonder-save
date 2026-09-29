/* =========================================
   Wonder Save — Scripts
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── Header scroll effect ──
  const header = document.getElementById('header');

  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial check

  // ── Active nav link based on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const updateActiveLink = () => {
    const scrollY = window.scrollY + 150;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ── Mobile nav toggle ──
  const navToggle = document.getElementById('nav-toggle');
  const navOverlay = document.getElementById('nav-overlay');
  const navClose = document.getElementById('nav-close');
  const overlayLinks = document.querySelectorAll('.nav-overlay__link, .nav-overlay .btn');

  if (navToggle && navOverlay) {
    navToggle.addEventListener('click', () => {
      navOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    navClose.addEventListener('click', () => {
      navOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });

    overlayLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Scroll-triggered animations (Intersection Observer) ──
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all immediately
    animatedElements.forEach((el) => el.classList.add('visible'));
  }

  // ── Staggered animation for grid items ──
  const grids = document.querySelectorAll(
    '.quick-links__grid, .tipos__grid, .sinais__list, .direitos__grid, .impacto__cards, .steps'
  );

  grids.forEach((grid) => {
    const items = grid.querySelectorAll('.animate-on-scroll');
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 100}ms`;
    });
  });

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── Parallax effect on hero background ──
  const heroBg = document.querySelector('.hero__bg img');

  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`;
      }
    }, { passive: true });
  }

  // ── Counter animation for stats ──
  const stats = document.querySelectorAll('.stat__number');

  const animateCounter = (el) => {
    const text = el.textContent.trim();
    // Check if it's a fraction like "1 em 3"
    if (text.includes('em')) {
      return; // Keep as is
    }

    const isPercentage = text.includes('%');
    const target = parseInt(text.replace(/[^0-9]/g, ''), 10);

    if (isNaN(target)) return;

    let current = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    el.textContent = '0' + (isPercentage ? '%' : '');

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.round(current) + (isPercentage ? '%' : '');
    }, stepTime);
  };

  if ('IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    stats.forEach((stat) => statsObserver.observe(stat));
  }

  // ── Subtle mouse-move glow on quick-cards ──
  const quickCards = document.querySelectorAll('.quick-card');

  quickCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.background = `radial-gradient(circle 200px at ${x}px ${y}px, rgba(138,92,246,0.08), var(--clr-surface))`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });

});
