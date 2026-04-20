import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add basic lighting so wireframe is visible if camera is too far or material is dark
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Digital Brain core - Explodable geometry
const geometry = new THREE.IcosahedronGeometry(4, 3);
// Use MeshPhongMaterial instead of MeshBasicMaterial for better visibility with lights
const material = new THREE.MeshPhongMaterial({ color: 0x3b82f6, wireframe: true, transparent: true });
const brain = new THREE.Mesh(geometry, material);
scene.add(brain);

camera.position.z = 12;

// Export as a function that can be called once the DOM is ready
export function initHeroBrain() {
    const container = document.getElementById('hero-scene-container');
    if (!container) return;

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    
    // ... rest of the code ...
}

// Animation logic: "Drift Apart"
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1
  }
});

tl.to(brain.rotation, { y: Math.PI * 2, duration: 1 })
  .to(brain.scale, { x: 2, y: 2, z: 2, duration: 1 }, 0)
  .to(material, { opacity: 0.3, duration: 0.5 }, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
