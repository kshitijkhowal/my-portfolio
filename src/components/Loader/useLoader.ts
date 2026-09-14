import { useEffect, useState } from 'react';

export function useLoader(onLoadComplete: () => void) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    const step = 100 / (2000 / 20);
    const timer = window.setInterval(() => setProgress((current) => {
      const next = current + step;
      if (next >= 100) {
        window.clearInterval(timer);
        window.setTimeout(() => {
          setIsDone(true);
          window.setTimeout(onLoadComplete, 600);
        }, 400);
        return 100;
      }
      return next;
    }), 20);
    return () => window.clearInterval(timer);
  }, [onLoadComplete]);
  return { progress, isDone };
}
