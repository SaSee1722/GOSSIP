module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "safeSupabaseOperation",
    ()=>safeSupabaseOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
let clientInstance = null;
function createClient() {
    if (!clientInstance) {
        clientInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://gnbympdrsgesbbpnlocm.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduYnltcGRyc2dlc2JicG5sb2NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyMTM1ODYsImV4cCI6MjA4MTc4OTU4Nn0.5_ZsJ2phLUAlKjCJXHQynC91OhlcH8lTJ1mzUyLSGuo"));
    }
    return clientInstance;
}
const safeSupabaseOperation = async (operation)=>{
    const client = createClient();
    return await operation(client);
};
}),
"[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [operationLoading, setOperationLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const mapUser = (supabaseUser, profile)=>({
            id: supabaseUser.id,
            email: supabaseUser.email || '',
            username: profile?.username || supabaseUser.user_metadata?.username || supabaseUser.email?.split('@')[0],
            full_name: profile?.full_name || supabaseUser.user_metadata?.full_name,
            avatar_url: profile?.avatar_url || supabaseUser.user_metadata?.avatar_url,
            age: profile?.age,
            phone: profile?.phone,
            bio: profile?.bio,
            gender: profile?.gender,
            created_at: supabaseUser.created_at,
            updated_at: supabaseUser.updated_at || supabaseUser.created_at
        });
    const fetchUser = async (supabaseUser)=>{
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', supabaseUser.id).single();
        setUser(mapUser(supabaseUser, profile));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initialize = async ()=>{
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                await fetchUser(session.user);
            }
            setLoading(false);
            const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session)=>{
                if (session?.user) {
                    await fetchUser(session.user);
                } else {
                    setUser(null);
                }
                setLoading(false);
            });
            return ()=>subscription.unsubscribe();
        };
        initialize();
    }, []);
    const signInWithPassword = async (email, pass)=>{
        setOperationLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password: pass
        });
        setOperationLoading(false);
        return {
            error: error?.message
        };
    };
    const signUpWithPassword = async (email, pass, metadata)=>{
        setOperationLoading(true);
        const { data, error } = await supabase.auth.signUp({
            email,
            password: pass,
            options: {
                data: metadata
            }
        });
        setOperationLoading(false);
        return {
            error: error?.message,
            needsEmailConfirmation: !!(data.user && !data.session)
        };
    };
    const logout = async ()=>{
        await supabase.auth.signOut();
        setUser(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            operationLoading,
            signInWithPassword,
            signUpWithPassword,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx",
        lineNumber: 112,
        columnNumber: 9
    }, this);
}
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
}),
"[project]/Desktop/GOSSIP/src/services/notification-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Desktop/GOSSIP/src/services/chat-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatService",
    ()=>ChatService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$notification$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/services/notification-service.ts [app-ssr] (ecmascript)");
