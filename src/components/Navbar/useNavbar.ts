import { useEffect, useState, type MouseEvent } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { getNav } from '../../lib/portfolioData';

export function useNavbar() {
  const nav = getNav();
  const navItems = nav.items;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const section = item.href.substring(1);
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return {
    nav,
    navItems,
    mobileMenuOpen,
    setMobileMenuOpen,
    scrolled,
    activeSection,
    scaleX,
    handleNavClick,
  };
}
