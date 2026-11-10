import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  layout = 'horizontal',
  showSubtitle = true,
  className = '',
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  const svgDim = isSm ? 'w-8 h-6' : isLg ? 'w-16 h-12' : 'w-11 h-8';
  const titleSize = isSm ? 'text-base sm:text-lg' : isLg ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl';
  const subSize = isSm ? 'text-[8px] sm:text-[9px]' : isLg ? 'text-[11px]' : 'text-[9px] sm:text-[10px]';

  return (
    <div
      className={`inline-flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99] ${
        layout === 'vertical' ? 'flex-col text-center' : 'flex-row text-left'
      } ${className}`}
      id="meco-brand-logo"
    >
      {/* Official Três Olhares Custom Matte Gold Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${svgDim}`}>
        <svg viewBox="0 0 200 150" className="w-full h-full drop-shadow-xs" fill="none">
          <defs>
            <linearGradient id="tresOlharesMatteGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C99B4B" />
              <stop offset="50%" stopColor="#E0B861" />
              <stop offset="100%" stopColor="#A88235" />
            </linearGradient>
          </defs>
          <g fill="url(#tresOlharesMatteGoldGradient)">
            {/* Stylized 3 with leaf/eye curves */}
            <path d="M 82,28 H 118 C 120,28 120,31 117,34 L 95,58 C 114,58 128,70 126,92 C 124,110 112,118 100,118 C 110,110 118,100 117,88 C 115,72 104,64 92,64 C 90,64 88,62 90,60 L 110,34 H 82 C 79,34 79,28 82,28 Z" />
            <path d="M 78,58 C 50,80 50,102 100,118 C 58,100 58,78 78,58 Z" />
            <path d="M 122,58 C 150,80 150,102 100,118 C 142,100 142,78 122,58 Z" />
          </g>
        </svg>
      </div>

      {/* Typography Lockup */}
      <div className={`flex flex-col ${layout === 'vertical' ? 'items-center' : 'items-start'}`}>
        <span
          className={`font-display-editorial font-bold tracking-tight text-[#3d1a0e] uppercase leading-tight ${titleSize}`}
        >
          TRÊS OLHARES
        </span>

        {/* Golden rule separator */}
        <div className="w-6 sm:w-8 h-[1.5px] bg-[#C5A059] my-0.5 rounded-full" />

        {showSubtitle && (
          <div
            className={`font-sans-editorial font-bold uppercase text-[#2e3e2b]/90 tracking-widest leading-none flex items-center gap-1 sm:gap-1.5 ${subSize}`}
          >
            <span>CURADORIA</span>
            <span className="text-[#a26822] font-black text-[0.85em]">•</span>
            <span>PRODUÇÃO</span>
            <span className="text-[#a26822] font-black text-[0.85em]">•</span>
            <span>STYLING</span>
          </div>
        )}
      </div>
    </div>
  );
};
