(function () {
  const STORAGE_KEY = 'portfolio-theme';
  const root = document.documentElement;

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      return null;
    }
  }

  function setTheme(value) {
    root.setAttribute('data-theme', value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (_) {}
  }

  /** Hero: vertical viewport top → bottom of headline; horizontal at bottom of headline (left edge). */
  function updateHeroGuideLines() {
    var headline = document.querySelector('.hero__headline');
    var vLine = document.querySelector('.hero__center-line');
    var hLine = document.querySelector('.hero__title-h-line');
    if (!headline) return;

    var rect = headline.getBoundingClientRect();
    var left = Math.round(rect.left);
    var bottom = Math.round(rect.bottom) - 2;
    var vw = window.innerWidth || document.documentElement.clientWidth || 0;

    if (vLine) {
      vLine.style.top = '0px';
      vLine.style.left = left + 'px';
      vLine.style.height = Math.max(0, bottom) + 'px';
    }

    if (hLine) {
      hLine.style.left = left + 'px';
      hLine.style.top = bottom + 'px';
      hLine.style.width = Math.max(0, vw - left) + 'px';
    }
  }

  /** About: guides anchored to top of .cta__box; vertical runs to document bottom. */
  function updateAboutGuideLines() {
    var anchor = document.querySelector('.cta__box');
    var vLine = document.querySelector('.about__center-line');
    var hLine = document.querySelector('.about__title-h-line');
    if (!anchor) return;

    var rect = anchor.getBoundingClientRect();
    var left = Math.round(rect.left);
    var topPx = Math.round(rect.top);
    var vw = window.innerWidth || document.documentElement.clientWidth || 0;
    var docH =
      document.documentElement.scrollHeight ||
      document.body.scrollHeight ||
      0;
    var scrollY = window.scrollY || window.pageYOffset || 0;
    var docBottomInViewport = docH - scrollY;
    var verticalHeight = Math.max(0, docBottomInViewport - topPx);

    if (vLine) {
      vLine.style.left = left + 'px';
      vLine.style.top = topPx + 'px';
      vLine.style.height = verticalHeight + 'px';
    }

    if (hLine) {
      hLine.style.left = left + 'px';
      hLine.style.top = topPx + 'px';
      hLine.style.width = Math.max(0, vw - left) + 'px';
    }
  }

  function updateGuideLines() {
    updateHeroGuideLines();
    updateAboutGuideLines();
  }

  var guideLinesRaf = null;
  function scheduleGuideLines() {
    if (guideLinesRaf != null) return;
    guideLinesRaf = requestAnimationFrame(function () {
      guideLinesRaf = null;
      updateGuideLines();
    });
  }

  function init() {
    var stored = getStoredTheme();
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    }
    // else keep default (dark) from HTML

    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = root.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
        scheduleGuideLines();
      });
    }

    updateGuideLines();
    window.addEventListener('resize', scheduleGuideLines, { passive: true });
    window.addEventListener('scroll', scheduleGuideLines, { passive: true });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(scheduleGuideLines).catch(scheduleGuideLines);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
