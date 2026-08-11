"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Consultation", desc: "We start by listening — understanding your concerns, goals, and history." },
  { title: "Plan", desc: "A clear, personalized treatment plan, explained in plain language." },
  { title: "Treatment", desc: "Precise, unhurried care delivered by the same specialist team every time." },
  { title: "Aftercare", desc: "Ongoing support to make sure results last well beyond the visit." },
];

export default function StickyStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      panelRefs.current.forEach((panel) => {
        if (!panel) return;

        gsap.fromTo(
          panel,
          { opacity: 0.25 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top 60%",
              end: "bottom 40%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="md:sticky md:top-24 h-fit">
          <div className="aspect-square bg-border rounded-2xl flex items-center justify-center">
            <p className="text-foreground-muted text-sm">Visual placeholder</p>
          </div>
        </div>

        <div className="flex flex-col gap-32 py-12">
          {steps.map((step, i) => (
            <div
              key={step.title}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
            >
              <p className="text-sm text-foreground-muted mb-3">0{i + 1}</p>
              <h3 className="font-display text-3xl mb-4">{step.title}</h3>
              <p className="text-foreground-muted max-w-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}