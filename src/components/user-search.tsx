"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Avatar } from "@/components/ui/avatar";
import { Search, UserPlus, Check, X } from "lucide-react";
import { Profile } from "@/lib/types";
import { cn } from "@/lib/utils";

interface UserSearchProps {
    onClose: () => void;
    currentUserId: string;
}

export function UserSearch({ onClose, currentUserId }: UserSearchProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Profile[]>([]);
    const [loading, setLoading] = useState(false);
    const [requested, setRequested] = useState<Set<string>>(new Set());
    const supabase = createClient();

    const handleSearch = async () => {
        if (!query.trim()) return;
        setLoading(true);

        // Simple search by username or full_name
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .or(`username.ilike.%${query}%,full_name.ilike.%${query}%`)
            .neq("id", currentUserId)
            .limit(10);

        if (data) {
            // Filter out already connected users? For now showing all.
            setResults(data);
        }
        setLoading(false);
    };

    const sendRequest = async (targetId: string) => {
        // Optimistic update
        setRequested((prev) => new Set(prev).add(targetId));

        // 1. Check if a connection tuple already exists (in either direction)
        const { data: existing, error: fetchError } = await supabase
            .from("connections")
            .select("*")
            .or(`and(requester_id.eq.${currentUserId},addressee_id.eq.${targetId}),and(requester_id.eq.${targetId},addressee_id.eq.${currentUserId})`)
            .maybeSingle();

        if (fetchError) {
            console.error("Error checking connection:", fetchError);
            return;
        }

        let error = null;

        if (existing) {
            // 2. If exists, handle based on status
            if (existing.status === 'rejected') {
                // Re-activate as a new request from me
                const { error: updateError } = await supabase
                    .from("connections")
                    .update({ status: 'pending', requester_id: currentUserId, addressee_id: targetId })
                    .eq("id", existing.id);
                error = updateError;
            } else {
                // 'pending' or 'accepted' - Do nothing to prevent duplicate key error
                // The UI already shows a checkmark optimistically
                console.log("Connection already exists or is pending.");
            }
        } else {
            // 3. New Record
            const { error: insertError } = await supabase
                .from("connections")
                .insert({ requester_id: currentUserId, addressee_id: targetId });
            error = insertError;
        }

        if (error) {
            console.error("Failed to send request", error);
            // Revert on error
            setRequested((prev) => {
                const next = new Set(prev);
                next.delete(targetId);
                return next;
            });
            alert("Failed to send request: " + error.message);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-[#1e1e24] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-white">Find People</h2>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X className="w-5 h-5 text-white/70" />
                    </button>
                </div>

                <div className="p-4 space-y-4">
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                            <input
                                type="text"
                                placeholder="Search by username..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            />
                        </div>
                        <button
                            onClick={handleSearch}
                            disabled={loading}
                            className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50"
                        >
                            {loading ? "..." : "Search"}
                        </button>
                    </div>

                    <div className="space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar">
                        {results.length === 0 && !loading && query && (
                            <p className="text-center text-white/30 py-4">No users found.</p>
                        )}

                        {results.map((user) => (
                            <div key={user.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all">
                                <Avatar src={user.avatar_url || undefined} fallback={user.username || user.full_name || "?"} />
                                <div className="flex-1 overflow-hidden">
                                    <p className="font-semibold text-white truncate">{user.full_name || user.username || "Unknown"}</p>
                                    <p className="text-xs text-white/50 truncate">@{user.username}</p>
                                </div>
                                <button
                                    onClick={() => sendRequest(user.id)}
                                    disabled={requested.has(user.id)}
                                    className={cn(
                                        "p-2 rounded-full transition-all",
                                        requested.has(user.id) ? "bg-green-500/20 text-green-400" : "bg-primary/10 text-primary hover:bg-primary/20"
                                    )}
                                >
                                    {requested.has(user.id) ? <Check className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
