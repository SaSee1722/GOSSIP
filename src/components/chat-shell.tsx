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

            {/* Bottom Navigation matches Image 1 */}
            {!isRoomSelected && (
                <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-black border-t border-white/5 flex items-center justify-around px-2 py-4 z-50 pb-8">
                    <Link
                        href="/chat"
                        className={cn(
                            "flex flex-col items-center gap-1 transition-all relative p-2",
                            isChatRoot ? "text-primary" : "text-white/30"
                        )}
                    >
                        <MessageSquare className="w-6 h-6" fill={isChatRoot ? "currentColor" : "none"} />
                        {isChatRoot && (
                            <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full" />
                        )}
                    </Link>
                    <Link
                        href="/chat/groups"
                        className={cn(
                            "flex flex-col items-center gap-1 transition-all relative p-2",
                            pathname.includes('groups') ? "text-primary" : "text-white/30"
                        )}
                    >
                        <Users className="w-6 h-6" fill={pathname.includes('groups') ? "currentColor" : "none"} />
                        {pathname.includes('groups') && (
                            <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full" />
                        )}
                    </Link>
                    <Link
                        href="/chat/calls"
                        className={cn(
                            "flex flex-col items-center gap-1 transition-all relative p-2",
                            pathname.includes('calls') ? "text-primary" : "text-white/30"
                        )}
                    >
                        <Phone className="w-6 h-6" fill={pathname.includes('calls') ? "currentColor" : "none"} />
                        {pathname.includes('calls') && (
                            <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full" />
                        )}
                    </Link>
                    <Link
                        href="/chat/profile"
                        className={cn(
                            "flex flex-col items-center gap-1 transition-all relative p-2",
                            pathname.includes('profile') ? "text-primary" : "text-white/30"
                        )}
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={pathname.includes('profile') ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        {pathname.includes('profile') && (
                            <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full" />
                        )}
                    </Link>
                </div>
            )}
        </div>
    );
}
