import React, { type ComponentType } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Smartphone, Code, Database, Settings, Cpu, ShieldCheck, Rocket,
  Gauge, MousePointer2, Bot, Braces, Flame, Terminal,
  type LucideIcon,
} from 'lucide-react';
import {
  SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiMongodb,
  SiPostgresql, SiSwagger, SiGoogle, SiSocketdotio, SiPostman,
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { getSkillGroups } from '../../lib/portfolioData';

const iconMap: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  code: Code,
  database: Database,
  settings: Settings,
  cpu: Cpu,
  shield: ShieldCheck,
};

type SkillLogo = ComponentType<{ className?: string }>;

const skillIconMap: Record<string, SkillLogo> = {
  react: SiReact,
  expo: Terminal,
  reanimated: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  cpp: Braces,
  nodejs: SiNodedotjs,
  express: Terminal,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  api: SiSwagger,
  firebase: Flame,
  google: SiGoogle,
  socketio: SiSocketdotio,
  cicd: Rocket,
  performance: Gauge,
  postman: SiPostman,
  git: FaGitAlt,
  cursor: MousePointer2,
  claude: Bot,
  llm: Cpu,
};

export default function Skills() {
  const skillGroups = getSkillGroups();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
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
          {skillGroups.map((group, groupIdx) => {
            const Icon = iconMap[group.icon] || Code;
            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col h-full border border-white/5 bg-white/5 hover:border-androidGreen/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                    <Icon
                      className={`w-5 h-5 ${
                        groupIdx % 2 === 0 ? 'text-accentOrange' : 'text-androidGreen'
                      }`}
                    />
                  </div>
                  <h4 className="font-outfit font-bold text-lg text-white">{group.category}</h4>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-black/15 px-3 py-4 text-center transition-colors duration-300 hover:border-androidGreen/25 hover:bg-white/[0.04]"
                    >
                      {(() => {
                        const SkillIcon = skillIconMap[skill.icon] || Code;
                        return (
                          <SkillIcon className="h-7 w-7 text-white/65 transition-colors duration-300 group-hover/skill:text-androidGreen" />
                        );
                      })()}
                      <div className="text-xs font-medium leading-tight text-white/70 transition-colors duration-300 group-hover/skill:text-white">
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
