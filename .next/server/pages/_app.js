/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Header/styles.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/styles.module.scss ***!
  \**************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"headerContainer\": \"styles_headerContainer__uAgJk\",\n\t\"headerContent\": \"styles_headerContent__h9eUe\",\n\t\"active\": \"styles_active__l7I1o\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3M/NWNkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJDb250YWluZXJcIjogXCJzdHlsZXNfaGVhZGVyQ29udGFpbmVyX191QWdKa1wiLFxuXHRcImhlYWRlckNvbnRlbnRcIjogXCJzdHlsZXNfaGVhZGVyQ29udGVudF9faDllVWVcIixcblx0XCJhY3RpdmVcIjogXCJzdHlsZXNfYWN0aXZlX19sN0kxb1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/styles.module.scss\n");

/***/ }),

/***/ "./src/components/SignInButton/styles.module.scss":
/*!********************************************************!*\
  !*** ./src/components/SignInButton/styles.module.scss ***!
  \********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"signInButton\": \"styles_signInButton__byt5_\",\n\t\"closeIcon\": \"styles_closeIcon__yr0aw\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzPzlmZDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lnbkluQnV0dG9uXCI6IFwic3R5bGVzX3NpZ25JbkJ1dHRvbl9fYnl0NV9cIixcblx0XCJjbG9zZUljb25cIjogXCJzdHlsZXNfY2xvc2VJY29uX195cjBhd1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SignInButton/styles.module.scss\n");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SignInButton */ \"./src/components/SignInButton/index.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/logo.svg\",\n                    alt: \"Logo\"\n                }, void 0, false, {\n                    fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active),\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"Posts\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignInButton__WEBPACK_IMPORTED_MODULE_2__.SignInButton, {}, void 0, false, {\n                    fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDcUI7QUFDTDtBQUVuQyxTQUFTRyxNQUFNLEdBQUc7SUFDckIscUJBQ0ksOERBQUNDLFFBQU07UUFBQ0MsU0FBUyxFQUFFSCw0RUFBc0I7a0JBQ3JDLDRFQUFDSyxLQUFHO1lBQUNGLFNBQVMsRUFBRUgsMEVBQW9COzs4QkFDaEMsOERBQUNPLEtBQUc7b0JBQUNDLEdBQUcsRUFBQyxrQkFBa0I7b0JBQUNDLEdBQUcsRUFBQyxNQUFNOzs7Ozt3QkFBRzs4QkFDekMsOERBQUNDLEtBQUc7b0JBQUNQLFNBQVMsRUFBRUgsbUVBQWE7O3NDQUN6Qiw4REFBQ1ksR0FBQzs0QkFBQ1QsU0FBUyxFQUFFSCxtRUFBYTtzQ0FBRSxNQUFJOzs7OztnQ0FBSTtzQ0FDckMsOERBQUNZLEdBQUM7c0NBQUMsT0FBSzs7Ozs7Z0NBQUk7Ozs7Ozt3QkFDVjs4QkFDTiw4REFBQ2IsdURBQVk7Ozs7d0JBQUU7Ozs7OztnQkFDYjs7Ozs7WUFDRCxDQUNaO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/NDAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTaWduSW5CdXR0b24gfSBmcm9tIFwiLi4vU2lnbkluQnV0dG9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnN2Z1wiIGFsdD1cIkxvZ29cIiAvPlxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZlfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZlfT5Ib21lPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YT5Qb3N0czwvYT5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8U2lnbkluQnV0dG9uLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiU2lnbkluQnV0dG9uIiwic3R5bGVzIiwiSGVhZGVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaGVhZGVyQ29udGFpbmVyIiwiZGl2IiwiaGVhZGVyQ29udGVudCIsImltZyIsInNyYyIsImFsdCIsIm5hdiIsImFjdGl2ZSIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ }),

