import React, { useEffect, useState } from 'react';

/**
 * Minimalist, editorial scroll progress bar pinned to the top of the screen.
 * Tracks user progress with a subtle matte gold and corten gradient hairline.
 */
export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        const currentProgress = Math.min(1, Math.max(0, scrollTop / docHeight));
        setProgress(currentProgress);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-[#e6dfd3]/40 pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-[#a26822] via-[#E0B861] to-[#3d1a0e] transition-transform duration-75 ease-out origin-left shadow-2xs"
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
};
