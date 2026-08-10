import Container from "@/components/layout/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="pt-40 pb-16 bg-inverse-background text-inverse-foreground">
      <Container>
        <p className="text-sm uppercase tracking-widest opacity-60 mb-6">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-2xl">{title}</h1>
        {description && (
          <p className="mt-6 max-w-lg opacity-70">{description}</p>
        )}
      </Container>
    </section>
  );
}