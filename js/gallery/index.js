import * as core from '../core';
let { isElementInViewport, isElementLoadable, throttle } = core.util.default;

!(function() {
  const gallery = document.getElementById('gallery');
  if (gallery) {

    const ImageLoader   = require( "properjs-imageloader" );
    const galleryImages = document.querySelectorAll(".gallery__item");
    const galleryVideo  = document.querySelector(".gallery__video");
    const galleryArray  = [...galleryImages];
    let ticking         = false;
    let i;

    window.setTimeout(function() {
      if (galleryVideo) {
        galleryVideo.classList.add('is-active');
      }
      galleryArray[0].classList.add('is-active');
      galleryArray[1].classList.add('is-active');
    }, 500);

    let imgLoader = new ImageLoader({
        elements: galleryArray,
        property: "data-img-src",
        executor: isElementLoadable
    });

    let update = function() {
      ticking = false;

      for (i = 0; i < galleryArray.length; i++) {
        if (isElementInViewport(galleryArray[i])) {
          galleryArray[i].classList.add('is-active');
        }
      }
    };

    let requestTick = function() {
      if (!ticking) {
        window.requestAnimationFrame(update);
      }
      ticking = true;
    };

    let onScroll = function() {
      requestTick();
    };

    window.addEventListener('scroll', throttle(onScroll, 100), false);
  }
})();
