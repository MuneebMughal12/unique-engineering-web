"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  ["/admin", "Projects"],
  ["/admin/team", "Team"],
  ["/admin/services", "Services"],
  ["/admin/settings", "CEO Message"],
] as const;

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/admin/login") return <div className="min-h-screen bg-[#0a0a0a] text-white">{children}</div>;

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="sticky top-0 z-30 border-b border-[#202020] bg-[#0a0a0a]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14"><Image src="/img/logo.png" alt="Bricks N Builders" fill sizes="56px" className="object-contain" /></div>
            <span className="text-[10px] tracking-[0.2em] text-[#8a8a8a]">ADMIN PANEL</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" target="_blank" className="text-xs text-[#929292] hover:text-white">View site ↗</Link>
            <button onClick={logout} className="rounded-full border border-[#333] px-4 py-2 text-xs text-[#d4d4d4] hover:border-white">Log out</button>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1400px] md:grid-cols-[220px_1fr]">
        <aside className="border-b border-[#202020] px-4 py-4 md:min-h-[calc(100vh-81px)] md:border-b-0 md:border-r md:px-5 md:py-8">
          <nav className="flex gap-2 overflow-x-auto md:flex-col">
            {links.map(([href, label]) => {
              const active = href === "/admin" ? pathname === href || pathname.startsWith("/admin/projects") : pathname.startsWith(href);
              return <Link key={href} href={href} className={`whitespace-nowrap rounded-md px-4 py-3 text-sm transition-colors ${active ? "bg-[#d2a24c] text-black" : "text-[#a5a5a5] hover:bg-[#151515] hover:text-white"}`}>{label}</Link>;
            })}
          </nav>
        </aside>
        <main className="min-w-0 px-5 py-8 sm:px-8 lg:px-12">{children}</main>
      </div>
    </div>
  );
}
