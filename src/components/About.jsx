import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code, Cpu, Zap, Heart } from 'lucide-react';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: custom * 0.12,
      },
    }),
  };

  const highlights = [
    { icon: '📱', label: 'React Native Dev' },
    { icon: '🍎', label: 'iOS & SwiftUI' },
    { icon: '🥽', label: 'Vision Pro' },
    { icon: '🤖', label: 'AI Integration' },
    { icon: '⚡', label: 'Clean Code' },
    { icon: '🎨', label: 'Premium UI' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Background glows */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-androidGreen/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[250px] h-[250px] rounded-full bg-accentOrange/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <h2 className="text-xs font-mono tracking-widest text-accentOrange uppercase mb-2">01 / Profile</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            ABOUT ME
          </h3>
          <div className="w-12 h-[2px] bg-accentOrange mt-3" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: First-Person Editorial Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Main intro */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-2xl md:text-3xl font-outfit font-light text-white/90 leading-relaxed"
            >
              Hey, I'm{' '}
              <span className="text-accentOrange font-semibold">Mukesh Y</span>{' '}
              — a <span className="text-androidGreen font-medium">React Native developer</span>{' '}
              who builds fast, beautiful mobile apps for iOS and Android.
            </motion.p>

            {/* Short punchy second line */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="text-base md:text-lg text-white/60 leading-relaxed"
            >
              I work on both the app and the backend, so I can take an idea
              all the way from design to a working product on my own.
            </motion.p>

            {/* Highlights Pill Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {highlights.map((h, i) => (
                <motion.span
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accentOrange/20 px-3 py-1.5 rounded-full text-xs font-mono text-white/70 transition-all duration-300 cursor-none"
                >
                  <span>{h.icon}</span>
                  <span>{h.label}</span>
                </motion.span>
              ))}
            </motion.div>

          </div>

          {/* Right Side: Apple-style Info Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

            {/* Card: Location */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-6 rounded-2xl md:col-span-2 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-accentOrange/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accentOrange" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-white/40 uppercase mb-1">📍 Where I'm Based</h4>
                <p className="text-lg font-outfit font-bold text-white">Chennai, Tamil Nadu, India</p>
                <p className="text-xs text-white/40 mt-0.5">Available for remote & on-site roles</p>
              </div>
            </motion.div>

            {/* Card: Core Stack */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-androidGreen/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-androidGreen" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-white/40 uppercase mb-1">My Stack</h4>
                <p className="text-sm font-outfit font-bold text-white leading-tight">React Native & iOS</p>
                <p className="text-xs text-white/40 mt-0.5">JS · Swift · SwiftUI</p>
              </div>
            </motion.div>

            {/* Card: Apple Vision Pro */}
            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-accentOrange/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-accentOrange" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-white/40 uppercase mb-1">Spatial</h4>
                <p className="text-sm font-outfit font-bold text-white leading-tight">Apple Vision Pro</p>
                <p className="text-xs text-white/40 mt-0.5">visionOS prototyping</p>
              </div>
            </motion.div>

            {/* Card: What drives me */}
            <motion.div
              custom={4}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-6 rounded-2xl md:col-span-2 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-androidGreen/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-androidGreen" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-white/40 uppercase mb-1">What Drives Me</h4>
                <p className="text-sm font-outfit font-semibold text-white leading-snug">
                  Making something useful that people actually enjoy using —
                  that's what keeps me going.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
