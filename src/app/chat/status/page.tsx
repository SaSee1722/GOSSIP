"use client";

import { useStatus } from "@/contexts/status-context";
import { useAuth } from "@/contexts/auth-context";
import { Plus, Radio, Loader2, Camera, X, Play, Pause } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { GradientText } from "@/components/ui/gradient-text";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ProfileService } from "@/services/profile-service";
import { useToast } from "@/contexts/toast-context";

export default function StatusPage() {
    const { statuses, loading, uploadStatus, refreshStatuses } = useStatus();
    const { user } = useAuth();
    const { addToast } = useToast();
    const [viewingUser, setViewingUser] = useState<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Group statuses by user
    const userStatuses = statuses.reduce((acc: any, status: any) => {
        const userId = status.user_id;
        if (!acc[userId]) {
            acc[userId] = {
                user: status.profiles,
                items: []
            };
        }
        acc[userId].items.push(status);
        return acc;
    }, {});

    const sortedUsers = Object.values(userStatuses);

    // Status Viewer Logic
    useEffect(() => {
        let timer: any;
        if (viewingUser) {
            setProgress(0);
            timer = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        if (currentIndex < viewingUser.items.length - 1) {
                            setCurrentIndex(currentIndex + 1);
                            return 0;
                        } else {
                            setViewingUser(null);
                            return 0;
                        }
                    }
                    return prev + 1;
                });
            }, 50); // 5 seconds per status (100 * 50ms)
        }
        return () => clearInterval(timer);
    }, [viewingUser, currentIndex]);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            if (!user) throw new Error("Not authenticated");
            const { data: url, error } = await ProfileService.uploadAvatar(user.id, file);
            if (error) throw new Error(error);
            if (url) {
                await uploadStatus(url, "");
                addToast("Whisper posted!", "success");
                refreshStatuses();
            }
        } catch (err: any) {
            addToast(err.message || "Failed to post whisper", "error");
        } finally {
            setUploading(false);
        }
    };

    const getNameColor = (gender?: string) => {
        switch (gender?.toLowerCase()) {
            case 'male': return '#00BFFF';
            case 'female': return '#FFB6C1';
            case 'other': return '#FFD700';
            default: return '#FFF';
        }
    };

    return (
        <div className="flex-1 flex flex-col bg-black h-full relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Header */}
            <header className="p-8 pb-4 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-6">
                    <div>
                        <div className="flex items-center gap-4">
                            <GradientText text="Whispers" className="text-5xl font-black italic uppercase tracking-tighter" />
                            <div className="w-16 h-16 relative">
                                <img src="/gossip_illustration.png" alt="Whispers" className="w-full h-full object-contain opacity-80" />
                            </div>
                        </div>
                        <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em] mt-1">Disappearing stories of your circle.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="p-5 bg-white/5 border border-white/10 rounded-[24px] hover:bg-white/10 transition-all text-white disabled:opacity-50"
                    >
                        {uploading ? <Loader2 className="w-8 h-8 animate-spin" /> : <Camera className="w-8 h-8" />}
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileSelect}
                    />
                </div>
            </header>

            {/* Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 pt-4 relative z-10">
                {loading && !uploading ? (
                    <div className="flex items-center justify-center h-64">
                        <Loader2 className="w-10 h-10 animate-spin text-secondary" />
                    </div>
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {/* My Status Card */}
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="aspect-[3/4] rounded-[40px] bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center gap-4 hover:border-secondary transition-all cursor-pointer group active:scale-95"
                        >
                            <div className="w-20 h-20 rounded-[30px] bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-all">
                                <Plus className="w-10 h-10" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-secondary transition-colors">Post Whisper</span>
                        </div>

                        {/* User Status Cards */}
                        {sortedUsers.map((item: any) => (
                            <div
                                key={item.user.id}
                                onClick={() => {
                                    setViewingUser(item);
                                    setCurrentIndex(0);
                                    setProgress(0);
                                }}
                                className="aspect-[3/4] rounded-[40px] relative overflow-hidden border border-white/10 hover:border-secondary transition-all cursor-pointer group"
                            >
                                <img
                                    src={item.items[0].media_url}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 duration-700 transition-all"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                <div className="absolute top-6 left-6 right-6 flex gap-2">
                                    {item.items.map((_: any, idx: number) => (
                                        <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                                            {idx === 0 && <div className="h-full bg-secondary w-full" />}
                                        </div>
                                    ))}
                                </div>

                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <div className="relative p-1 rounded-full border-2 border-secondary bg-black ring-4 ring-black">
                                        <Avatar src={item.user.avatar_url} fallback={item.user.username?.[0] || "?"} className="w-10 h-10" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[14px] font-black uppercase text-white tracking-tight truncate italic" style={{ color: getNameColor(item.user.gender) }}>
                                            {item.user.username}
                                        </p>
                                        <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">
                                            {new Date(item.items[0].created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Status Viewer Modal */}
            {viewingUser && (
                <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center p-4">
                    <div className="relative w-full max-w-lg aspect-[9/16] rounded-[40px] overflow-hidden bg-white/5 shadow-2xl animate-in zoom-in duration-300">
                        <img
                            src={viewingUser.items[currentIndex].media_url}
                            alt=""
                            className="absolute inset-0 w-full h-full object-contain md:object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none" />

                        {/* Progress Bars */}
                        <div className="absolute top-8 left-8 right-8 flex gap-2 z-20">
                            {viewingUser.items.map((_: any, idx: number) => (
                                <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                                    {idx < currentIndex && <div className="h-full bg-white w-full" />}
                                    {idx === currentIndex && <div className="h-full bg-white transition-all duration-50" style={{ width: `${progress}%` }} />}
                                </div>
                            ))}
                        </div>

                        {/* Header */}
                        <div className="absolute top-14 left-8 right-8 flex items-center justify-between z-20">
                            <div className="flex items-center gap-4">
                                <Avatar src={viewingUser.user.avatar_url} fallback={viewingUser.user.username[0]} className="w-12 h-12 ring-2 ring-white/50" />
                                <div>
                                    <p className="text-white font-black italic uppercase tracking-tight" style={{ color: getNameColor(viewingUser.user.gender) }}>{viewingUser.user.username}</p>
                                    <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">{new Date(viewingUser.items[currentIndex].created_at).toLocaleTimeString()}</p>
                                </div>
                            </div>
                            <button onClick={() => setViewingUser(null)} className="p-3 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-xl border border-white/10 text-white transition-all">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Caption */}
                        {viewingUser.items[currentIndex].caption && (
                            <div className="absolute bottom-16 left-8 right-8 z-20 text-center">
                                <p className="text-white text-lg font-bold drop-shadow-lg">{viewingUser.items[currentIndex].caption}</p>
                            </div>
                        )}

                        {/* Tap Controls */}
                        <div className="absolute inset-x-0 top-32 bottom-32 flex z-10">
                            <div
                                className="flex-1 hover:bg-white/5 transition-all cursor-pointer"
                                onClick={() => {
                                    if (currentIndex > 0) {
                                        setCurrentIndex(currentIndex - 1);
                                        setProgress(0);
                                    }
                                }}
                            />
                            <div
                                className="flex-1 hover:bg-white/5 transition-all cursor-pointer"
                                onClick={() => {
                                    if (currentIndex < viewingUser.items.length - 1) {
                                        setCurrentIndex(currentIndex + 1);
                                        setProgress(0);
                                    } else {
                                        setViewingUser(null);
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
