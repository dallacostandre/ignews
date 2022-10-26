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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/style.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/SubscribeButton/style.module.scss ***!
  \**********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"style_subscribeButton__nD5ak\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGUubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGUubW9kdWxlLnNjc3M/N2JkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdWJzY3JpYmVCdXR0b25cIjogXCJzdHlsZV9zdWJzY3JpYmVCdXR0b25fX25ENWFrXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/style.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/NjQ1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX19IWXVOOFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fX2xocFdTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/SubscribeButton/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_api__WEBPACK_IMPORTED_MODULE_2__]);\n_services_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/subscribe\");\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (err) {\n            alert(err.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n        onClick: handleSubscribe,\n        children: \" Subscribe Now\"\n    }, void 0, false, {\n        fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/components/SubscribeButton/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXFEO0FBQ1o7QUFDYztBQUNkO0FBTWxDLFNBQVNLLGVBQWUsQ0FBQyxFQUFFQyxPQUFPLEdBQXdCLEVBQUU7SUFFL0QsTUFBTUMsT0FBTyxHQUFHTiwyREFBVSxFQUFFO0lBRTVCLGVBQWVPLGVBQWUsR0FBRztRQUM3QixJQUFJLENBQUNELE9BQU8sRUFBRTtZQUNWUCx1REFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pCLE9BQU87UUFDWCxDQUFDO1FBQ0QsSUFBSTtZQUNBLE1BQU1TLFFBQVEsR0FBRyxNQUFNUCxtREFBUSxDQUFDLFlBQVksQ0FBQztZQUM3QyxNQUFNLEVBQUVTLFNBQVMsR0FBRSxHQUFHRixRQUFRLENBQUNHLElBQUk7WUFFbkMsTUFBTUMsTUFBTSxHQUFHLE1BQU1WLGdFQUFXLEVBQUU7WUFFbEMsTUFBTVUsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQztnQkFBRUgsU0FBUzthQUFFLENBQUMsQ0FBQztRQUNuRCxFQUFFLE9BQU9JLEdBQUcsRUFBRTtZQUNWQyxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFDSSw4REFBQ0MsUUFBTTtRQUNIQyxTQUFTLEVBQUVmLDJFQUFzQjtRQUNqQ2lCLE9BQU8sRUFBRWIsZUFBZTtrQkFDM0IsZ0JBQWM7Ozs7O1lBQVMsQ0FDM0I7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeD85MGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IHsgZ2V0U3RyaXBlSnMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdHJpcGUtanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3BzIHtcbiAgICBwcmljZUlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdWJzY3JpYmVCdXR0b24oeyBwcmljZUlkIH06IFN1YnNjcmliZUJ1dHRvblByb3BzKSB7XG5cbiAgICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgICAgICAgIHNpZ25JbignZ2l0aHViJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9zdWJzY3JpYmUnKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2Vzc2lvbklkIH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBnZXRTdHJpcGVKcygpXG5cbiAgICAgICAgICAgIGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoeyBzZXNzaW9uSWQgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3Vic2NyaWJlQnV0dG9ufVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3Vic2NyaWJlfVxuICAgICAgICA+IFN1YnNjcmliZSBOb3c8L2J1dHRvbj5cbiAgICApXG59Il0sIm5hbWVzIjpbInNpZ25JbiIsInVzZVNlc3Npb24iLCJhcGkiLCJnZXRTdHJpcGVKcyIsInN0eWxlcyIsIlN1YnNjcmliZUJ1dHRvbiIsInByaWNlSWQiLCJzZXNzaW9uIiwiaGFuZGxlU3Vic2NyaWJlIiwicmVzcG9uc2UiLCJwb3N0Iiwic2Vzc2lvbklkIiwiZGF0YSIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInN1YnNjcmliZUJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__]);\n_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Home({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home | ig.news\"\n                }, void 0, false, {\n                    fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" Hey, welcome\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 40\n                                    }, this),\n                                    \" world.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get access to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 60\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl coding\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andredallacosta/Documents/Ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\nconst getStaticProps = async ()=>{\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(\"price_1LwWCNCfQANcddTKAasXLV3x\");\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"en-US\", {\n            style: \"currency\",\n            currency: \"USD\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUNtQztBQUNwQjtBQUNKO0FBU3pCLFNBQVNJLElBQUksQ0FBQyxFQUFFQyxPQUFPLEdBQWEsRUFBRTtJQUNqRCxxQkFDSTs7MEJBQ0ksOERBQUNMLGtEQUFJOzBCQUNELDRFQUFDTSxPQUFLOzhCQUFDLGdCQUFjOzs7Ozt3QkFBUTs7Ozs7b0JBQzFCOzBCQUNQLDhEQUFDQyxNQUFJO2dCQUFDQyxTQUFTLEVBQUVMLDJFQUF1Qjs7a0NBQ3BDLDhEQUFDTyxTQUFPO3dCQUFDRixTQUFTLEVBQUVMLCtEQUFXOzswQ0FDM0IsOERBQUNTLE1BQUk7MENBQUMsZUFBYTs7Ozs7b0NBQU87MENBQzFCLDhEQUFDQyxJQUFFOztvQ0FBQyxpQkFBZTtrREFBQSw4REFBQ0QsTUFBSTtrREFBQyxPQUFLOzs7Ozs0Q0FBTztvQ0FBQSxTQUFPOzs7Ozs7b0NBQUs7MENBQ2pELDhEQUFDRSxHQUFDOztvQ0FBQyxxQ0FDb0M7a0RBQUEsOERBQUNDLElBQUU7Ozs7NENBQUc7a0RBQ3pDLDhEQUFDSCxNQUFJOzs0Q0FBQyxNQUFJOzRDQUFDUCxPQUFPLENBQUNXLE1BQU07NENBQUMsUUFBTTs7Ozs7OzRDQUFPOzs7Ozs7b0NBQ3ZDOzBDQUNKLDhEQUFDZix3RUFBZTtnQ0FBQ2dCLE9BQU8sRUFBRVosT0FBTyxDQUFDWSxPQUFPOzs7OztvQ0FBSTs7Ozs7OzRCQUN2QztrQ0FDViw4REFBQ0MsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLG9CQUFvQjt3QkFBQ0MsR0FBRyxFQUFDLGFBQWE7Ozs7OzRCQUFHOzs7Ozs7b0JBQy9DOztvQkFDUixDQUNOO0FBQ0wsQ0FBQztBQUVNLE1BQU1DLGNBQWMsR0FBbUIsVUFBWTtJQUV0RCxNQUFNQyxLQUFLLEdBQUcsTUFBTXBCLG9FQUFzQixDQUFDLGdDQUFnQyxDQUFDO0lBRTVFLE1BQU1HLE9BQU8sR0FBRztRQUNaWSxPQUFPLEVBQUVLLEtBQUssQ0FBQ0csRUFBRTtRQUNqQlQsTUFBTSxFQUFFLElBQUlVLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUNuQ0MsS0FBSyxFQUFFLFVBQVU7WUFDakJDLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLENBQUNTLFdBQVcsR0FBRyxHQUFHLENBQUM7S0FDckM7SUFFRCxPQUFPO1FBQ0hDLEtBQUssRUFBRTtZQUNIM0IsT0FBTztTQUNWO1FBQ0Q0QixVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0tBQzNCO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgU3Vic2NyaWJlQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24nO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSAnLi4vc2VydmljZXMvc3RyaXBlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gICAgcHJvZHVjdDoge1xuICAgICAgICBwcmljZUlkOiBzdHJpbmcsXG4gICAgICAgIGFtb3VudDogc3RyaW5nLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3QgfTogSG9tZVByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ib21lIHwgaWcubmV3czwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEhleSwgd2VsY29tZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPk5ld3MgYWJvdXQgdGhlIDxzcGFuPlJlYWN0PC9zcGFuPiB3b3JsZC48L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdldCBhY2Nlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5mb3Ige3Byb2R1Y3QuYW1vdW50fSBtb250aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uIHByaWNlSWQ9e3Byb2R1Y3QucHJpY2VJZH0gLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2F2YXRhci5zdmdcIiBhbHQ9XCJHaXJsIGNvZGluZ1wiIC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcblxuICAgIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZSgncHJpY2VfMUx3V0NOQ2ZRQU5jZGRUS0Fhc1hMVjN4JylcblxuICAgIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgICAgIHByaWNlSWQ6IHByaWNlLmlkLFxuICAgICAgICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgfSkuZm9ybWF0KHByaWNlLnVuaXRfYW1vdW50IC8gMTAwKSxcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcHJvZHVjdCxcbiAgICAgICAgfSxcbiAgICAgICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDI0LCAvLyAyNCBob3Vyc1xuICAgIH1cbn07XG4iXSwibmFtZXMiOlsiSGVhZCIsIlN1YnNjcmliZUJ1dHRvbiIsInN0cmlwZSIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGVudENvbnRhaW5lciIsInNlY3Rpb24iLCJoZXJvIiwic3BhbiIsImgxIiwicCIsImJyIiwiYW1vdW50IiwicHJpY2VJZCIsImltZyIsInNyYyIsImFsdCIsImdldFN0YXRpY1Byb3BzIiwicHJpY2UiLCJwcmljZXMiLCJyZXRyaWV2ZSIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"/api\"\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLEdBQUcsR0FBR0Qsb0RBQVksQ0FBQztJQUM1QkcsT0FBTyxFQUFFLE1BQU07Q0FDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9hcGkudHM/OTU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6ICcvYXBpJyxcbn0pIl0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51LwWALCfQANcddTKAK8lVooCeMfpqMrCQug0UgiPhru2Hexi10xpbFwdSB2RHim8I4Nn5IhXgrCp92rcZTXPWLrh00KdUebZvK\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUV4QyxlQUFlQyxXQUFXLEdBQUU7SUFDL0IsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLDZEQUFVLENBQUNHLDZHQUF5QyxDQUFDO0lBQzVFLE9BQU9ELFFBQVEsQ0FBQztBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS1qcy50cz81OThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmlwZUpzKCl7XG4gICAgY29uc3Qgc3RyaXBlSnMgPSBhd2FpdCBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZKTtcbiAgICByZXR1cm4gc3RyaXBlSnM7XG59Il0sIm5hbWVzIjpbImxvYWRTdHJpcGUiLCJnZXRTdHJpcGVKcyIsInN0cmlwZUpzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"Ignews\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7QUFDaUI7QUFFdEMsTUFBTUUsTUFBTSxHQUFHLElBQUlGLCtDQUFNLENBQzVCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxFQUMxQjtJQUNJQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsT0FBTyxFQUFFO1FBQ0xDLElBQUksRUFBRSxRQUFRO1FBQ2RQLE9BQU87S0FDVjtDQUNKLENBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHM/YWI5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gICAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gICAge1xuICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG4gICAgICAgIGFwcEluZm86IHtcbiAgICAgICAgICAgIG5hbWU6ICdJZ25ld3MnLFxuICAgICAgICAgICAgdmVyc2lvblxuICAgICAgICB9LFxuICAgIH1cbik7Il0sIm5hbWVzIjpbIlN0cmlwZSIsInZlcnNpb24iLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX0FQSV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"16":"^0.0.2","@stripe/stripe-js":"^1.42.0","axios":"^1.1.3","faunadb":"^4.7.1","next":"12.3.1","next-auth":"^4.15.0","node":"^19.0.0","nvm":"^0.0.4","react":"18.2.0","react-dom":"18.2.0","react-icons":"^4.6.0","sass":"^1.55.0","stripe":"^10.15.0"},"devDependencies":{"@types/node":"^18.11.4","@types/react":"^18.0.21","eslint":"8.26.0","eslint-config-next":"12.3.1","typescript":"^4.8.4"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();