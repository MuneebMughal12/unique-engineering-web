"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const points = [
  "Integrated design & construction services",
  "Transparent budgeting & accurate timelines",
  "Experienced engineering & architectural team",
  "On-time, quality-controlled delivery",
];

export default function CTASection() {
  return (
    <section className="bg-[#14181f] py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a14a]">Call To Action</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Let&rsquo;s Build Your Next Project Together
          </h2>
          <p className="mt-4 max-w-lg text-[#a6adb7]">
            Tell us about your project and our team will provide a tailored construction solution
            and a clear, comprehensive cost estimate.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 text-sm text-[#d6dae0]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a14a] text-[11px] text-[#14181f]">✓</span>
                {p}
              </motion.li>
            ))}
          </ul>

          <Link href="/contact" className="mt-9 inline-block rounded-full bg-[#c9a14a] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Get Started
          </Link>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src="/img/institutional-building.jpg" alt="Bricks N Builders project" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14181f]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
