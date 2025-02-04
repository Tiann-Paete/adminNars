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

/***/ "./src/context/AuthContext.js":
/*!************************************!*\
  !*** ./src/context/AuthContext.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth),\n/* harmony export */   withAuth: () => (/* binding */ withAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);\naxios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children })=>{\n    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [usernamePasswordVerified, setUsernamePasswordVerified] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkAuthStatus();\n    }, []);\n    const checkAuthStatus = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8001/check-auth\", {\n                withCredentials: true\n            });\n            setIsAuthenticated(response.data.isAuthenticated);\n            setUsernamePasswordVerified(response.data.usernamePasswordVerified);\n        } catch (error) {\n            setIsAuthenticated(false);\n            setUsernamePasswordVerified(false);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const login = async (username, password, pin)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8001/signin\", {\n                username,\n                password\n            }, {\n                withCredentials: true\n            });\n            setUsernamePasswordVerified(true);\n            if (pin) {\n                await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8001/validate-pin\", {\n                    pin\n                }, {\n                    withCredentials: true\n                });\n                setIsAuthenticated(true);\n                router.push(\"/HomeAdmin\");\n            } else {\n                router.push(\"/Pin\");\n            }\n        } catch (error) {\n            setUsernamePasswordVerified(false);\n            setIsAuthenticated(false);\n            throw error;\n        }\n    };\n    const logout = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8001/logout\", {\n                withCredentials: true\n            });\n            setIsAuthenticated(false);\n            setUsernamePasswordVerified(false);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Logout error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isAuthenticated,\n            loading,\n            login,\n            logout,\n            usernamePasswordVerified\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\adminNar's\\\\src\\\\context\\\\AuthContext.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\nconst withAuth = (WrappedComponent)=>{\n    return (props)=>{\n        const { isAuthenticated, loading, usernamePasswordVerified } = useAuth();\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            if (!loading) {\n                if (!isAuthenticated && !usernamePasswordVerified) {\n                    router.replace(\"/\");\n                } else if (!isAuthenticated && usernamePasswordVerified && router.pathname !== \"/Pin\") {\n                    router.replace(\"/Pin\");\n                }\n            }\n        }, [\n            loading,\n            isAuthenticated,\n            usernamePasswordVerified,\n            router\n        ]);\n        if (loading) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\adminNar's\\\\src\\\\context\\\\AuthContext.js\",\n                lineNumber: 84,\n                columnNumber: 14\n            }, undefined);\n        }\n        return isAuthenticated || usernamePasswordVerified && router.pathname === \"/Pin\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrappedComponent, {\n            ...props\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\adminNar's\\\\src\\\\context\\\\AuthContext.js\",\n            lineNumber: 87,\n            columnNumber: 90\n        }, undefined) : null;\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSDtZQUFrQixHQUFHQyxLQUFLOzs7Ozt3QkFBTztJQUN6SDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbnBhbmVsLy4vc3JjL2NvbnRleHQvQXV0aENvbnRleHQuanM/NGJhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0F1dGhlbnRpY2F0ZWQsIHNldElzQXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lUGFzc3dvcmRWZXJpZmllZCwgc2V0VXNlcm5hbWVQYXNzd29yZFZlcmlmaWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrQXV0aFN0YXR1cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2hlY2tBdXRoU3RhdHVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMS9jaGVjay1hdXRoJywgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XHJcbiAgICAgIHNldElzQXV0aGVudGljYXRlZChyZXNwb25zZS5kYXRhLmlzQXV0aGVudGljYXRlZCk7XHJcbiAgICAgIHNldFVzZXJuYW1lUGFzc3dvcmRWZXJpZmllZChyZXNwb25zZS5kYXRhLnVzZXJuYW1lUGFzc3dvcmRWZXJpZmllZCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRJc0F1dGhlbnRpY2F0ZWQoZmFsc2UpO1xyXG4gICAgICBzZXRVc2VybmFtZVBhc3N3b3JkVmVyaWZpZWQoZmFsc2UpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkLCBwaW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAxL3NpZ25pbicsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0sIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xyXG4gICAgICBzZXRVc2VybmFtZVBhc3N3b3JkVmVyaWZpZWQodHJ1ZSk7XHJcbiAgICAgIGlmIChwaW4pIHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDEvdmFsaWRhdGUtcGluJywgeyBwaW4gfSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XHJcbiAgICAgICAgc2V0SXNBdXRoZW50aWNhdGVkKHRydWUpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvSG9tZUFkbWluJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9QaW4nKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0VXNlcm5hbWVQYXNzd29yZFZlcmlmaWVkKGZhbHNlKTtcclxuICAgICAgc2V0SXNBdXRoZW50aWNhdGVkKGZhbHNlKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDEvbG9nb3V0JywgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XHJcbiAgICAgIHNldElzQXV0aGVudGljYXRlZChmYWxzZSk7XHJcbiAgICAgIHNldFVzZXJuYW1lUGFzc3dvcmRWZXJpZmllZChmYWxzZSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdMb2dvdXQgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nLCBsb2dpbiwgbG9nb3V0LCB1c2VybmFtZVBhc3N3b3JkVmVyaWZpZWQgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aEF1dGggPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xyXG4gIHJldHVybiAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nLCB1c2VybmFtZVBhc3N3b3JkVmVyaWZpZWQgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghbG9hZGluZykge1xyXG4gICAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICF1c2VybmFtZVBhc3N3b3JkVmVyaWZpZWQpIHtcclxuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghaXNBdXRoZW50aWNhdGVkICYmIHVzZXJuYW1lUGFzc3dvcmRWZXJpZmllZCAmJiByb3V0ZXIucGF0aG5hbWUgIT09ICcvUGluJykge1xyXG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoJy9QaW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWQsIHVzZXJuYW1lUGFzc3dvcmRWZXJpZmllZCwgcm91dGVyXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNBdXRoZW50aWNhdGVkIHx8ICh1c2VybmFtZVBhc3N3b3JkVmVyaWZpZWQgJiYgcm91dGVyLnBhdGhuYW1lID09PSAnL1BpbicpID8gPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPiA6IG51bGw7XHJcbiAgfTtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiaXNBdXRoZW50aWNhdGVkIiwic2V0SXNBdXRoZW50aWNhdGVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VybmFtZVBhc3N3b3JkVmVyaWZpZWQiLCJzZXRVc2VybmFtZVBhc3N3b3JkVmVyaWZpZWQiLCJyb3V0ZXIiLCJjaGVja0F1dGhTdGF0dXMiLCJyZXNwb25zZSIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJlcnJvciIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInBpbiIsInBvc3QiLCJwdXNoIiwibG9nb3V0IiwiY29uc29sZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIiwid2l0aEF1dGgiLCJXcmFwcGVkQ29tcG9uZW50IiwicHJvcHMiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/AuthContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\adminNar's\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Downloads\\\\adminNar's\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ3dCO0FBRXZDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILDhEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWlucGFuZWwvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();