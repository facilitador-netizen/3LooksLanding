import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenPendencias: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onOpenPendencias }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Sua Jornada', href: '#jornada' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#ebe3d4]/95 backdrop-blur-md border-b border-[#d2c4ac] shadow-xs'
          : 'bg-[#faf9f6]/90 backdrop-blur-sm border-b border-[#e6dfd3]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Official Brand Logo Lockup */}
        <a href="#" className="flex items-center shrink-0" aria-label="Três Olhares Início">
          <BrandLogo size="sm" layout="horizontal" />
        </a>

        {/* Zone 2: Single-line clean navigation links */}
        <nav className="hidden lg:flex items-center gap-7 font-mono-editorial text-[11px] uppercase tracking-wider font-medium text-[#3d1a0e]/85">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#a26822] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#a26822] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenPendencias}
            className="text-[10px] font-mono-editorial uppercase font-medium text-[#3d1a0e]/80 hover:text-[#a26822] transition-colors whitespace-nowrap shrink-0 cursor-pointer px-3 py-1.5 rounded-lg border border-[#d2c4ac] bg-[#f8f6f0] hover:border-[#a26822]"
            title="Ver status das pendências do briefing"
          >
            Pendências (5)
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-4 py-2.5 text-[10px] font-mono-editorial tracking-wider uppercase font-bold text-[#f8f6f0] bg-[#3d1a0e] hover:bg-[#a26822] transition-all rounded-xl shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            Falar com o Estúdio
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            className="p-2 text-[#3d1a0e] hover:text-[#a26822] transition-colors rounded-lg focus-visible:outline-2 focus-visible:outline-[#a26822]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f8f6f0] border-b border-[#e6dfd3] px-6 py-6 space-y-4 shadow-lg transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 font-mono-editorial">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-wider font-semibold text-[#3d1a0e] hover:text-[#a26822] py-2.5 border-b border-[#e6dfd3] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#a26822]" />
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-center text-[11px] font-mono-editorial tracking-wider uppercase font-bold text-[#f8f6f0] bg-[#3d1a0e] hover:bg-[#a26822] transition-colors rounded-xl"
            >
              Falar com o Estúdio
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPendencias();
              }}
              className="w-full py-2 text-center text-[10px] font-mono-editorial uppercase text-[#3d1a0e] border border-[#d2c4ac] bg-[#f8f6f0] rounded-lg"
            >
              Ver Status das Pendências (5)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
