export const company = {
  name: "Bricks N Builders",
  legalName: "Bricks N Builders",
  short: "Bricks N Builders",
  abbr: "BNB",
  tagline: "We Build Smile",
  // TODO: confirm the year the company was established
  founded: "",
  ceo: { name: "Sohail Arif", role: "Chief Executive Officer" },

  intro:
    "Bricks N Builders is a Rawalpindi-based design and construction company. From architectural drawings and society map approvals to grey structure, finishing and turnkey handover, we take a project from the first line on paper to the day you get the keys.",

  ethos:
    "We keep it simple: honest costing, clear timelines and site work you can actually see progressing. Whether it is a family home, a commercial unit or getting a map approved from your housing society, our team stays with you through every stage — that is how we build a smile.",

  mission: [
    "Deliver quality construction on time and on budget.",
    "Make design and map approval simple for every client.",
    "Build lasting relationships, not just buildings.",
  ],

  vision:
    "To be Rawalpindi & Islamabad's most trusted name in home design, construction and map approval.",

  values:
    "Honesty in costing, transparency on site, and craftsmanship that lasts — we treat every project as if we were building it for our own family.",

  // NOTE: placeholder figures — replace with the client's real numbers.
  stats: [
    { value: 50, suffix: "+", label: "Projects completed" },
    { value: 100, suffix: "%", label: "Client satisfaction" },
    { value: 10, suffix: "+", label: "Years of experience" },
    { value: 2, suffix: "", label: "Office locations" },
  ],

  // Real credential from the company profile — expand as the client provides more.
  certifications: [
    {
      code: "Rehbar Housing Society",
      title: "Approved Builder & Developer",
      body: "Rehbar Housing Society, Rawalpindi",
    },
    {
      code: "Map Approval",
      title: "Society & TMA Map Approval Services",
      body: "Rawalpindi / Islamabad",
    },
  ],

  offices: [
    {
      label: "Head Office",
      lines: [
        "Plot No C-20A, Akram Plaza, Commercial Avenue",
        "Rehbar Housing Society, Chakri Road, Rawalpindi",
      ],
      phones: ["0313-5350050", "0313-5350085"],
    },
    {
      label: "Branch Office",
      lines: [
        "Office #1, Near Italian Pizza, Main Kalma Chowk",
        "Dhamial Road, Rawalpindi",
      ],
      phones: ["0313-5350085"],
    },
  ],

  email: "bricksnbuilders1@gmail.com",
  website: "https://www.bricksnbuilders.com",
  whatsapp: "923135350050",
  whatsappMessage:
    "Assalam o Alaikum, mujhe Bricks N Builders ki design, construction aur map approval services ke baare mein maloomat chahiye.",

  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "WhatsApp", href: "https://wa.me/923135350050" },
  ],
} as const;

// NOTE: placeholder — replace with the real areas / societies the client works in.
export const clients = [
  "Rehbar Society",
  "DHA",
  "Bahria Town",
  "Bahria Enclave",
  "Gulraiz",
  "PWD",
  "Media Town",
  "Airport Housing",
  "Soan Gardens",
  "Chakri Road",
  "Dhamial Road",
  "Islamabad",
] as const;
