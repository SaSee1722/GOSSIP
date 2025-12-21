"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/contexts/toast-context";
import { Eye, EyeOff, Mail, Lock, User, Shield, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
    const router = useRouter();
    const { user, signInWithPassword, signUpWithPassword, operationLoading } = useAuth();
    const { addToast } = useToast();

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            router.replace("/chat");
        }
    }, [user, router]);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isLogin) {
            if (!email || !password) {
                addToast("Please fill in all fields", "error");
                return;
            }
            const { error } = await signInWithPassword(email, password);
            if (error) addToast(error, "error");
        } else {
            if (!email || !password || !username) {
                addToast("Please fill in all fields", "error");
                return;
            }
            if (password !== confirmPassword) {
                addToast("Passwords do not match", "error");
                return;
            }
            const { error, needsEmailConfirmation } = await signUpWithPassword(email, password, {
                username,
                full_name: username,
            });
            if (error) {
                addToast(error, "error");
            } else if (needsEmailConfirmation) {
                addToast("Check your email to confirm your account", "success");
            }
        }
    };

    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-sm z-10"
            >
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl font-black text-white tracking-tight mb-2">
                        {isLogin ? "Welcome Back" : "Create Account"}
                    </h1>
                    <p className="text-[#888] font-medium text-sm">
                        {isLogin ? "Sign in to continue chatting" : "Join the conversation today"}
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-[#111] border border-[#222] rounded-[30px] p-6 shadow-2xl">
                    {/* Toggle */}
                    <div className="flex bg-[#222] p-1.5 rounded-xl mb-6">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${isLogin ? "bg-white text-black shadow-md" : "text-[#888] hover:text-white"
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${!isLogin ? "bg-white text-black shadow-md" : "text-[#888] hover:text-white"
                                }`}
                        >
                            Signup
                        </button>
                    </div>

                    <form onSubmit={handleAuth} className="space-y-4">
                        <div className="space-y-4">
                            {/* Email Input */}
                            <div className={`relative group transition-all duration-300 rounded-[18px] border ${focusedInput === 'email' ? 'border-[#00BFFF] bg-[#00BFFF]/5' : 'border-[#222] bg-[#1A1A1A]'
                                }`}>
                                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <Mail size={18} className={focusedInput === 'email' ? 'text-[#00BFFF]' : 'text-[#666]'} />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setFocusedInput('email')}
                                    onBlur={() => setFocusedInput(null)}
                                    className="w-full h-[52px] bg-transparent pl-12 pr-4 outline-none text-white text-[15px] font-medium placeholder:text-[#444]"
                                />
                            </div>

                            {/* Username Input (Signup only) */}
                            <AnimatePresence>
                                {!isLogin && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className={`relative group transition-all duration-300 rounded-[18px] border ${focusedInput === 'username' ? 'border-[#00BFFF] bg-[#00BFFF]/5' : 'border-[#222] bg-[#1A1A1A]'
                                            }`}>
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                                <User size={18} className={focusedInput === 'username' ? 'text-[#00BFFF]' : 'text-[#666]'} />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                onFocus={() => setFocusedInput('username')}
                                                onBlur={() => setFocusedInput(null)}
                                                className="w-full h-[52px] bg-transparent pl-12 pr-4 outline-none text-white text-[15px] font-medium placeholder:text-[#444]"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Password Input */}
                            <div className={`relative group transition-all duration-300 rounded-[18px] border ${focusedInput === 'pass' ? 'border-[#00BFFF] bg-[#00BFFF]/5' : 'border-[#222] bg-[#1A1A1A]'
                                }`}>
                                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <Lock size={18} className={focusedInput === 'pass' ? 'text-[#00BFFF]' : 'text-[#666]'} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => setFocusedInput('pass')}
                                    onBlur={() => setFocusedInput(null)}
                                    className="w-full h-[52px] bg-transparent pl-12 pr-12 outline-none text-white text-[15px] font-medium placeholder:text-[#444]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666] hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {/* Confirm Password (Signup only) */}
                            <AnimatePresence>
                                {!isLogin && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden pt-4"
                                    >
                                        <div className={`relative group transition-all duration-300 rounded-[18px] border ${focusedInput === 'confirm' ? 'border-[#00BFFF] bg-[#00BFFF]/5' : 'border-[#222] bg-[#1A1A1A]'
                                            }`}>
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                                <Shield size={18} className={focusedInput === 'confirm' ? 'text-[#00BFFF]' : 'text-[#666]'} />
                                            </div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Confirm Password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                onFocus={() => setFocusedInput('confirm')}
                                                onBlur={() => setFocusedInput(null)}
                                                className="w-full h-[52px] bg-transparent pl-12 pr-4 outline-none text-white text-[15px] font-medium placeholder:text-[#444]"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={operationLoading}
                            className="w-full mt-6 h-[56px] rounded-[18px] font-bold text-[16px] relative overflow-hidden group disabled:opacity-50 shadow-lg shadow-[#00BFFF]/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-[#FFB6C1] transition-transform duration-300 group-hover:scale-105" />
                            <span className="relative flex items-center justify-center gap-2 text-white">
                                {operationLoading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        {isLogin ? "Sign In" : "Create Account"}
                                    </>
                                )}
                            </span>
                        </button>
                    </form>

                    {isLogin && (
                        <button className="w-full mt-6 text-[#00BFFF] text-xs font-bold hover:underline transition-all">
                            Forgot Password?
                        </button>
                    )}
                </div>

                {/* Footer Toggle */}
                <p className="mt-8 text-center text-[#666] text-xs">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-[#00BFFF] font-bold hover:underline ml-1"
                    >
                        {isLogin ? "Sign Up" : "Log In"}
                    </button>
                </p>
            </motion.div>
        </div>
    );
}
