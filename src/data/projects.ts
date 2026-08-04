// ⚠️ PLACEHOLDER PROJECTS
// These are stand-in projects so the layout can be reviewed. The details are
// generic and the photos are stock construction images — they do NOT depict real
// Bricks N Builders work. Replace every project below (and its images) with the
// client's own completed projects and photographs before the site goes live.

export type Category = "Residential" | "Commercial" | "Mixed-Use" | "Renovation";

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
};

const img = (n: string) => `/img/${n}.jpg`;

export const projects: Project[] = [
  {
    slug: "modern-family-home-bahria",
    title: "Modern Family Home",
    client: "Private Client",
    location: "Bahria Town, Rawalpindi",
    year: "2024",
    period: "10 Months",
    category: "Residential",
    tags: ["Design", "Grey Structure", "Turnkey"],
    summary:
      "A turnkey family home taken from architectural design through to finished handover — grey structure, finishing and interior on a single contract.",
    scope: [
      "Architectural design and 3D elevation",
      "Society map approval",
      "Excavation, foundation and RCC grey structure",
      "Plaster, flooring, paint and woodwork",
      "Electrical, plumbing and turnkey handover",
    ],
    cover: img("villa-karen"),
    images: [img("villa-karen"), img("living-room"), img("interior-floor"), img("interior-stairs")],
  },
  {
    slug: "corner-bungalow-dha",
    title: "Corner Bungalow",
    client: "Private Client",
    location: "DHA, Islamabad",
    year: "2023",
    period: "12 Months",
    category: "Residential",
    tags: ["Design", "Construction", "Finishing"],
    summary:
      "A double-storey corner bungalow designed and constructed to the owner's brief, with a clean modern facade and fully finished interior.",
    scope: [
      "2D drawings and 3D front elevation",
      "Grey structure and roof casting",
      "Facade and external finishes",
      "Internal finishing and joinery",
      "Handover with electrical and plumbing complete",
    ],
    cover: img("bungalow"),
    images: [img("bungalow"), img("residence-tiled"), img("hall-interior"), img("interior-floor")],
  },
  {
    slug: "commercial-plaza-chakri",
    title: "Commercial Plaza",
    client: "Private Client",
    location: "Chakri Road, Rawalpindi",
    year: "2023",
    category: "Commercial",
    tags: ["Commercial", "Grey Structure", "Glazing"],
    summary:
      "A multi-storey commercial plaza with retail units on the lower floors and offices above, delivered from structure to glazed facade.",
    scope: [
      "Structural design and drawings",
      "Multi-storey RCC frame",
      "Shop fronts and office partitions",
      "Aluminium and glass facade",
      "Common area finishing",
    ],
    cover: img("office-glazing"),
    images: [img("office-glazing"), img("institutional-building"), img("hall-interior"), img("concrete-pour")],
  },
  {
    slug: "mixed-use-development",
    title: "Mixed-Use Development",
    client: "Private Client",
    location: "Bahria Town, Rawalpindi",
    year: "2024",
    category: "Mixed-Use",
    tags: ["Mixed-Use", "Retail + Residential", "Construction"],
    summary:
      "A mixed-use development with ground-floor retail and residential apartments above — designed, approved and constructed from the ground up.",
    scope: [
      "Architectural and structural design",
      "Society map approval",
      "Multi-storey RCC frame",
      "Ground-floor retail units",
      "Residential apartments and finishing",
    ],
    cover: img("planning-gantt"),
    images: [img("planning-gantt"), img("survey-setout"), img("survey-level"), img("site-team")],
  },
  {
    slug: "apartment-block",
    title: "Apartment Block",
    client: "Private Client",
    location: "Airport Housing Society, Rawalpindi",
    year: "2022",
    category: "Residential",
    tags: ["Residential", "Multi-unit", "Construction"],
    summary:
      "A low-rise apartment block of multiple units, built from foundation to finished, move-in-ready flats.",
    scope: [
      "Design for multiple apartment units",
      "Foundation and RCC frame",
      "Unit-wise finishing",
      "Shared stairs, lobby and services",
      "Handover of completed units",
    ],
    cover: img("apartments"),
    images: [img("apartments"), img("school-block"), img("residence-tiled"), img("interior-stairs")],
  },
  {
    slug: "home-renovation-gulraiz",
    title: "Home Renovation & Extension",
    client: "Private Client",
    location: "Gulraiz Housing Society, Rawalpindi",
    year: "2024",
    period: "4 Months",
    category: "Renovation",
    tags: ["Renovation", "Extension", "Finishing"],
    summary:
      "An older house remodelled and extended with an added floor, a refreshed facade and a fully updated interior.",
    scope: [
      "Assessment of the existing structure",
      "Additional floor construction",
      "Facade modernisation",
      "Interior remodeling and new finishes",
      "Updated electrical and plumbing",
    ],
    cover: img("townhouse-karen"),
    images: [img("townhouse-karen"), img("living-room"), img("hall-interior"), img("interior-floor")],
  },
];

export const categories: Category[] = ["Residential", "Commercial", "Mixed-Use", "Renovation"];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectIndex = (slug: string) => projects.findIndex((p) => p.slug === slug);
