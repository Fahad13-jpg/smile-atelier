import { notFound } from "next/navigation";
import Link from "next/link";
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

  const related = treatments.filter((t) => t.slug !== treatment.slug).slice(0, 3);

  return (
    <main>
      <PageHero eyebrow={treatment.category} title={treatment.name} description={treatment.desc} />

      <section className="section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <p className="md:col-span-2 text-foreground-muted text-lg leading-relaxed">
              {treatment.longDesc}
            </p>
            <div className="border-l border-border pl-8">
              <p className="text-xs uppercase tracking-widest text-foreground-muted mb-4">At a glance</p>
              <ul className="space-y-3 text-sm text-foreground-muted">
                <li>Consultation required</li>
                <li>Personalized treatment plan</li>
                <li>Follow-up care included</li>
              </ul>
              <Link
                href="/book"
                className="mt-6 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-surface-elevated">
        <Container>
          <p className="text-xs uppercase tracking-widest text-foreground-muted mb-8">Related treatments</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {related.map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="group bg-background p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:z-10 relative block"
              >
                <h3 className="font-display text-lg mb-2 group-hover:text-accent transition-colors">{t.name}</h3>
                <p className="text-sm text-foreground-muted">{t.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <BookingCTA />
    </main>
  );
}