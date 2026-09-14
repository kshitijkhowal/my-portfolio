import React from 'react';
import { Sparkles, Float, Ring } from '@react-three/drei';
import * as THREE from 'three';
import { useThreeScene } from './useThreeScene';

export default function ThreeScene() {
  const sceneRef = useThreeScene();

  return (
    <group ref={sceneRef}>
      {/* Lights inside the scene */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
      <pointLight position={[-4, 3, 2]} color="#ff7a00" intensity={4} distance={10} />
      <pointLight position={[4, -3, 2]} color="#3ddc84" intensity={4} distance={10} />
      <spotLight position={[0, 8, 2]} intensity={2} angle={0.6} penumbra={1} color="#ffffff" />

      {/* Floating 3D Smartphone */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8} position={[-1.8, 0, 0]}>
        <group rotation={[0.2, 0.4, -0.1]}>
          {/* Phone Body */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.5, 3, 0.15]} />
            <meshStandardMaterial color="#222222" roughness={0.1} metalness={0.9} />
          </mesh>
          {/* Phone Screen with Glowing React Native atomic detail */}
          <mesh position={[0, 0, 0.08]} castShadow>
            <planeGeometry args={[1.4, 2.9]} />
            <meshStandardMaterial 
              color="#ff7a00" 
              emissive="#ff5500" 
              emissiveIntensity={0.6} 
              roughness={0.1} 
              metalness={0.1} 
            />
          </mesh>
          {/* Screen Content detail - App mock UI (Header) */}
          <mesh position={[0, 1.25, 0.085]}>
            <planeGeometry args={[1.2, 0.15]} />
            <meshBasicMaterial color="#ffffff" opacity={0.8} transparent />
          </mesh>
          {/* Screen Content detail - App mock UI (Main Card) */}
          <mesh position={[0, -0.2, 0.085]}>
            <planeGeometry args={[1.1, 1.3]} />
            <meshBasicMaterial color="#3ddc84" opacity={0.25} transparent />
          </mesh>
          {/* Home indicator bar */}
          <mesh position={[0, -1.35, 0.085]}>
            <planeGeometry args={[0.5, 0.04]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
      </Float>

      {/* Floating Apple Vision Pro Headset */}
      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.2} position={[1.6, 0.5, 0.5]}>
        <group rotation={[-0.1, -0.5, 0.15]}>
          {/* Main Visor Body (Sleek dark metallic curved shape) */}
          <mesh castShadow>
            <boxGeometry args={[2.2, 1, 0.8]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.05} metalness={0.95} />
          </mesh>
          
          {/* Visor Glass (Curved glowing front panel) */}
          <mesh position={[0, 0, 0.41]} castShadow>
            <boxGeometry args={[2.1, 0.9, 0.1]} />
            <meshStandardMaterial 
              color="#ff7a00" 
              emissive="#ff7a00" 
              emissiveIntensity={1.2} 
              roughness={0.0} 
              transparent 
              opacity={0.85} 
            />
          </mesh>

          {/* Glowing Front Light strip (visionOS display) */}
          <mesh position={[0, 0, 0.47]}>
            <boxGeometry args={[1.4, 0.06, 0.01]} />
            <meshBasicMaterial color="#3ddc84" />
          </mesh>

          {/* Audio Pods (Left & Right) */}
          <mesh position={[-1.15, 0, -0.1]} rotation={[0, 0.2, 0]}>
            <boxGeometry args={[0.1, 0.4, 0.5]} />
            <meshStandardMaterial color="#ff7a00" roughness={0.2} />
          </mesh>
          <mesh position={[1.15, 0, -0.1]} rotation={[0, -0.2, 0]}>
            <boxGeometry args={[0.1, 0.4, 0.5]} />
            <meshStandardMaterial color="#ff7a00" roughness={0.2} />
          </mesh>

          {/* Headband Loop (Fabric texture simulated) */}
          <mesh position={[0, 0, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.8, 0.15, 8, 24, Math.PI]} />
            <meshStandardMaterial color="#333333" roughness={0.8} />
          </mesh>
        </group>
      </Float>

      {/* Floating React Native Core Atoms (Orbits in center) */}
      <Float speed={3.0} rotationIntensity={1.5} floatIntensity={0.5} position={[0, -0.5, -1.0]}>
        <group>
          {/* Central Nucleus (Glowing logo center) */}
          <mesh castShadow>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color="#3ddc84" emissive="#3ddc84" emissiveIntensity={1.5} />
          </mesh>

          {/* Orbit Ring 1 */}
          <group rotation={[1, 0, 0.5]}>
            <Ring args={[0.95, 1.0, 64]} receiveShadow>
              <meshBasicMaterial color="#3ddc84" side={THREE.DoubleSide} />
            </Ring>
            {/* Electron */}
            <mesh position={[1.0, 0, 0]}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshBasicMaterial color="#ff7a00" />
            </mesh>
          </group>

          {/* Orbit Ring 2 */}
          <group rotation={[-1, 1, 0]}>
            <Ring args={[0.95, 1.0, 64]}>
              <meshBasicMaterial color="#3ddc84" side={THREE.DoubleSide} />
            </Ring>
            {/* Electron */}
            <mesh position={[-1.0, 0, 0]}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshBasicMaterial color="#ff7a00" />
            </mesh>
          </group>

          {/* Orbit Ring 3 */}
          <group rotation={[0.2, -0.8, 1.2]}>
            <Ring args={[0.95, 1.0, 64]}>
              <meshBasicMaterial color="#3ddc84" side={THREE.DoubleSide} />
            </Ring>
            {/* Electron */}
            <mesh position={[0, 1.0, 0]}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshBasicMaterial color="#ff7a00" />
            </mesh>
          </group>
        </group>
      </Float>

      {/* Floating Orange and Green Particle Sparkles */}
      <Sparkles 
        count={70} 
        scale={6.5} 
        size={4} 
        speed={0.4} 
        color="#ff7a00" 
        opacity={0.6}
      />
      <Sparkles 
        count={50} 
        scale={6.5} 
        size={3} 
        speed={0.6} 
        color="#3ddc84" 
        opacity={0.6}
      />
    </group>
  );
}
