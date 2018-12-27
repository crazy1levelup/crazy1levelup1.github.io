(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items/items.component */ "./src/app/items/items.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _items_item_start_item_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items/item-start/item-start.component */ "./src/app/items/item-start/item-start.component.ts");
/* harmony import */ var _items_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items/item-detail/item-detail.component */ "./src/app/items/item-detail/item-detail.component.ts");
/* harmony import */ var _items_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items/item-edit/item-edit.component */ "./src/app/items/item-edit/item-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] },
    { path: 'shopping-list', component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingListComponent"] },
    { path: 'item', component: _items_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"], children: [
            { path: '', component: _items_item_start_item_start_component__WEBPACK_IMPORTED_MODULE_6__["ItemStartComponent"] },
            { path: 'new', component: _items_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_8__["ItemEditComponent"] },
            { path: ':id', component: _items_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ItemDetailComponent"] },
            { path: ':id/edit', component: _items_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_8__["ItemEditComponent"] }
        ] },
    { path: 'not-found', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<p></p>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n \n   \n          \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loadedFeature = 'item';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items/items.component */ "./src/app/items/items.component.ts");
/* harmony import */ var _items_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./items/item-list/item-list.component */ "./src/app/items/item-list/item-list.component.ts");
/* harmony import */ var _items_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./items/item-detail/item-detail.component */ "./src/app/items/item-detail/item-detail.component.ts");
/* harmony import */ var _items_item_list_oneitem_oneitem_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./items/item-list/oneitem/oneitem.component */ "./src/app/items/item-list/oneitem/oneitem.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shopping-list/shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _items_item_start_item_start_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./items/item-start/item-start.component */ "./src/app/items/item-start/item-start.component.ts");
/* harmony import */ var _items_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./items/item-edit/item-edit.component */ "./src/app/items/item-edit/item-edit.component.ts");
/* harmony import */ var _items_items_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./items/items.service */ "./src/app/items/items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _items_items_component__WEBPACK_IMPORTED_MODULE_8__["ItemsComponent"],
                _items_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__["ItemListComponent"],
                _items_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_10__["ItemDetailComponent"],
                _items_item_list_oneitem_oneitem_component__WEBPACK_IMPORTED_MODULE_11__["OneitemComponent"],
                _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingListComponent"],
                _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_13__["ShoppingEditComponent"],
                _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__["DropdownDirective"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__["HomepageComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"],
                _items_item_start_item_start_component__WEBPACK_IMPORTED_MODULE_18__["ItemStartComponent"],
                _items_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_19__["ItemEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_15__["ShoppingListService"], _items_items_service__WEBPACK_IMPORTED_MODULE_20__["ItemsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signin works!\n</p>\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" ngModel>\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\" ngModel>\n          </div>\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n            <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n  </div>\n</div>\n     \n        \n\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Logo</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" routerLink=\"/\">Home \n            <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/item\" >Item</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/shopping-list\">Shopping List</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Manage  \n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" style=\"cursor: pointer\">Action</a>\n            <a class=\"dropdown-item\" style=\"cursor: pointer\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" style=\"cursor: pointer\">Something else here</a>\n          </div>\n        </li>\n      </ul>\n      <span class=\"navbar-text\">\n        Baga text\n      </span>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.onSelect = function (feature) {
        this.featureSelected.emit(feature);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "featureSelected", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n<button class=\"btn btn-primary\" (click)=\"onLoadServers()\">Load items</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router) {
        this.router = router;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        // const myNumbers = interval(1000);
        // myNumbers.subscribe(
        //   (number: number) => {
        //     console.log(number);
        //   }
        // );
    };
    HomepageComponent.prototype.onLoadServers = function () {
        this.router.navigate(['/item']);
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/items/item-detail/item-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/items/item-detail/item-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW0tZGV0YWlsL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/items/item-detail/item-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/items/item-detail/item-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img src=\"{{item.imagePath}}\" alt=\"{{item.name}}\" class=\"img-responsive\" style=\"max-height: 300px\">\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{item.name}}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"dropdown\">\n      <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Manage Item <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <li> <a class=\"dropdown-item\" (click)=\"onAddShoppingList()\" style=\"cursor: pointer\">To shopping list</a></li>\n        <li> <a class=\"dropdown-item\" (click)=\"onEditItem()\" style=\"cursor: pointer\">Edit item</a></li>\n        <li> <a class=\"dropdown-item\" (click)=\"onDeleteItem()\" style=\"cursor: pointer\">Delete Item</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    {{item.description}}\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let ingredient of item.ingredients\">\n        {{ingredient.name}} - {{ingredient.amount}}\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/items/item-detail/item-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/items/item-detail/item-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items.service */ "./src/app/items/items.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route, router) {
        this.itemService = itemService;
        this.route = route;
        this.router = router;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.item = _this.itemService.getItem(_this.id);
        });
    };
    ItemDetailComponent.prototype.onAddShoppingList = function () {
        this.itemService.addIngredientsToShoppingList(this.item.ingredients);
    };
    ItemDetailComponent.prototype.onEditItem = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
        //this.router.navigate(['../', this.id, 'edit'], {relativeTo:this.route});
    };
    ItemDetailComponent.prototype.onDeleteItem = function () {
        this.itemService.deleteItem(this.id);
        this.router.navigate(['/item']);
    };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-detail',
            template: __webpack_require__(/*! ./item-detail.component.html */ "./src/app/items/item-detail/item-detail.component.html"),
            styles: [__webpack_require__(/*! ./item-detail.component.css */ "./src/app/items/item-detail/item-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/items/item-edit/item-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/items/item-edit/item-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,textarea.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvaXRlbS1lZGl0L2l0ZW0tZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaXRlbXMvaXRlbS1lZGl0L2l0ZW0tZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/items/item-edit/item-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/items/item-edit/item-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <form [formGroup]=\"itemForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!itemForm.valid\">Save</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\"(click)=\"onCancel()\" >Cancel</button>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Name</label>\r\n                        <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"imagePath\">Image URL</label>\r\n                        <input type=\"text\" id=\"imagePath\" formControlName=\"imagePath\" class=\"form-control\" #imagePath>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <img [src]=\"imagePath.value\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"description\">Description</label>\r\n                        <textarea type=\"text\" id=\"description\" formControlName=\"description\" class=\"form-control\" rows=\"6\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\" formArrayName=\"ingredients\"> \r\n                    <div class=\"row\" *ngFor=\"let ingredientCtrl of getControls(); let i=index\" [formGroupName]=\"i\" style=\"margin-top: 10px\">\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <input type=\"number\" class=\"form-control\" formControlName=\"amount\">\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteIngredient(i)\">X</button>\r\n                        </div>\r\n                    </div> \r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <button type=\"button\" class=\"btn btn-success\" (click)=\"onAddIngredient()\">Add Ingredient</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/items/item-edit/item-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/items/item-edit/item-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ItemEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditComponent", function() { return ItemEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items.service */ "./src/app/items/items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemEditComponent = /** @class */ (function () {
    function ItemEditComponent(route, itemService, router) {
        this.route = route;
        this.itemService = itemService;
        this.router = router;
        this.editMode = false;
    }
    ItemEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    ItemEditComponent.prototype.onSubmit = function () {
        // const newItem = new ItemsModule(
        //   this.itemForm.value['name'], 
        //   this.itemForm.value['description'],
        //   this.itemForm.value['imagePath'],
        //   this.itemForm.value['ingredients']
        //   );
        if (this.editMode) {
            this.itemService.updateItem(this.id, this.itemForm.value);
        }
        else {
            this.itemService.addItem(this.itemForm.value);
        }
        this.onCancel();
    };
    ItemEditComponent.prototype.onAddIngredient = function () {
        this.itemForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
        }));
    };
    ItemEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    ItemEditComponent.prototype.onDeleteIngredient = function (index) {
        this.itemForm.get('ingredients').removeAt(index);
    };
    ItemEditComponent.prototype.initForm = function () {
        var itemName = '';
        var itemImagePath = '';
        var itemDescription = '';
        var itemIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        if (this.editMode) {
            var item = this.itemService.getItem(this.id);
            itemName = item.name;
            itemImagePath = item.imagePath;
            itemDescription = item.description;
            if (item['ingredients']) {
                for (var _i = 0, _a = item.ingredients; _i < _a.length; _i++) {
                    var ingredient = _a[_i];
                    itemIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](ingredient.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
                    }));
                }
            }
        }
        this.itemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](itemName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](itemImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](itemDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'ingredients': itemIngredients
        });
    };
    ItemEditComponent.prototype.getControls = function () {
        return this.itemForm.get('ingredients').controls;
    };
    ItemEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-edit',
            template: __webpack_require__(/*! ./item-edit.component.html */ "./src/app/items/item-edit/item-edit.component.html"),
            styles: [__webpack_require__(/*! ./item-edit.component.css */ "./src/app/items/item-edit/item-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ItemEditComponent);
    return ItemEditComponent;
}());



