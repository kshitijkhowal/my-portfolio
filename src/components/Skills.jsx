import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Database, Settings, Cpu, ShieldCheck } from 'lucide-react';

const skillGroups = [
  {
    category: 'Mobile',
    icon: <Smartphone className="w-5 h-5 text-accentOrange" />,
    skills: [
      { name: 'React Native', level: 'Expert' },
      { name: 'Expo', level: 'Expert' },
      { name: 'React Native Reanimated', level: 'Intermediate' },
    ],
  },
  {
    category: 'Languages & Frontend',
    icon: <Code className="w-5 h-5 text-androidGreen" />,
    skills: [
      { name: 'JavaScript', level: 'Expert' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'React.js', level: 'Expert' },
      { name: 'C / C++', level: 'Intermediate' },
    ],
  },
  {
    category: 'Backend & Databases',
    icon: <Database className="w-5 h-5 text-accentOrange" />,
    skills: [
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'PostgreSQL / SQL', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Expert' },
    ],
  },
  {
    category: 'Cloud & Monitoring',
    icon: <ShieldCheck className="w-5 h-5 text-androidGreen" />,
    skills: [
      { name: 'Firebase (Crashlytics, App Distribution)', level: 'Expert' },
      { name: 'Google OAuth', level: 'Intermediate' },
      { name: 'Socket.io', level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools & CI/CD',
    icon: <Settings className="w-5 h-5 text-white/50" />,
    skills: [
      { name: 'Fastlane / CI/CD', level: 'Expert' },
      { name: 'Flipper & Performance Monitor', level: 'Intermediate' },
      { name: 'Postman / Charles Proxy', level: 'Intermediate' },
      { name: 'Git', level: 'Expert' },
    ],
  },
  {
    category: 'AI Tools',
    icon: <Cpu className="w-5 h-5 text-accentOrange" />,
    skills: [
      { name: 'Cursor', level: 'Expert' },
      { name: 'Claude', level: 'Expert' },
      { name: 'On-device LLM features', level: 'Intermediate' },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-darkBg">
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-accentOrange/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-[300px] h-[300px] rounded-full bg-androidGreen/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
          <h2 className="text-xs font-mono tracking-widest text-androidGreen uppercase mb-2">02 / Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            TECHNICAL SKILLS
          </h3>
          <div className="w-12 h-[2px] bg-androidGreen mt-3" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col h-full border border-white/5 bg-white/5 hover:border-androidGreen/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                  {group.icon}
                </div>
                <h4 className="font-outfit font-bold text-lg text-white">{group.category}</h4>
              </div>

              <div className="flex flex-col gap-4 flex-grow">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-white/80 group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 group-hover/skill:text-accentOrange transition-colors duration-300">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width:
                            skill.level === 'Expert'
                              ? '90%'
                              : skill.level === 'Intermediate'
                                ? '70%'
                                : '55%',
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: groupIdx * 0.1, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${
                          groupIdx % 2 === 0
                            ? 'from-androidGreen to-accentOrange'
                            : 'from-accentOrange to-androidGreen'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
