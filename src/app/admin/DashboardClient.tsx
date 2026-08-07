"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Row = { slug: string; title: string; category: string; status: string; cover: string; progress: number; featured: boolean; showInHero: boolean };

export default function DashboardClient({ rows, dbReady, cloudReady, defaultCreds }: { rows: Row[]; dbReady: boolean; cloudReady: boolean; defaultCreds: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState("");

  async function remove(slug: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setBusy(slug);
    const res = await fetch(`/api/admin/projects/${slug}`, { method: "DELETE" });
    setBusy("");
    if (res.ok) router.refresh();
    else alert((await res.json().catch(() => ({}))).error || "Could not delete.");
  }

  return (
    <div className="mx-auto max-w-5xl">
      {(!dbReady || !cloudReady || defaultCreds) && (
        <div className="mb-6 rounded-sm border border-[#3a2f18] bg-[#161206] p-4 text-sm text-[#c9b98a]">
          <p className="font-semibold text-[#e8ce93]">Setup pending</p>
          {!dbReady && <p>Database connection is missing.</p>}
          {!cloudReady && <p>Photo upload connection is missing.</p>}
          {defaultCreds && <p>Secure admin credentials still need to be configured.</p>}
        </div>
      )}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div><p className="text-xs uppercase tracking-[.18em] text-[#777]">Content</p><h1 className="mt-1 text-2xl font-semibold">Projects <span className="text-[#666]">({rows.length})</span></h1></div>
        <Link href="/admin/projects/new" className="rounded-full bg-[#d2a24c] px-5 py-2.5 text-sm font-medium text-black">+ New project</Link>
      </div>
      <div className="space-y-2">
        {rows.map((row) => (
          <div key={row.slug} className="flex items-center gap-4 rounded-sm border border-[#202020] bg-[#0c0c0c] p-3">
            <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-sm bg-[#111]">{row.cover && <Image src={row.cover} alt="" fill sizes="80px" className="object-cover" unoptimized />}</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{row.title}</p>
              <div className="mt-1 flex flex-wrap gap-1.5 text-[11px] text-[#8a8a8a]">
                <span>{row.category}</span>
                {row.status === "ongoing" && <span className="rounded-full bg-[#161206] px-2 text-[#e8ce93]">Ongoing · {row.progress}%</span>}
                {row.featured && <span className="rounded-full bg-[#182014] px-2 text-[#a9d58c]">Home featured</span>}
                {row.showInHero && <span className="rounded-full bg-[#121c2b] px-2 text-[#8db9ef]">Hero</span>}
              </div>
            </div>
            <Link href={`/admin/projects/${row.slug}/edit`} className="rounded border border-[#292929] px-3 py-1.5 text-xs hover:border-[#d2a24c]">Edit</Link>
            <button onClick={() => remove(row.slug, row.title)} disabled={busy === row.slug} className="rounded border border-[#292929] px-3 py-1.5 text-xs text-[#ff6b6b]">{busy === row.slug ? "…" : "Delete"}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
