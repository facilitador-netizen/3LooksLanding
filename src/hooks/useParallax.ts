import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  speed?: number; // Multiplier: typically 0.08 to 0.18 for elegant, subtle depth
  maxOffset?: number; // Max vertical shift in pixels
}

/**
 * High-performance hook for smooth editorial parallax scrolling.
 * Uses requestAnimationFrame and bounding rect relative to the viewport center.
 * Automatically respects prefers-reduced-motion.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(options: ParallaxOptions = {}) {
  const { speed = 0.12, maxOffset = 36 } = options;
  const ref = useRef<T | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Respect reduced motion accessibility
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let rafId: number;

    const calculateOffset = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only perform calculation if element is within or adjacent to viewport
      if (rect.bottom >= -100 && rect.top <= windowHeight + 100) {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distanceFromCenter = elementCenter - viewportCenter;

        const calculated = distanceFromCenter * speed;
        const clamped = Math.max(-maxOffset, Math.min(maxOffset, calculated));
        setOffsetY(clamped);
      }
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(calculateOffset);
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    // Initial check
    onScrollOrResize();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [speed, maxOffset]);

  return { ref, offsetY };
}
