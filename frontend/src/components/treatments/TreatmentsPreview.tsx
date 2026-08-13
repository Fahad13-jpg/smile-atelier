import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
const treatments = [
  {
    name: "Cosmetic Whitening",
    desc: "Brighten your smile with precision, gentle care.",
  },
  {
    name: "Invisible Aligners",
    desc: "Straighten discreetly, at your own pace.",
  },
  {
    name: "Dental Implants",
    desc: "Permanent, natural-feeling tooth replacement.",
  },
  {
    name: "Preventive Care",
    desc: "Routine care that keeps problems from starting.",
  },
];

export default function TreatmentsPreview() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="04 — Treatments"
          title="Care tailored to your smile."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
  {treatments.map((t) => (
    <div
      key={t.name}
      className="group bg-background p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:z-10 relative cursor-pointer"
    >
      <h3 className="font-display text-xl mb-2 transition-colors group-hover:text-accent">{t.name}</h3>
      <p className="text-sm text-foreground-muted">{t.desc}</p>
    </div>
  ))}
</div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-foreground-muted mb-4">
              See the difference
            </p>
            <h3 className="font-display text-2xl mb-4">
              Real results, honestly shown.
            </h3>
            <p className="text-foreground-muted max-w-sm">
              Drag the slider to compare — a small glimpse into the kind of
              precision and care every treatment is built on.
            </p>
          </div>
          <BeforeAfterSlider
            beforeSrc="https://placehold.co/600x450/e4ded5/6b6560?text=Before"
            afterSrc="https://placehold.co/600x450/f7f3ee/1b1b18?text=After"
          />
        </div>
      </Container>
    </section>
  );
}