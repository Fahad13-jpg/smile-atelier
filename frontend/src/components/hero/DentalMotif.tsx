"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DentalMotif() {
  const pathRef = useRef<SVGPathElement>(null);
  const groupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const group = groupRef.current;
    if (!path || !group) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(path, { strokeDashoffset: 0, duration: 2.2 }).to(
      group,
      { y: -12, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg viewBox="0 0 300 340" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="toothGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7F3EE" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B8863E" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <g ref={groupRef}>
        <path
          ref={pathRef}
          d="M150 20 C 90 20, 45 55, 45 105 C 45 150, 60 190, 68 230 C 74 258, 80 300, 100 315 C 112 324, 120 300, 128 265 C 132 248, 138 235, 150 235 C 162 235, 168 248, 172 265 C 180 300, 188 324, 200 315 C 220 300, 226 258, 232 230 C 240 190, 255 150, 255 105 C 255 55, 210 20, 150 20 Z"
          stroke="url(#toothGradient)"
          strokeWidth="2"
          fill="url(#toothGradient)"
          fillOpacity="0.08"
        />
      </g>
    </svg>
  );
}