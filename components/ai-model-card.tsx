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
        className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:bg-white/90 hover:border-purple-300 transition-all duration-200 shadow-sm hover:shadow-md group text-left"
      >
        <div className="flex flex-col items-center text-center space-y-3">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-xl text-white ${
              model.status === "pro"
                ? "bg-gradient-to-br from-orange-500 to-red-500"
                : model.status === "limited"
                  ? "bg-gradient-to-br from-gray-400 to-gray-500"
                  : "bg-gradient-to-br from-green-500 to-emerald-500"
            }`}
          >
            {/* {React.cloneElement(model.icon as React.ReactElement, { className: "w-6 h-6" })} */}
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1">
              <span className="font-medium text-gray-900 text-sm group-hover:text-purple-700">
                {model.name}
              </span>
              {model.status === "pro" && (
                <Star className="w-3 h-3 text-orange-500 fill-current" />
              )}
              {selectedModel.id === model.id && (
                <Check className="w-3 h-3 text-green-500" />
              )}
            </div>
            <p className="text-xs text-gray-500">{model.type}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-1">
            {model.capabilities.slice(0, 3).map((capability) => (
              <span
                key={capability}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${capabilityColors[capability as keyof typeof capabilityColors] || "bg-gray-100 text-gray-700 border-gray-200"}`}
              >
                {capabilityIcons[capability as keyof typeof capabilityIcons]}
              </span>
            ))}
          </div>

          <div
            className={`w-2 h-2 rounded-full ${
              model.status === "available"
                ? "bg-green-400"
                : model.status === "pro"
                  ? "bg-orange-400"
                  : "bg-gray-400"
            }`}
          />
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => handleModelSelect(model)}
      className="w-full p-4 hover:bg-purple-50 transition-colors duration-200 text-left group border-b border-gray-50 last:border-b-0"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-lg text-white ${
              model.status === "pro"
                ? "bg-gradient-to-br from-orange-500 to-red-500"
                : model.status === "limited"
                  ? "bg-gradient-to-br from-gray-400 to-gray-500"
                  : "bg-gradient-to-br from-green-500 to-emerald-500"
            }`}
          >
            {model.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-gray-900 group-hover:text-purple-700">
                {model.name}
              </span>
              {model.status === "pro" && (
                <Star className="w-3 h-3 text-orange-500 fill-current" />
              )}
              {selectedModel.id === model.id && (
                <Check className="w-3 h-3 text-green-500" />
              )}
            </div>
            {model.description && (
              <p className="text-xs text-gray-500 mb-2">{model.description}</p>
            )}
            <div className="flex flex-wrap gap-1">
              {model.capabilities.map((capability) => (
                <span
                  key={capability}
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${capabilityColors[capability as keyof typeof capabilityColors] || "bg-gray-100 text-gray-700 border-gray-200"}`}
                >
                  {capabilityIcons[capability as keyof typeof capabilityIcons]}
                  {capability.replace("-", " ")}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div
            className={`w-2 h-2 rounded-full ${
              model.status === "available"
                ? "bg-green-400"
                : model.status === "pro"
                  ? "bg-orange-400"
                  : "bg-gray-400"
            }`}
          />
          {model.status === "pro" && (
            <span className="text-xs text-orange-600 font-medium">PRO</span>
          )}
          {model.status === "limited" && (
            <span className="text-xs text-gray-500 font-medium">LIMITED</span>
          )}
        </div>
      </div>
    </button>
  );
};
