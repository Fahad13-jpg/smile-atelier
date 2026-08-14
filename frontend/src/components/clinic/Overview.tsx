import Container from "@/components/layout/Container";
import CountUp from "@/components/ui/CountUp";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

const reasons = [
  {
    num: "01",
    title: "Central Location",
    desc: "Conveniently situated with private parking and excellent transit access — designed for effortless visits.",
  },
  {
    num: "02",
    title: "Full Dental Scope",
    desc: "From preventive care to complex restorative work, all under one roof with a unified treatment philosophy.",
  },
  {
    num: "03",
    title: "Modern Technology",
    desc: "Digital workflows, 3D imaging, and precision tools that make diagnosis clearer and treatment more predictable.",
  },
  {
    num: "04",
    title: "Controlled Pace",
    desc: "Unhurried appointments with time built in for questions, comfort, and genuine conversation.",
  },
];

const stats = [
  { end: 12, suffix: "+", label: "Years of practice" },
  { end: 4.9, decimals: 1, label: "Patient satisfaction" },
  { end: 3200, suffix: "+", label: "Patients cared for" },
  { end: 6, label: "Specialist clinicians" },
];

export default function Overview() {
  return (
    <section className="section" aria-labelledby="overview-heading">
      <Container>
        <RevealOnScroll>
          <div className="editorial-grid gap-y-12 mb-16 md:mb-24">
            <div className="md-col-6">
              <p className="type-caption text-foreground-muted mb-6">03 — Overview</p>
              <h2 id="overview-heading" className="type-display-m">
                Why patients choose Lucent.
              </h2>
            </div>
          </div>
        </RevealOnScroll>

        <div className="space-y-0 border-t border-border">
          {reasons.map((item, i) => (
            <RevealOnScroll key={item.num} delay={i * 0.05}>
              <article className="editorial-grid gap-y-4 py-10 md:py-14 border-b border-border group hover:bg-surface-elevated/50 transition-colors px-2 -mx-2">
                <div className="md-col-1">
                  <span className="type-label text-accent">{item.num}</span>
                </div>
                <div className="md-col-4">
                  <h3 className="type-heading-m group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="md-col-6 md-col-start-6">
                  <p className="type-body-m text-foreground-muted max-w-lg">{item.desc}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-20 md:mt-28 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="type-display-m text-accent mb-2">
                  <CountUp end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p className="type-body-s text-foreground-muted">{stat.label}</p>
                <p className="type-caption text-foreground-muted/60 mt-1">Demo data</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
