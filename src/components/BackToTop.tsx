import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear smoothly after scrolling beyond first fold (~450px or 60% of viewport)
      const threshold = Math.max(420, window.innerHeight * 0.6);
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      className={`fixed bottom-6 right-6 z-40 min-w-[44px] min-h-[44px] p-3 rounded-full bg-[#3d1a0e]/95 hover:bg-[#a26822] text-[#f8f6f0] shadow-lg border border-[#e6dfd3] backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-[#a26822] group ${
        visible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
      title="Voltar ao topo"
    >
      <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};
