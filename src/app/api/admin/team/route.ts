import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthenticated } from "@/lib/auth";
import { adminDeleteTeam, adminListTeam, adminSaveTeam } from "@/lib/content-admin";
import type { TeamMember } from "@/lib/models";

async function allowed() { return isAuthenticated(); }
function refresh() { revalidatePath("/"); revalidatePath("/team"); revalidatePath("/about"); }

export async function GET() {
  if (!(await allowed())) return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  try { return NextResponse.json({ items: await adminListTeam() }); }
  catch (e) { return NextResponse.json({ error: e instanceof Error ? e.message : "Could not load team." }, { status: 503 }); }
}

export async function POST(req: NextRequest) {
  if (!(await allowed())) return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  const { item, originalSlug } = await req.json() as { item: TeamMember; originalSlug?: string };
  if (!item?.slug || !item.name || !item.role || !item.photo) return NextResponse.json({ error: "Name, role and photo are required." }, { status: 400 });
  await adminSaveTeam(item, originalSlug); refresh();
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  if (!(await allowed())) return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  const { slug } = await req.json() as { slug: string };
  await adminDeleteTeam(slug); refresh();
  return NextResponse.json({ ok: true });
}
