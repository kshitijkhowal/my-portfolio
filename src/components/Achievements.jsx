import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const achievementsList = [
  {
    id: 0,
    title: "2× 1st Place Winner",
    subtitle: "Quest IT'26 (Coding & Debugging)",
    description: "Secured double first-place victories in competitive coding speed challenges and rapid bug fixing assessments.",
    icon: <Trophy className="w-6 h-6 text-accentOrange" />,
    badge: "Quest IT'26",
    color: "orange"
  },
  {
    id: 1,
    title: "1st Prize Winner",
    subtitle: "Mini Project Exhibition",
    description: "Awarded top honor for presenting an innovative mobile architecture integration using cross-platform UI workflows.",
    icon: <Award className="w-6 h-6 text-androidGreen" />,
    badge: "Project Expo",
    color: "green"
  }
];

export default function Achievements() {
  const triggerConfetti = (e, colorType) => {
    // Calculate relative coordinates for confetti source
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    const colors = colorType === 'orange' 
      ? ['#ff7a00', '#ffaa00', '#ffffff'] 
      : ['#3ddc84', '#00ff7f', '#ffffff'];

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: colors,
      disableForReducedMotion: true
    });
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-darkBg border-t border-white/5">
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-androidGreen/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <h2 className="text-xs font-mono tracking-widest text-androidGreen uppercase mb-2">05 / Honors</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            ACHIEVEMENTS
          </h3>
          <div className="w-12 h-[2px] bg-androidGreen mt-3" />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsList.map((ach) => (
            <motion.div
              key={ach.id}
              onClick={(e) => triggerConfetti(e, ach.color)}
              onMouseEnter={(e) => {
                // Throttle confetti on hover or do a small burst
                if (Math.random() > 0.6) triggerConfetti(e, ach.color);
              }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between border border-white/5 bg-white/5 hover:border-accentOrange/20 cursor-none select-none"
            >
              {/* Confetti helper floating hint */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1 rounded-full text-[10px] font-mono text-white/50 group-hover:text-white transition-colors duration-300">
                <Sparkles className="w-3 h-3 text-accentOrange animate-pulse" />
                <span>Hover or Click!</span>
              </div>

              <div>
                {/* Badge Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6">
                  {ach.icon}
                </div>

                {/* Info titles */}
                <h4 className="text-3xl font-outfit font-black text-white leading-tight mb-2">
                  {ach.title}
                </h4>
                <p className="text-lg font-sans font-semibold text-accentOrange mb-4">
                  {ach.subtitle}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Tag Label */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono text-white/40">
                <span>Verification: Award Certificate</span>
                <span className="text-androidGreen font-semibold">{ach.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
