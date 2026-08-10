"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

const links = [
  { label: "Clinic", href: "/clinic" },
  { label: "Treatments", href: "/treatments" },
  { label: "Team", href: "/team" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="font-display text-xl">
          Lucent
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book"
          className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm text-accent-foreground hover:opacity-90 transition-opacity"
        >
          Book Now
        </Link>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-px bg-foreground mb-1.5" />
          <span className="block w-6 h-px bg-foreground" />
        </button>
      </Container>

      {open && (
        <nav className="md:hidden border-t border-border">
          <Container className="flex flex-col gap-4 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm text-accent-foreground"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}