"use client";

import { AuthProvider } from "@/contexts/auth-context";
import { ChatProvider } from "@/contexts/chat-context";
import { StatusProvider } from "@/contexts/status-context";
import { CallProvider } from "@/contexts/call-context";
import { ToastProvider } from "@/contexts/toast-context";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <ToastProvider>
                <StatusProvider>
                    <ChatProvider>
                        <CallProvider>
                            {children}
                        </CallProvider>
                    </ChatProvider>
                </StatusProvider>
            </ToastProvider>
        </AuthProvider>
    );
}
