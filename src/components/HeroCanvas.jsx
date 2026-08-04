import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeScene from './ThreeScene';

export default function HeroCanvas() {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const support = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setWebGLSupported(support);
    } catch (e) {
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    // Beautiful premium 2D fallback for devices/browsers without WebGL support
    return (
      <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
        {/* Glow Effects */}
        <div className="absolute w-[250px] h-[250px] bg-accentOrange/10 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute w-[200px] h-[200px] bg-androidGreen/10 rounded-full blur-[80px] animate-pulse delay-700" />
        
        {/* Abstract 2D Graphic */}
        <div className="relative border border-white/5 bg-white/5 backdrop-blur-md rounded-3xl p-8 w-72 h-[450px] flex flex-col items-center justify-between shadow-glass">
          <div className="w-12 h-2 bg-white/20 rounded-full" />
          <div className="w-24 h-24 rounded-full border border-androidGreen/30 flex items-center justify-center p-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-androidGreen to-accentOrange opacity-80" />
          </div>
          <div className="w-full space-y-3">
            <div className="w-3/4 h-2 bg-white/10 rounded" />
            <div className="w-1/2 h-2 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[650px] cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ThreeScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
