import type { Chat } from "@/lib/db/schema";

export type VisibilityType = "public" | "private";

export type ArtifactKind = ["text", "code", "image"];

export type DataPart = { type: "append-message"; message: string };

export type ChatHistory = {
  chats: Array<Chat>;
  hasMore: boolean;
};
