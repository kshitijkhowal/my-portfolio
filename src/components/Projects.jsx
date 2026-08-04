import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, ChevronLeft, ChevronRight, X, Smartphone, Layers, CheckCircle } from 'lucide-react';
import Magnetic from './Magnetic';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// ─── Project Thumbnail Components ─────────────────────────────────────────────

/** Quickart: Shopping icon only, no text */
function QuickartThumbnail() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="absolute w-40 h-40 rounded-full bg-[#ff7a00]/20 blur-[60px]" />
      <div className="relative w-44 h-80 bg-gradient-to-b from-[#1c1c1e] to-[#0f0f0f] rounded-[2.5rem] border-2 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col items-center justify-center gap-5">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#0a0a0a] rounded-b-2xl z-10" />
        {/* Shopping Cart Icon */}
        <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#ff7a00] to-[#ff4500] flex items-center justify-center shadow-[0_0_40px_rgba(255,122,0,0.5)]">
          <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="1.5"/>
            <path d="M16 10a4 4 0 01-8 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Bottom product emoji row — icons only */}
        <div className="flex gap-3">
          {['👟', '👗', '📱'].map((em, i) => (
            <div key={i} className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center text-lg">
              {em}
            </div>
          ))}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}

/** Belur Math: Temple emoji only, no text */
function BelurMathThumbnail() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="absolute w-40 h-40 rounded-full bg-amber-500/15 blur-[60px]" />
      <div className="relative w-44 h-80 bg-gradient-to-b from-[#1a1208] to-[#0f0a00] rounded-[2.5rem] border-2 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col items-center justify-center gap-5">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#0a0a0a] rounded-full z-10" />
        {/* Temple Icon */}
        <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-[0_0_40px_rgba(180,83,9,0.5)] border border-amber-500/20 text-5xl">
          🛕
        </div>
        {/* Decorative dots — no text */}
        <div className="flex gap-2">
          {[1,2,3].map(i => (
            <div key={i} className="w-2 h-2 rounded-full bg-amber-500/40" />
          ))}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}

/** Viveka-AI: Robot emoji only, no text */
function VivekaThumbnail() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="absolute w-40 h-40 rounded-full bg-[#3ddc84]/15 blur-[60px]" />
      <div className="relative w-44 h-80 bg-gradient-to-b from-[#0d1a12] to-[#050f0a] rounded-[2.5rem] border-2 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col items-center justify-center gap-5">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#0a0a0a] rounded-b-2xl z-10" />
        {/* Robot Icon */}
        <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#3ddc84] to-[#1a8f52] flex items-center justify-center shadow-[0_0_40px_rgba(61,220,132,0.5)] text-5xl">
          🤖
        </div>
        {/* Pulse dot — no text */}
        <div className="w-3 h-3 rounded-full bg-[#3ddc84] shadow-[0_0_10px_#3ddc84] animate-pulse" />
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}

