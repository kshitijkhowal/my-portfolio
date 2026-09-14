import { useState } from 'react';

export function useApp() {
  const [loading, setLoading] = useState(true);
  return { loading, completeLoading: () => setLoading(false) };
}
