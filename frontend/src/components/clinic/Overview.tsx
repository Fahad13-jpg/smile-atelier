import Container from "@/components/layout/Container";

const stats = [
  { value: "12+", label: "Years of practice" },
  { value: "4.9", label: "Average patient rating" },
  { value: "3,200+", label: "Smiles treated" },
  { value: "6", label: "Specialist practitioners" },
];

export default function Overview() {
  return (
    <section className="section">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl mb-2">{stat.value}</p>
              <p className="text-sm text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}