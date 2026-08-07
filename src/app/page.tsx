import Hero from "@/components/home/Hero";
import ValueCards from "@/components/home/ValueCards";
import ServicesSection from "@/components/home/ServicesSection";
import HowWeWork from "@/components/home/HowWeWork";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TeamSection from "@/components/home/TeamSection";
import CTASection from "@/components/home/CTASection";
import TestimonialsLight from "@/components/home/TestimonialsLight";
import FAQSection from "@/components/home/FAQSection";
import { getProjects } from "@/lib/projects-repo";
import { getServices, getTeamMembers } from "@/lib/content-repo";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata = buildPageMetadata({
  title: "Construction Company in Rawalpindi & Islamabad",
  description:
    "Bricks N Builders provides architectural design, map approval, grey structure, finishing and turnkey construction services across Rawalpindi and Islamabad.",
  path: "/",
});

export default async function Home() {
  const [projects, services, team] = await Promise.all([getProjects(), getServices(), getTeamMembers()]);
  return (
    <>
      <Hero projects={projects} />
      <ValueCards />
      <ServicesSection services={services} />
      <HowWeWork />
      <FeaturedProjects projects={projects} />
      <TeamSection team={team} />
      <CTASection />
      <TestimonialsLight />
      <FAQSection />
    </>
  );
}
