import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { services } from "@/data/services";
import { processSteps } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architectural design, map approval, grey structure, finishing and turnkey, renovation and interior design — by Bricks N Builders, Rawalpindi.",
};

const covers = [
  "/img/survey-setout.jpg",
  "/img/planning-gantt.jpg",
  "/img/concrete-pour.jpg",
  "/img/interior-floor.jpg",
  "/img/townhouse-karen.jpg",
  "/img/hall-interior.jpg",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" crumb="Services" />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What We Do</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">Integrated Design &amp; Construction Solutions</h2>
            <div className="gold-rule mx-auto mt-5" />
            <p className="mt-5 text-base leading-relaxed text-[#444b54]">
              Everything from the first line on paper to the day you get the keys — under one team.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {services.map((s, i) => (
              <div
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-24 items-center gap-8 overflow-hidden rounded-2xl border border-[#eef0f3] bg-white card-shadow lg:grid-cols-2"
              >
                <div className={`relative aspect-[16/11] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={covers[i % covers.length]} alt={s.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className={`p-7 sm:p-9 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-sm font-bold text-[#c9a14a]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="heading mt-2 text-2xl sm:text-3xl">{s.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#444b54]">{s.blurb}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-[#444b54]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a14a]/10 text-[11px] text-[#c9a14a]">✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-7 inline-block rounded-full bg-[#14181f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c9a14a]">
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="bg-[#f5f7fa] py-16 sm:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How We Work</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">From Vision to Completion</h2>
            <div className="gold-rule mx-auto mt-5" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s) => (
              <div key={s.n} className="rounded-xl border border-[#eef0f3] bg-white p-6 card-shadow">
                <span className="text-2xl font-extrabold text-[#c9a14a]/30">{s.n}</span>
                <h3 className="mt-3 font-bold text-[#14181f]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6a727e]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
