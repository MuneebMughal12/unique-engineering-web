import { redirect } from "next/navigation";
import { isAuthenticated, usingDefaultCredentials } from "@/lib/auth";
import { isDbConfigured } from "@/lib/mongodb";
import { isCloudinaryConfigured } from "@/lib/cloudinary";
import { getProjects } from "@/lib/projects-repo";
import { adminListProjects } from "@/lib/projects-admin";
import { computeProgress } from "@/lib/models";
import DashboardClient from "./DashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const projects = isDbConfigured() ? await adminListProjects() : await getProjects();
  const rows = projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    status: p.status,
    cover: p.cover,
    phaseCount: p.phases.length,
    progress: computeProgress(p.phases),
    featured: Boolean(p.featured),
    showInHero: Boolean(p.showInHero),
  }));

  return (
    <DashboardClient
      rows={rows}
      dbReady={isDbConfigured()}
      cloudReady={isCloudinaryConfigured()}
      defaultCreds={usingDefaultCredentials()}
    />
  );
}
