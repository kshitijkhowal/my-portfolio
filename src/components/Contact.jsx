import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import Magnetic from './Magnetic';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Custom LeetCode SVG icon since Lucide doesn't have it
const LeetCodeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.105 18.566a5.024 5.024 0 0 1-1.513.443c-2.4.398-3.933-.748-4.779-1.95a10.914 10.914 0 0 1-1.814-3.69c-.498-1.562-.46-3.13.064-4.526.096-.25.32-.416.592-.416h2.894c.338 0 .612.274.612.612v.111c0 .292-.206.544-.495.592-1.25.207-1.83 1.154-1.729 2.547.08 1.108.637 2.212 1.5 3.018.66.618 1.488.948 2.378.948h2.091c.338 0 .612.274.612.612v1.077c0 .292-.206.544-.495.592a5.4 5.4 0 0 1-.941.08zm-7.618-9.01a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm12.39-1.397a1.5 1.5 0 0 1-1.365 1.492H13.63a1.5 1.5 0 0 1-1.492-1.365 1.5 1.5 0 0 1 1.365-1.492h5.882a1.5 1.5 0 0 1 1.492 1.365zm-2.036 5.372a1.5 1.5 0 0 1-1.365 1.492h-3.791a1.5 1.5 0 0 1-1.492-1.365 1.5 1.5 0 0 1 1.365-1.492h3.791a1.5 1.5 0 0 1 1.492 1.365z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request send
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-darkBg border-t border-white/5">
      {/* Background neon glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-androidGreen/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-accentOrange/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <h2 className="text-xs font-mono tracking-widest text-accentOrange uppercase mb-2">06 / Connect</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            GET IN TOUCH
          </h3>
          <div className="w-12 h-[2px] bg-accentOrange mt-3" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Icons */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-2xl font-outfit font-bold text-white mb-6">
                Let's construct something outstanding together.
              </h4>
              <p className="text-white/60 leading-relaxed mb-8">
                If you are a recruiter looking for a mobile engineer focused on React Native and iOS, or need advice on visionOS computing prototyping, send a message.
              </p>

              {/* Direct Info details */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accentOrange" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/40 block">Email Address</span>
                    <a href="mailto:mukeshyogidoss@gmail.com" className="text-sm font-bold text-white hover:text-accentOrange transition-colors cursor-none">
                      mukeshyogidoss@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-androidGreen" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/40 block">Current Location</span>
                    <span className="text-sm font-bold text-white">
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links (Icon-only with premium hover animations) */}
            <div>
              <h5 className="text-xs font-mono uppercase text-white/40 tracking-wider mb-4">Find me on</h5>
              <div className="flex items-center gap-4">
                
                {/* LinkedIn */}
                <Magnetic>
                  <a
                    href="https://linkedin.com/in/mukeshyogidoss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 flex items-center justify-center transition-all duration-300 text-white hover:text-[#0077b5] cursor-none"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </Magnetic>

                {/* GitHub */}
                <Magnetic>
                  <a
                    href="https://github.com/mukeshyogidoss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 hover:border-white/50 hover:bg-white/10 flex items-center justify-center transition-all duration-300 text-white cursor-none"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </Magnetic>

                {/* LeetCode */}
                <Magnetic>
                  <a
                    href="https://leetcode.com/u/mukeshyogidoss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 hover:border-[#ffa116]/50 hover:bg-[#ffa116]/10 flex items-center justify-center transition-all duration-300 text-white hover:text-[#ffa116] cursor-none"
                    aria-label="LeetCode Profile"
                  >
                    <LeetCodeIcon className="w-5 h-5" />
                  </a>
                </Magnetic>

              </div>
            </div>
          </div>

          {/* Right Column: Vercel/Linear Premium Input Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card p-8 rounded-3xl border border-white/5 bg-white/5 relative overflow-hidden">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-androidGreen/10 flex items-center justify-center mb-6 border border-androidGreen/20">
                    <MessageSquare className="w-8 h-8 text-androidGreen" />
                  </div>
                  <h4 className="text-2xl font-outfit font-black text-white mb-2">Message Dispatched!</h4>
                  <p className="text-sm text-white/50 max-w-sm leading-relaxed">
                    Thank you for reaching out. Mukesh will respond to your message via email at the earliest opportunity.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-white/40 mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accentOrange focus:ring-1 focus:ring-accentOrange transition-all duration-300 cursor-none"
                      placeholder="Jane Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-white/40 mb-2">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accentOrange focus:ring-1 focus:ring-accentOrange transition-all duration-300 cursor-none"
                      placeholder="jane@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-white/40 mb-2">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accentOrange focus:ring-1 focus:ring-accentOrange transition-all duration-300 cursor-none resize-none"
                      placeholder="Describe your project details or potential internship role..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Magnetic>
                      <button
                        type="submit"
                        className="btn-primary w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 cursor-none text-sm"
                      >
                        Send Message
                        <Send className="w-4 h-4 text-white" />
                      </button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
