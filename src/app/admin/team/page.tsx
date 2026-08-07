import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { adminListTeam } from "@/lib/content-admin";
import TeamManager from "@/components/admin/TeamManager";

export const dynamic = "force-dynamic";
export default async function AdminTeamPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  return <TeamManager initial={await adminListTeam()} />;
}
