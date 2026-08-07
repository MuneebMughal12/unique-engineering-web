import { redirect, notFound } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { isDbConfigured } from "@/lib/mongodb";
import { adminGetProject } from "@/lib/projects-admin";
import { getProject } from "@/lib/projects-repo";
import ProjectForm from "@/components/admin/ProjectForm";

export const dynamic = "force-dynamic";
export default async function EditProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  if (!(await isAuthenticated())) redirect("/admin/login");
  const { slug } = await params;
  const project = isDbConfigured() ? await adminGetProject(slug) : await getProject(slug);
  if (!project) notFound();
  return <div className="mx-auto max-w-3xl"><h1 className="mb-7 truncate text-2xl font-semibold">Edit — {project.title}</h1><ProjectForm initial={project} /></div>;
}
