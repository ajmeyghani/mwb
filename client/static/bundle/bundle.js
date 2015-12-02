(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mymodulename"] = factory();
	else
		root["mymodulename"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/*!****************************!*\
  !*** ./client/src/main.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(/*! main.css */ 1);\nvar app = {\n  name: 'mwb'\n};\n\nconsole.log(app.name);\nmodule.exports = app;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./client/src/main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./client/src/main.js?");

/***/ },
/* 1 */
/*!*****************************!*\
  !*** ./client/src/main.css ***!
  \*****************************/
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./client/src/main.css\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./client/src/main.css?");

/***/ }
/******/ ])
});
;