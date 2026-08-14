"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Container from "@/components/layout/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import ThreeHeroLoader from "@/components/three/ThreeHeroLoader";
import AnimatedText from "@/components/motion/AnimatedText";
import { gsapEase } from "@/lib/motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = [eyebrowRef.current, bodyRef.current, ctaRef.current, visualRef.current, scrollRef.current];
    if (els.some((el) => !el)) return;

    if (reduceMotion) {
      els.forEach((el) => {
        if (el) gsap.set(el, { opacity: 1, y: 0 });
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(eyebrowRef.current, { opacity: 0, y: 16 });
      gsap.set(bodyRef.current, { opacity: 0, y: 20 });
      gsap.set(ctaRef.current, { opacity: 0, y: 16 });
      gsap.set(visualRef.current, { opacity: 0, scale: 0.96 });
      gsap.set(scrollRef.current, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: gsapEase.smooth } });
      tl.to(eyebrowRef.current, { opacity: 0.7, y: 0, duration: 0.7 }, 0.3)
        .to(bodyRef.current, { opacity: 0.75, y: 0, duration: 0.8 }, 1.4)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, 1.7)
        .to(visualRef.current, { opacity: 1, scale: 1, duration: 1.2 }, 0.8)
        .to(scrollRef.current, { opacity: 0.5, duration: 0.6 }, 2.2);
    }, sectionRef);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      ref={sectionRef}
      className="relative grain bg-inverse-background text-inverse-foreground min-h-[100svh] flex flex-col"
      aria-label="Hero"
    >
      <div className="flex-1 flex items-center pt-[var(--nav-height)] pb-16 md:pb-24">
        <Container className="w-full">
          <div className="editorial-grid items-center gap-y-12 lg:gap-y-0">
            <div className="md-col-6 lg:col-span-5 relative z-10">
              <p ref={eyebrowRef} className="type-caption text-inverse-muted mb-8 md:mb-10">
                Lucent Dental Studio
              </p>

              <AnimatedText
                as="h1"
                className="type-display-xl mb-8 md:mb-10"
                delay={0.5}
                trigger={ready}
              >
                {`Precision dentistry.\nDesigned around you.`}
              </AnimatedText>

              <p ref={bodyRef} className="type-body-l text-inverse-muted max-w-md mb-10 md:mb-12">
                A contemporary dental atelier where clinical precision meets
                calm, personal care — for smiles built to last.
              </p>

              <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
                <MagneticButton href="/book" variant="primary">
                  Book an Appointment
                </MagneticButton>
                <MagneticButton href="/clinic" variant="secondary">
                  Explore the Atelier
                </MagneticButton>
              </div>
            </div>

            <div
              ref={visualRef}
              className="md-col-6 md-col-start-7 lg:col-span-7 lg:col-start-6 relative h-[52vw] max-h-[520px] min-h-[320px] md:h-[480px] lg:h-[580px]"
            >
              <div
                className="absolute inset-0 -z-10 opacity-30 blur-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 40%, rgba(154,115,66,0.35) 0%, transparent 65%)",
                }}
              />
              <div className="absolute inset-0 rounded-sm overflow-hidden">
                <ThreeHeroLoader />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden
      >
        <span className="type-label text-inverse-muted">Scroll</span>
        <span className="block w-px h-10 bg-inverse-muted/40 animate-pulse" />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-background))",
        }}
      />
    </section>
  );
}
