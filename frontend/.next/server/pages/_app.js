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

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: process.env.NEXT_PUBLIC_API_URL || \"http://localhost:5000/api\",\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\n// Attach JWT token to every request\napi.interceptors.request.use((config)=>{\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"token\");\n    if (token) config.headers.Authorization = `Bearer ${token}`;\n    return config;\n});\n// Handle 401 responses globally\napi.interceptors.response.use((res)=>res, (err)=>{\n    if (err.response?.status === 401) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(\"token\");\n        if (false) {}\n    }\n    return Promise.reject(err);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNNO0FBRWhDLE1BQU1FLE1BQU1GLG9EQUFZLENBQUM7SUFDdkJJLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQUk7SUFDNUNDLFNBQVM7UUFBRSxnQkFBZ0I7SUFBbUI7QUFDaEQ7QUFFQSxvQ0FBb0M7QUFDcENOLElBQUlPLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7SUFDNUIsTUFBTUMsUUFBUVoscURBQVcsQ0FBQztJQUMxQixJQUFJWSxPQUFPRCxPQUFPSixPQUFPLENBQUNPLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRUYsTUFBTSxDQUFDO0lBQzNELE9BQU9EO0FBQ1Q7QUFFQSxnQ0FBZ0M7QUFDaENWLElBQUlPLFlBQVksQ0FBQ08sUUFBUSxDQUFDTCxHQUFHLENBQzNCLENBQUNNLE1BQVFBLEtBQ1QsQ0FBQ0M7SUFDQyxJQUFJQSxJQUFJRixRQUFRLEVBQUVHLFdBQVcsS0FBSztRQUNoQ2xCLHdEQUFjLENBQUM7UUFDZixJQUFJLEtBQWtCLEVBQWEsRUFFbEM7SUFDSDtJQUNBLE9BQU91QixRQUFRQyxNQUFNLENBQUNQO0FBQ3hCO0FBR0YsaUVBQWVoQixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2c3BhY2UtZnJvbnRlbmQvLi9saWIvYXBpLmpzPzQ1NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGknLFxuICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbn0pO1xuXG4vLyBBdHRhY2ggSldUIHRva2VuIHRvIGV2ZXJ5IHJlcXVlc3RcbmFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoKGNvbmZpZykgPT4ge1xuICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICBpZiAodG9rZW4pIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dG9rZW59YDtcbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuXG4vLyBIYW5kbGUgNDAxIHJlc3BvbnNlcyBnbG9iYWxseVxuYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gIChyZXMpID0+IHJlcyxcbiAgKGVycikgPT4ge1xuICAgIGlmIChlcnIucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICBDb29raWVzLnJlbW92ZSgndG9rZW4nKTtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiQ29va2llcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImhlYWRlcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJnZXQiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJyZXMiLCJlcnIiLCJzdGF0dXMiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJQcm9taXNlIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ \"./lib/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _api__WEBPACK_IMPORTED_MODULE_3__]);\n([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _api__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"token\");\n        if (token) {\n            _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/auth/me\").then((res)=>setUser(res.data.user)).catch(()=>js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"token\")).finally(()=>setLoading(false));\n        } else {\n            setLoading(false);\n        }\n    }, []);\n    const login = (token, userData)=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"token\", token, {\n            expires: 7\n        });\n        setUser(userData);\n    };\n    const logout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"token\");\n        setUser(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            setUser,\n            loading,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shri1\\\\Downloads\\\\devspace\\\\frontend\\\\lib\\\\auth.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\nconst useAuth = ()=>{\n    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!ctx) throw new Error(\"useAuth must be used within AuthProvider\");\n    return ctx;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDdkM7QUFDUjtBQUV4QixNQUFNTSw0QkFBY04sb0RBQWFBLENBQUM7QUFFM0IsU0FBU08sYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQVNSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxRQUFRVCxxREFBVyxDQUFDO1FBQzFCLElBQUlTLE9BQU87WUFDVFIsZ0RBQU8sQ0FBQyxZQUNMVSxJQUFJLENBQUNDLENBQUFBLE1BQU9OLFFBQVFNLElBQUlDLElBQUksQ0FBQ1IsSUFBSSxHQUNqQ1MsS0FBSyxDQUFDLElBQU1kLHdEQUFjLENBQUMsVUFDM0JnQixPQUFPLENBQUMsSUFBTVIsV0FBVztRQUM5QixPQUFPO1lBQ0xBLFdBQVc7UUFDYjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1TLFFBQVEsQ0FBQ1IsT0FBT1M7UUFDcEJsQixxREFBVyxDQUFDLFNBQVNTLE9BQU87WUFBRVcsU0FBUztRQUFFO1FBQ3pDZCxRQUFRWTtJQUNWO0lBRUEsTUFBTUcsU0FBUztRQUNickIsd0RBQWMsQ0FBQztRQUNmTSxRQUFRO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ0osWUFBWW9CLFFBQVE7UUFBQ0MsT0FBTztZQUFFbEI7WUFBTUM7WUFBU0M7WUFBU1U7WUFBT0k7UUFBTztrQkFDbEVqQjs7Ozs7O0FBR1A7QUFFTyxNQUFNb0IsVUFBVTtJQUNyQixNQUFNQyxNQUFNNUIsaURBQVVBLENBQUNLO0lBQ3ZCLElBQUksQ0FBQ3VCLEtBQUssTUFBTSxJQUFJQyxNQUFNO0lBQzFCLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2RldnNwYWNlLWZyb250ZW5kLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSAgICAgICA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBhcGkuZ2V0KCcvYXV0aC9tZScpXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRVc2VyKHJlcy5kYXRhLnVzZXIpKVxuICAgICAgICAuY2F0Y2goKCkgPT4gQ29va2llcy5yZW1vdmUoJ3Rva2VuJykpXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9naW4gPSAodG9rZW4sIHVzZXJEYXRhKSA9PiB7XG4gICAgQ29va2llcy5zZXQoJ3Rva2VuJywgdG9rZW4sIHsgZXhwaXJlczogNyB9KTtcbiAgICBzZXRVc2VyKHVzZXJEYXRhKTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgQ29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyLCBsb2FkaW5nLCBsb2dpbiwgbG9nb3V0IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBtdXN0IGJlIHVzZWQgd2l0aGluIEF1dGhQcm92aWRlcicpO1xuICByZXR1cm4gY3R4O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29va2llcyIsImFwaSIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidG9rZW4iLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwicmVtb3ZlIiwiZmluYWxseSIsImxvZ2luIiwidXNlckRhdGEiLCJzZXQiLCJleHBpcmVzIiwibG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiLCJjdHgiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);\n([_lib_auth__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const getLayout = Component.getLayout ?? ((page)=>page);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: [\n            getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shri1\\\\Downloads\\\\devspace\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 18\n            }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                position: \"bottom-right\",\n                toastOptions: {\n                    style: {\n                        background: \"#0f172a\",\n                        color: \"#e2e8f0\",\n                        border: \"1px solid rgba(110, 231, 247, 0.2)\",\n                        fontFamily: \"DM Sans, sans-serif\"\n                    },\n                    success: {\n                        iconTheme: {\n                            primary: \"#34d399\",\n                            secondary: \"#0f172a\"\n                        }\n                    },\n                    error: {\n                        iconTheme: {\n                            primary: \"#f472b6\",\n                            secondary: \"#0f172a\"\n                        }\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shri1\\\\Downloads\\\\devspace\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shri1\\\\Downloads\\\\devspace\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1k7QUFDRDtBQUUzQixTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELE1BQU1DLFlBQVlGLFVBQVVFLFNBQVMsSUFBSyxFQUFDQyxPQUFTQSxJQUFHO0lBRXZELHFCQUNFLDhEQUFDTixtREFBWUE7O1lBQ1ZLLHdCQUFVLDhEQUFDRjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ25DLDhEQUFDSCxvREFBT0E7Z0JBQ05NLFVBQVM7Z0JBQ1RDLGNBQWM7b0JBQ1pDLE9BQU87d0JBQ0xDLFlBQVk7d0JBQ1pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLFlBQVk7b0JBQ2Q7b0JBQ0FDLFNBQVM7d0JBQUVDLFdBQVc7NEJBQUVDLFNBQVM7NEJBQVdDLFdBQVc7d0JBQVU7b0JBQUU7b0JBQ25FQyxPQUFTO3dCQUFFSCxXQUFXOzRCQUFFQyxTQUFTOzRCQUFXQyxXQUFXO3dCQUFVO29CQUFFO2dCQUNyRTs7Ozs7Ozs7Ozs7O0FBSVIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZzcGFjZS1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9saWIvYXV0aCc7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0ID8/ICgocGFnZSkgPT4gcGFnZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAge2dldExheW91dCg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KX1cbiAgICAgIDxUb2FzdGVyXG4gICAgICAgIHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCJcbiAgICAgICAgdG9hc3RPcHRpb25zPXt7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMGYxNzJhJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2UyZThmMCcsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgxMTAsIDIzMSwgMjQ3LCAwLjIpJyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IHsgaWNvblRoZW1lOiB7IHByaW1hcnk6ICcjMzRkMzk5Jywgc2Vjb25kYXJ5OiAnIzBmMTcyYScgfSB9LFxuICAgICAgICAgIGVycm9yOiAgIHsgaWNvblRoZW1lOiB7IHByaW1hcnk6ICcjZjQ3MmI2Jywgc2Vjb25kYXJ5OiAnIzBmMTcyYScgfSB9LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJUb2FzdGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0TGF5b3V0IiwicGFnZSIsInBvc2l0aW9uIiwidG9hc3RPcHRpb25zIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXIiLCJmb250RmFtaWx5Iiwic3VjY2VzcyIsImljb25UaGVtZSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();