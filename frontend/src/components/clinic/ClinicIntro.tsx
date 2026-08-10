import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

export default function ClinicIntro() {
  return (
    <section className="section">
      <Container>
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <SectionHeading eyebrow="02 — Dental Care" title="Care that feels considered, not clinical." />
            <p className="text-foreground-muted max-w-md">
              Every visit at Lucent is built around a simple idea: dentistry
              should feel calm, precise, and personal — never rushed, never
              impersonal. From your first consultation to long-term care, the
              experience is designed around you.
            </p>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}