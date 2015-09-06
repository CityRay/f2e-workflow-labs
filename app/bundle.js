/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';

	    angular.module('app', [
	        'app.core',
	        'app.widgets',
	        'app.admin',
	        'app.dashboard',
	        'app.layout'
	    ]);

	    console.log('APPPPPPP module');

	})();

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(31);


/***/ },
/* 1 */
/***/ function(module, exports) {

	(function () {
	    'use strict';

	    angular.module('app.admin', [
	        'app.core',
	        'app.widgets'
	      ]);

	})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular.module('blocks.exception', ['blocks.logger']);
	})();


/***/ },
/* 3 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular.module('blocks.logger', []);
	})();


/***/ },
/* 4 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular.module('blocks.router', [
	        'ui.router',
	        'blocks.logger'
	    ]);
	})();


/***/ },
/* 5 */
/***/ function(module, exports) {

	(function () {
	    'use strict';

	    angular
	        .module('app.core', [
	            'ngAnimate', 'ngSanitize',
	            'blocks.exception', 'blocks.logger', 'blocks.router',
	            'ui.router', 'ngplus'
	        ]);
	})();


/***/ },
/* 6 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular.module('app.dashboard', [
	        'app.core',
	        'app.widgets'
	      ]);
	})();


/***/ },
/* 7 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular.module('app.layout', ['app.core']);
	})();


/***/ },
/* 8 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular.module('app.widgets', []);
	})();


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	(function () {
	    'use strict';

	    angular
	        .module('app.admin')
	        .controller('AdminController', AdminController);

	    AdminController.$inject = ['logger'];
	    /* @ngInject */
	    function AdminController(logger) {
	        var vm = this;
	        vm.title = 'Admin';

	        activate();

	        function activate() {
	            logger.info('Activated Admin View');

	            __webpack_require__(10);
	        }
	    }
	})();


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./admin.style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./admin.style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, ".mainbar{\n    background: red;\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular
	        .module('app.admin')
	        .run(appRun);

	    appRun.$inject = ['routerHelper'];
	    /* @ngInject */
	    function appRun(routerHelper) {
	        routerHelper.configureStates(getStates());
	    }

	    function getStates() {
	        return [
	            {
	                state: 'admin',
	                config: {
	                    url: '/admin',
	                    templateUrl: 'app/admin/admin.html',
	                    controller: 'AdminController',
	                    controllerAs: 'vm',
	                    title: 'Admin',
	                    settings: {
	                        nav: 2,
	                        content: '<i class="fa fa-lock"></i> Admin'
	                    }
	                }
	            }
	        ];
	    }
	})();


/***/ },
/* 15 */
/***/ function(module, exports) {

	// Include in index.html so that app level exceptions are handled.
	// Exclude from testRunner.html which should run exactly what it wants to run
	(function() {
	    'use strict';

	    angular
	        .module('blocks.exception')
	        .provider('exceptionHandler', exceptionHandlerProvider)
	        .config(config);

	    /**
	     * Must configure the exception handling
	     */
	    function exceptionHandlerProvider() {
	        /* jshint validthis:true */
	        this.config = {
	            appErrorPrefix: undefined
	        };

	        this.configure = function (appErrorPrefix) {
	            this.config.appErrorPrefix = appErrorPrefix;
	        };

	        this.$get = function() {
	            return {config: this.config};
	        };
	    }

	    config.$inject = ['$provide'];

	    /**
	     * Configure by setting an optional string value for appErrorPrefix.
	     * Accessible via config.appErrorPrefix (via config value).
	     * @param  {Object} $provide
	     */
	    /* @ngInject */
	    function config($provide) {
	        $provide.decorator('$exceptionHandler', extendExceptionHandler);
	    }

	    extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];

	    /**
	     * Extend the $exceptionHandler service to also display a toast.
	     * @param  {Object} $delegate
	     * @param  {Object} exceptionHandler
	     * @param  {Object} logger
	     * @return {Function} the decorated $exceptionHandler service
	     */
	    function extendExceptionHandler($delegate, exceptionHandler, logger) {
	        return function(exception, cause) {
	            var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
	            var errorData = {exception: exception, cause: cause};
	            exception.message = appErrorPrefix + exception.message;
	            $delegate(exception, cause);
	            /**
	             * Could add the error to a service's collection,
	             * add errors to $rootScope, log errors to remote web server,
	             * or log locally. Or throw hard. It is entirely up to you.
	             * throw exception;
	             *
	             * @example
	             *     throw { message: 'error message we added' };
	             */
	            logger.error(exception.message, errorData);
	        };
	    }
	})();


