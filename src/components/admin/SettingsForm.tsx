"use client";

import { useState } from "react";
import type { SiteSettings } from "@/lib/models";
import ImageUploader from "./ImageUploader";

const field = "w-full rounded-sm border border-[#292929] bg-[#101010] px-4 py-3 text-sm outline-none focus:border-[#d2a24c]";
export default function SettingsForm({ initial }: { initial: SiteSettings }) {
  const [value, setValue] = useState(initial); const [busy, setBusy] = useState(false); const [message, setMessage] = useState("");
  function set<K extends keyof SiteSettings>(key: K, next: SiteSettings[K]) { setValue((old) => ({ ...old, [key]: next })); }
  async function save(e: React.FormEvent) { e.preventDefault(); setBusy(true); setMessage(""); const res = await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(value) }); setBusy(false); setMessage(res.ok ? "CEO message updated on the website." : (await res.json()).error || "Could not save."); }
  return <div className="mx-auto max-w-3xl"><p className="text-xs uppercase tracking-[.18em] text-[#777]">About & Team</p><h1 className="mt-1 text-2xl font-semibold">CEO message</h1><form onSubmit={save} className="mt-7 space-y-4 rounded-md border border-[#292929] bg-[#0d0d0d] p-5"><div className="grid gap-4 sm:grid-cols-2"><input className={field} value={value.ceoName} onChange={(e) => set("ceoName", e.target.value)} placeholder="CEO name" /><input className={field} value={value.ceoRole} onChange={(e) => set("ceoRole", e.target.value)} placeholder="CEO role" /></div><input className={field} value={value.ceoHeading} onChange={(e) => set("ceoHeading", e.target.value)} placeholder="Message heading" /><textarea className={field} rows={8} value={value.ceoMessage} onChange={(e) => set("ceoMessage", e.target.value)} placeholder="CEO message" /><ImageUploader label="CEO photo" value={value.ceoPhoto ? [value.ceoPhoto] : []} onChange={(urls) => set("ceoPhoto", urls.at(-1) || "")} />{message && <p className="text-sm text-[#d2a24c]">{message}</p>}<button disabled={busy} className="rounded-full bg-[#d2a24c] px-6 py-3 text-sm text-black">{busy ? "Saving…" : "Save CEO message"}</button></form></div>;
}
