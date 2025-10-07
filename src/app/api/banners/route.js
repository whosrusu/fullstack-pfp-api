import { animals, mens, animes } from "@/app/database/banners";

import { NextResponse } from "next/server";

// database
const RateLimitMap = new Map();

const MAX_REQUESTS = 60; // 60 send req
const RATELIMIT_TIME = 60 * 1000; // 1 min

export async function GET(req) {
  // system ratelimit
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();

  const entry = RateLimitMap.get(ip);

  if (!entry) {
    RateLimitMap.set(ip, { count: 1, timestamp: now });
    setTimeout(() => {
      RateLimitMap.delete(ip);
    }, RATELIMIT_TIME);
  } else {
    entry.count += 1;
    if (entry.count >= MAX_REQUESTS) {
      return NextResponse.json(
        {
          err: "Too many requests. Please try again in a minute.",
        },
        {
          status: 429,
        }
      );
    }
  }

  // send image
  const randomCategory = [mens, animals, animes];
  const selectCategory =
    randomCategory[Math.floor(Math.random() * randomCategory.length)];
  const selectPfpUrl =
    selectCategory[Math.floor(Math.random() * selectCategory.length)];

  return NextResponse.json(
    {
      banner: selectPfpUrl,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}
