export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    slug: "aiden-voss",
    name: "Dr. Aiden Voss",
    role: "Lead Dentist",
    bio: "Focused on restorative and general care, with a calm, detail-first approach.",
    longBio: "With over a decade of practice, Dr. Voss leads Lucent's general and restorative care, known for a calm, thorough approach that puts nervous patients at ease.",
    image: "/images/team-2.jpg",
  },
  {
    slug: "elena-marsh",
    name: "Dr. Elena Marsh",
    role: "Orthodontist",
    bio: "Specializes in aligner-based treatment plans tailored to each patient's pace.",
    longBio: "Dr. Marsh specializes in modern, aligner-based orthodontics, building treatment plans around each patient's lifestyle and pace rather than a fixed timeline.",
    image: "/images/team-1.jpg",
  },
  {
    slug: "kian-reyes",
    name: "Dr. Kian Reyes",
    role: "Cosmetic Specialist",
    bio: "Leads veneer, whitening, and full smile-design consultations.",
    longBio: "Dr. Reyes leads Lucent's cosmetic practice, from whitening to full smile-design consultations, with an eye for natural-looking, long-lasting results.",
    image: "/images/team-3.jpg",
  },
];

export function getTeamMember(slug: string) {
  return team.find((t) => t.slug === slug);
}