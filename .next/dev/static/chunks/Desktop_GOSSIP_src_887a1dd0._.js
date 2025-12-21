(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/GOSSIP/src/components/chat-actions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatActions",
    ()=>ChatActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function ChatActions(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "e0ac105cfdf868ffedc397b730628f1d2345aca6971460419b845432f2e6b45e") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e0ac105cfdf868ffedc397b730628f1d2345aca6971460419b845432f2e6b45e";
    }
    const { onClose, onVoiceCall, onVideoCall, onBlockUser, isBlocked } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-primary font-black",
            children: "GOSSIP"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold tracking-tighter",
            children: [
                t1,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-secondary font-black",
                    children: "ACTIONS"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
                    lineNumber: 38,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-6 h-6 text-white"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== onClose) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 flex items-center justify-between border-b border-white/5",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "p-2 hover:bg-white/5 rounded-full transition-colors",
                    children: t3
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
                    lineNumber: 52,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[4] = onClose;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
                lineNumber: 61,
                columnNumber: 151
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white font-bold text-[15px]",
            children: "Voice Call"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] !== onVoiceCall) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onVoiceCall,
            className: "w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[8] = onVoiceCall;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
                lineNumber: 80,
                columnNumber: 151
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white font-bold text-[15px]",
            children: "Video Call"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[10] = t8;
        $[11] = t9;
    } else {
        t8 = $[10];
        t9 = $[11];
    }
    let t10;
    if ($[12] !== onVideoCall) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onVideoCall,
            className: "w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 90,
            columnNumber: 11
        }, this);
        $[12] = onVideoCall;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
                        lineNumber: 98,
                        columnNumber: 275
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
                    lineNumber: 98,
                    columnNumber: 128
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-bold text-[15px]",
                    children: "Lock Chat"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
                    lineNumber: 98,
                    columnNumber: 309
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    const t12 = isBlocked ? "bg-green-500/5 border-green-500/20 hover:bg-green-500/10" : "bg-red-500/5 border-red-500/20 hover:bg-red-500/10";
    let t13;
    if ($[15] !== t12) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-4 p-4 border rounded-2xl transition-all group", t12);
        $[15] = t12;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    const t14 = isBlocked ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500";
    let t15;
    if ($[17] !== t14) {
        t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform", t14);
        $[17] = t14;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            children: t16
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[20] = t15;
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    const t18 = isBlocked ? "text-green-500" : "text-red-500";
    let t19;
    if ($[22] !== t18) {
        t19 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-[15px]", t18);
        $[22] = t18;
        $[23] = t19;
    } else {
        t19 = $[23];
    }
    const t20 = isBlocked ? "Unblock User" : "Block User";
    let t21;
    if ($[24] !== t19 || $[25] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t19,
            children: t20
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[24] = t19;
        $[25] = t20;
        $[26] = t21;
    } else {
        t21 = $[26];
    }
    let t22;
    if ($[27] !== onBlockUser || $[28] !== t13 || $[29] !== t17 || $[30] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBlockUser,
            className: t13,
            children: [
                t17,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[27] = onBlockUser;
        $[28] = t13;
        $[29] = t17;
        $[30] = t21;
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    let t23;
    if ($[32] !== t10 || $[33] !== t22 || $[34] !== t7) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 space-y-3 pb-12",
            children: [
                t7,
                t10,
                t11,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[32] = t10;
        $[33] = t22;
        $[34] = t7;
        $[35] = t23;
    } else {
        t23 = $[35];
    }
    let t24;
    if ($[36] !== t23 || $[37] !== t4) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl bg-[#0A0A0A] border-t border-x border-white/10 rounded-t-[32px] sm:rounded-b-[32px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300",
            onClick: _ChatActionsDivOnClick,
            children: [
                t4,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[36] = t23;
        $[37] = t4;
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    let t25;
    if ($[39] !== onClose) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 -z-10",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[39] = onClose;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    let t26;
    if ($[41] !== t24 || $[42] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4",
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-actions.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[41] = t24;
        $[42] = t25;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    return t26;
}
_c = ChatActions;
function _ChatActionsDivOnClick(e) {
    return e.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "ChatActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/components/group-info.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupInfo",
    ()=>GroupInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GroupInfo({ roomId, onClose, currentUserId }) {
    _s();
    const [participants, setParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roomName, setRoomName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [roomDescription, setRoomDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ELLARUM VANGA ALWAYS WELCOME YOU");
    const [isGroup, setIsGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showParticipants, setShowParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // For adding members
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showAdd, setShowAdd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupInfo.useEffect": ()=>{
            fetchDetails();
        }
    }["GroupInfo.useEffect"], [
        roomId
    ]);
    const fetchDetails = async ()=>{
        // Fetch Room
        const { data: room } = await supabase.from('rooms').select('*').eq('id', roomId).single();
        if (room) {
            setRoomName(room.name || "Chat");
            setIsGroup(room.is_group);
        }
        // Fetch Participants
        const { data: parts } = await supabase.from('room_participants').select(`role, profiles(*)`).eq('room_id', roomId);
        if (parts) {
            const mapped = parts.map((p)=>({
                    ...p.profiles,
                    role: p.role
                }));
            setParticipants(mapped);
            const me = mapped.find((p_0)=>p_0.id === currentUserId);
            if (me && (me.role === 'owner' || me.role === 'admin')) setIsAdmin(true);
        }
        setLoading(false);
    };
    const handleUpdateName = async ()=>{
        if (!roomName.trim()) return;
        await supabase.from('rooms').update({
            name: roomName
        }).eq('id', roomId);
    };
    const handleSearch = async ()=>{
        if (!searchQuery) return;
        const { data } = await supabase.from('profiles').select('*').ilike('username', `%${searchQuery}%`).limit(5);
        if (data) setSearchResults(data);
    };
    const addMember = async (userId)=>{
        const { error } = await supabase.from('room_participants').insert({
            room_id: roomId,
            user_id: userId,
            role: 'member'
        });
        if (!error) {
            setShowAdd(false);
            fetchDetails();
        }
    };
    const removeMember = async (userId_0)=>{
        await supabase.from('room_participants').delete().eq('room_id', roomId).eq('user_id', userId_0);
        setParticipants((prev)=>prev.filter((p_1)=>p_1.id !== userId_0));
    };
    const promoteMember = async (userId_1)=>{
        await supabase.from('room_participants').update({
            role: 'admin'
        }).eq('room_id', roomId).eq('user_id', userId_1);
        fetchDetails();
    };
    const leaveGroup = async ()=>{
        await supabase.from('room_participants').delete().eq('room_id', roomId).eq('user_id', currentUserId);
        onClose();
        window.location.href = '/chat';
    };
    if (loading) return null;
    if (showParticipants) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl bg-[#0A0A0A] border-t border-x border-white/10 rounded-t-[32px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300 max-h-[80vh] flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 flex items-center justify-between border-b border-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowParticipants(false),
                                className: "text-primary font-bold",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold tracking-tighter",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-black",
                                        children: "GROUP"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                        lineNumber: 111,
                                        columnNumber: 29
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-secondary font-black",
                                        children: "MEMBERS"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                        lineNumber: 112,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-white/5 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 115,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                lineNumber: 114,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                        lineNumber: 108,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 overflow-y-auto custom-scrollbar flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: participants.map((p_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-4 bg-white/5 rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                    src: p_2.avatar_url || undefined,
                                                    fallback: p_2.username || "?",
                                                    className: "w-10 h-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-white",
                                                            children: p_2.full_name || p_2.username
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-white/40 uppercase font-black",
                                                            children: p_2.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 121,
                                            columnNumber: 37
                                        }, this),
                                        isAdmin && currentUserId !== p_2.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removeMember(p_2.id),
                                                className: "text-red-500 text-xs font-bold",
                                                children: "REMOVE"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                lineNumber: 129,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 128,
                                            columnNumber: 77
                                        }, this)
                                    ]
                                }, p_2.id, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 120,
                                    columnNumber: 54
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                            lineNumber: 119,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                        lineNumber: 118,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                lineNumber: 107,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
            lineNumber: 106,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl bg-[#0A0A0A] border-t border-x border-white/10 rounded-t-[32px] sm:rounded-b-[32px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold tracking-tighter",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-black",
                                        children: "GROUP"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-secondary font-black",
                                        children: "SETTINGS"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                        lineNumber: 143,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1 px-[3px] border-2 border-primary rounded-md text-primary hover:bg-primary/10 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4 text-primary",
                                    strokeWidth: 4
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center p-6 pt-0 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                        src: participants[0]?.avatar_url,
                                        fallback: roomName[0],
                                        className: "w-[100px] h-[100px] rounded-full border-4 border-white/5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-black text-white/40 uppercase tracking-widest",
                                        children: "Group Avatar"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                        lineNumber: 154,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                lineNumber: 152,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full space-y-6 pb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-black text-white/40 uppercase tracking-[0.2em] ml-2",
                                                children: "Group Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                lineNumber: 160,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-[#0A0A0A] border border-white/10 rounded-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: roomName,
                                                    onChange: (e_0)=>setRoomName(e_0.target.value),
                                                    onBlur: handleUpdateName,
                                                    className: "w-full bg-transparent border-none outline-none text-white font-bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                lineNumber: 161,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-black text-white/40 uppercase tracking-[0.2em] ml-2",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                lineNumber: 167,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-[#0A0A0A] border border-white/10 rounded-2xl min-h-[80px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: roomDescription,
                                                    onChange: (e_1)=>setRoomDescription(e_1.target.value),
                                                    className: "w-full bg-transparent border-none outline-none text-white font-bold resize-none h-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                lineNumber: 168,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                        lineNumber: 166,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowParticipants(true),
                                        className: "w-full flex items-center gap-4 p-4 bg-[#0A0A0A] border border-white/10 rounded-2xl hover:bg-white/5 transition-all group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                lineNumber: 174,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-bold text-[15px]",
                                                children: "View Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                lineNumber: 177,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                        lineNumber: 173,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
        lineNumber: 137,
        columnNumber: 10
    }, this);
}
_s(GroupInfo, "QeheeMpWsnVdHbj8XRMtgbb1BYY=");
_c = GroupInfo;
var _c;
__turbopack_context__.k.register(_c, "GroupInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/components/chat-window.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/reply.js [app-client] (ecmascript) <export default as Reply>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/call-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$chat$2d$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/chat-actions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$group$2d$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/group-info.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/navigation.js [app-client] (ecmascript)");
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
;
;
;
function ChatWindow({ roomId, user }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newMessage, setNewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [room, setRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showActions, setShowActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showGroupInfo, setShowGroupInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recording, setRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioBlob, setAudioBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isBlocked, setIsBlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [headerName, setHeaderName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Chat Room");
    const [headerAvatar, setHeaderAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [headerGender, setHeaderGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { startCall } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCall"])();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWindow.useEffect": ()=>{
            const fetchRoomAndMessages = {
                "ChatWindow.useEffect.fetchRoomAndMessages": async ()=>{
                    setLoading(true);
                    const { data: roomData } = await supabase.from("rooms").select(`*, room_participants(user_id, profiles(username, full_name, avatar_url, gender))`).eq("id", roomId).single();
                    setRoom(roomData);
                    if (roomData) {
                        if (roomData.is_group === false && roomData.room_participants) {
                            const other = roomData.room_participants.find({
                                "ChatWindow.useEffect.fetchRoomAndMessages.other": (p)=>p.user_id !== user.id
                            }["ChatWindow.useEffect.fetchRoomAndMessages.other"]);
                            if (other && other.profiles) {
                                const name = (other.profiles.full_name || other.profiles.username || "Unknown User").toUpperCase();
                                setHeaderName(name);
                                setHeaderAvatar(other.profiles.avatar_url);
                                setHeaderGender(other.profiles.gender);
                                const { data: blockData } = await supabase.from("blocked_users").select("*").eq("blocker_id", user.id).eq("blocked_id", other.user_id).maybeSingle();
                                setIsBlocked(!!blockData);
                            }
                        } else {
                            setHeaderName(`${(roomData.name || "Group Chat").toUpperCase()}...💖`);
                        }
                    }
                    const { data: msgData } = await supabase.from("messages").select(`*, profiles(username, avatar_url, gender), reply_item: messages!reply_to(content, message_type, profiles(username))`).eq("room_id", roomId).order("created_at", {
                        ascending: true
                    });
                    if (msgData) setMessages(msgData);
                    setLoading(false);
                }
            }["ChatWindow.useEffect.fetchRoomAndMessages"];
            fetchRoomAndMessages();
            const channel = supabase.channel(`room:${roomId}`).on("postgres_changes", {
                event: "INSERT",
                schema: "public",
                table: "messages",
                filter: `room_id=eq.${roomId}`
            }, {
                "ChatWindow.useEffect.channel": async (payload)=>{
                    const { data } = await supabase.from("messages").select(`*, profiles(username, avatar_url, gender), reply_item: messages!reply_to(content, message_type, profiles(username))`).eq("id", payload.new.id).single();
                    if (data) setMessages({
                        "ChatWindow.useEffect.channel": (prev)=>[
                                ...prev,
                                data
                            ]
                    }["ChatWindow.useEffect.channel"]);
                }
            }["ChatWindow.useEffect.channel"]).subscribe();
            return ({
                "ChatWindow.useEffect": ()=>{
                    supabase.removeChannel(channel);
                }
            })["ChatWindow.useEffect"];
        }
    }["ChatWindow.useEffect"], [
        roomId,
        user.id,
        supabase
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWindow.useEffect": ()=>{
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
            const unreadIds = messages.filter({
                "ChatWindow.useEffect.unreadIds": (m)=>m.user_id !== user.id && !m.read_at
            }["ChatWindow.useEffect.unreadIds"]).map({
                "ChatWindow.useEffect.unreadIds": (m_0)=>m_0.id
            }["ChatWindow.useEffect.unreadIds"]);
            if (unreadIds.length > 0) {
                supabase.from("messages").update({
                    read_at: new Date().toISOString()
                }).in("id", unreadIds).then({
                    "ChatWindow.useEffect": ()=>{}
                }["ChatWindow.useEffect"]);
            }
        }
    }["ChatWindow.useEffect"], [
        messages,
        user.id,
        supabase
    ]);
    const getNameColor = (gender)=>{
        switch(gender?.toLowerCase()){
            case 'male':
                return '#00BFFF';
            case 'female':
                return '#FFB6C1';
            case 'other':
                return '#FFD700';
            default:
                return '#FFF';
        }
    };
    const handleSendMessage = async (e, type = 'text', mediaUrl, meta)=>{
        if (e) e.preventDefault();
        if (isBlocked) return;
        let content = type === 'text' ? newMessage : null;
        if (type === 'text' && !content?.trim()) return;
        if (!content && type !== 'text') {
            if (type === 'image') content = '📷 Image';
            else if (type === 'video') content = '📹 Video';
            else if (type === 'audio') content = '🎤 Voice Note';
            else content = '📎 Attachment';
        }
        const { error } = await supabase.from("messages").insert({
            room_id: roomId,
            user_id: user.id,
            content: content,
            message_type: type,
            media_url: mediaUrl,
            media_meta: meta,
            reply_to: replyingTo?.id,
            status: 'sent',
            is_deleted: false
        });
        if (!error) {
            if (type === 'text') setNewMessage("");
            setReplyingTo(null);
            // Update room updated_at
            await supabase.from("rooms").update({
                updated_at: new Date().toISOString()
            }).eq("id", roomId);
        }
    };
    const handleFileUpload = async (e_0)=>{
        const file = e_0.target.files?.[0];
        if (!file || isBlocked) return;
        setUploading(true);
        const fileName = `${Date.now()}_${file.name}`;
        const filePath = `${roomId}/${fileName}`;
        const { error: uploadError } = await supabase.storage.from('chat-media').upload(filePath, file);
        if (uploadError) {
            addToast(uploadError.message, "error");
            setUploading(false);
            return;
        }
        const { data: { publicUrl } } = supabase.storage.from('chat-media').getPublicUrl(filePath);
        let type_0 = 'document';
        if (file.type.startsWith('image/')) type_0 = 'image';
        else if (file.type.startsWith('video/')) type_0 = 'video';
        else if (file.type.startsWith('audio/')) type_0 = 'audio';
        await handleSendMessage(undefined, type_0, publicUrl, {
            size: file.size,
            name: file.name
        });
        setUploading(false);
    };
    const handleDeleteMessage = async (messageId)=>{
        const { error: error_0 } = await supabase.from("messages").update({
            content: "🚫 Message deleted",
            is_deleted: true,
            media_url: null,
            media_meta: null
        }).eq("id", messageId);
        if (error_0) addToast("Failed to delete message", "error");
    };
    const startRecording = async ()=>{
        if (isBlocked) return;
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];
            mediaRecorder.ondataavailable = (e_1)=>{
                if (e_1.data.size > 0) chunksRef.current.push(e_1.data);
            };
            mediaRecorder.onstop = ()=>{
                const blob = new Blob(chunksRef.current, {
                    type: 'audio/webm'
                });
                setAudioBlob(blob);
                stream.getTracks().forEach((track)=>track.stop());
            };
            mediaRecorder.start();
            setRecording(true);
        } catch (err) {
            console.error("Error accessing microphone:", err);
            addToast("Could not access microphone", "error");
        }
    };
    const stopRecording = ()=>{
        if (mediaRecorderRef.current && recording) {
            mediaRecorderRef.current.stop();
            setRecording(false);
        }
    };
    const cancelRecording = ()=>{
        stopRecording();
        setAudioBlob(null);
        chunksRef.current = [];
    };
    const sendVoiceNote = async ()=>{
        if (!audioBlob || isBlocked) return;
        setUploading(true);
        const fileName_0 = `${Date.now()}.webm`;
        const filePath_0 = `${roomId}/${fileName_0}`;
        const { error: uploadError_0 } = await supabase.storage.from('chat-media').upload(filePath_0, audioBlob);
        if (uploadError_0) {
            addToast(uploadError_0.message, "error");
            setUploading(false);
            return;
        }
        const { data: { publicUrl: publicUrl_0 } } = supabase.storage.from('chat-media').getPublicUrl(filePath_0);
        await handleSendMessage(undefined, 'audio', publicUrl_0, {
            duration: 0
        });
        setAudioBlob(null);
        setUploading(false);
    };
    const handleBlockUser = async ()=>{
        if (!room || room.is_group) return;
        const other_0 = room.room_participants?.find((p_0)=>p_0.user_id !== user?.id);
        if (!other_0) return;
        try {
            if (isBlocked) {
                await supabase.from("blocked_users").delete().eq("blocker_id", user?.id).eq("blocked_id", other_0.user_id);
                setIsBlocked(false);
                addToast("User unblocked", "success");
            } else {
                await supabase.from("blocked_users").insert({
                    blocker_id: user?.id,
                    blocked_id: other_0.user_id
                });
                setIsBlocked(true);
                addToast("User blocked", "error");
                router.push('/chat');
            }
        } catch (err_0) {
            addToast("Action failed", "error");
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center bg-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-10 h-10 text-primary animate-spin"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 272,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-white/50 font-bold tracking-widest uppercase text-[10px]",
                    children: "Establishing Secure Line..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 273,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 271,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-black relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 278,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 flex items-center justify-between bg-black/80 backdrop-blur-xl border-b border-white/5 z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push('/chat'),
                                className: "p-2 -ml-2 hover:bg-white/5 rounded-xl text-white/30 hover:text-white transition-all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-6 h-6",
                                    strokeWidth: 3
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 284,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                lineNumber: 283,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-11 h-11 rounded-2xl p-0.5 bg-gradient-to-br from-primary/30 to-secondary/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            src: headerAvatar,
                                            fallback: headerName[0] || "?",
                                            className: "w-full h-full rounded-[14px]"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                            lineNumber: 288,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                        lineNumber: 287,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-online border-[3px] border-black rounded-full shadow-lg shadow-online/20"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                        lineNumber: 290,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[17px] font-black tracking-tight",
                                        style: {
                                            color: getNameColor(headerGender)
                                        },
                                        children: headerName
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                        lineNumber: 293,
                                        columnNumber: 25
                                    }, this),
                                    room?.is_group ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-black text-online uppercase tracking-widest mt-0.5",
                                        children: [
                                            room.room_participants?.length || 0,
                                            " online • ",
                                            room.room_participants?.length || 0,
                                            " members"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                        lineNumber: 296,
                                        columnNumber: 43
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-black text-online uppercase tracking-widest mt-0.5",
                                        children: "Online"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                        lineNumber: 298,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                lineNumber: 292,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 282,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (room?.is_group) setShowGroupInfo(true);
                                else setShowActions(true);
                            },
                            className: "p-2.5 hover:bg-white/5 rounded-xl text-white/40 hover:text-white transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                className: "w-6 h-6",
                                strokeWidth: 2.5
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                lineNumber: 306,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                            lineNumber: 303,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 302,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 281,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative z-10",
                ref: scrollRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-1 rounded-full bg-white/5 border border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-black text-white/30 uppercase tracking-[0.2em]",
                                children: "Today"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                lineNumber: 315,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                            lineNumber: 314,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 313,
                        columnNumber: 17
                    }, this),
                    messages.map((msg, index)=>{
                        const isMe = msg.user_id === user.id;
                        const prevMsg = messages[index - 1];
                        const isSameUser = prevMsg?.user_id === msg.user_id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col", isMe ? "items-end" : "items-start"),
                            children: [
                                !isMe && !isSameUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-black text-white/20 mb-1.5 ml-14 uppercase tracking-wider",
                                    style: {
                                        color: getNameColor(msg.profiles?.gender)
                                    },
                                    children: msg.profiles?.username
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 324,
                                    columnNumber: 54
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-end gap-3 max-w-[85%]", isMe && "flex-row-reverse"),
                                    children: [
                                        !isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-xl overflow-hidden ring-1 ring-white/10 flex-shrink-0",
                                            children: !isSameUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                src: msg.profiles?.avatar_url || '',
                                                fallback: msg.profiles?.username?.[0] || "?",
                                                className: "w-full h-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                lineNumber: 331,
                                                columnNumber: 56
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                lineNumber: 331,
                                                columnNumber: 196
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                            lineNumber: 330,
                                            columnNumber: 43
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2.5 relative group transition-all", isMe ? "bg-primary text-black rounded-[18px] rounded-br-[4px]" : "bg-[#1A1A1A] text-white rounded-[18px] rounded-bl-[4px]"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -top-8 px-2 py-1 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all z-20", isMe ? "right-0" : "left-0"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setReplyingTo(msg),
                                                            className: "text-white/60 hover:text-primary transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__["Reply"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 41
                                                        }, this),
                                                        isMe && !msg.is_deleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteMessage(msg.id),
                                                            className: "text-white/60 hover:text-secondary transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 69
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 37
                                                }, this),
                                                msg.is_deleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "italic text-[13px] opacity-40 font-medium tracking-tight",
                                                    children: "🚫 Ghost message deleted"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 55
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        msg.reply_item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-2 p-2 rounded-xl flex flex-col gap-0.5 border-l-4", isMe ? "bg-black/5 border-black/20" : "bg-white/5 border-primary/40"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[9px] font-black uppercase tracking-widest", isMe ? "text-black/50" : "text-primary/70"),
                                                                    children: msg.reply_item.profiles?.username || 'GOSSIPER'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[11px] font-bold truncate italic opacity-60", isMe ? "text-black" : "text-white"),
                                                                    children: msg.reply_item.message_type === 'text' ? msg.reply_item.content : `[MEDIA ${msg.reply_item.message_type.toUpperCase()}]`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 64
                                                        }, this),
                                                        msg.message_type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[15px] font-medium leading-relaxed tracking-tight",
                                                            children: msg.content
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 77
                                                        }, this),
                                                        msg.message_type === 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-2xl overflow-hidden my-1 border border-white/10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: msg.media_url || '',
                                                                alt: "",
                                                                className: "max-w-full max-h-[400px] w-auto h-auto object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 78
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 mt-1.5", isMe ? "justify-end" : "justify-start"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-black uppercase tracking-widest", isMe ? "text-black/40" : "text-white/20"),
                                                            children: new Date(msg.created_at).toLocaleTimeString([], {
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 41
                                                        }, this),
                                                        isMe && (msg.read_at ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                                                            size: 12,
                                                            className: "text-black/60"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 65
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 12,
                                                            className: "text-black/40"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 118
                                                        }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                            lineNumber: 334,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 329,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, msg.id, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                            lineNumber: 323,
                            columnNumber: 16
                        }, this);
                    }),
                    uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end pr-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-primary/20 p-2 rounded-xl flex items-center gap-2 border border-primary/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 animate-spin text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 377,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-black text-primary uppercase tracking-widest",
                                    children: "Transmitting..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 378,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                            lineNumber: 376,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 375,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 312,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e_2)=>handleSendMessage(e_2, 'text'),
                className: "p-4 bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex items-center bg-[#1A1A1A] rounded-[28px] px-4 py-1 border border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "p-2 text-white/40 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                lineNumber: 389,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M8 14s1.5 2 4 2 4-2 4-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                lineNumber: 390,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "9",
                                                y1: "9",
                                                x2: "9.01",
                                                y2: "9"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                lineNumber: 391,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "15",
                                                y1: "9",
                                                x2: "15.01",
                                                y2: "9"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                lineNumber: 392,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                        lineNumber: 388,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 387,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: newMessage,
                                    onChange: (e_3)=>setNewMessage(e_3.target.value),
                                    placeholder: "Message...",
                                    className: "flex-1 bg-transparent border-none outline-none px-2 text-[15px] text-white placeholder:text-white/20 h-11"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 395,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>fileInputRef.current?.click(),
                                    className: "p-2 text-white/40 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                        lineNumber: 397,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 396,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                            lineNumber: 386,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: newMessage.trim() ? "submit" : "button",
                            onClick: !newMessage.trim() ? recording ? stopRecording : startRecording : undefined,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-12 h-12 rounded-full flex items-center justify-center transition-all", newMessage.trim() ? "bg-primary text-black" : "bg-[#1A1A1A] text-white/60"),
                            children: newMessage.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "w-5 h-5 ml-0.5"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                lineNumber: 402,
                                columnNumber: 46
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", recording && "text-red-500 animate-pulse")
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                lineNumber: 402,
                                columnNumber: 84
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                            lineNumber: 401,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 385,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 384,
                columnNumber: 13
            }, this),
            showGroupInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$group$2d$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupInfo"], {
                roomId: roomId,
                onClose: ()=>setShowGroupInfo(false),
                currentUserId: user.id
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 406,
                columnNumber: 31
            }, this),
            showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$chat$2d$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatActions"], {
                onClose: ()=>setShowActions(false),
                onVoiceCall: ()=>{
                    setShowActions(false);
                    startCall(roomId, false);
                },
                onVideoCall: ()=>{
                    setShowActions(false);
                    startCall(roomId, true);
                },
                onBlockUser: ()=>{
                    setShowActions(false);
                    handleBlockUser();
                },
                isBlocked: isBlocked,
                isGroup: false
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 407,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
        lineNumber: 276,
        columnNumber: 10
    }, this);
}
_s(ChatWindow, "ekPGrlua0za1fE5VDDY0d83SVvI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCall"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ChatWindow;
var _c;
__turbopack_context__.k.register(_c, "ChatWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/components/user-search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserSearch",
    ()=>UserSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx [app-client] (ecmascript)");
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
function UserSearch(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "7f63aca7c11bf60994afade75d3cc17aee2f31a1d0f488c13d173b5d713c150e") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7f63aca7c11bf60994afade75d3cc17aee2f31a1d0f488c13d173b5d713c150e";
    }
    const { onClose, currentUserId } = t0;
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = new Set();
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [requested, setRequested] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const handleSearch = {
        "UserSearch[handleSearch]": async ()=>{
            if (!query.trim()) {
                return;
            }
            setLoading(true);
            const { data } = await supabase.from("profiles").select("*").or(`username.ilike.%${query}%,full_name.ilike.%${query}%`).neq("id", currentUserId).limit(10);
            if (data) {
                setResults(data);
            }
            setLoading(false);
        }
    }["UserSearch[handleSearch]"];
    const sendRequest = {
        "UserSearch[sendRequest]": async (targetId)=>{
            setRequested({
                "UserSearch[sendRequest > setRequested()]": (prev)=>new Set(prev).add(targetId)
            }["UserSearch[sendRequest > setRequested()]"]);
            const { data: existing, error: fetchError } = await supabase.from("connections").select("*").or(`and(requester_id.eq.${currentUserId},addressee_id.eq.${targetId}),and(requester_id.eq.${targetId},addressee_id.eq.${currentUserId})`).maybeSingle();
            if (fetchError) {
                console.error("Error checking connection:", fetchError);
                return;
            }
            let error_0 = null;
            if (existing) {
                if (existing.status === "rejected") {
                    const { error: updateError } = await supabase.from("connections").update({
                        status: "pending",
                        requester_id: currentUserId,
                        addressee_id: targetId
                    }).eq("id", existing.id);
                    error_0 = updateError;
                } else {
                    console.log("Connection already exists or is pending.");
                }
            } else {
                const { error: insertError } = await supabase.from("connections").insert({
                    requester_id: currentUserId,
                    addressee_id: targetId
                });
                error_0 = insertError;
            }
            if (error_0) {
                console.error("Failed to send request", error_0);
                setRequested({
                    "UserSearch[sendRequest > setRequested()]": (prev_0)=>{
                        const next = new Set(prev_0);
                        next.delete(targetId);
                        return next;
                    }
                }["UserSearch[sendRequest > setRequested()]"]);
                addToast("Failed to send request: " + error_0.message, "error");
            } else {
                addToast("Request sent!", "success");
            }
        }
    }["UserSearch[sendRequest]"];
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-bold text-white",
            children: "Find People"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-5 h-5 text-white/70"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== onClose) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-b border-white/5 flex items-center justify-between",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "p-2 hover:bg-white/10 rounded-full transition-colors",
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                    lineNumber: 131,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[5] = onClose;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "UserSearch[<input>.onChange]": (e)=>setQuery(e.target.value)
        })["UserSearch[<input>.onChange]"];
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = loading ? "..." : "Search";
    let t9;
    if ($[9] !== handleSearch || $[10] !== loading || $[11] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSearch,
            disabled: loading,
            className: "px-4 py-2 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50",
            children: t8
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[9] = handleSearch;
        $[10] = loading;
        $[11] = t8;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const t10 = "space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar";
    let t11;
    if ($[13] !== loading || $[14] !== query || $[15] !== results.length) {
        t11 = results.length === 0 && !loading && query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-white/30 py-4",
            children: "No users found."
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
            lineNumber: 167,
            columnNumber: 56
        }, this);
        $[13] = loading;
        $[14] = query;
        $[15] = results.length;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    const t12 = results.map({
        "UserSearch[results.map()]": (user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                        src: user.avatar_url || undefined,
                        fallback: user.username || user.full_name || "?"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                        lineNumber: 176,
                        columnNumber: 191
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-white truncate",
                                children: user.full_name || user.username || "Unknown"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                                lineNumber: 176,
                                columnNumber: 326
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/50 truncate",
                                children: [
                                    "@",
                                    user.username
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                                lineNumber: 176,
                                columnNumber: 425
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                        lineNumber: 176,
                        columnNumber: 286
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "UserSearch[results.map() > <button>.onClick]": ()=>sendRequest(user.id)
                        }["UserSearch[results.map() > <button>.onClick]"],
                        disabled: requested.has(user.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-full transition-all", requested.has(user.id) ? "bg-green-500/20 text-green-400" : "bg-primary/10 text-primary hover:bg-primary/20"),
                        children: requested.has(user.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                            lineNumber: 178,
                            columnNumber: 278
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                            lineNumber: 178,
                            columnNumber: 310
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                        lineNumber: 176,
                        columnNumber: 497
                    }, this)
                ]
            }, user.id, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                lineNumber: 176,
                columnNumber: 42
            }, this)
    }["UserSearch[results.map()]"]);
    let t13;
    if ($[17] !== t11 || $[18] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t12;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-[#1e1e24] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-1",
                                    children: [
                                        t6,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search by username...",
                                            className: "w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                                            value: query,
                                            onChange: t7,
                                            onKeyDown: {
                                                "UserSearch[<input>.onKeyDown]": (e_0)=>e_0.key === "Enter" && handleSearch()
                                            }["UserSearch[<input>.onKeyDown]"]
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                                            lineNumber: 189,
                                            columnNumber: 363
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                                    lineNumber: 189,
                                    columnNumber: 326
                                }, this),
                                t9
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                            lineNumber: 189,
                            columnNumber: 298
                        }, this),
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
                    lineNumber: 189,
                    columnNumber: 267
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
            lineNumber: 189,
            columnNumber: 112
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/GOSSIP/src/components/user-search.tsx",
        lineNumber: 189,
        columnNumber: 10
    }, this);
}
_s(UserSearch, "8f01eNNHB3Smnt2jGrJLlOO5908=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = UserSearch;
var _c;
__turbopack_context__.k.register(_c, "UserSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/components/connection-requests.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectionRequests",
    ()=>ConnectionRequests
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ConnectionRequests({ onClose, currentUserId }) {
    _s();
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectionRequests.useEffect": ()=>{
            fetchRequests();
        }
    }["ConnectionRequests.useEffect"], []);
    const fetchRequests = async ()=>{
        const { data, error } = await supabase.from("connections").select("*, requester:profiles!requester_id(*)").eq("addressee_id", currentUserId).eq("status", "pending");
        if (data) {
            setRequests(data); // Cast because Supabase joined types are tricky
        }
        setLoading(false);
    };
    const handleResponse = async (id, status)=>{
        const { error: error_0 } = await supabase.from("connections").update({
            status
        }).eq("id", id);
        if (!error_0) {
            setRequests((prev)=>prev.filter((req)=>req.id !== id));
            if (status === 'accepted') {
                // Find and get request details to get the other user ID
                const req_0 = requests.find((r)=>r.id === id);
                if (req_0) {
                    await getOrCreateDm(req_0.requester_id);
                }
            }
        }
    };
    const getOrCreateDm = async (otherUserId)=>{
        setLoading(true);
        // 1. Check if a DM room already exists
        // This is a bit complex in Supabase SQL without a function, but we can try a simple creating approach
        // or just create a new one for now and rely on unique constraints if we had them (we might not).
        // Better approach: Create a new room with is_group=false. 
        // Real-world app would query room_participants to find common room.
        // Let's create a new DM room for simplicity and reliability in this session
        const { data: roomData, error: roomError } = await supabase.from("rooms").insert({
            is_group: false,
            name: "Direct Message"
        }) // Name is often ignored for DMs in UI
        .select().single();
        if (roomData) {
            // Add participants
            await supabase.from("room_participants").insert([
                {
                    room_id: roomData.id,
                    user_id: currentUserId
                },
                {
                    room_id: roomData.id,
                    user_id: otherUserId
                }
            ]);
            onClose();
            router.push(`/chat?roomId=${roomData.id}`);
        } else {
            console.error("Failed to create room", roomError);
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-[#1e1e24] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-white/5 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-white flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                    className: "w-5 h-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this),
                                "Connection Requests"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-white/10 rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-white/70"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                lineNumber: 92,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar",
                    children: [
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-white/30 py-4",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                            lineNumber: 97,
                            columnNumber: 33
                        }, this),
                        !loading && requests.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-white/30 py-8 flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                    className: "w-10 h-10 opacity-20"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                    lineNumber: 99,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No pending requests."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                    lineNumber: 100,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                            lineNumber: 98,
                            columnNumber: 59
                        }, this),
                        requests.map((req_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                        src: req_1.requester?.avatar_url || undefined,
                                        fallback: req_1.requester?.username || "?"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                        lineNumber: 104,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-white truncate",
                                                children: req_1.requester?.full_name || req_1.requester?.username || "Unknown User"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                                lineNumber: 106,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/50 truncate",
                                                children: "wants to connect"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                                lineNumber: 109,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleResponse(req_1.id, 'accepted'),
                                                className: "p-2 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-full transition-colors",
                                                title: "Accept",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                                lineNumber: 114,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleResponse(req_1.id, 'rejected'),
                                                className: "p-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-full transition-colors",
                                                title: "Reject",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                                lineNumber: 117,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                        lineNumber: 113,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, req_1.id, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                                lineNumber: 103,
                                columnNumber: 44
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
                    lineNumber: 96,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
            lineNumber: 85,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/GOSSIP/src/components/connection-requests.tsx",
        lineNumber: 84,
        columnNumber: 10
    }, this);
}
_s(ConnectionRequests, "IAmcr18ZthRDaqSvze8Hn3c/f2w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ConnectionRequests;
var _c;
__turbopack_context__.k.register(_c, "ConnectionRequests");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/services/profile-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileService",
    ()=>ProfileService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
;
const ProfileService = {
    async getProfile (userId) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { data, error } = await client.from('profiles').select('*').eq('id', userId).single();
            if (error) return {
                data: null,
                error: error.message
            };
            return {
                data: data,
                error: null
            };
        });
    },
    async updateProfile (userId, updates) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { error } = await client.from('profiles').update(updates).eq('id', userId);
            return {
                error: error?.message || null
            };
        });
    },
    async searchProfiles (query) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { data, error } = await client.from('profiles').select('*').or(`username.ilike.%${query}%,full_name.ilike.%${query}%`).limit(20);
            if (error) return {
                data: [],
                error: error.message
            };
            return {
                data: data,
                error: null
            };
        });
    },
    async uploadAvatar (userId, file) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            try {
                console.log('[ProfileService] Starting upload for file:', file.name);
                const fileExt = file.name.split('.').pop() || 'jpg';
                const fileName = `${userId}_${Date.now()}.${fileExt}`;
                const filePath = `avatars/${fileName}`;
                const { error: uploadError } = await client.storage.from('gossip-avatars').upload(filePath, file, {
                    contentType: file.type,
                    upsert: false
                });
                if (uploadError) {
                    console.error('[ProfileService] Upload error:', uploadError);
                    throw uploadError;
                }
                const { data } = client.storage.from('gossip-avatars').getPublicUrl(filePath);
                console.log('[ProfileService] Upload successful, URL:', data.publicUrl);
                return {
                    data: data.publicUrl,
                    error: null
                };
            } catch (err) {
                console.error('[ProfileService] Upload failed:', err);
                return {
                    data: null,
                    error: err.message
                };
            }
        });
    },
    async updatePushToken (userId, token) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { error } = await client.from('profiles').update({
                push_token: token
            }).eq('id', userId);
            if (error) console.error('[ProfileService] Update Token Error:', error);
            return {
                error: error?.message || null
            };
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/components/ui/gradient-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GradientText",
    ()=>GradientText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function GradientText(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "ddbf058cd65e29bfa00287e080bd48677470d7833aa75ae56c14080f1147e387") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ddbf058cd65e29bfa00287e080bd48677470d7833aa75ae56c14080f1147e387";
    }
    const { text, className, colors: t1 } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [
            "#00BFFF",
            "#FFB6C1"
        ] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const colors = t2;
    let t3;
    if ($[3] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-clip-text text-transparent", className);
        $[3] = className;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;
    let t5;
    if ($[5] !== t4) {
        t5 = {
            backgroundImage: t4,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        };
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t3 || $[8] !== t5 || $[9] !== text) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t3,
            style: t5,
            children: text
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/ui/gradient-text.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t5;
        $[9] = text;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
}
_c = GradientText;
var _c;
__turbopack_context__.k.register(_c, "GradientText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/components/settings-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsModal",
    ()=>SettingsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-client] (ecmascript) <export default as Unlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$profile$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/services/profile-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$gradient$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/gradient-text.tsx [app-client] (ecmascript)");
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
;
;
const translations = {
    'English': {
        profile: 'Profile',
        personalInfo: 'PERSONAL INFO',
        settings: 'SETTINGS',
        notifications: 'Notifications',
        language: 'Language',
        logout: 'Logout',
        fullName: 'Full Name',
        username: 'Username',
        age: 'Age',
        phone: 'Phone',
        bio: 'Bio',
        edit: 'Edit',
        save: 'Save Changes',
        cancel: 'Cancel',
        gender: 'Gender',
        male: 'Male',
        female: 'Female',
        other: 'Other'
    },
    'Tamil': {
        profile: 'சுயவிவரம்',
        personalInfo: 'தனிப்பட்ட தகவல்',
        settings: 'அமைப்புகள்',
        notifications: 'அறிவிப்புகள்',
        language: 'மொழி',
        logout: 'வெளியேறு',
        fullName: 'முழு பெயர்',
        username: 'பயனர்பெயர்',
        age: 'வயது',
        phone: 'தொலைபேசி',
        bio: 'சுயசரிதை',
        edit: 'தொகு',
        save: 'மாற்றங்களை சேமி',
        cancel: 'ரத்துசெய்',
        gender: 'பாலினம்',
        male: 'ஆண்',
        female: 'பெண்',
        other: 'மற்றவை'
    }
};
function SettingsModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(91);
    if ($[0] !== "0908dc5b5798edeb4127a92a98f0bdec0654b44e0f0577a5e7afc7ac26206315") {
        for(let $i = 0; $i < 91; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0908dc5b5798edeb4127a92a98f0bdec0654b44e0f0577a5e7afc7ac26206315";
    }
    const { onClose, user } = t0;
    const [, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("English");
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [blockedUsers, setBlockedUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notificationsEnabled, setNotificationsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("info");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const supabase = t2;
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const t = translations[language];
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            full_name: "",
            username: "",
            age: "",
            phone: "",
            bio: "",
            gender: ""
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    let t5;
    if ($[4] !== user.id) {
        t4 = ({
            "SettingsModal[useEffect()]": ()=>{
                const fetchData = {
                    "SettingsModal[useEffect() > fetchData]": async ()=>{
                        setLoading(true);
                        const { data: prof } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$profile$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileService"].getProfile(user.id);
                        if (prof) {
                            setProfile(prof);
                            setForm({
                                full_name: prof.full_name || "",
                                username: prof.username || "",
                                age: prof.age?.toString() || "",
                                phone: prof.phone || "",
                                bio: prof.bio || "",
                                gender: prof.gender || ""
                            });
                        }
                        const { data: blocks } = await supabase.from("blocked_users").select("*, blocked:profiles!blocked_id(*)").eq("blocker_id", user.id);
                        if (blocks) {
                            setBlockedUsers(blocks);
                        }
                        setLoading(false);
                    }
                }["SettingsModal[useEffect() > fetchData]"];
                fetchData();
            }
        })["SettingsModal[useEffect()]"];
        t5 = [
            user.id,
            supabase
        ];
        $[4] = user.id;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[7] !== addToast || $[8] !== form || $[9] !== user.id) {
        t6 = ({
            "SettingsModal[handleSave]": async ()=>{
                setSaving(true);
                const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$profile$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileService"].updateProfile(user.id, {
                    ...form,
                    age: parseInt(form.age) || undefined
                });
                if (!error) {
                    addToast("Profile updated", "success");
                    setIsEditing(false);
                    setProfile({
                        "SettingsModal[handleSave > setProfile()]": (prev)=>prev ? {
                                ...prev,
                                ...form,
                                age: parseInt(form.age) || undefined
                            } : null
                    }["SettingsModal[handleSave > setProfile()]"]);
                } else {
                    addToast(error, "error");
                }
                setSaving(false);
            }
        })["SettingsModal[handleSave]"];
        $[7] = addToast;
        $[8] = form;
        $[9] = user.id;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const handleSave = t6;
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "SettingsModal[handleAvatarClick]": ()=>{
                fileInputRef.current?.click();
            }
        })["SettingsModal[handleAvatarClick]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const handleAvatarClick = t7;
    let t8;
    if ($[12] !== addToast || $[13] !== user.id) {
        t8 = ({
            "SettingsModal[handleFileChange]": async (e)=>{
                const file = e.target.files?.[0];
                if (!file) {
                    return;
                }
                setSaving(true);
                const { data: url, error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$profile$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileService"].uploadAvatar(user.id, file);
                if (url) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$profile$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileService"].updateProfile(user.id, {
                        avatar_url: url
                    });
                    setProfile({
                        "SettingsModal[handleFileChange > setProfile()]": (prev_0)=>prev_0 ? {
                                ...prev_0,
                                avatar_url: url
                            } : null
                    }["SettingsModal[handleFileChange > setProfile()]"]);
                    addToast("Avatar updated", "success");
                } else {
                    if (error_0) {
                        addToast(error_0, "error");
                    }
                }
                setSaving(false);
            }
        })["SettingsModal[handleFileChange]"];
        $[12] = addToast;
        $[13] = user.id;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const handleFileChange = t8;
    let t9;
    if ($[15] !== addToast) {
        t9 = ({
            "SettingsModal[handleUnblock]": async (blockId)=>{
                const { error: error_1 } = await supabase.from("blocked_users").delete().eq("id", blockId);
                if (!error_1) {
                    setBlockedUsers({
                        "SettingsModal[handleUnblock > setBlockedUsers()]": (prev_1)=>prev_1.filter({
                                "SettingsModal[handleUnblock > setBlockedUsers() > prev_1.filter()]": (b)=>b.id !== blockId
                            }["SettingsModal[handleUnblock > setBlockedUsers() > prev_1.filter()]"])
                    }["SettingsModal[handleUnblock > setBlockedUsers()]"]);
                    addToast("User unblocked", "success");
                }
            }
        })["SettingsModal[handleUnblock]"];
        $[15] = addToast;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const handleUnblock = t9;
    let t10;
    if ($[17] !== form.gender) {
        t10 = ({
            "SettingsModal[getGlowColor]": ()=>{
                switch(form.gender?.toLowerCase()){
                    case "male":
                        {
                            return "from-[#00BFFF] to-transparent";
                        }
                    case "female":
                        {
                            return "from-[#FFB6C1] to-transparent";
                        }
                    case "other":
                        {
                            return "from-[#FFD700] to-transparent";
                        }
                    default:
                        {
                            return "from-primary/20 to-transparent";
                        }
                }
            }
        })["SettingsModal[getGlowColor]"];
        $[17] = form.gender;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    const getGlowColor = t10;
    const t11 = `absolute top-0 left-0 right-0 h-64 bg-gradient-to-b ${getGlowColor()} opacity-20 pointer-events-none transition-all duration-500`;
    let t12;
    if ($[19] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 rounded-2xl bg-white/5 border border-white/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                className: "w-6 h-6 text-primary"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                lineNumber: 305,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-black text-white italic uppercase tracking-tight",
                    children: [
                        "Identity ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary",
                            children: "&"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 312,
                            columnNumber: 145
                        }, this),
                        " Settings"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                    lineNumber: 312,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== onClose) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 pb-4 flex items-center justify-between relative z-10",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-white/40 hover:text-white transition-all shadow-lg",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                    lineNumber: 326,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[24] = onClose;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "SettingsModal[<button>.onClick]": ()=>setActiveTab("info")
        })["SettingsModal[<button>.onClick]"];
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    const t18 = `flex items-center gap-3 p-4 rounded-2xl transition-all border ${activeTab === "info" ? "bg-primary/10 border-primary/20 text-primary shadow-lg shadow-primary/5" : "bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10"}`;
    let t19;
    let t20;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-black text-[10px] uppercase tracking-[0.2em]",
            children: "Profile"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[27] = t19;
        $[28] = t20;
    } else {
        t19 = $[27];
        t20 = $[28];
    }
    let t21;
    if ($[29] !== t18) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t17,
            className: t18,
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[29] = t18;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "SettingsModal[<button>.onClick]": ()=>setActiveTab("settings")
        })["SettingsModal[<button>.onClick]"];
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    const t23 = `flex items-center gap-3 p-4 rounded-2xl transition-all border ${activeTab === "settings" ? "bg-primary/10 border-primary/20 text-primary shadow-lg shadow-primary/5" : "bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10"}`;
    let t24;
    let t25;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-black text-[10px] uppercase tracking-[0.2em]",
            children: "Options"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[32] = t24;
        $[33] = t25;
    } else {
        t24 = $[32];
        t25 = $[33];
    }
    let t26;
    if ($[34] !== t23) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t22,
            className: t23,
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[34] = t23;
        $[35] = t26;
    } else {
        t26 = $[35];
    }
    let t27;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "SettingsModal[<button>.onClick]": ()=>setActiveTab("blocked")
        })["SettingsModal[<button>.onClick]"];
        $[36] = t27;
    } else {
        t27 = $[36];
    }
    const t28 = `flex items-center gap-3 p-4 rounded-2xl transition-all border ${activeTab === "blocked" ? "bg-secondary/10 border-secondary/20 text-secondary shadow-lg shadow-secondary/5" : "bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10"}`;
    let t29;
    let t30;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 403,
            columnNumber: 11
        }, this);
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-black text-[10px] uppercase tracking-[0.2em]",
            children: "Ghosts"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[37] = t29;
        $[38] = t30;
    } else {
        t29 = $[37];
        t30 = $[38];
    }
    let t31;
    if ($[39] !== t28) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t27,
            className: t28,
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[39] = t28;
        $[40] = t31;
    } else {
        t31 = $[40];
    }
    let t32;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[41] = t32;
    } else {
        t32 = $[41];
    }
    let t33;
    if ($[42] !== logout || $[43] !== t.logout) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: logout,
            className: "w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-secondary opacity-80 hover:opacity-100 transition-all text-black font-black uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10",
            children: [
                t32,
                t.logout
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        $[42] = logout;
        $[43] = t.logout;
        $[44] = t33;
    } else {
        t33 = $[44];
    }
    let t34;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-[9px] font-black text-white/20 mt-4 tracking-[0.3em] uppercase",
            children: "GOSSIP v1.2.0 • Web"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[45] = t34;
    } else {
        t34 = $[45];
    }
    let t35;
    if ($[46] !== t33) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-auto pt-8",
            children: [
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[46] = t33;
        $[47] = t35;
    } else {
        t35 = $[47];
    }
    let t36;
    if ($[48] !== t21 || $[49] !== t26 || $[50] !== t31 || $[51] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 md:w-48",
            children: [
                t21,
                t26,
                t31,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[48] = t21;
        $[49] = t26;
        $[50] = t31;
        $[51] = t35;
        $[52] = t36;
    } else {
        t36 = $[52];
    }
    let t37;
    if ($[53] !== activeTab || $[54] !== form.age || $[55] !== form.bio || $[56] !== form.full_name || $[57] !== form.gender || $[58] !== form.username || $[59] !== getGlowColor || $[60] !== handleFileChange || $[61] !== handleSave || $[62] !== profile?.avatar_url || $[63] !== profile?.full_name || $[64] !== profile?.username || $[65] !== saving || $[66] !== t || $[67] !== user.user_metadata?.avatar_url) {
        t37 = activeTab === "info" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8 animate-in fade-in slide-in-from-right-4 duration-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 h-32 rounded-[40px] p-1 bg-gradient-to-br from-primary via-white/10 to-secondary shadow-2xl relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute inset-0 bg-gradient-to-br ${getGlowColor()} opacity-40 blur-xl group-hover:opacity-60 transition-opacity`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 463,
                                            columnNumber: 337
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            src: profile?.avatar_url || user.user_metadata?.avatar_url,
                                            fallback: profile?.username?.[0] || "?",
                                            className: "w-full h-full rounded-[36px] relative z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 463,
                                            columnNumber: 472
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 463,
                                    columnNumber: 198
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAvatarClick,
                                    className: "absolute -bottom-2 -right-2 p-3 bg-primary text-black rounded-2xl shadow-xl hover:scale-110 transition-transform z-20 border-4 border-black",
                                    disabled: saving,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                        lineNumber: 463,
                                        columnNumber: 850
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 463,
                                    columnNumber: 644
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    ref: fileInputRef,
                                    className: "hidden",
                                    onChange: handleFileChange,
                                    accept: "image/*"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 463,
                                    columnNumber: 889
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 463,
                            columnNumber: 166
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$gradient$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientText"], {
                                    text: profile?.full_name || "NEW GOSSIPER",
                                    className: "text-3xl font-black italic uppercase tracking-tighter"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 463,
                                    columnNumber: 1028
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/30 text-[10px] font-black tracking-[0.3em] uppercase mt-1",
                                    children: [
                                        "@",
                                        profile?.username || "unknown"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 463,
                                    columnNumber: 1154
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 463,
                            columnNumber: 999
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                    lineNumber: 463,
                    columnNumber: 116
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-black text-white/30 uppercase tracking-widest ml-4",
                                    children: t.fullName
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 463,
                                    columnNumber: 1369
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: form.full_name,
                                    onChange: {
                                        "SettingsModal[<input>.onChange]": (e_0)=>setForm({
                                                "SettingsModal[<input>.onChange > setForm()]": (f)=>({
                                                        ...f,
                                                        full_name: e_0.target.value
                                                    })
                                            }["SettingsModal[<input>.onChange > setForm()]"])
                                    }["SettingsModal[<input>.onChange]"],
                                    className: "w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-primary/50 transition-all outline-none",
                                    placeholder: "Enter full name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 463,
                                    columnNumber: 1476
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 463,
                            columnNumber: 1342
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-black text-white/30 uppercase tracking-widest ml-4",
                                    children: t.username
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 470,
                                    columnNumber: 256
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: form.username,
                                    onChange: {
                                        "SettingsModal[<input>.onChange]": (e_1)=>setForm({
                                                "SettingsModal[<input>.onChange > setForm()]": (f_0)=>({
                                                        ...f_0,
                                                        username: e_1.target.value
                                                    })
                                            }["SettingsModal[<input>.onChange > setForm()]"])
                                    }["SettingsModal[<input>.onChange]"],
                                    className: "w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-primary/50 transition-all outline-none",
                                    placeholder: "username"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 470,
                                    columnNumber: 363
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 470,
                            columnNumber: 229
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-black text-white/30 uppercase tracking-widest ml-4",
                                    children: t.gender
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 477,
                                    columnNumber: 249
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: [
                                        "Male",
                                        "Female",
                                        "Other"
                                    ].map({
                                        "SettingsModal[(anonymous)()]": (g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "SettingsModal[(anonymous)() > <button>.onClick]": ()=>setForm({
                                                            "SettingsModal[(anonymous)() > <button>.onClick > setForm()]": (f_1)=>({
                                                                    ...f_1,
                                                                    gender: g
                                                                })
                                                        }["SettingsModal[(anonymous)() > <button>.onClick > setForm()]"])
                                                }["SettingsModal[(anonymous)() > <button>.onClick]"],
                                                className: `p-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border ${form.gender === g ? "bg-primary text-black border-primary" : "bg-white/5 text-white/30 border-white/5 hover:border-white/10"}`,
                                                children: t[g.toLowerCase()]
                                            }, g, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                lineNumber: 478,
                                                columnNumber: 52
                                            }, this)
                                    }["SettingsModal[(anonymous)()]"])
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 477,
                                    columnNumber: 354
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 477,
                            columnNumber: 222
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-black text-white/30 uppercase tracking-widest ml-4",
                                    children: t.age
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 486,
                                    columnNumber: 87
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: form.age,
                                    onChange: {
                                        "SettingsModal[<input>.onChange]": (e_2)=>setForm({
                                                "SettingsModal[<input>.onChange > setForm()]": (f_2)=>({
                                                        ...f_2,
                                                        age: e_2.target.value
                                                    })
                                            }["SettingsModal[<input>.onChange > setForm()]"])
                                    }["SettingsModal[<input>.onChange]"],
                                    className: "w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-primary/50 transition-all outline-none",
                                    placeholder: "25",
                                    type: "number"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 486,
                                    columnNumber: 189
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 486,
                            columnNumber: 60
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[10px] font-black text-white/30 uppercase tracking-widest ml-4",
                                    children: t.bio
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 493,
                                    columnNumber: 271
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: form.bio,
                                    onChange: {
                                        "SettingsModal[<textarea>.onChange]": (e_3)=>setForm({
                                                "SettingsModal[<textarea>.onChange > setForm()]": (f_3)=>({
                                                        ...f_3,
                                                        bio: e_3.target.value
                                                    })
                                            }["SettingsModal[<textarea>.onChange > setForm()]"])
                                    }["SettingsModal[<textarea>.onChange]"],
                                    className: "w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-primary/50 transition-all outline-none h-24 resize-none",
                                    placeholder: "Tell Your Story..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 493,
                                    columnNumber: 373
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 493,
                            columnNumber: 230
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                    lineNumber: 463,
                    columnNumber: 1287
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSave,
                    disabled: saving,
                    className: "w-full py-5 bg-gradient-to-r from-primary to-primary-dark text-black font-black uppercase italic tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/10 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 active:scale-95",
                    children: [
                        saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-5 h-5 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 500,
                            columnNumber: 570
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 500,
                            columnNumber: 617
                        }, this),
                        t.save
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                    lineNumber: 500,
                    columnNumber: 258
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 463,
            columnNumber: 35
        }, this);
        $[53] = activeTab;
        $[54] = form.age;
        $[55] = form.bio;
        $[56] = form.full_name;
        $[57] = form.gender;
        $[58] = form.username;
        $[59] = getGlowColor;
        $[60] = handleFileChange;
        $[61] = handleSave;
        $[62] = profile?.avatar_url;
        $[63] = profile?.full_name;
        $[64] = profile?.username;
        $[65] = saving;
        $[66] = t;
        $[67] = user.user_metadata?.avatar_url;
        $[68] = t37;
    } else {
        t37 = $[68];
    }
    let t38;
    if ($[69] !== activeTab || $[70] !== language || $[71] !== notificationsEnabled || $[72] !== t.language || $[73] !== t.notifications) {
        t38 = activeTab === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 animate-in fade-in slide-in-from-right-4 duration-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 rounded-3xl bg-white/5 border border-white/10 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-primary/10 rounded-2xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                className: "w-5 h-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                lineNumber: 522,
                                                columnNumber: 336
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 522,
                                            columnNumber: 289
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-black uppercase text-white tracking-widest",
                                                    children: t.notifications
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 388
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] font-bold text-white/30 uppercase tracking-widest",
                                                    children: "Real-time alerts"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 484
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 522,
                                            columnNumber: 383
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 522,
                                    columnNumber: 248
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "SettingsModal[<button>.onClick]": ()=>setNotificationsEnabled(!notificationsEnabled)
                                    }["SettingsModal[<button>.onClick]"],
                                    className: `w-14 h-8 rounded-full relative transition-all duration-300 ${notificationsEnabled ? "bg-primary" : "bg-white/10"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${notificationsEnabled ? "left-7 shadow-lg shadow-black/20" : "left-1"}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                        lineNumber: 524,
                                        columnNumber: 177
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 522,
                                    columnNumber: 592
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 522,
                            columnNumber: 197
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-secondary/10 rounded-2xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                                className: "w-5 h-5 text-secondary"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                lineNumber: 524,
                                                columnNumber: 499
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 524,
                                            columnNumber: 450
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-black uppercase text-white tracking-widest",
                                                    children: t.language
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 558
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] font-bold text-white/30 uppercase tracking-widest",
                                                    children: "Tamil & English supported"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 649
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 524,
                                            columnNumber: 553
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 524,
                                    columnNumber: 409
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: language,
                                    onChange: {
                                        "SettingsModal[<select>.onChange]": (e_4)=>setLanguage(e_4.target.value)
                                    }["SettingsModal[<select>.onChange]"],
                                    className: "bg-white/10 border-none rounded-xl p-3 text-[10px] font-black text-white uppercase tracking-widest outline-none cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "English",
                                            className: "bg-black",
                                            children: "English"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 526,
                                            columnNumber: 189
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Tamil",
                                            className: "bg-black",
                                            children: "Tamil"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 526,
                                            columnNumber: 250
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 524,
                                    columnNumber: 770
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 524,
                            columnNumber: 358
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-white/5 rounded-2xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "w-5 h-5 text-white/40"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                lineNumber: 526,
                                                columnNumber: 458
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 526,
                                            columnNumber: 414
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-black uppercase text-white tracking-widest",
                                                    children: "Last Seen"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 510
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] font-bold text-white/30 uppercase tracking-widest",
                                                    children: "Privacy control"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 598
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 526,
                                            columnNumber: 505
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 526,
                                    columnNumber: 373
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-14 h-8 rounded-full bg-primary relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1 left-7 w-6 h-6 bg-white rounded-full shadow-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                        lineNumber: 526,
                                        columnNumber: 767
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 526,
                                    columnNumber: 705
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 526,
                            columnNumber: 322
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                    lineNumber: 522,
                    columnNumber: 120
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 rounded-3xl bg-secondary/10 border border-secondary/20 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "w-6 h-6 text-secondary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 526,
                                    columnNumber: 1020
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-black text-secondary uppercase tracking-widest leading-loose",
                                    children: [
                                        "End-to-End Encryption",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 526,
                                            columnNumber: 1179
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/40",
                                            children: "Verified & Active"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 526,
                                            columnNumber: 1185
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 526,
                                    columnNumber: 1065
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 526,
                            columnNumber: 979
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5 text-secondary opacity-40"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 526,
                            columnNumber: 1255
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                    lineNumber: 526,
                    columnNumber: 869
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 522,
            columnNumber: 39
        }, this);
        $[69] = activeTab;
        $[70] = language;
        $[71] = notificationsEnabled;
        $[72] = t.language;
        $[73] = t.notifications;
        $[74] = t38;
    } else {
        t38 = $[74];
    }
    let t39;
    if ($[75] !== activeTab || $[76] !== blockedUsers || $[77] !== handleUnblock || $[78] !== loading) {
        t39 = activeTab === "blocked" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 animate-in fade-in slide-in-from-right-4 duration-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 rounded-3xl bg-white/5 border border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[11px] font-black text-white/40 uppercase tracking-[0.2em] mb-6",
                        children: "Blocked Manifest"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                        lineNumber: 538,
                        columnNumber: 186
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center p-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-8 h-8 animate-spin text-primary"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                            lineNumber: 538,
                            columnNumber: 367
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                        lineNumber: 538,
                        columnNumber: 303
                    }, this) : blockedUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center p-12 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-white/5 rounded-full border border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                                    className: "w-10 h-10 text-white/20"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 538,
                                    columnNumber: 603
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                lineNumber: 538,
                                columnNumber: 535
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold text-white/20 uppercase tracking-widest italic text-center",
                                children: "Your ghost list is empty"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                lineNumber: 538,
                                columnNumber: 654
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                        lineNumber: 538,
                        columnNumber: 461
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: blockedUsers.map({
                            "SettingsModal[blockedUsers.map()]": (block)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between bg-black/40 p-3 rounded-2xl border border-white/5 group hover:border-white/20 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                    src: block.blocked?.avatar_url,
                                                    fallback: block.blocked?.username?.[0] || "?",
                                                    className: "w-10 h-10 rounded-xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 259
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[13px] font-black text-white uppercase tracking-tight",
                                                            children: block.blocked?.username || "Unknown Entity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 386
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]",
                                                            children: "Restricted Access"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 509
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 381
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 539,
                                            columnNumber: 218
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "SettingsModal[blockedUsers.map() > <button>.onClick]": ()=>handleUnblock(block.id)
                                            }["SettingsModal[blockedUsers.map() > <button>.onClick]"],
                                            className: "flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary text-secondary hover:text-black rounded-xl transition-all font-black text-[9px] uppercase tracking-widest",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 261
                                                }, this),
                                                "Restore"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                            lineNumber: 539,
                                            columnNumber: 619
                                        }, this)
                                    ]
                                }, block.id, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                                    lineNumber: 539,
                                    columnNumber: 59
                                }, this)
                        }["SettingsModal[blockedUsers.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                        lineNumber: 538,
                        columnNumber: 783
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                lineNumber: 538,
                columnNumber: 119
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 538,
            columnNumber: 38
        }, this);
        $[75] = activeTab;
        $[76] = blockedUsers;
        $[77] = handleUnblock;
        $[78] = loading;
        $[79] = t39;
    } else {
        t39 = $[79];
    }
    let t40;
    if ($[80] !== t37 || $[81] !== t38 || $[82] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: [
                t37,
                t38,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 553,
            columnNumber: 11
        }, this);
        $[80] = t37;
        $[81] = t38;
        $[82] = t39;
        $[83] = t40;
    } else {
        t40 = $[83];
    }
    let t41;
    if ($[84] !== t36 || $[85] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto custom-scrollbar p-8 pt-0 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-8",
                children: [
                    t36,
                    t40
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                lineNumber: 563,
                columnNumber: 91
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 563,
            columnNumber: 11
        }, this);
        $[84] = t36;
        $[85] = t40;
        $[86] = t41;
    } else {
        t41 = $[86];
    }
    let t42;
    if ($[87] !== t12 || $[88] !== t16 || $[89] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black border border-white/10 w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]",
                children: [
                    t12,
                    t16,
                    t41
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
                lineNumber: 572,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/settings-modal.tsx",
            lineNumber: 572,
            columnNumber: 11
        }, this);
        $[87] = t12;
        $[88] = t16;
        $[89] = t41;
        $[90] = t42;
    } else {
        t42 = $[90];
    }
    return t42;
}
_s(SettingsModal, "Dq7mO29GwMKJhAZrHw6VkAHXALk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = SettingsModal;
var _c;
__turbopack_context__.k.register(_c, "SettingsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/components/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$user$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/user-search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$connection$2d$requests$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/connection-requests.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$settings$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/settings-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$status$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/status-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$gradient$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/gradient-text.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
function Sidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(106);
    if ($[0] !== "91a931c85f96cfd926389056f868497c7433b7b821fe1270712a20bf171a85c7") {
        for(let $i = 0; $i < 106; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91a931c85f96cfd926389056f868497c7433b7b821fe1270712a20bf171a85c7";
    }
    const { user } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [rooms, setRooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [showSearch, setShowSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRequests, setShowRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingCount, setPendingCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = new Set();
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const [blockedIds, setBlockedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const { statuses } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$status$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatus"])();
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const supabase = t4;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t5;
    if ($[5] !== searchParams) {
        t5 = searchParams.get("roomId");
        $[5] = searchParams;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const currentRoomId = t5;
    let t6;
    let t7;
    if ($[7] !== user) {
        t6 = ({
            "Sidebar[useEffect()]": ()=>{
                const fetchRooms = {
                    "Sidebar[useEffect() > fetchRooms]": async ()=>{
                        const { data } = await supabase.from("rooms").select("\n                    *,\n                    room_participants(\n                        user_id,\n                        profiles(username, full_name, avatar_url, gender)\n                    )\n                ").order("updated_at", {
                            ascending: false
                        });
                        if (data) {
                            setRooms(data);
                        }
                    }
                }["Sidebar[useEffect() > fetchRooms]"];
                const fetchPendingCount = {
                    "Sidebar[useEffect() > fetchPendingCount]": async ()=>{
                        const { count } = await supabase.from("connections").select("*", {
                            count: "exact",
                            head: true
                        }).eq("addressee_id", user?.id).eq("status", "pending");
                        setPendingCount(count || 0);
                        const { data: matchesData } = await supabase.from("connections").select("\n                    *,\n                    requester:profiles!requester_id(username, avatar_url, full_name, gender),\n                    addressee:profiles!addressee_id(username, avatar_url, full_name, gender)\n                ").or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`).eq("status", "accepted").limit(10);
                        if (matchesData) {
                            setMatches(matchesData);
                        }
                        const { data: blocks } = await supabase.from("blocked_users").select("blocked_id").eq("blocker_id", user.id);
                        if (blocks) {
                            setBlockedIds(new Set(blocks.map(_SidebarUseEffectFetchPendingCountBlocksMap)));
                        }
                    }
                }["Sidebar[useEffect() > fetchPendingCount]"];
                if (user) {
                    fetchRooms();
                    fetchPendingCount();
                }
                const roomChannel = supabase.channel("rooms_realtime").on("postgres_changes", {
                    event: "*",
                    schema: "public",
                    table: "rooms"
                }, {
                    "Sidebar[useEffect() > (anonymous)()]": ()=>fetchRooms()
                }["Sidebar[useEffect() > (anonymous)()]"]).subscribe();
                const connectionChannel = supabase.channel("connections_sidebar").on("postgres_changes", {
                    event: "*",
                    schema: "public",
                    table: "connections"
                }, {
                    "Sidebar[useEffect() > (anonymous)()]": ()=>fetchPendingCount()
                }["Sidebar[useEffect() > (anonymous)()]"]).subscribe();
                return ()=>{
                    supabase.removeChannel(roomChannel);
                    supabase.removeChannel(connectionChannel);
                };
            }
        })["Sidebar[useEffect()]"];
        t7 = [
            user,
            supabase
        ];
        $[7] = user;
        $[8] = t6;
        $[9] = t7;
    } else {
        t6 = $[8];
        t7 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[10] !== router) {
        t8 = ({
            "Sidebar[handleLogout]": async ()=>{
                await supabase.auth.signOut();
                router.push("/login");
            }
        })["Sidebar[handleLogout]"];
        $[10] = router;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const handleLogout = t8;
    const getNameColor = _SidebarGetNameColor;
    const formatTime = _SidebarFormatTime;
    let t10;
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$gradient$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientText"], {
                    text: "GOSSIP.",
                    className: "text-[32px] font-[900] tracking-[0.5px]"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 206,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/gossip_header_doodle.png",
                    alt: "Gossip Doodle",
                    className: "w-[50px] h-[50px] object-contain -mt-2 opacity-80"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 206,
                    columnNumber: 134
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 206,
            columnNumber: 10
        }, this);
        t10 = ({
            "Sidebar[<button>.onClick]": ()=>setShowRequests(true)
        })["Sidebar[<button>.onClick]"];
        $[12] = t10;
        $[13] = t9;
    } else {
        t10 = $[12];
        t9 = $[13];
    }
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "data:image/svg+xml;base64,...",
            alt: "",
            className: "hidden"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[28px] h-[28px]",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                            lineNumber: 225,
                            columnNumber: 222
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                            lineNumber: 225,
                            columnNumber: 276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 225,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== pendingCount) {
        t13 = pendingCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-red-500 border-2 border-black flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white text-[10px] font-[900]",
                children: pendingCount
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 232,
                columnNumber: 174
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 232,
            columnNumber: 31
        }, this);
        $[16] = pendingCount;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-1",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t10,
                    className: "relative p-1",
                    children: [
                        t12,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 240,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[18] = t13;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[13px] text-[#888] font-medium mt-1",
            children: "Connect, share, and whisper in style."
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-[20px] pt-[10px] pb-[15px]",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[21] = t14;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "w-5 h-5 text-[#666]"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-[20px] mb-[15px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#111] h-[48px] rounded-[24px] flex items-center px-[15px] gap-3 border border-[#222]",
                children: [
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Search friends or gossip...",
                        className: "bg-transparent border-none outline-none text-[15px] w-full placeholder-[#666] text-white font-normal",
                        readOnly: true,
                        onClick: {
                            "Sidebar[<input>.onClick]": ()=>setShowSearch(true)
                        }["Sidebar[<input>.onClick]"]
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                        lineNumber: 270,
                        columnNumber: 159
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 270,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[11px] font-[800] tracking-[1.5px] text-[#444] mb-4 uppercase ml-1",
            children: "VIBES"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] !== router) {
        t20 = ({
            "Sidebar[<button>.onClick]": ()=>router.push("/chat/status")
        })["Sidebar[<button>.onClick]"];
        $[26] = router;
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    const t21 = user?.user_metadata?.avatar_url;
    const t22 = user?.email?.[0] || "?";
    let t23;
    if ($[28] !== t21 || $[29] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
            src: t21,
            fallback: t22,
            className: "w-[58px] h-[58px] rounded-full border-2 border-[#333] opacity-50"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[28] = t21;
        $[29] = t22;
        $[30] = t23;
    } else {
        t23 = $[30];
    }
    let t24;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 right-0 w-[20px] h-[20px] bg-[#00BFFF] rounded-full flex items-center justify-center border-2 border-black",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                className: "w-[12px] h-[12px] text-black",
                strokeWidth: 3
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 307,
                columnNumber: 153
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[31] = t24;
    } else {
        t24 = $[31];
    }
    let t25;
    if ($[32] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[32] = t23;
        $[33] = t25;
    } else {
        t25 = $[33];
    }
    let t26;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] font-bold text-white/60",
            children: "Your Vibe"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[34] = t26;
    } else {
        t26 = $[34];
    }
    let t27;
    if ($[35] !== t20 || $[36] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t20,
            className: "flex flex-col items-center gap-3 min-w-[58px]",
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[35] = t20;
        $[36] = t25;
        $[37] = t27;
    } else {
        t27 = $[37];
    }
    let t28;
    if ($[38] !== statuses || $[39] !== user.id) {
        let t29;
        if ($[41] !== user.id) {
            t29 = ({
                "Sidebar[statuses.filter()]": (s)=>s.user_id !== user.id
            })["Sidebar[statuses.filter()]"];
            $[41] = user.id;
            $[42] = t29;
        } else {
            t29 = $[42];
        }
        t28 = Array.from(new Set(statuses.filter(t29).map(_SidebarAnonymous)));
        $[38] = statuses;
        $[39] = user.id;
        $[40] = t28;
    } else {
        t28 = $[40];
    }
    let t29;
    if ($[43] !== router || $[44] !== statuses || $[45] !== t28) {
        t29 = t28.map({
            "Sidebar[(anonymous)()]": (userId)=>{
                const status = statuses.find({
                    "Sidebar[(anonymous)() > statuses.find()]": (s_1)=>s_1.user_id === userId
                }["Sidebar[(anonymous)() > statuses.find()]"]);
                if (!status || !status.profiles) {
                    return null;
                }
                const profile = status.profiles;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Sidebar[(anonymous)() > <button>.onClick]": ()=>router.push("/chat/status")
                    }["Sidebar[(anonymous)() > <button>.onClick]"],
                    className: "flex flex-col items-center gap-3 min-w-[58px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative p-[2px] rounded-full bg-gradient-to-tr from-[#00BFFF] to-[#FFB6C1]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-[2px] bg-black rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                    src: profile.avatar_url,
                                    fallback: profile.username?.[0] || "?",
                                    className: "w-[50px] h-[50px]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                    lineNumber: 368,
                                    columnNumber: 255
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                lineNumber: 368,
                                columnNumber: 208
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                            lineNumber: 368,
                            columnNumber: 115
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-black text-center truncate w-full text-white tracking-tight uppercase",
                            children: profile.username
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                            lineNumber: 368,
                            columnNumber: 372
                        }, this)
                    ]
                }, userId, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 366,
                    columnNumber: 16
                }, this);
            }
        }["Sidebar[(anonymous)()]"]);
        $[43] = router;
        $[44] = statuses;
        $[45] = t28;
        $[46] = t29;
    } else {
        t29 = $[46];
    }
    let t30;
    if ($[47] !== t27 || $[48] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#111] border border-[#222] rounded-[35px] p-5",
                children: [
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-5 overflow-x-auto pb-2 scrollbar-hide",
                        children: [
                            t27,
                            t29
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                        lineNumber: 380,
                        columnNumber: 110
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 380,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[47] = t27;
        $[48] = t29;
        $[49] = t30;
    } else {
        t30 = $[49];
    }
    let t31;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 pt-5 pb-2 flex items-center gap-[10px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[11px] font-[800] tracking-[1.5px] text-[#444] uppercase",
                children: "RECENT GOSSIPS"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 389,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[50] = t31;
    } else {
        t31 = $[50];
    }
    let t32;
    if ($[51] !== blockedIds || $[52] !== currentRoomId || $[53] !== rooms || $[54] !== user.id) {
        let t33;
        if ($[56] !== blockedIds || $[57] !== user.id) {
            t33 = ({
                "Sidebar[rooms.filter()]": (room)=>{
                    const other = room.room_participants?.find({
                        "Sidebar[rooms.filter() > (anonymous)()]": (p)=>p.user_id !== user?.id
                    }["Sidebar[rooms.filter() > (anonymous)()]"]);
                    if (other && blockedIds.has(other.user_id)) {
                        return false;
                    }
                    return true;
                }
            })["Sidebar[rooms.filter()]"];
            $[56] = blockedIds;
            $[57] = user.id;
            $[58] = t33;
        } else {
            t33 = $[58];
        }
        let t34;
        if ($[59] !== currentRoomId || $[60] !== user.id) {
            t34 = ({
                "Sidebar[(anonymous)()]": (room_0)=>{
                    let displayName = room_0.name || "UNNAMED CHAT";
                    let displayAvatar = undefined;
                    let isOnline = false;
                    let gender_0 = undefined;
                    if (room_0.room_participants) {
                        const other_0 = room_0.room_participants.find({
                            "Sidebar[(anonymous)() > room_0.room_participants.find()]": (p_0)=>p_0.user_id !== user?.id
                        }["Sidebar[(anonymous)() > room_0.room_participants.find()]"]);
                        if (other_0 && other_0.profiles) {
                            displayName = (other_0.profiles.full_name || other_0.profiles.username || "Unknown User").toUpperCase();
                            displayAvatar = other_0.profiles.avatar_url;
                            isOnline = true;
                            gender_0 = other_0.profiles.gender;
                        }
                    }
                    const isActive = currentRoomId === room_0.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/chat?roomId=${room_0.id}`,
                        className: "block group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6 py-3 transition-all cursor-pointer flex items-center gap-4", isActive ? "bg-primary/10" : "hover:bg-white/[0.03]"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            src: displayAvatar,
                                            fallback: displayName[0] || "?",
                                            className: "w-[58px] h-[58px] rounded-full ring-2 ring-white/5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                            lineNumber: 435,
                                            columnNumber: 266
                                        }, this),
                                        isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-0 right-1 w-4 h-4 bg-online border-[3px] border-black rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                            lineNumber: 435,
                                            columnNumber: 405
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                    lineNumber: 435,
                                    columnNumber: 240
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden flex-1 border-b border-white/5 pb-3 group-last:border-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[16px] font-black tracking-tight truncate",
                                                    style: {
                                                        color: getNameColor(gender_0)
                                                    },
                                                    children: displayName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 663
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-bold text-white/20",
                                                    children: formatTime(room_0.updated_at)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                            lineNumber: 435,
                                            columnNumber: 607
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs truncate flex-1 pr-2 font-medium", isActive ? "text-primary/70" : "text-white/30"),
                                                children: room_0.last_message || "Started a gossip..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                                lineNumber: 437,
                                                columnNumber: 182
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                            lineNumber: 437,
                                            columnNumber: 131
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                    lineNumber: 435,
                                    columnNumber: 515
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                            lineNumber: 435,
                            columnNumber: 99
                        }, this)
                    }, room_0.id, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                        lineNumber: 435,
                        columnNumber: 18
                    }, this);
                }
            })["Sidebar[(anonymous)()]"];
            $[59] = currentRoomId;
            $[60] = user.id;
            $[61] = t34;
        } else {
            t34 = $[61];
        }
        t32 = rooms.filter(t33).map(t34);
        $[51] = blockedIds;
        $[52] = currentRoomId;
        $[53] = rooms;
        $[54] = user.id;
        $[55] = t32;
    } else {
        t32 = $[55];
    }
    let t33;
    if ($[62] !== rooms.length) {
        t33 = rooms.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center p-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                    className: "w-12 h-12 text-white/10 mb-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 457,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-white/30 font-bold uppercase tracking-widest italic",
                    children: "No gossips yet"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 457,
                    columnNumber: 167
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 457,
            columnNumber: 33
        }, this);
        $[62] = rooms.length;
        $[63] = t33;
    } else {
        t33 = $[63];
    }
    let t34;
    if ($[64] !== t32 || $[65] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 px-4 mb-4 min-h-0 flex flex-col",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#111] border border-[#222] rounded-[35px] flex-1 flex flex-col overflow-hidden",
                children: [
                    t31,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto custom-scrollbar p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                t32,
                                t33
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                            lineNumber: 465,
                            columnNumber: 233
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                        lineNumber: 465,
                        columnNumber: 172
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 465,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, this);
        $[64] = t32;
        $[65] = t33;
        $[66] = t34;
    } else {
        t34 = $[66];
    }
    const t35 = user?.user_metadata?.avatar_url;
    const t36 = user?.email || "?";
    let t37;
    if ($[67] !== t35 || $[68] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
            src: t35,
            fallback: t36,
            className: "w-10 h-10 ring-2 ring-white/10 shadow-lg"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        $[67] = t35;
        $[68] = t36;
        $[69] = t37;
    } else {
        t37 = $[69];
    }
    let t38;
    if ($[70] !== user.email || $[71] !== user.user_metadata?.username) {
        t38 = user?.user_metadata?.username || user?.email?.split("@")[0];
        $[70] = user.email;
        $[71] = user.user_metadata?.username;
        $[72] = t38;
    } else {
        t38 = $[72];
    }
    let t39;
    if ($[73] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[13px] font-black truncate text-white uppercase tracking-tight",
            children: t38
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, this);
        $[73] = t38;
        $[74] = t39;
    } else {
        t39 = $[74];
    }
    let t40;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] font-bold text-primary flex items-center gap-1 uppercase tracking-widest",
            children: "Online"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 502,
            columnNumber: 11
        }, this);
        $[75] = t40;
    } else {
        t40 = $[75];
    }
    let t41;
    if ($[76] !== t39) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-hidden",
            children: [
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 509,
            columnNumber: 11
        }, this);
        $[76] = t39;
        $[77] = t41;
    } else {
        t41 = $[77];
    }
    let t42;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = ({
            "Sidebar[<button>.onClick]": ()=>setShowSettings(true)
        })["Sidebar[<button>.onClick]"];
        $[78] = t42;
    } else {
        t42 = $[78];
    }
    let t43;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t42,
            className: "text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 526,
                columnNumber: 126
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[79] = t43;
    } else {
        t43 = $[79];
    }
    let t44;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[80] = t44;
    } else {
        t44 = $[80];
    }
    let t45;
    if ($[81] !== handleLogout) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1",
            children: [
                t43,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLogout,
                    className: "text-white/40 hover:text-secondary transition-colors p-2 hover:bg-white/5 rounded-xl",
                    children: t44
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 540,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 540,
            columnNumber: 11
        }, this);
        $[81] = handleLogout;
        $[82] = t45;
    } else {
        t45 = $[82];
    }
    let t46;
    if ($[83] !== t37 || $[84] !== t41 || $[85] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-t border-white/5 bg-black/80 backdrop-blur-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    t37,
                    t41,
                    t45
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 548,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[83] = t37;
        $[84] = t41;
        $[85] = t45;
        $[86] = t46;
    } else {
        t46 = $[86];
    }
    let t47;
    if ($[87] !== t16 || $[88] !== t30 || $[89] !== t34 || $[90] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-full h-full bg-black text-foreground flex flex-col font-sans overflow-hidden",
            children: [
                t16,
                t18,
                t30,
                t34,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 558,
            columnNumber: 11
        }, this);
        $[87] = t16;
        $[88] = t30;
        $[89] = t34;
        $[90] = t46;
        $[91] = t47;
    } else {
        t47 = $[91];
    }
    let t48;
    if ($[92] !== showSearch || $[93] !== user.id) {
        t48 = showSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$user$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserSearch"], {
            onClose: {
                "Sidebar[<UserSearch>.onClose]": ()=>setShowSearch(false)
            }["Sidebar[<UserSearch>.onClose]"],
            currentUserId: user?.id
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 569,
            columnNumber: 25
        }, this);
        $[92] = showSearch;
        $[93] = user.id;
        $[94] = t48;
    } else {
        t48 = $[94];
    }
    let t49;
    if ($[95] !== showRequests || $[96] !== user.id) {
        t49 = showRequests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$connection$2d$requests$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionRequests"], {
            onClose: {
                "Sidebar[<ConnectionRequests>.onClose]": ()=>setShowRequests(false)
            }["Sidebar[<ConnectionRequests>.onClose]"],
            currentUserId: user?.id
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 580,
            columnNumber: 27
        }, this);
        $[95] = showRequests;
        $[96] = user.id;
        $[97] = t49;
    } else {
        t49 = $[97];
    }
    let t50;
    if ($[98] !== showSettings || $[99] !== user) {
        t50 = showSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$settings$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsModal"], {
            onClose: {
                "Sidebar[<SettingsModal>.onClose]": ()=>setShowSettings(false)
            }["Sidebar[<SettingsModal>.onClose]"],
            user: user
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 591,
            columnNumber: 27
        }, this);
        $[98] = showSettings;
        $[99] = user;
        $[100] = t50;
    } else {
        t50 = $[100];
    }
    let t51;
    if ($[101] !== t47 || $[102] !== t48 || $[103] !== t49 || $[104] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t47,
                t48,
                t49,
                t50
            ]
        }, void 0, true);
        $[101] = t47;
        $[102] = t48;
        $[103] = t49;
        $[104] = t50;
        $[105] = t51;
    } else {
        t51 = $[105];
    }
    return t51;
}
_s(Sidebar, "RK1+ev1FQP62nlONXJKfJf4CfbI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$status$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStatus"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Sidebar;
function _SidebarAnonymous(s_0) {
    return s_0.user_id;
}
function _SidebarFormatTime(dateStr) {
    if (!dateStr) {
        return "";
    }
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) {
        return "Just now";
    }
    if (minutes < 60) {
        return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours}h`;
    }
    return date.toLocaleDateString([], {
        month: "short",
        day: "numeric"
    });
}
function _SidebarGetNameColor(gender) {
    switch(gender?.toLowerCase()){
        case "male":
            {
                return "#00BFFF";
            }
        case "female":
            {
                return "#FFB6C1";
            }
        case "other":
            {
                return "#FFD700";
            }
        default:
            {
                return "#FFF";
            }
    }
}
function _SidebarUseEffectFetchPendingCountBlocksMap(b) {
    return b.blocked_id;
}
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/app/chat/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$chat$2d$window$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/chat-window.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/sidebar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ChatContent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "d70ded34ce793ca1ee5564a1b5ebd2b2f7a3d772a246e41f673b8ad92c2be5a5") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d70ded34ce793ca1ee5564a1b5ebd2b2f7a3d772a246e41f673b8ad92c2be5a5";
    }
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("roomId");
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const roomId = t0;
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const supabase = t1;
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ChatContent[useEffect()]": ()=>{
                supabase.auth.getUser().then({
                    "ChatContent[useEffect() > (anonymous)()]": (t4)=>{
                        const { data: t5 } = t4;
                        const { user: user_0 } = t5;
                        return setUser(user_0);
                    }
                }["ChatContent[useEffect() > (anonymous)()]"]);
            }
        })["ChatContent[useEffect()]"];
        t3 = [
            supabase.auth
        ];
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!user) {
        return null;
    }
    if (!roomId) {
        let t4;
        if ($[6] !== user) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                user: user
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/chat/page.tsx",
                lineNumber: 69,
                columnNumber: 12
            }, this);
            $[6] = user;
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        return t4;
    }
    let t4;
    if ($[8] !== roomId || $[9] !== user) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$chat$2d$window$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            roomId: roomId,
            user: user
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/chat/page.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[8] = roomId;
        $[9] = user;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_s(ChatContent, "yatkcGgbSCcRO1dSNpPqv4xOndw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ChatContent;
function DashboardPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "d70ded34ce793ca1ee5564a1b5ebd2b2f7a3d772a246e41f673b8ad92c2be5a5") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d70ded34ce793ca1ee5564a1b5ebd2b2f7a3d772a246e41f673b8ad92c2be5a5";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/chat/page.tsx",
                lineNumber: 98,
                columnNumber: 30
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatContent, {}, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/chat/page.tsx",
                lineNumber: 98,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/chat/page.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = DashboardPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatContent");
__turbopack_context__.k.register(_c1, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_GOSSIP_src_887a1dd0._.js.map