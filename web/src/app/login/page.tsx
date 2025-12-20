"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isSignUp) {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                });
                if (error) throw error;
                alert("Check your email for the confirmation link!");
            } else {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                router.push("/onboarding");
            }
        } catch (error: any) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary-dark via-background to-primary">
            <div className="glass-card w-full max-w-sm p-8 rounded-[2rem] space-y-8 shadow-reference-lg border border-white/10 bg-surface/30 backdrop-blur-2xl">
                <div className="text-center flex flex-col items-center">
                    <div className="w-20 h-20 bg-surface rounded-3xl flex items-center justify-center mb-6 shadow-reference-md rotate-3 hover:rotate-6 transition-transform duration-300 border border-divider">
                        <div className="text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                        </div>
                    </div>
                    <h1 className="text-foreground tracking-tight">
                        GOSSIP
                    </h1>
                    <p className="text-text-secondary mt-2 text-body">
                        Connect with friends instantly
                    </p>
                </div>

                <form onSubmit={handleAuth} className="space-y-5">
                    <div className="space-y-4">
                        <div className="bg-surface/50 rounded-xl px-4 py-2 border border-divider focus-within:border-primary/50 transition-all flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-transparent border-none outline-none text-body w-full placeholder:text-text-tertiary text-foreground h-10"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="bg-surface/50 rounded-xl px-4 py-2 border border-divider focus-within:border-primary/50 transition-all flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-transparent border-none outline-none text-body w-full placeholder:text-text-tertiary text-foreground h-10"
                                placeholder="Password"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={cn(
                            "w-full py-4 rounded-xl text-body-bold transition-all shadow-reference-md",
                            loading ? "opacity-70 cursor-not-allowed bg-primary-dark/80" : "bg-primary-dark text-white hover:bg-primary transform active:scale-95"
                        )}
                    >
                        {loading ? "Please wait..." : isSignUp ? "Create Account" : "Login"}
                    </button>
                </form>

                <div className="text-center pt-2">
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-body text-text-secondary hover:text-primary transition-colors font-medium underline underline-offset-4"
                    >
                        {isSignUp ? "Already have an account? Login" : "New to GOSSIP? Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
}
