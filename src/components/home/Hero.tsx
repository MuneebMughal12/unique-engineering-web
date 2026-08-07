"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/models";

const highlights = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Commitment" },
] as const;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const startedAt = performance.now();
    const duration = 1200;
    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <>{display}{suffix}</>;
}

export default function Hero({ projects }: { projects: Project[] }) {
  const selected = projects.filter((project) => project.showInHero);
  const showcaseProjects = (selected.length ? selected : projects).slice(0, 3);
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f7f9fb] pb-20 pt-32 sm:pb-24 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(45deg,transparent_47%,#dfe4e9_48%,#dfe4e9_49%,transparent_50%),linear-gradient(-45deg,transparent_47%,#e5e9ed_48%,#e5e9ed_49%,transparent_50%)] [background-size:88px_88px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[44%] bg-[#f1f4f8]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-left"
            >
              <p className="eyebrow">Integrated design &amp; construction solutions</p>
              <h1 className="heading mt-4 text-[11vw] leading-[1.02] sm:text-6xl lg:text-[4.15rem]">
                Built on Trust. <span className="gold-text">Delivered</span> on Time
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#59616c] sm:text-base">
                Bricks N Builders takes your project from architectural drawings and map approval to
                grey structure, premium finishing and turnkey handover across Rawalpindi &amp; Islamabad.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-start gap-3">
                <Link href="/projects" className="rounded-md bg-[#2c3e63] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c9a14a]">
                  View Our Projects
                </Link>
                <Link href="/contact" aria-label="Get consultation" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d3d8df] bg-white text-[#2c3e63] shadow-sm transition-all hover:border-[#c9a14a] hover:text-[#c9a14a]">
                  <span className="translate-x-px text-sm" aria-hidden>▶</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.65 }}
              className="mt-10 grid grid-cols-3 divide-x divide-[#dfe3e8] border-y border-[#dfe3e8] bg-white/70"
            >
              {highlights.map((item) => (
                <div key={item.label} className="flex min-w-0 flex-col justify-center px-2 py-6 text-left sm:px-4">
                  <p className="text-2xl font-extrabold text-[#170506] sm:text-4xl">
                    <Counter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-2 text-[8px] font-bold uppercase leading-tight tracking-[0.09em] text-[#454b54] sm:text-[10px]">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-[390px] min-w-0 overflow-hidden bg-[#17283b] shadow-[0_18px_55px_rgba(20,24,31,.14)] sm:h-[520px]"
          >
            {showcaseProjects.map((project, index) => {
              const isSelected = activeProject === index;
              const showDetails = isSelected;
              const flexValue = isSelected ? 5 : 1;

              return (
                <motion.article
                  key={project.slug}
                  animate={{ flex: flexValue }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative min-w-0 overflow-hidden border-r border-white/20 last:border-r-0"
                >
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width:1024px) 70vw, 700px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <div className={`absolute inset-0 transition-colors duration-500 ${showDetails ? "bg-gradient-to-t from-[#0e1724]/90 via-[#0e1724]/10 to-transparent" : "bg-[#0e1724]/15 group-hover:bg-[#0e1724]/5"}`} />
                  <button
                    type="button"
                    className="absolute inset-0 z-10 cursor-pointer"
                    onClick={() => setActiveProject(index)}
                    aria-label={`Show ${project.title}`}
                    aria-pressed={isSelected}
                  />
                  <motion.div
                    animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 18 }}
                    transition={{ duration: 0.35, delay: showDetails ? 0.18 : 0 }}
                    className={`absolute inset-x-0 bottom-0 z-20 p-5 text-white sm:p-8 ${showDetails ? "pointer-events-auto" : "pointer-events-none"}`}
                  >
                    <h2 className="whitespace-nowrap text-xl font-bold sm:text-2xl">{project.title}</h2>
                    <Link href={`/projects/${project.slug}`} className="mt-4 inline-block rounded-sm bg-[#31589a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c9a14a]">
                      View Project
                    </Link>
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
