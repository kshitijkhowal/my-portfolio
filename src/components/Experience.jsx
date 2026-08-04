import React from 'react';
import { Calendar, Award } from 'lucide-react';
import { getAbout, getExperiences } from '../lib/portfolioData';

export default function Experience() {
  const experiences = getExperiences();
  const about = getAbout();
  const focus = about.focusBlurb;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-darkBg">
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] rounded-full bg-androidGreen/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
          <h2 className="text-xs font-mono tracking-widest text-accentOrange uppercase mb-2">03 / Journey</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            WORK EXPERIENCE
          </h3>
          <div className="w-12 h-[2px] bg-accentOrange mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h4 className="text-xl font-outfit font-bold text-white mb-4">
              {focus.title}
            </h4>
            <p className="text-white/60 leading-relaxed mb-6">
              {focus.body}
            </p>
            <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-xl w-fit">
              <Award className="w-5 h-5 text-accentOrange" />
              <div>
                <p className="text-xs font-mono text-white/40 uppercase">{focus.focusLabel}</p>
                <p className="text-sm font-bold text-white">{focus.focusValue}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 relative pl-8 md:pl-12 border-l border-white/10 space-y-10">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative">
                <div
                  className={`absolute top-0 left-[-40px] md:left-[-56px] w-4 h-4 rounded-full border-4 border-darkBg ${
                    idx === 0
                      ? 'bg-accentOrange shadow-[0_0_15px_#ff7a00]'
                      : 'bg-androidGreen shadow-[0_0_12px_#3ddc84]'
                  }`}
                />

                <div className="glass-card glass-card-hover p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accentOrange/10 to-transparent pointer-events-none" />

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h5 className="text-2xl font-outfit font-extrabold text-white mb-1">
                        {exp.role}
                        <span className="text-sm font-normal text-white/40 ml-2">({exp.type})</span>
                      </h5>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-sans font-medium text-accentOrange hover:underline cursor-none"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className="text-lg font-sans font-medium text-accentOrange">{exp.company}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-xl text-xs font-mono text-white/80">
                      <Calendar className="w-3.5 h-3.5 text-androidGreen" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h6 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
                      Key Highlights:
                    </h6>
                    <ul className="space-y-4">
                      {exp.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-androidGreen mt-2 flex-shrink-0" />
                          <span className="text-sm md:text-base text-white/70 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
