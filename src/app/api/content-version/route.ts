import { NextResponse } from "next/server";
import { getContentVersion } from "@/lib/content-version";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    { version: await getContentVersion() },
    { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } },
  );
}
