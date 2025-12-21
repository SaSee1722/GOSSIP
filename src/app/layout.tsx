import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Removing for now to use system fonts or other premium fonts
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "GOSSIP - Premium Chat",
  description: "Experience the next level of communication.",
};

import { Providers } from "@/components/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground"
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
