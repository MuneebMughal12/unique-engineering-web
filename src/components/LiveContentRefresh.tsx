"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function LiveContentRefresh() {
  const router = useRouter();
  const version = useRef<string | null>(null);

  useEffect(() => {
    let stopped = false;

    async function check() {
      if (document.visibilityState !== "visible") return;
      try {
        const response = await fetch("/api/content-version", { cache: "no-store" });
        if (!response.ok) return;
        const data = await response.json() as { version?: string };
        if (!data.version) return;
        if (version.current && version.current !== data.version) router.refresh();
        version.current = data.version;
      } catch {
        // The next polling cycle retries automatically.
      }
    }

    void check();
    const interval = window.setInterval(() => { if (!stopped) void check(); }, 4000);
    const onVisible = () => { if (document.visibilityState === "visible") void check(); };
    document.addEventListener("visibilitychange", onVisible);
    return () => { stopped = true; window.clearInterval(interval); document.removeEventListener("visibilitychange", onVisible); };
  }, [router]);

  return null;
}
