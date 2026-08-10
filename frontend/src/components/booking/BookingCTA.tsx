import Container from "@/components/layout/Container";

export default function BookingCTA() {
  return (
    <section className="section bg-inverse-background text-inverse-foreground">
      <Container className="text-center">
        <h2 className="font-display text-3xl md:text-5xl max-w-2xl mx-auto leading-tight">
          Your smile deserves this kind of care.
        </h2>

        <a
          href="/book"
          className="mt-8 inline-flex items-center rounded-full bg-accent px-8 py-4 text-sm text-accent-foreground"
        >
          Book your consultation
        </a>
      </Container>
    </section>
  );
}