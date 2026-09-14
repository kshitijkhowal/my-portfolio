import type { MouseEvent } from 'react';
import { getNav } from '../../lib/portfolioData';

export function useFooter() {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return { nav: getNav(), handleNavClick };
}
