"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { X, Shield, Eye, EyeOff, UserX, Loader2, Unlock } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { useToast } from "@/contexts/toast-context";

export function SettingsModal({ onClose, user }: { onClose: () => void; user: any }) {
    const [lastSeenEnabled, setLastSeenEnabled] = useState(true);
    const [blockedUsers, setBlockedUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();
    const { addToast } = useToast();

    useEffect(() => {
        const fetchSettings = async () => {
            // Fetch profile settings
            const { data: profile } = await supabase.from("profiles").select("last_seen_enabled").eq("id", user.id).single();
            if (profile) setLastSeenEnabled(profile.last_seen_enabled);

            // Fetch blocked users
            const { data: blocks } = await supabase
                .from("blocked_users")
                .select(`
                    *,
                    blocked:profiles!blocked_id(*)
                `)
                .eq("blocker_id", user.id);

            if (blocks) setBlockedUsers(blocks);
            setLoading(false);
        };

        fetchSettings();
    }, [user.id, supabase]);

    const toggleLastSeen = async () => {
        const newValue = !lastSeenEnabled;
        setLastSeenEnabled(newValue);
        await supabase.from("profiles").update({ last_seen_enabled: newValue }).eq("id", user.id);
    };

    const unblockUser = async (blockId: string) => {
        const { error } = await supabase.from("blocked_users").delete().eq("id", blockId);
        if (!error) {
            setBlockedUsers(prev => prev.filter(b => b.id !== blockId));
            addToast("User unblocked", "success");
        } else {
            addToast("Failed to unblock", "error");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-[#1F2125] border border-white/10 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden font-sans">
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Privacy Settings
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 space-y-8">
                    {/* Last Seen Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                                    <Eye className="w-4 h-4 text-gray-400" />
                                    Last Seen Status
                                </h3>
                                <p className="text-xs text-gray-500">Allow others to see when you were last active</p>
                            </div>
                            <button
                                onClick={toggleLastSeen}
                                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${lastSeenEnabled ? 'bg-primary' : 'bg-white/10'}`}
                            >
                                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${lastSeenEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                            </button>
                        </div>
                    </div>

                    <hr className="border-white/5" />

                    {/* Blocked Users Section */}
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h3 className="text-base font-semibold text-white flex items-center gap-2">
                                <UserX className="w-4 h-4 text-gray-400" />
                                Blocked Users
                            </h3>
                            <p className="text-xs text-gray-500">Manage users you have blocked</p>
                        </div>

                        {loading ? (
                            <div className="flex justify-center p-4">
                                <Loader2 className="w-6 h-6 animate-spin text-primary" />
                            </div>
                        ) : blockedUsers.length === 0 ? (
                            <p className="text-sm text-gray-600 italic text-center py-2">No blocked users</p>
                        ) : (
                            <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                                {blockedUsers.map((block) => (
                                    <div key={block.id} className="flex items-center justify-between bg-black/20 p-2 rounded-lg border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <Avatar src={block.blocked?.avatar_url} fallback={block.blocked?.username?.[0] || "?"} className="w-8 h-8" />
                                            <span className="text-sm text-gray-300">{block.blocked?.username || "Unknown"}</span>
                                        </div>
                                        <button
                                            onClick={() => unblockUser(block.id)}
                                            className="text-xs text-red-400 hover:text-red-300 px-3 py-1 bg-red-400/10 hover:bg-red-400/20 rounded-md transition-colors flex items-center gap-1"
                                        >
                                            <Unlock className="w-3 h-3" /> Unblock
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
