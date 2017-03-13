webpackJsonp([1,4],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard_service__ = __webpack_require__(383);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(384);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });


//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/index.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            styles: [__webpack_require__(400)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/app.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'duplicateEmail': 'Email is already in used.',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Minimum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/validation.service.js.map

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 377;


/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(398);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/main.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_index__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routedComponents */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["b" /* routing */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["c" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_6__authentication_index__["a" /* AuthenticationService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/app.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_index__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_index__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_index__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_signup_index__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_control_messages_component__ = __webpack_require__(386);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });







var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_index__["a" /* LoginComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_index__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__authentication_index__["b" /* AuthGuard */]]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_5__components_signup_index__["a" /* SignupComponent */]
    },
    //otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var appRoutingProviders = [
    __WEBPACK_IMPORTED_MODULE_1__authentication_index__["b" /* AuthGuard */]
];
var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_login_index__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_dashboard_index__["a" /* DashboardComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_signup_index__["a" /* SignupComponent */],
    __WEBPACK_IMPORTED_MODULE_6__common_control_messages_component__["a" /* ControlMessagesComponent */]
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/app.routes.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        //Call the service that would authenticate the JWT token here and return true if there is a valid token.
        //return true;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/auth-guard.service.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('/api/authenticate', JSON.stringify({ username: user.username, password: user.password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/authentication.service.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonUtil; });
var CommonUtil = (function () {
    function CommonUtil() {
    }
    CommonUtil.API_ENDPOINT = 'http://localhost:9085/dating-api-ws';
    return CommonUtil;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/common.util.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_service__ = __webpack_require__(251);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlMessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return __WEBPACK_IMPORTED_MODULE_2__validation_service__["a" /* ValidationService */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]) === 'function' && _a) || Object)
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'control-messages',
            template: "<div *ngIf='errorMessage !== null' class='alert alert-danger'>{{errorMessage}}</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/control-messages.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__(388);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //Empty
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'dashboard',
            template: __webpack_require__(402),
            styles: [__webpack_require__(401)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/dashboard.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardService = (function () {
    function DashboardService() {
    }
    DashboardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], DashboardService);
    return DashboardService;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/dashboard.service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__(387);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a"]; });

//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/index.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(391);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/index.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_index__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_index__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_index__["a" /* User */]();
        this.user.username = "";
        this.user.password = "";
    };
    //    onSubmit() {
    //        console.log( "username: " + this.user.username );
    //        console.log( "password: " + this.user.password );
    //        this.authenticationService.login( this.user ).subscribe(
    //            auth => {
    //                console.log( auth );
    //            },
    //            err => {
    //                console.log( err );
    //            });
    //    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.user)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/']);
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    LoginComponent.prototype.onSignup = function () {
        this.router.navigate(['/signup']);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'login',
            template: __webpack_require__(403)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_index__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__authentication_index__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/login.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_component__ = __webpack_require__(393);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_component__["a"]; });

//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/index.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_user__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_validation_service__ = __webpack_require__(251);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = (function () {
    function SignupComponent(formBuilder, router, signupService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.signupService = signupService;
        this.userForm = formBuilder.group({
            "nickname": ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            "password": ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__common_validation_service__["a" /* ValidationService */].passwordValidator])]],
            "email": ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__common_validation_service__["a" /* ValidationService */].emailValidator])]]
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__signup_user__["a" /* SignupUser */]();
        this.user.password = "";
        this.user.email = "";
        this.user.nickname = "";
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("User Info: " + this.user);
        this.signupService.signup(this.user).subscribe(function (user) {
            console.log("user: " + user);
        }, function (err) {
            console.log(err);
            if (err == "duplicateEmail") {
                _this.userForm.controls["email"].setErrors({ duplicateEmail: err });
            }
        });
    };
    SignupComponent.prototype.onSignin = function () {
        this.router.navigate(['/login']);
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'signup',
            template: __webpack_require__(404),
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__signup_service__["a" /* SignupService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__signup_service__["a" /* SignupService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__signup_service__["a" /* SignupService */]) === 'function' && _c) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/signup.component.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_util__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupService = (function () {
    function SignupService(http) {
        this.http = http;
        this.resourcePath = "/signup";
    }
    SignupService.prototype.signup = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__common_common_util__["a" /* CommonUtil */].API_ENDPOINT + this.resourcePath, user, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().message || 'Server error'); });
    };
    SignupService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SignupService);
    return SignupService;
    var _a;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/signup.service.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupUser; });
