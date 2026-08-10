import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TheSpace() {
  return (
    <section className="section bg-surface-elevated">
      <Container>
        <SectionHeading eyebrow="03 — The Space" title="A studio designed to put you at ease." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[4/5] bg-border rounded-2xl" />
          <div className="aspect-[4/5] bg-border rounded-2xl md:translate-y-8" />
          <div className="aspect-[4/5] bg-border rounded-2xl" />
        </div>
      </Container>
    </section>
  );
}