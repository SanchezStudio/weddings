/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./navigation/index.js */ 1);
	
	__webpack_require__(/*! ./gallery/index.js */ 17);
	
	__webpack_require__(/*! ./contact/index.js */ 20);

/***/ },
/* 1 */
/*!********************************!*\
  !*** ./js/navigation/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	var _Menu = __webpack_require__(/*! ../Menu */ 13);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	
	  var nav = new _Menu2.default((0, _properjsHobo2.default)(".nav"));
	  var toggle = (0, _properjsHobo2.default)(".nav__toggle");
	
	  var onClick = function onClick(e) {
	    e.preventDefault();
	    nav.toggle();
	  };
	
	  toggle[0].addEventListener("click", onClick, false);
	})();

/***/ },
/* 2 */
/*!*********************************!*\
  !*** ./~/properjs-hobo/hobo.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 *
	 * @method hobo
	 * @author kitajchuk
	 * @hobo-dist npm run build
	 *
	 * @links
	 * https://developer.mozilla.org/en-US/docs/Web/API/Node
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element
	 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	 * https://github.com/jakearchibald/es6-promise
	 * http://www.html5rocks.com/en/tutorials/es6/promises/
	 *
	 *
	 */
	(function ( factory ) {
	
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.hobo = factory();
	    }
	
	})(function () {
	
	    var Hobo = __webpack_require__( /*! ./lib/Hobo */ 3 ),
	        utils = __webpack_require__( /*! ./lib/utils */ 4 );
	
	
	    // Core Hobo methods:
	    Hobo.prototype.on = __webpack_require__( /*! ./lib/core/on */ 5 );
	    Hobo.prototype.off = __webpack_require__( /*! ./lib/core/off */ 7 );
	    Hobo.prototype.data = __webpack_require__( /*! ./lib/core/data */ 8 );
	    Hobo.prototype.find = __webpack_require__( /*! ./lib/core/find */ 9 );
	    Hobo.prototype.addClass = __webpack_require__( /*! ./lib/core/addClass */ 10 );
	    Hobo.prototype.removeClass = __webpack_require__( /*! ./lib/core/removeClass */ 11 );
	
	
	    // Extended Hobo methods:
	    // @hobo-ext
	
	
	    /**
	     *
	     * @public
	     * @method hobo
	     * @description Wrapper for `Hobo` instances.
	     * @param {string} selector The parameter passed to `querySelectorAll`
	     * @param {element} context The Element used to call `querySelectorAll`
	     *
	     */
	    hobo = function ( selector, context ) {
	        return new Hobo( selector, context );
	    };
	
	
	    // Attach Hobo utilities to `wrapper` method
	    hobo.ajax = __webpack_require__( /*! ./lib/core/ajax */ 12 );
	
	
	    return hobo;
	
	});

/***/ },
/* 3 */
/*!*************************************!*\
  !*** ./~/properjs-hobo/lib/Hobo.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * 
	 * @Hobo
	 * @author: kitajchuk
	 *
	 *
	 */
	var utils = __webpack_require__( /*! ./utils */ 4 ),
	    array = [];
	
	
	/**
	 *
	 * @class Hobo
	 * @classdesc A very small, modular DOM utility for modern web apps.
	 * @param {string} selector The goods - String, Element, Collection.
	 * @param {element} context The Element used to call `querySelectorAll`
	 *
	 */
	var Hobo = function ( selector, context ) {
	    // Hobo version?
	    this._hobo = utils.version;
	
	    // Hobo context
	    this._context = (context && context.nodeType && context.nodeType === 1 ? context : document);
	
	    // Hobo selector / elements
	    // Hobo supports a mixed selector argument
	
	    // Handle Window
	    // Handle Document
	    // Handle DOMElement
	    if ( selector === window || selector === document || (selector.nodeType && selector.nodeType === 1) ) {
	        this._selector = "";
	        selector = [ selector ];
	
	    // Handle String
	    } else if ( typeof selector === "string" ) {
	        // Trim trailing whitespace from the string
	        selector = utils.trimString( selector );
	
	        // Handle string html => Element creation
	        if ( utils.rTag.test( selector ) ) {
	            // Then remove the doctype - `<!DOCTYPE html>`
	            selector = selector.replace( utils.rDocType, "" );
	
	            // Create a dummy `hobo` element
	            // Dump the HTML payload in the `hobo` element
	            // Extract the elements from the `hobo` element
	            var el = document.createElement( "hobo" );
	                el.innerHTML = selector;
	
	            // Format elements as a true Array
	            selector = utils.makeArray( el.children );
	
	            el = null;
	
	        // Handle string selector
	        } else {
	            this._selector = selector;
	            selector = utils.makeArray( this._context.querySelectorAll( selector ) );
	        }
	
	    // Handle Collection: NodeList, HTMLCollection, Array
	    } else if ( selector.length !== undefined ) {
	        this._selector = "";
	        selector = utils.makeArray( selector );
	    }
	
	    // Hobo events?
	    this._events = {};
	
	    // Hobo length?
	    this.length = selector.length;
	
	    // Hobo elements?
	    for ( var i = this.length; i--; ) {
	        this[ i ] = selector[ i ];
	    }
	
	    // Initial mapping of each nodes data.
	    // Transfer {DOMStringMap} => {hoboDataMap}
	    this.forEach( utils.makeData );
	};
	
	
	// Shim Array-like presentation in console
	Hobo.prototype.splice = array.splice;
	
	
	/**
	 *
	 * @instance
	 * @method forEach
	 * @param {function} callback The method called on each iteration
	 * @memberof Hobo
	 * @description Make sure Hobo is iterable like an Array
	 *
	 */
	Hobo.prototype.each = array.forEach;
	Hobo.prototype.forEach = array.forEach;
	
	
	/**
	 *
	 * @instance
	 * @method push
	 * @param {?} element element1, ..., elementN
	 * @memberof Hobo
	 * @description Make sure Hobo is pushable like an Array
	 *
	 */
	Hobo.prototype.push = array.push;
	
	
	/**
	 *
	 * @instance
	 * @method map
	 * @param {function} callback The method called for each element
	 * @memberof Hobo
	 * @description Make sure Hobo is mappable like an Array
	 *
	 */
	Hobo.prototype.map = array.map;
	
	
	// Export the main Hobo Class :D
	module.exports = Hobo;

