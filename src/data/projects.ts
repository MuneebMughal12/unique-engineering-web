export type Category = "Oil & Gas" | "Power" | "Buildings" | "Civil Works";

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
    slug: "engro-co2-recovery-amine-unit",
    title: "CO₂ Recovery Project — Amine Unit",
    client: "Engro Fertilizer Limited",
    location: "Engro Fertilizer Plant, Daharki, Sindh",
    year: "2018",
    period: "120 Days",
    category: "Oil & Gas",
    tags: ["Mechanical", "Piping", "Commissioning"],
    summary:
      "Complete mechanical scope for the CO₂ recovery amine unit — prefabrication, civil works, equipment installation and piping erection on an operating fertilizer plant.",
    scope: [
      "Prefabrication of pipes, structures and supports",
      "Civil works — excavation, foundation, backfill",
      "Installation of exchanger, amine regeneration boiler, amine contactor tower",
      "Pumps, filters, tanks and amine regenerator installation",
      "Erection of piping on existing rack by manual rigging method",
      "Pre-commissioning, testing, sand blasting and painting works",
    ],
    cover: img("batching-plant"),
    images: [img("batching-plant"), img("control-panels"), img("concrete-pour"), img("trench-works")],
  },
  {
    slug: "engro-compressor-facility-encop-iii",
    title: "New Compressor Facility (ENCOP-III)",
    client: "Engro Fertilizer Limited",
    location: "Daharki, Distt. Ghotki, Sindh",
    year: "2017",
    period: "4 Months",
    category: "Oil & Gas",
    tags: ["Compressors", "Pipeline", "Civil"],
    summary:
      "Erection of three 90 MMSCF compressors with associated coolers, separators and pumps, supported by extensive piling and a 30-inch bypass pipeline from Mari Valve Station.",
    scope: [
      "Erection of 3 × 90 MMSCF compressors",
      "Erection of compressor coolers, separators and pumps",
      "Piling works for compressor foundation — 90 Nos",
      "Civil works — piling, sleepers, supports, foundations, pavements",
      "Laying of 10\", 12\", 16\" bypass pipelines",
      "Laying of 30\" dia 1.5 KM pipeline from Mari Valve Station",
    ],
    cover: img("trench-works"),
    images: [img("trench-works"), img("cable-trench"), img("excavation-loading"), img("batching-plant")],
  },
  {
    slug: "mol-tal-wellhead-surface-facilities",
    title: "Wellhead Surface Facilities — TAL Block",
    client: "MOL Pakistan Oil and Gas Company B.V.",
    location: "TAL Exploration Block — Kohat, Karak & Hangu",
    year: "2017 – 2018",
    period: "12 Months",
    category: "Oil & Gas",
    tags: ["Wellhead", "E&I", "Multi-site"],
    summary:
      "Development of five new wellhead surface facilities across the TAL exploration block, including relocation of a compressor from Manzalai-VA3 to Mamikhel-2.",
    scope: [
      "05 new wellhead surface facilities — Tolanj West-1, Makori East-6, Mardankhel-2, Makori Deep-1",
      "01 No relocation of compressor from Manzalai-VA3 to Mamikhel-2",
      "Prefabrication of pipes, structures and supports",
      "Civil works — excavation, foundation, backfill",
      "Instrumentation and control system work",
      "Installation and commissioning of solar system and wellhead control panels",
    ],
    cover: img("substation-site"),
    images: [img("substation-site"), img("control-panels"), img("survey-setout"), img("earthworks-crew")],
  },
  {
    slug: "uep-mitha-1-wellhead-development",
    title: "Mitha-1 Wellhead Development Project",
    client: "United Energy Pakistan (formerly OMV Maurice)",
    location: "Mubarak Block, Distt. Ghotki, Sindh",
    year: "2018",
    period: "30 Days",
    category: "Oil & Gas",
    tags: ["Wellhead", "Flowline", "Fibre Optic"],
    summary:
      "Fast-track wellhead development completed in thirty days, including an 8 KM flowline and 8 KM of 12-core fibre-optic cable to Miano-15.",
    scope: [
      "Prefabrication of pipes, structures and supports",
      "New civil works — excavation, foundation, backfill",
      "Field work — pipe and structure installation, hookup, alignment",
      "Installation and commissioning of wellhead coolers and control panels",
      "Laying of 8\" dia 8 KM flowline from Mitha-1 to Miano-15",
      "Laying of 8 KM 12-core fibre-optic cable including splicing, jointing and OTDR",
    ],
    cover: img("cable-trench"),
    images: [img("cable-trench"), img("trench-cabling"), img("excavation-site"), img("control-panels")],
  },
  {
    slug: "uep-miano-19-dismantling",
    title: "Miano-19 Wellhead Dismantling & Reinstallation",
    client: "United Energy Pakistan",
    location: "Miano Block, Distt. Khairpur, Sindh",
    year: "2018",
    period: "15 Days",
    category: "Oil & Gas",
    tags: ["Dismantling", "Relocation", "E&I"],
    summary:
      "Dismantling of the Miano-19 wellhead surface facility and full reinstallation at Miano-28, delivered inside a fifteen-day window.",
    scope: [
      "Dismantling and relocation of wellhead surface facility including E&I and civil foundation",
      "Prefabrication of pipes, structures and supports",
      "Installation and commissioning of wellhead coolers and control panels",
      "Laying of 6\" dia 2 KM flowline from Miano-28 to Miano-01 tie-in",
      "Laying of 2 KM 6-core fibre-optic cable with splicing, jointing and OTDR",
    ],
    cover: img("excavation-site"),
    images: [img("excavation-site"), img("cable-trench"), img("earthworks-crew"), img("substation-site")],
  },
  {
    slug: "parco-tanks-piping-works",
    title: "Fabrication & Erection of Tanks and Piping Works",
    client: "Pak Arab Pipeline Company",
    contractor: "DESCON Engineering (Pvt) Ltd",
    location: "Distt. Shikarpur, Sindh",
    year: "2016",
    category: "Oil & Gas",
    tags: ["Tanks", "Piping", "Fabrication"],
    summary:
      "Fabrication and erection of seven storage tanks with approximately 40,000 dia-inch of surface piping, complete with civil foundations and supporting structures.",
    scope: [
      "Fabrication and erection of 7 Nos tanks",
      "Construction of civil foundations for tanks",
      "Construction of building works and roads",
      "Construction of boundary walls",
      "Construction of pipe supports",
      "Fabrication and erection of surface piping (approx. 40,000 dia inch)",
    ],
    cover: img("ballast-yard"),
    images: [img("ballast-yard"), img("concrete-pour"), img("substation-foundations"), img("trench-works")],
  },
  {
    slug: "omv-sofiya-2-wellhead-phase-1",
    title: "Sofiya-2 Wellhead Development — Phase I",
    client: "OMV Maurice Energy Ltd.",
    location: "Mehar, Distt. Dadu, Sindh",
    year: "2017",
    period: "60 Days",
    category: "Oil & Gas",
    tags: ["Wellhead", "Flowline", "Instrumentation"],
    summary:
      "Phase-one wellhead development in the Mehar gas plant area with 17.5 KM of flowline and fibre-optic cable laid across difficult terrain.",
    scope: [
      "Prefabrication of pipes, structures and supports",
      "Civil works — excavation, foundation, backfill",
      "Field work in Mehar gas plant area and wellhead area",
      "Instrumentation and control system work",
      "Installation of wellhead control panels, inlet separator, metering skids, KO drum, CI skids",
      "Laying of approx. 17.5 KM flowline and fibre-optic cable",
    ],
    cover: img("survey-level"),
    images: [img("survey-level"), img("cable-trench"), img("road-compaction"), img("earthworks-team")],
  },
  {
    slug: "omv-sofia-2-access-road",
    title: "Sofia-2 Location & Access Road Repair",
    client: "OMV Maurice Energy Ltd.",
    location: "Mehar, Distt. Dadu, Sindh",
    year: "2017",
    category: "Civil Works",
    tags: ["Roads", "Culverts", "Rehabilitation"],
    summary:
      "Repair and rehabilitation of 16.5 KM of existing access road with new causeways, box culverts and a 1.35 KM new road cut through rock.",
    scope: [
      "Repair of Sofia-2 well location and rig camp",
      "Earth filling in washout area, repair and installation of fence",
      "Construction of storm water drain in well location",
      "Repair of 16.5 KM existing access road",
      "Construction of causeways and box culverts (10 m, 15 m, 25 m)",
      "Construction of 1.35 KM new access road including cutting of rocks",
    ],
    cover: img("road-compaction"),
    images: [img("road-compaction"), img("road-roller"), img("dozer-grading"), img("compactor-work")],
  },
  {
    slug: "omv-miano-18-compression",
    title: "Miano-18 Wellhead Compression Project",
    client: "OMV (Pakistan)",
    location: "Khanpur Mahar, Distt. Ghotki, Sindh",
    year: "2016",
    period: "50 Days",
    category: "Oil & Gas",
    tags: ["Compressor", "Erection", "Shutdown"],
    summary:
      "Erection of a 20 MMSCF compressor at Miano-15 with associated coolers and separators, including tie-in works executed during a live plant shutdown.",
    scope: [
      "Erection of 20 MMSCF compressor at Miano-15",
      "Erection of compressor cooler, separator and below case skid",
      "Prefabrication of pipes, structures and supports",
      "Civil works — excavation, foundation, backfill, area buildup",
      "Instrumentation and control system work",
      "Tie-in works during plant shutdown",
    ],
    cover: img("substation-transformer"),
    images: [img("substation-transformer"), img("control-panels"), img("batching-plant"), img("concrete-pour")],
  },
  {
    slug: "uch-power-security-building",
    title: "New Security Building",
    client: "UCH Power (Pvt) Limited",
    location: "Dera Murad Jamali, Distt. Jafarabad, Balochistan",
    year: "2019",
    category: "Buildings",
    tags: ["Building", "MEP", "27,890 sq ft"],
    summary:
      "Turnkey construction of a 27,890 square foot security building — sub-structure through to architectural finishes, HVAC, fire fighting and full system interconnection.",
    scope: [
      "Sub-structure and super-structure work",
      "Architectural works and plumbing works",
      "HVAC works",
      "Electrical works (LV/HT) including transformer installation",
      "Fire fighting system",
      "System interconnection works — CCTV, telephone, internet",
      "External development works — total covered area 27,890 sq ft",
    ],
    cover: img("institutional-building"),
    images: [img("institutional-building"), img("hall-interior"), img("interior-stairs"), img("school-block")],
  },
  {
    slug: "pak-army-gabar-garrison",
    title: "Development of Gabar Garrison",
    client: "25 Engineers Battalion, Pano Akil (Pakistan Army)",
    location: "Distt. Ghotki, Sindh",
    year: "2019",
    category: "Buildings",
    tags: ["Defence", "Residential", "Water Supply"],
    summary:
      "Development of garrison facilities including residential blocks, an office building and a complete HDPE water supply network.",
    scope: [
      "Construction of residential buildings",
      "Construction of office building",
      "Water supply network (HDPE pipe)",
    ],
    cover: img("apartments"),
    images: [img("apartments"), img("school-block"), img("bungalow"), img("residence-tiled")],
  },
  {
    slug: "sida-solar-tube-wells-drainage",
    title: "Drainage System for Solar Tube Wells",
    client: "Sindh Irrigation Development Authority, Govt. of Sindh",
    location: "Panu Akil, Distt. Sukkur, Sindh",
    year: "2020",
    category: "Civil Works",
    tags: ["Irrigation", "Pipeline", "Solar"],
    summary:
      "A large-scale irrigation scheme covering 101 solar tube wells, 28.45 KM of water channel and over 16 KM of HDPE main pipeline.",
    scope: [
      "Earth work and stone pitching for drain — 4.9 KM",
      "Water channel — 28.45 KM",
      "Laying of main pipeline HDPE 16\", 12\", 10\", 8\" — 16.83 KM",
      "Casting and installation of manholes — 325 Nos",
      "Main rising HDPE 36\" pipeline — 1.5 KM",
      "Construction of 101 solar tube wells and tube well rooms",
      "Link pipe line from tube wells to water channel — 21 KM",
    ],
    cover: img("excavation-loading"),
    images: [img("excavation-loading"), img("trench-cabling"), img("earthworks-crew"), img("paving-works")],
  },
  {
    slug: "ketraco-kitale-substation",
    title: "New 132/33KV Power Substation — Kitale",
    client: "Kenya Electricity Transmission Company (KETRACO)",
    location: "Kitale, Trans Nzoia County",
    year: "2016",
    category: "Power",
    tags: ["Substation", "Civil Works", "132KV"],
    summary:
      "Full civil works scope for a new 132/33KV power substation — earthworks, transformer and outdoor equipment foundations, oil pits, cable trenches and control building.",
    scope: [
      "Earthworks and site formation",
      "Transformer and outdoor equipment foundations",
      "Oil pits and cable trenches",
      "Control building construction",
      "Fences, boundary walls and drainage",
      "Substation internal and access roads",
    ],
    cover: img("substation-kitale"),
    images: [img("substation-kitale"), img("substation-yard"), img("substation-foundations"), img("substation-wall")],
  },
  {
    slug: "ketraco-eldoret-extension-bay",
    title: "132KV Takeoff Extension Bay — Eldoret Rivertex",
    client: "Kenya Electricity Transmission Company (KETRACO)",
    location: "Eldoret, Uasin Gishu County",
    year: "2016",
    category: "Power",
    tags: ["Substation", "Extension Bay", "132KV"],
    summary:
      "Civil works scope for a 132KV takeoff extension bay at the existing Rivertex substation, executed alongside live operations.",
    scope: [
      "Equipment foundations and gantry bases",
      "Cable trenches and ducting",
      "Ballast yard and drainage works",
      "Access road and hardstanding",
    ],
    cover: img("substation-eldoret"),
    images: [img("substation-eldoret"), img("substation-gantry"), img("substation-bays"), img("ballast-yard")],
  },
  {
    slug: "ketraco-awendo-substation",
    title: "New 132/33KV Power Substation — Awendo",
    client: "Kenya Electricity Transmission Company (KETRACO)",
    location: "Awendo, Migori County",
    year: "2017",
    category: "Power",
    tags: ["Substation", "Civil Works", "132KV"],
    summary:
      "Greenfield 132/33KV substation delivered complete with control building, transformer foundations, internal roads and perimeter works.",
    scope: [
      "Site clearance, earthworks and levelling",
      "Transformer and equipment foundations",
      "Oil pits, cable trenches and drainage",
      "Control building and boundary wall",
      "Internal and access roads",
    ],
    cover: img("substation-lines"),
    images: [img("substation-lines"), img("substation-access"), img("substation-transformer"), img("control-panels")],
  },
  {
    slug: "karen-town-house",
    title: "Town House — Karen",
    client: "Private Developer",
    location: "Karen, Nairobi City County",
    year: "2018",
    category: "Buildings",
    tags: ["Residential", "Turnkey", "Finishes"],
    summary:
      "Building and civil works scope for a private town house, delivered from foundation through to hardwood floors and joinery.",
    scope: [
      "Sub-structure and super-structure works",
      "Roofing and external finishes",
      "Internal joinery and hardwood flooring",
      "External works, driveway and landscaping",
    ],
    cover: img("townhouse-karen"),
    images: [img("townhouse-karen"), img("villa-karen"), img("living-room"), img("interior-floor")],
  },
];

export const categories: Category[] = ["Oil & Gas", "Power", "Buildings", "Civil Works"];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectIndex = (slug: string) => projects.findIndex((p) => p.slug === slug);
