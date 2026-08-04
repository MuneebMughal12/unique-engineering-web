"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { processSteps } from "@/data/site-content";

export default function HowWeWork() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">How We Work</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">
              From Vision <br /> to <span className="gold-text">Completion</span>
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#444b54]">
              A clear, transparent process that keeps your project on quality, on budget and on
              time — with you informed at every stage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-[#c9a14a] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                Start a Project
              </Link>
              <Link href="/contact" className="rounded-full border border-[#d3d8df] px-6 py-3 text-sm font-semibold text-[#14181f] transition-colors hover:border-[#c9a14a] hover:text-[#c9a14a]">
                Request Consultation
              </Link>
            </div>
          </div>

          {/* accordion */}
          <div className="space-y-3">
            {processSteps.map((s, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={s.n}
                  className={`overflow-hidden rounded-xl border transition-colors ${isOpen ? "border-[#c9a14a] bg-[#14181f] text-white" : "border-[#eef0f3] bg-white"}`}
                >
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={isOpen}>
                    <span className="flex items-center gap-3">
                      <span className={`text-lg font-extrabold ${isOpen ? "text-[#c9a14a]" : "text-[#c9a14a]/40"}`}>{s.n}</span>
                      <span className={`font-bold ${isOpen ? "text-white" : "text-[#14181f]"}`}>{s.title}</span>
                    </span>
                    <span className={`text-lg ${isOpen ? "text-[#c9a14a]" : "text-[#8a929c]"}`}>{isOpen ? "▴" : "▾"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                        <p className="px-5 pb-5 pl-14 text-sm leading-relaxed text-[#c3c8d0]">{s.body}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
