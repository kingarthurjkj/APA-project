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

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(4);

	__webpack_require__(9);

	__webpack_require__(16);

	__webpack_require__(44);

	__webpack_require__(45);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app', ['app.run', 'app.filters', 'app.services', 'app.components', 'app.directives', 'app.routes', 'app.config', 'app.partials']);

	angular.module('app.run', []);
	angular.module('app.routes', []);
	angular.module('app.filters', []);
	angular.module('app.services', []);
	angular.module('app.config', []);
	angular.module('app.directives', []);
	angular.module('app.components', ['ui.router', 'ngMaterial', 'angular-loading-bar', 'restangular', 'ngStorage', 'satellizer', 'naif.base64']);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(3);

	angular.module('app.run').run(_routes.RoutesRun);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	RoutesRun.$inject = ["$state", "$transitions"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesRun = RoutesRun;
	function RoutesRun($state, $transitions) {
	    'ngInject';

	    var requiresAuthCriteria = {
	        to: function to($state) {
	            return $state.data && $state.data.auth;
	        }
	    };

	    var redirectToLogin = function redirectToLogin($auth) {
	        'ngInject';

	        if (!$auth.isAuthenticated()) {
	            return $state.target('app.login', undefined, { location: false });
	        }
	    };
	    redirectToLogin.$inject = ["$auth"];

	    $transitions.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 10 });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(5);

	var _loading_bar = __webpack_require__(6);

	var _theme = __webpack_require__(7);

	var _satellizer = __webpack_require__(8);

	angular.module('app.config').config(_routes.RoutesConfig).config(_loading_bar.LoadingBarConfig).config(_theme.ThemeConfig).config(_satellizer.SatellizerConfig);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesConfig = RoutesConfig;
	function RoutesConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';

	    var getView = function getView(viewName) {
	        return './views/app/pages/' + viewName + '/' + viewName + '.page.html';
	    };

	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('app', {
	        abstract: true,
	        data: {}, //{auth: true} would require JWT auth
	        views: {
	            header: {
	                templateUrl: getView('header')
	            },
	            footer: {
	                templateUrl: getView('footer')
	            },
	            main: {}
	        }
	    }).state('app.landing', {
	        url: '/',
	        views: {
	            'main@': {
	                templateUrl: getView('start-page-cw')
	            }
	        }
	    }).state('app.login', {
	        url: '/login',
	        views: {
	            'main@': {
	                templateUrl: getView('login')
	            }
	        }
	    }).state('app.register', {
	        url: '/register',
	        views: {
	            'main@': {
	                templateUrl: getView('register')
	            }
	        }
	    }).state('app.forgot_password', {
	        url: '/forgot-password',
	        views: {
	            'main@': {
	                templateUrl: getView('forgot-password')
	            }
	        }
	    }).state('app.reset_password', {
	        url: '/reset-password/:email/:token',
	        views: {
	            'main@': {
	                templateUrl: getView('reset-password')
	            }
	        }
	    }).state('app.create_element', {
	        url: '/create-element',
	        views: {
	            'main@': {
	                templateUrl: getView('create-element-CW')
	            }
	        }
	    }).state('app.list_elements', {
	        url: '/list-elements',
	        views: {
	            'main@': {
	                templateUrl: getView('list-elements-CW')
	            }
	        }
	    }).state('app.list_evaluates', {
	        url: '/list-evaluates',
	        views: {
	            'main@': {
	                templateUrl: getView('list-evluate-CW')
	            }
	        }
	    }).state('app.create_post', {
	        url: '/create-post',
	        views: {
	            'main@': {
	                templateUrl: getView('create_post')
	            }
	        }
	    }).state('app.create_activity', {
	        url: '/create-activity',
	        views: {
	            'main@': {
	                templateUrl: getView('nav-form-CW')
	            }
	        }
	    }).state('app.evaluate', {
	        url: '/evaluate',
	        views: {
	            'main@': {
	                templateUrl: getView('evaluate-form-CW')
	            }
	        }
	    }).state('app.create_group', {
	        url: '/create-group',
	        views: {
	            'main@': {
	                templateUrl: getView('create-group-CW')
	            }
	        }
	    })
	    // .state('app.activity', {
	    //     url: '/activity',
	    //     views: {
	    //         'main@': {
	    //             templateUrl: getView('Activity-CW')
	    //         }
	    //     }
	    // })
	    .state('app.question', {
	        url: '/question',
	        views: {
	            'main@': {
	                templateUrl: getView('question-CW')
	            }
	        }
	    }).state('app.day0', {
	        url: '/day0',
	        views: {
	            'main@': {
	                templateUrl: getView('day0-cw')
	            }
	        }
	    }).state('app.day1', {
	        url: '/day1',
	        views: {
	            'main@': {
	                templateUrl: getView('day1-cw')
	            }
	        }
	    }).state('app.day2', {
	        url: '/day2',
	        views: {
	            'main@': {
	                templateUrl: getView('day2-cw')
	            }
	        }
	    }).state('app.day3', {
	        url: '/day3',
	        views: {
	            'main@': {
	                templateUrl: getView('day3-cw')
	            }
	        }
	    }).state('app.day4', {
	        url: '/day4',
	        views: {
	            'main@': {
	                templateUrl: getView('day4-cw')
	            }
	        }
	    }).state('app.day5', {
	        url: '/day5',
	        views: {
	            'main@': {
	                templateUrl: getView('day5-cw')
	            }
	        }
	    }).state('app.day6', {
	        url: '/day6',
	        views: {
	            'main@': {
	                templateUrl: getView('day6-cw')
	            }
	        }
	    }).state('app.day7', {
	        url: '/day7',
	        views: {
	            'main@': {
	                templateUrl: getView('day7-cw')
	            }
	        }
	    }).state('app.day8', {
	        url: '/day8',
	        views: {
	            'main@': {
	                templateUrl: getView('day8-cw')
	            }
	        }
	    }).state('app.activity', {
	        url: '/activity/:id',
	        params: { id: null },
	        views: {
	            'main@': {
	                templateUrl: getView('activity-page-cw')
	            }
	        }
	    });
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	LoadingBarConfig.$inject = ["cfpLoadingBarProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LoadingBarConfig = LoadingBarConfig;
	function LoadingBarConfig(cfpLoadingBarProvider) {
		'ngInject';

		cfpLoadingBarProvider.includeSpinner = false;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	ThemeConfig.$inject = ["$mdThemingProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ThemeConfig = ThemeConfig;
	function ThemeConfig($mdThemingProvider) {
		'ngInject';
		/* For more info, visit https://material.angularjs.org/#/Theming/01_introduction */

		$mdThemingProvider.theme('default').primaryPalette('light-blue', {
			default: '600'
		}).accentPalette('grey').warnPalette('red');

		$mdThemingProvider.theme('warn');
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	SatellizerConfig.$inject = ["$authProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SatellizerConfig = SatellizerConfig;
	function SatellizerConfig($authProvider) {
		'ngInject';

		$authProvider.httpInterceptor = function () {
			return true;
		};

		$authProvider.loginUrl = '/api/auth/login';
		$authProvider.signupUrl = '/api/auth/register';
		$authProvider.tokenRoot = 'data'; //compensates success response macro
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _capitalize = __webpack_require__(10);

	var _human_readable = __webpack_require__(11);

	var _truncate_characters = __webpack_require__(12);

	var _truncate_words = __webpack_require__(13);

	var _trust_html = __webpack_require__(14);

	var _ucfirst = __webpack_require__(15);

	angular.module('app.filters').filter('capitalize', _capitalize.CapitalizeFilter).filter('humanReadable', _human_readable.HumanReadableFilter).filter('truncateCharacters', _truncate_characters.TruncatCharactersFilter).filter('truncateWords', _truncate_words.TruncateWordsFilter).filter('trustHtml', _trust_html.TrustHtmlFilter).filter('ucfirst', _ucfirst.UcFirstFilter);

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CapitalizeFilter = CapitalizeFilter;
	function CapitalizeFilter() {
		return function (input) {
			return input ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}) : '';
		};
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HumanReadableFilter = HumanReadableFilter;
	function HumanReadableFilter() {
		return function humanize(str) {
			if (!str) {
				return '';
			}
			var frags = str.split('_');
			for (var i = 0; i < frags.length; i++) {
				frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
			}
			return frags.join(' ');
		};
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncatCharactersFilter = TruncatCharactersFilter;
	function TruncatCharactersFilter() {
		return function (input, chars, breakOnWord) {
			if (isNaN(chars)) {
				return input;
			}
			if (chars <= 0) {
				return '';
			}
			if (input && input.length > chars) {
				input = input.substring(0, chars);

				if (!breakOnWord) {
					var lastspace = input.lastIndexOf(' ');
					// Get last space
					if (lastspace !== -1) {
						input = input.substr(0, lastspace);
					}
				} else {
					while (input.charAt(input.length - 1) === ' ') {
						input = input.substr(0, input.length - 1);
					}
				}
				return input + '...';
			}
			return input;
		};
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncateWordsFilter = TruncateWordsFilter;
	function TruncateWordsFilter() {
		return function (input, words) {
			if (isNaN(words)) {
				return input;
			}
			if (words <= 0) {
				return '';
			}
			if (input) {
				var inputWords = input.split(/\s+/);
				if (inputWords.length > words) {
					input = inputWords.slice(0, words).join(' ') + '...';
				}
			}
			return input;
		};
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TrustHtmlFilter = TrustHtmlFilter;
	function TrustHtmlFilter($sce) {
		return function (html) {
			return $sce.trustAsHtml(html);
		};
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UcFirstFilter = UcFirstFilter;
	function UcFirstFilter() {
		return function (input) {
			if (!input) {
				return null;
			}
			return input.substring(0, 1).toUpperCase() + input.substring(1);
		};
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _activityPageCw = __webpack_require__(17);

	var _day8Cw = __webpack_require__(18);

	var _day7Cw = __webpack_require__(19);

	var _day6Cw = __webpack_require__(20);

	var _day5Cw = __webpack_require__(21);

	var _day4Cw = __webpack_require__(22);

	var _day3Cw = __webpack_require__(23);

	var _day2Cw = __webpack_require__(24);

	var _day1Cw = __webpack_require__(25);

	var _day0Cw = __webpack_require__(26);

	var _startPageCw = __webpack_require__(27);

	var _questionCW = __webpack_require__(28);

	var _listElementsCW = __webpack_require__(29);

	var _listEvluateCW = __webpack_require__(30);

	var _evluateFormCW = __webpack_require__(31);

	var _createGroupCW = __webpack_require__(32);

	var _createElementCW = __webpack_require__(33);

	var _navFormCW = __webpack_require__(34);

	var _ActivityFormCW = __webpack_require__(35);

	var _create_post_form = __webpack_require__(36);

	var _appHeader = __webpack_require__(37);

	var _appView = __webpack_require__(38);

	var _appShell = __webpack_require__(39);

	var _resetPassword = __webpack_require__(40);

	var _forgotPassword = __webpack_require__(41);

	var _loginForm = __webpack_require__(42);

	var _registerForm = __webpack_require__(43);

	angular.module('app.components').component('activityPageCw', _activityPageCw.ActivityPageCwComponent).component('day8Cw', _day8Cw.Day8CwComponent).component('day7Cw', _day7Cw.Day7CwComponent).component('day6Cw', _day6Cw.Day6CwComponent).component('day5Cw', _day5Cw.Day5CwComponent).component('day4Cw', _day4Cw.Day4CwComponent).component('day3Cw', _day3Cw.Day3CwComponent).component('day2Cw', _day2Cw.Day2CwComponent).component('day1Cw', _day1Cw.Day1CwComponent).component('day0Cw', _day0Cw.Day0CwComponent).component('startPageCw', _startPageCw.StartPageCwComponent).component('questionCW', _questionCW.QuestionCWComponent).component('listElementsCW', _listElementsCW.ListElementsCWComponent).component('listEvluateCW', _listEvluateCW.ListEvluateCWComponent).component('evluateFormCW', _evluateFormCW.EvluateFormCWComponent).component('createGroupCW', _createGroupCW.CreateGroupCWComponent).component('createElementCW', _createElementCW.CreateElementCWComponent).component('navFormCW', _navFormCW.NavFormCWComponent).component('activityFormCW', _ActivityFormCW.ActivityFormCWComponent).component('createPostForm', _create_post_form.CreatePostFormComponent).component('appHeader', _appHeader.AppHeaderComponent).component('appView', _appView.AppViewComponent).component('appShell', _appShell.AppShellComponent).component('resetPassword', _resetPassword.ResetPasswordComponent).component('forgotPassword', _forgotPassword.ForgotPasswordComponent).component('loginForm', _loginForm.LoginFormComponent).component('registerForm', _registerForm.RegisterFormComponent);

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ActivityPageCwController = function () {
	    ActivityPageCwController.$inject = ["API", "$stateParams", "$mdSidenav"];
	    function ActivityPageCwController(API, $stateParams, $mdSidenav) {
	        'ngInject';

	        _classCallCheck(this, ActivityPageCwController);

	        this.API = API;
	        this.$state = $stateParams;
	        this.$mdSidenav = $mdSidenav;
	        this.id = '';
	        this.gid = '';
	        this.gurl = '';
	        this.activityTitle = '';
	        this.activityText = '';
	    }

	    _createClass(ActivityPageCwController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.id = this.$state.id;
	            this.gid = this.id % 9;
	            this.gurl = "img/act/" + this.gid + ".png";
	            this.getActivity();
	        }
	    }, {
	        key: 'getActivity',
	        value: function getActivity() {
	            var _this = this;

	            this.API.all('activity/' + this.gid).get('').then(function (response) {
	                _this.activityTitle = response.data.activity.name;
	                _this.activityText = response.data.activity.description;
	            });
	        }
	    }, {
	        key: 'isOpenRight',
	        value: function isOpenRight() {
	            return this.$mdSidenav('right').isOpen();
	        }
	    }, {
	        key: 'toggleRight',
	        value: function toggleRight() {
	            this.$mdSidenav(right).toggle();
	        }
	    }]);

	    return ActivityPageCwController;
	}();

	var ActivityPageCwComponent = exports.ActivityPageCwComponent = {
	    templateUrl: './views/app/components/activity-page-cw/activity-page-cw.component.html',
	    controller: ActivityPageCwController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Day8CwController = function () {
	    function Day8CwController() {
	        'ngInject';

	        //

	        _classCallCheck(this, Day8CwController);
	    }

	    _createClass(Day8CwController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return Day8CwController;
	}();

	var Day8CwComponent = exports.Day8CwComponent = {
	    templateUrl: './views/app/components/day8-cw/day8-cw.component.html',
	    controller: Day8CwController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Day7CwController = function () {
	    function Day7CwController() {
	        'ngInject';

	        //

	        _classCallCheck(this, Day7CwController);
	    }

	    _createClass(Day7CwController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return Day7CwController;
	}();

	var Day7CwComponent = exports.Day7CwComponent = {
	    templateUrl: './views/app/components/day7-cw/day7-cw.component.html',
	    controller: Day7CwController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Day6CwController = function () {
	    function Day6CwController() {
	        'ngInject';

	        //

	        _classCallCheck(this, Day6CwController);
	    }

	    _createClass(Day6CwController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return Day6CwController;
	}();

	var Day6CwComponent = exports.Day6CwComponent = {
	    templateUrl: './views/app/components/day6-cw/day6-cw.component.html',
	    controller: Day6CwController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Day5CwController = function () {
	    function Day5CwController() {
	        'ngInject';

	        //

	        _classCallCheck(this, Day5CwController);
	    }

	    _createClass(Day5CwController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return Day5CwController;
	}();

	var Day5CwComponent = exports.Day5CwComponent = {
	    templateUrl: './views/app/components/day5-cw/day5-cw.component.html',
	    controller: Day5CwController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Day4CwController = function () {
	    function Day4CwController() {
	        'ngInject';

	        //

	        _classCallCheck(this, Day4CwController);
	    }

	    _createClass(Day4CwController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return Day4CwController;
	}();

	var Day4CwComponent = exports.Day4CwComponent = {
	    templateUrl: './views/app/components/day4-cw/day4-cw.component.html',
	    controller: Day4CwController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Day3CwController = function () {
	    function Day3CwController() {
	        'ngInject';

	        //

	        _classCallCheck(this, Day3CwController);
	    }

	    _createClass(Day3CwController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return Day3CwController;
	}();

	var Day3CwComponent = exports.Day3CwComponent = {
	    templateUrl: './views/app/components/day3-cw/day3-cw.component.html',
	    controller: Day3CwController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Day2CwController = function () {
	    function Day2CwController() {
	        'ngInject';

	        //

	        _classCallCheck(this, Day2CwController);
	    }

	    _createClass(Day2CwController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return Day2CwController;
	}();

	var Day2CwComponent = exports.Day2CwComponent = {
	    templateUrl: './views/app/components/day2-cw/day2-cw.component.html',
	    controller: Day2CwController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Day1CwController = function () {
	    function Day1CwController() {
	        'ngInject';

	        //

	        _classCallCheck(this, Day1CwController);
	    }

	    _createClass(Day1CwController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return Day1CwController;
	}();

	var Day1CwComponent = exports.Day1CwComponent = {
	    templateUrl: './views/app/components/day1-cw/day1-cw.component.html',
	    controller: Day1CwController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Day0CwController = function () {
	    function Day0CwController() {
	        'ngInject';

	        //

	        _classCallCheck(this, Day0CwController);
	    }

	    _createClass(Day0CwController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return Day0CwController;
	}();

	var Day0CwComponent = exports.Day0CwComponent = {
	    templateUrl: './views/app/components/day0-cw/day0-cw.component.html',
	    controller: Day0CwController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StartPageCwController = function () {
	    function StartPageCwController() {
	        'ngInject';

	        //

	        _classCallCheck(this, StartPageCwController);
	    }

	    _createClass(StartPageCwController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return StartPageCwController;
	}();

	var StartPageCwComponent = exports.StartPageCwComponent = {
	    templateUrl: './views/app/components/start-page-cw/start-page-cw.component.html',
	    controller: StartPageCwController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var QuestionCWController = function () {
	    QuestionCWController.$inject = ["API", "ToastService"];
	    function QuestionCWController(API, ToastService) {
	        'ngInject';

	        _classCallCheck(this, QuestionCWController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.questions = [];
	    }

	    _createClass(QuestionCWController, [{
	        key: '$onInit',
	        value: function $onInit() {

	            this.getQuestions();
	        }
	    }, {
	        key: 'getQuestions',
	        value: function getQuestions() {
	            var _this = this;

	            this.API.all('list-questions').get('').then(function (response) {
	                _this.questions = response.data;
	            });
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            var data = {
	                activity: this.activity,
	                problem: this.problem,
	                option: this.option
	            };

	            this.API.all('questions').post(data).then(function (response) {
	                _this2.ToastService.show('question added successfully');
	            });
	            this.getQuestions();
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(id) {
	            var _this3 = this;

	            var data = {
	                id: id
	            };

	            this.API.all('delete-question').post(data).then(function (response) {
	                _this3.ToastService.show('question delete successfully');
	            });
	            this.getQuestions();
	        }
	    }]);

	    return QuestionCWController;
	}();

	var QuestionCWComponent = exports.QuestionCWComponent = {
	    templateUrl: './views/app/components/question-CW/question-CW.component.html',
	    controller: QuestionCWController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListElementsCWController = function () {
	    ListElementsCWController.$inject = ["API", "ToastService"];
	    function ListElementsCWController(API, ToastService) {
	        'ngInject';

	        _classCallCheck(this, ListElementsCWController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.elements = [];
	    }

	    _createClass(ListElementsCWController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.getElements();
	        }
	    }, {
	        key: 'getElements',
	        value: function getElements() {
	            var _this = this;

	            this.API.all('list-elements').get('').then(function (response) {
	                _this.elements = response.data;
	            });
	        }
	    }]);

	    return ListElementsCWController;
	}();

	var ListElementsCWComponent = exports.ListElementsCWComponent = {
	    templateUrl: './views/app/components/list-elements-CW/list-elements-CW.component.html',
	    controller: ListElementsCWController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListEvluateCWController = function () {
	    ListEvluateCWController.$inject = ["API", "ToastService"];
	    function ListEvluateCWController(API, ToastService) {
	        'ngInject';

	        _classCallCheck(this, ListEvluateCWController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.evaluates = [];
	    }

	    _createClass(ListEvluateCWController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.getEvaluates();
	        }
	    }, {
	        key: 'getEvaluates',
	        value: function getEvaluates() {
	            var _this = this;

	            this.API.all('list-evaluates').get('').then(function (response) {
	                _this.evaluates = response.data;
	            });
	        }
	    }]);

	    return ListEvluateCWController;
	}();

	var ListEvluateCWComponent = exports.ListEvluateCWComponent = {
	    templateUrl: './views/app/components/list-evluate-CW/list-evluate-CW.component.html',
	    controller: ListEvluateCWController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EvluateFormCWController = function () {
	    EvluateFormCWController.$inject = ["API", "ToastService"];
	    function EvluateFormCWController(API, ToastService) {
	        'ngInject';

	        _classCallCheck(this, EvluateFormCWController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.firstquestions = "";
	        this.secondquestions = "";
	        this.id = 1;
	    }

	    _createClass(EvluateFormCWController, [{
	        key: "$onInit",
	        value: function $onInit() {
	            this.getQuestion();
	        }
	    }, {
	        key: "getQuestion",
	        value: function getQuestion() {
	            var _this = this;

	            this.API.all('question/' + this.id).get('').then(function (response) {
	                _this.firstquestions = response.data.questions.problem;
	                _this.id = response.data.questions.id;
	            });
	        }
	    }, {
	        key: "submit",
	        value: function submit() {
	            var _this2 = this;

	            var data = {
	                id: this.id,
	                giver: this.giver,
	                taker: this.taker,
	                day: this.day,
	                answer: this.answer
	            };

	            this.API.all('evaluate').post(data).then(function (response) {
	                _this2.ToastService.show('Evaluate added successfully');
	            });
	            this.id = this.id + 1;
	            this.getQuestion();
	        }
	    }, {
	        key: "three",
	        value: function three(id) {
	            var _this3 = this;

	            this.API.all('groupquestion/' + id).get('').then(function (response) {
	                _this3.secondquestions = response.data.groupquestion.problem;
	            });
	        }
	    }]);

	    return EvluateFormCWController;
	}();

	var EvluateFormCWComponent = exports.EvluateFormCWComponent = {
	    templateUrl: './views/app/components/evluate-form-CW/evluate-form-CW.component.html',
	    controller: EvluateFormCWController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateGroupCWController = function () {
	    CreateGroupCWController.$inject = ["API", "ToastService"];
	    function CreateGroupCWController(API, ToastService) {
	        'ngInject';

	        _classCallCheck(this, CreateGroupCWController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.groups = [];
	    }

	    _createClass(CreateGroupCWController, [{
	        key: '$onInit',
	        value: function $onInit() {

	            this.getGroups();
	        }
	    }, {
	        key: 'getGroups',
	        value: function getGroups() {
	            var _this = this;

	            this.API.all('list-groups').get('').then(function (response) {
	                _this.groups = response.data;
	            });
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            var data = {
	                name: this.name,
	                option: this.option
	            };

	            this.API.all('groups').post(data).then(function (response) {
	                _this2.ToastService.show('Group added successfully');
	            });
	            this.getGroups();
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(id) {
	            var _this3 = this;

	            var data = {
	                id: id
	            };

	            this.API.all('delete-group').post(data).then(function (response) {
	                _this3.ToastService.show('Group delete successfully');
	            });
	            this.getGroups();
	        }
	    }]);

	    return CreateGroupCWController;
	}();

	var CreateGroupCWComponent = exports.CreateGroupCWComponent = {
	    templateUrl: './views/app/components/create-group-CW/create-group-CW.component.html',
	    controller: CreateGroupCWController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateElementCWController = function () {
	    CreateElementCWController.$inject = ["API", "ToastService"];
	    function CreateElementCWController(API, ToastService) {
	        'ngInject';

	        _classCallCheck(this, CreateElementCWController);

	        this.API = API;
	        this.ToastService = ToastService;
	    }

	    _createClass(CreateElementCWController, [{
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            var data = {
	                titre: this.titre,
	                description: this.description,
	                lieu: this.lieu,
	                photo: this.photo.base64
	            };

	            this.API.all('create-element').post(data).then(function (response) {
	                _this.ToastService.show('Élément ajouté !');
	            });
	        }
	    }]);

	    return CreateElementCWController;
	}();

	var CreateElementCWComponent = exports.CreateElementCWComponent = {
	    templateUrl: './views/app/components/create-element-CW/create-element-CW.component.html',
	    controller: CreateElementCWController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavFormCWController = function () {
	    function NavFormCWController() {
	        'ngInject';

	        //

	        _classCallCheck(this, NavFormCWController);
	    }

	    _createClass(NavFormCWController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return NavFormCWController;
	}();

	var NavFormCWComponent = exports.NavFormCWComponent = {
	    templateUrl: './views/app/components/nav-form-CW/nav-form-CW.component.html',
	    controller: NavFormCWController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ActivityFormCWController = function () {
	    ActivityFormCWController.$inject = ["API", "ToastService"];
	    function ActivityFormCWController(API, ToastService) {
	        'ngInject';

	        _classCallCheck(this, ActivityFormCWController);

	        this.API = API;
	        this.ToastService = ToastService;
	        this.activities = [];
	    }

	    _createClass(ActivityFormCWController, [{
	        key: '$onInit',
	        value: function $onInit() {

	            this.getActivities();
	        }
	    }, {
	        key: 'getActivities',
	        value: function getActivities() {
	            var _this = this;

	            this.API.all('list-activities').get('').then(function (response) {
	                _this.activities = response.data;
	            });
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            var data = {
	                name: this.name,
	                description: this.description,
	                options: this.options
	            };

	            this.API.all('activities').post(data).then(function (response) {
	                _this2.ToastService.show('Activity added successfully');
	            });
	            this.getActivities();
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(id) {
	            var _this3 = this;

	            var data = {
	                id: id
	            };

	            this.API.all('delete-activity').post(data).then(function (response) {
	                _this3.ToastService.show('Activity delete successfully');
	            });
	            this.getActivities();
	        }
	    }]);

	    return ActivityFormCWController;
	}();

	var ActivityFormCWComponent = exports.ActivityFormCWComponent = {
	    templateUrl: './views/app/components/Activity-form-CW/Activity-form-CW.component.html',
	    controller: ActivityFormCWController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreatePostFormController = function () {
	    CreatePostFormController.$inject = ["API", "ToastService"];
	    function CreatePostFormController(API, ToastService) {
	        'ngInject';

	        _classCallCheck(this, CreatePostFormController);

	        this.API = API;
	        this.ToastService = ToastService;
	    }

	    _createClass(CreatePostFormController, [{
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            var data = {
	                name: this.name,
	                topic: this.topic
	            };

	            this.API.all('posts').post(data).then(function (response) {
	                _this.ToastService.show('Post added successfully');
	            });
	        }
	    }]);

	    return CreatePostFormController;
	}();

	var CreatePostFormComponent = exports.CreatePostFormComponent = {
	    templateUrl: './views/app/components/create_post_form/create_post_form.component.html',
	    controller: CreatePostFormController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppHeaderController = function () {
	    AppHeaderController.$inject = ["$sce"];
	    function AppHeaderController($sce) {
	        'ngInject';

	        _classCallCheck(this, AppHeaderController);

	        this.$sce = $sce;
	    }

	    _createClass(AppHeaderController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            //defer iframe loading
	            var url = 'https://ghbtns.com/github-btn.html?user=jadjoubran&repo=laravel5-angular-material-starter&type=star&count=true&size=large';
	            this.githubWidget = this.$sce.trustAsResourceUrl(url);
	        }
	    }]);

	    return AppHeaderController;
	}();

	var AppHeaderComponent = exports.AppHeaderComponent = {
	    templateUrl: './views/app/components/app-header/app-header.component.html',
	    controller: AppHeaderController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppViewController = function () {
	    AppViewController.$inject = ["$mdToast", "ToastService", "$window"];
	    function AppViewController($mdToast, ToastService, $window) {
	        'ngInject';

	        _classCallCheck(this, AppViewController);

	        this.$window = $window;
	        this.$mdToast = $mdToast;
	        this.ToastService = ToastService;
	    }

	    _createClass(AppViewController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.registerServiceWorker();
	            this.checkForNewerVersions();
	        }
	    }, {
	        key: 'registerServiceWorker',
	        value: function registerServiceWorker() {
	            if (!('serviceWorker' in navigator)) {
	                return false;
	            }
	            navigator.serviceWorker.register('/service-worker.js').then(this.handleRegistration.bind(this));
	        }
	    }, {
	        key: 'handleRegistration',
	        value: function handleRegistration(registration) {
	            var _this = this;

	            registration.onupdatefound = function () {
	                var installingWorker = registration.installing;
	                installingWorker.onstatechange = function () {
	                    if (installingWorker.state === 'installed') {
	                        if (!navigator.serviceWorker.controller) {
	                            _this.ToastService.show('App is ready for offline use.');
	                        }
	                    }
	                };
	            };
	        }
	    }, {
	        key: 'checkForNewerVersions',
	        value: function checkForNewerVersions() {
	            var _this2 = this;

	            if (navigator.serviceWorker && navigator.serviceWorker.controller) {
	                navigator.serviceWorker.controller.onstatechange = function (e) {

	                    if (e.target.state === 'redundant') {
	                        var toast = _this2.$mdToast.simple().content('A newer version of this site is available.').position(_this2.ToastService.position).action('Refresh').hideDelay(_this2.ToastService.delay);

	                        _this2.$mdToast.show(toast).then(function () {
	                            _this2.$window.location.reload();
	                        });
	                    }
	                };
	            }
	        }
	    }]);

	    return AppViewController;
	}();

	var AppViewComponent = exports.AppViewComponent = {
	    templateUrl: './views/app/components/app-view/app-view.component.html',
	    controller: AppViewController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppShellController = function () {
	    function AppShellController() {
	        'ngInject';

	        //

	        _classCallCheck(this, AppShellController);
	    }

	    _createClass(AppShellController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return AppShellController;
	}();

	var AppShellComponent = exports.AppShellComponent = {
	    templateUrl: './views/app/components/app-shell/app-shell.component.html',
	    controller: AppShellController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ResetPasswordController = function () {
	    ResetPasswordController.$inject = ["API", "ToastService", "$state"];
	    function ResetPasswordController(API, ToastService, $state) {
	        'ngInject';

	        _classCallCheck(this, ResetPasswordController);

	        this.API = API;
	        this.$state = $state;
	        this.ToastService = ToastService;
	    }

	    _createClass(ResetPasswordController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.password = '';
	            this.password_confirmation = '';
	            this.isValidToken = false;

	            this.verifyToken();
	        }
	    }, {
	        key: 'verifyToken',
	        value: function verifyToken() {
	            var _this = this;

	            var email = this.$state.params.email;
	            var token = this.$state.params.token;

	            this.API.all('auth/password').get('verify', {
	                email: email, token: token
	            }).then(function () {
	                _this.isValidToken = true;
	            }, function () {
	                _this.$state.go('app.landing');
	            });
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            var data = {
	                email: this.$state.params.email,
	                token: this.$state.params.token,
	                password: this.password,
	                password_confirmation: this.password_confirmation
	            };

	            this.API.all('auth/password/reset').post(data).then(function () {
	                _this2.ToastService.show('Password successfully changed');
	                _this2.$state.go('app.login');
	            });
	        }
	    }]);

	    return ResetPasswordController;
	}();

	var ResetPasswordComponent = exports.ResetPasswordComponent = {
	    templateUrl: './views/app/components/reset-password/reset-password.component.html',
	    controller: ResetPasswordController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ForgotPasswordController = function () {
	    ForgotPasswordController.$inject = ["API", "ToastService", "$state"];
	    function ForgotPasswordController(API, ToastService, $state) {
	        'ngInject';

	        _classCallCheck(this, ForgotPasswordController);

	        this.API = API;
	        this.$state = $state;
	        this.ToastService = ToastService;
	    }

	    _createClass(ForgotPasswordController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.email = '';
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            this.API.all('auth/password/email').post({
	                email: this.email
	            }).then(function () {
	                _this.ToastService.show('Please check your email for instructions on how to reset your password.');
	                _this.$state.go('app.landing');
	            });
	        }
	    }]);

	    return ForgotPasswordController;
	}();

	var ForgotPasswordComponent = exports.ForgotPasswordComponent = {
	    templateUrl: './views/app/components/forgot-password/forgot-password.component.html',
	    controller: ForgotPasswordController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginFormController = function () {
		LoginFormController.$inject = ["$auth", "ToastService"];
		function LoginFormController($auth, ToastService) {
			'ngInject';

			_classCallCheck(this, LoginFormController);

			this.$auth = $auth;
			this.ToastService = ToastService;
		}

		_createClass(LoginFormController, [{
			key: '$onInit',
			value: function $onInit() {
				this.email = '';
				this.password = '';
			}
		}, {
			key: 'login',
			value: function login() {
				var _this = this;

				var user = {
					email: this.email,
					password: this.password
				};

				this.$auth.login(user).then(function (response) {
					_this.$auth.setToken(response.data);

					_this.ToastService.show('Logged in successfully.');
				}).catch(this.failedLogin.bind(this));
			}
		}, {
			key: 'failedLogin',
			value: function failedLogin(response) {
				if (response.status === 422) {
					for (var error in response.data.errors) {
						return this.ToastService.error(response.data.errors[error][0]);
					}
				}
				this.ToastService.error(response.statusText);
			}
		}]);

		return LoginFormController;
	}();

	var LoginFormComponent = exports.LoginFormComponent = {
		templateUrl: './views/app/components/login-form/login-form.component.html',
		controller: LoginFormController,
		controllerAs: 'vm',
		bindings: {}
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RegisterFormController = function () {
		RegisterFormController.$inject = ["$auth", "ToastService"];
		function RegisterFormController($auth, ToastService) {
			'ngInject';

			_classCallCheck(this, RegisterFormController);

			this.$auth = $auth;
			this.ToastService = ToastService;
		}

		_createClass(RegisterFormController, [{
			key: '$onInit',
			value: function $onInit() {
				this.name = '';
				this.email = '';
				this.password = '';
			}
		}, {
			key: 'register',
			value: function register() {
				var _this = this;

				var user = {
					name: this.name,
					email: this.email,
					password: this.password
				};

				this.$auth.signup(user).then(function (response) {
					//remove this if you require email verification
					_this.$auth.setToken(response.data);

					_this.ToastService.show('Successfully registered.');
				}).catch(this.failedRegistration.bind(this));
			}
		}, {
			key: 'failedRegistration',
			value: function failedRegistration(response) {
				if (response.status === 422) {
					for (var error in response.data.errors) {
						return this.ToastService.error(response.data.errors[error][0]);
					}
				}
				this.ToastService.error(response.statusText);
			}
		}]);

		return RegisterFormController;
	}();

	var RegisterFormComponent = exports.RegisterFormComponent = {
		templateUrl: './views/app/components/register-form/register-form.component.html',
		controller: RegisterFormController,
		controllerAs: 'vm',
		bindings: {}
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app.directives');

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _API = __webpack_require__(46);

	var _dialog = __webpack_require__(47);

	var _toast = __webpack_require__(48);

	angular.module('app.services').service('API', _API.APIService).service('DialogService', _dialog.DialogService).service('ToastService', _toast.ToastService);

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var APIService = exports.APIService = ["Restangular", "ToastService", "$window", function APIService(Restangular, ToastService, $window) {
		'ngInject';
		//content negotiation

		_classCallCheck(this, APIService);

		var headers = {
			'Content-Type': 'application/json',
			'Accept': 'application/x.laravel.v1+json'
		};

		return Restangular.withConfig(function (RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('/api/').setDefaultHeaders(headers).setErrorInterceptor(function (response) {
				if (response.status === 422 || response.status === 401) {
					for (var error in response.data.errors) {
						return ToastService.error(response.data.errors[error][0]);
					}
				}
				if (response.status === 500) {
					return ToastService.error(response.statusText);
				}
			}).addFullRequestInterceptor(function (element, operation, what, url, headers) {
				var token = $window.localStorage.satellizer_token;
				if (token) {
					headers.Authorization = 'Bearer ' + token;
				}
			});
		});
	}];

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DialogService = exports.DialogService = function () {
	    DialogService.$inject = ["$mdDialog"];
	    function DialogService($mdDialog) {
	        'ngInject';

	        _classCallCheck(this, DialogService);

	        this.$mdDialog = $mdDialog;
	    }

	    _createClass(DialogService, [{
	        key: 'fromTemplate',
	        value: function fromTemplate(template, options) {
	            if (!template) {
	                return false;
	            }

	            if (!options) {
	                options = {};
	            }

	            options.templateUrl = './views/dialogs/' + template + '/' + template + '.dialog.html';

	            return this.$mdDialog.show(options);
	        }
	    }, {
	        key: 'hide',
	        value: function hide(params) {
	            return this.$mdDialog.hide(params);
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel() {
	            return this.$mdDialog.cancel();
	        }
	    }, {
	        key: 'alert',
	        value: function alert(title, content, params) {
	            var alert = this.$mdDialog.alert(params).title(title).content(content).ariaLabel(content).ok('Ok');

	            this.$mdDialog.show(alert);
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm(title, content, params) {
	            var confirm = this.$mdDialog.confirm(params).title(title).content(content).ariaLabel(content).ok('Ok').cancel('Cancel');

	            return this.$mdDialog.show(confirm);
	        }
	    }, {
	        key: 'prompt',
	        value: function prompt(title, content, placeholder, params) {
	            var prompt = this.$mdDialog.prompt(params).title(title).textContent(content).placeholder(placeholder).ariaLabel(placeholder).ok('Ok').cancel('Cancel');

	            return this.$mdDialog.show(prompt);
	        }
	    }]);

	    return DialogService;
	}();

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ToastService = exports.ToastService = function () {
		ToastService.$inject = ["$mdToast"];
		function ToastService($mdToast) {
			'ngInject';

			_classCallCheck(this, ToastService);

			this.$mdToast = $mdToast;

			this.delay = 6000;
			this.position = 'top right';
			this.action = 'OK';
		}

		_createClass(ToastService, [{
			key: 'show',
			value: function show(content) {
				if (!content) {
					return false;
				}

				return this.$mdToast.show(this.$mdToast.simple().content(content).position(this.position).action(this.action).hideDelay(this.delay));
			}
		}, {
			key: 'error',
			value: function error(content) {
				if (!content) {
					return false;
				}

				return this.$mdToast.show(this.$mdToast.simple().content(content).position(this.position).theme('warn').action(this.action).hideDelay(this.delay));
			}
		}]);

		return ToastService;
	}();

/***/ }
/******/ ]);