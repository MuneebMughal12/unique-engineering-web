"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Phase, computeProgress } from "@/lib/models";

export default function ProgressTracker({ phases }: { phases: Phase[] }) {
  const progress = computeProgress(phases);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Live Construction Status</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">Track the Progress</h2>
            <div className="gold-rule mt-4" />
          </div>
          <div className="text-right">
            <p className="text-4xl font-extrabold text-[#c9a14a] sm:text-5xl">{progress}%</p>
            <p className="text-xs text-[#8a929c]">complete</p>
          </div>
        </div>

        <div className="mt-6 h-2.5 overflow-hidden rounded-full bg-[#eef0f3]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-[#a07d2c] to-[#d9b869]"
          />
        </div>

        <div className="mt-10 space-y-4">
          {phases.map((phase, i) => {
            const done = phase.status === "done";
            const active = phase.status === "active";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className={`rounded-xl border p-5 ${active ? "border-[#c9a14a] bg-[#fdfaf3]" : "border-[#eef0f3] bg-white"}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    done ? "bg-[#c9a14a] text-white" : active ? "border-2 border-[#c9a14a] text-[#c9a14a]" : "border border-[#d3d8df] text-[#a0a7b0]"
                  }`}>
                    {done ? "✓" : i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p className={`font-bold ${done || active ? "text-[#14181f]" : "text-[#8a929c]"}`}>{phase.name}</p>
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        done ? "bg-[#c9a14a]/10 text-[#a07d2c]" : active ? "bg-[#c9a14a] text-white" : "bg-[#f5f7fa] text-[#8a929c]"
                      }`}>
                        {done ? "Completed" : active ? `In progress · ${phase.percent}%` : "Upcoming"}
                      </span>
                    </div>
                    {phase.note && <p className="mt-1 text-sm text-[#6a727e]">{phase.note}</p>}
                    {done && phase.completedAt && <p className="mt-1 text-xs text-[#a0a7b0]">Completed {phase.completedAt}</p>}
                  </div>
                </div>

                {active && (
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#eef0f3]">
                    <div className="h-full rounded-full bg-[#c9a14a]" style={{ width: `${phase.percent}%` }} />
                  </div>
                )}

                {(phase.images.length > 0 || (phase.videos?.length ?? 0) > 0) && (
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {phase.images.map((src, j) => (
                      <div key={j} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image src={src} alt={`${phase.name} photo`} fill sizes="200px" className="object-cover" unoptimized />
                      </div>
                    ))}
                    {(phase.videos ?? []).map((src, j) => (
                      <div key={`video-${j}`} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black">
                        <video
                          src={src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-[9px] font-semibold text-white">VIDEO</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
