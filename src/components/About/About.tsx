import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { MapPin, Code, Heart } from 'lucide-react';
import { getAbout, getEducation, getPerson, getPrimaryEducation } from '../../lib/portfolioData';

export default function About() {
  const about = getAbout();
  const person = getPerson();
  const education = getPrimaryEducation();
  const primaryEducation = getEducation().find((entry) => entry.id === education.id) ?? getEducation()[0];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
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

  const educationLine = [
    education.degree,
    education.field,
    education.minor ? `Minor ${education.minor}` : null,
    education.gpa ? `${education.gpa} CGPA` : null,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-darkBg">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-androidGreen/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[250px] h-[250px] rounded-full bg-accentOrange/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
          <h2 className="text-xs font-mono tracking-widest text-accentOrange uppercase mb-2">01 / Profile</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            ABOUT ME
          </h3>
          <div className="w-12 h-[2px] bg-accentOrange mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-2xl md:text-3xl font-outfit font-light text-white/90 leading-relaxed"
            >
              {about.introLead}{' '}
              <span className="text-accentOrange font-semibold">{person.fullName}</span>{' '}
              — <span className="text-androidGreen font-medium">{about.introRole}</span>{' '}
              {about.introRest}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="text-base md:text-lg text-white/60 leading-relaxed"
            >
              {about.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {about.highlights.map((h, i) => (
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

          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
                <h4 className="text-xs font-mono text-white/40 uppercase mb-1">Where I'm Based</h4>
                <p className="text-lg font-outfit font-bold text-white">{person.locationShort}</p>
                <p className="text-xs text-white/40 mt-0.5">{about.cards.locationNote}</p>
              </div>
            </motion.div>

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
                <p className="text-sm font-outfit font-bold text-white leading-tight">{about.cards.stackTitle}</p>
                <p className="text-xs text-white/40 mt-0.5">{about.cards.stackSubtitle}</p>
              </div>
            </motion.div>

            <motion.a
              href="#education"
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col gap-4 cursor-none"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-white p-0.5">
                <img
                  src={primaryEducation.icon}
                  alt={`${primaryEducation.shortName} emblem`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-xs font-mono text-white/40 uppercase mb-1">Education</h4>
                <p className="text-sm font-outfit font-bold text-white leading-tight">
                  {primaryEducation?.shortName ?? 'DTU'} · {education.degree}
                </p>
                <p className="text-xs text-white/40 mt-0.5">{educationLine}</p>
              </div>
            </motion.a>

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
                  {about.cards.driveMe}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
