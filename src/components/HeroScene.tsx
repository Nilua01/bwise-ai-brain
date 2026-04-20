import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Brain() {
  return (
    <mesh>
      <icosahedronGeometry args={[4, 3]} />
      <meshPhongMaterial color="#3b82f6" wireframe />
    </mesh>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return <div className="h-screen w-full bg-black fixed top-0 left-0 -z-10"></div>;

  return (
    <div className="h-screen w-full bg-black fixed top-0 left-0 -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <Brain />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
