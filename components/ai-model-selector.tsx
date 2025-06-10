"use client";

import { Model, models } from "@/lib/constants";
import {
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Crown,
  Filter,
  Heart,
  Search,
} from "lucide-react";
import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { ModelCard } from "@/components/ai-model-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AIModelSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  type CapabilityKey = "fast" | "vision" | "search" | "pdfs" | "reasoning";
  const [capabilities, setCapabilities] = useState<
    Record<CapabilityKey, boolean>
  >({
    fast: false,
    vision: false,
    search: false,
    pdfs: false,
    reasoning: false,
  });

  // Ref for closing dropdown on outside click
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredModels = models.filter(
    (model) =>
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const favoriteModels = filteredModels.filter(
    (model) => model.category === "favorites"
  );
  const otherModels = filteredModels.filter(
    (model) => model.category === "others"
  );

  const handleModelSelect = (model: Model) => {
    setSelectedModel(model);
    setIsOpen(false);
    setSearchQuery("");
    setShowAll(false);
  };

  const toggleShowAll = () => setShowAll((prev) => !prev);

  // Close dropdown when clicking outside
  useLayoutEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      // If click is inside dropdown or filter, do not close
      if (
        (dropdownRef.current &&
          dropdownRef.current.contains(e.target as Node)) ||
        (filterRef.current && filterRef.current.contains(e.target as Node))
      ) {
        return;
      }
      setIsOpen(false);
      setShowAll(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  return (
    <div ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <Button
        variant="ghost"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
      >
        {selectedModel.name}
        <ChevronDown size={16} />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ width: 320, opacity: 0, y: 20 }}
          animate={{
            width: showAll ? 680 : 360,
            opacity: 1,
            y: 0,
          }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "tween", duration: 0.25 }}
          className="absolute bottom-12 left-0 mb-2 bg-white backdrop-blur-md border border-gray-200 rounded-xl overflow-hidden flex flex-col z-[60] w-full max-w-screen-md"
          style={
            showAll
              ? { left: 0, right: 0, height: `calc(100vh - ${100}px)` }
              : { left: 0, right: "auto", height: "auto" }
          }
        >
          {/* Search */}
          <div className="p-2 pb-0 border-gray-100 shrink-0">
            <div className="relative">
              <Search className="absolute w-4 h-4 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-b pl-8"
              />
            </div>
          </div>

          {/* Upgrade Section */}
          <div className="m-4 p-4 rounded-sm bg-[#D3699B] border-[#533a47] text-white shrink-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5" />
                <span className="font-semibold">
                  Unlock all models + higher limits
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">$8</span>
                <span className="text-purple-100">/month</span>
              </div>
              <button className="bg-[#D3699B] border-[#8E3B65] border-1 flex items-center justify-center gap-3 p-3 py-2 rounded-md text-white transition-colors">
                <span className="font-bold text-sm">Upgrade now</span>
              </button>
            </div>
          </div>

          {/* Models Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Favorites Section */}
            {!showAll && (
              <div>
                {favoriteModels.slice(0, 5).map((model) => (
                  <ModelCard
                    key={model.id}
                    model={model}
                    selectedModel={selectedModel}
                    handleModelSelect={handleModelSelect}
                  />
                ))}
              </div>
            )}
            {showAll && (
              <div className="space-y-6">
                {/* Favorites Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-4 h-4 text-purple-500" />
                    <h3 className="font-semibold text-gray-900">Favorites</h3>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {favoriteModels.map((model) => (
                      <div key={model.id}>
                        <ModelCard
                          model={model}
                          isGridView={true}
                          selectedModel={selectedModel}
                          handleModelSelect={handleModelSelect}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Others Section */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Others</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {otherModels.map((model) => (
                      <div key={model.id}>
                        <ModelCard
                          model={model}
                          isGridView={true}
                          selectedModel={selectedModel}
                          handleModelSelect={handleModelSelect}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 px-1 py-1 bg-gray-50 border-t border-gray-100 shrink-0 pr-2">
            <div className="flex items-center justify-between text-sm">
              {/* Show All Toggle */}
              <div className="shrink-0">
                <Button variant="ghost" type="button" onClick={toggleShowAll}>
                  {showAll ? (
                    <>
                      <ChevronLeft className="w-4 h-4" />
                      Favorites
                    </>
                  ) : (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Show all ({otherModels.length +
                        favoriteModels.length -
                        5}{" "}
                      more)
                    </>
                  )}
                </Button>
              </div>

              {/* <span className="text-gray-600">{selectedModel.name}</span> */}

              {/* <div ref={filterRef} className="relative z-[100]">
                <AIModelFilter
                  capabilities={capabilities}
                  onChange={(cap, checked) =>
                    setCapabilities((prev) => ({ ...prev, [cap]: checked }))
                  }
                />
              </div> */}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
