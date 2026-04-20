import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useScroll, ScrollControls } from '@react-three/drei';
import * as THREE from 'three';

function BrainParticles() {
  const group = useRef<THREE.Group>(null!);
  const scroll = useScroll(); // React-Three-Fiber scroll hook

  // Procedural "Human Brain" shape using 100+ spheres to form lobes
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 150; i++) {
        // Simple brain-like anatomical distribution
        const x = (Math.random() - 0.5) * 4;
        const y = Math.sin(x) * 2 + (Math.random() - 0.5) * 2;
        const z = (Math.random() - 0.5) * 4;
        temp.push({ position: [x, y, z] });
    }
    return temp;
  }, []);

  useFrame(() => {
    if (!group.current || !scroll) return;
    
    // Scroll interaction: Explode based on scroll progress
    const s = scroll.offset; 
    group.current.children.forEach((mesh, i) => {
        const p = particles[i].position;
        // Explode: push particles out as user scrolls further
        mesh.position.set(
            p[0] * (1 + s * 5),
            p[1] * (1 + s * 5),
            p[2] * (1 + s * 5)
        );
        mesh.rotation.y = s * Math.PI * 2;
    });
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh key={i} position={new THREE.Vector3(...p.position)}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshPhongMaterial color="#94a3b8" />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="h-[300vh] w-full bg-[#0f172a] absolute top-0 left-0 -z-10">
      <div className="h-screen w-full sticky top-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#cbd5e1" />
          <ScrollControls pages={3} damping={0.2}>
            <BrainParticles />
          </ScrollControls>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
}
