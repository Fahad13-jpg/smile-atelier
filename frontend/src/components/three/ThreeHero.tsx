"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function ToothObject({ reduceMotion }: { reduceMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current && !reduceMotion) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
    if (lightRef.current) {
      const x = (state.pointer.x * viewport.width) / 2;
      const y = (state.pointer.y * viewport.height) / 2;
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, x, 0.06);
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, y, 0.06);
    }
  });

  return (
    <>
      <pointLight ref={lightRef} position={[0, 0, 2]} intensity={8} color="#B8863E" distance={6} />
      <RoundedBox ref={meshRef} args={[1.4, 1.7, 1.4]} radius={0.35} smoothness={8}>
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.6}
          roughness={0.05}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.02}
          color="#F7F3EE"
        />
      </RoundedBox>
    </>
  );
}

function Fallback() {
  return (
    <div
      className="w-full h-full rounded-2xl"
      style={{
        background: "radial-gradient(circle at center, #3a2f1f 0%, #14120F 70%)",
      }}
    />
  );
}

export default function ThreeHero() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setSupported(false);
    } catch {
      setSupported(false);
    }
  }, []);

  if (!supported) return <Fallback />;

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.3} />
      <Environment preset="city" />
      <ToothObject reduceMotion={reduceMotion} />
    </Canvas>
  );
}