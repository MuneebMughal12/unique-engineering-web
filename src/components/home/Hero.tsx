"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/data/projects";

export default function Hero() {
  const featured = projects[0];

  return (
    <section className="relative overflow-hidden bg-[#f5f7fa] pt-28 sm:pt-32">
      {/* soft accent shapes */}
      <div className="pointer-events-none absolute -right-40 -top-20 h-[420px] w-[420px] rounded-full bg-[#c9a14a]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[#2c3e63]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#e6e8ec] bg-white px-4 py-1.5 text-xs font-semibold text-[#c9a14a]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9a14a]" />
            {company_tagline()}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="heading mt-5 text-[10vw] leading-[1.05] sm:text-6xl lg:text-[4.1rem]"
          >
            Built on Trust.
            <br />
            <span className="gold-text">Delivered</span> on Time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-[#444b54] sm:text-lg"
          >
            Bricks N Builders delivers integrated design and construction — from architectural
            drawings and map approval to grey structure, finishing and turnkey handover across
            Rawalpindi &amp; Islamabad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/contact" className="rounded-full bg-[#c9a14a] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Get Consultation
            </Link>
            <Link href="/projects" className="rounded-full border border-[#d3d8df] bg-white px-7 py-3.5 text-sm font-semibold text-[#14181f] transition-colors hover:border-[#c9a14a] hover:text-[#c9a14a]">
              View Projects
            </Link>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["Design + Build", "Under one roof"],
              ["Map Approval", "Society & TMA"],
              ["Live Tracking", "Watch progress"],
            ].map(([a, b]) => (
              <div key={a}>
                <p className="text-sm font-bold text-[#14181f]">{a}</p>
                <p className="text-xs text-[#8a929c]">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* featured project card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl bg-white card-shadow">
            <div className="relative aspect-[4/3]">
              <Image src={featured.cover} alt={featured.title} fill priority sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#c9a14a]">
                Featured Project
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <p className="text-xs font-semibold text-[#c9a14a]">{featured.category}</p>
                <p className="mt-0.5 font-bold text-[#14181f]">{featured.title}</p>
                <p className="text-xs text-[#8a929c]">{featured.location}</p>
              </div>
              <Link href={`/projects/${featured.slug}`} className="shrink-0 rounded-full bg-[#14181f] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#c9a14a]">
                View Project
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function company_tagline() {
  return "We Build Smile · Since day one";
}
