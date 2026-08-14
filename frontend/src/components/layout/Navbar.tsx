"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "./Container";
import { duration, ease } from "@/lib/motion";

const links = [
  { label: "Clinic", href: "/clinic" },
  { label: "Treatments", href: "/treatments" },
  { label: "Team", href: "/team" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  const transparent = isHome && !scrolled && !open;
  const textClass = transparent
    ? "text-inverse-foreground"
    : "text-foreground";
  const mutedClass = transparent
    ? "text-inverse-foreground/60"
    : "text-foreground-muted";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${textClass}`}
        style={{
          height: scrolled ? "var(--nav-height-compact)" : "var(--nav-height)",
          backgroundColor: transparent
            ? "transparent"
            : scrolled
              ? "rgba(245, 241, 234, 0.92)"
              : "rgba(245, 241, 234, 0.75)",
          backdropFilter: transparent ? "none" : "blur(16px)",
          borderBottom: transparent
            ? "1px solid transparent"
            : "1px solid var(--color-border-subtle)",
          transitionDuration: "var(--duration-standard)",
          transitionTimingFunction: "var(--ease-smooth)",
        }}
      >
        <Container className="h-full flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl md:text-2xl tracking-tight z-10"
            aria-label="Lucent Dental Studio — Home"
          >
            Lucent
          </Link>

          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2" aria-label="Main">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative type-body-s py-1 transition-colors ${
                    isActive ? textClass : `${mutedClass} hover:opacity-100`
                  }`}
                  style={!isActive ? { opacity: 0.85 } : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 z-10">
            <Link
              href="/book"
              className={`hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-xs ${
                transparent ? "!bg-accent" : ""
              }`}
            >
              Book Appointment
            </Link>

            <button
              type="button"
              className="lg:hidden relative w-8 h-8 flex flex-col items-end justify-center gap-1.5"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(!open)}
            >
              <span
                className={`block h-px transition-all ${textClass}`}
                style={{
                  width: open ? "1.5rem" : "1.25rem",
                  backgroundColor: "currentColor",
                  transform: open ? "rotate(45deg) translateY(5px)" : "none",
                }}
              />
              <span
                className={`block h-px w-6 transition-opacity ${textClass}`}
                style={{
                  backgroundColor: "currentColor",
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className={`block h-px transition-all ${textClass}`}
                style={{
                  width: open ? "1.5rem" : "1rem",
                  backgroundColor: "currentColor",
                  transform: open ? "rotate(-45deg) translateY(-5px)" : "none",
                }}
              />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.standard, ease: ease.out as unknown as number[] }}
            className="fixed inset-0 z-40 bg-inverse-background text-inverse-foreground grain lg:hidden"
          >
            <Container className="h-full flex flex-col justify-center pt-20 pb-12">
              <nav className="flex flex-col gap-2" aria-label="Mobile">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: duration.slow,
                      ease: ease.smooth as unknown as number[],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block type-display-m py-3 border-b border-white/10"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: duration.slow }}
                className="mt-12"
              >
                <Link href="/book" className="btn-primary w-full justify-center" onClick={closeMenu}>
                  Book Appointment
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.5 }}
                className="type-caption mt-auto pt-8 text-inverse-muted"
              >
                Premium dental care, designed around you.
              </motion.p>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
