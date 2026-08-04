import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Smartphone, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';
import { getNav } from '../lib/portfolioData';

export default function Navbar() {
  const nav = getNav();
  const navItems = nav.items;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-navbar py-4' : 'bg-transparent py-6'
        }`}
      >
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-androidGreen via-accentOrange to-[#ffaa00] origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 group cursor-none"
            onClick={(e) => handleNavClick(e, '#')}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-androidGreen to-accentOrange p-[2px] flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
              <div className="w-full h-full bg-darkBg rounded-[10px] flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-androidGreen group-hover:text-accentOrange transition-colors duration-300" />
              </div>
            </div>
            <span className="font-outfit font-black text-xl tracking-tight text-white group-hover:glow-text-orange transition-all duration-300">
              {nav.brand.primary}<span className="text-accentOrange font-light">{nav.brand.accent}</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative font-sans text-sm font-medium transition-colors duration-300 py-1 cursor-none ${
                  activeSection === item.href.substring(1)
                    ? 'text-accentOrange'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accentOrange rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-secondary text-xs px-4 py-2 border border-white/10 flex items-center gap-2 hover:border-accentOrange/50 hover:bg-accentOrange/5 transition-all duration-300 cursor-none"
              >
                {nav.cta}
                <ArrowRight className="w-3.5 h-3.5 text-accentOrange" />
              </a>
            </Magnetic>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 cursor-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-darkBg/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-outfit text-xl font-bold tracking-wide ${
                    activeSection === item.href.substring(1)
                      ? 'text-accentOrange'
                      : 'text-white/70'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary text-center mt-4 w-full flex items-center justify-center gap-2"
              >
                {nav.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
