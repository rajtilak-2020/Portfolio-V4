"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.3.3_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.3.3_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLayoutEffect: () => (/* binding */ $9f79659886946c16$export$e5c5a5f917a5871c)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n\n\n/**\n * On the server, React emits a warning when calling `useLayoutEffect`.\n * This is because neither `useLayoutEffect` nor `useEffect` run on the server.\n * We use this safe version which suppresses the warning by replacing it with a noop on the server.\n *\n * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect\n */ const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : ()=>{};\n\n\n\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1sYXlvdXQtZWZmZWN0QDEuMC4xX0B0eXBlcytyZWFjdEAxOC4zLjNfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWxheW91dC1lZmZlY3QvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0U7OztBQUdoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SUFBNkksa0RBQXNCOzs7OztBQUs3RjtBQUN0RSIsInNvdXJjZXMiOlsid2VicGFjazovL0sgUmFqdGlsYWsncyBQb3J0Zm9saW8gLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC11c2UtbGF5b3V0LWVmZmVjdEAxLjAuMV9AdHlwZXMrcmVhY3RAMTguMy4zX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1sYXlvdXQtZWZmZWN0L2Rpc3QvaW5kZXgubWpzPzkwMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VMYXlvdXRFZmZlY3QgYXMgJGR4bHdIJHVzZUxheW91dEVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5cblxuLyoqXG4gKiBPbiB0aGUgc2VydmVyLCBSZWFjdCBlbWl0cyBhIHdhcm5pbmcgd2hlbiBjYWxsaW5nIGB1c2VMYXlvdXRFZmZlY3RgLlxuICogVGhpcyBpcyBiZWNhdXNlIG5laXRoZXIgYHVzZUxheW91dEVmZmVjdGAgbm9yIGB1c2VFZmZlY3RgIHJ1biBvbiB0aGUgc2VydmVyLlxuICogV2UgdXNlIHRoaXMgc2FmZSB2ZXJzaW9uIHdoaWNoIHN1cHByZXNzZXMgdGhlIHdhcm5pbmcgYnkgcmVwbGFjaW5nIGl0IHdpdGggYSBub29wIG9uIHRoZSBzZXJ2ZXIuXG4gKlxuICogU2VlOiBodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtcmVmZXJlbmNlLmh0bWwjdXNlbGF5b3V0ZWZmZWN0XG4gKi8gY29uc3QgJDlmNzk2NTk4ODY5NDZjMTYkZXhwb3J0JGU1YzVhNWY5MTdhNTg3MWMgPSBCb29sZWFuKGdsb2JhbFRoaXMgPT09IG51bGwgfHwgZ2xvYmFsVGhpcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2xvYmFsVGhpcy5kb2N1bWVudCkgPyAkZHhsd0gkdXNlTGF5b3V0RWZmZWN0IDogKCk9Pnt9O1xuXG5cblxuXG5leHBvcnQgeyQ5Zjc5NjU5ODg2OTQ2YzE2JGV4cG9ydCRlNWM1YTVmOTE3YTU4NzFjIGFzIHVzZUxheW91dEVmZmVjdH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\n");

/***/ })

};
;