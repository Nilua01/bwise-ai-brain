import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Clinical, wireframe-style anatomical model
function ClinicalBrain() {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    // Subtle, slow rotation for that clinical, steady feel
    mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
  });

  return (
    <mesh ref={mesh}>
      {/* Torus knot for that intricate interlaced neural network vibe */}
      <torusKnotGeometry args={[3, 0.4, 256, 32]} />
      <meshPhongMaterial 
        color="#94a3b8" 
        wireframe 
        transparent 
        opacity={0.6}
        emissive="#1e293b"
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="h-screen w-full bg-[#0f172a] fixed top-0 left-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#cbd5e1" />
        <ClinicalBrain />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
