import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function useThreeScene() {
  const sceneRef = useRef<THREE.Group>(null);

  useFrame(({ pointer }) => {
    if (!sceneRef.current) return;

    sceneRef.current.rotation.y = THREE.MathUtils.lerp(
      sceneRef.current.rotation.y,
      pointer.x * 0.4,
      0.05,
    );
    sceneRef.current.rotation.x = THREE.MathUtils.lerp(
      sceneRef.current.rotation.x,
      -pointer.y * 0.2,
      0.05,
    );
  });

  return sceneRef;
}
