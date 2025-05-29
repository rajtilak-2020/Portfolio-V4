/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parse-numeric-range@1.3.0";
exports.ids = ["vendor-chunks/parse-numeric-range@1.3.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/parse-numeric-range@1.3.0/node_modules/parse-numeric-range/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/parse-numeric-range@1.3.0/node_modules/parse-numeric-range/index.js ***!
  \************************************************************************************************/
/***/ ((module, exports) => {

eval("/**\n * @param {string} string    The string to parse\n * @returns {Array<number>}  Returns an energetic array.\n */\nfunction parsePart(string) {\n  let res = [];\n  let m;\n\n  for (let str of string.split(\",\").map((str) => str.trim())) {\n    // just a number\n    if (/^-?\\d+$/.test(str)) {\n      res.push(parseInt(str, 10));\n    } else if (\n      (m = str.match(/^(-?\\d+)(-|\\.\\.\\.?|\\u2025|\\u2026|\\u22EF)(-?\\d+)$/))\n    ) {\n      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)\n      let [_, lhs, sep, rhs] = m;\n\n      if (lhs && rhs) {\n        lhs = parseInt(lhs);\n        rhs = parseInt(rhs);\n        const incr = lhs < rhs ? 1 : -1;\n\n        // Make it inclusive by moving the right 'stop-point' away by one.\n        if (sep === \"-\" || sep === \"..\" || sep === \"\\u2025\") rhs += incr;\n\n        for (let i = lhs; i !== rhs; i += incr) res.push(i);\n      }\n    }\n  }\n\n  return res;\n}\n\nexports[\"default\"] = parsePart;\nmodule.exports = parsePart;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vcGFyc2UtbnVtZXJpYy1yYW5nZUAxLjMuMC9ub2RlX21vZHVsZXMvcGFyc2UtbnVtZXJpYy1yYW5nZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFlO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9LIFJhanRpbGFrJ3MgUG9ydGZvbGlvIC8uL25vZGVfbW9kdWxlcy8ucG5wbS9wYXJzZS1udW1lcmljLXJhbmdlQDEuMy4wL25vZGVfbW9kdWxlcy9wYXJzZS1udW1lcmljLXJhbmdlL2luZGV4LmpzPzJjMTUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nICAgIFRoZSBzdHJpbmcgdG8gcGFyc2VcbiAqIEByZXR1cm5zIHtBcnJheTxudW1iZXI+fSAgUmV0dXJucyBhbiBlbmVyZ2V0aWMgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUGFydChzdHJpbmcpIHtcbiAgbGV0IHJlcyA9IFtdO1xuICBsZXQgbTtcblxuICBmb3IgKGxldCBzdHIgb2Ygc3RyaW5nLnNwbGl0KFwiLFwiKS5tYXAoKHN0cikgPT4gc3RyLnRyaW0oKSkpIHtcbiAgICAvLyBqdXN0IGEgbnVtYmVyXG4gICAgaWYgKC9eLT9cXGQrJC8udGVzdChzdHIpKSB7XG4gICAgICByZXMucHVzaChwYXJzZUludChzdHIsIDEwKSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChtID0gc3RyLm1hdGNoKC9eKC0/XFxkKykoLXxcXC5cXC5cXC4/fFxcdTIwMjV8XFx1MjAyNnxcXHUyMkVGKSgtP1xcZCspJC8pKVxuICAgICkge1xuICAgICAgLy8gMS01IG9yIDEuLjUgKGVxdWl2YWxlbnQpIG9yIDEuLi41IChkb2Vzbid0IGluY2x1ZGUgNSlcbiAgICAgIGxldCBbXywgbGhzLCBzZXAsIHJoc10gPSBtO1xuXG4gICAgICBpZiAobGhzICYmIHJocykge1xuICAgICAgICBsaHMgPSBwYXJzZUludChsaHMpO1xuICAgICAgICByaHMgPSBwYXJzZUludChyaHMpO1xuICAgICAgICBjb25zdCBpbmNyID0gbGhzIDwgcmhzID8gMSA6IC0xO1xuXG4gICAgICAgIC8vIE1ha2UgaXQgaW5jbHVzaXZlIGJ5IG1vdmluZyB0aGUgcmlnaHQgJ3N0b3AtcG9pbnQnIGF3YXkgYnkgb25lLlxuICAgICAgICBpZiAoc2VwID09PSBcIi1cIiB8fCBzZXAgPT09IFwiLi5cIiB8fCBzZXAgPT09IFwiXFx1MjAyNVwiKSByaHMgKz0gaW5jcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gbGhzOyBpICE9PSByaHM7IGkgKz0gaW5jcikgcmVzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gcGFyc2VQYXJ0O1xubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVBhcnQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/parse-numeric-range@1.3.0/node_modules/parse-numeric-range/index.js\n");

/***/ })

};
;