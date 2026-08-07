import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import ProjectForm from "@/components/admin/ProjectForm";

export const dynamic = "force-dynamic";
export default async function NewProjectPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  return <div className="mx-auto max-w-3xl"><h1 className="mb-7 text-2xl font-semibold">New project</h1><ProjectForm /></div>;
}
