import $ from 'properjs-hobo';

!(function() {
  const home = document.getElementById('home');

  if (home) {
    let home = $('#home');
    let html = document.documentElement;
    let splash = $('.splash');
    let splashHeight = splash[0].clientHeight;
    let link = $('.splash__caret');
    let latestKnownScroll = 0;
    let ticking = false;

    html.classList.add('nav-is-white');

    let onClick = function(e) {
      e.preventDefault();
      home[0].scrollIntoView({ behavior: 'smooth' });
    }

    function onScroll() {
      latestKnownScroll = window.scrollY;
      requestTick();
    }

    function requestTick() {
      if (!ticking) {
        window.requestAnimationFrame(update);
      }
      ticking = true;
    }

    function update() {
      ticking = false;

      if (latestKnownScroll >= splashHeight - 50) {
        html.classList.remove('nav-is-white');
      } else {
        html.classList.add('nav-is-white');
      }
    }

    link[0].addEventListener("click", onClick, false);
    window.addEventListener('scroll', onScroll, false);
  }

})();
