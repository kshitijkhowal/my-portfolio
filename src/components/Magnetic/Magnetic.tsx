import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from './useMagnetic';

type MagneticProps = { children: ReactNode; range?: number; strength?: number };

export default function Magnetic({ children, range = 60, strength = 0.35 }: MagneticProps) {
  const { ref, position: { x, y }, handleMouseMove, handleMouseLeave } = useMagnetic(range, strength);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
