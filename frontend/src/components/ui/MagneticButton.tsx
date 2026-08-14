"use client";

import { useRef, useState, useCallback, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function MagneticButton({
  href,
  children,
  className = "",
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * 0.15);
      y.set((e.clientY - cy) * 0.15);
    },
    [x, y]
  );

  const onLeave = useCallback(() => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  const baseClass =
    variant === "primary"
      ? "btn-primary"
      : "btn-secondary";

  return (
    <motion.span
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <Link
        ref={ref}
        href={href}
        className={`${baseClass} ${className}`}
      >
        <span>{children}</span>
        {variant === "primary" && (
          <motion.span
            aria-hidden
            animate={{ x: isHovering ? 3 : 0 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        )}
      </Link>
    </motion.span>
  );
}
