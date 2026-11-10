import React, { useState } from 'react';
import { HERO_DATA } from '../data/mockData';
import { Compass, Truck, Palette } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref: imageContainerRef, offsetY } = useParallax<HTMLDivElement>({ speed: 0.14, maxOffset: 42 });

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#fcfbfa]">
      {/* Decorative hairline grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#3d1a0e 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Subtle architectural kicker without pills */}
        <div className="flex items-center gap-2 font-mono-editorial text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold text-[#a26822] mb-6">
          <span>Estúdio de Curadoria</span>
          <span className="text-[#3d1a0e]/30" aria-hidden="true">·</span>
          <span>Produção</span>
          <span className="text-[#3d1a0e]/30" aria-hidden="true">·</span>
          <span>Styling</span>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-in fade-in duration-700">
            <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light text-[#3d1a0e] leading-[1.12] tracking-tight text-balance mb-6">
              Seu espaço não apenas bonito, mas{' '}
              <span className="font-normal italic text-[#a26822]">verdadeiramente seu</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#3d1a0e]/80 leading-relaxed max-w-2xl font-light mb-10 font-sans-editorial">
              {HERO_DATA.subtext}
            </p>

            {/* Core Services Description (Curadoria autoral, Gestão de fornecedores, Produção final) */}
            <div className="border-t border-[#e6dfd3] pt-8 space-y-6">
              <div className="font-mono-editorial text-[11px] uppercase tracking-wider font-bold text-[#a26822]">
                Nossa atuação integrada
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {HERO_DATA.services.map((service, index) => {
                  const icons = [Compass, Truck, Palette];
                  const Icon = icons[index % icons.length];
                  return (
                    <div key={service.title} className="space-y-2 bg-[#f8f6f0]/70 p-4 rounded-xl border border-[#e6dfd3]/80">
                      <div className="flex items-center gap-2 text-[#a26822]">
                        <Icon className="w-4 h-4 shrink-0" strokeWidth={2} />
                        <h2 className="font-serif-editorial text-base font-semibold text-[#3d1a0e]">{service.title}</h2>
                      </div>
                      <p className="text-xs text-[#3d1a0e]/75 leading-relaxed font-light font-sans-editorial">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Note: The two main buttons ("Conversar no WhatsApp" and "Iniciar diagnóstico online") have been intentionally removed from the Home Hero per specification */}
            <div className="mt-8 flex items-center gap-2 text-xs text-[#3d1a0e]/50 italic font-serif-editorial">
              <span>* Atendimento sob agendamento e consultoria presencial ou remota</span>
            </div>
          </div>

          {/* Right Column: Real Photograph with Smooth Parallax Depth */}
          <div className="lg:col-span-5 relative" ref={imageContainerRef}>
            <div className="relative rounded-2xl overflow-hidden bg-[#e6dfd3]/50 aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[560px] shadow-md border border-[#e6dfd3]">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-[#f8f6f0] animate-pulse flex items-center justify-center text-xs text-[#3d1a0e]/60 font-sans-editorial">
                  Carregando fotografia oficial...
                </div>
              )}
              {/* Parallax Image Element */}
              <div
                className="w-full h-full overflow-hidden"
                style={{
                  transform: `translate3d(0, ${offsetY}px, 0) scale(1.10)`,
                  willChange: 'transform',
                  transition: 'transform 0.15s cubic-bezier(0, 0, 0.2, 1)',
                }}
              >
                <img
                  src={HERO_DATA.trioImage}
                  alt="As três profissionais fundadoras do Estúdio Três Olhares em sessão fotográfica oficial"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover object-top transition-opacity duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Minimal caption tag inside photo corner */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#3d1a0e]/95 via-[#3d1a0e]/60 to-transparent p-5 text-white z-10 pointer-events-none">
                <div className="text-xs font-serif-editorial italic text-[#e6dfd3]">
                  Direção Criativa & Fundadoras
                </div>
                <div className="text-xs font-medium tracking-wide text-white font-sans-editorial">
                  Três Olhares — Curadoria, Arquitetura & Styling
                </div>
              </div>
            </div>

            {/* Architectural accent note */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#3d1a0e]/60">
              <span className="font-sans-editorial">São Paulo & Projetos em todo o Brasil</span>
              <span className="font-mono-editorial text-[10px] tabular-nums text-[#a26822]">Edição 2025/2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
