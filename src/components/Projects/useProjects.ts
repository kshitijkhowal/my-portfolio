import { useState } from 'react';
import { getProjects } from '../../lib/portfolioData';

export type PortfolioProject = ReturnType<typeof getProjects>[number];

export function useProjects() {
  const projects = getProjects();
  const [slideIndices, setSlideIndices] = useState<Record<number, number>>(() =>
    Object.fromEntries(projects.map((project) => [project.id, 0])),
  );
  const [modalVideo, setModalVideo] = useState<PortfolioProject | null>(null);
  const setSlide = (id: number, slide: number) => setSlideIndices((current) => ({ ...current, [id]: slide }));
  const previousSlide = (id: number) => setSlideIndices((current) => {
    const slide = current[id] ?? 0;
    return { ...current, [id]: slide === 0 ? 2 : slide - 1 };
  });
  const nextSlide = (id: number) => setSlideIndices((current) => {
    const slide = current[id] ?? 0;
    return { ...current, [id]: slide === 2 ? 0 : slide + 1 };
  });
  return { projects, slideIndices, modalVideo, setModalVideo, setSlide, previousSlide, nextSlide };
}
