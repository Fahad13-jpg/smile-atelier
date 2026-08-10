import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const team = [
  { name: "Dr. Aiden Voss", role: "Lead Dentist" },
  { name: "Dr. Elena Marsh", role: "Orthodontist" },
  { name: "Dr. Kian Reyes", role: "Cosmetic Specialist" },
];

export default function TeamPreview() {
  return (
    <section className="section bg-surface-elevated">
      <Container>
        <SectionHeading eyebrow="05 — Team" title="Meet the people behind your care." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name}>
              <div className="aspect-square bg-border rounded-2xl mb-4" />
              <p className="font-display text-lg">{member.name}</p>
              <p className="text-sm text-foreground-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}