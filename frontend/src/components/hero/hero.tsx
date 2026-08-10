"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Container from "@/components/layout/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import DentalMotif from "@/components/hero/DentalMotif";

export default function Hero() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [eyebrowRef.current, headlineRef.current, bodyRef.current, ctaRef.current];
    if (els.some((el) => !el)) return;

    const ctx = gsap.context(() => {
      gsap.set(eyebrowRef.current, { opacity: 0, y: 12 });
      gsap.set(headlineRef.current, { opacity: 0, y: 24 });
      gsap.set(bodyRef.current, { opacity: 0, y: 16 });
      gsap.set(ctaRef.current, { opacity: 0, y: 12 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(eyebrowRef.current, { opacity: 0.6, y: 0, duration: 0.6 })
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.3")
        .to(bodyRef.current, { opacity: 0.7, y: 0, duration: 0.7 }, "-=0.5")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
    });

    return () => ctx.revert();
  }, []);

  return (
  <section className="relative grain bg-inverse-background text-inverse-foreground pt-32 md:pt-40 pb-16">      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-8">          <div>
            <p ref={eyebrowRef} className="text-sm uppercase tracking-widest mb-6">
              01 — Dental Care
            </p>
            <h1 ref={headlineRef} className="font-display text-5xl md:text-7xl leading-[1.05]">
              Precision care, quietly extraordinary.
            </h1>
            <p ref={bodyRef} className="mt-8 max-w-lg">
              A modern dental studio built around calm precision, thoughtful
              detail, and the confidence of a great smile.
            </p>
            <div ref={ctaRef} className="mt-10 w-fit">
              <MagneticButton
                href="/book"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground"
              >
                Book a consultation
              </MagneticButton>
            </div>
          </div>

          <div className="relative h-105 w-full flex items-center justify-center">
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-40"
              style={{
                background: "radial-gradient(circle at 50% 50%, #B8863E 0%, transparent 65%)",
              }}
            />
            <div className="absolute w-56 h-64 opacity-20 scale-110 blur-[2px]">
              <DentalMotif />
            </div>
            <div className="w-64 h-72">
              <DentalMotif />
            </div>
          </div>
        </div>
      </Container>

      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #F7F3EE)",
        }}
      />
    </section>
  );
}