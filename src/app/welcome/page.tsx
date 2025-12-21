"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, MessageSquare, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function WelcomePage() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between p-8 overflow-hidden font-sans">
            {/* Decorative Gradients (Glows) */}
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-primary rounded-full blur-[100px] opacity-20 animate-pulse" />
            <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-secondary rounded-full blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="z-10 w-full max-w-md flex flex-col items-center justify-center min-h-[80vh] gap-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <div className="relative w-[100px] h-[100px] rounded-[30px] border border-[#00BFFF]/30 flex items-center justify-center mb-6 bg-[#00BFFF]/10 backdrop-blur-sm shadow-xl shadow-[#00BFFF]/10">
                        <MessageSquare size={50} className="text-[#00BFFF] fill-[#00BFFF]/20" />
                        <div className="absolute top-6 right-6 w-3 h-3 bg-[#FFB6C1] rounded-full shadow-lg shadow-[#FFB6C1]/50" />
                    </div>
                    <h1 className="text-4xl font-black tracking-[0.1em] mb-3">GOSSIP</h1>
                    <p className="text-[#888] text-base font-medium leading-relaxed max-w-[260px]">
                        Real-time conversations,<br />refined for you.
                    </p>
                </motion.div>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-full px-4 space-y-6"
                >
                    <div className="flex items-center gap-4 bg-[#111] p-4 rounded-2xl border border-[#222]">
                        <div className="w-10 h-10 rounded-xl bg-[#00BFFF]/10 flex items-center justify-center">
                            <Zap size={20} className="text-[#00BFFF]" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-white">Instant Delivery</h3>
                            <p className="text-xs text-[#666]">Messages that move as fast as you do.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-[#111] p-4 rounded-2xl border border-[#222]">
                        <div className="w-10 h-10 rounded-xl bg-[#FFB6C1]/10 flex items-center justify-center">
                            <ShieldCheck size={20} className="text-[#FFB6C1]" />
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-white">Privacy First</h3>
                            <p className="text-xs text-[#666]">Your data, your control. Always secure.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="w-full space-y-5 px-4"
                >
                    <button
                        onClick={() => router.push("/login")}
                        className="w-full h-[56px] rounded-[18px] font-bold text-lg relative overflow-hidden group shadow-lg shadow-[#00BFFF]/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-[#FFB6C1] transition-transform duration-500 group-hover:scale-105" />
                        <span className="relative flex items-center justify-center gap-2 text-white">
                            Get Started
                            <ArrowRight size={20} />
                        </span>
                    </button>

                    <p className="text-[11px] text-center text-[#444] font-medium">
                        By continuing, you agree to our <span className="text-[#666] hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
