/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Georgia", serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #8b4513 0%, #d2b48c 100%);
  min-height: 100vh;
}

header {
  background: rgba(139, 69, 19, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0 2rem;
}

.tab-button {
  background: transparent;
  border: 2px solid #f5deb3;
  color: #f5deb3;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.tab-button:hover {
  background: #f5deb3;
  color: #8b4513;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(245, 222, 179, 0.4);
}

.tab-button.active {
  background: #f5deb3;
  color: #8b4513;
  box-shadow: 0 0 20px rgba(245, 222, 179, 0.6);
}

#content {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  min-height: 70vh;
}

.page {
  padding: 3rem;
  text-align: center;
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero {
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 3.5rem;
  color: #8b4513;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.hero h2 {
  font-size: 1.5rem;
  color: #cd853f;
  margin-bottom: 2rem;
  font-style: italic;
}

.hero-image {
  width: 400px;
  height: 300px;
  background: linear-gradient(45deg, #8b4513, #d2b48c);
  border-radius: 15px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.menu-category {
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.menu-category h3 {
  color: #8b4513;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #d2b48c;
  padding-bottom: 0.5rem;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dotted #ccc;
}

.menu-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.item-name {
  font-weight: bold;
  color: #333;
}

.item-price {
  color: #8b4513;
  font-weight: bold;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  text-align: left;
}

.contact-section {
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.contact-section h3 {
  color: #8b4513;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #d2b48c;
  padding-bottom: 0.5rem;
}

.contact-section p {
  margin-bottom: 0.5rem;
  color: #555;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }

  .tab-button {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-image {
    width: 300px;
    height: 200px;
    font-size: 2rem;
  }

  .page {
    padding: 2rem 1rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,WAAW;EACX,6DAA6D;EAC7D,iBAAiB;AACnB;;AAEA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,eAAe;EACf,yCAAyC;EACzC,gBAAgB;EAChB,MAAM;EACN,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;EACd,oBAAoB;EACpB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,2BAA2B;EAC3B,+CAA+C;AACjD;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,6CAA6C;AAC/C;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,qCAAqC;EACrC,mBAAmB;EACnB,0CAA0C;EAC1C,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE;IACE,UAAU;IACV,2BAA2B;EAC7B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oDAAoD;EACpD,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,yCAAyC;AAC3C;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,qBAAqB;EACrB,gCAAgC;EAChC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE;IACE,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,sBAAsB;IACtB,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,eAAe;EACjB;;EAEA;IACE,kBAAkB;EACpB;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Georgia\", serif;\n  line-height: 1.6;\n  color: #333;\n  background: linear-gradient(135deg, #8b4513 0%, #d2b48c 100%);\n  min-height: 100vh;\n}\n\nheader {\n  background: rgba(139, 69, 19, 0.95);\n  backdrop-filter: blur(10px);\n  padding: 1rem 0;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\nnav {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  padding: 0 2rem;\n}\n\n.tab-button {\n  background: transparent;\n  border: 2px solid #f5deb3;\n  color: #f5deb3;\n  padding: 0.8rem 2rem;\n  font-size: 1.1rem;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 25px;\n  transition: all 0.3s ease;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.tab-button:hover {\n  background: #f5deb3;\n  color: #8b4513;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(245, 222, 179, 0.4);\n}\n\n.tab-button.active {\n  background: #f5deb3;\n  color: #8b4513;\n  box-shadow: 0 0 20px rgba(245, 222, 179, 0.6);\n}\n\n#content {\n  max-width: 1200px;\n  margin: 2rem auto;\n  padding: 0 2rem;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 15px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  backdrop-filter: blur(10px);\n  min-height: 70vh;\n}\n\n.page {\n  padding: 3rem;\n  text-align: center;\n  animation: fadeIn 0.5s ease-in;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.hero {\n  margin-bottom: 3rem;\n}\n\n.hero h1 {\n  font-size: 3.5rem;\n  color: #8b4513;\n  margin-bottom: 1rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.hero h2 {\n  font-size: 1.5rem;\n  color: #cd853f;\n  margin-bottom: 2rem;\n  font-style: italic;\n}\n\n.hero-image {\n  width: 400px;\n  height: 300px;\n  background: linear-gradient(45deg, #8b4513, #d2b48c);\n  border-radius: 15px;\n  margin: 2rem auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);\n}\n\n.description {\n  font-size: 1.2rem;\n  line-height: 1.8;\n  color: #555;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  margin-top: 2rem;\n}\n\n.menu-category {\n  background: #f8f8f8;\n  padding: 2rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.menu-category h3 {\n  color: #8b4513;\n  font-size: 1.8rem;\n  margin-bottom: 1.5rem;\n  border-bottom: 2px solid #d2b48c;\n  padding-bottom: 0.5rem;\n}\n\n.menu-item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px dotted #ccc;\n}\n\n.menu-item:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n\n.item-name {\n  font-weight: bold;\n  color: #333;\n}\n\n.item-price {\n  color: #8b4513;\n  font-weight: bold;\n}\n\n.contact-info {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n  margin-top: 2rem;\n  text-align: left;\n}\n\n.contact-section {\n  background: #f8f8f8;\n  padding: 2rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.contact-section h3 {\n  color: #8b4513;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  border-bottom: 2px solid #d2b48c;\n  padding-bottom: 0.5rem;\n}\n\n.contact-section p {\n  margin-bottom: 0.5rem;\n  color: #555;\n}\n\n@media (max-width: 768px) {\n  nav {\n    flex-direction: column;\n    gap: 1rem;\n  }\n\n  .tab-button {\n    padding: 0.6rem 1.5rem;\n    font-size: 1rem;\n  }\n\n  .hero h1 {\n    font-size: 2.5rem;\n  }\n\n  .hero-image {\n    width: 300px;\n    height: 200px;\n    font-size: 2rem;\n  }\n\n  .page {\n    padding: 2rem 1rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ }),

/***/ "./src/scripts/contact-page.js":
/*!*************************************!*\
  !*** ./src/scripts/contact-page.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadContactPage: () => (/* binding */ LoadContactPage)
/* harmony export */ });
function LoadContactPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactDiv = document.createElement("div");
  contactDiv.className = "page";

  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  title.style.marginBottom = "2rem";
  title.style.color = "#8B4513";

  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";

  function createContactSection(sectionTitle, items) {
    const section = document.createElement("div");
    section.className = "contact-section";

    const title = document.createElement("h3");
    title.textContent = sectionTitle;
    section.appendChild(title);

    items.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item;
      section.appendChild(p);
    });

    return section;
  }

  const location = createContactSection("Location", ["123 Via Roma", "Little Italy District", "New York, NY 10012"]);

  const hours = createContactSection("Hours", [
    "Monday - Thursday: 5:00 PM - 10:00 PM",
    "Friday - Saturday: 5:00 PM - 11:00 PM",
    "Sunday: 4:00 PM - 9:00 PM",
    "Closed on major holidays",
  ]);

  const details = createContactSection("Contact Details", [
    "Phone: (212) 555-BELLA",
    "Email: info@bellavistanyc.com",
    "Reservations: reservations@bellavistanyc.com",
    "Private Events: events@bellavistanyc.com",
  ]);

  contactInfo.appendChild(location);
  contactInfo.appendChild(hours);
  contactInfo.appendChild(details);

  contactDiv.appendChild(title);
  contactDiv.appendChild(contactInfo);
  content.appendChild(contactDiv);
}


/***/ }),

