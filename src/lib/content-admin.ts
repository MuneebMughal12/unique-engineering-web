import "server-only";

import { getDb } from "./mongodb";
import type { ManagedService, SiteSettings, TeamMember } from "./models";
import { defaultServices, defaultSettings, defaultTeam } from "./content-repo";

async function db() {
  const value = await getDb();
  if (!value) throw new Error("Database not configured.");
  return value;
}

async function seedIfEmpty<T extends { slug: string }>(collection: "teamMembers" | "services", seed: T[]) {
  const database = await db();
  const marker = await database.collection("cmsMeta").findOne({ key: `seeded:${collection}` });
  if (!marker && (await database.collection(collection).countDocuments()) === 0) {
    await database.collection(collection).insertMany(seed.map((item) => ({ ...item })));
  }
  if (!marker) await database.collection("cmsMeta").updateOne({ key: `seeded:${collection}` }, { $set: { key: `seeded:${collection}`, seededAt: new Date().toISOString() } }, { upsert: true });
}

export async function adminListTeam() {
  await seedIfEmpty("teamMembers", defaultTeam);
  return (await db()).collection<TeamMember>("teamMembers").find({}, { projection: { _id: 0 } }).sort({ order: 1 }).toArray();
}

export async function adminSaveTeam(member: TeamMember, originalSlug?: string) {
  const database = await db();
  const slug = originalSlug || member.slug;
  await database.collection<TeamMember>("teamMembers").updateOne({ slug }, { $set: member }, { upsert: true });
  if (originalSlug && originalSlug !== member.slug) await database.collection("teamMembers").deleteOne({ slug: originalSlug });
}

export async function adminDeleteTeam(slug: string) {
  await (await db()).collection("teamMembers").deleteOne({ slug });
}

export async function adminListServices() {
  await seedIfEmpty("services", defaultServices);
  return (await db()).collection<ManagedService>("services").find({}, { projection: { _id: 0 } }).sort({ order: 1 }).toArray();
}

export async function adminSaveService(service: ManagedService, originalSlug?: string) {
  const database = await db();
  const slug = originalSlug || service.slug;
  await database.collection<ManagedService>("services").updateOne({ slug }, { $set: service }, { upsert: true });
  if (originalSlug && originalSlug !== service.slug) await database.collection("services").deleteOne({ slug: originalSlug });
}

export async function adminDeleteService(slug: string) {
  await (await db()).collection("services").deleteOne({ slug });
}

export async function adminGetSettings(): Promise<SiteSettings> {
  const found = await (await db()).collection<SiteSettings>("siteSettings").findOne({ key: "main" }, { projection: { _id: 0 } });
  return found ? {
    key: "main",
    ceoName: found.ceoName,
    ceoRole: found.ceoRole,
    ceoPhoto: found.ceoPhoto,
    ceoHeading: found.ceoHeading,
    ceoMessage: found.ceoMessage,
  } : defaultSettings;
}

export async function adminSaveSettings(settings: SiteSettings) {
  await (await db()).collection<SiteSettings>("siteSettings").updateOne({ key: "main" }, { $set: settings }, { upsert: true });
}
