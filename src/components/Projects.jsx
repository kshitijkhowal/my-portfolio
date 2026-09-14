import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, ChevronLeft, ChevronRight, X, Smartphone, Layers, CheckCircle } from 'lucide-react';
import Magnetic from './Magnetic';
import { getProjects } from '../lib/portfolioData';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function MetroConnectThumbnail({ project }) {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="absolute w-40 h-40 rounded-full bg-[#3ddc84]/15 blur-[60px]" />
      <div className="relative h-80 w-44 rounded-[2.75rem] border border-white/20 bg-[#080a0c] p-2 shadow-[0_24px_65px_rgba(0,0,0,0.55)]">
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2.25rem] bg-[linear-gradient(160deg,rgba(61,220,132,0.42)_0%,rgba(61,220,132,0.12)_42%,#0d1012_78%)]">
          <div className="absolute left-1/2 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />

          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-androidGreen shadow-[0_12px_40px_rgba(61,220,132,0.3)]">
            <img
              src={project.icon}
              alt="Metro Connect icon"
              className="h-14 w-14 object-contain brightness-0 invert"
            />
          </div>
          <p className="relative z-10 mt-5 font-outfit text-base font-bold text-white">
            Metro Connect
          </p>
          <p className="relative z-10 mt-1 text-[9px] font-mono uppercase tracking-[0.2em] text-white/40">
            Delhi Metro Navigator
          </p>

          <div className="absolute bottom-4 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}

function DefaultProjectThumbnail() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="absolute w-40 h-40 rounded-full bg-accentOrange/15 blur-[60px]" />
      <div className="relative w-44 h-80 bg-gradient-to-b from-[#1c1c1e] to-[#0f0f0f] rounded-[2.5rem] border-2 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col items-center justify-center gap-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#0a0a0a] rounded-b-2xl z-10" />
        <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#ff7a00] to-[#ff4500] flex items-center justify-center shadow-[0_0_40px_rgba(255,122,0,0.5)] text-5xl">
          📱
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}

function projectThumbnail(project) {
  if (project.rawId === 'proj-metroconnect') return <MetroConnectThumbnail project={project} />;
  return <DefaultProjectThumbnail />;
}

export default function Projects() {
  const projectsData = getProjects();
  const [slideIndices, setSlideIndices] = useState(() =>
    Object.fromEntries(projectsData.map((p) => [p.id, 0])),
  );
  const [modalVideo, setModalVideo] = useState(null);

  const handlePrevSlide = (projectId) => {
    setSlideIndices((prev) => {
      const current = prev[projectId] ?? 0;
      return { ...prev, [projectId]: current === 0 ? 2 : current - 1 };
    });
  };

  const handleNextSlide = (projectId) => {
    setSlideIndices((prev) => {
      const current = prev[projectId] ?? 0;
      return { ...prev, [projectId]: current === 2 ? 0 : current + 1 };
    });
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-darkBg border-t border-white/5">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-androidGreen/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] rounded-full bg-accentOrange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-20">
          <h2 className="text-xs font-mono tracking-widest text-accentOrange uppercase mb-2">04 / Creations</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            FEATURED PROJECTS
          </h3>
          <div className="w-12 h-[2px] bg-accentOrange mt-3" />
        </div>

        <div className="flex flex-col gap-32">
          {projectsData.map((project, idx) => {
            const currentSlide = slideIndices[project.id] ?? 0;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.rawId}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div className={`lg:col-span-6 w-full ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative group rounded-3xl overflow-hidden glass-card border border-white/10 p-4 aspect-[4/3] flex flex-col justify-between">
                    <div className="relative flex-grow flex items-center justify-center overflow-hidden rounded-2xl bg-black/40">
                      <AnimatePresence mode="wait">
                        {currentSlide === 0 && (
                          <motion.div
                            key="slide0"
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full flex items-center justify-center p-4 relative"
                          >
                            {projectThumbnail(project)}
                            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/80 border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono text-androidGreen">
                              <Smartphone className="w-3.5 h-3.5" />
                              <span>Live UI Mockup</span>
                            </div>
                          </motion.div>
                        )}

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
                              {project.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2.5 text-sm text-white/80">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accentOrange mt-1.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}

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

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-1.5">
                        {[0, 1, 2].map((dot) => (
                          <button
                            key={dot}
                            onClick={() => setSlideIndices((prev) => ({ ...prev, [project.id]: dot }))}
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

                <div className={`lg:col-span-6 flex flex-col justify-center text-left ${!isEven ? 'lg:order-1' : ''}`}>
                  <span className="text-xs font-mono tracking-widest text-androidGreen uppercase mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-outfit font-black tracking-tight text-white mb-4">
                    {project.title}
                  </h3>

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

                  <div className="flex flex-wrap gap-4 items-center">
                    {project.store && (
                      <Magnetic>
                        <a
                          href={project.store}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary px-5 py-2.5 text-sm flex items-center gap-2 cursor-none"
                        >
                          <Play className="w-4 h-4 text-white fill-white" />
                          Play Store
                        </a>
                      </Magnetic>
                    )}

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

                    {project.video && (
                      <Magnetic>
                        <button
                          onClick={() => setModalVideo(project)}
                          className="btn-secondary px-5 py-2.5 text-sm flex items-center gap-2 cursor-none"
                        >
                          <Play className="w-4 h-4" />
                          Watch Preview
                        </button>
                      </Magnetic>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
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

              <div className="bg-black/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-video relative overflow-hidden">
                <Play className="w-16 h-16 text-accentOrange drop-shadow-[0_0_15px_rgba(255,122,0,0.5)] mb-4" />
                <h5 className="text-base font-bold text-white mb-2">Open Preview</h5>
                <Magnetic>
                  <a
                    href={modalVideo.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-6 py-3 flex items-center gap-2 cursor-none text-sm font-semibold"
                  >
                    Open Link
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
