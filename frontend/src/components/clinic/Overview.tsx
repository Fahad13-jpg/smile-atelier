import Container from "@/components/layout/Container";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { end: 12, suffix: "+", label: "Years of practice" },
  { end: 4.9, decimals: 1, label: "Average patient rating" },
  { end: 3200, suffix: "+", label: "Smiles treated" },
  { end: 6, label: "Specialist practitioners" },
];

export default function Overview() {
  return (
    <section className="section">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl mb-2">
                <CountUp end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}