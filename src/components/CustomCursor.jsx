import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'link', 'text', 'hidden'

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for high-end feel
  const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const addHoverListeners = () => {
      // Find all interactive items
      const interactives = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .hover-target');
      
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setHovered(true);
          if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.getAttribute('role') === 'button') {
            setCursorType('link');
          } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            setCursorType('text');
          }
        });
        el.addEventListener('mouseleave', () => {
          setHovered(false);
          setCursorType('default');
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add event listeners to existing elements
    addHoverListeners();

    // Listen for DOM changes to attach listeners to newly rendered items
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  // Cursor variants
  const size = clicked ? 12 : hovered ? 56 : 24;
  const opacity = clicked ? 0.8 : hovered ? 0.9 : 0.6;
  const ringBorderColor = hovered ? '#3ddc84' : '#3ddc84'; // Android green
  const innerDotColor = '#ff7a00'; // Orange accent glow

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="custom-cursor fixed pointer-events-none z-[99999] rounded-full flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: size,
          height: size,
          border: `2px solid ${ringBorderColor}`,
          boxShadow: hovered 
            ? '0 0 25px rgba(61, 220, 132, 0.6), inset 0 0 15px rgba(61, 220, 132, 0.3)' 
            : '0 0 15px rgba(61, 220, 132, 0.3)',
          backgroundColor: hovered ? 'rgba(61, 220, 132, 0.05)' : 'transparent',
          opacity: opacity,
        }}
        animate={{
          rotate: hovered ? 180 : 0,
        }}
        transition={{
          rotate: { duration: 0.6, ease: 'easeInOut' },
        }}
      >
        {/* Android Antennas overlay when hovered to show Android theme */}
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Left Antenna */}
            <div className="absolute top-[-8px] left-[16px] w-[3px] h-[8px] bg-androidGreen rotate-[-30deg] rounded-full" />
            {/* Right Antenna */}
            <div className="absolute top-[-8px] right-[16px] w-[3px] h-[8px] bg-androidGreen rotate-[30deg] rounded-full" />
          </div>
        )}
      </motion.div>

      {/* Inner Fast Dot */}
      <motion.div
        className="custom-cursor fixed pointer-events-none z-[99999] w-2 h-2 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: innerDotColor,
          boxShadow: `0 0 8px ${innerDotColor}`,
          opacity: clicked ? 0 : 1,
        }}
      />
    </>
  );
}
