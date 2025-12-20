export default function DashboardPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold">Welcome to GOSSIP</h2>
            <p className="text-muted-foreground max-w-sm">
                Select a conversation from the sidebar or start a new one to begin chatting.
            </p>
        </div>
    );
}
