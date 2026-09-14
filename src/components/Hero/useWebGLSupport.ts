import { useEffect, useState } from 'react';

export function useWebGLSupport() {
  const [webGLSupported, setWebGLSupported] = useState(true);
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      setWebGLSupported(Boolean(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))));
    } catch {
      setWebGLSupported(false);
    }
  }, []);
  return webGLSupported;
}
