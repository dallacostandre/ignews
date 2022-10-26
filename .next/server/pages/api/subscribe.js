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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"(api)/./src/services/stripe.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n            req\n        });\n        const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.customers.create({\n            email: session.user.email\n        });\n        const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.checkout.sessions.create({\n            customer: stripeCustomer.id,\n            payment_method_types: [\n                \"card\"\n            ],\n            billing_address_collection: \"required\",\n            line_items: [\n                {\n                    price: \"price_1LwWCNCfQANcddTKAasXLV3x\",\n                    quantity: 1\n                }\n            ],\n            mode: \"subscription\",\n            allow_promotion_codes: true,\n            success_url: process.env.STRIPE_SUCCESS_URL,\n            cancel_url: process.env.STRIPE_CANCEL_URL\n        });\n        return res.status(200).json({\n            sessionId: stripeCheckoutSession.id\n        });\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method now allowed\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQytDO0FBQ0Y7QUFFN0MsaUVBQWUsT0FBT0UsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUNoRSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFFdkIsTUFBTUMsT0FBTyxHQUFHLE1BQU1KLDJEQUFVLENBQUM7WUFBRUMsR0FBRztTQUFFLENBQUM7UUFFekMsTUFBTUksY0FBYyxHQUFHLE1BQU1OLHFFQUF1QixDQUFDO1lBQ2pEUyxLQUFLLEVBQUVKLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDRCxLQUFLO1NBRTVCLENBQUM7UUFFRixNQUFNRSxxQkFBcUIsR0FBRyxNQUFNWCw2RUFBK0IsQ0FBQztZQUNoRWMsUUFBUSxFQUFFUixjQUFjLENBQUNTLEVBQUU7WUFDM0JDLG9CQUFvQixFQUFFO2dCQUFDLE1BQU07YUFBQztZQUM5QkMsMEJBQTBCLEVBQUUsVUFBVTtZQUN0Q0MsVUFBVSxFQUFFO2dCQUFDO29CQUNUQyxLQUFLLEVBQUUsZ0NBQWdDO29CQUFFQyxRQUFRLEVBQUUsQ0FBQztpQkFDdkQ7YUFDQTtZQUNEQyxJQUFJLEVBQUUsY0FBYztZQUNwQkMscUJBQXFCLEVBQUUsSUFBSTtZQUMzQkMsV0FBVyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msa0JBQWtCO1lBQzNDQyxVQUFVLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxpQkFBaUI7U0FDNUMsQ0FBQztRQUVGLE9BQU96QixHQUFHLENBQUMwQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxTQUFTLEVBQUVwQixxQkFBcUIsQ0FBQ0ksRUFBRTtTQUFFLENBQUM7SUFDeEUsT0FBTztRQUNIWixHQUFHLENBQUM2QixTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CN0IsR0FBRyxDQUFDMEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSSxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM5QyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9hcGkvc3Vic2NyaWJlLnRzPzA1OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlc3BvbnNlLCBOZXh0QXBpUmVxdWVzdCB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RyaXBlJztcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG5cbiAgICAgICAgY29uc3Qgc3RyaXBlQ3VzdG9tZXIgPSBhd2FpdCBzdHJpcGUuY3VzdG9tZXJzLmNyZWF0ZSh7XG4gICAgICAgICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsLFxuICAgICAgICAgICAgLy8gbWV0YWRhdGE6IHJlcS5ib2R5LnNvdXJjZSxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzdHJpcGVDaGVja291dFNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgICAgIGN1c3RvbWVyOiBzdHJpcGVDdXN0b21lci5pZCxcbiAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcbiAgICAgICAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgbGluZV9pdGVtczogW3tcbiAgICAgICAgICAgICAgICBwcmljZTogJ3ByaWNlXzFMd1dDTkNmUUFOY2RkVEtBYXNYTFYzeCcsIHF1YW50aXR5OiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbW9kZTogJ3N1YnNjcmlwdGlvbicsXG4gICAgICAgICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX1NVQ0NFU1NfVVJMLFxuICAgICAgICAgICAgY2FuY2VsX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX0NBTkNFTF9VUkwsXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbklkOiBzdHJpcGVDaGVja291dFNlc3Npb24uaWQgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJyk7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBub3cgYWxsb3dlZCcpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsic3RyaXBlIiwiZ2V0U2Vzc2lvbiIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJzdHJpcGVDdXN0b21lciIsImN1c3RvbWVycyIsImNyZWF0ZSIsImVtYWlsIiwidXNlciIsInN0cmlwZUNoZWNrb3V0U2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjdXN0b21lciIsImlkIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsInN1Y2Nlc3NfdXJsIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TVUNDRVNTX1VSTCIsImNhbmNlbF91cmwiLCJTVFJJUEVfQ0FOQ0VMX1VSTCIsInN0YXR1cyIsImpzb24iLCJzZXNzaW9uSWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "(api)/./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"(api)/./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"Ignews\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7QUFDaUI7QUFFdEMsTUFBTUUsTUFBTSxHQUFHLElBQUlGLCtDQUFNLENBQzVCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxFQUMxQjtJQUNJQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsT0FBTyxFQUFFO1FBQ0xDLElBQUksRUFBRSxRQUFRO1FBQ2RQLE9BQU87S0FDVjtDQUNKLENBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHM/YWI5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gICAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gICAge1xuICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG4gICAgICAgIGFwcEluZm86IHtcbiAgICAgICAgICAgIG5hbWU6ICdJZ25ld3MnLFxuICAgICAgICAgICAgdmVyc2lvblxuICAgICAgICB9LFxuICAgIH1cbik7Il0sIm5hbWVzIjpbIlN0cmlwZSIsInZlcnNpb24iLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX0FQSV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/services/stripe.ts\n");

/***/ }),

/***/ "(api)/./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"16":"^0.0.2","@stripe/stripe-js":"^1.42.0","axios":"^1.1.3","faunadb":"^4.7.1","next":"12.3.1","next-auth":"^4.15.0","node":"^19.0.0","nvm":"^0.0.4","react":"18.2.0","react-dom":"18.2.0","react-icons":"^4.6.0","sass":"^1.55.0","stripe":"^10.15.0"},"devDependencies":{"@types/node":"^18.11.4","@types/react":"^18.0.21","eslint":"8.26.0","eslint-config-next":"12.3.1","typescript":"^4.8.4"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();