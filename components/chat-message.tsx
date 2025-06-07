import React from "react";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    sender: "user" | "ai";
    timestamp: string;
  };
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex gap-4 p-4 ${isUser ? "bg-white" : "bg-gray-50"}`}>
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
        }`}
      >
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm text-gray-900">
            {isUser ? "You" : "AI Assistant"}
          </span>
          <span className="text-xs text-gray-500">{message.timestamp}</span>
        </div>
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
}
