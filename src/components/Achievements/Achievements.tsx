import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Sparkles } from 'lucide-react';
import { useAchievements } from './useAchievements';

export default function Achievements() {
  const { achievements: achievementsList, triggerConfetti } = useAchievements();

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-darkBg border-t border-white/5">
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-androidGreen/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
          <h2 className="text-xs font-mono tracking-widest text-androidGreen uppercase mb-2">05 / Honors</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            ACHIEVEMENTS
          </h3>
          <div className="w-12 h-[2px] bg-androidGreen mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsList.map((ach) => (
            <motion.div
              key={ach.id}
              onClick={(e) => triggerConfetti(e, ach.color)}
              onMouseEnter={(e) => {
                if (Math.random() > 0.6) triggerConfetti(e, ach.color);
              }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between border border-white/5 bg-white/5 hover:border-accentOrange/20 cursor-none select-none"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1 rounded-full text-[10px] font-mono text-white/50">
                <Sparkles className="w-3 h-3 text-accentOrange animate-pulse" />
                <span>Hover or Click!</span>
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6">
                  {ach.color === 'orange' ? (
                    <Trophy className="w-6 h-6 text-accentOrange" />
                  ) : (
                    <Award className="w-6 h-6 text-androidGreen" />
                  )}
                </div>

                <h4 className="text-3xl font-outfit font-black text-white leading-tight mb-2">
                  {ach.title}
                </h4>
                <p className="text-lg font-sans font-semibold text-accentOrange mb-4">
                  {ach.subtitle}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">{ach.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono text-white/40">
                <span>From data</span>
                <span className="text-androidGreen font-semibold">{ach.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
