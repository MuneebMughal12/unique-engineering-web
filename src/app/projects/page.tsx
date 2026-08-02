import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Completed EPC, civil, mechanical and E&I projects for Engro, OMV, United Energy, MOL Pakistan, UCH Power, PARCO, Pakistan Army and KETRACO.",
};

export default function ProjectsPage() {
  return (
    <section className="relative pb-28 pt-32 sm:pt-40">
      <div className="glow pointer-events-none absolute inset-x-0 top-0 h-[60vh]" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="eyebrow">Portfolio</p>
        <h1 className="display mt-5 text-[13vw] leading-[0.9] sm:text-[8vw] lg:text-[5.2vw]">
          <span className="lead">Projects</span>
          <span>
            we <span className="hot">delivered</span>
          </span>
          <span>2007 — 2026</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#9a9a9a] sm:text-lg">
          From wellhead facilities and cross-country flowlines to 132KV substations and
          turnkey buildings — a selection of work completed for Pakistan&rsquo;s energy
          sector and beyond.
        </p>

        <div className="mt-16">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}
