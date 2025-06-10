import type { UIMessage } from "ai";
import { CodeSnippet } from "./code-snippet";

export default function Message(message: UIMessage) {
  return (
    <div className="p-2 mb-2">
      <div className="text-sm font-semibold capitalize">{message.role}</div>

      {message.parts.map((part, index) => {
        switch (part.type) {
          // render text parts as simple text:
          case "text":
            return <span key={`text-${index}`}>{part.text}</span>;

          case "tool-invocation": {
            const callId = part.toolInvocation.toolCallId;

            switch (part.toolInvocation.toolName) {
              case "generateCodeSnippet": {
                switch (part.toolInvocation.state) {
                  case "call":
                    return <div key={callId}>Generating the code...</div>;
                  case "result":
                    return (
                      <CodeSnippet
                        key={callId + "-result"}
                        language={part.toolInvocation.result.language}
                        code={part.toolInvocation.result.code}
                      />
                    );
                }
                break;
              }
            }
          }
        }
      })}
    </div>
  );
}
