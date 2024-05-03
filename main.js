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
/* harmony import */ var _crossing_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crossing.jpg */ "./src/crossing.jpg");
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1.jpg */ "./src/1.jpg");
/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2.jpg */ "./src/2.jpg");
/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./3.jpg */ "./src/3.jpg");
/* harmony import */ var _9_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./9.jpg */ "./src/9.jpg");
/* harmony import */ var _7_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./7.jpg */ "./src/7.jpg");
/* harmony import */ var _6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./6.jpg */ "./src/6.jpg");








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
    foodItem1.src = _1_jpg__WEBPACK_IMPORTED_MODULE_1__;
    foodItem1.alt = 'picture of a dish';
    
    const foodItem2 = new Image();
    foodItem2.src = _2_jpg__WEBPACK_IMPORTED_MODULE_2__;
    foodItem2.alt = 'picture of a dish';
    
    const foodItem3 = new Image();
    foodItem3.src = _3_jpg__WEBPACK_IMPORTED_MODULE_3__;
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
    drinkItem1.src = _6_jpg__WEBPACK_IMPORTED_MODULE_6__;
    drinkItem1.alt = 'picture of a drink';
    
    const drinkItem2 = new Image();
    drinkItem2.src = _9_jpg__WEBPACK_IMPORTED_MODULE_4__;
    drinkItem2.alt = 'picture of a drink';
    
    const drinkItem3 = new Image();
    drinkItem3.src = _7_jpg__WEBPACK_IMPORTED_MODULE_5__;
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


function home(){
    let content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }

    let container = document.createElement('div');
    let barname = document.createElement('h1');
    let div = document.createElement('div');
    let paragraph = document.createElement('p');
    let button =  document.createElement('button');


    container.classList.add('container');
    barname.classList.add('bar-name');
    paragraph.classList.add('bar-intro');
    button.classList.add('food-and-drinks-btn');

    button.addEventListener('click', _FoodAndDrinks__WEBPACK_IMPORTED_MODULE_0__["default"]);

    barname.innerHTML = "The Bard's Barrel";
    paragraph.innerHTML = '"Welcome to The Bard\'s Barrel! Where tales flow as freely as ale, And melodies weave magic in the air. Join us for a night of mirth and revelry!"';
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