var SignupUser = (function () {
    function SignupUser() {
    }
    return SignupUser;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/signup.user.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(397);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user__["a"]; });

//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/index.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/user.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/gpelipas/workspace/dating-web-js/src/environment.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(154)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(154)();
// imports


// module
exports.push([module.i, ".nav-side-menu {\n  overflow: auto;\n  font-family: verdana;\n  font-size: 12px;\n  font-weight: 200;\n  background-color: #2e353d;\n  position: fixed;\n  top: 0px;\n  width: 300px;\n  height: 100%;\n  color: #e1ffff; }\n\n.nav-side-menu .brand {\n  background-color: #23282e;\n  line-height: 50px;\n  display: block;\n  text-align: center;\n  font-size: 14px; }\n\n.nav-side-menu .toggle-btn {\n  display: none; }\n\n.nav-side-menu ul,\n.nav-side-menu li {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  line-height: 35px;\n  cursor: pointer; }\n\n.nav-side-menu ul :not(collapsed) .arrow:before,\n.nav-side-menu li :not(collapsed) .arrow:before {\n  font-family: FontAwesome;\n  content: \"\\F078\";\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n  float: right; }\n\n.nav-side-menu ul .active,\n.nav-side-menu li .active {\n  border-left: 3px solid #d19b3d;\n  background-color: #4f5b69; }\n\n.nav-side-menu ul .sub-menu li.active,\n.nav-side-menu li .sub-menu li.active {\n  color: #d19b3d; }\n\n.nav-side-menu ul .sub-menu li.active a,\n.nav-side-menu li .sub-menu li.active a {\n  color: #d19b3d; }\n\n.nav-side-menu ul .sub-menu li,\n.nav-side-menu li .sub-menu li {\n  background-color: #181c20;\n  border: none;\n  line-height: 28px;\n  border-bottom: 1px solid #23282e;\n  margin-left: 0px; }\n\n.nav-side-menu ul .sub-menu li:hover,\n.nav-side-menu li .sub-menu li:hover {\n  background-color: #020203; }\n\n.nav-side-menu ul .sub-menu li:before,\n.nav-side-menu li .sub-menu li:before {\n  font-family: FontAwesome;\n  content: \"\\F105\";\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle; }\n\n.nav-side-menu li {\n  padding-left: 0px;\n  border-left: 3px solid #2e353d;\n  border-bottom: 1px solid #23282e; }\n\n.nav-side-menu li a {\n  text-decoration: none;\n  color: #e1ffff; }\n\n.nav-side-menu li a i {\n  padding-left: 10px;\n  width: 20px;\n  padding-right: 20px; }\n\n.nav-side-menu li:hover {\n  border-left: 3px solid #d19b3d;\n  background-color: #4f5b69;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\n@media (max-width: 767px) {\n  .nav-side-menu {\n    position: relative;\n    width: 100%;\n    margin-bottom: 10px; }\n  .nav-side-menu .toggle-btn {\n    display: block;\n    cursor: pointer;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    z-index: 10 !important;\n    padding: 3px;\n    background-color: #ffffff;\n    color: #000;\n    width: 40px;\n    text-align: center; }\n  .brand {\n    text-align: left !important;\n    font-size: 22px;\n    padding-left: 20px;\n    line-height: 50px !important; } }\n\n@media (min-width: 767px) {\n  .nav-side-menu .menu-list .menu-content {\n    display: block; } }\n\nbody {\n  margin: 0px;\n  padding: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n\r\n<div class=\"nav-side-menu\">\r\n    <div class=\"brand\">Brand Logo</div>\r\n    <i class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\"#menu-content\"></i>\r\n  \r\n        <div class=\"menu-list\">\r\n  \r\n            <ul id=\"menu-content\" class=\"menu-content collapse out\">\r\n                <li>\r\n                  <a href=\"#\">\r\n                  <i class=\"fa fa-dashboard fa-lg\"></i> Dashboard\r\n                  </a>\r\n                </li>\r\n\r\n                <li  data-toggle=\"collapse\" data-target=\"#products\" class=\"collapsed active\">\r\n                  <a href=\"#\"><i class=\"fa fa-gift fa-lg\"></i> UI Elements <span class=\"arrow\"></span></a>\r\n                </li>\r\n                <ul class=\"sub-menu collapse\" id=\"products\">\r\n                    <li class=\"active\"><a href=\"#\">CSS3 Animation</a></li>\r\n                    <li><a href=\"#\">General</a></li>\r\n                    <li><a href=\"#\">Buttons</a></li>\r\n                    <li><a href=\"#\">Tabs & Accordions</a></li>\r\n                    <li><a href=\"#\">Typography</a></li>\r\n                    <li><a href=\"#\">FontAwesome</a></li>\r\n                    <li><a href=\"#\">Slider</a></li>\r\n                    <li><a href=\"#\">Panels</a></li>\r\n                    <li><a href=\"#\">Widgets</a></li>\r\n                    <li><a href=\"#\">Bootstrap Model</a></li>\r\n                </ul>\r\n\r\n\r\n                <li data-toggle=\"collapse\" data-target=\"#service\" class=\"collapsed\">\r\n                  <a href=\"#\"><i class=\"fa fa-globe fa-lg\"></i> Services <span class=\"arrow\"></span></a>\r\n                </li>  \r\n                <ul class=\"sub-menu collapse\" id=\"service\">\r\n                  <li>New Service 1</li>\r\n                  <li>New Service 2</li>\r\n                  <li>New Service 3</li>\r\n                </ul>\r\n\r\n\r\n                <li data-toggle=\"collapse\" data-target=\"#new\" class=\"collapsed\">\r\n                  <a href=\"#\"><i class=\"fa fa-car fa-lg\"></i> New <span class=\"arrow\"></span></a>\r\n                </li>\r\n                <ul class=\"sub-menu collapse\" id=\"new\">\r\n                  <li>New New 1</li>\r\n                  <li>New New 2</li>\r\n                  <li>New New 3</li>\r\n                </ul>\r\n\r\n\r\n                 <li>\r\n                  <a href=\"#\">\r\n                  <i class=\"fa fa-user fa-lg\"></i> Profile\r\n                  </a>\r\n                  </li>\r\n\r\n                 <li>\r\n                  <a href=\"#\">\r\n                  <i class=\"fa fa-users fa-lg\"></i> Users\r\n                  </a>\r\n                </li>\r\n            </ul>\r\n     </div>\r\n</div>"

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div id=\"loginbox\" style=\"margin-top: 50px;\"\r\n\t\tclass=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n\t\t<div class=\"panel panel-info\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-title\">Sign In</div>\r\n\t\t\t\t<div\r\n\t\t\t\t\tstyle=\"float: right; font-size: 80%; position: relative; top: -10px\">\r\n\t\t\t\t\t<a href=\"javascript:void(0)\">Forgot password?</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div style=\"padding-top: 30px\" class=\"panel-body\">\r\n\r\n\t\t\t\t<div style=\"display: none\" id=\"login-alert\"\r\n\t\t\t\t\tclass=\"alert alert-danger col-sm-12\"></div>\r\n\r\n\t\t\t\t<form id=\"loginform\" class=\"form-horizontal\" role=\"form\">\r\n\r\n\t\t\t\t\t<div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n\t\t\t\t\t\t<span class=\"input-group-addon\"> <i\r\n\t\t\t\t\t\t\tclass=\"glyphicon glyphicon-user\"></i>\r\n\t\t\t\t\t\t</span> <input id=\"login-username\" type=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"username\" [(ngModel)]=\"user.username\"\r\n\t\t\t\t\t\t\tplaceholder=\"username or email\" #username=\"ngModel\">\r\n\t\t\t\t\t\t<div [hidden]=\"username.valid || username.pristine\"\r\n\t\t\t\t\t\t\tclass=\"alert alert-danger\">Username is required</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n\t\t\t\t\t\t<span class=\"input-group-addon\"> <i\r\n\t\t\t\t\t\t\tclass=\"glyphicon glyphicon-lock\"></i>\r\n\t\t\t\t\t\t</span> <input id=\"login-password\" type=\"password\" class=\"form-control\"\r\n\t\t\t\t\t\t\tname=\"password\" [(ngModel)]=\"user.password\"\r\n\t\t\t\t\t\t\tplaceholder=\"password\">\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t<label> <input id=\"login-remember\" type=\"checkbox\"\r\n\t\t\t\t\t\t\t\tname=\"remember\" value=\"1\"> Remember me\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<div style=\"margin-top: 10px\" class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"col-sm-12 controls\">\r\n\t\t\t\t\t\t\t<a id=\"btn-login\" href=\"javascript:void(0)\"\r\n\t\t\t\t\t\t\t\tclass=\"btn btn-success\" (click)=\"onSubmit()\">Login</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"col-md-12 control\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #888; padding-top: 15px; font-size: 85%\">\r\n\t\t\t\t\t\t\t\tDon't have an account! <a href=\"javascript:void(0)\" (click)=\"onSignup()\">\r\n\t\t\t\t\t\t\t\t\tSign Up Here </a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n\r\n<div class=\"container\">\r\n\t<div id=\"signupbox\" style=\"margin-top: 50px\"\r\n\t\tclass=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n\t\t<div class=\"panel panel-info\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-title\">Sign Up</div>\r\n\t\t\t\t<div\r\n\t\t\t\t\tstyle=\"float: right; font-size: 85%; position: relative; top: -10px\">\r\n\t\t\t\t\t<a id=\"signinlink\" href=\"javascript:void(0)\" (click)=\"onSignin()\">\r\n\t\t\t\t\t\tSign In </a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\"> \r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label>Email:</label> <input type=\"email\" class=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"Email\" [(ngModel)]=\"user.email\"\r\n\t\t\t\t\t\t\tformControlName=\"email\" id=\"email\" /> <span\r\n\t\t\t\t\t\t\t*ngIf=\"userForm.controls.email.errors?.remote\"></span>\r\n\t\t\t\t\t\t<control-messages [control]=\"userForm.controls.email\"></control-messages>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label>Password:</label> <input type=\"password\"\r\n\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Password\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"user.password\" formControlName=\"password\"\r\n\t\t\t\t\t\t\tid=\"password\" />\r\n\t\t\t\t\t\t<control-messages [control]=\"userForm.controls.password\"></control-messages>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label>Nickname:</label> <input type=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"Nickname\" [(ngModel)]=\"user.nickname\"\r\n\t\t\t\t\t\t\tformControlName=\"nickname\" id=\"nickname\" />\r\n\t\t\t\t\t\t<control-messages [control]=\"userForm.controls.nickname\"></control-messages>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<!-- Button -->\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<button id=\"btn-signup\" type=\"submit\" class=\"btn btn-info\"\r\n\t\t\t\t\t\t\t\t[disabled]=\"!userForm.valid\">\r\n\t\t\t\t\t\t\t\t<i class=\"icon-hand-right\"></i>Sign Up\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(378);


/***/ })

},[837]);
//# sourceMappingURL=main.bundle.js.map