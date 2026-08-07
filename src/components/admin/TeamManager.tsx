"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { TeamMember } from "@/lib/models";
import ImageUploader from "./ImageUploader";

const blank: TeamMember = { slug: "", name: "", role: "", photo: "", bio: "", order: 0 };
const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const field = "w-full rounded-sm border border-[#292929] bg-[#101010] px-4 py-3 text-sm outline-none focus:border-[#d2a24c]";

export default function TeamManager({ initial }: { initial: TeamMember[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [originalSlug, setOriginalSlug] = useState<string>();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  function start(item?: TeamMember) { setEditing(item ? { ...item } : { ...blank, order: initial.length }); setOriginalSlug(item?.slug); setError(""); }
  function set<K extends keyof TeamMember>(key: K, value: TeamMember[K]) { setEditing((old) => old ? { ...old, [key]: value } : old); }
  async function save(e: React.FormEvent) {
    e.preventDefault(); if (!editing) return; setBusy(true); setError("");
    const item = { ...editing, slug: editing.slug || slugify(editing.name) };
    const res = await fetch("/api/admin/team", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ item, originalSlug }) });
    setBusy(false); if (res.ok) { setEditing(null); router.refresh(); } else setError((await res.json()).error || "Could not save.");
  }
  async function remove(item: TeamMember) { if (!confirm(`Delete ${item.name}?`)) return; await fetch("/api/admin/team", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug: item.slug }) }); router.refresh(); }

  return <div className="mx-auto max-w-5xl">
    <div className="mb-7 flex items-center justify-between"><div><p className="text-xs uppercase tracking-[.18em] text-[#777]">People</p><h1 className="mt-1 text-2xl font-semibold">Team members</h1></div><button onClick={() => start()} className="rounded-full bg-[#d2a24c] px-5 py-2.5 text-sm text-black">+ Add member</button></div>
    {editing && <form onSubmit={save} className="mb-8 space-y-4 rounded-md border border-[#292929] bg-[#0d0d0d] p-5">
      <h2 className="font-semibold">{originalSlug ? "Edit member" : "New member"}</h2>
      <div className="grid gap-4 sm:grid-cols-2"><input className={field} value={editing.name} onChange={(e) => { set("name", e.target.value); if (!originalSlug) set("slug", slugify(e.target.value)); }} placeholder="Full name" /><input className={field} value={editing.role} onChange={(e) => set("role", e.target.value)} placeholder="Role" /></div>
      <textarea className={field} rows={3} value={editing.bio || ""} onChange={(e) => set("bio", e.target.value)} placeholder="Short biography" />
      <ImageUploader label="Member photo" value={editing.photo ? [editing.photo] : []} onChange={(urls) => set("photo", urls.at(-1) || "")} />
      {error && <p className="text-sm text-red-400">{error}</p>}
      <div className="flex gap-3"><button disabled={busy} className="rounded-full bg-[#d2a24c] px-5 py-2.5 text-sm text-black">{busy ? "Saving…" : "Save member"}</button><button type="button" onClick={() => setEditing(null)} className="rounded-full border border-[#333] px-5 py-2.5 text-sm">Cancel</button></div>
    </form>}
    <div className="grid gap-3 sm:grid-cols-2">{initial.map((item) => <article key={item.slug} className="flex gap-4 rounded-md border border-[#202020] p-4"><div className="relative h-20 w-16 shrink-0 overflow-hidden rounded bg-[#151515]"><Image src={item.photo} alt="" fill sizes="64px" className="object-cover" unoptimized /></div><div className="min-w-0 flex-1"><h2 className="font-medium">{item.name}</h2><p className="text-xs text-[#d2a24c]">{item.role}</p><p className="mt-2 line-clamp-2 text-xs text-[#777]">{item.bio}</p></div><div className="flex flex-col gap-2"><button onClick={() => start(item)} className="text-xs text-[#bbb]">Edit</button><button onClick={() => remove(item)} className="text-xs text-red-400">Delete</button></div></article>)}</div>
  </div>;
}
