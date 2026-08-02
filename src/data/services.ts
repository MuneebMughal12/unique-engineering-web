export type Service = {
  slug: string;
  title: string;
  blurb: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "civil-construction",
    title: "Civil Construction",
    blurb:
      "Reinforced concrete structures, foundations, roads, drainage and site development for industrial and institutional projects.",
    points: ["Excavation & backfill", "RCC structures", "Roads & causeways", "Boundary walls & fencing"],
  },
  {
    slug: "mechanical-fabrication",
    title: "Mechanical Fabrication & Erection",
    blurb:
      "Shop and field fabrication of tanks, skids, pipe supports and structural steel, erected and tested to specification.",
    points: ["Tank fabrication", "Structural steel", "Pipe supports", "Equipment erection"],
  },
  {
    slug: "electrical-instrumentation",
    title: "Electrical & Instrumentation",
    blurb:
      "LV/HT electrical works, control systems, cable trays, wellhead control panels and full instrumentation loops.",
    points: ["LV / HT installation", "Control panels", "Cable trays & glanding", "Loop checking"],
  },
  {
    slug: "pipelines-flowlines",
    title: "Cross-Country Flowlines",
    blurb:
      "Laying, welding, testing and commissioning of flowlines and fibre-optic cable over long cross-country routes.",
    points: ["Pipeline laying", "Hydro testing", "Fibre-optic splicing", "Pigging & flushing"],
  },
  {
    slug: "power-substations",
    title: "Power Substation Works",
    blurb:
      "Complete civil scope for 132/33KV substations — earthworks, equipment foundations, oil pits, cable trenches and control buildings.",
    points: ["Transformer foundations", "Oil pits & trenches", "Control buildings", "Substation roads"],
  },
  {
    slug: "building-construction",
    title: "Building Construction",
    blurb:
      "High-rise and low-rise residential, commercial and institutional buildings — from sub-structure to finishes.",
    points: ["Residential & commercial", "Institutional buildings", "MEP coordination", "Finishing works"],
  },
  {
    slug: "design-drafting",
    title: "Design & Drafting",
    blurb:
      "Architectural and structural drawings, site layouts and as-built documentation produced in-house before a shovel hits the ground.",
    points: ["Architectural drawings", "Structural design", "Site layouts", "As-built records"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    blurb:
      "Planning, contract administration, site supervision and inspection that keeps a project on schedule and within budget.",
    points: ["Planning & scheduling", "Contract management", "Site supervision", "QA / QC inspection"],
  },
];
