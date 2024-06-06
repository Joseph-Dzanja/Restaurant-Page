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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! wp12696379-fantasy-tavern-wallpapers.jpg */ "./src/wp12696379-fantasy-tavern-wallpapers.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./gothical/Medieval Scroll of Wisdom.ttf */ "./src/gothical/Medieval Scroll of Wisdom.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* boiler plate and home page style */

*,*::before,*::after{
    box-sizing: border-box;
}
html { 
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

@font-face {
  font-family: 'goth';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(truetype);
}

body{
    margin: 0;
    color: bisque;
    font-family: 'goth';
    font-size: 2rem;
}

h1{
  padding: .2em 0;
}

img{
    max-width: 100%;
}

#content{
  margin-bottom: 2em;
}

.home-btn, .open-btn{
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  display: inline;
}

.nav, .container{
  width: 90%;
  margin: 0 auto;
}

.top-nav{
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom-nav{
  margin-top: 1em;
  text-align: center;
}

.appear{
  display: none;
}

@media (min-width:630px){
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .open-btn{
    display: none;
  }
  .bottom-nav{
    display: flex;
  }
  .bottom-nav-btn{
    margin-left: 1em;
  }
  
}

.food-and-drinks-btn, .about-bards-barrel-btn, .pigeon-post-btn {
  background-color: #654321;
  border: 0 solid bisque;
  box-sizing: border-box;
  color: bisque;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.75rem;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  margin-bottom: 1em;
  max-width: 460px;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.food-and-drinks-btn:focus, .about-bards-barrel-btn:focus, .pigeon-post-btn:focus{
  outline: 0;
}

.food-and-drinks-btn:after, .about-bards-barrel-btn:after, .pigeon-post-btn:after {
  content: '';
  position: absolute;
  border: 1px solid bisque;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.food-and-drinks-btn:hover:after, .about-bards-barrel-btn:hover:after, .pigeon-post-btn:hover:after {
  bottom: 2px;
  left: 2px;
}


/*Food and Drinks page*/
.foods-container > div > div > p, .drinks-container > div > div > p{
  background-color: #654321;
  padding: 1em 1em;
}
.food1, .food2, .food3, .drink1, .drink2, .drink3{
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 5em;
}


.description{
  margin-top: 0;
  padding: 0 .5em;
  font-size: 1rem;
}

@media (min-width:635px){
  .food-items, .drink-items{
    display: flex;
    justify-content: space-between;
    
  }
  .food1, .food2, .food3, .drink1, .drink2, .drink3{
    width: 30%;
    margin-bottom: 1em;
  }
  
}

/* CONTACT US */

.font-adjust{
  font-size: 1rem;
}
.margin-adjust{
  margin-top: 0;
  margin-bottom: 0;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,qCAAqC;;AAErC;IACI,sBAAsB;AAC1B;AACA;IACI,iFAAyF;IACzF,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;EACxB;;AAEF;EACE,mBAAmB;EACnB,6DAAsE;AACxE;;AAEA;IACI,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;CACjB,cAAc;CACd,YAAY;CACZ,UAAU;CACV,aAAa;CACb,eAAe;CACf,gBAAgB;EACf,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,gBAAgB;EAClB;;AAEF;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,aAAa;EACb,sMAAsM;EACtM,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,mCAAmC;EACnC,+BAA+B;EAC/B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,wBAAwB;EACxB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,wBAAwB;EACxB,WAAW;EACX,SAAS;EACT,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,SAAS;AACX;;;AAGA,uBAAuB;AACvB;EACE,yBAAyB;EACzB,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,cAAc;EACd,kBAAkB;EAClB,kBAAkB;AACpB;;;AAGA;EACE,aAAa;EACb,eAAe;EACf,eAAe;AACjB;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;;EAEhC;EACA;IACE,UAAU;IACV,kBAAkB;EACpB;;AAEF;;AAEA,eAAe;;AAEf;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,gBAAgB;AAClB","sourcesContent":["/* boiler plate and home page style */\n\n*,*::before,*::after{\n    box-sizing: border-box;\n}\nhtml { \n    background: url('wp12696379-fantasy-tavern-wallpapers.jpg') no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n\n@font-face {\n  font-family: 'goth';\n  src: url(./gothical/Medieval\\ Scroll\\ of\\ Wisdom.ttf) format(truetype);\n}\n\nbody{\n    margin: 0;\n    color: bisque;\n    font-family: 'goth';\n    font-size: 2rem;\n}\n\nh1{\n  padding: .2em 0;\n}\n\nimg{\n    max-width: 100%;\n}\n\n#content{\n  margin-bottom: 2em;\n}\n\n.home-btn, .open-btn{\n  background: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n  display: inline;\n}\n\n.nav, .container{\n  width: 90%;\n  margin: 0 auto;\n}\n\n.top-nav{\n  margin-top: 1em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.bottom-nav{\n  margin-top: 1em;\n  text-align: center;\n}\n\n.appear{\n  display: none;\n}\n\n@media (min-width:630px){\n  .nav{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .open-btn{\n    display: none;\n  }\n  .bottom-nav{\n    display: flex;\n  }\n  .bottom-nav-btn{\n    margin-left: 1em;\n  }\n  \n}\n\n.food-and-drinks-btn, .about-bards-barrel-btn, .pigeon-post-btn {\n  background-color: #654321;\n  border: 0 solid bisque;\n  box-sizing: border-box;\n  color: bisque;\n  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.75rem;\n  text-align: center;\n  text-decoration: none #000000 solid;\n  text-decoration-thickness: auto;\n  margin-bottom: 1em;\n  max-width: 460px;\n  cursor: pointer;\n  transform: rotate(-2deg);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.food-and-drinks-btn:focus, .about-bards-barrel-btn:focus, .pigeon-post-btn:focus{\n  outline: 0;\n}\n\n.food-and-drinks-btn:after, .about-bards-barrel-btn:after, .pigeon-post-btn:after {\n  content: '';\n  position: absolute;\n  border: 1px solid bisque;\n  bottom: 4px;\n  left: 4px;\n  width: calc(100% - 1px);\n  height: calc(100% - 1px);\n}\n\n.food-and-drinks-btn:hover:after, .about-bards-barrel-btn:hover:after, .pigeon-post-btn:hover:after {\n  bottom: 2px;\n  left: 2px;\n}\n\n\n/*Food and Drinks page*/\n.foods-container > div > div > p, .drinks-container > div > div > p{\n  background-color: #654321;\n  padding: 1em 1em;\n}\n.food1, .food2, .food3, .drink1, .drink2, .drink3{\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  margin-bottom: 5em;\n}\n\n\n.description{\n  margin-top: 0;\n  padding: 0 .5em;\n  font-size: 1rem;\n}\n\n@media (min-width:635px){\n  .food-items, .drink-items{\n    display: flex;\n    justify-content: space-between;\n    \n  }\n  .food1, .food2, .food3, .drink1, .drink2, .drink3{\n    width: 30%;\n    margin-bottom: 1em;\n  }\n  \n}\n\n/* CONTACT US */\n\n.font-adjust{\n  font-size: 1rem;\n}\n.margin-adjust{\n  margin-top: 0;\n  margin-bottom: 0;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/FoodAndDrinks.js":
/*!******************************!*\
  !*** ./src/FoodAndDrinks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.jpg */ "./src/1.jpg");
/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.jpg */ "./src/2.jpg");
/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3.jpg */ "./src/3.jpg");
/* harmony import */ var _9_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./9.jpg */ "./src/9.jpg");
/* harmony import */ var _7_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./7.jpg */ "./src/7.jpg");
/* harmony import */ var _6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./6.jpg */ "./src/6.jpg");







