import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/layout/Container";
import BookingCTA from "@/components/booking/BookingCTA";
import { team } from "@/lib/team";

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="05 — Team"
        title="Meet the people behind your care."
        description="A small, specialist team — not a rotating cast. You'll see a familiar face at every visit."
      />
      <section className="section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member) => (
              <Link key={member.slug} href={`/team/${member.slug}`} className="group cursor-pointer block">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <p className="font-display text-xl group-hover:text-accent transition-colors">{member.name}</p>
                <p className="text-sm text-accent mb-3">{member.role}</p>
                <p className="text-sm text-foreground-muted">{member.bio}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <BookingCTA />
    </main>
  );
}