/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(10);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(13);

var _About2 = _interopRequireDefault(_About);

var _Investment = __webpack_require__(14);

var _Investment2 = _interopRequireDefault(_Investment);

var _Gallery = __webpack_require__(15);

var _Gallery2 = _interopRequireDefault(_Gallery);

var _api = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: '/',
  exact: true,
  component: _Home2.default
}, {
  path: '/about',
  exact: true,
  component: _About2.default
}, {
  path: '/investment',
  exact: true,
  component: _Investment2.default
}, {
  path: '/gallery/:id',
  component: _Gallery2.default,
  fetchInitialData: function fetchInitialData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _api.fetchGalleries)(path.split('/').pop());
  }
}];

exports.default = routes;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(6);

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(2);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _serializeJavascript = __webpack_require__(8);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _App = __webpack_require__(9);

var _App2 = _interopRequireDefault(_App);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.static("public"));

app.get("*", function (req, res, next) {
  var activeRoute = _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};

  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();

  promise.then(function (data) {
    var context = { data: data };

    var markup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_App2.default, null)
    ));
    var helmet = _reactHelmet2.default.renderStatic();

    res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          " + helmet.title.toString() + "\n          " + helmet.meta.toString() + "\n          <link rel=\"stylesheet\" type=\"text/css\" href=\"/main.css\">\n          <script src=\"/bundle.js\" defer></script>\n          <script>window.__INITIAL_DATA__ = " + (0, _serializeJavascript2.default)(data) + "</script>\n          <script>\n            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n            ga('create', 'UA-86423768-1', 'auto');\n            ga('send', 'pageview');\n          </script>\n          <!-- Facebook Pixel Code -->\n          <script>\n            !function(f,b,e,v,n,t,s)\n            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n            n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n            n.queue=[];t=b.createElement(e);t.async=!0;\n            t.src=v;s=b.getElementsByTagName(e)[0];\n            s.parentNode.insertBefore(t,s)}(window, document,'script',\n            'https://connect.facebook.net/en_US/fbevents.js');\n            fbq('init', '176246109865454');\n            fbq('track', 'PageView');\n          </script>\n          <noscript><img height=\"1\" width=\"1\" style=\"display:none\"\n            src=\"https://www.facebook.com/tr?id=176246109865454&ev=PageView&noscript=1\"\n          /></noscript>\n          <!-- End Facebook Pixel Code -->\n        </head>\n\n        <body>\n          <div id=\"app\">" + markup + "</div>\n        </body>\n      </html>\n    ");
  }).catch(next);
});

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(2);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Nav = __webpack_require__(24);

var _Nav2 = _interopRequireDefault(_Nav);

var _NoMatch = __webpack_require__(26);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet2.default,
          null,
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' }),
          _react2.default.createElement(
            'title',
            null,
            'SS Weddings'
          )
        ),
        _react2.default.createElement(_Nav2.default, null),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _routes2.default.map(function (_ref) {
            var path = _ref.path,
                exact = _ref.exact,
                Component = _ref.component,
                rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);

            return _react2.default.createElement(_reactRouterDom.Route, { key: path, path: path, exact: exact, render: function render(props) {
                return _react2.default.createElement(Component, _extends({}, props, rest));
              } });
          }),
          _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
              return _react2.default.createElement(_NoMatch2.default, props);
            } })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouterDom = __webpack_require__(2);

var _Splash = __webpack_require__(11);

var _Splash2 = _interopRequireDefault(_Splash);

var _couples = __webpack_require__(12);

var _couples2 = _interopRequireDefault(_couples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var couples = _couples2.default.couples;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Welcome'
          )
        ),
        _react2.default.createElement(_Splash2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'home', className: 'header header--home' },
          _react2.default.createElement(
            'h1',
            null,
            'Stories'
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'home' },
          couples.map(function (couple, index) {
            return _react2.default.createElement(
              _reactRouterDom.NavLink,
              { key: couple.slug + '-' + index, className: 'home__item', to: '/gallery/' + couple.slug },
              _react2.default.createElement('div', { className: 'home__img', style: { "backgroundImage": 'url(https://weddings.nyc3.digitaloceanspaces.com/data/galleries/' + couple.slug + '/images/thumbnail.jpg)' } }),
              _react2.default.createElement(
                'h4',
                { className: 'home__title' },
                couple.title
              )
            );
          })
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Splash = function (_Component) {
  _inherits(Splash, _Component);

  function Splash() {
    _classCallCheck(this, Splash);

    return _possibleConstructorReturn(this, (Splash.__proto__ || Object.getPrototypeOf(Splash)).apply(this, arguments));
  }

  _createClass(Splash, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "splash" },
        _react2.default.createElement("div", { className: "splash__logo" }),
        _react2.default.createElement(
          "video",
          { poster: "https://weddings.nyc3.digitaloceanspaces.com/images/video/reel.jpg", className: "splash__video", playsInline: true, muted: true, loop: true, autoPlay: true },
          _react2.default.createElement("source", { src: "https://weddings.nyc3.digitaloceanspaces.com/images/video/reel.mp4" }),
          _react2.default.createElement("source", { src: "https://weddings.nyc3.digitaloceanspaces.com/images/video/reel.webm" })
        ),
        _react2.default.createElement("a", { href: "#welcome", className: "splash__caret" })
      );
    }
  }]);

  return Splash;
}(_react.Component);

