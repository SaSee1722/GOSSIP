(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
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
    const [isGroup, setIsGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
        alert("Group name updated");
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
        if (error) alert(error.message);
        else {
            alert("Member added");
            setShowAdd(false);
            fetchDetails();
        }
    };
    const removeMember = async (userId_0)=>{
        if (!confirm("Remove this user?")) return;
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
        if (!confirm("Leave this group?")) return;
        await supabase.from('room_participants').delete().eq('room_id', roomId).eq('user_id', currentUserId);
        onClose();
        window.location.href = '/chat';
    };
    if (loading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-[#1e1e24] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[80vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-white/5 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-white",
                            children: "Group Info"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-white/10 rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-white/70"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                lineNumber: 112,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                            lineNumber: 111,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                    lineNumber: 109,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 overflow-y-auto custom-scrollbar flex-1 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                    fallback: roomName,
                                    className: "w-20 h-20 text-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this),
                                isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: roomName,
                                            onChange: (e)=>setRoomName(e.target.value),
                                            className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-center font-bold text-white focus:border-primary outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 121,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleUpdateName,
                                            className: "text-xs text-primary hover:underline",
                                            children: "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 122,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 120,
                                    columnNumber: 36
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-white",
                                    children: roomName
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 123,
                                    columnNumber: 38
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/40",
                                    children: [
                                        participants.length,
                                        " members"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 124,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                            lineNumber: 118,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-4",
                            children: [
                                isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAdd(!showAdd),
                                    className: "flex flex-col items-center gap-1 text-primary hover:opacity-80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-primary/10 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                lineNumber: 130,
                                                columnNumber: 81
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 130,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            children: "Add"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 131,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 129,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: leaveGroup,
                                    className: "flex flex-col items-center gap-1 text-red-400 hover:opacity-80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-red-500/10 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                lineNumber: 134,
                                                columnNumber: 77
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 134,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            children: "Leave"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 135,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                            lineNumber: 128,
                            columnNumber: 21
                        }, this),
                        showAdd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 p-3 rounded-xl space-y-2 animate-in slide-in-from-top-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "flex-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white",
                                            placeholder: "Search username...",
                                            value: searchQuery,
                                            onChange: (e_0)=>setSearchQuery(e_0.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 142,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSearch,
                                            className: "px-3 bg-primary rounded-lg text-white text-xs",
                                            children: "Search"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 143,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 141,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 max-h-32 overflow-y-auto",
                                    children: searchResults.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-2 hover:bg-white/5 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            src: u.avatar_url || undefined,
                                                            fallback: u.username || "?",
                                                            className: "w-6 h-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-white",
                                                            children: u.username
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>addMember(u.id),
                                                    className: "text-primary text-xs hover:underline",
                                                    children: "Add"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, u.id, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 146,
                                            columnNumber: 57
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 145,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                            lineNumber: 140,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-bold text-white/50 mb-2 uppercase tracking-wider",
                                    children: "Participants"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: participants.map((p_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            src: p_2.avatar_url || undefined,
                                                            fallback: p_2.username || "?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-white flex items-center gap-1",
                                                                    children: [
                                                                        p_2.full_name || p_2.username,
                                                                        p_2.role === 'owner' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                                            className: "w-3 h-3 text-yellow-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                                            lineNumber: 166,
                                                                            columnNumber: 74
                                                                        }, this),
                                                                        p_2.role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                            className: "w-3 h-3 text-blue-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                                            lineNumber: 167,
                                                                            columnNumber: 74
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-white/40 capitalize",
                                                                    children: p_2.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 37
                                                }, this),
                                                isAdmin && currentUserId !== p_2.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: [
                                                        p_2.role === 'member' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>promoteMember(p_2.id),
                                                            className: "p-1 hover:bg-blue-500/20 text-blue-400 rounded",
                                                            title: "Promote",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 71
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeMember(p_2.id),
                                                            className: "p-1 hover:bg-red-500/20 text-red-400 rounded",
                                                            title: "Remove",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 77
                                                }, this)
                                            ]
                                        }, p_2.id, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                            lineNumber: 160,
                                            columnNumber: 54
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                                    lineNumber: 159,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
                    lineNumber: 116,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
            lineNumber: 108,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/GOSSIP/src/components/group-info.tsx",
        lineNumber: 107,
        columnNumber: 10
    }, this);
}
_s(GroupInfo, "nuBAMJ+LMiX6zLgirzjN/qdCo88=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/reply.js [app-client] (ecmascript) <export default as Reply>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/call-context.tsx [app-client] (ecmascript)");
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
function ChatWindow(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(130);
    if ($[0] !== "c34354a34f17c3dac910f73c39bff697587bd615569e7c87ff4059ba26c1517e") {
        for(let $i = 0; $i < 130; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c34354a34f17c3dac910f73c39bff697587bd615569e7c87ff4059ba26c1517e";
    }
    const { roomId, user } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [newMessage, setNewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [, setRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const supabase = t3;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { startCall } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCall"])();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    let t4;
    let t5;
    if ($[4] !== roomId || $[5] !== user.id) {
        t4 = ({
            "ChatWindow[useEffect()]": ()=>{
                const fetchRoomAndMessages = {
                    "ChatWindow[useEffect() > fetchRoomAndMessages]": async ()=>{
                        setLoading(true);
                        const { data: roomData } = await supabase.from("rooms").select("*, room_participants(user_id, profiles(username, full_name, avatar_url, gender))").eq("id", roomId).single();
                        setRoom(roomData);
                        if (roomData) {
                            if (roomData.is_group === false && roomData.room_participants) {
                                const other = roomData.room_participants.find({
                                    "ChatWindow[useEffect() > fetchRoomAndMessages > roomData.room_participants.find()]": (p)=>p.user_id !== user.id
                                }["ChatWindow[useEffect() > fetchRoomAndMessages > roomData.room_participants.find()]"]);
                                if (other && other.profiles) {
                                    const name = (other.profiles.full_name || other.profiles.username || "Unknown User").toUpperCase();
                                    setHeaderName(name);
                                    setHeaderAvatar(other.profiles.avatar_url);
                                    setHeaderGender(other.profiles.gender);
                                    const { data: blockData } = await supabase.from("blocked_users").select("*").eq("blocker_id", user.id).eq("blocked_id", other.user_id).maybeSingle();
                                    setIsBlocked(!!blockData);
                                }
                            } else {
                                setHeaderName((roomData.name || "Group Chat").toUpperCase());
                            }
                        }
                        const { data: msgData } = await supabase.from("messages").select("*, profiles(username, avatar_url, gender), reply_item: messages!reply_to(content, message_type, profiles(username))").eq("room_id", roomId).order("created_at", {
                            ascending: true
                        });
                        if (msgData) {
                            setMessages(msgData);
                        }
                        setLoading(false);
                    }
                }["ChatWindow[useEffect() > fetchRoomAndMessages]"];
                fetchRoomAndMessages();
                const channel = supabase.channel(`room:${roomId}`).on("postgres_changes", {
                    event: "INSERT",
                    schema: "public",
                    table: "messages",
                    filter: `room_id=eq.${roomId}`
                }, {
                    "ChatWindow[useEffect() > (anonymous)()]": async (payload)=>{
                        const { data } = await supabase.from("messages").select("*, profiles(username, avatar_url, gender), reply_item: messages!reply_to(content, message_type, profiles(username))").eq("id", payload.new.id).single();
                        if (data) {
                            setMessages({
                                "ChatWindow[useEffect() > (anonymous)() > setMessages()]": (prev)=>[
                                        ...prev,
                                        data
                                    ]
                            }["ChatWindow[useEffect() > (anonymous)() > setMessages()]"]);
                        }
                    }
                }["ChatWindow[useEffect() > (anonymous)()]"]).subscribe();
                return ()=>{
                    supabase.removeChannel(channel);
                };
            }
        })["ChatWindow[useEffect()]"];
        t5 = [
            roomId,
            user.id,
            supabase
        ];
        $[4] = roomId;
        $[5] = user.id;
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[8] !== messages || $[9] !== user.id) {
        t6 = ({
            "ChatWindow[useEffect()]": ()=>{
                if (scrollRef.current) {
                    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                }
                const unreadIds = messages.filter({
                    "ChatWindow[useEffect() > messages.filter()]": (m)=>m.user_id !== user.id && !m.read_at
                }["ChatWindow[useEffect() > messages.filter()]"]).map(_ChatWindowUseEffectAnonymous);
                if (unreadIds.length > 0) {
                    supabase.from("messages").update({
                        read_at: new Date().toISOString()
                    }).in("id", unreadIds).then(_ChatWindowUseEffectAnonymous2);
                }
            }
        })["ChatWindow[useEffect()]"];
        t7 = [
            messages,
            user.id,
            supabase
        ];
        $[8] = messages;
        $[9] = user.id;
        $[10] = t6;
        $[11] = t7;
    } else {
        t6 = $[10];
        t7 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    const getNameColor = _ChatWindowGetNameColor;
    let t8;
    if ($[12] !== isBlocked || $[13] !== newMessage || $[14] !== replyingTo?.id || $[15] !== roomId || $[16] !== user.id) {
        t8 = ({
            "ChatWindow[handleSendMessage]": async (e, t9, mediaUrl, meta)=>{
                const type = t9 === undefined ? "text" : t9;
                if (e) {
                    e.preventDefault();
                }
                if (isBlocked) {
                    return;
                }
                let content = type === "text" ? newMessage : null;
                if (type === "text" && !content?.trim()) {
                    return;
                }
                if (!content && type !== "text") {
                    if (type === "image") {
                        content = "\uD83D\uDCF7 Image";
                    } else {
                        if (type === "video") {
                            content = "\uD83D\uDCF9 Video";
                        } else {
                            if (type === "audio") {
                                content = "\uD83C\uDFA4 Voice Note";
                            } else {
                                content = "\uD83D\uDCCE Attachment";
                            }
                        }
                    }
                }
                const { error } = await supabase.from("messages").insert({
                    room_id: roomId,
                    user_id: user.id,
                    content,
                    message_type: type,
                    media_url: mediaUrl,
                    media_meta: meta,
                    reply_to: replyingTo?.id,
                    status: "sent",
                    is_deleted: false
                });
                if (!error) {
                    if (type === "text") {
                        setNewMessage("");
                    }
                    setReplyingTo(null);
                    await supabase.from("rooms").update({
                        updated_at: new Date().toISOString()
                    }).eq("id", roomId);
                }
            }
        })["ChatWindow[handleSendMessage]"];
        $[12] = isBlocked;
        $[13] = newMessage;
        $[14] = replyingTo?.id;
        $[15] = roomId;
        $[16] = user.id;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    const handleSendMessage = t8;
    let t9;
    if ($[18] !== addToast || $[19] !== handleSendMessage || $[20] !== isBlocked || $[21] !== roomId) {
        t9 = ({
            "ChatWindow[handleFileUpload]": async (e_0)=>{
                const file = e_0.target.files?.[0];
                if (!file || isBlocked) {
                    return;
                }
                setUploading(true);
                const fileName = `${Date.now()}_${file.name}`;
                const filePath = `${roomId}/${fileName}`;
                const { error: uploadError } = await supabase.storage.from("chat-media").upload(filePath, file);
                if (uploadError) {
                    addToast(uploadError.message, "error");
                    setUploading(false);
                    return;
                }
                const { data: t10 } = supabase.storage.from("chat-media").getPublicUrl(filePath);
                const { publicUrl } = t10;
                let type_0 = "document";
                if (file.type.startsWith("image/")) {
                    type_0 = "image";
                } else {
                    if (file.type.startsWith("video/")) {
                        type_0 = "video";
                    } else {
                        if (file.type.startsWith("audio/")) {
                            type_0 = "audio";
                        }
                    }
                }
                await handleSendMessage(undefined, type_0, publicUrl, {
                    size: file.size,
                    name: file.name
                });
                setUploading(false);
            }
        })["ChatWindow[handleFileUpload]"];
        $[18] = addToast;
        $[19] = handleSendMessage;
        $[20] = isBlocked;
        $[21] = roomId;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    const handleFileUpload = t9;
    let t10;
    if ($[23] !== addToast) {
        t10 = ({
            "ChatWindow[handleDeleteMessage]": async (messageId)=>{
                const { error: error_0 } = await supabase.from("messages").update({
                    content: "\uD83D\uDEAB Message deleted",
                    is_deleted: true,
                    media_url: null,
                    media_meta: null
                }).eq("id", messageId);
                if (error_0) {
                    addToast("Failed to delete message", "error");
                }
            }
        })["ChatWindow[handleDeleteMessage]"];
        $[23] = addToast;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    const handleDeleteMessage = t10;
    let t11;
    if ($[25] !== addToast || $[26] !== isBlocked) {
        t11 = ({
            "ChatWindow[startRecording]": async ()=>{
                if (isBlocked) {
                    return;
                }
                ;
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        audio: true
                    });
                    const mediaRecorder = new MediaRecorder(stream);
                    mediaRecorderRef.current = mediaRecorder;
                    chunksRef.current = [];
                    mediaRecorder.ondataavailable = (e_1)=>{
                        if (e_1.data.size > 0) {
                            chunksRef.current.push(e_1.data);
                        }
                    };
                    mediaRecorder.onstop = ()=>{
                        const blob = new Blob(chunksRef.current, {
                            type: "audio/webm"
                        });
                        setAudioBlob(blob);
                        stream.getTracks().forEach(_ChatWindowStartRecordingAnonymousAnonymous);
                    };
                    mediaRecorder.start();
                    setRecording(true);
                } catch (t12) {
                    const err = t12;
                    console.error("Error accessing microphone:", err);
                    addToast("Could not access microphone", "error");
                }
            }
        })["ChatWindow[startRecording]"];
        $[25] = addToast;
        $[26] = isBlocked;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    const startRecording = t11;
    let t12;
    if ($[28] !== recording) {
        t12 = ({
            "ChatWindow[stopRecording]": ()=>{
                if (mediaRecorderRef.current && recording) {
                    mediaRecorderRef.current.stop();
                    setRecording(false);
                }
            }
        })["ChatWindow[stopRecording]"];
        $[28] = recording;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    const stopRecording = t12;
    let t13;
    if ($[30] !== stopRecording) {
        t13 = ({
            "ChatWindow[cancelRecording]": ()=>{
                stopRecording();
                setAudioBlob(null);
                chunksRef.current = [];
            }
        })["ChatWindow[cancelRecording]"];
        $[30] = stopRecording;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    const cancelRecording = t13;
    let t14;
    if ($[32] !== addToast || $[33] !== audioBlob || $[34] !== handleSendMessage || $[35] !== isBlocked || $[36] !== roomId) {
        t14 = ({
            "ChatWindow[sendVoiceNote]": async ()=>{
                if (!audioBlob || isBlocked) {
                    return;
                }
                setUploading(true);
                const fileName_0 = `${Date.now()}.webm`;
                const filePath_0 = `${roomId}/${fileName_0}`;
                const { error: uploadError_0 } = await supabase.storage.from("chat-media").upload(filePath_0, audioBlob);
                if (uploadError_0) {
                    addToast(uploadError_0.message, "error");
                    setUploading(false);
                    return;
                }
                const { data: t15 } = supabase.storage.from("chat-media").getPublicUrl(filePath_0);
                const { publicUrl: publicUrl_0 } = t15;
                await handleSendMessage(undefined, "audio", publicUrl_0, {
                    duration: 0
                });
                setAudioBlob(null);
                setUploading(false);
            }
        })["ChatWindow[sendVoiceNote]"];
        $[32] = addToast;
        $[33] = audioBlob;
        $[34] = handleSendMessage;
        $[35] = isBlocked;
        $[36] = roomId;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    const sendVoiceNote = t14;
    if (loading) {
        let t15;
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col items-center justify-center bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-10 h-10 text-primary animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 434,
                        columnNumber: 88
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-white/50 font-bold tracking-widest uppercase text-[10px]",
                        children: "Establishing Secure Line..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 434,
                        columnNumber: 147
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 434,
                columnNumber: 13
            }, this);
            $[38] = t15;
        } else {
            t15 = $[38];
        }
        return t15;
    }
    let t15;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 443,
            columnNumber: 11
        }, this);
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== router) {
        t16 = ({
            "ChatWindow[<button>.onClick]": ()=>router.push("/chat")
        })["ChatWindow[<button>.onClick]"];
        $[40] = router;
        $[41] = t16;
    } else {
        t16 = $[41];
    }
    let t17;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
            className: "w-6 h-6",
            strokeWidth: 3
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[42] = t17;
    } else {
        t17 = $[42];
    }
    let t18;
    if ($[43] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t16,
            className: "p-2 -ml-2 hover:bg-white/5 rounded-xl text-white/30 hover:text-white transition-all",
            children: t17
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 467,
            columnNumber: 11
        }, this);
        $[43] = t16;
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    const t19 = headerName[0] || "?";
    let t20;
    if ($[45] !== headerAvatar || $[46] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-11 h-11 rounded-2xl p-0.5 bg-gradient-to-br from-primary/30 to-secondary/30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                src: headerAvatar,
                fallback: t19,
                className: "w-full h-full rounded-[14px]"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 476,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        $[45] = headerAvatar;
        $[46] = t19;
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    let t21;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-online border-[3px] border-black rounded-full shadow-lg shadow-online/20"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 485,
            columnNumber: 11
        }, this);
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    let t22;
    if ($[49] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 492,
            columnNumber: 11
        }, this);
        $[49] = t20;
        $[50] = t22;
    } else {
        t22 = $[50];
    }
    const t23 = getNameColor(headerGender);
    let t24;
    if ($[51] !== t23) {
        t24 = {
            color: t23
        };
        $[51] = t23;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] !== headerName || $[54] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[17px] font-black tracking-tight",
            style: t24,
            children: headerName
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[53] = headerName;
        $[54] = t24;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 mt-0.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1.5 h-1.5 bg-online rounded-full animate-pulse shadow-sm shadow-online"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 520,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11px] font-black text-primary uppercase tracking-widest",
                    children: "Active Now"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 520,
                    columnNumber: 153
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 520,
            columnNumber: 11
        }, this);
        $[56] = t26;
    } else {
        t26 = $[56];
    }
    let t27;
    if ($[57] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 527,
            columnNumber: 11
        }, this);
        $[57] = t25;
        $[58] = t27;
    } else {
        t27 = $[58];
    }
    let t28;
    if ($[59] !== t18 || $[60] !== t22 || $[61] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t18,
                t22,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 535,
            columnNumber: 11
        }, this);
        $[59] = t18;
        $[60] = t22;
        $[61] = t27;
        $[62] = t28;
    } else {
        t28 = $[62];
    }
    let t29;
    if ($[63] !== roomId || $[64] !== startCall) {
        t29 = ({
            "ChatWindow[<button>.onClick]": ()=>startCall(roomId, false)
        })["ChatWindow[<button>.onClick]"];
        $[63] = roomId;
        $[64] = startCall;
        $[65] = t29;
    } else {
        t29 = $[65];
    }
    let t30;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            className: "w-5 h-5",
            strokeWidth: 2.5
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 556,
            columnNumber: 11
        }, this);
        $[66] = t30;
    } else {
        t30 = $[66];
    }
    let t31;
    if ($[67] !== t29) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t29,
            className: "p-2.5 hover:bg-white/5 rounded-xl text-white/40 hover:text-primary transition-all",
            children: t30
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 563,
            columnNumber: 11
        }, this);
        $[67] = t29;
        $[68] = t31;
    } else {
        t31 = $[68];
    }
    let t32;
    if ($[69] !== roomId || $[70] !== startCall) {
        t32 = ({
            "ChatWindow[<button>.onClick]": ()=>startCall(roomId, true)
        })["ChatWindow[<button>.onClick]"];
        $[69] = roomId;
        $[70] = startCall;
        $[71] = t32;
    } else {
        t32 = $[71];
    }
    let t33;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "w-5 h-5",
            strokeWidth: 2.5
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[72] = t33;
    } else {
        t33 = $[72];
    }
    let t34;
    if ($[73] !== t32) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t32,
            className: "p-2.5 hover:bg-white/5 rounded-xl text-white/40 hover:text-secondary transition-all",
            children: t33
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[73] = t32;
        $[74] = t34;
    } else {
        t34 = $[74];
    }
    let t35;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = ({
            "ChatWindow[<button>.onClick]": ()=>setShowGroupInfo(true)
        })["ChatWindow[<button>.onClick]"];
        $[75] = t35;
    } else {
        t35 = $[75];
    }
    let t36;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t35,
            className: "p-2.5 hover:bg-white/5 rounded-xl text-white/40 hover:text-white transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                className: "w-5 h-5",
                strokeWidth: 2.5
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 606,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 606,
            columnNumber: 11
        }, this);
        $[76] = t36;
    } else {
        t36 = $[76];
    }
    let t37;
    if ($[77] !== t31 || $[78] !== t34) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t31,
                t34,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 613,
            columnNumber: 11
        }, this);
        $[77] = t31;
        $[78] = t34;
        $[79] = t37;
    } else {
        t37 = $[79];
    }
    let t38;
    if ($[80] !== t28 || $[81] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4 flex items-center justify-between bg-black/80 backdrop-blur-xl border-b border-white/5 z-20",
            children: [
                t28,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 622,
            columnNumber: 11
        }, this);
        $[80] = t28;
        $[81] = t37;
        $[82] = t38;
    } else {
        t38 = $[82];
    }
    let t39;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-1 rounded-full bg-white/5 border border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-black text-white/30 uppercase tracking-[0.2em]",
                    children: "Today"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 631,
                    columnNumber: 127
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 631,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 631,
            columnNumber: 11
        }, this);
        $[83] = t39;
    } else {
        t39 = $[83];
    }
    let t40;
    if ($[84] !== handleDeleteMessage || $[85] !== messages || $[86] !== user.id) {
        t40 = messages.map({
            "ChatWindow[messages.map()]": (msg, index)=>{
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
                            lineNumber: 643,
                            columnNumber: 127
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-end gap-3 max-w-[85%]", isMe && "flex-row-reverse"),
                            children: [
                                !isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-xl overflow-hidden ring-1 ring-white/10 flex-shrink-0",
                                    children: !isSameUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                        src: msg.profiles?.avatar_url || "",
                                        fallback: msg.profiles?.username?.[0] || "?",
                                        className: "w-full h-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                        lineNumber: 645,
                                        columnNumber: 251
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                        lineNumber: 645,
                                        columnNumber: 391
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 645,
                                    columnNumber: 149
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-3 relative group transition-all", isMe ? "bg-primary text-black rounded-[22px] rounded-br-[4px] shadow-lg shadow-primary/10" : "bg-white/5 text-white rounded-[22px] rounded-bl-[4px] border border-white/5"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute -top-8 px-2 py-1 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all z-20", isMe ? "right-0" : "left-0"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "ChatWindow[messages.map() > <button>.onClick]": ()=>setReplyingTo(msg)
                                                    }["ChatWindow[messages.map() > <button>.onClick]"],
                                                    className: "text-white/60 hover:text-primary transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__["Reply"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                        lineNumber: 647,
                                                        columnNumber: 132
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 873
                                                }, this),
                                                isMe && !msg.is_deleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "ChatWindow[messages.map() > <button>.onClick]": ()=>handleDeleteMessage(msg.id)
                                                    }["ChatWindow[messages.map() > <button>.onClick]"],
                                                    className: "text-white/60 hover:text-secondary transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                        lineNumber: 649,
                                                        columnNumber: 134
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 192
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                            lineNumber: 645,
                                            columnNumber: 667
                                        }, this),
                                        msg.is_deleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "italic text-[13px] opacity-40 font-medium tracking-tight",
                                            children: "🚫 Ghost message deleted"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                            lineNumber: 649,
                                            columnNumber: 188
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                msg.reply_item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-2 p-2 rounded-xl flex flex-col gap-0.5 border-l-4", isMe ? "bg-black/5 border-black/20" : "bg-white/5 border-primary/40"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[9px] font-black uppercase tracking-widest", isMe ? "text-black/50" : "text-primary/70"),
                                                            children: msg.reply_item.profiles?.username || "GOSSIPER"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                            lineNumber: 649,
                                                            columnNumber: 458
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[11px] font-bold truncate italic opacity-60", isMe ? "text-black" : "text-white"),
                                                            children: msg.reply_item.message_type === "text" ? msg.reply_item.content : `[MEDIA ${msg.reply_item.message_type.toUpperCase()}]`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                            lineNumber: 649,
                                                            columnNumber: 630
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 312
                                                }, this),
                                                msg.message_type === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[15px] font-medium leading-relaxed tracking-tight",
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 901
                                                }, this),
                                                msg.message_type === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl overflow-hidden my-1 border border-white/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: msg.media_url || "",
                                                        alt: "",
                                                        className: "max-w-full max-h-[400px] w-auto h-auto object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                        lineNumber: 649,
                                                        columnNumber: 1095
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 1022
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 mt-1.5", isMe ? "justify-end" : "justify-start"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-black uppercase tracking-widest", isMe ? "text-black/40" : "text-white/20"),
                                                    children: new Date(msg.created_at).toLocaleTimeString([], {
                                                        hour: "2-digit",
                                                        minute: "2-digit"
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 1306
                                                }, this),
                                                isMe && (msg.read_at ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                                                    size: 12,
                                                    className: "text-black/60"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 53
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 12,
                                                    className: "text-black/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 106
                                                }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                            lineNumber: 649,
                                            columnNumber: 1210
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 645,
                                    columnNumber: 432
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                            lineNumber: 645,
                            columnNumber: 55
                        }, this)
                    ]
                }, msg.id, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 643,
                    columnNumber: 16
                }, this);
            }
        }["ChatWindow[messages.map()]"]);
        $[84] = handleDeleteMessage;
        $[85] = messages;
        $[86] = user.id;
        $[87] = t40;
    } else {
        t40 = $[87];
    }
    let t41;
    if ($[88] !== uploading) {
        t41 = uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end pr-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primary/20 p-2 rounded-xl flex items-center gap-2 border border-primary/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-4 h-4 animate-spin text-primary"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 664,
                        columnNumber: 158
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-black text-primary uppercase tracking-widest",
                        children: "Transmitting..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 664,
                        columnNumber: 215
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 664,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 664,
            columnNumber: 24
        }, this);
        $[88] = uploading;
        $[89] = t41;
    } else {
        t41 = $[89];
    }
    let t42;
    if ($[90] !== t40 || $[91] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative z-10",
            ref: scrollRef,
            children: [
                t39,
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 672,
            columnNumber: 11
        }, this);
        $[90] = t40;
        $[91] = t41;
        $[92] = t42;
    } else {
        t42 = $[92];
    }
    let t43;
    if ($[93] !== handleSendMessage) {
        t43 = ({
            "ChatWindow[<form>.onSubmit]": (e_2)=>handleSendMessage(e_2, "text")
        })["ChatWindow[<form>.onSubmit]"];
        $[93] = handleSendMessage;
        $[94] = t43;
    } else {
        t43 = $[94];
    }
    let t44;
    if ($[95] !== replyingTo) {
        t44 = replyingTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between bg-surface/50 p-2 rounded-t-xl border border-primary/20 mb-2 backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1 h-8 bg-primary rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                            lineNumber: 691,
                            columnNumber: 211
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-small font-bold text-primary",
                                    children: [
                                        "Replying to ",
                                        replyingTo.profiles?.username || "user"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 691,
                                    columnNumber: 293
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-small text-text-secondary truncate max-w-[200px]",
                                    children: replyingTo.content || "Media message"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                                    lineNumber: 691,
                                    columnNumber: 405
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                            lineNumber: 691,
                            columnNumber: 262
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 691,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "ChatWindow[<button>.onClick]": ()=>setReplyingTo(null)
                    }["ChatWindow[<button>.onClick]"],
                    className: "p-1 hover:bg-surface rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4 text-text-secondary"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 693,
                        columnNumber: 88
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 691,
                    columnNumber: 535
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 691,
            columnNumber: 25
        }, this);
        $[95] = replyingTo;
        $[96] = t44;
    } else {
        t44 = $[96];
    }
    let t45;
    if ($[97] !== handleFileUpload) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            ref: fileInputRef,
            className: "hidden",
            onChange: handleFileUpload,
            accept: "image/*,video/*,audio/*"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 701,
            columnNumber: 11
        }, this);
        $[97] = handleFileUpload;
        $[98] = t45;
    } else {
        t45 = $[98];
    }
    let t46;
    if ($[99] !== audioBlob || $[100] !== newMessage || $[101] !== recording || $[102] !== uploading) {
        t46 = recording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center gap-3 animate-pulse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500 text-small font-bold uppercase tracking-wider",
                    children: "Recording..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 709,
                    columnNumber: 85
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rounded-full bg-red-500 animate-ping"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 709,
                    columnNumber: 181
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 709,
            columnNumber: 23
        }, this) : audioBlob ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-small text-primary font-bold",
                    children: "Voice Note"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 709,
                    columnNumber: 314
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                    src: URL.createObjectURL(audioBlob),
                    controls: true,
                    className: "h-8 w-40"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 709,
                    columnNumber: 383
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 709,
            columnNumber: 266
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "ChatWindow[<button>.onClick]": ()=>fileInputRef.current?.click()
                    }["ChatWindow[<button>.onClick]"],
                    className: "p-2 text-text-secondary hover:text-primary transition-colors",
                    disabled: uploading,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 711,
                        columnNumber: 136
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 709,
                    columnNumber: 477
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    value: newMessage,
                    onChange: {
                        "ChatWindow[<input>.onChange]": (e_3)=>setNewMessage(e_3.target.value)
                    }["ChatWindow[<input>.onChange]"],
                    placeholder: "Type a message...",
                    className: "flex-1 bg-transparent border-none outline-none px-2 text-body text-foreground placeholder:text-text-tertiary h-10",
                    disabled: uploading
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 711,
                    columnNumber: 178
                }, this)
            ]
        }, void 0, true);
        $[99] = audioBlob;
        $[100] = newMessage;
        $[101] = recording;
        $[102] = uploading;
        $[103] = t46;
    } else {
        t46 = $[103];
    }
    let t47;
    if ($[104] !== audioBlob || $[105] !== cancelRecording || $[106] !== newMessage || $[107] !== recording || $[108] !== sendVoiceNote || $[109] !== startRecording || $[110] !== stopRecording || $[111] !== uploading) {
        t47 = recording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: stopRecording,
            className: "p-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                className: "w-4 h-4 fill-current"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 724,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 724,
            columnNumber: 23
        }, this) : audioBlob ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: cancelRecording,
                    className: "p-2 text-text-secondary hover:text-red-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 724,
                        columnNumber: 315
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 724,
                    columnNumber: 212
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: sendVoiceNote,
                    className: "p-2 bg-primary-dark text-white rounded-full h-10 w-10 flex items-center justify-center hover:bg-primary/90 shadow-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                        className: "w-4 h-4 ml-0.5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                        lineNumber: 724,
                        columnNumber: 529
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                    lineNumber: 724,
                    columnNumber: 354
                }, this)
            ]
        }, void 0, true) : newMessage.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: uploading,
            className: "p-2 bg-primary-dark text-white rounded-full h-10 w-10 flex items-center justify-center hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                className: "w-4 h-4 ml-0.5"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 724,
                columnNumber: 834
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 724,
            columnNumber: 599
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: startRecording,
            disabled: uploading,
            className: "p-2 text-text-secondary hover:text-primary transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
                lineNumber: 724,
                columnNumber: 1019
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 724,
            columnNumber: 881
        }, this);
        $[104] = audioBlob;
        $[105] = cancelRecording;
        $[106] = newMessage;
        $[107] = recording;
        $[108] = sendVoiceNote;
        $[109] = startRecording;
        $[110] = stopRecording;
        $[111] = uploading;
        $[112] = t47;
    } else {
        t47 = $[112];
    }
    let t48;
    if ($[113] !== t46 || $[114] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3 items-center bg-surface p-2 pl-4 rounded-xl shadow-reference-sm border border-divider focus-within:border-primary/50 transition-all",
            children: [
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 739,
            columnNumber: 11
        }, this);
        $[113] = t46;
        $[114] = t47;
        $[115] = t48;
    } else {
        t48 = $[115];
    }
    let t49;
    if ($[116] !== t43 || $[117] !== t44 || $[118] !== t45 || $[119] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: t43,
            className: "p-4 bg-background border-t border-divider",
            children: [
                t44,
                t45,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 748,
            columnNumber: 11
        }, this);
        $[116] = t43;
        $[117] = t44;
        $[118] = t45;
        $[119] = t48;
        $[120] = t49;
    } else {
        t49 = $[120];
    }
    let t50;
    if ($[121] !== roomId || $[122] !== showGroupInfo || $[123] !== user.id) {
        t50 = showGroupInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$group$2d$info$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupInfo"], {
            roomId: roomId,
            onClose: {
                "ChatWindow[<GroupInfo>.onClose]": ()=>setShowGroupInfo(false)
            }["ChatWindow[<GroupInfo>.onClose]"],
            currentUserId: user.id
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 759,
            columnNumber: 28
        }, this);
        $[121] = roomId;
        $[122] = showGroupInfo;
        $[123] = user.id;
        $[124] = t50;
    } else {
        t50 = $[124];
    }
    let t51;
    if ($[125] !== t38 || $[126] !== t42 || $[127] !== t49 || $[128] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full bg-black relative",
            children: [
                t15,
                t38,
                t42,
                t49,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/chat-window.tsx",
            lineNumber: 771,
            columnNumber: 11
        }, this);
        $[125] = t38;
        $[126] = t42;
        $[127] = t49;
        $[128] = t50;
        $[129] = t51;
    } else {
        t51 = $[129];
    }
    return t51;
}
_s(ChatWindow, "6zY72qSxjUagLxPqOz5GDD6vIdg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCall"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ChatWindow;
function _ChatWindowStartRecordingAnonymousAnonymous(track) {
    return track.stop();
}
function _ChatWindowGetNameColor(gender) {
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
function _ChatWindowUseEffectAnonymous2() {}
function _ChatWindowUseEffectAnonymous(m_0) {
    return m_0.id;
}
var _c;
__turbopack_context__.k.register(_c, "ChatWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/app/chat/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Desktop/GOSSIP/src/app/chat/page.tsx'\n\nReturn statement is not allowed here");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=Desktop_GOSSIP_src_aeccb924._.js.map