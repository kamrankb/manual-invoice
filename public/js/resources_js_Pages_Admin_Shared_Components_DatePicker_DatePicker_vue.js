"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Shared_Components_DatePicker_DatePicker_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _vuepic_vue_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vuepic/vue-datepicker */ "./node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js");
/* harmony import */ var _vuepic_vue_datepicker_dist_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vuepic/vue-datepicker/dist/main.css */ "./node_modules/@vuepic/vue-datepicker/dist/main.css");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parse/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'DatePicker',
  props: {
    startDate: String
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var visibility = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var dateAreaRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var closeDateDrop = function closeDateDrop(e) {
      if (visibility && dateAreaRef.value && !dateAreaRef.value.contains(e.target)) {
        visibility.value = false;
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      document.addEventListener("mousedown", closeDateDrop);
    });
    var parseDate = function parseDate(dateString) {
      var _dateString$split = dateString.split("/"),
        _dateString$split2 = _slicedToArray(_dateString$split, 3),
        day = _dateString$split2[0],
        month = _dateString$split2[1],
        year = _dateString$split2[2];
      return new Date(year, month - 1, day);
    };
    var formatDate = function formatDate(dateObject) {
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(dateObject, "dd/MM/yyyy");
    };
    var startDate = props.startDate ? parseDate(props.startDate) : new Date();
    var startDay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(startDate.getDate());
    var startMonth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(startDate.getMonth() + 1);
    var startYear = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(startDate.getFullYear());
    var date = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(startDate);
    var formattedStartDate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(startDate, "dd/MM/yyyy"));
    var updateStartDate = function updateStartDate() {
      date.value = new Date(startYear.value, startMonth.value - 1, startDay.value);
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([date], function () {
      var getDate = new Date(date.value);
      startDay.value = getDate.getDate();
      startMonth.value = getDate.getMonth() + 1;
      startYear.value = getDate.getFullYear();
    });
    var __returned__ = {
      props: props,
      visibility: visibility,
      dateAreaRef: dateAreaRef,
      closeDateDrop: closeDateDrop,
      parseDate: parseDate,
      formatDate: formatDate,
      startDate: startDate,
      startDay: startDay,
      startMonth: startMonth,
      startYear: startYear,
      date: date,
      formattedStartDate: formattedStartDate,
      updateStartDate: updateStartDate,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      get VueDatePicker() {
        return _vuepic_vue_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"];
      },
      get format() {
        return date_fns__WEBPACK_IMPORTED_MODULE_3__["default"];
      },
      get parse() {
        return date_fns__WEBPACK_IMPORTED_MODULE_4__["default"];
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=template&id=31934ef2":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=template&id=31934ef2 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "singleDatepickerArea",
  ref: "dateAreaRef"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-chevron-down"
}, null, -1 /* HOISTED */);
var _hoisted_3 = {
  key: 0,
  "class": "singleDatepickerDropDown"
};
var _hoisted_4 = {
  "class": "datepickerInputArea"
};
var _hoisted_5 = {
  "class": "datepickerSingleInput"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "/", -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "/", -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "datepicker"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-light",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.visibility = !$setup.visibility;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.format($setup.date, "MMM d, yyyy")), 1 /* TEXT */), _hoisted_2]), $setup.visibility ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "day",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.startDay = $event;
    }),
    onInput: $setup.updateStartDate
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.startDay]]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "month",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.startMonth = $event;
    }),
    onInput: $setup.updateStartDate
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.startMonth]]), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "year",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.startYear = $event;
    }),
    onChange: $setup.updateStartDate
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.startYear]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["VueDatePicker"], {
    modelValue: $setup.date,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.date = $event;
    }),
    "enable-time-picker": false,
    inline: "",
    "auto-apply": ""
  }, null, 8 /* PROPS */, ["modelValue"])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 512 /* NEED_PATCH */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vuepic/vue-datepicker/dist/main.css":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vuepic/vue-datepicker/dist/main.css ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dp__input_wrap{position:relative;width:100%;box-sizing:unset}.dp__input_wrap:focus{border-color:var(--dp-border-color-hover);outline:none}.dp__input{background-color:var(--dp-background-color);border-radius:var(--dp-border-radius);font-family:var(--dp-font-family);border:1px solid var(--dp-border-color);outline:none;transition:border-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);width:100%;font-size:var(--dp-font-size);line-height:calc(var(--dp-font-size)*1.5);padding:var(--dp-input-padding);color:var(--dp-text-color);box-sizing:border-box}.dp__input::-moz-placeholder{opacity:.7}.dp__input::placeholder{opacity:.7}.dp__input:hover{border-color:var(--dp-border-color-hover)}.dp__input_reg{caret-color:rgba(0,0,0,0)}.dp__input_focus{border-color:var(--dp-border-color-hover)}.dp__disabled{background:var(--dp-disabled-color)}.dp__disabled::-moz-placeholder{color:var(--dp-disabled-color-text)}.dp__disabled::placeholder{color:var(--dp-disabled-color-text)}.dp__input_icons{display:inline-block;width:var(--dp-font-size);height:var(--dp-font-size);stroke-width:0;font-size:var(--dp-font-size);line-height:calc(var(--dp-font-size)*1.5);padding:6px 12px;color:var(--dp-icon-color);box-sizing:content-box}.dp__input_icon{cursor:pointer;position:absolute;top:50%;inset-inline-start:0;transform:translateY(-50%);color:var(--dp-icon-color)}.dp__clear_icon{position:absolute;top:50%;inset-inline-end:0;transform:translateY(-50%);cursor:pointer;color:var(--dp-icon-color)}.dp__input_icon_pad{padding-inline-start:var(--dp-input-icon-padding)}.dp__input_valid{box-shadow:0 0 var(--dp-border-radius) var(--dp-success-color);border-color:var(--dp-success-color)}.dp__input_valid:hover{border-color:var(--dp-success-color)}.dp__input_invalid{box-shadow:0 0 var(--dp-border-radius) var(--dp-danger-color);border-color:var(--dp-danger-color)}.dp__input_invalid:hover{border-color:var(--dp-danger-color)}.dp__menu{background:var(--dp-background-color);border-radius:var(--dp-border-radius);min-width:var(--dp-menu-min-width);font-family:var(--dp-font-family);font-size:var(--dp-font-size);-webkit-user-select:none;-moz-user-select:none;user-select:none;border:1px solid var(--dp-menu-border-color);box-sizing:border-box}.dp__menu::after{box-sizing:border-box}.dp__menu::before{box-sizing:border-box}.dp__menu:focus{border:1px solid var(--dp-menu-border-color);outline:none}.dp--menu-wrapper{position:absolute;z-index:99999}.dp__menu_inner{padding:var(--dp-menu-padding)}.dp--menu--inner-stretched{padding:6px 0}.dp__menu_index{z-index:99999}.dp-menu-loading,.dp__menu_readonly,.dp__menu_disabled{position:absolute;inset:0;z-index:999999}.dp__menu_disabled{background:rgba(255,255,255,.5);cursor:not-allowed}.dp__menu_readonly{background:rgba(0,0,0,0);cursor:default}.dp-menu-loading{background:rgba(255,255,255,.5);cursor:default}.dp--menu-load-container{display:flex;height:100%;width:100%;justify-content:center;align-items:center}.dp--menu-loader{width:48px;height:48px;border:var(--dp-loader);border-bottom-color:rgba(0,0,0,0);border-radius:50%;display:inline-block;box-sizing:border-box;animation:dp-load-rotation 1s linear infinite;position:absolute}@keyframes dp-load-rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.dp__arrow_top{left:50%;top:0;height:12px;width:12px;background-color:var(--dp-background-color);position:absolute;border-inline-end:1px solid var(--dp-menu-border-color);border-top:1px solid var(--dp-menu-border-color);transform:translate(-50%, -50%) rotate(-45deg)}.dp__arrow_bottom{left:50%;bottom:0;height:12px;width:12px;background-color:var(--dp-background-color);position:absolute;border-inline-end:1px solid var(--dp-menu-border-color);border-bottom:1px solid var(--dp-menu-border-color);transform:translate(-50%, 50%) rotate(45deg)}.dp__action_extra{text-align:center;padding:2px 0}.dp--preset-dates{padding:5px;border-inline-end:1px solid var(--dp-border-color)}@media only screen and (width <= 600px){.dp--preset-dates{display:flex;align-self:center;border:none;overflow-x:auto;max-width:calc(var(--dp-menu-width) - var(--dp-action-row-padding)*2)}}.dp--preset-dates-collapsed{display:flex;align-self:center;border:none;overflow-x:auto;max-width:calc(var(--dp-menu-width) - var(--dp-action-row-padding)*2)}.dp__sidebar_left{padding:5px;border-inline-end:1px solid var(--dp-border-color)}.dp__sidebar_right{padding:5px;margin-inline-end:1px solid var(--dp-border-color)}.dp--preset-range{display:block;width:100%;padding:5px;text-align:left;white-space:nowrap;color:var(--dp-text-color);border-radius:var(--dp-border-radius);transition:var(--dp-common-transition)}.dp--preset-range:hover{background-color:var(--dp-hover-color);color:var(--dp-hover-text-color);cursor:pointer}@media only screen and (width <= 600px){.dp--preset-range{border:1px solid var(--dp-border-color);margin:0 3px}.dp--preset-range:first-child{margin-left:0}.dp--preset-range:last-child{margin-right:0}}.dp--preset-range-collapsed{border:1px solid var(--dp-border-color);margin:0 3px}.dp--preset-range-collapsed:first-child{margin-left:0}.dp--preset-range-collapsed:last-child{margin-right:0}.dp__menu_content_wrapper{display:flex}@media only screen and (width <= 600px){.dp__menu_content_wrapper{flex-direction:column-reverse}}.dp--menu-content-wrapper-collapsed{flex-direction:column-reverse}.dp__calendar_header{position:relative;display:flex;justify-content:center;align-items:center;color:var(--dp-text-color);white-space:nowrap;font-weight:bold}.dp__calendar_header_item{text-align:center;flex-grow:1;height:var(--dp-cell-size);padding:var(--dp-cell-padding);width:var(--dp-cell-size);box-sizing:border-box}.dp__calendar_row{display:flex;justify-content:center;align-items:center;margin:var(--dp-row-margin)}.dp__calendar_item{text-align:center;flex-grow:1;box-sizing:border-box;color:var(--dp-text-color)}.dp__calendar{position:relative}.dp__calendar_header_cell{border-bottom:thin solid var(--dp-border-color);padding:var(--dp-calendar-header-cell-padding)}.dp__cell_inner{display:flex;align-items:center;text-align:center;justify-content:center;border-radius:var(--dp-cell-border-radius);height:var(--dp-cell-size);padding:var(--dp-cell-padding);width:var(--dp-cell-size);border:1px solid rgba(0,0,0,0);box-sizing:border-box;position:relative}.dp__cell_inner:hover{transition:all .2s}.dp__cell_auto_range_start,.dp__date_hover_start:hover,.dp__range_start{border-end-end-radius:0;border-start-end-radius:0}.dp__cell_auto_range_end,.dp__date_hover_end:hover,.dp__range_end{border-end-start-radius:0;border-start-start-radius:0}.dp__range_end,.dp__range_start,.dp__active_date{background:var(--dp-primary-color);color:var(--dp-primary-text-color)}.dp__cell_auto_range_end,.dp__cell_auto_range_start{border-top:1px dashed var(--dp-primary-color);border-bottom:1px dashed var(--dp-primary-color)}.dp__date_hover_end:hover,.dp__date_hover_start:hover,.dp__date_hover:hover{background:var(--dp-hover-color);color:var(--dp-hover-text-color)}.dp__cell_offset{color:var(--dp-secondary-color)}.dp__cell_disabled{color:var(--dp-secondary-color);cursor:not-allowed}.dp__range_between{background:var(--dp-range-between-dates-background-color);color:var(--dp-range-between-dates-text-color);border-radius:0;border:1px solid var(--dp-range-between-border-color)}.dp__range_between_week{background:var(--dp-primary-color);color:var(--dp-primary-text-color);border-radius:0;border-top:1px solid var(--dp-primary-color);border-bottom:1px solid var(--dp-primary-color)}.dp__today{border:1px solid var(--dp-primary-color)}.dp__week_num{color:var(--dp-secondary-color);text-align:center}.dp__cell_auto_range{border-radius:0;border-top:1px dashed var(--dp-primary-color);border-bottom:1px dashed var(--dp-primary-color)}.dp__cell_auto_range_start{border-inline-start:1px dashed var(--dp-primary-color)}.dp__cell_auto_range_end{border-inline-end:1px dashed var(--dp-primary-color)}.dp__calendar_header_separator{width:100%;height:1px;background:var(--dp-border-color)}.dp__calendar_next{margin-inline-start:var(--dp-multi-calendars-spacing)}.dp__marker_line,.dp__marker_dot{height:5px;background-color:var(--dp-marker-color);position:absolute;bottom:0}.dp__marker_dot{width:5px;border-radius:50%;left:50%;transform:translateX(-50%)}.dp__marker_line{width:100%;left:0}.dp__marker_tooltip{position:absolute;border-radius:var(--dp-border-radius);background-color:var(--dp-tooltip-color);padding:5px;border:1px solid var(--dp-border-color);z-index:99999;box-sizing:border-box;cursor:default}.dp__tooltip_content{white-space:nowrap}.dp__tooltip_text{display:flex;align-items:center;flex-flow:row nowrap;color:var(--dp-text-color)}.dp__tooltip_mark{height:5px;width:5px;border-radius:50%;background-color:var(--dp-text-color);color:var(--dp-text-color);margin-inline-end:5px}.dp__arrow_bottom_tp{bottom:0;height:8px;width:8px;background-color:var(--dp-tooltip-color);position:absolute;border-inline-end:1px solid var(--dp-border-color);border-bottom:1px solid var(--dp-border-color);transform:translate(-50%, 50%) rotate(45deg)}.dp__instance_calendar{position:relative;width:100%}@media only screen and (width <= 600px){.dp__flex_display{flex-direction:column}}.dp--flex-display-collapsed{flex-direction:column}.dp__cell_highlight{background-color:var(--dp-highlight-color)}.dp__month_year_row{display:flex;align-items:center;height:var(--dp-month-year-row-height);color:var(--dp-text-color);box-sizing:border-box}.dp__inner_nav{display:flex;align-items:center;justify-content:center;cursor:pointer;height:var(--dp-month-year-row-button-size);width:var(--dp-month-year-row-button-size);color:var(--dp-icon-color);text-align:center;border-radius:50%}.dp__inner_nav svg{height:var(--dp-button-icon-height);width:var(--dp-button-icon-height)}.dp__inner_nav:hover{background:var(--dp-hover-color);color:var(--dp-hover-icon-color)}[dir=rtl] .dp__inner_nav{transform:rotate(180deg)}.dp__inner_nav_disabled:hover,.dp__inner_nav_disabled{background:var(--dp-disabled-color);color:var(--dp-disabled-color-text);cursor:not-allowed}.dp--year-select,.dp__month_year_select{text-align:center;cursor:pointer;height:var(--dp-month-year-row-height);display:flex;align-items:center;justify-content:center;border-radius:var(--dp-border-radius);box-sizing:border-box;color:var(--dp-text-color)}.dp--year-select:hover,.dp__month_year_select:hover{background:var(--dp-hover-color);color:var(--dp-hover-text-color);transition:var(--dp-common-transition)}.dp__month_year_select{width:50%}.dp--year-select{width:100%}.dp__month_year_wrap{display:flex;width:100%}.dp__year_disable_select{justify-content:space-around}.dp__overlay{width:100%;background:var(--dp-background-color);transition:opacity 1s ease-out;z-index:99999;font-family:var(--dp-font-family);color:var(--dp-text-color);box-sizing:border-box}.dp--overlay-absolute{position:absolute;height:100%;top:0;left:0}.dp--overlay-relative{position:relative}.dp__overlay_container::-webkit-scrollbar-track{box-shadow:var(--dp-scroll-bar-background);background-color:var(--dp-scroll-bar-background)}.dp__overlay_container::-webkit-scrollbar{width:5px;background-color:var(--dp-scroll-bar-background)}.dp__overlay_container::-webkit-scrollbar-thumb{background-color:var(--dp-scroll-bar-color);border-radius:10px}.dp__overlay:focus{border:none;outline:none}.dp__container_flex{display:flex}.dp__container_block{display:block}.dp__overlay_container{flex-direction:column;overflow-y:auto}.dp__time_picker_overlay_container{height:100%}.dp__overlay_row{padding:0;box-sizing:border-box;display:flex;margin-inline:auto auto;flex-wrap:wrap;max-width:100%;width:100%;align-items:center}.dp__flex_row{flex:1}.dp__overlay_col{box-sizing:border-box;width:33%;padding:var(--dp-overlay-col-padding);white-space:nowrap}.dp__overlay_cell_pad{padding:var(--dp-common-padding) 0}.dp__overlay_cell_active{cursor:pointer;border-radius:var(--dp-border-radius);text-align:center;background:var(--dp-primary-color);color:var(--dp-primary-text-color)}.dp__overlay_cell{cursor:pointer;border-radius:var(--dp-border-radius);text-align:center}.dp__overlay_cell:hover{background:var(--dp-hover-color);color:var(--dp-hover-text-color);transition:var(--dp-common-transition)}.dp__cell_in_between{background:var(--dp-hover-color);color:var(--dp-hover-text-color)}.dp__over_action_scroll{right:5px;box-sizing:border-box}.dp__overlay_cell_disabled{cursor:not-allowed;background:var(--dp-disabled-color)}.dp__overlay_cell_disabled:hover{background:var(--dp-disabled-color)}.dp__overlay_cell_active_disabled{cursor:not-allowed;background:var(--dp-primary-disabled-color)}.dp__overlay_cell_active_disabled:hover{background:var(--dp-primary-disabled-color)}.dp__btn,.dp--qr-btn,.dp--time-invalid,.dp--time-overlay-btn{border:none;font:inherit;transition:var(--dp-common-transition);line-height:normal}.dp--year-mode-picker{display:flex;width:100%;align-items:center;justify-content:space-between;height:var(--dp-cell-size)}.dp--tp-wrap{max-width:var(--dp-menu-min-width)}.dp__time_input{width:100%;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-family:var(--dp-font-family);color:var(--dp-text-color)}.dp__time_col_reg_block{padding:0 20px}.dp__time_col_reg_inline{padding:0 10px}.dp__time_col_reg_with_button{padding:0 15px}.dp__time_col_sec{padding:0 10px}.dp__time_col_sec_with_button{padding:0 5px}.dp__time_col{text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column}.dp__time_col_block{font-size:var(--dp-time-font-size)}.dp__time_display{cursor:pointer;color:var(--dp-text-color);border-radius:var(--dp-border-radius);display:flex;align-items:center;justify-content:center}.dp__time_display:hover:enabled{background:var(--dp-hover-color);color:var(--dp-hover-text-color)}.dp__time_display_block{padding:0 3px}.dp__time_display_inline{padding:5px}.dp__time_picker_inline_container{display:flex;width:100%;justify-content:center}.dp__inc_dec_button{padding:5px;margin:0;height:var(--dp-time-inc-dec-button-size);width:var(--dp-time-inc-dec-button-size);display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:50%;color:var(--dp-icon-color);box-sizing:border-box}.dp__inc_dec_button svg{height:var(--dp-time-inc-dec-button-size);width:var(--dp-time-inc-dec-button-size)}.dp__inc_dec_button:hover{background:var(--dp-hover-color);color:var(--dp-primary-color)}.dp__inc_dec_button_inline{width:100%;padding:0;height:8px;cursor:pointer;display:flex;align-items:center}.dp__inc_dec_button_disabled:hover,.dp__inc_dec_button_disabled{background:var(--dp-disabled-color);color:var(--dp-disabled-color-text);cursor:not-allowed}.dp__pm_am_button{background:var(--dp-primary-color);color:var(--dp-primary-text-color);border:none;padding:var(--dp-common-padding);border-radius:var(--dp-border-radius);cursor:pointer}.dp__tp_inline_btn_bar{width:100%;height:4px;background-color:var(--dp-secondary-color);transition:var(--dp-common-transition);border-collapse:collapse}.dp__tp_inline_btn_top:hover .dp__tp_btn_in_r{background-color:var(--dp-primary-color);transform:rotate(12deg) scale(1.15) translateY(-2px)}.dp__tp_inline_btn_top:hover .dp__tp_btn_in_l{background-color:var(--dp-primary-color);transform:rotate(-12deg) scale(1.15) translateY(-2px)}.dp__tp_inline_btn_bottom:hover .dp__tp_btn_in_r{background-color:var(--dp-primary-color);transform:rotate(-12deg) scale(1.15) translateY(-2px)}.dp__tp_inline_btn_bottom:hover .dp__tp_btn_in_l{background-color:var(--dp-primary-color);transform:rotate(12deg) scale(1.15) translateY(-2px)}.dp--time-overlay-btn{background:none}.dp--time-invalid{background-color:var(--dp-disabled-color)}.dp__action_row{display:flex;align-items:center;width:100%;padding:var(--dp-action-row-padding);box-sizing:border-box;color:var(--dp-text-color);flex-flow:row nowrap}.dp__action_row svg{height:var(--dp-button-icon-height);width:auto}.dp__selection_preview{display:block;color:var(--dp-text-color);font-size:var(--dp-preview-font-size);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.dp__action_buttons{display:flex;flex:0;white-space:nowrap;align-items:center;justify-content:flex-end;margin-inline-start:auto}.dp__action_button{display:inline-flex;align-items:center;background:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0);padding:var(--dp-action-buttons-padding);line-height:var(--dp-action-button-height);margin-inline-start:3px;height:var(--dp-action-button-height);cursor:pointer;border-radius:var(--dp-border-radius);font-size:var(--dp-preview-font-size);font-family:var(--dp-font-family)}.dp__action_buttons .dp__action_select{background:var(--dp-primary-color);color:var(--dp-primary-text-color)}.dp__action_buttons .dp__action_select:hover{background:var(--dp-primary-color);transition:var(--dp-action-row-transtion)}.dp__action_buttons .dp__action_select:disabled{background:var(--dp-primary-disabled-color);cursor:not-allowed}.dp__action_cancel{color:var(--dp-text-color);border:1px solid var(--dp-border-color)}.dp__action_cancel:hover{border-color:var(--dp-primary-color);transition:var(--dp-action-row-transtion)}.dp-quarter-picker-wrap{display:flex;flex-direction:column;height:100%;min-width:var(--dp-menu-min-width)}.dp--qr-btn{width:100%;padding:var(--dp-common-padding)}.dp--qr-btn:not(.dp--highlighted,.dp--qr-btn-active,.dp--qr-btn-disabled,.dp--qr-btn-between){background:none}.dp--qr-btn:hover:not(.dp--qr-btn-active,.dp--qr-btn-disabled){background:var(--dp-hover-color);color:var(--dp-hover-text-color);transition:var(--dp-common-transition)}.dp--quarter-items{display:flex;flex-direction:column;flex:1;width:100%;height:100%;justify-content:space-evenly}.dp--qr-btn-active{background:var(--dp-primary-color);color:var(--dp-primary-text-color)}.dp--qr-btn-between{background:var(--dp-hover-color);color:var(--dp-hover-text-color)}.dp--qr-btn-disabled{cursor:not-allowed;background:var(--dp-disabled-color)}.dp--qr-btn-disabled:hover{background:var(--dp-disabled-color)}.dp__btn,.dp--time-overlay-btn,.dp--time-invalid,.dp--qr-btn{border:none;font:inherit;transition:var(--dp-common-transition);line-height:normal}.dp--year-mode-picker{display:flex;width:100%;align-items:center;justify-content:space-between;height:var(--dp-cell-size)}:root{--dp-common-transition: all 0.1s ease-in;--dp-menu-padding: 6px 8px;--dp-animation-duration: 0.1s;--dp-menu-appear-transition-timing: cubic-bezier(.4, 0, 1, 1);--dp-transition-timing: ease-out;--dp-action-row-transtion: all 0.2s ease-in;--dp-font-family: -apple-system, blinkmacsystemfont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;--dp-border-radius: 4px;--dp-cell-border-radius: 4px;--dp-transition-length: 22px;--dp-transition-timing-general: 0.1s;--dp-button-height: 35px;--dp-month-year-row-height: 35px;--dp-month-year-row-button-size: 25px;--dp-button-icon-height: 20px;--dp-calendar-wrap-padding: 0 5px;--dp-cell-size: 35px;--dp-cell-padding: 5px;--dp-common-padding: 10px;--dp-input-icon-padding: 35px;--dp-input-padding: 6px 30px 6px 12px;--dp-menu-min-width: 260px;--dp-action-buttons-padding: 1px 6px;--dp-row-margin: 5px 0;--dp-calendar-header-cell-padding: 0.5rem;--dp-multi-calendars-spacing: 10px;--dp-overlay-col-padding: 3px;--dp-time-inc-dec-button-size: 32px;--dp-font-size: 1rem;--dp-preview-font-size: 0.8rem;--dp-time-font-size: 2rem;--dp-action-button-height: 22px;--dp-action-row-padding: 8px}.dp__theme_dark{--dp-background-color: #212121;--dp-text-color: #fff;--dp-hover-color: #484848;--dp-hover-text-color: #fff;--dp-hover-icon-color: #959595;--dp-primary-color: #005cb2;--dp-primary-disabled-color: #61a8ea;--dp-primary-text-color: #fff;--dp-secondary-color: #a9a9a9;--dp-border-color: #2d2d2d;--dp-menu-border-color: #2d2d2d;--dp-border-color-hover: #aaaeb7;--dp-disabled-color: #737373;--dp-disabled-color-text: #d0d0d0;--dp-scroll-bar-background: #212121;--dp-scroll-bar-color: #484848;--dp-success-color: #00701a;--dp-success-color-disabled: #428f59;--dp-icon-color: #959595;--dp-danger-color: #e53935;--dp-marker-color: #e53935;--dp-tooltip-color: #3e3e3e;--dp-highlight-color: rgb(0 92 178 / 20%);--dp-range-between-dates-background-color: var(--dp-hover-color, #484848);--dp-range-between-dates-text-color: var(--dp-hover-text-color, #fff);--dp-range-between-border-color: var(--dp-hover-color, #fff);--dp-loader: 5px solid #005cb2}.dp__theme_light{--dp-background-color: #fff;--dp-text-color: #212121;--dp-hover-color: #f3f3f3;--dp-hover-text-color: #212121;--dp-hover-icon-color: #959595;--dp-primary-color: #1976d2;--dp-primary-disabled-color: #6bacea;--dp-primary-text-color: #f8f5f5;--dp-secondary-color: #c0c4cc;--dp-border-color: #ddd;--dp-menu-border-color: #ddd;--dp-border-color-hover: #aaaeb7;--dp-disabled-color: #f6f6f6;--dp-scroll-bar-background: #f3f3f3;--dp-scroll-bar-color: #959595;--dp-success-color: #76d275;--dp-success-color-disabled: #a3d9b1;--dp-icon-color: #959595;--dp-danger-color: #ff6f60;--dp-marker-color: #ff6f60;--dp-tooltip-color: #fafafa;--dp-disabled-color-text: #8e8e8e;--dp-highlight-color: rgb(25 118 210 / 10%);--dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);--dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);--dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);--dp-loader: 5px solid #1976d2}.dp__flex{display:flex;align-items:center}.dp__btn{background:none}.dp__main{font-family:var(--dp-font-family);-webkit-user-select:none;-moz-user-select:none;user-select:none;box-sizing:border-box;position:relative;width:100%}.dp__pointer{cursor:pointer}.dp__icon{stroke:currentcolor;fill:currentcolor}.dp__button{width:100%;text-align:center;color:var(--dp-icon-color);cursor:pointer;display:flex;align-items:center;place-content:center center;padding:var(--dp-common-padding);box-sizing:border-box;height:var(--dp-button-height)}.dp__button.dp__overlay_action{position:absolute;bottom:0}.dp__button:hover{background:var(--dp-hover-color);color:var(--dp-hover-icon-color)}.dp__button svg{height:var(--dp-button-icon-height);width:auto}.dp__button_bottom{border-bottom-left-radius:var(--dp-border-radius);border-bottom-right-radius:var(--dp-border-radius)}.dp__flex_display{display:flex}.dp__flex_display_with_input{flex-direction:column;align-items:flex-start}.dp__relative{position:relative}.calendar-next-enter-active,.calendar-next-leave-active,.calendar-prev-enter-active,.calendar-prev-leave-active{transition:all var(--dp-transition-timing-general) ease-out}.calendar-next-enter-from{opacity:0;transform:translateX(var(--dp-transition-length))}.calendar-next-leave-to{opacity:0;transform:translateX(calc(var(--dp-transition-length) * -1))}.calendar-prev-enter-from{opacity:0;transform:translateX(calc(var(--dp-transition-length) * -1))}.calendar-prev-leave-to{opacity:0;transform:translateX(var(--dp-transition-length))}.dp-menu-appear-bottom-enter-active,.dp-menu-appear-bottom-leave-active,.dp-menu-appear-top-enter-active,.dp-menu-appear-top-leave-active,.dp-slide-up-enter-active,.dp-slide-up-leave-active,.dp-slide-down-enter-active,.dp-slide-down-leave-active{transition:all var(--dp-animation-duration) var(--dp-transition-timing)}.dp-menu-appear-top-enter-from,.dp-menu-appear-top-leave-to,.dp-slide-down-leave-to,.dp-slide-up-enter-from{opacity:0;transform:translateY(var(--dp-transition-length))}.dp-menu-appear-bottom-enter-from,.dp-menu-appear-bottom-leave-to,.dp-slide-down-enter-from,.dp-slide-up-leave-to{opacity:0;transform:translateY(calc(var(--dp-transition-length) * -1))}.dp--arrow-btn-nav{transition:var(--dp-common-transition)}.dp--highlighted{background-color:var(--dp-highlight-color)}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.singleDatepickerArea {\n    position: relative;\n}\n.singleDatepickerArea > button {\n    background: #fff !important;\n    font-size: 13px;\n    line-height: 20px;\n    border-radius: 0;\n    padding: 0;\n    font-weight: 500;\n    border: 0;\n    outline: 0;\n    display: flex;\n    margin: 0;\n    gap: 0.25rem;\n    align-items: center;\n}\n\n.singleDatepickerArea > button > i {\n  font-size: 20px;\n}\n.datepickerInputArea {\n    display: flex;\n    gap: 15px;\n    padding: 15px 10px;\n    align-items: center;\n    justify-content: center;\n}\n.datepickerSingleInput {\n    display: flex;\n    gap: 6px;\n    padding: 5px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n}\n\n.datepickerDivider {\n    font-size: 20px;\n}\n.datepickerSingleInput input {\n    width: 20px;\n    border: 0;\n    box-shadow: none;\n    outline: 0;\n    text-align: center;\n}\n.datepickerSingleInput input.year {\n    width: 35px;\n}\n.singleDatepickerDropDown {\n    position: absolute;\n    white-space: nowrap;\n    background: #fff;\n    left: 50%;\n    top: 99%;\n    min-width: 100%;\n    border-radius: 0.5rem;\n    box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.15);\n    transform: translate(-50%, 12px);\n    z-index: 10100;\n    list-style: none;\n    margin: 0;\n    font-weight: 600;\n    line-height: 1.2;\n}\n\n.singleDatepickerDropDown::before {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    bottom: 100%;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid #ffffff;\n    z-index: 1;\n    filter: drop-shadow(0 -0.125rem 0.125rem rgba(0, 0, 0, 0.15));\n    transform: translate(-50%, 0);\n}\n\n/* .singleDatepickerDropDown .dp__action_row {\n    display: none;\n} */\n\n.singleDatepickerDropDown .dp__main {\n    justify-content: center;\n    --dp-cell-size: 40px;\n}\n\n.singleDatepickerDropDown .dp__cell_inner {\n    border: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.singleDatepickerDropDown .dp__theme_light {\n    --dp-background-color: #f6f8fa;\n    --dp-primary-color: var(--custom-primary);\n    --dp-range-between-dates-background-color: #9277f9;\n    --dp-range-between-border-color: #9277f9;\n    --dp-range-between-dates-text-color: #fff;\n    --dp-cell-border-radius: 0px;\n    border: 0;\n}\n\n.singleDatepickerDropDown .dp__calendar_header_item {\n    opacity: 0.6;\n    font-size: 12px;\n    height: 27px;\n}\n\n.singleDatepickerDropDown .dp__month_year_row {\n    margin-bottom: 10px;\n}\n\n.singleDatepickerDropDown .dp__calendar_row {\n    margin: 0;\n}\n\n.singleDatepickerDropDown :is(.dp__range_end, .dp__range_start, .dp__active_date) {\n    border-radius: 0;\n}\n\n.datepicker {\n    background: #f6f8fa;\n    padding-bottom: 0.5rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCDay/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setUTCDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function setUTCDay(dirtyDate, dirtyDay, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/setUTCISODay/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCISODay/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setUTCISODay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



