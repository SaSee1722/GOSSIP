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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(112);
    if ($[0] !== "24cf50762154745faee075a4ce1ba97e8524a288777faddfb5d890df967b0e7f") {
        for(let $i = 0; $i < 112; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24cf50762154745faee075a4ce1ba97e8524a288777faddfb5d890df967b0e7f";
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
            className: "text-3xl font-black text-white tracking-tight mb-2",
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
            className: "text-[#888] font-medium text-sm",
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
            className: "mb-10",
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
    const t13 = `flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${isLogin ? "bg-white text-black shadow-md" : "text-[#888] hover:text-white"}`;
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
    const t16 = `flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${!isLogin ? "bg-white text-black shadow-md" : "text-[#888] hover:text-white"}`;
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
            className: "flex bg-[#222] p-1.5 rounded-xl mb-6",
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
    const t19 = `relative group transition-all duration-300 rounded-[18px] border ${focusedInput === "email" ? "border-[#00BFFF] bg-[#00BFFF]/5" : "border-[#222] bg-[#1A1A1A]"}`;
    const t20 = focusedInput === "email" ? "text-[#00BFFF]" : "text-[#666]";
    let t21;
    if ($[34] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-4 top-1/2 -translate-y-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                size: 18,
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
            className: "w-full h-[52px] bg-transparent pl-12 pr-4 outline-none text-white text-[15px] font-medium placeholder:text-[#444]"
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
    if ($[45] !== focusedInput || $[46] !== isLogin || $[47] !== username) {
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
            className: "overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative group transition-all duration-300 rounded-[18px] border ${focusedInput === "username" ? "border-[#00BFFF] bg-[#00BFFF]/5" : "border-[#222] bg-[#1A1A1A]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-4 top-1/2 -translate-y-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            size: 18,
                            className: focusedInput === "username" ? "text-[#00BFFF]" : "text-[#666]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                            lineNumber: 270,
                            columnNumber: 276
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                        lineNumber: 270,
                        columnNumber: 218
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Username",
                        value: username,
                        onChange: {
                            "LoginPage[<input>.onChange]": (e_1)=>setUsername(e_1.target.value)
                        }["LoginPage[<input>.onChange]"],
                        onFocus: {
                            "LoginPage[<input>.onFocus]": ()=>setFocusedInput("username")
                        }["LoginPage[<input>.onFocus]"],
                        onBlur: {
                            "LoginPage[<input>.onBlur]": ()=>setFocusedInput(null)
                        }["LoginPage[<input>.onBlur]"],
                        className: "w-full h-[52px] bg-transparent pl-12 pr-4 outline-none text-white text-[15px] font-medium placeholder:text-[#444]"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                        lineNumber: 270,
                        columnNumber: 375
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                lineNumber: 270,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 261,
            columnNumber: 23
        }, this);
        $[45] = focusedInput;
        $[46] = isLogin;
        $[47] = username;
        $[48] = t27;
    } else {
        t27 = $[48];
    }
    let t28;
    if ($[49] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t27
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[49] = t27;
        $[50] = t28;
    } else {
        t28 = $[50];
    }
    const t29 = `relative group transition-all duration-300 rounded-[18px] border ${focusedInput === "pass" ? "border-[#00BFFF] bg-[#00BFFF]/5" : "border-[#222] bg-[#1A1A1A]"}`;
    const t30 = focusedInput === "pass" ? "text-[#00BFFF]" : "text-[#666]";
    let t31;
    if ($[51] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-4 top-1/2 -translate-y-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                size: 18,
                className: t30
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                lineNumber: 296,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[51] = t30;
        $[52] = t31;
    } else {
        t31 = $[52];
    }
    const t32 = showPassword ? "text" : "password";
    let t33;
    let t34;
    let t35;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = ({
            "LoginPage[<input>.onChange]": (e_2)=>setPassword(e_2.target.value)
        })["LoginPage[<input>.onChange]"];
        t34 = ({
            "LoginPage[<input>.onFocus]": ()=>setFocusedInput("pass")
        })["LoginPage[<input>.onFocus]"];
        t35 = ({
            "LoginPage[<input>.onBlur]": ()=>setFocusedInput(null)
        })["LoginPage[<input>.onBlur]"];
        $[53] = t33;
        $[54] = t34;
        $[55] = t35;
    } else {
        t33 = $[53];
        t34 = $[54];
        t35 = $[55];
    }
    let t36;
    if ($[56] !== password || $[57] !== t32) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t32,
            placeholder: "Password",
            value: password,
            onChange: t33,
            onFocus: t34,
            onBlur: t35,
            className: "w-full h-[52px] bg-transparent pl-12 pr-12 outline-none text-white text-[15px] font-medium placeholder:text-[#444]"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[56] = password;
        $[57] = t32;
        $[58] = t36;
    } else {
        t36 = $[58];
    }
    let t37;
    if ($[59] !== showPassword) {
        t37 = ({
            "LoginPage[<button>.onClick]": ()=>setShowPassword(!showPassword)
        })["LoginPage[<button>.onClick]"];
        $[59] = showPassword;
        $[60] = t37;
    } else {
        t37 = $[60];
    }
    let t38;
    if ($[61] !== showPassword) {
        t38 = showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 345,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 345,
            columnNumber: 49
        }, this);
        $[61] = showPassword;
        $[62] = t38;
    } else {
        t38 = $[62];
    }
    let t39;
    if ($[63] !== t37 || $[64] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t37,
            className: "absolute right-4 top-1/2 -translate-y-1/2 text-[#666] hover:text-white transition-colors",
            children: t38
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[63] = t37;
        $[64] = t38;
        $[65] = t39;
    } else {
        t39 = $[65];
    }
    let t40;
    if ($[66] !== t29 || $[67] !== t31 || $[68] !== t36 || $[69] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t29,
            children: [
                t31,
                t36,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[66] = t29;
        $[67] = t31;
        $[68] = t36;
        $[69] = t39;
        $[70] = t40;
    } else {
        t40 = $[70];
    }
    let t41;
    if ($[71] !== confirmPassword || $[72] !== focusedInput || $[73] !== isLogin || $[74] !== showPassword) {
        t41 = !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            className: "overflow-hidden pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative group transition-all duration-300 rounded-[18px] border ${focusedInput === "confirm" ? "border-[#00BFFF] bg-[#00BFFF]/5" : "border-[#222] bg-[#1A1A1A]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-4 top-1/2 -translate-y-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                            size: 18,
                            className: focusedInput === "confirm" ? "text-[#00BFFF]" : "text-[#666]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                            lineNumber: 382,
                            columnNumber: 280
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                        lineNumber: 382,
                        columnNumber: 222
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: showPassword ? "text" : "password",
                        placeholder: "Confirm Password",
                        value: confirmPassword,
                        onChange: {
                            "LoginPage[<input>.onChange]": (e_3)=>setConfirmPassword(e_3.target.value)
                        }["LoginPage[<input>.onChange]"],
                        onFocus: {
                            "LoginPage[<input>.onFocus]": ()=>setFocusedInput("confirm")
                        }["LoginPage[<input>.onFocus]"],
                        onBlur: {
                            "LoginPage[<input>.onBlur]": ()=>setFocusedInput(null)
                        }["LoginPage[<input>.onBlur]"],
                        className: "w-full h-[52px] bg-transparent pl-12 pr-4 outline-none text-white text-[15px] font-medium placeholder:text-[#444]"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                        lineNumber: 382,
                        columnNumber: 380
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                lineNumber: 382,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 373,
            columnNumber: 23
        }, this);
        $[71] = confirmPassword;
        $[72] = focusedInput;
        $[73] = isLogin;
        $[74] = showPassword;
        $[75] = t41;
    } else {
        t41 = $[75];
    }
    let t42;
    if ($[76] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t41
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[76] = t41;
        $[77] = t42;
    } else {
        t42 = $[77];
    }
    let t43;
    if ($[78] !== t26 || $[79] !== t28 || $[80] !== t40 || $[81] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t26,
                t28,
                t40,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[78] = t26;
        $[79] = t28;
        $[80] = t40;
        $[81] = t42;
        $[82] = t43;
    } else {
        t43 = $[82];
    }
    let t44;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-[#FFB6C1] transition-transform duration-300 group-hover:scale-105"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[83] = t44;
    } else {
        t44 = $[83];
    }
    let t45;
    if ($[84] !== isLogin || $[85] !== operationLoading) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative flex items-center justify-center gap-2 text-white",
            children: operationLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                lineNumber: 425,
                columnNumber: 108
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: isLogin ? "Sign In" : "Create Account"
            }, void 0, false)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[84] = isLogin;
        $[85] = operationLoading;
        $[86] = t45;
    } else {
        t45 = $[86];
    }
    let t46;
    if ($[87] !== operationLoading || $[88] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: operationLoading,
            className: "w-full mt-6 h-[56px] rounded-[18px] font-bold text-[16px] relative overflow-hidden group disabled:opacity-50 shadow-lg shadow-[#00BFFF]/20",
            children: [
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[87] = operationLoading;
        $[88] = t45;
        $[89] = t46;
    } else {
        t46 = $[89];
    }
    let t47;
    if ($[90] !== handleAuth || $[91] !== t43 || $[92] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleAuth,
            className: "space-y-4",
            children: [
                t43,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 443,
            columnNumber: 11
        }, this);
        $[90] = handleAuth;
        $[91] = t43;
        $[92] = t46;
        $[93] = t47;
    } else {
        t47 = $[93];
    }
    let t48;
    if ($[94] !== isLogin) {
        t48 = isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-full mt-6 text-[#00BFFF] text-xs font-bold hover:underline transition-all",
            children: "Forgot Password?"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 453,
            columnNumber: 22
        }, this);
        $[94] = isLogin;
        $[95] = t48;
    } else {
        t48 = $[95];
    }
    let t49;
    if ($[96] !== t18 || $[97] !== t47 || $[98] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#111] border border-[#222] rounded-[30px] p-6 shadow-2xl",
            children: [
                t18,
                t47,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[96] = t18;
        $[97] = t47;
        $[98] = t48;
        $[99] = t49;
    } else {
        t49 = $[99];
    }
    const t50 = isLogin ? "Don't have an account? " : "Already have an account? ";
    let t51;
    if ($[100] !== isLogin) {
        t51 = ({
            "LoginPage[<button>.onClick]": ()=>setIsLogin(!isLogin)
        })["LoginPage[<button>.onClick]"];
        $[100] = isLogin;
        $[101] = t51;
    } else {
        t51 = $[101];
    }
    const t52 = isLogin ? "Sign Up" : "Log In";
    let t53;
    if ($[102] !== t51 || $[103] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t51,
            className: "text-[#00BFFF] font-bold hover:underline ml-1",
            children: t52
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 483,
            columnNumber: 11
        }, this);
        $[102] = t51;
        $[103] = t52;
        $[104] = t53;
    } else {
        t53 = $[104];
    }
    let t54;
    if ($[105] !== t50 || $[106] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-8 text-center text-[#666] text-xs",
            children: [
                t50,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 492,
            columnNumber: 11
        }, this);
        $[105] = t50;
        $[106] = t53;
        $[107] = t54;
    } else {
        t54 = $[107];
    }
    let t55;
    if ($[108] !== t11 || $[109] !== t49 || $[110] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t5,
                    animate: t6,
                    className: "w-full max-w-sm z-10",
                    children: [
                        t11,
                        t49,
                        t54
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
                    lineNumber: 501,
                    columnNumber: 140
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/login/page.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, this);
        $[108] = t11;
        $[109] = t49;
        $[110] = t54;
        $[111] = t55;
    } else {
        t55 = $[111];
    }
    return t55;
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