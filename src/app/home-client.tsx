"use client";

import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomeClient({ user }: { user: User | null }) {
    const router = useRouter();

    useEffect(() => {
        if (user) {
            // router.refresh(); // Ensure state is fresh
            // In a real app we might redirect to /chat here
        }
    }, [user, router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
            <div className="glass-card p-12 rounded-3xl max-w-2xl w-full text-center space-y-6 animate-float">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    GOSSIP
                </h1>
                <p className="text-xl text-muted-foreground">
                    Talk freely. Connect deeply.
                </p>

                <div className="flex justify-center gap-4 mt-8">
                    {user ? (
                        <Link href="/chat">
                            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)] font-medium">
                                Open Chat
                            </button>
                        </Link>
                    ) : (
                        <>
                            <Link href="/login">
                                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)] font-medium">
                                    Get Started
                                </button>
                            </Link>
                            <Link href="/login">
                                <button className="px-8 py-3 glass hover:bg-white/10 rounded-full transition-all font-medium text-foreground">
                                    Login
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