/***/ "./src/components/SignInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SignInButton/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignInButton\": () => (/* binding */ SignInButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SignInButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction SignInButton() {\n    const isUserLoggedIn = true;\n    return isUserLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {\n                color: \"#04d361\"\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Andr\\xe9 Dalla Costa\"\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, {\n                color: \"#737380\",\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeIcon)\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {\n                color: \"#eba417\"\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Sign in with GitHub\"\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBQ0E7QUFDTDtBQUU5QixTQUFTRyxZQUFZLEdBQUc7SUFDM0IsTUFBTUMsY0FBYyxHQUFHLElBQUk7SUFFM0IsT0FBT0EsY0FBYyxpQkFDakIsOERBQUNDLFFBQU07UUFBQ0MsSUFBSSxFQUFDLFFBQVE7UUFDakJDLFNBQVMsRUFBRU4seUVBQW1COzswQkFDOUIsOERBQUNELG9EQUFRO2dCQUFDUyxLQUFLLEVBQUMsU0FBUzs7Ozs7b0JBQUc7MEJBQzVCLDhEQUFDQyxNQUFJOzBCQUFDLHNCQUFpQjs7Ozs7b0JBQU87MEJBQzlCLDhEQUFDUiwrQ0FBRztnQkFBQ08sS0FBSyxFQUFDLFNBQVM7Z0JBQUNGLFNBQVMsRUFBRU4sc0VBQWdCOzs7OztvQkFBSTs7Ozs7O1lBQy9DLGlCQUVULDhEQUFDSSxRQUFNO1FBQUNDLElBQUksRUFBQyxRQUFRO1FBQ2pCQyxTQUFTLEVBQUVOLHlFQUFtQjs7MEJBQzlCLDhEQUFDRCxvREFBUTtnQkFBQ1MsS0FBSyxFQUFDLFNBQVM7Ozs7O29CQUFHOzBCQUM1Qiw4REFBQ0MsTUFBSTswQkFBQyxxQkFBbUI7Ozs7O29CQUFPOzs7Ozs7WUFDM0IsQ0FDWjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vaW5kZXgudHN4P2NiNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEZpWCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZ25JbkJ1dHRvbigpIHtcbiAgICBjb25zdCBpc1VzZXJMb2dnZWRJbiA9IHRydWU7XG5cbiAgICByZXR1cm4gaXNVc2VyTG9nZ2VkSW4gPyAoXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zaWduSW5CdXR0b259PlxuICAgICAgICAgICAgPEZhR2l0aHViIGNvbG9yPScjMDRkMzYxJyAvPlxuICAgICAgICAgICAgPHNwYW4+QW5kcsOpIERhbGxhIENvc3RhPC9zcGFuPlxuICAgICAgICAgICAgPEZpWCBjb2xvcj0nIzczNzM4MCcgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VJY29ufSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApIDogKFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbkluQnV0dG9ufT5cbiAgICAgICAgICAgIDxGYUdpdGh1YiBjb2xvcj0nI2ViYTQxNycgLz5cbiAgICAgICAgICAgIDxzcGFuPlNpZ24gaW4gd2l0aCBHaXRIdWI8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIClcbn0iXSwibmFtZXMiOlsiRmFHaXRodWIiLCJzdHlsZXMiLCJGaVgiLCJTaWduSW5CdXR0b24iLCJpc1VzZXJMb2dnZWRJbiIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJzaWduSW5CdXR0b24iLCJjb2xvciIsInNwYW4iLCJjbG9zZUljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SignInButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ \"./src/styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/_app.tsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/_app.tsx\",\n                lineNumber: 7,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7QUFDZjtBQUUvQixTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDSTs7MEJBQUUsOERBQUNILHNEQUFNOzs7O29CQUFHOzBCQUFBLDhEQUFDRSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOztvQkFBRyxDQUMxQztBQUNQLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwUHJvcHN9ZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgICA8PjxIZWFkZXIgLz48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+PC8+XG4gICAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();