"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/constants";

import { motion } from "framer-motion";
import { useChatMessage } from "@/hooks/use-chat-messages";

export default function Greeting() {
  const [activeFilter, setActiveFilter] = useState("create");
  const { handleInputChange } = useChatMessage();

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
        {categories.map((category) => (
          <Button
            key={category.id}
            size="lg"
            onClick={() => setActiveFilter(category.id)}
            variant={activeFilter === category.id ? "default" : "outline"}
            className={`relative overflow-hidden transition-all duration-300 px-6 py-3 rounded-full sm:flex-col sm:w-24 sm:h-auto sm:rounded-lg ${
              activeFilter === category.id
                ? `bg-[#D3699B] border-[#8E3B65] border-1`
                : "hover:border-slate-300 bg-white/80 backdrop-blur-sm"
            }`}
          >
            {category.icon}
            <span className="font-medium">{category.title}</span>
          </Button>
        ))}
      </motion.div>

      {/* Suggestions List */}
      <div className="w-full">
        {activeCategory.suggestions.map((suggestion, index) => (
          <div
            key={index}
            onClick={() =>
              handleInputChange({
                target: { value: suggestion.text },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className="font-semibold text-slate-800 mb-2 group-hover:text-slate-900 py-2 border-b border-b-pink-950/10"
          >
            {suggestion.text}
          </div>
        ))}
      </div>
    </div>
  );
}
