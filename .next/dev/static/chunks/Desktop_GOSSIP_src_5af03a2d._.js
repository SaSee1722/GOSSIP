(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "safeSupabaseOperation",
    ()=>safeSupabaseOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
let clientInstance = null;
function createClient() {
    if (!clientInstance) {
        clientInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://qjgrzydyicfxjcyqwanu.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZ3J6eWR5aWNmeGpjeXF3YW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMDE2NTksImV4cCI6MjA4MTg3NzY1OX0.gW-3FsBdqUThe1wUR8OeoWWmcBOKx0lb-NIlvlTUiJU"));
    }
    return clientInstance;
}
const safeSupabaseOperation = async (operation)=>{
    const client = createClient();
    return await operation(client);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "4e6c89a9a117e11a4be1ade6ed02390188decd102c7b7d6b702e5a973ca31771") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4e6c89a9a117e11a4be1ade6ed02390188decd102c7b7d6b702e5a973ca31771";
    }
    const { children } = t0;
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [operationLoading, setOperationLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const supabase = t1;
    const mapUser = _AuthProviderMapUser;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AuthProvider[fetchUser]": async (supabaseUser_0)=>{
                const { data: profile_0 } = await supabase.from("profiles").select("*").eq("id", supabaseUser_0.id).single();
                setUser(mapUser(supabaseUser_0, profile_0));
            }
        })["AuthProvider[fetchUser]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const fetchUser = t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "AuthProvider[useEffect()]": ()=>{
                const initialize = {
                    "AuthProvider[useEffect() > initialize]": async ()=>{
                        const { data: t5 } = await supabase.auth.getSession();
                        const { session } = t5;
                        if (session?.user) {
                            await fetchUser(session.user);
                        }
                        setLoading(false);
                        const { data: t6 } = supabase.auth.onAuthStateChange({
                            "AuthProvider[useEffect() > initialize > supabase.auth.onAuthStateChange()]": async (event, session_0)=>{
                                if (session_0?.user) {
                                    await fetchUser(session_0.user);
                                } else {
                                    setUser(null);
                                }
                                setLoading(false);
                            }
                        }["AuthProvider[useEffect() > initialize > supabase.auth.onAuthStateChange()]"]);
                        const { subscription } = t6;
                        return ()=>subscription.unsubscribe();
                    }
                }["AuthProvider[useEffect() > initialize]"];
                initialize();
            }
        })["AuthProvider[useEffect()]"];
        t4 = [];
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "AuthProvider[signInWithPassword]": async (email, pass)=>{
                setOperationLoading(true);
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password: pass
                });
                setOperationLoading(false);
                return {
                    error: error?.message
                };
            }
        })["AuthProvider[signInWithPassword]"];
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const signInWithPassword = t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "AuthProvider[signUpWithPassword]": async (email_0, pass_0, metadata)=>{
                setOperationLoading(true);
                const { data, error: error_0 } = await supabase.auth.signUp({
                    email: email_0,
                    password: pass_0,
                    options: {
                        data: metadata
                    }
                });
                setOperationLoading(false);
                return {
                    error: error_0?.message,
                    needsEmailConfirmation: !!(data.user && !data.session)
                };
            }
        })["AuthProvider[signUpWithPassword]"];
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const signUpWithPassword = t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "AuthProvider[logout]": async ()=>{
                await supabase.auth.signOut();
                setUser(null);
            }
        })["AuthProvider[logout]"];
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const logout = t7;
    let t8;
    if ($[8] !== loading || $[9] !== operationLoading || $[10] !== user) {
        t8 = {
            user,
            loading,
            operationLoading,
            signInWithPassword,
            signUpWithPassword,
            logout
        };
        $[8] = loading;
        $[9] = operationLoading;
        $[10] = user;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== children || $[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
            value: t8,
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx",
            lineNumber: 199,
            columnNumber: 10
        }, this);
        $[12] = children;
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    return t9;
}
_s(AuthProvider, "KXtQoVI+xMjNR8JSHeMjK5Ws3RI=");
_c = AuthProvider;
function _AuthProviderMapUser(supabaseUser, profile) {
    return {
        id: supabaseUser.id,
        email: supabaseUser.email || "",
        username: profile?.username || supabaseUser.user_metadata?.username || supabaseUser.email?.split("@")[0],
        full_name: profile?.full_name || supabaseUser.user_metadata?.full_name,
        avatar_url: profile?.avatar_url || supabaseUser.user_metadata?.avatar_url,
        age: profile?.age,
        phone: profile?.phone,
        bio: profile?.bio,
        gender: profile?.gender,
        created_at: supabaseUser.created_at,
        updated_at: supabaseUser.updated_at || supabaseUser.created_at
    };
}
const useAuth = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "4e6c89a9a117e11a4be1ade6ed02390188decd102c7b7d6b702e5a973ca31771") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4e6c89a9a117e11a4be1ade6ed02390188decd102c7b7d6b702e5a973ca31771";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/services/notification-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerForPushNotificationsAsync",
    ()=>registerForPushNotificationsAsync,
    "sendPushNotification",
    ()=>sendPushNotification
]);
const sendPushNotification = async (token, title, body, data)=>{
    console.log('[NotificationService] Web Push Stub:', {
        token,
        title,
        body,
        data
    });
    // In a real web app, you'd use the Web Push API or a service like Firebase Cloud Messaging for Web
    return true;
};
const registerForPushNotificationsAsync = async ()=>{
    console.log('[NotificationService] Register for Push Stub');
    return null;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/services/chat-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatService",
    ()=>ChatService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$notification$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/services/notification-service.ts [app-client] (ecmascript)");
;
;
const ChatService = {
    async getMyRooms () {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');
                console.log('[ChatService] Fetching rooms for user:', user.id);
                // Step 1: Get My Room IDs
                const { data: myParticipations, error: partError } = await client.from('room_participants').select('room_id').eq('user_id', user.id);
                if (partError) {
                    console.error('[ChatService] Error fetching participations:', partError);
                    return {
                        data: [],
                        error: partError.message
                    };
                }
                if (!myParticipations || myParticipations.length === 0) {
                    console.log('[ChatService] No participations found.');
                    return {
                        data: [],
                        error: null
                    };
                }
                const roomIds = myParticipations.map((p)=>p.room_id);
                // Step 2: Fetch Rooms with Full Details
                const { data: roomsData, error: roomsError } = await client.from('rooms').select(`
                        *,
                        participants:room_participants(
                            user_id,
                            profiles(username, full_name, avatar_url, gender, is_online, last_seen)
                        )
                    `).in('id', roomIds).order('created_at', {
                    ascending: false
                });
                if (roomsError) {
                    console.error('[ChatService] Error fetching rooms:', roomsError);
                    return {
                        data: [],
                        error: roomsError.message
                    };
                }
                // Get Blocked Users
                const { data: blockedData } = await client.from('blocked_users').select('blocked_id').eq('blocker_id', user.id);
                const blockedIds = new Set((blockedData || []).map((b)=>b.blocked_id));
                // Transform and Filter
                const seenPartners = new Set();
                const finalRooms = roomsData.map((room)=>({
                        ...room,
                        room_participants: room.participants // Map to expected structure for Sidebar
                    })).filter((room)=>{
                    if (room.type === 'direct') {
                        const other = room.participants.find((p)=>p.user_id !== user.id);
                        // Check blocked
                        if (other && blockedIds.has(other.user_id)) return false;
                        // Check duplicates
                        if (other) {
                            if (seenPartners.has(other.user_id)) return false;
                            seenPartners.add(other.user_id);
                        }
                    }
                    return true;
                });
                console.log('[ChatService] Returning rooms:', finalRooms.length);
                return {
                    data: finalRooms,
                    error: null
                };
            });
        } catch (err) {
            console.error('[ChatService] getMyRooms exception:', err);
            return {
                data: [],
                error: err.message
            };
        }
    },
    async getRoomParticipants (roomId) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data, error } = await client.from('room_participants').select(`
            user_id,
            profiles (
              id,
              username,
              full_name,
              avatar_url,
              is_online,
              last_seen,
              gender,
              age
            )
          `).eq('room_id', roomId);
                if (error) return {
                    data: [],
                    error: error.message
                };
                return {
                    data: data.map((p)=>p.profiles),
                    error: null
                };
            });
        } catch (err) {
            return {
                data: [],
                error: err.message
            };
        }
    },
    async getMessages (roomId, limit = 50, ascending = true) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data, error } = await client.from('messages').select(`
                        *,
                        profiles:user_id (
                            id, username, full_name, avatar_url, gender
                        )
                    `).eq('room_id', roomId).order('created_at', {
                    ascending
                }).limit(limit);
                if (error) return {
                    data: [],
                    error: error.message
                };
                return {
                    data: data || [],
                    error: null
                };
            });
        } catch (err) {
            return {
                data: [],
                error: err.message
            };
        }
    },
    async sendMessage (roomId, content, type = 'text', mediaUrl) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');
                // Check if anyone in the room has blocked the sender
                const { data: participants } = await client.from('room_participants').select('user_id').eq('room_id', roomId).neq('user_id', user.id);
                if (participants && participants.length > 0) {
                    const participantIds = participants.map((p)=>p.user_id);
                    // Check if sender is blocked by any participant OR sender has blocked any participant
                    const { data: blocks } = await client.from('blocked_users').select('id').or(`and(blocker_id.eq.${user.id},blocked_id.in.(${participantIds.join(',')})),and(blocker_id.in.(${participantIds.join(',')}),blocked_id.eq.${user.id})`).maybeSingle();
                    if (blocks) {
                        throw new Error('Cannot send message: Blocked connection');
                    }
                }
                const { data, error } = await client.from('messages').insert({
                    room_id: roomId,
                    user_id: user.id,
                    content,
                    message_type: type,
                    media_url: mediaUrl,
                    status: 'sent'
                }).select().single();
                if (error) {
                    console.error('[ChatService] sendMessage error:', error);
                    return {
                        data: null,
                        error: error.message
                    };
                }
                // Send Push Notifications asynchronously
                (async ()=>{
                    try {
                        // Get all participants except sender
                        const { data: recipients } = await client.from('room_participants').select('user_id, profiles(push_token, full_name, username)').eq('room_id', roomId).neq('user_id', user.id);
                        if (recipients) {
                            const senderName = user.user_metadata?.username || 'Gossiper';
                            const title = `New Gossip from ${senderName}`;
                            const body = type === 'text' ? content : `Sent a ${type}`;
                            for (const r of recipients){
                                const profile = r.profiles;
                                if (profile && profile.push_token) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$notification$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPushNotification"])(profile.push_token, title, body, {
                                        chatId: roomId,
                                        senderId: user.id
                                    });
                                }
                            }
                        }
                    } catch (pushErr) {
                        console.error('[ChatService] Failed to send push:', pushErr);
                    }
                })();
                return {
                    data: data,
                    error: null
                };
            });
        } catch (err) {
            return {
                data: null,
                error: err.message
            };
        }
    },
    async deleteMessage (messageId) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { error } = await client.from('messages').update({
                is_deleted: true,
                content: 'deleted'
            }).eq('id', messageId);
            return {
                error: error?.message || null
            };
        });
    },
    async createDirectChat (otherUserId) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');
                const { data: existing } = await client.rpc('get_direct_room', {
                    user1: user.id,
                    user2: otherUserId
                });
                if (existing) return {
                    data: existing,
                    error: null
                };
                const { data: room, error: roomError } = await client.from('rooms').insert({
                    type: 'direct',
                    created_by: user.id
                }).select().single();
                if (roomError) return {
                    data: null,
                    error: roomError.message
                };
                const participants = [
                    {
                        room_id: room.id,
                        user_id: user.id,
                        role: 'owner'
                    },
                    {
                        room_id: room.id,
                        user_id: otherUserId,
                        role: 'member'
                    }
                ];
                const { error: partError } = await client.from('room_participants').insert(participants);
                if (partError) return {
                    data: null,
                    error: partError.message
                };
                return {
                    data: room.id,
                    error: null
                };
            });
        } catch (err) {
            return {
                data: null,
                error: err.message
            };
        }
    },
    async createGroupChat (name, participantIds) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');
                const { data: room, error: roomError } = await client.from('rooms').insert({
                    name,
                    type: 'group',
                    created_by: user.id
                }).select().single();
                if (roomError) return {
                    data: null,
                    error: roomError.message
                };
                const participants = [
                    {
                        room_id: room.id,
                        user_id: user.id,
                        role: 'owner'
                    },
                    ...participantIds.map((id)=>({
                            room_id: room.id,
                            user_id: id,
                            role: 'member'
                        }))
                ];
                const { error: partError } = await client.from('room_participants').insert(participants);
                if (partError) return {
                    data: null,
                    error: partError.message
                };
                return {
                    data: room.id,
                    error: null
                };
            });
        } catch (err) {
            return {
                data: null,
                error: err.message
            };
        }
    },
    async updateRoom (roomId, updates) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { error } = await client.from('rooms').update(updates).eq('id', roomId);
            return {
                error: error?.message || null
            };
        });
    },
    async uploadGroupAvatar (roomId, file) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            try {
                const fileExt = file.name.split('.').pop() || 'jpg';
                const fileName = `group_${roomId}_${Date.now()}.${fileExt}`;
                const filePath = `groups/${fileName}`;
                const { error: uploadError } = await client.storage.from('gossip-avatars').upload(filePath, file, {
                    contentType: file.type,
                    upsert: false
                });
                if (uploadError) throw uploadError;
                const { data } = client.storage.from('gossip-avatars').getPublicUrl(filePath);
                return {
                    data: data.publicUrl,
                    error: null
                };
            } catch (err) {
                return {
                    data: null,
                    error: err.message
                };
            }
        });
    },
    async uploadChatAttachment (roomId, file, type) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            try {
                const fileExt = file.name.split('.').pop() || 'dat';
                const folder = type === 'image' ? 'images' : type === 'video' ? 'videos' : 'docs';
                const fileName = `${folder}/${roomId}_${Date.now()}.${fileExt}`;
                const { error: uploadError } = await client.storage.from('chat-attachments').upload(fileName, file, {
                    contentType: file.type,
                    upsert: false
                });
                if (uploadError) throw uploadError;
                const { data } = client.storage.from('chat-attachments').getPublicUrl(fileName);
                return {
                    data: data.publicUrl,
                    error: null
                };
            } catch (err) {
                return {
                    data: null,
                    error: err.message
                };
            }
        });
    },
    async updateOnlineStatus (userId, isOnline) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { error } = await client.from('profiles').update({
                is_online: isOnline,
                last_seen: new Date().toISOString()
            }).eq('id', userId);
            return {
                error: error?.message || null
            };
        });
    },
    async getRoomParticipantsProfiles (roomId) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { data, error } = await client.from('room_participants').select('profiles (*)').eq('room_id', roomId);
            if (error) return {
                data: [],
                error: error.message
            };
            return {
                data: data.map((p)=>p.profiles),
                error: null
            };
        });
    },
    async sendConnectionRequest (targetUserId) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { data: { user } } = await client.auth.getUser();
            if (!user) return {
                error: 'Not authenticated'
            };
            const { error } = await client.from('connections').insert({
                requester_id: user.id,
                addressee_id: targetUserId,
                status: 'pending'
            });
            return {
                error: error?.message || null
            };
        });
    },
    async getPendingRequests () {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { data: { user } } = await client.auth.getUser();
            if (!user) return {
                data: [],
                error: 'Not authenticated'
            };
            const { data, error } = await client.from('connections').select(`
                    id,
                    requester_id,
                    created_at,
                    profiles:requester_id (
                        id,
                        username,
                        full_name,
                        avatar_url
                    )
                `).eq('addressee_id', user.id).eq('status', 'pending');
            if (error) return {
                data: [],
                error: error.message
            };
            return {
                data: data || [],
                error: null
            };
        });
    },
    async getAcceptedConnections () {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { data: { user } } = await client.auth.getUser();
            if (!user) return {
                data: [],
                error: 'Not authenticated'
            };
            // Get connections where I am requester OR addressee
            const { data, error } = await client.from('connections').select(`
                    id,
                    requester_id,
                    addressee_id,
                    status,
                    created_at,
                    requester:requester_id (id, username, full_name, avatar_url, is_online, last_seen, gender, age),
                    addressee:addressee_id (id, username, full_name, avatar_url, is_online, last_seen, gender, age)
                `).or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`).eq('status', 'accepted');
            if (error) return {
                data: [],
                error: error.message
            };
            // Transform to just return the OTHER user's profile
            const connections = data.map((conn)=>{
                const isRequester = conn.requester_id === user.id;
                const profile = isRequester ? conn.addressee : conn.requester;
                return {
                    connection_id: conn.id,
                    ...profile
                };
            });
            return {
                data: connections,
                error: null
            };
        });
    },
    async respondToConnection (connectionId, status) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { error } = await client.from('connections').update({
                status
            }).eq('id', connectionId);
            if (error) return {
                data: null,
                error: error.message
            };
            let roomId = null;
            // If accepted, create a direct chat room
            if (status === 'accepted') {
                const { data: connection } = await client.from('connections').select('requester_id, addressee_id').eq('id', connectionId).single();
                if (connection) {
                    const { data: id, error: chatError } = await this.createDirectChat(connection.requester_id);
                    if (chatError) return {
                        data: null,
                        error: chatError
                    };
                    roomId = id;
                }
            }
            return {
                data: roomId,
                error: null
            };
        });
    },
    async deleteRoom (roomId) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { error } = await client.from('rooms').delete().eq('id', roomId);
            return {
                error: error?.message || null
            };
        });
    },
    async updateMessageStatus (messageId, status) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const updateObj = {
                status
            };
            if (status === 'delivered') updateObj.delivered_at = new Date().toISOString();
            if (status === 'read') updateObj.read_at = new Date().toISOString();
            const { error } = await client.from('messages').update(updateObj).eq('id', messageId);
            return {
                error: error?.message || null
            };
        });
    },
    async markRoomAsRead (roomId, userId) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { error } = await client.from('messages').update({
                status: 'read',
                read_at: new Date().toISOString()
            }).eq('room_id', roomId).neq('user_id', userId).neq('status', 'read');
            return {
                error: error?.message || null
            };
        });
    },
    async blockUser (targetUserId) {
        console.log('[ChatService] Blocking user:', targetUserId);
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { data: { user } } = await client.auth.getUser();
            if (!user) return {
                error: 'Not authenticated'
            };
            const { error } = await client.from('blocked_users').insert({
                blocker_id: user.id,
                blocked_id: targetUserId
            });
            if (error) {
                console.error('[ChatService] blockUser error:', error);
                return {
                    error: error.message
                };
            }
            return {
                error: null
            };
        });
    },
    async unblockUser (targetUserId) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { data: { user } } = await client.auth.getUser();
            if (!user) return {
                error: 'Not authenticated'
            };
            const { error } = await client.from('blocked_users').delete().eq('blocker_id', user.id).eq('blocked_id', targetUserId);
            return {
                error: error?.message || null
            };
        });
    },
    async isBlocked (targetUserId) {
        const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { data: { user } } = await client.auth.getUser();
            if (!user) return {
                data: null
            };
            return await client.from('blocked_users').select('id').or(`and(blocker_id.eq.${user.id},blocked_id.eq.${targetUserId}),and(blocker_id.eq.${targetUserId},blocked_id.eq.${user.id})`).maybeSingle();
        });
        return !!data;
    },
    async getBlockedUsers () {
        console.log('[ChatService] Fetching blocked users...');
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { data: { user } } = await client.auth.getUser();
            if (!user) return {
                data: [],
                error: 'Not authenticated'
            };
            const { data, error } = await client.from('blocked_users').select(`
                    id,
                    blocked_id,
                    profiles:blocked_id (*)
                `).eq('blocker_id', user.id);
            if (error) {
                console.error('[ChatService] getBlockedUsers error:', error);
                return {
                    data: [],
                    error: error.message
                };
            }
            const blockedUsers = (data || []).map((item)=>({
                    id: item.blocked_id,
                    username: item.profiles?.username || 'Unknown',
                    full_name: item.profiles?.full_name || 'Unknown Gossiper',
                    avatar_url: item.profiles?.avatar_url
                }));
            console.log(`[ChatService] Found ${blockedUsers.length} blocked users`);
            return {
                data: blockedUsers,
                error: null
            };
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/contexts/chat-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatContext",
    ()=>ChatContext,
    "ChatProvider",
    ()=>ChatProvider,
    "useChat",
    ()=>useChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/services/chat-service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ChatContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ChatProvider({ children }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [pendingRequests, setPendingRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lockedChats, setLockedChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const channelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isFetchingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasInitialLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatProvider.useEffect": ()=>{
            if (user?.id) {
                if (!hasInitialLoaded.current) {
                    setLoading(true);
                    loadInitialData().finally({
                        "ChatProvider.useEffect": ()=>{
                            setLoading(false);
                            hasInitialLoaded.current = true;
                        }
                    }["ChatProvider.useEffect"]);
                }
                setupRealtime();
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].updateOnlineStatus(user.id, true);
                const pollInterval = setInterval({
                    "ChatProvider.useEffect.pollInterval": ()=>{
                        refreshChats();
                    }
                }["ChatProvider.useEffect.pollInterval"], 30000);
                return ({
                    "ChatProvider.useEffect": ()=>{
                        clearInterval(pollInterval);
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].updateOnlineStatus(user.id, false);
                        cleanupRealtime();
                    }
                })["ChatProvider.useEffect"];
            } else {
                setChats([]);
                setMessages({});
                setPendingRequests([]);
                setLockedChats({});
                setLoading(false);
                hasInitialLoaded.current = false;
                cleanupRealtime();
            }
        }
    }["ChatProvider.useEffect"], [
        user?.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatProvider.useEffect": ()=>{
            const stored = localStorage.getItem('LOCKED_CHATS');
            if (stored) setLockedChats(JSON.parse(stored));
        }
    }["ChatProvider.useEffect"], []);
    const cleanupRealtime = ()=>{
        if (channelRef.current) {
            supabase.removeChannel(channelRef.current);
            channelRef.current = null;
        }
    };
    const loadInitialData = async ()=>{
        if (isFetchingRef.current) return;
        isFetchingRef.current = true;
        try {
            const [roomsResponse, requestsResponse, connectionsResponse] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].getMyRooms(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].getPendingRequests(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].getAcceptedConnections()
            ]);
            if (requestsResponse.data) {
                setPendingRequests(requestsResponse.data);
            }
            const formattedChats = [];
            const existingUserIds = new Set();
            if (roomsResponse.data) {
                const chatPromises = roomsResponse.data.map((room)=>formatRoomToChat(room));
                const results = await Promise.all(chatPromises);
                results.forEach((chat)=>{
                    if (chat) {
                        formattedChats.push(chat);
                        if (chat.type === 'direct') existingUserIds.add(chat.userId);
                    }
                });
            }
            if (connectionsResponse.data) {
                connectionsResponse.data.forEach((conn)=>{
                    if (!existingUserIds.has(conn.id)) {
                        formattedChats.push({
                            id: `temp_${conn.id}`,
                            userId: conn.id,
                            userName: conn.username || conn.full_name || 'User',
                            userAvatar: conn.avatar_url || `https://i.pravatar.cc/150?u=${conn.id}`,
                            lastMessage: 'Tap to start chatting',
                            lastMessageTime: new Date(conn.created_at || Date.now()),
                            unreadCount: 0,
                            online: conn.is_online || false,
                            typing: false,
                            type: 'direct',
                            age: conn.age,
                            gender: conn.gender
                        });
                    }
                });
            }
            setChats((prev)=>{
                const sorted = [
                    ...formattedChats
                ].sort((a, b)=>b.lastMessageTime.getTime() - a.lastMessageTime.getTime());
                if (JSON.stringify(prev) === JSON.stringify(sorted)) return prev;
                return sorted;
            });
        } catch (error) {
            console.error('[ChatContext] Load error:', error);
        } finally{
            isFetchingRef.current = false;
        }
    };
    const formatRoomToChat = async (room_0)=>{
        const participants = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].getRoomParticipants(room_0.id);
        const { data: msgs } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].getMessages(room_0.id, 1, false);
        const lastMsg = msgs?.[0];
        if (room_0.type === 'direct') {
            const otherUser = participants.data?.find((p)=>p.id !== user?.id);
            if (otherUser) {
                const { count } = await supabase.from('messages').select('*', {
                    count: 'exact',
                    head: true
                }).eq('room_id', room_0.id).neq('user_id', user?.id).neq('status', 'read');
                return {
                    id: room_0.id,
                    userId: otherUser.id,
                    userName: otherUser.username || otherUser.full_name || 'User',
                    userAvatar: otherUser.avatar_url || `https://i.pravatar.cc/150?u=${otherUser.id}`,
                    lastMessage: lastMsg?.content || 'Started a gossip...',
                    lastMessageTime: lastMsg ? new Date(lastMsg.created_at) : new Date(room_0.created_at),
                    unreadCount: count || 0,
                    online: otherUser.is_online || false,
                    typing: false,
                    type: 'direct',
                    age: otherUser.age,
                    gender: otherUser.gender
                };
            }
        } else {
            const { count: count_0 } = await supabase.from('messages').select('*', {
                count: 'exact',
                head: true
            }).eq('room_id', room_0.id).neq('user_id', user?.id).neq('status', 'read');
            const onlineCount = participants.data?.filter((p_0)=>p_0.is_online).length || 0;
            const memberCount = participants.data?.length || 0;
            return {
                id: room_0.id,
                userId: room_0.id,
                userName: room_0.name || 'Gossip Group',
                userAvatar: room_0.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(room_0.name || 'G')}&background=FFB6C1&color=000`,
                lastMessage: lastMsg?.content || 'New gossip group created!',
                lastMessageTime: lastMsg ? new Date(lastMsg.created_at) : new Date(room_0.created_at),
                unreadCount: count_0 || 0,
                online: onlineCount > 0,
                onlineCount,
                memberCount,
                description: room_0.description || 'Welcome to the gossip group!',
                createdBy: room_0.created_by,
                typing: false,
                type: 'group'
            };
        }
        return null;
    };
    const setupRealtime = ()=>{
        cleanupRealtime();
        if (!user?.id) return;
        const channel = supabase.channel('gossip-main', {
            config: {
                broadcast: {
                    self: false
                },
                presence: {
                    key: user.id
                }
            }
        }).on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'messages'
        }, async (payload)=>{
            const newMessage = payload.new;
            if (newMessage.user_id !== user?.id && newMessage.status === 'sent') {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].updateMessageStatus(newMessage.id, 'delivered');
            }
            const formattedMsg = {
                id: newMessage.id,
                chatId: newMessage.room_id,
                senderId: newMessage.user_id,
                content: newMessage.content,
                type: newMessage.message_type,
                timestamp: new Date(newMessage.created_at),
                status: newMessage.status,
                mediaUrl: newMessage.media_url
            };
            setMessages((prev_0)=>{
                const currentMsgs = prev_0[newMessage.room_id] || [];
                if (currentMsgs.some((m)=>m.id === formattedMsg.id)) return prev_0;
                return {
                    ...prev_0,
                    [newMessage.room_id]: [
                        ...currentMsgs,
                        formattedMsg
                    ]
                };
            });
            refreshChats();
        }).on('postgres_changes', {
            event: 'UPDATE',
            schema: 'public',
            table: 'messages'
        }, (payload_0)=>{
            const updatedMsg = payload_0.new;
            setMessages((prev_1)=>{
                const roomMsgs = prev_1[updatedMsg.room_id] || [];
                return {
                    ...prev_1,
                    [updatedMsg.room_id]: roomMsgs.map((m_0)=>m_0.id === updatedMsg.id ? {
                            ...m_0,
                            status: updatedMsg.status
                        } : m_0)
                };
            });
        }).on('postgres_changes', {
            event: 'UPDATE',
            schema: 'public',
            table: 'profiles'
        }, (payload_1)=>{
            const updatedProfile = payload_1.new;
            setChats((prev_2)=>prev_2.map((chat_0)=>chat_0.userId === updatedProfile.id ? {
                        ...chat_0,
                        online: updatedProfile.is_online
                    } : chat_0));
        }).on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'connections',
            filter: `addressee_id=eq.${user.id}`
        }, async ()=>{
            const { data: requests } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].getPendingRequests();
            if (requests) setPendingRequests(requests);
        }).on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'room_participants',
            filter: `user_id=eq.${user.id}`
        }, ()=>{
            refreshChats();
        }).on('broadcast', {
            event: 'typing'
        }, (payload_2)=>{
            const { chatId, userId, isTyping } = payload_2.payload;
            if (userId === user?.id) return;
            setChats((prev_3)=>prev_3.map((chat_1)=>chat_1.id === chatId ? {
                        ...chat_1,
                        typing: isTyping
                    } : chat_1));
        }).subscribe();
        channelRef.current = channel;
    };
    const sendMessage = async (chatId_0, content, type = 'text', mediaUrl)=>{
        const { data: sentMsg, error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].sendMessage(chatId_0, content, type, mediaUrl);
        if (error_0) throw new Error(error_0);
        if (sentMsg) {
            const formattedMsg_0 = {
                id: sentMsg.id,
                chatId: sentMsg.room_id,
                senderId: sentMsg.user_id,
                content: sentMsg.content,
                type: sentMsg.message_type,
                timestamp: new Date(sentMsg.created_at),
                status: sentMsg.status,
                mediaUrl: sentMsg.media_url
            };
            setMessages((prev_4)=>{
                const currentMsgs_0 = prev_4[chatId_0] || [];
                if (currentMsgs_0.some((m_1)=>m_1.id === formattedMsg_0.id)) return prev_4;
                return {
                    ...prev_4,
                    [chatId_0]: [
                        ...currentMsgs_0,
                        formattedMsg_0
                    ]
                };
            });
        }
    };
    const markAsRead = async (chatId_1)=>{
        if (!user?.id) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].markRoomAsRead(chatId_1, user.id);
        setChats((prev_5)=>prev_5.map((chat_2)=>chat_2.id === chatId_1 ? {
                    ...chat_2,
                    unreadCount: 0
                } : chat_2));
        setMessages((prev_6)=>{
            const roomMsgs_0 = prev_6[chatId_1];
            if (!roomMsgs_0) return prev_6;
            return {
                ...prev_6,
                [chatId_1]: roomMsgs_0.map((m_2)=>m_2.senderId !== user.id ? {
                        ...m_2,
                        status: 'read'
                    } : m_2)
            };
        });
    };
    const setTyping = async (chatId_2, isTyping_0)=>{
        if (channelRef.current) {
            await channelRef.current.send({
                type: 'broadcast',
                event: 'typing',
                payload: {
                    chatId: chatId_2,
                    userId: user?.id,
                    isTyping: isTyping_0
                }
            });
        }
    };
    const createChat = async (userId_0, userName, userAvatar)=>{
        const { data: roomId, error: error_1 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].createDirectChat(userId_0);
        if (error_1) throw new Error(error_1);
        await loadInitialData();
        return roomId;
    };
    const sendRequest = async (userId_1)=>{
        const { error: error_2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].sendConnectionRequest(userId_1);
        if (error_2) throw new Error(error_2);
    };
    const respondToRequest = async (requestId, status)=>{
        setLoading(true);
        const { data: roomId_0, error: error_3 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].respondToConnection(requestId, status);
        if (error_3) {
            setLoading(false);
            return null;
        }
        setPendingRequests((prev_7)=>prev_7.filter((r)=>r.id !== requestId));
        await loadInitialData();
        setLoading(false);
        return roomId_0;
    };
    const fetchMessages = async (chatId_3)=>{
        const { data, error: error_4 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].getMessages(chatId_3);
        if (!error_4 && data) {
            const formattedMsgs = data.map((m_3)=>({
                    id: m_3.id,
                    chatId: m_3.room_id,
                    senderId: m_3.user_id,
                    content: m_3.content,
                    type: m_3.message_type,
                    timestamp: new Date(m_3.created_at),
                    status: m_3.status,
                    mediaUrl: m_3.media_url
                }));
            setMessages((prev_8)=>({
                    ...prev_8,
                    [chatId_3]: formattedMsgs
                }));
        }
    };
    const refreshChats = async ()=>{
        await loadInitialData();
    };
    const blockUser = async (userId_2)=>{
        const { error: error_5 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].blockUser(userId_2);
        if (error_5) throw new Error(error_5);
        await refreshChats();
    };
    const unblockUser = async (userId_3)=>{
        const { error: error_6 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].unblockUser(userId_3);
        if (error_6) throw new Error(error_6);
        await refreshChats();
    };
    const deleteGroup = async (roomId_1)=>{
        const { error: error_7 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].deleteRoom(roomId_1);
        if (error_7) throw new Error(error_7);
        await refreshChats();
    };
    const updateGroup = async (roomId_2, updates)=>{
        const { error: error_8 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].updateRoom(roomId_2, updates);
        if (error_8) throw new Error(error_8);
        await refreshChats();
    };
    const getParticipants = async (roomId_3)=>{
        const { data: data_0, error: error_9 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatService"].getRoomParticipantsProfiles(roomId_3);
        if (error_9) throw new Error(error_9);
        return data_0 || [];
    };
    const lockChat = async (chatId_4, pin)=>{
        const updated = {
            ...lockedChats,
            [chatId_4]: pin
        };
        setLockedChats(updated);
        localStorage.setItem('LOCKED_CHATS', JSON.stringify(updated));
    };
    const unlockChat = async (chatId_5)=>{
        const updated_0 = {
            ...lockedChats
        };
        delete updated_0[chatId_5];
        setLockedChats(updated_0);
        localStorage.setItem('LOCKED_CHATS', JSON.stringify(updated_0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatContext.Provider, {
        value: {
            chats,
            messages,
            pendingRequests,
            loading,
            sendMessage,
            markAsRead,
            setTyping,
            createChat,
            sendRequest,
            respondToRequest,
            refreshChats,
            blockUser,
            unblockUser,
            deleteGroup,
            fetchMessages,
            updateGroup,
            getParticipants,
            lockedChats,
            lockChat,
            unlockChat
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/GOSSIP/src/contexts/chat-context.tsx",
        lineNumber: 508,
        columnNumber: 10
    }, this);
}
_s(ChatProvider, "HS/LX0JS1Dboq/LXZ4QoQUemnnc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ChatProvider;
function useChat() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "e60f9a8f3486a317c80c694351e9fc18bb7465d291680102147b72a4f3d3a763") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e60f9a8f3486a317c80c694351e9fc18bb7465d291680102147b72a4f3d3a763";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ChatContext);
    if (!context) {
        throw new Error("useChat must be used within ChatProvider");
    }
    return context;
}
_s1(useChat, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ChatProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/services/status-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusService",
    ()=>StatusService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
;
const StatusService = {
    async getStatuses () {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                // Fetch statuses from the last 24 hours
                const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
                const { data, error } = await client.from('statuses').select(`
            *,
            profiles (
              id,
              username,
              full_name,
              avatar_url
            )
          `).gt('created_at', twentyFourHoursAgo).order('created_at', {
                    ascending: false
                });
                if (error) return {
                    data: [],
                    error: error.message
                };
                return {
                    data: data || [],
                    error: null
                };
            });
        } catch (err) {
            return {
                data: [],
                error: err.message
            };
        }
    },
    async uploadStatus (mediaUrl, caption) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');
                const { error } = await client.from('statuses').insert({
                    user_id: user.id,
                    media_url: mediaUrl,
                    caption
                });
                if (error) return {
                    error: error.message
                };
                return {
                    error: null
                };
            });
        } catch (err) {
            return {
                error: err.message
            };
        }
    },
    async uploadMedia (file) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            try {
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');
                console.log('[StatusService] Starting upload for file:', file.name);
                const fileExt = file.name.split('.').pop();
                const fileName = `${user.id}_${Date.now()}.${fileExt}`;
                const filePath = `${fileName}`;
                const { error: uploadError } = await client.storage.from('status-uploads').upload(filePath, file, {
                    contentType: file.type,
                    upsert: false
                });
                if (uploadError) {
                    console.error('[StatusService] Upload error:', uploadError);
                    throw uploadError;
                }
                const { data } = client.storage.from('status-uploads').getPublicUrl(filePath);
                console.log('[StatusService] Upload successful, URL:', data.publicUrl);
                return {
                    data: data.publicUrl,
                    error: null
                };
            } catch (err) {
                console.error('[StatusService] Upload failed:', err);
                return {
                    data: null,
                    error: err.message
                };
            }
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/contexts/status-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusProvider",
    ()=>StatusProvider,
    "useStatus",
    ()=>useStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$status$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/services/status-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const StatusContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function StatusProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "299cf1d6f564e06ebda1a5bbe17c0ba1b6bdcc9d2e692a3200342dd11159f23d") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "299cf1d6f564e06ebda1a5bbe17c0ba1b6bdcc9d2e692a3200342dd11159f23d";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [statuses, setStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const supabase = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "StatusProvider[loadStatuses]": async ()=>{
                setLoading(true);
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$status$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusService"].getStatuses();
                if (data) {
                    setStatuses(data);
                }
                setLoading(false);
            }
        })["StatusProvider[loadStatuses]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const loadStatuses = t3;
    let t4;
    if ($[4] !== user) {
        t4 = ({
            "StatusProvider[useEffect()]": ()=>{
                if (user) {
                    loadStatuses();
                    const channel = supabase.channel("public-statuses").on("postgres_changes", {
                        event: "*",
                        schema: "public",
                        table: "statuses"
                    }, {
                        "StatusProvider[useEffect() > (anonymous)()]": ()=>{
                            loadStatuses();
                        }
                    }["StatusProvider[useEffect() > (anonymous)()]"]).subscribe();
                    return ()=>{
                        supabase.removeChannel(channel);
                    };
                }
            }
        })["StatusProvider[useEffect()]"];
        $[4] = user;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = user?.id;
    let t6;
    if ($[6] !== t5) {
        t6 = [
            t5
        ];
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t6);
    const uploadStatus = _StatusProviderUploadStatus;
    let t7;
    if ($[8] !== loading || $[9] !== statuses) {
        t7 = {
            statuses,
            loading,
            uploadStatus,
            refreshStatuses: loadStatuses
        };
        $[8] = loading;
        $[9] = statuses;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== children || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusContext.Provider, {
            value: t7,
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/contexts/status-context.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[11] = children;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    return t8;
}
_s(StatusProvider, "eGJy0EMt6yOBhGqVqhDgHj6tFhQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = StatusProvider;
async function _StatusProviderUploadStatus(mediaUrl, caption) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$status$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusService"].uploadStatus(mediaUrl, caption);
    if (error) {
        throw new Error(error);
    }
}
function useStatus() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "299cf1d6f564e06ebda1a5bbe17c0ba1b6bdcc9d2e692a3200342dd11159f23d") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "299cf1d6f564e06ebda1a5bbe17c0ba1b6bdcc9d2e692a3200342dd11159f23d";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StatusContext);
    if (!context) {
        throw new Error("useStatus must be used within StatusProvider");
    }
    return context;
}
_s1(useStatus, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "StatusProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Avatar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "560198c787f28ce11392550ee309bc3b8c8972f002983c63be086b36c83ff738") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "560198c787f28ce11392550ee309bc3b8c8972f002983c63be086b36c83ff738";
    }
    const { src, fallback, className } = t0;
    let t1;
    if ($[1] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center", className);
        $[1] = className;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== fallback || $[4] !== src) {
        t2 = src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: fallback,
            className: "w-full h-full object-cover"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx",
            lineNumber: 31,
            columnNumber: 16
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium text-muted-foreground uppercase",
            children: fallback.slice(0, 2)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx",
            lineNumber: 31,
            columnNumber: 90
        }, this);
        $[3] = fallback;
        $[4] = src;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t1 || $[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_c = Avatar;
var _c;
__turbopack_context__.k.register(_c, "Avatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/components/call-overlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallOverlay",
    ()=>CallOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/call-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CallOverlay(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(102);
    if ($[0] !== "6c4aa9103c5ef4ee4656d8083b52b78045e1ba9f6ff97b2363f1a222aaeded13") {
        for(let $i = 0; $i < 102; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6c4aa9103c5ef4ee4656d8083b52b78045e1ba9f6ff97b2363f1a222aaeded13";
    }
    const { minimize: t1, onClose } = t0;
    const minimize = t1 === undefined ? false : t1;
    const { localStream, remoteStream, callType, connectionState, signalingStatus, iceCandidateCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCall"])();
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(minimize);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVideoOff, setIsVideoOff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const localVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const remoteVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    if ($[1] !== localStream) {
        t2 = ({
            "CallOverlay[useEffect()]": ()=>{
                if (localVideoRef.current && localStream) {
                    localVideoRef.current.srcObject = localStream;
                }
            }
        })["CallOverlay[useEffect()]"];
        t3 = [
            localStream
        ];
        $[1] = localStream;
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[4] !== remoteStream) {
        t4 = ({
            "CallOverlay[useEffect()]": ()=>{
                if (remoteVideoRef.current && remoteStream) {
                    remoteVideoRef.current.srcObject = remoteStream;
                    remoteVideoRef.current.play().catch(_CallOverlayUseEffectAnonymous);
                }
            }
        })["CallOverlay[useEffect()]"];
        t5 = [
            remoteStream
        ];
        $[4] = remoteStream;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[7] !== isMinimized) {
        t6 = ({
            "CallOverlay[toggleMinimize]": ()=>setIsMinimized(!isMinimized)
        })["CallOverlay[toggleMinimize]"];
        $[7] = isMinimized;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const toggleMinimize = t6;
    let t7;
    if ($[9] !== isMuted || $[10] !== localStream) {
        t7 = ({
            "CallOverlay[toggleMute]": ()=>{
                if (localStream) {
                    localStream.getAudioTracks().forEach(_CallOverlayToggleMuteAnonymous);
                    setIsMuted(!isMuted);
                }
            }
        })["CallOverlay[toggleMute]"];
        $[9] = isMuted;
        $[10] = localStream;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const toggleMute = t7;
    let t8;
    if ($[12] !== isVideoOff || $[13] !== localStream) {
        t8 = ({
            "CallOverlay[toggleVideo]": ()=>{
                if (localStream) {
                    localStream.getVideoTracks().forEach(_CallOverlayToggleVideoAnonymous);
                    setIsVideoOff(!isVideoOff);
                }
            }
        })["CallOverlay[toggleVideo]"];
        $[12] = isVideoOff;
        $[13] = localStream;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const toggleVideo = t8;
    const isAudioOnly = callType === "audio";
    const t9 = isMinimized ? "bottom-4 right-4 w-72 h-48 rounded-2xl" : "inset-4 rounded-3xl";
    let t10;
    if ($[15] !== t9) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed transition-all duration-500 ease-in-out bg-black/90 backdrop-blur-md shadow-2xl border border-white/10 overflow-hidden z-50", t9);
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== signalingStatus) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "Signal: ",
                signalingStatus
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[17] = signalingStatus;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== connectionState) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "WebRTC: ",
                connectionState
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[19] = connectionState;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== iceCandidateCount) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "Candidates: ",
                iceCandidateCount
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[21] = iceCandidateCount;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== callType) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "Type: ",
                callType
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[23] = callType;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== localStream) {
        t15 = localStream?.getTracks().length || 0;
        $[25] = localStream;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "L-Tracks: ",
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[27] = t15;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== remoteStream) {
        t17 = remoteStream?.getTracks().length || 0;
        $[29] = remoteStream;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "R-Tracks: ",
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[31] = t17;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== t11 || $[34] !== t12 || $[35] !== t13 || $[36] !== t14 || $[37] !== t16 || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 left-4 z-50 bg-black/50 p-2 rounded text-xs text-white/70 font-mono pointer-events-none",
            children: [
                t11,
                t12,
                t13,
                t14,
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[33] = t11;
        $[34] = t12;
        $[35] = t13;
        $[36] = t14;
        $[37] = t16;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== connectionState || $[41] !== isAudioOnly || $[42] !== remoteStream) {
        t20 = (isAudioOnly || !remoteStream) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center animate-pulse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                    fallback: "Remote",
                    className: "w-32 h-32 bg-zinc-800 text-zinc-500 mb-6 text-4xl"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                    lineNumber: 214,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-400 text-lg font-medium",
                    children: connectionState === "connected" ? "Connected" : "Connecting..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                    lineNumber: 214,
                    columnNumber: 193
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 214,
            columnNumber: 45
        }, this);
        $[40] = connectionState;
        $[41] = isAudioOnly;
        $[42] = remoteStream;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    const t21 = (isAudioOnly || !remoteStream) && "opacity-0 pointer-events-none";
    let t22;
    if ($[44] !== t21) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 w-full h-full object-cover", t21);
        $[44] = t21;
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    let t23;
    if ($[46] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            ref: remoteVideoRef,
            autoPlay: true,
            playsInline: true,
            className: t22
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[46] = t22;
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== t20 || $[49] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-zinc-900 flex items-center justify-center relative",
            children: [
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[48] = t20;
        $[49] = t23;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== isAudioOnly || $[52] !== isMinimized || $[53] !== localStream) {
        t25 = !isAudioOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute transition-all duration-300 bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-white/10 z-10", isMinimized ? "hidden" : "top-4 right-4 w-48 h-36"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex items-center justify-center relative bg-black",
                children: [
                    !localStream && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground",
                        children: "You"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                        lineNumber: 250,
                        columnNumber: 315
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: localVideoRef,
                        autoPlay: true,
                        muted: true,
                        playsInline: true,
                        className: "w-full h-full object-cover transform -scale-x-100"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                        lineNumber: 250,
                        columnNumber: 374
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                lineNumber: 250,
                columnNumber: 216
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 250,
            columnNumber: 27
        }, this);
        $[51] = isAudioOnly;
        $[52] = isMinimized;
        $[53] = localStream;
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    const t26 = isMinimized ? "opacity-0 hover:opacity-100" : "opacity-100";
    let t27;
    if ($[55] !== t26) {
        t27 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end transition-opacity z-20", t26);
        $[55] = t26;
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    let t28;
    if ($[57] !== connectionState || $[58] !== isAudioOnly || $[59] !== isMinimized) {
        t28 = !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-white",
                    children: isAudioOnly ? "Voice Call" : "Video Call"
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                    lineNumber: 269,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full", connectionState === "connected" ? "bg-green-500" : "bg-yellow-500")
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                            lineNumber: 269,
                            columnNumber: 211
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 capitalize",
                            children: connectionState
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                            lineNumber: 269,
                            columnNumber: 326
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                    lineNumber: 269,
                    columnNumber: 155
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 269,
            columnNumber: 27
        }, this);
        $[57] = connectionState;
        $[58] = isAudioOnly;
        $[59] = isMinimized;
        $[60] = t28;
    } else {
        t28 = $[60];
    }
    const t29 = isMuted ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20";
    let t30;
    if ($[61] !== t29) {
        t30 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-full transition-all", t29);
        $[61] = t29;
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    let t31;
    if ($[63] !== isMuted) {
        t31 = isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 288,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 288,
            columnNumber: 54
        }, this);
        $[63] = isMuted;
        $[64] = t31;
    } else {
        t31 = $[64];
    }
    let t32;
    if ($[65] !== t30 || $[66] !== t31 || $[67] !== toggleMute) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleMute,
            className: t30,
            children: t31
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[65] = t30;
        $[66] = t31;
        $[67] = toggleMute;
        $[68] = t32;
    } else {
        t32 = $[68];
    }
    const t33 = isVideoOff ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20";
    let t34;
    if ($[69] !== t33) {
        t34 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-full transition-all", t33);
        $[69] = t33;
        $[70] = t34;
    } else {
        t34 = $[70];
    }
    let t35;
    if ($[71] !== isVideoOff) {
        t35 = isVideoOff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 315,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 315,
            columnNumber: 59
        }, this);
        $[71] = isVideoOff;
        $[72] = t35;
    } else {
        t35 = $[72];
    }
    let t36;
    if ($[73] !== t34 || $[74] !== t35 || $[75] !== toggleVideo) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleVideo,
            className: t34,
            children: t35
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 323,
            columnNumber: 11
        }, this);
        $[73] = t34;
        $[74] = t35;
        $[75] = toggleVideo;
        $[76] = t36;
    } else {
        t36 = $[76];
    }
    let t37;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[77] = t37;
    } else {
        t37 = $[77];
    }
    let t38;
    if ($[78] !== onClose) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "p-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all shadow-lg hover:shadow-red-500/30 scale-100 hover:scale-110",
            children: t37
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[78] = onClose;
        $[79] = t38;
    } else {
        t38 = $[79];
    }
    let t39;
    if ($[80] !== isMinimized) {
        t39 = isMinimized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 348,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 348,
            columnNumber: 61
        }, this);
        $[80] = isMinimized;
        $[81] = t39;
    } else {
        t39 = $[81];
    }
    let t40;
    if ($[82] !== t39 || $[83] !== toggleMinimize) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleMinimize,
            className: "p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all",
            children: t39
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[82] = t39;
        $[83] = toggleMinimize;
        $[84] = t40;
    } else {
        t40 = $[84];
    }
    let t41;
    if ($[85] !== t32 || $[86] !== t36 || $[87] !== t38 || $[88] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t32,
                t36,
                t38,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[85] = t32;
        $[86] = t36;
        $[87] = t38;
        $[88] = t40;
        $[89] = t41;
    } else {
        t41 = $[89];
    }
    let t42;
    if ($[90] !== t27 || $[91] !== t28 || $[92] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t27,
            children: [
                t28,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[90] = t27;
        $[91] = t28;
        $[92] = t41;
        $[93] = t42;
    } else {
        t42 = $[93];
    }
    let t43;
    if ($[94] !== t24 || $[95] !== t25 || $[96] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full flex items-center justify-center",
            children: [
                t24,
                t25,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        $[94] = t24;
        $[95] = t25;
        $[96] = t42;
        $[97] = t43;
    } else {
        t43 = $[97];
    }
    let t44;
    if ($[98] !== t10 || $[99] !== t19 || $[100] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t19,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[98] = t10;
        $[99] = t19;
        $[100] = t43;
        $[101] = t44;
    } else {
        t44 = $[101];
    }
    return t44;
}
_s(CallOverlay, "fjBcwdLrQESKqxfCYr3I/Me6TEo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCall"]
    ];
});
_c = CallOverlay;
function _CallOverlayToggleVideoAnonymous(track_0) {
    return track_0.enabled = !track_0.enabled;
}
function _CallOverlayToggleMuteAnonymous(track) {
    return track.enabled = !track.enabled;
}
function _CallOverlayUseEffectAnonymous(e) {
    return console.error("Error auto-playing video:", e);
}
var _c;
__turbopack_context__.k.register(_c, "CallOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/services/call-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallService",
    ()=>CallService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
;
const CallService = {
    async initiateCall (receiverId, type, offerSdp, roomId) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');
                // Check if blocked
                const { data: blocked } = await client.from('blocked_users').select('id').or(`and(blocker_id.eq.${user.id},blocked_id.eq.${receiverId}),and(blocker_id.eq.${receiverId},blocked_id.eq.${user.id})`).maybeSingle();
                if (blocked) {
                    throw new Error('User is blocked');
                }
                const { data, error } = await client.from('calls').insert({
                    caller_id: user.id,
                    receiver_id: receiverId || null,
                    room_id: roomId || null,
                    type,
                    status: 'ringing',
                    offer_sdp: offerSdp
                }).select().single();
                if (error) return {
                    data: null,
                    error: error.message
                };
                return {
                    data: data,
                    error: null
                };
            });
        } catch (err) {
            return {
                data: null,
                error: err.message
            };
        }
    },
    async updateCallStatus (callId, status, answerSdp) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const updateData = {
                    status
                };
                if (answerSdp) updateData.answer_sdp = answerSdp;
                if (status === 'ended' || status === 'rejected' || status === 'missed') {
                    updateData.ended_at = new Date().toISOString();
                    // Calculate duration if it's ending
                    if (status === 'ended') {
                        const { data: call } = await client.from('calls').select('created_at').eq('id', callId).single();
                        if (call) {
                            const start = new Date(call.created_at).getTime();
                            const end = new Date().getTime();
                            updateData.duration = Math.floor((end - start) / 1000);
                        }
                    }
                }
                const { error } = await client.from('calls').update(updateData).eq('id', callId);
                return {
                    error: error?.message || null
                };
            });
        } catch (err) {
            return {
                error: err.message
            };
        }
    },
    async sendIceCandidate (callId, candidate) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data: { user } } = await client.auth.getUser();
                if (!user) return {
                    error: 'Not authenticated'
                };
                const { error } = await client.from('ice_candidates').insert({
                    call_id: callId,
                    sender_id: user.id,
                    candidate: candidate // Should be object
                });
                return {
                    error: error?.message || null
                };
            });
        } catch (err) {
            return {
                error: err.message
            };
        }
    },
    async getIceCandidates (callId) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data, error } = await client.from('ice_candidates').select('*').eq('call_id', callId).order('created_at', {
                    ascending: true
                });
                return {
                    data: data || [],
                    error: error?.message || null
                };
            });
        } catch (err) {
            return {
                data: [],
                error: err.message
            };
        }
    },
    async getMessages (roomId, limit = 50, ascending = false) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data, error } = await client.from('messages').select(`
                        *,
                        profiles:user_id (
                            id, username, full_name, avatar_url, gender
                        )
                    `).eq('room_id', roomId).order('created_at', {
                    ascending
                }).limit(limit);
                return {
                    data: data || [],
                    error: error?.message || null
                };
            });
        } catch (err) {
            return {
                data: [],
                error: err.message
            };
        }
    },
    async getCallHistory () {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');
                const { data, error } = await client.from('calls').select(`
                        *,
                        caller:caller_id (id, username, full_name, avatar_url, gender),
                        receiver:receiver_id (id, username, full_name, avatar_url, gender)
                    `).or(`caller_id.eq.${user.id},receiver_id.eq.${user.id}`).neq('status', 'ringing').order('created_at', {
                    ascending: false
                });
                if (error) return {
                    data: [],
                    error: error.message
                };
                return {
                    data: data || [],
                    error: null
                };
            });
        } catch (err) {
            return {
                data: [],
                error: err.message
            };
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/contexts/call-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallProvider",
    ()=>CallProvider,
    "useCall",
    ()=>useCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$call$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/call-overlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$call$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/services/call-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CallContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useCall() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "c1f197a4595ceb89872c9c9a66702aa8a4b0b9c5382f6f428c803569932a5abe") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1f197a4595ceb89872c9c9a66702aa8a4b0b9c5382f6f428c803569932a5abe";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CallContext);
    if (!context) {
        throw new Error("useCall must be used within a CallProvider");
    }
    return context;
}
_s(useCall, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
;
function CallProvider({ children }) {
    _s1();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [callDetails, setCallDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [localStream, setLocalStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [remoteStream, setRemoteStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [incomingCall, setIncomingCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [callType, setCallType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("video");
    const [connectionState, setConnectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("new");
    const [signalingStatus, setSignalingStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("disconnected");
    const [iceCandidateCount, setIceCandidateCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [callHistory, setCallHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // WebRTC refs
    const peerConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const signalingChannel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const candidateQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]); // Queue for early candidates
    // ICE servers (STUN) - Expanded list for better connectivity
    const pcConfig = {
        iceServers: [
            {
                urls: 'stun:stun.l.google.com:19302'
            },
            {
                urls: 'stun:stun1.l.google.com:19302'
            },
            {
                urls: 'stun:stun2.l.google.com:19302'
            },
            {
                urls: 'stun:global.stun.twilio.com:3478'
            }
        ]
    };
    // 1. Listen for incoming calls
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallProvider.useEffect": ()=>{
            if (!user) return;
            console.log("Listening for calls on user channel:", user.id);
            const channel = supabase.channel(`calls:${user.id}`).on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'calls',
                filter: `caller_id=neq.${user.id}`
            }, {
                "CallProvider.useEffect.channel": // Simply listening for ANY insert might be too broad if not filtering by recipients, but schema is simple. 
                // Wait, the schema 'calls' table has 'room_id'. It doesn't explicitly have 'recipient_id'. 
                // We should probably listen to "calls" where I am in the "room_participants". 
                // For simplicity/MVP, I'll listen to ALL INSERTs on 'calls' and then check if I'm in the room (client-side filtering) or if it's meant for me.
                // Actually, a better query would be filtering by my user ID if I had a 'recipient_id' column.
                // Given current schema, I will subscribe to the global 'calls' table but in a real app this is bad. 
                // Let's rely on the fact that we can subscribe to changes on the Calls table.
                async (payload)=>{
                    console.log("New call detected:", payload);
                    // Check if I am a participant in this room?
                    // For now, let's just show it if it's NOT my own call.
                    if (payload.new.caller_id !== user.id && payload.new.status === 'active') {
                        // TODO: Verify if user belongs to payload.new.room_id
                        setIncomingCall(payload.new);
                    }
                }
            }["CallProvider.useEffect.channel"]).subscribe();
            return ({
                "CallProvider.useEffect": ()=>{
                    supabase.removeChannel(channel);
                }
            })["CallProvider.useEffect"];
        }
    }["CallProvider.useEffect"], [
        user,
        supabase
    ]);
    // 2. Fetch call history
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallProvider.useEffect": ()=>{
            const fetchHistory = {
                "CallProvider.useEffect.fetchHistory": async ()=>{
                    setLoading(true);
                    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$call$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallService"].getCallHistory();
                    if (data) setCallHistory(data);
                    setLoading(false);
                }
            }["CallProvider.useEffect.fetchHistory"];
            if (user) {
                fetchHistory();
                // Subscribe to call changes to refresh history
                const channel_0 = supabase.channel('call_history_updates').on('postgres_changes', {
                    event: '*',
                    schema: 'public',
                    table: 'calls'
                }, {
                    "CallProvider.useEffect.channel_0": ()=>{
                        fetchHistory();
                    }
                }["CallProvider.useEffect.channel_0"]).subscribe();
                return ({
                    "CallProvider.useEffect": ()=>{
                        supabase.removeChannel(channel_0);
                    }
                })["CallProvider.useEffect"];
            }
        }
    }["CallProvider.useEffect"], [
        user,
        supabase
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallProvider.useEffect": ()=>{
            return ({
                "CallProvider.useEffect": ()=>{
                    localStream?.getTracks().forEach({
                        "CallProvider.useEffect": (track)=>track.stop()
                    }["CallProvider.useEffect"]);
                    peerConnection.current?.close();
                }
            })["CallProvider.useEffect"];
        }
    }["CallProvider.useEffect"], []);
    // We need a ref to store the current call ID for the callback
    const currentCallIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const remoteCandidateQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]); // Buffer for incoming candidates
    const startCall = async (roomId, isVideo = true)=>{
        try {
            setIceCandidateCount(0);
            const type = isVideo ? 'video' : 'audio';
            setCallType(type);
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                alert("Browser not supported (getUserMedia missing).");
                return;
            }
            const stream = await navigator.mediaDevices.getUserMedia({
                video: isVideo,
                audio: true
            });
            setLocalStream(stream);
            // Create PC first
            const pc = new RTCPeerConnection(pcConfig);
            peerConnection.current = pc;
            remoteCandidateQueue.current = []; // Reset queue
            // Standard "Add Track" pattern
            stream.getTracks().forEach((track_0)=>{
                pc.addTrack(track_0, stream);
            });
            // Force ALL transceivers to sendrecv (ensure bidirectional)
            pc.getTransceivers().forEach((t)=>{
                if (t.direction !== 'stopped') {
                    t.direction = 'sendrecv';
                }
            });
            // Queue for local candidates generated before Call ID is ready
            const localQueuedCandidates = [];
            // Bind ICE handler IMMEDIATELY
            pc.onicecandidate = async (event)=>{
                if (event.candidate) {
                    setIceCandidateCount((prev)=>prev + 1);
                    if (currentCallIdRef.current) {
                        // Call ID ready, send immediately
                        const { error } = await supabase.from('ice_candidates').insert({
                            call_id: currentCallIdRef.current,
                            candidate: event.candidate,
                            sender_id: user?.id
                        });
                        if (error) console.error("ICE Insert Error:", error);
                    } else {
                        // Call ID not ready, queue it
                        console.log("Queueing local candidate (Call ID not ready)");
                        localQueuedCandidates.push(event.candidate);
                    }
                }
            };
            // Bind other events
            pc.ontrack = (event_0)=>{
                console.log("Track received:", event_0.track.kind, event_0.streams[0]);
                setRemoteStream(new MediaStream(event_0.streams[0].getTracks()));
            };
            pc.onconnectionstatechange = ()=>{
                console.log("Connection state changes:", pc.connectionState);
                setConnectionState(pc.connectionState);
            };
            // Create Offer
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            // Create Call in DB
            const { data: call, error: error_0 } = await supabase.from('calls').insert({
                room_id: roomId,
                caller_id: user?.id,
                status: 'active',
                offer: offer,
                type: type
            }).select().single();
            if (error_0) throw error_0;
            setCallDetails(call);
            currentCallIdRef.current = call.id; // Set ref for ICE callback
            // FLUSH QUEUED CANDIDATES
            if (localQueuedCandidates.length > 0) {
                console.log(`Flushing ${localQueuedCandidates.length} queued local candidates`);
                const inserts = localQueuedCandidates.map((c)=>({
                        call_id: call.id,
                        candidate: c,
                        sender_id: user?.id
                    }));
                const { error: flushError } = await supabase.from('ice_candidates').insert(inserts);
                if (flushError) console.error("Error flushing local candidates:", flushError);
            }
            // Setup DB handlers
            setupSignaling(call.id);
        } catch (err) {
            console.error("Error starting call:", err);
            alert(`Call failed: ${err.message}`);
        }
    };
    const acceptCall = async ()=>{
        if (!incomingCall) return;
        try {
            setIceCandidateCount(0);
            // ... getUserMedia logic ...
            const isVideo_0 = incomingCall.type === 'video';
            setCallType(incomingCall.type || 'video');
            const stream_0 = await navigator.mediaDevices.getUserMedia({
                video: isVideo_0,
                audio: true
            });
            setLocalStream(stream_0);
            const pc_0 = new RTCPeerConnection(pcConfig);
            peerConnection.current = pc_0;
            currentCallIdRef.current = incomingCall.id;
            remoteCandidateQueue.current = []; // Reset queue
            // Bind events IMMEDIATELY
            pc_0.onicecandidate = async (event_1)=>{
                if (event_1.candidate) {
                    setIceCandidateCount((prev_0)=>prev_0 + 1);
                    const { error: error_1 } = await supabase.from('ice_candidates').insert({
                        call_id: incomingCall.id,
                        candidate: event_1.candidate,
                        sender_id: user?.id
                    });
                    if (error_1) console.error("ICE Insert Error:", error_1);
                }
            };
            pc_0.ontrack = (event_2)=>{
                console.log("Track received:", event_2.track.kind, event_2.streams[0]);
                setRemoteStream(new MediaStream(event_2.streams[0].getTracks()));
            };
            pc_0.onconnectionstatechange = ()=>{
                console.log("Connection state changes:", pc_0.connectionState);
                setConnectionState(pc_0.connectionState);
            };
            // 1. Set Offer FIRST (This creates the receivers/transceivers from the caller)
            await pc_0.setRemoteDescription(new RTCSessionDescription(incomingCall.offer));
            // 2. Add our tracks to the existing transceivers
            stream_0.getTracks().forEach((track_1)=>{
                try {
                    pc_0.addTrack(track_1, stream_0);
                } catch (e) {
                    console.error("Error adding track:", e);
                }
            });
            // Force ALL transceivers to sendrecv (crucial for Receiver to send back)
            pc_0.getTransceivers().forEach((t_0)=>{
                if (t_0.direction !== 'stopped') {
                    t_0.direction = 'sendrecv';
                }
            });
            // Create Answer
            const answer = await pc_0.createAnswer();
            await pc_0.setLocalDescription(answer);
            // Update DB - Answer
            const { error: updateError } = await supabase.from('calls').update({
                answer: answer,
                status: 'active'
            }).eq('id', incomingCall.id);
            if (updateError) throw updateError;
            setCallDetails(incomingCall);
            setIncomingCall(null);
            setupSignaling(incomingCall.id);
            // Fetch existing candidates!
            const { data: existingCandidates, error: fetchError } = await supabase.from('ice_candidates').select('*').eq('call_id', incomingCall.id).neq('sender_id', user?.id || '');
            if (fetchError) console.error("Error fetching candidates:", fetchError);
            if (existingCandidates) {
                console.log(`Found ${existingCandidates.length} existing candidates`);
                // If we are accepting, we have already set RemoteDescription (Offer) above.
                // So we can add them safely.
                existingCandidates.forEach(async (c_0)=>{
                    await pc_0.addIceCandidate(new RTCIceCandidate(c_0.candidate));
                });
            }
        } catch (err_0) {
            console.error("Error accepting call:", err_0);
            alert(`Accept call failed: ${err_0.message}`);
        }
    };
    const endCall = async ()=>{
        // Close connections
        localStream?.getTracks().forEach((track_2)=>track_2.stop());
        peerConnection.current?.close();
        // Update DB
        if (callDetails) {
            await supabase.from('calls').update({
                status: 'ended'
            }).eq('id', callDetails.id);
        }
        // Reset state
        setLocalStream(null);
        setRemoteStream(null);
        setCallDetails(null);
        setIncomingCall(null);
        setConnectionState("new"); // Reset connection state
        if (signalingChannel.current) {
            await supabase.removeChannel(signalingChannel.current);
            signalingChannel.current = null;
        }
        currentCallIdRef.current = null;
    };
    const processCandidateQueue = async ()=>{
        if (!peerConnection.current || !remoteCandidateQueue.current.length) return;
        console.log(`Processing ${remoteCandidateQueue.current.length} queued remote candidates.`);
        for (const candidate of remoteCandidateQueue.current){
            try {
                await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
            } catch (e_0) {
                console.error("Error flushing candidate from queue:", e_0);
            }
        }
        remoteCandidateQueue.current = [];
    };
    const setupSignaling = (callId)=>{
        // Cleanup existing channel if any
        if (signalingChannel.current) {
            supabase.removeChannel(signalingChannel.current);
            signalingChannel.current = null;
        }
        // Subscribe to Call Updates (Answer/Status) AND ICE Candidates
        const channel_1 = supabase.channel(`call_signaling:${callId}`);
        setSignalingStatus("initializing");
        channel_1// Listen for ICE Candidates inserted into DB
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'ice_candidates',
            filter: `call_id=eq.${callId}`
        }, async (payload_0)=>{
            // Ignore my own candidates
            if (payload_0.new.sender_id === user?.id) return;
            if (peerConnection.current && peerConnection.current.signalingState !== 'closed') {
                console.log("Received new ICE candidate from DB via Realtime");
                // Attempt to add, with fallback to queue
                const pc_1 = peerConnection.current;
                const candidate_0 = new RTCIceCandidate(payload_0.new.candidate);
                if (pc_1.remoteDescription && pc_1.signalingState !== 'have-local-offer') {
                    // Extra check for stability
                    try {
                        await pc_1.addIceCandidate(candidate_0);
                        console.log("Successfully added ICE candidate");
                    } catch (e_1) {
                        console.error("Error adding live candidate:", e_1);
                        // Self-healing: If it failed due to remote description or state, QUEUE IT
                        if (e_1.message?.includes("remote description") || e_1.name === 'InvalidStateError') {
                            console.log("Add failed (remote desc missing/invalid state). Re-queueing candidate.");
                            remoteCandidateQueue.current.push(payload_0.new.candidate);
                        }
                    }
                } else {
                    console.log("Remote description not set (or unstable). Queueing candidate.");
                    remoteCandidateQueue.current.push(payload_0.new.candidate);
                }
            }
        })// Listen for Call Updates (Answer, End)
        .on('postgres_changes', {
            event: 'UPDATE',
            schema: 'public',
            table: 'calls',
            filter: `id=eq.${callId}`
        }, async (payload_1)=>{
            if (payload_1.new.answer && !peerConnection.current?.currentRemoteDescription) {
                console.log("Received Answer via Realtime");
                const answer_0 = payload_1.new.answer;
                await peerConnection.current?.setRemoteDescription(new RTCSessionDescription(answer_0));
                // Now that remote description is set, process any queued candidates
                await processCandidateQueue();
            }
            if (payload_1.new.status === 'ended') {
                endCall();
            }
        }).subscribe((status)=>{
            console.log("Signaling Channel Status:", status);
            setSignalingStatus(status);
        });
        signalingChannel.current = channel_1;
    };
    const initiateCall = async (receiverId, type_0)=>{
        if (!user) return;
        // Find existing DM room or create one
        const { data: rooms } = await supabase.from('room_participants').select('room_id').eq('user_id', user.id);
        let roomId_0 = null;
        if (rooms && rooms.length > 0) {
            const myRoomIds = rooms.map((r)=>r.room_id);
            const { data: sharedRooms } = await supabase.from('room_participants').select('room_id').eq('user_id', receiverId).in('room_id', myRoomIds);
            if (sharedRooms && sharedRooms.length > 0) {
                // Check if any of these is a DM
                const { data: dmRoom } = await supabase.from('rooms').select('id').eq('is_group', false).in('id', sharedRooms.map((r_0)=>r_0.room_id)).maybeSingle();
                if (dmRoom) roomId_0 = dmRoom.id;
            }
        }
        if (!roomId_0) {
            const { data: newRoom } = await supabase.from('rooms').insert({
                is_group: false,
                updated_at: new Date().toISOString()
            }).select().single();
            if (newRoom) {
                roomId_0 = newRoom.id;
                await supabase.from('room_participants').insert([
                    {
                        room_id: roomId_0,
                        user_id: user.id
                    },
                    {
                        room_id: roomId_0,
                        user_id: receiverId
                    }
                ]);
            }
        }
        if (roomId_0) {
            await startCall(roomId_0, type_0 === 'video');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CallContext.Provider, {
        value: {
            isInCall: !!callDetails,
            isIncomingCall: !!incomingCall,
            callDetails: callDetails || incomingCall,
            startCall,
            acceptCall,
            endCall,
            localStream,
            remoteStream,
            callType,
            connectionState,
            signalingStatus,
            iceCandidateCount,
            callHistory,
            loading,
            initiateCall
        },
        children: [
            children,
            incomingCall && !callDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-card p-8 rounded-2xl flex flex-col items-center gap-4 animate-float",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white",
                                children: incomingCall.type === 'audio' ? '🎤' : '📹'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                                lineNumber: 526,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                            lineNumber: 525,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold",
                            children: [
                                "Incoming ",
                                incomingCall.type === 'audio' ? 'Voice' : 'Video',
                                " Call..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                            lineNumber: 530,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: acceptCall,
                                    className: "px-6 py-2 bg-green-500 rounded-full text-white font-medium hover:bg-green-600 transition-colors",
                                    children: "Accept"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                                    lineNumber: 532,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIncomingCall(null),
                                    className: "px-6 py-2 bg-red-500 rounded-full text-white font-medium hover:bg-red-600 transition-colors",
                                    children: "Decline"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                                    lineNumber: 533,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                            lineNumber: 531,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                    lineNumber: 524,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                lineNumber: 523,
                columnNumber: 46
            }, this),
            callDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$call$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallOverlay"], {
                roomId: callDetails.room_id,
                currentUser: user,
                onClose: endCall
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                lineNumber: 538,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
        lineNumber: 504,
        columnNumber: 10
    }, this);
}
_s1(CallProvider, "6GRebEFcGBHb86+Zs2IortxZCGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = CallProvider;
var _c;
__turbopack_context__.k.register(_c, "CallProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ToastProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "9c818fa17c63d8ba0fc471d29b8833c13963c0a9548e3f3d03bf57547bbac34b") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9c818fa17c63d8ba0fc471d29b8833c13963c0a9548e3f3d03bf57547bbac34b";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ToastProvider[addToast]": (message, t3)=>{
                const type = t3 === undefined ? "info" : t3;
                const id = Math.random().toString(36).substring(2, 9);
                setToasts({
                    "ToastProvider[addToast > setToasts()]": (prev)=>[
                            ...prev,
                            {
                                id,
                                message,
                                type
                            }
                        ]
                }["ToastProvider[addToast > setToasts()]"]);
                setTimeout({
                    "ToastProvider[addToast > setTimeout()]": ()=>{
                        setToasts({
                            "ToastProvider[addToast > setTimeout() > setToasts()]": (prev_0)=>prev_0.filter({
                                    "ToastProvider[addToast > setTimeout() > setToasts() > prev_0.filter()]": (t)=>t.id !== id
                                }["ToastProvider[addToast > setTimeout() > setToasts() > prev_0.filter()]"])
                        }["ToastProvider[addToast > setTimeout() > setToasts()]"]);
                    }
                }["ToastProvider[addToast > setTimeout()]"], 3000);
            }
        })["ToastProvider[addToast]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const addToast = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ToastProvider[removeToast]": (id_0)=>{
                setToasts({
                    "ToastProvider[removeToast > setToasts()]": (prev_1)=>prev_1.filter({
                            "ToastProvider[removeToast > setToasts() > prev_1.filter()]": (t_0)=>t_0.id !== id_0
                        }["ToastProvider[removeToast > setToasts() > prev_1.filter()]"])
                }["ToastProvider[removeToast > setToasts()]"]);
            }
        })["ToastProvider[removeToast]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const removeToast = t3;
    let t4;
    if ($[4] !== toasts) {
        t4 = {
            toasts,
            addToast,
            removeToast
        };
        $[4] = toasts;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== toasts) {
        let t6;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = ({
                "ToastProvider[toasts.map()]": (toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-auto min-w-[300px] max-w-sm p-4 rounded-xl shadow-lg border backdrop-blur-md flex items-start gap-3 animate-in slide-in-from-right-full fade-in duration-300", toast.type === "success" && "bg-green-500/10 border-green-500/20 text-green-500", toast.type === "error" && "bg-red-500/10 border-red-500/20 text-red-500", toast.type === "warning" && "bg-yellow-500/10 border-yellow-500/20 text-yellow-500", toast.type === "info" && "bg-blue-500/10 border-blue-500/20 text-blue-500"),
                        children: [
                            toast.type === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-5 h-5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 100,
                                columnNumber: 605
                            }, this),
                            toast.type === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 100,
                                columnNumber: 677
                            }, this),
                            toast.type === "warning" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-5 h-5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 100,
                                columnNumber: 751
                            }, this),
                            toast.type === "info" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "w-5 h-5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 100,
                                columnNumber: 824
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 text-sm font-medium",
                                children: toast.message
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 100,
                                columnNumber: 862
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ToastProvider[toasts.map() > <button>.onClick]": ()=>removeToast(toast.id)
                                }["ToastProvider[toasts.map() > <button>.onClick]"],
                                className: "opacity-70 hover:opacity-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                    lineNumber: 102,
                                    columnNumber: 105
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 100,
                                columnNumber: 927
                            }, this)
                        ]
                    }, toast.id, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                        lineNumber: 100,
                        columnNumber: 49
                    }, this)
            })["ToastProvider[toasts.map()]"];
            $[8] = t6;
        } else {
            t6 = $[8];
        }
        t5 = toasts.map(t6);
        $[6] = toasts;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none",
            children: t5
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== children || $[12] !== t4 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
            value: t4,
            children: [
                children,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[11] = children;
        $[12] = t4;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
}
_s(ToastProvider, "d5e9/eTh9mCws6AJ6xOMGthCHTA=");
_c = ToastProvider;
function useToast() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "9c818fa17c63d8ba0fc471d29b8833c13963c0a9548e3f3d03bf57547bbac34b") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9c818fa17c63d8ba0fc471d29b8833c13963c0a9548e3f3d03bf57547bbac34b";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
_s1(useToast, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/GOSSIP/src/components/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$chat$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/chat-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$status$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/status-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/call-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Providers(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "57997da202538c1455e38adbffa3bfa03f0060fe936ecf292af38c33d443417f") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "57997da202538c1455e38adbffa3bfa03f0060fe936ecf292af38c33d443417f";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$status$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$chat$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatProvider"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallProvider"], {
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/providers.tsx",
                            lineNumber: 22,
                            columnNumber: 69
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/providers.tsx",
                        lineNumber: 22,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/providers.tsx",
                    lineNumber: 22,
                    columnNumber: 39
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/providers.tsx",
                lineNumber: 22,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/providers.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_GOSSIP_src_5af03a2d._.js.map