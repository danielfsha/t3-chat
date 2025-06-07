"use client";

import React from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { MainChatArea } from "@/components/chat-main";

import { useSidebar } from "@/context/sidebar-context";

function Page() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className="h-screen bg-[#F2E4F4] relative overflow-hidden">
      <Navbar />
      <Sidebar />

      {/* Main Chat Area */}
      <MainChatArea />
    </div>
  );
}

export default Page;
