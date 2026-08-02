"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="eyebrow">Capabilities</p>
        <h2 className="display mt-5 text-[11vw] leading-[0.9] sm:text-[7vw] lg:text-[4.6vw]">
          <span className="lead">What we</span>
          <span>deliver on</span>
          <span className="hot">site</span>
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-[#1f1f1f] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
            >
              <Link
                href={`/services#${s.slug}`}
                className="group relative flex h-full flex-col bg-[#0a0a0a] p-6 transition-colors duration-300 hover:bg-[#120c0b] sm:p-7"
              >
                <span className="absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-[#ff2d16]" />
                <span className="text-xs text-[#4a4a4a]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#8a8a8a]">
                  {s.blurb}
                </p>
                <span className="mt-5 text-sm text-[#ff2d16] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
