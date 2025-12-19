"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    toasts: Toast[];
    addToast: (message: string, type?: ToastType) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((message: string, type: ToastType = "info") => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={cn(
                            "pointer-events-auto min-w-[300px] max-w-sm p-4 rounded-xl shadow-lg border backdrop-blur-md flex items-start gap-3 animate-in slide-in-from-right-full fade-in duration-300",
                            toast.type === "success" && "bg-green-500/10 border-green-500/20 text-green-500",
                            toast.type === "error" && "bg-red-500/10 border-red-500/20 text-red-500",
                            toast.type === "warning" && "bg-yellow-500/10 border-yellow-500/20 text-yellow-500",
                            toast.type === "info" && "bg-blue-500/10 border-blue-500/20 text-blue-500"
                        )}
                    >
                        {toast.type === "success" && <CheckCircle className="w-5 h-5 shrink-0" />}
                        {toast.type === "error" && <AlertCircle className="w-5 h-5 shrink-0" />}
                        {toast.type === "warning" && <AlertTriangle className="w-5 h-5 shrink-0" />}
                        {toast.type === "info" && <Info className="w-5 h-5 shrink-0" />}

                        <div className="flex-1 text-sm font-medium">{toast.message}</div>

                        <button onClick={() => removeToast(toast.id)} className="opacity-70 hover:opacity-100">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
