import React from 'react';
import { Calendar, Award } from 'lucide-react';

const experiences = [
  {
    role: 'Mobile Application Developer',
    type: 'Full Time',
    company: 'BrokerApp',
    companyUrl: 'https://brokerapp.com/',
    period: 'Nov 2025 – Present',
    highlights: [
      'Engineered and maintained a React Native cross-platform app used by 10K+ users on iOS and Android.',
      'Upgraded the application from React Native 0.77.4 to 0.85.0 while resolving build compatibility issues.',
      'Streamlined the main feed and infinite scrolling, reducing FPS drops and maintaining consistent 60 FPS performance.',
      'Automated CI/CD pipelines, reducing the release process from 5 manual steps to a single command via Firebase App Distribution and TestFlight.',
      'Enabled Razorpay payment gateway support, handling 30+ monthly payments with a 90% success rate.',
      'Introduced local LLM-powered features to generate AI-assisted titles and descriptions for user-generated posts.',
    ],
  },
  {
    role: 'React Native Developer',
    type: 'Intern + Full Time',
    company: 'Ambak',
    companyUrl: 'https://ambak.com/',
    period: 'Jan 2025 – Nov 2025',
    highlights: [
      'Delivered and maintained 2 production mobile applications (Ambak Yoddha & Ambak Saathi) with backend and product teams.',
      'Migrated applications from React Native Community CLI to Expo SDK 52, leveraging Expo libraries.',
      'Set up Fastlane CI/CD pipelines and added Firebase Crashlytics for monitoring and debugging.',
    ],
  },
  {
    role: 'Junior Software Developer',
    type: 'Intern',
    company: 'Growth Marketers',
    companyUrl: null,
    period: 'Jun 2024 – Jul 2024',
    highlights: [
      'Created and connected multiple APIs for the CRM mobile app and admin portal.',
      'Coordinated shared services using a centralized Git submodule across client, admin, and backend repositories.',
    ],
  },
];

export default function Experience() {
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
              FOCUSED ON MOBILE ENGINEERING
            </h4>
            <p className="text-white/60 leading-relaxed mb-6">
              Shipping production React Native apps — from Expo migrations and CI/CD to
              performance tuning, payments, and on-device AI features.
            </p>
            <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-xl w-fit">
              <Award className="w-5 h-5 text-accentOrange" />
              <div>
                <p className="text-xs font-mono text-white/40 uppercase">Focus Area</p>
                <p className="text-sm font-bold text-white">React Native · Expo · CI/CD</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 relative pl-8 md:pl-12 border-l border-white/10 space-y-10">
            {experiences.map((exp, idx) => (
              <div key={exp.company} className="relative">
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
