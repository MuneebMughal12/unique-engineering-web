"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { processSteps } from "@/data/site-content";

export default function HowWeWork() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f5f7fa] py-20 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">How We Work</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">
              From Vision <br /> to <span className="gold-text">Completion</span>
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#59616c]">
              A clear and transparent process keeps every project aligned with quality, budget,
              and schedule while keeping you informed at every stage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-[#c9a14a] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                Start a Project
              </Link>
              <Link href="/contact" className="rounded-full border border-[#cfd4db] bg-white px-6 py-3 text-sm font-semibold text-[#14181f] transition-colors hover:border-[#c9a14a] hover:text-[#c9a14a]">
                Request Consultation
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#e0e4e9] bg-white">
            {processSteps.map((step, index) => {
              const isOpen = open === index;
              return (
                <div key={step.n} className={index ? "border-t border-[#e8ebef]" : ""}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors sm:px-7 ${isOpen ? "bg-[#17283b] text-white" : "bg-white text-[#14181f] hover:bg-[#fafbfc]"}`}
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-4">
                      <span className={`text-sm font-bold ${isOpen ? "text-[#c9a14a]" : "text-[#b7bdc5]"}`}>{step.n}</span>
                      <span className="text-base font-bold sm:text-lg">{step.title}</span>
                    </span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xl leading-none transition-transform ${isOpen ? "rotate-45 border-[#c9a14a] text-[#c9a14a]" : "border-[#d6dae0] text-[#7b838e]"}`}>+</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden bg-[#17283b]"
                      >
                        <p className="px-12 pb-6 text-sm leading-relaxed text-[#c6ccd3] sm:px-[4.6rem]">{step.body}</p>
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
