(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$user$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/user-search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$connection$2d$requests$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/connection-requests.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$settings$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/settings-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
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
function Sidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(122);
    if ($[0] !== "0921dd89de2811ac10199a087399c745af163cca46ba68c52cc4cfd1e42b0c82") {
        for(let $i = 0; $i < 122; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0921dd89de2811ac10199a087399c745af163cca46ba68c52cc4cfd1e42b0c82";
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
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
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
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const supabase = t4;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
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
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$gradient$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientText"], {
            text: "GOSSIP.",
            className: "text-[32px] font-black tracking-wider"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 201,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-7 h-7",
                        strokeWidth: 3
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                        lineNumber: 209,
                        columnNumber: 151
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 209,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        t11 = ({
            "Sidebar[<button>.onClick]": ()=>setShowRequests(true)
        })["Sidebar[<button>.onClick]"];
        $[13] = t10;
        $[14] = t11;
    } else {
        t10 = $[13];
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
            className: "w-7 h-7 text-white"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== pendingCount) {
        t13 = pendingCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-black text-black border-2 border-black",
            children: pendingCount
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 228,
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
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t11,
                    className: "relative p-2 rounded-xl border border-white/10 hover:bg-white/5 transition-all",
                    children: [
                        t12,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 236,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 236,
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
            className: "text-[13px] text-text-tertiary font-medium mb-4",
            children: "Connect, share, and whisper in style."
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] !== pathname) {
        t16 = pathname === "/chat" || pathname.startsWith("/chat") && !pathname.includes("calls") && !pathname.includes("groups") && !pathname.includes("status") ? "bg-primary/10 border-primary/20 text-primary" : "bg-white/5 border-transparent text-white/30 hover:text-white hover:bg-white/10";
        $[21] = pathname;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== t16) {
        t17 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex flex-col items-center gap-2 py-3 rounded-[20px] transition-all border", t16);
        $[23] = t16;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] font-black uppercase tracking-widest",
            children: "Chats"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[25] = t18;
        $[26] = t19;
    } else {
        t18 = $[25];
        t19 = $[26];
    }
    let t20;
    if ($[27] !== t17) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/chat",
            className: t17,
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[27] = t17;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== pathname) {
        t21 = pathname.includes("groups") ? "bg-secondary/10 border-secondary/20 text-secondary" : "bg-white/5 border-transparent text-white/30 hover:text-white hover:bg-white/10";
        $[29] = pathname;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== t21) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex flex-col items-center gap-2 py-3 rounded-[20px] transition-all border", t21);
        $[31] = t21;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    let t24;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] font-black uppercase tracking-widest",
            children: "Groups"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[33] = t23;
        $[34] = t24;
    } else {
        t23 = $[33];
        t24 = $[34];
    }
    let t25;
    if ($[35] !== t22) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/chat/groups",
            className: t22,
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[35] = t22;
        $[36] = t25;
    } else {
        t25 = $[36];
    }
    let t26;
    if ($[37] !== pathname) {
        t26 = pathname.includes("status") ? "bg-secondary/10 border-secondary/20 text-secondary" : "bg-white/5 border-transparent text-white/30 hover:text-white hover:bg-white/10";
        $[37] = pathname;
        $[38] = t26;
    } else {
        t26 = $[38];
    }
    let t27;
    if ($[39] !== t26) {
        t27 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex flex-col items-center gap-2 py-3 rounded-[20px] transition-all border", t26);
        $[39] = t26;
        $[40] = t27;
    } else {
        t27 = $[40];
    }
    let t28;
    let t29;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] font-black uppercase tracking-widest",
            children: "Whispers"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[41] = t28;
        $[42] = t29;
    } else {
        t28 = $[41];
        t29 = $[42];
    }
    let t30;
    if ($[43] !== t27) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/chat/status",
            className: t27,
            children: [
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[43] = t27;
        $[44] = t30;
    } else {
        t30 = $[44];
    }
    let t31;
    if ($[45] !== pathname) {
        t31 = pathname.includes("calls") ? "bg-primary/10 border-primary-dark/20 text-primary" : "bg-white/5 border-transparent text-white/30 hover:text-white hover:bg-white/10";
        $[45] = pathname;
        $[46] = t31;
    } else {
        t31 = $[46];
    }
    let t32;
    if ($[47] !== t31) {
        t32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex flex-col items-center gap-2 py-3 rounded-[20px] transition-all border", t31);
        $[47] = t31;
        $[48] = t32;
    } else {
        t32 = $[48];
    }
    let t33;
    let t34;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] font-black uppercase tracking-widest",
            children: "Calls"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[49] = t33;
        $[50] = t34;
    } else {
        t33 = $[49];
        t34 = $[50];
    }
    let t35;
    if ($[51] !== t32) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/chat/calls",
            className: t32,
            children: [
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[51] = t32;
        $[52] = t35;
    } else {
        t35 = $[52];
    }
    let t36;
    if ($[53] !== t20 || $[54] !== t25 || $[55] !== t30 || $[56] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 mb-8",
            children: [
                t20,
                t25,
                t30,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[53] = t20;
        $[54] = t25;
        $[55] = t30;
        $[56] = t35;
        $[57] = t36;
    } else {
        t36 = $[57];
    }
    let t37;
    if ($[58] !== t14 || $[59] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 pb-2",
            children: [
                t14,
                t15,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[58] = t14;
        $[59] = t36;
        $[60] = t37;
    } else {
        t37 = $[60];
    }
    let t38;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "w-5 h-5 text-white/30"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[61] = t38;
    } else {
        t38 = $[61];
    }
    let t39;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 h-12 rounded-[24px] flex items-center px-5 gap-3 border border-white/10 focus-within:border-primary/50 transition-all",
                children: [
                    t38,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        placeholder: "Search friends or gossip...",
                        className: "bg-transparent border-none outline-none text-sm w-full placeholder:text-white/20 text-white font-medium",
                        readOnly: true,
                        onClick: {
                            "Sidebar[<input>.onClick]": ()=>setShowSearch(true)
                        }["Sidebar[<input>.onClick]"]
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                        lineNumber: 418,
                        columnNumber: 189
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 418,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[62] = t39;
    } else {
        t39 = $[62];
    }
    let t40;
    if ($[63] !== matches || $[64] !== user.id) {
        t40 = matches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[11px] font-black tracking-[0.2em] text-white/20 mb-4 uppercase",
                    children: "Connections"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 427,
                    columnNumber: 60
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-5 overflow-x-auto pb-2 scrollbar-hide",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "Sidebar[<button>.onClick]": ()=>setShowSearch(true)
                            }["Sidebar[<button>.onClick]"],
                            className: "flex flex-col items-center gap-3 min-w-[58px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[58px] h-[58px] rounded-full border-2 border-dashed border-white/10 hover:border-primary flex items-center justify-center text-white/20 hover:text-primary transition-colors bg-white/5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                        lineNumber: 429,
                                        columnNumber: 302
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                    lineNumber: 429,
                                    columnNumber: 99
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-bold text-white/40",
                                    children: "Find"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                    lineNumber: 429,
                                    columnNumber: 338
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                            lineNumber: 427,
                            columnNumber: 225
                        }, this),
                        matches.map({
                            "Sidebar[matches.map()]": (match)=>{
                                const isRequester = match.requester_id === user.id;
                                const profile = isRequester ? match.addressee : match.requester;
                                if (!profile) {
                                    return null;
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-3 min-w-[58px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative p-0.5 rounded-full border-2 border-primary-dark",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                    src: profile.avatar_url,
                                                    fallback: profile.username?.[0] || "?",
                                                    className: "w-[58px] h-[58px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 172
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute bottom-1 right-1 w-3.5 h-3.5 bg-online border-2 border-black rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 277
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                            lineNumber: 436,
                                            columnNumber: 98
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-black text-center truncate w-full text-white tracking-tight uppercase",
                                            children: profile.username
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                            lineNumber: 436,
                                            columnNumber: 386
                                        }, this)
                                    ]
                                }, match.id, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                    lineNumber: 436,
                                    columnNumber: 20
                                }, this);
                            }
                        }["Sidebar[matches.map()]"])
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 427,
                    columnNumber: 161
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 427,
            columnNumber: 33
        }, this);
        $[63] = matches;
        $[64] = user.id;
        $[65] = t40;
    } else {
        t40 = $[65];
    }
    let t41;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 mb-4 flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[11px] font-black tracking-[0.2em] text-white/20 uppercase",
                    children: "Recent Gossips"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 447,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/gossip_illustration.png",
                    alt: "",
                    className: "w-12 h-12 -mt-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 447,
                    columnNumber: 161
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[66] = t41;
    } else {
        t41 = $[66];
    }
    let t42;
    if ($[67] !== blockedIds || $[68] !== currentRoomId || $[69] !== rooms || $[70] !== user.id) {
        let t43;
        if ($[72] !== blockedIds || $[73] !== user.id) {
            t43 = ({
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
            $[72] = blockedIds;
            $[73] = user.id;
            $[74] = t43;
        } else {
            t43 = $[74];
        }
        let t44;
        if ($[75] !== currentRoomId || $[76] !== user.id) {
            t44 = ({
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
                                            lineNumber: 493,
                                            columnNumber: 266
                                        }, this),
                                        isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-0 right-1 w-4 h-4 bg-online border-[3px] border-black rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                            lineNumber: 493,
                                            columnNumber: 405
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                    lineNumber: 493,
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
                                                    lineNumber: 493,
                                                    columnNumber: 663
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-bold text-white/20",
                                                    children: formatTime(room_0.updated_at)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                            lineNumber: 493,
                                            columnNumber: 607
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs truncate flex-1 pr-2 font-medium", isActive ? "text-primary/70" : "text-white/30"),
                                                children: room_0.last_message || "Started a gossip..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                                lineNumber: 495,
                                                columnNumber: 182
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                            lineNumber: 495,
                                            columnNumber: 131
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                                    lineNumber: 493,
                                    columnNumber: 515
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                            lineNumber: 493,
                            columnNumber: 99
                        }, this)
                    }, room_0.id, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                        lineNumber: 493,
                        columnNumber: 18
                    }, this);
                }
            })["Sidebar[(anonymous)()]"];
            $[75] = currentRoomId;
            $[76] = user.id;
            $[77] = t44;
        } else {
            t44 = $[77];
        }
        t42 = rooms.filter(t43).map(t44);
        $[67] = blockedIds;
        $[68] = currentRoomId;
        $[69] = rooms;
        $[70] = user.id;
        $[71] = t42;
    } else {
        t42 = $[71];
    }
    let t43;
    if ($[78] !== rooms.length) {
        t43 = rooms.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center p-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                    className: "w-12 h-12 text-white/10 mb-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 515,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-white/30 font-bold uppercase tracking-widest italic",
                    children: "No gossips yet"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 515,
                    columnNumber: 167
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 515,
            columnNumber: 33
        }, this);
        $[78] = rooms.length;
        $[79] = t43;
    } else {
        t43 = $[79];
    }
    let t44;
    if ($[80] !== t42 || $[81] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto custom-scrollbar",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    t42,
                    t43
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 523,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[80] = t42;
        $[81] = t43;
        $[82] = t44;
    } else {
        t44 = $[82];
    }
    const t45 = user?.user_metadata?.avatar_url;
    const t46 = user?.email || "?";
    let t47;
    if ($[83] !== t45 || $[84] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
            src: t45,
            fallback: t46,
            className: "w-10 h-10 ring-2 ring-white/10 shadow-lg"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 534,
            columnNumber: 11
        }, this);
        $[83] = t45;
        $[84] = t46;
        $[85] = t47;
    } else {
        t47 = $[85];
    }
    let t48;
    if ($[86] !== user.email || $[87] !== user.user_metadata?.username) {
        t48 = user?.user_metadata?.username || user?.email?.split("@")[0];
        $[86] = user.email;
        $[87] = user.user_metadata?.username;
        $[88] = t48;
    } else {
        t48 = $[88];
    }
    let t49;
    if ($[89] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[13px] font-black truncate text-white uppercase tracking-tight",
            children: t48
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 552,
            columnNumber: 11
        }, this);
        $[89] = t48;
        $[90] = t49;
    } else {
        t49 = $[90];
    }
    let t50;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] font-bold text-primary flex items-center gap-1 uppercase tracking-widest",
            children: "Online"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 560,
            columnNumber: 11
        }, this);
        $[91] = t50;
    } else {
        t50 = $[91];
    }
    let t51;
    if ($[92] !== t49) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-hidden",
            children: [
                t49,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, this);
        $[92] = t49;
        $[93] = t51;
    } else {
        t51 = $[93];
    }
    let t52;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = ({
            "Sidebar[<button>.onClick]": ()=>setShowSettings(true)
        })["Sidebar[<button>.onClick]"];
        $[94] = t52;
    } else {
        t52 = $[94];
    }
    let t53;
    if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t52,
            className: "text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 584,
                columnNumber: 126
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 584,
            columnNumber: 11
        }, this);
        $[95] = t53;
    } else {
        t53 = $[95];
    }
    let t54;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 591,
            columnNumber: 11
        }, this);
        $[96] = t54;
    } else {
        t54 = $[96];
    }
    let t55;
    if ($[97] !== handleLogout) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1",
            children: [
                t53,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLogout,
                    className: "text-white/40 hover:text-secondary transition-colors p-2 hover:bg-white/5 rounded-xl",
                    children: t54
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                    lineNumber: 598,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 598,
            columnNumber: 11
        }, this);
        $[97] = handleLogout;
        $[98] = t55;
    } else {
        t55 = $[98];
    }
    let t56;
    if ($[99] !== t47 || $[100] !== t51 || $[101] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-t border-white/5 bg-black/80 backdrop-blur-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    t47,
                    t51,
                    t55
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
                lineNumber: 606,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 606,
            columnNumber: 11
        }, this);
        $[99] = t47;
        $[100] = t51;
        $[101] = t55;
        $[102] = t56;
    } else {
        t56 = $[102];
    }
    let t57;
    if ($[103] !== t37 || $[104] !== t40 || $[105] !== t44 || $[106] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-full h-full bg-black text-foreground flex flex-col font-sans border-r border-white/5 overflow-hidden",
            children: [
                t37,
                t39,
                t40,
                t41,
                t44,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 616,
            columnNumber: 11
        }, this);
        $[103] = t37;
        $[104] = t40;
        $[105] = t44;
        $[106] = t56;
        $[107] = t57;
    } else {
        t57 = $[107];
    }
    let t58;
    if ($[108] !== showSearch || $[109] !== user.id) {
        t58 = showSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$user$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserSearch"], {
            onClose: {
                "Sidebar[<UserSearch>.onClose]": ()=>setShowSearch(false)
            }["Sidebar[<UserSearch>.onClose]"],
            currentUserId: user?.id
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 627,
            columnNumber: 25
        }, this);
        $[108] = showSearch;
        $[109] = user.id;
        $[110] = t58;
    } else {
        t58 = $[110];
    }
    let t59;
    if ($[111] !== showRequests || $[112] !== user.id) {
        t59 = showRequests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$connection$2d$requests$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionRequests"], {
            onClose: {
                "Sidebar[<ConnectionRequests>.onClose]": ()=>setShowRequests(false)
            }["Sidebar[<ConnectionRequests>.onClose]"],
            currentUserId: user?.id
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 638,
            columnNumber: 27
        }, this);
        $[111] = showRequests;
        $[112] = user.id;
        $[113] = t59;
    } else {
        t59 = $[113];
    }
    let t60;
    if ($[114] !== showSettings || $[115] !== user) {
        t60 = showSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$settings$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsModal"], {
            onClose: {
                "Sidebar[<SettingsModal>.onClose]": ()=>setShowSettings(false)
            }["Sidebar[<SettingsModal>.onClose]"],
            user: user
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/sidebar.tsx",
            lineNumber: 649,
            columnNumber: 27
        }, this);
        $[114] = showSettings;
        $[115] = user;
        $[116] = t60;
    } else {
        t60 = $[116];
    }
    let t61;
    if ($[117] !== t57 || $[118] !== t58 || $[119] !== t59 || $[120] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t57,
                t58,
                t59,
                t60
            ]
        }, void 0, true);
        $[117] = t57;
        $[118] = t58;
        $[119] = t59;
        $[120] = t60;
        $[121] = t61;
    } else {
        t61 = $[121];
    }
    return t61;
}
_s(Sidebar, "j0gguom+2Ol60G62+7gbf51YTrs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Sidebar;
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
"[project]/Desktop/GOSSIP/src/components/chat-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatShell",
    ()=>ChatShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ChatShell(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "1eb00da44205aa8dbafc1d3c9aa5fb2fd5558c2abcafd09d69fc895041b794e3") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1eb00da44205aa8dbafc1d3c9aa5fb2fd5558c2abcafd09d69fc895041b794e3";
    }
    const { children, user } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t1;
    if ($[1] !== searchParams) {
        t1 = searchParams.has("roomId");
        $[1] = searchParams;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const isRoomSelected = t1;
    const isChatRoot = pathname === "/chat";
    const showSidebarOnMobile = isChatRoot && !isRoomSelected;
    const showMainOnMobile = !showSidebarOnMobile;
    const t2 = showSidebarOnMobile ? "w-full" : "hidden md:flex md:w-80";
    let t3;
    if ($[3] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full transition-all duration-300", t2);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== user) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
            user: user
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = user;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const t6 = showMainOnMobile ? "flex w-full" : "hidden md:flex";
    let t7;
    if ($[10] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 relative flex flex-col h-full overflow-hidden transition-all duration-300", t6);
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== children || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: t7,
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[12] = children;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== isChatRoot || $[16] !== isRoomSelected || $[17] !== pathname) {
        t9 = !isRoomSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden fixed bottom-8 left-6 right-6 h-20 bg-black/80 backdrop-blur-3xl rounded-[32px] border border-white/10 flex items-center justify-around px-2 z-50 shadow-2xl animate-in slide-in-from-bottom-10 duration-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/chat",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all", isChatRoot ? "text-primary scale-110" : "text-white/30"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                            lineNumber: 81,
                            columnNumber: 421
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[9px] font-black uppercase tracking-widest",
                            children: "Chat"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                            lineNumber: 81,
                            columnNumber: 458
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                    lineNumber: 81,
                    columnNumber: 261
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/chat/groups",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all", pathname.includes("groups") ? "text-secondary scale-110" : "text-white/30"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                            lineNumber: 81,
                            columnNumber: 728
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[9px] font-black uppercase tracking-widest",
                            children: "Groups"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                            lineNumber: 81,
                            columnNumber: 757
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                    lineNumber: 81,
                    columnNumber: 542
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/chat/status",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all", pathname.includes("status") ? "text-secondary scale-110" : "text-white/30"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                            lineNumber: 81,
                            columnNumber: 1029
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[9px] font-black uppercase tracking-widest",
                            children: "Whisper"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                            lineNumber: 81,
                            columnNumber: 1058
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                    lineNumber: 81,
                    columnNumber: 843
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/chat/calls",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all", pathname.includes("calls") ? "text-primary scale-110" : "text-white/30"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                            lineNumber: 81,
                            columnNumber: 1327
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[9px] font-black uppercase tracking-widest",
                            children: "Calls"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                            lineNumber: 81,
                            columnNumber: 1356
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
                    lineNumber: 81,
                    columnNumber: 1145
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
            lineNumber: 81,
            columnNumber: 29
        }, this);
        $[15] = isChatRoot;
        $[16] = isRoomSelected;
        $[17] = pathname;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t5 || $[20] !== t8 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen bg-background overflow-hidden relative",
            children: [
                t5,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-shell.tsx",
            lineNumber: 91,
            columnNumber: 11
        }, this);
        $[19] = t5;
        $[20] = t8;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    return t10;
}
_s(ChatShell, "AxA9T5G2Po78UC4hL8ljCdvMciE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ChatShell;
var _c;
__turbopack_context__.k.register(_c, "ChatShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/app/chat/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$chat$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/chat-shell.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ChatLayout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "e5119d12a36fcd12f5846ff72861c4bf1e9e147a4c753f3d638c30df0fb9004d") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e5119d12a36fcd12f5846ff72861c4bf1e9e147a4c753f3d638c30df0fb9004d";
    }
    const { children } = t0;
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    let t2;
    if ($[1] !== loading || $[2] !== router || $[3] !== user) {
        t1 = ({
            "ChatLayout[useEffect()]": ()=>{
                if (!loading && !user) {
                    router.push("/login");
                }
            }
        })["ChatLayout[useEffect()]"];
        t2 = [
            user,
            loading,
            router
        ];
        $[1] = loading;
        $[2] = router;
        $[3] = user;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (loading || !user) {
        let t3;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-screen bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-8 w-8 border-t-2 border-primary"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/layout.tsx",
                    lineNumber: 48,
                    columnNumber: 84
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/chat/layout.tsx",
                lineNumber: 48,
                columnNumber: 12
            }, this);
            $[6] = t3;
        } else {
            t3 = $[6];
        }
        return t3;
    }
    const t3 = user;
    let t4;
    if ($[7] !== children || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$chat$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatShell"], {
            user: t3,
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/app/chat/layout.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_s(ChatLayout, "dy7xWVrvVVXL01ZnDuupSciFaow=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ChatLayout;
var _c;
__turbopack_context__.k.register(_c, "ChatLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_GOSSIP_src_597f7cec._.js.map