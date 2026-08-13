"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CountUp({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counter = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value: end,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          const formatted =
            decimals > 0
              ? counter.value.toFixed(decimals)
              : Math.round(counter.value).toLocaleString();
          setDisplay(formatted);
        },
      });
    }, el);

    return () => ctx.revert();
  }, [end, decimals, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}