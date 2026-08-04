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

export const revalidate = 60;

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Hero />
      <ValueCards />
      <ServicesSection />
      <HowWeWork />
      <FeaturedProjects projects={projects} />
      <TeamSection />
      <CTASection />
      <TestimonialsLight />
      <FAQSection />
    </>
  );
}
