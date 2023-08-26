/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*body {
  margin: 0;
  padding: 0;
}

.container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

.text {
  text-align: center;
  padding: 25px;
}

/* Header */
/* 
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  border-bottom: 2px solid lightgrey;
}

.header h1 {
  margin: 0;
  padding: 0;
} */

/* Footer */
/* 
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-top: 2px solid lightgrey;
}
.footer img {
  height: 20px;
}

a {
  text-decoration: none;
  color: black;
  font-weight: bold;
} */

/* gameboards */
/* 
.gameboards{
  flex: 1;
  display: flex;
}

.area {
  flex: 1;
  display: flex;
  justify-content: center;
}

.gameboard {
  width: 20vw;
  height: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 950px) {
  .gameboard {
      width: 40vw;
      height: 40vw;
}
}

@media screen and (max-width: 500px) {
  .gameboards {
    flex-direction: column;
  }
  .gameboard {
      width: 40vw;
      height: 40vw;
}
}

.row {
  flex: 1;
  width: 100%;
  display: flex;
}

.withShip {
  background: black;
}

.cell {
  flex: 1;
  border: 1px solid black;
}

.cell:hover {
  background: skyblue;
  cursor: pointer;
}

.cell.miss {
  background: grey;
}

.cell.hit {
  background: red;
}

.cell.sunk {
  background: darkred;
}

.gameover-modal {
  position: absolute;
  left: 50%;
  top: 25%;
  border: 2px solid black;
  padding: 2% 8%;
  border-radius: 25px;
  box-shadow: 10px 10px 10px darkred;
  flex-direction: column;
  align-items: center;
  background: white;
  transition: transform 1s;
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  transition: 1s ease-in-out;
  display: flex;
}

.active {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%,-50%) scale(1);
  transition: 1s ease-in-out;
}

button {
  padding: 5px 10px;
  border-radius: 10px;
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;WAuBW;AACX;;;;;;;;;;;;GAYG;;AAEH,WAAW;AACX;;;;;;;;;;;;;;;;GAgBG;;AAEH,eAAe;AACf;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAkGG","sourcesContent":["/*body {\n  margin: 0;\n  padding: 0;\n}\n\n.container{\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.text {\n  text-align: center;\n  padding: 25px;\n}\n\n/* Header */\n/* \n.header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 25px;\n  border-bottom: 2px solid lightgrey;\n}\n\n.header h1 {\n  margin: 0;\n  padding: 0;\n} */\n\n/* Footer */\n/* \n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  border-top: 2px solid lightgrey;\n}\n.footer img {\n  height: 20px;\n}\n\na {\n  text-decoration: none;\n  color: black;\n  font-weight: bold;\n} */\n\n/* gameboards */\n/* \n.gameboards{\n  flex: 1;\n  display: flex;\n}\n\n.area {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n}\n\n.gameboard {\n  width: 20vw;\n  height: 20vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media screen and (max-width: 950px) {\n  .gameboard {\n      width: 40vw;\n      height: 40vw;\n}\n}\n\n@media screen and (max-width: 500px) {\n  .gameboards {\n    flex-direction: column;\n  }\n  .gameboard {\n      width: 40vw;\n      height: 40vw;\n}\n}\n\n.row {\n  flex: 1;\n  width: 100%;\n  display: flex;\n}\n\n.withShip {\n  background: black;\n}\n\n.cell {\n  flex: 1;\n  border: 1px solid black;\n}\n\n.cell:hover {\n  background: skyblue;\n  cursor: pointer;\n}\n\n.cell.miss {\n  background: grey;\n}\n\n.cell.hit {\n  background: red;\n}\n\n.cell.sunk {\n  background: darkred;\n}\n\n.gameover-modal {\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  border: 2px solid black;\n  padding: 2% 8%;\n  border-radius: 25px;\n  box-shadow: 10px 10px 10px darkred;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  transition: transform 1s;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n  transition: 1s ease-in-out;\n  display: flex;\n}\n\n.active {\n  visibility: visible;\n  opacity: 1;\n  transform: translate(-50%,-50%) scale(1);\n  transition: 1s ease-in-out;\n}\n\nbutton {\n  padding: 5px 10px;\n  border-radius: 10px;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 537:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(426);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const src_style = (style/* default */.Z && style/* default */.Z.locals ? style/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/js/ship.js
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
    this.domTargets = [];
  }
  hit() {
    this.timesHit++;
    this.isSunk();
  }
  isSunk() {
    if (this.timesHit == this.length) {
      this.sunk = true;
    }
  }
}


