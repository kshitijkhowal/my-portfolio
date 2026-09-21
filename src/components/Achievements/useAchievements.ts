import type { MouseEvent } from 'react';
import confetti from 'canvas-confetti';
import { getAchievements } from '../../lib/portfolioData';

export function useAchievements() {
  const triggerConfetti = (
    event: MouseEvent<HTMLElement>,
    colorType: string,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors:
        colorType === 'orange'
          ? ['#ff7a00', '#ffaa00', '#ffffff']
          : ['#3ddc84', '#00ff7f', '#ffffff'],
      disableForReducedMotion: true,
    });
  };

  return { achievements: getAchievements(), triggerConfetti };
}
