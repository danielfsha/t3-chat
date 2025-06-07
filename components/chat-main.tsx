"use client";

import Image from "next/image";

import { SIDEBAR_WIDTH } from "@/lib/constants";

import { useSidebar } from "@/context/sidebar-context";

import { motion } from "motion/react";
import ChatMessageForm from "./chat-message-form";
import Greeting from "@/components/greeting";

export function MainChatArea() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <motion.div
      className="bg-[#FAF4FA] border-[#F6C4D0] h-[100vh] flex flex-col justify-end border-2 border-b-0 rounded-tl-xl"
      animate={{
        marginLeft: isSidebarOpen ? SIDEBAR_WIDTH : 0,
        marginTop: isSidebarOpen ? 16 : 0,
        height: isSidebarOpen ? "calc(100vh - 16px)" : "100vh",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative w-full h-full">
        <motion.img
          width={250}
          height={100}
          src={"/top-right-svg-light.svg"}
          alt="top-right-svg-light"
          className="absolute z-1"
          animate={{
            right: isSidebarOpen ? -120 : -400,
          }}
          transition={{ type: "spring", stiffness: 330, damping: 30 }}
        />

        <div className="relative h-full w-full px-2 mx-auto max-w-screen-md">
          <Greeting />
          <ChatMessageForm />
        </div>
      </div>
    </motion.div>
  );
}
