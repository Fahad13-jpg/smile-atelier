import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const images = [
  { src: "/images/space-1.jpg", alt: "Treatment room with natural window light" },
  { src: "/images/space-2.jpg", alt: "Lucent Dental Studio treatment room" },
  { src: "/images/space-3.jpg", alt: "Clinic interior detail" },
];

export default function TheSpace() {
  return (
    <section className="section bg-surface-elevated">
      <Container>
        <SectionHeading eyebrow="03 — The Space" title="A studio designed to put you at ease." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`relative aspect-[4/5] rounded-2xl overflow-hidden ${
                i === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}