function setUTCISODay(dirtyDate, dirtyDay) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var day = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDay);
  if (day % 7 === 0) {
    day = day - 7;
  }
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var isoWeek = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyISOWeek);
  var diff = (0,_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/setUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/setUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setUTCWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




function setUTCWeek(dirtyDate, dirtyWeek, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var week = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyWeek);
  var diff = (0,_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/Parser.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/Parser.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Setter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Setter.js */ "./node_modules/date-fns/esm/parse/_lib/Setter.js");




var Parser = /*#__PURE__*/function () {
  function Parser() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Parser);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "incompatibleTokens", void 0);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "priority", void 0);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "subPriority", void 0);
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Parser, [{
    key: "run",
    value: function run(dateString, token, match, options) {
      var result = this.parse(dateString, token, match, options);
      if (!result) {
        return null;
      }
      return {
        setter: new _Setter_js__WEBPACK_IMPORTED_MODULE_3__.ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
        rest: result.rest
      };
    }
  }, {
    key: "validate",
    value: function validate(_utcDate, _value, _options) {
      return true;
    }
  }]);
  return Parser;
}();

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/Setter.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/Setter.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateToSystemTimezoneSetter: () => (/* binding */ DateToSystemTimezoneSetter),
/* harmony export */   Setter: () => (/* binding */ Setter),
/* harmony export */   ValueSetter: () => (/* binding */ ValueSetter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");






var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = /*#__PURE__*/function () {
  function Setter() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Setter);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "priority", void 0);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "subPriority", 0);
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Setter, [{
    key: "validate",
    value: function validate(_utcDate, _options) {
      return true;
    }
  }]);
  return Setter;
}();
var ValueSetter = /*#__PURE__*/function (_Setter) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(ValueSetter, _Setter);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(ValueSetter);
  function ValueSetter(value, validateValue, setValue, priority, subPriority) {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ValueSetter);
    _this = _super.call(this);
    _this.value = value;
    _this.validateValue = validateValue;
    _this.setValue = setValue;
    _this.priority = priority;
    if (subPriority) {
      _this.subPriority = subPriority;
    }
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ValueSetter, [{
    key: "validate",
    value: function validate(utcDate, options) {
      return this.validateValue(utcDate, this.value, options);
    }
  }, {
    key: "set",
    value: function set(utcDate, flags, options) {
      return this.setValue(utcDate, flags, this.value, options);
    }
  }]);
  return ValueSetter;
}(Setter);
var DateToSystemTimezoneSetter = /*#__PURE__*/function (_Setter2) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(DateToSystemTimezoneSetter, _Setter2);
  var _super2 = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(DateToSystemTimezoneSetter);
  function DateToSystemTimezoneSetter() {
    var _this2;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, DateToSystemTimezoneSetter);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2), "subPriority", -1);
    return _this2;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(DateToSystemTimezoneSetter, [{
    key: "set",
    value: function set(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }
      var convertedDate = new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }
  }]);
  return DateToSystemTimezoneSetter;
}(Setter);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/constants.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/constants.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numericPatterns: () => (/* binding */ numericPatterns),
/* harmony export */   timezonePatterns: () => (/* binding */ timezonePatterns)
/* harmony export */ });
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59

  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};

var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMMidnightParser: () => (/* binding */ AMPMMidnightParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");








var AMPMMidnightParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AMPMMidnightParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(AMPMMidnightParser);
  function AMPMMidnightParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AMPMMidnightParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 80);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['a', 'B', 'H', 'k', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AMPMMidnightParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'bbbbb':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'bbbb':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.dayPeriodEnumToHours)(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMMidnightParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMParser: () => (/* binding */ AMPMParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");








var AMPMParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AMPMParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(AMPMParser);
  function AMPMParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AMPMParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 80);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['b', 'B', 'H', 'k', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AMPMParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'aaaaa':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'aaaa':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.dayPeriodEnumToHours)(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateParser: () => (/* binding */ DateParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");









var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Day of the month
var DateParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DateParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(DateParser);
  function DateParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DateParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 90);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "subPriority", 1);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DateParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'd':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.date, dateString);
        case 'do':
          return match.ordinalNumber(dateString, {
            unit: 'date'
          });
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isLeapYearIndex)(year);
      var month = date.getUTCMonth();
      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DateParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayOfYearParser: () => (/* binding */ DayOfYearParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");









var DayOfYearParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DayOfYearParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(DayOfYearParser);
  function DayOfYearParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DayOfYearParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 90);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "subpriority", 1);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DayOfYearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'D':
        case 'DD':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.dayOfYear, dateString);
        case 'Do':
          return match.ordinalNumber(dateString, {
            unit: 'date'
          });
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.isLeapYearIndex)(year);
      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayOfYearParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayParser: () => (/* binding */ DayParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/setUTCDay/index.js */ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js");







 // Day of week
var DayParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DayParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(DayParser);
  function DayParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DayParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 90);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['D', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DayParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // T
        case 'EEEEE':
          return match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu
        case 'EEEEEE':
          return match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday
        case 'EEEE':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = (0,_lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayPeriodParser: () => (/* binding */ DayPeriodParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");







 // in the morning, in the afternoon, in the evening, at night
var DayPeriodParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DayPeriodParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(DayPeriodParser);
  function DayPeriodParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DayPeriodParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 80);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['a', 'b', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DayPeriodParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'BBBBB':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'BBBB':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.dayPeriodEnumToHours)(value), 0, 0, 0);
      return date;
    }
  }]);
  return DayPeriodParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EraParser: () => (/* binding */ EraParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");







var EraParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(EraParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(EraParser);
  function EraParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EraParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 140);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['R', 'u', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EraParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(dateString, {
            width: 'abbreviated'
          }) || match.era(dateString, {
            width: 'narrow'
          });
        // A, B
        case 'GGGGG':
          return match.era(dateString, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ
        case 'GGGG':
        default:
          return match.era(dateString, {
            width: 'wide'
          }) || match.era(dateString, {
            width: 'abbreviated'
          }) || match.era(dateString, {
            width: 'narrow'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return EraParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_6__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtendedYearParser: () => (/* binding */ ExtendedYearParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");








var ExtendedYearParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ExtendedYearParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(ExtendedYearParser);
  function ExtendedYearParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExtendedYearParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 130);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ExtendedYearParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      if (token === 'u') {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigitsSigned)(4, dateString);
      }
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigitsSigned)(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ExtendedYearParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js":
/*!********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FractionOfSecondParser: () => (/* binding */ FractionOfSecondParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");








var FractionOfSecondParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FractionOfSecondParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FractionOfSecondParser);
  function FractionOfSecondParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FractionOfSecondParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 30);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['t', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FractionOfSecondParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      var valueCallback = function valueCallback(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMilliseconds(value);
      return date;
    }
  }]);
  return FractionOfSecondParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0To11Parser: () => (/* binding */ Hour0To11Parser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");









var Hour0To11Parser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Hour0To11Parser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Hour0To11Parser);
  function Hour0To11Parser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hour0To11Parser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 70);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['h', 'H', 'k', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hour0To11Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'K':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.hour11h, dateString);
        case 'Ko':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour0To11Parser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0to23Parser: () => (/* binding */ Hour0to23Parser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");









var Hour0to23Parser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Hour0to23Parser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Hour0to23Parser);
  function Hour0to23Parser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hour0to23Parser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 70);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['a', 'b', 'h', 'K', 'k', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hour0to23Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'H':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.hour23h, dateString);
        case 'Ho':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 23;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  }]);
  return Hour0to23Parser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1To24Parser: () => (/* binding */ Hour1To24Parser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");









var Hour1To24Parser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Hour1To24Parser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Hour1To24Parser);
  function Hour1To24Parser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hour1To24Parser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 70);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['a', 'b', 'h', 'H', 'K', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hour1To24Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'k':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.hour24h, dateString);
        case 'ko':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 24;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  }]);
  return Hour1To24Parser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1to12Parser: () => (/* binding */ Hour1to12Parser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");









var Hour1to12Parser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Hour1to12Parser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Hour1to12Parser);
  function Hour1to12Parser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hour1to12Parser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 70);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['H', 'K', 'k', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hour1to12Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'h':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.hour12h, dateString);
        case 'ho':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 12;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour1to12Parser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISODayParser: () => (/* binding */ ISODayParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");
/* harmony import */ var _lib_setUTCISODay_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_lib/setUTCISODay/index.js */ "./node_modules/date-fns/esm/_lib/setUTCISODay/index.js");








 // ISO day of week
var ISODayParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ISODayParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(ISODayParser);
  function ISODayParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ISODayParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 90);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ISODayParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        if (value === 0) {
          return 7;
        }
        return value;
      };
      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
        // 2nd
        case 'io':
          return match.ordinalNumber(dateString, {
            unit: 'day'
          });
        // Tue
        case 'iii':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // T
        case 'iiiii':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // Tu
        case 'iiiiii':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // Tuesday
        case 'iiii':
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 7;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date = (0,_lib_setUTCISODay_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(date, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ISODayParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneParser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneParser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneParser: () => (/* binding */ ISOTimezoneParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");








 // Timezone (ISO-8601)
var ISOTimezoneParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ISOTimezoneParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(ISOTimezoneParser);
  function ISOTimezoneParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ISOTimezoneParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 10);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['t', 'T', 'X']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ISOTimezoneParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      switch (token) {
        case 'x':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.timezonePatterns.basicOptionalMinutes, dateString);
        case 'xx':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.timezonePatterns.basic, dateString);
        case 'xxxx':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.timezonePatterns.basicOptionalSeconds, dateString);
        case 'xxxxx':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.timezonePatterns.extendedOptionalSeconds, dateString);
        case 'xxx':
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneWithZParser.js":
/*!********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneWithZParser.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneWithZParser: () => (/* binding */ ISOTimezoneWithZParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");








 // Timezone (ISO-8601. +00:00 is `'Z'`)
var ISOTimezoneWithZParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ISOTimezoneWithZParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(ISOTimezoneWithZParser);
  function ISOTimezoneWithZParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ISOTimezoneWithZParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 10);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['t', 'T', 'x']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ISOTimezoneWithZParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      switch (token) {
        case 'X':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.timezonePatterns.basicOptionalMinutes, dateString);
        case 'XX':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.timezonePatterns.basic, dateString);
        case 'XXXX':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.timezonePatterns.basicOptionalSeconds, dateString);
        case 'XXXXX':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.timezonePatterns.extendedOptionalSeconds, dateString);
        case 'XXX':
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneWithZParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekParser: () => (/* binding */ ISOWeekParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");
/* harmony import */ var _lib_setUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_lib/setUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js");
/* harmony import */ var _lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_lib/startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");










 // ISO week of year
var ISOWeekParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ISOWeekParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(ISOWeekParser);
  function ISOWeekParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ISOWeekParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 100);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ISOWeekParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'I':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.week, dateString);
        case 'Io':
          return match.ordinalNumber(dateString, {
            unit: 'week'
          });
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      return (0,_lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_lib_setUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(date, value));
    }
  }]);
  return ISOWeekParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_10__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekYearParser: () => (/* binding */ ISOWeekYearParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");
/* harmony import */ var _lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_lib/startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");








 // ISO week-numbering year
var ISOWeekYearParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ISOWeekYearParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(ISOWeekYearParser);
  function ISOWeekYearParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ISOWeekYearParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 130);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ISOWeekYearParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      if (token === 'R') {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigitsSigned)(4, dateString);
      }
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigitsSigned)(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return (0,_lib_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(firstWeekOfYear);
    }
  }]);
  return ISOWeekYearParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalDayParser: () => (/* binding */ LocalDayParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");
/* harmony import */ var _lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_lib/setUTCDay/index.js */ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js");








 // Local day of week
var LocalDayParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(LocalDayParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(LocalDayParser);
  function LocalDayParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LocalDayParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 90);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LocalDayParser, [{
    key: "parse",
    value: function parse(dateString, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString), valueCallback);
        // 3rd
        case 'eo':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(match.ordinalNumber(dateString, {
            unit: 'day'
          }), valueCallback);
        // Tue
        case 'eee':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // T
        case 'eeeee':
          return match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu
        case 'eeeeee':
          return match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday
        case 'eeee':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = (0,_lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return LocalDayParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekParser: () => (/* binding */ LocalWeekParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");
/* harmony import */ var _lib_setUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_lib/setUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/setUTCWeek/index.js");
/* harmony import */ var _lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_lib/startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");










 // Local week of year
var LocalWeekParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(LocalWeekParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(LocalWeekParser);
  function LocalWeekParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LocalWeekParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 100);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LocalWeekParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'w':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.week, dateString);
        case 'wo':
          return match.ordinalNumber(dateString, {
            unit: 'week'
          });
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      return (0,_lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_lib_setUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(date, value, options), options);
    }
  }]);
  return LocalWeekParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_10__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekYearParser: () => (/* binding */ LocalWeekYearParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_lib/startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");










// Local week-numbering year
var LocalWeekYearParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(LocalWeekYearParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(LocalWeekYearParser);
  function LocalWeekYearParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LocalWeekYearParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 130);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LocalWeekYearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };
      switch (token) {
        case 'Y':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(4, dateString), valueCallback);
        case 'Yo':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(match.ordinalNumber(dateString, {
            unit: 'year'
          }), valueCallback);
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set(date, flags, value, options) {
      var currentYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(date, options);
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.normalizeTwoDigitYear)(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return (0,_lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(date, options);
      }
      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return (0,_lib_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(date, options);
    }
  }]);
  return LocalWeekYearParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_9__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinuteParser: () => (/* binding */ MinuteParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");









var MinuteParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MinuteParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(MinuteParser);
  function MinuteParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MinuteParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 60);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['t', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MinuteParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'm':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.minute, dateString);
        case 'mo':
          return match.ordinalNumber(dateString, {
            unit: 'minute'
          });
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  }]);
  return MinuteParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthParser: () => (/* binding */ MonthParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");









var MonthParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MonthParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(MonthParser);
  function MonthParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MonthParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 110);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MonthParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };
      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.month, dateString), valueCallback);
        // 01, 02, ..., 12
        case 'MM':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(2, dateString), valueCallback);
        // 1st, 2nd, ..., 12th
        case 'Mo':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(match.ordinalNumber(dateString, {
            unit: 'month'
          }), valueCallback);
        // Jan, Feb, ..., Dec
        case 'MMM':
          return match.month(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D
        case 'MMMMM':
          return match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December
        case 'MMMM':
        default:
          return match.month(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return MonthParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuarterParser: () => (/* binding */ QuarterParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");








var QuarterParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(QuarterParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(QuarterParser);
  function QuarterParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuarterParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 120);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuarterParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
        // 1st, 2nd, 3rd, 4th
        case 'Qo':
          return match.ordinalNumber(dateString, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4
        case 'QQQ':
          return match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'QQQQQ':
          return match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...
        case 'QQQQ':
        default:
          return match.quarter(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return QuarterParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecondParser: () => (/* binding */ SecondParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");









var SecondParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SecondParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(SecondParser);
  function SecondParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SecondParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 50);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['t', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SecondParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 's':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.second, dateString);
        case 'so':
          return match.ordinalNumber(dateString, {
            unit: 'second'
          });
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  }]);
  return SecondParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneLocalDayParser: () => (/* binding */ StandAloneLocalDayParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");
/* harmony import */ var _lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_lib/setUTCDay/index.js */ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js");








 // Stand-alone local day of week
var StandAloneLocalDayParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(StandAloneLocalDayParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(StandAloneLocalDayParser);
  function StandAloneLocalDayParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StandAloneLocalDayParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 90);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StandAloneLocalDayParser, [{
    key: "parse",
    value: function parse(dateString, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString), valueCallback);
        // 3rd
        case 'co':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(match.ordinalNumber(dateString, {
            unit: 'day'
          }), valueCallback);
        // Tue
        case 'ccc':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // T
        case 'ccccc':
          return match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu
        case 'cccccc':
          return match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday
        case 'cccc':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = (0,_lib_setUTCDay_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneLocalDayParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneMonthParser: () => (/* binding */ StandAloneMonthParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");









var StandAloneMonthParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(StandAloneMonthParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(StandAloneMonthParser);
  function StandAloneMonthParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StandAloneMonthParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 110);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StandAloneMonthParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };
      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_7__.numericPatterns.month, dateString), valueCallback);
        // 01, 02, ..., 12
        case 'LL':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(2, dateString), valueCallback);
        // 1st, 2nd, ..., 12th
        case 'Lo':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(match.ordinalNumber(dateString, {
            unit: 'month'
          }), valueCallback);
        // Jan, Feb, ..., Dec
        case 'LLL':
          return match.month(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D
        case 'LLLLL':
          return match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December
        case 'LLLL':
        default:
          return match.month(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneMonthParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_8__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneQuarterParser: () => (/* binding */ StandAloneQuarterParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");








var StandAloneQuarterParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(StandAloneQuarterParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(StandAloneQuarterParser);
  function StandAloneQuarterParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StandAloneQuarterParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 120);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StandAloneQuarterParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString);
        // 1st, 2nd, 3rd, 4th
        case 'qo':
          return match.ordinalNumber(dateString, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4
        case 'qqq':
          return match.quarter(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'qqqqq':
          return match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...
        case 'qqqq':
        default:
          return match.quarter(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneQuarterParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampMillisecondsParser: () => (/* binding */ TimestampMillisecondsParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");








var TimestampMillisecondsParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TimestampMillisecondsParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(TimestampMillisecondsParser);
  function TimestampMillisecondsParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TimestampMillisecondsParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 20);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", '*');
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TimestampMillisecondsParser, [{
    key: "parse",
    value: function parse(dateString) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseAnyDigitsSigned)(dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampMillisecondsParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js":
/*!********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampSecondsParser: () => (/* binding */ TimestampSecondsParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");








var TimestampSecondsParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TimestampSecondsParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(TimestampSecondsParser);
  function TimestampSecondsParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TimestampSecondsParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 40);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", '*');
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TimestampSecondsParser, [{
    key: "parse",
    value: function parse(dateString) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseAnyDigitsSigned)(dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampSecondsParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YearParser: () => (/* binding */ YearParser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Parser.js */ "./node_modules/date-fns/esm/parse/_lib/Parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./node_modules/date-fns/esm/parse/_lib/utils.js");








// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
var YearParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(YearParser, _Parser);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(YearParser);
  function YearParser() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, YearParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "priority", 130);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "incompatibleTokens", ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(YearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };
      switch (token) {
        case 'y':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(4, dateString), valueCallback);
        case 'yo':
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)(match.ordinalNumber(dateString, {
            unit: 'year'
          }), valueCallback);
        default:
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseNDigits)(token.length, dateString), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      var currentYear = date.getUTCFullYear();
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.normalizeTwoDigitYear)(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }
      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return YearParser;
}(_Parser_js__WEBPACK_IMPORTED_MODULE_7__.Parser);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/parsers/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsers: () => (/* binding */ parsers)
/* harmony export */ });
/* harmony import */ var _EraParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EraParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js");
/* harmony import */ var _YearParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YearParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js");
/* harmony import */ var _LocalWeekYearParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalWeekYearParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js");
/* harmony import */ var _ISOWeekYearParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ISOWeekYearParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js");
/* harmony import */ var _ExtendedYearParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExtendedYearParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js");
/* harmony import */ var _QuarterParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QuarterParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js");
/* harmony import */ var _StandAloneQuarterParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StandAloneQuarterParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js");
/* harmony import */ var _MonthParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MonthParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js");
/* harmony import */ var _StandAloneMonthParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StandAloneMonthParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js");
/* harmony import */ var _LocalWeekParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LocalWeekParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js");
/* harmony import */ var _ISOWeekParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ISOWeekParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js");
/* harmony import */ var _DateParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DateParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js");
/* harmony import */ var _DayOfYearParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DayOfYearParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js");
/* harmony import */ var _DayParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DayParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js");
/* harmony import */ var _LocalDayParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LocalDayParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js");
/* harmony import */ var _StandAloneLocalDayParser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StandAloneLocalDayParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js");
/* harmony import */ var _ISODayParser_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ISODayParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js");
/* harmony import */ var _AMPMParser_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AMPMParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js");
/* harmony import */ var _AMPMMidnightParser_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AMPMMidnightParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js");
/* harmony import */ var _DayPeriodParser_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DayPeriodParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js");
/* harmony import */ var _Hour1to12Parser_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Hour1to12Parser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js");
/* harmony import */ var _Hour0to23Parser_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Hour0to23Parser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js");
/* harmony import */ var _Hour0To11Parser_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Hour0To11Parser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js");
/* harmony import */ var _Hour1To24Parser_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Hour1To24Parser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js");
/* harmony import */ var _MinuteParser_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./MinuteParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js");
/* harmony import */ var _SecondParser_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SecondParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js");
/* harmony import */ var _FractionOfSecondParser_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./FractionOfSecondParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js");
/* harmony import */ var _ISOTimezoneWithZParser_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ISOTimezoneWithZParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneWithZParser.js");
/* harmony import */ var _ISOTimezoneParser_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ISOTimezoneParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneParser.js");
/* harmony import */ var _TimestampSecondsParser_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./TimestampSecondsParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js");
/* harmony import */ var _TimestampMillisecondsParser_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./TimestampMillisecondsParser.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js");































/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
var parsers = {
  G: new _EraParser_js__WEBPACK_IMPORTED_MODULE_0__.EraParser(),
  y: new _YearParser_js__WEBPACK_IMPORTED_MODULE_1__.YearParser(),
  Y: new _LocalWeekYearParser_js__WEBPACK_IMPORTED_MODULE_2__.LocalWeekYearParser(),
  R: new _ISOWeekYearParser_js__WEBPACK_IMPORTED_MODULE_3__.ISOWeekYearParser(),
  u: new _ExtendedYearParser_js__WEBPACK_IMPORTED_MODULE_4__.ExtendedYearParser(),
  Q: new _QuarterParser_js__WEBPACK_IMPORTED_MODULE_5__.QuarterParser(),
  q: new _StandAloneQuarterParser_js__WEBPACK_IMPORTED_MODULE_6__.StandAloneQuarterParser(),
  M: new _MonthParser_js__WEBPACK_IMPORTED_MODULE_7__.MonthParser(),
  L: new _StandAloneMonthParser_js__WEBPACK_IMPORTED_MODULE_8__.StandAloneMonthParser(),
  w: new _LocalWeekParser_js__WEBPACK_IMPORTED_MODULE_9__.LocalWeekParser(),
  I: new _ISOWeekParser_js__WEBPACK_IMPORTED_MODULE_10__.ISOWeekParser(),
  d: new _DateParser_js__WEBPACK_IMPORTED_MODULE_11__.DateParser(),
  D: new _DayOfYearParser_js__WEBPACK_IMPORTED_MODULE_12__.DayOfYearParser(),
  E: new _DayParser_js__WEBPACK_IMPORTED_MODULE_13__.DayParser(),
  e: new _LocalDayParser_js__WEBPACK_IMPORTED_MODULE_14__.LocalDayParser(),
  c: new _StandAloneLocalDayParser_js__WEBPACK_IMPORTED_MODULE_15__.StandAloneLocalDayParser(),
  i: new _ISODayParser_js__WEBPACK_IMPORTED_MODULE_16__.ISODayParser(),
  a: new _AMPMParser_js__WEBPACK_IMPORTED_MODULE_17__.AMPMParser(),
  b: new _AMPMMidnightParser_js__WEBPACK_IMPORTED_MODULE_18__.AMPMMidnightParser(),
  B: new _DayPeriodParser_js__WEBPACK_IMPORTED_MODULE_19__.DayPeriodParser(),
  h: new _Hour1to12Parser_js__WEBPACK_IMPORTED_MODULE_20__.Hour1to12Parser(),
  H: new _Hour0to23Parser_js__WEBPACK_IMPORTED_MODULE_21__.Hour0to23Parser(),
  K: new _Hour0To11Parser_js__WEBPACK_IMPORTED_MODULE_22__.Hour0To11Parser(),
  k: new _Hour1To24Parser_js__WEBPACK_IMPORTED_MODULE_23__.Hour1To24Parser(),
  m: new _MinuteParser_js__WEBPACK_IMPORTED_MODULE_24__.MinuteParser(),
  s: new _SecondParser_js__WEBPACK_IMPORTED_MODULE_25__.SecondParser(),
  S: new _FractionOfSecondParser_js__WEBPACK_IMPORTED_MODULE_26__.FractionOfSecondParser(),
  X: new _ISOTimezoneWithZParser_js__WEBPACK_IMPORTED_MODULE_27__.ISOTimezoneWithZParser(),
  x: new _ISOTimezoneParser_js__WEBPACK_IMPORTED_MODULE_28__.ISOTimezoneParser(),
  t: new _TimestampSecondsParser_js__WEBPACK_IMPORTED_MODULE_29__.TimestampSecondsParser(),
  T: new _TimestampMillisecondsParser_js__WEBPACK_IMPORTED_MODULE_30__.TimestampMillisecondsParser()
};

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/_lib/utils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dayPeriodEnumToHours: () => (/* binding */ dayPeriodEnumToHours),
/* harmony export */   isLeapYearIndex: () => (/* binding */ isLeapYearIndex),
/* harmony export */   mapValue: () => (/* binding */ mapValue),
/* harmony export */   normalizeTwoDigitYear: () => (/* binding */ normalizeTwoDigitYear),
/* harmony export */   parseAnyDigitsSigned: () => (/* binding */ parseAnyDigitsSigned),
/* harmony export */   parseNDigits: () => (/* binding */ parseNDigits),
/* harmony export */   parseNDigitsSigned: () => (/* binding */ parseNDigitsSigned),
/* harmony export */   parseNumericPattern: () => (/* binding */ parseNumericPattern),
/* harmony export */   parseTimezonePattern: () => (/* binding */ parseTimezonePattern)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/esm/parse/_lib/constants.js");


function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }

  // Input is 'Z'
  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute + seconds * _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case 'morning':
      return 4;
    case 'evening':
      return 17;
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/esm/parse/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_Setter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_lib/Setter.js */ "./node_modules/date-fns/esm/parse/_lib/Setter.js");
/* harmony import */ var _lib_parsers_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_lib/parsers/index.js */ "./node_modules/date-fns/esm/parse/_lib/parsers/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");













 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_3__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_4__["default"];
  if (!locale.match) {
    throw new RangeError('locale must contain match property');
  }
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (formatString === '') {
    if (dateString === '') {
      return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }
  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale
  };

  // If timezone isn't specified, it will be set to the system timezone
  var setters = [new _lib_Setter_js__WEBPACK_IMPORTED_MODULE_7__.DateToSystemTimezoneSetter()];
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter in _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];
  var _iterator = (0,_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(tokens),
    _step;
  try {
    var _loop = function _loop() {
      var token = _step.value;
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(token)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(token, formatString, dirtyDateString);
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(token)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(token, formatString, dirtyDateString);
      }
      var firstCharacter = token[0];
      var parser = _lib_parsers_index_js__WEBPACK_IMPORTED_MODULE_10__.parsers[firstCharacter];
      if (parser) {
        var incompatibleTokens = parser.incompatibleTokens;
        if (Array.isArray(incompatibleTokens)) {
          var incompatibleToken = usedTokens.find(function (usedToken) {
            return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
          });
          if (incompatibleToken) {
            throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
          }
        } else if (parser.incompatibleTokens === '*' && usedTokens.length > 0) {
          throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
        }
        usedTokens.push({
          token: firstCharacter,
          fullToken: token
        });
        var parseResult = parser.run(dateString, token, locale.match, subFnOptions);
        if (!parseResult) {
          return {
            v: new Date(NaN)
          };
        }
        setters.push(parseResult.setter);
        dateString = parseResult.rest;
      } else {
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        }

        // Replace two single quote characters with one single quote character
        if (token === "''") {
          token = "'";
        } else if (firstCharacter === "'") {
          token = cleanEscapedString(token);
        }

        // Cut token from string, or, if string doesn't match the token, return Invalid Date
        if (dateString.indexOf(token) === 0) {
          dateString = dateString.slice(token.length);
        } else {
          return {
            v: new Date(NaN)
          };
        }
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();
      if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(_ret) === "object") return _ret.v;
    }

    // Check if the remaining input contains something other than whitespace
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }
  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyReferenceDate);
  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_11__["default"])(date, (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_12__["default"])(date));
  var flags = {};
  var _iterator2 = (0,_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(uniquePrioritySetters),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var setter = _step2.value;
      if (!setter.validate(utcDate, subFnOptions)) {
        return new Date(NaN);
      }
      var result = setter.set(utcDate, flags, subFnOptions);
      // Result is tuple (date, flags)
      if (Array.isArray(result)) {
        utcDate = result[0];
        (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_13__["default"])(flags, result[1]);
        // Result is date
      } else {
        utcDate = result;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return utcDate;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/dist/main.css":
/*!***********************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/dist/main.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./main.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vuepic/vue-datepicker/dist/main.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_main_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_main_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DatePicker_vue_vue_type_style_index_0_id_31934ef2_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DatePicker_vue_vue_type_style_index_0_id_31934ef2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DatePicker_vue_vue_type_style_index_0_id_31934ef2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DatePicker_vue_vue_type_template_id_31934ef2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=template&id=31934ef2 */ "./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=template&id=31934ef2");
/* harmony import */ var _DatePicker_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _DatePicker_vue_vue_type_style_index_0_id_31934ef2_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css */ "./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DatePicker_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DatePicker_vue_vue_type_template_id_31934ef2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_define_options_DatePicker_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_define_options_DatePicker_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!../../../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./DatePicker.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=template&id=31934ef2":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=template&id=31934ef2 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DatePicker_vue_vue_type_template_id_31934ef2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DatePicker_vue_vue_type_template_id_31934ef2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DatePicker.vue?vue&type=template&id=31934ef2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=template&id=31934ef2");


/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DatePicker_vue_vue_type_style_index_0_id_31934ef2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/DatePicker/DatePicker.vue?vue&type=style&index=0&id=31934ef2&lang=css");


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createForOfIteratorHelper)
/* harmony export */ });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function _createSuperInternal() {
    var Super = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js":
/*!********************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ca)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isValid.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isDate.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/set.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setHours.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setMinutes.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setSeconds.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setMilliseconds.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isBefore.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isEqual.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isAfter.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getHours.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getMinutes.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getSeconds.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getYear.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/eachDayOfInterval.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addMonths.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/endOfWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setYear.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/subMonths.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addYears.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/subYears.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDay.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/add.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/sub.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isSameQuarter.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/eachQuarterOfInterval.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/endOfYear.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfQuarter.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/endOfQuarter.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! date-fns */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getQuarter.mjs");


function _t() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
_t.compatConfig = {
  MODE: 3
};
function ca() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
ca.compatConfig = {
  MODE: 3
};
function On() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
On.compatConfig = {
  MODE: 3
};
function Bn() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Bn.compatConfig = {
  MODE: 3
};
function Yn() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Yn.compatConfig = {
  MODE: 3
};
function In() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
In.compatConfig = {
  MODE: 3
};
function Nn() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Nn.compatConfig = {
  MODE: 3
};
function qn(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function qa(e) {
  return (t) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Xa = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e !== null)
    try {
      n = a.map(qa(e));
    } catch {
      n = a.map(qn(t));
    }
  else
    n = a.map(qn(t));
  const i = n.slice(0, r), o = n.slice(r + 1, n.length);
  return [n[r]].concat(...o).concat(...i);
}, En = (e, t) => {
  const r = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    r.push({ value: +a, text: `${a}` });
  return t ? r.reverse() : r;
}, fa = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
    const o = i < 10 ? `0${i}` : i;
    return /* @__PURE__ */ new Date(`2017-${o}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const i = r === "long" ? "MMMM" : "MMM";
      return a.map((o, v) => {
        const k = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(o, i, { locale: e });
        return {
          text: k.charAt(0).toUpperCase() + k.substring(1),
          value: v
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t, { month: r, timeZone: "UTC" });
  return a.map((i, o) => {
    const v = n.format(i);
    return {
      text: v.charAt(0).toUpperCase() + v.substring(1),
      value: o
    };
  });
}, Ja = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Oe = (e) => {
  const t = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Za = (e) => Object.assign({ type: "dot" }, e), va = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Fn = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ce = (e) => e, Xn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Jn = (e) => e === null, ma = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, xa = (e) => {
  const t = [], r = (a) => a.filter((n) => n);
  for (let a = 0; a < e.length; a += 3) {
    const n = [e[a], e[a + 1], e[a + 2]];
    t.push(r(n));
  }
  return t;
}, Wt = (e, t, r) => {
  const a = r != null, n = t != null;
  if (!a && !n)
    return !1;
  const i = +r, o = +t;
  return a && n ? +e > i || +e < o : a ? +e > i : n ? +e < o : !1;
}, Pt = (e, t) => xa(e).map((r) => r.map((a) => {
  const { active: n, disabled: i, isBetween: o, highlighted: v } = t(a);
  return {
    ...a,
    active: n,
    disabled: i,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: i,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: i && n,
      dp__cell_in_between: o,
      "dp--highlighted": v
    }
  };
})), it = (e, t, r = !1) => {
  e && t.allowStopPropagation && (r && e.stopImmediatePropagation(), e.stopPropagation());
}, el = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function tl(e, t) {
  let r = [...document.querySelectorAll(el())];
  r = r.filter((n) => !e.contains(n) || n.hasAttribute("data-datepicker-instance"));
  const a = r.indexOf(e);
  if (a >= 0 && (t ? a - 1 >= 0 : a + 1 <= r.length))
    return r[a + (t ? -1 : 1)];
}
const nl = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Ln = (e) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(e, "dd-MM-yyyy"), pn = (e) => Array.isArray(e), en = (e, t) => t.get(Ln(e)), al = (e, t) => e ? t ? t instanceof Map ? !!en(e, t) : t(I(e)) : !1 : !0, Zn = (e, t, r, a, n) => {
  const i = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parse)(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isValid)(i) && (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isDate)(i) ? a || n ? i : (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(i, {
    hours: +r.hours,
    minutes: +(r == null ? void 0 : r.minutes),
    seconds: +(r == null ? void 0 : r.seconds),
    milliseconds: 0
  }) : null;
}, ll = (e, t, r, a, n) => {
  const i = Array.isArray(r) ? r[0] : r;
  if (typeof t == "string")
    return Zn(e, t, i, a, n);
  if (Array.isArray(t)) {
    let o = null;
    for (const v of t)
      if (o = Zn(e, v, i, a, n), o)
        break;
    return o;
  }
  return typeof t == "function" ? t(e) : null;
}, I = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), rl = (e, t, r) => {
  if (t) {
    const n = (e.getMonth() + 1).toString().padStart(2, "0"), i = e.getDate().toString().padStart(2, "0"), o = e.getHours().toString().padStart(2, "0"), v = e.getMinutes().toString().padStart(2, "0"), k = r ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${n}-${i}T${o}:${v}:${k}.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, Ue = (e) => {
  let t = I(JSON.parse(JSON.stringify(e)));
  return t = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.setHours)(t, 0), t = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.setMinutes)(t, 0), t = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.setSeconds)(t, 0), t = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.setMilliseconds)(t, 0), t;
}, dt = (e, t, r, a) => {
  let n = e ? I(e) : I();
  return (t || t === 0) && (n = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.setHours)(n, +t)), (r || r === 0) && (n = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.setMinutes)(n, +r)), (a || a === 0) && (n = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.setSeconds)(n, +a)), (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.setMilliseconds)(n, 0);
}, Pe = (e, t) => !e || !t ? !1 : (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.isBefore)(Ue(e), Ue(t)), be = (e, t) => !e || !t ? !1 : (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.isEqual)(Ue(e), Ue(t)), Re = (e, t) => !e || !t ? !1 : (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.isAfter)(Ue(e), Ue(t)), nn = (e, t, r) => e != null && e[0] && (e != null && e[1]) ? Re(r, e[0]) && Pe(r, e[1]) : e != null && e[0] && t ? Re(r, e[0]) && Pe(r, t) || Pe(r, e[0]) && Re(r, t) : !1, Qe = (e) => {
  const t = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(new Date(e), { date: 1 });
  return Ue(t);
}, yn = (e, t, r) => t && (r || r === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((a) => a === t ? [a, r] : [a, isNaN(+e[a]) ? void 0 : +e[a]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, kt = (e) => ({
  hours: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.getHours)(e),
  minutes: (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getMinutes)(e),
  seconds: (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.getSeconds)(e)
}), pa = (e, t) => {
  if (t) {
    const r = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(I(t));
    if (r > e)
      return 12;
    if (r === e)
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(I(t));
  }
}, ya = (e, t) => {
  if (t) {
    const r = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(I(t));
    return r < e ? -1 : r === e ? (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(I(t)) : void 0;
  }
}, Rt = (e) => {
  if (e)
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(I(e));
}, ga = (e, t) => {
  const r = Re(e, t) ? t : e, a = Re(t, e) ? t : e;
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_18__.eachDayOfInterval)({ start: r, end: a });
}, ol = (e) => {
  const t = (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.addMonths)(e, 1);
  return { month: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(t), year: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(t) };
}, lt = (e, t) => {
  const r = (0,date_fns__WEBPACK_IMPORTED_MODULE_20__.startOfWeek)(e, { weekStartsOn: +t }), a = (0,date_fns__WEBPACK_IMPORTED_MODULE_21__.endOfWeek)(e, { weekStartsOn: +t });
  return [r, a];
}, ha = (e, t) => {
  const r = {
    hours: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.getHours)(I()),
    minutes: (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getMinutes)(I()),
    seconds: t ? (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.getSeconds)(I()) : 0
  };
  return Object.assign(r, e);
}, ut = (e, t, r) => [(0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(e), { date: 1 }), (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), { month: t, year: r, date: 1 })], rt = (e, t, r) => {
  let a = e ? I(e) : I();
  return (t || t === 0) && (a = (0,date_fns__WEBPACK_IMPORTED_MODULE_22__.setMonth)(a, t)), r && (a = (0,date_fns__WEBPACK_IMPORTED_MODULE_23__.setYear)(a, r)), a;
}, ba = (e, t, r, a, n) => {
  if (!a || n && !t || !n && !r)
    return !1;
  const i = n ? (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.addMonths)(e, 1) : (0,date_fns__WEBPACK_IMPORTED_MODULE_24__.subMonths)(e, 1), o = [(0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(i), (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(i)];
  return n ? !ul(...o, t) : !sl(...o, r);
}, sl = (e, t, r) => Pe(...ut(r, e, t)) || be(...ut(r, e, t)), ul = (e, t, r) => Re(...ut(r, e, t)) || be(...ut(r, e, t)), ka = (e, t, r, a, n, i, o) => {
  if (typeof t == "function" && !o)
    return t(e);
  const v = r ? { locale: r } : void 0;
  return Array.isArray(e) ? `${(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(e[0], i, v)}${n && !e[1] ? "" : a}${e[1] ? (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(e[1], i, v) : ""}` : (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(e, i, v);
}, $t = (e) => {
  if (e)
    return null;
  throw new Error(Fn.prop("partial-range"));
}, Qt = (e, t) => {
  if (t)
    return e();
  throw new Error(Fn.prop("range"));
}, Sn = (e) => Array.isArray(e) ? (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isValid)(e[0]) && (e[1] ? (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isValid)(e[1]) : !0) : e ? (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isValid)(e) : !1, il = (e, t) => (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(t ?? I(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), gn = (e, t, r, a) => {
  if (!e)
    return !0;
  if (a) {
    const n = r === "max" ? (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.isBefore)(e, t) : (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.isAfter)(e, t), i = { seconds: 0, milliseconds: 0 };
    return n || (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.isEqual)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(e, i), (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(t, i));
  }
  return r === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, hn = (e, t, r) => e ? il(e, t) : I(r ?? t), xn = (e, t, r, a, n) => {
  if (Array.isArray(a)) {
    const o = hn(e, a[0], t), v = hn(e, a[1], t);
    return gn(a[0], o, r, !!t) && gn(a[1], v, r, !!t) && n;
  }
  const i = hn(e, a, t);
  return gn(a, i, r, !!t) && n;
}, bn = (e) => (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), kt(e)), dl = (e, t) => e instanceof Map ? Array.from(e.values()).filter((r) => (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(I(r)) === t).map((r) => (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(r)) : [], wa = (e, t, r) => typeof e == "function" ? e({ month: t, year: r }) : !!e.months.find((a) => a.month === t && a.year === r), Wn = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), It = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Da = () => {
  const e = (a) => {
    It.menuFocused = a;
  }, t = (a) => {
    It.shiftKeyInMenu !== a && (It.shiftKeyInMenu = a);
  };
  return {
    control: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({ shiftKeyInMenu: It.shiftKeyInMenu, menuFocused: It.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Ae = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), kn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), qt = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), wn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), Dn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), Mn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), Ee = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0), Be = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0), mt = () => {
  const e = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => qt.value ? [...Ae.selectionGrid, Ae.actionRow].filter((R) => R.length) : wn.value ? [
    ...Ae.timePicker[0],
    ...Ae.timePicker[1],
    Mn.value ? [] : [kn.value],
    Ae.actionRow
  ].filter((R) => R.length) : Dn.value ? [...Ae.monthPicker, Ae.actionRow] : [Ae.monthYear, ...Ae.calendar, Ae.time, Ae.actionRow].filter((R) => R.length)), t = (R) => {
    Ee.value = R ? Ee.value + 1 : Ee.value - 1;
    let W = null;
    e.value[Be.value] && (W = e.value[Be.value][Ee.value]), W || (Ee.value = R ? Ee.value - 1 : Ee.value + 1);
  }, r = (R) => {
    if (Be.value === 0 && !R || Be.value === e.value.length && R)
      return;
    Be.value = R ? Be.value + 1 : Be.value - 1, e.value[Be.value] ? e.value[Be.value] && !e.value[Be.value][Ee.value] && Ee.value !== 0 && (Ee.value = e.value[Be.value].length - 1) : Be.value = R ? Be.value - 1 : Be.value + 1;
  }, a = (R) => {
    let W = null;
    e.value[Be.value] && (W = e.value[Be.value][Ee.value]), W ? W.focus({ preventScroll: !qt.value }) : Ee.value = R ? Ee.value - 1 : Ee.value + 1;
  }, n = () => {
    t(!0), a(!0);
  }, i = () => {
    t(!1), a(!1);
  }, o = () => {
    r(!1), a(!0);
  }, v = () => {
    r(!0), a(!0);
  }, k = (R, W) => {
    Ae[W] = R;
  }, B = (R, W) => {
    Ae[W] = R;
  }, g = () => {
    Ee.value = 0, Be.value = 0;
  };
  return {
    buildMatrix: k,
    buildMultiLevelMatrix: B,
    setTimePickerBackRef: (R) => {
      kn.value = R;
    },
    setSelectionGrid: (R) => {
      qt.value = R, g(), R || (Ae.selectionGrid = []);
    },
    setTimePicker: (R, W = !1) => {
      wn.value = R, Mn.value = W, g(), R || (Ae.timePicker[0] = [], Ae.timePicker[1] = []);
    },
    setTimePickerElements: (R, W = 0) => {
      Ae.timePicker[W] = R;
    },
    arrowRight: n,
    arrowLeft: i,
    arrowUp: o,
    arrowDown: v,
    clearArrowNav: () => {
      Ae.monthYear = [], Ae.calendar = [], Ae.time = [], Ae.actionRow = [], Ae.selectionGrid = [], Ae.timePicker[0] = [], Ae.timePicker[1] = [], qt.value = !1, wn.value = !1, Mn.value = !1, Dn.value = !1, g(), kn.value = null;
    },
    setMonthPicker: (R) => {
      Dn.value = R, g();
    },
    refSets: Ae
    // exposed for testing
  };
}, vt = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Ma = (e, t) => {
  const r = Pn(e, t);
  return r || I();
}, cl = (e, t) => t.dateInTz ? vt(new Date(e), t.dateInTz) : I(e), Pn = (e, t) => {
  if (!e)
    return null;
  if (!t)
    return I(e);
  const r = I(e);
  return t.exactMatch ? cl(e, t) : vt(r, t.timezone);
}, ea = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), fl = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: () => "",
  ...e ?? {}
}), ta = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, vl = (e) => {
  const t = typeof e == "object" && e, r = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...r, count: ta(!1) };
  const a = t ? e : {}, n = t ? a.count ?? !0 : e, i = ta(n);
  return Object.assign(r, a, { count: i });
}, ml = (e, t, r) => e || (typeof r == "string" ? r : t), pl = (e) => typeof e == "boolean" ? e ? ea({}) : !1 : ea(e), yl = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, gl = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), hl = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), bl = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, kl = (e) => ({ ...{
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0
}, ...e ?? {} }), wl = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((r) => I(r)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, Dl = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, Ml = (e, t) => {
  const r = {
    noDisabledRange: !1,
    showLastInRange: !0,
    minMaxRawRange: !1,
    partialRange: !0,
    disableTimeRangeValidation: !1,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: !1,
    fixedEnd: !1
  };
  return typeof e == "object" ? { enabled: !0, ...r, ...e } : {
    enabled: e,
    noDisabledRange: t.noDisabledRange,
    showLastInRange: t.showLastInRange,
    minMaxRawRange: t.minMaxRawRange,
    partialRange: t.partialRange,
    disableTimeRangeValidation: t.disableTimeRangeValidation,
    maxRange: t.maxRange,
    minRange: t.minRange,
    autoRange: t.autoRange,
    fixedStart: t.fixedStart,
    fixedEnd: t.fixedEnd
  };
}, $l = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, $n = (e, t) => new Map(
  e.map((r) => {
    const a = Ma(r, t);
    return [Ln(a), a];
  })
), Al = (e, t) => e.length ? new Map(
  e.map((r) => {
    const a = Ma(r.date, t);
    return [Ln(a), r];
  })
) : null, Tl = (e, t, r, a, n, i, o) => ({
  minDate: Pn(e, o),
  maxDate: Pn(t, o),
  disabledDates: pn(r) ? $n(r, o) : r,
  allowedDates: pn(a) ? $n(a, o) : null,
  highlight: typeof n == "object" && pn(n == null ? void 0 : n.dates) ? $n(n.dates, o) : n,
  markers: Al(i, o)
}), Se = (e) => {
  const t = () => {
    const S = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${S}` : `hh:mm${S} aa`;
  }, r = () => {
    var S;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((S = Q.value) == null ? void 0 : S.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, a = (S) => ha(S, e.enableSeconds), n = () => O.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null, i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => vl(e.multiCalendars)), o = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => n()), v = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => fl(e.ariaLabels)), k = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => gl(e.filters)), B = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => pl(e.transitions)), g = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => hl(e.actionRow)), T = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
    () => ml(e.previewFormat, e.format, r())
  ), Y = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => yl(e.textInput)), _ = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => bl(e.inline)), V = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => kl(e.config)), p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => wl(e.highlight)), Q = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Dl(e.weekNumbers)), R = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => $l(e.timezone, e.emitTimezone)), W = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
    () => Tl(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      p.value,
      e.markers,
      R.value
    )
  ), O = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
    () => Ml(e.range, {
      minMaxRawRange: !1,
      maxRange: e.maxRange,
      minRange: e.minRange,
      noDisabledRange: e.noDisabledRange,
      showLastInRange: e.showLastInRange,
      partialRange: e.partialRange,
      disableTimeRangeValidation: e.disableTimeRangeValidation,
      autoRange: e.autoRange,
      fixedStart: e.fixedStart,
      fixedEnd: e.fixedEnd
    })
  );
  return {
    defaultedTransitions: B,
    defaultedMultiCalendars: i,
    defaultedStartTime: o,
    defaultedAriaLabels: v,
    defaultedFilters: k,
    defaultedActionRow: g,
    defaultedPreviewFormat: T,
    defaultedTextInput: Y,
    defaultedInline: _,
    defaultedConfig: V,
    defaultedHighlight: p,
    defaultedWeekNumbers: Q,
    defaultedRange: O,
    propDates: W,
    defaultedTz: R,
    getDefaultPattern: r,
    getDefaultStartTime: n
  };
}, Sl = (e, t, r) => {
  const a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(), { defaultedTextInput: n, defaultedRange: i, defaultedTz: o, getDefaultPattern: v } = Se(t), k = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""), B = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(t, "format");
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(
    a,
    () => {
      e("internal-model-change", a.value);
    },
    { deep: !0 }
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(B, () => {
    L();
  });
  const g = (l, M, H = !1) => ka(
    l,
    t.format,
    t.formatLocale,
    n.value.rangeSeparator,
    t.modelAuto,
    M ?? v(),
    H
  ), T = (l) => l ? t.modelType ? f(l) : {
    hours: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.getHours)(l),
    minutes: (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getMinutes)(l),
    seconds: t.enableSeconds ? (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.getSeconds)(l) : 0
  } : null, Y = (l) => t.modelType ? f(l) : { month: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(l), year: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(l) }, _ = (l) => Array.isArray(l) ? t.multiDates ? l.map((M) => V(M, (0,date_fns__WEBPACK_IMPORTED_MODULE_23__.setYear)(I(), M))) : Qt(
    () => [
      (0,date_fns__WEBPACK_IMPORTED_MODULE_23__.setYear)(I(), l[0]),
      l[1] ? (0,date_fns__WEBPACK_IMPORTED_MODULE_23__.setYear)(I(), l[1]) : $t(i.value.partialRange)
    ],
    i.value.enabled
  ) : (0,date_fns__WEBPACK_IMPORTED_MODULE_23__.setYear)(I(), +l), V = (l, M) => (typeof l == "string" || typeof l == "number") && t.modelType ? le(l) : M, p = (l) => Array.isArray(l) ? [
    V(
      l[0],
      dt(null, +l[0].hours, +l[0].minutes, l[0].seconds)
    ),
    V(
      l[1],
      dt(null, +l[1].hours, +l[1].minutes, l[1].seconds)
    )
  ] : V(l, dt(null, l.hours, l.minutes, l.seconds)), Q = (l) => {
    const M = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), { date: 1 });
    return Array.isArray(l) ? t.multiDates ? l.map((H) => V(H, rt(M, +H.month, +H.year))) : Qt(
      () => [
        V(l[0], rt(M, +l[0].month, +l[0].year)),
        V(
          l[1],
          l[1] ? rt(M, +l[1].month, +l[1].year) : $t(i.value.partialRange)
        )
      ],
      i.value.enabled
    ) : V(l, rt(M, +l.month, +l.year));
  }, R = (l) => {
    if (Array.isArray(l))
      return l.map((M) => le(M));
    throw new Error(Fn.dateArr("multi-dates"));
  }, W = (l) => {
    if (Array.isArray(l) && i.value.enabled) {
      const M = l[0], H = l[1];
      return [
        I(Array.isArray(M) ? M[0] : null),
        I(Array.isArray(H) ? H[0] : null)
      ];
    }
    return I(l[0]);
  }, O = (l) => t.modelAuto ? Array.isArray(l) ? [le(l[0]), le(l[1])] : t.autoApply ? [le(l)] : [le(l), null] : Array.isArray(l) ? Qt(
    () => l[1] ? [
      le(l[0]),
      l[1] ? le(l[1]) : $t(i.value.partialRange)
    ] : [le(l[0])],
    i.value.enabled
  ) : le(l), S = () => {
    Array.isArray(a.value) && i.value.enabled && a.value.length === 1 && a.value.push($t(i.value.partialRange));
  }, A = () => {
    const l = a.value;
    return [
      f(l[0]),
      l[1] ? f(l[1]) : $t(i.value.partialRange)
    ];
  }, G = () => a.value[1] ? A() : f(Ce(a.value[0])), te = () => (a.value || []).map((l) => f(l)), D = () => (S(), t.modelAuto ? G() : t.multiDates ? te() : Array.isArray(a.value) ? Qt(() => A(), i.value.enabled) : f(Ce(a.value))), se = (l) => !l || Array.isArray(l) && !l.length ? null : t.timePicker ? p(Ce(l)) : t.monthPicker ? Q(Ce(l)) : t.yearPicker ? _(Ce(l)) : t.multiDates ? R(Ce(l)) : t.weekPicker ? W(Ce(l)) : O(Ce(l)), oe = (l) => {
    const M = se(l);
    Sn(Ce(M)) ? (a.value = Ce(M), L()) : (a.value = null, k.value = "");
  }, w = () => {
    const l = (M) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(M, n.value.format);
    return `${l(a.value[0])} ${n.value.rangeSeparator} ${a.value[1] ? l(a.value[1]) : ""}`;
  }, F = () => r.value && a.value ? Array.isArray(a.value) ? w() : (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(a.value, n.value.format) : g(a.value), h = () => a.value ? t.multiDates ? a.value.map((l) => g(l)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? F() : g(a.value) : "", L = () => {
    !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? k.value = h() : k.value = t.format(a.value);
  }, le = (l) => {
    if (t.utc) {
      const M = new Date(l);
      return t.utc === "preserve" ? new Date(M.getTime() + M.getTimezoneOffset() * 6e4) : M;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? new Date(l) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parse)(l, v(), /* @__PURE__ */ new Date()) : (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parse)(l, t.modelType, /* @__PURE__ */ new Date()) : new Date(l);
  }, f = (l) => l ? t.utc ? rl(l, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +l : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? g(l) : g(l, t.modelType, !0) : l : "", d = (l, M = !1) => {
    if (e("update:model-value", l), o.value.emitTimezone && M) {
      const H = Array.isArray(l) ? l.map((s) => vt(Ce(s), o.value.emitTimezone)) : vt(Ce(l), o.value.emitTimezone);
      e("update:model-timezone-value", H);
    }
  }, X = (l) => Array.isArray(a.value) ? t.multiDates ? a.value.map((M) => l(M)) : [
    l(a.value[0]),
    a.value[1] ? l(a.value[1]) : $t(i.value.partialRange)
  ] : l(Ce(a.value)), ae = () => {
    if (Array.isArray(a.value)) {
      const l = lt(a.value[0], t.weekStart), M = a.value[1] ? lt(a.value[1], t.weekStart) : [];
      return [l.map((H) => I(H)), M.map((H) => I(H))];
    }
    return lt(a.value, t.weekStart).map((l) => I(l));
  }, N = (l) => d(Ce(X(l)));
  return {
    inputValue: k,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? i.value.enabled ? i.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1,
    parseExternalModelValue: oe,
    formatInputValue: L,
    emitModelValue: () => (L(), t.monthPicker ? N(Y) : t.timePicker ? N(T) : t.yearPicker ? N(date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear) : t.weekPicker ? e("update:model-value", ae()) : d(D(), !0))
  };
}, Pl = (e, t) => {
  const { defaultedFilters: r, propDates: a } = Se(e), { validateMonthYearInRange: n } = Mt(e), i = (g, T) => {
    let Y = g;
    return r.value.months.includes((0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(Y)) ? (Y = T ? (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.addMonths)(g, 1) : (0,date_fns__WEBPACK_IMPORTED_MODULE_24__.subMonths)(g, 1), i(Y, T)) : Y;
  }, o = (g, T) => {
    let Y = g;
    return r.value.years.includes((0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(Y)) ? (Y = T ? (0,date_fns__WEBPACK_IMPORTED_MODULE_25__.addYears)(g, 1) : (0,date_fns__WEBPACK_IMPORTED_MODULE_26__.subYears)(g, 1), o(Y, T)) : Y;
  }, v = (g, T = !1) => {
    const Y = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), { month: e.month, year: e.year });
    let _ = g ? (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.addMonths)(Y, 1) : (0,date_fns__WEBPACK_IMPORTED_MODULE_24__.subMonths)(Y, 1);
    e.disableYearSelect && (_ = (0,date_fns__WEBPACK_IMPORTED_MODULE_23__.setYear)(_, e.year));
    let V = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(_), p = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(_);
    r.value.months.includes(V) && (_ = i(_, g), V = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(_), p = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(_)), r.value.years.includes(p) && (_ = o(_, g), p = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(_)), n(V, p, g, e.preventMinMaxNavigation) && k(V, p, T);
  }, k = (g, T, Y) => {
    t("update-month-year", { month: g, year: T, fromNav: Y });
  }, B = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (g) => ba(
    (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), { month: e.month, year: e.year }),
    a.value.maxDate,
    a.value.minDate,
    e.preventMinMaxNavigation,
    g
  ));
  return { handleMonthYearChange: v, isDisabled: B, updateMonthYear: k };
};
var At = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(At || {}), Ge = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Ge || {}), gt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(gt || {}), wt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(wt || {}), xe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(xe || {});
const Rl = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: r,
  pickerWrapperRef: a,
  inline: n,
  emit: i,
  props: o,
  slots: v
}) => {
  const k = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({}), B = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), g = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
    top: "0",
    left: "0"
  }), T = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), Y = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(o, "teleportCenter");
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(Y, () => {
    g.value = JSON.parse(JSON.stringify({})), S();
  });
  const _ = (f) => {
    if (o.teleport) {
      const d = f.getBoundingClientRect();
      return {
        left: d.left + window.scrollX,
        top: d.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, V = (f, d) => {
    g.value.left = `${f + d - k.value.width}px`;
  }, p = (f) => {
    g.value.left = `${f}px`;
  }, Q = (f, d) => {
    o.position === At.left && p(f), o.position === At.right && V(f, d), o.position === At.center && (g.value.left = `${f + d / 2 - k.value.width / 2}px`);
  }, R = (f) => {
    const { width: d, height: X } = f.getBoundingClientRect(), { top: ae, left: N } = o.altPosition ? o.altPosition(f) : _(f);
    return { top: +ae, left: +N, width: d, height: X };
  }, W = () => {
    g.value.left = "50%", g.value.top = "50%", g.value.transform = "translate(-50%, -50%)", g.value.position = "fixed", delete g.value.opacity;
  }, O = () => {
    const f = Oe(r), { top: d, left: X, transform: ae } = o.altPosition(f);
    g.value = { top: `${d}px`, left: `${X}px`, transform: ae ?? "" };
  }, S = (f = !0) => {
    var d;
    if (!n.value.enabled) {
      if (Y.value)
        return W();
      if (o.altPosition !== null)
        return O();
      if (f) {
        const X = o.teleport ? (d = t.value) == null ? void 0 : d.$el : e.value;
        X && (k.value = X.getBoundingClientRect()), i("recalculate-position");
      }
      return w();
    }
  }, A = ({ inputEl: f, left: d, width: X }) => {
    window.screen.width > 768 && !B.value && Q(d, X), D(f);
  }, G = (f) => {
    const { top: d, left: X, height: ae, width: N } = R(f);
    g.value.top = `${ae + d + +o.offset}px`, T.value = !1, B.value || (g.value.left = `${X + N / 2 - k.value.width / 2}px`), A({ inputEl: f, left: X, width: N });
  }, te = (f) => {
    const { top: d, left: X, width: ae } = R(f);
    g.value.top = `${d - +o.offset - k.value.height}px`, T.value = !0, A({ inputEl: f, left: X, width: ae });
  }, D = (f) => {
    if (o.autoPosition) {
      const { left: d, width: X } = R(f), { left: ae, right: N } = k.value;
      if (!B.value) {
        if (Math.abs(ae) !== Math.abs(N)) {
          if (ae <= 0)
            return B.value = !0, p(d);
          if (N >= document.documentElement.clientWidth)
            return B.value = !0, V(d, X);
        }
        return Q(d, X);
      }
    }
  }, se = () => {
    const f = Oe(r);
    if (f) {
      const { height: d } = k.value, { top: X, height: ae } = f.getBoundingClientRect(), m = window.innerHeight - X - ae, b = X;
      return d <= m ? gt.bottom : d > m && d <= b ? gt.top : m >= b ? gt.bottom : gt.top;
    }
    return gt.bottom;
  }, oe = (f) => se() === gt.bottom ? G(f) : te(f), w = () => {
    const f = Oe(r);
    if (f)
      return o.autoPosition ? oe(f) : G(f);
  }, F = function(f) {
    if (f) {
      const d = f.scrollHeight > f.clientHeight, ae = window.getComputedStyle(f).overflowY.indexOf("hidden") !== -1;
      return d && !ae;
    }
    return !0;
  }, h = function(f) {
    return !f || f === document.body || f.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : F(f) ? f : h(f.parentNode);
  }, L = (f) => {
    if (f)
      switch (o.position) {
        case At.left:
          return { left: 0, transform: "translateX(0)" };
        case At.right:
          return { left: `${f.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${f.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: T,
    menuStyle: g,
    xCorrect: B,
    setMenuPosition: S,
    getScrollableParent: h,
    shadowRender: (f, d) => {
      var l, M, H;
      const X = document.createElement("div"), ae = (l = Oe(r)) == null ? void 0 : l.getBoundingClientRect();
      X.setAttribute("id", "dp--temp-container");
      const N = (M = a.value) != null && M.clientWidth ? a.value : document.body;
      N.append(X);
      const m = L(ae), b = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(
        f,
        {
          ...d,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...m }
        },
        Object.fromEntries(
          Object.keys(v).filter((s) => ["right-sidebar", "left-sidebar"].includes(s)).map((s) => [s, v[s]])
        )
      );
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.render)(b, X), k.value = (H = b.el) == null ? void 0 : H.getBoundingClientRect(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.render)(null, X), N.removeChild(X);
    }
  };
}, st = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] }
], Cl = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], _l = {
  all: () => st,
  monthYear: () => st.filter((e) => e.use.includes("month-year")),
  input: () => Cl,
  timePicker: () => st.filter((e) => e.use.includes("time")),
  action: () => st.filter((e) => e.use.includes("action")),
  calendar: () => st.filter((e) => e.use.includes("calendar")),
  menu: () => st.filter((e) => e.use.includes("menu")),
  shared: () => st.filter((e) => e.use.includes("shared")),
  yearMode: () => st.filter((e) => e.use.includes("year-mode"))
}, ze = (e, t, r) => {
  const a = [];
  return _l[t]().forEach((n) => {
    e[n.name] && a.push(n.name);
  }), r != null && r.length && r.forEach((n) => {
    n.slot && a.push(n.slot);
  }), a;
}, Ht = (e) => {
  const t = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), r = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: r };
}, zt = (e, t) => {
  const { defaultedRange: r, defaultedTz: a } = Se(e), n = I(vt(I(), a.value.timezone)), i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{ month: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(n), year: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(n) }]), o = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    hours: r.value.enabled ? [(0,date_fns__WEBPACK_IMPORTED_MODULE_13__.getHours)(n), (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.getHours)(n)] : (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.getHours)(n),
    minutes: r.value.enabled ? [(0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getMinutes)(n), (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getMinutes)(n)] : (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getMinutes)(n),
    seconds: r.value.enabled ? [0, 0] : 0
  }), v = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)({
    get: () => e.internalModelValue,
    set: (g) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", g);
    }
  }), k = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
    () => (g) => i.value[g] ? i.value[g].month : 0
  ), B = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
    () => (g) => i.value[g] ? i.value[g].year : 0
  );
  return {
    calendars: i,
    time: o,
    modelValue: v,
    month: k,
    year: B
  };
}, Ol = (e, t) => {
  const { defaultedMultiCalendars: r, defaultedHighlight: a, defaultedTz: n, propDates: i, defaultedRange: o } = Se(t), { isDisabled: v } = Mt(t), k = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), B = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(vt(/* @__PURE__ */ new Date(), n.value.timezone)), g = (l) => {
    !l.current && t.hideOffsetDates || (k.value = l.value);
  }, T = () => {
    k.value = null;
  }, Y = (l) => Array.isArray(e.value) && o.value.enabled && e.value[0] && k.value ? l ? Re(k.value, e.value[0]) : Pe(k.value, e.value[0]) : !0, _ = (l, M) => {
    const H = () => e.value ? M ? e.value[0] || null : e.value[1] : null, s = e.value && Array.isArray(e.value) ? H() : null;
    return be(I(l.value), s);
  }, V = (l) => {
    const M = Array.isArray(e.value) ? e.value[0] : null;
    return l ? !Pe(k.value ?? null, M) : !0;
  }, p = (l, M = !0) => (o.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !l.current ? !1 : be(I(l.value), e.value[M ? 0 : 1]) : o.value.enabled ? _(l, M) && V(M) || be(l.value, Array.isArray(e.value) ? e.value[0] : null) && Y(M) : !1, Q = (l, M, H) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? l ? !1 : H ? Re(e.value[0], M.value) : Pe(e.value[0], M.value) : !1, R = (l) => !e.value || t.hideOffsetDates && !l.current ? !1 : o.value.enabled ? t.modelAuto && Array.isArray(e.value) ? be(l.value, e.value[0] ? e.value[0] : B.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((M) => be(M, l.value)) : be(l.value, e.value ? e.value : B.value), W = (l) => {
    if (o.value.autoRange || t.weekPicker) {
      if (k.value) {
        if (t.hideOffsetDates && !l.current)
          return !1;
        const M = (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.addDays)(k.value, +o.value.autoRange), H = lt(I(k.value), t.weekStart);
        return t.weekPicker ? be(H[1], I(l.value)) : be(M, I(l.value));
      }
      return !1;
    }
    return !1;
  }, O = (l) => {
    if (o.value.autoRange || t.weekPicker) {
      if (k.value) {
        const M = (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.addDays)(k.value, +o.value.autoRange);
        if (t.hideOffsetDates && !l.current)
          return !1;
        const H = lt(I(k.value), t.weekStart);
        return t.weekPicker ? Re(l.value, H[0]) && Pe(l.value, H[1]) : Re(l.value, k.value) && Pe(l.value, M);
      }
      return !1;
    }
    return !1;
  }, S = (l) => {
    if (o.value.autoRange || t.weekPicker) {
      if (k.value) {
        if (t.hideOffsetDates && !l.current)
          return !1;
        const M = lt(I(k.value), t.weekStart);
        return t.weekPicker ? be(M[0], l.value) : be(k.value, l.value);
      }
      return !1;
    }
    return !1;
  }, A = (l) => nn(e.value, k.value, l.value), G = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, te = () => t.modelAuto ? va(t.internalModelValue) : !0, D = (l) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const M = o.value.enabled ? !p(l) && !p(l, !1) : !0;
    return !v(l.value) && !R(l) && !(!l.current && t.hideOffsetDates) && M;
  }, se = (l) => o.value.enabled ? t.modelAuto ? G() && R(l) : !1 : R(l), oe = (l) => a.value ? al(l.value, i.value.highlight) : !1, w = (l) => {
    const M = v(l.value);
    return M && (typeof a.value == "function" ? !a.value(l.value, M) : !a.value.options.highlightDisabled);
  }, F = (l) => {
    var M;
    return typeof a.value == "function" ? a.value(l.value) : (M = a.value.weekdays) == null ? void 0 : M.includes(l.value.getDay());
  }, h = (l) => (o.value.enabled || t.weekPicker) && (!(r.value.count > 0) || l.current) && te() && !(!l.current && t.hideOffsetDates) && !R(l) ? A(l) : !1, L = (l) => {
    const { isRangeStart: M, isRangeEnd: H } = X(l), s = o.value.enabled ? M || H : !1;
    return {
      dp__cell_offset: !l.current,
      dp__pointer: !t.disabled && !(!l.current && t.hideOffsetDates) && !v(l.value),
      dp__cell_disabled: v(l.value),
      dp__cell_highlight: !w(l) && (oe(l) || F(l)) && !se(l) && !s && !S(l) && !(h(l) && t.weekPicker) && !H,
      dp__cell_highlight_active: !w(l) && (oe(l) || F(l)) && se(l),
      dp__today: !t.noToday && be(l.value, B.value) && l.current,
      "dp--past": Pe(l.value, B.value),
      "dp--future": Re(l.value, B.value)
    };
  }, le = (l) => ({
    dp__active_date: se(l),
    dp__date_hover: D(l)
  }), f = (l) => {
    if (e.value && !Array.isArray(e.value)) {
      const M = lt(e.value, t.weekStart);
      return {
        ...N(l),
        dp__range_start: be(M[0], l.value),
        dp__range_end: be(M[1], l.value),
        dp__range_between_week: Re(l.value, M[0]) && Pe(l.value, M[1])
      };
    }
    return {
      ...N(l)
    };
  }, d = (l) => {
    if (e.value && Array.isArray(e.value)) {
      const M = lt(e.value[0], t.weekStart), H = e.value[1] ? lt(e.value[1], t.weekStart) : [];
      return {
        ...N(l),
        dp__range_start: be(M[0], l.value) || be(H[0], l.value),
        dp__range_end: be(M[1], l.value) || be(H[1], l.value),
        dp__range_between_week: Re(l.value, M[0]) && Pe(l.value, M[1]) || Re(l.value, H[0]) && Pe(l.value, H[1]),
        dp__range_between: Re(l.value, M[1]) && Pe(l.value, H[0])
      };
    }
    return {
      ...N(l)
    };
  }, X = (l) => {
    const M = r.value.count > 0 ? l.current && p(l) && te() : p(l) && te(), H = r.value.count > 0 ? l.current && p(l, !1) && te() : p(l, !1) && te();
    return { isRangeStart: M, isRangeEnd: H };
  }, ae = (l) => {
    const { isRangeStart: M, isRangeEnd: H } = X(l);
    return {
      dp__range_start: M,
      dp__range_end: H,
      dp__range_between: h(l),
      dp__date_hover_start: Q(D(l), l, !0),
      dp__date_hover_end: Q(D(l), l, !1)
    };
  }, N = (l) => ({
    ...ae(l),
    dp__cell_auto_range: O(l),
    dp__cell_auto_range_start: S(l),
    dp__cell_auto_range_end: W(l)
  }), m = (l) => o.value.enabled ? o.value.autoRange ? N(l) : t.modelAuto ? { ...le(l), ...ae(l) } : t.weekPicker ? d(l) : ae(l) : t.weekPicker ? f(l) : le(l);
  return {
    setHoverDate: g,
    clearHoverDate: T,
    getDayClassData: (l) => t.hideOffsetDates && !l.current ? {} : {
      ...L(l),
      ...m(l),
      [t.dayClass ? t.dayClass(l.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, Mt = (e) => {
  const { defaultedFilters: t, defaultedRange: r, propDates: a } = Se(e), n = (w) => a.value.disabledDates ? typeof a.value.disabledDates == "function" ? a.value.disabledDates(I(w)) : !!en(w, a.value.disabledDates) : !1, i = (w) => {
    const F = a.value.maxDate ? Re(w, a.value.maxDate) : !1, h = a.value.minDate ? Pe(w, a.value.minDate) : !1, L = n(w), f = t.value.months.map((m) => +m).includes((0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(w)), d = e.disabledWeekDays.length ? e.disabledWeekDays.some((m) => +m === (0,date_fns__WEBPACK_IMPORTED_MODULE_28__.getDay)(w)) : !1, X = g(w), ae = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(w), N = ae < +e.yearRange[0] || ae > +e.yearRange[1];
    return !(F || h || L || f || N || d || X);
  }, o = (w, F) => Pe(...ut(a.value.minDate, w, F)) || be(...ut(a.value.minDate, w, F)), v = (w, F) => Re(...ut(a.value.maxDate, w, F)) || be(...ut(a.value.maxDate, w, F)), k = (w, F, h) => {
    let L = !1;
    return a.value.maxDate && h && v(w, F) && (L = !0), a.value.minDate && !h && o(w, F) && (L = !0), L;
  }, B = (w, F, h, L) => {
    let le = !1;
    return L ? a.value.minDate && a.value.maxDate ? le = k(w, F, h) : (a.value.minDate && o(w, F) || a.value.maxDate && v(w, F)) && (le = !0) : le = !0, le;
  }, g = (w) => Array.isArray(a.value.allowedDates) && !a.value.allowedDates.length ? !0 : a.value.allowedDates ? !en(w, a.value.allowedDates) : !1, T = (w) => !i(w), Y = (w) => r.value.noDisabledRange ? !(0,date_fns__WEBPACK_IMPORTED_MODULE_18__.eachDayOfInterval)({ start: w[0], end: w[1] }).some((h) => T(h)) : !0, _ = (w) => {
    if (w) {
      const F = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(w);
      return F >= +e.yearRange[0] && F <= e.yearRange[1];
    }
    return !0;
  }, V = (w, F) => Array.isArray(w) && w[F] && (r.value.maxRange || r.value.minRange) && _(w[F]), p = (w, F, h = 0) => {
    if (V(F, h)) {
      const L = (0,date_fns__WEBPACK_IMPORTED_MODULE_29__.differenceInCalendarDays)(w, F[h]), le = ga(F[h], w), f = le.length === 1 ? 0 : le.filter((X) => T(X)).length, d = Math.abs(L) - (r.value.minMaxRawRange ? 0 : f);
      if (r.value.minRange && r.value.maxRange)
        return d >= +r.value.minRange && d <= +r.value.maxRange;
      if (r.value.minRange)
        return d >= +r.value.minRange;
      if (r.value.maxRange)
        return d <= +r.value.maxRange;
    }
    return !0;
  }, Q = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, R = (w) => Array.isArray(w) ? [w[0] ? bn(w[0]) : null, w[1] ? bn(w[1]) : null] : bn(w), W = (w, F, h) => w.find(
    (L) => +L.hours === (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.getHours)(F) && L.minutes === "*" ? !0 : +L.minutes === (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getMinutes)(F) && +L.hours === (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.getHours)(F)
  ) && h, O = (w, F, h) => {
    const [L, le] = w, [f, d] = F;
    return !W(L, f, h) && !W(le, d, h) && h;
  }, S = (w, F) => {
    const h = Array.isArray(F) ? F : [F];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? O(e.disabledTimes, h, w) : !h.some((L) => W(e.disabledTimes, L, w)) : w;
  }, A = (w, F) => {
    const h = Array.isArray(F) ? [kt(F[0]), F[1] ? kt(F[1]) : void 0] : kt(F), L = !e.disabledTimes(h);
    return w && L;
  }, G = (w, F) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? S(F, w) : A(F, w) : F, te = (w) => {
    let F = !0;
    if (!w || Q())
      return !0;
    const h = !a.value.minDate && !a.value.maxDate ? R(w) : w;
    return (e.maxTime || a.value.maxDate) && (F = xn(
      e.maxTime,
      a.value.maxDate,
      "max",
      Ce(h),
      F
    )), (e.minTime || a.value.minDate) && (F = xn(
      e.minTime,
      a.value.minDate,
      "min",
      Ce(h),
      F
    )), G(w, F);
  }, D = (w) => {
    if (!e.monthPicker)
      return !0;
    let F = !0;
    const h = I(Qe(w));
    if (a.value.minDate && a.value.maxDate) {
      const L = I(Qe(a.value.minDate)), le = I(Qe(a.value.maxDate));
      return Re(h, L) && Pe(h, le) || be(h, L) || be(h, le);
    }
    if (a.value.minDate) {
      const L = I(Qe(a.value.minDate));
      F = Re(h, L) || be(h, L);
    }
    if (a.value.maxDate) {
      const L = I(Qe(a.value.maxDate));
      F = Pe(h, L) || be(h, L);
    }
    return F;
  }, se = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (w) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : te(w)), oe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (w) => e.monthPicker ? r.value.enabled && Array.isArray(w) ? !w.filter((h) => !D(h)).length : D(w) : !0);
  return {
    isDisabled: T,
    validateDate: i,
    validateMonthYearInRange: B,
    isDateRangeAllowed: Y,
    checkMinMaxRange: p,
    isValidTime: te,
    isTimeValid: se,
    isMonthValid: oe
  };
}, an = () => {
  const e = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (a, n) => a == null ? void 0 : a.includes(n)), t = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (a, n) => a.count ? a.solo ? !0 : n === 0 : !0), r = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (a, n) => a.count ? a.solo ? !0 : n === a.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: r };
}, Bl = (e, t, r) => {
  const a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0), n = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    [wt.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [wt.calendar]: !1,
    [wt.header]: !1
  }), i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => e.monthPicker), o = (T) => {
    var Y;
    if ((Y = e.flow) != null && Y.length) {
      if (!T && i.value)
        return g();
      n[T] = !0, Object.keys(n).filter((_) => !n[_]).length || g();
    }
  }, v = () => {
    var T;
    (T = e.flow) != null && T.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), g());
  }, k = () => {
    a.value = -1;
  }, B = (T, Y, ..._) => {
    var V, p;
    e.flow[a.value] === T && r.value && ((p = (V = r.value)[Y]) == null || p.call(V, ..._));
  }, g = () => {
    B(xe.month, "toggleMonthPicker", !0), B(xe.year, "toggleYearPicker", !0), B(xe.calendar, "toggleTimePicker", !1, !0), B(xe.time, "toggleTimePicker", !0, !0);
    const T = e.flow[a.value];
    (T === xe.hours || T === xe.minutes || T === xe.seconds) && B(T, "toggleTimePicker", !0, !0, T);
  };
  return { childMount: o, updateFlowStep: v, resetFlow: k, flowStep: a };
}, ln = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [String, Boolean, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: !0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 }
}, Je = {
  ...ln,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, Yl = {
  key: 1,
  class: "dp__input_wrap"
}, Il = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], Nl = {
  key: 2,
  class: "dp__clear_icon"
}, El = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...ln
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      defaultedTextInput: i,
      defaultedAriaLabels: o,
      defaultedInline: v,
      defaultedConfig: k,
      defaultedRange: B,
      getDefaultPattern: g,
      getDefaultStartTime: T
    } = Se(n), { checkMinMaxRange: Y } = Mt(n), _ = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(), V = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), Q = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), R = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !i.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !i.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: !!n.state,
        dp__input_invalid: n.state === !1,
        dp__input_focus: p.value || n.isMenuOpen,
        dp__input_reg: !i.value.enabled,
        [n.inputClassName]: !!n.inputClassName
      })
    ), W = () => {
      a("set-input-date", null), n.autoApply && (a("set-empty-date"), _.value = null);
    }, O = (d) => {
      const X = T();
      return ll(
        d,
        i.value.format ?? g(),
        X ?? ha({}, n.enableSeconds),
        n.inputValue,
        Q.value
      );
    }, S = (d) => {
      const { rangeSeparator: X } = i.value, [ae, N] = d.split(`${X}`);
      if (ae) {
        const m = O(ae.trim()), b = N ? O(N.trim()) : null, l = m && b ? [m, b] : [m];
        Y(b, l, 0) && (_.value = m ? l : null);
      }
    }, A = () => {
      Q.value = !0;
    }, G = (d) => {
      if (B.value.enabled)
        S(d);
      else if (n.multiDates) {
        const X = d.split(";");
        _.value = X.map((ae) => O(ae.trim())).filter((ae) => ae);
      } else
        _.value = O(d);
    }, te = (d) => {
      var ae;
      const X = typeof d == "string" ? d : (ae = d.target) == null ? void 0 : ae.value;
      X !== "" ? (i.value.openMenu && !n.isMenuOpen && a("open"), G(X), a("set-input-date", _.value)) : W(), Q.value = !1, a("update:input-value", X);
    }, D = (d) => {
      i.value.enabled ? (G(d.target.value), i.value.enterSubmit && Sn(_.value) && n.inputValue !== "" ? (a("set-input-date", _.value, !0), _.value = null) : i.value.enterSubmit && n.inputValue === "" && (_.value = null, a("clear"))) : w(d);
    }, se = (d) => {
      i.value.enabled && i.value.tabSubmit && G(d.target.value), i.value.tabSubmit && Sn(_.value) && n.inputValue !== "" ? (a("set-input-date", _.value, !0, !0), _.value = null) : i.value.tabSubmit && n.inputValue === "" && (_.value = null, a("clear", !0));
    }, oe = () => {
      var d;
      p.value = !0, a("focus"), i.value.enabled && i.value.selectOnFocus && ((d = V.value) == null || d.select());
    }, w = (d) => {
      d.preventDefault(), it(d, k.value, !0), i.value.enabled && i.value.openMenu && !v.value.input && !n.isMenuOpen ? a("open") : i.value.enabled || a("toggle");
    }, F = () => {
      a("real-blur"), p.value = !1, (!n.isMenuOpen || v.value.enabled && v.value.input) && a("blur"), n.autoApply && i.value.enabled && _.value && !n.isMenuOpen && (a("set-input-date", _.value), a("select-date"), _.value = null);
    }, h = (d) => {
      it(d, k.value, !0), a("clear");
    }, L = (d) => {
      if (!i.value.enabled) {
        if (d.code === "Tab")
          return;
        d.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var d;
        (d = V.value) == null || d.focus({ preventScroll: !0 });
      },
      setParsedDate: (d) => {
        _.value = d;
      }
    }), (d, X) => {
      var ae;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", { onClick: w }, [
        d.$slots.trigger && !d.$slots["dp-input"] && !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v).enabled ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(d.$slots, "trigger", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        !d.$slots.trigger && (!(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v).enabled || (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v).input) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Yl, [
          d.$slots["dp-input"] && !d.$slots.trigger && (!(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v).enabled || (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v).enabled && (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v).input) ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(d.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: te,
            onEnter: D,
            onTab: se,
            onClear: h,
            onBlur: F,
            onKeypress: L,
            onPaste: A,
            openMenu: () => d.$emit("open"),
            closeMenu: () => d.$emit("close"),
            toggleMenu: () => d.$emit("toggle")
          }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          d.$slots["dp-input"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
            key: 1,
            id: d.uid ? `dp-input-${d.uid}` : void 0,
            ref_key: "inputRef",
            ref: V,
            name: d.name,
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(R.value),
            inputmode: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(i).enabled ? "text" : "none",
            placeholder: d.placeholder,
            disabled: d.disabled,
            readonly: d.readonly,
            required: d.required,
            value: e.inputValue,
            autocomplete: d.autocomplete,
            "aria-label": (ae = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(o)) == null ? void 0 : ae.input,
            "aria-disabled": d.disabled || void 0,
            "aria-invalid": d.state === !1 ? !0 : void 0,
            onInput: te,
            onKeydown: [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(D, ["enter"]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(se, ["tab"]),
              L
            ],
            onBlur: F,
            onFocus: oe,
            onKeypress: L,
            onPaste: A
          }, null, 42, Il)),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            onClick: X[2] || (X[2] = (N) => a("toggle"))
          }, [
            d.$slots["input-icon"] && !d.hideInputIcon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: X[0] || (X[0] = (N) => a("toggle"))
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(d.$slots, "input-icon")
            ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
            !d.$slots["input-icon"] && !d.hideInputIcon && !d.$slots["dp-input"] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(_t), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: X[1] || (X[1] = (N) => a("toggle"))
            })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
          ]),
          d.$slots["clear-icon"] && e.inputValue && d.clearable && !d.disabled && !d.readonly ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", Nl, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(d.$slots, "clear-icon", { clear: h })
          ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          d.clearable && !d.$slots["clear-icon"] && e.inputValue && !d.disabled && !d.readonly ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(ca), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: X[3] || (X[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((N) => h(N), ["prevent"]))
          })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
        ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
      ]);
    };
  }
}), Fl = { class: "dp__action_row" }, Ll = ["title"], Wl = ["disabled"], Vl = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...Je
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const r = t, a = e, {
      defaultedActionRow: n,
      defaultedPreviewFormat: i,
      defaultedMultiCalendars: o,
      defaultedTextInput: v,
      defaultedInline: k,
      defaultedRange: B,
      getDefaultPattern: g
    } = Se(a), { isTimeValid: T, isMonthValid: Y } = Mt(a), { buildMatrix: _ } = mt(), V = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), Q = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), R = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({}), W = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      a.arrowNavigation && _([Oe(V), Oe(p)], "actionRow"), O(), window.addEventListener("resize", O);
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
      window.removeEventListener("resize", O);
    });
    const O = () => {
      Q.value = !1, setTimeout(() => {
        var L;
        const h = (L = W.value) == null ? void 0 : L.getBoundingClientRect();
        h && (R.value.maxWidth = `${h.left - h.width + 5}px`), Q.value = !0;
      }, 0);
    }, S = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => B.value.enabled && !B.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), A = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => !T.value(a.internalModelValue) || !Y.value(a.internalModelValue) || !S.value
    ), G = () => {
      const h = i.value;
      return a.timePicker || a.monthPicker, h(Ce(a.internalModelValue));
    }, te = () => {
      const h = a.internalModelValue;
      return o.value.count > 0 ? `${D(h[0])} - ${D(h[1])}` : [D(h[0]), D(h[1])];
    }, D = (h) => ka(
      h,
      i.value,
      a.formatLocale,
      v.value.rangeSeparator,
      a.modelAuto,
      g()
    ), se = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !a.internalModelValue || !a.menuMount ? "" : typeof i.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? te() : a.multiDates ? a.internalModelValue.map((h) => `${D(h)}`) : a.modelAuto ? `${D(a.internalModelValue[0])}` : `${D(a.internalModelValue[0])} -` : D(a.internalModelValue) : G()), oe = () => a.multiDates ? "; " : " - ", w = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => Array.isArray(se.value) ? se.value.join(oe()) : se.value
    ), F = () => {
      T.value(a.internalModelValue) && Y.value(a.internalModelValue) && S.value ? r("select-date") : r("invalid-select");
    };
    return (h, L) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Fl, [
      h.$slots["action-row"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(h.$slots, "action-row", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, {
        internalModelValue: h.internalModelValue,
        disabled: A.value,
        selectDate: () => h.$emit("select-date"),
        closePicker: () => h.$emit("close-picker")
      }))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(n).showPreview ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          class: "dp__selection_preview",
          title: w.value,
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(R.value)
        }, [
          h.$slots["action-preview"] && Q.value ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(h.$slots, "action-preview", {
            key: 0,
            value: h.internalModelValue
          }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          !h.$slots["action-preview"] && Q.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(w.value), 1)
          ], 64)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
        ], 12, Ll)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          ref_key: "actionBtnContainer",
          ref: W,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          h.$slots["action-buttons"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(h.$slots, "action-buttons", {
            key: 0,
            value: h.internalModelValue
          }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          h.$slots["action-buttons"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
            !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k).enabled && (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(n).showCancel ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: V,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: L[0] || (L[0] = (le) => h.$emit("close-picker")),
              onKeydown: [
                L[1] || (L[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((le) => h.$emit("close-picker"), ["enter"])),
                L[2] || (L[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((le) => h.$emit("close-picker"), ["space"]))
              ]
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(h.cancelText), 545)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(n).showNow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: L[3] || (L[3] = (le) => h.$emit("select-now")),
              onKeydown: [
                L[4] || (L[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((le) => h.$emit("select-now"), ["enter"])),
                L[5] || (L[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((le) => h.$emit("select-now"), ["space"]))
              ]
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(h.nowButtonLabel), 33)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(n).showSelect ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: p,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: A.value,
              onKeydown: [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(F, ["enter"]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(F, ["space"])
              ],
              onClick: F
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(h.selectText), 41, Wl)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
          ], 64))
        ], 512)
      ], 64))
    ]));
  }
}), Hl = ["onKeydown"], zl = { class: "dp__selection_grid_header" }, Ul = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Kl = ["aria-label"], Ut = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: r }) {
    const { setSelectionGrid: a, buildMultiLevelMatrix: n, setMonthPicker: i } = mt(), o = r, v = e, { defaultedAriaLabels: k, defaultedTextInput: B, defaultedConfig: g } = Se(
      v
    ), { hideNavigationButtons: T } = an(), Y = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), _ = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), V = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]), Q = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(), R = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), W = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0), O = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate)(() => {
      _.value = null;
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => w()), v.noOverlayFocus || A(), S(!0);
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => S(!1));
    const S = (N) => {
      var m;
      v.arrowNavigation && ((m = v.headerRefs) != null && m.length ? i(N) : a(N));
    }, A = () => {
      var m;
      const N = Oe(V);
      N && (B.value.enabled || (_.value ? (m = _.value) == null || m.focus({ preventScroll: !0 }) : N.focus({ preventScroll: !0 })), Y.value = N.clientHeight < N.scrollHeight);
    }, G = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !v.useRelative,
        "dp--overlay-relative": v.useRelative
      })
    ), te = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => v.useRelative ? { height: `${v.height}px`, width: "260px" } : void 0
    ), D = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
      dp__overlay_col: !0
    })), se = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: Y.value,
        dp__button_bottom: v.isLast
      })
    ), oe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var N, m;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((N = v.items) == null ? void 0 : N.length) <= 6,
        dp__container_block: ((m = v.items) == null ? void 0 : m.length) > 6
      };
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(
      () => v.items,
      () => w(!1),
      { deep: !0 }
    );
    const w = (N = !0) => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => {
        const m = Oe(_), b = Oe(V), l = Oe(R), M = Oe(O), H = l ? l.getBoundingClientRect().height : 0;
        b && (b.getBoundingClientRect().height ? W.value = b.getBoundingClientRect().height - H : W.value = g.value.modeHeight - H), m && M && N && (M.scrollTop = m.offsetTop - M.offsetTop - (W.value / 2 - m.getBoundingClientRect().height) - H);
      });
    }, F = (N) => {
      N.disabled || o("selected", N.value);
    }, h = () => {
      o("toggle"), o("reset-flow");
    }, L = () => {
      v.escClose && h();
    }, le = (N, m, b, l) => {
      N && ((m.active || m.value === v.focusValue) && (_.value = N), v.arrowNavigation && (Array.isArray(p.value[b]) ? p.value[b][l] = N : p.value[b] = [N], f()));
    }, f = () => {
      var m, b;
      const N = (m = v.headerRefs) != null && m.length ? [v.headerRefs].concat(p.value) : p.value.concat([v.skipButtonRef ? [] : [R.value]]);
      n(Ce(N), (b = v.headerRefs) != null && b.length ? "monthPicker" : "selectionGrid");
    }, d = (N) => {
      v.arrowNavigation || it(N, g.value, !0);
    }, X = (N) => {
      Q.value = N, o("hover-value", N);
    }, ae = () => {
      if (h(), !v.isLast) {
        const N = nl(v.menuWrapRef ?? null, "action-row");
        if (N) {
          const m = ma(N);
          m == null || m.focus();
        }
      }
    };
    return t({ focusGrid: A }), (N, m) => {
      var b;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        ref_key: "gridWrapRef",
        ref: V,
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(G.value),
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(te.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(L, ["prevent"]), ["esc"]),
          m[0] || (m[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((l) => d(l), ["prevent"]), ["left"])),
          m[1] || (m[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((l) => d(l), ["prevent"]), ["up"])),
          m[2] || (m[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((l) => d(l), ["prevent"]), ["down"])),
          m[3] || (m[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((l) => d(l), ["prevent"]), ["right"]))
        ]
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          ref_key: "containerRef",
          ref: O,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(oe.value),
          role: "grid",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ height: `${W.value}px` })
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", zl, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(N.$slots, "header")
          ]),
          N.$slots.overlay ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(N.$slots, "overlay", { key: 0 }) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(N.items, (l, M) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: M,
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dp__overlay_row", { dp__flex_row: N.items.length >= 3 }]),
            role: "row"
          }, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(l, (H, s) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: H.value,
              ref_for: !0,
              ref: (x) => le(x, H, M, s),
              role: "gridcell",
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(D.value),
              "aria-selected": H.active || void 0,
              "aria-disabled": H.disabled || void 0,
              tabindex: "0",
              onClick: (x) => F(H),
              onKeydown: [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((x) => F(H), ["prevent"]), ["enter"]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((x) => F(H), ["prevent"]), ["space"])
              ],
              onMouseover: (x) => X(H.value)
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(H.className)
              }, [
                N.$slots.item ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(N.$slots, "item", {
                  key: 0,
                  item: H
                }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                N.$slots.item ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(H.text), 1)
                ], 64))
              ], 2)
            ], 42, Ul))), 128))
          ], 2))), 128))
        ], 6),
        N.$slots["button-icon"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: R,
          type: "button",
          "aria-label": (b = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k)) == null ? void 0 : b.toggleOverlay,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(se.value),
          tabindex: "0",
          onClick: h,
          onKeydown: [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(h, ["enter"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(ae, ["tab"])
          ]
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(N.$slots, "button-icon")
        ], 42, Kl)), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(T)(N.hideNavigation, N.type)]
        ]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
      ], 46, Hl);
    };
  }
}), rn = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, r = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (n, i) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0,
        "dp--flex-display-collapsed": n.collapse
      })
    }, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(r.value, (o, v) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: o,
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(a.value)
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(n.$slots, "default", {
          instance: o,
          index: v
        })
      ], 2))), 128))
    ], 2));
  }
}), jl = ["aria-label", "aria-disabled"], Nt = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const r = t, a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => r("set-ref", a)), (n, i) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      ref_key: "elRef",
      ref: a,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: i[0] || (i[0] = (o) => n.$emit("activate")),
      onKeydown: [
        i[1] || (i[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((o) => n.$emit("activate"), ["prevent"]), ["enter"])),
        i[2] || (i[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((o) => n.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(n.$slots, "default")
      ], 2)
    ], 40, jl));
  }
}), Gl = { class: "dp--year-mode-picker" }, Ql = ["aria-label"], $a = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "YearModePicker",
  props: {
    ...Je,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const r = t, a = e, { showRightIcon: n, showLeftIcon: i } = an(), { defaultedConfig: o, defaultedMultiCalendars: v, defaultedAriaLabels: k, defaultedTransitions: B } = Se(a), { showTransition: g, transitionName: T } = Ht(B), Y = (p = !1, Q) => {
      r("toggle-year-picker", { flow: p, show: Q });
    }, _ = (p) => {
      r("year-select", p);
    }, V = (p = !1) => {
      r("handle-year", p);
    };
    return (p, Q) => {
      var R, W, O;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Gl, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(i)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v), e.instance) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Nt, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (R = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k)) == null ? void 0 : R.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: Q[0] || (Q[0] = (S) => V(!1))
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            p.$slots["arrow-left"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(p.$slots, "arrow-left", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
            p.$slots["arrow-left"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(On), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (W = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k)) == null ? void 0 : W.openYearsOverlay,
          onClick: Q[1] || (Q[1] = () => Y(!1)),
          onKeydown: Q[2] || (Q[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(() => Y(!1), ["enter"]))
        }, [
          p.$slots.year ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(p.$slots, "year", {
            key: 0,
            year: e.year
          }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          p.$slots.year ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(e.year), 1)
          ], 64))
        ], 40, Ql),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(n)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v), e.instance) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Nt, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (O = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k)) == null ? void 0 : O.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: Q[3] || (Q[3] = (S) => V(!0))
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            p.$slots["arrow-right"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(p.$slots, "arrow-right", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
            p.$slots["arrow-right"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Bn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
          name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(T)(e.showYearPicker),
          css: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(g)
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            e.showYearPicker ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Ut, {
              key: 0,
              items: e.items,
              "text-input": p.textInput,
              "esc-close": p.escClose,
              config: p.config,
              "is-last": p.autoApply && !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(o).keepActionRow,
              "hide-navigation": p.hideNavigation,
              type: "year",
              onToggle: Y,
              onSelected: Q[4] || (Q[4] = (S) => _(S))
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({
              "button-icon": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                p.$slots["calendar-icon"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(p.$slots, "calendar-icon", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                p.$slots["calendar-icon"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(_t), { key: 1 }))
              ]),
              _: 2
            }, [
              p.$slots["year-overlay-value"] ? {
                name: "item",
                fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ item: S }) => [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(p.$slots, "year-overlay-value", {
                    text: S.text,
                    value: S.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Vn = (e, t, r) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((a) => be(e, a))) {
      const a = t.value.filter((n) => !be(n, e));
      t.value = a.length ? a : null;
    } else
      (r && +r > t.value.length || !r) && t.value.push(e);
  else
    t.value = [e];
}, Hn = (e, t, r) => {
  let a = e.value ? e.value.slice() : [];
  return a.length === 2 && a[1] !== null && (a = []), a.length ? Pe(t, a[0]) ? (a.unshift(t), r("range-start", a[0]), r("range-start", a[1])) : (a[1] = t, r("range-end", t)) : (a = [t], r("range-start", t)), e.value = a, a;
}, on = (e, t, r, a) => {
  e[0] && e[1] && r && t("auto-apply"), e[0] && !e[1] && a && r && t("auto-apply");
}, Aa = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => vt(I(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = vt(I(e.value), e.timezone));
}, Ta = (e, t, r, a) => Array.isArray(t.value) && t.value.length === 2 ? a.value.fixedStart && (Re(e, t.value[0]) || be(e, t.value[0])) ? [t.value[0], e] : a.value.fixedEnd && (Pe(e, t.value[1]) || be(e, t.value[1])) ? [e, t.value[1]] : (r("invalid-fixed-range", e), t.value) : [], Sa = ({
  multiCalendars: e,
  highlight: t,
  propDates: r,
  calendars: a,
  modelValue: n,
  props: i,
  year: o,
  month: v,
  emit: k
}) => {
  const B = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => En(i.yearRange, i.reverseYears)), g = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([!1]), T = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (A, G) => {
    const te = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(Qe(/* @__PURE__ */ new Date()), {
      month: v.value(A),
      year: o.value(A)
    });
    return ba(
      te,
      r.value.maxDate,
      r.value.minDate,
      i.preventMinMaxNavigation,
      G
    );
  }), Y = () => {
    for (let A = 0; A < e.value.count; A++)
      if (A === 0)
        a.value[A] = a.value[0];
      else {
        const G = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), a.value[A - 1]);
        a.value[A] = { month: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(G), year: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)((0,date_fns__WEBPACK_IMPORTED_MODULE_25__.addYears)(G, 1)) };
      }
  }, _ = (A) => {
    if (!A)
      return Y();
    const G = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), a.value[A]);
    return a.value[0].year = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)((0,date_fns__WEBPACK_IMPORTED_MODULE_26__.subYears)(G, e.value.count - 1)), Y();
  }, V = (A) => i.focusStartDate ? A[0] : A[1] ? A[1] : A[0], p = () => {
    if (n.value) {
      const A = Array.isArray(n.value) ? V(n.value) : n.value;
      a.value[0] = { month: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(A), year: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(A) };
    }
  };
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    p(), e.value.count && Y();
  });
  const Q = (A, G) => {
    a.value[G].year = A, e.value.count && !e.value.solo && _(G);
  }, R = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (A) => Pt(B.value, (G) => {
    const te = o.value(A) === G.value, D = Wt(
      G.value,
      Rt(r.value.minDate),
      Rt(r.value.maxDate)
    ), se = Wn(t.value, G.value);
    return { active: te, disabled: D, highlighted: se };
  })), W = (A, G) => {
    Q(A, G), S(G);
  }, O = (A, G = !1) => {
    if (!T.value(A, G)) {
      const te = G ? o.value(A) + 1 : o.value(A) - 1;
      Q(te, A);
    }
  }, S = (A, G = !1, te) => {
    G || k("reset-flow"), te !== void 0 ? g.value[A] = te : g.value[A] = !g.value[A], g.value || k("overlay-closed");
  };
  return {
    isDisabled: T,
    groupedYears: R,
    showYearPicker: g,
    selectYear: Q,
    toggleYearPicker: S,
    handleYearSelect: W,
    handleYear: O
  };
}, ql = (e, t) => {
  const {
    defaultedMultiCalendars: r,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: i,
    defaultedRange: o,
    defaultedHighlight: v,
    propDates: k,
    defaultedTz: B
  } = Se(e), { modelValue: g, year: T, month: Y, calendars: _ } = zt(e, t), V = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => fa(e.formatLocale, e.locale, e.monthNameFormat)), p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), {
    selectYear: Q,
    groupedYears: R,
    showYearPicker: W,
    toggleYearPicker: O,
    handleYearSelect: S,
    handleYear: A,
    isDisabled: G
  } = Sa({
    modelValue: g,
    multiCalendars: r,
    highlight: v,
    calendars: _,
    year: T,
    propDates: k,
    month: Y,
    props: e,
    emit: t
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    e.startDate && (g.value && e.focusStartDate || !g.value) && Q((0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(I(e.startDate)), 0);
  });
  const te = (b) => b ? { month: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(b), year: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(b) } : { month: null, year: null }, D = () => g.value ? Array.isArray(g.value) ? g.value.map((b) => te(b)) : te(g.value) : te(), se = (b, l) => {
    const M = _.value[b], H = D();
    return Array.isArray(H) ? H.some((s) => s.year === (M == null ? void 0 : M.year) && s.month === l) : (M == null ? void 0 : M.year) === H.year && l === H.month;
  }, oe = (b, l, M) => {
    var s, x;
    const H = D();
    return Array.isArray(H) ? T.value(l) === ((s = H[M]) == null ? void 0 : s.year) && b === ((x = H[M]) == null ? void 0 : x.month) : !1;
  }, w = (b, l) => {
    if (o.value.enabled) {
      const M = D();
      if (Array.isArray(g.value) && Array.isArray(M)) {
        const H = oe(b, l, 0) || oe(b, l, 1), s = rt(Qe(I()), b, T.value(l));
        return nn(g.value, p.value, s) && !H;
      }
      return !1;
    }
    return !1;
  }, F = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (b) => Pt(V.value, (l) => {
    const M = se(b, l.value), H = Wt(
      l.value,
      pa(T.value(b), k.value.minDate),
      ya(T.value(b), k.value.maxDate)
    ) || dl(k.value.disabledDates, T.value(b)).includes(l.value), s = w(l.value, b), x = wa(v.value, l.value, T.value(b));
    return { active: M, disabled: H, isBetween: s, highlighted: x };
  })), h = (b, l) => rt(Qe(I()), b, T.value(l)), L = (b, l) => {
    const M = g.value ? g.value : Qe(/* @__PURE__ */ new Date());
    g.value = rt(M, b, T.value(l)), t("auto-apply"), t("update-flow-step");
  }, le = (b, l) => {
    let M = [];
    if (o.value.fixedEnd || o.value.fixedStart) {
      const H = h(b, l);
      g.value = Ta(H, g, t, o), M = g.value;
    } else
      M = Hn(g, h(b, l), t);
    on(M, t, e.autoApply, e.modelAuto);
  }, f = (b, l) => {
    Vn(h(b, l), g, e.multiDatesLimit), t("auto-apply", !0);
  }, d = (b, l) => (_.value[l].month = b, ae(l, _.value[l].year, b), e.multiDates ? f(b, l) : o.value.enabled ? le(b, l) : L(b, l)), X = (b, l) => {
    Q(b, l), ae(l, b, null);
  }, ae = (b, l, M) => {
    let H = M;
    if (!H && H !== 0) {
      const s = D();
      H = Array.isArray(s) ? s[b].month : s.month;
    }
    t("update-month-year", { instance: b, year: l, month: H });
  };
  return {
    groupedMonths: F,
    groupedYears: R,
    year: T,
    isDisabled: G,
    defaultedMultiCalendars: r,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: i,
    showYearPicker: W,
    modelValue: g,
    presetDate: (b, l) => {
      Aa({
        value: b,
        modelValue: g,
        range: o.value.enabled,
        timezone: l ? void 0 : B.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (b, l) => {
      p.value = h(b, l);
    },
    selectMonth: d,
    selectYear: X,
    toggleYearPicker: O,
    handleYearSelect: S,
    handleYear: A,
    getModelMonthYear: D
  };
}, Xl = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...Je
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useSlots)(), i = ze(n, "yearMode"), o = e;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      o.shadow || a("mount", null);
    });
    const {
      groupedMonths: v,
      groupedYears: k,
      year: B,
      isDisabled: g,
      defaultedMultiCalendars: T,
      defaultedConfig: Y,
      showYearPicker: _,
      modelValue: V,
      presetDate: p,
      setHoverDate: Q,
      selectMonth: R,
      selectYear: W,
      toggleYearPicker: O,
      handleYearSelect: S,
      handleYear: A,
      getModelMonthYear: G
    } = ql(o, a);
    return t({ getSidebarProps: () => ({
      modelValue: V,
      year: B,
      getModelMonthYear: G,
      selectMonth: R,
      selectYear: W,
      handleYear: A
    }), presetDate: p, toggleYearPicker: (D) => O(0, D) }), (D, se) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(rn, {
      "multi-calendars": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(T).count,
      collapse: D.collapse,
      stretch: ""
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ instance: oe }) => [
        D.$slots["month-year"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(D.$slots, "month-year", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, {
          year: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B),
          months: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v)(oe),
          years: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k)(oe),
          selectMonth: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(R),
          selectYear: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(W),
          instance: oe
        }))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Ut, {
          key: 1,
          items: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v)(oe),
          "arrow-navigation": D.arrowNavigation,
          "is-last": D.autoApply && !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Y).keepActionRow,
          "esc-close": D.escClose,
          height: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Y).modeHeight,
          config: D.config,
          "no-overlay-focus": !!(D.noOverlayFocus || D.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (w) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(R)(w, oe),
          onHoverValue: (w) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Q)(w, oe)
        }, {
          header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($a, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(D.$props, {
              items: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k)(oe),
              instance: oe,
              "show-year-picker": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(_)[oe],
              year: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B)(oe),
              "is-disabled": (w) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(g)(oe, w),
              onHandleYear: (w) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(A)(oe, w),
              onYearSelect: (w) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(S)(w, oe),
              onToggleYearPicker: (w) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(O)(oe, w == null ? void 0 : w.flow, w == null ? void 0 : w.show)
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(i), (w, F) => ({
                name: w,
                fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((h) => [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(D.$slots, w, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(h)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Jl = (e, t) => {
  const { modelValue: r } = zt(e, t), a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), { defaultedHighlight: n, defaultedFilters: i, defaultedRange: o, propDates: v } = Se(e), k = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    e.startDate && (r.value && e.focusStartDate || !r.value) && (k.value = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(I(e.startDate)));
  });
  const B = (p) => Array.isArray(r.value) ? r.value.some((Q) => (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(Q) === p) : r.value ? (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(r.value) === p : !1, g = (p) => o.value.enabled && Array.isArray(r.value) ? nn(r.value, a.value, Y(p)) : !1, T = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Pt(En(e.yearRange, e.reverseYears), (p) => {
    const Q = B(p.value), R = Wt(
      p.value,
      Rt(v.value.minDate),
      Rt(v.value.maxDate)
    ) || i.value.years.includes(p.value), W = g(p.value) && !Q, O = Wn(n.value, p.value);
    return { active: Q, disabled: R, isBetween: W, highlighted: O };
  })), Y = (p) => (0,date_fns__WEBPACK_IMPORTED_MODULE_23__.setYear)(Qe(/* @__PURE__ */ new Date()), p);
  return {
    groupedYears: T,
    modelValue: r,
    focusYear: k,
    setHoverValue: (p) => {
      a.value = (0,date_fns__WEBPACK_IMPORTED_MODULE_23__.setYear)(Qe(/* @__PURE__ */ new Date()), p);
    },
    selectYear: (p) => {
      var Q;
      if (t("update-month-year", { instance: 0, year: p }), e.multiDates)
        return r.value ? Array.isArray(r.value) && (((Q = r.value) == null ? void 0 : Q.map((W) => (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(W))).includes(p) ? r.value = r.value.filter((W) => (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(W) !== p) : r.value.push((0,date_fns__WEBPACK_IMPORTED_MODULE_23__.setYear)(Ue(I()), p))) : r.value = [(0,date_fns__WEBPACK_IMPORTED_MODULE_23__.setYear)(Ue(I()), p)], t("auto-apply", !0);
      if (o.value.enabled) {
        const R = Hn(r, Y(p), t);
        return on(R, t, e.autoApply, e.modelAuto);
      }
      r.value = Y(p), t("auto-apply");
    }
  };
}, Zl = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...Je
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { groupedYears: i, modelValue: o, focusYear: v, selectYear: k, setHoverValue: B } = Jl(n, a), { defaultedConfig: g } = Se(n);
    return t({ getSidebarProps: () => ({
      modelValue: o,
      selectYear: k
    }) }), (Y, _) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
      Y.$slots["month-year"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(Y.$slots, "month-year", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, {
        years: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(i),
        selectYear: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k)
      }))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Ut, {
        key: 1,
        items: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(i),
        "is-last": Y.autoApply && !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(g).keepActionRow,
        height: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(g).modeHeight,
        config: Y.config,
        "no-overlay-focus": !!(Y.noOverlayFocus || Y.textInput),
        "focus-value": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v),
        type: "year",
        "use-relative": "",
        onSelected: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k),
        onHoverValue: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B)
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
        Y.$slots["year-overlay-value"] ? {
          name: "item",
          fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ item: V }) => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(Y.$slots, "year-overlay-value", {
              text: V.text,
              value: V.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), xl = {
  key: 0,
  class: "dp__time_input"
}, er = ["aria-label", "onKeydown", "onClick"], tr = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), nr = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), ar = ["aria-label", "disabled", "onKeydown", "onClick"], lr = ["aria-label", "onKeydown", "onClick"], rr = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), or = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), sr = { key: 0 }, ur = ["aria-label", "onKeydown"], ir = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...Je
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { setTimePickerElements: i, setTimePickerBackRef: o } = mt(), { defaultedAriaLabels: v, defaultedTransitions: k, defaultedFilters: B, defaultedConfig: g, defaultedRange: T } = Se(n), { transitionName: Y, showTransition: _ } = Ht(k), V = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("AM"), Q = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), R = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      a("mounted");
    });
    const W = (c) => (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(/* @__PURE__ */ new Date(), {
      hours: c.hours,
      minutes: c.minutes,
      seconds: n.enableSeconds ? c.seconds : 0,
      milliseconds: 0
    }), O = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => (c) => le(c, n[c]) || A(c, n[c])
    ), S = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), A = (c, J) => T.value.enabled && !T.value.disableTimeRangeValidation ? !n.validateTime(c, J) : !1, G = (c, J) => {
      if (T.value.enabled && !T.value.disableTimeRangeValidation) {
        const ye = J ? +n[`${c}Increment`] : -+n[`${c}Increment`], E = n[c] + ye;
        return !n.validateTime(c, E);
      }
      return !1;
    }, te = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (c) => !ae(+n[c] + +n[`${c}Increment`], c) || G(c, !0)), D = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (c) => !ae(+n[c] - +n[`${c}Increment`], c) || G(c, !1)), se = (c, J) => (0,date_fns__WEBPACK_IMPORTED_MODULE_30__.add)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), c), J), oe = (c, J) => (0,date_fns__WEBPACK_IMPORTED_MODULE_31__.sub)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), c), J), w = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), F = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const c = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return n.enableSeconds ? c.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : c;
    }), h = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => F.value.filter((c) => !c.separator)), L = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (c) => {
      if (c === "hours") {
        const J = M(+n.hours);
        return { text: J < 10 ? `0${J}` : `${J}`, value: J };
      }
      return { text: n[c] < 10 ? `0${n[c]}` : `${n[c]}`, value: n[c] };
    }), le = (c, J) => {
      var E;
      if (!n.disabledTimesConfig)
        return !1;
      const ye = n.disabledTimesConfig(n.order, c === "hours" ? J : void 0);
      return ye[c] ? !!((E = ye[c]) != null && E.includes(J)) : !0;
    }, f = (c) => {
      const J = n.is24 ? 24 : 12, ye = c === "hours" ? J : 60, E = +n[`${c}GridIncrement`], P = c === "hours" && !n.is24 ? E : 0, U = [];
      for (let fe = P; fe < ye; fe += E)
        U.push({ value: fe, text: fe < 10 ? `0${fe}` : `${fe}` });
      return c === "hours" && !n.is24 && U.push({ value: 0, text: "12" }), Pt(U, (fe) => ({ active: !1, disabled: B.value.times[c].includes(fe.value) || !ae(fe.value, c) || le(c, fe.value) || A(c, fe.value) }));
    }, d = (c) => c >= 0 ? c : 59, X = (c) => c >= 0 ? c : 23, ae = (c, J) => {
      const ye = n.minTime ? W(yn(n.minTime)) : null, E = n.maxTime ? W(yn(n.maxTime)) : null, P = W(
        yn(
          S.value,
          J,
          J === "minutes" || J === "seconds" ? d(c) : X(c)
        )
      );
      return ye && E ? ((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.isBefore)(P, E) || (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.isEqual)(P, E)) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_12__.isAfter)(P, ye) || (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.isEqual)(P, ye)) : ye ? (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.isAfter)(P, ye) || (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.isEqual)(P, ye) : E ? (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.isBefore)(P, E) || (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.isEqual)(P, E) : !0;
    }, N = (c) => n[`no${c[0].toUpperCase() + c.slice(1)}Overlay`], m = (c) => {
      N(c) || (V[c] = !V[c], V[c] || a("overlay-closed"));
    }, b = (c) => c === "hours" ? date_fns__WEBPACK_IMPORTED_MODULE_13__.getHours : c === "minutes" ? date_fns__WEBPACK_IMPORTED_MODULE_14__.getMinutes : date_fns__WEBPACK_IMPORTED_MODULE_15__.getSeconds, l = (c, J = !0) => {
      const ye = J ? se : oe, E = J ? +n[`${c}Increment`] : -+n[`${c}Increment`];
      ae(+n[c] + E, c) && a(
        `update:${c}`,
        b(c)(ye({ [c]: +n[c] }, { [c]: +n[`${c}Increment`] }))
      );
    }, M = (c) => n.is24 ? c : (c >= 12 ? p.value = "PM" : p.value = "AM", Ja(c)), H = () => {
      p.value === "PM" ? (p.value = "AM", a("update:hours", n.hours - 12)) : (p.value = "PM", a("update:hours", n.hours + 12)), a("am-pm-change", p.value);
    }, s = (c) => {
      V[c] = !0;
    }, x = (c, J, ye) => {
      if (c && n.arrowNavigation) {
        Array.isArray(R.value[J]) ? R.value[J][ye] = c : R.value[J] = [c];
        const E = R.value.reduce(
          (P, U) => U.map((fe, De) => [...P[De] || [], U[De]]),
          []
        );
        o(n.closeTimePickerBtn), Q.value && (E[1] = E[1].concat(Q.value)), i(E, n.order);
      }
    }, ne = (c, J) => (m(c), c === "hours" && !n.is24 ? a(`update:${c}`, p.value === "PM" ? J + 12 : J) : a(`update:${c}`, J));
    return t({ openChildCmp: s }), (c, J) => {
      var ye;
      return c.disabled ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", xl, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(F.value, (E, P) => {
          var U, fe, De;
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: P,
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(w.value)
          }, [
            E.separator ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" : ")
            ], 64)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                ref_for: !0,
                ref: (K) => x(K, P, 0),
                type: "button",
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                  dp__btn: !0,
                  dp__inc_dec_button: !c.timePickerInline,
                  dp__inc_dec_button_inline: c.timePickerInline,
                  dp__tp_inline_btn_top: c.timePickerInline,
                  dp__inc_dec_button_disabled: te.value(E.type)
                }),
                "aria-label": (U = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v)) == null ? void 0 : U.incrementValue(E.type),
                tabindex: "0",
                onKeydown: [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((K) => l(E.type), ["prevent"]), ["enter"]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((K) => l(E.type), ["prevent"]), ["space"])
                ],
                onClick: (K) => l(E.type)
              }, [
                n.timePickerInline ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                  tr,
                  nr
                ], 64)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
                  c.$slots["arrow-up"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(c.$slots, "arrow-up", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                  c.$slots["arrow-up"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(In), { key: 1 }))
                ], 64))
              ], 42, er),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                ref_for: !0,
                ref: (K) => x(K, P, 1),
                type: "button",
                "aria-label": (fe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v)) == null ? void 0 : fe.openTpOverlay(E.type),
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                  dp__time_display: !0,
                  dp__time_display_block: !c.timePickerInline,
                  dp__time_display_inline: c.timePickerInline,
                  "dp--time-invalid": O.value(E.type),
                  "dp--time-overlay-btn": !O.value(E.type)
                }),
                disabled: N(E.type),
                tabindex: "0",
                onKeydown: [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((K) => m(E.type), ["prevent"]), ["enter"]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((K) => m(E.type), ["prevent"]), ["space"])
                ],
                onClick: (K) => m(E.type)
              }, [
                c.$slots[E.type] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(c.$slots, E.type, {
                  key: 0,
                  text: L.value(E.type).text,
                  value: L.value(E.type).value
                }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                c.$slots[E.type] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(L.value(E.type).text), 1)
                ], 64))
              ], 42, ar),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                ref_for: !0,
                ref: (K) => x(K, P, 2),
                type: "button",
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                  dp__btn: !0,
                  dp__inc_dec_button: !c.timePickerInline,
                  dp__inc_dec_button_inline: c.timePickerInline,
                  dp__tp_inline_btn_bottom: c.timePickerInline,
                  dp__inc_dec_button_disabled: D.value(E.type)
                }),
                "aria-label": (De = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v)) == null ? void 0 : De.decrementValue(E.type),
                tabindex: "0",
                onKeydown: [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((K) => l(E.type, !1), ["prevent"]), ["enter"]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((K) => l(E.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (K) => l(E.type, !1)
              }, [
                n.timePickerInline ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                  rr,
                  or
                ], 64)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
                  c.$slots["arrow-down"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(c.$slots, "arrow-down", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                  c.$slots["arrow-down"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Nn), { key: 1 }))
                ], 64))
              ], 42, lr)
            ], 64))
          ], 2);
        }), 128)),
        c.is24 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", sr, [
          c.$slots["am-pm-button"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(c.$slots, "am-pm-button", {
            key: 0,
            toggle: H,
            value: p.value
          }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          c.$slots["am-pm-button"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: Q,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (ye = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v)) == null ? void 0 : ye.amPmButton,
            tabindex: "0",
            onClick: H,
            onKeydown: [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(H, ["prevent"]), ["enter"]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(H, ["prevent"]), ["space"])
            ]
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(p.value), 41, ur))
        ])),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(h.value, (E, P) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
          key: P,
          name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Y)(V[E.type]),
          css: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(_)
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            V[E.type] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Ut, {
              key: 0,
              items: f(E.type),
              "is-last": c.autoApply && !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(g).keepActionRow,
              "esc-close": c.escClose,
              type: E.type,
              "text-input": c.textInput,
              config: c.config,
              "arrow-navigation": c.arrowNavigation,
              onSelected: (U) => ne(E.type, U),
              onToggle: (U) => m(E.type),
              onResetFlow: J[0] || (J[0] = (U) => c.$emit("reset-flow"))
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({
              "button-icon": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                c.$slots["clock-icon"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(c.$slots, "clock-icon", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                c.$slots["clock-icon"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(c.timePickerInline ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(_t) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Yn)), { key: 1 }))
              ]),
              _: 2
            }, [
              c.$slots[`${E.type}-overlay-value`] ? {
                name: "item",
                fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ item: U }) => [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(c.$slots, `${E.type}-overlay-value`, {
                    text: U.text,
                    value: U.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "onSelected", "onToggle"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), dr = { class: "dp--tp-wrap" }, cr = ["aria-label", "tabindex"], fr = ["tabindex"], vr = ["aria-label"], Pa = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...Je
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { buildMatrix: i, setTimePicker: o } = mt(), v = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useSlots)(), { defaultedTransitions: k, defaultedAriaLabels: B, defaultedTextInput: g, defaultedConfig: T, defaultedRange: Y } = Se(n), { transitionName: _, showTransition: V } = Ht(k), { hideNavigationButtons: p } = an(), Q = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), R = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), W = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]), O = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      a("mount"), !n.timePicker && n.arrowNavigation ? i([Oe(Q.value)], "time") : o(!0, n.timePicker);
    });
    const S = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Y.value.enabled && n.modelAuto ? va(n.internalModelValue) : !0), A = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), G = (f) => ({
      hours: Array.isArray(n.hours) ? n.hours[f] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[f] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[f] : n.seconds
    }), te = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const f = [];
      if (Y.value.enabled)
        for (let d = 0; d < 2; d++)
          f.push(G(d));
      else
        f.push(G(0));
      return f;
    }), D = (f, d = !1, X = "") => {
      d || a("reset-flow"), A.value = f, a(f ? "overlay-opened" : "overlay-closed"), n.arrowNavigation && o(f), (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        X !== "" && W.value[0] && W.value[0].openChildCmp(X);
      });
    }, se = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: n.autoApply && !T.value.keepActionRow
    })), oe = ze(v, "timePicker"), w = (f, d, X) => Y.value.enabled ? d === 0 ? [f, te.value[1][X]] : [te.value[0][X], f] : f, F = (f) => {
      a("update:hours", f);
    }, h = (f) => {
      a("update:minutes", f);
    }, L = (f) => {
      a("update:seconds", f);
    }, le = () => {
      if (O.value && !g.value.enabled && !n.noOverlayFocus) {
        const f = ma(O.value);
        f && f.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: D }), (f, d) => {
      var X;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", dr, [
        !f.timePicker && !f.timePickerInline ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: Q,
          type: "button",
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(se.value),
          "aria-label": (X = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B)) == null ? void 0 : X.openTimePicker,
          tabindex: f.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            d[0] || (d[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((ae) => D(!0), ["enter"])),
            d[1] || (d[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((ae) => D(!0), ["space"]))
          ],
          onClick: d[2] || (d[2] = (ae) => D(!0))
        }, [
          f.$slots["clock-icon"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(f.$slots, "clock-icon", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          f.$slots["clock-icon"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Yn), { key: 1 }))
        ], 42, cr)), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(p)(f.hideNavigation, "time")]
        ]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
          name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(_)(A.value),
          css: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(V) && !f.timePickerInline
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => {
            var ae;
            return [
              A.value || f.timePicker || f.timePickerInline ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: O,
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                  dp__overlay: !f.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !f.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(f.timePicker ? { height: `${(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(T).modeHeight}px` } : void 0),
                tabindex: f.timePickerInline ? void 0 : 0
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(
                    f.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  f.$slots["time-picker-overlay"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(f.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: F,
                    setMinutes: h,
                    setSeconds: L
                  }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                  f.$slots["time-picker-overlay"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                    key: 1,
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(f.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(te.value, (N, m) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(ir, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: m }, {
                      ...f.$props,
                      order: m,
                      hours: N.hours,
                      minutes: N.minutes,
                      seconds: N.seconds,
                      closeTimePickerBtn: R.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: m === 0 ? f.fixedStart : f.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: W,
                      "validate-time": (b, l) => e.validateTime(b, w(l, m, b)),
                      "onUpdate:hours": (b) => F(w(b, m, "hours")),
                      "onUpdate:minutes": (b) => h(w(b, m, "minutes")),
                      "onUpdate:seconds": (b) => L(w(b, m, "seconds")),
                      onMounted: le,
                      onOverlayClosed: le,
                      onAmPmChange: d[3] || (d[3] = (b) => f.$emit("am-pm-change", b))
                    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(oe), (b, l) => ({
                        name: b,
                        fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((M) => [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(f.$slots, b, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(M)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, m === 0 ? !0 : S.value]
                    ])), 128))
                  ], 2)),
                  !f.timePicker && !f.timePickerInline ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: R,
                    type: "button",
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(se.value),
                    "aria-label": (ae = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B)) == null ? void 0 : ae.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      d[4] || (d[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((N) => D(!1), ["enter"])),
                      d[5] || (d[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((N) => D(!1), ["space"]))
                    ],
                    onClick: d[6] || (d[6] = (N) => D(!1))
                  }, [
                    f.$slots["calendar-icon"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(f.$slots, "calendar-icon", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                    f.$slots["calendar-icon"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(_t), { key: 1 }))
                  ], 42, vr)), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(p)(f.hideNavigation, "time")]
                  ]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
                ], 2)
              ], 14, fr)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Ra = (e, t, r, a) => {
  const { defaultedRange: n } = Se(e), i = (O, S) => Array.isArray(t[O]) ? t[O][S] : t[O], o = (O) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[O] : t.seconds : 0, v = (O, S) => O ? S !== void 0 ? dt(O, i("hours", S), i("minutes", S), o(S)) : dt(O, t.hours, t.minutes, o()) : (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.setSeconds)(I(), o(S)), k = (O, S) => {
    t[O] = S;
  }, B = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => e.modelAuto && n.value.enabled ? Array.isArray(r.value) ? r.value.length > 1 : !1 : n.value.enabled), g = (O, S) => {
    const A = Object.fromEntries(
      Object.keys(t).map((G) => G === O ? [G, S] : [G, t[G]].slice())
    );
    if (B.value && !n.value.disableTimeRangeValidation) {
      const G = (D) => r.value ? dt(
        r.value[D],
        A.hours[D],
        A.minutes[D],
        A.seconds[D]
      ) : null, te = (D) => (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.setMilliseconds)(r.value[D], 0);
      return !(be(G(0), G(1)) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_12__.isAfter)(G(0), te(1)) || (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.isBefore)(G(1), te(0))));
    }
    return !0;
  }, T = (O, S) => {
    g(O, S) && (k(O, S), a && a());
  }, Y = (O) => {
    T("hours", O);
  }, _ = (O) => {
    T("minutes", O);
  }, V = (O) => {
    T("seconds", O);
  }, p = (O, S, A, G) => {
    S && Y(O), !S && !A && _(O), A && V(O), r.value && G(r.value);
  }, Q = (O) => {
    if (O) {
      const S = Array.isArray(O), A = S ? [+O[0].hours, +O[1].hours] : +O.hours, G = S ? [+O[0].minutes, +O[1].minutes] : +O.minutes, te = S ? [+O[0].seconds, +O[1].seconds] : +O.seconds;
      k("hours", A), k("minutes", G), e.enableSeconds && k("seconds", te);
    }
  }, R = (O, S) => {
    const A = {
      hours: Array.isArray(t.hours) ? t.hours[O] : t.hours,
      disabledArr: []
    };
    return (S || S === 0) && (A.hours = S), Array.isArray(e.disabledTimes) && (A.disabledArr = n.value.enabled && Array.isArray(e.disabledTimes[O]) ? e.disabledTimes[O] : e.disabledTimes), A;
  }, W = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (O, S) => {
    var A;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: G, hours: te } = R(O, S), D = G.filter((se) => +se.hours === te);
      return ((A = D[0]) == null ? void 0 : A.minutes) === "*" ? { hours: [te], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (D == null ? void 0 : D.map((se) => +se.minutes)) ?? [],
        seconds: (D == null ? void 0 : D.map((se) => se.seconds ? +se.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: k,
    updateHours: Y,
    updateMinutes: _,
    updateSeconds: V,
    getSetDateTime: v,
    updateTimeValues: p,
    getSecondsValue: o,
    assignStartTime: Q,
    validateTime: g,
    disabledTimesConfig: W
  };
}, mr = (e, t) => {
  const { modelValue: r, time: a } = zt(e, t), { defaultedStartTime: n, defaultedRange: i } = Se(e), { updateTimeValues: o, getSetDateTime: v, setTime: k, assignStartTime: B, disabledTimesConfig: g, validateTime: T } = Ra(e, a, r), Y = (S) => {
    const { hours: A, minutes: G, seconds: te } = S;
    return { hours: +A, minutes: +G, seconds: te ? +te : 0 };
  }, _ = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const A = Y(e.startTime[0]), G = Y(e.startTime[1]);
        return [(0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), A), (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), G)];
      }
      const S = Y(e.startTime);
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), S);
    }
    return i.value.enabled ? [null, null] : null;
  }, V = () => {
    if (i.value.enabled) {
      const [S, A] = _();
      r.value = [v(S, 0), v(A, 1)];
    } else
      r.value = v(_());
  }, p = (S) => Array.isArray(S) ? [kt(I(S[0])), kt(I(S[1]))] : [kt(S ?? I())], Q = (S, A, G) => {
    k("hours", S), k("minutes", A), k("seconds", e.enableSeconds ? G : 0);
  }, R = () => {
    const [S, A] = p(r.value);
    return i.value.enabled ? Q(
      [S.hours, A.hours],
      [S.minutes, A.minutes],
      [S.seconds, A.minutes]
    ) : Q(S.hours, S.minutes, S.seconds);
  };
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    if (!e.shadow)
      return B(n.value), r.value ? R() : V();
  });
  const W = () => {
    Array.isArray(r.value) ? r.value = r.value.map((S, A) => S && v(S, A)) : r.value = v(r.value), t("time-update");
  };
  return {
    modelValue: r,
    time: a,
    disabledTimesConfig: g,
    updateTime: (S, A = !0, G = !1) => {
      o(S, A, G, W);
    },
    validateTime: T
  };
}, pr = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...Je
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useSlots)(), o = ze(i, "timePicker"), { time: v, modelValue: k, disabledTimesConfig: B, updateTime: g, validateTime: T } = mr(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: k,
      time: v,
      updateTime: g
    }) }), (_, V) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(rn, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(Pa, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(_.$props, {
          hours: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v).hours,
          minutes: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v).minutes,
          seconds: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v).seconds,
          "internal-model-value": _.internalModelValue,
          "disabled-times-config": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B),
          "validate-time": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(T),
          "onUpdate:hours": V[0] || (V[0] = (p) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(g)(p)),
          "onUpdate:minutes": V[1] || (V[1] = (p) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(g)(p, !1)),
          "onUpdate:seconds": V[2] || (V[2] = (p) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(g)(p, !1, !0)),
          onAmPmChange: V[3] || (V[3] = (p) => _.$emit("am-pm-change", p))
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(o), (p, Q) => ({
            name: p,
            fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((R) => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_.$slots, p, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(R)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), yr = { class: "dp__month_year_row" }, gr = ["aria-label", "onClick", "onKeydown"], hr = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...Je
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      defaultedTransitions: i,
      defaultedAriaLabels: o,
      defaultedMultiCalendars: v,
      defaultedFilters: k,
      defaultedConfig: B,
      defaultedHighlight: g,
      propDates: T
    } = Se(n), { transitionName: Y, showTransition: _ } = Ht(i), { buildMatrix: V } = mt(), { handleMonthYearChange: p, isDisabled: Q, updateMonthYear: R } = Pl(n, a), { showLeftIcon: W, showRightIcon: O } = an(), S = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), A = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), G = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([null, null, null, null]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      a("mount");
    });
    const te = (m) => ({
      get: () => n[m],
      set: (b) => {
        const l = m === Ge.month ? Ge.year : Ge.month;
        a("update-month-year", { [m]: b, [l]: n[l] }), m === Ge.month ? le(!0) : f(!0);
      }
    }), D = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(te(Ge.month)), se = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(te(Ge.year)), oe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (m) => ({
      month: n.month,
      year: n.year,
      items: m === Ge.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: R,
      toggle: m === Ge.month ? le : f
    })), w = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const m = n.months.find((b) => b.value === n.month);
      return m || { text: "", value: 0 };
    }), F = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Pt(n.months, (m) => {
      const b = n.month === m.value, l = Wt(
        m.value,
        pa(n.year, T.value.minDate),
        ya(n.year, T.value.maxDate)
      ) || k.value.months.includes(m.value), M = wa(g.value, m.value, n.year);
      return { active: b, disabled: l, highlighted: M };
    })), h = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Pt(n.years, (m) => {
      const b = n.year === m.value, l = Wt(
        m.value,
        Rt(T.value.minDate),
        Rt(T.value.maxDate)
      ) || k.value.years.includes(m.value), M = Wn(g.value, m.value);
      return { active: b, disabled: l, highlighted: M };
    })), L = (m, b) => {
      b !== void 0 ? m.value = b : m.value = !m.value, m.value || a("overlay-closed");
    }, le = (m = !1, b) => {
      d(m), L(S, b);
    }, f = (m = !1, b) => {
      d(m), L(A, b);
    }, d = (m) => {
      m || a("reset-flow");
    }, X = (m, b) => {
      n.arrowNavigation && (G.value[b] = Oe(m), V(G.value, "monthYear"));
    }, ae = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var m, b;
      return [
        {
          type: Ge.month,
          index: 1,
          toggle: le,
          modelValue: D.value,
          updateModelValue: (l) => D.value = l,
          text: w.value.text,
          showSelectionGrid: S.value,
          items: F.value,
          ariaLabel: (m = o.value) == null ? void 0 : m.openMonthsOverlay
        },
        {
          type: Ge.year,
          index: 2,
          toggle: f,
          modelValue: se.value,
          updateModelValue: (l) => se.value = l,
          text: n.year,
          showSelectionGrid: A.value,
          items: h.value,
          ariaLabel: (b = o.value) == null ? void 0 : b.openYearsOverlay
        }
      ];
    }), N = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => n.disableYearSelect ? [ae.value[0]] : n.yearFirst ? [...ae.value].reverse() : ae.value);
    return t({
      toggleMonthPicker: le,
      toggleYearPicker: f,
      handleMonthYearChange: p
    }), (m, b) => {
      var l, M, H;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", yr, [
        m.$slots["month-year"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(m.$slots, "month-year", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(R), handleMonthYearChange: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(p), instance: e.instance }))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(W)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v), e.instance) && !m.vertical ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Nt, {
            key: 0,
            "aria-label": (l = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(o)) == null ? void 0 : l.prevMonth,
            disabled: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Q)(!1),
            onActivate: b[0] || (b[0] = (s) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(p)(!1, !0)),
            onSetRef: b[1] || (b[1] = (s) => X(s, 0))
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
              m.$slots["arrow-left"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(m.$slots, "arrow-left", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
              m.$slots["arrow-left"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(On), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dp__month_year_wrap", {
              dp__year_disable_select: m.disableYearSelect
            }])
          }, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(N.value, (s, x) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              key: s.type
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                ref_for: !0,
                ref: (ne) => X(ne, x + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": s.ariaLabel,
                onClick: s.toggle,
                onKeydown: [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(s.toggle, ["prevent"]), ["enter"]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(s.toggle, ["prevent"]), ["space"])
                ]
              }, [
                m.$slots[s.type] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(m.$slots, s.type, {
                  key: 0,
                  text: s.text,
                  value: n[s.type]
                }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                m.$slots[s.type] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(s.text), 1)
                ], 64))
              ], 40, gr),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
                name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Y)(s.showSelectionGrid),
                css: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(_)
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                  s.showSelectionGrid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Ut, {
                    key: 0,
                    items: s.items,
                    "arrow-navigation": m.arrowNavigation,
                    "hide-navigation": m.hideNavigation,
                    "is-last": m.autoApply && !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B).keepActionRow,
                    "skip-button-ref": !1,
                    config: m.config,
                    type: s.type,
                    "header-refs": [],
                    "esc-close": m.escClose,
                    "menu-wrap-ref": m.menuWrapRef,
                    "text-input": m.textInput,
                    onSelected: s.updateModelValue,
                    onToggle: s.toggle
                  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({
                    "button-icon": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                      m.$slots["calendar-icon"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(m.$slots, "calendar-icon", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                      m.$slots["calendar-icon"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(_t), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    m.$slots[`${s.type}-overlay-value`] ? {
                      name: "item",
                      fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ item: ne }) => [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(m.$slots, `${s.type}-overlay-value`, {
                          text: ne.text,
                          value: ne.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    m.$slots[`${s.type}-overlay`] ? {
                      name: "overlay",
                      fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(m.$slots, `${s.type}-overlay`, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(oe.value(s.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    m.$slots[`${s.type}-overlay-header`] ? {
                      name: "header",
                      fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(m.$slots, `${s.type}-overlay-header`, {
                          toggle: s.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "onSelected", "onToggle"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(W)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v), e.instance) && m.vertical ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Nt, {
            key: 1,
            "aria-label": (M = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(o)) == null ? void 0 : M.prevMonth,
            disabled: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Q)(!1),
            onActivate: b[2] || (b[2] = (s) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(p)(!1, !0))
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
              m.$slots["arrow-up"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(m.$slots, "arrow-up", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
              m.$slots["arrow-up"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(In), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(O)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v), e.instance) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Nt, {
            key: 2,
            ref: "rightIcon",
            disabled: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Q)(!0),
            "aria-label": (H = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(o)) == null ? void 0 : H.nextMonth,
            onActivate: b[3] || (b[3] = (s) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(p)(!0, !0)),
            onSetRef: b[4] || (b[4] = (s) => X(s, m.disableYearSelect ? 2 : 3))
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(m.$slots, m.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(m.vertical ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Nn) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Bn)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
        ], 64))
      ]);
    };
  }
}), br = ["aria-label"], kr = {
  class: "dp__calendar_header",
  role: "row"
}, wr = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Dr = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "dp__calendar_header_separator" }, null, -1), Mr = ["aria-label"], $r = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Ar = { class: "dp__cell_inner" }, Tr = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], Sr = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Je
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { buildMultiLevelMatrix: i } = mt(), {
      defaultedTransitions: o,
      defaultedConfig: v,
      defaultedAriaLabels: k,
      defaultedMultiCalendars: B,
      defaultedWeekNumbers: g
    } = Se(n), T = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), Y = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      bottom: "",
      left: "",
      transform: ""
    }), _ = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]), V = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!0), Q = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""), R = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({ startX: 0, endX: 0, startY: 0, endY: 0 }), W = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]), O = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({ left: "50%" }), S = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), A = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : Xa(n.formatLocale, n.locale, +n.weekStart));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      a("mount", { cmp: "calendar", refs: _ }), v.value.noSwipe || V.value && (V.value.addEventListener("touchstart", f, { passive: !1 }), V.value.addEventListener("touchend", d, { passive: !1 }), V.value.addEventListener("touchmove", X, { passive: !1 })), n.monthChangeOnScroll && V.value && V.value.addEventListener("wheel", m, { passive: !1 });
    });
    const G = (s) => s ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", te = (s, x) => {
      if (n.transitions) {
        const ne = Ue(rt(I(), n.month, n.year));
        Q.value = Re(Ue(rt(I(), s, x)), ne) ? o.value[G(!0)] : o.value[G(!1)], p.value = !1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
          p.value = !0;
        });
      }
    }, D = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => ({
        [n.calendarClassName]: !!n.calendarClassName
      })
    ), se = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (s) => {
      const x = Za(s);
      return {
        dp__marker_dot: x.type === "dot",
        dp__marker_line: x.type === "line"
      };
    }), oe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (s) => be(s, T.value)), w = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
      dp__calendar: !0,
      dp__calendar_next: B.value.count > 0 && n.instance !== 0
    })), F = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (s) => n.hideOffsetDates ? s.current : !0), h = (s) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(s, "yyyy-MM-dd"), L = async (s, x, ne) => {
      var c, J;
      if (a("set-hover-date", s), (J = (c = s.marker) == null ? void 0 : c.tooltip) != null && J.length) {
        const ye = Oe(_.value[x][ne]);
        if (ye) {
          const { width: E, height: P } = ye.getBoundingClientRect();
          T.value = s.value;
          let U = { left: `${E / 2}px` }, fe = -50;
          if (await (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(), W.value[0]) {
            const { left: De, width: K } = W.value[0].getBoundingClientRect();
            De < 0 && (U = { left: "0" }, fe = 0, O.value.left = `${E / 2}px`), window.innerWidth < De + K && (U = { right: "0" }, fe = 0, O.value.left = `${K - E / 2}px`);
          }
          Y.value = {
            bottom: `${P}px`,
            ...U,
            transform: `translateX(${fe}%)`
          }, a("tooltip-open", s.marker);
        }
      }
    }, le = (s) => {
      T.value && (T.value = null, Y.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", s.marker));
    }, f = (s) => {
      R.value.startX = s.changedTouches[0].screenX, R.value.startY = s.changedTouches[0].screenY;
    }, d = (s) => {
      R.value.endX = s.changedTouches[0].screenX, R.value.endY = s.changedTouches[0].screenY, ae();
    }, X = (s) => {
      n.vertical && !n.inline && s.preventDefault();
    }, ae = () => {
      const s = n.vertical ? "Y" : "X";
      Math.abs(R.value[`start${s}`] - R.value[`end${s}`]) > 10 && a("handle-swipe", R.value[`start${s}`] > R.value[`end${s}`] ? "right" : "left");
    }, N = (s, x, ne) => {
      s && (Array.isArray(_.value[x]) ? _.value[x][ne] = s : _.value[x] = [s]), n.arrowNavigation && i(_.value, "calendar");
    }, m = (s) => {
      n.monthChangeOnScroll && (s.preventDefault(), a("handle-scroll", s));
    }, b = (s) => g.value.type === "local" ? (0,date_fns__WEBPACK_IMPORTED_MODULE_32__.getWeek)(s.value, { weekStartsOn: +n.weekStart }) : g.value.type === "iso" ? (0,date_fns__WEBPACK_IMPORTED_MODULE_33__.getISOWeek)(s.value) : typeof g.value.type == "function" ? g.value.type(s.value) : "", l = (s) => {
      const x = s[0];
      return g.value.hideOnOffsetDates ? s.some((ne) => ne.current) ? b(x) : "" : b(x);
    }, M = (s, x) => {
      it(s, v.value), a("select-date", x);
    }, H = (s) => {
      it(s, v.value);
    };
    return t({ triggerTransition: te }), (s, x) => {
      var ne;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(w.value)
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          ref_key: "calendarWrapRef",
          ref: V,
          role: "grid",
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(D.value),
          "aria-label": (ne = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k)) == null ? void 0 : ne.calendarWrap
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", kr, [
            s.weekNumbers ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", wr, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(s.weekNumName), 1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(A.value, (c, J) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: J,
              class: "dp__calendar_header_item",
              role: "gridcell"
            }, [
              s.$slots["calendar-header"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(s.$slots, "calendar-header", {
                key: 0,
                day: c,
                index: J
              }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
              s.$slots["calendar-header"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(c), 1)
              ], 64))
            ]))), 128))
          ]),
          Dr,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
            name: Q.value,
            css: !!s.transitions
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => {
              var c;
              return [
                p.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((c = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k)) == null ? void 0 : c.calendarDays) || void 0
                }, [
                  ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(S.value, (J, ye) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                    key: ye,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    s.weekNumbers ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", $r, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", Ar, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(l(J.days)), 1)
                    ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(J.days, (E, P) => {
                      var U, fe, De;
                      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                        id: h(E.value),
                        ref_for: !0,
                        ref: (K) => N(K, ye, P),
                        key: P + ye,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (E.classData.dp__active_date || E.classData.dp__range_start || E.classData.dp__range_start) ?? void 0,
                        "aria-disabled": E.classData.dp__cell_disabled || void 0,
                        "aria-label": (fe = (U = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k)) == null ? void 0 : U.day) == null ? void 0 : fe.call(U, E),
                        tabindex: "0",
                        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((K) => M(K, E), ["prevent"]),
                        onKeydown: [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((K) => s.$emit("select-date", E), ["enter"]),
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((K) => s.$emit("handle-space", E), ["space"])
                        ],
                        onMouseenter: (K) => L(E, ye, P),
                        onMouseleave: (K) => le(E)
                      }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dp__cell_inner", E.classData])
                        }, [
                          s.$slots.day && F.value(E) ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(s.$slots, "day", {
                            key: 0,
                            day: +E.text,
                            date: E.value
                          }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                          s.$slots.day ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(E.text), 1)
                          ], 64)),
                          E.marker && F.value(E) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 2 }, [
                            s.$slots.marker ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(s.$slots, "marker", {
                              key: 0,
                              marker: E.marker,
                              day: +E.text,
                              date: E.value
                            }) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                              key: 1,
                              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(se.value(E.marker)),
                              style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(E.marker.color ? { backgroundColor: E.marker.color } : {})
                            }, null, 6))
                          ], 64)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                          oe.value(E.value) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: W,
                            class: "dp__marker_tooltip",
                            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(Y.value)
                          }, [
                            (De = E.marker) != null && De.tooltip ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: H
                            }, [
                              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(E.marker.tooltip, (K, je) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                                key: je,
                                class: "dp__tooltip_text"
                              }, [
                                s.$slots["marker-tooltip"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(s.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: K,
                                  day: E.value
                                }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
                                s.$slots["marker-tooltip"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                                    class: "dp__tooltip_mark",
                                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(K.color ? { backgroundColor: K.color } : {})
                                  }, null, 4),
                                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(K.text), 1)
                                ], 64))
                              ]))), 128)),
                              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                                class: "dp__arrow_bottom_tp",
                                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(O.value)
                              }, null, 4)
                            ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
                          ], 4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
                        ], 2)
                      ], 40, Tr);
                    }), 128))
                  ]))), 128))
                ], 8, Mr)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, br)
      ], 2);
    };
  }
}), na = (e) => Array.isArray(e), Pr = (e, t, r, a) => {
  const n = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]), i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(/* @__PURE__ */ new Date()), { modelValue: o, calendars: v, time: k } = zt(e, t), { defaultedMultiCalendars: B, defaultedStartTime: g, defaultedRange: T, defaultedTz: Y, propDates: _ } = Se(e), { validateMonthYearInRange: V, isDisabled: p, isDateRangeAllowed: Q, checkMinMaxRange: R } = Mt(e), { updateTimeValues: W, getSetDateTime: O, setTime: S, assignStartTime: A, validateTime: G, disabledTimesConfig: te } = Ra(e, k, o, a), D = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
    () => (y) => v.value[y] ? v.value[y].month : 0
  ), se = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
    () => (y) => v.value[y] ? v.value[y].year : 0
  ), oe = (y, Z, ie) => {
    var C, re;
    v.value[y] || (v.value[y] = { month: 0, year: 0 }), v.value[y].month = Jn(Z) ? (C = v.value[y]) == null ? void 0 : C.month : Z, v.value[y].year = Jn(ie) ? (re = v.value[y]) == null ? void 0 : re.year : ie;
  }, w = () => {
    e.autoApply && t("select-date");
  };
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(
    o,
    (y, Z) => {
      JSON.stringify(y) !== JSON.stringify(Z) && L();
    },
    { deep: !0 }
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    e.shadow || (o.value || (H(), g.value && A(g.value)), L(!0), e.focusStartDate && e.startDate && H());
  });
  const F = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    var y;
    return (y = e.flow) != null && y.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), h = () => {
    e.autoApply && F.value && t("auto-apply", e.partialFlow);
  }, L = (y = !1) => {
    if (o.value)
      return Array.isArray(o.value) ? (n.value = o.value, m(y)) : d(o.value, y);
    if (B.value.count && y && !e.startDate)
      return f(I(), y);
  }, le = () => Array.isArray(o.value) && T.value.enabled ? (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(o.value[0]) === (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(o.value[1] ?? o.value[0]) : !1, f = (y, Z = !1) => {
    if ((!B.value.count || !B.value.static || Z) && oe(0, (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(y), (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(y)), B.value.count && (!B.value.solo || !o.value || le()))
      for (let ie = 1; ie < B.value.count; ie++) {
        const C = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), { month: D.value(ie - 1), year: se.value(ie - 1) }), re = (0,date_fns__WEBPACK_IMPORTED_MODULE_30__.add)(C, { months: 1 });
        v.value[ie] = { month: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(re), year: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(re) };
      }
  }, d = (y, Z) => {
    f(y), S("hours", (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.getHours)(y)), S("minutes", (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getMinutes)(y)), S("seconds", (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.getSeconds)(y)), B.value.count && Z && M();
  }, X = (y) => {
    if (B.value.count) {
      if (B.value.solo)
        return 0;
      const Z = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(y[0]), ie = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(y[1]);
      return Math.abs(ie - Z) < B.value.count ? 0 : 1;
    }
    return 1;
  }, ae = (y, Z) => {
    y[1] && T.value.showLastInRange ? f(y[X(y)], Z) : f(y[0], Z);
    const ie = (C, re) => [
      C(y[0]),
      y[1] ? C(y[1]) : k[re][1]
    ];
    S("hours", ie(date_fns__WEBPACK_IMPORTED_MODULE_13__.getHours, "hours")), S("minutes", ie(date_fns__WEBPACK_IMPORTED_MODULE_14__.getMinutes, "minutes")), S("seconds", ie(date_fns__WEBPACK_IMPORTED_MODULE_15__.getSeconds, "seconds"));
  }, N = (y, Z) => {
    if ((T.value.enabled || e.weekPicker) && !e.multiDates)
      return ae(y, Z);
    if (e.multiDates && Z) {
      const ie = y[y.length - 1];
      return d(ie, Z);
    }
  }, m = (y) => {
    const Z = o.value;
    N(Z, y), B.value.count && B.value.solo && M();
  }, b = (y, Z) => {
    const ie = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), { month: D.value(Z), year: se.value(Z) }), C = y < 0 ? (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.addMonths)(ie, 1) : (0,date_fns__WEBPACK_IMPORTED_MODULE_24__.subMonths)(ie, 1);
    V((0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(C), (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(C), y < 0, e.preventMinMaxNavigation) && (oe(Z, (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(C), (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(C)), t("update-month-year", { instance: Z, month: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(C), year: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(C) }), B.value.count && !B.value.solo && l(Z), r());
  }, l = (y) => {
    for (let Z = y - 1; Z >= 0; Z--) {
      const ie = (0,date_fns__WEBPACK_IMPORTED_MODULE_24__.subMonths)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), { month: D.value(Z + 1), year: se.value(Z + 1) }), 1);
      oe(Z, (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(ie), (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(ie));
    }
    for (let Z = y + 1; Z <= B.value.count - 1; Z++) {
      const ie = (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.addMonths)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(), { month: D.value(Z - 1), year: se.value(Z - 1) }), 1);
      oe(Z, (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(ie), (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(ie));
    }
  }, M = () => {
    if (Array.isArray(o.value) && o.value.length === 2) {
      const y = I(
        I(o.value[1] ? o.value[1] : (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.addMonths)(o.value[0], 1))
      ), [Z, ie] = [(0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(o.value[0]), (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(o.value[0])], [C, re] = [(0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(o.value[1]), (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(o.value[1])];
      (Z !== C || Z === C && ie !== re) && B.value.solo && oe(1, (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(y), (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(y));
    } else
      o.value && !Array.isArray(o.value) && (oe(0, (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(o.value), (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(o.value)), f(I()));
  }, H = () => {
    e.startDate && (oe(0, (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(I(e.startDate)), (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(I(e.startDate))), B.value.count && l(0));
  }, s = (y, Z) => {
    if (e.monthChangeOnScroll) {
      const ie = (/* @__PURE__ */ new Date()).getTime() - i.value.getTime(), C = Math.abs(y.deltaY);
      let re = 500;
      C > 1 && (re = 100), C > 100 && (re = 0), ie > re && (i.value = /* @__PURE__ */ new Date(), b(e.monthChangeOnScroll !== "inverse" ? -y.deltaY : y.deltaY, Z));
    }
  }, x = (y, Z, ie = !1) => {
    e.monthChangeOnArrows && e.vertical === ie && ne(y, Z);
  }, ne = (y, Z) => {
    b(y === "right" ? -1 : 1, Z);
  }, c = (y) => {
    if (_.value.markers)
      return en(y.value, _.value.markers);
  }, J = (y, Z) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [y == 0, !0];
      case "fair":
        return [y == 0 || Z > y, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, ye = (y, Z, ie, C) => {
    if (e.sixWeeks && y.length < 6) {
      const re = 6 - y.length, de = (Z.getDay() + 7 - C) % 7, Ze = 6 - (ie.getDay() + 7 - C) % 7, [pt, vn] = J(de, Ze);
      for (let yt = 1; yt <= re; yt++)
        if (vn ? !!(yt % 2) == pt : pt) {
          const Gt = y[0].days[0], mn = E((0,date_fns__WEBPACK_IMPORTED_MODULE_27__.addDays)(Gt.value, -7), (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(Z));
          y.unshift({ days: mn });
        } else {
          const Gt = y[y.length - 1], mn = Gt.days[Gt.days.length - 1], _a = E((0,date_fns__WEBPACK_IMPORTED_MODULE_27__.addDays)(mn.value, 1), (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(Z));
          y.push({ days: _a });
        }
    }
    return y;
  }, E = (y, Z) => {
    const ie = I(y), C = [];
    for (let re = 0; re < 7; re++) {
      const de = (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.addDays)(ie, re), at = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(de) !== Z;
      C.push({
        text: e.hideOffsetDates && at ? "" : de.getDate(),
        value: de,
        current: !at,
        classData: {}
      });
    }
    return C;
  }, P = (y, Z) => {
    const ie = [], C = new Date(Z, y), re = new Date(Z, y + 1, 0), de = e.weekStart, at = (0,date_fns__WEBPACK_IMPORTED_MODULE_20__.startOfWeek)(C, { weekStartsOn: de }), Ze = (pt) => {
      const vn = E(pt, y);
      if (ie.push({ days: vn }), !ie[ie.length - 1].days.some(
        (yt) => be(Ue(yt.value), Ue(re))
      )) {
        const yt = (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.addDays)(pt, 7);
        Ze(yt);
      }
    };
    return Ze(at), ye(ie, C, re, de);
  }, U = (y) => {
    const Z = dt(I(y.value), k.hours, k.minutes, Ot());
    t("date-update", Z), e.multiDates ? Vn(Z, o, e.multiDatesLimit) : o.value = Z, a(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => {
      h();
    });
  }, fe = (y) => T.value.noDisabledRange ? ga(n.value[0], y).some((ie) => p(ie)) : !1, De = () => {
    n.value = o.value ? o.value.slice() : [], n.value.length === 2 && !(T.value.fixedStart || T.value.fixedEnd) && (n.value = []);
  }, K = (y, Z) => {
    const ie = [
      I(y.value),
      (0,date_fns__WEBPACK_IMPORTED_MODULE_27__.addDays)(I(y.value), +T.value.autoRange)
    ];
    Q(ie) ? (Z && je(y.value), n.value = ie) : t("invalid-date", y.value);
  }, je = (y) => {
    const Z = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)(I(y)), ie = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(I(y));
    if (oe(0, Z, ie), B.value.count > 0)
      for (let C = 1; C < B.value.count; C++) {
        const re = ol(
          (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(I(y), { year: D.value(C - 1), month: se.value(C - 1) })
        );
        oe(C, re.month, re.year);
      }
  }, Ve = (y) => {
    if (fe(y.value) || !R(y.value, o.value, T.value.fixedStart ? 0 : 1))
      return t("invalid-date", y.value);
    n.value = Ta(I(y.value), o, t, T);
  }, Kt = (y, Z) => {
    if (De(), T.value.autoRange)
      return K(y, Z);
    if (T.value.fixedStart || T.value.fixedEnd)
      return Ve(y);
    n.value[0] ? R(I(y.value), o.value) && !fe(y.value) ? Pe(I(y.value), I(n.value[0])) ? (n.value.unshift(I(y.value)), t("range-end", n.value[0])) : (n.value[1] = I(y.value), t("range-end", n.value[1])) : (e.autoApply && t("auto-apply-invalid", y.value), t("invalid-date", y.value)) : (n.value[0] = I(y.value), t("range-start", n.value[0]));
  }, Ot = (y = !0) => e.enableSeconds ? Array.isArray(k.seconds) ? y ? k.seconds[0] : k.seconds[1] : k.seconds : 0, Bt = (y) => {
    n.value[y] = dt(
      n.value[y],
      k.hours[y],
      k.minutes[y],
      Ot(y !== 1)
    );
  }, Yt = () => {
    var y, Z;
    n.value[0] && n.value[1] && +((y = n.value) == null ? void 0 : y[0]) > +((Z = n.value) == null ? void 0 : Z[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
  }, Ke = () => {
    n.value.length && (n.value[0] && !n.value[1] ? Bt(0) : (Bt(0), Bt(1), a()), Yt(), o.value = n.value.slice(), on(n.value, t, e.autoApply, e.modelAuto));
  }, sn = (y, Z = !1) => {
    if (p(y.value) || !y.current && e.hideOffsetDates)
      return t("invalid-date", y.value);
    if (!T.value.enabled)
      return U(y);
    na(k.hours) && na(k.minutes) && !e.multiDates && (Kt(y, Z), Ke());
  }, un = (y, Z) => {
    var C;
    oe(y, Z.month, Z.year), B.value.count && !B.value.solo && l(y), t("update-month-year", { instance: y, month: Z.month, year: Z.year }), r(B.value.solo ? y : void 0);
    const ie = (C = e.flow) != null && C.length ? e.flow[e.flowStep] : void 0;
    !Z.fromNav && (ie === xe.month || ie === xe.year) && a();
  }, jt = (y, Z) => {
    Aa({
      value: y,
      modelValue: o,
      range: T.value.enabled,
      timezone: Z ? void 0 : Y.value.timezone
    }), w(), e.multiCalendars && (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => L(!0));
  }, dn = () => {
    T.value.enabled ? o.value && Array.isArray(o.value) && o.value[0] ? o.value = Pe(I(), o.value[0]) ? [I(), o.value[0]] : [o.value[0], I()] : o.value = [I()] : o.value = I(), w();
  }, cn = () => {
    if (Array.isArray(o.value))
      if (e.multiDates) {
        const y = fn();
        o.value[o.value.length - 1] = O(y);
      } else
        o.value = o.value.map((y, Z) => y && O(y, Z));
    else
      o.value = O(o.value);
    t("time-update");
  }, fn = () => Array.isArray(o.value) && o.value.length ? o.value[o.value.length - 1] : null;
  return {
    calendars: v,
    modelValue: o,
    month: D,
    year: se,
    time: k,
    disabledTimesConfig: te,
    validateTime: G,
    getCalendarDays: P,
    getMarker: c,
    handleScroll: s,
    handleSwipe: ne,
    handleArrow: x,
    selectDate: sn,
    updateMonthYear: un,
    presetDate: jt,
    selectCurrentDate: dn,
    updateTime: (y, Z = !0, ie = !1) => {
      W(y, Z, ie, cn);
    }
  };
}, Rr = { key: 0 }, Cr = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "DatePicker",
  props: {
    ...Je
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      calendars: i,
      month: o,
      year: v,
      modelValue: k,
      time: B,
      disabledTimesConfig: g,
      validateTime: T,
      getCalendarDays: Y,
      getMarker: _,
      handleArrow: V,
      handleScroll: p,
      handleSwipe: Q,
      selectDate: R,
      updateMonthYear: W,
      presetDate: O,
      selectCurrentDate: S,
      updateTime: A
    } = Pr(n, a, ae, N), G = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useSlots)(), { setHoverDate: te, getDayClassData: D, clearHoverDate: se } = Ol(k, n), { defaultedMultiCalendars: oe } = Se(n), w = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]), F = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]), h = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), L = ze(G, "calendar"), le = ze(G, "monthYear"), f = ze(G, "timePicker"), d = (s) => {
      n.shadow || a("mount", s);
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(
      i,
      () => {
        n.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const X = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (s) => Y(o.value(s), v.value(s)).map((x) => ({
      ...x,
      days: x.days.map((ne) => (ne.marker = _(ne), ne.classData = D(ne), ne))
    })));
    function ae(s) {
      var x;
      s || s === 0 ? (x = F.value[s]) == null || x.triggerTransition(o.value(s), v.value(s)) : F.value.forEach((ne, c) => ne.triggerTransition(o.value(c), v.value(c)));
    }
    function N() {
      a("update-flow-step");
    }
    const m = (s, x = !1) => {
      R(s, x), n.spaceConfirm && a("select-date");
    };
    return t({
      clearHoverDate: se,
      presetDate: O,
      selectCurrentDate: S,
      toggleMonthPicker: (s, x, ne = 0) => {
        var c;
        (c = w.value[ne]) == null || c.toggleMonthPicker(s, x);
      },
      toggleYearPicker: (s, x, ne = 0) => {
        var c;
        (c = w.value[ne]) == null || c.toggleYearPicker(s, x);
      },
      toggleTimePicker: (s, x, ne) => {
        var c;
        (c = h.value) == null || c.toggleTimePicker(s, x, ne);
      },
      handleArrow: V,
      updateMonthYear: W,
      getSidebarProps: () => ({
        modelValue: k,
        month: o,
        year: v,
        time: B,
        updateTime: A,
        updateMonthYear: W,
        selectDate: R,
        presetDate: O
      })
    }), (s, x) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(rn, {
        "multi-calendars": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(oe).count,
        collapse: s.collapse
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ instance: ne, index: c }) => [
          s.disableMonthYearSelect ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(hr, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            key: 0,
            ref: (J) => {
              J && (w.value[c] = J);
            },
            months: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(fa)(s.formatLocale, s.locale, s.monthNameFormat),
            years: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(En)(s.yearRange, s.reverseYears),
            month: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(o)(ne),
            year: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v)(ne),
            instance: ne
          }, s.$props, {
            onMount: x[0] || (x[0] = (J) => d((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(wt).header)),
            onResetFlow: x[1] || (x[1] = (J) => s.$emit("reset-flow")),
            onUpdateMonthYear: (J) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(W)(ne, J),
            onOverlayClosed: x[2] || (x[2] = (J) => s.$emit("focus-menu"))
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(le), (J, ye) => ({
              name: J,
              fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((E) => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(s.$slots, J, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(E)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(Sr, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            ref: (J) => {
              J && (F.value[c] = J);
            },
            "mapped-dates": X.value(ne),
            month: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(o)(ne),
            year: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v)(ne),
            instance: ne
          }, s.$props, {
            onSelectDate: (J) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(R)(J, ne !== 1),
            onHandleSpace: (J) => m(J, ne !== 1),
            onSetHoverDate: x[3] || (x[3] = (J) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(te)(J)),
            onHandleScroll: (J) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(p)(J, ne),
            onHandleSwipe: (J) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Q)(J, ne),
            onMount: x[4] || (x[4] = (J) => d((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(wt).calendar)),
            onResetFlow: x[5] || (x[5] = (J) => s.$emit("reset-flow")),
            onTooltipOpen: x[6] || (x[6] = (J) => s.$emit("tooltip-open", J)),
            onTooltipClose: x[7] || (x[7] = (J) => s.$emit("tooltip-close", J))
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(L), (J, ye) => ({
              name: J,
              fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((E) => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(s.$slots, J, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)({ ...E })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      s.enableTimePicker ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Rr, [
        s.$slots["time-picker"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(s.$slots, "time-picker", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, { time: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B), updateTime: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(A) }))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Pa, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
          key: 1,
          ref_key: "timePickerRef",
          ref: h
        }, s.$props, {
          hours: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B).hours,
          minutes: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B).minutes,
          seconds: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B).seconds,
          "internal-model-value": s.internalModelValue,
          "disabled-times-config": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(g),
          "validate-time": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(T),
          onMount: x[8] || (x[8] = (ne) => d((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(wt).timePicker)),
          "onUpdate:hours": x[9] || (x[9] = (ne) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(A)(ne)),
          "onUpdate:minutes": x[10] || (x[10] = (ne) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(A)(ne, !1)),
          "onUpdate:seconds": x[11] || (x[11] = (ne) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(A)(ne, !1, !0)),
          onResetFlow: x[12] || (x[12] = (ne) => s.$emit("reset-flow")),
          onOverlayClosed: x[13] || (x[13] = (ne) => s.$emit("time-picker-close")),
          onOverlayOpened: x[14] || (x[14] = (ne) => s.$emit("time-picker-open", ne)),
          onAmPmChange: x[15] || (x[15] = (ne) => s.$emit("am-pm-change", ne))
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(f), (ne, c) => ({
            name: ne,
            fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((J) => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(s.$slots, ne, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(J)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
    ], 64));
  }
}), _r = (e, t) => {
  const r = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(), { defaultedMultiCalendars: a, defaultedConfig: n, defaultedHighlight: i, defaultedRange: o, propDates: v } = Se(e), { modelValue: k, year: B, month: g, calendars: T } = zt(e, t), { isDisabled: Y } = Mt(e), { selectYear: _, groupedYears: V, showYearPicker: p, isDisabled: Q, toggleYearPicker: R, handleYearSelect: W, handleYear: O } = Sa({
    modelValue: k,
    multiCalendars: a,
    highlight: i,
    calendars: T,
    propDates: v,
    month: g,
    year: B,
    props: e,
    emit: t
  }), S = (h, L) => [h, L].map((le) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(le, "MMMM", { locale: e.formatLocale })).join("-"), A = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (h) => k.value ? Array.isArray(k.value) ? k.value.some((L) => (0,date_fns__WEBPACK_IMPORTED_MODULE_34__.isSameQuarter)(h, L)) : (0,date_fns__WEBPACK_IMPORTED_MODULE_34__.isSameQuarter)(k.value, h) : !1), G = (h) => {
    if (o.value.enabled) {
      if (Array.isArray(k.value)) {
        const L = be(h, k.value[0]) || be(h, k.value[1]);
        return nn(k.value, r.value, h) && !L;
      }
      return !1;
    }
    return !1;
  }, te = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (h) => {
    const L = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.set)(/* @__PURE__ */ new Date(), { year: B.value(h) });
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_35__.eachQuarterOfInterval)({
      start: (0,date_fns__WEBPACK_IMPORTED_MODULE_36__.startOfYear)(L),
      end: (0,date_fns__WEBPACK_IMPORTED_MODULE_37__.endOfYear)(L)
    }).map((le) => {
      const f = (0,date_fns__WEBPACK_IMPORTED_MODULE_38__.startOfQuarter)(le), d = (0,date_fns__WEBPACK_IMPORTED_MODULE_39__.endOfQuarter)(le), X = Y(le), ae = G(f), N = typeof i.value == "function" ? i.value({ quarter: (0,date_fns__WEBPACK_IMPORTED_MODULE_40__.getQuarter)(f), year: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(f) }) : !!i.value.quarters.find(
        (m) => m.quarter === (0,date_fns__WEBPACK_IMPORTED_MODULE_40__.getQuarter)(f) && m.year === (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.getYear)(f)
      );
      return {
        text: S(f, d),
        value: f,
        active: A.value(f),
        highlighted: N,
        disabled: X,
        isBetween: ae
      };
    });
  }), D = (h) => {
    Vn(h, k, e.multiDatesLimit), t("auto-apply", !0);
  }, se = (h) => {
    const L = Hn(k, h, t);
    on(L, t, e.autoApply, e.modelAuto);
  }, oe = (h) => {
    k.value = h, t("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: a,
    groupedYears: V,
    year: B,
    isDisabled: Q,
    quarters: te,
    showYearPicker: p,
    modelValue: k,
    setHoverDate: (h) => {
      r.value = h;
    },
    selectYear: _,
    selectQuarter: (h, L, le) => {
      if (!le)
        return T.value[L].month = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.getMonth)((0,date_fns__WEBPACK_IMPORTED_MODULE_39__.endOfQuarter)(h)), e.multiDates ? D(h) : o.value.enabled ? se(h) : oe(h);
    },
    toggleYearPicker: R,
    handleYearSelect: W,
    handleYear: O
  };
}, Or = { class: "dp--quarter-items" }, Br = ["disabled", "onClick", "onMouseover"], Yr = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...Je
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useSlots)(), o = ze(i, "yearMode"), {
      defaultedMultiCalendars: v,
      defaultedConfig: k,
      groupedYears: B,
      year: g,
      isDisabled: T,
      quarters: Y,
      modelValue: _,
      showYearPicker: V,
      setHoverDate: p,
      selectQuarter: Q,
      toggleYearPicker: R,
      handleYearSelect: W,
      handleYear: O
    } = _r(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: _,
      year: g,
      selectQuarter: Q,
      handleYearSelect: W,
      handleYear: O
    }) }), (A, G) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(rn, {
      "multi-calendars": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(v).count,
      collapse: A.collapse,
      stretch: ""
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ instance: te }) => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          class: "dp-quarter-picker-wrap",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ minHeight: `${(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(k).modeHeight}px` })
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($a, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(A.$props, {
              items: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(B)(te),
              instance: te,
              "show-year-picker": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(V)[te],
              year: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(g)(te),
              "is-disabled": (D) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(T)(te, D),
              onHandleYear: (D) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(O)(te, D),
              onYearSelect: (D) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(W)(D, te),
              onToggleYearPicker: (D) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(R)(te, D == null ? void 0 : D.flow, D == null ? void 0 : D.show)
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(o), (D, se) => ({
                name: D,
                fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((oe) => [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(A.$slots, D, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(oe)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", Or, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Y)(te), (D, se) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", { key: se }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                type: "button",
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dp--qr-btn", {
                  "dp--qr-btn-active": D.active,
                  "dp--qr-btn-between": D.isBetween,
                  "dp--qr-btn-disabled": D.disabled,
                  "dp--highlighted": D.highlighted
                }]),
                disabled: D.disabled,
                onClick: (oe) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Q)(D.value, te, D.disabled),
                onMouseover: (oe) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(p)(D.value)
              }, [
                A.$slots.quarter ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(A.$slots, "quarter", {
                  key: 0,
                  value: D.value,
                  text: D.text
                }) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(D.text), 1)
                ], 64))
              ], 42, Br)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Ir = ["id"], Nr = {
  key: 0,
  class: "dp--menu-load-container"
}, Er = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "dp--menu-loader" }, null, -1), Fr = [
  Er
], Lr = {
  key: 0,
  class: "dp__sidebar_left"
}, Wr = ["onClick", "onKeydown"], Vr = {
  key: 2,
  class: "dp__sidebar_right"
}, Hr = {
  key: 3,
  class: "dp__action_extra"
}, aa = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...ln,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), o = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const { openOnTop: P, ...U } = n;
      return {
        ...U,
        flowStep: D.value,
        collapse: n.collapse,
        noOverlayFocus: n.noOverlayFocus,
        menuWrapRef: i.value
      };
    }), { setMenuFocused: v, setShiftKey: k, control: B } = Da(), g = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useSlots)(), { defaultedTextInput: T, defaultedInline: Y, defaultedConfig: _ } = Se(n), V = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0), Q = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), R = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), W = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      if (!n.shadow) {
        R.value = !0, O(), window.addEventListener("resize", O);
        const P = Oe(i);
        if (P && !T.value.enabled && !Y.value.enabled && (v(!0), h()), P) {
          const U = (fe) => {
            _.value.allowPreventDefault && fe.preventDefault(), it(fe, _.value, !0);
          };
          P.addEventListener("pointerdown", U), P.addEventListener("mousedown", U);
        }
      }
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
      window.removeEventListener("resize", O);
    });
    const O = () => {
      const P = Oe(Q);
      P && (p.value = P.getBoundingClientRect().width);
    }, { arrowRight: S, arrowLeft: A, arrowDown: G, arrowUp: te } = mt(), { flowStep: D, updateFlowStep: se, childMount: oe, resetFlow: w } = Bl(n, a, W), F = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => n.monthPicker ? Xl : n.yearPicker ? Zl : n.timePicker ? pr : n.quarterPicker ? Yr : Cr), h = () => {
      const P = Oe(i);
      P && P.focus({ preventScroll: !0 });
    }, L = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var P;
      return ((P = W.value) == null ? void 0 : P.getSidebarProps()) || {};
    }), le = () => {
      n.openOnTop && a("recalculate-position");
    }, f = ze(g, "action"), d = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => n.monthPicker || n.yearPicker ? ze(g, "monthYear") : n.timePicker ? ze(g, "timePicker") : ze(g, "shared")), X = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), ae = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), N = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => ({
        dp__menu: !0,
        dp__menu_index: !Y.value.enabled,
        dp__relative: Y.value.enabled,
        [n.menuClassName]: !!n.menuClassName
      })
    ), m = (P) => {
      it(P, _.value, !0);
    }, b = () => {
      n.escClose && a("close-picker");
    }, l = (P) => {
      if (n.arrowNavigation) {
        if (P === "up")
          return te();
        if (P === "down")
          return G();
        if (P === "left")
          return A();
        if (P === "right")
          return S();
      } else
        P === "left" || P === "up" ? ne("handleArrow", "left", 0, P === "up") : ne("handleArrow", "right", 0, P === "down");
    }, M = (P) => {
      k(P.shiftKey), !n.disableMonthYearSelect && P.code === "Tab" && P.target.classList.contains("dp__menu") && B.value.shiftKeyInMenu && (P.preventDefault(), it(P, _.value, !0), a("close-picker"));
    }, H = () => {
      h(), a("time-picker-close");
    }, s = (P) => {
      var U, fe, De;
      (U = W.value) == null || U.toggleTimePicker(!1, !1), (fe = W.value) == null || fe.toggleMonthPicker(!1, !1, P), (De = W.value) == null || De.toggleYearPicker(!1, !1, P);
    }, x = (P, U = 0) => {
      var fe, De, K;
      return P === "month" ? (fe = W.value) == null ? void 0 : fe.toggleMonthPicker(!1, !0, U) : P === "year" ? (De = W.value) == null ? void 0 : De.toggleYearPicker(!1, !0, U) : P === "time" ? (K = W.value) == null ? void 0 : K.toggleTimePicker(!0, !1) : s(U);
    }, ne = (P, ...U) => {
      var fe, De;
      (fe = W.value) != null && fe[P] && ((De = W.value) == null || De[P](...U));
    }, c = () => {
      ne("selectCurrentDate");
    }, J = (P, U) => {
      ne("presetDate", P, U);
    }, ye = () => {
      ne("clearHoverDate");
    };
    return t({
      updateMonthYear: (P, U) => {
        ne("updateMonthYear", P, U);
      },
      switchView: x
    }), (P, U) => {
      var fe, De;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        id: P.uid ? `dp-menu-${P.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: i,
        tabindex: "0",
        role: "dialog",
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(N.value),
        onMouseleave: ye,
        onClick: m,
        onKeydown: [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(b, ["esc"]),
          U[18] || (U[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((K) => l("left"), ["prevent"]), ["left"])),
          U[19] || (U[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((K) => l("up"), ["prevent"]), ["up"])),
          U[20] || (U[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((K) => l("down"), ["prevent"]), ["down"])),
          U[21] || (U[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((K) => l("right"), ["prevent"]), ["right"])),
          M
        ]
      }, [
        (P.disabled || P.readonly) && (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Y).enabled || P.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(ae.value)
        }, [
          P.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Nr, Fr)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(Y).enabled && !P.teleportCenter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 1,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(X.value)
        }, null, 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          ref_key: "innerMenuRef",
          ref: Q,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            dp__menu_content_wrapper: ((fe = P.presetDates) == null ? void 0 : fe.length) || !!P.$slots["left-sidebar"] || !!P.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((De = P.presetDates) == null ? void 0 : De.length) || !!P.$slots["left-sidebar"] || !!P.$slots["right-sidebar"]
          }),
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ "--dp-menu-width": `${p.value}px` })
        }, [
          P.$slots["left-sidebar"] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Lr, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(P.$slots, "left-sidebar", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(L.value)))
          ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          P.presetDates.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: 1,
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(P.presetDates, (K, je) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: je }, [
              K.slot ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(P.$slots, K.slot, {
                key: 0,
                presetDate: J,
                label: K.label,
                value: K.value
              }) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                key: 1,
                type: "button",
                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(K.style || {}),
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((Ve) => J(K.value, K.noTz), ["prevent"]),
                onKeydown: [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((Ve) => J(K.value, K.noTz), ["prevent"]), ["enter"]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((Ve) => J(K.value, K.noTz), ["prevent"]), ["space"])
                ]
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(K.label), 47, Wr))
            ], 64))), 128))
          ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            ref_key: "calendarWrapperRef",
            ref: V,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(F.value), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
              ref_key: "dynCmpRef",
              ref: W
            }, o.value, {
              "flow-step": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(D),
              onMount: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(oe),
              onUpdateFlowStep: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(se),
              onResetFlow: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(w),
              onFocusMenu: h,
              onSelectDate: U[0] || (U[0] = (K) => P.$emit("select-date")),
              onDateUpdate: U[1] || (U[1] = (K) => P.$emit("date-update", K)),
              onTooltipOpen: U[2] || (U[2] = (K) => P.$emit("tooltip-open", K)),
              onTooltipClose: U[3] || (U[3] = (K) => P.$emit("tooltip-close", K)),
              onAutoApply: U[4] || (U[4] = (K) => P.$emit("auto-apply", K)),
              onRangeStart: U[5] || (U[5] = (K) => P.$emit("range-start", K)),
              onRangeEnd: U[6] || (U[6] = (K) => P.$emit("range-end", K)),
              onInvalidFixedRange: U[7] || (U[7] = (K) => P.$emit("invalid-fixed-range", K)),
              onTimeUpdate: U[8] || (U[8] = (K) => P.$emit("time-update")),
              onAmPmChange: U[9] || (U[9] = (K) => P.$emit("am-pm-change", K)),
              onTimePickerOpen: U[10] || (U[10] = (K) => P.$emit("time-picker-open", K)),
              onTimePickerClose: H,
              onRecalculatePosition: le,
              onUpdateMonthYear: U[11] || (U[11] = (K) => P.$emit("update-month-year", K)),
              onAutoApplyInvalid: U[12] || (U[12] = (K) => P.$emit("auto-apply-invalid", K)),
              onInvalidDate: U[13] || (U[13] = (K) => P.$emit("invalid-date", K)),
              "onUpdate:internalModelValue": U[14] || (U[14] = (K) => P.$emit("update:internal-model-value", K))
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(d.value, (K, je) => ({
                name: K,
                fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((Ve) => [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(P.$slots, K, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)({ ...Ve })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          P.$slots["right-sidebar"] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Vr, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(P.$slots, "right-sidebar", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(L.value)))
          ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
          P.$slots["action-extra"] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", Hr, [
            P.$slots["action-extra"] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(P.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: c
            }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
          ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
        ], 6),
        !P.autoApply || (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(_).keepActionRow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(Vl, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
          key: 2,
          "menu-mount": R.value
        }, o.value, {
          "calendar-width": p.value,
          onClosePicker: U[15] || (U[15] = (K) => P.$emit("close-picker")),
          onSelectDate: U[16] || (U[16] = (K) => P.$emit("select-date")),
          onInvalidSelect: U[17] || (U[17] = (K) => P.$emit("invalid-select")),
          onSelectNow: c
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(f), (K, je) => ({
            name: K,
            fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((Ve) => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(P.$slots, K, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)({ ...Ve })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
      ], 42, Ir);
    };
  }
}), zr = typeof window < "u" ? window : void 0, An = () => {
}, Ur = (e) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose)(e), !0) : !1, Kr = (e, t, r, a) => {
  if (!e)
    return An;
  let n = An;
  const i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(
    () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(e),
    (v) => {
      n(), v && (v.addEventListener(t, r, a), n = () => {
        v.removeEventListener(t, r, a), n = An;
      });
    },
    { immediate: !0, flush: "post" }
  ), o = () => {
    i(), n();
  };
  return Ur(o), o;
}, jr = (e, t, r, a = {}) => {
  const { window: n = zr, event: i = "pointerdown" } = a;
  return n ? Kr(n, i, (v) => {
    const k = Oe(e), B = Oe(t);
    !k || !B || k === v.target || v.composedPath().includes(k) || v.composedPath().includes(B) || r(v);
  }, { passive: !0 }) : void 0;
}, Gr = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...ln
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, i = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useSlots)(), o = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), v = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(n, "modelValue"), k = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(n, "timezone"), B = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), g = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), T = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), Y = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), _ = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), V = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), Q = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1), { setMenuFocused: R, setShiftKey: W } = Da(), { clearArrowNav: O } = mt(), { validateDate: S, isValidTime: A } = Mt(n), { defaultedTransitions: G, defaultedTextInput: te, defaultedInline: D, defaultedConfig: se, defaultedRange: oe } = Se(n), { menuTransition: w, showTransition: F } = Ht(G);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      l(n.modelValue), (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => {
        if (!D.value.enabled) {
          const C = ae(_.value);
          C == null || C.addEventListener("scroll", E), window == null || window.addEventListener("resize", P);
        }
      }), D.value.enabled && (o.value = !0), window == null || window.addEventListener("keyup", U), window == null || window.addEventListener("keydown", fe);
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
      if (!D.value.enabled) {
        const C = ae(_.value);
        C == null || C.removeEventListener("scroll", E), window == null || window.removeEventListener("resize", P);
      }
      window == null || window.removeEventListener("keyup", U), window == null || window.removeEventListener("keydown", fe);
    });
    const h = ze(i, "all", n.presetDates), L = ze(i, "input");
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(
      [v, k],
      () => {
        l(v.value);
      },
      { deep: !0 }
    );
    const { openOnTop: le, menuStyle: f, xCorrect: d, setMenuPosition: X, getScrollableParent: ae, shadowRender: N } = Rl({
      menuRef: B,
      menuRefInner: g,
      inputRef: T,
      pickerWrapperRef: _,
      inline: D,
      emit: a,
      props: n,
      slots: i
    }), {
      inputValue: m,
      internalModelValue: b,
      parseExternalModelValue: l,
      emitModelValue: M,
      formatInputValue: H,
      checkBeforeEmit: s
    } = Sl(a, n, Y), x = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: D.value.enabled,
        "dp--flex-display-collapsed": Q.value,
        dp__flex_display_with_input: D.value.input
      })
    ), ne = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), c = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: !n.teleport || D.value.enabled
    })), J = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({ class: "dp__outer_menu_wrap" })), ye = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => D.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), E = () => {
      o.value && (se.value.closeOnScroll ? Ke() : X());
    }, P = () => {
      var re;
      o.value && X();
      const C = (re = g.value) == null ? void 0 : re.$el.getBoundingClientRect().width;
      Q.value = document.body.offsetWidth <= C;
    }, U = (C) => {
      C.key === "Tab" && !D.value.enabled && !n.teleport && se.value.tabOutClosesMenu && (_.value.contains(document.activeElement) || Ke()), p.value = C.shiftKey;
    }, fe = (C) => {
      p.value = C.shiftKey;
    }, De = () => {
      !n.disabled && !n.readonly && (N(aa, n), X(!1), o.value = !0, o.value && a("open"), o.value || Yt(), l(n.modelValue));
    }, K = () => {
      var C;
      m.value = "", Yt(), (C = T.value) == null || C.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), se.value.closeOnClearValue && Ke();
    }, je = () => {
      const C = b.value;
      return !C || !Array.isArray(C) && S(C) ? !0 : Array.isArray(C) ? n.multiDates || C.length === 2 && S(C[0]) && S(C[1]) ? !0 : oe.value.partialRange && !n.timePicker ? S(C[0]) : !1 : !1;
    }, Ve = () => {
      s() && je() ? (M(), Ke()) : a("invalid-select", b.value);
    }, Kt = (C) => {
      Ot(), M(), se.value.closeOnAutoApply && !C && Ke();
    }, Ot = () => {
      T.value && te.value.enabled && T.value.setParsedDate(b.value);
    }, Bt = (C = !1) => {
      n.autoApply && A(b.value) && je() && (oe.value.enabled && Array.isArray(b.value) ? (oe.value.partialRange || b.value.length === 2) && Kt(C) : Kt(C));
    }, Yt = () => {
      te.value.enabled || (b.value = null);
    }, Ke = () => {
      D.value.enabled || (o.value && (o.value = !1, d.value = !1, R(!1), W(!1), O(), a("closed"), m.value && l(v.value)), Yt(), a("blur"));
    }, sn = (C, re, de = !1) => {
      if (!C) {
        b.value = null;
        return;
      }
      const at = Array.isArray(C) ? !C.some((pt) => !S(pt)) : S(C), Ze = A(C);
      at && Ze && (b.value = C, re && (V.value = de, Ve(), a("text-submit")));
    }, un = () => {
      n.autoApply && A(b.value) && M(), Ot();
    }, jt = () => o.value ? Ke() : De(), dn = (C) => {
      b.value = C;
    }, cn = () => {
      te.value.enabled && (Y.value = !0, H()), a("focus");
    }, fn = () => {
      if (te.value.enabled && (Y.value = !1, l(n.modelValue), V.value)) {
        const C = tl(_.value, p.value);
        C == null || C.focus();
      }
      a("blur");
    }, zn = (C) => {
      g.value && g.value.updateMonthYear(0, {
        month: Xn(C.month),
        year: Xn(C.year)
      });
    }, y = (C) => {
      l(C ?? n.modelValue);
    }, Z = (C, re) => {
      var de;
      (de = g.value) == null || de.switchView(C, re);
    }, ie = (C) => se.value.onClickOutside ? se.value.onClickOutside(C) : Ke();
    return jr(B, T, () => ie(je)), t({
      closeMenu: Ke,
      selectDate: Ve,
      clearValue: K,
      openMenu: De,
      onScroll: E,
      formatInputValue: H,
      // exposed for testing purposes
      updateInternalModelValue: dn,
      // modify internal modelValue
      setMonthYear: zn,
      parseModel: y,
      switchView: Z,
      toggleMenu: jt
    }), (C, re) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      ref_key: "pickerWrapperRef",
      ref: _,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(x.value),
      "data-datepicker-instance": ""
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(El, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
        ref_key: "inputRef",
        ref: T,
        "input-value": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(m),
        "onUpdate:inputValue": re[0] || (re[0] = (de) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(m) ? m.value = de : null),
        "is-menu-open": o.value
      }, C.$props, {
        onClear: K,
        onOpen: De,
        onSetInputDate: sn,
        onSetEmptyDate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(M),
        onSelectDate: Ve,
        onToggle: jt,
        onClose: Ke,
        onFocus: cn,
        onBlur: fn,
        onRealBlur: re[1] || (re[1] = (de) => Y.value = !1)
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(L), (de, at) => ({
          name: de,
          fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((Ze) => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(C.$slots, de, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(Ze)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(c.value)), {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
            name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(w)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(le)),
            css: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(F) && !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(D).enabled
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
              o.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: B
              }, J.value, {
                class: { "dp--menu-wrapper": !(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(D).enabled },
                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(D).enabled ? void 0 : (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(f)
              }), [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(aa, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
                  ref_key: "dpMenuRef",
                  ref: g
                }, C.$props, {
                  "internal-model-value": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(b),
                  "onUpdate:internalModelValue": re[2] || (re[2] = (de) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(b) ? b.value = de : null),
                  class: { [ne.value]: !0, "dp--menu-wrapper": C.teleport },
                  "open-on-top": (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(le),
                  "no-overlay-focus": ye.value,
                  collapse: Q.value,
                  onClosePicker: Ke,
                  onSelectDate: Ve,
                  onAutoApply: Bt,
                  onTimeUpdate: un,
                  onFlowStep: re[3] || (re[3] = (de) => C.$emit("flow-step", de)),
                  onUpdateMonthYear: re[4] || (re[4] = (de) => C.$emit("update-month-year", de)),
                  onInvalidSelect: re[5] || (re[5] = (de) => C.$emit("invalid-select", (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(b))),
                  onAutoApplyInvalid: re[6] || (re[6] = (de) => C.$emit("invalid-select", de)),
                  onInvalidFixedRange: re[7] || (re[7] = (de) => C.$emit("invalid-fixed-range", de)),
                  onRecalculatePosition: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(X),
                  onTooltipOpen: re[8] || (re[8] = (de) => C.$emit("tooltip-open", de)),
                  onTooltipClose: re[9] || (re[9] = (de) => C.$emit("tooltip-close", de)),
                  onTimePickerOpen: re[10] || (re[10] = (de) => C.$emit("time-picker-open", de)),
                  onTimePickerClose: re[11] || (re[11] = (de) => C.$emit("time-picker-close", de)),
                  onAmPmChange: re[12] || (re[12] = (de) => C.$emit("am-pm-change", de)),
                  onRangeStart: re[13] || (re[13] = (de) => C.$emit("range-start", de)),
                  onRangeEnd: re[14] || (re[14] = (de) => C.$emit("range-end", de)),
                  onDateUpdate: re[15] || (re[15] = (de) => C.$emit("date-update", de)),
                  onInvalidDate: re[16] || (re[16] = (de) => C.$emit("invalid-date", de))
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(h), (de, at) => ({
                    name: de,
                    fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((Ze) => [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(C.$slots, de, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)({ ...Ze })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "onRecalculatePosition"])
              ], 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16)
    ], 2));
  }
}), Ca = /* @__PURE__ */ (() => {
  const e = Gr;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ca
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Qr).forEach(([e, t]) => {
  e !== "default" && (Ca[e] = t);
});



/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/add.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/add.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addDays.mjs");
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addMonths.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");





/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,\\-7
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(date, duration) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Add years and months
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const dateWithMonths =
    months || years ? (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__.addMonths)(_date, months + years * 12) : _date;

  // Add weeks and days
  const dateWithDays =
    days || weeks ? (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;
  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, dateWithDays.getTime() + msToAdd);

  return finalDate;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addDays.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addDays.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addMonths.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addMonths.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMonths: () => (/* binding */ addMonths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMonths);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addQuarters.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addQuarters.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addQuarters: () => (/* binding */ addQuarters),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addMonths.mjs");


/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of quarters to be added.
 *
 * @returns The new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
function addQuarters(date, amount) {
  const months = amount * 3;
  return (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__.addMonths)(date, months);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addQuarters);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addYears.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addYears.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addYears: () => (/* binding */ addYears),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addMonths.mjs");


/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears(date, amount) {
  return (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__.addMonths)(date, amount * 12);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addYears);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constants.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constants.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/eachDayOfInterval.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/eachDayOfInterval.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   eachDayOfInterval: () => (/* binding */ eachDayOfInterval)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * The {@link eachDayOfInterval} function options.
 */

/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of days from the day of the interval start to the day of the interval end
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDayOfInterval(interval, options) {
  const startDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.start);
  const endDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.end);

  let reversed = +startDate > +endDate;
  const endTime = reversed ? +startDate : +endDate;
  const currentDate = reversed ? endDate : startDate;
  currentDate.setHours(0, 0, 0, 0);

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+currentDate <= endTime) {
    dates.push((0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }

  return reversed ? dates.reverse() : dates;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eachDayOfInterval);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/eachQuarterOfInterval.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/eachQuarterOfInterval.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   eachQuarterOfInterval: () => (/* binding */ eachQuarterOfInterval)
/* harmony export */ });
/* harmony import */ var _addQuarters_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addQuarters.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addQuarters.mjs");
/* harmony import */ var _startOfQuarter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfQuarter.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfQuarter.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");




