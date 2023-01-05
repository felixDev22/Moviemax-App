"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Montserrat:wght@500;600;700&family=Open+Sans:wght@300;500;600;700&family=Quicksand:wght@300;400;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  outline: none;\\n  border: none;\\n  text-decoration: none;\\n}\\n\\n:root {\\n  --main-color: #ff005e;\\n  --secondary-color: #b20077;\\n  --white-color: #fff;\\n  --back-color: #000;\\n  --font-spacing: 0.3rem;\\n  --main-font: 'lato', sans-serif;\\n  --secondary-font: 'Open Sans', sans-serif;\\n  --transition: all 0.3s;\\n  --spacing: 0.1rem;\\n  --radius: 15px;\\n  --drop-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);\\n}\\n\\nbody {\\n  font-family: var(--main-font);\\n  background-color: var(--back-color);\\n  color: var(--white-color);\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5 {\\n  line-height: 1.5rem;\\n  font-family: var(--main-font);\\n}\\n\\nh1 {\\n  font-size: 2.5rem;\\n}\\n\\nh2 {\\n  font-size: 2rem;\\n}\\n\\np {\\n  font-size: 1rem;\\n}\\n\\n.container {\\n  padding: 1rem 20%;\\n}\\n\\nnav {\\n  margin-top: 45px;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\nnav ul {\\n  display: flex;\\n  gap: 60px;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\nnav ul li a,\\n.counter {\\n  display: flex;\\n  flex-direction: row;\\n  color: var(--white-color);\\n  font-size: 1.2rem;\\n  letter-spacing: var(--spacing);\\n}\\n\\nnav ul li a:hover {\\n  color: var(--main-color);\\n}\\n\\n.active {\\n  color: var(--main-color);\\n}\\n\\n.logo img {\\n  width: 12%;\\n}\\n\\n/* Movie-deck section */\\n\\n.category {\\n  display: flex;\\n  margin-top: 80px;\\n  margin-bottom: -140px;\\n}\\n\\n.category i {\\n  color: var(--main-color);\\n  font-size: 1.4rem;\\n}\\n\\nhr {\\n  width: 100%;\\n  height: 0.5px;\\n  color: var(--white-color);\\n}\\n\\n.movies-deck,\\n.movies-deck2 {\\n  margin: 8% auto;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-template-rows: 1fr;\\n  grid-column-gap: 50px;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.image img {\\n  width: 90%;\\n  margin-bottom: 20px;\\n  border-radius: var(--radius);\\n}\\n\\n.image img:hover {\\n  border: solid 0.2rem #fff;\\n}\\n\\nbutton {\\n  padding: 6px 12px;\\n  background: var(--main-color);\\n  color: var(--white-color);\\n  font-size: 0.8rem;\\n  letter-spacing: var(--spacing);\\n  border-radius: var(--radius);\\n}\\n\\nbutton:hover {\\n  background: var(--secondary-color);\\n  color: var(--white-color);\\n}\\n\\n.comment-likes {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.comment-likes i {\\n  font-size: 1rem;\\n  margin-left: 120px;\\n}\\n\\n.comment-likes i:hover {\\n  color: var(--secondary-color);\\n}\\n\\n.comment-likes span {\\n  margin-right: 40px;\\n}\\n\\nfooter {\\n  border-top: 2px solid #fff;\\n}\\n\\nfooter p {\\n  font-size: 0.9rem;\\n}\\n\\n.footerlink {\\n  color: var(--main-color);\\n}\\n\\n.background {\\n  z-index: 98;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  backdrop-filter: blur(15px);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#popup-flex {\\n  max-width: 30rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-content: center;\\n  align-items: center;\\n  background-color: #ff007f;\\n  overflow-y: scroll;\\n  max-height: 40rem;\\n}\\n\\n.genre {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.description {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.commentalign {\\n  text-align: center;\\n}\\n\\n.popupspacing {\\n  margin-top: 1rem;\\n}\\n\\n.nodisplay {\\n  display: none;\\n}\\n\\n#popupimage {\\n  width: 20rem;\\n  height: 15rem;\\n}\\n\\n#popupcancel {\\n  width: 2rem;\\n  height: 2rem;\\n}\\n\\n#nameinput {\\n  height: 2rem;\\n  width: 14.7rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayUI.js */ \"./src/modules/displayUI.js\");\n/* harmony import */ var _modules_postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postLikes.js */ \"./src/modules/postLikes.js\");\n/* harmony import */ var _modules_showlikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showlikes.js */ \"./src/modules/showlikes.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n\n\n\n\n\n\n(0,_modules_displayUI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nwindow.addEventListener('load', () => {\n  const commentBtn = document.querySelectorAll('.btnClass');\n  commentBtn.forEach((element) => {\n    element.addEventListener('click', _modules_popup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  });\n});\n\nwindow.addEventListener('click', async (e) => {\n  const likeBtn = e.target;\n  if (likeBtn.className === 'fa-solid fa-heart') {\n    console.log(e.target);\n  }\n});\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/modules/addLikes.js":
/*!*********************************!*\
  !*** ./src/modules/addLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getNumberOfLikes = async () => {\n  const request = await fetch(\n    // eslint-disable-next-line comma-dangle\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YxBlOWRJNblYAJxe3dgi/likes/'\n  );\n  const data = await request.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNumberOfLikes);\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/addLikes.js?");

/***/ }),

