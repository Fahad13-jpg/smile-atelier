/** Centralized motion tokens — use these instead of scattered values */
export const ease = {
  out: "cubic-bezier(0.22, 1, 0.36, 1)",
  inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

export const duration = {
  instant: 0.15,
  fast: 0.25,
  standard: 0.5,
  slow: 0.8,
  cinematic: 1.2,
} as const;

export const gsapEase = {
  out: "power3.out",
  inOut: "power2.inOut",
  smooth: "power4.out",
} as const;

export const stagger = {
  tight: 0.06,
  standard: 0.1,
  relaxed: 0.15,
} as const;
