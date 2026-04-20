import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Brain = () => (
  <mesh>
    <icosahedronGeometry args={[4, 3]} />
    <meshPhongMaterial color="#3b82f6" wireframe />
  </mesh>
);

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return <div className="h-screen w-full bg-black"></div>;

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Brain />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
