import type { APIRoute } from "astro";
import ldFull from "@/data/ld-full.json";

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify(ldFull),
    {
      headers: {
        "Content-Type": "application/ld+json; charset=utf-8"
      }
    }
  );
};