/***/ "./src/modules/displayUI.js":
/*!**********************************!*\
  !*** ./src/modules/displayUI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _addLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addLikes.js */ \"./src/modules/addLikes.js\");\n/* harmony import */ var _getMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMovies.js */ \"./src/modules/getMovies.js\");\n/* eslint-disable import/no-duplicates */\n\n\n\n\n\n// Render likes\nconst displayUI = async () => {\n  const movies = (0,_getMovies_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const data = await (0,_addLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__.comedy.innerHTML = '';\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__.action.innerHTML = '';\n  data.forEach((obj, objIndex) => {\n    const { movieImg } = movies[objIndex];\n    if (objIndex <= 3) {\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.comedy.innerHTML += `\n      <div class=\"card\">\n            <div class=\"image\">\n              <img id='movie' src=\"${movieImg}\" alt=\"movie\" />\n            </div>\n            <div class=\"comment-likes\">\n              <button class=\"btnClass\" id=\"comment\">Comments</button>\n              <i class=\"fa-sharp fa-solid fa-heart\" id=\"like-btn\"></i>\n              <span id=\"likes\">${obj.likes}</span>\n            </div>\n          </div>\n  `;\n    } else {\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.action.innerHTML += `\n      <div class=\"card\">\n            <div class=\"image\">\n              <img id='movie' src=\"${movieImg}\" alt=\"movie\" />\n            </div>\n            <div class=\"comment-likes\">\n              <button class=\"btnClass\" id=\"comment\" >Comments</button>\n              <i class=\"fa-sharp fa-solid fa-heart\" id=\"like-btn\"></i>\n              <span id=\"likes\">${obj.likes}</span>\n            </div>\n          </div>`;\n    }\n  });\n};\n\nconst featuredShows = document.querySelector('.counter');\nfeaturedShows.innerHTML = `Movies (${_getMovies_js__WEBPACK_IMPORTED_MODULE_2__.pullMovies.length})`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayUI);\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/displayUI.js?");

/***/ }),

