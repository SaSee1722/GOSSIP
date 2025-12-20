import { redirect } from "next/navigation";


import { createClient } from "@/lib/supabase/server";
import { CallProvider } from "@/contexts/call-context";
import { ChatShell } from "@/components/chat-shell";

export default async function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    return (
        <CallProvider user={user}>
            <ChatShell user={user}>
                {children}
            </ChatShell>
        </CallProvider>
    );
}