/**
 * The {@link eachQuarterOfInterval} function options.
 */

/**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval
 *
 * @returns The array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * const result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */
function eachQuarterOfInterval(interval, options) {
  const startDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.start);
  const endDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(interval.end);

  let reversed = +startDate > +endDate;
  const endTime = reversed
    ? +(0,_startOfQuarter_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfQuarter)(startDate)
    : +(0,_startOfQuarter_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfQuarter)(endDate);
  let currentDate = reversed
    ? (0,_startOfQuarter_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfQuarter)(endDate)
    : (0,_startOfQuarter_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfQuarter)(startDate);

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+currentDate <= endTime) {
    dates.push((0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(currentDate));
    currentDate = (0,_addQuarters_mjs__WEBPACK_IMPORTED_MODULE_2__.addQuarters)(currentDate, step);
  }

  return reversed ? dates.reverse() : dates;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eachQuarterOfInterval);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/endOfQuarter.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/endOfQuarter.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   endOfQuarter: () => (/* binding */ endOfQuarter)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a quarter
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * const result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfQuarter(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const currentMonth = _date.getMonth();
  const month = currentMonth - (currentMonth % 3) + 3;
  _date.setMonth(month, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfQuarter);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/endOfWeek.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/endOfWeek.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   endOfWeek: () => (/* binding */ endOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link endOfWeek} function options.
 */

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);

  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfWeek);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/endOfYear.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/endOfYear.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   endOfYear: () => (/* binding */ endOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();
  _date.setFullYear(year + 1, 0, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfYear);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/format.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/format.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDay.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDay.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDay: () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const day = _date.getDay();
  return day;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDay);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDaysInMonth.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDaysInMonth.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDaysInMonth: () => (/* binding */ getDaysInMonth)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");