;
;
const ChatService = {
    async getMyRooms () {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');
                const { data, error } = await client.from('room_participants').select(`
            room_id,
            rooms (*)
          `).eq('user_id', user.id);
                if (error) return {
                    data: [],
                    error: error.message
                };
                if (!data || data.length === 0) return {
                    data: [],
                    error: null
                };
                // Get blocked users to filter them out
                const { data: blockedData } = await client.from('blocked_users').select('blocked_id').eq('blocker_id', user.id);
                const blockedIds = (blockedData || []).map((b)=>b.blocked_id);
                // Get rooms and filter out those with blocked participants (for direct chats)
                const filteredRooms = [];
                for (const item of data){
                    const room = item.rooms;
                    if (!room) continue;
                    if (room.type === 'direct') {
                        // For direct chats, we need to check if the other person is blocked
                        const { data: participants } = await client.from('room_participants').select('user_id').eq('room_id', room.id).neq('user_id', user.id);
                        const otherUserId = participants?.[0]?.user_id;
                        if (otherUserId && blockedIds.includes(otherUserId)) {
                            continue; // Skip this room
                        }
                    }
                    filteredRooms.push(room);
                }
                return {
                    data: filteredRooms,
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
    async getRoomParticipants (roomId) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data, error } = await client.from('messages').select('*').eq('room_id', roomId).order('created_at', {
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
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');
                // Check if anyone in the room has blocked the sender
                const { data: participants } = await client.from('room_participants').select('user_id').eq('room_id', roomId).neq('user_id', user.id);
                if (participants && participants.length > 0) {
                    const participantIds = participants.map((p)=>p.user_id);
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
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$notification$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendPushNotification"])(profile.push_token, title, body, {
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { error } = await client.from('rooms').update(updates).eq('id', roomId);
            return {
                error: error?.message || null
            };
        });
    },
    async uploadGroupAvatar (roomId, file) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
            const { error } = await client.from('rooms').delete().eq('id', roomId);
            return {
                error: error?.message || null
            };
        });
    },
    async updateMessageStatus (messageId, status) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
}),
"[project]/Desktop/GOSSIP/src/contexts/chat-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatContext",
    ()=>ChatContext,
    "ChatProvider",
    ()=>ChatProvider,
    "useChat",
    ()=>useChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/services/chat-service.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const ChatContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ChatProvider({ children }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [pendingRequests, setPendingRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lockedChats, setLockedChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const channelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isFetchingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasInitialLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user?.id) {
            if (!hasInitialLoaded.current) {
                setLoading(true);
                loadInitialData().finally(()=>{
                    setLoading(false);
                    hasInitialLoaded.current = true;
                });
            }
            setupRealtime();
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].updateOnlineStatus(user.id, true);
            const pollInterval = setInterval(()=>{
                refreshChats();
            }, 30000);
            return ()=>{
                clearInterval(pollInterval);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].updateOnlineStatus(user.id, false);
                cleanupRealtime();
            };
        } else {
            setChats([]);
            setMessages({});
            setPendingRequests([]);
            setLockedChats({});
            setLoading(false);
            hasInitialLoaded.current = false;
            cleanupRealtime();
        }
    }, [
        user?.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem('LOCKED_CHATS');
        if (stored) setLockedChats(JSON.parse(stored));
    }, []);
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].getMyRooms(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].getPendingRequests(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].getAcceptedConnections()
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
    const formatRoomToChat = async (room)=>{
        const participants = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].getRoomParticipants(room.id);
        const { data: msgs } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].getMessages(room.id, 1, false);
        const lastMsg = msgs?.[0];
        if (room.type === 'direct') {
            const otherUser = participants.data?.find((p)=>p.id !== user?.id);
            if (otherUser) {
                const { count } = await supabase.from('messages').select('*', {
                    count: 'exact',
                    head: true
                }).eq('room_id', room.id).neq('user_id', user?.id).neq('status', 'read');
                return {
                    id: room.id,
                    userId: otherUser.id,
                    userName: otherUser.username || otherUser.full_name || 'User',
                    userAvatar: otherUser.avatar_url || `https://i.pravatar.cc/150?u=${otherUser.id}`,
                    lastMessage: lastMsg?.content || 'Started a gossip...',
                    lastMessageTime: lastMsg ? new Date(lastMsg.created_at) : new Date(room.created_at),
                    unreadCount: count || 0,
                    online: otherUser.is_online || false,
                    typing: false,
                    type: 'direct',
                    age: otherUser.age,
                    gender: otherUser.gender
                };
            }
        } else {
            const { count } = await supabase.from('messages').select('*', {
                count: 'exact',
                head: true
            }).eq('room_id', room.id).neq('user_id', user?.id).neq('status', 'read');
            const onlineCount = participants.data?.filter((p)=>p.is_online).length || 0;
            const memberCount = participants.data?.length || 0;
            return {
                id: room.id,
                userId: room.id,
                userName: room.name || 'Gossip Group',
                userAvatar: room.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(room.name || 'G')}&background=FFB6C1&color=000`,
                lastMessage: lastMsg?.content || 'New gossip group created!',
                lastMessageTime: lastMsg ? new Date(lastMsg.created_at) : new Date(room.created_at),
                unreadCount: count || 0,
                online: onlineCount > 0,
                onlineCount,
                memberCount,
                description: room.description || 'Welcome to the gossip group!',
                createdBy: room.created_by,
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].updateMessageStatus(newMessage.id, 'delivered');
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
            setMessages((prev)=>{
                const currentMsgs = prev[newMessage.room_id] || [];
                if (currentMsgs.some((m)=>m.id === formattedMsg.id)) return prev;
                return {
                    ...prev,
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
        }, (payload)=>{
            const updatedMsg = payload.new;
            setMessages((prev)=>{
                const roomMsgs = prev[updatedMsg.room_id] || [];
                return {
                    ...prev,
                    [updatedMsg.room_id]: roomMsgs.map((m)=>m.id === updatedMsg.id ? {
                            ...m,
                            status: updatedMsg.status
                        } : m)
                };
            });
        }).on('postgres_changes', {
            event: 'UPDATE',
            schema: 'public',
            table: 'profiles'
        }, (payload)=>{
            const updatedProfile = payload.new;
            setChats((prev)=>prev.map((chat)=>chat.userId === updatedProfile.id ? {
                        ...chat,
                        online: updatedProfile.is_online
                    } : chat));
        }).on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'connections',
            filter: `addressee_id=eq.${user.id}`
        }, async ()=>{
            const { data: requests } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].getPendingRequests();
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
        }, (payload)=>{
            const { chatId, userId, isTyping } = payload.payload;
            if (userId === user?.id) return;
            setChats((prev)=>prev.map((chat)=>chat.id === chatId ? {
                        ...chat,
                        typing: isTyping
                    } : chat));
        }).subscribe();
        channelRef.current = channel;
    };
    const sendMessage = async (chatId, content, type = 'text', mediaUrl)=>{
        const { data: sentMsg, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].sendMessage(chatId, content, type, mediaUrl);
        if (error) throw new Error(error);
        if (sentMsg) {
            const formattedMsg = {
                id: sentMsg.id,
                chatId: sentMsg.room_id,
                senderId: sentMsg.user_id,
                content: sentMsg.content,
                type: sentMsg.message_type,
                timestamp: new Date(sentMsg.created_at),
                status: sentMsg.status,
                mediaUrl: sentMsg.media_url
            };
            setMessages((prev)=>{
                const currentMsgs = prev[chatId] || [];
                if (currentMsgs.some((m)=>m.id === formattedMsg.id)) return prev;
                return {
                    ...prev,
                    [chatId]: [
                        ...currentMsgs,
                        formattedMsg
                    ]
                };
            });
        }
    };
    const markAsRead = async (chatId)=>{
        if (!user?.id) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].markRoomAsRead(chatId, user.id);
        setChats((prev)=>prev.map((chat)=>chat.id === chatId ? {
                    ...chat,
                    unreadCount: 0
                } : chat));
        setMessages((prev)=>{
            const roomMsgs = prev[chatId];
            if (!roomMsgs) return prev;
            return {
                ...prev,
                [chatId]: roomMsgs.map((m)=>m.senderId !== user.id ? {
                        ...m,
                        status: 'read'
                    } : m)
            };
        });
    };
    const setTyping = async (chatId, isTyping)=>{
        if (channelRef.current) {
            await channelRef.current.send({
                type: 'broadcast',
                event: 'typing',
                payload: {
                    chatId,
                    userId: user?.id,
                    isTyping
                }
            });
        }
    };
    const createChat = async (userId, userName, userAvatar)=>{
        const { data: roomId, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].createDirectChat(userId);
        if (error) throw new Error(error);
        await loadInitialData();
        return roomId;
    };
    const sendRequest = async (userId)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].sendConnectionRequest(userId);
        if (error) throw new Error(error);
    };
    const respondToRequest = async (requestId, status)=>{
        setLoading(true);
        const { data: roomId, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].respondToConnection(requestId, status);
        if (error) {
            setLoading(false);
            return null;
        }
        setPendingRequests((prev)=>prev.filter((r)=>r.id !== requestId));
        await loadInitialData();
        setLoading(false);
        return roomId;
    };
    const fetchMessages = async (chatId)=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].getMessages(chatId);
        if (!error && data) {
            const formattedMsgs = data.map((m)=>({
                    id: m.id,
                    chatId: m.room_id,
                    senderId: m.user_id,
                    content: m.content,
                    type: m.message_type,
                    timestamp: new Date(m.created_at),
                    status: m.status,
                    mediaUrl: m.media_url
                }));
            setMessages((prev)=>({
                    ...prev,
                    [chatId]: formattedMsgs
                }));
        }
    };
    const refreshChats = async ()=>{
        await loadInitialData();
    };
    const blockUser = async (userId)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].blockUser(userId);
        if (error) throw new Error(error);
        await refreshChats();
    };
    const unblockUser = async (userId)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].unblockUser(userId);
        if (error) throw new Error(error);
        await refreshChats();
    };
    const deleteGroup = async (roomId)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].deleteRoom(roomId);
        if (error) throw new Error(error);
        await refreshChats();
    };
    const updateGroup = async (roomId, updates)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].updateRoom(roomId, updates);
        if (error) throw new Error(error);
        await refreshChats();
    };
    const getParticipants = async (roomId)=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$chat$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatService"].getRoomParticipantsProfiles(roomId);
        if (error) throw new Error(error);
        return data || [];
    };
    const lockChat = async (chatId, pin)=>{
        const updated = {
            ...lockedChats,
            [chatId]: pin
        };
        setLockedChats(updated);
        localStorage.setItem('LOCKED_CHATS', JSON.stringify(updated));
    };
    const unlockChat = async (chatId)=>{
        const updated = {
            ...lockedChats
        };
        delete updated[chatId];
        setLockedChats(updated);
        localStorage.setItem('LOCKED_CHATS', JSON.stringify(updated));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatContext.Provider, {
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
        lineNumber: 457,
        columnNumber: 9
    }, this);
}
function useChat() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ChatContext);
    if (!context) throw new Error('useChat must be used within ChatProvider');
    return context;
}
}),
"[project]/Desktop/GOSSIP/src/services/status-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusService",
    ()=>StatusService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
;
const StatusService = {
    async getStatuses () {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
    }
};
}),
"[project]/Desktop/GOSSIP/src/contexts/status-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusProvider",
    ()=>StatusProvider,
    "useStatus",
    ()=>useStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$status$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/services/status-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const StatusContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function StatusProvider({ children }) {
    const [statuses, setStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const loadStatuses = async ()=>{
        setLoading(true);
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$status$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusService"].getStatuses();
        if (data) setStatuses(data);
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user) {
            loadStatuses();
            const channel = supabase.channel('public-statuses').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'statuses'
            }, ()=>{
                loadStatuses();
            }).subscribe();
            return ()=>{
                supabase.removeChannel(channel);
            };
        }
    }, [
        user?.id
    ]);
    const uploadStatus = async (mediaUrl, caption)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$status$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusService"].uploadStatus(mediaUrl, caption);
        if (error) throw new Error(error);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusContext.Provider, {
        value: {
            statuses,
            loading,
            uploadStatus,
            refreshStatuses: loadStatuses
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/GOSSIP/src/contexts/status-context.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
function useStatus() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(StatusContext);
    if (!context) throw new Error('useStatus must be used within StatusProvider');
    return context;
}
}),
"[project]/Desktop/GOSSIP/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Avatar({ src, fallback, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center", className),
        children: src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: fallback,
            className: "w-full h-full object-cover"
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx",
            lineNumber: 13,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium text-muted-foreground uppercase",
            children: fallback.slice(0, 2)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx",
            lineNumber: 15,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/GOSSIP/src/components/call-overlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallOverlay",
    ()=>CallOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-ssr] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/video-off.js [app-ssr] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-ssr] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-ssr] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/call-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function CallOverlay({ roomId, currentUser, minimize = false, onClose }) {
    const { localStream, remoteStream, callType, connectionState, signalingStatus, iceCandidateCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCall"])();
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(minimize);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVideoOff, setIsVideoOff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs for media elements
    const localVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const remoteVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (localVideoRef.current && localStream) {
            localVideoRef.current.srcObject = localStream;
        }
    }, [
        localStream
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (remoteVideoRef.current && remoteStream) {
            remoteVideoRef.current.srcObject = remoteStream;
            remoteVideoRef.current.play().catch((e)=>console.error("Error auto-playing video:", e));
        }
    }, [
        remoteStream
    ]);
    const toggleMinimize = ()=>setIsMinimized(!isMinimized);
    const toggleMute = ()=>{
        if (localStream) {
            localStream.getAudioTracks().forEach((track)=>track.enabled = !track.enabled);
            setIsMuted(!isMuted);
        }
    };
    const toggleVideo = ()=>{
        if (localStream) {
            localStream.getVideoTracks().forEach((track)=>track.enabled = !track.enabled);
            setIsVideoOff(!isVideoOff);
        }
    };
    const isAudioOnly = callType === 'audio';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed transition-all duration-500 ease-in-out bg-black/90 backdrop-blur-md shadow-2xl border border-white/10 overflow-hidden z-50", isMinimized ? "bottom-4 right-4 w-72 h-48 rounded-2xl" : "inset-4 rounded-3xl"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-50 bg-black/50 p-2 rounded text-xs text-white/70 font-mono pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Signal: ",
                            signalingStatus
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "WebRTC: ",
                            connectionState
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Candidates: ",
                            iceCandidateCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Type: ",
                            callType
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "L-Tracks: ",
                            localStream?.getTracks().length || 0
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "R-Tracks: ",
                            remoteStream?.getTracks().length || 0
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full bg-zinc-900 flex items-center justify-center relative",
                        children: [
                            (isAudioOnly || !remoteStream) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center animate-pulse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                        fallback: "Remote",
                                        className: "w-32 h-32 bg-zinc-800 text-zinc-500 mb-6 text-4xl"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-400 text-lg font-medium",
                                        children: connectionState === 'connected' ? 'Connected' : 'Connecting...'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                lineNumber: 81,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: remoteVideoRef,
                                autoPlay: true,
                                playsInline: true,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 w-full h-full object-cover", (isAudioOnly || !remoteStream) && "opacity-0 pointer-events-none")
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    !isAudioOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute transition-all duration-300 bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-white/10 z-10", isMinimized ? "hidden" : "top-4 right-4 w-48 h-36"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex items-center justify-center relative bg-black",
                            children: [
                                !localStream && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: "You"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                    lineNumber: 105,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: localVideoRef,
                                    autoPlay: true,
                                    muted: true,
                                    playsInline: true,
                                    className: "w-full h-full object-cover transform -scale-x-100"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                            lineNumber: 104,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                        lineNumber: 100,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end transition-opacity z-20", isMinimized ? "opacity-0 hover:opacity-100" : "opacity-100"),
                        children: [
                            !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-white",
                                        children: isAudioOnly ? "Voice Call" : "Video Call"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full", connectionState === 'connected' ? "bg-green-500" : "bg-yellow-500")
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                                lineNumber: 122,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/60 capitalize",
                                                children: connectionState
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                                lineNumber: 123,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                        lineNumber: 121,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleMute,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-full transition-all", isMuted ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"),
                                        children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                            lineNumber: 130,
                                            columnNumber: 40
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                            lineNumber: 130,
                                            columnNumber: 73
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                        lineNumber: 129,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleVideo,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-full transition-all", isVideoOff ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"),
                                        children: isVideoOff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                            lineNumber: 134,
                                            columnNumber: 43
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                            lineNumber: 134,
                                            columnNumber: 78
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                        lineNumber: 133,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "p-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all shadow-lg hover:shadow-red-500/30 scale-100 hover:scale-110",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                            className: "w-8 h-8"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                            lineNumber: 141,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                        lineNumber: 137,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleMinimize,
                                        className: "p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all",
                                        children: isMinimized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                            lineNumber: 145,
                                            columnNumber: 44
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                            lineNumber: 145,
                                            columnNumber: 80
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                        lineNumber: 144,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/GOSSIP/src/components/call-overlay.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/GOSSIP/src/services/call-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallService",
    ()=>CallService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
;
const CallService = {
    async initiateCall (receiverId, type, offerSdp, roomId) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
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
    async getCallHistory () {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeSupabaseOperation"])(async (client)=>{
                const { data: { user } } = await client.auth.getUser();
                if (!user) throw new Error('Not authenticated');
                // Get user's room IDs first to build filter
                const { data: myRooms } = await client.from('room_participants').select('room_id').eq('user_id', user.id);
                const roomIds = myRooms?.map((r)=>r.room_id) || [];
                // Only add room filter if there are rooms
                const roomFilter = roomIds.length > 0 ? `,room_id.in.(${roomIds.join(',')})` : '';
                const { data, error } = await client.from('calls').select(`
                        *,
                        caller:caller_id (id, username, full_name, avatar_url, gender),
                        receiver:receiver_id (id, username, full_name, avatar_url, gender)
                    `).or(`caller_id.eq.${user.id}${roomFilter}`).neq('status', 'ringing') // Only show completed/acted upon calls
                .order('created_at', {
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
}),
"[project]/Desktop/GOSSIP/src/contexts/call-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallProvider",
    ()=>CallProvider,
    "useCall",
    ()=>useCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$call$2d$overlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/components/call-overlay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$call$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/services/call-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const CallContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function useCall() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CallContext);
    if (!context) throw new Error("useCall must be used within a CallProvider");
    return context;
}
;
function CallProvider({ children }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [callDetails, setCallDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [localStream, setLocalStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [remoteStream, setRemoteStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [incomingCall, setIncomingCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [callType, setCallType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("video");
    const [connectionState, setConnectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("new");
    const [signalingStatus, setSignalingStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("disconnected");
    const [iceCandidateCount, setIceCandidateCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [callHistory, setCallHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // WebRTC refs
    const peerConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const signalingChannel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const candidateQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]); // Queue for early candidates
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user) return;
        console.log("Listening for calls on user channel:", user.id);
        const channel = supabase.channel(`calls:${user.id}`).on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'calls',
            filter: `caller_id=neq.${user.id}`
        }, // Wait, the schema 'calls' table has 'room_id'. It doesn't explicitly have 'recipient_id'. 
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
        }).subscribe();
        return ()=>{
            supabase.removeChannel(channel);
        };
    }, [
        user,
        supabase
    ]);
    // 2. Fetch call history
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchHistory = async ()=>{
            setLoading(true);
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$services$2f$call$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallService"].getCallHistory();
            if (data) setCallHistory(data);
            setLoading(false);
        };
        if (user) {
            fetchHistory();
            // Subscribe to call changes to refresh history
            const channel = supabase.channel('call_history_updates').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'calls'
            }, ()=>{
                fetchHistory();
            }).subscribe();
            return ()=>{
                supabase.removeChannel(channel);
            };
        }
    }, [
        user,
        supabase
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            localStream?.getTracks().forEach((track)=>track.stop());
            peerConnection.current?.close();
        };
    }, []);
    // We need a ref to store the current call ID for the callback
    const currentCallIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const remoteCandidateQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]); // Buffer for incoming candidates
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
            stream.getTracks().forEach((track)=>{
                pc.addTrack(track, stream);
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
            pc.ontrack = (event)=>{
                console.log("Track received:", event.track.kind, event.streams[0]);
                setRemoteStream(new MediaStream(event.streams[0].getTracks()));
            };
            pc.onconnectionstatechange = ()=>{
                console.log("Connection state changes:", pc.connectionState);
                setConnectionState(pc.connectionState);
            };
            // Create Offer
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            // Create Call in DB
            const { data: call, error } = await supabase.from('calls').insert({
                room_id: roomId,
                caller_id: user?.id,
                status: 'active',
                offer: offer,
                type: type
            }).select().single();
            if (error) throw error;
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
            const isVideo = incomingCall.type === 'video';
            setCallType(incomingCall.type || 'video');
            const stream = await navigator.mediaDevices.getUserMedia({
                video: isVideo,
                audio: true
            });
            setLocalStream(stream);
            const pc = new RTCPeerConnection(pcConfig);
            peerConnection.current = pc;
            currentCallIdRef.current = incomingCall.id;
            remoteCandidateQueue.current = []; // Reset queue
            // Bind events IMMEDIATELY
            pc.onicecandidate = async (event)=>{
                if (event.candidate) {
                    setIceCandidateCount((prev)=>prev + 1);
                    const { error } = await supabase.from('ice_candidates').insert({
                        call_id: incomingCall.id,
                        candidate: event.candidate,
                        sender_id: user?.id
                    });
                    if (error) console.error("ICE Insert Error:", error);
                }
            };
            pc.ontrack = (event)=>{
                console.log("Track received:", event.track.kind, event.streams[0]);
                setRemoteStream(new MediaStream(event.streams[0].getTracks()));
            };
            pc.onconnectionstatechange = ()=>{
                console.log("Connection state changes:", pc.connectionState);
                setConnectionState(pc.connectionState);
            };
            // 1. Set Offer FIRST (This creates the receivers/transceivers from the caller)
            await pc.setRemoteDescription(new RTCSessionDescription(incomingCall.offer));
            // 2. Add our tracks to the existing transceivers
            stream.getTracks().forEach((track)=>{
                try {
                    pc.addTrack(track, stream);
                } catch (e) {
                    console.error("Error adding track:", e);
                }
            });
            // Force ALL transceivers to sendrecv (crucial for Receiver to send back)
            pc.getTransceivers().forEach((t)=>{
                if (t.direction !== 'stopped') {
                    t.direction = 'sendrecv';
                }
            });
            // Create Answer
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
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
                existingCandidates.forEach(async (c)=>{
                    await pc.addIceCandidate(new RTCIceCandidate(c.candidate));
                });
            }
        } catch (err) {
            console.error("Error accepting call:", err);
            alert(`Accept call failed: ${err.message}`);
        }
    };
    const endCall = async ()=>{
        // Close connections
        localStream?.getTracks().forEach((track)=>track.stop());
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
            } catch (e) {
                console.error("Error flushing candidate from queue:", e);
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
        const channel = supabase.channel(`call_signaling:${callId}`);
        setSignalingStatus("initializing");
        channel// Listen for ICE Candidates inserted into DB
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'ice_candidates',
            filter: `call_id=eq.${callId}`
        }, async (payload)=>{
            // Ignore my own candidates
            if (payload.new.sender_id === user?.id) return;
            if (peerConnection.current && peerConnection.current.signalingState !== 'closed') {
                console.log("Received new ICE candidate from DB via Realtime");
                // Attempt to add, with fallback to queue
                const pc = peerConnection.current;
                const candidate = new RTCIceCandidate(payload.new.candidate);
                if (pc.remoteDescription && pc.signalingState !== 'have-local-offer') {
                    try {
                        await pc.addIceCandidate(candidate);
                        console.log("Successfully added ICE candidate");
                    } catch (e) {
                        console.error("Error adding live candidate:", e);
                        // Self-healing: If it failed due to remote description or state, QUEUE IT
                        if (e.message?.includes("remote description") || e.name === 'InvalidStateError') {
                            console.log("Add failed (remote desc missing/invalid state). Re-queueing candidate.");
                            remoteCandidateQueue.current.push(payload.new.candidate);
                        }
                    }
                } else {
                    console.log("Remote description not set (or unstable). Queueing candidate.");
                    remoteCandidateQueue.current.push(payload.new.candidate);
                }
            }
        })// Listen for Call Updates (Answer, End)
        .on('postgres_changes', {
            event: 'UPDATE',
            schema: 'public',
            table: 'calls',
            filter: `id=eq.${callId}`
        }, async (payload)=>{
            if (payload.new.answer && !peerConnection.current?.currentRemoteDescription) {
                console.log("Received Answer via Realtime");
                const answer = payload.new.answer;
                await peerConnection.current?.setRemoteDescription(new RTCSessionDescription(answer));
                // Now that remote description is set, process any queued candidates
                await processCandidateQueue();
            }
            if (payload.new.status === 'ended') {
                endCall();
            }
        }).subscribe((status)=>{
            console.log("Signaling Channel Status:", status);
            setSignalingStatus(status);
        });
        signalingChannel.current = channel;
    };
    const initiateCall = async (receiverId, type)=>{
        if (!user) return;
        // Find existing DM room or create one
        const { data: rooms } = await supabase.from('room_participants').select('room_id').eq('user_id', user.id);
        let roomId = null;
        if (rooms && rooms.length > 0) {
            const myRoomIds = rooms.map((r)=>r.room_id);
            const { data: sharedRooms } = await supabase.from('room_participants').select('room_id').eq('user_id', receiverId).in('room_id', myRoomIds);
            if (sharedRooms && sharedRooms.length > 0) {
                // Check if any of these is a DM
                const { data: dmRoom } = await supabase.from('rooms').select('id').eq('is_group', false).in('id', sharedRooms.map((r)=>r.room_id)).maybeSingle();
                if (dmRoom) roomId = dmRoom.id;
            }
        }
        if (!roomId) {
            const { data: newRoom } = await supabase.from('rooms').insert({
                is_group: false,
                updated_at: new Date().toISOString()
            }).select().single();
            if (newRoom) {
                roomId = newRoom.id;
                await supabase.from('room_participants').insert([
                    {
                        room_id: roomId,
                        user_id: user.id
                    },
                    {
                        room_id: roomId,
                        user_id: receiverId
                    }
                ]);
            }
        }
        if (roomId) {
            await startCall(roomId, type === 'video');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CallContext.Provider, {
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
            incomingCall && !callDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-card p-8 rounded-2xl flex flex-col items-center gap-4 animate-float",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white",
                                children: incomingCall.type === 'audio' ? '🎤' : '📹'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                                lineNumber: 538,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                            lineNumber: 537,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold",
                            children: [
                                "Incoming ",
                                incomingCall.type === 'audio' ? 'Voice' : 'Video',
                                " Call..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                            lineNumber: 542,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: acceptCall,
                                    className: "px-6 py-2 bg-green-500 rounded-full text-white font-medium hover:bg-green-600 transition-colors",
                                    children: "Accept"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                                    lineNumber: 544,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIncomingCall(null),
                                    className: "px-6 py-2 bg-red-500 rounded-full text-white font-medium hover:bg-red-600 transition-colors",
                                    children: "Decline"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                                    lineNumber: 545,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                            lineNumber: 543,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                    lineNumber: 536,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                lineNumber: 535,
                columnNumber: 17
            }, this),
            callDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$components$2f$call$2d$overlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallOverlay"], {
                roomId: callDetails.room_id,
                currentUser: user,
                onClose: endCall
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
                lineNumber: 552,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/GOSSIP/src/contexts/call-context.tsx",
        lineNumber: 515,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ToastProvider({ children }) {
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const addToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, type = "info")=>{
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev)=>[
                ...prev,
                {
                    id,
                    message,
                    type
                }
            ]);
        // Auto-remove after 3 seconds
        setTimeout(()=>{
            setToasts((prev)=>prev.filter((t)=>t.id !== id));
        }, 3000);
    }, []);
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setToasts((prev)=>prev.filter((t)=>t.id !== id));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            toasts,
            addToast,
            removeToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none",
                children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pointer-events-auto min-w-[300px] max-w-sm p-4 rounded-xl shadow-lg border backdrop-blur-md flex items-start gap-3 animate-in slide-in-from-right-full fade-in duration-300", toast.type === "success" && "bg-green-500/10 border-green-500/20 text-green-500", toast.type === "error" && "bg-red-500/10 border-red-500/20 text-red-500", toast.type === "warning" && "bg-yellow-500/10 border-yellow-500/20 text-yellow-500", toast.type === "info" && "bg-blue-500/10 border-blue-500/20 text-blue-500"),
                        children: [
                            toast.type === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-5 h-5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 55,
                                columnNumber: 54
                            }, this),
                            toast.type === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 56,
                                columnNumber: 52
                            }, this),
                            toast.type === "warning" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-5 h-5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 57,
                                columnNumber: 54
                            }, this),
                            toast.type === "info" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "w-5 h-5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 58,
                                columnNumber: 51
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 text-sm font-medium",
                                children: toast.message
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>removeToast(toast.id),
                                className: "opacity-70 hover:opacity-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                    lineNumber: 63,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                                lineNumber: 62,
                                columnNumber: 25
                            }, this)
                        ]
                    }, toast.id, true, {
                        fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
function useToast() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
}),
"[project]/Desktop/GOSSIP/src/components/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/chat-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$status$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/status-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/call-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/GOSSIP/src/contexts/toast-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$toast$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$status$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$GOSSIP$2f$src$2f$contexts$2f$call$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallProvider"], {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/GOSSIP/src/components/providers.tsx",
                        lineNumber: 15,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/GOSSIP/src/components/providers.tsx",
                    lineNumber: 14,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/GOSSIP/src/components/providers.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/GOSSIP/src/components/providers.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/GOSSIP/src/components/providers.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__093d0b62._.js.map