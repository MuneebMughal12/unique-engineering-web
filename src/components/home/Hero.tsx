"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Typewriter from "../Typewriter";
import { company } from "@/data/company";

const capabilities = [
  "Civil Construction",
  "Mechanical Fabrication",
  "Electrical & Instrumentation",
  "Cross-Country Flowlines",
  "Power Substations",
  "Design & Drafting",
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24">
      {/* backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/img/substation-gantry.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60" />
        <div className="glow absolute inset-0" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1400px] flex-col justify-between px-5 pb-10 sm:px-8">
        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.35fr_1fr]">
          {/* headline */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="eyebrow"
            >
              Since {company.founded} · Sukkur, Pakistan
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="display mt-4 text-[13vw] leading-[0.88] sm:text-[9vw] lg:text-[6.4vw]"
            >
              <span className="lead">We build</span>
              <span className="lead">what powers</span>
              <span className="hot">
                <Typewriter
                  words={["INDUSTRY", "ENERGY", "PAKISTAN", "PROGRESS"]}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-7 max-w-lg text-sm leading-relaxed text-[#b4b4b4] sm:text-base"
            >
              An EPC contractor delivering civil, mechanical and E&amp;I projects for
              Pakistan&rsquo;s oil, gas and power sector — on schedule, to specification,
              and certified to ISO 9001, 14001 and 45001.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/projects"
                className="rounded-full bg-[#ff2d16] px-6 py-3 text-sm font-medium transition-opacity hover:opacity-85"
              >
                View our projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#2e2e2e] px-6 py-3 text-sm text-[#d4d4d4] transition-colors hover:border-white hover:text-white"
              >
                Request a quote
              </Link>
            </motion.div>
          </div>

          {/* capability list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="lg:justify-self-end"
          >
            <p className="eyebrow">What we do</p>
            <ul className="mt-4 space-y-1.5">
              {capabilities.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + i * 0.06 }}
                  className="text-sm text-[#9a9a9a] transition-colors hover:text-white sm:text-base"
                >
                  {c}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 h-px w-full max-w-xs bg-gradient-to-r from-[#ff2d16] to-transparent" />

            <p className="mt-5 text-xs text-[#6a6a6a]">Certified to</p>
            <p className="mt-1 text-sm text-[#d4d4d4]">
              ISO 9001 · ISO 14001 · ISO 45001
            </p>
            <p className="mt-1 text-sm text-[#d4d4d4]">PEC Contractor No. 226</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-3 text-xs text-[#6a6a6a]"
        >
          <span className="h-8 w-px bg-gradient-to-b from-transparent to-[#ff2d16]" />
          Scroll down
        </motion.div>
      </div>
    </section>
  );
}
