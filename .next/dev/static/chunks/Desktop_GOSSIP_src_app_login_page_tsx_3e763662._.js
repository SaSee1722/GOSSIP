(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/GOSSIP/src/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function LoginPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(108);
    if ($[0] !== "d70c6ccdfac4af84d613daac738acadbfece43414f364162bf127a0def252637") {
        for(let $i = 0; $i < 108; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d70c6ccdfac4af84d613daac738acadbfece43414f364162bf127a0def252637";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, signInWithPassword, signUpWithPassword, operationLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [focusedInput, setFocusedInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    let t1;
    if ($[1] !== router || $[2] !== user) {
        t0 = ({
            "LoginPage[useEffect()]": ()=>{
                if (user) {
                    router.replace("/chat");
                }
            }
        })["LoginPage[useEffect()]"];
        t1 = [
            user,
            router
        ];
        $[1] = router;
        $[2] = user;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[5] !== addToast || $[6] !== confirmPassword || $[7] !== email || $[8] !== isLogin || $[9] !== password || $[10] !== signInWithPassword || $[11] !== signUpWithPassword || $[12] !== username) {
        t2 = ({
            "LoginPage[handleAuth]": async (e)=>{
                e.preventDefault();
                if (isLogin) {
                    if (!email || !password) {
                        addToast("Please fill in all fields", "error");
                        return;
                    }
                    const { error } = await signInWithPassword(email, password);
                    if (error) {
                        addToast(error, "error");
                    }
                } else {
                    if (!email || !password || !username) {
                        addToast("Please fill in all fields", "error");
                        return;
                    }
                    if (password !== confirmPassword) {
                        addToast("Passwords do not match", "error");
                        return;
                    }
                    const { error: error_0, needsEmailConfirmation } = await signUpWithPassword(email, password, {
                        username,
                        full_name: username
                    });
                    if (error_0) {
                        addToast(error_0, "error");
                    } else {
                        if (needsEmailConfirmation) {
                            addToast("Check your email to confirm your account", "success");
                        }
                    }
                }
            }
        })["LoginPage[handleAuth]"];
        $[5] = addToast;
        $[6] = confirmPassword;
        $[7] = email;
        $[8] = isLogin;
        $[9] = password;
        $[10] = signInWithPassword;
        $[11] = signUpWithPassword;
        $[12] = username;
        $[13] = t2;
    } else {
        t2 = $[13];
    }
    const handleAuth = t2;
    let t3;
    let t4;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[14] = t3;
        $[15] = t4;
    } else {
        t3 = $[14];
        t4 = $[15];
    }
    let t5;
    let t6;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 0,
            y: 20
        };
        t6 = {
            opacity: 1,
            y: 0
        };
        $[16] = t5;
        $[17] = t6;
    } else {
        t5 = $[16];
        t6 = $[17];
    }
    const t7 = isLogin ? "Welcome Back" : "Create Account";
    let t8;
    if ($[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl font-black tracking-tight",
            children: t7
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    const t9 = isLogin ? "Sign in to continue chatting" : "Join the conversation today";
    let t10;
    if ($[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-text-secondary font-medium",
            children: t9
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 space-y-2",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t8;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "LoginPage[<button>.onClick]": ()=>setIsLogin(true)
        })["LoginPage[<button>.onClick]"];
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    const t13 = `flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${isLogin ? "bg-white text-black shadow-lg" : "text-white hover:bg-white/5"}`;
    let t14;
    if ($[26] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t12,
            className: t13,
            children: "Login"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[26] = t13;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "LoginPage[<button>.onClick]": ()=>setIsLogin(false)
        })["LoginPage[<button>.onClick]"];
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    const t16 = `flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${!isLogin ? "bg-white text-black shadow-lg" : "text-white hover:bg-white/5"}`;
    let t17;
    if ($[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t15,
            className: t16,
            children: "Signup"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== t14 || $[32] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex bg-white/5 p-1.5 rounded-2xl mb-8",
            children: [
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t17;
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    const t19 = `relative group transition-all duration-300 rounded-2xl border ${focusedInput === "email" ? "border-primary bg-primary/5" : "border-white/10 bg-white/5"}`;
    const t20 = focusedInput === "email" ? "text-primary" : "text-text-secondary";
    let t21;
    if ($[34] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-4 top-1/2 -translate-y-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                size: 20,
                className: t20
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                lineNumber: 214,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[34] = t20;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    let t23;
    let t24;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "LoginPage[<input>.onChange]": (e_0)=>setEmail(e_0.target.value)
        })["LoginPage[<input>.onChange]"];
        t23 = ({
            "LoginPage[<input>.onFocus]": ()=>setFocusedInput("email")
        })["LoginPage[<input>.onFocus]"];
        t24 = ({
            "LoginPage[<input>.onBlur]": ()=>setFocusedInput(null)
        })["LoginPage[<input>.onBlur]"];
        $[36] = t22;
        $[37] = t23;
        $[38] = t24;
    } else {
        t22 = $[36];
        t23 = $[37];
        t24 = $[38];
    }
    let t25;
    if ($[39] !== email) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "email",
            placeholder: "Email Address",
            value: email,
            onChange: t22,
            onFocus: t23,
            onBlur: t24,
            className: "w-full h-14 bg-transparent pl-12 pr-4 outline-none text-white font-medium placeholder:text-white/30"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[39] = email;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    let t26;
    if ($[41] !== t19 || $[42] !== t21 || $[43] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t19,
            children: [
                t21,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[41] = t19;
        $[42] = t21;
        $[43] = t25;
        $[44] = t26;
    } else {
        t26 = $[44];
    }
    let t27;
    if ($[45] !== isLogin || $[46] !== username) {
        t27 = !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                height: 0
            },
            animate: {
                opacity: 1,
                height: "auto"
            },
            exit: {
                opacity: 0,
                height: 0
            },
            className: "relative group transition-all duration-300 rounded-2xl border border-white/10 bg-white/5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-4 top-1/2 -translate-y-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        size: 20,
                        className: "text-text-secondary"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                        lineNumber: 270,
                        columnNumber: 167
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                    lineNumber: 270,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Username",
                    value: username,
                    onChange: {
                        "LoginPage[<input>.onChange]": (e_1)=>setUsername(e_1.target.value)
                    }["LoginPage[<input>.onChange]"],
                    className: "w-full h-14 bg-transparent pl-12 pr-4 outline-none text-white font-medium placeholder:text-white/30"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                    lineNumber: 270,
                    columnNumber: 223
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 261,
            columnNumber: 23
        }, this);
        $[45] = isLogin;
        $[46] = username;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t27
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[48] = t27;
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    const t29 = `relative group transition-all duration-300 rounded-2xl border ${focusedInput === "pass" ? "border-primary bg-primary/5" : "border-white/10 bg-white/5"}`;
    const t30 = focusedInput === "pass" ? "text-primary" : "text-text-secondary";
    let t31;
    if ($[50] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-4 top-1/2 -translate-y-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                size: 20,
                className: t30
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                lineNumber: 291,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[50] = t30;
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    const t32 = showPassword ? "text" : "password";
    let t33;
    let t34;
    let t35;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = ({
            "LoginPage[<input>.onChange]": (e_2)=>setPassword(e_2.target.value)
        })["LoginPage[<input>.onChange]"];
        t34 = ({
            "LoginPage[<input>.onFocus]": ()=>setFocusedInput("pass")
        })["LoginPage[<input>.onFocus]"];
        t35 = ({
            "LoginPage[<input>.onBlur]": ()=>setFocusedInput(null)
        })["LoginPage[<input>.onBlur]"];
        $[52] = t33;
        $[53] = t34;
        $[54] = t35;
    } else {
        t33 = $[52];
        t34 = $[53];
        t35 = $[54];
    }
    let t36;
    if ($[55] !== password || $[56] !== t32) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t32,
            placeholder: "Password",
            value: password,
            onChange: t33,
            onFocus: t34,
            onBlur: t35,
            className: "w-full h-14 bg-transparent pl-12 pr-12 outline-none text-white font-medium placeholder:text-white/30"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[55] = password;
        $[56] = t32;
        $[57] = t36;
    } else {
        t36 = $[57];
    }
    let t37;
    if ($[58] !== showPassword) {
        t37 = ({
            "LoginPage[<button>.onClick]": ()=>setShowPassword(!showPassword)
        })["LoginPage[<button>.onClick]"];
        $[58] = showPassword;
        $[59] = t37;
    } else {
        t37 = $[59];
    }
    let t38;
    if ($[60] !== showPassword) {
        t38 = showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 340,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 340,
            columnNumber: 49
        }, this);
        $[60] = showPassword;
        $[61] = t38;
    } else {
        t38 = $[61];
    }
    let t39;
    if ($[62] !== t37 || $[63] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t37,
            className: "absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-white transition-colors",
            children: t38
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[62] = t37;
        $[63] = t38;
        $[64] = t39;
    } else {
        t39 = $[64];
    }
    let t40;
    if ($[65] !== t29 || $[66] !== t31 || $[67] !== t36 || $[68] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t29,
            children: [
                t31,
                t36,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[65] = t29;
        $[66] = t31;
        $[67] = t36;
        $[68] = t39;
        $[69] = t40;
    } else {
        t40 = $[69];
    }
    let t41;
    if ($[70] !== confirmPassword || $[71] !== isLogin || $[72] !== showPassword) {
        t41 = !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group transition-all duration-300 rounded-2xl border border-white/10 bg-white/5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-4 top-1/2 -translate-y-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                        size: 20,
                        className: "text-text-secondary"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                        lineNumber: 368,
                        columnNumber: 187
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                    lineNumber: 368,
                    columnNumber: 129
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: showPassword ? "text" : "password",
                    placeholder: "Confirm Password",
                    value: confirmPassword,
                    onChange: {
                        "LoginPage[<input>.onChange]": (e_3)=>setConfirmPassword(e_3.target.value)
                    }["LoginPage[<input>.onChange]"],
                    className: "w-full h-14 bg-transparent pl-12 pr-4 outline-none text-white font-medium placeholder:text-white/30"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                    lineNumber: 368,
                    columnNumber: 245
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 368,
            columnNumber: 23
        }, this);
        $[70] = confirmPassword;
        $[71] = isLogin;
        $[72] = showPassword;
        $[73] = t41;
    } else {
        t41 = $[73];
    }
    let t42;
    if ($[74] !== t26 || $[75] !== t28 || $[76] !== t40 || $[77] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t26,
                t28,
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[74] = t26;
        $[75] = t28;
        $[76] = t40;
        $[77] = t41;
        $[78] = t42;
    } else {
        t42 = $[78];
    }
    let t43;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-primary to-blue-600 transition-transform duration-300 group-hover:scale-105"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[79] = t43;
    } else {
        t43 = $[79];
    }
    let t44;
    if ($[80] !== isLogin || $[81] !== operationLoading) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative flex items-center justify-center gap-2",
            children: operationLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                lineNumber: 398,
                columnNumber: 97
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    isLogin ? "Sign In" : "Create Account",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                        lineNumber: 398,
                        columnNumber: 235
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[80] = isLogin;
        $[81] = operationLoading;
        $[82] = t44;
    } else {
        t44 = $[82];
    }
    let t45;
    if ($[83] !== operationLoading || $[84] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: operationLoading,
            className: "w-full mt-6 h-14 rounded-2xl font-bold text-lg relative overflow-hidden group disabled:opacity-50",
            children: [
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[83] = operationLoading;
        $[84] = t44;
        $[85] = t45;
    } else {
        t45 = $[85];
    }
    let t46;
    if ($[86] !== handleAuth || $[87] !== t42 || $[88] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleAuth,
            className: "space-y-4",
            children: [
                t42,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[86] = handleAuth;
        $[87] = t42;
        $[88] = t45;
        $[89] = t46;
    } else {
        t46 = $[89];
    }
    let t47;
    if ($[90] !== isLogin) {
        t47 = isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-full mt-6 text-primary text-sm font-bold hover:underline transition-all",
            children: "Forgot Password?"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 426,
            columnNumber: 22
        }, this);
        $[90] = isLogin;
        $[91] = t47;
    } else {
        t47 = $[91];
    }
    let t48;
    if ($[92] !== t18 || $[93] !== t46 || $[94] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card border border-white/10 rounded-[32px] p-8 backdrop-blur-2xl bg-white/5 shadow-2xl",
            children: [
                t18,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[92] = t18;
        $[93] = t46;
        $[94] = t47;
        $[95] = t48;
    } else {
        t48 = $[95];
    }
    const t49 = isLogin ? "Don't have an account? " : "Already have an account? ";
    let t50;
    if ($[96] !== isLogin) {
        t50 = ({
            "LoginPage[<button>.onClick]": ()=>setIsLogin(!isLogin)
        })["LoginPage[<button>.onClick]"];
        $[96] = isLogin;
        $[97] = t50;
    } else {
        t50 = $[97];
    }
    const t51 = isLogin ? "Sign Up" : "Log In";
    let t52;
    if ($[98] !== t50 || $[99] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t50,
            className: "text-primary font-black hover:underline ml-1",
            children: t51
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 456,
            columnNumber: 11
        }, this);
        $[98] = t50;
        $[99] = t51;
        $[100] = t52;
    } else {
        t52 = $[100];
    }
    let t53;
    if ($[101] !== t49 || $[102] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-8 text-center text-text-tertiary",
            children: [
                t49,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, this);
        $[101] = t49;
        $[102] = t52;
        $[103] = t53;
    } else {
        t53 = $[103];
    }
    let t54;
    if ($[104] !== t11 || $[105] !== t48 || $[106] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t5,
                    animate: t6,
                    className: "w-full max-w-md z-10",
                    children: [
                        t11,
                        t48,
                        t53
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                    lineNumber: 474,
                    columnNumber: 140
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 474,
            columnNumber: 11
        }, this);
        $[104] = t11;
        $[105] = t48;
        $[106] = t53;
        $[107] = t54;
    } else {
        t54 = $[107];
    }
    return t54;
}
_s(LoginPage, "zXzA5/jeNtfxcNJPjOnhJxn2Kkg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_GOSSIP_src_app_login_page_tsx_3e763662._.js.map