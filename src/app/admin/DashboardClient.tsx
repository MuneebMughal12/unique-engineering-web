"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Row = {
  slug: string;
  title: string;
  category: string;
  status: string;
  cover: string;
  phaseCount: number;
  progress: number;
};

export default function DashboardClient({
  rows,
  dbReady,
  cloudReady,
  defaultCreds,
}: {
  rows: Row[];
  dbReady: boolean;
  cloudReady: boolean;
  defaultCreds: boolean;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState("");

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  async function remove(slug: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setBusy(slug);
    const res = await fetch(`/api/admin/projects/${slug}`, { method: "DELETE" });
    setBusy("");
    if (res.ok) router.refresh();
    else {
      const d = await res.json().catch(() => ({}));
      alert(d.error || "Could not delete.");
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* header */}
      <header className="sticky top-0 z-10 border-b border-[#1f1f1f] bg-[#0a0a0a]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-[72px] w-[72px] overflow-hidden rounded-sm bg-[#242321]">
              <Image src="/img/bricks-n-builders-logo-v2.png" alt="Bricks N Builders" fill sizes="72px" priority className="object-contain" />
            </div>
            <p className="text-[10px] tracking-[0.2em] text-[#8a8a8a]">ADMIN PANEL</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" target="_blank" className="text-sm text-[#8a8a8a] transition-colors hover:text-white">
              View site ↗
            </Link>
            <button onClick={logout} className="rounded-full border border-[#333] px-4 py-2 text-sm text-[#d4d4d4] transition-colors hover:border-white hover:text-white">
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-8">
        {/* setup banners */}
        {(!dbReady || !cloudReady || defaultCreds) && (
          <div className="mb-6 space-y-2 rounded-sm border border-[#3a2f18] bg-[#161206] p-4 text-sm">
            <p className="font-semibold text-[#e8ce93]">Setup pending</p>
            <ul className="space-y-1 text-[#c9b98a]">
              {!dbReady && <li>• Database not connected — add <code>MONGODB_URI</code> to save projects.</li>}
              {!cloudReady && <li>• Photo upload not connected — add <code>CLOUDINARY_*</code> keys.</li>}
              {defaultCreds && <li>• Using default login — set <code>ADMIN_PASSWORD</code> and <code>AUTH_SECRET</code>.</li>}
            </ul>
            <p className="text-xs text-[#8a7c56]">Below is the current site content (read-only until the database is connected).</p>
          </div>
        )}

        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Projects <span className="text-[#6a6a6a]">({rows.length})</span></h1>
          <Link
            href="/admin/projects/new"
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-opacity ${
              dbReady ? "bg-[#d2a24c] text-[#0a0a0a] hover:opacity-85" : "cursor-not-allowed bg-[#2a2a2a] text-[#6a6a6a]"
            }`}
            aria-disabled={!dbReady}
            onClick={(e) => { if (!dbReady) e.preventDefault(); }}
          >
            + New project
          </Link>
        </div>

        <div className="space-y-2">
          {rows.map((r) => (
            <div key={r.slug} className="flex items-center gap-4 rounded-sm border border-[#1f1f1f] bg-[#0c0c0c] p-3">
              <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-sm bg-[#111]">
                {r.cover && <Image src={r.cover} alt="" fill sizes="80px" className="object-cover" unoptimized />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{r.title}</p>
                <p className="text-xs text-[#8a8a8a]">
                  {r.category}
                  {r.status === "ongoing" && (
                    <span className="ml-2 rounded-full bg-[#161206] px-2 py-0.5 text-[#e8ce93]">
                      Ongoing · {r.progress}%
                    </span>
                  )}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Link
                  href={`/admin/projects/${r.slug}/edit`}
                  className={`rounded border border-[#242424] px-3 py-1.5 text-xs transition-colors ${
                    dbReady ? "text-[#d4d4d4] hover:border-[#d2a24c] hover:text-white" : "cursor-not-allowed text-[#5a5a5a]"
                  }`}
                  aria-disabled={!dbReady}
                  onClick={(e) => { if (!dbReady) e.preventDefault(); }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => remove(r.slug, r.title)}
                  disabled={!dbReady || busy === r.slug}
                  className="rounded border border-[#242424] px-3 py-1.5 text-xs text-[#ff6b6b] transition-colors hover:border-[#ff6b6b] disabled:cursor-not-allowed disabled:text-[#5a3030]"
                >
                  {busy === r.slug ? "…" : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
