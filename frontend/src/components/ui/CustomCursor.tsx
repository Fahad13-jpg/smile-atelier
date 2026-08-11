"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || reduceMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // Establish centering offset via GSAP itself, so later x/y sets don't wipe it out
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const ringPos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY });

      gsap.to(ringPos, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
        onUpdate: () => {
          gsap.set(ring, { x: ringPos.x, y: ringPos.y });
        },
      });
    };

    const onEnterInteractive = () => {
      gsap.to(ring, { scale: 1.8, duration: 0.3, ease: "power2.out" });
    };

    const onLeaveInteractive = () => {
      gsap.to(ring, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMove);

    const interactiveEls = document.querySelectorAll("a, button");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
      gsap.killTweensOf(ringPos);
      gsap.killTweensOf(ring);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999]"
        style={{ backgroundColor: "#B8863E" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
        style={{ border: "1px solid #B8863E" }}
      />
    </>
  );
}