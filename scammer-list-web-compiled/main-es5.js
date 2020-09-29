function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.text = '.';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        }
      },
      directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var t_writer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! t-writer.js */
    "./node_modules/t-writer.js/dist/t-writer.js");
    /* harmony import */


    var t_writer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(t_writer_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainComponent_strong_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("> Scam weightage: ", ctx_r0.response.Score, "");
      }
    }

    function MainComponent_strong_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("> Website: ", ctx_r1.response.Website, "");
      }
    }

    function MainComponent_strong_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.nameText);
      }
    }

    function MainComponent_strong_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.messageText);
      }
    }

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent(service, formBuilder) {
        _classCallCheck(this, MainComponent);

        this.service = service;
        this.formBuilder = formBuilder;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]]
          });
        }
      }, {
        key: "fetchResult",
        value: function fetchResult() {
          var _this = this;

          if (this.form.get('name').errors || this.form.get('message').errors) {
            alert("Please check your input");
          } else {
            var target = document.getElementById('loading');
            var options = {
              typeColor: '#40f029',
              typeSpeed: 47
            };
            var writer = new t_writer_js__WEBPACK_IMPORTED_MODULE_1___default.a(target, options);
            writer.type('> Connecting....').rest(1000).removeCursor().start();
            return this.service.getResult(this.name, this.message).subscribe(function (next) {
              _this.response = next;
              writer.clear();
              writer.type('> Connected to server').rest(4000).start();
              writer.clear();
              setTimeout(function () {
                _this.setResponse(_this.response);
              }, 500);
            });
          }
        }
      }, {
        key: "setResponse",
        value: function setResponse(response) {
          var score = +response.Score;

          if (response.Scammer === false) {
            this.nameText = "> The name \"".concat(response.Name, "\" is not in our scam/spam database");
          } else {
            this.nameText = "> \"".concat(response.Name, "\" is a scammer/spammer !");
          }

          if (score <= 5) {
            this.messageText = "> The message provided dosen't look like spam";
          } else {
            this.messageText = "> The message looks like a spam/scam message !";
          }
        }
      }, {
        key: "name",
        get: function get() {
          return this.form.get('name').value;
        }
      }, {
        key: "message",
        get: function get() {
          return this.form.get('message').value;
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-header"]],
      decls: 35,
      vars: 5,
      consts: [[1, "columns"], [1, "banner", "column"], [1, "heading", "tm"], [1, "text"], [1, "graphics", "column"], ["src", "../../assets/map.svg"], [1, "columns", "is-two-thirds-tablet"], [1, "form", "column"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", "type", "text", "placeholder", "Name", "required", "", 1, "input", "is-medium"], ["formControlName", "message", "placeholder", "message", "required", "", 1, "textarea"], ["type", "submit", 1, "button", "is-dark", "is-medium"], [1, "result", "ubuntu", "column"], ["id", "loading"], [4, "ngIf"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Scammer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Scammer List a service which filters spam profiles, websites, and analyzes message for spamming content using it's database of spam content and machine learning. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Developed as a project of E-Raksha, with \u2764\uFE0F in India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "main", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MainComponent_Template_form_ngSubmit_16_listener() {
            return ctx.fetchResult();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "> Fill in the form to see the output here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "strong", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MainComponent_strong_28_Template, 2, 1, "strong", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MainComponent_strong_30_Template, 2, 1, "strong", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MainComponent_strong_32_Template, 2, 1, "strong", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MainComponent_strong_34_Template, 2, 1, "strong", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.response);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.response);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nameText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageText);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["main[_ngcontent-%COMP%] {\n  color: white !important;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  z-index: 100;\n}\nmain[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  height: 40vh;\n  padding: 1em;\n  z-index: 100;\n  text-align: left;\n  background: #191e1f;\n  line-height: 1.3em;\n  font-size: 1.1em;\n}\nmain[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   #loading[_ngcontent-%COMP%] {\n  color: #40f029;\n}\nmain[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: white;\n}\nmain[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  padding: 1em;\n  z-index: 100;\n  background: #191e1f;\n}\nmain[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #111111;\n  color: white !important;\n}\nmain[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input.placeholder[_ngcontent-%COMP%] {\n  color: #9c9c9c;\n}\nmain[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #9c9c9c;\n}\nmain[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #9c9c9c;\n}\nmain[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #9c9c9c;\n}\nmain[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #111111;\n  margin-top: 1em;\n  color: white !important;\n  font-size: 1.4em;\n}\nmain[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   textarea.placeholder[_ngcontent-%COMP%] {\n  color: #9c9c9c;\n}\nmain[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #9c9c9c;\n}\nmain[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #9c9c9c;\n}\nmain[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #9c9c9c;\n}\nsection[_ngcontent-%COMP%] {\n  widh: 100%;\n  margin: 0 !important;\n  height: 70vh;\n  padding-left: 5%;\n  z-index: 99;\n  padding-right: 5%;\n  padding-top: 5%;\n  background: #262a2b;\n}\nsection[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 6em;\n  color: #e73939;\n  line-height: 0.95em;\n}\nsection[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  top: 100px;\n  font-size: 1.3em;\n}\nsection[_ngcontent-%COMP%]   .graphics[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40em;\n  height: 40em;\n}\n@media all and (max-width: 1400px) {\n  .graphics[_ngcontent-%COMP%] {\n    width: 500px;\n    height: 500px;\n    overflow: hidden;\n  }\n}\n@media all and (max-width: 1344px) {\n  .graphics[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media all and (max-width: 900px) {\n  section[_ngcontent-%COMP%] {\n    text-align: center;\n    height: auto;\n    padding-bottom: 6.5%;\n  }\n  section[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    font-size: 3em;\n    line-height: 1em;\n  }\n  section[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    top: 15px;\n    font-size: 1em;\n  }\n  section[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VqandhbC9wcm9qZWN0cy9TY2FtbWVyLUxpc3QvY2xpZW50L3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNhc3MiLCIvaG9tZS91amp3YWwvcHJvamVjdHMvU2NhbW1lci1MaXN0L2NsaWVudC9zcmMvYXBwL21haW4vcGxhY2Vob2xkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNBSjtBRENJO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQVE7RUFDSSxjQUFBO0FDRVo7QUREUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0daO0FERkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDSVI7QURIUTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUNLWjtBQy9CRTtFQUNFLGNGMEJtQztBQ092QztBQzlCRTtFQUNFLGNGc0JtQztBQ1V2QztBQzdCRTtFQUNFLGNGa0JtQztBQ2F2QztBQzVCRTtFQUNFLGNGY21DO0FDZ0J2QztBRGRRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ2dCWjtBQ2pERTtFQUNFLGNGaUNtQztBQ2tCdkM7QUNoREU7RUFDRSxjRjZCbUM7QUNxQnZDO0FDL0NFO0VBQ0UsY0Z5Qm1DO0FDd0J2QztBQzlDRTtFQUNFLGNGcUJtQztBQzJCdkM7QUR6QkE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUM0Qko7QUQxQlE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDNEJaO0FEM0JRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDNkJaO0FEM0JRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUM2Qlo7QUQzQkE7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUM4Qk47QUFDRjtBRDdCQTtFQUNJO0lBQ0ksYUFBQTtFQytCTjtBQUNGO0FEOUJBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFQ2dDTjtFRDlCVTtJQUNJLGNBQUE7SUFDQSxnQkFBQTtFQ2dDZDtFRC9CVTtJQUNJLFNBQUE7SUFDQSxjQUFBO0VDaUNkO0VEaENjO0lBQ0ksYUFBQTtFQ2tDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3BsYWNlaG9sZGVyLnNjc3NcIlxubWFpblxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgcGFkZGluZzogMFxuICAgIG1hcmdpbjogMFxuICAgIHotaW5kZXg6IDEwMFxuICAgIC5yZXN1bHRcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheVxuICAgICAgICBoZWlnaHQ6IDQwdmhcbiAgICAgICAgcGFkZGluZzogMWVtXG4gICAgICAgIHotaW5kZXg6IDEwMFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XG4gICAgICAgIGJhY2tncm91bmQ6ICMxOTFlMWZcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW1cbiAgICAgICAgI2xvYWRpbmdcbiAgICAgICAgICAgIGNvbG9yOiAjNDBmMDI5XG4gICAgICAgIHN0cm9uZ1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbVxuICAgICAgICAgICAgY29sb3I6IHdoaXRlICAgIFxuICAgIC5mb3JtXG4gICAgICAgIHBhZGRpbmc6IDFlbVxuICAgICAgICB6LWluZGV4OiAxMDBcbiAgICAgICAgYmFja2dyb3VuZDogIzE5MWUxZlxuICAgICAgICBpbnB1dFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzExMTExMVxuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnRcbiAgICAgICAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWNvbG9yKCM5YzljOWMpXG5cbiAgICAgICAgdGV4dGFyZWFcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTExMTFcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbVxuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnRcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW1cbiAgICAgICAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWNvbG9yKCM5YzljOWMpXG5cbnNlY3Rpb25cbiAgICB3aWRoOiAxMDAlXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnRcbiAgICBoZWlnaHQ6IDcwdmhcbiAgICBwYWRkaW5nLWxlZnQ6IDUlXG4gICAgei1pbmRleDogOTlcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JVxuICAgIHBhZGRpbmctdG9wOiA1JVxuICAgIGJhY2tncm91bmQ6ICMyNjJhMmJcbiAgICAuYmFubmVyXG4gICAgICAgIC5oZWFkaW5nXG4gICAgICAgICAgICBmb250LXNpemU6IDZlbVxuICAgICAgICAgICAgY29sb3I6ICNlNzM5MzlcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAuOTVlbVxuICAgICAgICBwXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgICAgICAgdG9wOjEwMHB4ICAgIFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbVxuICAgIC5ncmFwaGljc1xuICAgICAgICBpbWdcbiAgICAgICAgICAgIHdpZHRoOiA0MGVtXG4gICAgICAgICAgICBoZWlnaHQ6IDQwZW1cblxuQG1lZGlhIGFsbCBhbmQgKCBtYXgtd2lkdGg6ICAxNDAwcHgpXG4gICAgLmdyYXBoaWNzXG4gICAgICAgIHdpZHRoOiA1MDBweFxuICAgICAgICBoZWlnaHQ6IDUwMHB4XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW5cblxuQG1lZGlhIGFsbCBhbmQgKCBtYXgtd2lkdGg6ICAxMzQ0cHgpXG4gICAgLmdyYXBoaWNzXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcblxuQG1lZGlhIGFsbCBhbmQgKCBtYXgtd2lkdGg6IDkwMHB4KVxuICAgIHNlY3Rpb25cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIGhlaWdodDogYXV0byAgICBcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYuNSVcbiAgICAgICAgLmJhbm5lclxuICAgICAgICAgICAgLmhlYWRpbmdcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbVxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW1cbiAgICAgICAgICAgIHBcbiAgICAgICAgICAgICAgICB0b3A6MTVweFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtXG4gICAgICAgICAgICAgICAgc3BhblxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgICAgICAgICAiLCJtYWluIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG5tYWluIC5yZXN1bHQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBoZWlnaHQ6IDQwdmg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgei1pbmRleDogMTAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjMTkxZTFmO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5tYWluIC5yZXN1bHQgI2xvYWRpbmcge1xuICBjb2xvcjogIzQwZjAyOTtcbn1cbm1haW4gLnJlc3VsdCBzdHJvbmcge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5tYWluIC5mb3JtIHtcbiAgcGFkZGluZzogMWVtO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQ6ICMxOTFlMWY7XG59XG5tYWluIC5mb3JtIGlucHV0IHtcbiAgYmFja2dyb3VuZDogIzExMTExMTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5tYWluIC5mb3JtIGlucHV0LnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5YzljOWM7XG59XG5tYWluIC5mb3JtIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzljOWM5Yztcbn1cbm1haW4gLmZvcm0gaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzljOWM5Yztcbn1cbm1haW4gLmZvcm0gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5YzljOWM7XG59XG5tYWluIC5mb3JtIHRleHRhcmVhIHtcbiAgYmFja2dyb3VuZDogIzExMTExMTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cbm1haW4gLmZvcm0gdGV4dGFyZWEucGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzljOWM5Yztcbn1cbm1haW4gLmZvcm0gdGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOWM5YzljO1xufVxubWFpbiAuZm9ybSB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOWM5YzljO1xufVxubWFpbiAuZm9ybSB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzljOWM5Yztcbn1cblxuc2VjdGlvbiB7XG4gIHdpZGg6IDEwMCU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDcwdmg7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHotaW5kZXg6IDk5O1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBiYWNrZ3JvdW5kOiAjMjYyYTJiO1xufVxuc2VjdGlvbiAuYmFubmVyIC5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiA2ZW07XG4gIGNvbG9yOiAjZTczOTM5O1xuICBsaW5lLWhlaWdodDogMC45NWVtO1xufVxuc2VjdGlvbiAuYmFubmVyIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cbnNlY3Rpb24gLmdyYXBoaWNzIGltZyB7XG4gIHdpZHRoOiA0MGVtO1xuICBoZWlnaHQ6IDQwZW07XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAuZ3JhcGhpY3Mge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEzNDRweCkge1xuICAuZ3JhcGhpY3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDYuNSU7XG4gIH1cbiAgc2VjdGlvbiAuYmFubmVyIC5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIHNlY3Rpb24gLmJhbm5lciBwIHtcbiAgICB0b3A6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbiAgc2VjdGlvbiAuYmFubmVyIHAgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIkBtaXhpbiBwbGFjZWhvbGRlci1jb2xvcigkY29sb3IpIHtcbiAgJi5wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRjb2xvclxuICB9XG5cbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJGNvbG9yXG4gIH1cblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJGNvbG9yXG4gIH1cblxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRjb2xvclxuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.sass']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/main.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/main.service.ts ***!
    \******************************************/

  /*! exports provided: MainService */

  /***/
  function srcAppServicesMainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainService", function () {
      return MainService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MainService = /*#__PURE__*/function () {
      function MainService(http) {
        _classCallCheck(this, MainService);

        this.http = http;
      }

      _createClass(MainService, [{
        key: "getResult",
        value: function getResult(name, message) {
          return this.http.get("http://54.162.146.101/api.php?name=".concat(name, "&message=").concat(message));
        }
      }]);

      return MainService;
    }();

    MainService.ɵfac = function MainService_Factory(t) {
      return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MainService,
      factory: MainService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/ujjwal/projects/Scammer-List/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map