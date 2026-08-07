import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthenticated } from "@/lib/auth";
import { adminDeleteService, adminListServices, adminSaveService } from "@/lib/content-admin";
import type { ManagedService } from "@/lib/models";
import { touchContentVersion } from "@/lib/content-version";

function refresh() { revalidatePath("/"); revalidatePath("/services"); }

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  try { return NextResponse.json({ items: await adminListServices() }); }
  catch (e) { return NextResponse.json({ error: e instanceof Error ? e.message : "Could not load services." }, { status: 503 }); }
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  const { item, originalSlug } = await req.json() as { item: ManagedService; originalSlug?: string };
  if (!item?.slug || !item.title || !item.blurb || !item.image) return NextResponse.json({ error: "Title, description and image are required." }, { status: 400 });
  await adminSaveService(item, originalSlug); await touchContentVersion(); refresh();
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  const { slug } = await req.json() as { slug: string };
  await adminDeleteService(slug); await touchContentVersion(); refresh();
  return NextResponse.json({ ok: true });
}
