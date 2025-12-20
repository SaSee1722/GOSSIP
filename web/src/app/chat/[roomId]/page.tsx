import ChatWindow from "@/components/chat-window";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ChatPage({
    params,
}: {
    params: Promise<{ roomId: string }>;
}) {
    // await params for Next.js 15+ compatibility (just in case, safe pattern)
    const { roomId } = await params;
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) redirect("/login");

    return <ChatWindow roomId={roomId} user={user} />;
}
