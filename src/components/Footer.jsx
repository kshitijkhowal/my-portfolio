import React from 'react';
import { Smartphone, Heart } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#111111] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Brand Logo & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-androidGreen to-accentOrange p-[2px] flex items-center justify-center">
            <div className="w-full h-full bg-darkBg rounded-[6px] flex items-center justify-center">
              <Smartphone className="w-3.5 h-3.5 text-androidGreen" />
            </div>
          </div>
          <span className="font-outfit font-black text-sm tracking-tight text-white">
            KSHITIJ KHOWAL <span className="text-white/40 font-normal">| © {new Date().getFullYear()}</span>
          </span>
        </div>

        {/* Center Side: Nav links shortcut */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-white/40">
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors cursor-none">About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-white transition-colors cursor-none">Skills</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="hover:text-white transition-colors cursor-none">Experience</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-white transition-colors cursor-none">Projects</a>
          <a href="#achievements" onClick={(e) => handleNavClick(e, '#achievements')} className="hover:text-white transition-colors cursor-none">Achievements</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors cursor-none">Contact</a>
        </div>

        {/* Right Side: Made with Heart credit */}
        <div className="flex items-center gap-1.5 text-xs text-white/30 font-mono uppercase tracking-wider">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-accentOrange fill-accentOrange animate-pulse" />
          <span>for Recruiters</span>
        </div>

      </div>
    </footer>
  );
}