// ─── Map project id → thumbnail component ─────────────────────────────────────
const thumbnailMap = {
  0: <QuickartThumbnail />,
  1: <BelurMathThumbnail />,
  2: <VivekaThumbnail />,
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const projectsData = [
  {
    id: 0,
    title: "Quickart E-Commerce Mobile App",
    category: "Cross-Platform Mobile",
    tech: ["React Native", "Redux Toolkit", "Node.js", "MongoDB", "JWT"],
    features: [
      "JWT Authentication (Secure state persistence)",
      "Redux State Management (Global cart and user state)",
      "REST API Integration (Express backend endpoints)",
      "Cross-platform UI (Consistent Android & iOS layouts)"
    ],
    github: "https://github.com/mukeshyogidoss/Quickart-Ecommerce-Mobile-App",
    video: "https://drive.google.com/file/d/1L_t4-EDwBFmSnfXAVoqdBD9WJkxpdKNI/view",
    architecture: {
      client: "React Native, Redux Toolkit, Axios",
      server: "Node.js, Express.js",
      database: "MongoDB with Mongoose",
      security: "JWT Token verification"
    }
  },
  {
    id: 1,
    title: "Belur Math Aarti Timings iOS App",
    category: "Native iOS Development",
    tech: ["SwiftUI", "Swift", "Xcode"],
    features: [
      "Native iOS UI (Highly responsive SwiftUI elements)",
      "Interactive Scheduling (Calendar integrations)",
      "Offline-first experience (CoreData local caching)"
    ],
    github: null,
    video: "https://drive.google.com/file/d/1aqfxayZpzlSB5ChmA3_Yla_RDNjo38M_/view",
    architecture: {
      client: "SwiftUI, Combine Framework",
      server: "Offline Caching / CoreData",
      database: "Local JSON/CoreData",
      security: "Apple App Sandbox"
    }
  },
  {
    id: 2,
    title: "Viveka-AI Chatbot",
    category: "AI & Cloud Integration",
    tech: ["React Native", "Gemini API", "Firebase"],
    features: [
      "AI Chat (Natural Language processing via Gemini)",
      "AI Image Generation (Text to Image prompts)",
      "Modern UI (Smooth thread transitions and bubbles)"
    ],
    github: "https://github.com/mukeshyogidoss/Viveka-AI-Chatbot-Mobile-App",
    video: "https://drive.google.com/drive/folders/13AsQLSmYu11_6IGLdvzpEFfB1AZHX6ma",
    architecture: {
      client: "React Native, React Native Reanimated",
      server: "Google Gemini AI API",
      database: "Firebase Firestore",
      security: "Firebase Security Rules"
    }
  }
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Projects() {
  const [slideIndices, setSlideIndices] = useState({ 0: 0, 1: 0, 2: 0 });
  const [modalVideo, setModalVideo] = useState(null);

  const handlePrevSlide = (projectId) => {
    setSlideIndices((prev) => {
      const current = prev[projectId];
      return { ...prev, [projectId]: current === 0 ? 2 : current - 1 };
    });
  };

  const handleNextSlide = (projectId) => {
    setSlideIndices((prev) => {
      const current = prev[projectId];
      return { ...prev, [projectId]: current === 2 ? 0 : current + 1 };
    });
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-darkBg border-t border-white/5">
      {/* Background neon glows */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-androidGreen/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] rounded-full bg-accentOrange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-20">
          <h2 className="text-xs font-mono tracking-widest text-accentOrange uppercase mb-2">04 / Creations</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            FEATURED PROJECTS
          </h3>
          <div className="w-12 h-[2px] bg-accentOrange mt-3" />
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-32">
          {projectsData.map((project, idx) => {
            const currentSlide = slideIndices[project.id];
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* ── Carousel Column ─────────────────────────────── */}
                <div className={`lg:col-span-6 w-full ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative group rounded-3xl overflow-hidden glass-card border border-white/10 p-4 aspect-[4/3] flex flex-col justify-between">

                    {/* Slides */}
                    <div className="relative flex-grow flex items-center justify-center overflow-hidden rounded-2xl bg-black/40">
                      <AnimatePresence mode="wait">

                        {/* SLIDE 0 — Custom Phone Thumbnail */}
                        {currentSlide === 0 && (
                          <motion.div
                            key="slide0"
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full flex items-center justify-center p-4 relative"
                          >
                            {thumbnailMap[project.id]}

                            {/* Badge */}
                            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/80 border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono text-androidGreen">
                              <Smartphone className="w-3.5 h-3.5" />
                              <span>Live UI Mockup</span>
                            </div>
                          </motion.div>
                        )}

                        {/* SLIDE 1 — Core Features */}
                        {currentSlide === 1 && (
                          <motion.div
                            key="slide1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full flex flex-col justify-center p-8 text-left"
                          >
                            <h4 className="text-lg font-outfit font-extrabold text-accentOrange mb-4 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-androidGreen" />
                              Core Features
                            </h4>
                            <ul className="space-y-3">
                              {project.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2.5 text-sm text-white/80">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accentOrange mt-1.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}

                        {/* SLIDE 2 — Technical Architecture */}
                        {currentSlide === 2 && (
                          <motion.div
                            key="slide2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full flex flex-col justify-center p-8 text-left"
                          >
                            <h4 className="text-lg font-outfit font-extrabold text-androidGreen mb-4 flex items-center gap-2">
                              <Layers className="w-5 h-5 text-accentOrange" />
                              Technical Architecture
                            </h4>
                            <div className="grid grid-cols-2 gap-4 text-xs">
                              <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                                <span className="text-white/40 font-mono block mb-1">Frontend Client</span>
                                <span className="text-white font-bold">{project.architecture.client}</span>
                              </div>
                              <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                                <span className="text-white/40 font-mono block mb-1">Server / Engine</span>
                                <span className="text-white font-bold">{project.architecture.server}</span>
                              </div>
                              <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                                <span className="text-white/40 font-mono block mb-1">Database Layer</span>
                                <span className="text-white font-bold">{project.architecture.database}</span>
                              </div>
                              <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                                <span className="text-white/40 font-mono block mb-1">Security</span>
                                <span className="text-white font-bold">{project.architecture.security}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                      </AnimatePresence>
                    </div>

                    {/* Carousel Nav Footer */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                      {/* Dot indicators */}
                      <div className="flex items-center gap-1.5">
                        {[0, 1, 2].map((dot) => (
                          <button
                            key={dot}
                            onClick={() => setSlideIndices(prev => ({ ...prev, [project.id]: dot }))}
                            className={`rounded-full transition-all duration-300 cursor-none ${
                              currentSlide === dot
                                ? 'w-5 h-1.5 bg-accentOrange'
                                : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handlePrevSlide(project.id)}
                          className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-accentOrange/40 hover:bg-white/10 flex items-center justify-center transition-colors cursor-none"
                          aria-label="Previous Slide"
                        >
                          <ChevronLeft className="w-4 h-4 text-white" />
                        </button>
                        <button
                          onClick={() => handleNextSlide(project.id)}
                          className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-accentOrange/40 hover:bg-white/10 flex items-center justify-center transition-colors cursor-none"
                          aria-label="Next Slide"
                        >
                          <ChevronRight className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ── Project Details Column ───────────────────────── */}
                <div className={`lg:col-span-6 flex flex-col justify-center text-left ${!isEven ? 'lg:order-1' : ''}`}>
                  <span className="text-xs font-mono tracking-widest text-androidGreen uppercase mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-outfit font-black tracking-tight text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-white/5 border border-white/5 hover:border-accentOrange/20 px-3 py-1 rounded-full text-xs font-mono text-white/70 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/60 leading-relaxed mb-8">
                    Built with {project.tech.join(', ')}. Navigate the slides to explore core features and the technical architecture behind this project.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4 items-center">
                    <Magnetic>
                      <button
                        onClick={() => setModalVideo(project)}
                        className="btn-primary px-5 py-2.5 text-sm flex items-center gap-2 cursor-none"
                      >
                        <Play className="w-4 h-4 text-white fill-white" />
                        Watch Preview
                      </button>
                    </Magnetic>

                    {project.github && (
                      <Magnetic>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary px-5 py-2.5 text-sm flex items-center gap-2 cursor-none"
                        >
                          <GithubIcon className="w-4 h-4" />
                          Source Code
                        </a>
                      </Magnetic>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Video Modal ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={setModalVideo.bind(null, null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-androidGreen block mb-1">
                    Project Video Preview
                  </span>
                  <h4 className="text-xl md:text-2xl font-outfit font-black text-white">
                    {modalVideo.title}
                  </h4>
                </div>
                <button
                  onClick={() => setModalVideo(null)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accentOrange/30 hover:bg-white/10 flex items-center justify-center cursor-none transition-colors"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Video placeholder */}
              <div className="bg-black/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-video relative overflow-hidden">
                <div className="absolute w-[200px] h-[200px] bg-accentOrange/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute w-[150px] h-[150px] bg-androidGreen/5 rounded-full blur-[80px] pointer-events-none" />

                <Play className="w-16 h-16 text-accentOrange drop-shadow-[0_0_15px_rgba(255,122,0,0.5)] mb-4" />
                <h5 className="text-base font-bold text-white mb-2">Google Drive Stream Required</h5>
                <p className="text-xs md:text-sm text-white/50 max-w-sm leading-relaxed mb-6">
                  The walkthrough video is hosted on Google Drive. Click below to open and stream it instantly.
                </p>

                <Magnetic>
                  <a
                    href={modalVideo.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-6 py-3 flex items-center gap-2 cursor-none text-sm font-semibold"
                  >
                    Open in Google Drive
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Magnetic>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 justify-center text-[10px] font-mono text-white/30 uppercase tracking-wider">
                <span>HD Walkthrough</span>
                <span>•</span>
                <span>Full Demo</span>
                <span>•</span>
                <span>Source on GitHub</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
