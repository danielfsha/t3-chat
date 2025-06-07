"use client";

import { useState } from "react";

import { ArrowUp, ChevronDown, Globe, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ModelSelectorDropdown from "@/components/model-selector-dropdown";

export default function ChatMessageForm() {
  const [textInput, setInput] = useState("");

  const handleFormSubmit = () => {
    alert("form submitted");
  };

  return (
    <div className="absolute bottom-0 left-0 w-full h-auto p-2 pb-0 shadow-lg bg-pink-200 rounded-t-2xl">
      <form className="bg-gray-50 border-white border-2 flex flex-col items-center justify-center rounded-t-[10px] space-y-2 py-2">
        <Textarea
          value={textInput}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />

        <div className="w-full flex items-center justify-between px-2">
          <div className="flex items-center space-x-1">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              type="button"
            >
              <Paperclip size={16} />
            </Button>
            <Button variant="outline" className="rounded-full" type="button">
              <Globe size={16} />
              Search
            </Button>
            <ModelSelectorDropdown />
          </div>

          {/* send button */}
          <Button variant="ghost" size="icon" type="button">
            <ArrowUp size={16} />
          </Button>
        </div>
      </form>
    </div>
  );
}
