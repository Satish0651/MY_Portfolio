"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Points, PointMaterial, Preload } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

function Globe() {
  const ref = useRef<THREE.LineSegments>(null);
  const reduced = usePrefersReducedMotion();

  const geometry = useMemo(() => {
    const sphere = new THREE.SphereGeometry(1.6, 36, 24);
    return new THREE.WireframeGeometry(sphere);
  }, []);

  useFrame((_, delta) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y += delta * 0.12;
    ref.current.rotation.x += delta * 0.02;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
      <lineSegments ref={ref} geometry={geometry}>
        <lineBasicMaterial color={"#22D3EE"} transparent opacity={0.45} />
      </lineSegments>
      <mesh>
        <sphereGeometry args={[1.59, 48, 32]} />
        <meshBasicMaterial color={"#0B0F1A"} transparent opacity={0.55} />
      </mesh>
    </Float>
  );
}

function ParticleField({ count = 1800 }: { count?: number }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={"#8B5CF6"}
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const reduced = usePrefersReducedMotion();
  useFrame((state) => {
    if (reduced) return;
    const x = state.pointer.x * 0.5;
    const y = state.pointer.y * 0.3;
    camera.position.x += (x - camera.position.x) * 0.04;
    camera.position.y += (y - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color={"#3B82F6"} />
        <pointLight position={[-5, -3, -5]} intensity={0.4} color={"#8B5CF6"} />
        <Globe />
        <ParticleField />
        <CameraRig />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
