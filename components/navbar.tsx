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

import { Button } from "./ui/button";

export default function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState();
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <nav className="fixed top-0 left-0 w-full h-14 flex items-center justify-between px-2 z-[200] pointer-none">
      {/* Toggle Button */}
      <div className="flex items-center justify-center bg-white shadow-lg rounded-md hover:bg-gray-50 transition-colors border border-gray-200">
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className="pointer-events-auto"
        >
          <Sidebar size={16} />
        </Button>
        <AnimatePresence initial={false}>
          {!isSidebarOpen && (
            <motion.div
              className="flex items-center pointer-events-auto"
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

      <div className="flex items-center justify-center rounded-md bg-pink-100">
        <Button variant="ghost" size="icon">
          <Settings size={28} />
        </Button>
        <Button variant="ghost" size="icon">
          {isDarkTheme ? <MoonIcon size={24} /> : <SunIcon size={24} />}
        </Button>
      </div>
    </nav>
  );
}
