"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { CATEGORIES, type Category, type Project } from "@/lib/models";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Category | "All">("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {(["All", ...CATEGORIES] as const).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              filter === c
                ? "bg-[#c9a14a] text-white"
                : "border border-[#d3d8df] bg-white text-[#444b54] hover:border-[#c9a14a] hover:text-[#c9a14a]"
            }`}
          >
            {c}
            <span className="ml-2 text-xs opacity-70">
              {c === "All" ? projects.length : projects.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
            >
              <Link href={`/projects/${p.slug}`} className="card-shadow card-shadow-hover group block overflow-hidden rounded-xl bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.cover} alt={p.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  {p.status === "ongoing" && (
                    <span className="absolute right-3 top-3 rounded-full bg-[#c9a14a] px-2.5 py-1 text-[11px] font-bold text-white">
                      ● Ongoing
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-[#c9a14a]">{p.category}</p>
                  <h3 className="mt-1 text-lg font-bold text-[#14181f]">{p.title}</h3>
                  <p className="mt-1 text-sm text-[#8a929c]">{p.client} · {p.year}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
