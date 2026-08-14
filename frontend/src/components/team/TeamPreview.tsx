import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { team } from "@/lib/team";

export default function TeamPreview() {
  return (
    <section className="section bg-surface-elevated">
      <Container>
        <SectionHeading eyebrow="05 — Team" title="Meet the people behind your care." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Link key={member.slug} href={`/team/${member.slug}`} className="group cursor-pointer block">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <p className="font-display text-lg group-hover:text-accent transition-colors">{member.name}</p>
              <p className="text-sm text-foreground-muted">{member.role}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}