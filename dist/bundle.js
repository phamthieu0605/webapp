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

eval("var app = document.getElementById('app');\nvar title = document.getElementById('title');\nvar times = document.getElementById('times');\nvar message = document.getElementById('message');\nvar btnYes = document.getElementById('btnYes');\nvar btnNo = document.getElementById('btnNo');\nvar numberYes = document.getElementById('numberYes');\nvar numberNo = document.getElementById('numberNo');\nvar music = document.querySelector('audio');\nvar notifies = [{\n  hour: 0,\n  minute: 0,\n  notify: \"Hơn 00 giờ rồi bạn cần một giấc ngủ ngay lúc này\"\n}, {\n  hour: 1,\n  minute: 0,\n  notify: \"Hơn 01 giờ rồi bạn cần một giấc ngủ ngay lúc này\"\n}, {\n  hour: 2,\n  minute: 0,\n  notify: \"Hơn 02 giờ rồi bạn cần một giấc ngủ ngay lúc này\"\n}, {\n  hour: 3,\n  minute: 0,\n  notify: \"Hơn 03 giờ rồi bạn cần một giấc ngủ ngay lúc này\"\n}, {\n  hour: 4,\n  minute: 0,\n  notify: \"Hơn 04 giờ rồi bạn cần một giấc ngủ ngay lúc này\"\n}, {\n  hour: 5,\n  minute: 0,\n  notify: \"Hơn 05 giờ sáng rồi dậy thôi bạn\"\n}, {\n  hour: 6,\n  minute: 0,\n  notify: \"Hơn 06 giờ rồi bạn cần một bữa sáng\"\n}, {\n  hour: 7,\n  minute: 0,\n  notify: \"Hơn 07 giờ rồi bạn cần đến công ty\"\n}, {\n  hour: 8,\n  minute: 0,\n  notify: \"Hơn 08 giờ rồi bạn đang làm việc\"\n}, {\n  hour: 9,\n  minute: 0,\n  notify: \"Hơn 09 giờ rồi bạn đang làm việc\"\n}, {\n  hour: 10,\n  minute: 0,\n  notify: \"Hơn 10 giờ rồi bạn đang làm việc\"\n}, {\n  hour: 11,\n  minute: 0,\n  notify: \"Hơn 11 giờ rồi bạn đang làm việc\"\n}, {\n  hour: 12,\n  minute: 0,\n  notify: \"Hơn 12 giờ rồi nghỉ ăn trưa thôi\"\n}, {\n  hour: 13,\n  minute: 0,\n  notify: \"Hơn 13 giờ rồi bạn cần một giấc ngủ trưa\"\n}, {\n  hour: 14,\n  minute: 0,\n  notify: \"Hơn 14 giờ rồi bạn nên dậy làm việc\"\n}, {\n  hour: 15,\n  minute: 0,\n  notify: \"Hơn 15 giờ rồi bạn nên dậy làm việc\"\n}, {\n  hour: 16,\n  minute: 0,\n  notify: \"Hơn 16 giờ rồi bạn nên dậy làm việc\"\n}, {\n  hour: 17,\n  minute: 0,\n  notify: \"Hơn 17 giờ rồi bạn nên dậy làm việc\"\n}, {\n  hour: 18,\n  minute: 0,\n  notify: \"Hơn 18 giờ rồi bạn nên đi về nhà\"\n}, {\n  hour: 19,\n  minute: 0,\n  notify: \"Hơn 19 giờ rồi bạn nên ăn tối\"\n}, {\n  hour: 20,\n  minute: 0,\n  notify: \"Hơn 20 giờ rồi bạn cần đọc sách\"\n}, {\n  hour: 21,\n  minute: 0,\n  notify: \"Hơn 21 giờ rồi bạn đi xem ti vi\"\n}, {\n  hour: 22,\n  minute: 0,\n  notify: \"Hơn 22 giờ rồi bạn đi đóng cửa\"\n}, {\n  hour: 23,\n  minute: 0,\n  notify: \"Hơn 23 giờ rồi bạn nên đi ngủ ngay lúc này\"\n}];\nvar d = new Date();\nvar hours = d.getHours();\nvar minutes = d.getMinutes();\nvar seconds = d.getSeconds();\n\nif (hours < 10) {\n  hours = '0' + hours;\n}\n\nif (minutes < 10) {\n  minutes = '0' + minutes;\n}\n\nvar countYesClick = Number(localStorage.getItem('countYes'));\nvar countNoClick = Number(localStorage.getItem('countNo'));\nNumber.isNaN(countYesClick);\nNumber.isNaN(countNoClick);\n\nfor (var i = 0; i < notifies.length; i++) {\n  if (hours == notifies[i]['hour'] && minutes == notifies[i]['minute']) {\n    app.style.display = 'block'; // music.play();\n\n    times.innerText = \"\".concat(hours, \":\").concat(minutes);\n    message.innerHTML = notifies[i]['notify'];\n    btnYes.addEventListener('click', function () {\n      app.style.display = 'none'; // music.pause();\n\n      numberYes.textContent = ++countYesClick;\n      localStorage.setItem('countYes', countYesClick);\n    });\n    btnNo.addEventListener('click', function () {\n      app.style.display = 'none'; // music.pause();\n\n      numberNo.textContent = ++countNoClick;\n      localStorage.setItem('countNo', countNoClick);\n    });\n  }\n}\n\nsetInterval(function () {\n  localStorage.clear();\n}, 86400000); // auto reload page \n\nsetInterval(function () {\n  window.location.reload(1);\n}, 30000);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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