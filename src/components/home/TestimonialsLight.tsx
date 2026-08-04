"use client";

import { motion } from "motion/react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsLight() {
  return (
    <section className="bg-[#f5f7fa] py-20 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="heading mt-3 text-3xl sm:text-4xl">What Clients Say About Us</h2>
          <div className="gold-rule mx-auto mt-5" />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.quote}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="card-shadow rounded-xl border border-[#eef0f3] bg-white p-6"
            >
              <div className="flex gap-1 text-[#c9a14a]">
                {"★★★★★".split("").map((s, j) => (
                  <span key={j}>{s}</span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#444b54]">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3 border-t border-[#eef0f3] pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a14a]/10 text-sm font-bold text-[#c9a14a]">
                  {t.org.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-[#14181f]">{t.name}</p>
                  <p className="text-xs text-[#8a929c]">{t.role} · {t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[#b0b6bd]">
          Demo build — placeholder reviews, to be replaced with real client testimonials.
        </p>
      </div>
    </section>
  );
}