/***/ },
/* 4 */
/*!**************************************!*\
  !*** ./~/properjs-hobo/lib/utils.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*!
	 *
	 *
	 * @Hobo-utils
	 * @author: kitajchuk
	 *
	 *
	 */
	var version = "0.3.6",
	
	
	    rData = /^data-/,
	
	
	    rDigit = /\D/g,
	
	
	    rDashAlpha = /-([\da-z])/gi,
	
	
	    rTag = /^</,
	
	
	    rJson = /^\[|\{/,
	
	
	    rDocType = /^<\!DOCTYPE\shtml>/i,
	
	
	    rFront2Back = /^\s+|\s+$/g,
	
	
	    trimString = function ( str ) {
	        return str.replace( rFront2Back, "" );
	    },
	
	
	    camelCase = function ( string ) {
	        return string.replace( rDashAlpha, function ( all, letter ) {
	            return letter.toUpperCase();
	        });
	    },
	
	
	    makeId = function () {
	        return ("hobo" + ( version + Math.random() ).replace( rDigit, "" ));
	    },
	
	
	    makeArray = function ( nodes ) {
	        return [].slice.call( nodes );
	    },
	
	
	    makeData = function ( node ) {
	        if ( !node.hoboDataMap ) {
	            node.hoboDataMap = {};
	        }
	
	        if ( node.dataset ) {
	            _mapDataset( node );
	
	        } else if ( node.attributes ) {
	            _mapAttributes( node );
	        }
	    },
	
	
	    storeData = function ( data, node ) {
	        var id,
	            i;
	
	        for ( i in data ) {
	            if ( data.hasOwnProperty( i ) ) {
	                id = camelCase( i );
	
	                node.hoboDataMap[ id ] = data[ i ];
	            }
	        }
	    },
	
	
	    mergeData = function ( data, node ) {
	        for ( var i in node.hoboDataMap ) {
	            if ( node.hoboDataMap.hasOwnProperty( i ) && !data[ i ] ) {
	                data[ i ] = node.hoboDataMap[ i ];
	            }
	        }
	    },
	
	
	    retrieveData = function ( key, node ) {
	        var ret = null;
	
	        // All data mapped into Hobo will be camel-cased
	        key = camelCase( key );
	
	        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
	            ret = node.hoboDataMap[ key ];
	        }
	
	        return ret;
	    },
	
	
	    removeData = function ( key, node ) {
	        // All data mapped into Hobo will be camel-cased
	        key = camelCase( key );
	
	        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
	            delete node.hoboDataMap[ key ];
	        }
	    },
	
	
	    serializeData = function ( data, prefix ) {
	        var str = [],
	            key,
	            val,
	            i;
	
	        for ( i in data ) {
	            if ( data.hasOwnProperty( i ) ) {
	                key = prefix ? (prefix + "[" + i + "]") : i;
	                val = data[ i ];
	
	                if ( typeof val === "object" ) {
	                    str.push( serializeData( val, key ) );
	
	                } else {
	                    str.push( (encodeURIComponent( key ) + "=" + encodeURIComponent( val )) );
	                }
	            }
	        }
	
	        return str.join( "&" );
	    },
	
	
	    // DOMStringMap camel-cases data- attributes.
	    // NamedNodeMap is a fallback which supports IE 10.
	    // Data mapped through Hobo must camel-case as well.
	
	
	    _getDataValue = function ( data ) {
	        if ( rJson.test( data ) ) {
	            try {
	                data = JSON.parse( data );
	
	            } catch ( error ) {
	                throw error;
	            }
	        }
	
	        return data;
	    },
	
	
	    // Use {NamedNodeMap}
	    _mapAttributes = function ( node ) {
	        var i = node.attributes.length;
	
	        for ( i; i--; ) {
	            if ( rData.test( node.attributes[ i ].name ) ) {
	                var key = camelCase( node.attributes[ i ].name.replace( rData, "" ) );
	
	                node.hoboDataMap[ key ] = _getDataValue( node.attributes[ i ].value );
	            }
	        }
	    },
	
	
	    // Use {DOMStringMap}
	    _mapDataset = function ( node ) {
	        for ( var i in node.dataset ) {
	            if ( node.dataset.hasOwnProperty( i ) ) {
	                node.hoboDataMap[ i ] = _getDataValue( node.dataset[ i ] );
	            }
	        }
	    };
	
	
	module.exports = {
	    version: version,
	    rData: rData,
	    rDigit: rDigit,
	    rTag: rTag,
	    rJson: rJson,
	    rDocType: rDocType,
	    rFront2Back: rFront2Back,
	    trimString: trimString,
	    camelCase: camelCase,
	    makeId: makeId,
	    makeArray: makeArray,
	    makeData: makeData,
	    storeData: storeData,
	    retrieveData: retrieveData,
	    mergeData: mergeData,
	    removeData: removeData,
	    serializeData: serializeData
	};

/***/ },
/* 5 */
/*!****************************************!*\
  !*** ./~/properjs-hobo/lib/core/on.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var matchElement = __webpack_require__( /*! properjs-matchelement */ 6 ),
	    utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @private
	 * @method bind
	 * @description Bind a standard DOM Event.
	 * @param {element} node
	 * @param {string} event
	 * @param {string} selector
	 * @param {function} callback
	 * @this {Hobo}
	 *
	 */
	var bind = function ( node, event, selector, callback ) {
	    // Unique ID for each node event
	    var eventId = (utils.makeId() + "EVENT"),
	
	        // The true event name
	        eventType = event,
	
	        // Normalize event handler with a small wrapper function
	        eventHandler = function ( e ) {
	            // Default context is `this` element
	            var context = (selector ? matchElement( e.target, selector, true ) : this);
	
	            // Handle `mouseenter` and `mouseleave`
	            if ( event === "mouseenter" || event === "mouseleave" ) {
	                var relatedElement = (event === "mouseenter" ? e.fromElement : e.toElement);
	
	                if ( context && ( relatedElement !== context && !context.contains( relatedElement ) ) ) {
	                    callback.call( context, e );
	                }
	
	            // Fire callback if context element
	            } else if ( context ) {
	                callback.call( context, e );
	            }
	        };
	
	    // Support `mouseenter` and `mouseleave`
	    if ( event === "mouseenter" ) {
	        eventType = "mouseover";
	
	    } else if ( event === "mouseleave" ) {
	        eventType = "mouseout";
	    }
	
	    // Each handler/callback pair gets stored in an `events` index
	    this._events[ event ][ eventId ] = {
	        id: eventId,
	        type: eventType,
	        node: node,
	        handler: eventHandler,
	        callback: callback
	    };
	
	    node.addEventListener( eventType, eventHandler, false );
	};
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method on
	 * @description Bind a standard DOM Event. Honor delegation as a primary.
	 * @param {string} events 
	 * @param {string} selector 
	 * @param {function} callback
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( events, selector, callback ) {
	    var self = this;
	
	    // Normalize `selector` and `callback`
	    if ( !callback ) {
	        callback = selector;
	        selector = this._selector;
	    }
	
	    // Iterate over event(s)
	    // Space separated event list is supported
	    // Example: "DOMMouseScroll mousewheel"
	    events.split( " " ).forEach(function ( event ) {
	        // Does this event type have an index yet
	        if ( !self._events[ event ] ) {
	            self._events[ event ] = {};
	        }
	
	        self.forEach(function ( node ) {
	            bind.call( self, node, event, selector, callback );
	        });
	    });
	
	    return this;
	};

