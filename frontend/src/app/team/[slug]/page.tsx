import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/layout/Container";
import BookingCTA from "@/components/booking/BookingCTA";
import { team, getTeamMember } from "@/lib/team";

export function generateStaticParams() {
  return team.map((t) => ({ slug: t.slug }));
}

export default function TeamDetailPage({ params }: { params: { slug: string } }) {
  const member = getTeamMember(params.slug);
  if (!member) notFound();

  const others = team.filter((t) => t.slug !== member.slug);

  return (
    <main>
      <PageHero eyebrow={member.role} title={member.name} />
      <section className="section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="text-foreground-muted text-lg leading-relaxed mb-8">{member.longBio}</p>
              <Link
                href="/book"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Book with {member.name.split(" ")[1]}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-surface-elevated">
        <Container>
          <p className="text-xs uppercase tracking-widest text-foreground-muted mb-8">Rest of the team</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((t) => (
              <Link key={t.slug} href={`/team/${t.slug}`} className="group flex items-center gap-4 cursor-pointer">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image src={t.image} alt={t.name} fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <p className="font-display group-hover:text-accent transition-colors">{t.name}</p>
                  <p className="text-sm text-foreground-muted">{t.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <BookingCTA />
    </main>
  );
}