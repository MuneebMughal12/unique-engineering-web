"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { processSteps } from "@/data/site-content";

export default function HowWeWork() {
  return (
    <section className="bg-white py-20 sm:py-24">
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

          <div className="space-y-3">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex gap-5 rounded-xl border border-[#eef0f3] bg-white p-5 transition-colors hover:border-[#c9a14a]/40"
              >
                <span className="text-2xl font-extrabold text-[#c9a14a]/30">{s.n}</span>
                <div>
                  <h3 className="font-bold text-[#14181f]">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6a727e]">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
