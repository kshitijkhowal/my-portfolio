import { useState } from 'react';

export function useExperience() {
  const [expandedExperiences, setExpandedExperiences] = useState<Record<string, boolean>>({});
  const toggleHighlights = (id: string) => {
    setExpandedExperiences((current) => ({ ...current, [id]: !current[id] }));
  };
  return { expandedExperiences, toggleHighlights };
}
