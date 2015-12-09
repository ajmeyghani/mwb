/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./src/server */ 1);


/***/ },
/* 1 */
/*!******************************!*\
  !*** ./server/src/server.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var path = __webpack_require__(/*! path */ 2);
	var env = process.env.NODE_ENV;
	var isProd = env === 'production';
	var express = __webpack_require__(/*! express */ 3);
	var app = express();
	
	var paths = {
	  client: path.resolve('./client'),
	  server: path.resolve('./server'),
	  bower: path.resolve('bower'),
	  node_modules: path.resolve('node_modules'),
	  build: path.resolve('./build')
	};
	
	var serverSettings = { client: path.resolve('./client') };
	
	/*\ Public static route for static assets.
	\*/
	
	if (isProd) {
	  app.use('/', express['static'](path.resolve(paths.build)));
	}
	app.use('/bower', express['static'](paths.bower));
	app.use('/node_modules', express['static'](paths.node_modules));
	
	var staticPath = path.join(paths.client, 'static');
	app.use('/static', express['static'](staticPath));
	
	/*\ Main route:
	  - Serve index.html if not /api or not /somethingelse
	  - That is /api and /somethingelse are reserved
	\*/
	var serverRoot = isProd ? paths.build : paths.client;
	app.all(/^\/(?!api|somethingelse).*/, function (req, res) {
	  if (!isProd) {
	    res.sendFile('index.html', { root: serverRoot });
	  } else {
	    res.sendFile('home.html', { root: serverRoot });
	  }
	});
	
	/* The somethingelse endpoint */
	app.all('/somethingelse', function (req, res) {
	  res.json({
	    "app": "something"
	  });
	});
	
	/*\ Api route example
	\*/
	/* this could be cached with redis for example */
	app.get('/api/data', function (req, res) {
	  res.json({
	    name: 'boilerplate'
	  });
	});
	
	/* client handle 404 */
	app.all("/404", function (req, res, next) {
	  res.sendFile("index.html", { root: serverSettings.client });
	});
	
	/* catch invalid requests */
	app.get('*', function (req, res, next) {
	  console.log("404: " + req.originalUrl + " was not found");
	  res.status(404).redirect("/404");
	});
	
	var port = undefined;
	if (isProd) {
	  port = 8080;
	} else {
	  port = process.env.PORT || 8760;
	}
	app.listen(port, function () {
	  console.log('go to -> http://localhost:' + port);
	  if (env === 'production') {
	    __webpack_require__(/*! open */ 4)('http://localhost:' + port);
	  }
	});

/***/ },
/* 2 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/*!***********************!*\
  !*** external "open" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("open");

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map