/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("console.log('Hello World from your main file!');\nvar notifies = [{\n  hour: 0,\n  notify: \"00:00 giờ rồi bạn cần một giấc ngủ ngay lúc này\"\n}, {\n  hour: 1,\n  notify: \"01:00 giờ rồi bạn cần một giấc ngủ ngay lúc này\"\n}, {\n  hour: 2,\n  notify: \"02:00 giờ rồi bạn cần một giấc ngủ ngay lúc này\"\n}, {\n  hour: 3,\n  notify: \"03:00 giờ rồi bạn cần một giấc ngủ ngay lúc này\"\n}, {\n  hour: 4,\n  notify: \"04:00 giờ rồi bạn cần một giấc ngủ ngay lúc này\"\n}, {\n  hour: 5,\n  notify: \"05:00 giờ sáng rồi dậy thôi bạn\"\n}, {\n  hour: 6,\n  notify: \"06:00 giờ rồi bạn cần một bữa sáng\"\n}, {\n  hour: 7,\n  notify: \"07:00 giờ rồi bạn cần đến công ty\"\n}, {\n  hour: 8,\n  notify: \"08:00 giờ rồi bạn đang làm việc\"\n}, {\n  hour: 9,\n  notify: \"09:00 giờ rồi bạn đang làm việc\"\n}, {\n  hour: 10,\n  notify: \"10:00 giờ rồi bạn đang làm việc\"\n}, {\n  hour: 11,\n  notify: \"11:00 giờ rồi bạn đang làm việc\"\n}, {\n  hour: 12,\n  notify: \"12:00 giờ rồi nghỉ ăn trưa thôi\"\n}, {\n  hour: 13,\n  notify: \"13:00 giờ rồi bạn cần một giấc ngủ trưa\"\n}, {\n  hour: 14,\n  notify: \"14:00 giờ rồi bạn nên dậy làm việc\"\n}, {\n  hour: 15,\n  notify: \"15:00 giờ rồi bạn nên dậy làm việc\"\n}, {\n  hour: 16,\n  notify: \"16:00 giờ rồi bạn nên dậy làm việc\"\n}, {\n  hour: 17,\n  notify: \"17:00 giờ rồi bạn nên dậy làm việc\"\n}, {\n  hour: 18,\n  notify: \"18:00 giờ rồi bạn nên đi về nhà\"\n}, {\n  hour: 19,\n  notify: \"19:00 giờ rồi bạn nên ăn tối\"\n}, {\n  hour: 20,\n  notify: \"20:00 giờ rồi bạn cần đọc sách\"\n}, {\n  hour: 21,\n  notify: \"21:00 giờ rồi bạn đi xem ti vi\"\n}, {\n  hour: 22,\n  notify: \"22:00 giờ rồi bạn đi đóng cửa\"\n}, {\n  hour: 23,\n  notify: \"23:00 giờ rồi bạn nên đi ngủ ngay lúc này\"\n}];\nvar d = new Date();\nvar hours = d.getHours();\nvar minutes = d.getMinutes();\nvar seconds = d.getSeconds();\n\nif (hours < 10) {\n  hours = '0' + hours;\n}\n\nfor (var i = 0; i < notifies.length; i++) {// setInterval(function () {\n  //     if(hours == notifies[i]['hour']) {\n  //         confirm(`Bây giờ là ${hours}:${minutes}`);\n  //     }\n  // }, 2000)\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	__webpack_require__("./src/style.scss");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;