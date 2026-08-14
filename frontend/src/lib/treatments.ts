export type Treatment = {
  slug: string;
  name: string;
  category: string;
  desc: string;
  longDesc: string;
};

export const treatments: Treatment[] = [
  {
    slug: "cosmetic-whitening",
    name: "Cosmetic Whitening",
    category: "Aesthetics",
    desc: "Brighten your smile with precision, gentle care that lasts.",
    longDesc: "A gentle, professional whitening treatment designed to lift years of staining without damaging enamel. Most patients see visible results after a single session, with a personalized maintenance plan to keep results lasting.",
  },
  {
    slug: "invisible-aligners",
    name: "Invisible Aligners",
    category: "Aesthetics",
    desc: "Straighten discreetly, at your own pace, with regular check-ins.",
    longDesc: "Custom-fitted clear aligners that gradually shift teeth into place, virtually unnoticeable in daily life. Includes regular progress check-ins and a plan tailored to your specific bite.",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Implants",
    desc: "Permanent, natural-feeling tooth replacement built to last.",
    longDesc: "A long-term solution for missing teeth, using a titanium post fused to the jawbone topped with a natural-looking crown. Built to function and feel like a real tooth.",
  },
  {
    slug: "preventive-care",
    name: "Preventive Care",
    category: "General Care",
    desc: "Routine care that keeps problems from starting in the first place.",
    longDesc: "Regular cleanings, exams, and early screening to catch issues before they become bigger problems — the foundation of long-term dental health.",
  },
  {
    slug: "root-canal-therapy",
    name: "Root Canal Therapy",
    category: "General Care",
    desc: "Modern, comfortable treatment to save a damaged tooth.",
    longDesc: "A precise, modern approach to treating infected or damaged tooth pulp, designed to be far more comfortable than its reputation suggests — and to save your natural tooth.",
  },
  {
    slug: "porcelain-veneers",
    name: "Porcelain Veneers",
    category: "Aesthetics",
    desc: "Refined, natural-looking correction for shape and color.",
    longDesc: "Thin, custom-crafted porcelain shells bonded to the front of teeth to correct shape, color, or minor alignment issues — a refined, natural-looking result.",
  },
];

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}