"use client";

import { SIDEBAR_WIDTH } from "@/lib/constants";

import { useSidebar } from "@/context/sidebar-context";
import { useIsMobile } from "@/hooks/use-mobile";

import { motion } from "motion/react";
import ChatMessageForm from "./chat-message-form";
import Messages from "./messages";

export function MainChatArea() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();

  const MARGIN_TOP = isSidebarOpen && !isMobile ? 18 : 0;
  const HEIGHT = isSidebarOpen ? `calc(100vh - ${MARGIN_TOP}px)` : "100vh";

  return (
    <motion.div
      layout
      className="relative bg-[#FAF4FA] h-[100vh] border-[#F6C4D0] flex flex-col justify-end border-1 border-b-0 rounded-tl-xl px-2"
      animate={{
        marginLeft: !isMobile && isSidebarOpen ? SIDEBAR_WIDTH : 0,
        marginTop: MARGIN_TOP,
        height: HEIGHT,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Mobile overlay for sidebar */}
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 z-30 bg-white/40 backdrop-blur-md"
          onClick={toggleSidebar}
        />
      )}
      <div className="relative w-full h-full">
        <motion.div
          className="absolute z-20"
          animate={{
            right: isSidebarOpen ? -120 : -350,
            top: -25,
          }}
          transition={{ type: "spring", stiffness: 330, damping: 30 }}
          style={{ pointerEvents: "none", right: -350, top: -25 }}
        >
          <svg
            style={{
              pointerEvents: "none",
            }}
            width="259"
            height="108"
            viewBox="0 0 279 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.509 43.3573C29.627 26.699 14.26 28.5343 1.922 28.5343V13.1818H260.645V123.137H250.354L250.355 122.401C250.404 96.4342 228.964 75.5537 203.001 76.0145C146.994 77.0085 74.5603 77.4872 66.5081 74.9445C53.0968 70.7093 51.8615 64.1801 39.509 43.3573Z"
              fill="#F3E6F5"
              stroke="#EFBDEB"
            />
            <path
              d="M252.54 28.0582H0.950684V0.466721H252.54V28.0582Z"
              fill="url(#paint0_linear_31_15)"
            />
            <path
              d="M250.824 127.138L250.824 9.18089L278.415 9.18089L278.415 127.138L250.824 127.138Z"
              fill="url(#paint1_linear_31_15)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_31_15"
                x1="126.745"
                y1="-0.573536"
                x2="126.745"
                y2="9.43512"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F3E6F5" stopOpacity="0" />
                <stop offset="1" stopColor="#F3E6F5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_31_15"
                x1="279.456"
                y1="68.1594"
                x2="269.447"
                y2="68.1594"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F3E6F5" stopOpacity="0" />
                <stop offset="1" stopColor="#F3E6F5" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <div className="relative h-full w-full px-4 mx-auto max-w-screen-md">
          <Messages />
          <ChatMessageForm />
        </div>
      </div>
    </motion.div>
  );
}
