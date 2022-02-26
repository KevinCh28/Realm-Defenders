/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/cell */ \"./src/scripts/cell.js\");\n/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/board */ \"./src/scripts/board.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  new _scripts_board__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQUlGLHNEQUFKO0FBQ0QsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3RfMi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDZWxsIGZyb20gXCIuL3NjcmlwdHMvY2VsbFwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL3NjcmlwdHMvYm9hcmRcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbmV3IEJvYXJkKClcbn0pOyJdLCJuYW1lcyI6WyJDZWxsIiwiQm9hcmQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell.js */ \"./src/scripts/cell.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Board = /*#__PURE__*/function () {\n  function Board() {\n    _classCallCheck(this, Board);\n\n    this.grid = this.makeGrid();\n    this.animate();\n  }\n\n  _createClass(Board, [{\n    key: \"makeGrid\",\n    value: function makeGrid() {\n      var grid = [];\n\n      for (var y = 100; y < 600; y += 100) {\n        //col, y start at 100 to skip top bar\n        for (var x = 0; x < 900; x += 100) {\n          //row\n          grid.push(new _cell_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y));\n        }\n      }\n\n      return grid;\n    }\n  }, {\n    key: \"handleGrid\",\n    value: function handleGrid() {\n      for (var i = 0; i < this.grid.length; i++) {\n        this.grid[i].draw();\n      }\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      var canvas = document.getElementById('game-canvas');\n      var ctx = canvas.getContext('2d');\n      canvas.width = 900;\n      canvas.height = 600;\n      ctx.fillStyle = 'red';\n      ctx.fillRect(0, 0, 900, 100); //start top left corner\n\n      this.handleGrid();\n    }\n  }]);\n\n  return Board;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztJQUVNQztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsSUFBTCxHQUFZLEtBQUtDLFFBQUwsRUFBWjtBQUVBLFNBQUtDLE9BQUw7QUFDRDs7OztXQUVELG9CQUFXO0FBQ1QsVUFBSUYsSUFBSSxHQUFHLEVBQVg7O0FBRUEsV0FBSyxJQUFJRyxDQUFDLEdBQUcsR0FBYixFQUFrQkEsQ0FBQyxHQUFHLEdBQXRCLEVBQTJCQSxDQUFDLElBQUksR0FBaEMsRUFBcUM7QUFBRztBQUN0QyxhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsR0FBcEIsRUFBeUJBLENBQUMsSUFBSSxHQUE5QixFQUFtQztBQUFHO0FBQ3BDSixVQUFBQSxJQUFJLENBQUNLLElBQUwsQ0FBVSxJQUFJUCxnREFBSixDQUFTTSxDQUFULEVBQVlELENBQVosQ0FBVjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0gsSUFBUDtBQUNEOzs7V0FFRCxzQkFBYTtBQUNYLFdBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLTixJQUFMLENBQVVPLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDLGFBQUtOLElBQUwsQ0FBVU0sQ0FBVixFQUFhRSxJQUFiO0FBQ0Q7QUFDRjs7O1dBRUQsbUJBQVU7QUFDUixVQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0EsVUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBSixNQUFBQSxNQUFNLENBQUNLLEtBQVAsR0FBZSxHQUFmO0FBQ0FMLE1BQUFBLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixHQUFoQjtBQUVBSCxNQUFBQSxHQUFHLENBQUNJLFNBQUosR0FBZ0IsS0FBaEI7QUFDQUosTUFBQUEsR0FBRyxDQUFDSyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixHQUFuQixFQUF3QixHQUF4QixFQVBRLENBT3dCOztBQUNoQyxXQUFLQyxVQUFMO0FBRUQ7Ozs7OztBQUdILCtEQUFlbkIsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3RfMi8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzP2JjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENlbGwgZnJvbSBcIi4vY2VsbC5qc1wiXG5cbmNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ncmlkID0gdGhpcy5tYWtlR3JpZCgpO1xuXG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH1cblxuICBtYWtlR3JpZCgpIHtcbiAgICBsZXQgZ3JpZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgeSA9IDEwMDsgeSA8IDYwMDsgeSArPSAxMDApIHsgIC8vY29sLCB5IHN0YXJ0IGF0IDEwMCB0byBza2lwIHRvcCBiYXJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgOTAwOyB4ICs9IDEwMCkgeyAgLy9yb3dcbiAgICAgICAgZ3JpZC5wdXNoKG5ldyBDZWxsKHgsIHkpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBncmlkO1xuICB9XG5cbiAgaGFuZGxlR3JpZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5ncmlkW2ldLmRyYXcoKTtcbiAgICB9XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhbnZhcy53aWR0aCA9IDkwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCA5MDAsIDEwMCk7ICAgLy9zdGFydCB0b3AgbGVmdCBjb3JuZXJcbiAgICB0aGlzLmhhbmRsZUdyaWQoKTtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyJdLCJuYW1lcyI6WyJDZWxsIiwiQm9hcmQiLCJncmlkIiwibWFrZUdyaWQiLCJhbmltYXRlIiwieSIsIngiLCJwdXNoIiwiaSIsImxlbmd0aCIsImRyYXciLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJoYW5kbGVHcmlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/scripts/cell.js":
/*!*****************************!*\
  !*** ./src/scripts/cell.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Cell = /*#__PURE__*/function () {\n  function Cell(x, y) {\n    _classCallCheck(this, Cell);\n\n    this.x = x;\n    this.y = y;\n    this.width = 100;\n    this.height = 100;\n  }\n\n  _createClass(Cell, [{\n    key: \"draw\",\n    value: function draw() {\n      var canvas = document.getElementById('game-canvas');\n      var ctx = canvas.getContext('2d');\n      ctx.strokeStyle = 'blue'; //remove color later, have it for now to see\n\n      ctx.strokeRect(this.x, this.y, this.width, this.height);\n    }\n  }]);\n\n  return Cell;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jZWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDSixnQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEdBQWQ7QUFDRDs7OztXQUVELGdCQUFPO0FBQ0wsVUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBLFVBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQUQsTUFBQUEsR0FBRyxDQUFDRSxXQUFKLEdBQWtCLE1BQWxCLENBSkssQ0FJeUI7O0FBQzlCRixNQUFBQSxHQUFHLENBQUNHLFVBQUosQ0FBZSxLQUFLVixDQUFwQixFQUF1QixLQUFLQyxDQUE1QixFQUErQixLQUFLQyxLQUFwQyxFQUEyQyxLQUFLQyxNQUFoRDtBQUNEOzs7Ozs7QUFHSCwrREFBZUosSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3RfMi8uL3NyYy9zY3JpcHRzL2NlbGwuanM/ZjkwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDZWxsIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gMTAwO1xuICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJzsgICAgIC8vcmVtb3ZlIGNvbG9yIGxhdGVyLCBoYXZlIGl0IGZvciBub3cgdG8gc2VlXG4gICAgY3R4LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDZWxsOyJdLCJuYW1lcyI6WyJDZWxsIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/cell.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0XzIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;