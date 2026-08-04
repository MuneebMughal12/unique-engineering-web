// ⚠️ PLACEHOLDER TEAM — replace names, roles, photos and the CEO message with
// the real Bricks N Builders team before launch.

export type Member = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
};

export const ceo = {
  name: "Sohail Arif",
  role: "Chief Executive Officer",
  photo: "/img/site-team.jpg",
  message:
    "At Bricks N Builders, we believe a home is more than bricks and concrete — it is a family's dream taking shape. Since day one our promise has been simple: honest pricing, transparent site work, and quality that lasts. From the first drawing to the day we hand over the keys, we stay beside our clients so they can watch their vision come to life with complete peace of mind.",
};

export const team: Member[] = [
  {
    name: "Sohail Arif",
    role: "Chief Executive Officer",
    photo: "/img/site-team.jpg",
    bio: "Leads the company's vision, client relationships and overall delivery.",
  },
  {
    name: "Project Director",
    role: "Head of Construction",
    photo: "/img/earthworks-team.jpg",
    bio: "Oversees site execution, scheduling and quality control across projects.",
  },
  {
    name: "Lead Architect",
    role: "Design & Drawings",
    photo: "/img/survey-setout.jpg",
    bio: "Turns client requirements into buildable architectural and structural designs.",
  },
  {
    name: "Site Engineer",
    role: "Structure & Finishing",
    photo: "/img/survey-level.jpg",
    bio: "Manages day-to-day site work, materials and workmanship on the ground.",
  },
];
