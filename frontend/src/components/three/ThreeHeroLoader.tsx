"use client";

import dynamic from "next/dynamic";

const ThreeHero = dynamic(() => import("./ThreeHero"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-full rounded-2xl animate-pulse"
      style={{
        background: "radial-gradient(circle at center, #3a2f1f 0%, #14120F 70%)",
      }}
    />
  ),
});

export default function ThreeHeroLoader() {
  return <ThreeHero />;
}