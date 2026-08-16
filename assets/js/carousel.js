/* News bar carousel (homepage).
   Progressive enhancement: without JS the track is still a horizontally
   scrollable, swipeable list — this file only adds the prev/next buttons
   and the auto-advance. */
(function () {
  var AUTOPLAY_MS = 7000;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var track = root.querySelector('[data-carousel-track]');
    var slides = Array.prototype.slice.call(root.querySelectorAll('[data-carousel-slide]'));
    var prev = root.querySelector('[data-carousel-prev]');
    var next = root.querySelector('[data-carousel-next]');
    if (!track || slides.length < 2) return;

    root.classList.add('is-enhanced');

    var index = 0;
    var timer = null;

    function goTo(i, smooth) {
      index = (i + slides.length) % slides.length;
      track.scrollTo({
        left: slides[index].offsetLeft - track.offsetLeft,
        behavior: smooth === false || reduceMotion ? 'auto' : 'smooth'
      });
      sync();
    }

    function sync() {
      slides.forEach(function (slide, i) {
        // Off-screen slides stay out of the tab order so keyboard focus
        // can't scroll the track sideways behind the user's back.
        slide.toggleAttribute('inert', i !== index);
      });
    }

    // Keep state in sync when the user swipes or scrolls the track directly.
    var scrollTick;
    track.addEventListener('scroll', function () {
      window.clearTimeout(scrollTick);
      scrollTick = window.setTimeout(function () {
        var closest = 0;
        var best = Infinity;
        slides.forEach(function (slide, i) {
          var d = Math.abs(slide.offsetLeft - track.offsetLeft - track.scrollLeft);
          if (d < best) { best = d; closest = i; }
        });
        if (closest !== index) { index = closest; sync(); }
      }, 90);
    }, { passive: true });

    if (prev) prev.addEventListener('click', function () { stop(); goTo(index - 1); });
    if (next) next.addEventListener('click', function () { stop(); goTo(index + 1); });

    function start() {
      if (reduceMotion || timer) return;
      timer = window.setInterval(function () { goTo(index + 1); }, AUTOPLAY_MS);
    }

    function stop() {
      window.clearInterval(timer);
      timer = null;
    }

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { stop(); } else { start(); }
    });

    goTo(0, false);
    start();
  });
})();
