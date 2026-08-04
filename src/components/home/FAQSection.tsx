"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/data/site-content";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">Your Questions Answered Clearly</h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 max-w-sm text-base leading-relaxed text-[#444b54]">
              Everything you need to know before starting your project with Bricks N Builders.
            </p>
          </div>

          <div className="divide-y divide-[#eef0f3] border-y border-[#eef0f3]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-base font-semibold transition-colors ${isOpen ? "text-[#c9a14a]" : "text-[#14181f]"}`}>
                      {f.q}
                    </span>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg transition-all ${isOpen ? "rotate-45 border-[#c9a14a] text-[#c9a14a]" : "border-[#d3d8df] text-[#8a929c]"}`}>
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-10 text-sm leading-relaxed text-[#6a727e]">{f.a}</p>
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
