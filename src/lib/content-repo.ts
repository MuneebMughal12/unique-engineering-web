import "server-only";

import { getDb, isDbConfigured } from "./mongodb";
import type { ManagedService, SiteSettings, TeamMember } from "./models";
import { services as serviceSeed } from "@/data/services";
import { ceo, team as teamSeed } from "@/data/team";

const serviceImages = [
  "/img/survey-setout.jpg",
  "/img/planning-gantt.jpg",
  "/img/concrete-pour.jpg",
  "/img/interior-floor.jpg",
  "/img/townhouse-karen.jpg",
  "/img/hall-interior.jpg",
];

export const defaultTeam: TeamMember[] = teamSeed.map((member, index) => ({
  ...member,
  slug: member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `member-${index + 1}`,
  order: index,
}));

export const defaultServices: ManagedService[] = serviceSeed.map((service, index) => ({
  ...service,
  image: serviceImages[index % serviceImages.length],
  order: index,
}));

export const defaultSettings: SiteSettings = {
  key: "main",
  ceoName: ceo.name,
  ceoRole: ceo.role,
  ceoPhoto: ceo.photo,
  ceoHeading: "Building trust, one home at a time",
  ceoMessage: ceo.message,
};

export async function getTeamMembers(): Promise<TeamMember[]> {
  if (isDbConfigured()) {
    const db = await getDb();
    const docs = await db?.collection<TeamMember>("teamMembers").find({}, { projection: { _id: 0 } }).sort({ order: 1 }).toArray();
    const seeded = await db?.collection("cmsMeta").findOne({ key: "seeded:teamMembers" });
    if (docs?.length || seeded) return docs ?? [];
  }
  return defaultTeam;
}

export async function getServices(): Promise<ManagedService[]> {
  if (isDbConfigured()) {
    const db = await getDb();
    const docs = await db?.collection<ManagedService>("services").find({}, { projection: { _id: 0 } }).sort({ order: 1 }).toArray();
    const seeded = await db?.collection("cmsMeta").findOne({ key: "seeded:services" });
    if (docs?.length || seeded) return docs ?? [];
  }
  return defaultServices;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (isDbConfigured()) {
    const db = await getDb();
    const doc = await db?.collection<SiteSettings>("siteSettings").findOne({ key: "main" }, { projection: { _id: 0 } });
    if (doc) return doc;
  }
  return defaultSettings;
}
