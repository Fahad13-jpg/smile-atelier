"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { gsapEase } from "@/lib/motion";

type AnimatedTextProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  delay?: number;
  split?: "lines" | "words";
  trigger?: boolean;
};

export default function AnimatedText({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  split = "lines",
  trigger = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !trigger) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      el.style.opacity = "1";
      return;
    }

    const text = el.textContent ?? "";
    el.innerHTML = "";

    const units =
      split === "lines"
        ? text.split("\n").filter(Boolean)
        : text.split(" ");

    const wrappers: HTMLSpanElement[] = [];

    units.forEach((unit, i) => {
      const lineWrap = document.createElement("span");
      lineWrap.style.display = "block";
      lineWrap.style.overflow = "hidden";

      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.textContent = split === "lines" ? unit : unit + (i < units.length - 1 ? " " : "");
      inner.style.opacity = "0";
      inner.style.transform = "translateY(110%)";

      lineWrap.appendChild(inner);
      el.appendChild(lineWrap);
      if (split === "lines" && i < units.length - 1) {
        el.appendChild(document.createElement("br"));
      }
      wrappers.push(inner);
    });

    const ctx = gsap.context(() => {
      gsap.to(wrappers, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: split === "lines" ? 0.12 : 0.04,
        delay,
        ease: gsapEase.smooth,
      });
    }, el);

    return () => ctx.revert();
  }, [children, delay, split, trigger]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
