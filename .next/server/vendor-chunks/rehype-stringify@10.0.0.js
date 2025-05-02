"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-stringify@10.0.0";
exports.ids = ["vendor-chunks/rehype-stringify@10.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/rehype-stringify@10.0.0/node_modules/rehype-stringify/lib/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/rehype-stringify@10.0.0/node_modules/rehype-stringify/lib/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rehypeStringify)\n/* harmony export */ });\n/* harmony import */ var hast_util_to_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-to-html */ \"(rsc)/./node_modules/.pnpm/hast-util-to-html@9.0.1/node_modules/hast-util-to-html/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n * @typedef {import('hast-util-to-html').Options} Options\n * @typedef {import('unified').Compiler<Root, string>} Compiler\n */\n\n\n\n/**\n * Plugin to add support for serializing as HTML.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {undefined}\n *   Nothing.\n */\nfunction rehypeStringify(options) {\n  /** @type {import('unified').Processor<undefined, undefined, undefined, Root, string>} */\n  // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.\n  const self = this\n  const settings = {...self.data('settings'), ...options}\n\n  self.compiler = compiler\n\n  /**\n   * @type {Compiler}\n   */\n  function compiler(tree) {\n    return (0,hast_util_to_html__WEBPACK_IMPORTED_MODULE_0__.toHtml)(tree, settings)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVoeXBlLXN0cmluZ2lmeUAxMC4wLjAvbm9kZV9tb2R1bGVzL3JlaHlwZS1zdHJpbmdpZnkvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHFDQUFxQztBQUNsRCxhQUFhLDBDQUEwQztBQUN2RDs7QUFFd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDZTtBQUNmLGFBQWEsNEVBQTRFO0FBQ3pGO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxXQUFXLHlEQUFNO0FBQ2pCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9LIFJhanRpbGFrJ3MgUG9ydGZvbGlvIC8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWh5cGUtc3RyaW5naWZ5QDEwLjAuMC9ub2RlX21vZHVsZXMvcmVoeXBlLXN0cmluZ2lmeS9saWIvaW5kZXguanM/NGU1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0LXV0aWwtdG8taHRtbCcpLk9wdGlvbnN9IE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaWZpZWQnKS5Db21waWxlcjxSb290LCBzdHJpbmc+fSBDb21waWxlclxuICovXG5cbmltcG9ydCB7dG9IdG1sfSBmcm9tICdoYXN0LXV0aWwtdG8taHRtbCdcblxuLyoqXG4gKiBQbHVnaW4gdG8gYWRkIHN1cHBvcnQgZm9yIHNlcmlhbGl6aW5nIGFzIEhUTUwuXG4gKlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKiAgIE5vdGhpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlaHlwZVN0cmluZ2lmeShvcHRpb25zKSB7XG4gIC8qKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUHJvY2Vzc29yPHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFJvb3QsIHN0cmluZz59ICovXG4gIC8vIEB0cy1leHBlY3QtZXJyb3I6IFRTIGluIEpTRG9jIGdlbmVyYXRlcyB3cm9uZyB0eXBlcyBpZiBgdGhpc2AgaXMgdHlwZWQgcmVndWxhcmx5LlxuICBjb25zdCBzZWxmID0gdGhpc1xuICBjb25zdCBzZXR0aW5ncyA9IHsuLi5zZWxmLmRhdGEoJ3NldHRpbmdzJyksIC4uLm9wdGlvbnN9XG5cbiAgc2VsZi5jb21waWxlciA9IGNvbXBpbGVyXG5cbiAgLyoqXG4gICAqIEB0eXBlIHtDb21waWxlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBpbGVyKHRyZWUpIHtcbiAgICByZXR1cm4gdG9IdG1sKHRyZWUsIHNldHRpbmdzKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/rehype-stringify@10.0.0/node_modules/rehype-stringify/lib/index.js\n");

/***/ })

};
;