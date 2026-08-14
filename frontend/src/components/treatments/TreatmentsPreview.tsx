import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { treatments } from "@/lib/treatments";

export default function TreatmentsPreview() {
  return (
    <section className="section">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow="04 — Treatments" title="Care tailored to your smile." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {treatments.slice(0, 4).map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="group bg-background p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:z-10 relative block"
              >
                <h3 className="font-display text-xl mb-2 group-hover:text-accent transition-colors">{t.name}</h3>
                <p className="text-sm text-foreground-muted">{t.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-foreground-muted mb-4">
                See the difference
              </p>
              <h3 className="font-display text-2xl mb-4">Real results, honestly shown.</h3>
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
        </RevealOnScroll>
      </Container>
    </section>
  );
}