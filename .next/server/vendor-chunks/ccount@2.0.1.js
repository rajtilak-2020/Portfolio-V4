"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ccount@2.0.1";
exports.ids = ["vendor-chunks/ccount@2.0.1"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ccount: () => (/* binding */ ccount)\n/* harmony export */ });\n/**\n * Count how often a character (or substring) is used in a string.\n *\n * @param {string} value\n *   Value to search in.\n * @param {string} character\n *   Character (or substring) to look for.\n * @return {number}\n *   Number of times `character` occurred in `value`.\n */\nfunction ccount(value, character) {\n  const source = String(value)\n\n  if (typeof character !== 'string') {\n    throw new TypeError('Expected character')\n  }\n\n  let count = 0\n  let index = source.indexOf(character)\n\n  while (index !== -1) {\n    count++\n    index = source.indexOf(character, index + character.length)\n  }\n\n  return count\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vY2NvdW50QDIuMC4xL25vZGVfbW9kdWxlcy9jY291bnQvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9yZm9saW8vLi9ub2RlX21vZHVsZXMvLnBucG0vY2NvdW50QDIuMC4xL25vZGVfbW9kdWxlcy9jY291bnQvaW5kZXguanM/ZmMwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvdW50IGhvdyBvZnRlbiBhIGNoYXJhY3RlciAob3Igc3Vic3RyaW5nKSBpcyB1c2VkIGluIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBzZWFyY2ggaW4uXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyXG4gKiAgIENoYXJhY3RlciAob3Igc3Vic3RyaW5nKSB0byBsb29rIGZvci5cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqICAgTnVtYmVyIG9mIHRpbWVzIGBjaGFyYWN0ZXJgIG9jY3VycmVkIGluIGB2YWx1ZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjY291bnQodmFsdWUsIGNoYXJhY3Rlcikge1xuICBjb25zdCBzb3VyY2UgPSBTdHJpbmcodmFsdWUpXG5cbiAgaWYgKHR5cGVvZiBjaGFyYWN0ZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgY2hhcmFjdGVyJylcbiAgfVxuXG4gIGxldCBjb3VudCA9IDBcbiAgbGV0IGluZGV4ID0gc291cmNlLmluZGV4T2YoY2hhcmFjdGVyKVxuXG4gIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICBjb3VudCsrXG4gICAgaW5kZXggPSBzb3VyY2UuaW5kZXhPZihjaGFyYWN0ZXIsIGluZGV4ICsgY2hhcmFjdGVyLmxlbmd0aClcbiAgfVxuXG4gIHJldHVybiBjb3VudFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js\n");

/***/ })

};
;