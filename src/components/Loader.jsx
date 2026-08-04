import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onLoadComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              onLoadComplete();
            }, 600); // Wait for exit animation to finish
          }, 400);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#171717]"
        >
          {/* Neon Glow Circle Background */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-androidGreen/5 blur-[80px]" />
          <div className="absolute w-[200px] h-[200px] rounded-full bg-accentOrange/5 blur-[60px]" />

          {/* Glowing Animated Head/Robot Logo (Android Style) */}
          <div className="relative mb-8 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-20 h-20"
            >
              {/* Android Robot Head Wireframe Graphic */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-androidGreen drop-shadow-[0_0_15px_rgba(61,220,132,0.6)]"
              >
                {/* Antennae */}
                <motion.line
                  x1="30" y1="20" x2="20" y2="5"
                  stroke="currentColor" strokeWidth="4" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                />
                <motion.line
                  x1="70" y1="20" x2="80" y2="5"
                  stroke="currentColor" strokeWidth="4" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                />
                {/* Head Dome */}
                <motion.path
                  d="M15 50 A35 35 0 0 1 85 50 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
                {/* Eyes */}
                <motion.circle
                  cx="35" cy="35" r="4.5"
                  fill="currentColor"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                />
                <motion.circle
                  cx="65" cy="35" r="4.5"
                  fill="currentColor"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                />
              </svg>

              {/* Glowing ring */}
              <motion.div
                className="absolute inset-[-10px] rounded-full border border-accentOrange/30"
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              />
            </motion.div>
          </div>

          {/* Progress Counters */}
          <div className="relative flex flex-col items-center">
            <motion.h1
              className="text-5xl font-extrabold tracking-widest font-outfit text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.round(progress)}
              <span className="text-accentOrange font-light">%</span>
            </motion.h1>
            
            {/* Loading text with glowing dot */}
            <div className="flex items-center mt-2 text-xs font-mono tracking-widest uppercase text-white/40">
              <span>Initializing System</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-1 text-androidGreen font-bold"
              >
                •
              </motion.span>
            </div>

            {/* Custom Premium Progress Bar */}
            <div className="relative w-48 h-[2px] bg-white/5 rounded-full overflow-hidden mt-6">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-androidGreen to-accentOrange"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
