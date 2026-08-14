"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function PorcelainForm({ reduceMotion }: { reduceMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();
  const targetRot = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (groupRef.current && !reduceMotion) {
      targetRot.current.y = state.pointer.x * 0.25;
      targetRot.current.x = state.pointer.y * 0.12;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRot.current.y,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRot.current.x,
        0.04
      );
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.06;
    }

    if (lightRef.current && !reduceMotion) {
      const x = state.pointer.x * viewport.width * 0.3;
      const y = state.pointer.y * viewport.height * 0.3;
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, x, 0.05);
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, y, 0.05);
    }
  });

  return (
    <Float speed={reduceMotion ? 0 : 0.6} rotationIntensity={0.05} floatIntensity={0.15}>
      <group ref={groupRef}>
        <mesh castShadow receiveShadow>
          <capsuleGeometry args={[0.55, 1.1, 16, 32]} />
          <MeshTransmissionMaterial
            backside
            samples={8}
            thickness={0.8}
            roughness={0.08}
            transmission={0.95}
            ior={1.45}
            chromaticAberration={0.015}
            color="#F5F1EA"
            attenuationColor="#C4A574"
            attenuationDistance={2}
          />
        </mesh>
        <mesh position={[0, -0.95, 0]} rotation={[0, 0, 0]}>
          <coneGeometry args={[0.35, 0.5, 16]} />
          <meshStandardMaterial color="#E8E0D4" roughness={0.15} metalness={0.05} />
        </mesh>
      </group>
      <pointLight ref={lightRef} position={[1, 1, 2]} intensity={12} color="#C4A574" distance={8} />
    </Float>
  );
}

function Fallback() {
  return (
    <div
      className="w-full h-full"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, rgba(154,115,66,0.15) 0%, transparent 60%), linear-gradient(180deg, #1a1816 0%, #121110 100%)",
      }}
      role="img"
      aria-label="Abstract porcelain dental form"
    />
  );
}

export default function ThreeHero() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setSupported(false);
    } catch {
      setSupported(false);
    }

    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!supported) return <Fallback />;

  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 4, 5]} intensity={0.6} color="#F5F1EA" />
      <Environment preset="studio" />
      <PorcelainForm reduceMotion={reduceMotion} />
    </Canvas>
  );
}
