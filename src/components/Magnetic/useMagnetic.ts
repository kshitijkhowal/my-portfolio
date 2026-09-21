import { useRef, useState, type MouseEvent } from 'react';

export function useMagnetic(range: number, strength: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = event;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const distanceX = clientX - (left + width / 2);
    const distanceY = clientY - (top + height / 2);
    const distance = Math.hypot(distanceX, distanceY);
    setPosition(distance < range ? { x: distanceX * strength, y: distanceY * strength } : { x: 0, y: 0 });
  };
  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });
  return { ref, position, handleMouseMove, handleMouseLeave };
}