exports.default = Splash;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"couples":[{"slug":"kya-and-mike","title":"Kya & Mike","categories":["all","photography","video"]},{"slug":"keren-and-matt","title":"Keren & Matt","categories":["all","video"]},{"slug":"meredith-and-dale","title":"Meredith & Dale","categories":["all","video"]},{"slug":"michelle-and-steve","title":"Michelle & Steve","categories":["all","photography"]},{"slug":"jessie-and-josh","title":"Jessie & Josh","categories":["all","photography"]},{"slug":"michelle-and-mark","title":"Michelle & Mark","categories":["all","photography","video"]},{"slug":"anna-and-derek","title":"Anna & Derek","categories":["all","photography"]},{"slug":"ali-and-eddy","title":"Ali & Eddy","categories":["all","photography"]},{"slug":"jen-and-zach","title":"Jen & Zach","categories":["all","photography"]},{"slug":"brittany-and-dez","title":"Brittany & Dez","categories":["all","photography"]},{"slug":"tiffany-and-john","title":"Tiffany & John","categories":["all","photography","video"]},{"slug":"lacy-and-corwin","title":"Lacy & Corwin","categories":["all","photography","video"]},{"slug":"kendall-and-caleb","title":"Kendall & Caleb","categories":["all","video"]},{"slug":"malisa-and-taylor","title":"Malisa & Taylor","categories":["all","photography"]},{"slug":"andy-and-hillary","title":"Andy & Hillary","categories":["all","photography"]},{"slug":"kelsey-and-luke","title":"Kelsey & Luke","categories":["all","photography"]},{"slug":"kelbe-and-kyle","title":"Kelbe & Kyle","categories":["all","photography"]},{"slug":"morgan-and-steve","title":"Morgan & Steve","categories":["all","photography"]},{"slug":"amy-and-nick","title":"Amy & Nick","categories":["all","video"]},{"slug":"miriam-and-brittan","title":"Miriam & Brittan","categories":["all","video"]}]}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            'About Us'
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'about', className: 'about' },
          _react2.default.createElement(
            'div',
            { className: 'about__item about__item--image' },
            _react2.default.createElement('div', { className: 'about__image-inner' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'about__item about__item--blurb' },
            _react2.default.createElement(
              'h2',
              null,
              'Sanchez Studio'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Hey! We\'re Meg & Caleb, and we want to tell your story. We have been shooting weddings and portraits together in and around the midwest since 2011, with a short stint in Salt Lake City.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Our goal as visual storytellers is to capture your day with stunning, emotional, and beautiful imagery. We want to provide you with stellar content that you will cherish forever, all while making sure you stay stress free.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We know what goes into planning a wedding and we want to make sure that hiring a photographer/videographer is the easiest part. We want to give you quality memories of the day you spent months planning without feeling like you have to take out a loan to pay for them.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'So reach out. Email, telegram, raven, whatever.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We\'re excited to chat.'
            ),
            _react2.default.createElement(
              'a',
              { className: 'btn', href: '/contact' },
              'Contact Us'
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Investment = function (_Component) {
  _inherits(Investment, _Component);

  function Investment() {
    _classCallCheck(this, Investment);

    return _possibleConstructorReturn(this, (Investment.__proto__ || Object.getPrototypeOf(Investment)).apply(this, arguments));
  }

  _createClass(Investment, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactHelmet2.default,
          null,
          _react2.default.createElement(
            "title",
            null,
            "Investment"
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "investments", id: "investments" },
          _react2.default.createElement(
            "h1",
            null,
            "Pricing"
          ),
          _react2.default.createElement(
            "p",
            null,
            "If you're looking for a ride or die photo/video team you've come to right dang place."
          ),
          _react2.default.createElement(
            "p",
            null,
            "Days, weeks, and months after the vows are made, the cake is cut, and you've danced your ass off to the greatest hits; you will be able to remember all of the most beautiful memories from your wedding day. Not because you asked your uncle Bill to set up his camera/camcorder in the back, but because you invested in two people that had your future friends and family in mind throughout one of the biggest days of your life."
          ),
          _react2.default.createElement(
            "p",
            null,
            "We're not just giving you digital files created by 1's and 0's, we're adding you to the squad. We'll be your open ear and your shoulder to lean on from day one. There to answer questions, keep the timeline, and get that stupid hair that always flies up to behave. Consider us the two extra guests you never knew you wanted and we'll make sure your investment doesn't go to waste."
          ),
          _react2.default.createElement(
            "p",
            { className: "price" },
            "Photo & video packages start at $2500."
          ),
          _react2.default.createElement(
            "p",
            { className: "hesitate" },
            "Please ",
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: "/contact" },
              "contact us"
            ),
            " for our detailed pricing info.",
            _react2.default.createElement("br", null),
            "We're in the business of telling stories, and we would love to get the chance to tell yours."
          )
        )
      );
    }
  }]);

  return Investment;
}(_react.Component);

