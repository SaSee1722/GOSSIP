"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";

export function ChatShell({ children, user }: { children: React.ReactNode; user: any }) {
    const pathname = usePathname();
    const isRoomSelected = pathname.includes("/chat/") && pathname !== "/chat";

    return (
        <div className="flex h-screen bg-background overflow-hidden relative">
            <div className={cn(
                "h-full transition-all duration-300",
                // Mobile: Full width if no room selected, hidden if room selected
                // Desktop: Fixed width 80 (20rem) always
                isRoomSelected ? "hidden md:flex md:w-80" : "w-full md:w-80"
            )}>
                <Sidebar user={user} />
            </div>

            {/* Main Chat Area */}
            <main className={cn(
                "flex-1 relative flex flex-col h-full overflow-hidden transition-all duration-300",
                // Mobile: Hidden if no room selected, Full width if room selected
                // Desktop: Always flex-1
                !isRoomSelected ? "hidden md:flex" : "flex w-full"
            )}>
                {children}
            </main>
        </div>
    );
}
