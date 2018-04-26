import * as core from '../core';
let { isElementInViewport, isElementLoadable, throttle } = core.util.default;

!(function() {
  const gallery = document.getElementById('gallery');
  if (gallery) {

    const ImageLoader   = require( "properjs-imageloader" );
    const galleryItems = document.querySelectorAll(".gallery__item");
    const galleryItemsArray  = [...galleryItems];
    const galleryImages = document.querySelectorAll(".gallery__image");
    const galleryImagesArray = [...galleryImages]
    const galleryVideo  = document.querySelector(".gallery__video");
    let ticking         = false;
    let i;

    let imageOrientation = function(image) {
      if (image.clientWidth > image.clientHeight) {
        image.classList.add("gallery__item--landscape");
      } else {
        image.classList.add("gallery__item--portrait");
      }
    }

    // for (var i = 0; i < galleryItemsArray.length; i++) {
    //   imageOrientation(galleryItemsArray[i]);
    // }

    window.setTimeout(function() {
      if (galleryVideo) {
        galleryVideo.classList.add('is-active');
      }
      galleryItemsArray[0].classList.add('is-active');
      galleryItemsArray[1].classList.add('is-active');
    }, 500);

    let imgLoader = new ImageLoader({
        elements: galleryImagesArray,
        property: "data-img-src",
        executor: isElementLoadable
    });

    let update = function() {
      ticking = false;

      for (i = 0; i < galleryItemsArray.length; i++) {
        if (isElementInViewport(galleryItemsArray[i])) {
          galleryItemsArray[i].classList.add('is-active');
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
