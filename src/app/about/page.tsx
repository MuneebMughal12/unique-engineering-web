import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { company } from "@/data/company";
import { valueCards } from "@/data/site-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Bricks N Builders — a Rawalpindi-based design and construction company offering architectural design, map approval, construction and turnkey handover.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" crumb="About" />

      {/* intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl card-shadow">
            <Image src="/img/institutional-building.jpg" alt="Bricks N Builders project" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">Experienced &amp; Quality Construction Providers</h2>
            <div className="gold-rule mt-5" />
            <p className="mt-6 text-base leading-relaxed text-[#444b54]">{company.intro}</p>
            <p className="mt-4 text-base leading-relaxed text-[#6a727e]">{company.ethos}</p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {company.stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-[#c9a14a]">{s.value}{s.suffix}</p>
                  <p className="mt-1 text-xs text-[#8a929c]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="bg-[#f5f7fa] py-16 sm:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">What Sets Us Apart</h2>
            <div className="gold-rule mx-auto mt-5" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((c) => (
              <div key={c.title} className="rounded-xl border border-[#eef0f3] bg-white p-6 card-shadow">
                <h3 className="text-lg font-bold text-[#14181f]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6a727e]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* mission / vision / values */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-[#14181f] p-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c9a14a]">Mission</p>
              <ul className="mt-4 space-y-3">
                {company.mission.map((m) => (
                  <li key={m} className="flex gap-3 text-sm leading-relaxed text-[#c3c8d0]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#c9a14a]" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#eef0f3] bg-white p-7 card-shadow">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c9a14a]">Vision</p>
              <p className="mt-4 text-sm leading-relaxed text-[#444b54]">{company.vision}</p>
            </div>
            <div className="rounded-xl border border-[#eef0f3] bg-white p-7 card-shadow">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c9a14a]">Values</p>
              <p className="mt-4 text-sm leading-relaxed text-[#444b54]">{company.values}</p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#f5f7fa] p-8 text-center sm:p-12">
            <h3 className="heading text-2xl sm:text-3xl">Approved &amp; Registered</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {company.certifications.map((c) => (
                <div key={c.code} className="rounded-xl border border-[#e6e8ec] bg-white px-6 py-4 text-left card-shadow">
                  <p className="font-bold text-[#14181f]">{c.title}</p>
                  <p className="text-xs text-[#8a929c]">{c.body}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-[#c9a14a] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
