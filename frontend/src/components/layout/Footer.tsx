import Link from "next/link";
import Container from "./Container";

const exploreLinks = [
  { label: "Clinic", href: "/clinic" },
  { label: "Treatments", href: "/treatments" },
  { label: "Team", href: "/team" },
  { label: "Journal", href: "/journal" },
];

export default function Footer() {
  return (
    <footer className="bg-inverse-background text-inverse-foreground grain relative">
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <p className="font-display text-2xl mb-4">Lucent</p>
            <p className="text-sm opacity-60 max-w-xs">
              Premium dental care, designed around you. A calm, precise
              studio built for confidence in every visit.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-sm font-medium mb-4 opacity-80">Explore</p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-medium mb-4 opacity-80">Contact</p>
            <ul className="space-y-3 text-sm opacity-60">
              <li>
                <a href="mailto:hello@lucentdental.demo" className="hover:opacity-100 hover:text-accent transition-all">
                  hello@lucentdental.demo
                </a>
              </li>
              <li>
                <Link href="/book" className="hover:opacity-100 hover:text-accent transition-all">
                  Book a consultation →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8">
          <p className="text-xs opacity-40">
            © 2026 Lucent Dental Studio — portfolio demo project.
          </p>
          <p className="text-xs opacity-40">
            Design & development by [Your Name]
          </p>
        </div>
      </Container>
    </footer>
  );
}