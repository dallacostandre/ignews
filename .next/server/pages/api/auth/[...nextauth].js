"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_faundb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/faundb */ \"(api)/./src/services/faundb.ts\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET\n        }), \n    ],\n    // jwt: {\n    //     signingKey: process.env.SIGNING_KEY\n    // },\n    authorization: {\n        params: {\n            scope: \"read:user\"\n        }\n    },\n    callbacks: {\n        async signIn ({ user , account , profile  }) {\n            const { email  } = user;\n            try {\n                await _services_faundb__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Casefold(user.email)))));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDTjtBQUNqQjtBQUV6QixNQUFNSSxXQUFXLEdBQUc7SUFDdkIsaURBQWlEO0lBQ2pEQyxTQUFTLEVBQUU7UUFDUEosaUVBQWMsQ0FBQztZQUNYSyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtTQUNqRCxDQUFDO0tBQ0w7SUFDRCxTQUFTO0lBQ1QsMENBQTBDO0lBQzFDLEtBQUs7SUFDTEMsYUFBYSxFQUFFO1FBQ1hDLE1BQU0sRUFBRTtZQUNKQyxLQUFLLEVBQUUsV0FBVztTQUNyQjtLQUNKO0lBQ0RDLFNBQVMsRUFBRTtRQUNQLE1BQU1DLE1BQU0sRUFBQyxFQUFFQyxJQUFJLEdBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFLEVBQUU7WUFDckMsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0gsSUFBSTtZQUN0QixJQUFJO2dCQUNBLE1BQU1mLHlEQUFXLENBQ2JDLDZDQUFRLENBQ0pBLDhDQUFTLENBQ0xBLGlEQUFZLENBQ1JBLGdEQUFXLENBQ1BBLGdEQUFXLENBQUMsZUFBZSxDQUFDLEVBQzVCQSxtREFBYyxDQUFDYyxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUM3QixDQUNKLENBQ0osRUFDRGpCLGlEQUFZLENBQ1JBLHFEQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUN6QjtvQkFBRTBCLElBQUksRUFBRTt3QkFBRVQsS0FBSztxQkFBRTtpQkFBRSxDQUN0QixFQUNEakIsOENBQVMsQ0FDTEEsZ0RBQVcsQ0FDUEEsZ0RBQVcsQ0FBQyxlQUFlLENBQUMsRUFDNUJBLG1EQUFjLENBQUNjLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQzdCLENBQ0osQ0FDSixDQUNKO2dCQUNELE9BQU8sSUFBSSxDQUFDO1lBQ2hCLEVBQUUsT0FBTTtnQkFDSixPQUFPLEtBQUssQ0FBQztZQUNqQixDQUFDO1FBQ0wsQ0FBQztLQUNKO0lBQ0RXLE1BQU0sRUFBRXhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDd0IsZUFBZTtDQUN0QztBQUNELGlFQUFlaEMsZ0RBQVEsQ0FBQ0ksV0FBVyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCJcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2ZhdW5kYlwiO1xuaW1wb3J0IHsgcXVlcnkgfSBmcm9tIFwiZmF1bmFkYlwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gICAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHaXRodWJQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgLy8gand0OiB7XG4gICAgLy8gICAgIHNpZ25pbmdLZXk6IHByb2Nlc3MuZW52LlNJR05JTkdfS0VZXG4gICAgLy8gfSxcbiAgICBhdXRob3JpemF0aW9uOiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgc2NvcGU6IFwicmVhZDp1c2VyXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfSkge1xuICAgICAgICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlclxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkuSWYoXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5Ob3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuRXhpc3RzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5NYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5DYXNlZm9sZCh1c2VyLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LkNyZWF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5Db2xsZWN0aW9uKCd1c2VycycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YTogeyBlbWFpbCB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5HZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuTWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LkNhc2Vmb2xkKHVzZXIuZW1haWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59XG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucykiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsImZhdW5hIiwicXVlcnkiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImVtYWlsIiwiSWYiLCJOb3QiLCJFeGlzdHMiLCJNYXRjaCIsIkluZGV4IiwiQ2FzZWZvbGQiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiZGF0YSIsIkdldCIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/services/faundb.ts":
/*!********************************!*\
  !*** ./src/services/faundb.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.NEXTAUTH_SECRET\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmRiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQUUxQixNQUFNQyxLQUFLLEdBQUcsSUFBSUQsMkNBQU0sQ0FBQztJQUM1QkUsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtDQUN0QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL2ZhdW5kYi50cz9jZDUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInO1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn0pIl0sIm5hbWVzIjpbIkNsaWVudCIsImZhdW5hIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/services/faundb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();