/***/ }),

/***/ "./src/app/items/item-list/item-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/items/item-list/item-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/items/item-list/item-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/items/item-list/item-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div >\r\n        <button class=\"btn btn-success\" (click)=\"onNewItem()\">New Item</button>\r\n    </div>\r\n</div>\r\n<hr>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <app-oneitem *ngFor=\"let itemEl of items; let i = index\" [item]=\"itemEl\" [index]=\"i\"></app-oneitem>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/items/item-list/item-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/items/item-list/item-list.component.ts ***!
  \********************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items.service */ "./src/app/items/items.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemListComponent = /** @class */ (function () {
    function ItemListComponent(itemsService, router, route) {
        this.itemsService = itemsService;
        this.router = router;
        this.route = route;
    }
    ItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.itemsService.itemsChanged
            .subscribe(function (items) {
            _this.items = items;
        });
        this.items = this.itemsService.getItems();
    };
    ItemListComponent.prototype.onNewItem = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    ItemListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ItemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-list',
            template: __webpack_require__(/*! ./item-list.component.html */ "./src/app/items/item-list/item-list.component.html"),
            styles: [__webpack_require__(/*! ./item-list.component.css */ "./src/app/items/item-list/item-list.component.css")]
        }),
        __metadata("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemListComponent);
    return ItemListComponent;
}());



