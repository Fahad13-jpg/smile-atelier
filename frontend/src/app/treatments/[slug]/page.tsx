import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/layout/Container";
import BookingCTA from "@/components/booking/BookingCTA";
import { treatments, getTreatment } from "@/lib/treatments";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export default function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const treatment = getTreatment(params.slug);
  if (!treatment) notFound();

  return (
    <main>
      <PageHero
        eyebrow={treatment.category}
        title={treatment.name}
        description={treatment.desc}
      />
      <section className="section">
        <Container>
          <p className="max-w-2xl text-foreground-muted text-lg leading-relaxed">
            {treatment.longDesc}
          </p>
        </Container>
      </section>
      <BookingCTA />
    </main>
  );
}