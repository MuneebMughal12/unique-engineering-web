"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/models";

/** Project card matching the reference: badge, title, description, location,
 *  work type, status and a View Project button. */
export default function ProjectCard({ p }: { p: Project }) {
  const workType = p.tags[0] ?? p.category;
  const statusLabel = p.status === "ongoing" ? "In Progress" : "Complete";

  return (
    <div className="card-shadow card-shadow-hover flex flex-col overflow-hidden rounded-xl bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={p.cover} alt={p.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-md bg-[#14181f]/90 px-2.5 py-1 text-[11px] font-semibold text-white">
          {p.category}
        </span>
        {p.status === "ongoing" && (
          <span className="absolute right-3 top-3 rounded-full bg-[#c9a14a] px-2.5 py-1 text-[11px] font-bold text-white">
            ● Ongoing
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-[#14181f]">{p.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6a727e]">{p.summary}</p>

        <div className="mt-4 space-y-2 border-t border-[#eef0f3] pt-4 text-sm text-[#444b54]">
          <p className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#c9a14a]" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {p.location}
          </p>
          <p className="flex items-center gap-2">
            <Check /> {workType}
          </p>
          <p className="flex items-center gap-2">
            <Check /> {statusLabel}
          </p>
        </div>

        <Link
          href={`/projects/${p.slug}`}
          className="mt-5 inline-block rounded-lg bg-[#14181f] px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#c9a14a]"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#c9a14a]" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
