import Hero from "@/components/hero/hero";
import ClinicIntro from "@/components/clinic/ClinicIntro";
import TheSpace from "@/components/clinic/TheSpace";
import Overview from "@/components/clinic/Overview";
import TreatmentsPreview from "@/components/treatments/TreatmentsPreview";
import TeamPreview from "@/components/team/TeamPreview";
import BookingCTA from "@/components/booking/BookingCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClinicIntro />
      <TheSpace />
      <Overview />
      <TreatmentsPreview />
      <TeamPreview />
      <BookingCTA />
    </main>
  );
}