"use client";

import { useState } from "react";
import { motion } from "motion/react";

const points = [
  "Integrated design & construction services",
  "Transparent budgeting & accurate timelines",
  "Experienced engineering & architectural team",
  "On-time, quality-controlled delivery",
];

export default function CTASection() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    await new Promise((r) => setTimeout(r, 700));
    setBusy(false);
    setSent(true);
  }

  const field =
    "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#8a929c] focus:border-[#c9a14a]";

  return (
    <section className="relative overflow-hidden bg-[#14181f] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#c9a14a]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1300px] items-start gap-12 px-5 sm:px-8 lg:grid-cols-2">
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
        </div>

        {/* form */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          {sent ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a14a] text-xl">✓</div>
              <p className="mt-4 text-lg font-bold">Thank you — message received.</p>
              <p className="mt-1 text-sm text-[#a6adb7]">Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required className={field} placeholder="Full name" />
                <input className={field} placeholder="Phone" />
              </div>
              <input type="email" required className={field} placeholder="Email address" />
              <input className={field} placeholder="Service you want" />
              <textarea rows={3} className={`${field} resize-none`} placeholder="Comments / questions" />
              <button type="submit" disabled={busy} className="w-full rounded-full bg-[#c9a14a] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50">
                {busy ? "Sending…" : "Send Message"}
              </button>
              <p className="text-xs text-[#6a727e]">Demo build — not yet delivered by email.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
