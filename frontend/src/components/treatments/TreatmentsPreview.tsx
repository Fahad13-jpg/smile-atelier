import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const treatments = [
  { name: "Cosmetic Whitening", desc: "Brighten your smile with precision, gentle care." },
  { name: "Invisible Aligners", desc: "Straighten discreetly, at your own pace." },
  { name: "Dental Implants", desc: "Permanent, natural-feeling tooth replacement." },
  { name: "Preventive Care", desc: "Routine care that keeps problems from starting." },
];

export default function TreatmentsPreview() {
  return (
    <section className="section">
      <Container>
        <SectionHeading eyebrow="04 — Treatments" title="Care tailored to your smile." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {treatments.map((t) => (
            <div key={t.name} className="bg-background p-8">
              <h3 className="font-display text-xl mb-2">{t.name}</h3>
              <p className="text-sm text-foreground-muted">{t.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}