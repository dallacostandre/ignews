"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/SignInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SignInButton/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignInButton\": function() { return /* binding */ SignInButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SignInButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SignInButton() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref.data;\n    return session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().signInButton),\n        onClick: function() {\n            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)();\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaGithub, {\n                color: \"#04d361\"\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: session.user.name\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiX, {\n                color: \"#737380\",\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().closeIcon)\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().signInButton),\n        onClick: function() {\n            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaGithub, {\n                color: \"#eba417\"\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Hi, Sign in with GitHub\"\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(SignInButton, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = SignInButton;\nvar _c;\n$RefreshReg$(_c, \"SignInButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQztBQUNBO0FBQ29CO0FBRXpCO0FBRTlCLFNBQVNNLFlBQVksR0FBRzs7SUFDM0IsSUFBMEJGLEdBQVksR0FBWkEsMkRBQVUsRUFBRSxFQUE5QkcsT0FBYSxHQUFLSCxHQUFZLENBQTlCRyxJQUFJO0lBQ1osT0FBT0MsT0FBTyxpQkFDViw4REFBQ0MsUUFBTTtRQUFDQyxJQUFJLEVBQUMsUUFBUTtRQUNqQkMsU0FBUyxFQUFFVix5RUFBbUI7UUFDOUJZLE9BQU8sRUFBRTttQkFBTVYsd0RBQU8sRUFBRTtTQUFBOzswQkFFeEIsOERBQUNILG9EQUFRO2dCQUFDYyxLQUFLLEVBQUMsU0FBUzs7Ozs7b0JBQUc7MEJBQzVCLDhEQUFDQyxNQUFJOzBCQUFFUCxPQUFPLENBQUNRLElBQUksQ0FBQ0MsSUFBSTs7Ozs7b0JBQVE7MEJBQ2hDLDhEQUFDWiwrQ0FBRztnQkFBQ1MsS0FBSyxFQUFDLFNBQVM7Z0JBQUNILFNBQVMsRUFBRVYsc0VBQWdCOzs7OztvQkFBSTs7Ozs7O1lBQy9DLGlCQUVULDhEQUFDUSxRQUFNO1FBQUNDLElBQUksRUFBQyxRQUFRO1FBQ2pCQyxTQUFTLEVBQUVWLHlFQUFtQjtRQUM5QlksT0FBTyxFQUFFO21CQUFNWCx1REFBTSxDQUFDLFFBQVEsQ0FBQztTQUFBOzswQkFFL0IsOERBQUNGLG9EQUFRO2dCQUFDYyxLQUFLLEVBQUMsU0FBUzs7Ozs7b0JBQUc7MEJBQzVCLDhEQUFDQyxNQUFJOzBCQUFDLHlCQUF1Qjs7Ozs7b0JBQU87Ozs7OztZQUMvQixDQUNaO0FBQ0wsQ0FBQztHQXBCZVQsWUFBWTs7UUFDRUYsdURBQVU7OztBQUR4QkUsS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vaW5kZXgudHN4P2NiNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5cbmltcG9ydCB7IEZpWCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZ25JbkJ1dHRvbigpIHtcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuICAgIHJldHVybiBzZXNzaW9uID8gKFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbkluQnV0dG9ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8RmFHaXRodWIgY29sb3I9JyMwNGQzNjEnIC8+XG4gICAgICAgICAgICA8c3Bhbj57c2Vzc2lvbi51c2VyLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPEZpWCBjb2xvcj0nIzczNzM4MCcgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VJY29ufSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApIDogKFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbkluQnV0dG9ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKCdnaXRodWInKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEZhR2l0aHViIGNvbG9yPScjZWJhNDE3JyAvPlxuICAgICAgICAgICAgPHNwYW4+SGksIFNpZ24gaW4gd2l0aCBHaXRIdWI8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIClcbn0iXSwibmFtZXMiOlsiRmFHaXRodWIiLCJzdHlsZXMiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkZpWCIsIlNpZ25JbkJ1dHRvbiIsImRhdGEiLCJzZXNzaW9uIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsInNpZ25JbkJ1dHRvbiIsIm9uQ2xpY2siLCJjb2xvciIsInNwYW4iLCJ1c2VyIiwibmFtZSIsImNsb3NlSWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SignInButton/index.tsx\n"));

/***/ })

});