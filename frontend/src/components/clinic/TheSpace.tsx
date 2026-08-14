"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { images } from "@/lib/images";
import { motion, AnimatePresence } from "motion/react";
import { duration, ease } from "@/lib/motion";

const topics = [
  {
    id: "welcome",
    title: "Welcome",
    desc: "A reception designed to feel like a private studio — warm light, natural materials, and unhurried attention from the moment you arrive.",
    image: images.space.welcome,
    alt: "Welcoming reception area with natural light",
  },
  {
    id: "comfort",
    title: "Comfort",
    desc: "Treatment rooms built for calm — soft acoustics, adjustable lighting, and amenities that make even longer appointments feel manageable.",
    image: images.space.comfort,
    alt: "Comfortable treatment room with soft lighting",
  },
  {
    id: "precision",
    title: "Precision",
    desc: "Every instrument, every surface, every workflow is considered for accuracy. Clinical excellence begins with the environment itself.",
    image: images.space.precision,
    alt: "Precision dental instruments in clinical setting",
  },
  {
    id: "technology",
    title: "Technology",
    desc: "Digital scanning, 3D imaging, and chairside diagnostics — advanced tools that make treatment faster, more predictable, and less invasive.",
    image: images.space.technology,
    alt: "Modern dental technology and digital imaging",
  },
];

export default function TheSpace() {
  const [active, setActive] = useState(0);
  const topic = topics[active];

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % topics.length);
  }, []);

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + topics.length) % topics.length);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <section className="section bg-surface-elevated grain" aria-labelledby="space-heading">
      <Container>
        <div className="editorial-grid gap-y-10 mb-12 md:mb-16">
          <div className="md-col-6">
            <p className="type-caption text-foreground-muted mb-6">02 — The Space</p>
            <h2 id="space-heading" className="type-display-m">
              An environment designed with intention.
            </h2>
          </div>
          <div className="md-col-5 md-col-start-8 flex items-end">
            <p className="type-body-m text-foreground-muted">
              Like a contemporary architecture studio — every detail serves both
              function and feeling.
            </p>
          </div>
        </div>

        <div className="editorial-grid gap-y-8 items-stretch">
          <div className="md-col-7 relative aspect-[4/3] md:aspect-auto md:min-h-[520px] overflow-hidden bg-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: duration.slow, ease: ease.smooth as unknown as number[] }}
                className="absolute inset-0"
              >
                <Image
                  src={topic.image}
                  alt={topic.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="md-col-5 flex flex-col justify-between py-2 md:py-6">
            <div>
              <div className="flex gap-2 mb-8" role="tablist" aria-label="Space topics">
                {topics.map((t, i) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={i === active}
                    aria-controls={`space-panel-${t.id}`}
                    onClick={() => setActive(i)}
                    className={`type-label px-3 py-2 border transition-colors ${
                      i === active
                        ? "border-foreground text-foreground"
                        : "border-border text-foreground-muted hover:border-foreground/30"
                    }`}
                  >
                    {t.title}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={topic.id}
                  id={`space-panel-${topic.id}`}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: duration.standard }}
                >
                  <h3 className="type-heading-l mb-4">{topic.title}</h3>
                  <p className="type-body-l text-foreground-muted max-w-md">{topic.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
              <div className="flex gap-1" aria-hidden>
                {topics.map((_, i) => (
                  <span
                    key={i}
                    className={`block h-px transition-all duration-500 ${
                      i === active ? "w-8 bg-accent" : "w-4 bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous topic"
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next topic"
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
