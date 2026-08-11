import PageHero from "@/components/ui/PageHero";
import TheSpace from "@/components/clinic/TheSpace";
import Overview from "@/components/clinic/Overview";
import BookingCTA from "@/components/booking/BookingCTA";
import Container from "@/components/layout/Container";
import StickyStory from "@/components/clinic/StickyStory";

export default function ClinicPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Clinic"
        title="A studio built around calm, considered care."
        description="Every detail of Lucent — from the layout of the studio to the pace of each appointment — is designed to make dental care feel less clinical, more human."
      />
      <section className="section">
        <Container>
          <p className="max-w-2xl text-foreground-muted">
            We believe great dental care starts with a space that puts you at
            ease. Natural light, quiet materials, and unhurried appointments are
            not luxuries here — they&apos;re the standard.
          </p>
        </Container>
      </section>
      <section className="section">
        <Container>
          <StickyStory />
        </Container>
      </section>
      <TheSpace />
      <Overview />
      <BookingCTA />
    </main>
  );
}