/***/ },
/* 16 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular
	        .module('blocks.exception')
	        .factory('exception', exception);

	    /* @ngInject */
	    function exception($q, logger) {
	        var service = {
	            catcher: catcher
	        };
	        return service;

	        function catcher(message) {
	            return function(e) {
	                var thrownDescription;
	                var newMessage;
	                if (e.data && e.data.description) {
	                    thrownDescription = '\n' + e.data.description;
	                    newMessage = message + thrownDescription;
	                }
	                e.data.description = newMessage;
	                logger.error(newMessage);
	                return $q.reject(e);
	            };
	        }
	    }
	})();


/***/ },
/* 17 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular
	        .module('blocks.logger')
	        .factory('logger', logger);

	    logger.$inject = ['$log', 'toastr'];

	    /* @ngInject */
	    function logger($log, toastr) {
	        var service = {
	            showToasts: true,

	            error   : error,
	            info    : info,
	            success : success,
	            warning : warning,

	            // straight to console; bypass toastr
	            log     : $log.log
	        };

	        return service;
	        /////////////////////

	        function error(message, data, title) {
	            toastr.error(message, title);
	            $log.error('Error: ' + message, data);
	        }

	        function info(message, data, title) {
	            toastr.info(message, title);
	            $log.info('Info: ' + message, data);
	        }

	        function success(message, data, title) {
	            toastr.success(message, title);
	            $log.info('Success: ' + message, data);
	        }

	        function warning(message, data, title) {
	            toastr.warning(message, title);
	            $log.warn('Warning: ' + message, data);
	        }
	    }
	}());


/***/ },
/* 18 */
/***/ function(module, exports) {

	/* Help configure the state-base ui.router */
	(function() {
	    'use strict';

	    angular
	        .module('blocks.router')
	        .provider('routerHelper', routerHelperProvider);

	    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
	    /* @ngInject */
	    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
	        /* jshint validthis:true */
	        var config = {
	            docTitle: undefined,
	            resolveAlways: {}
	        };

	        $locationProvider.html5Mode(true);

	        this.configure = function(cfg) {
	            angular.extend(config, cfg);
	        };

	        this.$get = RouterHelper;
	        RouterHelper.$inject = ['$location', '$rootScope', '$state', 'logger'];
	        /* @ngInject */
	        function RouterHelper($location, $rootScope, $state, logger) {
	            var handlingStateChangeError = false;
	            var hasOtherwise = false;
	            var stateCounts = {
	                errors: 0,
	                changes: 0
	            };

	            var service = {
	                configureStates: configureStates,
	                getStates: getStates,
	                stateCounts: stateCounts
	            };

	            init();

	            return service;

	            ///////////////

	            function configureStates(states, otherwisePath) {
	                states.forEach(function(state) {
	                    state.config.resolve =
	                        angular.extend(state.config.resolve || {}, config.resolveAlways);
	                    $stateProvider.state(state.state, state.config);
	                });
	                if (otherwisePath && !hasOtherwise) {
	                    hasOtherwise = true;
	                    $urlRouterProvider.otherwise(otherwisePath);
	                }
	            }

	            function handleRoutingErrors() {
	                // Route cancellation:
	                // On routing error, go to the dashboard.
	                // Provide an exit clause if it tries to do it twice.
	                $rootScope.$on('$stateChangeError',
	                    function(event, toState, toParams, fromState, fromParams, error) {
	                        if (handlingStateChangeError) {
	                            return;
	                        }
	                        stateCounts.errors++;
	                        handlingStateChangeError = true;
	                        var destination = (toState &&
	                            (toState.title || toState.name || toState.loadedTemplateUrl)) ||
	                            'unknown target';
	                        var msg = 'Error routing to ' + destination + '. ' +
	                            (error.data || '') + '. <br/>' + (error.statusText || '') +
	                            ': ' + (error.status || '');
	                        logger.warning(msg, [toState]);
	                        $location.path('/');
	                    }
	                );
	            }

	            function init() {
	                handleRoutingErrors();
	                updateDocTitle();
	            }

	            function getStates() { return $state.get(); }

	            function updateDocTitle() {
	                $rootScope.$on('$stateChangeSuccess',
	                    function(event, toState, toParams, fromState, fromParams) {
	                        stateCounts.changes++;
	                        handlingStateChangeError = false;
	                        var title = config.docTitle + ' ' + (toState.title || '');
	                        $rootScope.title = title; // data bind to <title>
	                    }
	                );
	            }
	        }
	    }
	})();


