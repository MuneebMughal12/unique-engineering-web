import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Homes, commercial projects and map approvals designed and built by Bricks N Builders across Rawalpindi and Islamabad.",
};

export default function ProjectsPage() {
  return (
    <section className="relative pb-28 pt-32 sm:pt-40">
      <div className="glow pointer-events-none absolute inset-x-0 top-0 h-[60vh]" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="eyebrow">Portfolio</p>
        <h1 className="display mt-5 text-[13vw] leading-[0.9] sm:text-[8vw] lg:text-[5.2vw]">
          <span className="lead">Our</span>
          <span>
            recent <span className="hot">projects</span>
          </span>
          <span>Rawalpindi &amp; Islamabad</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#9a9a9a] sm:text-lg">
          From family homes and corner bungalows to commercial plazas and society map
          approvals — a look at the kind of work we design, approve and build across the
          twin cities.
        </p>

        <div className="mt-16">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}
