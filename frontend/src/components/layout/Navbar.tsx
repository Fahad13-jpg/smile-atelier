"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "./Container";

const links = [
  { label: "Clinic", href: "/clinic" },
  { label: "Treatments", href: "/treatments" },
  { label: "Team", href: "/team" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      if (y > lastScrollY.current && y > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border transition-all duration-300"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        backgroundColor: scrolled ? "rgba(247,243,238,0.9)" : "rgba(247,243,238,0.6)",
        backdropFilter: "blur(12px)",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="font-display text-xl">
          Lucent
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm py-1 transition-colors ${
                  isActive ? "text-foreground" : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  />
                )}
              </Link>
            );
          })}
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

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border"
          >
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
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}