;// CONCATENATED MODULE: ./src/js/gameboard.js


class Gameboard {
  constructor() {
    this.board = [];
    this.init();
  }
  init() {
    for (let i = 0; i < 10; i++) {
      this.board.push([]);
      for (let j = 0; j < 10; j++) {
        this.board[i].push({
          hasShip: false,
          isShot: false
        })
      }
    }
    this.placeShipsRandomly();
  }
  placeShip(ship, x, y, isVertical) {
    if (!this.isPlacementPossible(ship, x, y, isVertical)) return false;

    if (isVertical) {
      for (let i = 0; i < ship.length; i++) {
        this.board[x + i][y].hasShip = ship;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y + i].hasShip = ship;
      }
    }
    return true;
  }
  placeShipsRandomly() {
    const ships = [];
    const carrier = new Ship('Carrier', 5);
    const destroyer = new Ship('Destroyer', 3);
    const battleship = new Ship('Battleship', 4);
    const submarine = new Ship('Submarine', 2);
    const patrolBoat = new Ship('Patrol Boat', 1);
    ships.push(carrier, destroyer, battleship, submarine, patrolBoat);
    let successfulPlacements = 0;
    while (successfulPlacements < 5) {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let isVertical = Math.floor(Math.random() * 2) === 1;
      if (this.placeShip(ships[successfulPlacements], x, y, isVertical)) {
        successfulPlacements++;
      }
    }
  }
  isPlacementPossible(ship, x, y, isVertical) {
    //Check if necessary spots are in gameboard and available
    if (isVertical) {
      for (let i = 0; i < ship.length; i++) {
        if (x + i >= this.board.length) return false;
        for (let j = -1; j < 2; j++) {
          for (let n = -1; n < 2; n++) {
            const newX = x + i + j;
            const newY = y + n;
            if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
              if (this.board[newX][newY].hasShip) return false;
            }
          }
        }
      }  
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (y + i >= this.board.length) return false;
        for (let j = -1; j < 2; j++) {
          for (let n = -1; n < 2; n++) {
            const newX = x + j;
            const newY = y + i + n;
            if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
              if (this.board[newX][newY].hasShip) return false;
            }
          }
        }
      }
    }
    return true;
  }
  receiveAttack(x, y) {
    this.board[x][y].isShot = true;
    if (this.board[x][y].hasShip) {
      this.board[x][y].hasShip.hit();
      if (this.board[x][y].hasShip.sunk == true) {
        return 'sunk';
      }
      return 'hit';
    }
    return 'miss';
  }
  isGameOver() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j].hasShip && this.board[i][j].hasShip.sunk == false) return false;
      }
    }
    return true;
  }
  reset() {
    this.board = [];
    this.init();
  }
}


;// CONCATENATED MODULE: ./src/js/player.js


class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
  }
  attack(x, y, gameboard) {
    if (gameboard.board[x][y].isShot) return false;
    return gameboard.receiveAttack(x, y);
  }
  randomAttack(gameboard) {
    let x;
    let y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (gameboard.board[x][y].isShot);
    return [x, y, gameboard.receiveAttack(x, y)];
  }
}


;// CONCATENATED MODULE: ./src/js/ui.js


const player1 = new Player('Player1');
const player2 = new Player('Player2');
let player1Turn = true;
let isGameOver = false;

function DOMLoad() {
  UI.setupBoards();
  UI.setupClick();
}

