"use client";

import Greeting from "./greeting";
import Message from "./message";
import { useChatMessage } from "@/hooks/use-chat-messages";

export default function Messages() {
  const { messages } = useChatMessage();

  console.log(messages);

  return (
    <div className="h-full overflow-hidden">
      {/* incase the user hasnt sent any messages */}
      {messages.length === 0 && <Greeting />}

      {/* after loading up the messages */}
      <div className="h-full space-y-12  py-32 pb-56 overflow-y-scroll">
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </div>
    </div>
  );
}
