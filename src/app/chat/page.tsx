"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import ChatWindow from "@/components/chat-window";
import { Sidebar } from "@/components/sidebar";

function ChatContent() {
    const searchParams = useSearchParams();
    const roomId = searchParams.get("roomId");
    const [user, setUser] = useState<User | null>(null);
    const supabase = createClient();

    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    }, [supabase.auth]);

    if (!user) return null;

    if (!roomId) {
        return <Sidebar user={user} />;
    }

    return <ChatWindow roomId={roomId} user={user} />;
}

export default function DashboardPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ChatContent />
        </Suspense>
    );
}