/***/ },
/* 6 */
/*!*************************************************!*\
  !*** ./~/properjs-matchelement/matchElement.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Use native element selector matching
	 *
	 * @matchElement
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.matchElement = factory();
	    }
	    
	})(function () {
	
	    /**
	     *
	     * Use native element selector matching
	     * @memberof! <global>
	     * @method matchElement
	     * @param {object} el the element
	     * @param {string} selector the selector to match
	     * @param {boolean} walk should we walk the tree if el is not a match?
	     * @returns element OR null
	     *
	     */
	    var matchElement = function ( el, selector, walk ) {
	        var method = ( el.matches ) ? "matches" : ( el.webkitMatchesSelector ) ? 
	                                      "webkitMatchesSelector" : ( el.mozMatchesSelector ) ? 
	                                      "mozMatchesSelector" : ( el.msMatchesSelector ) ? 
	                                      "msMatchesSelector" : ( el.oMatchesSelector ) ? 
	                                      "oMatchesSelector" : null;
	
	        // Try testing the element against the selector
	        // 0.1 => Method is not undefined
	        // 0.2 => Element passes method call
	        if ( method && el[ method ].call( el, selector ) ) {
	            return el;
	
	        // Keep walking up the DOM if we can - only if `walk` flag is `true`
	        } else if ( walk && el !== document.documentElement && el.parentNode ) {
	            return matchElement( el.parentNode, selector, walk );
	
	        // Otherwise we should not execute an event
	        } else {
	            return null;
	        }
	    };
	
	
	    return matchElement;
	
	});

/***/ },
/* 7 */
/*!*****************************************!*\
  !*** ./~/properjs-hobo/lib/core/off.js ***!
  \*****************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @private
	 * @method unbind
	 * @description Unbind a standard DOM Event.
	 * @param {element} node
	 * @param {string} event
	 * @param {function} callback
	 * @this {Hobo}
	 *
	 */
	var unbind = function ( node, event, callback ) {
	    var type,
	        evo,
	        id;
	
	    // Remove a single handler for an event type
	    if ( callback ) {
	        for ( id in this._events[ event ] ) {
	            if ( this._events[ event ].hasOwnProperty( id ) ) {
	                evo = this._events[ event ][ id ];
	
	                // Match the nodes, Match the callback
	                if ( evo.node === node && evo.callback === callback ) {
	                    node.removeEventListener( evo.type, evo.handler, false );
	
	                    delete this._events[ event ][ id ];
	                }
	            }
	        }
	
	    // Remove all handlers for an event type
	    } else {
	        for ( id in this._events[ event ] ) {
	            if ( this._events[ event ].hasOwnProperty( id ) ) {
	                evo = this._events[ event ][ id ];
	
	                // Match the nodes
	                if ( evo.node === node ) {
	                    node.removeEventListener( evo.type, evo.handler, false );
	
	                    delete this._events[ event ][ id ];
	                }
	            }
	        }
	    }
	};
	
	
	/**
	 *
	 * @private
	 * @method teardown
	 * @description Unbind all events for instance.
	 * @param {element} node
	 * @this {Hobo}
	 *
	 */
	var teardown = function ( node ) {
	    var type,
	        evo,
	        id;
	
	    for ( type in this._events ) {
	        if ( this._events.hasOwnProperty( type ) ) {
	            for ( id in this._events[ type ] ) {
	                if ( this._events[ type ].hasOwnProperty( id ) ) {
	                    evo = this._events[ type ][ id ];
	
	                    // Match the nodes
	                    if ( evo.node === node ) {
	                        node.removeEventListener( evo.type, evo.handler, false );
	
	                        delete this._events[ type ][ id ];
	                    }
	                }
	            }
	        }
	    }
	};
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method off
	 * @description Un-Bind a standard DOM Event.
	 * @param {string} events The event type
	 * @param {function} callback The supplied callback
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( events, callback ) {
	    var self = this;
	
	    // Iterate over event(s)
	    // Space separated event list is supported
	    // Example: "DOMMouseScroll mousewheel"
	    // off() can be called with no args, account for this and remove ALL events
	    (events ? events.split( " " ) : [null]).forEach(function ( event ) {
	        self.forEach(function ( node ) {
	            // Explicit `null` check for teardown
	            if ( event === null ) {
	                teardown.call( self, node );
	
	            } else {
	                unbind.call( self, node, event, callback );
	            }
	        });
	    });
	
	    return this;
	};

/***/ },
/* 8 */
/*!******************************************!*\
  !*** ./~/properjs-hobo/lib/core/data.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method data
	 * @description Get / set data values with nodes.
	 * @param {string} key The access key
	 * @param {string} value The value to be stored
	 * @returns {mixed}
	 *
	 */
	module.exports = function ( key, value ) {
	    // Any `non-unique` data keys resolve to the first unique occurrence
	    // Exactly how jQuery handles `.data( ... )` on multi-node collections
	
	    var ret = this,
	        obj = null;
	
	    // Storing data from an Object
	    if ( typeof key === "object" ) {
	        obj = key;
	
	        this.forEach(function ( node ) {
	            utils.storeData( obj, node );
	        });
	
	    // Storing data as a `key:value` pair
	    } else if ( value ) {
	        obj = {};
	        obj[ key ] = value;
	
	        this.forEach(function ( node ) {
	            utils.storeData( obj, node );
	        });
	
	    // Accessing data by `key`
	    } else if ( key ) {
	        this.forEach(function ( node ) {
	            if ( obj !== null ) {
	                return;
	            }
	
	            obj = utils.retrieveData( key, node );
	
	        });
	
	        ret = obj;
	
	    // Accessing all data
	    // Merges all `unique` data for a Hobo set
	    } else {
	        obj = {};
	
	        // Object is mutated here by `mergeData`
	        this.forEach(function ( node ) {
	            utils.mergeData( obj, node );
	        });
	
	        ret = obj;
	    }
	
	    return ret;
	};

