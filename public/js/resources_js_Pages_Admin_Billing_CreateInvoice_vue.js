"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Billing_CreateInvoice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Shared_Components_Popup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Components/Popup.vue */ "./resources/js/Pages/Admin/Shared/Components/Popup.vue");
/* harmony import */ var _Shared_Components_InvoiceUI_InvoiceUI_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/Components/InvoiceUI/InvoiceUI.vue */ "./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue");
/* harmony import */ var _Shared_Components_Select_Select_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Components/Select/Select.vue */ "./resources/js/Pages/Admin/Shared/Components/Select/Select.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'CreateInvoice',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var customerDropDownArea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var customerDetailsVisibility = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var customerSearch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      search: "",
      dropVisibility: false,
      customerSelected: false,
      searchAreaVisibility: true,
      showNewCustomer: false,
      addEditUserVisibility: false
    });
    var blankCustomer = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      state: "",
      country: "USA",
      zipcode: "",
      language: "English US"
    };
    var tempCustomer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(_objectSpread({}, blankCustomer));
    var dummyData = {
      servicesCategories: [{
        id: 1,
        name: "Logo Design"
      }, {
        id: 2,
        name: "Branding Collaterals"
      }, {
        id: 3,
        name: "Merchandise Printing"
      }, {
        id: 4,
        name: "Logo Animation"
      }, {
        id: 5,
        name: "Video Animation"
      }, {
        id: 6,
        name: "Website Development"
      }, {
        id: 7,
        name: "Web Addons"
      }, {
        id: 8,
        name: "Marketing Services"
      }, {
        id: 9,
        name: "Application Development"
      }, {
        id: 10,
        name: "Others"
      }],
      teams: [{
        value: 1,
        label: "Front Sales"
      }, {
        value: 2,
        label: "LogoSD"
      }, {
        value: 3,
        label: "WebSD"
      }, {
        value: 4,
        label: "Marketing"
      }, {
        value: 5,
        label: "VideoSD"
      }, {
        value: 6,
        label: "AppSD"
      }],
      salesType: [{
        value: 1,
        label: "New Sales"
      }, {
        value: 2,
        label: "Upsell"
      }],
      paymentGateway: [{
        value: 1,
        label: "Stripe LO"
      }, {
        value: 2,
        label: "Stripe Testing"
      }]
    };
    function getFormattedDate(date) {
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return date.toLocaleDateString('en-US', options);
    }
    var generateInvoiceNumber = function generateInvoiceNumber(issueDate) {
      var dateObj = new Date(issueDate);
      var year = dateObj.getFullYear();
      var month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
      var day = dateObj.getDate().toString().padStart(2, '0');
      var invoiceDateString = "".concat(year).concat(month).concat(day);
      var invoiceNumber = "INV-".concat(invoiceDateString, "-1001");
      return invoiceNumber;
    };
    var invoiceData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      customer: _objectSpread({}, blankCustomer),
      invoiceNumber: generateInvoiceNumber(getFormattedDate(new Date())),
      issueDate: getFormattedDate(new Date()),
      services: [],
      payment: {
        itemName: "",
        price: 0,
        symbol: '$',
        discount: 0,
        discountType: "$",
        grossTotal: 0
      },
      groupInfo: {
        team: 1,
        salesType: 1,
        paymentGateway: 1
      }
    });
    var customers = [{
      first_name: "abc",
      last_name: "",
      email: "abc@gmail.com",
      phone: "111-222-333",
      company: "Some Company",
      address: "Somewhere",
      city: "Some City",
      state: "Some State",
      country: "USA",
      zipcode: "51826",
      language: "English US"
    }, {
      first_name: "John",
      last_name: "Doe",
      email: "admin@gmail.com",
      phone: "111-222-333",
      company: "Some Company",
      address: "Somewhere",
      city: "Some City",
      state: "Some State",
      country: "USA",
      zipcode: "51826",
      language: "English US"
    }, {
      first_name: "John",
      last_name: "Doe",
      email: "shawn.logoorbit@gmail.com",
      phone: "111-222-333",
      company: "Some Company",
      address: "Somewhere",
      city: "Some City",
      state: "Some State",
      country: "USA",
      zipcode: "51826",
      language: "English US"
    }, {
      first_name: "Inhouse-design",
      last_name: "",
      email: "inhouseteam502@gmail.com",
      phone: "111-222-333",
      company: "Some Company",
      address: "Somewhere",
      city: "Some City",
      state: "Some State",
      country: "USA",
      zipcode: "51826",
      language: "English US"
    }];
    var customerFiltered = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var popupFunctions = {
      showDetailPopup: function showDetailPopup() {
        customerDetailsVisibility.value = true;
      },
      hideDetailPopup: function hideDetailPopup() {
        customerDetailsVisibility.value = false;
      },
      toggleBillingInfo: function toggleBillingInfo(e) {
        e.currentTarget.classList.toggle("hide");
        var inputs = e.currentTarget.parentNode.querySelectorAll('.popup-details-input');
        inputs.forEach(function (input) {
          return input.classList.toggle('d-none');
        });
      }
    };
    var customerFunctions = {
      selectCustomer: function selectCustomer(customer) {
        customerSearch.value.customerSelected = true;
        customerSearch.value.searchAreaVisibility = false;
        customerSearch.value.dropVisibility = false;
        customerSearch.value.search = "";
        invoiceData.value.customer = _objectSpread(_objectSpread({}, blankCustomer), customer);
      },
      addNewCusomerHandler: function addNewCusomerHandler() {
        customerSearch.value.addEditUserVisibility = true;
        customerSearch.value.searchAreaVisibility = false;
        tempCustomer.value = _objectSpread({}, blankCustomer);
        if (customerSearch.value.search) {
          var cname = customerSearch.value.search.split(" ");
          tempCustomer.value.first_name = cname[0];
          tempCustomer.value.last_name = cname[1];
          customerSearch.value.search = "";
        }
      },
      editCustomerHandler: function editCustomerHandler() {
        tempCustomer.value = _objectSpread({}, invoiceData.value.customer);
        customerSearch.value.addEditUserVisibility = true;
      },
      cancelUpdateHandler: function cancelUpdateHandler() {
        tempCustomer.value = _objectSpread({}, blankCustomer);
        customerSearch.value.addEditUserVisibility = false;
        if (!customerSearch.value.customerSelected) {
          customerSearch.value.searchAreaVisibility = true;
          customerSearch.value.dropVisibility = true;
        }
      },
      saveCustomerHandler: function saveCustomerHandler() {
        if (tempCustomer.value.first_name && tempCustomer.value.email) {
          customerSearch.value.customerSelected = true;
          customerSearch.value.addEditUserVisibility = false;
          invoiceData.value.customer = _objectSpread(_objectSpread({}, blankCustomer), tempCustomer.value);
        }
      },
      addAdditionalDetails: function addAdditionalDetails() {
        popupFunctions.showDetailPopup();
      }
    };
    var saveFromCustomerDetailPopup = function saveFromCustomerDetailPopup() {
      customerFunctions.saveCustomerHandler();
      popupFunctions.hideDetailPopup();
    };
    var hideCustomerDetailPopup = function hideCustomerDetailPopup() {
      tempCustomer.value = _objectSpread({}, invoiceData.value.customer);
      popupFunctions.hideDetailPopup();
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(invoiceData.value.payment, function () {
      var invoicePayment = invoiceData.value.payment;
      if (invoicePayment.discountType == "%" && invoicePayment.discount) {
        var dicountPrice = invoicePayment.price * (invoicePayment.discount / 100);
        invoiceData.value.payment.grossTotal = Math.ceil(invoicePayment.price - dicountPrice);
      } else {
        invoiceData.value.payment.grossTotal = Math.ceil(invoicePayment.price - invoicePayment.discount);
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(customerSearch.value, function (newName) {
      if (newName.searchAreaVisibility) {
        var keyword = newName.search.toLowerCase();
        var filtered = customers.filter(function (item) {
          var name = item.first_name + " " + item.last_name;
          return name.toLowerCase().indexOf(keyword) > -1;
        });
        customerFiltered.value = filtered;
      }
    });
    var closeSelectDrop = function closeSelectDrop(e) {
      if (customerSearch.value.dropVisibility && customerDropDownArea.value && !customerDropDownArea.value.contains(e.target)) {
        customerSearch.value.dropVisibility = false;
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      document.addEventListener("mousedown", closeSelectDrop);
    });
    var __returned__ = {
      customerDropDownArea: customerDropDownArea,
      customerDetailsVisibility: customerDetailsVisibility,
      customerSearch: customerSearch,
      blankCustomer: blankCustomer,
      tempCustomer: tempCustomer,
      dummyData: dummyData,
      getFormattedDate: getFormattedDate,
      generateInvoiceNumber: generateInvoiceNumber,
      invoiceData: invoiceData,
      customers: customers,
      customerFiltered: customerFiltered,
      popupFunctions: popupFunctions,
      customerFunctions: customerFunctions,
      saveFromCustomerDetailPopup: saveFromCustomerDetailPopup,
      hideCustomerDetailPopup: hideCustomerDetailPopup,
      closeSelectDrop: closeSelectDrop,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      Popup: _Shared_Components_Popup_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      InvoiceUI: _Shared_Components_InvoiceUI_InvoiceUI_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      Select: _Shared_Components_Select_Select_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'InvoiceUI',
  props: {
    customer: Object,
    invoiceNumber: String,
    issueDate: String,
    category: Array,
    payment: Object,
    groupInfo: Object,
    brand_settings: Object
  },
  setup: function setup(__props, _ref) {
    var _router$page$props$br, _router$page$props, _router$page$props$br2, _router$page$props2;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var siteURL = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return "http://127.0.0.1:8000/";
    });
    var primaryColor = (_router$page$props$br = (_router$page$props = _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.page.props) === null || _router$page$props === void 0 || (_router$page$props = _router$page$props.brand_settings) === null || _router$page$props === void 0 ? void 0 : _router$page$props.primary_color) !== null && _router$page$props$br !== void 0 ? _router$page$props$br : "#6e3cb6";
    var secondaryColor = (_router$page$props$br2 = (_router$page$props2 = _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.page.props) === null || _router$page$props2 === void 0 || (_router$page$props2 = _router$page$props2.brand_settings) === null || _router$page$props2 === void 0 ? void 0 : _router$page$props2.secondary_color) !== null && _router$page$props$br2 !== void 0 ? _router$page$props$br2 : "#000000";
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    var __returned__ = {
      props: props,
      siteURL: siteURL,
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      get router() {
        return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Popup',
  props: {
    title: String,
    visibility: Boolean,
    "class": String,
    onClose: Function,
    maxWidth: String || "450px"
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var slots = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useSlots)();
    var visibilityClass = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.visibility ? "showThis" : "");
    var onCloseFunction = props.onClose ? props.onClose : function () {
      return null;
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return props.visibility;
    }, function (newVal) {
      visibilityClass.value = props.visibility ? "showThis" : "";
    });
    var __returned__ = {
      props: props,
      slots: slots,
      visibilityClass: visibilityClass,
      onCloseFunction: onCloseFunction,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      useSlots: vue__WEBPACK_IMPORTED_MODULE_0__.useSlots
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Select',
  props: {
    options: Array,
    suffix: String,
    "class": String,
    hideArrow: Boolean,
    hideChecks: Boolean,
    modelValue: String | Number,
    disabled: Boolean,
    inputStyleDefault: {
      type: Boolean,
      "default": true
    },
    inputStyle: String,
    dropDownStyleDefault: {
      type: Boolean,
      "default": true
    },
    dropDownStyle: String
  },
  emits: ['update:modelValue'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      __emit = _ref.emit;
    __expose();
    var props = __props;
    var emit = __emit;
    var selectedLabel = function selectedLabel() {
      var value = props.modelValue;
      if (!value) return '';
      var matchedOption = props.options.find(function (option) {
        return option.value == value;
      });
      return matchedOption ? matchedOption.label : '';
    };
    var visibility = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      label: selectedLabel(),
      value: props.modelValue
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return props.modelValue;
    }, function (newValue) {
      selected.value.value = newValue;
      selected.value.label = selectedLabel();
    });
    var selectAreaRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var checkActive = function checkActive(item) {
      return selected.value.value == item.value ? 'active' : '';
    };
    var closeSelectDrop = function closeSelectDrop(e) {
      if (visibility && selectAreaRef.value && !selectAreaRef.value.contains(e.target)) {
        visibility.value = false;
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      document.addEventListener("mousedown", closeSelectDrop);
      if (props.modelValue == null || props.modelValue == "" || props.modelValue == undefined) {
        emit('update:modelValue', props.options[0].value);
      }
    });
    var selectOption = function selectOption(item) {
      selected.value = item;
      visibility.value = false;
      emit('update:modelValue', item.value);
    };
    var __returned__ = {
      props: props,
      emit: emit,
      selectedLabel: selectedLabel,
      visibility: visibility,
      selected: selected,
      selectAreaRef: selectAreaRef,
      checkActive: checkActive,
      closeSelectDrop: closeSelectDrop,
      selectOption: selectOption,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=template&id=2cd70138&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=template&id=2cd70138&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2cd70138"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "page-title-box d-sm-flex align-items-center justify-content-between",
    style: {
      "margin-bottom": "1px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": "mb-sm-0"
  }, "Create test invoice"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "page-title-right"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "btn-group float-end margin-between"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary waves-effect waves-light btn-sm",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    onclick: "window.location = 'create-billing-invoice.html'"
  }, " Review invoice ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "btn-group float-end white-background-btns margin-between"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary waves-effect waves-light btn-sm",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, " Hide Preview ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "btn-group float-end white-background-btns margin-between"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary waves-effect waves-light btn-sm",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "mdi mdi-bullhorn align-bottom me-1"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Feedback? ")])])])])])], -1 /* HOISTED */);
});
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-lg-12"
};
var _hoisted_4 = {
  "class": "card mb-0"
};
var _hoisted_5 = {
  "class": "card-body p-0"
};
var _hoisted_6 = {
  "class": "create-billing-invoice-Area"
};
var _hoisted_7 = {
  "class": "create-billing-invoice-fifty"
};
var _hoisted_8 = {
  "class": "create-billing-invoice-fiftyHolder"
};
var _hoisted_9 = {
  "class": "row"
};
var _hoisted_10 = {
  "class": "col-lg-7"
};
var _hoisted_11 = {
  "class": "row rowGap-45"
};
var _hoisted_12 = {
  "class": "col-12"
};
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "invoice-heading"
  }, "Customer", -1 /* HOISTED */);
});
var _hoisted_14 = {
  key: 0,
  "class": "customerDropDown"
};
var _hoisted_15 = {
  "class": "darkText"
};
var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "ri-add-fill"
  }, null, -1 /* HOISTED */);
});
var _hoisted_17 = {
  key: 0,
  "class": "noHover"
};
var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "heading"
  }, "Recent", -1 /* HOISTED */);
});
var _hoisted_19 = [_hoisted_18];
var _hoisted_20 = ["onClick"];
var _hoisted_21 = {
  "class": "darkText"
};
var _hoisted_22 = {
  key: 1,
  "class": "selectedCustomerArea"
};
var _hoisted_23 = {
  "class": "selectedCustomerDetail"
};
var _hoisted_24 = {
  "class": "textDark bold"
};
var _hoisted_25 = {
  "class": "textDark"
};
var _hoisted_26 = {
  "class": "selectedCustomerControls"
};
var _hoisted_27 = {
  "class": "payment-columns-filter p-0"
};
var _hoisted_28 = {
  "class": "btn-group dropdown-normal float-end create-payment-btn"
};
var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-light dropdown-toggle",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, " ... ", -1 /* HOISTED */);
});
var _hoisted_30 = {
  "class": "dropdown-menu dropdown-menu-end"
};
var _hoisted_31 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-top-caret"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "21",
    height: "9",
    role: "presentation"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
    fill: "#fff",
    "fill-rule": "evenodd"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    fill: "#fff",
    "fill-opacity": "0.1",
    d: "M1 9.092h19l-6.402-6.74c-1.717-1.806-4.485-1.8-6.196 0L1 9.093zM20.342 8l-6.02-6.336c-2.108-2.22-5.538-2.218-7.645 0L.658 8h19.684z"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    fill: "currentcolor",
    d: "M7.402 2.353c1.711-1.801 4.48-1.807 6.196 0L20 9.093H1l6.402-6.74z"
  })])])], -1 /* HOISTED */);
});
var _hoisted_32 = {
  key: 2,
  "class": ""
};
var _hoisted_33 = {
  "class": "row rowGap"
};
var _hoisted_34 = {
  "class": "col-12 col-md-6"
};
var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "First Name", -1 /* HOISTED */);
});
var _hoisted_36 = {
  "class": "col-12 col-md-6"
};
var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Last Name", -1 /* HOISTED */);
});
var _hoisted_38 = {
  "class": "col-12"
};
var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Email", -1 /* HOISTED */);
});
var _hoisted_40 = {
  "class": "col-12"
};
var _hoisted_41 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Language", -1 /* HOISTED */);
});
var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "English US"
  }, "English (United States)", -1 /* HOISTED */);
});
var _hoisted_43 = [_hoisted_42];
var _hoisted_44 = {
  "class": "col-12"
};
var _hoisted_45 = {
  "class": "col-12 d-flex justify-content-end"
};
var _hoisted_46 = {
  "class": "col-12"
};
var _hoisted_47 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "invoice-heading"
  }, "Package Information", -1 /* HOISTED */);
});
var _hoisted_48 = {
  "class": "row rowGap"
};
var _hoisted_49 = {
  "class": "col-12"
};
var _hoisted_50 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Item Name", -1 /* HOISTED */);
});
var _hoisted_51 = {
  "class": "col-12"
};
var _hoisted_52 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Item Price", -1 /* HOISTED */);
});
var _hoisted_53 = {
  "class": "input-group"
};
var _hoisted_54 = {
  "class": "input-group-text"
};
var _hoisted_55 = {
  "class": "col-12"
};
var _hoisted_56 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_57 = {
  "class": "d-flex gap-15"
};
var _hoisted_58 = {
  "class": "form-check"
};
var _hoisted_59 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-check-label",
    "for": "price"
  }, "$", -1 /* HOISTED */);
});
var _hoisted_60 = {
  "class": "form-check"
};
var _hoisted_61 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-check-label",
    "for": "percentage"
  }, "%", -1 /* HOISTED */);
});
var _hoisted_62 = {
  "class": "input-group"
};
var _hoisted_63 = {
  "class": "input-group-text"
};
var _hoisted_64 = {
  "class": "col-12"
};
var _hoisted_65 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Services", -1 /* HOISTED */);
});
var _hoisted_66 = {
  "class": "checkbox-flex gap-10-15 width150"
};
var _hoisted_67 = ["id", "value"];
var _hoisted_68 = ["for"];
var _hoisted_69 = {
  "class": "col-12"
};
var _hoisted_70 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "invoice-heading"
  }, "Group Information", -1 /* HOISTED */);
});
var _hoisted_71 = {
  "class": "row rowGap"
};
var _hoisted_72 = {
  "class": "col-12"
};
var _hoisted_73 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "placeholderInput",
    "class": "form-label"
  }, "Team", -1 /* HOISTED */);
});
var _hoisted_74 = {
  "class": "col-12"
};
var _hoisted_75 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "placeholderInput",
    "class": "form-label"
  }, "Sales Type", -1 /* HOISTED */);
});
var _hoisted_76 = {
  "class": "col-12"
};
var _hoisted_77 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "placeholderInput",
    "class": "form-label"
  }, "Payment Gateway", -1 /* HOISTED */);
});
var _hoisted_78 = {
  "class": "create-billing-invoice-fifty"
};
var _hoisted_79 = {
  "class": "create-billing-invoice-fiftyHolder"
};
var _hoisted_80 = {
  "class": "create-billing-invoice-input"
};
var _hoisted_81 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label main-label"
  }, "Preview", -1 /* HOISTED */);
});
var _hoisted_82 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav nav-tabs nav-tabs-custom nav-success border-0",
    role: "tablist"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "nav-item"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "nav-link active",
    "data-bs-toggle": "tab",
    href: "#invoice-PDF",
    role: "tab"
  }, " Invoice PDF ")])], -1 /* HOISTED */);
});
var _hoisted_83 = {
  "class": "tab-content text-muted"
};
var _hoisted_84 = {
  "class": "tab-pane active",
  id: "invoice-PDF",
  role: "tabpanel"
};
var _hoisted_85 = {
  "class": "Page-bg"
};
var _hoisted_86 = {
  "class": "live-preview"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CustomerPopup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CustomerPopup");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end page title "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Customer DropDown "), $setup.customerSearch.searchAreaVisibility ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "customerDropDownArea",
    onFocusin: _cache[2] || (_cache[2] = function ($event) {
      return $setup.customerSearch.dropVisibility = true;
    }),
    ref: "customerDropDownArea"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.customerSearch.search = $event;
    }),
    placeholder: "Find or add a customer...",
    autofocus: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.customerSearch.search]]), $setup.customerSearch.dropVisibility ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    onClick: _cache[1] || (_cache[1] = function () {
      var _$setup$customerFunct;
      return $setup.customerFunctions.addNewCusomerHandler && (_$setup$customerFunct = $setup.customerFunctions).addNewCusomerHandler.apply(_$setup$customerFunct, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(" ") + " "), $setup.customerSearch.search == '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" new customer ")], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.customerSearch.search), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))])]), $setup.customerFiltered.length || !$setup.customerSearch.search.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_17, [].concat(_hoisted_19))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.customerFiltered.length || $setup.customerSearch.search.length ? $setup.customerFiltered : $setup.customers, function (customer, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.customerFunctions.selectCustomer(customer);
      }, ["prevent"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(customer.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(customer.last_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(customer.email), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_20);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 544 /* NEED_HYDRATION, NEED_PATCH */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Selected Customer "), $setup.customerSearch.customerSelected && !$setup.customerSearch.addEditUserVisibility && !$setup.customerSearch.searchAreaVisibility ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.invoiceData.customer.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.invoiceData.customer.last_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.invoiceData.customer.email), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Language: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.invoiceData.customer.language), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#!",
    "class": "dropdown-item",
    onClick: _cache[3] || (_cache[3] = function () {
      var _$setup$customerFunct2;
      return $setup.customerFunctions.editCustomerHandler && (_$setup$customerFunct2 = $setup.customerFunctions).editCustomerHandler.apply(_$setup$customerFunct2, arguments);
    })
  }, "Edit customer information")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#!",
    "class": "dropdown-item",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      $setup.customerSearch.searchAreaVisibility = true;
      $setup.customerSearch.dropVisibility = true;
    })
  }, " Switch customer ")]), _hoisted_31])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.customerSearch.addEditUserVisibility ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "first_name",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.tempCustomer.first_name = $event;
    }),
    placeholder: "First Name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.tempCustomer.first_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "last_name",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.tempCustomer.last_name = $event;
    }),
    placeholder: "Last Name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.tempCustomer.last_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "email",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.tempCustomer.email = $event;
    }),
    placeholder: "Email"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.tempCustomer.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.tempCustomer.language = $event;
    })
  }, [].concat(_hoisted_43), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.tempCustomer.language]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "purpleTextBtn smallText p-0",
    onClick: _cache[9] || (_cache[9] = function () {
      var _$setup$customerFunct3;
      return $setup.customerFunctions.addAdditionalDetails && (_$setup$customerFunct3 = $setup.customerFunctions).addAdditionalDetails.apply(_$setup$customerFunct3, arguments);
    })
  }, "Add additional details")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "purpleTextBtn",
    onClick: _cache[10] || (_cache[10] = function () {
      var _$setup$customerFunct4;
      return $setup.customerFunctions.cancelUpdateHandler && (_$setup$customerFunct4 = $setup.customerFunctions).cancelUpdateHandler.apply(_$setup$customerFunct4, arguments);
    })
  }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary waves-effect waves-light btn-sm",
    onClick: _cache[11] || (_cache[11] = function () {
      var _$setup$customerFunct5;
      return $setup.customerFunctions.saveCustomerHandler && (_$setup$customerFunct5 = $setup.customerFunctions).saveCustomerHandler.apply(_$setup$customerFunct5, arguments);
    })
  }, "Save customer")])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Item Name",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.invoiceData.payment.itemName = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.invoiceData.payment.itemName]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.invoiceData.payment.symbol), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "form-control",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.invoiceData.payment.price = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.invoiceData.payment.price]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Discount (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.invoiceData.payment.discountType) + "):", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "radio",
    id: "price",
    value: "$",
    name: "discountType",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.invoiceData.payment.discountType = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.invoiceData.payment.discountType]]), _hoisted_59]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "radio",
    id: "percentage",
    value: "%",
    name: "discountType",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.invoiceData.payment.discountType = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.invoiceData.payment.discountType]]), _hoisted_61])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.invoiceData.payment.discountType), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "form-control",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.invoiceData.payment.discount = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.invoiceData.payment.discount]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [$setup.dummyData.servicesCategories.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.dummyData.servicesCategories, function (servicesCategory) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "form-check",
      key: servicesCategory.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "form-check-input",
      type: "checkbox",
      id: 'formCheck' + servicesCategory.id,
      "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
        return $setup.invoiceData.services = $event;
      }),
      value: servicesCategory.name
    }, null, 8 /* PROPS */, _hoisted_67), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.invoiceData.services]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "form-check-label",
      "for": 'formCheck' + servicesCategory.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(servicesCategory.name), 9 /* TEXT, PROPS */, _hoisted_68)]);
  }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [_hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Select"], {
    options: $setup.dummyData.teams,
    modelValue: $setup.invoiceData.groupInfo.team,
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.invoiceData.groupInfo.team = $event;
    })
  }, null, 8 /* PROPS */, ["options", "modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Select"], {
    options: $setup.dummyData.salesType,
    modelValue: $setup.invoiceData.groupInfo.salesType,
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $setup.invoiceData.groupInfo.salesType = $event;
    })
  }, null, 8 /* PROPS */, ["options", "modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [_hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Select"], {
    options: $setup.dummyData.paymentGateway,
    modelValue: $setup.invoiceData.groupInfo.paymentGateway,
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $setup.invoiceData.groupInfo.paymentGateway = $event;
    })
  }, null, 8 /* PROPS */, ["options", "modelValue"])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [_hoisted_81, _hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InvoiceUI"], {
    customer: $setup.invoiceData.customer,
    invoiceNumber: $setup.invoiceData.invoiceNumber,
    issueDate: $setup.invoiceData.issueDate,
    services: $setup.invoiceData.services,
    payment: $setup.invoiceData.payment,
    groupInfo: $setup.invoiceData.groupInfo
  }, null, 8 /* PROPS */, ["customer", "invoiceNumber", "issueDate", "services", "payment", "groupInfo"])])])])])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CustomerPopup, {
    title: "".concat($setup.customerSearch.customerSelected ? 'Update' : 'Create', " customer"),
    customerDetail: $setup.tempCustomer,
    popupVisibility: $setup.customerDetailsVisibility,
    hidePopup: $setup.hideCustomerDetailPopup,
    onSubmit: $setup.saveFromCustomerDetailPopup,
    isUpdate: $setup.customerSearch.customerSelected
  }, null, 8 /* PROPS */, ["title", "customerDetail", "popupVisibility", "isUpdate"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=template&id=01b726cb&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=template&id=01b726cb&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-01b726cb"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  width: "100%"
};
var _hoisted_2 = {
  width: "800",
  align: "center"
};
var _hoisted_3 = {
  cellpadding: "0",
  cellspacing: "0",
  "class": "background",
  style: {
    "width": "100%",
    "max-width": "800px"
  }
};
var _hoisted_4 = {
  width: "100%"
};
var _hoisted_5 = {
  align: "left",
  "class": "header-padding"
};
var _hoisted_6 = ["href"];
var _hoisted_7 = ["src"];
var _hoisted_8 = {
  align: "right",
  "class": "header-padding"
};
var _hoisted_9 = ["href"];
var _hoisted_10 = ["href"];
var _hoisted_11 = ["href"];
var _hoisted_12 = {
  cellpadding: "0",
  cellspacing: "0",
  "class": "white-background",
  style: {
    "width": "100%",
    "max-width": "800px"
  }
};
var _hoisted_13 = {
  "class": "customer-sec-padding"
};
var _hoisted_14 = {
  width: "100%"
};
var _hoisted_15 = {
  align: "left",
  "class": "customer-padding",
  style: {
    "width": "200px"
  }
};
var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Billed To:", -1 /* HOISTED */);
});
var _hoisted_17 = {
  align: "left",
  "class": "customer-padding"
};
var _hoisted_18 = {
  width: "100%"
};
var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Invoice No:", -1 /* HOISTED */);
});
var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Status:", -1 /* HOISTED */);
});
var _hoisted_21 = {
  key: 0
};
var _hoisted_22 = {
  style: {
    "padding-top": "20px"
  }
};
var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Issue Date:", -1 /* HOISTED */);
});
var _hoisted_24 = {
  align: "right",
  "class": "customer-padding",
  style: {
    "width": "150px"
  }
};
var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Invoice Total:", -1 /* HOISTED */);
});
var _hoisted_26 = {
  cellpadding: "0",
  cellspacing: "0",
  "class": "white-background",
  style: {
    "width": "100%",
    "max-width": "800px"
  }
};
var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
    width: "100%",
    "class": "background"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "left",
    "class": "client-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Client Information")])])])], -1 /* HOISTED */);
});
var _hoisted_28 = {
  width: "100%",
  "class": "white-background client-table",
  style: {
    "border-bottom": "1px solid #9c9c9c"
  }
};
var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "left",
    "class": "client-detail"
  }, " Full Name ", -1 /* HOISTED */);
});
var _hoisted_30 = {
  align: "left",
  "class": "client-detail"
};
var _hoisted_31 = {
  "class": "dark"
};
var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "left",
    "class": "client-detail"
  }, " Company ", -1 /* HOISTED */);
});
var _hoisted_33 = {
  align: "left",
  "class": "client-detail"
};
var _hoisted_34 = {
  key: 0
};
var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "left",
    "class": "client-detail"
  }, " Email ", -1 /* HOISTED */);
});
var _hoisted_36 = {
  align: "left",
  "class": "client-detail"
};
var _hoisted_37 = {
  key: 0
};
var _hoisted_38 = {
  "class": "dark"
};
var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "left",
    "class": "client-detail"
  }, " Phone No ", -1 /* HOISTED */);
});
var _hoisted_40 = {
  align: "left",
  "class": "client-detail"
};
var _hoisted_41 = {
  key: 0
};
var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "left",
    "class": "client-detail"
  }, " Order Category: ", -1 /* HOISTED */);
});
var _hoisted_43 = {
  align: "left",
  "class": "client-detail"
};
var _hoisted_44 = {
  key: 0
};
var _hoisted_45 = {
  align: "right",
  "class": "white-background",
  width: "100%"
};
var _hoisted_46 = {
  key: 0
};
var _hoisted_47 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "left",
    "class": "client-detail text-muted pb-0",
    width: "100px"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Total")], -1 /* HOISTED */);
});
var _hoisted_48 = {
  align: "left",
  "class": "client-detail text-muted pb-0"
};
var _hoisted_49 = {
  key: 1
};
var _hoisted_50 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "left",
    "class": "client-detail text-muted py-0",
    width: "100px"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Discount")], -1 /* HOISTED */);
});
var _hoisted_51 = {
  align: "left",
  "class": "client-detail text-muted py-0"
};
var _hoisted_52 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Grand Total", -1 /* HOISTED */);
});
var _hoisted_53 = [_hoisted_52];
var _hoisted_54 = {
  align: "right",
  "class": "white-background client-footer-table",
  width: "100%"
};
var _hoisted_55 = {
  align: "left",
  "class": "client-detail",
  width: "100px"
};
var _hoisted_56 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Questions?", -1 /* HOISTED */);
});
var _hoisted_57 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "right",
    "class": "client-detail"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "thankyou"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Thank"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("You!")])], -1 /* HOISTED */);
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$props$brand_s, _$setup$props$brand_s2, _$setup$props$brand_s3, _$setup$props$brand_s4, _$setup$props$brand_s5, _$setup$props$brand_s6, _$setup$props$brand_s7, _$setup$props$brand_s8, _$setup$props$brand_s9, _$setup$props$custome, _$setup$props$custome2, _$setup$props$custome3, _$setup$props$custome4, _$setup$props$custome5, _$setup$props$custome6, _$setup$props$custome7, _$setup$props$payment, _$setup$props$payment2, _$setup$props$custome8, _$setup$props$custome9, _$setup$props$custome10, _$setup$props$custome11, _$setup$props$custome12, _$setup$props$categor, _$setup$props$payment3, _$setup$props$payment4, _$setup$props$payment5, _$setup$props$payment6, _$setup$props$payment7, _$setup$props$payment8, _$setup$props$payment9, _$setup$props$payment10, _$setup$props$payment11, _$setup$props$payment12, _$setup$props$payment13, _$setup$props$payment14, _$setup$props$payment15, _$setup$props$brand_s10, _$setup$props$brand_s11;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $setup.siteURL,
    "class": "d-inline-block auth-logo"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.siteURL + ((_$setup$props$brand_s = (_$setup$props$brand_s2 = $setup.props.brand_settings) === null || _$setup$props$brand_s2 === void 0 ? void 0 : _$setup$props$brand_s2.logo_white) !== null && _$setup$props$brand_s !== void 0 ? _$setup$props$brand_s : (_$setup$props$brand_s3 = $setup.props.brand_settings) === null || _$setup$props$brand_s3 === void 0 ? void 0 : _$setup$props$brand_s3.logo),
    alt: "",
    width: "150"
  }, null, 8 /* PROPS */, _hoisted_7)], 8 /* PROPS */, _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a href=\"tel:917-831-1090\">917-831-1090</a>\n                                              <a href=\"mailto:info@designkix.com\">info@designkix.com</a>\n                                              <a href=\"https://www.designkix.com/\">https://www.designkix.com/</a> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: 'tel:' + ((_$setup$props$brand_s4 = $setup.props.brand_settings) === null || _$setup$props$brand_s4 === void 0 ? void 0 : _$setup$props$brand_s4.company_phone)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$brand_s5 = $setup.props.brand_settings) === null || _$setup$props$brand_s5 === void 0 ? void 0 : _$setup$props$brand_s5.company_phone), 9 /* TEXT, PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: 'mailto:' + ((_$setup$props$brand_s6 = $setup.props.brand_settings) === null || _$setup$props$brand_s6 === void 0 ? void 0 : _$setup$props$brand_s6.company_email)
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$brand_s7 = $setup.props.brand_settings) === null || _$setup$props$brand_s7 === void 0 ? void 0 : _$setup$props$brand_s7.company_email), 9 /* TEXT, PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: (_$setup$props$brand_s8 = $setup.props.brand_settings) === null || _$setup$props$brand_s8 === void 0 ? void 0 : _$setup$props$brand_s8.company_url
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$brand_s9 = $setup.props.brand_settings) === null || _$setup$props$brand_s9 === void 0 ? void 0 : _$setup$props$brand_s9.company_url), 9 /* TEXT, PROPS */, _hoisted_11)])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(_$setup$props$custome = $setup.props.customer) !== null && _$setup$props$custome !== void 0 && _$setup$props$custome.first_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.first_name), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(" ") + " "), (_$setup$props$custome2 = $setup.props.customer) !== null && _$setup$props$custome2 !== void 0 && _$setup$props$custome2.last_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.last_name), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(_$setup$props$custome3 = $setup.props.customer) !== null && _$setup$props$custome3 !== void 0 && _$setup$props$custome3.address ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.address), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (_$setup$props$custome4 = $setup.props.customer) !== null && _$setup$props$custome4 !== void 0 && _$setup$props$custome4.city ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" , " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.city), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (_$setup$props$custome5 = $setup.props.customer) !== null && _$setup$props$custome5 !== void 0 && _$setup$props$custome5.state ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" , " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.state), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (_$setup$props$custome6 = $setup.props.customer) !== null && _$setup$props$custome6 !== void 0 && _$setup$props$custome6.country && ($setup.props.customer.address || $setup.props.customer.city || $setup.props.customer.state) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 3
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" , " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.country), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (_$setup$props$custome7 = $setup.props.customer) !== null && _$setup$props$custome7 !== void 0 && _$setup$props$custome7.zipCode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 4
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" , " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.zipCode), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$setup.props.invoiceNumber ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.invoiceNumber), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.props.status ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.status), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), $setup.props.issueDate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.issueDate), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$payment = $setup.props.payment) === null || _$setup$props$payment === void 0 ? void 0 : _$setup$props$payment.symbol) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$payment2 = $setup.props.payment) === null || _$setup$props$payment2 === void 0 ? void 0 : _$setup$props$payment2.grossTotal), 1 /* TEXT */)])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(_$setup$props$custome8 = $setup.props.customer) !== null && _$setup$props$custome8 !== void 0 && _$setup$props$custome8.first_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.first_name), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(" ") + " "), (_$setup$props$custome9 = $setup.props.customer) !== null && _$setup$props$custome9 !== void 0 && _$setup$props$custome9.last_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.last_name), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, [(_$setup$props$custome10 = $setup.props.customer) !== null && _$setup$props$custome10 !== void 0 && _$setup$props$custome10.company ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.company), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, [(_$setup$props$custome11 = $setup.props.customer) !== null && _$setup$props$custome11 !== void 0 && _$setup$props$custome11.email ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.email), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_40, [(_$setup$props$custome12 = $setup.props.customer) !== null && _$setup$props$custome12 !== void 0 && _$setup$props$custome12.phone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.customer.phone), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_43, [(_$setup$props$categor = $setup.props.category) !== null && _$setup$props$categor !== void 0 && _$setup$props$categor.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.category.join(", ")), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(_$setup$props$payment3 = $setup.props.payment) !== null && _$setup$props$payment3 !== void 0 && _$setup$props$payment3.discount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$payment4 = $setup.props.payment) === null || _$setup$props$payment4 === void 0 ? void 0 : _$setup$props$payment4.symbol) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$payment5 = $setup.props.payment) === null || _$setup$props$payment5 === void 0 ? void 0 : _$setup$props$payment5.price), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (_$setup$props$payment6 = $setup.props.payment) !== null && _$setup$props$payment6 !== void 0 && _$setup$props$payment6.discount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(((_$setup$props$payment7 = $setup.props.payment) === null || _$setup$props$payment7 === void 0 ? void 0 : _$setup$props$payment7.discountType) !== "%" ? (_$setup$props$payment8 = $setup.props.payment) === null || _$setup$props$payment8 === void 0 ? void 0 : _$setup$props$payment8.discountType : "") + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$payment9 = $setup.props.payment) === null || _$setup$props$payment9 === void 0 ? void 0 : _$setup$props$payment9.discount) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(((_$setup$props$payment10 = $setup.props.payment) === null || _$setup$props$payment10 === void 0 ? void 0 : _$setup$props$payment10.discountType) == "%" ? (_$setup$props$payment11 = $setup.props.payment) === null || _$setup$props$payment11 === void 0 ? void 0 : _$setup$props$payment11.discountType : ""), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "left",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["client-detail", (_$setup$props$payment12 = $setup.props.payment) !== null && _$setup$props$payment12 !== void 0 && _$setup$props$payment12.discount ? 'pt-0' : '']),
    width: "100px"
  }, [].concat(_hoisted_53), 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    align: "left",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["client-detail", (_$setup$props$payment13 = $setup.props.payment) !== null && _$setup$props$payment13 !== void 0 && _$setup$props$payment13.discount ? 'pt-0' : ''])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$payment14 = $setup.props.payment) === null || _$setup$props$payment14 === void 0 ? void 0 : _$setup$props$payment14.symbol) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$payment15 = $setup.props.payment) === null || _$setup$props$payment15 === void 0 ? void 0 : _$setup$props$payment15.grossTotal), 1 /* TEXT */)], 2 /* CLASS */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$brand_s10 = $setup.props.brand_settings) === null || _$setup$props$brand_s10 === void 0 ? void 0 : _$setup$props$brand_s10.company_email), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$props$brand_s11 = $setup.props.brand_settings) === null || _$setup$props$brand_s11 === void 0 ? void 0 : _$setup$props$brand_s11.company_phone), 1 /* TEXT */)]), _hoisted_57])])])])])])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=template&id=118e72b8":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=template&id=118e72b8 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "popup-head"
};
var _hoisted_2 = {
  "class": "popup-body"
};
var _hoisted_3 = {
  "class": "popup-footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$props$maxWidt;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["popup-bg", "".concat($setup.props["class"], "bg ").concat($setup.visibilityClass)]),
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.onCloseFunction && $setup.onCloseFunction.apply($setup, arguments);
    })
  }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["popup-area", "".concat($setup.props["class"], " ").concat($setup.visibilityClass)]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: (_$setup$props$maxWidt = $setup.props.maxWidth) !== null && _$setup$props$maxWidt !== void 0 ? _$setup$props$maxWidt : '450px'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "head")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer")])], 6 /* CLASS, STYLE */)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=template&id=67e54607":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=template&id=67e54607 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "bx bx-chevron-down"
};
var _hoisted_2 = {
  "class": "selectDropdown"
};
var _hoisted_3 = ["onClick"];
var _hoisted_4 = {
  key: 0,
  "class": "bx bx-check"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.props["class"], {
      'disabled': $setup.props.disabled,
      'selectArea': $setup.props.inputStyleDefault
    }]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.props.inputStyle),
    ref: "selectAreaRef"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.visibility = !$setup.visibility;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.selected.label) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.suffix), 1 /* TEXT */), !$setup.props.hideArrow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $setup.visibility ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "selectDropdownArea",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.props.dropDownStyle)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.options, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.checkActive(item)),
      onClick: function onClick($event) {
        return $setup.selectOption(item);
      }
    }, [!$setup.props.hideChecks ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_3);
  }), 128 /* KEYED_FRAGMENT */))])], 4 /* STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 6 /* CLASS, STYLE */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-content {\n    padding-bottom: 0;\n    padding-left: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody[data-v-2cd70138],\n\n.gap-15[data-v-2cd70138] {\n  gap: 15px;\n}\n.width150[data-v-2cd70138] {\n  width: 150%;\n}\n.gap-10-15[data-v-2cd70138] {\n  gap: 10px 15px !important;\n}\n.Page-bg[data-v-2cd70138] {\n    min-height: 735.3px;\n    height: auto;\n    padding-bottom: 25px;\n}\n.Page-bg td[data-v-2cd70138] {\n    font-size: 13px;\n}\n.customerDropDownArea[data-v-2cd70138] {\n  position: relative;\n}\n.selectedCustomerDetail[data-v-2cd70138] {\n    flex: 1;\n}\n.selectedCustomerDetail p[data-v-2cd70138] {\n    margin: 0;\n    font-size: 12px;\n    color: #777;\n    line-height: 1.65;\n}\n.selectedCustomerDetail p.textDark[data-v-2cd70138] {\n    color: #000;\n    font-size: 13px;\n}\n.selectedCustomerDetail p.textDark.bold[data-v-2cd70138] {\n    font-weight: 600;\n}\n.selectedCustomerControls .payment-columns-filter > li > .btn-group > button[data-v-2cd70138]:not(:is(:hover, .show)) {\n    box-shadow: none;\n}\n.selectedCustomerArea[data-v-2cd70138] {\n    display: flex;\n    max-width: 250px;\n}\n.selectedCustomerControls .payment-columns-filter > li > .btn-group > .dropdown-menu[data-v-2cd70138] {\n    padding: 5px;\n}\nul.customerDropDown[data-v-2cd70138] {\n  position: absolute;\n  list-style: none;\n  padding: 0.375rem;\n  margin: 0;\n  background: #fff;\n  border-radius: 9px;\n  box-shadow: 0 0 0.5rem rgba(0,0,0,0.2);\n  top: 100%;\n  left: 0;\n  transform: translate(0, 7px);\n  width: 100%;\n  z-index: 100;\n}\nul.customerDropDown li[data-v-2cd70138] {\n  border-radius: 6px;\n  padding: 0.25rem 0.5rem;\n  transition: all 0.3s;\n  display: flex;\n  gap: 16px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  align-items: center;\n}\nul.customerDropDown li:not(:hover) > span[data-v-2cd70138] {\n  color: #777777;\n}\n.create-billing-invoice-fiftyHolder .col-12 > button.purpleTextBtn[data-v-2cd70138] {\n    color: var(--custom-primary);\n    background: transparent;\n    border: 0;\n    cursor: pointer;\n    line-height: 1;\n    font-weight: 500;\n}\n.create-billing-invoice-fiftyHolder .col-12 > button.smallText[data-v-2cd70138] {\n    font-size: 12px;\n    min-height: 0px;\n}\nul.customerDropDown li[data-v-2cd70138]:not(.noHover):hover {\n  background: var(--custom-primary);\n  color: #fff;\n  cursor: pointer;\n}\nul.customerDropDown li > :is(span.darkText[data-v-2cd70138], .heading) {\n  font-weight: 600;\n}\nul.customerDropDown li:not(:hover) > :is(span.darkText[data-v-2cd70138], .heading) {\n  color: #000;\n}\nul.customerDropDown li > .heading[data-v-2cd70138] {\n  font-size: 11px;\n  text-transform: uppercase;\n}\nul.customerDropDown li > span > i[data-v-2cd70138] {\n  font-size: 18px;\n  line-height: 0;\n  top: 4px;\n  position: relative;\n  font-weight: 400;\n}\n.invoice-heading[data-v-2cd70138] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #000;\n  margin-bottom: 15px;\n}\n.client-footer-table .client-detail > p[data-v-2cd70138] {\n    font-weight: 400;\n    color: #999;\n}\n.client-footer-table .client-detail > p.thankyou[data-v-2cd70138] {\n    color: #19a47d;\n    font-size: 24px;\n    line-height: 1.2;\n    font-weight: 700;\n}\n.Page-bg .customer-padding h2[data-v-2cd70138] {\n    font-size: 32px;\n}\n.Page-bg .customer-padding h1[data-v-2cd70138] {\n    margin-bottom: 5px;\n}\n.create-billing-invoice-Area[data-v-2cd70138] {\n    /* height: calc(100vh - 104px); */\n    height: auto;\n    min-height: calc(100vh - 104px);\n    margin-right: calc(var(--vz-gutter-x) * -1);\n}\n.checkbox-flex[data-v-2cd70138] {\n    gap: 10px 0;\n    align-items: flex-start;\n}\n.form-check label[data-v-2cd70138] {\n    white-space: nowrap;\n}\n.page-title-right .btn-group button[data-v-2cd70138] {\n    padding: 0 0.75rem;\n    min-height: 28px;\n    border-radius: 6px;\n}\n.page-title-right .btn-group button.waves-ligh[data-v-2cd70138] {\n    color: #000;\n}\n.create-billing-invoice-input[data-v-2cd70138] {\n    padding-bottom: 50px;\n}\n.create-billing-invoice-input .main-label[data-v-2cd70138] {\n    margin: 0;\n}\n.create-billing-invoice-fiftyHolder .col-12 > label[data-v-2cd70138] {\n    display: block;\n    margin: 0 0 5px 0;\n}\n.create-billing-invoice-fiftyHolder .col-12 input[data-v-2cd70138]:not(:is([type=\"checkbox\"], [type=\"radio\"],[type=\"submit\"])),\n.create-billing-invoice-fiftyHolder .col-12 select[data-v-2cd70138],\n.create-billing-invoice-fiftyHolder .col-12 .input-group >  .input-group-text[data-v-2cd70138] {\n    width: 100%;\n    outline: 0;\n    background: #fff !important;\n    color: #000;\n    box-shadow: 0px 1px 1px 0px rgba(16, 17, 26, 0.16), #d5dbe1 0 0 0 1px, 0 0 0 0 transparent, 0 0 0 0 transparent;\n    border: 0;\n    border-radius: 6px;\n    min-height: 32px;\n    padding: 0 10px;\n}\n.create-billing-invoice-fiftyHolder .col-12 .input-group >  .input-group-text[data-v-2cd70138] {\n  width: auto;\n  min-width: 32px;\n  justify-content: center;\n}\n.create-billing-invoice-fiftyHolder .col-12 .input-group >  input[data-v-2cd70138]:not(:is([type=\"checkbox\"], [type=\"radio\"],[type=\"submit\"])) {\n  width: auto;\n  flex: 1;\n}\n.create-billing-invoice-fiftyHolder .col-12 > button[data-v-2cd70138] {\n    padding: 0 0.75rem;\n    min-height: 30px;\n    border-radius: 6px;\n}\n.create-billing-invoice-fiftyHolder .row.rowGap[data-v-2cd70138] {\n    row-gap: 15px;\n}\n.rowGap-45[data-v-2cd70138] {\n  row-gap: 45px;\n}\n.dark[data-v-2cd70138] {\n    background: #f0f0f0;\n}\n.footer-text p[data-v-2cd70138] {\n    margin: 0;\n    line-height: 1.5;\n}\n.footer-text a[data-v-2cd70138] {\n    color: #9c9c9c;\n    text-decoration: none;\n}\n.footer-text h2[data-v-2cd70138] {\n    margin: 0;\n    color: #19a47d;\n    font-size: 31px;\n    font-weight: 900;\n    line-height: 1;\n}\n.top-footer[data-v-2cd70138] {\n    border-bottom: 2px solid #19a47d;\n    padding: 30px 20px 15px 20px;\n}\n.bottom-footer[data-v-2cd70138] {\n    padding: 15px 30px 30px 20px;\n}\n\n/* for date calendar */\n.row[data-v-2cd70138] {\n    display: flex;\n    align-items: center;\n}\n.selected-date[data-v-2cd70138] {\n    margin-left: 10px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntable[data-v-01b726cb],\nthead[data-v-01b726cb],\ntbody[data-v-01b726cb],\ntr[data-v-01b726cb],\ntd[data-v-01b726cb],\nimg[data-v-01b726cb] {\n    padding: 0;\n    margin: 0;\n    border: none;\n    border-spacing: 0px;\n    border-collapse: collapse;\n    vertical-align: top;\n    font-family: 'Helvetica', 'Arial', sans-serif;\n    font-size: 14px;\n    color: #9c9c9c;\n}\ntable.white-background td p[data-v-01b726cb] {\n    margin: 0;\n}\ntable td[data-v-01b726cb] {\n  font-size: 13px;\n}\n.background[data-v-01b726cb] {\n    background-color: var(--primary-color);\n}\n.white-background[data-v-01b726cb] {\n    background-color: #ffffff;\n}\n.background p[data-v-01b726cb] {\n    font-weight: 500;\n    margin: 0;\n    line-height: 1.5;\n}\n.header-padding[data-v-01b726cb] {\n    padding: 25px 20px;\n    color: #ffffff;\n    vertical-align: middle;\n}\n.header-padding p[data-v-01b726cb] {\n    text-align: right;\n    line-height: 1.35;\n}\n.header-padding a[data-v-01b726cb] {\n    display: block;\n    color: #ffffff;\n    text-decoration: none;\n    line-height: 1.35;\n}\n.logo[data-v-01b726cb] {\n    width: 100%;\n    max-width: 150px;\n}\n.customer-sec-padding[data-v-01b726cb] {\n    padding: 30px 20px;\n}\n.customer-padding h1[data-v-01b726cb] {\n    font-size: 12px;\n    color: #9c9c9c;\n    margin-top: 0;\n}\n.customer-padding p[data-v-01b726cb] {\n    font-weight: 600;\n    margin: 0;\n    line-height: 1.5;\n    color: #000000;\n}\n.customer-padding h2[data-v-01b726cb] {\n    color: var(--primary-color);\n    margin-top: 0;\n    font-size: 34px;\n}\n.client-heading[data-v-01b726cb] {\n    padding: 10px 20px;\n}\n.client-heading p[data-v-01b726cb] {\n    color: #ffffff;\n    font-size: 16px;\n}\n.client-detail[data-v-01b726cb] {\n    padding: 14px 20px;\n    font-weight: 600;\n    color: #666666;\n}\n.client-detail[data-v-01b726cb]:first-child {\n    white-space: nowrap;\n    width: 0;\n}\n.client-detail a[data-v-01b726cb] {\n    color: #666666;\n    text-decoration: none;\n}\n.client-footer-table .client-detail > p[data-v-01b726cb] {\n    font-weight: 400;\n    color: #999;\n}\n.client-footer-table .client-detail > p.thankyou[data-v-01b726cb] {\n    color: var(--primary-color);\n    font-size: 24px;\n    line-height: 1.2;\n    font-weight: 700;\n}\n.dark[data-v-01b726cb] {\n    background: #f0f0f0;\n}\n.client-detail b[data-v-01b726cb] {\n    font-weight: 800;\n    color: #777777;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.popup-bg {\n    z-index: 10000;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #c1c9d2b3;\n}\n\n.popup-bg:not(.showThis),\n.popup-area:not(.showThis) {\n    opacity: 0;\n    visibility: hidden;\n}\n\n.popup-bg,\n.popup-area {\n    transition: all 0.3s;\n}\n.popup-area {\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    width: 100%;\n    /* max-width: 450px; */\n    border-radius: 8px;\n    background: #fff;\n    transform: translate(-50%, -50%);\n    z-index: 10001;\n    display: flex;\n    flex-direction: column;\n    max-height: calc(100vh - 60px);\n}\n\n.popup-head {\n    padding: 1rem;\n    box-shadow: inset 0 -1px #ebeef1;\n    flex: 1 0 auto;\n}\n\n.popup-body {\n    background-color: #f6f8fa;\n    padding: 20px 20px;\n    flex: 1 1 auto;\n    overflow: auto;\n}\n\n.popup-details-area > h3 {\n    font-size: 15px;\n    font-weight: 500;\n    color: #1a1b25;\n    margin-bottom: 30px;\n}\n\n.popup-details-area a {\n    font-weight: 600;\n    color: var(--custom-primary) !important;\n}\n\n.popup-details-area > h3 > i {\n    font-size: 18px;\n    line-height: 0;\n    transform: translate(0, 3px);\n}\n\n.popup-details-area > h3.hide > i {\n    transform: rotate(180deg) translate(0, -3px);\n}\n\n.popup-details-area + .popup-details-area {\n    margin-top: 40px;\n}\n\n.popupToggleArea:not(.show) {\n    display: none;\n}\n\n.popupToggleArea {\n    padding: 7px 0;\n}\n\n.popup-details-input {\n    font-size: 13px;\n}\n\n.popup-details-input + .popup-details-input {\n    margin-top: 30px;\n}\n\n.popup-details-input label:not(.checkbox-label) {\n    display: block;\n    font-weight: 500;\n    color: #414552;\n    margin-bottom: 10px;\n}\n\n.popup-details-input label.checkbox-label {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    padding: 5px 0;\n    gap: 10px;\n}\n.popup-details-input input:not(:is([type=\"checkbox\"], [type=\"radio\"])) {\n    border: 1px solid #ccc;\n}\n\n.popup-details-input\n    input:not(:is([type=\"checkbox\"], [type=\"radio\"])):focus-visible,\n.popup-details-input select:focus-visible,\n.popup-details-input textarea:focus-visible {\n    outline-color: var(--custom-primary);\n}\n\n.popup-details-input input:not(:is([type=\"checkbox\"], [type=\"radio\"])),\n.popup-details-input select,\n.popup-details-input textarea {\n    width: 100%;\n    padding: 3px 10px;\n    min-height: 28px;\n    border-radius: 6px;\n}\n\n.popup-details-input\n    :is(input, select, textarea)\n    + :is(input, select, textarea) {\n    margin-top: 15px;\n}\n\n.popup-details-input :is(select, textarea) {\n    color: #404452;\n    background: #fff;\n    border: 0;\n    outline: 0;\n    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,\n        rgba(64, 68, 82, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(64, 68, 82, 0.08) 0px 2px 5px 0px;\n}\n\n.popup-head > h2 {\n    font-size: 1rem;\n    margin: 0;\n    font-weight: 700;\n    color: #1a1b25;\n}\n\n.flex-inputArea {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n}\n\n.flex-inputArea + .flex-inputArea {\n    margin-top: 15px;\n}\n\n.flex-inputArea > .popup-details-input {\n    margin: 0;\n    flex: 1;\n}\n\n.flex-inputArea > .popup-details-input.flex180 {\n    flex: 0 0 180px;\n}\n\n.flex-inputArea > .deleteArea {\n    color: var(--custom-primary);\n    cursor: pointer;\n}\n\n.popup-footer {\n    box-shadow: inset 0 1px #ebeef1;\n    padding: 15px 20px;\n    font-size: 14px;\n    display: flex;\n    gap: 7px;\n    justify-content: flex-end;\n    flex: 1 0 auto;\n}\n\n.popup-footer > button,\nlabel.popup-file-upload-label > button {\n    background: #fff;\n    font-size: 13px;\n    line-height: 20px;\n    min-height: 28px;\n    border-radius: 6px;\n    box-shadow: 0px 1px 1px 0px rgba(16, 17, 26, 0.16), #d5dbe1 0 0 0 1px,\n        0 0 0 0 transparent, 0 0 0 0 transparent;\n    padding: 3px 10px;\n    font-weight: 500;\n    border: 0;\n    outline: 0;\n}\n\nlabel.popup-file-upload-label {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-weight: 600;\n    cursor: pointer;\n}\n\nlabel.popup-file-upload-label > button {\n    display: inline-flex;\n    align-items: center;\n    margin: 0;\n    gap: 7px;\n    font-weight: 600;\n}\n\nlabel.popup-file-upload-label > button > i {\n    font-size: 18px;\n    line-height: 0;\n}\n\n.popup-file-upload {\n    cursor: pointer;\n}\n\n.popup-file-upload > input {\n    display: none;\n}\n\n.popup-footer > button.purpleLinkStyle {\n    background: #625afa;\n    color: #fff;\n}\n\n.btn-to-start {\n    flex: 1;\n}\n\n.btn-to-start > button {\n    border: 0;\n    background: transparent;\n    outline: 0;\n    color: var(--custom-primary);\n    font-weight: 500;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=style&index=0&id=67e54607&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=style&index=0&id=67e54607&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n  .selectArea {\n    position: relative;\n    cursor: pointer;\n    transition: background 0.3s;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n\n  .selectArea > p {\n    background: #fff;\n    font-size: 13px;\n    line-height: 20px;\n    min-height: 28px;\n    border-radius: 6px;\n    box-shadow: 0px 1px 1px 0px rgba(16, 17, 26, 0.16), #d5dbe1 0 0 0 1px, 0 0 0 0 transparent, 0 0 0 0 transparent;\n    padding: 3px 10px;\n    font-weight: 500;\n    border: 0;\n    outline: 0;\n    display: flex;\n    margin: 0;\n    gap: 0.25rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .selectArea > p > i {\n    font-size: 20px;\n  }\n\n  .selectDropdownArea{\n      position: absolute;\n      left: 50%;\n      top: 100%;\n      transform: translate(-50%, 12px);\n      z-index: 10100;\n      min-width: 100%;\n  }\n\n  .selectDropdown {\n    width: 100%;\n    white-space: nowrap;\n    background: #fff;\n    padding: 0.375rem;\n    border-radius: 0.5rem;\n    box-shadow: 0 0 0.75rem rgba(0,0,0,0.15);\n    list-style: none;\n    margin: 0;\n    font-weight: 600;\n    line-height: 1.2;\n    max-height: 10rem;\n    overflow: auto\n  }\n\n  .selectDropdownArea::before{\n    content: '';\n    position: absolute;\n    left: 50%;\n    bottom: 100%;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid #ffffff;\n    z-index: 1;\n    filter: drop-shadow(0 -0.125rem 0.125rem rgba(0,0,0,0.15));\n    transform: translate(-50%, 0);\n  }\n\n  .selectDropdown > li {\n    width: 100%;\n    padding: 0.375rem 0.5rem;\n    border-radius: 0.375rem;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n  }\n\n  .selectDropdown > li:hover {\n    background: #eee;\n  }\n\n  .selectDropdown > li > i {\n    line-height: 0;\n    font-size: 16px;\n    opacity: 0;\n  }\n\n  .selectDropdown > li.active {\n    color: var(--custom-primary);\n  }\n\n  .selectDropdown > li.active > i {\n    opacity: 1;\n  }\n\n  .disabled {\n    pointer-events: none;\n    opacity: 0.7;\n  }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateInvoice_vue_vue_type_style_index_0_id_2cd70138_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateInvoice_vue_vue_type_style_index_0_id_2cd70138_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateInvoice_vue_vue_type_style_index_0_id_2cd70138_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateInvoice_vue_vue_type_style_index_1_id_2cd70138_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateInvoice_vue_vue_type_style_index_1_id_2cd70138_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateInvoice_vue_vue_type_style_index_1_id_2cd70138_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InvoiceUI_vue_vue_type_style_index_0_id_01b726cb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InvoiceUI_vue_vue_type_style_index_0_id_01b726cb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InvoiceUI_vue_vue_type_style_index_0_id_01b726cb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Popup_vue_vue_type_style_index_0_id_118e72b8_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Popup_vue_vue_type_style_index_0_id_118e72b8_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Popup_vue_vue_type_style_index_0_id_118e72b8_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=style&index=0&id=67e54607&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=style&index=0&id=67e54607&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_style_index_0_id_67e54607_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Select.vue?vue&type=style&index=0&id=67e54607&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=style&index=0&id=67e54607&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_style_index_0_id_67e54607_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_style_index_0_id_67e54607_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Admin/Billing/CreateInvoice.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Admin/Billing/CreateInvoice.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateInvoice_vue_vue_type_template_id_2cd70138_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateInvoice.vue?vue&type=template&id=2cd70138&scoped=true */ "./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=template&id=2cd70138&scoped=true");
/* harmony import */ var _CreateInvoice_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateInvoice.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _CreateInvoice_vue_vue_type_style_index_0_id_2cd70138_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css */ "./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css");
/* harmony import */ var _CreateInvoice_vue_vue_type_style_index_1_id_2cd70138_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css */ "./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_CreateInvoice_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateInvoice_vue_vue_type_template_id_2cd70138_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2cd70138"],['__file',"resources/js/Pages/Admin/Billing/CreateInvoice.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InvoiceUI_vue_vue_type_template_id_01b726cb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceUI.vue?vue&type=template&id=01b726cb&scoped=true */ "./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=template&id=01b726cb&scoped=true");
/* harmony import */ var _InvoiceUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceUI.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _InvoiceUI_vue_vue_type_style_index_0_id_01b726cb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css */ "./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_InvoiceUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InvoiceUI_vue_vue_type_template_id_01b726cb_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-01b726cb"],['__file',"resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/Popup.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/Popup.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_vue_vue_type_template_id_118e72b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.vue?vue&type=template&id=118e72b8 */ "./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=template&id=118e72b8");
/* harmony import */ var _Popup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Popup_vue_vue_type_style_index_0_id_118e72b8_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css */ "./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Popup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Popup_vue_vue_type_template_id_118e72b8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Shared/Components/Popup.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/Select/Select.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/Select/Select.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Select_vue_vue_type_template_id_67e54607__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.vue?vue&type=template&id=67e54607 */ "./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=template&id=67e54607");
/* harmony import */ var _Select_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Select_vue_vue_type_style_index_0_id_67e54607_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Select.vue?vue&type=style&index=0&id=67e54607&lang=css */ "./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=style&index=0&id=67e54607&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Select_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Select_vue_vue_type_template_id_67e54607__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Shared/Components/Select/Select.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_define_options_CreateInvoice_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_define_options_CreateInvoice_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./CreateInvoice.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_define_options_InvoiceUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_define_options_InvoiceUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!../../../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./InvoiceUI.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_define_options_Popup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_define_options_Popup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!../../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./Popup.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_define_options_Select_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_define_options_Select_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!../../../../../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./Select.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-define-options!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=template&id=2cd70138&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=template&id=2cd70138&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateInvoice_vue_vue_type_template_id_2cd70138_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateInvoice_vue_vue_type_template_id_2cd70138_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateInvoice.vue?vue&type=template&id=2cd70138&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=template&id=2cd70138&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=template&id=01b726cb&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=template&id=01b726cb&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InvoiceUI_vue_vue_type_template_id_01b726cb_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InvoiceUI_vue_vue_type_template_id_01b726cb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InvoiceUI.vue?vue&type=template&id=01b726cb&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=template&id=01b726cb&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=template&id=118e72b8":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=template&id=118e72b8 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Popup_vue_vue_type_template_id_118e72b8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Popup_vue_vue_type_template_id_118e72b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Popup.vue?vue&type=template&id=118e72b8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=template&id=118e72b8");


/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=template&id=67e54607":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=template&id=67e54607 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_template_id_67e54607__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_template_id_67e54607__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Select.vue?vue&type=template&id=67e54607 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=template&id=67e54607");


/***/ }),

/***/ "./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateInvoice_vue_vue_type_style_index_0_id_2cd70138_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=0&id=2cd70138&lang=css");


/***/ }),

/***/ "./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateInvoice_vue_vue_type_style_index_1_id_2cd70138_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Billing/CreateInvoice.vue?vue&type=style&index=1&id=2cd70138&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InvoiceUI_vue_vue_type_style_index_0_id_01b726cb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/InvoiceUI/InvoiceUI.vue?vue&type=style&index=0&id=01b726cb&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Popup_vue_vue_type_style_index_0_id_118e72b8_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Popup.vue?vue&type=style&index=0&id=118e72b8&lang=css");


/***/ }),

/***/ "./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=style&index=0&id=67e54607&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=style&index=0&id=67e54607&lang=css ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_style_index_0_id_67e54607_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Select.vue?vue&type=style&index=0&id=67e54607&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Shared/Components/Select/Select.vue?vue&type=style&index=0&id=67e54607&lang=css");


/***/ })

}]);