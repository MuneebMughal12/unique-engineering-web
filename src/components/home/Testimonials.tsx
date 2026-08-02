"use client";

import { motion } from "motion/react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <p className="eyebrow">In their words</p>
        <h2 className="display mt-5 text-[11vw] leading-[0.9] sm:text-[7vw] lg:text-[4.6vw]">
          <span>Results that</span>
          <span>
            <span className="hot">speak</span> for
          </span>
          <span className="lead">themselves</span>
        </h2>

        <div className="mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.quote}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative"
            >
              <div className="grid items-start gap-5 py-8 sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:py-10">
                {/* avatar */}
                <div className="flex items-center gap-4 sm:w-56 sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#2a2a2a] bg-[#141414] text-lg font-semibold text-[#ff2d16]">
                    {t.org.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs leading-snug text-[#ff2d16]">{t.role}</p>
                    <p className="text-xs leading-snug text-[#6a6a6a]">{t.org}</p>
                  </div>
                </div>

                {/* quote */}
                <p className="max-w-3xl text-sm leading-relaxed text-[#b4b4b4] sm:text-base">
                  {t.quote}
                </p>

                {/* ghost number */}
                <span className="pointer-events-none absolute right-0 top-4 select-none text-6xl font-bold leading-none text-[#1a1a1a] sm:static sm:text-7xl lg:text-8xl">
                  {i + 1}
                </span>
              </div>

              {/* red-to-transparent separator */}
              <div className="h-px bg-gradient-to-r from-[#ff2d16] via-[#ff2d16]/25 to-transparent" />
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#4a4a4a]">
          Demo build — placeholder testimonials, to be replaced with approved client references.
        </p>
      </div>
    </section>
  );
}