class UI {
  static setupBoards() {
    const playerBoards = document.querySelectorAll('.gameboard');
    for (let n = 0; n < 2; n++){   // setup each board
      for (let i = 0; i < 10; i++) { // setup each row
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 10; j++) { // setup each cell
          const cell = document. createElement('div');
          cell.classList.add('cell');
          cell.setAttribute('data-x', i);
          cell.setAttribute('data-y', j);
          if (n == 0) {
            if (player1.board.board[i][j].hasShip) {
              cell.classList.add('withShip');
            }
          }
          row.appendChild(cell);
        }
        playerBoards[n].appendChild(row);
      }
    }
  }

  static setupClick() {
    const cells = document.querySelectorAll('.cell');
    for (const each of cells) {
      each.addEventListener('click',(e) => {
        this.clickAttack(e);
      })
    }
  }
  
  static clickAttack(e) {
    if (!isGameOver) {
      if (e.target.classList.contains('shot')) return; // Don't allow clicks on shot spaces
      if (e.target.parentNode.parentNode.classList.contains('right')) { // Only allow clicks on the right (opponent) gameboard
        const y = e.target.dataset.y;
        const x = e.target.dataset.x;
        // if (player1Turn) {
          let attack = player1.attack(x, y, player2.board);
          if (attack == 'miss') {
            e.target.classList.add('miss');
            this.player2RandomAttack(e);
          }
          if (attack == 'hit') {
            e.target.classList.add('hit');
            player2.board.board[x][y].hasShip.domTargets.push(e.target);
          } else if (attack == 'sunk') {
            e.target.classList.add('hit');
            player2.board.board[x][y].hasShip.domTargets.push(e.target);
            player2.board.board[x][y].hasShip.domTargets.forEach(e => {
              e.classList.add('sunk');
            })
            this.showSunkMessage(player1, player2.board.board[x][y].hasShip.name)
            if (player2.board.isGameOver()) {
              return this.showGameOver(player2)
            }
          }
        // } else {
        //   player2.attack(x, y, player1.board);
        // } 
        // player1Turn = player1Turn ? false : true;
      }
    }
  }

  static player2RandomAttack(e) {
    const returnMessages = player2.randomAttack(player1.board);
    let x = returnMessages[0];
    let y = returnMessages[1];
    let attack = returnMessages[2];
    const cell = document.querySelector(`.left .cell[data-x="${x}"][data-y="${y}"]`);
    cell.classList.add('shot');
    if (attack == 'miss') {
      cell.classList.add('miss');
    } else if (attack == 'hit') {
      cell.classList.add('hit');
      player1.board.board[x][y].hasShip.domTargets.push(cell);
    } else if (attack == 'sunk') {
      cell.classList.add('hit');
      player1.board.board[x][y].hasShip.domTargets.push(cell);
      player1.board.board[x][y].hasShip.domTargets.forEach(e => {
        e.classList.add('sunk');
      })
      this.showSunkMessage(player2, player1.board.board[x][y].hasShip.name)
      if (player1.board.isGameOver()) {
        return this.showGameOver(player1)
      };
    }
    if (attack == 'hit' || attack == 'sunk') this.player2RandomAttack();
  }

  static showSunkMessage(player, shipName) {
    const message = document.querySelector('.text > h3')
    message.style.color = 'darkred';
    if (player == player1) {
      message.innerHTML = `You have sunk your opponent's ${shipName}!`
    } else {
      message.innerHTML = `The opponent has sunk your ${shipName}!`
    }
  }

  static showGameOver(player) {
    isGameOver = true;
    const modal = document.querySelector('.gameover-modal');
    modal.classList.add('active');
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', () => this.gameOver());
    this.showGameOverMessage(player);
  }

  static showGameOverMessage(player) {
    const message = document.querySelector('.text > h3')
    message.style.color = 'darkred';
    if (player == player1) {
      message.innerHTML = `You have won battleship! All your opponents ships are sunk!`;
    } else {
      message.innerHTML = `The opponent has sunk all of your ships! You have lost!`;
    }
  }

  static gameOver() {
    const modal = document.querySelector('.gameover-modal');
    modal.classList.remove('active');
    player1.board.reset();
    player2.board.reset();
    this.domReset();
    isGameOver = false;
  }

  static domReset() {
    const boards = document.querySelectorAll('.gameboard');
    boards.forEach(board => {
      board.innerHTML = '';
    })
    this.setupBoards();
    this.setupClick();
  }

}


;// CONCATENATED MODULE: ./src/index.js



