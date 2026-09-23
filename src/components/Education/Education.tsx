import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin, Award } from 'lucide-react';
import { getEducation } from '../../lib/portfolioData';

export default function Education() {
  const education = getEducation();

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-darkBg border-t border-white/5">
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] rounded-full bg-accentOrange/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[280px] h-[280px] rounded-full bg-androidGreen/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
          <h2 className="text-xs font-mono tracking-widest text-accentOrange uppercase mb-2">02 / Academics</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            EDUCATION
          </h3>
          <div className="w-12 h-[2px] bg-accentOrange mt-3" />
        </div>

        <div className="relative">
          <div className="absolute left-[39px] top-10 bottom-10 hidden w-px bg-gradient-to-b from-accentOrange/50 via-white/10 to-androidGreen/40 md:block" />

          <div className="space-y-8">
            {education.map((edu, idx) => {
              const isPrimary = idx === 0;

              return (
                <motion.article
                  key={edu.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: 'easeOut' }}
                  className="relative grid items-start gap-6 md:grid-cols-[80px_1fr]"
                >
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-1 shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                    {edu.icon ? (
                      <img
                        src={edu.icon}
                        alt={`${edu.shortName} emblem`}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <GraduationCap className="h-8 w-8 text-accentOrange" />
                    )}
                  </div>

                  <div
                    className={`relative overflow-hidden rounded-3xl border bg-[#202020] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow] duration-300 md:p-8 ${
                      isPrimary
                        ? 'border-accentOrange/25 hover:border-accentOrange/45 hover:shadow-[0_12px_40px_rgba(255,122,0,0.08)]'
                        : 'border-white/[0.07] hover:border-androidGreen/30'
                    }`}
                  >
                    <div
                      className="absolute inset-y-0 left-0 w-1"
                      style={{ backgroundColor: edu.brandColor }}
                    />
                    <div
                      className="absolute right-0 top-0 h-36 w-36 pointer-events-none"
                      style={{
                        background: `linear-gradient(to bottom left, ${edu.brandColor}1A, transparent)`,
                      }}
                    />

                    <div className="flex flex-col gap-4">
                      <div className="min-w-0">
                        <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
                          {edu.shortName}
                        </p>
                        <h4 className="font-outfit text-2xl font-extrabold text-white">
                          {edu.degree}
                          {edu.field ? (
                            <span className="ml-2 text-base font-normal text-white/45">
                              · {edu.field}
                            </span>
                          ) : null}
                        </h4>
                        {edu.website ? (
                          <a
                            href={edu.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-block text-lg font-medium text-accentOrange hover:underline cursor-none"
                          >
                            {edu.institution}
                          </a>
                        ) : (
                          <p className="mt-1 text-lg font-medium text-accentOrange">{edu.institution}</p>
                        )}
                        {edu.formerly ? (
                          <p className="mt-0.5 text-xs text-white/35">{edu.formerly}</p>
                        ) : null}
                        {edu.minor ? (
                          <p className="mt-2 text-sm text-white/55">Minor in {edu.minor}</p>
                        ) : null}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-xs font-mono text-white/80">
                          <Calendar className="h-3.5 w-3.5 text-androidGreen" />
                          <span>{edu.period}</span>
                        </div>
                        {edu.location ? (
                          <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-xs font-mono text-white/70">
                            <MapPin className="h-3.5 w-3.5 text-accentOrange" />
                            <span>{edu.location}</span>
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {(edu.gpa || edu.highlights.length > 0) && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {edu.gpa ? (
                          <div className="flex items-center gap-2 rounded-full border border-androidGreen/20 bg-androidGreen/10 px-3 py-1.5 text-xs font-mono text-androidGreen">
                            <GraduationCap className="h-3.5 w-3.5" />
                            <span>{edu.gpa} CGPA</span>
                          </div>
                        ) : null}
                        {edu.highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-full border border-accentOrange/20 bg-accentOrange/10 px-3 py-1.5 text-xs font-mono text-accentOrange"
                          >
                            <Award className="h-3.5 w-3.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
