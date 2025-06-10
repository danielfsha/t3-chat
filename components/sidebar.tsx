"use client";

import React, { useState } from "react";
import { LogOut, PinIcon, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "@/context/sidebar-context";
import { useIsMobile } from "@/hooks/use-mobile";
import { SIDEBAR_WIDTH } from "@/lib/constants";
import { motion } from "framer-motion";
import { Input } from "./ui/input";

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ x: -SIDEBAR_WIDTH }}
      animate={{ x: isSidebarOpen ? 0 : -SIDEBAR_WIDTH }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 w-[256px] h-full text-white ${
        isMobile
          ? "bg-white/80 backdrop-blur-md shadow-sm z-[100]"
          : "bg-transparent"
      }`}
    >
      <div className="flex flex-col h-full p-4 py-2 pb-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-2 h-12">
          <Image
            src={"./demo_wordmark.svg"}
            width={70}
            height={22}
            alt="T3 Chat"
          />
        </div>

        <button className="mt-2 bg-[#D3699B] border-[#8E3B65] border-1 w-full flex items-center justify-center gap-3 p-3 py-2 rounded-md text-white transition-colors">
          <span className="font-bold text-sm">New Chat</span>
        </button>

        {/* Search */}
        <div className="p-2 pb-0 border-b border-pink-900 w-full text-pink-950">
          <div className="relative">
            <Search className="absolute w-4 h-4 left-1 top-1/2 transform -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-b pl-8"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-hidden overflow-y-auto">
          <h3 className="text-xs text-gray-400 my-4">Your Chats</h3>
          <div className="flex flex-col space-y-1">
            <div
              className={`relative p-2.5 rounded-lg cursor-pointer transition-colors group w-full text-pink-950 hover:bg-white px-4 py-2 transition-colors`}
              onClick={() => alert("Chat clicked!")}
            >
              <h4 className="text-[13px] truncate">Untitled chat</h4>

              <div className="absolute -right-[200px] top-0 h-full flex items-center justify-center group-hover:right-1 transition-all">
                <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-pink-400">
                  <PinIcon size={16} className="text-pink-950" />
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-pink-400">
                  <X size={16} className="text-pink-950" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Link
          href={"/auth"}
          className="w-full flex items-center justify-start gap-3 p-3 py-5 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <LogOut size={18} />
          <span className="text-sm">Login</span>
        </Link>
      </div>
    </motion.div>
  );
}
