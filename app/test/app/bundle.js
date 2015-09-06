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
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
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
/***/ function(module, exports) {

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
	        }
	    }
	})();


/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ function(module, exports) {

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
	            templateUrl: 'app/layout/ht-top-nav.html'
	        };

	        /* @ngInject */
	        function TopNavController() {
	            var vm = this;
	        }

	        return directive;
	    }
	})();


/***/ },
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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