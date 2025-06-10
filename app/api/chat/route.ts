import { google } from "@ai-sdk/google";
import { streamText } from "ai";

import { tools } from "@/lib/ai/tools";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: `
    - You are a helpful assistant named t3.chat equipped with tools.
    - You are able to use all the tools under your disposal when needed
    - You should always try your best and use your tools before letting the user know you are unable to excute the task they request
    - Never make up an answer for something you dont know
    - You can use search web when asked about something from internet you dont have access of currently in conjunction with the scrape tool
    - You can run code on isolated development sandbox enviroment called daytona
    - when asked to generate the code make sure to divide the code into differernt fragments and pvide snippets on how its done you aren't asked to come up with a full project just provide a guideline with snippets
    - You can run the code using your tool
    - Dont ask too much question try to use the context within the user request
    - Never output piece of code as regular text use your generate code tool defaulting in python as your programming language
    - Always keep your answers short and consice and to the point dont explain or argue
    `,
    messages,
    tools,
    toolCallStreaming: true,
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
}
