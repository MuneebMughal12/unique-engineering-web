/** Shared types for projects + construction progress phases. */

export type Category = "Residential" | "Commercial" | "Mixed-Use" | "Renovation";

export type ProjectStatus = "ongoing" | "completed";

export type PhaseStatus = "done" | "active" | "upcoming";

export type Phase = {
  name: string;
  status: PhaseStatus;
  percent: number; // 0–100 for the active phase
  note?: string;
  images: string[];
  completedAt?: string; // ISO date
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  contractor?: string;
  location: string;
  year: string;
  period?: string;
  category: Category;
  tags: string[];
  summary: string;
  scope: string[];
  cover: string;
  images: string[];
  status: ProjectStatus;
  phases: Phase[];
  featured?: boolean;
  showInHero?: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio?: string;
  order?: number;
};

export type ManagedService = {
  slug: string;
  title: string;
  blurb: string;
  points: string[];
  image: string;
  order?: number;
};

export type SiteSettings = {
  key: "main";
  ceoName: string;
  ceoRole: string;
  ceoPhoto: string;
  ceoHeading: string;
  ceoMessage: string;
};

export const CATEGORIES: Category[] = [
  "Residential",
  "Commercial",
  "Mixed-Use",
  "Renovation",
];

/** Default construction phases offered when a new ongoing project is created. */
export const DEFAULT_PHASES: string[] = [
  "Design & Map Approval",
  "Excavation & Foundation",
  "Grey Structure",
  "Roof / Slab",
  "Finishing",
  "Electrical & Plumbing",
  "Handover",
];

/** Overall progress (0–100) computed from phase states. */
export function computeProgress(phases: Phase[]): number {
  if (!phases.length) return 0;
  const per = 100 / phases.length;
  let total = 0;
  for (const p of phases) {
    if (p.status === "done") total += per;
    else if (p.status === "active") total += (per * Math.min(100, Math.max(0, p.percent))) / 100;
  }
  return Math.round(total);
}

export function makeDefaultPhases(): Phase[] {
  return DEFAULT_PHASES.map((name, i) => ({
    name,
    status: i === 0 ? "active" : "upcoming",
    percent: 0,
    images: [],
  }));
}
