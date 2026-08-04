import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { valueCards } from "@/data/site-content";
import { ceo } from "@/data/team";
import HowWeWork from "@/components/home/HowWeWork";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsLight from "@/components/home/TestimonialsLight";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Bricks N Builders — a Rawalpindi-based design and construction company offering architectural design, map approval, construction and turnkey handover.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-20 pt-32 sm:pb-24 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(45deg,transparent_47%,#e3e7eb_48%,#e3e7eb_49%,transparent_50%),linear-gradient(-45deg,transparent_47%,#e7eaee_48%,#e7eaee_49%,transparent_50%)] [background-size:96px_96px]" />
        <div className="relative mx-auto flex max-w-[1300px] flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
          <h1 className="heading text-5xl sm:text-7xl">About Us</h1>
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-sm font-semibold text-[#14181f]">
            <Link href="/" className="transition-colors hover:text-[#c9a14a]">Home</Link>
            <span className="text-[#c9a14a]">→</span>
            <span>About</span>
          </nav>
        </div>
      </section>

      <section className="bg-[#f4f6fa] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1300px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="heading mt-4 max-w-2xl text-4xl sm:text-5xl lg:text-[3.4rem]">
              Experienced &amp; Quality Construction Providers
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#59616c]">{company.intro}</p>

            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {valueCards.map((card, index) => (
                <article key={card.title} className="grid grid-cols-[42px_1fr] gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a14a]/40 bg-white text-xs font-extrabold text-[#c9a14a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#14181f]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#68717c]">{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid overflow-hidden shadow-[0_18px_55px_rgba(20,24,31,.12)] sm:grid-cols-2">
            <div className="relative min-h-[300px] sm:min-h-[360px]">
              <Image src="/img/site-team.jpg" alt="Bricks N Builders team on site" fill sizes="(max-width:1024px) 100vw, 25vw" className="object-cover grayscale" />
            </div>
            <div className="flex min-h-[300px] flex-col justify-center bg-[#260506] p-8 text-white sm:min-h-[360px] sm:p-10">
              <p className="text-3xl font-bold">Our Vision</p>
              <p className="mt-5 text-sm leading-relaxed text-white/80">{company.vision}</p>
            </div>
            <div className="flex min-h-[300px] flex-col justify-center bg-[#c9aa63] p-8 text-white sm:min-h-[340px] sm:p-10">
              <p className="text-3xl font-bold">Our Mission</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/90">
                {company.mission.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[300px] sm:min-h-[340px]">
              <Image src="/img/planning-gantt.jpg" alt="Construction planning and project coordination" fill sizes="(max-width:1024px) 100vw, 25vw" className="object-cover grayscale" />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="absolute -bottom-5 -left-5 h-40 w-40 bg-[#c9a14a]" />
            <div className="relative aspect-[4/5] overflow-hidden bg-[#e8ebef] shadow-[0_20px_60px_rgba(20,24,31,.16)]">
              <Image
                src={ceo.photo}
                alt={`${ceo.name}, ${ceo.role}`}
                fill
                sizes="(max-width:1024px) 100vw, 38vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101923]/90 via-[#101923]/35 to-transparent px-6 pb-7 pt-20 text-white">
                <p className="text-xl font-bold">{ceo.name}</p>
                <p className="mt-1 text-sm text-[#e1c77e]">{ceo.role}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Leadership Message</p>
            <h2 className="heading mt-4 text-4xl sm:text-5xl">Message from the CEO</h2>
            <div className="gold-rule mt-6" />
            <span className="mt-7 block font-serif text-7xl leading-none text-[#c9a14a]/35" aria-hidden>“</span>
            <blockquote className="-mt-5 max-w-2xl text-lg leading-[1.9] text-[#505965] sm:text-xl">
              {ceo.message}
            </blockquote>
            <div className="mt-8 border-t border-[#e4e7eb] pt-6">
              <p className="text-lg font-bold text-[#14181f]">{ceo.name}</p>
              <p className="mt-1 text-sm font-medium text-[#c9a14a]">{ceo.role}, {company.name}</p>
            </div>
          </div>
        </div>
      </section>

      <HowWeWork />
      <TeamSection />
      <TestimonialsLight />
    </>
  );
}