/***/ },
/* 9 */
/*!******************************************!*\
  !*** ./~/properjs-hobo/lib/core/find.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 3 ),
	    utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method find
	 * @description Query into a Hobo instance for new nodes.
	 * @param {string} selector The selector to query for
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var ret = this;
	
	    // If we are `finding` within a multi-node collection...
	    // Here its probably faster to grab the nodes within each Node
	    // and then just let the context be the document for the new instance. 
	    if ( this.length > 1 ) {
	        ret = [];
	
	        this.forEach(function ( node ) {
	            ret = ret.concat( utils.makeArray( node.querySelectorAll( selector ) ) );
	        });
	
	        ret = new Hobo( ret, null );
	
	    // Single node collection
	    // Empty node collection
	    } else {
	        ret = new Hobo( (this.length ? selector : []), (this.length ? this[ 0 ] : null) );
	    }
	
	    return ret;
	};

/***/ },
/* 10 */
/*!**********************************************!*\
  !*** ./~/properjs-hobo/lib/core/addClass.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method addClass
	 * @description Add one or more classNames to the nodes.
	 * @param {string} classes The space-separated classNames
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( classes ) {
	    this.forEach(function ( element ) {
	        var newClass = classes.split( " " ),
	            elsClass = element.className.split( " " );
	
	        newClass.forEach(function ( klass ) {
	            if ( elsClass.indexOf( klass ) === -1 ) {
	                elsClass.push( klass );
	            }
	        });
	
	        element.className = utils.trimString( elsClass.join( " " ) );
	    });
	
	    return this;
	};

/***/ },
/* 11 */
/*!*************************************************!*\
  !*** ./~/properjs-hobo/lib/core/removeClass.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method removeClass
	 * @description Remove one or more classNames from the nodes.
	 * @param {string} classes The space-separated classNames
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( classes ) {
	    this.forEach(function ( element ) {
	        // Explicit check for `undefined`
	        // Using `!classes` would be bad in this case
	        // Calling `removeClass( "" )` should not wipe the entire className
	        if ( classes === undefined ) {
	            element.className = "";
	
	        } else {
	            var oldClass = classes.split( " " ),
	                elsClass = element.className.split( " " );
	
	            oldClass.forEach(function ( klass ) {
	                if ( elsClass.indexOf( klass ) !== -1 ) {
	                    elsClass.splice( elsClass.indexOf( klass ), 1 );
	                }
	            });
	
	            element.className = utils.trimString( elsClass.join( " " ) );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 12 */
/*!******************************************!*\
  !*** ./~/properjs-hobo/lib/core/ajax.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @static
	 * @memberof Hobo
	 * @method ajax
	 * @description Perform standar XHR with a native Promise.
	 *              dataType can be `html`, `json`, `jsonp`.
	 * @param {object} config The ajax config object
	 *                        url       => string, default: window.location.href
	 *                        data      => object, default: null
	 *                        dataType  => string, default: "html"
	 *                        method    => string, default: "GET"
	 *                        jsonp     => string, default: "callback"
	 *                        headers   => object, default: null
	 * @returns {Promise}
	 *
	 */
	module.exports = function ( config ) {
	    var params = (config.data || null),
	        dataType = (config.dataType || "html"),
	        method = (config.method || "GET").toUpperCase(),
	        url = (config.url || window.location.href),
	        headers = (config.headers || null);
	
	    // Handle params
	    // Params will be one of the following:
	    // Serialized querystring
	    // Instanceof FormData
	    // Null
	    if ( params && !(FormData && params instanceof FormData) ) {
	        params = utils.serializeData( config.data );
	    }
	
	    // Handle params in GET URL
	    if ( method === "GET" && params ) {
	        url += ("?" + params);
	    }
	
	    return new Promise(function ( resolve, reject ) {
	        var handleResponse = function ( response ) {
	            if ( dataType === "json" ) {
	                try {
	                    response = JSON.parse( response );
	
	                } catch ( error ) {
	                    reject( ("Rejecting on JSON.parse error : " + error) );
	                }
	            }
	
	            resolve( response );
	        };
	
	        // JSONP
	        if ( dataType === "jsonp" ) {
	            var jsonpCallbackValue = (utils.makeId() + "JSONP"),
	                jsonpCallbackKey = (config.jsonp || "callback"),
	                jsonpScript = document.createElement( "script" );
	
	            jsonpScript.src = (url + (/\?/.test( url ) ? "&" : "?") + jsonpCallbackKey + "=" + jsonpCallbackValue);
	
	            window[ jsonpCallbackValue ] = function ( response ) {
	                document.getElementsByTagName( "head" )[ 0 ].removeChild( jsonpScript );
	                jsonpScript = null;
	                delete window[ jsonpCallbackValue ];
	
	                handleResponse( response );
	            };
	
	            document.getElementsByTagName( "head" )[ 0 ].appendChild( jsonpScript );
	
	        // XHR
	        } else {
	            var xhr = new XMLHttpRequest();
	
	            xhr.open( method, url, true );
	
	            if ( headers ) {
	                for ( var header in headers ) {
	                    if ( headers.hasOwnProperty( header ) ) {
	                        xhr.setRequestHeader( header, headers[ header ] );
	                    }
	                }
	            }
	
	            xhr.onreadystatechange = function ( e ) {
	                if ( this.readyState === 4 ) {
	                    // Two-Hundo's are A-Okay with Hobo
	                    if ( /^20/.test( this.status ) ) {
	                        handleResponse( this.responseText );
	
	                    } else {
	                        reject( ("Rejecting on server status code : " + this.status) );
	                    }
	                }
	            };
	
	            xhr.send( params );
	        }
	    });
	};

