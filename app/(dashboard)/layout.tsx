import React from "react";
import { onLoginUser } from "@/actions/auth";
import { ChatProvider } from "@/context/user-chat-context";
import Sidebar from "./_components/Sidebar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authenticated = await onLoginUser();
  if (!authenticated) return null;
  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <Sidebar domains={authenticated.domain} />
        <div className="flex h-screen w-full flex-col py-3 pl-20 pr-10 md:px-10">
          {children}
        </div>
      </div>
    </ChatProvider>
  );
}