/***/ }),

/***/ "./src/app/items/item-list/oneitem/oneitem.component.css":
/*!***************************************************************!*\
  !*** ./src/app/items/item-list/oneitem/oneitem.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW0tbGlzdC9vbmVpdGVtL29uZWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/items/item-list/oneitem/oneitem.component.html":
/*!****************************************************************!*\
  !*** ./src/app/items/item-list/oneitem/oneitem.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a  \nclass=\"list-group-item clearfix\" style=\"cursor: pointer\" [routerLink]=\"[index]\" routerLinkActive=\"active\">\n <div class=\"rounded float-left\">\n     <h4 class=\"list-group-item-heading\">{{item.name}}</h4>\n     <p class=\"list-group-item-text\">{{item.description}}</p>\n </div>\n <span>\n     <img \n     src=\"{{item.imagePath}}\"\n     alt=\"{{item.name}}\" \n     class=\"rounded float-right img-responsive \" \n     style=\"max-height: 50px;\">\n </span>\n</a>"

/***/ }),

/***/ "./src/app/items/item-list/oneitem/oneitem.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/items/item-list/oneitem/oneitem.component.ts ***!
  \**************************************************************/
/*! exports provided: OneitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneitemComponent", function() { return OneitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _items_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items.module */ "./src/app/items/items.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OneitemComponent = /** @class */ (function () {
    function OneitemComponent() {
    }
    OneitemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _items_module__WEBPACK_IMPORTED_MODULE_1__["ItemsModule"])
    ], OneitemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OneitemComponent.prototype, "index", void 0);
    OneitemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oneitem',
            template: __webpack_require__(/*! ./oneitem.component.html */ "./src/app/items/item-list/oneitem/oneitem.component.html"),
            styles: [__webpack_require__(/*! ./oneitem.component.css */ "./src/app/items/item-list/oneitem/oneitem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OneitemComponent);
    return OneitemComponent;
}());



/***/ }),

/***/ "./src/app/items/item-start/item-start.component.css":
/*!***********************************************************!*\
  !*** ./src/app/items/item-start/item-start.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW0tc3RhcnQvaXRlbS1zdGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/items/item-start/item-start.component.html":
/*!************************************************************!*\
  !*** ./src/app/items/item-start/item-start.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Please select an item!</h3>"

/***/ }),

/***/ "./src/app/items/item-start/item-start.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/items/item-start/item-start.component.ts ***!
  \**********************************************************/
