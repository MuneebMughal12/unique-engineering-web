import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { adminGetSettings } from "@/lib/content-admin";
import SettingsForm from "@/components/admin/SettingsForm";

export const dynamic = "force-dynamic";
export default async function AdminSettingsPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  return <SettingsForm initial={await adminGetSettings()} />;
}