/***/ "./src/scripts/home-page.js":
/*!**********************************!*\
  !*** ./src/scripts/home-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadHomePage: () => (/* binding */ LoadHomePage)
/* harmony export */ });
function LoadHomePage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const homeDiv = document.createElement("div");
  homeDiv.className = "page";

  const hero = document.createElement("div");
  hero.className = "hero";

  const title = document.createElement("h1");
  title.textContent = "Bella Vista";

  const subtitle = document.createElement("h2");
  subtitle.textContent = "Authentic Italian Cuisine Since 1952";

  const heroImage = document.createElement("div");
  heroImage.className = "hero-image";
  heroImage.innerHTML = "🍝";

  const description = document.createElement("div");
  description.className = "description";
  description.innerHTML = `
      <p>Welcome to Bella Vista, where tradition meets taste in every bite. For over 70 years, our family has been serving the finest Italian cuisine, crafted with recipes passed down through generations.</p>
      <br>
      <p>From our hand-rolled pasta to our wood-fired pizzas, every dish is prepared with love and the freshest ingredients imported directly from Italy. Come experience the warmth of Italian hospitality in our cozy, family-friendly atmosphere.</p>
      <br>
      <p>Join us for an unforgettable dining experience where every meal is a celebration of life, family, and exceptional food.</p>
    `;

  hero.appendChild(title);
  hero.appendChild(subtitle);
  hero.appendChild(heroImage);

  homeDiv.appendChild(hero);
  homeDiv.appendChild(description);

  content.appendChild(homeDiv);
}


