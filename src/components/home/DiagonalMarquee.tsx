"use client";

import Marquee from "../Marquee";

const A = [
  "Civil Construction",
  "Mechanical Fabrication",
  "E&I Works",
  "Cross-Country Flowlines",
  "Plant Commissioning",
];

const B = [
  "Power Substations",
  "Building Construction",
  "Design & Drafting",
  "Project Management",
  "Procurement",
];

export default function DiagonalMarquee() {
  return (
    <section className="relative h-[46vh] min-h-[320px] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 w-[160%] -translate-x-1/2 -translate-y-1/2 -rotate-6">
        <Marquee speed={34} className="bg-[#ff2d16] py-3 sm:py-4">
          {A.map((t) => (
            <span
              key={t}
              className="px-5 text-xl font-semibold text-white sm:px-8 sm:text-3xl"
            >
              {t} <span className="opacity-60">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="absolute left-1/2 top-1/2 w-[160%] -translate-x-1/2 -translate-y-1/2 rotate-6">
        <Marquee speed={40} reverse className="border-y border-[#242424] bg-[#0d0d0d] py-3 sm:py-4">
          {B.map((t) => (
            <span
              key={t}
              className="px-5 text-xl font-semibold text-[#6f6f6f] sm:px-8 sm:text-3xl"
            >
              {t} <span className="text-[#ff2d16]">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
