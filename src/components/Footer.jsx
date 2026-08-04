import React from 'react';
import { Smartphone, Heart } from 'lucide-react';
import { getNav } from '../lib/portfolioData';

export default function Footer() {
  const nav = getNav();

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
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-androidGreen to-accentOrange p-[2px] flex items-center justify-center">
            <div className="w-full h-full bg-darkBg rounded-[6px] flex items-center justify-center">
              <Smartphone className="w-3.5 h-3.5 text-androidGreen" />
            </div>
          </div>
          <span className="font-outfit font-black text-sm tracking-tight text-white">
            {nav.brand.footer} <span className="text-white/40 font-normal">| © {new Date().getFullYear()}</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-white/40">
          {nav.items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-white transition-colors cursor-none"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-xs text-white/30 font-mono uppercase tracking-wider">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-accentOrange fill-accentOrange animate-pulse" />
          <span>for Recruiters</span>
        </div>

      </div>
    </footer>
  );
}
