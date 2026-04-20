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
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Brain />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