function foodDrinks(){

    let content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }

    let container = document.createElement('div');
    container.classList.add('container');

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');



    p1.innerHTML = "⍟ 4 GOLD COINS";
    p3.innerHTML = "⍟ 4 GOLD COINS";
    p4.innerHTML = "⍟ 3 GOLD COINS";
    p5.innerHTML = "⍟ 2 GOLD COINS";
    p6.innerHTML = "⍟ 1 GOLD COIN";
    p2.innerHTML = "⍟ 1 GOLD COIN";
    
    let foodsContainer = document.createElement('div');
    let foodHeader = document.createElement('h3');
    let foodItems = document.createElement('div');
    let food1 = document.createElement('div');
    let food2 = document.createElement('div');
    let food3 = document.createElement('div');
    
    foodsContainer.classList.add('foods-container');
    foodHeader.innerHTML = "Food";
    foodItems.classList.add('food-items');
    food1.classList.add('food1');
    food2.classList.add('food2');
    food3.classList.add('food3');
    
    
    let drinksContainer = document.createElement('div');
    let drinkHeader = document.createElement('h3');
    let drinkItems = document.createElement('div');
    let drink1 = document.createElement('div');
    let drink2 = document.createElement('div');
    let drink3 = document.createElement('div');
      
    drinksContainer.classList.add('drinks-container');
    drinkHeader.innerHTML = "drinks";
    drinkItems.classList.add('drink-items');
    drink1.classList.add('drink1');
    drink2.classList.add('drink2');
    drink3.classList.add('drink3');
    
    
    const foodItem1 = new Image();
    foodItem1.src = _1_jpg__WEBPACK_IMPORTED_MODULE_0__;
    foodItem1.alt = 'picture of a dish';
    
    const foodItem2 = new Image();
    foodItem2.src = _2_jpg__WEBPACK_IMPORTED_MODULE_1__;
    foodItem2.alt = 'picture of a dish';
    
    const foodItem3 = new Image();
    foodItem3.src = _3_jpg__WEBPACK_IMPORTED_MODULE_2__;
    foodItem3.alt = 'picture of a dish';
    
    food1.appendChild(foodItem1);
    food2.appendChild(foodItem2);
    food3.appendChild(foodItem3);
    
    let food1Description = document.createElement('p');
    food1Description.classList.add('description');
    food1Description.innerHTML = "Behold, a dish of tender beef, lightly seasoned and swiftly seared over open flame. Served with a side of seasoned greens and savory herb butter.";
    
    let food2description = document.createElement('p');
    food2description.classList.add('description');
    food2description.innerHTML = "Feast upon a hearty portion of ram steak, slow-roasted with aromatic herbs and garlic. Juicy and flavorful, accompanied by roasted root vegetables and a rich pan jus.";
    
    let food3description = document.createElement('p');
    food3description.classList.add('description');
    food3description.innerHTML = "Delight in a golden-roasted chicken, marinated in a secret blend of spices and herbs from distant lands. Served with buttery mashed potatoes and a medley of seasonal vegetables.";
    
    food1.appendChild(food1Description);
    food1.appendChild(p1);
    food2.appendChild(food2description);
    food2.appendChild(p3);
    food3.appendChild(food3description);
    food3.appendChild(p4);
    
    foodItems.appendChild(food1);
    foodItems.appendChild(food2);
    foodItems.appendChild(food3);
    
    foodsContainer.appendChild(foodHeader);
    foodsContainer.appendChild(foodItems);
    
    
    
    
    
  
    
    
    
    
    
    const drinkItem1 = new Image();
    drinkItem1.src = _6_jpg__WEBPACK_IMPORTED_MODULE_5__;
    drinkItem1.alt = 'picture of a drink';
    
    const drinkItem2 = new Image();
    drinkItem2.src = _9_jpg__WEBPACK_IMPORTED_MODULE_3__;
    drinkItem2.alt = 'picture of a drink';
    
    const drinkItem3 = new Image();
    drinkItem3.src = _7_jpg__WEBPACK_IMPORTED_MODULE_4__;
    drinkItem3.alt = 'picture of a drink';
    
    drink1.appendChild(drinkItem1);
    drink2.appendChild(drinkItem2);
    drink3.appendChild(drinkItem3);
    
    let drink1Description = document.createElement('p');
    drink1Description.classList.add('description');
    drink1Description.innerHTML = "Quench thy thirst with our frothy ale, brewed with hops and barley from the finest fields. A hearty, robust drink fit for knights and adventurers alike.";
    
    let drink2description = document.createElement('p');
    drink2description.classList.add('description');
    drink2description.innerHTML = "Imbibe the nectar of the gods—our sweet and golden mead, crafted from pure honey and ancient recipes. Sip slowly and let the warmth of this ancient elixir envelop you.";
    
    let drink3description = document.createElement('p');
    drink3description.classList.add('description');
    drink3description.innerHTML = "Introducing our explosive concoction, the legendary Motolov! Brewed with fiery spirits and a touch of jest, this drink packs a bang with every sip. Handle with care and enjoy the sparks!";
    
    drink1.appendChild(drink1Description);
    drink1.appendChild(p2);
    drink2.appendChild(drink2description);
    drink2.appendChild(p6);
    drink3.appendChild(drink3description);
    drink3.appendChild(p5);
    
    drinkItems.appendChild(drink1);
    drinkItems.appendChild(drink2);
    drinkItems.appendChild(drink3);
    
    drinksContainer.appendChild(drinkHeader);
    drinksContainer.appendChild(drinkItems);
    
    
    
    container.appendChild(foodsContainer);
    container.appendChild(drinksContainer);
    content.appendChild(container);
    
    
    }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodDrinks);

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _6c2aaebfa123df5c159933809d645fb7_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./6c2aaebfa123df5c159933809d645fb7.jpg */ "./src/6c2aaebfa123df5c159933809d645fb7.jpg");
    

    function about(){

    let content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
    
    let container = document.createElement('div');
    let intro = document.createElement('h2');
    let ourTavern = document.createElement('h2');
    let offer = document.createElement('h2');
    let barkeep = document.createElement('h2');
    let revelry = document.createElement('h2');
    let introP = document.createElement('p');
    let ourTavernP = document.createElement('p');
    let offerP = document.createElement('p');
    let barkeepP = document.createElement('p');
    let revelryP = document.createElement('p');
    let barK = new Image();
    barK.src = _6c2aaebfa123df5c159933809d645fb7_jpg__WEBPACK_IMPORTED_MODULE_0__;
    barK.alt = 'barkeeper';


    container.classList.add('container');
    
    intro.innerHTML = "Hear ye, Travelers! Welcome to The Bard's Barrel";
    introP.innerHTML = "In the heart of Hearthshire, where cobblestones meet castle walls, stands The Bard's Barrel, where tankards overflow and tales unfold.";
    ourTavern.innerHTML = "Our Tavern";
    ourTavernP.innerHTML = "At The Bard's Barrel, we're all about good drinks, good company, and good times. Picture this: cozy corners, roaring fires, and barrels brimming with the finest brews this side of the realm";
    offer.innerHTML = "What's on Offer";
    offerP.innerHTML = "Tankards of ale, goblets of mead, and spirits to lift your spirits. Pair 'em with hearty bites to keep the revelry alive.";
    barkeep.innerHTML = "Our Barkeep";
    barkeepP.innerHTML = "Meet Ol' Grizz, the Barkeep at The Bard's Barrel! He's a wild soul, known for his hearty drinks and rowdy tales, but deep down, he fiercely loves his tavern. Join Grizz for a wild night of revelry and good cheer—you won't forget this adventure at The Bard's Barrel!";
    revelry.innerHTML = "Join the Revelry";
    revelryP.innerHTML = "Whether ye seek respite or revelry, The Bard's Barrel welcomes all who thirst for adventure and mirth.";

    container.appendChild(intro);
    container.appendChild(introP);
    container.appendChild(ourTavern);
    container.appendChild(ourTavernP);
    container.appendChild(offer);
    container.appendChild(offerP);
    container.appendChild(barkeep);
    container.appendChild(barK);
    container.appendChild(barkeepP);
    container.appendChild(revelry);
    container.appendChild(revelryP);

    content.appendChild(container);

    }

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FoodAndDrinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoodAndDrinks */ "./src/FoodAndDrinks.js");


