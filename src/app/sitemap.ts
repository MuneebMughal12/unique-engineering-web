import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects-repo";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/team`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: project.updatedAt ?? project.createdAt,
    changeFrequency: "monthly",
    priority: 0.7,
    images: project.cover
      ? [project.cover.startsWith("http") ? project.cover : `${SITE_URL}${project.cover}`]
      : undefined,
  }));

  return [...staticPages, ...projectPages];
}
