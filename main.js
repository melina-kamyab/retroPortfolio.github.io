(() => {
  const section = document.querySelector('.selected-work');
  const viewport = document.querySelector('.selected-work__viewport');
  const track = document.querySelector('.selected-work__track');

  if (!section || !viewport || !track) return;

  const desktopMotion = window.matchMedia(
    '(min-width: 761px) and (prefers-reduced-motion: no-preference)'
  );
  let travel = 0;
  let frame = 0;

  const updatePosition = () => {
    frame = 0;
    if (!desktopMotion.matches || travel <= 0) {
      track.style.transform = '';
      return;
    }

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const progress = Math.min(1, Math.max(0, (window.scrollY - sectionTop) / travel));
    track.style.transform = `translate3d(${-travel * progress}px, 0, 0)`;
  };

  const scheduleUpdate = () => {
    if (!frame) frame = window.requestAnimationFrame(updatePosition);
  };

  const measure = () => {
    if (desktopMotion.matches) {
      viewport.scrollLeft = 0;
      travel = Math.max(0, track.scrollWidth - viewport.clientWidth);
      section.style.setProperty('--gallery-distance', `${travel}px`);
      section.style.height = `calc(100svh + ${travel}px)`;
    } else {
      travel = 0;
      section.style.removeProperty('--gallery-distance');
      section.style.removeProperty('height');
      track.style.transform = '';
    }
    scheduleUpdate();
  };

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', measure);
  desktopMotion.addEventListener('change', measure);
  window.addEventListener('load', measure, { once: true });

  if ('ResizeObserver' in window) {
    new ResizeObserver(measure).observe(viewport);
  }

  measure();
})();