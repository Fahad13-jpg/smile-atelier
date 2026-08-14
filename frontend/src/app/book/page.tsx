import PageHero from "@/components/ui/PageHero";
import Container from "@/components/layout/Container";
import BookForm from "@/components/booking/BookForm";

export const metadata = {
  title: "Book a Visit | Lucent Dental Studio",
  description: "Request an appointment at Lucent Dental Studio.",
};

export default function BookPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book a Visit"
        title="Ready when you are."
        description="Tell us a little about what you're looking for, and we'll follow up to confirm a time."
      />
      <section className="section">
        <Container>
          <BookForm />
        </Container>
      </section>
    </main>
  );
}