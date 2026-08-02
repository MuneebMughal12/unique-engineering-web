export const company = {
  name: "Unique Construction & Engineering Services",
  legalName: "Unique Construction & Engineering Services (Pvt) Limited",
  short: "Unique Engineering",
  abbr: "UE",
  founded: 2007,
  tagline: "Engineering, Procurement & Construction",
  ceo: { name: "Ayaz Ahmed", role: "Chief Executive Officer" },

  intro:
    "Established in 2007, Unique Construction & Engineering Services has followed a steady path of growth in civil construction with an efficient, time-saving and cost-effective approach. Since 2013 we have broadened our scope and now deliver Mechanical, Electrical & Instrumentation projects across the Oil and Gas sector.",

  ethos:
    "We emphasise teamwork for the provision of excellent services and to achieve targeted goals on time by planning, managing and controlling all aspects of a project. Our company is equipped with a competent team of multi-disciplined professionals including engineers, supervisors and foremen, backed by the latest equipment, machinery and tools.",

  mission: [
    "To be undisputed leaders in Mechanical, Civil and Electrical & Instrumentation projects.",
    "Provide professional services and solutions to our clients.",
    "Stay profitable in growth.",
  ],

  vision:
    "A regional market leader in the provision of civil engineering, building construction and industrial EPC services.",

  values:
    "We believe in maintaining the highest standard of professionalism, integrity, creativity and positive attitude — delivery that meets and surpasses expectations, while offering prompt and lasting solutions that stand the test of time.",

  stats: [
    { value: 18, suffix: "+", label: "Years in operation" },
    { value: 120, suffix: "+", label: "Projects delivered" },
    { value: 40, suffix: "+", label: "Blue-chip clients" },
    { value: 3, suffix: "", label: "ISO certifications" },
  ],

  certifications: [
    { code: "ISO 9001:2015", title: "Quality Management System", body: "TÜV Austria" },
    { code: "ISO 14001:2015", title: "Environmental Management System", body: "TÜV Austria" },
    { code: "ISO 45001:2018", title: "Occupational Health & Safety", body: "TÜV Austria" },
    { code: "PEC No. 226", title: "Registered Contractor", body: "Pakistan Engineering Council" },
    { code: "0095970", title: "Company Registration", body: "SECP Pakistan" },
  ],

  offices: [
    {
      label: "Head Office",
      lines: ["Plot # 479, Near Queen Marry School", "By-Pass Road, Sukkur, Sindh, Pakistan"],
      phones: ["071-5804765", "071-8504767", "0321-5644444"],
    },
    {
      label: "Workshop",
      lines: ["Near FFC, GT Road, Meerpur Mathelo", "Distt. Ghotki, Sindh, Pakistan"],
      phones: ["0303-3270100", "0321-5644444"],
    },
  ],

  email: "info@uniqueengineering.com.pk",
  website: "www.uniqueengineering.com.pk",
  whatsapp: "923215644444",
  whatsappMessage:
    "Assalam o Alaikum, mujhe aap ki construction & engineering services ke baare mein maloomat chahiye.",

  socials: [
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
} as const;

export const clients = [
  "Engro Fertilizer",
  "OMV Pakistan",
  "United Energy",
  "MOL Pakistan",
  "UCH Power",
  "PARCO",
  "DESCON",
  "Pakistan Army",
  "Sindh Irrigation",
  "KETRACO",
  "Maurice Energy",
  "Mari Energies",
] as const;
