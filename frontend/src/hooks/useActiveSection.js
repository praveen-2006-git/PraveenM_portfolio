import { useEffect, useState } from 'react';

/**
 * Performant scroll spy using IntersectionObserver
 * Tracks which section is currently in view without polling or layout-thrashing scroll listeners.
 */
export function useActiveSection(sectionIds, offset = '-20% 0px -60% 0px') {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    // Check if IntersectionObserver is supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: offset,
      threshold: [0, 0.2, 0.5]
    };

    const visibleMap = new Map();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        visibleMap.set(entry.target.id, entry.isIntersecting);
      });

      // Find the first intersecting section in order
      for (const id of sectionIds) {
        if (visibleMap.get(id)) {
          setActiveSection(id);
          break;
        }
      }
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, offset]);

  return activeSection;
}
