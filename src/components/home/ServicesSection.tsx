"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ManagedService } from "@/lib/models";

const serviceIcons = [
  <path key="a" d="M4 20V8l8-5 8 5v12M8 20v-6h8v6M9 9h6" />,
  <path key="b" d="M5 19h14M7 16V5h10v11M10 8h4M10 11h4" />,
  <path key="c" d="M3 20h18M5 20V9h14v11M8 13h3v7M14 13h2" />,
  <path key="d" d="m4 17 5-5 3 3 7-8M15 7h4v4" />,
  <path key="e" d="M5 19V8l7-4 7 4v11M8 19v-5h8v5M4 19h16" />,
  <path key="f" d="M4 20h16M6 20V7l6-3 6 3v13M9 10h6M9 14h6" />,
];

export default function ServicesSection({ services }: { services: ManagedService[] }) {
  return (
    <section className="bg-[#f6f8fa] py-20 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow">Our Services</p>
          <h2 className="heading mt-3 text-3xl sm:text-4xl">Integrated Design &amp; Construction Solutions</h2>
          <div className="gold-rule mx-auto mt-5" />
        </motion.div>

        <div className="mt-12 grid overflow-hidden border-l border-t border-[#dce1e6] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="group relative min-h-64 border-b border-r border-[#dce1e6] bg-white p-7 transition-colors hover:bg-[#2c3e63] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#f1f4f7] text-[#2c3e63] transition-colors group-hover:bg-white/10 group-hover:text-[#d8b96e]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    {serviceIcons[index % serviceIcons.length]}
                  </svg>
                </span>
                <span className="text-xs font-bold tracking-[0.16em] text-[#b48a32] group-hover:text-[#d8b96e]">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 text-lg font-bold text-[#14181f] transition-colors group-hover:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6a727e] transition-colors group-hover:text-white/70">{service.blurb}</p>
              <Link
                href={`/services#${service.slug}`}
                aria-label={`Learn more about ${service.title}`}
                className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-sm bg-[#2c3e63] text-white transition-colors group-hover:bg-[#c9a14a] group-hover:text-[#14181f]"
              >
                →
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-9 text-center">
          <Link href="/services" className="inline-block rounded-md bg-[#2c3e63] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c9a14a]">
            More Services
          </Link>
        </div>
      </div>
    </section>
  );
}
