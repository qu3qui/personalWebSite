(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sebastian\Documents\Projects\personalWebSite\sbcowlsite\src\main.ts */"zUnb");


/***/ }),

/***/ "1fes":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/global-constants */ "jxL5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../experience-details/experience-details.component */ "Pxh1");





const _c0 = function (a1) { return ["talosExperienceContainer", a1]; };
class ExperienceComponent {
    constructor() {
        this.talosConstant = _common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].talosCompany;
        this.heinsohnConstant = _common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].heinsohnCompany;
        this.talosExperienceIsDisplayed = false;
        this.heinsohnExperienceIsDisplayed = false;
    }
    ngOnInit() {
    }
    displayTalosExperience(display) {
        this.talosExperienceIsDisplayed = display;
        const element = document.querySelector(".experience-details-container.talos");
        element.scrollIntoView(true);
    }
    displayHeinsohnExperience(display) {
        this.heinsohnExperienceIsDisplayed = display;
        const element = document.querySelector(".experience-details-container.heinsohn");
        element.scrollIntoView(true);
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 12, vars: 8, consts: [[1, "experienceContainer"], [3, "ngClass"], [3, "experienceToDisplay", "displayTalosExperienceEvent"], [3, "experienceToDisplay", "displayHeinsohnExperienceEvent"], [1, "title"], [1, "banner"], [1, "experienceImage", "talos", 3, "click"], [1, "experienceImage", "heinsohn", 3, "click"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-experience-details", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("displayTalosExperienceEvent", function ExperienceComponent_Template_app_experience_details_displayTalosExperienceEvent_2_listener($event) { return ctx.displayTalosExperience($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-experience-details", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("displayHeinsohnExperienceEvent", function ExperienceComponent_Template_app_experience_details_displayHeinsohnExperienceEvent_4_listener($event) { return ctx.displayHeinsohnExperience($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_div_click_9_listener() { return ctx.displayTalosExperience(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_div_click_11_listener() { return ctx.displayHeinsohnExperience(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.talosExperienceIsDisplayed ? "displayContentAnimated" : "hideContentAnimated"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experienceToDisplay", ctx.talosConstant);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.heinsohnExperienceIsDisplayed ? "displayContentAnimated" : "hideContentAnimated"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experienceToDisplay", ctx.heinsohnConstant);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceDetailsComponent"]], styles: [".experienceContainer[_ngcontent-%COMP%] {\n  position: relative;\n  height: 648px;\n  width: 100vw;\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n}\n.experienceContainer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  height: 90px;\n  justify-content: center;\n  color: white;\n  font-family: \"Caladea\", serif;\n  font-size: 34px;\n  align-items: center;\n}\n.experienceContainer[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  height: 550px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.experienceContainer[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .experienceContainer[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.experienceContainer[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .experienceContainer[_ngcontent-%COMP%]   .experienceImage[_ngcontent-%COMP%] {\n  margin: 10px;\n  height: 250px;\n  width: 250px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center bottom;\n}\n.experienceContainer[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .experienceContainer[_ngcontent-%COMP%]   .experienceImage.talos[_ngcontent-%COMP%] {\n  background-image: url('talosLogo.jpg');\n}\n.experienceContainer[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .experienceContainer[_ngcontent-%COMP%]   .experienceImage.heinsohn[_ngcontent-%COMP%] {\n  background-image: url('heinsohnLogo.png');\n}\n@media (min-width: 640px) {\n  .experienceContainer[_ngcontent-%COMP%] {\n    height: 1024px;\n  }\n  .experienceContainer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    height: 184px;\n    font-size: 42px;\n  }\n  .experienceContainer[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n    height: 840px;\n  }\n  .experienceContainer[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .experienceContainer[_ngcontent-%COMP%] {\n    height: 50%;\n    width: 100%;\n  }\n  .experienceContainer[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .experienceContainer[_ngcontent-%COMP%]   .experienceImage[_ngcontent-%COMP%] {\n    margin: 10px;\n    height: 450px;\n    width: 450px;\n  }\n}\n@media (min-width: 1025px) {\n  .experienceContainer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  .experienceContainer[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.talosExperienceContainer[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  background-color: white;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.talosExperienceContainer.displayContentAnimated[_ngcontent-%COMP%] {\n  animation: displayContentAnimation 500ms;\n  opacity: 1;\n  z-index: 1;\n}\n.talosExperienceContainer.hideContentAnimated[_ngcontent-%COMP%] {\n  animation: hideContentAnimation 500ms;\n  opacity: 0;\n  z-index: -1;\n}\n@keyframes displayContentAnimation {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    z-index: 1;\n  }\n}\n@keyframes hideContentAnimation {\n  0% {\n    opacity: 1;\n    z-index: 1;\n  }\n  10% {\n    opacity: 0.9;\n    z-index: 1;\n  }\n  20% {\n    opacity: 0.8;\n    z-index: 1;\n  }\n  30% {\n    opacity: 0.7;\n    z-index: 1;\n  }\n  40% {\n    opacity: 0.6;\n    z-index: 1;\n  }\n  50% {\n    opacity: 0.5;\n    z-index: 1;\n  }\n  60% {\n    opacity: 0.4;\n    z-index: 1;\n  }\n  70% {\n    opacity: 0.3;\n    z-index: 1;\n  }\n  80% {\n    opacity: 0.2;\n    z-index: 1;\n  }\n  90% {\n    opacity: 0.1;\n    z-index: 1;\n  }\n  100% {\n    opacity: 0;\n    z-index: -1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUVJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFBUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURaO0FBR1k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUFEaEI7QUFHZ0I7RUFDSSxzQ0FBQTtBQURwQjtBQUlnQjtFQUNJLHlDQUFBO0FBRnBCO0FBV0E7RUFDSTtJQUNJLGNBQUE7RUFSTjtFQVVNO0lBQ0ksYUFBQTtJQUNBLGVBQUE7RUFSVjtFQVdNO0lBQ0ksYUFBQTtFQVRWO0VBV1U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQVRkO0VBVWM7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUFSbEI7QUFDRjtBQWdCQTtFQUVRO0lBQ0ksZUFBQTtFQWZWO0VBa0JNO0lBQ0ksbUJBQUE7RUFoQlY7QUFDRjtBQXFCQTtFQUVJLFVBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQXJCSjtBQXVCSTtFQUNJLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFyQlI7QUF3Qkk7RUFDSSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBdEJSO0FBOEJBO0VBQ0k7SUFDRSxVQUFBO0VBM0JKO0VBOEJFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RUE1Qko7QUFDRjtBQStCQTtFQUNJO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RUE3Qko7RUErQkU7SUFDSSxZQUFBO0lBQ0EsVUFBQTtFQTdCTjtFQWdDRTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VBOUJOO0VBZ0NJO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUE5Qk47RUFnQ0k7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQTlCTjtFQWdDSTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBOUJOO0VBZ0NJO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUE5Qk47RUFrQ0k7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQWhDTjtFQWtDSTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBaENOO0VBa0NJO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFoQ047RUFrQ0U7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQWhDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVyaWVuY2VDb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA2NDhweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ0NhbGFkZWEnLCBzZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYmFubmVye1xyXG4gICAgICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIC5leHBlcmllbmNlQ29udGFpbmVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5leHBlcmllbmNlSW1hZ2V7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG5cclxuICAgICAgICAgICAgICAgICYudGFsb3N7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvdGFsb3NMb2dvLmpwZycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuaGVpbnNvaG57XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaGVpbnNvaG5Mb2dvLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCl7XHJcbiAgICAuZXhwZXJpZW5jZUNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDI0cHg7XHJcblxyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxODRweDsgICAgICAgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhbm5lcntcclxuICAgICAgICAgICAgaGVpZ2h0OiA4NDBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5leHBlcmllbmNlQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC5leHBlcmllbmNlSW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpe1xyXG4gICAgLmV4cGVyaWVuY2VDb250YWluZXIge1xyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhbm5lcntcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4udGFsb3NFeHBlcmllbmNlQ29udGFpbmVyIHtcclxuXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuXHJcbiAgICAmLmRpc3BsYXlDb250ZW50QW5pbWF0ZWR7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBkaXNwbGF5Q29udGVudEFuaW1hdGlvbiA1MDBtcztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuaGlkZUNvbnRlbnRBbmltYXRlZHtcclxuICAgICAgICBhbmltYXRpb246IGhpZGVDb250ZW50QW5pbWF0aW9uIDUwMG1zO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLy9BbmltYXRpb25zXHJcblxyXG5Aa2V5ZnJhbWVzIGRpc3BsYXlDb250ZW50QW5pbWF0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBoaWRlQ29udGVudEFuaW1hdGlvbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAxMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgMjAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgICAzMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIDQwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICAgICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgICA2MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuXHJcbiAgICAgIH1cclxuICAgICAgNzAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgICA4MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIDkwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC4xO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICB9XHJcbiAgfSAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "NgH1":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a1) { return ["aboutMeDetailsContainer", a1]; };
class AboutMeComponent {
    constructor() {
        this.aboutMeDetailsIsDisplayed = false;
        this.options = {
            root: null,
            rootMargin: '0px',
            treshold: 1.0
        };
    }
    ngOnInit() {
        this.changeClassesBasedOnIntersectionObserver('.aboutMeContainer .firstParagraphText', 'fadeInRight', 'hidden');
        this.changeClassesBasedOnIntersectionObserver('.aboutMeContainer .nameText', 'fadeInRight', 'hidden');
        this.changeClassesBasedOnIntersectionObserver('.aboutMeContainer .secondParagraphText', 'fadeInRight', 'hidden');
    }
    displayAboutMeDetails(display) {
        this.aboutMeDetailsIsDisplayed = display;
    }
    changeClassesBasedOnIntersectionObserver(htmlIdentifier, classToAdd, classToRemove) {
        let callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove(classToRemove);
                    entry.target.classList.add(classToAdd);
                }
            });
        };
        new IntersectionObserver(callback, this.options).observe(document.querySelector(htmlIdentifier));
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 35, vars: 3, consts: [[1, "aboutMeContainer"], [1, "rightContainer"], [3, "ngClass"], [1, "about-me-details-description"], [1, "about-me-details-close-container"], [1, "about-me-details-close-button", "material-icons", 3, "click"], [1, "about-me-details-description-title"], [1, "about-me-details-description-text"], [1, "about-me-details-decorator"], [1, "about-me-details-decorator-line"], [1, "about-me-details-decorator-logo"], [1, "material-icons"], [1, "textContainer"], ["id", "observerTest", 1, "firstParagraphText", "hidden"], [1, "nameText", "hidden"], [1, "secondParagraphText", "hidden"], [1, "buttonContainer"], [1, "button3", 3, "click"], [1, "photoContainer"], [1, "profileMainPhoto"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutMeComponent_Template_span_click_5_listener() { return ctx.displayAboutMeDetails(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Siempre he sido un amante de las tecnolog\u00EDas, fuese para aprender, crear o entretenerme, desde ni\u00F1o siempre les hab\u00EDa tenido un gran aprecio, es por esto que decid\u00ED en el colegio investigar un poco m\u00E1s y finalmente decido estudiar una carrera af\u00EDn a las tecnolog\u00EDas de informaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Soy una persona que disfruta mucho del aprendizaje continuo, es por esto que nunca me cierro a solo una tecnolog\u00EDa, he incursionado en temas transversales al desarrollo de software como DevOps, testing e incluso finanzas y administraci\u00F3n de proyectos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " El principal lenguaje en el que he trabajado es JAVA, sin embargo conozco C# y el framework .Net debido a un curso intensivo sobre el mismo y a la realizaci\u00F3n de ciertos trabajos a nivel profesional con el mismo. Tambi\u00E9n conozco Javascript y el framework con el que m\u00E1s he tenido contacto es Angular, desde sus inicios con Angularjs hasta las versiones actuales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hola, me llamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "SEBASTIAN BUITRAGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Soy un apasionado del desarrollo de software y las tecnologias, amante de videojuegos y aprendiz continuo de la l\u00F3gica.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutMeComponent_Template_button_click_31_listener() { return ctx.displayAboutMeDetails(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Saber mas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.aboutMeDetailsIsDisplayed ? "displayContentAnimated" : "hideContentAnimated"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".aboutMeContainer[_ngcontent-%COMP%] {\n  height: 640px;\n  width: 100vw;\n  background-color: #e4e4e4;\n  display: flex;\n  flex-direction: column;\n}\n.aboutMeContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%] {\n  height: 340px;\n  display: flex;\n  justify-content: center;\n}\n.aboutMeContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   .profileMainPhoto[_ngcontent-%COMP%] {\n  width: 235px;\n  background-image: url('profilePhoto.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center bottom;\n}\n.aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%] {\n  height: 180px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .firstParagraphText[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 55px;\n  font-family: \"Caladea\", serif;\n  animation-duration: 2s;\n}\n.aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .nameText[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 70px;\n  font-size: 22px;\n  font-family: \"Bree Serif\", serif;\n  animation-duration: 2s;\n}\n.aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .secondParagraphText[_ngcontent-%COMP%] {\n  width: 290px;\n  height: 55px;\n  text-align: justify;\n  font-family: \"Caladea\", serif;\n  animation-duration: 2s;\n}\n.aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .buttonContainer[_ngcontent-%COMP%] {\n  display: none;\n}\n.aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 640px) {\n  .aboutMeContainer[_ngcontent-%COMP%] {\n    height: 1024px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%] {\n    height: 540px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   .profileMainPhoto[_ngcontent-%COMP%] {\n    width: 370px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%] {\n    height: 484px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%] {\n    height: 284px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .firstParagraphText[_ngcontent-%COMP%] {\n    font-size: 24px;\n    height: 92px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .nameText[_ngcontent-%COMP%] {\n    height: 100px;\n    font-size: 32px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .secondParagraphText[_ngcontent-%COMP%] {\n    font-size: 24px;\n    width: 500px;\n    height: 92px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .buttonContainer[_ngcontent-%COMP%] {\n    \n  }\n}\n@media (min-width: 1025px) {\n  .aboutMeContainer[_ngcontent-%COMP%] {\n    height: 770px;\n    flex-direction: row-reverse;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 50%;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .photoContainer[_ngcontent-%COMP%]   .profileMainPhoto[_ngcontent-%COMP%] {\n    width: 512px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%] {\n    position: relative;\n    height: 100%;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%] {\n    height: 450px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .firstParagraphText[_ngcontent-%COMP%] {\n    font-size: 32px;\n    height: 130px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .nameText[_ngcontent-%COMP%] {\n    height: 160px;\n    font-size: 42px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .secondParagraphText[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 90%;\n    max-width: 700px;\n    height: 130px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .buttonContainer[_ngcontent-%COMP%] {\n    height: 200px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .buttonContainer[_ngcontent-%COMP%]   .button3[_ngcontent-%COMP%] {\n    text-align: center;\n    transition: all 0.5s;\n    background: radial-gradient(circle, white 0%, #c4c4c4 100%);\n    border: 2px solid black;\n    font-family: \"Caladea\", serif;\n    font-size: 32px;\n    width: 214px;\n    height: 68px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .buttonContainer[_ngcontent-%COMP%]   .button3[_ngcontent-%COMP%]:hover {\n    color: white;\n    background: black;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    opacity: 1;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    background-color: #e4e4e4;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer[_ngcontent-%COMP%]   .about-me-details-description[_ngcontent-%COMP%] {\n    width: 760px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer[_ngcontent-%COMP%]   .about-me-details-description[_ngcontent-%COMP%]   .about-me-details-close-container[_ngcontent-%COMP%] {\n    margin-top: 52px;\n    height: 30px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer[_ngcontent-%COMP%]   .about-me-details-description[_ngcontent-%COMP%]   .about-me-details-close-container[_ngcontent-%COMP%]   .about-me-details-close-button[_ngcontent-%COMP%] {\n    width: 30px;\n    font-size: 30px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer[_ngcontent-%COMP%]   .about-me-details-description[_ngcontent-%COMP%]   .about-me-details-description-title[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    text-align: center;\n    font-size: 52px;\n    font-family: \"Bree Serif\", serif;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer[_ngcontent-%COMP%]   .about-me-details-description[_ngcontent-%COMP%]   .about-me-details-description-text[_ngcontent-%COMP%] {\n    text-align: justify;\n    font-size: 25px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer.displayContentAnimated[_ngcontent-%COMP%] {\n    animation: displayContentAnimation 1500ms;\n    opacity: 1;\n    z-index: 1;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer.hideContentAnimated[_ngcontent-%COMP%] {\n    animation: hideContentAnimation 500ms;\n    opacity: 0;\n    z-index: -1;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer[_ngcontent-%COMP%]   .about-me-details-decorator[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    width: 760px;\n    justify-content: center;\n    text-align: center;\n    height: 42px;\n    margin-top: 30px;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer[_ngcontent-%COMP%]   .about-me-details-decorator[_ngcontent-%COMP%]   .about-me-details-decorator-line[_ngcontent-%COMP%] {\n    width: 359px;\n    height: 50%;\n    border-bottom: 2px solid black;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer[_ngcontent-%COMP%]   .about-me-details-decorator[_ngcontent-%COMP%]   .about-me-details-decorator-logo[_ngcontent-%COMP%] {\n    width: 42px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .aboutMeContainer[_ngcontent-%COMP%]   .rightContainer[_ngcontent-%COMP%]   .aboutMeDetailsContainer[_ngcontent-%COMP%]   .about-me-details-decorator[_ngcontent-%COMP%]   .about-me-details-decorator-logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 42px;\n  }\n}\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.fadeInRight[_ngcontent-%COMP%] {\n  animation-name: fadeInRight;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FBQ047QUFHRTtFQUNFLGFBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFHTTtFQUNFLFVBQUE7QUFEUjtBQUlNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQUZSO0FBS007RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUhSO0FBS007RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQUhSO0FBT0k7RUFDRSxhQUFBO0FBTE47QUFRSTtFQUNFLGFBQUE7QUFOTjtBQVdBO0VBQ0U7SUFDRSxjQUFBO0VBUkY7RUFVRTtJQUNFLGFBQUE7RUFSSjtFQVVJO0lBQ0UsWUFBQTtFQVJOO0VBWUU7SUFDRSxhQUFBO0VBVko7RUFZSTtJQUNFLGFBQUE7RUFWTjtFQVlNO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUFWUjtFQWFNO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUFYUjtFQWFNO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBWFI7RUFjSTtJQUNFOzs7Ozs7Ozs7YUFBQTtFQUhOO0FBQ0Y7QUFpQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtFQWZGO0VBaUJFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUFmSjtFQWlCSTtJQUNFLFlBQUE7RUFmTjtFQW1CRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBakJKO0VBbUJJO0lBQ0UsYUFBQTtFQWpCTjtFQW1CTTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VBakJSO0VBb0JNO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUFsQlI7RUFvQk07SUFDRSxlQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQWxCUjtFQXNCSTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQXBCTjtFQXNCTTtJQUNFLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSwyREFBQTtJQUNBLHVCQUFBO0lBQ0EsNkJBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFwQlI7RUFzQlE7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7RUFwQlY7RUF5Qkk7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUVBLFlBQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7RUF4Qk47RUEwQk07SUFDRSxZQUFBO0VBeEJSO0VBMEJRO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0VBeEJWO0VBeUJVO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUF2Qlo7RUEyQlE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0NBQUE7RUF6QlY7RUE0QlE7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUExQlY7RUE4Qk07SUFDRSx5Q0FBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VBNUJSO0VBK0JNO0lBQ0UscUNBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQTdCUjtFQWdDTTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUVBLFlBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBL0JSO0VBaUNRO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSw4QkFBQTtFQS9CVjtFQWtDUTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQWhDVjtFQWtDVTtJQUNFLGVBQUE7RUFoQ1o7QUFDRjtBQXdDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBdENGO0VBd0NBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBdENGO0FBQ0Y7QUF5Q0E7RUFDRSwyQkFBQTtBQXZDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0TWVDb250YWluZXIge1xyXG4gIGhlaWdodDogNjQwcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAucGhvdG9Db250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAzNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAucHJvZmlsZU1haW5QaG90byB7XHJcbiAgICAgIHdpZHRoOiAyMzVweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3Byb2ZpbGVQaG90by5wbmdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yaWdodENvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICAgIC50ZXh0Q29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5oaWRkZW4ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5maXJzdFBhcmFncmFwaFRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2FsYWRlYVwiLCBzZXJpZjtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmFtZVRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkJyZWUgU2VyaWZcIiwgc2VyaWY7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgfVxyXG4gICAgICAuc2Vjb25kUGFyYWdyYXBoVGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhbGFkZWFcIiwgc2VyaWY7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25Db250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dE1lRGV0YWlsc0NvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAuYWJvdXRNZUNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMjRweDtcclxuXHJcbiAgICAucGhvdG9Db250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDU0MHB4O1xyXG5cclxuICAgICAgLnByb2ZpbGVNYWluUGhvdG8ge1xyXG4gICAgICAgIHdpZHRoOiAzNzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodENvbnRhaW5lciB7XHJcbiAgICAgIGhlaWdodDogNDg0cHg7XHJcblxyXG4gICAgICAudGV4dENvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODRweDtcclxuXHJcbiAgICAgICAgLmZpcnN0UGFyYWdyYXBoVGV4dCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDkycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZVRleHQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlY29uZFBhcmFncmFwaFRleHQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA5MnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYnV0dG9uQ29udGFpbmVyIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uM3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAuYWJvdXRNZUNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDc3MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cclxuICAgIC5waG90b0NvbnRhaW5lciB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgIC5wcm9maWxlTWFpblBob3RvIHtcclxuICAgICAgICB3aWR0aDogNTEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHRDb250YWluZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAudGV4dENvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuXHJcbiAgICAgICAgLmZpcnN0UGFyYWdyYXBoVGV4dCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWVUZXh0IHtcclxuICAgICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWNvbmRQYXJhZ3JhcGhUZXh0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b25Db250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAuYnV0dG9uMyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsIHJnYmEoMTk2LCAxOTYsIDE5NiwgMSkgMTAwJSk7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhbGFkZWFcIiwgc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICB3aWR0aDogMjE0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY4cHg7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWJvdXRNZURldGFpbHNDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgIC5hYm91dC1tZS1kZXRhaWxzLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiA3NjBweDsgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgLmFib3V0LW1lLWRldGFpbHMtY2xvc2UtY29udGFpbmVyIHsgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgLmFib3V0LW1lLWRldGFpbHMtY2xvc2UtYnV0dG9uIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYWJvdXQtbWUtZGV0YWlscy1kZXNjcmlwdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJyZWUgU2VyaWZcIiwgc2VyaWY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFib3V0LW1lLWRldGFpbHMtZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZGlzcGxheUNvbnRlbnRBbmltYXRlZCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IGRpc3BsYXlDb250ZW50QW5pbWF0aW9uIDE1MDBtcztcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5oaWRlQ29udGVudEFuaW1hdGVkIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogaGlkZUNvbnRlbnRBbmltYXRpb24gNTAwbXM7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWJvdXQtbWUtZGV0YWlscy1kZWNvcmF0b3Ige1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgICAgd2lkdGg6IDc2MHB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgICAgICAgIC5hYm91dC1tZS1kZXRhaWxzLWRlY29yYXRvci1saW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1OXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hYm91dC1tZS1kZXRhaWxzLWRlY29yYXRvci1sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW5SaWdodCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Pxh1":
/*!********************************************************************!*\
  !*** ./src/app/experience-details/experience-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ExperienceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceDetailsComponent", function() { return ExperienceDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ExperienceDetailsComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1);
} }
const _c0 = function (a1) { return ["experience-details-container", a1]; };
const _c1 = function (a1) { return ["experience-details-logo", a1]; };
class ExperienceDetailsComponent {
    constructor() {
        this.displayTalosExperienceEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayHeinsohnExperienceEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.experienceToDisplay == 'TALOS') {
            this.mainDescription = ' He trabajado con SAP Commerce la cual es una plataforma de comercio electronico para grandes empresas, dicha plataforma usa para el backend el lenguaje Java y Spring como framework, por el lado del front hace uso de un framework llamado spartacus que esta soportado sobre Angular Framework.';
            this.projectsDescription = 'Proyectos en los cuales trabaje:';
            this.projects = ['Nikon', 'Hillrom', 'Barnes & Noble'];
            this.timeDescription = 'Tiempo en la empresa : 2 años';
        }
        else {
            this.mainDescription = 'Trabaje en el área de arquitectura de la compañía, la cual es una sección transversal que se dedica principalmente al asesoramiento y apoyo a proyectos, definición de arquitecturas de referencia e investigación de nuevas tecnologías.';
            this.projectsDescription = 'Durante este periodo apoyo diferentes proyectos como:';
            this.projects = ['Asopagos', 'Cartera', 'SAP Business One', 'Nomina'];
            this.timeDescription = 'Tiempo en la empresa : 2 años';
        }
    }
    close() {
        if (this.experienceToDisplay === 'TALOS') {
            this.displayTalosExperienceEvent.emit(false);
        }
        else {
            this.displayHeinsohnExperienceEvent.emit(false);
        }
    }
}
ExperienceDetailsComponent.ɵfac = function ExperienceDetailsComponent_Factory(t) { return new (t || ExperienceDetailsComponent)(); };
ExperienceDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceDetailsComponent, selectors: [["app-experience-details"]], inputs: { experienceToDisplay: "experienceToDisplay" }, outputs: { displayTalosExperienceEvent: "displayTalosExperienceEvent", displayHeinsohnExperienceEvent: "displayHeinsohnExperienceEvent" }, decls: 20, vars: 10, consts: [[3, "ngClass"], [1, "experience-details-close-container"], [1, "experience-details-close-button", "material-icons", 3, "click"], [1, "experience-details-logo-container"], [1, "experience-details-description"], [1, "experience-details-description-main"], [4, "ngFor", "ngForOf"], [1, "experience-details-decorator"], [1, "experience-details-decorator-line"], [1, "experience-details-decorator-logo"], [1, "material-icons"]], template: function ExperienceDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceDetailsComponent_Template_span_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExperienceDetailsComponent_ul_11_Template, 3, 1, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.experienceToDisplay === "TALOS" ? "talos" : "heinsohn"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.experienceToDisplay === "TALOS" ? "talos" : "heinsohn"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mainDescription, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectsDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeDescription);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".experience-details-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-close-container[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 100%;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-close-container[_ngcontent-%COMP%]   .experience-details-close-button[_ngcontent-%COMP%] {\n  width: 30px;\n  font-size: 30px;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-logo-container[_ngcontent-%COMP%] {\n  margin: 0px 30px 30px 30px;\n  width: 314px;\n  height: 180px;\n  background-color: black;\n  display: flex;\n  align-items: center;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-logo-container[_ngcontent-%COMP%]   .experience-details-logo[_ngcontent-%COMP%] {\n  width: 314px;\n  height: 180px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-color: black;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-logo-container[_ngcontent-%COMP%]   .experience-details-logo.talos[_ngcontent-%COMP%] {\n  background-image: url('talosLogo.jpg');\n  background-size: cover;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-logo-container[_ngcontent-%COMP%]   .experience-details-logo.heinsohn[_ngcontent-%COMP%] {\n  background-size: contain;\n  background-image: url('heinsohnLogo.png');\n  height: 160px;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-description[_ngcontent-%COMP%] {\n  width: 314px;\n  height: 350px;\n  font-family: \"Caladea\", serif;\n  font-size: 16px;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-description[_ngcontent-%COMP%]   .experience-details-description-main[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-decorator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 314px;\n  margin: 10px;\n  justify-content: center;\n  text-align: center;\n  height: 42px;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-decorator[_ngcontent-%COMP%]   .experience-details-decorator-line[_ngcontent-%COMP%] {\n  width: 136px;\n  height: 50%;\n  border-bottom: 2px solid black;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-decorator[_ngcontent-%COMP%]   .experience-details-decorator-logo[_ngcontent-%COMP%] {\n  width: 42px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.experience-details-container[_ngcontent-%COMP%]   .experience-details-decorator[_ngcontent-%COMP%]   .experience-details-decorator-logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 42px;\n}\n@media (min-width: 640px) {\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-close-container[_ngcontent-%COMP%] {\n    height: 45px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-close-container[_ngcontent-%COMP%]   .experience-details-close-button[_ngcontent-%COMP%] {\n    width: 45px;\n    font-size: 45px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-logo-container[_ngcontent-%COMP%] {\n    margin: 0px 45px 45px 45px;\n    width: 660px;\n    height: 360px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-logo-container[_ngcontent-%COMP%]   .experience-details-logo[_ngcontent-%COMP%] {\n    width: 660px;\n    height: 340px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-description[_ngcontent-%COMP%] {\n    width: 660px;\n    height: 450px;\n    font-size: 24px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-decorator[_ngcontent-%COMP%] {\n    width: 660px;\n    margin-top: 20px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-decorator[_ngcontent-%COMP%]   .experience-details-decorator-line[_ngcontent-%COMP%] {\n    width: 309px;\n  }\n}\n@media (min-width: 1025px) {\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-close-container[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-close-container[_ngcontent-%COMP%]   .experience-details-close-button[_ngcontent-%COMP%] {\n    width: 50px;\n    font-size: 50px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-logo-container[_ngcontent-%COMP%] {\n    margin: 0px 50px 50px 50px;\n    margin: 0px 45px 45px 45px;\n    width: 1022px;\n    height: 290px;\n    background-size: auto;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-logo-container[_ngcontent-%COMP%]   .experience-details-logo[_ngcontent-%COMP%] {\n    width: 1022px;\n    height: 270px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-logo-container[_ngcontent-%COMP%]   .experience-details-logo.talos[_ngcontent-%COMP%] {\n    background-size: contain;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-description[_ngcontent-%COMP%] {\n    width: 1022px;\n    height: 520px;\n    font-size: 30px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-decorator[_ngcontent-%COMP%] {\n    width: 1022px;\n    height: 82px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-decorator[_ngcontent-%COMP%]   .experience-details-decorator-line[_ngcontent-%COMP%] {\n    width: 470px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-decorator[_ngcontent-%COMP%]   .experience-details-decorator-logo[_ngcontent-%COMP%] {\n    width: 82px;\n  }\n  .experience-details-container[_ngcontent-%COMP%]   .experience-details-decorator[_ngcontent-%COMP%]   .experience-details-decorator-logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    font-size: 82px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS1kZXRhaWxzL2V4cGVyaWVuY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDUjtBQUFRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFWjtBQUVJO0VBQ0ksMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQVI7QUFFUTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBRUEsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FBRlo7QUFJWTtFQUNJLHNDQUFBO0VBQ0Esc0JBQUE7QUFGaEI7QUFLWTtFQUNJLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0FBSGhCO0FBVUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQVJSO0FBVVE7RUFDSSxtQkFBQTtBQVJaO0FBWUk7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBWlI7QUFjUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFaWjtBQWVRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBYlo7QUFlWTtFQUNJLGVBQUE7QUFiaEI7QUFvQkE7RUFHUTtJQUNJLFlBQUE7RUFuQlY7RUFvQlU7SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQWxCZDtFQXVCTTtJQUNJLDBCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUFyQlY7RUF1QlU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQXJCZDtFQXlCTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQXZCVjtFQTBCTTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtFQXhCVjtFQXlCVTtJQUNJLFlBQUE7RUF2QmQ7QUFDRjtBQTZCQTtFQUdRO0lBQ0ksWUFBQTtFQTdCVjtFQThCVTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VBNUJkO0VBZ0NNO0lBQ0ksMEJBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBRUEscUJBQUE7RUEvQlY7RUFpQ1U7SUFDSSxhQUFBO0lBQ0EsYUFBQTtFQS9CZDtFQWlDYztJQUNJLHdCQUFBO0VBL0JsQjtFQW9DTTtJQUNJLGFBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQWxDVjtFQXNDTTtJQUNJLGFBQUE7SUFDQSxZQUFBO0VBcENWO0VBc0NVO0lBQ0ksWUFBQTtFQXBDZDtFQXVDVTtJQUNJLFdBQUE7RUFyQ2Q7RUFzQ2M7SUFDSSxlQUFBO0VBcENsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS1kZXRhaWxzL2V4cGVyaWVuY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBlcmllbmNlLWRldGFpbHMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmV4cGVyaWVuY2UtZGV0YWlscy1jbG9zZS1jb250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5leHBlcmllbmNlLWRldGFpbHMtY2xvc2UtYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGVyaWVuY2UtZGV0YWlscy1sb2dvLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW46IDBweCAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICB3aWR0aDogMzE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5leHBlcmllbmNlLWRldGFpbHMtbG9nb3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMTRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgICAgICYudGFsb3N7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy90YWxvc0xvZ28uanBnJyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICYuaGVpbnNvaG57XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9oZWluc29obkxvZ28ucG5nJyk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5leHBlcmllbmNlLWRldGFpbHMtZGVzY3JpcHRpb257XHJcbiAgICAgICAgd2lkdGg6IDMxNHB4O1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDYWxhZGVhJywgc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgICAgICAuZXhwZXJpZW5jZS1kZXRhaWxzLWRlc2NyaXB0aW9uLW1haW57XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5leHBlcmllbmNlLWRldGFpbHMtZGVjb3JhdG9ye1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgIHdpZHRoOiAzMTRweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNDJweDtcclxuXHJcbiAgICAgICAgLmV4cGVyaWVuY2UtZGV0YWlscy1kZWNvcmF0b3ItbGluZXtcclxuICAgICAgICAgICAgd2lkdGg6IDEzNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmV4cGVyaWVuY2UtZGV0YWlscy1kZWNvcmF0b3ItbG9nb3tcclxuICAgICAgICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KXtcclxuICAgIC5leHBlcmllbmNlLWRldGFpbHMtY29udGFpbmVye1xyXG4gICAgXHJcbiAgICAgICAgLmV4cGVyaWVuY2UtZGV0YWlscy1jbG9zZS1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgLmV4cGVyaWVuY2UtZGV0YWlscy1jbG9zZS1idXR0b257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgICAgLmV4cGVyaWVuY2UtZGV0YWlscy1sb2dvLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNDVweCA0NXB4IDQ1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNjBweDtcclxuXHJcbiAgICAgICAgICAgIC5leHBlcmllbmNlLWRldGFpbHMtbG9nb3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuZXhwZXJpZW5jZS1kZXRhaWxzLWRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICB3aWR0aDogNjYwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5leHBlcmllbmNlLWRldGFpbHMtZGVjb3JhdG9ye1xyXG4gICAgICAgICAgICB3aWR0aDogNjYwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIC5leHBlcmllbmNlLWRldGFpbHMtZGVjb3JhdG9yLWxpbmV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzA5cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KXtcclxuICAgIC5leHBlcmllbmNlLWRldGFpbHMtY29udGFpbmVye1xyXG4gICAgXHJcbiAgICAgICAgLmV4cGVyaWVuY2UtZGV0YWlscy1jbG9zZS1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgLmV4cGVyaWVuY2UtZGV0YWlscy1jbG9zZS1idXR0b257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5leHBlcmllbmNlLWRldGFpbHMtbG9nby1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDUwcHggNTBweCA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA0NXB4IDQ1cHggNDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMjJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyOTBweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuXHJcbiAgICAgICAgICAgIC5leHBlcmllbmNlLWRldGFpbHMtbG9nb3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDIycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICYudGFsb3N7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmV4cGVyaWVuY2UtZGV0YWlscy1kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMjJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmV4cGVyaWVuY2UtZGV0YWlscy1kZWNvcmF0b3J7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDIycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODJweDtcclxuXHJcbiAgICAgICAgICAgIC5leHBlcmllbmNlLWRldGFpbHMtZGVjb3JhdG9yLWxpbmV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDcwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuZXhwZXJpZW5jZS1kZXRhaWxzLWRlY29yYXRvci1sb2dve1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgycHg7XHJcbiAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience-details',
                templateUrl: './experience-details.component.html',
                styleUrls: ['./experience-details.component.scss']
            }]
    }], function () { return []; }, { experienceToDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayTalosExperienceEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], displayHeinsohnExperienceEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");




class AppComponent {
    constructor(render) {
        this.render = render;
        this.title = 'sbcowlsite';
        this.isHidden = true;
        this.talosExperienceIsDisplayed = false;
    }
    ngOnInit() {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };
        let callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('fadeInRight');
                }
            });
        };
        let observer = new IntersectionObserver(callback, options);
        let target = document.querySelector('#observerTest');
        observer.observe(target);
    }
    close($event) {
        $event.target.parent();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 0, consts: [[1, "logoContainer"], ["src", "assets/sbcowl.png", "alt", "John Doe", 1, "owlLogoImage"], [1, "contactContainer"], [1, "contentContainer"], [1, "titleContainer"], [1, "textContainer"], [1, "firstParagraphText"], [1, "secondParagraphText"], [1, "profileImageContainer"], [1, "profileImage"], [1, "socialMediaLogoContainer"], ["href", "https://twitter.com/qu3qui", "target", "_blank", 1, "socialMediaLogo", "twitterLogo"], ["href", "https://www.facebook.com/qu3qui/", "target", "_blank", 1, "socialMediaLogo", "facebookLogo"], ["href", "https://github.com/qu3qui", "target", "_blank", 1, "socialMediaLogo", "gitHubLogo"], ["href", "https://www.instagram.com/qu3qui/", "target", "_blank", 1, "socialMediaLogo", "instagramLogo"], ["href", "https://www.linkedin.com/in/qu3qui", "target", "_blank", 1, "socialMediaLogo", "linkedInLogo"], ["href", "mailto:sebasbc.96@gmail.com", "target", "_blank", 1, "socialMediaLogo", "gmailLogo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about-me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " !! Gracias por llegar hasta aca !!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Si deseas colaborar con una idea increible o simplemente quieres compartir un buen cafe, no dudes en contactarme. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__["AboutMeComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"]], styles: [".body[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.logoContainer[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  background-color: black;\n  text-align: center;\n}\n\n.logoContainer[_ngcontent-%COMP%]   .owlLogoImage[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.contactContainer[_ngcontent-%COMP%] {\n  height: 480px;\n  width: 100vw;\n  background-color: #E4E4E4;\n  display: flex;\n  flex-direction: column;\n}\n\n.contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%] {\n  height: 220px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .titleContainer[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Caladea\", serif;\n  font-size: 34px;\n}\n\n.contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%] {\n  height: 120px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .firstParagraphText[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 290px;\n  text-align: center;\n  font-family: \"Caladea\", serif;\n}\n\n.contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .secondParagraphText[_ngcontent-%COMP%] {\n  height: 65px;\n  width: 290px;\n  text-align: justify;\n  font-family: \"Caladea\", serif;\n}\n\n.contactContainer[_ngcontent-%COMP%]   .profileImageContainer[_ngcontent-%COMP%] {\n  height: 260px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contactContainer[_ngcontent-%COMP%]   .profileImageContainer[_ngcontent-%COMP%]   .profileImage[_ngcontent-%COMP%] {\n  background-image: url('contactPhoto.jpg');\n  background-size: cover;\n  background-position: center center;\n  height: 180px;\n  width: 180px;\n  border-radius: 50%;\n}\n\n@media (min-width: 640px) {\n  .contactContainer[_ngcontent-%COMP%] {\n    height: 670px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%] {\n    height: 240px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .titleContainer[_ngcontent-%COMP%] {\n    height: 120px;\n    font-size: 42px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%] {\n    height: 120px;\n    font-size: 24px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .firstParagraphText[_ngcontent-%COMP%] {\n    width: 580px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .secondParagraphText[_ngcontent-%COMP%] {\n    width: 580px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .profileImageContainer[_ngcontent-%COMP%] {\n    height: 430px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .profileImageContainer[_ngcontent-%COMP%]   .profileImage[_ngcontent-%COMP%] {\n    height: 340px;\n    width: 340px;\n  }\n}\n\n@media (min-width: 1025px) {\n  .contactContainer[_ngcontent-%COMP%] {\n    height: 380px;\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: center;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%] {\n    height: 250px;\n    width: 625px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .titleContainer[_ngcontent-%COMP%] {\n    height: 40px;\n    font-size: 50px;\n    margin-bottom: 40px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%] {\n    height: 120px;\n    font-size: 24px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .firstParagraphText[_ngcontent-%COMP%] {\n    width: 580px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   .textContainer[_ngcontent-%COMP%]   .secondParagraphText[_ngcontent-%COMP%] {\n    width: 580px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .profileImageContainer[_ngcontent-%COMP%] {\n    height: 250px;\n    width: 400px;\n  }\n  .contactContainer[_ngcontent-%COMP%]   .profileImageContainer[_ngcontent-%COMP%]   .profileImage[_ngcontent-%COMP%] {\n    height: 250px;\n    width: 250px;\n  }\n}\n\n.socialMediaLogoContainer[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 40px;\n  background-color: black;\n  display: flex;\n  justify-content: center;\n}\n\n.socialMediaLogoContainer[_ngcontent-%COMP%]   .socialMediaLogo[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center center;\n  height: 32px;\n  width: 32px;\n  margin: 4px 12px;\n}\n\n.socialMediaLogoContainer[_ngcontent-%COMP%]   .twitterLogo[_ngcontent-%COMP%] {\n  background-image: url('twitterLogo.png');\n}\n\n.socialMediaLogoContainer[_ngcontent-%COMP%]   .facebookLogo[_ngcontent-%COMP%] {\n  background-image: url('facebookLogo.png');\n}\n\n.socialMediaLogoContainer[_ngcontent-%COMP%]   .gitHubLogo[_ngcontent-%COMP%] {\n  background-image: url('gitHubLogo.png');\n}\n\n.socialMediaLogoContainer[_ngcontent-%COMP%]   .instagramLogo[_ngcontent-%COMP%] {\n  background-image: url('instagramLogo.png');\n}\n\n.socialMediaLogoContainer[_ngcontent-%COMP%]   .linkedInLogo[_ngcontent-%COMP%] {\n  background-image: url('linkedInLogo.png');\n}\n\n.socialMediaLogoContainer[_ngcontent-%COMP%]   .gmailLogo[_ngcontent-%COMP%] {\n  background-image: url('gmailLogo.png');\n}\n\n@media (min-width: 640px) {\n  .socialMediaLogoContainer[_ngcontent-%COMP%] {\n    height: 66px;\n  }\n  .socialMediaLogoContainer[_ngcontent-%COMP%]   .socialMediaLogo[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n    margin: 8px 20px;\n  }\n}\n\n@media (min-width: 1025px) {\n  .socialMediaLogoContainer[_ngcontent-%COMP%] {\n    height: 46px;\n  }\n  .socialMediaLogoContainer[_ngcontent-%COMP%]   .socialMediaLogo[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    margin: 3px 20px;\n  }\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFHQSx1QkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBRUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFJQTtFQUVJLGFBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFLSTtFQUVJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBSlI7O0FBTVE7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBTFo7O0FBUVE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5aOztBQVFZO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBTmhCOztBQVNZO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBUGhCOztBQWFJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWFI7O0FBYVE7RUFDSSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBWFo7O0FBaUJBO0VBQ0k7SUFDSSxhQUFBO0VBZE47RUFnQk07SUFDSSxhQUFBO0VBZFY7RUFnQlU7SUFDSSxhQUFBO0lBQ0EsZUFBQTtFQWRkO0VBaUJVO0lBQ0ksYUFBQTtJQUNBLGVBQUE7RUFmZDtFQWlCYztJQUNJLFlBQUE7RUFmbEI7RUFrQmM7SUFDSSxZQUFBO0VBaEJsQjtFQXFCTTtJQUNJLGFBQUE7RUFuQlY7RUFxQlU7SUFDSSxhQUFBO0lBQ0EsWUFBQTtFQW5CZDtBQUNGOztBQTBCQTtFQUNJO0lBQ0ksYUFBQTtJQUVBLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUF6Qk47RUEyQk07SUFDSSxhQUFBO0lBQ0EsWUFBQTtFQXpCVjtFQTJCVTtJQUNJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUF6QmQ7RUE0QlU7SUFDSSxhQUFBO0lBQ0EsZUFBQTtFQTFCZDtFQTRCYztJQUNJLFlBQUE7RUExQmxCO0VBNkJjO0lBQ0ksWUFBQTtFQTNCbEI7RUFnQ007SUFDSSxhQUFBO0lBQ0EsWUFBQTtFQTlCVjtFQWdDVTtJQUNJLGFBQUE7SUFDQSxZQUFBO0VBOUJkO0FBQ0Y7O0FBcUNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQW5DSjs7QUFxQ0k7RUFFSSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXBDUjs7QUF3Q0k7RUFDSSx3Q0FBQTtBQXRDUjs7QUF3Q0k7RUFDSSx5Q0FBQTtBQXRDUjs7QUF5Q0k7RUFDSSx1Q0FBQTtBQXZDUjs7QUEyQ0k7RUFDSSwwQ0FBQTtBQXpDUjs7QUE4Q0k7RUFDSSx5Q0FBQTtBQTVDUjs7QUErQ0k7RUFDSSxzQ0FBQTtBQTdDUjs7QUFtREE7RUFDSTtJQUNJLFlBQUE7RUFoRE47RUFrRE07SUFFSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VBakRWO0FBQ0Y7O0FBc0RBO0VBQ0k7SUFDSSxZQUFBO0VBcEROO0VBc0RNO0lBRUksWUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQXJEVjtBQUNGOztBQTBEQTtFQUNJLGFBQUE7QUF4REoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmxvZ29Db250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuXHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAub3dsTG9nb0ltYWdle1xyXG4gICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6MTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhY3RDb250YWluZXIge1xyXG5cclxuICAgIGhlaWdodDogNDgwcHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTRFNDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5jb250ZW50Q29udGFpbmVye1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLnRpdGxlQ29udGFpbmVye1xyXG5cclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0NhbGFkZWEnLCBzZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHRDb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmZpcnN0UGFyYWdyYXBoVGV4dHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2FsYWRlYScsIHNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc2Vjb25kUGFyYWdyYXBoVGV4dHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0NhbGFkZWEnLCBzZXJpZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGVJbWFnZUNvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLnByb2ZpbGVJbWFnZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvY29udGFjdFBob3RvLmpwZycpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpe1xyXG4gICAgLmNvbnRhY3RDb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNjcwcHg7XHJcblxyXG4gICAgICAgIC5jb250ZW50Q29udGFpbmVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xyXG5cclxuICAgICAgICAgICAgLnRpdGxlQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDsgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAudGV4dENvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmZpcnN0UGFyYWdyYXBoVGV4dHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNlY29uZFBhcmFncmFwaFRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZmlsZUltYWdlQ29udGFpbmVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQzMHB4O1xyXG5cclxuICAgICAgICAgICAgLnByb2ZpbGVJbWFnZXtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzQwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCl7XHJcbiAgICAuY29udGFjdENvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmNvbnRlbnRDb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MjVweDtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZUNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC50ZXh0Q29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuZmlyc3RQYXJhZ3JhcGhUZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1ODBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2Vjb25kUGFyYWdyYXBoVGV4dHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9maWxlSW1hZ2VDb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuXHJcbiAgICAgICAgICAgIC5wcm9maWxlSW1hZ2V7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYUxvZ29Db250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuc29jaWFsTWVkaWFMb2dve1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDEycHg7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAudHdpdHRlckxvZ297XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvdHdpdHRlckxvZ28ucG5nJyk7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2tMb2dve1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ZhY2Vib29rTG9nby5wbmcnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmdpdEh1YkxvZ297XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvZ2l0SHViTG9nby5wbmcnKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuaW5zdGFncmFtTG9nb3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbnN0YWdyYW1Mb2dvLnBuZycpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpbmtlZEluTG9nb3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9saW5rZWRJbkxvZ28ucG5nJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5nbWFpbExvZ297XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvZ21haWxMb2dvLnBuZycpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpe1xyXG4gICAgLnNvY2lhbE1lZGlhTG9nb0NvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDY2cHg7XHJcblxyXG4gICAgICAgIC5zb2NpYWxNZWRpYUxvZ297XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpe1xyXG4gICAgLnNvY2lhbE1lZGlhTG9nb0NvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcblxyXG4gICAgICAgIC5zb2NpYWxNZWRpYUxvZ297XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDNweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5oaWRkZW57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");
/* harmony import */ var _experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience-details/experience-details.component */ "Pxh1");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"],
        _experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceDetailsComponent"],
        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"],
                    _experience_details_experience_details_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceDetailsComponent"],
                    _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jxL5":
/*!********************************************!*\
  !*** ./src/app/common/global-constants.ts ***!
  \********************************************/
/*! exports provided: GlobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConstants", function() { return GlobalConstants; });
class GlobalConstants {
}
GlobalConstants.talosCompany = "TALOS";
GlobalConstants.heinsohnCompany = "HEINSOHN";


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map