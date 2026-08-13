import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/layout/Container";
import BookingCTA from "@/components/booking/BookingCTA";

const team = [
  { name: "Dr. Aiden Voss", role: "Lead Dentist", bio: "Focused on restorative and general care, with a calm, detail-first approach.", image: "/images/team-2.jpg" },
  { name: "Dr. Elena Marsh", role: "Orthodontist", bio: "Specializes in aligner-based treatment plans tailored to each patient's pace.", image: "/images/team-1.jpg" },
  { name: "Dr. Kian Reyes", role: "Cosmetic Specialist", bio: "Leads veneer, whitening, and full smile-design consultations.", image: "/images/team-3.jpg" },
];

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="05 — Team"
        title="Meet the people behind your care."
        description="A small, specialist team — not a rotating cast. You'll see a familiar face at every visit."
      />
      <section className="section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.name}>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-display text-xl">{member.name}</p>
                <p className="text-sm text-accent mb-3">{member.role}</p>
                <p className="text-sm text-foreground-muted">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <BookingCTA />
    </main>
  );
}