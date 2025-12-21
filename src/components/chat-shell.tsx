"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";
import { MessageSquare, Users, Radio, Phone } from "lucide-react";
import Link from "next/link";

export function ChatShell({ children, user }: { children: React.ReactNode; user: any }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isRoomSelected = searchParams.has("roomId");
    const isChatRoot = pathname === "/chat";

    return (
        <div className="flex h-screen bg-background overflow-hidden relative">
            {/* Main Content Area */}
            <main className="flex-1 relative flex flex-col h-full overflow-hidden max-w-2xl mx-auto w-full">
                {children}
            </main>

            {/* Bottom Navigation matches Image 1 - Floating Style */}
            {!isRoomSelected && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[380px] bg-black/90 backdrop-blur-xl border border-white/10 flex items-center justify-between px-8 py-4 z-50 rounded-full shadow-2xl shadow-black/50 ring-1 ring-white/5">
                    <Link
                        href="/chat"
                        className={cn(
                            "flex flex-col items-center gap-1 transition-all relative transform hover:scale-110 active:scale-95",
                            isChatRoot ? "text-primary scale-110" : "text-white/40 hover:text-white"
                        )}
                    >
                        <MessageSquare className="w-6 h-6" fill={isChatRoot ? "currentColor" : "none"} strokeWidth={isChatRoot ? 2.5 : 2} />
                        {isChatRoot && (
                            <div className="absolute -bottom-2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                        )}
                    </Link>
                    <Link
                        href="/chat/groups"
                        className={cn(
                            "flex flex-col items-center gap-1 transition-all relative transform hover:scale-110 active:scale-95",
                            pathname.includes('groups') ? "text-primary scale-110" : "text-white/40 hover:text-white"
                        )}
                    >
                        <Users className="w-6 h-6" fill={pathname.includes('groups') ? "currentColor" : "none"} strokeWidth={pathname.includes('groups') ? 2.5 : 2} />
                        {pathname.includes('groups') && (
                            <div className="absolute -bottom-2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                        )}
                    </Link>
                    <Link
                        href="/chat/calls"
                        className={cn(
                            "flex flex-col items-center gap-1 transition-all relative transform hover:scale-110 active:scale-95",
                            pathname.includes('calls') ? "text-primary scale-110" : "text-white/40 hover:text-white"
                        )}
                    >
                        <Phone className="w-6 h-6" fill={pathname.includes('calls') ? "currentColor" : "none"} strokeWidth={pathname.includes('calls') ? 2.5 : 2} />
                        {pathname.includes('calls') && (
                            <div className="absolute -bottom-2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                        )}
                    </Link>
                    <Link
                        href="/chat/profile"
                        className={cn(
                            "flex flex-col items-center gap-1 transition-all relative transform hover:scale-110 active:scale-95",
                            pathname.includes('profile') ? "text-primary scale-110" : "text-white/40 hover:text-white"
                        )}
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={pathname.includes('profile') ? "currentColor" : "none"} stroke="currentColor" strokeWidth={pathname.includes('profile') ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        {pathname.includes('profile') && (
                            <div className="absolute -bottom-2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                        )}
                    </Link>
                </div>
            )}
        </div>
    );
}