/***/ },
/* 13 */
/*!********************!*\
  !*** ./js/Menu.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(/*! ./core */ 14);
	
	var core = _interopRequireWildcard(_core);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Menu = function () {
	  function Menu($node) {
	    _classCallCheck(this, Menu);
	
	    this.$node = $node;
	    this.isOpen = false;
	
	    // this.$node.detach();
	  }
	
	  _createClass(Menu, [{
	    key: "open",
	    value: function open() {
	      this.isOpen = true;
	
	      core.dom.html.addClass("is-menu-open");
	      // core.dom.body.append( $this.$node );
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      this.isOpen = false;
	
	      core.dom.html.removeClass("is-menu-open");
	      // this.$node.detach();
	    }
	  }, {
	    key: "toggle",
	    value: function toggle() {
	      if (this.isOpen) {
	        this.close();
	      } else {
	        this.open();
	      }
	    }
	  }]);
	
	  return Menu;
	}();
	
	exports.default = Menu;

/***/ },
/* 14 */
/*!**************************!*\
  !*** ./js/core/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.util = exports.dom = undefined;
	
	var _dom = __webpack_require__(/*! ./dom */ 15);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _util = __webpack_require__(/*! ./util */ 16);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.dom = _dom2.default;
	exports.util = util;

/***/ },
/* 15 */
/*!************************!*\
  !*** ./js/core/dom.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dom = {
	  doc: (0, _properjsHobo2.default)(document),
	  html: (0, _properjsHobo2.default)(document.documentElement),
	  body: (0, _properjsHobo2.default)(document.body),
	  header: (0, _properjsHobo2.default)(".header"),
	  nav: (0, _properjsHobo2.default)(".nav")
	};
	
	exports.default = dom;

/***/ },
/* 16 */
/*!*************************!*\
  !*** ./js/core/util.js ***!
  \*************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isElementLoadable = function isElementLoadable(el) {
	  if (el) {
	    var bounds = el.getBoundingClientRect();
	
	    return bounds.top < window.innerHeight * 2;
	  }
	};
	
	var isElementInViewport = function isElementInViewport(el) {
	  if (el) {
	    var bounds = el.getBoundingClientRect();
	
	    return bounds.top < window.innerHeight / 1.5 && bounds.bottom > 0;
	  }
	};
	
	var throttle = function throttle(func, wait, options) {
	  var timeout, context, args, result;
	  var previous = 0;
	  var now = Date.now || function () {
	    return new Date().getTime();
	  };
	  if (!options) options = {};
	
	  var later = function later() {
	    previous = options.leading === false ? 0 : now();
	    timeout = null;
	    result = func.apply(context, args);
	    if (!timeout) context = args = null;
	  };
	
	  var throttled = function throttled() {
	    var now = Date.now || function () {
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
	
	  throttled.cancel = function () {
	    clearTimeout(timeout);
	    previous = 0;
	    timeout = context = args = null;
	  };
	
	  return throttled;
	};
	
	exports.default = {
	  isElementLoadable: isElementLoadable,
	  isElementInViewport: isElementInViewport,
	  throttle: throttle
	};

/***/ },
/* 17 */
/*!*****************************!*\
  !*** ./js/gallery/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _core = __webpack_require__(/*! ../core */ 14);
	
	var core = _interopRequireWildcard(_core);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var _core$util$default = core.util.default;
	var isElementInViewport = _core$util$default.isElementInViewport;
	var isElementLoadable = _core$util$default.isElementLoadable;
	var throttle = _core$util$default.throttle;
	
	
	!function () {
	  var gallery = document.getElementById('gallery');
	  if (gallery) {
	    (function () {
	
	      var ImageLoader = __webpack_require__(/*! properjs-imageloader */ 18);
	      var galleryImages = document.querySelectorAll(".gallery__item");
	      var galleryVideo = document.querySelector(".gallery__video");
	      var galleryArray = [].concat(_toConsumableArray(galleryImages));
	      var ticking = false;
	      var i = void 0;
	
	      window.setTimeout(function () {
	        if (galleryVideo) {
	          galleryVideo.classList.add('is-active');
	        }
	        galleryArray[0].classList.add('is-active');
	        galleryArray[1].classList.add('is-active');
	      }, 500);
	
	      var imgLoader = new ImageLoader({
	        elements: galleryArray,
	        property: "data-img-src",
	        executor: isElementLoadable
	      });
	
	      var update = function update() {
	        ticking = false;
	
	        for (i = 0; i < galleryArray.length; i++) {
	          if (isElementInViewport(galleryArray[i])) {
	            galleryArray[i].classList.add('is-active');
	          }
	        }
	      };
	
	      var requestTick = function requestTick() {
	        if (!ticking) {
	          window.requestAnimationFrame(update);
	        }
	        ticking = true;
	      };
	
	      var onScroll = function onScroll() {
	        requestTick();
	      };
	
	      window.addEventListener('scroll', throttle(onScroll, 100), false);
	    })();
	  }
	}();

