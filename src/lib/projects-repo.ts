import { getDb, isDbConfigured } from "./mongodb";
import { Project, Phase, computeProgress } from "./models";
import { projects as seed } from "@/data/projects";

/**
 * Single source of truth for project reads.
 *
 * When MongoDB is configured, projects come from the database (admin-managed).
 * Otherwise we fall back to the static seed so the site works before the
 * client wires up their database. One seed project is presented as "ongoing"
 * with demo phases so the live progress tracker can be reviewed now.
 */

const COLLECTION = "projects";

// Demo phases so the progress tracker is visible without a database.
const demoPhases: Phase[] = [
  { name: "Design & Map Approval", status: "done", percent: 100, images: [], completedAt: "2024-02-10", note: "Drawings approved by the society." },
  { name: "Excavation & Foundation", status: "done", percent: 100, images: [], completedAt: "2024-03-22" },
  { name: "Grey Structure", status: "active", percent: 60, images: [], note: "First-floor slab in progress." },
  { name: "Roof / Slab", status: "upcoming", percent: 0, images: [] },
  { name: "Finishing", status: "upcoming", percent: 0, images: [] },
  { name: "Electrical & Plumbing", status: "upcoming", percent: 0, images: [] },
  { name: "Handover", status: "upcoming", percent: 0, images: [] },
];

export function seedAsProjects(): Project[] {
  return seed.map((p, i) => ({
    ...p,
    status: i === 0 ? "ongoing" : "completed",
    phases: i === 0 ? demoPhases : [],
    order: i,
  }));
}

export async function getProjects(): Promise<Project[]> {
  if (isDbConfigured()) {
    const db = await getDb();
    if (db) {
      const docs = await db
        .collection<Project>(COLLECTION)
        .find({}, { projection: { _id: 0 } })
        .sort({ order: 1, createdAt: -1 })
        .toArray();
      const seeded = await db.collection("cmsMeta").findOne({ key: "seeded:projects" });
      if (docs.length || seeded) return docs;
    }
  }
  return seedAsProjects();
}

export async function getProject(slug: string): Promise<Project | null> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug) ?? null;
}

export async function getProjectWithProgress(slug: string) {
  const project = await getProject(slug);
  if (!project) return null;
  return { ...project, progress: computeProgress(project.phases) };
}
