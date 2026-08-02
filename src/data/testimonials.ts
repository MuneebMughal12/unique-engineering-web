/**
 * DEMO CONTENT — placeholder testimonials for the client presentation.
 * These are not real quotes and are deliberately not attributed to any
 * named individual or company. Replace with signed, approved client
 * testimonials before this site goes live.
 */
export type Testimonial = {
  name: string;
  role: string;
  org: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Project Manager",
    role: "Construction Manager",
    org: "Oil & Gas Operator",
    quote:
      "The team mobilised inside a week and worked to our permit system without a single lost-time incident. Wellhead tie-in was handed back ahead of the shutdown window, which is not something we say often.",
  },
  {
    name: "Site Engineer",
    role: "Civil Works Lead",
    org: "Fertilizer Plant",
    quote:
      "Prefabrication quality was consistent and the piping erection on the live rack was planned properly. Their supervisors understood the drawings and raised clashes before they became rework.",
  },
  {
    name: "Procurement Head",
    role: "Contracts & Procurement",
    org: "Power Producer",
    quote:
      "Documentation, QA/QC records and HSE reporting were all in order at every milestone. Invoicing matched the measured work — the commercial side was as clean as the site side.",
  },
];