exports.default = Investment;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Media = __webpack_require__(16);

var _Media2 = _interopRequireDefault(_Media);

var _Categories = __webpack_require__(20);

var _Categories2 = _interopRequireDefault(_Categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    var gallery = void 0;
    if (false) {
      gallery = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      gallery = props.staticContext.data;
    }

    _this.state = {
      gallery: gallery,
      activeCategoryIndex: 0,
      activeCategory: gallery ? gallery.categories[0] : "",
      loading: gallery ? false : true
    };

    _this.fetchGalleries = _this.fetchGalleries.bind(_this);
    _this.handleSetActiveCategoryIndex = _this.handleSetActiveCategoryIndex.bind(_this);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.state.gallery) {
        this.fetchGalleries(this.props.match.params.id);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.fetchGalleries(this.props.match.params.id);
      }
    }
  }, {
    key: 'fetchGalleries',
    value: function fetchGalleries(slug) {
      var _this2 = this;

      this.setState(function () {
        return { loading: true };
      });

      this.props.fetchInitialData(slug).then(function (gallery) {
        return _this2.setState(function () {
          return {
            gallery: gallery,
            activeCategory: gallery.categories[0],
            loading: false
          };
        });
      });
    }
  }, {
    key: 'handleSetActiveCategoryIndex',
    value: function handleSetActiveCategoryIndex(category, index) {
      // http://stackoverflow.com/questions/40792164/change-active-element-in-a-list-using-react
      this.setState({
        activeCategoryIndex: index,
        activeCategory: category
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          gallery = _state.gallery;


      if (loading === true) {
        return _react2.default.createElement(
          'h1',
          null,
          'Loading'
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            gallery.title
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'header' },
          _react2.default.createElement(
            'h1',
            null,
            gallery.title
          ),
          _react2.default.createElement(
            'p',
            null,
            gallery.description
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'gallery', className: 'gallery' },
          _react2.default.createElement(_Categories2.default, { categories: this.state.gallery.categories, activeIndex: this.state.activeCategoryIndex, activeCategory: this.state.activeCategory, handleSetActiveCategoryIndex: this.handleSetActiveCategoryIndex }),
          _react2.default.createElement(_Media2.default, _extends({ component: this.state.activeCategory }, this.state.gallery))
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Video = __webpack_require__(17);

var _Video2 = _interopRequireDefault(_Video);

var _Images = __webpack_require__(18);

var _Images2 = _interopRequireDefault(_Images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Media = function (_Component) {
  _inherits(Media, _Component);

  function Media() {
    _classCallCheck(this, Media);

    return _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).apply(this, arguments));
  }

  _createClass(Media, [{
    key: 'render',
    value: function render() {
      var component = this.props.component;

      console.log(this.props);

      if (this.props.component === "video") {
        return _react2.default.createElement(_Video2.default, { url: this.props.video_url });
      } else {
        return _react2.default.createElement(_Images2.default, { images: this.props[component + '_images'] });
      }
    }
  }]);

  return Media;
}(_react.Component);

exports.default = Media;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = function (_Component) {
  _inherits(Video, _Component);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  _createClass(Video, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "gallery__video" },
        _react2.default.createElement("div", { className: "gallery__video-inner", dangerouslySetInnerHTML: { __html: "<iframe src=\"https://player.vimeo.com/video/" + this.props.url + "?title=0&byline=0&portrait=0\" width=\"640\" height=\"360\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>" } })
      );
    }
  }]);

  return Video;
}(_react.Component);

