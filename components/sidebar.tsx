"use client";

import React from "react";
import { LogOut, PinIcon, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { useSidebar } from "@/context/sidebar-context";

import { SIDEBAR_WIDTH } from "@/lib/constants";

import { motion } from "motion/react";

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}

const conversations: Conversation[] = [
  {
    id: "1",
    title: "React Best Practices",
    lastMessage: "How do I optimize React components?",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    title: "TypeScript Help",
    lastMessage: "Explain generic types in TypeScript",
    timestamp: "1 day ago",
  },
  {
    id: "3",
    title: "CSS Grid Layout",
    lastMessage: "Creating responsive layouts with CSS Grid",
    timestamp: "3 days ago",
  },
  {
    id: "4",
    title: "API Integration",
    lastMessage: "Best practices for REST API calls",
    timestamp: "1 week ago",
  },
];

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <motion.div
      initial={{ x: -SIDEBAR_WIDTH }}
      animate={{ x: isSidebarOpen ? 0 : -SIDEBAR_WIDTH }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 w-[${SIDEBAR_WIDTH}px] h-full z-40 text-white`}
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

        <button className="bg-[#D3699B] border-[#8E3B65] border-1 w-full flex items-center justify-center gap-3 p-3 py-2 rounded-md text-white transition-colors">
          <span className="font-bold text-sm">New Chat</span>
        </button>

        {/* Conversations */}
        <div className="flex-1  overflow-hidden overflow-y-auto">
          <h3 className="text-xs text-gray-400 my-4">Recent Conversations</h3>
          <div className="flex flex-col space-y-1">
            {conversations.map((conversation) => (
              <motion.div
                key={conversation.id}
                className="relative p-2.5 rounded-lg hover:bg-white cursor-pointer transition-colors group"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <h4 className="text-[13px] truncate text-pink-950 group-hover:text-pink-600 transition-colors">
                  {conversation.title}
                </h4>

                <div className="absolute -right-[200px] top-0 h-full flex items-center justify-center group-hover:right-1 transition-all">
                  <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-pink-400">
                    <PinIcon size={16} className="text-pink-950" />
                  </button>
                  <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-pink-400">
                    <X size={16} className="text-pink-950" />
                  </button>
                </div>
              </motion.div>
            ))}
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
