"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/constants";

import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

export default function Greeting() {
  const [activeFilter, setActiveFilter] = useState("create");

  const activeCategory =
    categories.find((cat) => cat.id === activeFilter) || categories[0];

  return (
    <div className="flex flex-col justify-start items-start mt-2 pt-36 space-y-8 px-6">
      <h1 className="text-3xl font-bold text-[#8E3B65]">
        How can I help you, daniel?
      </h1>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap gap-2 justify-center mb-10 w-auto"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: index * 0.1,
            }}
          >
            <Button
              size="lg"
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`relative overflow-hidden transition-all duration-300 px-6 py-3 rounded-full ${
                activeFilter === category.id
                  ? `bg-[#D3699B] border-[#8E3B65] border-1`
                  : "hover:border-slate-300 bg-white/80 backdrop-blur-sm"
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.title}</span>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Suggestions List */}
      <div className="w-full">
        {activeCategory.suggestions.map((suggestion, index) => (
          <motion.div
            key={`${activeFilter}-${index}`}
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
              rotateX: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: index * 0.08,
            }}
            whileTap={{
              scale: 0.98,
              transition: {
                type: "spring",
                stiffness: 600,
                damping: 30,
              },
            }}
            className="group cursor-pointer"
          >
            <div className="flex items-center justify-between w-full relative z-10">
              <div className="flex-1">
                <motion.div
                  className="font-semibold text-slate-800 mb-2 group-hover:text-slate-900 py-2 border-b border-b-pink-950/10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {suggestion.text}
                </motion.div>
              </div>
              <motion.div
                className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10, rotate: -45 }}
                whileHover={{
                  x: 0,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  },
                }}
              >
                {/* You can add an icon or arrow here if needed */}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
