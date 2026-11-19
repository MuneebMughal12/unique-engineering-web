import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { createVideoUploadSignature } from "@/lib/cloudinary";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }
  try {
    return NextResponse.json(createVideoUploadSignature());
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not prepare video upload." },
      { status: 503 },
    );
  }
}