/***/ "./src/modules/getMovies.js":
/*!**********************************!*\
  !*** ./src/modules/getMovies.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"pullMovies\": () => (/* binding */ pullMovies)\n/* harmony export */ });\n/* eslint-disable object-curly-newline */\nconst baseUrl = 'https://api.tvmaze.com/search/shows?q=';\nconst pullMovies = [\n  'Young Sheldon',\n  'Modern Family',\n  'Friends',\n  'The Office',\n  'Reacher',\n  'Hanna',\n  'Gangland',\n  'Titans',\n];\nconst displayMovies = [];\n\nconst getMovies = () => {\n  pullMovies.forEach(async (moviez) => {\n    const fetchUrl = baseUrl.concat(moviez);\n    const response = await fetch(fetchUrl);\n    const data = await response.json();\n    const arr = data[0];\n    const { show } = arr;\n    const { id, name, status, image, summary, premiered } = show;\n    const { medium } = image;\n    const trimmedSummary = summary.substring(0, 200);\n    const movie = {\n      movieId: id,\n      movieImg: medium,\n      movieTitle: name,\n      movieStatus: status,\n      moviePremier: premiered,\n      movieInfo: trimmedSummary,\n    };\n    displayMovies.push(movie);\n  });\n  return displayMovies;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);\n\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/getMovies.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_cancel_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/cancel.png */ \"./src/assets/cancel.png\");\n/* harmony import */ var _assets_blackout_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/blackout.jpg */ \"./src/assets/blackout.jpg\");\n\n\n\nconst popupArea = document.querySelector('#popups');\n\nconst urlData = {\n  imageUrl: _assets_blackout_jpg__WEBPACK_IMPORTED_MODULE_1__,\n  movieTitle: 'Black out',\n  genre: 'Action',\n  premiered: '2015-10-12',\n  description: 'A story of two boys looking for their identity in a world where the traditional role of the man is changing. They are longing for success, endless love and passionate sex - but what happens if you fail?',\n};\n\nwindow.hidePopup = () => {\n  popupArea.classList.add('nodisplay');\n  popupArea.classList.remove('background');\n};\n\nconst createPopup = () => {\n  popupArea.classList.remove('nodisplay');\n  popupArea.classList.add('background');\n  popupArea.innerHTML = `<div id=\"popup-flex\" class=\"scroll\">\n  <div onclick='hidePopup()'>\n  <img id=\"popupcancel\" class=\"popupspacing\" src=${_assets_cancel_png__WEBPACK_IMPORTED_MODULE_0__} alt=\"movie cover\">\n  </div>\n  <img id=\"popupimage\" class=\"popupspacing\" src=${urlData.imageUrl} alt=\"movie cover\">\n  <h2 class=\"popupspacing\">${urlData.movieTitle}</h2>\n  <div class=\"popupspacing\">\n    <div class=\"genre\">\n      <p>Genre: ${urlData.genre}</p>\n      <p>premiered: ${urlData.premiered}</p>\n    </div>\n    <div class=\"description popupspacing\">\n      <h3>Description</h3>\n      <p>${urlData.description}</p>\n    </div>\n  </div>\n  <div class=\"popupspacing\">\n    <h3 class=\"commentalign\">Comments <span>2</span></h3>\n    <div>\n      <p>2015-10-12 Lee: I loved the show</p>\n      <p>2015-10-12 Lee: I loved the show</p>\n    </div>\n  </div>\n  <div class=\"popupspacing\">\n    <h3 class=\"commentalign\">Add a comment</h3>\n    <form action=\"\">\n      <fieldset>\n        <label for=\"name\">\n          <input type=\"text\" id=\"name\" placeholder=\"Your name\">\n        </label>\n      </fieldset>\n      <fieldset class=\"popupspacing\">\n        <label for=\"insight\">\n          <textarea name=\"insight\" id=\"insight\" cols=\"30\" rows=\"10\" placeholder=\"Your insight\"></textarea>\n        </label>\n      </fieldset>\n      <button type=\"submit\">comment</button>\n    </form>\n  </div>\n</div>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopup);\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\nconst postLikes = async (id) => {\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YxBlOWRJNblYAJxe3dgi/likes/',\n    {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ item_id: `${id}` }),\n      // eslint-disable-next-line comma-dangle\n    }\n  );\n  const data = await response.json();\n  return data;\n};\n\nconst getLikes = async () => {\n  const response = await fetch(\n    // eslint-disable-next-line comma-dangle\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YxBlOWRJNblYAJxe3dgi/likes/'\n  );\n  const results = await response.json();\n  return results;\n};\n\n\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/postLikes.js?");

/***/ }),

/***/ "./src/modules/showlikes.js":
/*!**********************************!*\
  !*** ./src/modules/showlikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postLikes.js */ \"./src/modules/postLikes.js\");\n\n\nconst showLikes = async (likes) => {\n  const movieId = likes.getAttribute('id');\n  const likesList = await (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n  const numLikes = likesList.filter((obj) => obj.item_id === `${movieId}`);\n  if (numLikes.length > 0) {\n    likes.textContent = `${numLikes[0].likes} likes`;\n    console.log(likes.textContent);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showLikes);\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/showlikes.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"action\": () => (/* binding */ action),\n/* harmony export */   \"comedy\": () => (/* binding */ comedy),\n/* harmony export */   \"comments\": () => (/* binding */ comments),\n/* harmony export */   \"item\": () => (/* binding */ item),\n/* harmony export */   \"likeBtn\": () => (/* binding */ likeBtn),\n/* harmony export */   \"likes\": () => (/* binding */ likes),\n/* harmony export */   \"movie\": () => (/* binding */ movie)\n/* harmony export */ });\nconst likeBtn = document.getElementById('like-btn');\nconst likes = document.getElementById('likes');\nconst comments = document.getElementById('comments');\nconst comedy = document.querySelector('.movies-deck');\nconst action = document.querySelector('.movies-deck2');\nconst item = document.querySelector('.card');\nconst movie = document.getElementById('movie');\n\n// eslint-disable-next-line object-curly-newline\n\n\n\n//# sourceURL=webpack://webpack-template/./src/modules/variables.js?");

/***/ }),

/***/ "./src/assets/blackout.jpg":
/*!*********************************!*\
  !*** ./src/assets/blackout.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c7a4359e1b032d96f03c.jpg\";\n\n//# sourceURL=webpack://webpack-template/./src/assets/blackout.jpg?");

/***/ }),

/***/ "./src/assets/cancel.png":
/*!*******************************!*\
  !*** ./src/assets/cancel.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c84aae9633d635e70955.png\";\n\n//# sourceURL=webpack://webpack-template/./src/assets/cancel.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);