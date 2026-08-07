"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { ManagedService } from "@/lib/models";
import ImageUploader from "./ImageUploader";

const blank: ManagedService = { slug: "", title: "", blurb: "", points: [""], image: "", order: 0 };
const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const field = "w-full rounded-sm border border-[#292929] bg-[#101010] px-4 py-3 text-sm outline-none focus:border-[#d2a24c]";

export default function ServicesManager({ initial }: { initial: ManagedService[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<ManagedService | null>(null);
  const [originalSlug, setOriginalSlug] = useState<string>();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  function start(item?: ManagedService) {
    setEditing(item ? { ...item, points: item.points.length ? [...item.points] : [""] } : { ...blank, order: initial.length });
    setOriginalSlug(item?.slug);
    setError("");
  }

  function set<K extends keyof ManagedService>(key: K, value: ManagedService[K]) {
    setEditing((old) => old ? { ...old, [key]: value } : old);
  }

  function setPoint(index: number, value: string) {
    if (!editing) return;
    const points = [...editing.points];
    points[index] = value;
    set("points", points);
  }

  function addPoint() {
    if (!editing) return;
    set("points", [...editing.points, ""]);
  }

  function removePoint(index: number) {
    if (!editing) return;
    const points = editing.points.filter((_, itemIndex) => itemIndex !== index);
    set("points", points.length ? points : [""]);
  }

  async function save(event: React.FormEvent) {
    event.preventDefault();
    if (!editing) return;
    setBusy(true);
    setError("");
    const item = {
      ...editing,
      slug: editing.slug || slugify(editing.title),
      points: editing.points.map((point) => point.trim()).filter(Boolean),
    };
    const response = await fetch("/api/admin/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item, originalSlug }),
    });
    setBusy(false);
    if (response.ok) {
      setEditing(null);
      router.refresh();
    } else {
      setError((await response.json()).error || "Could not save.");
    }
  }

  async function remove(item: ManagedService) {
    if (!confirm(`Delete ${item.title}?`)) return;
    await fetch("/api/admin/services", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: item.slug }),
    });
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-7 flex items-center justify-between">
        <div><p className="text-xs uppercase tracking-[.18em] text-[#777]">Website</p><h1 className="mt-1 text-2xl font-semibold">Services</h1></div>
        <button onClick={() => start()} className="rounded-full bg-[#d2a24c] px-5 py-2.5 text-sm text-black">+ Add service</button>
      </div>

      {editing && (
        <form onSubmit={save} className="mb-8 space-y-4 rounded-md border border-[#292929] bg-[#0d0d0d] p-5">
          <h2 className="font-semibold">{originalSlug ? "Edit service" : "New service"}</h2>
          <input className={field} value={editing.title} onChange={(event) => { set("title", event.target.value); if (!originalSlug) set("slug", slugify(event.target.value)); }} placeholder="Service title" />
          <textarea className={field} rows={4} value={editing.blurb} onChange={(event) => set("blurb", event.target.value)} placeholder="Service description" />

          <div className="rounded-sm border border-[#292929] bg-[#101010] p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium">Service points</p>
                <p className="mt-1 text-xs text-[#777]">Har box mein sirf ek point likhein. Doosra point neeche “Add new point” se add karein.</p>
              </div>
              <button type="button" onClick={addPoint} className="shrink-0 rounded-full bg-[#d2a24c] px-4 py-2 text-xs font-medium text-black">+ Add new point</button>
            </div>
            <div className="mt-4 space-y-2">
              {editing.points.map((point, index) => (
                <div key={index} className="flex gap-2">
                  <input className={field} value={point} onChange={(event) => setPoint(index, event.target.value)} placeholder={`Point ${index + 1}`} />
                  <button type="button" onClick={() => removePoint(index)} className="rounded-sm border border-[#3a2525] px-3 text-sm text-red-400" aria-label={`Remove point ${index + 1}`}>Remove</button>
                </div>
              ))}
            </div>
          </div>

          <ImageUploader label="Service image" value={editing.image ? [editing.image] : []} onChange={(urls) => set("image", urls.at(-1) || "")} />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <div className="flex gap-3">
            <button disabled={busy} className="rounded-full bg-[#d2a24c] px-5 py-2.5 text-sm text-black">{busy ? "Saving…" : "Save service"}</button>
            <button type="button" onClick={() => setEditing(null)} className="rounded-full border border-[#333] px-5 py-2.5 text-sm">Cancel</button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {initial.map((item) => (
          <article key={item.slug} className="flex items-center gap-4 rounded-md border border-[#202020] p-4">
            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded bg-[#151515]"><Image src={item.image} alt="" fill sizes="96px" className="object-cover" unoptimized /></div>
            <div className="min-w-0 flex-1"><h2 className="font-medium">{item.title}</h2><p className="mt-1 line-clamp-2 text-xs text-[#777]">{item.blurb}</p><p className="mt-1 text-[11px] text-[#a58a55]">{item.points.length} points</p></div>
            <button onClick={() => start(item)} className="text-xs text-[#bbb]">Edit</button>
            <button onClick={() => remove(item)} className="text-xs text-red-400">Delete</button>
          </article>
        ))}
      </div>
    </div>
  );
}
