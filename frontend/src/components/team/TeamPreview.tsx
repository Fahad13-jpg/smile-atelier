import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const team = [
  { name: "Dr. Aiden Voss", role: "Lead Dentist", image: "/images/team-2.jpg" },
  { name: "Dr. Elena Marsh", role: "Orthodontist", image: "/images/team-1.jpg" },
  { name: "Dr. Kian Reyes", role: "Cosmetic Specialist", image: "/images/team-3.jpg" },
];

export default function TeamPreview() {
  return (
    <section className="section bg-surface-elevated">
      <Container>
        <SectionHeading eyebrow="05 — Team" title="Meet the people behind your care." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name}>
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="font-display text-lg">{member.name}</p>
              <p className="text-sm text-foreground-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}