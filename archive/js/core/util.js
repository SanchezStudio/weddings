const isElementLoadable = function ( el ) {
  if ( el ) {
    const bounds = el.getBoundingClientRect();
    return ( bounds.top < (window.innerHeight * 2) );
  }
};

const isElementInViewport = function ( el ) {
  if ( el ) {
    const bounds = el.getBoundingClientRect();

    return ( bounds.top < (window.innerHeight / 1.5) && bounds.bottom > 0 );
  }
};

const throttle = function( func, wait, options ) {
  var timeout, context, args, result;
  var previous = 0;
  var now = Date.now || function() {
    return new Date().getTime();
  };
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var now = Date.now || function() {
      return new Date().getTime();
    };
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
};

export default {
  isElementLoadable,
  isElementInViewport,
  throttle
};
