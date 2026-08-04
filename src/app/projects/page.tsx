import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { getProjects } from "@/lib/projects-repo";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Homes, commercial and mixed-use projects designed and built by Bricks N Builders across Rawalpindi and Islamabad.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <>
      <PageHeader title="Our Projects" crumb="Projects" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Portfolio</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">Delivering Projects That Create Long-Term Value</h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-[#444b54]">
              From family homes and bungalows to commercial plazas and mixed-use developments —
              a look at the work we design, approve and build across the twin cities.
            </p>
          </div>
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
