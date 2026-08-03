export type Service = {
  slug: string;
  title: string;
  blurb: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "architectural-design",
    title: "Architectural Design & Drawings",
    blurb:
      "2D drawings and 3D elevations that turn your plot and requirements into a buildable home or commercial design — before a single brick is laid.",
    points: ["2D floor plans", "3D front elevations", "Structural drawings", "Working drawings"],
  },
  {
    slug: "map-approval",
    title: "Map Approval",
    blurb:
      "We handle the paperwork and follow-up to get your building map approved from the housing society or TMA, so you can start construction without the runaround.",
    points: ["Society approval", "TMA / RDA approval", "Documentation", "Follow-up & submission"],
  },
  {
    slug: "grey-structure",
    title: "Grey Structure",
    blurb:
      "The bones of your building — excavation, foundation, RCC, brickwork and roof — built to the drawings with quality material and honest measurement.",
    points: ["Excavation & foundation", "RCC & framing", "Brick masonry", "Roof casting"],
  },
  {
    slug: "finishing-turnkey",
    title: "Finishing & Turnkey",
    blurb:
      "Plaster, flooring, paint, woodwork, electrical and plumbing — everything from grey structure to a move-in-ready home handed over on a single contract.",
    points: ["Tiling & flooring", "Paint & finishes", "Woodwork & doors", "Electrical & plumbing"],
  },
  {
    slug: "renovation",
    title: "Renovation & Extension",
    blurb:
      "Upgrading an older house or adding a floor? We remodel, extend and modernise existing structures with minimal disruption to your home.",
    points: ["Home remodeling", "Floor addition", "Facade upgrade", "Repairs & waterproofing"],
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    blurb:
      "Kitchens, wardrobes, false ceilings, feature walls and lighting — interiors designed and executed to make the finished space feel complete.",
    points: ["Kitchen & wardrobes", "False ceiling", "Feature walls", "Lighting design"],
  },
];
