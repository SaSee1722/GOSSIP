"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Avatar } from "@/components/ui/avatar";
import { Check, X, UserCheck } from "lucide-react";
import { Connection } from "@/lib/types";

interface ConnectionRequestsProps {
    onClose: () => void;
    currentUserId: string;
}

export function ConnectionRequests({ onClose, currentUserId }: ConnectionRequestsProps) {
    const [requests, setRequests] = useState<Connection[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        const { data, error } = await supabase
            .from("connections")
            .select("*, requester:profiles!requester_id(*)")
            .eq("addressee_id", currentUserId)
            .eq("status", "pending");

        if (data) {
            setRequests(data as any); // Cast because Supabase joined types are tricky
        }
        setLoading(false);
    };

    const handleResponse = async (id: string, status: 'accepted' | 'rejected') => {
        const { error } = await supabase
            .from("connections")
            .update({ status })
            .eq("id", id);

        if (!error) {
            setRequests((prev) => prev.filter(req => req.id !== id));
            if (status === 'accepted') {
                // Optional: Create DM room logic here or rely on the user to start one
                // Ideally we check if a DM exists, if not create one.
                // For now, let's just accept.
            }
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-[#1e1e24] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-primary" />
                        Connection Requests
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X className="w-5 h-5 text-white/70" />
                    </button>
                </div>

                <div className="p-4 space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar">
                    {loading && <p className="text-center text-white/30 py-4">Loading...</p>}
                    {!loading && requests.length === 0 && (
                        <div className="text-center text-white/30 py-8 flex flex-col items-center gap-2">
                            <UserCheck className="w-10 h-10 opacity-20" />
                            <p>No pending requests.</p>
                        </div>
                    )}

                    {requests.map((req) => (
                        <div key={req.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <Avatar
                                src={req.requester?.avatar_url || undefined}
                                fallback={req.requester?.username || "?"}
                            />
                            <div className="flex-1 overflow-hidden">
                                <p className="font-semibold text-white truncate">
                                    {req.requester?.full_name || req.requester?.username || "Unknown User"}
                                </p>
                                <p className="text-xs text-white/50 truncate">
                                    wants to connect
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => handleResponse(req.id, 'accepted')}
                                    className="p-2 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-full transition-colors"
                                    title="Accept"
                                >
                                    <Check className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleResponse(req.id, 'rejected')}
                                    className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-full transition-colors"
                                    title="Reject"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
