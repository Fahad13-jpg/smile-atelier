"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ArrowLink({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const content = (
    <motion.span
      className={`inline-flex items-center gap-3 group ${className}`}
      whileHover="hover"
    >
      <span>{children}</span>
      <motion.span
        variants={{ hover: { x: 4 } }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        aria-hidden
        className="text-accent"
      >
        →
      </motion.span>
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} className="link-underline">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="link-underline">
      {content}
    </Link>
  );
}
