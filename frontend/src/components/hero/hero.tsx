import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="section bg-inverse-background text-inverse-foreground">
      <Container>
        <p className="text-sm uppercase tracking-widest opacity-60 mb-6">
          01 — Dental Care
        </p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
          Precision care, quietly extraordinary.
        </h1>
        <p className="mt-8 max-w-lg opacity-70">
          A modern dental studio built around calm precision, thoughtful
          detail, and the confidence of a great smile.
        </p>
        <a
          href="/book"
          className="mt-10 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground w-fit"
        >
          Book a consultation
        </a>
      </Container>
    </section>
  );
}