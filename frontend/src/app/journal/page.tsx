import PageHero from "@/components/ui/PageHero";
import Container from "@/components/layout/Container";

const articles = [
  { title: "What to expect at your first visit", category: "Patient Guide" },
  { title: "Aligners vs. braces: how to choose", category: "Treatments" },
  { title: "Why routine checkups matter more than you think", category: "Prevention" },
];

export default function JournalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Journal"
        title="Notes on care, comfort, and confidence."
        description="Short, honest reads on dental care — no jargon, no scare tactics."
      />
      <section className="section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.title} className="border-t border-border pt-6">
                <p className="text-xs uppercase tracking-widest text-foreground-muted mb-3">
                  {article.category}
                </p>
                <h3 className="font-display text-lg leading-snug">{article.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}