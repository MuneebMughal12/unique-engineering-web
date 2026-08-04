"use client";

import { motion } from "motion/react";
import { valueCards } from "@/data/site-content";

const icons: Record<string, React.ReactNode> = {
  layers: (
    <path d="M12 3 2 9l10 6 10-6-10-6Zm-8 9 8 5 8-5M4 15l8 5 8-5" />
  ),
  shield: <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3Zm-2 9 1.5 1.5L15 9" />,
  eye: <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  star: <path d="M12 3l2.6 5.6L20 9.3l-4 4 1 5.7-5-2.8-5 2.8 1-5.7-4-4 5.4-.7L12 3Z" />,
};

export default function ValueCards() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">About Us</p>
          <h2 className="heading mt-3 text-3xl sm:text-4xl">Experienced &amp; Quality Construction Providers</h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="mt-5 text-base leading-relaxed text-[#444b54]">
            We deliver integrated design and construction solutions built for modern lifestyles,
            lasting quality and real value — for families and investors across the twin cities.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="card-shadow card-shadow-hover rounded-xl border border-[#eef0f3] bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#c9a14a]/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="#c9a14a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  {icons[c.icon]}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#14181f]">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6a727e]">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
