import React from 'react';
import { Calendar, Briefcase, Award, Circle } from 'lucide-react';

export default function Experience() {
  const responsibilities = [
    "Developed native UI modules using Swift and SwiftUI to enhance mobile interface performance.",
    "Built Apple Vision Pro prototype experiences exploring spatial computing concepts.",
    "Worked on immersive UI systems and responsive layouts across iOS and visionOS platforms.",
    "Explored modern mobile architecture concepts and clean code standards."
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] rounded-full bg-androidGreen/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <h2 className="text-xs font-mono tracking-widest text-accentOrange uppercase mb-2">03 / Journey</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            WORK EXPERIENCE
          </h3>
          <div className="w-12 h-[2px] bg-accentOrange mt-3" />
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Brief Context */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h4 className="text-xl font-outfit font-bold text-white mb-4">
              FOCUSED ON MOBILE ENGINEERING
            </h4>
            <p className="text-white/60 leading-relaxed mb-6">
              Hands-on internship training focused on building immersive interfaces and learning modern development methodologies for mobile devices and emerging hardware.
            </p>
            <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-xl w-fit">
              <Award className="w-5 h-5 text-accentOrange" />
              <div>
                <p className="text-xs font-mono text-white/40 uppercase">Focus Area</p>
                <p className="text-sm font-bold text-white">iOS & visionOS Prototyping</p>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Card */}
          <div className="lg:col-span-8 relative pl-8 md:pl-12 border-l border-white/10">
            {/* Timeline Glow Indicator Node */}
            <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-accentOrange shadow-[0_0_15px_#ff7a00] border-4 border-darkBg" />

            {/* Main Experience Box */}
            <div
              className="glass-card glass-card-hover p-8 rounded-2xl relative overflow-hidden"
            >
              {/* Corner Glowing Highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accentOrange/10 to-transparent pointer-events-none" />

              {/* Title & Organization Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h5 className="text-2xl font-outfit font-extrabold text-white mb-1">
                    Mobile App Engineering Intern
                  </h5>
                  <p className="text-lg font-sans font-medium text-accentOrange">
                    Ramakrishna Math, Mylapore
                  </p>
                </div>
                
                {/* Date Badge */}
                <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-xl text-xs font-mono text-white/80">
                  <Calendar className="w-3.5 h-3.5 text-androidGreen" />
                  <span>Nov 2025 – Jan 2026</span>
                </div>
              </div>

              {/* Description & Responsibilities */}
              <div className="space-y-4">
                <h6 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">Key Responsibilities:</h6>
                <ul className="space-y-4">
                  {responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-androidGreen mt-2 flex-shrink-0" />
                      <span className="text-sm md:text-base text-white/70 leading-relaxed">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
