"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
    text: string;
    className?: string;
    colors?: [string, string];
}

export function GradientText({ text, className, colors = ['#00BFFF', '#FFB6C1'] }: GradientTextProps) {
    return (
        <span
            className={cn("bg-clip-text text-transparent", className)}
            style={{
                backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}
        >
            {text}
        </span>
    );
}
