"use client";

import { Model, models } from "@/lib/constants";
import {
  ChevronDown,
  ChevronLeft,
  Crown,
  Filter,
  Heart,
  Search,
} from "lucide-react";
import React, { useState } from "react";

import { ModelCard } from "@/components/ai-model-card";
import { Button } from "./ui/button";

export default function AIModelSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

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

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="relative w-[400px]">
        {/* Dropdown Trigger */}
        <Button
          variant="ghost"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Gemini 2.5 Flash
          <ChevronDown size={16} />
        </Button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="absolute bottom-full left-0 right-0 mb-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50"
            style={{
              width: showAll ? "600px" : "auto",
              left: showAll ? "-150px" : "0",
            }}
          >
            {/* Upgrade Section */}
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
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
                  <span className="text-2xl font-bold">$8</span>
                  <span className="text-purple-100">/month</span>
                </div>
                <button
                  type="button"
                  className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors duration-200 backdrop-blur-sm"
                >
                  Upgrade now
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search models..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Models Content */}
            <div className={showAll ? "p-4" : "max-h-80 overflow-y-auto"}>
              {!showAll ? (
                // List View
                <div key="list-view">
                  {favoriteModels.slice(0, 5).map((model) => (
                    <ModelCard
                      key={model.id}
                      model={model}
                      selectedModel={selectedModel}
                      handleModelSelect={handleModelSelect}
                    />
                  ))}
                </div>
              ) : (
                // Grid View
                <div key="grid-view" className="space-y-6">
                  {/* Favorites Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="w-4 h-4 text-purple-500" />
                      <h3 className="font-semibold text-gray-900">Favorites</h3>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                      {favoriteModels.map((model, index) => (
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
                      {otherModels.map((model, index) => (
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

            {/* Show All Toggle */}
            <div>
              <button
                type="button"
                onClick={toggleShowAll}
                className="w-full p-4 hover:bg-gray-50 transition-colors duration-200 border-t border-gray-100 flex items-center justify-center gap-2 text-purple-600 font-medium"
              >
                {showAll ? (
                  <>
                    <ChevronLeft className="w-4 h-4" />
                    Favorites
                  </>
                ) : (
                  <>
                    <Filter className="w-4 h-4" />
                    Show all ({otherModels.length +
                      favoriteModels.length -
                      5}{" "}
                    more)
                  </>
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{selectedModel.name}</span>
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-purple-500" />
                  <span className="text-purple-600 font-medium">Search</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
