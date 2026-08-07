import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { adminListServices } from "@/lib/content-admin";
import ServicesManager from "@/components/admin/ServicesManager";

export const dynamic = "force-dynamic";
export default async function AdminServicesPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  return <ServicesManager initial={await adminListServices()} />;
}
