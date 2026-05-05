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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: process.env.NEXT_PUBLIC_API_URL || \"http://localhost:5000/api\",\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\n// Attach JWT token to every request\napi.interceptors.request.use((config)=>{\n    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"token\");\n    if (token) config.headers.Authorization = `Bearer ${token}`;\n    return config;\n});\n// Handle 401 responses globally\napi.interceptors.response.use((res)=>res, (err)=>{\n    if (err.response?.status === 401) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(\"token\");\n        if (false) {}\n    }\n    return Promise.reject(err);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNNO0FBRWhDLE1BQU1FLE1BQU1GLG9EQUFZLENBQUM7SUFDdkJJLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQUk7SUFDNUNDLFNBQVM7UUFBRSxnQkFBZ0I7SUFBbUI7QUFDaEQ7QUFFQSxvQ0FBb0M7QUFDcENOLElBQUlPLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7SUFDNUIsTUFBTUMsUUFBUVoscURBQVcsQ0FBQztJQUMxQixJQUFJWSxPQUFPRCxPQUFPSixPQUFPLENBQUNPLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRUYsTUFBTSxDQUFDO0lBQzNELE9BQU9EO0FBQ1Q7QUFFQSxnQ0FBZ0M7QUFDaENWLElBQUlPLFlBQVksQ0FBQ08sUUFBUSxDQUFDTCxHQUFHLENBQzNCLENBQUNNLE1BQVFBLEtBQ1QsQ0FBQ0M7SUFDQyxJQUFJQSxJQUFJRixRQUFRLEVBQUVHLFdBQVcsS0FBSztRQUNoQ2xCLHdEQUFjLENBQUM7UUFDZixJQUFJLEtBQWtCLEVBQWEsRUFFbEM7SUFDSDtJQUNBLE9BQU91QixRQUFRQyxNQUFNLENBQUNQO0FBQ3hCO0FBR0YsaUVBQWVoQixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2c3BhY2UtZnJvbnRlbmQvLi9saWIvYXBpLmpzPzQ1NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaScsXHJcbiAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbn0pO1xyXG5cclxuLy8gQXR0YWNoIEpXVCB0b2tlbiB0byBldmVyeSByZXF1ZXN0XHJcbmFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoKGNvbmZpZykgPT4ge1xyXG4gIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XHJcbiAgaWYgKHRva2VuKSBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgcmV0dXJuIGNvbmZpZztcclxufSk7XHJcblxyXG4vLyBIYW5kbGUgNDAxIHJlc3BvbnNlcyBnbG9iYWxseVxyXG5hcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAocmVzKSA9PiByZXMsXHJcbiAgKGVycikgPT4ge1xyXG4gICAgaWYgKGVyci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgQ29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQ29va2llcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImhlYWRlcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJnZXQiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJyZXMiLCJlcnIiLCJzdGF0dXMiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJQcm9taXNlIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);\n([_lib_auth__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const getLayout = Component.getLayout ?? ((page)=>page);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: [\n            getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shri1\\\\Desktop\\\\Projects\\\\Ongoing Projects\\\\Devspace\\\\Devspace\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 18\n            }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                position: \"bottom-right\",\n                toastOptions: {\n                    style: {\n                        background: \"#0f172a\",\n                        color: \"#e2e8f0\",\n                        border: \"1px solid rgba(110, 231, 247, 0.2)\",\n                        fontFamily: \"DM Sans, sans-serif\"\n                    },\n                    success: {\n                        iconTheme: {\n                            primary: \"#34d399\",\n                            secondary: \"#0f172a\"\n                        }\n                    },\n                    error: {\n                        iconTheme: {\n                            primary: \"#f472b6\",\n                            secondary: \"#0f172a\"\n                        }\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shri1\\\\Desktop\\\\Projects\\\\Ongoing Projects\\\\Devspace\\\\Devspace\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shri1\\\\Desktop\\\\Projects\\\\Ongoing Projects\\\\Devspace\\\\Devspace\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1k7QUFDRDtBQUUzQixTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELE1BQU1DLFlBQVlGLFVBQVVFLFNBQVMsSUFBSyxFQUFDQyxPQUFTQSxJQUFHO0lBRXZELHFCQUNFLDhEQUFDTixtREFBWUE7O1lBQ1ZLLHdCQUFVLDhEQUFDRjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ25DLDhEQUFDSCxvREFBT0E7Z0JBQ05NLFVBQVM7Z0JBQ1RDLGNBQWM7b0JBQ1pDLE9BQU87d0JBQ0xDLFlBQVk7d0JBQ1pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLFlBQVk7b0JBQ2Q7b0JBQ0FDLFNBQVM7d0JBQUVDLFdBQVc7NEJBQUVDLFNBQVM7NEJBQVdDLFdBQVc7d0JBQVU7b0JBQUU7b0JBQ25FQyxPQUFTO3dCQUFFSCxXQUFXOzRCQUFFQyxTQUFTOzRCQUFXQyxXQUFXO3dCQUFVO29CQUFFO2dCQUNyRTs7Ozs7Ozs7Ozs7O0FBSVIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZzcGFjZS1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2xpYi9hdXRoJztcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgZ2V0TGF5b3V0ID0gQ29tcG9uZW50LmdldExheW91dCA/PyAoKHBhZ2UpID0+IHBhZ2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAge2dldExheW91dCg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KX1cclxuICAgICAgPFRvYXN0ZXJcclxuICAgICAgICBwb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiXHJcbiAgICAgICAgdG9hc3RPcHRpb25zPXt7XHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzBmMTcyYScsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2UyZThmMCcsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDExMCwgMjMxLCAyNDcsIDAuMiknLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnRE0gU2Fucywgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogeyBpY29uVGhlbWU6IHsgcHJpbWFyeTogJyMzNGQzOTknLCBzZWNvbmRhcnk6ICcjMGYxNzJhJyB9IH0sXHJcbiAgICAgICAgICBlcnJvcjogICB7IGljb25UaGVtZTogeyBwcmltYXJ5OiAnI2Y0NzJiNicsIHNlY29uZGFyeTogJyMwZjE3MmEnIH0gfSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiVG9hc3RlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExheW91dCIsInBhZ2UiLCJwb3NpdGlvbiIsInRvYXN0T3B0aW9ucyIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyIiwiZm9udEZhbWlseSIsInN1Y2Nlc3MiLCJpY29uVGhlbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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