import React, { useEffect, useRef, useState } from 'react';

type CursorType = 'default' | 'clickable' | 'portfolio' | 'text' | 'hidden';

export const CustomCursor: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position references for smooth 60/120fps animation
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable custom cursor if fine pointer (mouse/trackpad) is present
    const finePointerQuery = window.matchMedia('(pointer: fine)');
    const updatePointerCapability = () => {
      const hasFinePointer = finePointerQuery.matches;
      setIsTouchDevice(!hasFinePointer);
      if (hasFinePointer) {
        document.body.classList.add('has-custom-cursor');
      } else {
        document.body.classList.remove('has-custom-cursor');
      }
    };

    updatePointerCapability();
    finePointerQuery.addEventListener('change', updatePointerCapability);

    if (!finePointerQuery.matches) {
      return () => {
        finePointerQuery.removeEventListener('change', updatePointerCapability);
        document.body.classList.remove('has-custom-cursor');
      };
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instant update of the precision dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Detect hover target type
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Text input detection
      if (target.closest('input:not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]), textarea, [contenteditable="true"]')) {
        setCursorType('text');
        return;
      }

      // 2. Portfolio card or project image detection
      if (
        target.closest('[data-cursor="portfolio"]') ||
        target.closest('#portfolio article') ||
        target.closest('#portfolio .aspect-\\[16\\/11\\]') ||
        target.closest('[data-project-card="true"]')
      ) {
        setCursorType('portfolio');
        return;
      }

      // 3. General clickable elements
      if (
        target.closest('button, a, [role="button"], [data-cursor="clickable"], input[type="submit"], input[type="button"], select, summary, label') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setCursorType('clickable');
        return;
      }

      setCursorType('default');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursorType('hidden');
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp loop for the trailing ring
    const render = () => {
      const factor = 0.18; // Smooth dampening factor
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * factor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * factor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    rafId.current = requestAnimationFrame(render);

    return () => {
      finePointerQuery.removeEventListener('change', updatePointerCapability);
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (isTouchDevice) {
    return null;
  }

  // Derive size, scale, and classes based on cursor type and click state
  const isPortfolio = cursorType === 'portfolio';
  const isClickable = cursorType === 'clickable';
  const isText = cursorType === 'text';
  const isHidden = !isVisible || cursorType === 'hidden';

  // Scale classes with smooth transition
  let scaleClass = 'scale-100';
  let borderClass = 'border-[#a26822]/40 bg-[#a26822]/5';

  if (isClicking) {
    scaleClass = 'scale-90';
  } else if (isPortfolio) {
    scaleClass = 'scale-[2.2]';
    borderClass = 'border-[#a26822] bg-[#fcfbfa]/90 shadow-md backdrop-blur-xs';
  } else if (isClickable) {
    scaleClass = 'scale-[1.5]';
    borderClass = 'border-[#a26822] bg-[#a26822]/15 shadow-xs';
  } else if (isText) {
    scaleClass = 'scale-50 opacity-0';
  }

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isHidden ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      {/* Precision Inner Dot (Instant Response) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-[#a26822] pointer-events-none transition-all duration-150 ease-out will-change-transform ${
          isPortfolio
            ? 'opacity-0 scale-0'
            : isClickable
            ? 'scale-75 bg-[#3d1a0e]'
            : isText
            ? 'opacity-0'
            : 'opacity-100 scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Fluid Trailing Ring with Editorial Scale Reaction */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none flex items-center justify-center transition-all duration-300 ease-out will-change-transform ${borderClass} ${scaleClass}`}
        style={{ willChange: 'transform' }}
      >
        {/* Subtle Editorial Label inside ring when hovering over portfolio works */}
        {isPortfolio && (
          <span className="font-mono-editorial text-[7.5px] uppercase font-bold tracking-[0.2em] text-[#3d1a0e] select-none animate-in fade-in zoom-in-75 duration-200">
            Ver
          </span>
        )}
      </div>
    </div>
  );
};
