(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroupsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$gradient$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/gradient-text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$chat$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/chat-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/services/chat-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
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
function GroupsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "524ef7c056c15de9ed7774bb92de1e1607f11690bd2978bca1e57aa4ee298e07") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "524ef7c056c15de9ed7774bb92de1e1607f11690bd2978bca1e57aa4ee298e07";
    }
    const { chats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$chat$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [selectedUsers, setSelectedUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [groupName, setGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[2] !== chats || $[3] !== groupName || $[4] !== loading || $[5] !== router || $[6] !== selectedUsers || $[7] !== showCreateModal) {
        const contacts = chats.filter(_GroupsPageChatsFilter).map(_GroupsPageAnonymous);
        let t2;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = ({
                "GroupsPage[toggleUser]": (userId)=>{
                    setSelectedUsers({
                        "GroupsPage[toggleUser > setSelectedUsers()]": (prev)=>prev.includes(userId) ? prev.filter({
                                "GroupsPage[toggleUser > setSelectedUsers() > prev.filter()]": (id)=>id !== userId
                            }["GroupsPage[toggleUser > setSelectedUsers() > prev.filter()]"]) : [
                                ...prev,
                                userId
                            ]
                    }["GroupsPage[toggleUser > setSelectedUsers()]"]);
                }
            })["GroupsPage[toggleUser]"];
            $[9] = t2;
        } else {
            t2 = $[9];
        }
        const toggleUser = t2;
        let t3;
        if ($[10] !== groupName || $[11] !== router || $[12] !== selectedUsers) {
            t3 = ({
                "GroupsPage[handleCreateGroup]": async ()=>{
                    if (!groupName.trim() || selectedUsers.length < 1) {
                        return;
                    }
                    setLoading(true);
                    const { data: roomId, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].createGroupChat(groupName, selectedUsers);
                    if (!error && roomId) {
                        setShowCreateModal(false);
                        router.push(`/chat?roomId=${roomId}`);
                    }
                    setLoading(false);
                }
            })["GroupsPage[handleCreateGroup]"];
            $[10] = groupName;
            $[11] = router;
            $[12] = selectedUsers;
            $[13] = t3;
        } else {
            t3 = $[13];
        }
        const handleCreateGroup = t3;
        let getNameColor;
        let t4;
        let t5;
        let t6;
        let t7;
        let t8;
        if ($[14] !== chats || $[15] !== router) {
            const groupChats = chats.filter(_GroupsPageChatsFilter2);
            getNameColor = _GroupsPageGetNameColor;
            t6 = "flex-1 flex flex-col bg-black h-full relative overflow-hidden";
            if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                    lineNumber: 94,
                    columnNumber: 14
                }, this);
                $[22] = t7;
            } else {
                t7 = $[22];
            }
            let t9;
            if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$gradient$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientText"], {
                    text: "Groups",
                    className: "text-5xl font-black italic uppercase tracking-tighter"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                    lineNumber: 101,
                    columnNumber: 14
                }, this);
                $[23] = t9;
            } else {
                t9 = $[23];
            }
            let t10;
            let t11;
            if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
                t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    t9,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/groups_doodle.png",
                                            alt: "Groups",
                                            className: "w-full h-full object-contain opacity-80"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 142
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 106
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                lineNumber: 109,
                                columnNumber: 61
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/30 text-xs font-bold uppercase tracking-[0.2em] mt-1",
                                children: "Communities you belong to."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                lineNumber: 109,
                                columnNumber: 251
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                        lineNumber: 109,
                        columnNumber: 56
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                    lineNumber: 109,
                    columnNumber: 15
                }, this);
                t11 = ({
                    "GroupsPage[<button>.onClick]": ()=>setShowCreateModal(true)
                })["GroupsPage[<button>.onClick]"];
                $[24] = t10;
                $[25] = t11;
            } else {
                t10 = $[24];
                t11 = $[25];
            }
            if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "p-8 pb-4 flex items-center justify-between relative z-10",
                    children: [
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: t11,
                            className: "p-5 bg-gradient-to-br from-primary to-secondary rounded-[24px] shadow-xl shadow-primary/20 hover:scale-110 active:scale-95 transition-all text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                lineNumber: 120,
                                columnNumber: 279
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                            lineNumber: 120,
                            columnNumber: 96
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                    lineNumber: 120,
                    columnNumber: 14
                }, this);
                $[26] = t8;
            } else {
                t8 = $[26];
            }
            t4 = "flex-1 overflow-y-auto custom-scrollbar p-8 pt-4 relative z-10";
            t5 = groupChats.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center p-12 space-y-8 animate-in fade-in zoom-in duration-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-32 h-32 rounded-[40px] bg-white/5 border border-white/10 flex items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-secondary/10 rounded-[40px] blur-xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                lineNumber: 126,
                                columnNumber: 270
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-12 h-12 text-white/20"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                lineNumber: 126,
                                columnNumber: 359
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                        lineNumber: 126,
                        columnNumber: 152
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-black text-white italic uppercase tracking-tight",
                                children: "No group gossips yet"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                lineNumber: 126,
                                columnNumber: 449
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "GroupsPage[<button>.onClick]": ()=>setShowCreateModal(true)
                                }["GroupsPage[<button>.onClick]"],
                                className: "px-8 py-4 bg-transparent border-2 border-primary/50 hover:border-primary text-primary font-black uppercase italic tracking-widest rounded-2xl transition-all",
                                children: "Create your first group"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                lineNumber: 126,
                                columnNumber: 553
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                        lineNumber: 126,
                        columnNumber: 410
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                lineNumber: 126,
                columnNumber: 38
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: groupChats.map({
                    "GroupsPage[groupChats.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: {
                                "GroupsPage[groupChats.map() > <div>.onClick]": ()=>router.push(`/chat?roomId=${item.id}`)
                            }["GroupsPage[groupChats.map() > <div>.onClick]"],
                            className: "group flex items-center gap-4 p-5 rounded-[32px] bg-white/5 border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.08] cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                        src: item.userAvatar,
                                        fallback: item.userName[0],
                                        className: "w-14 h-14 rounded-2xl relative z-10"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 256
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 230
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-black uppercase italic tracking-tight text-white mb-1",
                                                    children: item.userName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 453
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-black text-white/20 uppercase tracking-widest",
                                                    children: new Date(item.lastMessageTime).toLocaleTimeString([], {
                                                        hour: "2-digit",
                                                        minute: "2-digit"
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 556
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 402
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-bold text-white/40 truncate uppercase tracking-widest",
                                            children: item.lastMessage || "Whisper something..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 370
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-5 h-5 text-white/20 group-hover:translate-x-1 duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 172
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                            lineNumber: 129,
                            columnNumber: 51
                        }, this)
                }["GroupsPage[groupChats.map()]"])
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                lineNumber: 128,
                columnNumber: 262
            }, this);
            $[14] = chats;
            $[15] = router;
            $[16] = getNameColor;
            $[17] = t4;
            $[18] = t5;
            $[19] = t6;
            $[20] = t7;
            $[21] = t8;
        } else {
            getNameColor = $[16];
            t4 = $[17];
            t5 = $[18];
            t6 = $[19];
            t7 = $[20];
            t8 = $[21];
        }
        let t9;
        if ($[27] !== t4 || $[28] !== t5) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t4,
                children: t5
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                lineNumber: 154,
                columnNumber: 12
            }, this);
            $[27] = t4;
            $[28] = t5;
            $[29] = t9;
        } else {
            t9 = $[29];
        }
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t9,
                showCreateModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black border border-white/10 w-full max-w-lg rounded-[40px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500 flex flex-col max-h-[85vh]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 pb-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$gradient$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientText"], {
                                        text: "New Group",
                                        className: "text-2xl font-black italic uppercase tracking-tight"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 405
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "GroupsPage[<button>.onClick]": ()=>setShowCreateModal(false)
                                        }["GroupsPage[<button>.onClick]"],
                                        className: "p-2 text-white/40 hover:text-white transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-8 h-8"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 113
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 502
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                lineNumber: 161,
                                columnNumber: 345
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 pt-4 flex-1 overflow-y-auto custom-scrollbar space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[10px] font-black text-white/30 uppercase tracking-widest ml-4",
                                                children: "Group Identity"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 256
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: groupName,
                                                onChange: {
                                                    "GroupsPage[<input>.onChange]": (e)=>setGroupName(e.target.value)
                                                }["GroupsPage[<input>.onChange]"],
                                                placeholder: "Enter group name...",
                                                className: "w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white font-bold outline-none focus:border-primary/50 transition-all shadow-inner"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 365
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 229
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between px-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-black text-white/20 uppercase tracking-[0.3em]",
                                                        children: "Add Gossiped Friends"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 330
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-black text-primary uppercase tracking-[0.3em]",
                                                        children: [
                                                            selectedUsers.length,
                                                            " Selected"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 433
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 274
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: contacts.map({
                                                    "GroupsPage[contacts.map()]": (contact)=>{
                                                        const isSelected = selectedUsers.includes(contact.id);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: {
                                                                "GroupsPage[contacts.map() > <div>.onClick]": ()=>toggleUser(contact.id)
                                                            }["GroupsPage[contacts.map() > <div>.onClick]"],
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-4 p-4 rounded-[24px] border transition-all cursor-pointer", isSelected ? "bg-primary/10 border-primary/20" : "bg-white/5 border-transparent hover:border-white/10"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                            src: contact.avatar,
                                                                            fallback: contact.name[0],
                                                                            className: "w-12 h-12 rounded-xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                                            lineNumber: 170,
                                                                            columnNumber: 298
                                                                        }, this),
                                                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full border-2 border-black flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-black rounded-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                                                lineNumber: 170,
                                                                                columnNumber: 538
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                                            lineNumber: 170,
                                                                            columnNumber: 404
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 272
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[13px] font-black uppercase tracking-tight",
                                                                            style: {
                                                                                color: getNameColor(contact.gender)
                                                                            },
                                                                            children: contact.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                                            lineNumber: 170,
                                                                            columnNumber: 628
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[9px] font-bold text-white/20 uppercase tracking-widest",
                                                                            children: "Active Partner"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                                            lineNumber: 172,
                                                                            columnNumber: 46
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 604
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center", isSelected ? "bg-primary border-primary" : "border-white/10"),
                                                                    children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-2 h-2 bg-black rounded-full"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                                        lineNumber: 172,
                                                                        columnNumber: 322
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 146
                                                                }, this)
                                                            ]
                                                        }, contact.id, true, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 28
                                                        }, this);
                                                    }
                                                }["GroupsPage[contacts.map()]"])
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 552
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 247
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                lineNumber: 163,
                                columnNumber: 153
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreateGroup,
                                    disabled: loading || !groupName.trim() || selectedUsers.length < 1,
                                    className: "w-full py-5 bg-gradient-to-r from-primary to-secondary text-black font-black uppercase italic tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/10 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:hover:scale-100",
                                    children: [
                                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-5 h-5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 506
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 553
                                        }, this),
                                        "Create Gossip Group"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 94
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                                lineNumber: 174,
                                columnNumber: 68
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                        lineNumber: 161,
                        columnNumber: 164
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
                    lineNumber: 161,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/app/chat/groups/page.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[2] = chats;
        $[3] = groupName;
        $[4] = loading;
        $[5] = router;
        $[6] = selectedUsers;
        $[7] = showCreateModal;
        $[8] = t1;
    } else {
        t1 = $[8];
    }
    return t1;
}
_s(GroupsPage, "b9rxLi5oDWyT0aCO2A3GdMmfSrw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$chat$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GroupsPage;
function _GroupsPageGetNameColor(gender) {
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
function _GroupsPageChatsFilter2(c_1) {
    return c_1.type === "group";
}
function _GroupsPageAnonymous(c_0) {
    return {
        id: c_0.userId,
        name: c_0.userName,
        avatar: c_0.userAvatar,
        gender: c_0.gender
    };
}
function _GroupsPageChatsFilter(c) {
    return c.type === "direct";
}
var _c;
__turbopack_context__.k.register(_c, "GroupsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_GOSSIP_src_app_chat_groups_page_tsx_a3c65e2c._.js.map