exports.default = Video;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactLazyload = __webpack_require__(19);

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Images = function (_Component) {
  _inherits(Images, _Component);

  function Images(props) {
    _classCallCheck(this, Images);

    var _this = _possibleConstructorReturn(this, (Images.__proto__ || Object.getPrototypeOf(Images)).call(this, props));

    _this.handleHeight = _this.handleHeight.bind(_this);
    return _this;
  }

  _createClass(Images, [{
    key: 'handleHeight',
    value: function handleHeight(orientation) {
      if (orientation === 'portrait' || 'portrait--full') {
        return 2000;
      } else {
        return 1333;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        this.props.images.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { key: item.title + '-' + index, className: 'gallery__item gallery__item--' + item.orientation },
            _react2.default.createElement(
              'div',
              { className: 'gallery__inner' },
              _react2.default.createElement(
                _reactLazyload2.default,
                { once: true, height: _this2.handleHeight(item.orientation) },
                _react2.default.createElement('img', { src: item.url, alt: item.title, className: 'gallery__image' })
              )
            )
          );
        })
      );
    }
  }]);

  return Images;
}(_react.Component);

exports.default = Images;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Category = __webpack_require__(21);

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Categories = function (_Component) {
  _inherits(Categories, _Component);

  function Categories() {
    _classCallCheck(this, Categories);

    return _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).apply(this, arguments));
  }

  _createClass(Categories, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'categories' },
        this.props.categories.map(function (category, index) {
          var className = _this2.props.activeCategoryIndex === index ? "categories__item categories__item--active" : "categories__item";
          return _react2.default.createElement(_Category2.default, {
            key: 'category-' + index,
            setActiveCategory: _this2.props.handleSetActiveCategoryIndex,
            className: className,
            index: index,
            item: category
          });
        })
      );
    }
  }]);

  return Categories;
}(_react.Component);

exports.default = Categories;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    return _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).apply(this, arguments));
  }

  _createClass(Category, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          index = _props.index,
          setActiveCategory = _props.setActiveCategory,
          item = _props.item;

      return _react2.default.createElement(
        "div",
        { className: className, onClick: function onClick(event) {
            setActiveCategory(item, index);
          } },
        _react2.default.createElement(
          "h4",
          null,
          item,
          _react2.default.createElement(
            "span",
            null,
            "\u2022"
          )
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchGalleries = fetchGalleries;

var _isomorphicFetch = __webpack_require__(23);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchGalleries(slug) {
  var encodedURI = encodeURI('https://weddings.nyc3.digitaloceanspaces.com/data/galleries/' + slug + '/index.json');

  return (0, _isomorphicFetch2.default)(encodedURI).then(function (data) {
    return data.json();
  }).catch(function (error) {
    console.warn(error);
    return null;
  });
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _classnames = __webpack_require__(25);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var navigation = [{
  title: "Stories",
  link: "/#home"
}, {
  title: "About",
  link: "/about"
}, {
  title: "Investment",
  link: "/investment"
}, {
  title: "Contact",
  link: "/contact"
}];

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    _this.state = {
      isNavOpen: false
    };

    _this.navToggle = _this.navToggle.bind(_this);
    return _this;
  }

  _createClass(Nav, [{
    key: 'navToggle',
    value: function navToggle(e) {
      if (e.currentTarget.className === "nav__toggle") {
        e.preventDefault();
      }
      this.setState({ isNavOpen: !this.state.isNavOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var headerClass = (0, _classnames2.default)({
        'nav-header': true,
        'is-menu-open': this.state.isNavOpen
      });
      return _react2.default.createElement(
        'header',
        { className: headerClass },
        _react2.default.createElement(
          'h1',
          { className: 'nav-title' },
          _react2.default.createElement('a', { href: '', className: 'nav-logo' })
        ),
        _react2.default.createElement(
          'nav',
          { className: 'nav' },
          _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick(e) {
                _this2.navToggle(e);
              }, className: 'nav__toggle' },
            _react2.default.createElement('span', { className: 'nav__toggle__burger' })
          ),
          _react2.default.createElement(
            'ul',
            { className: 'nav__menu' },
            navigation.map(function (item, index) {
              return _react2.default.createElement(
                'li',
                { key: item.title + '-' + index, className: 'nav__item' },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  { className: 'nav__link', onClick: function onClick(e) {
                      _this2.navToggle(e);
                    }, to: item.link },
                  item.title
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoMatch = function (_Component) {
  _inherits(NoMatch, _Component);

  function NoMatch() {
    _classCallCheck(this, NoMatch);

    return _possibleConstructorReturn(this, (NoMatch.__proto__ || Object.getPrototypeOf(NoMatch)).apply(this, arguments));
  }

  _createClass(NoMatch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Four Oh Four'
      );
    }
  }]);

  return NoMatch;
}(_react.Component);

exports.default = NoMatch;

/***/ })
/******/ ]);