document.addEventListener('DOMContentLoaded', () => {
  DOMLoad();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELEVBQUUsYUFBYSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFNBQVM7QUFDcEUsTUFBTTtBQUNOLHdEQUF3RCxTQUFTO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7OztBQ3hKcUI7QUFDYzs7QUFFbkM7QUFDQSxFQUFFLE9BQU87QUFDVCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4vKiBIZWFkZXIgKi9cbi8qIFxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xufVxuXG4uaGVhZGVyIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufSAqL1xuXG4vKiBGb290ZXIgKi9cbi8qIFxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyZXk7XG59XG4uZm9vdGVyIGltZyB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0gKi9cblxuLyogZ2FtZWJvYXJkcyAqL1xuLyogXG4uZ2FtZWJvYXJkc3tcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFyZWEge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdhbWVib2FyZCB7XG4gIHdpZHRoOiAyMHZ3O1xuICBoZWlnaHQ6IDIwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIC5nYW1lYm9hcmQge1xuICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICBoZWlnaHQ6IDQwdnc7XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5nYW1lYm9hcmRzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5nYW1lYm9hcmQge1xuICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICBoZWlnaHQ6IDQwdnc7XG59XG59XG5cbi5yb3cge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLndpdGhTaGlwIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5jZWxsIHtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VsbC5taXNzIHtcbiAgYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLmNlbGwuaGl0IHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4uY2VsbC5zdW5rIHtcbiAgYmFja2dyb3VuZDogZGFya3JlZDtcbn1cblxuLmdhbWVvdmVyLW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMjUlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMiUgOCU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IGRhcmtyZWQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hY3RpdmUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQXVCVztBQUNYOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSCxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7O0FBRUgsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtHR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLyogXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59ICovXFxuXFxuLyogRm9vdGVyICovXFxuLyogXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuLmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gKi9cXG5cXG4vKiBnYW1lYm9hcmRzICovXFxuLyogXFxuLmdhbWVib2FyZHN7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFyZWEge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcXG4gIC5nYW1lYm9hcmQge1xcbiAgICAgIHdpZHRoOiA0MHZ3O1xcbiAgICAgIGhlaWdodDogNDB2dztcXG59XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAuZ2FtZWJvYXJkcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZ2FtZWJvYXJkIHtcXG4gICAgICB3aWR0aDogNDB2dztcXG4gICAgICBoZWlnaHQ6IDQwdnc7XFxufVxcbn1cXG5cXG4ucm93IHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi53aXRoU2hpcCB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuLmNlbGwge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBza3libHVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2VsbC5taXNzIHtcXG4gIGJhY2tncm91bmQ6IGdyZXk7XFxufVxcblxcbi5jZWxsLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5jZWxsLnN1bmsge1xcbiAgYmFja2dyb3VuZDogZGFya3JlZDtcXG59XFxuXFxuLmdhbWVvdmVyLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogMjUlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAyJSA4JTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCBkYXJrcmVkO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy50aW1lc0hpdCA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5kb21UYXJnZXRzID0gW107XG4gIH1cbiAgaGl0KCkge1xuICAgIHRoaXMudGltZXNIaXQrKztcbiAgICB0aGlzLmlzU3VuaygpO1xuICB9XG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy50aW1lc0hpdCA9PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtTaGlwfTsiLCJpbXBvcnQge1NoaXB9IGZyb20gJy4vc2hpcC5qcyc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgdGhpcy5ib2FyZC5wdXNoKFtdKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldLnB1c2goe1xuICAgICAgICAgIGhhc1NoaXA6IGZhbHNlLFxuICAgICAgICAgIGlzU2hvdDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgfVxuICBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgaXNWZXJ0aWNhbCkge1xuICAgIGlmICghdGhpcy5pc1BsYWNlbWVudFBvc3NpYmxlKHNoaXAsIHgsIHksIGlzVmVydGljYWwpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldLmhhc1NoaXAgPSBzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0uaGFzU2hpcCA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCgnQ2FycmllcicsIDUpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKCdEZXN0cm95ZXInLCAzKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoJ0JhdHRsZXNoaXAnLCA0KTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgnU3VibWFyaW5lJywgMik7XG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IG5ldyBTaGlwKCdQYXRyb2wgQm9hdCcsIDEpO1xuICAgIHNoaXBzLnB1c2goY2FycmllciwgZGVzdHJveWVyLCBiYXR0bGVzaGlwLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQpO1xuICAgIGxldCBzdWNjZXNzZnVsUGxhY2VtZW50cyA9IDA7XG4gICAgd2hpbGUgKHN1Y2Nlc3NmdWxQbGFjZW1lbnRzIDwgNSkge1xuICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGxldCBpc1ZlcnRpY2FsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDE7XG4gICAgICBpZiAodGhpcy5wbGFjZVNoaXAoc2hpcHNbc3VjY2Vzc2Z1bFBsYWNlbWVudHNdLCB4LCB5LCBpc1ZlcnRpY2FsKSkge1xuICAgICAgICBzdWNjZXNzZnVsUGxhY2VtZW50cysrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpc1BsYWNlbWVudFBvc3NpYmxlKHNoaXAsIHgsIHksIGlzVmVydGljYWwpIHtcbiAgICAvL0NoZWNrIGlmIG5lY2Vzc2FyeSBzcG90cyBhcmUgaW4gZ2FtZWJvYXJkIGFuZCBhdmFpbGFibGVcbiAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh4ICsgaSA+PSB0aGlzLmJvYXJkLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICBmb3IgKGxldCBuID0gLTE7IG4gPCAyOyBuKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ggPSB4ICsgaSArIGo7XG4gICAgICAgICAgICBjb25zdCBuZXdZID0geSArIG47XG4gICAgICAgICAgICBpZiAobmV3WCA+PSAwICYmIG5ld1ggPCAxMCAmJiBuZXdZID49IDAgJiYgbmV3WSA8IDEwKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW25ld1hdW25ld1ldLmhhc1NoaXApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gIFxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHkgKyBpID49IHRoaXMuYm9hcmQubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGogPSAtMTsgaiA8IDI7IGorKykge1xuICAgICAgICAgIGZvciAobGV0IG4gPSAtMTsgbiA8IDI7IG4rKykge1xuICAgICAgICAgICAgY29uc3QgbmV3WCA9IHggKyBqO1xuICAgICAgICAgICAgY29uc3QgbmV3WSA9IHkgKyBpICsgbjtcbiAgICAgICAgICAgIGlmIChuZXdYID49IDAgJiYgbmV3WCA8IDEwICYmIG5ld1kgPj0gMCAmJiBuZXdZIDwgMTApIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbbmV3WF1bbmV3WV0uaGFzU2hpcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICB0aGlzLmJvYXJkW3hdW3ldLmlzU2hvdCA9IHRydWU7XG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0uaGFzU2hpcCkge1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oYXNTaGlwLmhpdCgpO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beV0uaGFzU2hpcC5zdW5rID09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuICdzdW5rJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnaGl0JztcbiAgICB9XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfVxuICBpc0dhbWVPdmVyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdLmhhc1NoaXAgJiYgdGhpcy5ib2FyZFtpXVtqXS5oYXNTaGlwLnN1bmsgPT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG59XG5cbmV4cG9ydCB7R2FtZWJvYXJkfTsiLCJpbXBvcnQge0dhbWVib2FyZH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG4gIGF0dGFjayh4LCB5LCBnYW1lYm9hcmQpIHtcbiAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLmlzU2hvdCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxuICByYW5kb21BdHRhY2soZ2FtZWJvYXJkKSB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgZG8ge1xuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfSB3aGlsZSAoZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLmlzU2hvdCk7XG4gICAgcmV0dXJuIFt4LCB5LCBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KV07XG4gIH1cbn1cblxuZXhwb3J0IHtQbGF5ZXJ9IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyLmpzJztcblxuY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXIoJ1BsYXllcjEnKTtcbmNvbnN0IHBsYXllcjIgPSBuZXcgUGxheWVyKCdQbGF5ZXIyJyk7XG5sZXQgcGxheWVyMVR1cm4gPSB0cnVlO1xubGV0IGlzR2FtZU92ZXIgPSBmYWxzZTtcblxuZnVuY3Rpb24gRE9NTG9hZCgpIHtcbiAgVUkuc2V0dXBCb2FyZHMoKTtcbiAgVUkuc2V0dXBDbGljaygpO1xufVxuXG5jbGFzcyBVSSB7XG4gIHN0YXRpYyBzZXR1cEJvYXJkcygpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkJyk7XG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCAyOyBuKyspeyAgIC8vIHNldHVwIGVhY2ggYm9hcmRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyBzZXR1cCBlYWNoIHJvd1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHsgLy8gc2V0dXAgZWFjaCBjZWxsXG4gICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LiBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgaSk7XG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIGopO1xuICAgICAgICAgIGlmIChuID09IDApIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxLmJvYXJkLmJvYXJkW2ldW2pdLmhhc1NoaXApIHtcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCd3aXRoU2hpcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyQm9hcmRzW25dLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNldHVwQ2xpY2soKSB7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIGZvciAoY29uc3QgZWFjaCBvZiBjZWxscykge1xuICAgICAgZWFjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICAgICAgdGhpcy5jbGlja0F0dGFjayhlKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIFxuICBzdGF0aWMgY2xpY2tBdHRhY2soZSkge1xuICAgIGlmICghaXNHYW1lT3Zlcikge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2hvdCcpKSByZXR1cm47IC8vIERvbid0IGFsbG93IGNsaWNrcyBvbiBzaG90IHNwYWNlc1xuICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3JpZ2h0JykpIHsgLy8gT25seSBhbGxvdyBjbGlja3Mgb24gdGhlIHJpZ2h0IChvcHBvbmVudCkgZ2FtZWJvYXJkXG4gICAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0Lnk7XG4gICAgICAgIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0Lng7XG4gICAgICAgIC8vIGlmIChwbGF5ZXIxVHVybikge1xuICAgICAgICAgIGxldCBhdHRhY2sgPSBwbGF5ZXIxLmF0dGFjayh4LCB5LCBwbGF5ZXIyLmJvYXJkKTtcbiAgICAgICAgICBpZiAoYXR0YWNrID09ICdtaXNzJykge1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyUmFuZG9tQXR0YWNrKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXR0YWNrID09ICdoaXQnKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIHBsYXllcjIuYm9hcmQuYm9hcmRbeF1beV0uaGFzU2hpcC5kb21UYXJnZXRzLnB1c2goZS50YXJnZXQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrID09ICdzdW5rJykge1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICBwbGF5ZXIyLmJvYXJkLmJvYXJkW3hdW3ldLmhhc1NoaXAuZG9tVGFyZ2V0cy5wdXNoKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIHBsYXllcjIuYm9hcmQuYm9hcmRbeF1beV0uaGFzU2hpcC5kb21UYXJnZXRzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2hvd1N1bmtNZXNzYWdlKHBsYXllcjEsIHBsYXllcjIuYm9hcmQuYm9hcmRbeF1beV0uaGFzU2hpcC5uYW1lKVxuICAgICAgICAgICAgaWYgKHBsYXllcjIuYm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dHYW1lT3ZlcihwbGF5ZXIyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICBwbGF5ZXIyLmF0dGFjayh4LCB5LCBwbGF5ZXIxLmJvYXJkKTtcbiAgICAgICAgLy8gfSBcbiAgICAgICAgLy8gcGxheWVyMVR1cm4gPSBwbGF5ZXIxVHVybiA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcGxheWVyMlJhbmRvbUF0dGFjayhlKSB7XG4gICAgY29uc3QgcmV0dXJuTWVzc2FnZXMgPSBwbGF5ZXIyLnJhbmRvbUF0dGFjayhwbGF5ZXIxLmJvYXJkKTtcbiAgICBsZXQgeCA9IHJldHVybk1lc3NhZ2VzWzBdO1xuICAgIGxldCB5ID0gcmV0dXJuTWVzc2FnZXNbMV07XG4gICAgbGV0IGF0dGFjayA9IHJldHVybk1lc3NhZ2VzWzJdO1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGVmdCAuY2VsbFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3Nob3QnKTtcbiAgICBpZiAoYXR0YWNrID09ICdtaXNzJykge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgfSBlbHNlIGlmIChhdHRhY2sgPT0gJ2hpdCcpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICBwbGF5ZXIxLmJvYXJkLmJvYXJkW3hdW3ldLmhhc1NoaXAuZG9tVGFyZ2V0cy5wdXNoKGNlbGwpO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrID09ICdzdW5rJykge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIHBsYXllcjEuYm9hcmQuYm9hcmRbeF1beV0uaGFzU2hpcC5kb21UYXJnZXRzLnB1c2goY2VsbCk7XG4gICAgICBwbGF5ZXIxLmJvYXJkLmJvYXJkW3hdW3ldLmhhc1NoaXAuZG9tVGFyZ2V0cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgIH0pXG4gICAgICB0aGlzLnNob3dTdW5rTWVzc2FnZShwbGF5ZXIyLCBwbGF5ZXIxLmJvYXJkLmJvYXJkW3hdW3ldLmhhc1NoaXAubmFtZSlcbiAgICAgIGlmIChwbGF5ZXIxLmJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93R2FtZU92ZXIocGxheWVyMSlcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChhdHRhY2sgPT0gJ2hpdCcgfHwgYXR0YWNrID09ICdzdW5rJykgdGhpcy5wbGF5ZXIyUmFuZG9tQXR0YWNrKCk7XG4gIH1cblxuICBzdGF0aWMgc2hvd1N1bmtNZXNzYWdlKHBsYXllciwgc2hpcE5hbWUpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQgPiBoMycpXG4gICAgbWVzc2FnZS5zdHlsZS5jb2xvciA9ICdkYXJrcmVkJztcbiAgICBpZiAocGxheWVyID09IHBsYXllcjEpIHtcbiAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gYFlvdSBoYXZlIHN1bmsgeW91ciBvcHBvbmVudCdzICR7c2hpcE5hbWV9IWBcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBgVGhlIG9wcG9uZW50IGhhcyBzdW5rIHlvdXIgJHtzaGlwTmFtZX0hYFxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzaG93R2FtZU92ZXIocGxheWVyKSB7XG4gICAgaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZW92ZXItbW9kYWwnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldCcpO1xuICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5nYW1lT3ZlcigpKTtcbiAgICB0aGlzLnNob3dHYW1lT3Zlck1lc3NhZ2UocGxheWVyKTtcbiAgfVxuXG4gIHN0YXRpYyBzaG93R2FtZU92ZXJNZXNzYWdlKHBsYXllcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCA+IGgzJylcbiAgICBtZXNzYWdlLnN0eWxlLmNvbG9yID0gJ2RhcmtyZWQnO1xuICAgIGlmIChwbGF5ZXIgPT0gcGxheWVyMSkge1xuICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBgWW91IGhhdmUgd29uIGJhdHRsZXNoaXAhIEFsbCB5b3VyIG9wcG9uZW50cyBzaGlwcyBhcmUgc3VuayFgO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmlubmVySFRNTCA9IGBUaGUgb3Bwb25lbnQgaGFzIHN1bmsgYWxsIG9mIHlvdXIgc2hpcHMhIFlvdSBoYXZlIGxvc3QhYDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2FtZU92ZXIoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZW92ZXItbW9kYWwnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnJlc2V0KCk7XG4gICAgcGxheWVyMi5ib2FyZC5yZXNldCgpO1xuICAgIHRoaXMuZG9tUmVzZXQoKTtcbiAgICBpc0dhbWVPdmVyID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZG9tUmVzZXQoKSB7XG4gICAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZCcpO1xuICAgIGJvYXJkcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgIGJvYXJkLmlubmVySFRNTCA9ICcnO1xuICAgIH0pXG4gICAgdGhpcy5zZXR1cEJvYXJkcygpO1xuICAgIHRoaXMuc2V0dXBDbGljaygpO1xuICB9XG5cbn1cblxuZXhwb3J0IHtET01Mb2FkLCBVSX0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7RE9NTG9hZH0gZnJvbSAnLi9qcy91aS5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIERPTUxvYWQoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9