/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDaysInMonth);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDefaultOptions.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDefaultOptions.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/defaultOptions.mjs");


/**
 * @name getDefaultOptions
 * @category Common Helpers
 * @summary Get default options.
 * @pure false
 *
 * @description
 * Returns an object that contains defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
 *
 * @returns The default options
 *
 * @example
 * const result = getDefaultOptions()
 * //=> {}
 *
 * @example
 * setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
 * const result = getDefaultOptions()
 * //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
 */
function getDefaultOptions() {
  return Object.assign({}, (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDefaultOptions);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getHours.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getHours.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getHours: () => (/* binding */ getHours)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const hours = _date.getHours();
  return hours;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHours);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISODay.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISODay.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISODay: () => (/* binding */ getISODay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  let day = _date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISODay);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getMinutes.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getMinutes.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getMinutes: () => (/* binding */ getMinutes)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const minutes = _date.getMinutes();
  return minutes;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMinutes);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getMonth.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getMonth.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getMonth: () => (/* binding */ getMonth)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The month
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const month = _date.getMonth();
  return month;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMonth);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getQuarter.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getQuarter.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getQuarter: () => (/* binding */ getQuarter)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const quarter = Math.trunc(_date.getMonth() / 3) + 1;
  return quarter;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getQuarter);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getSeconds.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getSeconds.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getSeconds: () => (/* binding */ getSeconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const seconds = _date.getSeconds();
  return seconds;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSeconds);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getWeek.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getWeek.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getYear.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getYear.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getYear: () => (/* binding */ getYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear(date) {
  return (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date).getFullYear();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getYear);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isAfter.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isAfter.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isAfter: () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return _date.getTime() > _dateToCompare.getTime();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAfter);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isBefore.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isBefore.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBefore: () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return +_date < +_dateToCompare;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBefore);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isDate.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isDate.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isEqual.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isEqual.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isEqual: () => (/* binding */ isEqual)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual(leftDate, rightDate) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(leftDate);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(rightDate);
  return +_dateLeft === +_dateRight;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEqual);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isSameQuarter.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isSameQuarter.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameQuarter: () => (/* binding */ isSameQuarter)
