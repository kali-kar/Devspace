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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:5000/api\" || 0,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\n// Attach JWT token to every request\napi.interceptors.request.use((config)=>{\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"token\");\n    if (token) config.headers.Authorization = `Bearer ${token}`;\n    return config;\n});\n// Handle 401 responses globally\napi.interceptors.response.use((res)=>res, (err)=>{\n    if (err.response?.status === 401) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(\"token\");\n        if (false) {}\n    }\n    return Promise.reject(err);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNNO0FBRWhDLE1BQU1FLE1BQU1GLG9EQUFZLENBQUM7SUFDdkJJLFNBQVNDLDJCQUErQixJQUFJO0lBQzVDRyxTQUFTO1FBQUUsZ0JBQWdCO0lBQW1CO0FBQ2hEO0FBRUEsb0NBQW9DO0FBQ3BDTixJQUFJTyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO0lBQzVCLE1BQU1DLFFBQVFaLHFEQUFXLENBQUM7SUFDMUIsSUFBSVksT0FBT0QsT0FBT0osT0FBTyxDQUFDTyxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUVGLE1BQU0sQ0FBQztJQUMzRCxPQUFPRDtBQUNUO0FBRUEsZ0NBQWdDO0FBQ2hDVixJQUFJTyxZQUFZLENBQUNPLFFBQVEsQ0FBQ0wsR0FBRyxDQUMzQixDQUFDTSxNQUFRQSxLQUNULENBQUNDO0lBQ0MsSUFBSUEsSUFBSUYsUUFBUSxFQUFFRyxXQUFXLEtBQUs7UUFDaENsQix3REFBYyxDQUFDO1FBQ2YsSUFBSSxLQUFrQixFQUFhLEVBRWxDO0lBQ0g7SUFDQSxPQUFPdUIsUUFBUUMsTUFBTSxDQUFDUDtBQUN4QjtBQUdGLGlFQUFlaEIsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RldnNwYWNlLWZyb250ZW5kLy4vbGliL2FwaS5qcz80NTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGknLFxyXG4gIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG59KTtcclxuXHJcbi8vIEF0dGFjaCBKV1QgdG9rZW4gdG8gZXZlcnkgcmVxdWVzdFxyXG5hcGkuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb25maWcpID0+IHtcclxuICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xyXG4gIGlmICh0b2tlbikgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gIHJldHVybiBjb25maWc7XHJcbn0pO1xyXG5cclxuLy8gSGFuZGxlIDQwMSByZXNwb25zZXMgZ2xvYmFsbHlcclxuYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgKHJlcykgPT4gcmVzLFxyXG4gIChlcnIpID0+IHtcclxuICAgIGlmIChlcnIucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIENvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkNvb2tpZXMiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJoZWFkZXJzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInRva2VuIiwiZ2V0IiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwicmVzIiwiZXJyIiwic3RhdHVzIiwicmVtb3ZlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiUHJvbWlzZSIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ \"./lib/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _api__WEBPACK_IMPORTED_MODULE_3__]);\n([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _api__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"token\");\n        if (token) {\n            _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/auth/me\").then((res)=>setUser(res.data.user)).catch(()=>js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"token\")).finally(()=>setLoading(false));\n        } else {\n            setLoading(false);\n        }\n    }, []);\n    const login = (token, userData)=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"token\", token, {\n            expires: 7\n        });\n        setUser(userData);\n    };\n    const logout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"token\");\n        setUser(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            setUser,\n            loading,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shri1\\\\Desktop\\\\Projects\\\\Ongoing Projects\\\\Devspace\\\\Devspace\\\\frontend\\\\lib\\\\auth.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\nconst useAuth = ()=>{\n    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!ctx) throw new Error(\"useAuth must be used within AuthProvider\");\n    return ctx;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDdkM7QUFDUjtBQUV4QixNQUFNTSw0QkFBY04sb0RBQWFBLENBQUM7QUFFM0IsU0FBU08sYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQVNSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxRQUFRVCxxREFBVyxDQUFDO1FBQzFCLElBQUlTLE9BQU87WUFDVFIsZ0RBQU8sQ0FBQyxZQUNMVSxJQUFJLENBQUNDLENBQUFBLE1BQU9OLFFBQVFNLElBQUlDLElBQUksQ0FBQ1IsSUFBSSxHQUNqQ1MsS0FBSyxDQUFDLElBQU1kLHdEQUFjLENBQUMsVUFDM0JnQixPQUFPLENBQUMsSUFBTVIsV0FBVztRQUM5QixPQUFPO1lBQ0xBLFdBQVc7UUFDYjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1TLFFBQVEsQ0FBQ1IsT0FBT1M7UUFDcEJsQixxREFBVyxDQUFDLFNBQVNTLE9BQU87WUFBRVcsU0FBUztRQUFFO1FBQ3pDZCxRQUFRWTtJQUNWO0lBRUEsTUFBTUcsU0FBUztRQUNickIsd0RBQWMsQ0FBQztRQUNmTSxRQUFRO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ0osWUFBWW9CLFFBQVE7UUFBQ0MsT0FBTztZQUFFbEI7WUFBTUM7WUFBU0M7WUFBU1U7WUFBT0k7UUFBTztrQkFDbEVqQjs7Ozs7O0FBR1A7QUFFTyxNQUFNb0IsVUFBVTtJQUNyQixNQUFNQyxNQUFNNUIsaURBQVVBLENBQUNLO0lBQ3ZCLElBQUksQ0FBQ3VCLEtBQUssTUFBTSxJQUFJQyxNQUFNO0lBQzFCLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2RldnNwYWNlLWZyb250ZW5kLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdICAgICAgID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGFwaS5nZXQoJy9hdXRoL21lJylcclxuICAgICAgICAudGhlbihyZXMgPT4gc2V0VXNlcihyZXMuZGF0YS51c2VyKSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gQ29va2llcy5yZW1vdmUoJ3Rva2VuJykpXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh0b2tlbiwgdXNlckRhdGEpID0+IHtcclxuICAgIENvb2tpZXMuc2V0KCd0b2tlbicsIHRva2VuLCB7IGV4cGlyZXM6IDcgfSk7XHJcbiAgICBzZXRVc2VyKHVzZXJEYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBDb29raWVzLnJlbW92ZSgndG9rZW4nKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyLCBsb2FkaW5nLCBsb2dpbiwgbG9nb3V0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGlmICghY3R4KSB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF1dGggbXVzdCBiZSB1c2VkIHdpdGhpbiBBdXRoUHJvdmlkZXInKTtcclxuICByZXR1cm4gY3R4O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvb2tpZXMiLCJhcGkiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRva2VuIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsInJlbW92ZSIsImZpbmFsbHkiLCJsb2dpbiIsInVzZXJEYXRhIiwic2V0IiwiZXhwaXJlcyIsImxvZ291dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIiwiY3R4IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-oauth/google */ \"@react-oauth/google\");\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_oauth_google__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);\n([_lib_auth__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const getLayout = Component.getLayout ?? ((page)=>page);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_oauth_google__WEBPACK_IMPORTED_MODULE_4__.GoogleOAuthProvider, {\n        clientId: \"872982373633-5dvenbe7v31vt44eq8v187klgdb2q15u.apps.googleusercontent.com\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n            children: [\n                getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shri1\\\\Desktop\\\\Projects\\\\Ongoing Projects\\\\Devspace\\\\Devspace\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 14,\n                    columnNumber: 20\n                }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                    position: \"bottom-right\",\n                    toastOptions: {\n                        style: {\n                            background: \"#0f172a\",\n                            color: \"#e2e8f0\",\n                            border: \"1px solid rgba(110, 231, 247, 0.2)\",\n                            fontFamily: \"DM Sans, sans-serif\"\n                        },\n                        success: {\n                            iconTheme: {\n                                primary: \"#34d399\",\n                                secondary: \"#0f172a\"\n                            }\n                        },\n                        error: {\n                            iconTheme: {\n                                primary: \"#f472b6\",\n                                secondary: \"#0f172a\"\n                            }\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shri1\\\\Desktop\\\\Projects\\\\Ongoing Projects\\\\Devspace\\\\Devspace\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\shri1\\\\Desktop\\\\Projects\\\\Ongoing Projects\\\\Devspace\\\\Devspace\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shri1\\\\Desktop\\\\Projects\\\\Ongoing Projects\\\\Devspace\\\\Devspace\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDWTtBQUNEO0FBQ2dCO0FBRTNDLFNBQVNHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQsTUFBTUMsWUFBWUYsVUFBVUUsU0FBUyxJQUFLLEVBQUNDLE9BQVNBLElBQUc7SUFFdkQscUJBQ0UsOERBQUNMLG9FQUFtQkE7UUFDbEJNLFVBQVVDLDBFQUF3QztrQkFFbEQsNEVBQUNULG1EQUFZQTs7Z0JBQ1ZNLHdCQUFVLDhEQUFDRjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OEJBRW5DLDhEQUFDSixvREFBT0E7b0JBQ05XLFVBQVM7b0JBQ1RDLGNBQWM7d0JBQ1pDLE9BQU87NEJBQ0xDLFlBQVk7NEJBQ1pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFlBQVk7d0JBQ2Q7d0JBQ0FDLFNBQVM7NEJBQ1BDLFdBQVc7Z0NBQ1RDLFNBQVM7Z0NBQ1RDLFdBQVc7NEJBQ2I7d0JBQ0Y7d0JBQ0FDLE9BQU87NEJBQ0xILFdBQVc7Z0NBQ1RDLFNBQVM7Z0NBQ1RDLFdBQVc7NEJBQ2I7d0JBQ0Y7b0JBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZzcGFjZS1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2xpYi9hdXRoJztcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcbmltcG9ydCB7IEdvb2dsZU9BdXRoUHJvdmlkZXIgfSBmcm9tICdAcmVhY3Qtb2F1dGgvZ29vZ2xlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0ID8/ICgocGFnZSkgPT4gcGFnZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R29vZ2xlT0F1dGhQcm92aWRlclxyXG4gICAgICBjbGllbnRJZD17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVF9JRH1cclxuICAgID5cclxuICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICB7Z2V0TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4pfVxyXG5cclxuICAgICAgICA8VG9hc3RlclxyXG4gICAgICAgICAgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIlxyXG4gICAgICAgICAgdG9hc3RPcHRpb25zPXt7XHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMwZjE3MmEnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnI2UyZThmMCcsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMTEwLCAyMzEsIDI0NywgMC4yKScsXHJcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgICAgICAgaWNvblRoZW1lOiB7XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiAnIzM0ZDM5OScsXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk6ICcjMGYxNzJhJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgIGljb25UaGVtZToge1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeTogJyNmNDcyYjYnLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiAnIzBmMTcyYScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICA8L0dvb2dsZU9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiVG9hc3RlciIsIkdvb2dsZU9BdXRoUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRMYXlvdXQiLCJwYWdlIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVF9JRCIsInBvc2l0aW9uIiwidG9hc3RPcHRpb25zIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXIiLCJmb250RmFtaWx5Iiwic3VjY2VzcyIsImljb25UaGVtZSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@react-oauth/google":
/*!**************************************!*\
  !*** external "@react-oauth/google" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@react-oauth/google");

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