/***/ },
/* 18 */
/*!***********************************************!*\
  !*** ./~/properjs-imageloader/ImageLoader.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Handle lazy-loading images with contextual load conditions.
	 *
	 * @ImageLoader
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.ImageLoader = factory();
	    }
	
	})(function () {
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 19 );
	
	
	    /**
	     *
	     * Handle lazy-loading images with unique callback conditions
	     * @memberof! <global>
	     * @requires raf
	     * @constructor ImageLoader
	     * @param {object} options Controller settings
	     * <ul>
	     * <li>elements - The collection of elements to load against</li>
	     * <li>property - The property to pull the image source from</li>
	     * <li>transitionDelay - The timeout before transition starts</li>
	     * <li>transitionDuration - The length of the animation</li>
	     * </ul>
	     *
	     */
	    var ImageLoader = function ( options ) {
	        var self = this;
	
	        if ( !options ) {
	            throw new Error( "ImageLoader Class requires options to be passed" );
	        }
	
	        // Up, up and away...
	        Controller.call( this );
	
	        /**
	         *
	         * The method to determine if an image should load itself
	         * @memberof ImageLoader
	         * @member _executor
	         * @private
	         *
	         */
	        this._executor = (options.executor || function ( elem ) {
	            return elem;
	        });
	
	        /**
	         *
	         * The Collection to load against
	         * @memberof ImageLoader
	         * @member _elements
	         * @private
	         *
	         */
	        this._elements = options.elements;
	
	        /**
	         *
	         * The property to get image source from
	         * @memberof ImageLoader
	         * @member _property
	         * @private
	         *
	         */
	        this._property = (options.property || "data-src");
	
	        /**
	         *
	         * The way to load, async or sync
	         * Using "sync" loading requires calling .start() on the instance
	         * and the "handle" event will not be utilized, rather each image
	         * will be loaded in succession as the previous finishes loading
	         * @memberof ImageLoader
	         * @member _loadType
	         * @private
	         *
	         */
	        this._loadType = (options.loadType || "async");
	
	        /**
	         *
	         * The current amount of elements lazy loaded
	         * @memberof ImageLoader
	         * @member _numLoaded
	         * @private
	         *
	         */
	        this._numLoaded = 0;
	
	        /**
	         *
	         * The total amount of elements to lazy load
	         * @memberof ImageLoader
	         * @member _num2Load
	         * @private
	         *
	         */
	        this._num2Load = (this._elements ? this._elements.length : 0);
	
	        /**
	         *
	         * The delay to execute lazy loading on an element in ms
	         * @memberof ImageLoader
	         * @member _transitionDelay
	         * @default 100
	         * @private
	         *
	         */
	        this._transitionDelay = (options.transitionDelay || 0);
	
	        /**
	         *
	         * The duration on a lazy loaded elements fade in in ms
	         * @memberof ImageLoader
	         * @member _transitionDuration
	         * @default 600
	         * @private
	         *
	         */
	        this._transitionDuration = (options.transitionDuration || 400);
	
	        /**
	         *
	         * This flags that all elements have been loaded
	         * @memberof ImageLoader
	         * @member _resolved
	         * @private
	         *
	         */
	        this._resolved = false;
	
	        // Break out if no elements in collection
	        if ( !this._elements.length ) {
	            return this;
	        }
	
	        // Only run animation frame for async loading
	        if ( this._loadType === "async" ) {
	            this.initAsync();
	
	        } else {
	            this.initSync();
	        }
	    };
	
	
	    /**
	     *
	     * @extends Controller
	     *
	     */
	    ImageLoader.prototype = Object.create( Controller.prototype );
	
	
	    /**
	     *
	     * Support asynchronous loading of a set of images
	     * @memberof ImageLoader
	     * @method initAsync
	     *
	     */
	    ImageLoader.prototype.initAsync = function () {
	        var self = this;
	
	        this.go(function () {
	            if ( self._resolved ) {
	                self.stop();
	
	            } else {
	                self.handle();
	            }
	        });
	    };
	
	    /**
	     *
	     * Support batch synchronous loading of a set of images
	     * @memberof ImageLoader
	     * @method initSync
	     *
	     */
	    ImageLoader.prototype.initSync = function () {
	        var self = this;
	
	        function syncLoad() {
	            var elem = self._elements[ self._numLoaded ];
	
	            self._numLoaded++;
	
	            self.load( elem, function ( error ) {
	                if ( !error && !self._resolved ) {
	                    syncLoad();
	                }
	            });
	        }
	
	        syncLoad();
	    };
	
	    /**
	     *
	     * Perform the image loading and set correct values on element
	     * @method load
	     * @memberof ImageLoader
	     * @param {object} $elem element object
	     * @param {function} callback optional callback for each load
	     * @fires done
	     *
	     */
	    ImageLoader.prototype.load = function ( element, callback ) {
	        var self = this,
	            image = null,
	            timeout = null,
	            isImage = (element.nodeName === "IMG"),
	            source = element.getAttribute( this._property );
	
	        element.setAttribute( "data-imageloader", true );
	
	        if ( isImage ) {
	            image = element;
	
	        } else {
	            image = new Image();
	        }
	
	        timeout = setTimeout(function () {
	            clearTimeout( timeout );
	
	            image.onload = function () {
	                self.fire( "load", element );
	
	                if ( !isImage ) {
	                    element.style.backgroundImage = ("url(" + source + ")");
	
	                    image = null;
	                }
	
	                timeout = setTimeout(function () {
	                    clearTimeout( timeout );
	
	                    if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
	                        self._resolve( true );
	
	                    } else if ( typeof callback === "function" ) {
	                        // Errors first
	                        callback( false );
	                    }
	
	                }, self._transitionDuration );
	            };
	
	            image.onerror = function () {
	                self.fire( "error", element );
	
	                if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
	                    self._resolve( true );
	
	                } else if ( typeof callback === "function" ) {
	                    // Errors first
	                    callback( true );
	                }
	            };
	
	            image.src = source;
	
	        }, this._transitionDelay );
	
	        return this;
	    };
	
	    /**
	     *
	     * Handles element iterations and loading based on callbacks
	     * @memberof ImageLoader
	     * @method handle
	     *
	     */
	    ImageLoader.prototype.handle = function () {
	        var elems = this.getNotLoaded(),
	            self = this;
	
	        for ( var i = 0, len = elems.length; i < len; i++ ) {
	            if ( self._executor( elems[ i ] ) ) {
	                self._numLoaded++;
	
	                self.load( elems[ i ] );
	            }
	        }
	    };
	
	    /**
	     *
	     * Get all images in the set that have yet to be loaded
	     * @memberof ImageLoader
	     * @method getNotLoaded
	     *
	     */
	    ImageLoader.prototype.getNotLoaded = function () {
	        var elems = [];
	
	        for ( var i = 0, len = this._elements.length; i < len; i++ ) {
	            if ( !this._elements[ i ].getAttribute( "data-imageloader" ) ) {
	                elems.push( this._elements[ i ] );
	            }
	        }
	
	        return elems;
	    };
	
	    /**
	     *
	     * Resolve an instance and remove it from the stack
	     * @memberof ImageLoader
	     * @method _resolve
	     *
	     */
	    ImageLoader.prototype._resolve = function () {
	        // Resolved state
	        this._resolved = true;
	
	        // Fires the predefined "done" event
	        this.fire( "done" );
	    };
	
	
	    return ImageLoader;
	
	
	});

