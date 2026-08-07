"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { CATEGORIES, type Category, type Project } from "@/lib/models";
import ProjectCard from "@/components/projects/ProjectCard";

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Category | "All">("All");
  const pinned = projects.some((p) => p.featured) ? projects.filter((p) => p.featured) : projects;
  const list = (filter === "All" ? pinned : pinned.filter((p) => p.category === filter)).slice(0, 6);

  return (
    <section className="bg-[#f5f7fa] py-20 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Featured Projects</p>
          <h2 className="heading mt-3 text-3xl sm:text-4xl">
            Delivering Projects That Create Long-Term Value
          </h2>
          <div className="gold-rule mx-auto mt-5" />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
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
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <ProjectCard p={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/projects" className="inline-block rounded-full bg-[#14181f] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c9a14a]">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
