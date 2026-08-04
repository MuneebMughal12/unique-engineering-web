"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { company } from "@/data/company";
import { valueCards } from "@/data/site-content";

const icons: Record<string, React.ReactNode> = {
  layers: <path d="M12 3 2 9l10 6 10-6-10-6Zm-8 9 8 5 8-5M4 15l8 5 8-5" />,
  shield: <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3Zm-2 9 1.5 1.5L15 9" />,
  eye: <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  star: <path d="M12 3l2.6 5.6L20 9.3l-4 4 1 5.7-5-2.8-5 2.8 1-5.7-4-4 5.4-.7L12 3Z" />,
};

export default function ValueCards() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1300px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">About Us</p>
          <h2 className="heading mt-3 max-w-xl text-3xl sm:text-4xl">Experienced &amp; Quality Construction Providers</h2>
          <div className="gold-rule mt-5" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#59616c]">{company.intro}</p>

          <div className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {valueCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                className="grid grid-cols-[42px_1fr] gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#d9bd78] bg-[#c9a14a]/5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#b58c34" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    {icons[card.icon]}
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-[#14181f]">{card.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6a727e]">{card.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid min-h-[500px] grid-cols-2 grid-rows-2 overflow-hidden rounded-sm shadow-[0_18px_50px_rgba(20,24,31,.1)]"
        >
          <div className="relative min-h-60">
            <Image src="/img/site-team.jpg" alt="Bricks N Builders team on site" fill sizes="(max-width:1024px) 50vw, 320px" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center bg-[#221312] p-7 text-white sm:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d8b96e]">Our Vision</p>
            <h3 className="mt-3 text-2xl font-bold">Building Trust That Lasts</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{company.vision}</p>
          </div>
          <div className="flex flex-col justify-center bg-[#c9a14a] p-7 text-[#171514] sm:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5f4719]">Our Mission</p>
            <h3 className="mt-3 text-2xl font-bold">Quality at Every Stage</h3>
            <p className="mt-4 text-sm leading-relaxed">{company.mission.join(" ")}</p>
          </div>
          <div className="relative min-h-60">
            <Image src="/img/planning-gantt.jpg" alt="Construction planning and drawings" fill sizes="(max-width:1024px) 50vw, 320px" className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
