import { Redis } from "@upstash/redis";

const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL!;
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN!;

if (!UPSTASH_REDIS_REST_URL) {
  throw new Error("UPSTASH_REDIS_REST_URL isn't set in .env");
}

if (!UPSTASH_REDIS_REST_TOKEN) {
  throw new Error("UPSTASH_REDIS_REST_TOKEN isn't set in .env");
}

export const redis = Redis.fromEnv();