/*! exports provided: ItemStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStartComponent", function() { return ItemStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemStartComponent = /** @class */ (function () {
    function ItemStartComponent() {
    }
    ItemStartComponent.prototype.ngOnInit = function () {
    };
    ItemStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-start',
            template: __webpack_require__(/*! ./item-start.component.html */ "./src/app/items/item-start/item-start.component.html"),
            styles: [__webpack_require__(/*! ./item-start.component.css */ "./src/app/items/item-start/item-start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemStartComponent);
    return ItemStartComponent;
}());



/***/ }),

/***/ "./src/app/items/items.component.css":
/*!*******************************************!*\
  !*** ./src/app/items/items.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/items/items.component.html":
/*!********************************************!*\
  !*** ./src/app/items/items.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-5\">\n<app-item-list></app-item-list>\n    </div>\n    <div class=\"col-md-7\">\n<router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/items/items.component.ts":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.css */ "./src/app/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/items/items.module.ts":
/*!***************************************!*\
  !*** ./src/app/items/items.module.ts ***!
  \***************************************/
/*! exports provided: ItemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsModule", function() { return ItemsModule; });
var ItemsModule = /** @class */ (function () {
    function ItemsModule(name, description, imagePath, ingredients) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return ItemsModule;
}());



/***/ }),

/***/ "./src/app/items/items.service.ts":
/*!****************************************!*\
  !*** ./src/app/items/items.service.ts ***!
  \****************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _items_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.module */ "./src/app/items/items.module.ts");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemsService = /** @class */ (function () {
    function ItemsService(slService) {
        this.slService = slService;
        this.itemsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.items = [
            new _items_module__WEBPACK_IMPORTED_MODULE_1__["ItemsModule"]('Starcraft2', 'RTS Game', 'https://www.geek.com/wp-content/uploads/2010/07/starcraft2-625x352.jpg', [new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('test', 1),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('test', 2)]),
            new _items_module__WEBPACK_IMPORTED_MODULE_1__["ItemsModule"]('Zerg Queen', 'Zerg unit', 'https://swarmscblog.files.wordpress.com/2017/11/queen_eggs.jpg', [new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('test', 3),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]('test', 4)])
        ];
    }
    ItemsService.prototype.getItems = function () {
        return this.items.slice();
    };
    ItemsService.prototype.getItem = function (id) {
        return this.items[id];
    };
    ItemsService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.slService.addIngredients(ingredients);
    };
    ItemsService.prototype.addItem = function (item) {
        this.items.push(item);
        this.itemsChanged.next(this.items.slice());
    };
    ItemsService.prototype.updateItem = function (index, newItem) {
        this.items[index] = newItem;
        this.itemsChanged.next(this.items.slice());
    };
    ItemsService.prototype.deleteItem = function (index) {
        this.items.splice(index, 1);
        this.itemsChanged.next(this.items.slice());
    };
    ItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"]])
    ], ItemsService);
    return ItemsService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>This page was not found!</h3>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.togggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "togggleOpen", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div>\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" name=\"name\" ngModel required >\n        </div>\n        <div class=\"col-sm-3 form-group\">\n          <label for=\"amount\">Amount</label>\n          <input type=\"number\" id=\"amount\" class=\"form-control\" name=\"amount\" ngModel required pattern=\"^[1-9]+[0-9]*$\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">{{editMode ? 'Update' : 'Add'}}</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(slService) {
        this.slService = slService;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.slService.startedEditing
            .subscribe(function (index) {
            _this.editedItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.slService.getIngredient(index);
            _this.slForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newIngredient = new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"](value.name, value.amount);
        if (this.editMode) {
            this.slService.updateIngredient(this.editedItemIndex, newIngredient);
        }
        else {
            this.slService.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.slService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ShoppingEditComponent.prototype, "slForm", void 0);
    ShoppingEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! ./shopping-edit.component.html */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"]])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div >\n        <app-shopping-edit></app-shopping-edit>\n        <hr>\n        <ul class=\"list-group\">\n            <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let ingredient of ingredients; let i = index\" (click)=\"onEditItem(i)\">\n            {{ingredient.name}} ({{ingredient.amount}})\n            </a>\n        </ul>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(slService) {
        this.slService = slService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.slService.getIngredients();
        this.subscription = this.slService.ingredientsChanged
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.slService.startedEditing.next(index);
    };
    ShoppingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! ./shopping-list.component.html */ "./src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('apples', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('tomatoes', 10),
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        var _a;
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.updateIngredient = function (index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.deleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingListService);
    return ShoppingListService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workandsmth\webpage\webpage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map