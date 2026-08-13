import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/layout/Container";

const articles = [
  {
    title: "What to expect at your first visit",
    category: "Patient Guide",
    excerpt: "A calm, honest walkthrough of your first consultation — what we ask, what we check, and what happens next.",
    image: "/images/journal-1.jpg",
    featured: true,
  },
  {
    title: "Aligners vs. braces: how to choose",
    category: "Treatments",
    excerpt: "Two paths to the same result — here's how to think about which fits your life.",
    image: "/images/journal-2.jpg",
  },
  {
    title: "Why routine checkups matter more than you think",
    category: "Prevention",
    excerpt: "The quiet value of consistency — and what we catch early that you'd never notice yourself.",
    image: "/images/journal-3.jpg",
  },
];

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <main>
      <PageHero
        eyebrow="Journal"
        title="Notes on care, comfort, and confidence."
        description="Short, honest reads on dental care — no jargon, no scare tactics."
      />

      <section className="section pt-0">
        <Container>
          <div className="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center cursor-pointer mb-24">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-accent mb-4">
                Featured — {featured.category}
              </p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4 group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-foreground-muted max-w-md">{featured.excerpt}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {rest.map((article) => (
              <div key={article.title} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-foreground-muted mb-3">
                  {article.category}
                </p>
                <h3 className="font-display text-xl leading-snug mb-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-foreground-muted">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}