/***/ },
/* 19 */
/*!*********************************************!*\
  !*** ./~/properjs-controller/Controller.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Event / Animation cycle manager
	 *
	 * @Controller
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.Controller = factory();
	    }
	    
	})(function () {
	    // Private animation functions
	    var raf = window.requestAnimationFrame,
	        caf = window.cancelAnimationFrame,
	    
	    
	    /**
	     *
	     * Event / Animation cycle manager
	     * @constructor Controller
	     * @requires raf
	     * @memberof! <global>
	     *
	     */
	    Controller = function () {
	        return this.init.apply( this, arguments );
	    };
	    
	    Controller.prototype = {
	        constructor: Controller,
	    
	        /**
	         *
	         * Controller constructor method
	         * @memberof Controller
	         * @method Controller.init
	         *
	         */
	        init: function () {
	            /**
	             *
	             * Controller event handlers object
	             * @memberof Controller
	             * @member _handlers
	             * @private
	             *
	             */
	            this._handlers = {};
	    
	            /**
	             *
	             * Controller unique ID
	             * @memberof Controller
	             * @member _uid
	             * @private
	             *
	             */
	            this._uid = 0;
	    
	            /**
	             *
	             * Started iteration flag
	             * @memberof Controller
	             * @member _started
	             * @private
	             *
	             */
	            this._started = false;
	    
	            /**
	             *
	             * Paused flag
	             * @memberof Controller
	             * @member _paused
	             * @private
	             *
	             */
	            this._paused = false;
	    
	            /**
	             *
	             * Timeout reference
	             * @memberof Controller
	             * @member _cycle
	             * @private
	             *
	             */
	            this._cycle = null;
	        },
	    
	        /**
	         *
	         * Controller go method to start frames
	         * @memberof Controller
	         * @method go
	         *
	         */
	        go: function ( fn ) {
	            if ( this._started && this._cycle ) {
	                return this;
	            }
	    
	            this._started = true;
	    
	            var self = this,
	                anim = function () {
	                    self._cycle = raf( anim );
	    
	                    if ( self._started ) {
	                        if ( typeof fn === "function" ) {
	                            fn();
	                        }
	                    }
	                };
	    
	            anim();
	        },
	    
	        /**
	         *
	         * Pause the cycle
	         * @memberof Controller
	         * @method pause
	         *
	         */
	        pause: function () {
	            this._paused = true;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Play the cycle
	         * @memberof Controller
	         * @method play
	         *
	         */
	        play: function () {
	            this._paused = false;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Stop the cycle
	         * @memberof Controller
	         * @method stop
	         *
	         */
	        stop: function () {
	            caf( this._cycle );
	    
	            this._paused = false;
	            this._started = false;
	            this._cycle = null;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller add event handler
	         * @memberof Controller
	         * @method on
	         * @param {string} event the event to listen for
	         * @param {function} handler the handler to call
	         *
	         */
	        on: function ( event, handler ) {
	            var events = event.split( " " );
	    
	            // One unique ID per handler
	            handler._jsControllerID = this.getUID();
	    
	            for ( var i = events.length; i--; ) {
	                if ( typeof handler === "function" ) {
	                    if ( !this._handlers[ events[ i ] ] ) {
	                        this._handlers[ events[ i ] ] = [];
	                    }
	    
	                    // Handler can be stored with multiple events
	                    this._handlers[ events[ i ] ].push( handler );
	                }
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller remove event handler
	         * @memberof Controller
	         * @method off
	         * @param {string} event the event to remove handler for
	         * @param {function} handler the handler to remove
	         *
	         */
	        off: function ( event, handler ) {
	            if ( !this._handlers[ event ] ) {
	                return this;
	            }
	    
	            // Remove a single handler
	            if ( handler ) {
	                this._off( event, handler );
	    
	            // Remove all handlers for event
	            } else {
	                this._offed( event );
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller fire an event
	         * @memberof Controller
	         * @method fire
	         * @param {string} event the event to fire
	         *
	         */
	        fire: function ( event ) {
	            if ( !this._handlers[ event ] ) {
	                return this;
	            }
	    
	            var args = [].slice.call( arguments, 1 );
	    
	            for ( var i = this._handlers[ event ].length; i--; ) {
	                this._handlers[ event ][ i ].apply( this, args );
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Get a unique ID
	         * @memberof Controller
	         * @method getUID
	         * @returns number
	         *
	         */
	        getUID: function () {
	            this._uid = (this._uid + 1);
	    
	            return this._uid;
	        },
	    
	        /**
	         *
	         * Controller internal off method assumes event AND handler are good
	         * @memberof Controller
	         * @method _off
	         * @param {string} event the event to remove handler for
	         * @param {function} handler the handler to remove
	         * @private
	         *
	         */
	        _off: function ( event, handler ) {
	            for ( var i = 0, len = this._handlers[ event ].length; i < len; i++ ) {
	                if ( handler._jsControllerID === this._handlers[ event ][ i ]._jsControllerID ) {
	                    this._handlers[ event ].splice( i, 1 );
	    
	                    break;
	                }
	            }
	        },
	    
	        /**
	         *
	         * Controller completely remove all handlers and an event type
	         * @memberof Controller
	         * @method _offed
	         * @param {string} event the event to remove handler for
	         * @private
	         *
	         */
	        _offed: function ( event ) {
	            for ( var i = this._handlers[ event ].length; i--; ) {
	                this._handlers[ event ][ i ] = null;
	            }
	    
	            delete this._handlers[ event ];
	        }
	    };
	
	    return Controller;
	});

/***/ },
/* 20 */
/*!*****************************!*\
  !*** ./js/contact/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _axios = __webpack_require__(/*! axios */ 21);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	!function () {
	  var contact = document.getElementById('contact');
	
	  if (contact) {
	    (function () {
	
	      var form = document.getElementById('contact-form');
	      var inputs = document.getElementsByTagName('input');
	      var state = {
	        'submitting': false,
	        'success': false,
	        'error': false,
	        'errors': {}
	      };
	
	      var setState = function setState(property, value) {
	        state[property] = value;
	      };
	
	      var setErrorField = function setErrorField(id, error) {
	        var element = document.getElementById(id);
	        element.classList.add('error');
	        element.innerHTML = error;
	      };
	
	      var getModel = function getModel() {
	        var model = {
	          'name': inputs.name.value,
	          'email': inputs.email.value,
	          'message': inputs.message.value
	        };
	
	        return model;
	      };
	
	      var errors = function errors(name) {
	        var span = document.getElementById(name);
	        span.innerHTML = state.errors[name];
	      };
	
	      var validate = function validate() {
	        var errors = state.errors = {};
	        var email = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
	        var valid = true;
	        var model = getModel();
	
	        ['name', 'email', 'message'].map(function (field) {
	          if (!model[field]) {
	            errors[field] = 'is required';
	            valid = false;
	            setErrorField(field, errors[field]);
	          } else if (model[field].length > 10000) {
	            errors[field] = 'is too long';
	            valid = false;
	            setErrorField(field, errors[field]);
	          } else {
	            setErrorField(field, '');
	          }
	        });
	
	        ['email'].map(function (field) {
	          if (!email.test(model[field])) {
	            errors[field] = 'not a valid email';
	            valid = false;
	            setErrorField(field, errors[field]);
	          } else {
	            setErrorField(field, '');
	          }
	        });
	
	        return valid;
	      };
	
	      var send = function send() {
	        var model = getModel();
	
	        _axios2.default.post('/submit', model).then(function (res) {
	          console.log(res);
	          if (res.data === 'success') {
	            setState('success', true);
	          }
	        }).catch(function () {
	          setState('error', true);
	        });
	      };
	
	      var onSubmit = function onSubmit(e) {
	        e.preventDefault();
	        if (validate()) {
	          send();
	        } else {
	          console.log(state.errors);
	          setState('error', true);
	        }
	      };
	
	      form.addEventListener('submit', onSubmit, false);
	    })();
	  }
	}();

/***/ },
/* 21 */
/*!**************************!*\
  !*** ./~/axios/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/axios */ 22);

/***/ },
/* 22 */
/*!******************************!*\
  !*** ./~/axios/lib/axios.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./utils */ 23);
	var bind = __webpack_require__(/*! ./helpers/bind */ 24);
	var Axios = __webpack_require__(/*! ./core/Axios */ 25);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance();
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(defaultConfig) {
	  return createInstance(defaultConfig);
	};
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(/*! ./helpers/spread */ 43);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ },
/* 23 */
/*!******************************!*\
  !*** ./~/axios/lib/utils.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(/*! ./helpers/bind */ 24);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ },
