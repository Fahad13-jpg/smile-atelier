import { notFound } from "next/navigation";
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

  return (
    <main>
      <PageHero eyebrow={member.role} title={member.name} />
      <section className="section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <p className="text-foreground-muted text-lg leading-relaxed">{member.longBio}</p>
          </div>
        </Container>
      </section>
      <BookingCTA />
    </main>
  );
}