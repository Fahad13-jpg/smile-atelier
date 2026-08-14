import PageHero from "@/components/ui/PageHero";
import TheSpace from "@/components/clinic/TheSpace";
import Overview from "@/components/clinic/Overview";
import BookingCTA from "@/components/booking/BookingCTA";
import Container from "@/components/layout/Container";
import StickyStory from "@/components/clinic/StickyStory";
import { MapPin, Clock, Phone } from "lucide-react";

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
      <section className="section bg-surface-elevated">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <MapPin className="w-5 h-5 text-accent mb-4" />
        <p className="text-sm font-medium mb-2">Location</p>
        <p className="text-sm text-foreground-muted">
          128 Amberwood Lane<br />Stockholm, Sweden
        </p>
      </div>
      <div>
        <Clock className="w-5 h-5 text-accent mb-4" />
        <p className="text-sm font-medium mb-2">Hours</p>
        <p className="text-sm text-foreground-muted">
          Mon–Fri: 9am – 6pm<br />Sat: 10am – 2pm
        </p>
      </div>
      <div>
        <Phone className="w-5 h-5 text-accent mb-4" />
        <p className="text-sm font-medium mb-2">Contact</p>
        <p className="text-sm text-foreground-muted">
          hello@lucentdental.demo<br />+46 8 000 000
        </p>
      </div>
    </div>
  </Container>
</section>
      <BookingCTA />
    </main>
  );
}
