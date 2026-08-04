"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { services } from "@/data/services";

const covers = [
  "/img/survey-setout.jpg",
  "/img/planning-gantt.jpg",
  "/img/concrete-pour.jpg",
  "/img/interior-floor.jpg",
  "/img/townhouse-karen.jpg",
  "/img/hall-interior.jpg",
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f5f7fa] py-20 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Our Services</p>
            <h2 className="heading mt-3 max-w-xl text-3xl sm:text-4xl">
              Integrated Design &amp; Construction Solutions
            </h2>
            <div className="gold-rule mt-5" />
          </div>
          <Link href="/services" className="rounded-full border border-[#d3d8df] bg-white px-6 py-3 text-sm font-semibold text-[#14181f] transition-colors hover:border-[#c9a14a] hover:text-[#c9a14a]">
            All Services
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <Link
                href={`/services#${s.slug}`}
                className="card-shadow card-shadow-hover group block overflow-hidden rounded-xl bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={covers[i % covers.length]} alt={s.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#c9a14a]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#14181f]">{s.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6a727e]">{s.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a14a]">
                    Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
