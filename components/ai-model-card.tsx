import { capabilityColors, capabilityIcons, Model } from "@/lib/constants";
import { Check, Star } from "lucide-react";

export const ModelCard = ({
  model,
  selectedModel,
  isGridView = false,
  handleModelSelect,
}: {
  model: Model;
  selectedModel: Model;
  isGridView?: boolean;
  handleModelSelect: (model: Model) => void;
}) => {
  if (isGridView) {
    return (
      <button
        type="button"
        onClick={() => handleModelSelect(model)}
        className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white/90 hover:border-purple-300 transition-all duration-200 group text-left w-full h-[160px] flex flex-col items-center justify-between pt-2"
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-xl text-white bg-[#D3699B] border-[#8E3B65] border-1 mb-2">
          {model.icon}
        </span>
        <span className="flex items-center gap-1 font-medium text-gray-900 text-sm group-hover:text-purple-700 text-center">
          {model.name}
        </span>
        <div className="flex flex-wrap justify-center gap-1 w-full mt-2 py-2">
          {model.capabilities.slice(0, 3).map((capability) => (
            <span
              key={capability}
              className={`aspect-square inline-flex items-center gap-1 px-2 py-1 rounded-sm text-xs font-medium border ${capabilityColors[capability as keyof typeof capabilityColors] || "bg-gray-100 text-gray-700 border-gray-200"}`}
            >
              {capabilityIcons[capability as keyof typeof capabilityIcons]}
            </span>
          ))}
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => handleModelSelect(model)}
      className="w-full p-3 hover:bg-purple-50 transition-colors duration-200 text-left group border-b border-gray-50 last:border-b-0 flex items-center justify-between  gap-3"
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-lg text-white bg-[#D3699B] border-[#8E3B65] border-1">
        {model.icon}
      </span>
      <span className="flex-1 flex justify-between">
        <span className="flex items-center gap-2 font-medium text-gray-900 group-hover:text-purple-700 text-sm">
          {model.name}
        </span>
        <span className="flex flex-wrap gap-1 mt-1">
          {model.capabilities.map((capability) => (
            <span
              key={capability}
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${capabilityColors[capability as keyof typeof capabilityColors] || "bg-gray-100 text-gray-700 border-gray-200"}`}
            >
              {capabilityIcons[capability as keyof typeof capabilityIcons]}
            </span>
          ))}
        </span>
      </span>
    </button>
  );
};