/***/ },
/* 19 */
/***/ function(module, exports) {

	(function () {
	    'use strict';

	    var core = angular.module('app.core');

	    core.config(toastrConfig);

	    toastrConfig.$inject = ['toastr'];
	    /* @ngInject */
	    function toastrConfig(toastr) {
	        toastr.options.timeOut = 4000;
	        toastr.options.positionClass = 'toast-bottom-right';
	    }

	    var config = {
	        appErrorPrefix: '[hottowel Error] ',
	        appTitle: 'hottowel'
	    };

	    core.value('config', config);

	    core.config(configure);

	    configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
	    /* @ngInject */
	    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
	        if ($logProvider.debugEnabled) {
	            $logProvider.debugEnabled(true);
	        }
	        exceptionHandlerProvider.configure(config.appErrorPrefix);
	        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
	    }

	})();


/***/ },
/* 20 */
/***/ function(module, exports) {

	/* global toastr:false, moment:false */
	(function() {
	    'use strict';

	    angular
	        .module('app.core')
	        .constant('toastr', toastr)
	        .constant('moment', moment);
	})();


/***/ },
/* 21 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular
	        .module('app.core')
	        .run(appRun);

	    /* @ngInject */
	    function appRun(routerHelper) {
	        var otherwise = '/404';
	        routerHelper.configureStates(getStates(), otherwise);
	    }

	    function getStates() {
	        return [
	            {
	                state: '404',
	                config: {
	                    url: '/404',
	                    templateUrl: 'app/core/404.html',
	                    title: '404'
	                }
	            }
	        ];
	    }
	})();