/* 24 */
/*!*************************************!*\
  !*** ./~/axios/lib/helpers/bind.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 25 */
/*!***********************************!*\
  !*** ./~/axios/lib/core/Axios.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(/*! ./../defaults */ 26);
	var utils = __webpack_require__(/*! ./../utils */ 23);
	var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 28);
	var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 29);
	var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ 41);
	var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ 42);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 */
	function Axios(defaultConfig) {
	  this.defaults = utils.merge(defaults, defaultConfig);
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ },
/* 26 */
/*!*********************************!*\
  !*** ./~/axios/lib/defaults.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./utils */ 23);
	var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 27);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	module.exports = {
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    put: utils.merge(DEFAULT_CONTENT_TYPE)
	  },
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};


/***/ },
/* 27 */
/*!****************************************************!*\
  !*** ./~/axios/lib/helpers/normalizeHeaderName.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ../utils */ 23);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },
/* 28 */
/*!************************************************!*\
  !*** ./~/axios/lib/core/InterceptorManager.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 23);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ },
/* 29 */
/*!*********************************************!*\
  !*** ./~/axios/lib/core/dispatchRequest.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 23);
	var transformData = __webpack_require__(/*! ./transformData */ 31);
	
	/**
	 * Dispatch a request to the server using whichever adapter
	 * is supported by the current environment.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter;
	
	  if (typeof config.adapter === 'function') {
	    // For custom adapter support
	    adapter = config.adapter;
	  } else if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(/*! ../adapters/xhr */ 32);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(/*! ../adapters/http */ 32);
	  }
	
	  return Promise.resolve(config)
	    // Wrap synchronous adapter errors and pass configuration
	    .then(adapter)
	    .then(function onFulfilled(response) {
	      // Transform response data
	      response.data = transformData(
	        response.data,
	        response.headers,
	        config.transformResponse
	      );
	
	      return response;
	    }, function onRejected(error) {
	      // Transform response data
	      if (error && error.response) {
	        error.response.data = transformData(
	          error.response.data,
	          error.response.headers,
	          config.transformResponse
	        );
	      }
	
	      return Promise.reject(error);
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 30)))

/***/ },
/* 30 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 31 */
/*!*******************************************!*\
  !*** ./~/axios/lib/core/transformData.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 23);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ },
/* 32 */
/*!*************************************!*\
  !*** ./~/axios/lib/adapters/xhr.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 23);
	var settle = __webpack_require__(/*! ./../core/settle */ 33);
	var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 36);
	var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 37);
	var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 38);
	var createError = __webpack_require__(/*! ../core/createError */ 34);
	var btoa = (typeof window !== 'undefined' && window.btoa) || __webpack_require__(/*! ./../helpers/btoa */ 39);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      if (request.status === 0) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(/*! ./../helpers/cookies */ 40);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 30)))

/***/ },
/* 33 */
/*!************************************!*\
  !*** ./~/axios/lib/core/settle.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(/*! ./createError */ 34);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response
	    ));
	  }
	};


/***/ },
/* 34 */
/*!*****************************************!*\
  !*** ./~/axios/lib/core/createError.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(/*! ./enhanceError */ 35);
	
	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};


/***/ },
/* 35 */
/*!******************************************!*\
  !*** ./~/axios/lib/core/enhanceError.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};


/***/ },
/* 36 */
/*!*****************************************!*\
  !*** ./~/axios/lib/helpers/buildURL.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 23);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ },
/* 37 */
/*!*********************************************!*\
  !*** ./~/axios/lib/helpers/parseHeaders.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 23);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};


/***/ },
/* 38 */
/*!************************************************!*\
  !*** ./~/axios/lib/helpers/isURLSameOrigin.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 23);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 39 */
/*!*************************************!*\
  !*** ./~/axios/lib/helpers/btoa.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ },
/* 40 */
/*!****************************************!*\
  !*** ./~/axios/lib/helpers/cookies.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 23);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 41 */
/*!**********************************************!*\
  !*** ./~/axios/lib/helpers/isAbsoluteURL.js ***!
  \**********************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 42 */
/*!********************************************!*\
  !*** ./~/axios/lib/helpers/combineURLs.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },
/* 43 */
/*!***************************************!*\
  !*** ./~/axios/lib/helpers/spread.js ***!
  \***************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map