/***/ }),

/***/ "./src/scripts/menu-page.js":
/*!**********************************!*\
  !*** ./src/scripts/menu-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadMenuPage: () => (/* binding */ LoadMenuPage)
/* harmony export */ });
function LoadMenuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuDiv = document.createElement("div");
  menuDiv.className = "page";

  const title = document.createElement("h1");
  title.textContent = "Our Menu";
  title.style.marginBottom = "2rem";
  title.style.color = "#8B4513";

  const menuGrid = document.createElement("div");
  menuGrid.className = "menu-grid";

  function createMenuCategory(categoryName, items) {
    const category = document.createElement("div");
    category.className = "menu-category";

    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = categoryName;
    category.appendChild(categoryTitle);

    items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";

      const itemName = document.createElement("span");
      itemName.className = "item-name";
      itemName.textContent = item.name;

      const itemPrice = document.createElement("span");
      itemPrice.className = "item-price";
      itemPrice.textContent = item.price;

      menuItem.appendChild(itemName);
      menuItem.appendChild(itemPrice);
      category.appendChild(menuItem);
    });

    return category;
  }

  const appetizers = createMenuCategory("Antipasti", [
    { name: "Bruschetta Tradizionale", price: "$12" },
    { name: "Antipasto Misto", price: "$18" },
    { name: "Calamari Fritti", price: "$16" },
    { name: "Caprese di Bufala", price: "$14" },
  ]);

  const mains = createMenuCategory("Primi Piatti", [
    { name: "Spaghetti Carbonara", price: "$22" },
    { name: "Lasagna della Nonna", price: "$24" },
    { name: "Risotto ai Porcini", price: "$26" },
    { name: "Osso Buco alla Milanese", price: "$32" },
  ]);

  const pizzas = createMenuCategory("Pizze", [
    { name: "Margherita DOC", price: "$18" },
    { name: "Quattro Stagioni", price: "$22" },
    { name: "Diavola", price: "$20" },
    { name: "Prosciutto e Funghi", price: "$24" },
  ]);

  const desserts = createMenuCategory("Dolci", [
    { name: "Tiramisu della Casa", price: "$9" },
    { name: "Panna Cotta ai Frutti", price: "$8" },
    { name: "Cannoli Siciliani", price: "$10" },
    { name: "Gelato Artigianale", price: "$7" },
  ]);

  menuGrid.appendChild(appetizers);
  menuGrid.appendChild(mains);
  menuGrid.appendChild(pizzas);
  menuGrid.appendChild(desserts);

  menuDiv.appendChild(title);
  menuDiv.appendChild(menuGrid);
  content.appendChild(menuDiv);
}


/***/ }),

/***/ "./src/scripts/set-active-tab.js":
/*!***************************************!*\
  !*** ./src/scripts/set-active-tab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setActiveTab: () => (/* binding */ setActiveTab)
/* harmony export */ });
function setActiveTab(activeButton) {
  const allButtons = document.querySelectorAll(".tab-button");
  allButtons.forEach((button) => button.classList.remove("active"));
  activeButton.classList.add("active");
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
/* harmony import */ var _scripts_contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/contact-page */ "./src/scripts/contact-page.js");
/* harmony import */ var _scripts_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/home-page */ "./src/scripts/home-page.js");
/* harmony import */ var _scripts_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/menu-page */ "./src/scripts/menu-page.js");
/* harmony import */ var _scripts_set_active_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/set-active-tab */ "./src/scripts/set-active-tab.js");







document.addEventListener("DOMContentLoaded", () => {
  console.log("Restaurant page loaded!");

  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");

  (0,_scripts_home_page__WEBPACK_IMPORTED_MODULE_2__.LoadHomePage)();

  homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    (0,_scripts_home_page__WEBPACK_IMPORTED_MODULE_2__.LoadHomePage)();
    (0,_scripts_set_active_tab__WEBPACK_IMPORTED_MODULE_4__.setActiveTab)(homeBtn);
  });

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    (0,_scripts_menu_page__WEBPACK_IMPORTED_MODULE_3__.LoadMenuPage)();
    (0,_scripts_set_active_tab__WEBPACK_IMPORTED_MODULE_4__.setActiveTab)(menuBtn);
  });

  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    (0,_scripts_contact_page__WEBPACK_IMPORTED_MODULE_1__.LoadContactPage)();
    (0,_scripts_set_active_tab__WEBPACK_IMPORTED_MODULE_4__.setActiveTab)(contactBtn);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map