function home() {
  let content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  let container = document.createElement("div");
  let barname = document.createElement("h1");
  let div = document.createElement("div");
  let paragraph = document.createElement("p");
  let button = document.createElement("button");

  container.classList.add("container");
  barname.classList.add("bar-name");
  paragraph.classList.add("bar-intro");
  button.classList.add("food-and-drinks-btn");

  button.addEventListener("click", _FoodAndDrinks__WEBPACK_IMPORTED_MODULE_0__["default"]);

  barname.innerHTML = "The Bard's Barrel";
  paragraph.innerHTML =
    '"Welcome to The Bard\'s Barrel! Where tales flow as freely as ale, And melodies weave magic in the air. Join us for a night of mirth and revelry!"';
  button.innerHTML = "Food and Drinks";

  div.appendChild(paragraph);
  div.appendChild(button);
  container.appendChild(barname);
  container.appendChild(div);
  content.appendChild(container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/pigeon.js":
/*!***********************!*\
  !*** ./src/pigeon.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function pigeon(){

    let content = document.getElementById('content');
    while(content.firstChild){
        content.removeChild(content.lastChild);
    }

    let container = document.createElement('div');
    let hr1 = document.createElement('hr');
    let h31 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p21 = document.createElement('p');
    let p22 = document.createElement('p');
    let p23 = document.createElement('p');
    let p24 = document.createElement('p');
    let p25 = document.createElement('p');
    let h32 = document.createElement('h3');
    let p31 = document.createElement('p');
    let p32 = document.createElement('p');
    let p4 = document.createElement('p');
    let hr2 = document.createElement('hr');
    let h33 = document.createElement('h3');
    let p5 = document.createElement('p');
    let hr3 = document.createElement('hr');

    container.classList.add('container');
    container.classList.add('font-adjust');
    p23.classList.add('margin-adjust');
    p24.classList.add('margin-adjust');
    p25.classList.add('margin-adjust');
    
    h31.innerHTML = "Contact Us via Pigeon Post, if Ye Dare!";
    p1.innerHTML = "Ahoy, ye seekers of revelry and roast! If ye wish to reach us by winged courier, here be the details:";
    p21.innerHTML = "Recipient: The Bard's Barrel";
    p22.innerHTML = "Address:";
    p23.innerHTML = "1 Minstrel's Way";
    p24.innerHTML = "Hearthshire Village, Fae Realm";
    p25.innerHTML = "The Realm of Hearthshire";
    h32.innerHTML = "A Word to the Wise (or not so wise)";
    p31.innerHTML = "- Strap yer message securely to yer pigeon's leg; no loose ends!";
    p32.innerHTML = "- Treat the feathered messenger well, or risk a hex upon yer next pint!";
    p4.innerHTML = "Ye parchments and missives be welcome here—just mind yer manners, or else the tavern cat may have words with ye.";
    h33.innerHTML = "Further Instructions";
    p5.innerHTML = "For those of ye favorin' ravens or enchanted scrolls, seek out the old oak by the village square. 'Twill guide ye to other means o' contact, should ye dare to venture forth.";

    container.appendChild(hr1);
    container.appendChild(h31);
    container.appendChild(p1);
    container.appendChild(p21);
    container.appendChild(p22);
    container.appendChild(p23);
    container.appendChild(p24);
    container.appendChild(p25);
    container.appendChild(h32);
    container.appendChild(p31);
    container.appendChild(p32);
    container.appendChild(p4);
    container.appendChild(hr2);
    container.appendChild(h33);
    container.appendChild(p5);
    container.appendChild(hr3);

    content.appendChild(container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pigeon);

/***/ }),

/***/ "./src/1.jpg":
/*!*******************!*\
  !*** ./src/1.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb5745fba18a15546a22.jpg";

/***/ }),

/***/ "./src/2.jpg":
/*!*******************!*\
  !*** ./src/2.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd63eb0202f1c2012f91.jpg";

/***/ }),

/***/ "./src/3.jpg":
/*!*******************!*\
  !*** ./src/3.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fef1d1036a0d5dcf5c1.jpg";

/***/ }),

/***/ "./src/6.jpg":
/*!*******************!*\
  !*** ./src/6.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "933d0d6cc5dc9c4613bd.jpg";

/***/ }),

/***/ "./src/6c2aaebfa123df5c159933809d645fb7.jpg":
/*!**************************************************!*\
  !*** ./src/6c2aaebfa123df5c159933809d645fb7.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "660b281066220c08446c.jpg";

/***/ }),

/***/ "./src/7.jpg":
/*!*******************!*\
  !*** ./src/7.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "260ecdd179dbba0c24b1.jpg";

/***/ }),

/***/ "./src/9.jpg":
/*!*******************!*\
  !*** ./src/9.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "833448fec894ef5f4234.jpg";

/***/ }),

/***/ "./src/beers.svg":
/*!***********************!*\
  !*** ./src/beers.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0be8e13bb16f7bf78dd7.svg";

/***/ }),

/***/ "./src/gothical/Medieval Scroll of Wisdom.ttf":
/*!****************************************************!*\
  !*** ./src/gothical/Medieval Scroll of Wisdom.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ba3bb3bc3e00540f3ae.ttf";

/***/ }),

/***/ "./src/menu.svg":
/*!**********************!*\
  !*** ./src/menu.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d409af950ac5c2603e8b.svg";

/***/ }),

/***/ "./src/wp12696379-fantasy-tavern-wallpapers.jpg":
/*!******************************************************!*\
  !*** ./src/wp12696379-fantasy-tavern-wallpapers.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37fe7fbcf41bd9c93162.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _beers_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beers.svg */ "./src/beers.svg");
