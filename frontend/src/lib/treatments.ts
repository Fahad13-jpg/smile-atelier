export type Treatment = {
  slug: string;
  name: string;
  category: string;
  desc: string;
  longDesc: string;
  imageKey: keyof typeof import("./images").images.treatments;
};

export const treatmentCategories = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    desc: "Everyday care, prevention and long-term oral health",
    imageKey: "general" as const,
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    desc: "Refined aesthetics, whitening, and smile design",
    imageKey: "cosmetic" as const,
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    desc: "Permanent, natural-feeling tooth replacement",
    imageKey: "implants" as const,
  },
  {
    slug: "preventive-care",
    name: "Preventive Care",
    desc: "Early detection and proactive maintenance",
    imageKey: "preventive" as const,
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    desc: "Repair, restore, and preserve natural teeth",
    imageKey: "restorative" as const,
  },
  {
    slug: "smile-design",
    name: "Smile Design",
    desc: "Comprehensive aesthetic transformation planning",
    imageKey: "smileDesign" as const,
  },
];

export const treatments: Treatment[] = [
  {
    slug: "cosmetic-whitening",
    name: "Cosmetic Whitening",
    category: "Cosmetic Dentistry",
    desc: "Brighten your smile with precision, gentle care that lasts.",
    longDesc: "A gentle, professional whitening treatment designed to lift years of staining without damaging enamel. Most patients see visible results after a single session, with a personalized maintenance plan to keep results lasting.",
    imageKey: "cosmetic",
  },
  {
    slug: "invisible-aligners",
    name: "Invisible Aligners",
    category: "Cosmetic Dentistry",
    desc: "Straighten discreetly, at your own pace, with regular check-ins.",
    longDesc: "Custom-fitted clear aligners that gradually shift teeth into place, virtually unnoticeable in daily life. Includes regular progress check-ins and a plan tailored to your specific bite.",
    imageKey: "cosmetic",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Dental Implants",
    desc: "Permanent, natural-feeling tooth replacement built to last.",
    longDesc: "A long-term solution for missing teeth, using a titanium post fused to the jawbone topped with a natural-looking crown. Built to function and feel like a real tooth.",
    imageKey: "implants",
  },
  {
    slug: "preventive-care",
    name: "Preventive Care",
    category: "Preventive Care",
    desc: "Routine care that keeps problems from starting in the first place.",
    longDesc: "Regular cleanings, exams, and early screening to catch issues before they become bigger problems — the foundation of long-term dental health.",
    imageKey: "preventive",
  },
  {
    slug: "root-canal-therapy",
    name: "Root Canal Therapy",
    category: "Restorative Dentistry",
    desc: "Modern, comfortable treatment to save a damaged tooth.",
    longDesc: "A precise, modern approach to treating infected or damaged tooth pulp, designed to be far more comfortable than its reputation suggests — and to save your natural tooth.",
    imageKey: "restorative",
  },
  {
    slug: "porcelain-veneers",
    name: "Porcelain Veneers",
    category: "Smile Design",
    desc: "Refined, natural-looking correction for shape and color.",
    longDesc: "Thin, custom-crafted porcelain shells bonded to the front of teeth to correct shape, color, or minor alignment issues — a refined, natural-looking result.",
    imageKey: "smileDesign",
  },
];

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}
