import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Set up the scene container explicitly
const container = document.getElementById('scene-container');
container.style.display = 'block';
container.style.width = '100vw';
container.style.height = '100vh';
container.style.position = 'fixed';
container.style.top = '0';
container.style.left = '0';
container.style.zIndex = '0';
container.appendChild(renderer.domElement);

// Digital Brain core - Explodable geometry
const geometry = new THREE.IcosahedronGeometry(4, 3);
const material = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true, transparent: true });
const brain = new THREE.Mesh(geometry, material);
scene.add(brain);

camera.position.z = 12;

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
