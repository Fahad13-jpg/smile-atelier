import Image from "next/image";
import Container from "@/components/layout/Container";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import ImageReveal from "@/components/motion/ImageReveal";
import { images } from "@/lib/images";

const pillars = [
  { label: "Precision", desc: "Every procedure planned with meticulous detail." },
  { label: "Comfort", desc: "An environment designed to ease anxiety." },
  { label: "Prevention", desc: "Proactive care that protects long-term health." },
  { label: "Aesthetics", desc: "Results that look natural, never overdone." },
];

export default function ClinicIntro() {
  return (
    <section className="section-lg relative" aria-labelledby="intro-heading">
      <Container>
        <RevealOnScroll>
          <div className="editorial-grid items-end gap-y-12">
            <div className="md-col-7">
              <p className="type-caption text-foreground-muted mb-6">01 — Philosophy</p>
              <h2 id="intro-heading" className="type-display-l max-w-4xl">
                Modern dentistry should feel less clinical and more personal.
              </h2>
            </div>
            <div className="md-col-5 md-col-start-8">
              <p className="type-body-l text-foreground-muted">
                At Lucent, every visit begins with listening. We combine advanced
                clinical techniques with a calm, considered environment — because
                exceptional care should feel as good as it looks.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-16 md:mt-24 editorial-grid gap-y-12 items-start">
          <div className="md-col-5 relative z-10">
            <RevealOnScroll delay={0.1}>
              <ul className="space-y-8 border-t border-border pt-8">
                {pillars.map((item, i) => (
                  <li key={item.label} className="flex gap-6 items-start">
                    <span className="type-label text-accent shrink-0 pt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="type-heading-s mb-1">{item.label}</p>
                      <p className="type-body-s text-foreground-muted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          <div className="md-col-7 md-col-start-6 section-overlap">
            <ImageReveal className="aspect-[4/5] md:aspect-[5/6] relative">
              <Image
                src={images.intro}
                alt="Calm, light-filled dental studio interior"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
                data-reveal-inner
                priority
              />
            </ImageReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