/***/ "./src/crossing.jpg":
/*!**************************!*\
  !*** ./src/crossing.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b392893b3aca1685632.jpg";

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

module.exports = __webpack_require__.p + "d9b09807cd30b3258f74.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNVO0FBQ0Q7QUFDSjtBQUNlO0FBQ2I7QUFDRTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxhQUFhLHVDQUFJO0FBQ2pCOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxzQ0FBSTtBQUNqQjs7O0FBR0E7O0FBRUEsbUNBQW1DLDZDQUFJO0FBQ3ZDO0FBQ0Esc0NBQXNDLHNEQUFVOztBQUVoRDtBQUNBLGtDQUFrQyw4Q0FBSzs7O0FBR3ZDO0FBQ0EsMENBQTBDLCtDQUFNOztBQUVoRCxpREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9Gb29kQW5kRHJpbmtzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGlnZW9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJ3cDEyNjk2Mzc5LWZhbnRhc3ktdGF2ZXJuLXdhbGxwYXBlcnMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9nb3RoaWNhbC9NZWRpZXZhbCBTY3JvbGwgb2YgV2lzZG9tLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGJvaWxlciBwbGF0ZSBhbmQgaG9tZSBwYWdlIHN0eWxlICovXG5cbiosKjo6YmVmb3JlLCo6OmFmdGVye1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5odG1sIHsgXG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdnb3RoJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KHRydWV0eXBlKTtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IGJpc3F1ZTtcbiAgICBmb250LWZhbWlseTogJ2dvdGgnO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuaDF7XG4gIHBhZGRpbmc6IC4yZW0gMDtcbn1cblxuaW1ne1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuI2NvbnRlbnR7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLmhvbWUtYnRuLCAub3Blbi1idG57XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRib3JkZXI6IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0b3V0bGluZTogaW5oZXJpdDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ubmF2LCAuY29udGFpbmVye1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRvcC1uYXZ7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm90dG9tLW5hdntcbiAgbWFyZ2luLXRvcDogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcHBlYXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjYzMHB4KXtcbiAgLm5hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5vcGVuLWJ0bntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ib3R0b20tbmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJvdHRvbS1uYXYtYnRue1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gIH1cbiAgXG59XG5cbi5mb29kLWFuZC1kcmlua3MtYnRuLCAuYWJvdXQtYmFyZHMtYmFycmVsLWJ0biwgLnBpZ2Vvbi1wb3N0LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NTQzMjE7XG4gIGJvcmRlcjogMCBzb2xpZCBiaXNxdWU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiBiaXNxdWU7XG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxcIk5vdG8gU2Fuc1wiLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiLFwiTm90byBDb2xvciBFbW9qaVwiO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAjMDAwMDAwIHNvbGlkO1xuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIG1heC13aWR0aDogNDYwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbi5mb29kLWFuZC1kcmlua3MtYnRuOmZvY3VzLCAuYWJvdXQtYmFyZHMtYmFycmVsLWJ0bjpmb2N1cywgLnBpZ2Vvbi1wb3N0LWJ0bjpmb2N1c3tcbiAgb3V0bGluZTogMDtcbn1cblxuLmZvb2QtYW5kLWRyaW5rcy1idG46YWZ0ZXIsIC5hYm91dC1iYXJkcy1iYXJyZWwtYnRuOmFmdGVyLCAucGlnZW9uLXBvc3QtYnRuOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmlzcXVlO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogNHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMXB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxcHgpO1xufVxuXG4uZm9vZC1hbmQtZHJpbmtzLWJ0bjpob3ZlcjphZnRlciwgLmFib3V0LWJhcmRzLWJhcnJlbC1idG46aG92ZXI6YWZ0ZXIsIC5waWdlb24tcG9zdC1idG46aG92ZXI6YWZ0ZXIge1xuICBib3R0b206IDJweDtcbiAgbGVmdDogMnB4O1xufVxuXG5cbi8qRm9vZCBhbmQgRHJpbmtzIHBhZ2UqL1xuLmZvb2RzLWNvbnRhaW5lciA+IGRpdiA+IGRpdiA+IHAsIC5kcmlua3MtY29udGFpbmVyID4gZGl2ID4gZGl2ID4gcHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1NDMyMTtcbiAgcGFkZGluZzogMWVtIDFlbTtcbn1cbi5mb29kMSwgLmZvb2QyLCAuZm9vZDMsIC5kcmluazEsIC5kcmluazIsIC5kcmluazN7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVlbTtcbn1cblxuXG4uZGVzY3JpcHRpb257XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmc6IDAgLjVlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo2MzVweCl7XG4gIC5mb29kLWl0ZW1zLCAuZHJpbmstaXRlbXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgXG4gIH1cbiAgLmZvb2QxLCAuZm9vZDIsIC5mb29kMywgLmRyaW5rMSwgLmRyaW5rMiwgLmRyaW5rM3tcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuICBcbn1cblxuLyogQ09OVEFDVCBVUyAqL1xuXG4uZm9udC1hZGp1c3R7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5tYXJnaW4tYWRqdXN0e1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQ0FBcUM7O0FBRXJDO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpRkFBeUY7SUFDekYsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0VBQ3hCOztBQUVGO0VBQ0UsbUJBQW1CO0VBQ25CLDZEQUFzRTtBQUN4RTs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtDQUNqQixjQUFjO0NBQ2QsWUFBWTtDQUNaLFVBQVU7Q0FDVixhQUFhO0NBQ2IsZUFBZTtDQUNmLGdCQUFnQjtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNNQUFzTTtFQUN0TSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsU0FBUztFQUNULHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztBQUNYOzs7QUFHQSx1QkFBdUI7QUFDdkI7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsOEJBQThCOztFQUVoQztFQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7QUFFRjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBib2lsZXIgcGxhdGUgYW5kIGhvbWUgcGFnZSBzdHlsZSAqL1xcblxcbiosKjo6YmVmb3JlLCo6OmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5odG1sIHsgXFxuICAgIGJhY2tncm91bmQ6IHVybCgnd3AxMjY5NjM3OS1mYW50YXN5LXRhdmVybi13YWxscGFwZXJzLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2dvdGgnO1xcbiAgc3JjOiB1cmwoLi9nb3RoaWNhbC9NZWRpZXZhbFxcXFwgU2Nyb2xsXFxcXCBvZlxcXFwgV2lzZG9tLnR0ZikgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogYmlzcXVlO1xcbiAgICBmb250LWZhbWlseTogJ2dvdGgnO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmgxe1xcbiAgcGFkZGluZzogLjJlbSAwO1xcbn1cXG5cXG5pbWd7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi5ob21lLWJ0biwgLm9wZW4tYnRue1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4ubmF2LCAuY29udGFpbmVye1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4udG9wLW5hdntcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm90dG9tLW5hdntcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFwcGVhcntcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOjYzMHB4KXtcXG4gIC5uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5vcGVuLWJ0bntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5ib3R0b20tbmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmJvdHRvbS1uYXYtYnRue1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgfVxcbiAgXFxufVxcblxcbi5mb29kLWFuZC1kcmlua3MtYnRuLCAuYWJvdXQtYmFyZHMtYmFycmVsLWJ0biwgLnBpZ2Vvbi1wb3N0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU0MzIxO1xcbiAgYm9yZGVyOiAwIHNvbGlkIGJpc3F1ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogYmlzcXVlO1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsc3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsQXJpYWwsXFxcIk5vdG8gU2Fuc1xcXCIsc2Fucy1zZXJpZixcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICMwMDAwMDAgc29saWQ7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgbWF4LXdpZHRoOiA0NjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbn1cXG5cXG4uZm9vZC1hbmQtZHJpbmtzLWJ0bjpmb2N1cywgLmFib3V0LWJhcmRzLWJhcnJlbC1idG46Zm9jdXMsIC5waWdlb24tcG9zdC1idG46Zm9jdXN7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4uZm9vZC1hbmQtZHJpbmtzLWJ0bjphZnRlciwgLmFib3V0LWJhcmRzLWJhcnJlbC1idG46YWZ0ZXIsIC5waWdlb24tcG9zdC1idG46YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBiaXNxdWU7XFxuICBib3R0b206IDRweDtcXG4gIGxlZnQ6IDRweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxcHgpO1xcbn1cXG5cXG4uZm9vZC1hbmQtZHJpbmtzLWJ0bjpob3ZlcjphZnRlciwgLmFib3V0LWJhcmRzLWJhcnJlbC1idG46aG92ZXI6YWZ0ZXIsIC5waWdlb24tcG9zdC1idG46aG92ZXI6YWZ0ZXIge1xcbiAgYm90dG9tOiAycHg7XFxuICBsZWZ0OiAycHg7XFxufVxcblxcblxcbi8qRm9vZCBhbmQgRHJpbmtzIHBhZ2UqL1xcbi5mb29kcy1jb250YWluZXIgPiBkaXYgPiBkaXYgPiBwLCAuZHJpbmtzLWNvbnRhaW5lciA+IGRpdiA+IGRpdiA+IHB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU0MzIxO1xcbiAgcGFkZGluZzogMWVtIDFlbTtcXG59XFxuLmZvb2QxLCAuZm9vZDIsIC5mb29kMywgLmRyaW5rMSwgLmRyaW5rMiwgLmRyaW5rM3tcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDVlbTtcXG59XFxuXFxuXFxuLmRlc2NyaXB0aW9ue1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHBhZGRpbmc6IDAgLjVlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6NjM1cHgpe1xcbiAgLmZvb2QtaXRlbXMsIC5kcmluay1pdGVtc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBcXG4gIH1cXG4gIC5mb29kMSwgLmZvb2QyLCAuZm9vZDMsIC5kcmluazEsIC5kcmluazIsIC5kcmluazN7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG4gIFxcbn1cXG5cXG4vKiBDT05UQUNUIFVTICovXFxuXFxuLmZvbnQtYWRqdXN0e1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4ubWFyZ2luLWFkanVzdHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3Jvc3NpbmcgZnJvbSAnLi9jcm9zc2luZy5qcGcnO1xuaW1wb3J0IGZvb2QxcCBmcm9tICcuLzEuanBnJztcbmltcG9ydCBmb29kMnAgZnJvbSAnLi8yLmpwZyc7XG5pbXBvcnQgZm9vZDNwIGZyb20gJy4vMy5qcGcnO1xuaW1wb3J0IGRyaW5rMXAgZnJvbSAnLi85LmpwZyc7XG5pbXBvcnQgZHJpbmszcCBmcm9tICcuLzcuanBnJztcbmltcG9ydCBkcmluazRwIGZyb20gJy4vNi5qcGcnO1xuXG5mdW5jdGlvbiBmb29kRHJpbmtzKCl7XG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgIH1cblxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBsZXQgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuXG5cbiAgICBwMS5pbm5lckhUTUwgPSBcIuKNnyA0IEdPTEQgQ09JTlNcIjtcbiAgICBwMy5pbm5lckhUTUwgPSBcIuKNnyA0IEdPTEQgQ09JTlNcIjtcbiAgICBwNC5pbm5lckhUTUwgPSBcIuKNnyAzIEdPTEQgQ09JTlNcIjtcbiAgICBwNS5pbm5lckhUTUwgPSBcIuKNnyAyIEdPTEQgQ09JTlNcIjtcbiAgICBwNi5pbm5lckhUTUwgPSBcIuKNnyAxIEdPTEQgQ09JTlwiO1xuICAgIHAyLmlubmVySFRNTCA9IFwi4o2fIDEgR09MRCBDT0lOXCI7XG4gICAgXG4gICAgbGV0IGZvb2RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGZvb2RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGxldCBmb29kSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZm9vZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZm9vZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZm9vZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBmb29kc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb29kcy1jb250YWluZXInKTtcbiAgICBmb29kSGVhZGVyLmlubmVySFRNTCA9IFwiRm9vZFwiO1xuICAgIGZvb2RJdGVtcy5jbGFzc0xpc3QuYWRkKCdmb29kLWl0ZW1zJyk7XG4gICAgZm9vZDEuY2xhc3NMaXN0LmFkZCgnZm9vZDEnKTtcbiAgICBmb29kMi5jbGFzc0xpc3QuYWRkKCdmb29kMicpO1xuICAgIGZvb2QzLmNsYXNzTGlzdC5hZGQoJ2Zvb2QzJyk7XG4gICAgXG4gICAgXG4gICAgbGV0IGRyaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBkcmlua0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbGV0IGRyaW5rSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZHJpbmsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGRyaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBkcmluazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIFxuICAgIGRyaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcmlua3MtY29udGFpbmVyJyk7XG4gICAgZHJpbmtIZWFkZXIuaW5uZXJIVE1MID0gXCJkcmlua3NcIjtcbiAgICBkcmlua0l0ZW1zLmNsYXNzTGlzdC5hZGQoJ2RyaW5rLWl0ZW1zJyk7XG4gICAgZHJpbmsxLmNsYXNzTGlzdC5hZGQoJ2RyaW5rMScpO1xuICAgIGRyaW5rMi5jbGFzc0xpc3QuYWRkKCdkcmluazInKTtcbiAgICBkcmluazMuY2xhc3NMaXN0LmFkZCgnZHJpbmszJyk7XG4gICAgXG4gICAgXG4gICAgY29uc3QgZm9vZEl0ZW0xID0gbmV3IEltYWdlKCk7XG4gICAgZm9vZEl0ZW0xLnNyYyA9IGZvb2QxcDtcbiAgICBmb29kSXRlbTEuYWx0ID0gJ3BpY3R1cmUgb2YgYSBkaXNoJztcbiAgICBcbiAgICBjb25zdCBmb29kSXRlbTIgPSBuZXcgSW1hZ2UoKTtcbiAgICBmb29kSXRlbTIuc3JjID0gZm9vZDJwO1xuICAgIGZvb2RJdGVtMi5hbHQgPSAncGljdHVyZSBvZiBhIGRpc2gnO1xuICAgIFxuICAgIGNvbnN0IGZvb2RJdGVtMyA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2RJdGVtMy5zcmMgPSBmb29kM3A7XG4gICAgZm9vZEl0ZW0zLmFsdCA9ICdwaWN0dXJlIG9mIGEgZGlzaCc7XG4gICAgXG4gICAgZm9vZDEuYXBwZW5kQ2hpbGQoZm9vZEl0ZW0xKTtcbiAgICBmb29kMi5hcHBlbmRDaGlsZChmb29kSXRlbTIpO1xuICAgIGZvb2QzLmFwcGVuZENoaWxkKGZvb2RJdGVtMyk7XG4gICAgXG4gICAgbGV0IGZvb2QxRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vZDFEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGZvb2QxRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJCZWhvbGQsIGEgZGlzaCBvZiB0ZW5kZXIgYmVlZiwgbGlnaHRseSBzZWFzb25lZCBhbmQgc3dpZnRseSBzZWFyZWQgb3ZlciBvcGVuIGZsYW1lLiBTZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygc2Vhc29uZWQgZ3JlZW5zIGFuZCBzYXZvcnkgaGVyYiBidXR0ZXIuXCI7XG4gICAgXG4gICAgbGV0IGZvb2QyZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vZDJkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGZvb2QyZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJGZWFzdCB1cG9uIGEgaGVhcnR5IHBvcnRpb24gb2YgcmFtIHN0ZWFrLCBzbG93LXJvYXN0ZWQgd2l0aCBhcm9tYXRpYyBoZXJicyBhbmQgZ2FybGljLiBKdWljeSBhbmQgZmxhdm9yZnVsLCBhY2NvbXBhbmllZCBieSByb2FzdGVkIHJvb3QgdmVnZXRhYmxlcyBhbmQgYSByaWNoIHBhbiBqdXMuXCI7XG4gICAgXG4gICAgbGV0IGZvb2QzZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vZDNkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGZvb2QzZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJEZWxpZ2h0IGluIGEgZ29sZGVuLXJvYXN0ZWQgY2hpY2tlbiwgbWFyaW5hdGVkIGluIGEgc2VjcmV0IGJsZW5kIG9mIHNwaWNlcyBhbmQgaGVyYnMgZnJvbSBkaXN0YW50IGxhbmRzLiBTZXJ2ZWQgd2l0aCBidXR0ZXJ5IG1hc2hlZCBwb3RhdG9lcyBhbmQgYSBtZWRsZXkgb2Ygc2Vhc29uYWwgdmVnZXRhYmxlcy5cIjtcbiAgICBcbiAgICBmb29kMS5hcHBlbmRDaGlsZChmb29kMURlc2NyaXB0aW9uKTtcbiAgICBmb29kMS5hcHBlbmRDaGlsZChwMSk7XG4gICAgZm9vZDIuYXBwZW5kQ2hpbGQoZm9vZDJkZXNjcmlwdGlvbik7XG4gICAgZm9vZDIuYXBwZW5kQ2hpbGQocDMpO1xuICAgIGZvb2QzLmFwcGVuZENoaWxkKGZvb2QzZGVzY3JpcHRpb24pO1xuICAgIGZvb2QzLmFwcGVuZENoaWxkKHA0KTtcbiAgICBcbiAgICBmb29kSXRlbXMuYXBwZW5kQ2hpbGQoZm9vZDEpO1xuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChmb29kMik7XG4gICAgZm9vZEl0ZW1zLmFwcGVuZENoaWxkKGZvb2QzKTtcbiAgICBcbiAgICBmb29kc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kSGVhZGVyKTtcbiAgICBmb29kc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kSXRlbXMpO1xuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBjb25zdCBkcmlua0l0ZW0xID0gbmV3IEltYWdlKCk7XG4gICAgZHJpbmtJdGVtMS5zcmMgPSBkcmluazRwO1xuICAgIGRyaW5rSXRlbTEuYWx0ID0gJ3BpY3R1cmUgb2YgYSBkcmluayc7XG4gICAgXG4gICAgY29uc3QgZHJpbmtJdGVtMiA9IG5ldyBJbWFnZSgpO1xuICAgIGRyaW5rSXRlbTIuc3JjID0gZHJpbmsxcDtcbiAgICBkcmlua0l0ZW0yLmFsdCA9ICdwaWN0dXJlIG9mIGEgZHJpbmsnO1xuICAgIFxuICAgIGNvbnN0IGRyaW5rSXRlbTMgPSBuZXcgSW1hZ2UoKTtcbiAgICBkcmlua0l0ZW0zLnNyYyA9IGRyaW5rM3A7XG4gICAgZHJpbmtJdGVtMy5hbHQgPSAncGljdHVyZSBvZiBhIGRyaW5rJztcbiAgICBcbiAgICBkcmluazEuYXBwZW5kQ2hpbGQoZHJpbmtJdGVtMSk7XG4gICAgZHJpbmsyLmFwcGVuZENoaWxkKGRyaW5rSXRlbTIpO1xuICAgIGRyaW5rMy5hcHBlbmRDaGlsZChkcmlua0l0ZW0zKTtcbiAgICBcbiAgICBsZXQgZHJpbmsxRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZHJpbmsxRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBkcmluazFEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIlF1ZW5jaCB0aHkgdGhpcnN0IHdpdGggb3VyIGZyb3RoeSBhbGUsIGJyZXdlZCB3aXRoIGhvcHMgYW5kIGJhcmxleSBmcm9tIHRoZSBmaW5lc3QgZmllbGRzLiBBIGhlYXJ0eSwgcm9idXN0IGRyaW5rIGZpdCBmb3Iga25pZ2h0cyBhbmQgYWR2ZW50dXJlcnMgYWxpa2UuXCI7XG4gICAgXG4gICAgbGV0IGRyaW5rMmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRyaW5rMmRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZHJpbmsyZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJJbWJpYmUgdGhlIG5lY3RhciBvZiB0aGUgZ29kc+KAlG91ciBzd2VldCBhbmQgZ29sZGVuIG1lYWQsIGNyYWZ0ZWQgZnJvbSBwdXJlIGhvbmV5IGFuZCBhbmNpZW50IHJlY2lwZXMuIFNpcCBzbG93bHkgYW5kIGxldCB0aGUgd2FybXRoIG9mIHRoaXMgYW5jaWVudCBlbGl4aXIgZW52ZWxvcCB5b3UuXCI7XG4gICAgXG4gICAgbGV0IGRyaW5rM2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRyaW5rM2Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZHJpbmszZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJJbnRyb2R1Y2luZyBvdXIgZXhwbG9zaXZlIGNvbmNvY3Rpb24sIHRoZSBsZWdlbmRhcnkgTW90b2xvdiEgQnJld2VkIHdpdGggZmllcnkgc3Bpcml0cyBhbmQgYSB0b3VjaCBvZiBqZXN0LCB0aGlzIGRyaW5rIHBhY2tzIGEgYmFuZyB3aXRoIGV2ZXJ5IHNpcC4gSGFuZGxlIHdpdGggY2FyZSBhbmQgZW5qb3kgdGhlIHNwYXJrcyFcIjtcbiAgICBcbiAgICBkcmluazEuYXBwZW5kQ2hpbGQoZHJpbmsxRGVzY3JpcHRpb24pO1xuICAgIGRyaW5rMS5hcHBlbmRDaGlsZChwMik7XG4gICAgZHJpbmsyLmFwcGVuZENoaWxkKGRyaW5rMmRlc2NyaXB0aW9uKTtcbiAgICBkcmluazIuYXBwZW5kQ2hpbGQocDYpO1xuICAgIGRyaW5rMy5hcHBlbmRDaGlsZChkcmluazNkZXNjcmlwdGlvbik7XG4gICAgZHJpbmszLmFwcGVuZENoaWxkKHA1KTtcbiAgICBcbiAgICBkcmlua0l0ZW1zLmFwcGVuZENoaWxkKGRyaW5rMSk7XG4gICAgZHJpbmtJdGVtcy5hcHBlbmRDaGlsZChkcmluazIpO1xuICAgIGRyaW5rSXRlbXMuYXBwZW5kQ2hpbGQoZHJpbmszKTtcbiAgICBcbiAgICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJpbmtIZWFkZXIpO1xuICAgIGRyaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmlua0l0ZW1zKTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZHNDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmlua3NDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBcbiAgICBcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZvb2REcmlua3M7IiwiICAgIGltcG9ydCBiYXJrZWVwZXIgZnJvbSAnLi82YzJhYWViZmExMjNkZjVjMTU5OTMzODA5ZDY0NWZiNy5qcGcnO1xuXG4gICAgZnVuY3Rpb24gYWJvdXQoKXtcblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgIFxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCBvdXJUYXZlcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCBvZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGV0IGJhcmtlZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCByZXZlbHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsZXQgaW50cm9QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBvdXJUYXZlcm5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBvZmZlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGJhcmtlZXBQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCByZXZlbHJ5UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgYmFySyA9IG5ldyBJbWFnZSgpO1xuICAgIGJhcksuc3JjID0gYmFya2VlcGVyO1xuICAgIGJhcksuYWx0ID0gJ2JhcmtlZXBlcic7XG5cblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBcbiAgICBpbnRyby5pbm5lckhUTUwgPSBcIkhlYXIgeWUsIFRyYXZlbGVycyEgV2VsY29tZSB0byBUaGUgQmFyZCdzIEJhcnJlbFwiO1xuICAgIGludHJvUC5pbm5lckhUTUwgPSBcIkluIHRoZSBoZWFydCBvZiBIZWFydGhzaGlyZSwgd2hlcmUgY29iYmxlc3RvbmVzIG1lZXQgY2FzdGxlIHdhbGxzLCBzdGFuZHMgVGhlIEJhcmQncyBCYXJyZWwsIHdoZXJlIHRhbmthcmRzIG92ZXJmbG93IGFuZCB0YWxlcyB1bmZvbGQuXCI7XG4gICAgb3VyVGF2ZXJuLmlubmVySFRNTCA9IFwiT3VyIFRhdmVyblwiO1xuICAgIG91clRhdmVyblAuaW5uZXJIVE1MID0gXCJBdCBUaGUgQmFyZCdzIEJhcnJlbCwgd2UncmUgYWxsIGFib3V0IGdvb2QgZHJpbmtzLCBnb29kIGNvbXBhbnksIGFuZCBnb29kIHRpbWVzLiBQaWN0dXJlIHRoaXM6IGNvenkgY29ybmVycywgcm9hcmluZyBmaXJlcywgYW5kIGJhcnJlbHMgYnJpbW1pbmcgd2l0aCB0aGUgZmluZXN0IGJyZXdzIHRoaXMgc2lkZSBvZiB0aGUgcmVhbG1cIjtcbiAgICBvZmZlci5pbm5lckhUTUwgPSBcIldoYXQncyBvbiBPZmZlclwiO1xuICAgIG9mZmVyUC5pbm5lckhUTUwgPSBcIlRhbmthcmRzIG9mIGFsZSwgZ29ibGV0cyBvZiBtZWFkLCBhbmQgc3Bpcml0cyB0byBsaWZ0IHlvdXIgc3Bpcml0cy4gUGFpciAnZW0gd2l0aCBoZWFydHkgYml0ZXMgdG8ga2VlcCB0aGUgcmV2ZWxyeSBhbGl2ZS5cIjtcbiAgICBiYXJrZWVwLmlubmVySFRNTCA9IFwiT3VyIEJhcmtlZXBcIjtcbiAgICBiYXJrZWVwUC5pbm5lckhUTUwgPSBcIk1lZXQgT2wnIEdyaXp6LCB0aGUgQmFya2VlcCBhdCBUaGUgQmFyZCdzIEJhcnJlbCEgSGUncyBhIHdpbGQgc291bCwga25vd24gZm9yIGhpcyBoZWFydHkgZHJpbmtzIGFuZCByb3dkeSB0YWxlcywgYnV0IGRlZXAgZG93biwgaGUgZmllcmNlbHkgbG92ZXMgaGlzIHRhdmVybi4gSm9pbiBHcml6eiBmb3IgYSB3aWxkIG5pZ2h0IG9mIHJldmVscnkgYW5kIGdvb2QgY2hlZXLigJR5b3Ugd29uJ3QgZm9yZ2V0IHRoaXMgYWR2ZW50dXJlIGF0IFRoZSBCYXJkJ3MgQmFycmVsIVwiO1xuICAgIHJldmVscnkuaW5uZXJIVE1MID0gXCJKb2luIHRoZSBSZXZlbHJ5XCI7XG4gICAgcmV2ZWxyeVAuaW5uZXJIVE1MID0gXCJXaGV0aGVyIHllIHNlZWsgcmVzcGl0ZSBvciByZXZlbHJ5LCBUaGUgQmFyZCdzIEJhcnJlbCB3ZWxjb21lcyBhbGwgd2hvIHRoaXJzdCBmb3IgYWR2ZW50dXJlIGFuZCBtaXJ0aC5cIjtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRybyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvUCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG91clRhdmVybik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG91clRhdmVyblApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvZmZlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9mZmVyUCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhcmtlZXApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXJLKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFya2VlcFApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZlbHJ5KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmV2ZWxyeVApO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiaW1wb3J0IGZvb2REcmlua3MgZnJvbSBcIi4vRm9vZEFuZERyaW5rc1wiO1xuXG5mdW5jdGlvbiBob21lKCl7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJhcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBidXR0b24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBiYXJuYW1lLmNsYXNzTGlzdC5hZGQoJ2Jhci1uYW1lJyk7XG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2Jhci1pbnRybycpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb29kLWFuZC1kcmlua3MtYnRuJyk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb29kRHJpbmtzKTtcblxuICAgIGJhcm5hbWUuaW5uZXJIVE1MID0gXCJUaGUgQmFyZCdzIEJhcnJlbFwiO1xuICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSAnXCJXZWxjb21lIHRvIFRoZSBCYXJkXFwncyBCYXJyZWwhIFdoZXJlIHRhbGVzIGZsb3cgYXMgZnJlZWx5IGFzIGFsZSwgQW5kIG1lbG9kaWVzIHdlYXZlIG1hZ2ljIGluIHRoZSBhaXIuIEpvaW4gdXMgZm9yIGEgbmlnaHQgb2YgbWlydGggYW5kIHJldmVscnkhXCInO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkZvb2QgYW5kIERyaW5rc1wiO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhcm5hbWUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcblxuIiwiZnVuY3Rpb24gcGlnZW9uKCl7XG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBocjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIGxldCBoMzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgcDIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwMjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IHAyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgcDI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwMjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGgzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbGV0IHAzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgcDMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgaHIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBsZXQgaDMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBsZXQgcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGhyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtYWRqdXN0Jyk7XG4gICAgcDIzLmNsYXNzTGlzdC5hZGQoJ21hcmdpbi1hZGp1c3QnKTtcbiAgICBwMjQuY2xhc3NMaXN0LmFkZCgnbWFyZ2luLWFkanVzdCcpO1xuICAgIHAyNS5jbGFzc0xpc3QuYWRkKCdtYXJnaW4tYWRqdXN0Jyk7XG4gICAgXG4gICAgaDMxLmlubmVySFRNTCA9IFwiQ29udGFjdCBVcyB2aWEgUGlnZW9uIFBvc3QsIGlmIFllIERhcmUhXCI7XG4gICAgcDEuaW5uZXJIVE1MID0gXCJBaG95LCB5ZSBzZWVrZXJzIG9mIHJldmVscnkgYW5kIHJvYXN0ISBJZiB5ZSB3aXNoIHRvIHJlYWNoIHVzIGJ5IHdpbmdlZCBjb3VyaWVyLCBoZXJlIGJlIHRoZSBkZXRhaWxzOlwiO1xuICAgIHAyMS5pbm5lckhUTUwgPSBcIlJlY2lwaWVudDogVGhlIEJhcmQncyBCYXJyZWxcIjtcbiAgICBwMjIuaW5uZXJIVE1MID0gXCJBZGRyZXNzOlwiO1xuICAgIHAyMy5pbm5lckhUTUwgPSBcIjEgTWluc3RyZWwncyBXYXlcIjtcbiAgICBwMjQuaW5uZXJIVE1MID0gXCJIZWFydGhzaGlyZSBWaWxsYWdlLCBGYWUgUmVhbG1cIjtcbiAgICBwMjUuaW5uZXJIVE1MID0gXCJUaGUgUmVhbG0gb2YgSGVhcnRoc2hpcmVcIjtcbiAgICBoMzIuaW5uZXJIVE1MID0gXCJBIFdvcmQgdG8gdGhlIFdpc2UgKG9yIG5vdCBzbyB3aXNlKVwiO1xuICAgIHAzMS5pbm5lckhUTUwgPSBcIi0gU3RyYXAgeWVyIG1lc3NhZ2Ugc2VjdXJlbHkgdG8geWVyIHBpZ2VvbidzIGxlZzsgbm8gbG9vc2UgZW5kcyFcIjtcbiAgICBwMzIuaW5uZXJIVE1MID0gXCItIFRyZWF0IHRoZSBmZWF0aGVyZWQgbWVzc2VuZ2VyIHdlbGwsIG9yIHJpc2sgYSBoZXggdXBvbiB5ZXIgbmV4dCBwaW50IVwiO1xuICAgIHA0LmlubmVySFRNTCA9IFwiWWUgcGFyY2htZW50cyBhbmQgbWlzc2l2ZXMgYmUgd2VsY29tZSBoZXJl4oCUanVzdCBtaW5kIHllciBtYW5uZXJzLCBvciBlbHNlIHRoZSB0YXZlcm4gY2F0IG1heSBoYXZlIHdvcmRzIHdpdGggeWUuXCI7XG4gICAgaDMzLmlubmVySFRNTCA9IFwiRnVydGhlciBJbnN0cnVjdGlvbnNcIjtcbiAgICBwNS5pbm5lckhUTUwgPSBcIkZvciB0aG9zZSBvZiB5ZSBmYXZvcmluJyByYXZlbnMgb3IgZW5jaGFudGVkIHNjcm9sbHMsIHNlZWsgb3V0IHRoZSBvbGQgb2FrIGJ5IHRoZSB2aWxsYWdlIHNxdWFyZS4gJ1R3aWxsIGd1aWRlIHllIHRvIG90aGVyIG1lYW5zIG8nIGNvbnRhY3QsIHNob3VsZCB5ZSBkYXJlIHRvIHZlbnR1cmUgZm9ydGguXCI7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHIxKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDMxKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMjEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMjIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMjMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMjQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMjUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoMzIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMzEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwMzIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwNCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhyMik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGgzMyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHA1KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHIzKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGlnZW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBpY29uIGZyb20gJy4vYmVlcnMuc3ZnJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS5zdmcnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBmb29kRHJpbmtzIGZyb20gJy4vRm9vZEFuZERyaW5rcyc7XG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgcGlnZW9uIGZyb20gJy4vcGlnZW9uJztcblxubGV0IG9wZW5fbmF2X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLWJ0bicpO1xub3Blbl9uYXZfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBsZXQgYm90dG9tX25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20tbmF2Jyk7XG4gICAgYm90dG9tX25hdi5jbGFzc0xpc3QudG9nZ2xlKCdhcHBlYXInKTtcbn0pXG5cbmxldCBob21lX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ0bicpO1xuY29uc3QgbXlpY29uID0gbmV3IEltYWdlKCk7XG5teWljb24uc3JjID0gaWNvbjtcbm15aWNvbi5hbHQgPSAnaW1nJztcblxuXG5ob21lX2J0bi5hcHBlbmRDaGlsZChteWljb24pO1xuXG5sZXQgbWVudV9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1idG4nKTtcbmNvbnN0IG15TWVudSA9IG5ldyBJbWFnZSgpO1xubXlNZW51LnNyYyA9IG1lbnU7XG5teU1lbnUuYWx0ID0gJ21lbnUtaW1nJztcblxuXG5tZW51X2J0bi5hcHBlbmRDaGlsZChteU1lbnUpO1xuXG5ob21lX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWUpO1xubGV0IGZvb2RORHJpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb2QtYW5kLWRyaW5rcy1idG4nKTtcbmZvb2RORHJpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9vZERyaW5rcyk7XG5cbmxldCBhYm91dFVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWJhcmRzLWJhcnJlbC1idG4nKTtcbmFib3V0VVMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhYm91dCk7XG5cblxubGV0IHBpZ2Vvbl9wb3N0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWdlb24tcG9zdC1idG4nKTtcbnBpZ2Vvbl9wb3N0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBpZ2Vvbik7XG5cbmhvbWUoKTtcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==