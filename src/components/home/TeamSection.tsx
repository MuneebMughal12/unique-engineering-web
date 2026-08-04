"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { team } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Our Team</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">
              Led by Experience, <br className="hidden sm:block" /> Driven by Excellence
            </h2>
            <div className="gold-rule mt-5" />
          </div>
          <Link href="/team" className="rounded-full border border-[#d3d8df] px-6 py-3 text-sm font-semibold text-[#14181f] transition-colors hover:border-[#c9a14a] hover:text-[#c9a14a]">
            View All Team
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="group overflow-hidden rounded-xl border border-[#eef0f3] bg-white card-shadow-hover"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f7fa]">
                <Image src={m.photo} alt={m.name} fill sizes="(max-width:1024px) 100vw, 25vw" className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#14181f]">{m.name}</h3>
                <p className="text-sm font-medium text-[#c9a14a]">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
