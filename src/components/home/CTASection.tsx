"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const points = [
  "Integrated design and construction services",
  "Transparent budgeting and accurate timelines",
  "Experienced engineering and architectural team",
  "On-time, quality-controlled delivery",
];

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-28">
      <Image
        src="/img/planning-gantt.jpg"
        alt="Construction planning by Bricks N Builders"
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,25,37,.97)_0%,rgba(15,25,37,.88)_55%,rgba(15,25,37,.58)_100%)]" />

      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8b764]">Call To Action</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
            Let&apos;s Build Your Next Project Together
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#c5cbd2]">
            Share your requirements with our team and get a coordinated construction solution,
            practical guidance, and a clear path from planning to delivery.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point, index) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center gap-3 text-sm text-[#e1e4e8]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a14a] text-[11px] font-bold text-[#14181f]">✓</span>
                {point}
              </motion.li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[#c9a14a] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Get Started
            </Link>
            <Link href="/projects" className="rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#c9a14a] hover:text-[#d8b764]">
              Explore Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
