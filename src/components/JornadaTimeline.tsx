import React, { useState } from 'react';
import { JORNADA_DATA } from '../data/mockData';
import { CheckCircle2, ArrowRight, Compass, Ruler } from 'lucide-react';

export const JornadaTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const timelineDurations = [
    'Semana 1 · Encontro Sensorial',
    'Semanas 2–3 · Caderno de Curadoria',
    'Semanas 4–6 · Gestão & Logística',
    'O Grande Dia · Produção no Local',
  ];

  return (
    <section id="jornada" className="py-20 md:py-28 bg-[#faf9f6] border-t border-[#e6dfd3] relative overflow-hidden">
      {/* Subtle blueprint grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #3d1a0e 1px, transparent 1px), linear-gradient(to bottom, #3d1a0e 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-mono-editorial text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[#a26822] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Desenho Metodológico</span>
              <span className="text-[#3d1a0e]/30" aria-hidden="true">·</span>
              <span>Cronograma de Obra & Arte</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#3d1a0e] tracking-tight mb-4">
              Sua Jornada em <span className="font-normal italic text-[#a26822]">Linha do Tempo</span>
            </h2>
            <p className="text-base text-[#3d1a0e]/75 font-light leading-relaxed font-sans-editorial">
              O percurso linear desenhado pelo estúdio para conduzir seu imóvel do diagnóstico sensorial à entrega pronta para viver, com clareza milimétrica em cada fase.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#3d1a0e]/80 font-mono-editorial bg-[#f8f6f0] px-4 py-2.5 rounded-xl border border-[#e6dfd3] self-start md:self-auto font-medium shadow-2xs">
            <Ruler className="w-3.5 h-3.5 text-[#a26822]" />
            <span>4 Marcos de Projeto · Previsibilidade Total</span>
          </div>
        </div>

        {/* ARCHITECTURAL TIMELINE DRAWING (Desktop Horizontal Blueprint Track) */}
        <div className="hidden lg:block mb-12">
          {/* Continuous drafting axis line */}
          <div className="relative pt-8 pb-12">
            {/* The continuous architectural connecting line */}
            <div className="absolute top-[52px] left-[6%] right-[6%] h-[2px] bg-[#e6dfd3] z-0">
              <div 
                className="h-full bg-[#a26822] transition-all duration-500 ease-out"
                style={{ width: `${(activeStep / (JORNADA_DATA.length - 1)) * 100}%` }}
              />
            </div>

            {/* Dotted drawing markers */}
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {JORNADA_DATA.map((item, index) => {
                const isSelected = activeStep === index;
                const isCompleted = index <= activeStep;

                return (
                  <div key={item.step} className="flex flex-col items-center text-center">
                    {/* Architectural Milestone Node Button */}
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className="group cursor-pointer flex flex-col items-center focus-visible:outline-2 focus-visible:outline-[#a26822] rounded-xl"
                      aria-label={`Selecionar etapa ${item.step}: ${item.title}`}
                    >
                      {/* Node Circle */}
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-mono-editorial text-sm font-bold transition-all duration-300 relative ${
                          isSelected
                            ? 'bg-[#3d1a0e] text-[#f8f6f0] ring-4 ring-[#faf9f6] shadow-md scale-110'
                            : isCompleted
                            ? 'bg-[#a26822] text-[#f8f6f0] border-2 border-[#faf9f6]'
                            : 'bg-[#f8f6f0] text-[#3d1a0e]/50 border-2 border-[#e6dfd3] hover:border-[#a26822] hover:text-[#3d1a0e]'
                        }`}
                      >
                        {item.step}
                        {isSelected && (
                          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#a26822] rounded-full ring-2 ring-white" />
                        )}
                      </div>

                      {/* Phase duration badge */}
                      <div className="mt-3 text-[10px] font-mono-editorial uppercase tracking-wider text-[#a26822] font-bold">
                        {timelineDurations[index]}
                      </div>

                      {/* Step Title */}
                      <div
                        className={`mt-1 text-sm font-semibold transition-colors max-w-[200px] leading-snug ${
                          isSelected ? 'text-[#3d1a0e]' : 'text-[#3d1a0e]/60 group-hover:text-[#3d1a0e]'
                        }`}
                      >
                        {item.title}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Step Blueprint Card */}
          <div className="bg-[#f8f6f0] border-2 border-[#e6dfd3] p-8 rounded-2xl shadow-xs relative">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left Column: Index & Subtitle */}
              <div className="col-span-4 border-r border-[#e6dfd3] pr-8">
                <div className="flex items-center gap-2 text-xs font-mono-editorial text-[#a26822] uppercase tracking-wider font-bold mb-2">
                  <span>Marco {JORNADA_DATA[activeStep].step} de 04</span>
                  <span aria-hidden="true">·</span>
                  <span>{timelineDurations[activeStep]}</span>
                </div>
                <h3 className="font-serif-editorial text-3xl font-normal text-[#3d1a0e] leading-tight mb-3">
                  {JORNADA_DATA[activeStep].title}
                </h3>
                <p className="text-xs text-[#a26822] font-semibold leading-relaxed mb-6 font-mono-editorial">
                  {JORNADA_DATA[activeStep].subtitle}
                </p>
                <div className="p-3.5 bg-[#fcfbfa] border border-[#e6dfd3] rounded-xl text-[11px] text-[#3d1a0e]/75 font-medium">
                  Status: Alinhamento de escopo sem improvisos
                </div>
              </div>

              {/* Right Column: Detailed narrative & deliverables checklist */}
              <div className="col-span-8 pl-4">
                <p className="text-sm text-[#3d1a0e]/75 leading-relaxed mb-6 font-light">
                  {JORNADA_DATA[activeStep].description}
                </p>

                <div>
                  <h4 className="font-mono-editorial text-[10px] uppercase tracking-wider font-bold text-[#3d1a0e] mb-3">
                    Entregas oficiais deste marco:
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {JORNADA_DATA[activeStep].deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="bg-[#fcfbfa] p-3.5 rounded-xl border border-[#e6dfd3] text-xs text-[#3d1a0e]/85 flex items-start gap-2 shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#a26822] shrink-0 mt-0.5" />
                        <span className="leading-snug">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e6dfd3] flex items-center justify-between">
                  <div className="text-xs text-[#3d1a0e]/50 font-mono-editorial">
                    Navegação do desenho: utilize os botões ou clique nos marcos acima
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                      className="px-4 py-2 font-mono-editorial text-[10px] uppercase font-bold border border-[#e6dfd3] disabled:opacity-30 rounded-xl hover:bg-[#e6dfd3]/50 transition-colors cursor-pointer text-[#3d1a0e]"
                    >
                      Etapa Anterior
                    </button>
                    <button
                      type="button"
                      disabled={activeStep === JORNADA_DATA.length - 1}
                      onClick={() => setActiveStep((prev) => Math.min(JORNADA_DATA.length - 1, prev + 1))}
                      className="px-4 py-2 font-mono-editorial text-[10px] uppercase font-bold bg-[#3d1a0e] text-[#f8f6f0] disabled:opacity-30 rounded-xl hover:bg-[#a26822] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>Avançar para Marco 0{activeStep + 2}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET DRAWING TIMELINE (Connected Vertical Blueprint Track) */}
        <div className="lg:hidden relative border-l-2 border-[#a26822]/40 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {JORNADA_DATA.map((item, idx) => (
            <div key={item.step} className="relative">
              {/* Continuous Node on Track */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-[#3d1a0e] text-[#f8f6f0] flex items-center justify-center font-mono-editorial text-xs font-bold ring-4 ring-[#faf9f6]">
                {item.step}
              </div>

              <div className="bg-[#f8f6f0] border border-[#e6dfd3] p-6 rounded-2xl shadow-xs">
                <div className="text-[10px] font-mono-editorial uppercase tracking-wider text-[#a26822] font-bold mb-1">
                  {timelineDurations[idx]}
                </div>
                <h3 className="font-serif-editorial text-xl font-normal text-[#3d1a0e] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a26822] font-semibold mb-3 font-mono-editorial">
                  {item.subtitle}
                </p>
                <p className="text-xs text-[#3d1a0e]/75 leading-relaxed mb-4 font-light">
                  {item.description}
                </p>

                <div className="border-t border-[#e6dfd3] pt-3 space-y-2">
                  <div className="font-mono-editorial text-[9px] uppercase tracking-wider text-[#3d1a0e]/60 font-bold">
                    Entregas da etapa:
                  </div>
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#3d1a0e]/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a26822] shrink-0 mt-1.5" />
                      <span className="leading-snug">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