/* harmony export */ });
/* harmony import */ var _startOfQuarter_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfQuarter.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfQuarter.mjs");


/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same quarter (and year)?
 *
 * @description
 * Are the given dates in the same quarter (and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same quarter (and year)
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameQuarter(dateLeft, dateRight) {
  const dateLeftStartOfQuarter = (0,_startOfQuarter_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfQuarter)(dateLeft);
  const dateRightStartOfQuarter = (0,_startOfQuarter_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfQuarter)(dateRight);

  return +dateLeftStartOfQuarter === +dateRightStartOfQuarter;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameQuarter);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isValid.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isValid.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parsers: () => (/* reexport safe */ _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__.parsers)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getDefaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDefaultOptions.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDefaultOptions.mjs");
/* harmony import */ var _locale_en_US_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale/en-US.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse/_lib/parsers.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers.mjs");
/* harmony import */ var _parse_lib_Setter_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parse/_lib/Setter.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Setter.mjs");









// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


/**
 * The {@link parse} function options.
 */

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;

const notWhitespaceRegExp = /\S/;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateStr - The string to parse
 * @param formatStr - The string of tokens
 * @param referenceDate - defines values missing from the parsed dateString
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns The parsed date
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dateStr, formatStr, referenceDate, options) {
  const defaultOptions = (0,_getDefaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _locale_en_US_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  if (formatStr === "") {
    if (dateStr === "") {
      return (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(referenceDate);
    } else {
      return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
    }
  }

  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  // If timezone isn't specified, it will be set to the system timezone
  const setters = [new _parse_lib_Setter_mjs__WEBPACK_IMPORTED_MODULE_6__.DateToSystemTimezoneSetter()];

  const tokens = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter in _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters) {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp);

  const usedTokens = [];

  for (let token of tokens) {
    if (
      !options?.useAdditionalWeekYearTokens &&
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.isProtectedWeekYearToken)(token)
    ) {
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }
    if (
      !options?.useAdditionalDayOfYearTokens &&
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.isProtectedDayOfYearToken)(token)
    ) {
      (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_7__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }

    const firstCharacter = token[0];
    const parser = _parse_lib_parsers_mjs__WEBPACK_IMPORTED_MODULE_1__.parsers[firstCharacter];
    if (parser) {
      const { incompatibleTokens } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(
          (usedToken) =>
            incompatibleTokens.includes(usedToken.token) ||
            usedToken.token === firstCharacter,
        );
        if (incompatibleToken) {
          throw new RangeError(
            `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`,
          );
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(
          `The format string mustn't contain \`${token}\` and any other token at the same time`,
        );
      }

      usedTokens.push({ token: firstCharacter, fullToken: token });

      const parseResult = parser.run(
        dateStr,
        token,
        locale.match,
        subFnOptions,
      );

      if (!parseResult) {
        return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
      }

      setters.push(parseResult.setter);

      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
  }

  const uniquePrioritySetters = setters
    .map((setter) => setter.priority)
    .sort((a, b) => b - a)
    .filter((priority, index, array) => array.indexOf(priority) === index)
    .map((priority) =>
      setters
        .filter((setter) => setter.priority === priority)
        .sort((a, b) => b.subPriority - a.subPriority),
    )
    .map((setterArray) => setterArray[0]);

  let date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(referenceDate);

  if (isNaN(date.getTime())) {
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
  }

  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, NaN);
    }

    const result = setter.set(date, flags, subFnOptions);
    // Result is tuple (date, flags)
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
      // Result is date
    } else {
      date = result;
    }
  }

  return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.constructFrom)(referenceDate, date);
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _Setter_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setter.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Setter.mjs");


