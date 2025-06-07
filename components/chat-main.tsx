"use client";

import { SIDEBAR_WIDTH } from "@/lib/constants";

import { useSidebar } from "@/context/sidebar-context";

import { motion } from "motion/react";

export function MainChatArea() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <motion.div
      className="bg-[#FAF4FA] border-[#F6C4D0] h-[100vh] flex flex-col justify-end border border-b-0 overflow-hidden rounded-tl-xl"
      animate={{
        marginLeft: isSidebarOpen ? SIDEBAR_WIDTH : 0,
        marginTop: isSidebarOpen ? 16 : 0,
        height: isSidebarOpen ? "calc(100vh - 16px)" : "100vh",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div>bottom part</div>
    </motion.div>
  );
}
