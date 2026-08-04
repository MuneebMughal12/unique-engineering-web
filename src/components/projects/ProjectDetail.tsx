"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/models";
import ProgressTracker from "./ProgressTracker";

export default function ProjectDetail({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project;
  next: Project;
}) {
  const [active, setActive] = useState(0);
  const img = project.images[active] ?? project.cover;

  return (
    <>
      {/* header */}
      <section className="relative overflow-hidden bg-[#14181f] pb-10 pt-28 text-white sm:pt-32">
        <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#c9a14a]/15 blur-3xl" />
        <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8">
          <Link href="/projects" className="text-sm text-[#8a929c] transition-colors hover:text-[#c9a14a]">‹ Back to projects</Link>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#c9a14a] px-3 py-1 text-xs font-bold text-white">{project.category}</span>
            {project.status === "ongoing" && (
              <span className="rounded-full border border-[#c9a14a]/40 px-3 py-1 text-xs font-semibold text-[#c9a14a]">● Ongoing</span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">{project.title}</h1>
          <p className="mt-2 text-[#8a929c]">{project.location} · {project.year}</p>
        </div>
      </section>

      {/* gallery + info */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#f5f7fa] card-shadow">
              <motion.div key={img} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                <Image src={img} alt={project.title} fill priority sizes="(max-width:1024px) 100vw, 60vw" className="object-cover" />
              </motion.div>
            </div>
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {project.images.map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => setActive(i)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${i === active ? "border-[#c9a14a]" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <Image src={src} alt="" fill sizes="96px" className="object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="heading text-2xl">Scope of Work</h2>
              <div className="gold-rule mt-4" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.scope.map((s) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed text-[#444b54]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a14a]/10 text-[11px] text-[#c9a14a]">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* sidebar */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-[#eef0f3] bg-[#f5f7fa] p-6">
              <p className="text-sm leading-relaxed text-[#444b54]">{project.summary}</p>
              <dl className="mt-6 space-y-4 border-t border-[#e6e8ec] pt-6 text-sm">
                <Row label="Client" value={project.client} />
                <Row label="Location" value={project.location} />
                <Row label="Year" value={project.year} />
                {project.period && <Row label="Duration" value={project.period} />}
                <Row label="Category" value={project.category} />
              </dl>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-full border border-[#e6e8ec] bg-white px-3 py-1 text-xs text-[#6a727e]">{t}</span>
                ))}
              </div>
            </div>
            <Link href="/contact" className="block rounded-full bg-[#c9a14a] px-6 py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Discuss a similar project
            </Link>
          </aside>
        </div>
      </section>

      {/* live progress tracker for ongoing projects */}
      {project.status === "ongoing" && project.phases.length > 0 && (
        <ProgressTracker phases={project.phases} />
      )}

      {/* prev / next */}
      <section className="bg-[#f5f7fa] py-12">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-4 px-5 sm:flex-row sm:px-8">
          <Link href={`/projects/${prev.slug}`} className="group flex-1 rounded-xl border border-[#eef0f3] bg-white p-5 transition-colors hover:border-[#c9a14a]">
            <p className="text-xs font-semibold text-[#8a929c] group-hover:text-[#c9a14a]">‹ Previous</p>
            <p className="mt-1 font-bold text-[#14181f]">{prev.title}</p>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group flex-1 rounded-xl border border-[#eef0f3] bg-white p-5 text-right transition-colors hover:border-[#c9a14a]">
            <p className="text-xs font-semibold text-[#8a929c] group-hover:text-[#c9a14a]">Next ›</p>
            <p className="mt-1 font-bold text-[#14181f]">{next.title}</p>
          </Link>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-[#8a929c]">{label}</dt>
      <dd className="text-right font-medium text-[#14181f]">{value}</dd>
    </div>
  );
}