/* harmony import */ var _menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.svg */ "./src/menu.svg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _FoodAndDrinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FoodAndDrinks */ "./src/FoodAndDrinks.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _pigeon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pigeon */ "./src/pigeon.js");








let open_nav_btn = document.querySelector('.open-btn');
open_nav_btn.addEventListener('click', ()=>{
    let bottom_nav = document.querySelector('.bottom-nav');
    bottom_nav.classList.toggle('appear');
})

let home_btn = document.querySelector('.home-btn');
const myicon = new Image();
myicon.src = _beers_svg__WEBPACK_IMPORTED_MODULE_1__;
myicon.alt = 'img';


home_btn.appendChild(myicon);

let menu_btn = document.querySelector('.open-btn');
const myMenu = new Image();
myMenu.src = _menu_svg__WEBPACK_IMPORTED_MODULE_2__;
myMenu.alt = 'menu-img';


menu_btn.appendChild(myMenu);

home_btn.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_3__["default"]);
let foodNDrinks = document.querySelector('.food-and-drinks-btn');
foodNDrinks.addEventListener('click', _FoodAndDrinks__WEBPACK_IMPORTED_MODULE_4__["default"]);

let aboutUS = document.querySelector('.about-bards-barrel-btn');
aboutUS.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_5__["default"]);


let pigeon_post_btn = document.querySelector('.pigeon-post-btn');
pigeon_post_btn.addEventListener('click', _pigeon__WEBPACK_IMPORTED_MODULE_6__["default"]);

