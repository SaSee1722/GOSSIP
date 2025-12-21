"use client";

import { useStatus } from "@/contexts/status-context";
import { useAuth } from "@/contexts/auth-context";
import { Plus, Radio, Loader2, Camera, X, Play, Pause, Send } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { GradientText } from "@/components/ui/gradient-text";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ProfileService } from "@/services/profile-service";
import { StatusService } from "@/services/status-service";
import { useToast } from "@/contexts/toast-context";

export default function StatusPage() {
    const { statuses, loading, uploadStatus: uploadStatusToDb, refreshStatuses } = useStatus();
    const { user } = useAuth();
    const { addToast } = useToast();
    const [viewingUser, setViewingUser] = useState<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    // Creation Flow States
    const [mode, setMode] = useState<'grid' | 'camera' | 'preview'>('grid');
    const [capturedMedia, setCapturedMedia] = useState<{ file: File, url: string, type: 'image' | 'video' } | null>(null);
    const [caption, setCaption] = useState("");
    const [uploading, setUploading] = useState(false);

    // Camera Refs
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Group statuses by user
    const userStatuses = statuses.reduce((acc: any, status: any) => {
        const userId = status.user_id;
        if (!acc[userId]) {
            acc[userId] = { ...status.profiles, items: [] };
        }
        acc[userId].items.push(status);
        return acc;
    }, {});
    const sortedUsers = Object.values(userStatuses).map((u: any) => ({ user: u, items: u.items }));

    // Cleanup URLs on unmount/change
    useEffect(() => {
        return () => {
            if (capturedMedia?.url) URL.revokeObjectURL(capturedMedia.url);
            stopCamera();
        };
    }, []);

    // --- Status Viewer Logic ---
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
            }, 50);
        }
        return () => clearInterval(timer);
    }, [viewingUser, currentIndex]);

    // --- Camera Logic ---
    const startCamera = async () => {
        try {
            setMode('camera');
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error(err);
            addToast("Unable to access camera. Please check permissions.", "error");
            setMode('grid');
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
    };

    const capturePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                // Flip horizontally for selfie mirror effect if needed, but usually raw capture is better
                // ctx.translate(canvas.width, 0);
                // ctx.scale(-1, 1);
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                canvas.toBlob((blob) => {
                    if (blob) {
                        const file = new File([blob], `capture_${Date.now()}.png`, { type: 'image/png' });
                        const url = URL.createObjectURL(blob);
                        setCapturedMedia({ file, url, type: 'image' });
                        setMode('preview');
                        stopCamera();
                    }
                }, 'image/png');
            }
        }
    };

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 50 * 1024 * 1024) {
            addToast("File size too large. Max 50MB allowed.", "error");
            return;
        }

        const isVideo = file.type.startsWith('video/');
        if (isVideo) {
            const duration = await getVideoDuration(file);
            if (duration > 32) {
                addToast("Video too long. Max 30 seconds allowed.", "error");
                return;
            }
        }

        const url = URL.createObjectURL(file);
        setCapturedMedia({ file, url, type: isVideo ? 'video' : 'image' });
        setMode('preview');
        // Reset input
        e.target.value = "";
    };

    const handlePost = async () => {
        if (!capturedMedia || !user) return;
        setUploading(true);
        try {
            // Upload Media
            const { data: url, error: uploadError } = await StatusService.uploadMedia(capturedMedia.file);
            if (uploadError) throw new Error(uploadError);

            // Create Status Record
            if (url) {
                await uploadStatusToDb(url, caption);
                addToast("Whisper posted!", "success");
                refreshStatuses();
                handleCloseCreation();
            }
        } catch (err: any) {
            addToast(err.message || "Failed to post whisper", "error");
        } finally {
            setUploading(false);
        }
    };

    const handleCloseCreation = () => {
        setMode('grid');
        setCapturedMedia(null);
        setCaption("");
        if (streamRef.current) stopCamera();
    };

    // Helper ...
    const getVideoDuration = (file: File): Promise<number> => {
        return new Promise((resolve) => {
            try {
                const video = document.createElement('video');
                video.preload = 'metadata';
                video.onloadedmetadata = () => {
                    resolve(video.duration);
                    window.URL.revokeObjectURL(video.src);
                };
                video.onerror = () => resolve(0);
                video.src = URL.createObjectURL(file);
            } catch { resolve(0); }
        });
    };

    const getNameColor = (gender?: string) => {
        switch (gender?.toLowerCase()) {
            case 'male': return '#00BFFF';
            case 'female': return '#FFB6C1';
            case 'other': return '#FFD700';
            default: return '#FFF';
        }
    };

    const isVideoUrl = (url: string) => ['mp4', 'webm', 'mov', 'ogg'].includes(url.split('.').pop()?.toLowerCase() || '');


    return (
        <div className="flex-1 flex flex-col bg-black h-full relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

            {/* --- GRID MODE --- */}
            {mode === 'grid' && (
                <>
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
                                onClick={startCamera}
                                className="p-5 bg-white/5 border border-white/10 rounded-[24px] hover:bg-white/10 transition-all text-white"
                            >
                                <Camera className="w-8 h-8" />
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*,video/*"
                                onChange={handleFileSelect}
                            />
                        </div>
                    </header>

                    <div className="flex-1 overflow-y-auto custom-scrollbar p-8 pt-4 relative z-10">
                        {loading ? (
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
                                        {isVideoUrl(item.items[0].media_url) ? (
                                            <video
                                                src={item.items[0].media_url}
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 duration-700 transition-all"
                                                muted loop
                                            />
                                        ) : (
                                            <img
                                                src={item.items[0].media_url}
                                                alt=""
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 duration-700 transition-all"
                                            />
                                        )}
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
                                                <p className="text-[14px] font-black uppercase text-white tracking-tight truncate italic" style={{ color: getNameColor(item.user.gender) }}>{item.user.username}</p>
                                                <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">{new Date(item.items[0].created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}

            {/* --- CAMERA MODE --- */}
            {mode === 'camera' && (
                <div className="absolute inset-0 z-50 bg-black flex flex-col">
                    <div className="relative flex-1 bg-black overflow-hidden rounded-[40px] m-4 border border-white/10">
                        <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                        <canvas ref={canvasRef} className="hidden" />

                        {/* Camera Controls */}
                        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-12">
                            <button
                                onClick={handleCloseCreation}
                                className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>

                            <button
                                onClick={capturePhoto}
                                className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center hover:scale-105 transition-transform active:scale-95 bg-white/10"
                            >
                                <div className="w-16 h-16 bg-white rounded-full pointer-events-none" />
                            </button>

                            <div className="w-12 h-12" /> {/* Spacer for balance */}
                        </div>
                    </div>
                </div>
            )}

            {/* --- PREVIEW MODE --- */}
            {mode === 'preview' && capturedMedia && (
                <div className="absolute inset-0 z-50 bg-black flex flex-col animate-in zoom-in duration-300">
                    <div className="relative flex-1 m-4 rounded-[40px] overflow-hidden border border-white/10 bg-[#111]">
                        {capturedMedia.type === 'video' ? (
                            <video src={capturedMedia.url} className="w-full h-full object-contain" autoPlay loop playsInline />
                        ) : (
                            <img src={capturedMedia.url} className="w-full h-full object-contain" />
                        )}

                        <button
                            onClick={handleCloseCreation}
                            className="absolute top-6 right-6 p-3 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-xl border border-white/10 text-white transition-all z-20"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Caption Input */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-20">
                            <div className="flex gap-4 items-end">
                                <div className="flex-1">
                                    <input
                                        value={caption}
                                        onChange={(e) => setCaption(e.target.value)}
                                        placeholder="Add a caption..."
                                        autoFocus
                                        className="w-full bg-transparent text-white placeholder-white/50 text-lg font-medium outline-none border-b border-white/20 pb-2 focus:border-white transition-colors"
                                    />
                                </div>
                                <button
                                    onClick={handlePost}
                                    disabled={uploading}
                                    className="p-4 bg-secondary text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 shadow-lg shadow-secondary/20"
                                >
                                    {uploading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- STATUS VIEWER --- */}
            {viewingUser && (
                <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center p-4">
                    <div className="relative w-full max-w-lg aspect-[9/16] rounded-[40px] overflow-hidden bg-white/5 shadow-2xl animate-in zoom-in duration-300">
                        {isVideoUrl(viewingUser.items[currentIndex].media_url) ? (
                            <video
                                src={viewingUser.items[currentIndex].media_url}
                                className="absolute inset-0 w-full h-full object-contain md:object-cover"
                                autoPlay
                                playsInline
                                onEnded={() => {
                                    if (currentIndex < viewingUser.items.length - 1) {
                                        setCurrentIndex(currentIndex + 1);
                                        setProgress(0);
                                    } else {
                                        setViewingUser(null);
                                    }
                                }}
                            />
                        ) : (
                            <img
                                src={viewingUser.items[currentIndex].media_url}
                                alt=""
                                className="absolute inset-0 w-full h-full object-contain md:object-cover"
                            />
                        )}

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

                        {/* Caption in Viewer */}
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
