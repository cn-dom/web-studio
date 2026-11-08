(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }

  const initMotion = () => {
    if (!window.gsap || !window.ScrollTrigger || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-content > *', {
      y: 24,
      opacity: 0,
      duration: 0.9,
      stagger: 0.13,
      ease: 'power3.out',
      clearProps: 'all'
    });

    gsap.utils.toArray('.featured-story-card, .today-inner, .topic-grid > a, .latest-card').forEach((element) => {
      gsap.from(element, {
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true }
      });
    });

    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      gsap.to(heroImage, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMotion, { once: true });
  } else {
    initMotion();
  }
})();
