"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/data/site-content";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#f5f7fa] py-20 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* image + still-have-questions */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image src="/img/villa-karen.jpg" alt="Bricks N Builders project" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
            </div>
            <div className="relative -mt-16 ml-4 mr-8 rounded-xl bg-[#14181f] p-6 text-white card-shadow">
              <p className="text-lg font-bold">Still Have Questions?</p>
              <p className="mt-1 text-sm text-[#a6adb7]">We&rsquo;re happy to help — reach out any time.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-full bg-[#c9a14a] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                  Contact Us
                </Link>
                <Link href="/contact" className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#c9a14a] hover:text-[#c9a14a]">
                  Request A Quote
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">Your Questions Answered Clearly</h2>
            <div className="gold-rule mt-5" />

            <div className="mt-8 divide-y divide-[#e6e8ec] border-y border-[#e6e8ec]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q}>
                    <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 py-4 text-left" aria-expanded={isOpen}>
                      <span className={`text-[15px] font-semibold transition-colors ${isOpen ? "text-[#c9a14a]" : "text-[#14181f]"}`}>{f.q}</span>
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg transition-all ${isOpen ? "rotate-45 bg-[#c9a14a] text-white" : "bg-white text-[#8a929c]"}`}>+</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                          <p className="pb-4 pr-8 text-sm leading-relaxed text-[#6a727e]">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
