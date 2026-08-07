import { getDb } from "./mongodb";
import { Project } from "./models";
import { seedAsProjects } from "./projects-repo";

/** Write operations used by the admin panel. These require MongoDB. */

const COLLECTION = "projects";

async function db() {
  const d = await getDb();
  if (!d) throw new Error("Database not configured. Add MONGODB_URI to .env.local");
  return d;
}

export async function adminListProjects(): Promise<Project[]> {
  const d = await db();
  const marker = await d.collection("cmsMeta").findOne({ key: "seeded:projects" });
  if (!marker && (await d.collection(COLLECTION).countDocuments()) === 0) {
    await d.collection<Project>(COLLECTION).insertMany(seedAsProjects());
  }
  if (!marker) {
    await d.collection("cmsMeta").updateOne(
      { key: "seeded:projects" },
      { $set: { key: "seeded:projects", seededAt: new Date().toISOString() } },
      { upsert: true },
    );
  }
  return d
    .collection<Project>(COLLECTION)
    .find({}, { projection: { _id: 0 } })
    .sort({ order: 1, createdAt: -1 })
    .toArray();
}

export async function adminGetProject(slug: string): Promise<Project | null> {
  const d = await db();
  return d.collection<Project>(COLLECTION).findOne({ slug }, { projection: { _id: 0 } });
}

export async function adminCreateProject(project: Project): Promise<void> {
  const d = await db();
  const exists = await d.collection(COLLECTION).findOne({ slug: project.slug });
  if (exists) throw new Error(`A project with slug "${project.slug}" already exists.`);
  const now = new Date().toISOString();
  await d.collection(COLLECTION).insertOne({
    ...project,
    createdAt: now,
    updatedAt: now,
  });
}

export async function adminUpdateProject(slug: string, patch: Partial<Project>): Promise<void> {
  const d = await db();
  const { ...rest } = patch;
  await d
    .collection(COLLECTION)
    .updateOne({ slug }, { $set: { ...rest, updatedAt: new Date().toISOString() } });
}

export async function adminDeleteProject(slug: string): Promise<void> {
  const d = await db();
  await d.collection(COLLECTION).deleteOne({ slug });
}
