"use client";

import { useEffect, useState } from "react";

import { ArrowUp, Globe, Paperclip, StopCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import AiModelSelector from "@/components/ai-model-selector";
import Link from "next/link";

import { useChatMessage } from "@/hooks/use-chat-messages";

export default function ChatMessageForm() {
  const { input, handleInputChange, handleFormSubmit, status, reload, stop } =
    useChatMessage();

  return (
    <div
      className="absolute bottom-0 left-0 w-full h-auto p-2
     pb-0 shadow-xl bg-pink-200  backdrop-blur-sm rounded-t-2xl z-[100]"
    >
      <form
        onSubmit={handleFormSubmit}
        className="relative bg-pink-50 border-white border-2 flex flex-col items-center justify-center rounded-t-[10px] space-y-2 py-1"
      >
        <div className="fixed left-1/2 bottom-full translate-y-2 -translate-x-1/2 py-3 flex items-center justify-center rounded-t-md text-sm px-6 space-x-2 whitespace-nowrap w-max min-w-[320px] border bg-pink-50/80 backdrop-blur-sm">
          <span>Make sure you agree to our</span>
          <Link href="/terms-of-services" className="underline font-bold">
            Terms
          </Link>
          <span>and our</span>
          <Link href="/privacy-policy" className="underline font-bold">
            Privacy Policy
          </Link>
        </div>

        <Textarea
          rows={1}
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="min-h-[48px] max-h-48 bg-gradient-to-b from-pink-100 to-pink-50"
        />

        <div className="w-full flex items-center justify-between px-2 py-1">
          <div className="flex items-center space-x-1">
            <AiModelSelector />

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
          </div>

          {/* send button */}
          <Button
            variant="ghost"
            size="icon"
            type={
              status === "streaming" || status == "submitted"
                ? "button"
                : "submit"
            }
            className="bg-[#D3699B] border-[#8E3B65] border-1 text-white hover:bg-[#D3699B]"
            onClick={
              status === "streaming" || status == "submitted" ? stop : undefined
            }
          >
            {!(status === "streaming" || status == "submitted") ? (
              <ArrowUp size={16} />
            ) : (
              <StopCircle size={16} />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
