"use client";

import { useSidebar } from "@/context/sidebar-context";

import {
  MoonIcon,
  Plus,
  Search,
  Settings,
  Sidebar,
  SunIcon,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState();
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <nav className="fixed top-0 left-0 w-full h-14 flex items-center justify-between px-2 z-[100]">
      {/* Toggle Button */}
      <div className="flex items-center justify-center bg-white shadow-lg rounded-md p-1 hover:bg-gray-50 transition-colors border border-gray-200">
        <button
          onClick={toggleSidebar}
          className="w-7 h-7 flex items-center justify-center"
        >
          <Sidebar size={16} />
        </button>
        <AnimatePresence initial={false}>
          {!isSidebarOpen && (
            <motion.div
              className="flex items-center"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ overflow: "hidden", display: "flex" }}
            >
              <motion.button
                className="w-7 h-7 flex items-center justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Search size={16} />
              </motion.button>
              <motion.button
                className="w-7 h-7 flex items-center justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  delay: 0.08,
                }}
              >
                <Plus size={16} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center space-x-1 bg-white shadow-lg rounded-md p-1 hover:bg-gray-50 transition-colors border border-gray-200">
        <button
          onClick={toggleSidebar}
          className="w-7 h-7 flex items-center justify-center"
        >
          <Settings size={16} />
        </button>
        <button
          onClick={toggleSidebar}
          className="w-7 h-7 flex items-center justify-center"
        >
          {isDarkTheme ? <MoonIcon size={16} /> : <SunIcon size={16} />}
        </button>
      </div>
    </nav>
  );
}