(0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])();







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1U7QUFDRDtBQUNKO0FBQ2U7QUFDYjtBQUNFOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGFBQWEsdUNBQUk7QUFDakI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHNDQUFJO0FBQ2pCOzs7QUFHQTs7QUFFQSxtQ0FBbUMsNkNBQUk7QUFDdkM7QUFDQSxzQ0FBc0Msc0RBQVU7O0FBRWhEO0FBQ0Esa0NBQWtDLDhDQUFLOzs7QUFHdkM7QUFDQSwwQ0FBMEMsK0NBQU07O0FBRWhELGlEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0Zvb2RBbmREcmlua3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9waWdlb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIndwMTI2OTYzNzktZmFudGFzeS10YXZlcm4td2FsbHBhcGVycy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2dvdGhpY2FsL01lZGlldmFsIFNjcm9sbCBvZiBXaXNkb20udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogYm9pbGVyIHBsYXRlIGFuZCBob21lIHBhZ2Ugc3R5bGUgKi9cblxuKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmh0bWwgeyBcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2dvdGgnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuXG5ib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogYmlzcXVlO1xuICAgIGZvbnQtZmFtaWx5OiAnZ290aCc7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG5oMXtcbiAgcGFkZGluZzogLjJlbSAwO1xufVxuXG5pbWd7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4jY29udGVudHtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG4uaG9tZS1idG4sIC5vcGVuLWJ0bntcbiAgYmFja2dyb3VuZDogbm9uZTtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdGJvcmRlcjogbm9uZTtcblx0cGFkZGluZzogMDtcblx0Zm9udDogaW5oZXJpdDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRvdXRsaW5lOiBpbmhlcml0O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5uYXYsIC5jb250YWluZXJ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udG9wLW5hdntcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3R0b20tbmF2e1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFwcGVhcntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6NjMwcHgpe1xuICAubmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm9wZW4tYnRue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJvdHRvbS1uYXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuYm90dG9tLW5hdi1idG57XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgfVxuICBcbn1cblxuLmZvb2QtYW5kLWRyaW5rcy1idG4sIC5hYm91dC1iYXJkcy1iYXJyZWwtYnRuLCAucGlnZW9uLXBvc3QtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1NDMyMTtcbiAgYm9yZGVyOiAwIHNvbGlkIGJpc3F1ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IGJpc3F1ZTtcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsc3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLFwiTm90byBTYW5zXCIsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCIsXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICMwMDAwMDAgc29saWQ7XG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgbWF4LXdpZHRoOiA0NjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuLmZvb2QtYW5kLWRyaW5rcy1idG46Zm9jdXMsIC5hYm91dC1iYXJkcy1iYXJyZWwtYnRuOmZvY3VzLCAucGlnZW9uLXBvc3QtYnRuOmZvY3Vze1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZm9vZC1hbmQtZHJpbmtzLWJ0bjphZnRlciwgLmFib3V0LWJhcmRzLWJhcnJlbC1idG46YWZ0ZXIsIC5waWdlb24tcG9zdC1idG46YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBiaXNxdWU7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDFweCk7XG59XG5cbi5mb29kLWFuZC1kcmlua3MtYnRuOmhvdmVyOmFmdGVyLCAuYWJvdXQtYmFyZHMtYmFycmVsLWJ0bjpob3ZlcjphZnRlciwgLnBpZ2Vvbi1wb3N0LWJ0bjpob3ZlcjphZnRlciB7XG4gIGJvdHRvbTogMnB4O1xuICBsZWZ0OiAycHg7XG59XG5cblxuLypGb29kIGFuZCBEcmlua3MgcGFnZSovXG4uZm9vZHMtY29udGFpbmVyID4gZGl2ID4gZGl2ID4gcCwgLmRyaW5rcy1jb250YWluZXIgPiBkaXYgPiBkaXYgPiBwe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU0MzIxO1xuICBwYWRkaW5nOiAxZW0gMWVtO1xufVxuLmZvb2QxLCAuZm9vZDIsIC5mb29kMywgLmRyaW5rMSwgLmRyaW5rMiwgLmRyaW5rM3tcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNWVtO1xufVxuXG5cbi5kZXNjcmlwdGlvbntcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZzogMCAuNWVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjYzNXB4KXtcbiAgLmZvb2QtaXRlbXMsIC5kcmluay1pdGVtc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBcbiAgfVxuICAuZm9vZDEsIC5mb29kMiwgLmZvb2QzLCAuZHJpbmsxLCAuZHJpbmsyLCAuZHJpbmsze1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG4gIFxufVxuXG4vKiBDT05UQUNUIFVTICovXG5cbi5mb250LWFkanVzdHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm1hcmdpbi1hZGp1c3R7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFDQUFxQzs7QUFFckM7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlGQUF5RjtJQUN6Riw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7RUFDeEI7O0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIsNkRBQXNFO0FBQ3hFOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0NBQ2pCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUY7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc01BQXNNO0VBQ3RNLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0FBQ1g7OztBQUdBLHVCQUF1QjtBQUN2QjtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7O0VBRWhDO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztBQUVGOztBQUVBLGVBQWU7O0FBRWY7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGJvaWxlciBwbGF0ZSBhbmQgaG9tZSBwYWdlIHN0eWxlICovXFxuXFxuKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWwgeyBcXG4gICAgYmFja2dyb3VuZDogdXJsKCd3cDEyNjk2Mzc5LWZhbnRhc3ktdGF2ZXJuLXdhbGxwYXBlcnMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZ290aCc7XFxuICBzcmM6IHVybCguL2dvdGhpY2FsL01lZGlldmFsXFxcXCBTY3JvbGxcXFxcIG9mXFxcXCBXaXNkb20udHRmKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiBiaXNxdWU7XFxuICAgIGZvbnQtZmFtaWx5OiAnZ290aCc7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaDF7XFxuICBwYWRkaW5nOiAuMmVtIDA7XFxufVxcblxcbmltZ3tcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jY29udGVudHtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG59XFxuXFxuLmhvbWUtYnRuLCAub3Blbi1idG57XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5uYXYsIC5jb250YWluZXJ7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50b3AtbmF2e1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib3R0b20tbmF2e1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXBwZWFye1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6NjMwcHgpe1xcbiAgLm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLm9wZW4tYnRue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmJvdHRvbS1uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuYm90dG9tLW5hdi1idG57XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxuICB9XFxuICBcXG59XFxuXFxuLmZvb2QtYW5kLWRyaW5rcy1idG4sIC5hYm91dC1iYXJkcy1iYXJyZWwtYnRuLCAucGlnZW9uLXBvc3QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NTQzMjE7XFxuICBib3JkZXI6IDAgc29saWQgYmlzcXVlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiBiaXNxdWU7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZixzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sXFxcIkhlbHZldGljYSBOZXVlXFxcIixBcmlhbCxcXFwiTm90byBTYW5zXFxcIixzYW5zLXNlcmlmLFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIixcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIzAwMDAwMCBzb2xpZDtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBtYXgtd2lkdGg6IDQ2MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbi5mb29kLWFuZC1kcmlua3MtYnRuOmZvY3VzLCAuYWJvdXQtYmFyZHMtYmFycmVsLWJ0bjpmb2N1cywgLnBpZ2Vvbi1wb3N0LWJ0bjpmb2N1c3tcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi5mb29kLWFuZC1kcmlua3MtYnRuOmFmdGVyLCAuYWJvdXQtYmFyZHMtYmFycmVsLWJ0bjphZnRlciwgLnBpZ2Vvbi1wb3N0LWJ0bjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJpc3F1ZTtcXG4gIGJvdHRvbTogNHB4O1xcbiAgbGVmdDogNHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDFweCk7XFxufVxcblxcbi5mb29kLWFuZC1kcmlua3MtYnRuOmhvdmVyOmFmdGVyLCAuYWJvdXQtYmFyZHMtYmFycmVsLWJ0bjpob3ZlcjphZnRlciwgLnBpZ2Vvbi1wb3N0LWJ0bjpob3ZlcjphZnRlciB7XFxuICBib3R0b206IDJweDtcXG4gIGxlZnQ6IDJweDtcXG59XFxuXFxuXFxuLypGb29kIGFuZCBEcmlua3MgcGFnZSovXFxuLmZvb2RzLWNvbnRhaW5lciA+IGRpdiA+IGRpdiA+IHAsIC5kcmlua3MtY29udGFpbmVyID4gZGl2ID4gZGl2ID4gcHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NTQzMjE7XFxuICBwYWRkaW5nOiAxZW0gMWVtO1xcbn1cXG4uZm9vZDEsIC5mb29kMiwgLmZvb2QzLCAuZHJpbmsxLCAuZHJpbmsyLCAuZHJpbmsze1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNWVtO1xcbn1cXG5cXG5cXG4uZGVzY3JpcHRpb257XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgcGFkZGluZzogMCAuNWVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDo2MzVweCl7XFxuICAuZm9vZC1pdGVtcywgLmRyaW5rLWl0ZW1ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIFxcbiAgfVxcbiAgLmZvb2QxLCAuZm9vZDIsIC5mb29kMywgLmRyaW5rMSwgLmRyaW5rMiwgLmRyaW5rM3tcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcbiAgXFxufVxcblxcbi8qIENPTlRBQ1QgVVMgKi9cXG5cXG4uZm9udC1hZGp1c3R7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5tYXJnaW4tYWRqdXN0e1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmb29kMXAgZnJvbSAnLi8xLmpwZyc7XG5pbXBvcnQgZm9vZDJwIGZyb20gJy4vMi5qcGcnO1xuaW1wb3J0IGZvb2QzcCBmcm9tICcuLzMuanBnJztcbmltcG9ydCBkcmluazFwIGZyb20gJy4vOS5qcGcnO1xuaW1wb3J0IGRyaW5rM3AgZnJvbSAnLi83LmpwZyc7XG5pbXBvcnQgZHJpbms0cCBmcm9tICcuLzYuanBnJztcblxuZnVuY3Rpb24gZm9vZERyaW5rcygpe1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgbGV0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cblxuXG4gICAgcDEuaW5uZXJIVE1MID0gXCLijZ8gNCBHT0xEIENPSU5TXCI7XG4gICAgcDMuaW5uZXJIVE1MID0gXCLijZ8gNCBHT0xEIENPSU5TXCI7XG4gICAgcDQuaW5uZXJIVE1MID0gXCLijZ8gMyBHT0xEIENPSU5TXCI7XG4gICAgcDUuaW5uZXJIVE1MID0gXCLijZ8gMiBHT0xEIENPSU5TXCI7XG4gICAgcDYuaW5uZXJIVE1MID0gXCLijZ8gMSBHT0xEIENPSU5cIjtcbiAgICBwMi5pbm5lckhUTUwgPSBcIuKNnyAxIEdPTEQgQ09JTlwiO1xuICAgIFxuICAgIGxldCBmb29kc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBmb29kSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBsZXQgZm9vZEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGZvb2QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGZvb2QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGZvb2QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgZm9vZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vZHMtY29udGFpbmVyJyk7XG4gICAgZm9vZEhlYWRlci5pbm5lckhUTUwgPSBcIkZvb2RcIjtcbiAgICBmb29kSXRlbXMuY2xhc3NMaXN0LmFkZCgnZm9vZC1pdGVtcycpO1xuICAgIGZvb2QxLmNsYXNzTGlzdC5hZGQoJ2Zvb2QxJyk7XG4gICAgZm9vZDIuY2xhc3NMaXN0LmFkZCgnZm9vZDInKTtcbiAgICBmb29kMy5jbGFzc0xpc3QuYWRkKCdmb29kMycpO1xuICAgIFxuICAgIFxuICAgIGxldCBkcmlua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZHJpbmtIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGxldCBkcmlua0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRyaW5rMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBkcmluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZHJpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBcbiAgICBkcmlua3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJpbmtzLWNvbnRhaW5lcicpO1xuICAgIGRyaW5rSGVhZGVyLmlubmVySFRNTCA9IFwiZHJpbmtzXCI7XG4gICAgZHJpbmtJdGVtcy5jbGFzc0xpc3QuYWRkKCdkcmluay1pdGVtcycpO1xuICAgIGRyaW5rMS5jbGFzc0xpc3QuYWRkKCdkcmluazEnKTtcbiAgICBkcmluazIuY2xhc3NMaXN0LmFkZCgnZHJpbmsyJyk7XG4gICAgZHJpbmszLmNsYXNzTGlzdC5hZGQoJ2RyaW5rMycpO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IGZvb2RJdGVtMSA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2RJdGVtMS5zcmMgPSBmb29kMXA7XG4gICAgZm9vZEl0ZW0xLmFsdCA9ICdwaWN0dXJlIG9mIGEgZGlzaCc7XG4gICAgXG4gICAgY29uc3QgZm9vZEl0ZW0yID0gbmV3IEltYWdlKCk7XG4gICAgZm9vZEl0ZW0yLnNyYyA9IGZvb2QycDtcbiAgICBmb29kSXRlbTIuYWx0ID0gJ3BpY3R1cmUgb2YgYSBkaXNoJztcbiAgICBcbiAgICBjb25zdCBmb29kSXRlbTMgPSBuZXcgSW1hZ2UoKTtcbiAgICBmb29kSXRlbTMuc3JjID0gZm9vZDNwO1xuICAgIGZvb2RJdGVtMy5hbHQgPSAncGljdHVyZSBvZiBhIGRpc2gnO1xuICAgIFxuICAgIGZvb2QxLmFwcGVuZENoaWxkKGZvb2RJdGVtMSk7XG4gICAgZm9vZDIuYXBwZW5kQ2hpbGQoZm9vZEl0ZW0yKTtcbiAgICBmb29kMy5hcHBlbmRDaGlsZChmb29kSXRlbTMpO1xuICAgIFxuICAgIGxldCBmb29kMURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2QxRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBmb29kMURlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiQmVob2xkLCBhIGRpc2ggb2YgdGVuZGVyIGJlZWYsIGxpZ2h0bHkgc2Vhc29uZWQgYW5kIHN3aWZ0bHkgc2VhcmVkIG92ZXIgb3BlbiBmbGFtZS4gU2VydmVkIHdpdGggYSBzaWRlIG9mIHNlYXNvbmVkIGdyZWVucyBhbmQgc2F2b3J5IGhlcmIgYnV0dGVyLlwiO1xuICAgIFxuICAgIGxldCBmb29kMmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2QyZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBmb29kMmRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiRmVhc3QgdXBvbiBhIGhlYXJ0eSBwb3J0aW9uIG9mIHJhbSBzdGVhaywgc2xvdy1yb2FzdGVkIHdpdGggYXJvbWF0aWMgaGVyYnMgYW5kIGdhcmxpYy4gSnVpY3kgYW5kIGZsYXZvcmZ1bCwgYWNjb21wYW5pZWQgYnkgcm9hc3RlZCByb290IHZlZ2V0YWJsZXMgYW5kIGEgcmljaCBwYW4ganVzLlwiO1xuICAgIFxuICAgIGxldCBmb29kM2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2QzZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBmb29kM2Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiRGVsaWdodCBpbiBhIGdvbGRlbi1yb2FzdGVkIGNoaWNrZW4sIG1hcmluYXRlZCBpbiBhIHNlY3JldCBibGVuZCBvZiBzcGljZXMgYW5kIGhlcmJzIGZyb20gZGlzdGFudCBsYW5kcy4gU2VydmVkIHdpdGggYnV0dGVyeSBtYXNoZWQgcG90YXRvZXMgYW5kIGEgbWVkbGV5IG9mIHNlYXNvbmFsIHZlZ2V0YWJsZXMuXCI7XG4gICAgXG4gICAgZm9vZDEuYXBwZW5kQ2hpbGQoZm9vZDFEZXNjcmlwdGlvbik7XG4gICAgZm9vZDEuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGZvb2QyLmFwcGVuZENoaWxkKGZvb2QyZGVzY3JpcHRpb24pO1xuICAgIGZvb2QyLmFwcGVuZENoaWxkKHAzKTtcbiAgICBmb29kMy5hcHBlbmRDaGlsZChmb29kM2Rlc2NyaXB0aW9uKTtcbiAgICBmb29kMy5hcHBlbmRDaGlsZChwNCk7XG4gICAgXG4gICAgZm9vZEl0ZW1zLmFwcGVuZENoaWxkKGZvb2QxKTtcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQoZm9vZDIpO1xuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChmb29kMyk7XG4gICAgXG4gICAgZm9vZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZEhlYWRlcik7XG4gICAgZm9vZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1zKTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgY29uc3QgZHJpbmtJdGVtMSA9IG5ldyBJbWFnZSgpO1xuICAgIGRyaW5rSXRlbTEuc3JjID0gZHJpbms0cDtcbiAgICBkcmlua0l0ZW0xLmFsdCA9ICdwaWN0dXJlIG9mIGEgZHJpbmsnO1xuICAgIFxuICAgIGNvbnN0IGRyaW5rSXRlbTIgPSBuZXcgSW1hZ2UoKTtcbiAgICBkcmlua0l0ZW0yLnNyYyA9IGRyaW5rMXA7XG4gICAgZHJpbmtJdGVtMi5hbHQgPSAncGljdHVyZSBvZiBhIGRyaW5rJztcbiAgICBcbiAgICBjb25zdCBkcmlua0l0ZW0zID0gbmV3IEltYWdlKCk7XG4gICAgZHJpbmtJdGVtMy5zcmMgPSBkcmluazNwO1xuICAgIGRyaW5rSXRlbTMuYWx0ID0gJ3BpY3R1cmUgb2YgYSBkcmluayc7XG4gICAgXG4gICAgZHJpbmsxLmFwcGVuZENoaWxkKGRyaW5rSXRlbTEpO1xuICAgIGRyaW5rMi5hcHBlbmRDaGlsZChkcmlua0l0ZW0yKTtcbiAgICBkcmluazMuYXBwZW5kQ2hpbGQoZHJpbmtJdGVtMyk7XG4gICAgXG4gICAgbGV0IGRyaW5rMURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRyaW5rMURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZHJpbmsxRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJRdWVuY2ggdGh5IHRoaXJzdCB3aXRoIG91ciBmcm90aHkgYWxlLCBicmV3ZWQgd2l0aCBob3BzIGFuZCBiYXJsZXkgZnJvbSB0aGUgZmluZXN0IGZpZWxkcy4gQSBoZWFydHksIHJvYnVzdCBkcmluayBmaXQgZm9yIGtuaWdodHMgYW5kIGFkdmVudHVyZXJzIGFsaWtlLlwiO1xuICAgIFxuICAgIGxldCBkcmluazJkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkcmluazJkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRyaW5rMmRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiSW1iaWJlIHRoZSBuZWN0YXIgb2YgdGhlIGdvZHPigJRvdXIgc3dlZXQgYW5kIGdvbGRlbiBtZWFkLCBjcmFmdGVkIGZyb20gcHVyZSBob25leSBhbmQgYW5jaWVudCByZWNpcGVzLiBTaXAgc2xvd2x5IGFuZCBsZXQgdGhlIHdhcm10aCBvZiB0aGlzIGFuY2llbnQgZWxpeGlyIGVudmVsb3AgeW91LlwiO1xuICAgIFxuICAgIGxldCBkcmluazNkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkcmluazNkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRyaW5rM2Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiSW50cm9kdWNpbmcgb3VyIGV4cGxvc2l2ZSBjb25jb2N0aW9uLCB0aGUgbGVnZW5kYXJ5IE1vdG9sb3YhIEJyZXdlZCB3aXRoIGZpZXJ5IHNwaXJpdHMgYW5kIGEgdG91Y2ggb2YgamVzdCwgdGhpcyBkcmluayBwYWNrcyBhIGJhbmcgd2l0aCBldmVyeSBzaXAuIEhhbmRsZSB3aXRoIGNhcmUgYW5kIGVuam95IHRoZSBzcGFya3MhXCI7XG4gICAgXG4gICAgZHJpbmsxLmFwcGVuZENoaWxkKGRyaW5rMURlc2NyaXB0aW9uKTtcbiAgICBkcmluazEuYXBwZW5kQ2hpbGQocDIpO1xuICAgIGRyaW5rMi5hcHBlbmRDaGlsZChkcmluazJkZXNjcmlwdGlvbik7XG4gICAgZHJpbmsyLmFwcGVuZENoaWxkKHA2KTtcbiAgICBkcmluazMuYXBwZW5kQ2hpbGQoZHJpbmszZGVzY3JpcHRpb24pO1xuICAgIGRyaW5rMy5hcHBlbmRDaGlsZChwNSk7XG4gICAgXG4gICAgZHJpbmtJdGVtcy5hcHBlbmRDaGlsZChkcmluazEpO1xuICAgIGRyaW5rSXRlbXMuYXBwZW5kQ2hpbGQoZHJpbmsyKTtcbiAgICBkcmlua0l0ZW1zLmFwcGVuZENoaWxkKGRyaW5rMyk7XG4gICAgXG4gICAgZHJpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyaW5rSGVhZGVyKTtcbiAgICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtJdGVtcyk7XG4gICAgXG4gICAgXG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RzQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtzQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgXG4gICAgXG4gICAgfVxuXG5leHBvcnQgZGVmYXVsdCBmb29kRHJpbmtzOyIsIiAgICBpbXBvcnQgYmFya2VlcGVyIGZyb20gJy4vNmMyYWFlYmZhMTIzZGY1YzE1OTkzMzgwOWQ2NDVmYjcuanBnJztcblxuICAgIGZ1bmN0aW9uIGFib3V0KCl7XG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICBcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsZXQgb3VyVGF2ZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsZXQgb2ZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCBiYXJrZWVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsZXQgcmV2ZWxyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGV0IGludHJvUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgb3VyVGF2ZXJuUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgb2ZmZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBiYXJrZWVwUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgcmV2ZWxyeVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGJhcksgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYXJLLnNyYyA9IGJhcmtlZXBlcjtcbiAgICBiYXJLLmFsdCA9ICdiYXJrZWVwZXInO1xuXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgXG4gICAgaW50cm8uaW5uZXJIVE1MID0gXCJIZWFyIHllLCBUcmF2ZWxlcnMhIFdlbGNvbWUgdG8gVGhlIEJhcmQncyBCYXJyZWxcIjtcbiAgICBpbnRyb1AuaW5uZXJIVE1MID0gXCJJbiB0aGUgaGVhcnQgb2YgSGVhcnRoc2hpcmUsIHdoZXJlIGNvYmJsZXN0b25lcyBtZWV0IGNhc3RsZSB3YWxscywgc3RhbmRzIFRoZSBCYXJkJ3MgQmFycmVsLCB3aGVyZSB0YW5rYXJkcyBvdmVyZmxvdyBhbmQgdGFsZXMgdW5mb2xkLlwiO1xuICAgIG91clRhdmVybi5pbm5lckhUTUwgPSBcIk91ciBUYXZlcm5cIjtcbiAgICBvdXJUYXZlcm5QLmlubmVySFRNTCA9IFwiQXQgVGhlIEJhcmQncyBCYXJyZWwsIHdlJ3JlIGFsbCBhYm91dCBnb29kIGRyaW5rcywgZ29vZCBjb21wYW55LCBhbmQgZ29vZCB0aW1lcy4gUGljdHVyZSB0aGlzOiBjb3p5IGNvcm5lcnMsIHJvYXJpbmcgZmlyZXMsIGFuZCBiYXJyZWxzIGJyaW1taW5nIHdpdGggdGhlIGZpbmVzdCBicmV3cyB0aGlzIHNpZGUgb2YgdGhlIHJlYWxtXCI7XG4gICAgb2ZmZXIuaW5uZXJIVE1MID0gXCJXaGF0J3Mgb24gT2ZmZXJcIjtcbiAgICBvZmZlclAuaW5uZXJIVE1MID0gXCJUYW5rYXJkcyBvZiBhbGUsIGdvYmxldHMgb2YgbWVhZCwgYW5kIHNwaXJpdHMgdG8gbGlmdCB5b3VyIHNwaXJpdHMuIFBhaXIgJ2VtIHdpdGggaGVhcnR5IGJpdGVzIHRvIGtlZXAgdGhlIHJldmVscnkgYWxpdmUuXCI7XG4gICAgYmFya2VlcC5pbm5lckhUTUwgPSBcIk91ciBCYXJrZWVwXCI7XG4gICAgYmFya2VlcFAuaW5uZXJIVE1MID0gXCJNZWV0IE9sJyBHcml6eiwgdGhlIEJhcmtlZXAgYXQgVGhlIEJhcmQncyBCYXJyZWwhIEhlJ3MgYSB3aWxkIHNvdWwsIGtub3duIGZvciBoaXMgaGVhcnR5IGRyaW5rcyBhbmQgcm93ZHkgdGFsZXMsIGJ1dCBkZWVwIGRvd24sIGhlIGZpZXJjZWx5IGxvdmVzIGhpcyB0YXZlcm4uIEpvaW4gR3JpenogZm9yIGEgd2lsZCBuaWdodCBvZiByZXZlbHJ5IGFuZCBnb29kIGNoZWVy4oCUeW91IHdvbid0IGZvcmdldCB0aGlzIGFkdmVudHVyZSBhdCBUaGUgQmFyZCdzIEJhcnJlbCFcIjtcbiAgICByZXZlbHJ5LmlubmVySFRNTCA9IFwiSm9pbiB0aGUgUmV2ZWxyeVwiO1xuICAgIHJldmVscnlQLmlubmVySFRNTCA9IFwiV2hldGhlciB5ZSBzZWVrIHJlc3BpdGUgb3IgcmV2ZWxyeSwgVGhlIEJhcmQncyBCYXJyZWwgd2VsY29tZXMgYWxsIHdobyB0aGlyc3QgZm9yIGFkdmVudHVyZSBhbmQgbWlydGguXCI7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm8pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb1ApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXJUYXZlcm4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXJUYXZlcm5QKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob2ZmZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvZmZlclApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXJrZWVwKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFySyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhcmtlZXBQKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmV2ZWxyeSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJldmVscnlQKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIH1cblxuICAgIGV4cG9ydCBkZWZhdWx0IGFib3V0OyIsImltcG9ydCBmb29kRHJpbmtzIGZyb20gXCIuL0Zvb2RBbmREcmlua3NcIjtcblxuZnVuY3Rpb24gaG9tZSgpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgfVxuXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYmFybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGJhcm5hbWUuY2xhc3NMaXN0LmFkZChcImJhci1uYW1lXCIpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcImJhci1pbnRyb1wiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmb29kLWFuZC1kcmlua3MtYnRuXCIpO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm9vZERyaW5rcyk7XG5cbiAgYmFybmFtZS5pbm5lckhUTUwgPSBcIlRoZSBCYXJkJ3MgQmFycmVsXCI7XG4gIHBhcmFncmFwaC5pbm5lckhUTUwgPVxuICAgICdcIldlbGNvbWUgdG8gVGhlIEJhcmRcXCdzIEJhcnJlbCEgV2hlcmUgdGFsZXMgZmxvdyBhcyBmcmVlbHkgYXMgYWxlLCBBbmQgbWVsb2RpZXMgd2VhdmUgbWFnaWMgaW4gdGhlIGFpci4gSm9pbiB1cyBmb3IgYSBuaWdodCBvZiBtaXJ0aCBhbmQgcmV2ZWxyeSFcIic7XG4gIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkZvb2QgYW5kIERyaW5rc1wiO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhcm5hbWUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lO1xuIiwiZnVuY3Rpb24gcGlnZW9uKCl7XG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBocjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIGxldCBoMzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgcDIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwMjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IHAyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgcDI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwMjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGgzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbGV0IHAzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgcDMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgaHIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBsZXQgaDMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBsZXQgcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGhyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtYWRqdXN0Jyk7XG4gICAgcDIzLmNsYXNzTGlzdC5hZGQoJ21hcmdpbi1hZGp1c3QnKTtcbiAgICBwMjQuY2xhc3NMaXN0LmFkZCgnbWFyZ2luLWFkanVzdCcpO1xuICAgIHAyNS5jbGFzc0xpc3QuYWRkKCdtYXJnaW4tYWRqdXN0Jyk7XG4gICAgXG4gICAgaDMxLmlubmVySFRNTCA9IFwiQ29udGFjdCBVcyB2aWEgUGlnZW9uIFBvc3QsIGlmIFllIERhcmUhXCI7XG4gICAgcDEuaW5uZXJIVE1MID0gXCJBaG95LCB5ZSBzZWVrZXJzIG9mIHJldmVscnkgYW5kIHJvYXN0ISBJZiB5ZSB3aXNoIHRvIHJlYWNoIHVzIGJ5IHdpbmdlZCBjb3VyaWVyLCBoZXJlIGJlIHRoZSBkZXRhaWxzOlwiO1xuICAgIHAyMS5pbm5lckhUTUwgPSBcIlJlY2lwaWVudDogVGhlIEJhcmQncyBCYXJyZWxcIjtcbiAgICBwMjIuaW5uZXJIVE1MID0gXCJBZGRyZXNzOlwiO1xuICAgIHAyMy5pbm5lckhUTUwgPSBcIjEgTWluc3RyZWwncyBXYXlcIjtcbiAgICBwMjQuaW5uZXJIVE1MID0gXCJIZWFydGhzaGlyZSBWaWxsYWdlLCBGYWUgUmVhbG1cIjtcbiAgICBwMjUuaW5uZXJIVE1MID0gXCJUaGUgUmVhbG0gb2YgSGVhcnRoc2hpcmVcIjtcbiAgICBoMzIuaW5uZXJIVE1MID0gXCJBIFdvcmQgdG8gdGhlIFdpc2UgKG9yIG5vdCBzbyB3aXNlKVwiO1xuICAgIHAzMS5pbm5lckhUTUwgPSBcIi0gU3RyYXAgeWVyIG1lc3NhZ2Ugc2VjdXJlbHkgdG8geWVyIHBpZ2VvbidzIGxlZzsgbm8gbG9vc2UgZW5kcyFcIjtcbiAgICBwMzIuaW5uZXJIVE1MID0gXCItIFRyZWF0IHRoZSBmZWF0aGVyZWQgbWVzc2VuZ2VyIHdlbGwsIG9yIHJpc2sgYSBoZXggdXBvbiB5ZXIgbmV4dCBwaW50IVwiO1xuICAgIHA0LmlubmVySFRNTCA9IFwiWWUgcGFyY2htZW50cyBhbmQgbWlzc2l2ZXMgYmUgd2VsY29tZSBoZXJl4oCUanVzdCBtaW5kIHllciBtYW5uZXJzLCBvciBlbHNlIHRoZSB0YXZlcm4gY2F0IG1heSBoYXZlIHdvcmRzIHdpdGggeWUuXCI7XG4gICAgaDMzLmlubmVySFRNTCA9IFwiRnVydGhlciBJbnN0cnVjdGlvbnNcIjtcbiAgICBwNS5pbm5lckhUTUwgPSBcIkZvciB0aG9zZSBvZiB5ZSBmYXZvcmluJyByYXZlbnMgb3IgZW5jaGFudGVkIHNjcm9sbHMsIHNlZWsgb3V0IHRoZSBvbGQgb2FrIGJ5IHRoZSB2aWxsYWdlIHNxdWFyZS4gJ1R3aWxsIGd1aWRlIHllIHRvIG90aGVyIG1lYW5zIG8nIGNvbnRhY3QsIHNob3VsZCB5ZSBkYXJlIHRvIHZlbnR1cmUgZm9ydGguXCI7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHIxKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDMxKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMjEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMjIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMjMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMjQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMjUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoMzIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMzEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMzIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwNCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhyMik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGgzMyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHA1KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHIzKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGlnZW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBpY29uIGZyb20gJy4vYmVlcnMuc3ZnJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS5zdmcnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBmb29kRHJpbmtzIGZyb20gJy4vRm9vZEFuZERyaW5rcyc7XG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgcGlnZW9uIGZyb20gJy4vcGlnZW9uJztcblxubGV0IG9wZW5fbmF2X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLWJ0bicpO1xub3Blbl9uYXZfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBsZXQgYm90dG9tX25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20tbmF2Jyk7XG4gICAgYm90dG9tX25hdi5jbGFzc0xpc3QudG9nZ2xlKCdhcHBlYXInKTtcbn0pXG5cbmxldCBob21lX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ0bicpO1xuY29uc3QgbXlpY29uID0gbmV3IEltYWdlKCk7XG5teWljb24uc3JjID0gaWNvbjtcbm15aWNvbi5hbHQgPSAnaW1nJztcblxuXG5ob21lX2J0bi5hcHBlbmRDaGlsZChteWljb24pO1xuXG5sZXQgbWVudV9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1idG4nKTtcbmNvbnN0IG15TWVudSA9IG5ldyBJbWFnZSgpO1xubXlNZW51LnNyYyA9IG1lbnU7XG5teU1lbnUuYWx0ID0gJ21lbnUtaW1nJztcblxuXG5tZW51X2J0bi5hcHBlbmRDaGlsZChteU1lbnUpO1xuXG5ob21lX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWUpO1xubGV0IGZvb2RORHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb2QtYW5kLWRyaW5rcy1idG4nKTtcbmZvb2RORHJpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9vZERyaW5rcyk7XG5cbmxldCBhYm91dFVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWJhcmRzLWJhcnJlbC1idG4nKTtcbmFib3V0VVMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhYm91dCk7XG5cblxubGV0IHBpZ2Vvbl9wb3N0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWdlb24tcG9zdC1idG4nKTtcbnBpZ2Vvbl9wb3N0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBpZ2Vvbik7XG5cbmhvbWUoKTtcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==