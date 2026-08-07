import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthenticated } from "@/lib/auth";
import { adminGetSettings, adminSaveSettings } from "@/lib/content-admin";
import type { SiteSettings } from "@/lib/models";
import { touchContentVersion } from "@/lib/content-version";

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  try { return NextResponse.json({ settings: await adminGetSettings() }); }
  catch (e) { return NextResponse.json({ error: e instanceof Error ? e.message : "Could not load settings." }, { status: 503 }); }
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  const settings = await req.json() as SiteSettings;
  if (!settings.ceoName || !settings.ceoRole || !settings.ceoPhoto || !settings.ceoMessage) return NextResponse.json({ error: "All CEO fields are required." }, { status: 400 });
  await adminSaveSettings({ ...settings, key: "main" });
  await touchContentVersion();
  revalidatePath("/"); revalidatePath("/about"); revalidatePath("/team");
  return NextResponse.json({ ok: true });
}
