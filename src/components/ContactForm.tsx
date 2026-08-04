"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { company } from "@/data/company";

const subjects = [
  "Architectural Design",
  "Map Approval",
  "Grey Structure",
  "Finishing & Turnkey",
  "Renovation & Extension",
  "Interior Design",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    // Demo build: no mail backend wired yet.
    await new Promise((r) => setTimeout(r, 700));
    setBusy(false);
    setSent(true);
  }

  const field =
    "w-full rounded-lg border border-[#e6e8ec] bg-[#f5f7fa] px-4 py-3 text-sm text-[#14181f] outline-none transition-colors placeholder:text-[#a0a7b0] focus:border-[#c9a14a] focus:bg-white";
  const label = "text-xs font-semibold text-[#14181f]";

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div key="done" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-[#eef0f3] bg-white p-8 text-center card-shadow">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a14a] text-xl text-white">✓</div>
          <p className="mt-5 text-lg font-bold text-[#14181f]">Thank you — message received.</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-[#6a727e]">
            Our team will get back to you within one working day. For anything urgent, WhatsApp us on {company.offices[0].phones[0]}.
          </p>
          <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-[#c9a14a] hover:opacity-75">Send another message</button>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 rounded-2xl border border-[#eef0f3] bg-white p-6 card-shadow sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={label}>Your name</label>
              <input id="name" name="name" required className={`${field} mt-1.5`} placeholder="Full name" />
            </div>
            <div>
              <label htmlFor="phone" className={label}>Phone</label>
              <input id="phone" name="phone" className={`${field} mt-1.5`} placeholder="03xx-xxxxxxx" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className={label}>Email</label>
            <input id="email" name="email" type="email" required className={`${field} mt-1.5`} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="subject" className={label}>Service required</label>
            <select id="subject" name="subject" className={`${field} mt-1.5`} defaultValue={subjects[0]}>
              {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="message" className={label}>Project details</label>
            <textarea id="message" name="message" rows={5} required className={`${field} mt-1.5 resize-none`} placeholder="Plot size, location, timeline…" />
          </div>
          <button type="submit" disabled={busy} className="w-full rounded-full bg-[#c9a14a] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto">
            {busy ? "Sending…" : "Send Enquiry"}
          </button>
          <p className="text-xs text-[#a0a7b0]">Demo build — form submissions are not yet delivered by email.</p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
