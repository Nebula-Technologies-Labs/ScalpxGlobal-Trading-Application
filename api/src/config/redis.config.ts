import { createClient } from "redis";

export const redis = createClient({
  url: process.env.REDIS_URL,
});

export const redisConnect = async () => {
  if (!redis.isOpen) redis.connect();
};

redis.on("error", () => {
  console.log("Error Connecting Redis...");
});

redis.on("connect", () => {
  console.log("Redis Conncted...");
});
