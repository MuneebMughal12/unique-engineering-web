"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import RevealText from "../RevealText";
import HexGrid from "../HexGrid";
import Counter from "../Counter";
import { company } from "@/data/company";

export default function AboutBlock() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow">About us</p>

          <RevealText className="mt-6 text-xl font-medium leading-snug sm:text-2xl lg:text-[1.7rem]">
            {company.intro}
          </RevealText>

          <RevealText className="mt-7 text-base leading-relaxed text-[#9a9a9a] sm:text-lg">
            {company.ethos}
          </RevealText>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {company.stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs text-[#8a8a8a]">{s.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 text-sm text-[#ff2d16] transition-opacity hover:opacity-75"
          >
            More about the company
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="lg:pt-6">
          <p className="eyebrow mb-6">Clients we&rsquo;ve delivered for</p>
          <HexGrid />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-20 aspect-[4/3] overflow-hidden rounded-sm sm:mt-24"
          >
            <Image
              src="/img/site-team.jpg"
              alt="Site team briefing before shift"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
