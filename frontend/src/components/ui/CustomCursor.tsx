"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || reduceMotion) return;

    document.body.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const ringPos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      gsap.to(ringPos, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power2.out",
        overwrite: true,
        onUpdate: () => gsap.set(ring, { x: ringPos.x, y: ringPos.y }),
      });
    };

    const onEnter = () => gsap.to(ring, { scale: 1.6, duration: 0.25, ease: "power2.out" });
    const onLeave = () => gsap.to(ring, { scale: 1, duration: 0.25, ease: "power2.out" });

    window.addEventListener("mousemove", onMove);

    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [role='slider']").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    document.querySelectorAll("a, button, [role='slider']").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
      gsap.killTweensOf(ringPos);
      gsap.killTweensOf(ring);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ backgroundColor: "#F5F1EA" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ border: "1px solid #F5F1EA" }}
      />
    </>
  );
}
