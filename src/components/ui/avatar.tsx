import { cn } from "@/lib/utils";

interface AvatarProps {
    src?: string | null;
    fallback: string;
    className?: string;
}

export function Avatar({ src, fallback, className }: AvatarProps) {
    return (
        <div className={cn("relative w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center", className)}>
            {src ? (
                <img src={src} alt={fallback} className="w-full h-full object-cover" />
            ) : (
                <span className="font-medium text-muted-foreground uppercase">{fallback.slice(0, 2)}</span>
            )}
        </div>
    );
}