/***/ },
/* 22 */
/***/ function(module, exports) {

	(function () {
	    'use strict';

	    angular
	        .module('app.core')
	        .factory('dataservice', dataservice);

	    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
	    /* @ngInject */
	    function dataservice($http, $q, exception, logger) {
	        var service = {
	            getPeople: getPeople,
	            getMessageCount: getMessageCount
	        };

	        return service;

	        function getMessageCount() { return $q.when(72); }

	        function getPeople() {
	            return $http.get('/api/people.json')
	                .then(success)
	                .catch(fail);

	            function success(response) {
	                return response.data;
	            }

	            function fail(e) {
	                return exception.catcher('XHR Failed for getPeople')(e);
	            }
	        }
	    }
	})();


/***/ },
/* 23 */
/***/ function(module, exports) {

	(function () {
	    'use strict';

	    angular
	        .module('app.dashboard')
	        .controller('DashboardController', DashboardController);

	    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
	    /* @ngInject */
	    function DashboardController($q, dataservice, logger) {
	        var vm = this;
	        vm.news = {
	            title: 'hottowel',
	            description: 'Hot Towel Angular is a SPA template for Angular developers.'
	        };
	        vm.messageCount = 0;
	        vm.people = [];
	        vm.title = 'Dashboard';

	        activate();

	        function activate() {
	            var promises = [getMessageCount(), getPeople()];
	            return $q.all(promises).then(function() {
	                logger.info('Activated Dashboard View');
	            });
	        }

	        function getMessageCount() {
	            return dataservice.getMessageCount().then(function (data) {
	                vm.messageCount = data;
	                return vm.messageCount;
	            });
	        }

	        function getPeople() {
	            return dataservice.getPeople().then(function (data) {
	                vm.people = data;
	                return vm.people;
	            });
	        }
	    }
	})();


/***/ },
/* 24 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular
	        .module('app.dashboard')
	        .run(appRun);

	    appRun.$inject = ['routerHelper'];
	    /* @ngInject */
	    function appRun(routerHelper) {
	        routerHelper.configureStates(getStates());
	    }

	    function getStates() {
	        return [
	            {
	                state: 'dashboard',
	                config: {
	                    url: '/',
	                    templateUrl: 'app/dashboard/dashboard.html',
	                    controller: 'DashboardController',
	                    controllerAs: 'vm',
	                    title: 'dashboard',
	                    settings: {
	                        nav: 1,
	                        content: '<i class="fa fa-dashboard"></i> Dashboard'
	                    }
	                }
	            }
	        ];
	    }
	})();


/***/ },
/* 25 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular
	        .module('app.layout')
	        .directive('htSidebar', htSidebar);

	    /* @ngInject */
	    function htSidebar () {
	        // Opens and closes the sidebar menu.
	        // Usage:
	        //  <div ht-sidebar">
	        //  <div ht-sidebar whenDoneAnimating="vm.sidebarReady()">
	        // Creates:
	        //  <div ht-sidebar class="sidebar">
	        var directive = {
	            link: link,
	            restrict: 'EA',
	            scope: {
	                whenDoneAnimating: '&?'
	            }
	        };
	        return directive;

	        function link(scope, element, attrs) {
	            var $sidebarInner = element.find('.sidebar-inner');
	            var $dropdownElement = element.find('.sidebar-dropdown a');
	            element.addClass('sidebar');
	            $dropdownElement.click(dropdown);

	            function dropdown(e) {
	                var dropClass = 'dropy';
	                e.preventDefault();
	                if (!$dropdownElement.hasClass(dropClass)) {
	                    $sidebarInner.slideDown(350, scope.whenDoneAnimating);
	                    $dropdownElement.addClass(dropClass);
	                } else if ($dropdownElement.hasClass(dropClass)) {
	                    $dropdownElement.removeClass(dropClass);
	                    $sidebarInner.slideUp(350, scope.whenDoneAnimating);
	                }
	            }
	        }
	    }
	})();


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	    'use strict';

	    angular
	        .module('app.layout')
	        .directive('htTopNav', htTopNav);

	    /* @ngInject */
	    function htTopNav () {
	        var directive = {
	            bindToController: true,
	            controller: TopNavController,
	            controllerAs: 'vm',
	            restrict: 'EA',
	            scope: {
	                'navline': '='
	            },
	            template: __webpack_require__(27)
	        };

	        /* @ngInject */
	        function TopNavController() {
	            var vm = this;
	        }

	        return directive;
	    }
	})();


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-fixed-top navbar-inverse\">\n    <div class=\"navbar-header\">\n        <a href=\"/\" class=\"navbar-brand\"><span class=\"brand-title\">{{vm.navline.title}}</span></a>\n        <a class=\"btn navbar-btn navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </a>\n    </div>\n    <div class=\"navbar-collapse collapse\">\n        <div class=\"pull-right navbar-logo\">\n            <ul class=\"nav navbar-nav pull-right\">\n                <li>\n                    <a ng-href=\"{{vm.navline.link}}\" target=\"_blank\">\n                        {{vm.navline.text}}\n                    </a>\n                </li>\n                <li class=\"dropdown dropdown-big\">\n                    <a href=\"http://www.angularjs.org\" target=\"_blank\">\n                        <img src=\"images/AngularJS-small.png\" />\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://www.gulpjs.com/\" target=\"_blank\">\n                        <img src=\"images/gulp-tiny.png\" />\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ },
/* 28 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular
	        .module('app.layout')
	        .controller('ShellController', ShellController);

	    ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger'];
	    /* @ngInject */
	    function ShellController($rootScope, $timeout, config, logger) {
	        var vm = this;
	        vm.busyMessage = 'Please wait ...';
	        vm.isBusy = true;
	        $rootScope.showSplash = true;
	        vm.navline = {
	            title: config.appTitle,
	            text: 'Created by John Papa',
	            link: 'http://twitter.com/john_papa'
	        };

	        activate();

	        function activate() {
	            logger.success(config.appTitle + ' loaded!', null);
	            hideSplash();
	        }

	        function hideSplash() {
	            //Force a 1 second delay so we can see the splash.
	            $timeout(function() {
	                $rootScope.showSplash = false;
	            }, 1000);
	        }
	    }
	})();


