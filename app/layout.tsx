import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T3 Chat",
  description: "",
};

import { ReactQueryClientProvider } from "@/context/query-client";
import { SidebarProvider } from "@/context/sidebar-context";
import { ChatMessageProvider } from "@/hooks/use-chat-messages";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`antialiased`}>
        <ChatMessageProvider>
          <ReactQueryClientProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ReactQueryClientProvider>
        </ChatMessageProvider>
      </body>
    </html>
  );
}
