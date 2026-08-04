import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import HeroCanvas from './HeroCanvas';
import Magnetic from './Magnetic';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Neon Glow Grids */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-androidGreen/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-accentOrange/5 blur-[120px] pointer-events-none" />
      
      {/* Mesh Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Tagline pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-androidGreen animate-pulse shadow-[0_0_8px_#3ddc84]" />
            <span className="text-xs font-mono tracking-wider uppercase text-white/70">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Large Title: MUKESH Y */}
          <motion.h1 
            variants={itemVariants}
            className="font-outfit leading-none tracking-tighter mb-4"
          >
            <span className="text-8xl md:text-9xl font-extrabold text-accentOrange drop-shadow-[0_0_25px_rgba(255,122,0,0.25)] select-none mr-[-5px]">
              M
            </span>
            <span className="text-6xl md:text-7xl font-extrabold text-white select-none tracking-tight">
              UKESH Y
            </span>
          </motion.h1>

          {/* Tagline list */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl font-mono text-white/80 tracking-wide mb-8 border-l-2 border-accentOrange pl-4"
          >
            Mobile App Developer <span className="text-androidGreen">•</span> React Native <span className="text-androidGreen">•</span> iOS <span className="text-androidGreen">•</span> Apple Vision Pro
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center"
          >
            <Magnetic>
              <a 
                href="#projects" 
                className="btn-primary flex items-center gap-2 group cursor-none"
              >
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            
            <Magnetic>
              <a 
                href="https://drive.google.com/file/d/1koP4-sCHwReeusM_enHNaDk8b5TjHKio/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary flex items-center gap-2 cursor-none border-white/10 hover:border-androidGreen/40 hover:bg-androidGreen/5"
              >
                <FileText className="w-4 h-4 text-androidGreen" />
                Download Resume
              </a>
            </Magnetic>

            <Magnetic>
              <a 
                href="#contact" 
                className="btn-secondary flex items-center gap-2 cursor-none"
              >
                <Mail className="w-4 h-4 text-white/60" />
                Contact Me
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Scene */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="lg:col-span-5 w-full flex items-center justify-center relative"
        >
          {/* Background circle layout helper */}
          <div className="absolute inset-0 bg-gradient-to-r from-accentOrange/5 to-androidGreen/5 rounded-full blur-[100px] pointer-events-none" />
          <HeroCanvas />
        </motion.div>

      </div>

      {/* Elegant Bottom Section Transition Mask */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-darkBg to-transparent pointer-events-none" />
    </section>
  );
}