class Parser {
  run(dateString, token, match, options) {
    const result = this.parse(dateString, token, match, options);
    if (!result) {
      return null;
    }

    return {
      setter: new _Setter_mjs__WEBPACK_IMPORTED_MODULE_0__.ValueSetter(
        result.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority,
      ),
      rest: result.rest,
    };
  }

  validate(_utcDate, _value, _options) {
    return true;
  }
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Setter.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Setter.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateToSystemTimezoneSetter: () => (/* binding */ DateToSystemTimezoneSetter),
/* harmony export */   Setter: () => (/* binding */ Setter),
/* harmony export */   ValueSetter: () => (/* binding */ ValueSetter)
/* harmony export */ });
/* harmony import */ var _transpose_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transpose.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/transpose.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");



const TIMEZONE_UNIT_PRIORITY = 10;

class Setter {
  subPriority = 0;

  validate(_utcDate, _options) {
    return true;
  }
}

class ValueSetter extends Setter {
  constructor(
    value,

    validateValue,

    setValue,

    priority,
    subPriority,
  ) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }

  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }

  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
}

class DateToSystemTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, (0,_transpose_mjs__WEBPACK_IMPORTED_MODULE_1__.transpose)(date, Date));
  }
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numericPatterns: () => (/* binding */ numericPatterns),
/* harmony export */   timezonePatterns: () => (/* binding */ timezonePatterns)
/* harmony export */ });
const numericPatterns = {
  month: /^(1[0-2]|0?\d)/, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/, // 0 to 12
  minute: /^[0-5]?\d/, // 0 to 59
  second: /^[0-5]?\d/, // 0 to 59

  singleDigit: /^\d/, // 0 to 9
  twoDigits: /^\d{1,2}/, // 0 to 99
  threeDigits: /^\d{1,3}/, // 0 to 999
  fourDigits: /^\d{1,4}/, // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/, // 0 to 9999, -0 to -9999
};

const timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
};


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsers: () => (/* binding */ parsers)
/* harmony export */ });
/* harmony import */ var _parsers_EraParser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/EraParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/EraParser.mjs");
/* harmony import */ var _parsers_YearParser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers/YearParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/YearParser.mjs");
/* harmony import */ var _parsers_LocalWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers/LocalWeekYearParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs");
/* harmony import */ var _parsers_ISOWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ISOWeekYearParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs");
/* harmony import */ var _parsers_ExtendedYearParser_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/ExtendedYearParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs");
/* harmony import */ var _parsers_QuarterParser_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/QuarterParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs");
/* harmony import */ var _parsers_StandAloneQuarterParser_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/StandAloneQuarterParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs");
/* harmony import */ var _parsers_MonthParser_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/MonthParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs");
/* harmony import */ var _parsers_StandAloneMonthParser_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/StandAloneMonthParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs");
/* harmony import */ var _parsers_LocalWeekParser_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/LocalWeekParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs");
/* harmony import */ var _parsers_ISOWeekParser_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/ISOWeekParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs");
/* harmony import */ var _parsers_DateParser_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/DateParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DateParser.mjs");
/* harmony import */ var _parsers_DayOfYearParser_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/DayOfYearParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs");
/* harmony import */ var _parsers_DayParser_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/DayParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DayParser.mjs");
/* harmony import */ var _parsers_LocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/LocalDayParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs");
/* harmony import */ var _parsers_StandAloneLocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/StandAloneLocalDayParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs");
/* harmony import */ var _parsers_ISODayParser_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parsers/ISODayParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs");
/* harmony import */ var _parsers_AMPMParser_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parsers/AMPMParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs");
/* harmony import */ var _parsers_AMPMMidnightParser_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parsers/AMPMMidnightParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs");
/* harmony import */ var _parsers_DayPeriodParser_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parsers/DayPeriodParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs");
/* harmony import */ var _parsers_Hour1to12Parser_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parsers/Hour1to12Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs");
/* harmony import */ var _parsers_Hour0to23Parser_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parsers/Hour0to23Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs");
/* harmony import */ var _parsers_Hour0To11Parser_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parsers/Hour0To11Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs");
/* harmony import */ var _parsers_Hour1To24Parser_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./parsers/Hour1To24Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs");
/* harmony import */ var _parsers_MinuteParser_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./parsers/MinuteParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs");
/* harmony import */ var _parsers_SecondParser_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./parsers/SecondParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs");
/* harmony import */ var _parsers_FractionOfSecondParser_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./parsers/FractionOfSecondParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs");
/* harmony import */ var _parsers_ISOTimezoneWithZParser_mjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./parsers/ISOTimezoneWithZParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs");
/* harmony import */ var _parsers_ISOTimezoneParser_mjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./parsers/ISOTimezoneParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs");
/* harmony import */ var _parsers_TimestampSecondsParser_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./parsers/TimestampSecondsParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs");
/* harmony import */ var _parsers_TimestampMillisecondsParser_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./parsers/TimestampMillisecondsParser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs");
































/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- It's ok, we want any here
const parsers = {
  G: new _parsers_EraParser_mjs__WEBPACK_IMPORTED_MODULE_0__.EraParser(),
  y: new _parsers_YearParser_mjs__WEBPACK_IMPORTED_MODULE_1__.YearParser(),
  Y: new _parsers_LocalWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_2__.LocalWeekYearParser(),
  R: new _parsers_ISOWeekYearParser_mjs__WEBPACK_IMPORTED_MODULE_3__.ISOWeekYearParser(),
  u: new _parsers_ExtendedYearParser_mjs__WEBPACK_IMPORTED_MODULE_4__.ExtendedYearParser(),
  Q: new _parsers_QuarterParser_mjs__WEBPACK_IMPORTED_MODULE_5__.QuarterParser(),
  q: new _parsers_StandAloneQuarterParser_mjs__WEBPACK_IMPORTED_MODULE_6__.StandAloneQuarterParser(),
  M: new _parsers_MonthParser_mjs__WEBPACK_IMPORTED_MODULE_7__.MonthParser(),
  L: new _parsers_StandAloneMonthParser_mjs__WEBPACK_IMPORTED_MODULE_8__.StandAloneMonthParser(),
  w: new _parsers_LocalWeekParser_mjs__WEBPACK_IMPORTED_MODULE_9__.LocalWeekParser(),
  I: new _parsers_ISOWeekParser_mjs__WEBPACK_IMPORTED_MODULE_10__.ISOWeekParser(),
  d: new _parsers_DateParser_mjs__WEBPACK_IMPORTED_MODULE_11__.DateParser(),
  D: new _parsers_DayOfYearParser_mjs__WEBPACK_IMPORTED_MODULE_12__.DayOfYearParser(),
  E: new _parsers_DayParser_mjs__WEBPACK_IMPORTED_MODULE_13__.DayParser(),
  e: new _parsers_LocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_14__.LocalDayParser(),
  c: new _parsers_StandAloneLocalDayParser_mjs__WEBPACK_IMPORTED_MODULE_15__.StandAloneLocalDayParser(),
  i: new _parsers_ISODayParser_mjs__WEBPACK_IMPORTED_MODULE_16__.ISODayParser(),
  a: new _parsers_AMPMParser_mjs__WEBPACK_IMPORTED_MODULE_17__.AMPMParser(),
  b: new _parsers_AMPMMidnightParser_mjs__WEBPACK_IMPORTED_MODULE_18__.AMPMMidnightParser(),
  B: new _parsers_DayPeriodParser_mjs__WEBPACK_IMPORTED_MODULE_19__.DayPeriodParser(),
  h: new _parsers_Hour1to12Parser_mjs__WEBPACK_IMPORTED_MODULE_20__.Hour1to12Parser(),
  H: new _parsers_Hour0to23Parser_mjs__WEBPACK_IMPORTED_MODULE_21__.Hour0to23Parser(),
  K: new _parsers_Hour0To11Parser_mjs__WEBPACK_IMPORTED_MODULE_22__.Hour0To11Parser(),
  k: new _parsers_Hour1To24Parser_mjs__WEBPACK_IMPORTED_MODULE_23__.Hour1To24Parser(),
  m: new _parsers_MinuteParser_mjs__WEBPACK_IMPORTED_MODULE_24__.MinuteParser(),
  s: new _parsers_SecondParser_mjs__WEBPACK_IMPORTED_MODULE_25__.SecondParser(),
  S: new _parsers_FractionOfSecondParser_mjs__WEBPACK_IMPORTED_MODULE_26__.FractionOfSecondParser(),
  X: new _parsers_ISOTimezoneWithZParser_mjs__WEBPACK_IMPORTED_MODULE_27__.ISOTimezoneWithZParser(),
  x: new _parsers_ISOTimezoneParser_mjs__WEBPACK_IMPORTED_MODULE_28__.ISOTimezoneParser(),
  t: new _parsers_TimestampSecondsParser_mjs__WEBPACK_IMPORTED_MODULE_29__.TimestampSecondsParser(),
  T: new _parsers_TimestampMillisecondsParser_mjs__WEBPACK_IMPORTED_MODULE_30__.TimestampMillisecondsParser(),
};


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.mjs ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMMidnightParser: () => (/* binding */ AMPMMidnightParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");



class AMPMMidnightParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/AMPMParser.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMParser: () => (/* binding */ AMPMParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");



class AMPMParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DateParser.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DateParser.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateParser: () => (/* binding */ DateParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];

// Day of the month
class DateParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;
  subPriority = 1;

  parse(dateString, token, match) {
    switch (token) {
      case "d":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isLeapYearIndex)(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }

  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayOfYearParser: () => (/* binding */ DayOfYearParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




class DayOfYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  subpriority = 1;

  parse(dateString, token, match) {
    switch (token) {
      case "D":
      case "DD":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.isLeapYearIndex)(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }

  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DayParser.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DayParser.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayParser: () => (/* binding */ DayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");



// Day of week
class DayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // T
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return (
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // Tuesday
      case "EEEE":
      default:
        return (
          match.day(dateString, { width: "wide", context: "formatting" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_1__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayPeriodParser: () => (/* binding */ DayPeriodParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");



// in the morning, in the afternoon, in the evening, at night
class DayPeriodParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "BBBBB":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/EraParser.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/EraParser.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EraParser: () => (/* binding */ EraParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");


class EraParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 140;

  parse(dateString, token, match) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return (
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );

      // A, B
      case "GGGGG":
        return match.era(dateString, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return (
          match.era(dateString, { width: "wide" }) ||
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );
    }
  }

  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["R", "u", "t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.mjs ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtendedYearParser: () => (/* binding */ ExtendedYearParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");



class ExtendedYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "u") {
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(4, dateString);
    }

    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(token.length, dateString);
  }

  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.mjs ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FractionOfSecondParser: () => (/* binding */ FractionOfSecondParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");



class FractionOfSecondParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 30;

  parse(dateString, token) {
    const valueCallback = (value) =>
      Math.trunc(value * Math.pow(10, -token.length + 3));
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
  }

  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0To11Parser: () => (/* binding */ Hour0To11Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




class Hour0To11Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "K":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour11h, dateString);
      case "Ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["h", "H", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0to23Parser: () => (/* binding */ Hour0to23Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




class Hour0to23Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "H":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour23h, dateString);
      case "Ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 23;
  }

  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1To24Parser: () => (/* binding */ Hour1To24Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




class Hour1To24Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "k":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 24;
  }

  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1to12Parser: () => (/* binding */ Hour1to12Parser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




class Hour1to12Parser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.hour12h, dateString);
      case "ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 12;
  }

  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["H", "K", "k", "t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISODayParser.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISODayParser: () => (/* binding */ ISODayParser)
/* harmony export */ });
/* harmony import */ var _setISODay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setISODay.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setISODay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




// ISO day of week
class ISODayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match) {
    const valueCallback = (value) => {
      if (value === 0) {
        return 7;
      }
      return value;
    };

    switch (token) {
      // 2
      case "i":
      case "ii": // 02
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 2nd
      case "io":
        return match.ordinalNumber(dateString, { unit: "day" });
      // Tue
      case "iii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "short",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
      // T
      case "iiiii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "narrow",
            context: "formatting",
          }),
          valueCallback,
        );
      // Tu
      case "iiiiii":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "short",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
      // Tuesday
      case "iiii":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.day(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "abbreviated",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "short",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 7;
  }

  set(date, _flags, value) {
    date = (0,_setISODay_mjs__WEBPACK_IMPORTED_MODULE_2__.setISODay)(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneParser: () => (/* binding */ ISOTimezoneParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");






// Timezone (ISO-8601)
class ISOTimezoneParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "x":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "xx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basic, dateString);
      case "xxxx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "xxxxx":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "xxx":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(
      date,
      date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__.getTimezoneOffsetInMilliseconds)(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "X"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.mjs ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneWithZParser: () => (/* binding */ ISOTimezoneWithZParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");






// Timezone (ISO-8601. +00:00 is `'Z'`)
class ISOTimezoneWithZParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "X":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "XX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basic, dateString);
      case "XXXX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "XXXXX":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(
          _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "XXX":
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseTimezonePattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(
      date,
      date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_4__.getTimezoneOffsetInMilliseconds)(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "x"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekParser: () => (/* binding */ ISOWeekParser)
/* harmony export */ });
/* harmony import */ var _setISOWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../setISOWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setISOWeek.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfISOWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");






// ISO week of year
class ISOWeekParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 100;

  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value) {
    return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfISOWeek)((0,_setISOWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.setISOWeek)(date, value));
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekYearParser: () => (/* binding */ ISOWeekYearParser)
/* harmony export */ });
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfISOWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");





// ISO week-numbering year
class ISOWeekYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "R") {
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(4, dateString);
    }

    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigitsSigned)(token.length, dateString);
  }

  set(date, _flags, value) {
    const firstWeekOfYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfISOWeek)(firstWeekOfYear);
  }

  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/LocalDayParser.mjs ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalDayParser: () => (/* binding */ LocalDayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




// Local day of week
class LocalDayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays;
    };

    switch (token) {
      // 3
      case "e":
      case "ee": // 03
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "day",
          }),
          valueCallback,
        );
      // Tue
      case "eee":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // T
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return (
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // Tuesday
      case "eeee":
      default:
        return (
          match.day(dateString, { width: "wide", context: "formatting" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_2__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekParser: () => (/* binding */ LocalWeekParser)
/* harmony export */ });
/* harmony import */ var _setWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../setWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setWeek.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");






// Local week of year
class LocalWeekParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 100;

  parse(dateString, token, match) {
    switch (token) {
      case "w":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.week, dateString);
      case "wo":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value, options) {
    return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)((0,_setWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.setWeek)(date, value, options), options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.mjs ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekYearParser: () => (/* binding */ LocalWeekYearParser)
/* harmony export */ });
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../getWeekYear.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../startOfWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");





// Local week-numbering year
class LocalWeekYearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;

  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "YY",
    });

    switch (token) {
      case "Y":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(4, dateString), valueCallback);
      case "Yo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value, options) {
    const currentYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.getWeekYear)(date, options);

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.normalizeTwoDigitYear)(
        value.year,
        currentYear,
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate,
      );
      date.setHours(0, 0, 0, 0);
      return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(date, options);
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(date, options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/MinuteParser.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinuteParser: () => (/* binding */ MinuteParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




class MinuteParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 60;

  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, { unit: "minute" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/MonthParser.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthParser: () => (/* binding */ MonthParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




class MonthParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];

  priority = 110;

  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;

    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.month, dateString),
          valueCallback,
        );
      // 01, 02, ..., 12
      case "MM":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "month",
          }),
          valueCallback,
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return (
          match.month(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.month(dateString, { width: "narrow", context: "formatting" })
        );

      // J, F, ..., D
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return (
          match.month(dateString, { width: "wide", context: "formatting" }) ||
          match.month(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.month(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/QuarterParser.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuarterParser: () => (/* binding */ QuarterParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");



class QuarterParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 120;

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ": // 01, 02, 03, 04
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return (
          match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return (
          match.quarter(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/SecondParser.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecondParser: () => (/* binding */ SecondParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




class SecondParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 50;

  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.second, dateString);
      case "so":
        return match.ordinalNumber(dateString, { unit: "second" });
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.mjs ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneLocalDayParser: () => (/* binding */ StandAloneLocalDayParser)
/* harmony export */ });
/* harmony import */ var _setDay_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setDay.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setDay.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




// Stand-alone local day of week
class StandAloneLocalDayParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 90;

  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays;
    };

    switch (token) {
      // 3
      case "c":
      case "cc": // 03
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "day",
          }),
          valueCallback,
        );
      // Tue
      case "ccc":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );

      // T
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return (
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );

      // Tuesday
      case "cccc":
      default:
        return (
          match.day(dateString, { width: "wide", context: "standalone" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = (0,_setDay_mjs__WEBPACK_IMPORTED_MODULE_2__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.mjs ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneMonthParser: () => (/* binding */ StandAloneMonthParser)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




class StandAloneMonthParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 110;

  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;

    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNumericPattern)(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.numericPatterns.month, dateString),
          valueCallback,
        );
      // 01, 02, ..., 12
      case "LL":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "month",
          }),
          valueCallback,
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return (
          match.month(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.month(dateString, { width: "narrow", context: "standalone" })
        );

      // J, F, ..., D
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return (
          match.month(dateString, { width: "wide", context: "standalone" }) ||
          match.month(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.month(dateString, { width: "narrow", context: "standalone" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.mjs ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneQuarterParser: () => (/* binding */ StandAloneQuarterParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");



class StandAloneQuarterParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 120;

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq": // 01, 02, 03, 04
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return (
          match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "standalone",
          })
        );

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return (
          match.quarter(dateString, {
            width: "wide",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "standalone",
          })
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.mjs ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampMillisecondsParser: () => (/* binding */ TimestampMillisecondsParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




class TimestampMillisecondsParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 20;

  parse(dateString) {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseAnyDigitsSigned)(dateString);
  }

  set(date, _flags, value) {
    return [(0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, value), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.mjs ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampSecondsParser: () => (/* binding */ TimestampSecondsParser)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");




class TimestampSecondsParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 40;

  parse(dateString) {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseAnyDigitsSigned)(dateString);
  }

  set(date, _flags, value) {
    return [(0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, value * 1000), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/YearParser.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/parsers/YearParser.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YearParser: () => (/* binding */ YearParser)
/* harmony export */ });
/* harmony import */ var _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/Parser.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs");



// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
class YearParser extends _Parser_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];

  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "yy",
    });

    switch (token) {
      case "y":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(4, dateString), valueCallback);
      case "yo":
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      default:
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.mapValue)((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value) {
    const currentYear = date.getFullYear();

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.normalizeTwoDigitYear)(
        value.year,
        currentYear,
      );
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/utils.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dayPeriodEnumToHours: () => (/* binding */ dayPeriodEnumToHours),
/* harmony export */   isLeapYearIndex: () => (/* binding */ isLeapYearIndex),
/* harmony export */   mapValue: () => (/* binding */ mapValue),
/* harmony export */   normalizeTwoDigitYear: () => (/* binding */ normalizeTwoDigitYear),
/* harmony export */   parseAnyDigitsSigned: () => (/* binding */ parseAnyDigitsSigned),
/* harmony export */   parseNDigits: () => (/* binding */ parseNDigits),
/* harmony export */   parseNDigitsSigned: () => (/* binding */ parseNDigitsSigned),
/* harmony export */   parseNumericPattern: () => (/* binding */ parseNumericPattern),
/* harmony export */   parseTimezonePattern: () => (/* binding */ parseTimezonePattern)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constants.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/parse/_lib/constants.mjs");



function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }

  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest,
  };
}

function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length),
  };
}

function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  // Input is 'Z'
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1),
    };
  }

  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;

  return {
    value:
      sign *
      (hours * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour +
        minutes * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute +
        seconds * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length),
  };
}

function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.anyDigitsSigned, dateString);
}

function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}

function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(_constants_mjs__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}

function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;

  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/set.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/set.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _setMonth_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setMonth.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setMonth.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");




/**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param values - The date values to be set
 *
 * @returns The new date with options set
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */

function set(date, values) {
  let _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(+_date)) {
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  }

  if (values.year != null) {
    _date.setFullYear(values.year);
  }

  if (values.month != null) {
    _date = (0,_setMonth_mjs__WEBPACK_IMPORTED_MODULE_2__.setMonth)(_date, values.month);
  }

  if (values.date != null) {
    _date.setDate(values.date);
  }

  if (values.hours != null) {
    _date.setHours(values.hours);
  }

  if (values.minutes != null) {
    _date.setMinutes(values.minutes);
  }

  if (values.seconds != null) {
    _date.setSeconds(values.seconds);
  }

  if (values.milliseconds != null) {
    _date.setMilliseconds(values.milliseconds);
  }

  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (set);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setDay.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setDay.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setDay: () => (/* binding */ setDay)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addDays.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/defaultOptions.mjs");




/**
 * The {@link setDay} function options.
 */

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(date, day, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const currentDay = _date.getDay();

  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;

  const delta = 7 - weekStartsOn;
  const diff =
    day < 0 || day > 6
      ? day - ((currentDay + delta) % 7)
      : ((dayIndex + delta) % 7) - ((currentDay + delta) % 7);
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(_date, diff);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setDay);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setHours.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setHours.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setHours: () => (/* binding */ setHours)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param hours - The hours of the new date
 *
 * @returns The new date with the hours set
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours(date, hours) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(hours);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setHours);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setISODay.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setISODay.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setISODay: () => (/* binding */ setISODay)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addDays.mjs");
/* harmony import */ var _getISODay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISODay.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISODay.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");




/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 *
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(date, day) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const currentDay = (0,_getISODay_mjs__WEBPACK_IMPORTED_MODULE_1__.getISODay)(_date);
  const diff = day - currentDay;
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(_date, diff);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setISODay);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setISOWeek.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setISOWeek.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setISOWeek: () => (/* binding */ setISOWeek)
/* harmony export */ });
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISOWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");



/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(date, week) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.getISOWeek)(_date) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setISOWeek);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setMilliseconds.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setMilliseconds.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setMilliseconds: () => (/* binding */ setMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name setMilliseconds
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param milliseconds - The milliseconds of the new date
 *
 * @returns The new date with the milliseconds set
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * const result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */
function setMilliseconds(date, milliseconds) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setMilliseconds(milliseconds);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setMilliseconds);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setMinutes.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setMinutes.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setMinutes: () => (/* binding */ setMinutes)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param minutes - The minutes of the new date
 *
 * @returns The new date with the minutes set
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes(date, minutes) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setMinutes(minutes);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setMinutes);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setMonth.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setMonth.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setMonth: () => (/* binding */ setMonth)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getDaysInMonth_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDaysInMonth.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getDaysInMonth.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");




/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param month - The month of the new date
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth(date, month) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();
  const day = _date.getDate();

  const dateWithDesiredMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  const daysInMonth = (0,_getDaysInMonth_mjs__WEBPACK_IMPORTED_MODULE_2__.getDaysInMonth)(dateWithDesiredMonth);
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setMonth);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setSeconds.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setSeconds.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setSeconds: () => (/* binding */ setSeconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param seconds - The seconds of the new date
 *
 * @returns The new date with the seconds set
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds(date, seconds) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setSeconds(seconds);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setSeconds);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setWeek.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setWeek.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setWeek: () => (/* binding */ setWeek)
/* harmony export */ });
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");



/**
 * The {@link setWeek} function options.
 */

/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param week - The week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week set
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * const result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * const result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */
function setWeek(date, week, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeek)(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setWeek);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setYear.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/setYear.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setYear: () => (/* binding */ setYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");



/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear(date, year) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(+_date)) {
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  }

  _date.setFullYear(year);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setYear);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfDay.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfQuarter.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfQuarter.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfQuarter: () => (/* binding */ startOfQuarter)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");


/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
function startOfQuarter(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const currentMonth = _date.getMonth();
  const month = currentMonth - (currentMonth % 3);
  _date.setMonth(month, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfQuarter);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfYear.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/sub.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/sub.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   sub: () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _subDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subDays.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/subDays.mjs");
/* harmony import */ var _subMonths_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subMonths.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/subMonths.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");




/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds subtracted
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */
function sub(date, duration) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Subtract years and months
  const dateWithoutMonths = (0,_subMonths_mjs__WEBPACK_IMPORTED_MODULE_0__.subMonths)(date, months + years * 12);

  // Subtract weeks and days
  const dateWithoutDays = (0,_subDays_mjs__WEBPACK_IMPORTED_MODULE_1__.subDays)(dateWithoutMonths, days + weeks * 7);

  // Subtract hours, minutes and seconds
  const minutestoSub = minutes + hours * 60;
  const secondstoSub = seconds + minutestoSub * 60;
  const mstoSub = secondstoSub * 1000;
  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, dateWithoutDays.getTime() - mstoSub);

  return finalDate;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sub);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/subDays.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/subDays.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   subDays: () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addDays.mjs");


/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be subtracted.
 *
 * @returns The new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(date, amount) {
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_0__.addDays)(date, -amount);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subDays);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/subMonths.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/subMonths.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   subMonths: () => (/* binding */ subMonths)
/* harmony export */ });
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addMonths.mjs");


/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be subtracted.
 *
 * @returns The new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(date, amount) {
  return (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__.addMonths)(date, -amount);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subMonths);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/subYears.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/subYears.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   subYears: () => (/* binding */ subYears)
/* harmony export */ });
/* harmony import */ var _addYears_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addYears.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/addYears.mjs");


/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be subtracted.
 *
 * @returns The new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears(date, amount) {
  return (0,_addYears_mjs__WEBPACK_IMPORTED_MODULE_0__.addYears)(date, -amount);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subYears);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/toDate.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/transpose.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/transpose.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/@vuepic/vue-datepicker/node_modules/date-fns/constructFrom.mjs");


/**
 * @name transpose
 * @category Generic Helpers
 * @summary Transpose the date to the given constructor.
 *
 * @description
 * The function transposes the date to the given constructor. It helps you
 * to transpose the date in the system time zone to say `UTCDate` or any other
 * date extension.
 *
 * @typeParam DateInputType - The input `Date` type derived from the passed argument.
 * @typeParam DateOutputType - The output `Date` type derived from the passed constructor.
 *
 * @param fromDate - The date to use values from
 * @param constructor - The date constructor to use
 *
 * @returns Date transposed to the given constructor
 *
 * @example
 * // Create July 10, 2022 00:00 in locale time zone
 * const date = new Date(2022, 6, 10)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
 *
 * @example
 * // Transpose the date to July 10, 2022 00:00 in UTC
 * transpose(date, UTCDate)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
 */
function transpose(fromDate, constructor) {
  const date =
    constructor instanceof Date
      ? (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(constructor, 0)
      : new constructor(0);
  date.setFullYear(
    fromDate.getFullYear(),
    fromDate.getMonth(),
    fromDate.getDate(),
  );
  date.setHours(
    fromDate.getHours(),
    fromDate.getMinutes(),
    fromDate.getSeconds(),
    fromDate.getMilliseconds(),
  );
  return date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transpose);


/***/ })

}]);