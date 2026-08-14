import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/layout/Container";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import BookingCTA from "@/components/booking/BookingCTA";
import { treatments } from "@/lib/treatments";

export const metadata = {
  title: "Treatments | Lucent Dental Studio",
  description: "Care built around your smile — from preventive care to full smile design.",
};

export default function TreatmentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="04 — Treatments"
        title="Care built around your smile."
        description="From routine prevention to complete smile transformations — every treatment is planned around your goals, not a one-size-fits-all script."
      />

      <section className="section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {treatments.map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="group bg-background p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:z-10 relative block"
              >
                <p className="text-xs uppercase tracking-widest text-foreground-muted mb-3 transition-colors group-hover:text-accent">
                  {t.category}
                </p>
                <h3 className="font-display text-xl mb-2">{t.name}</h3>
                <p className="text-sm text-foreground-muted">{t.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-surface-elevated">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
        </Container>
      </section>

      <BookingCTA />
    </main>
  );
}