/***/ },
/* 29 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular
	        .module('app.layout')
	        .controller('SidebarController', SidebarController);

	    SidebarController.$inject = ['$state', 'routerHelper'];
	    /* @ngInject */
	    function SidebarController($state, routerHelper) {
	        var vm = this;
	        var states = routerHelper.getStates();
	        vm.isCurrent = isCurrent;

	        activate();

	        function activate() { getNavRoutes(); }

	        function getNavRoutes() {
	            vm.navRoutes = states.filter(function(r) {
	                return r.settings && r.settings.nav;
	            }).sort(function(r1, r2) {
	                return r1.settings.nav - r2.settings.nav;
	            });
	        }

	        function isCurrent(route) {
	            if (!route.title || !$state.current || !$state.current.title) {
	                return '';
	            }
	            var menuName = route.title;
	            return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
	        }
	    }
	})();


/***/ },
/* 30 */
/***/ function(module, exports) {

	(function () {
	    'use strict';

	    angular
	        .module('app.widgets')
	        .directive('htImgPerson', htImgPerson);

	    htImgPerson.$inject = ['config'];
	    /* @ngInject */
	    function htImgPerson (config) {
	        //Usage:
	        //<img ht-img-person="{{person.imageSource}}"/>
	        var basePath = config.imageBasePath;
	        var unknownImage = config.unknownPersonImageSource;
	        var directive = {
	            link: link,
	            restrict: 'A'
	        };
	        return directive;

	        function link(scope, element, attrs) {
	            attrs.$observe('htImgPerson', function (value) {
	                value = basePath + (value || unknownImage);
	                attrs.$set('src', value);
	            });
	        }
	    }
	})();


/***/ },
/* 31 */
/***/ function(module, exports) {

	(function() {
	    'use strict';

	    angular
	        .module('app.widgets')
	        .directive('htWidgetHeader', htWidgetHeader);

	    /* @ngInject */
	    function htWidgetHeader() {
	        //Usage:
	        //<div ht-widget-header title="vm.map.title"></div>
	        // Creates:
	        // <div ht-widget-header=""
	        //      title="Movie"
	        //      allow-collapse="true" </div>
	        var directive = {
	            scope: {
	                'title': '@',
	                'subtitle': '@',
	                'rightText': '@',
	                'allowCollapse': '@'
	            },
	            templateUrl: 'app/widgets/widget-header.html',
	            restrict: 'EA'
	        };
	        return directive;
	    }
	})();


/***/ }
/******/ ]);