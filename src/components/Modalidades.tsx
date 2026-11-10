import React from 'react';
import { MODALIDADES_DATA, GESTAO_OBRAS_DATA } from '../data/mockData';
import { Check, Info, ArrowRight, HelpCircle, HardHat, Sparkles } from 'lucide-react';
import { Modality } from '../types';

interface ModalidadesProps {
  onSelectModality: (modality: Modality) => void;
}

export const Modalidades: React.FC<ModalidadesProps> = ({ onSelectModality }) => {
  return (
    <section id="modalidades" className="py-20 md:py-28 bg-[#fcfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="font-mono-editorial text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[#a26822] mb-3">
            Formatos de Atuação
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#3d1a0e] tracking-tight mb-4">
            Modalidades Feitas para o <span className="font-normal italic text-[#a26822]">seu Momento</span>
          </h2>
          <p className="text-base text-[#3d1a0e]/75 font-light leading-relaxed font-sans-editorial">
            Seja para encontrar a peça de arte perfeita, dar vida nova a uma casa já mobiliada ou produzir um imóvel por completo com assinatura autoral.
          </p>
        </div>

        {/* Modalidades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {MODALIDADES_DATA.map((modality) => {
            return (
              <div
                key={modality.id}
                className={`bg-[#f8f6f0] rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 border ${
                  modality.isPopular
                    ? 'border-[#a26822] shadow-sm relative'
                    : 'border-[#e6dfd3] hover:border-[#a26822]/60'
                }`}
              >
                {modality.isPopular && (
                  <div className="absolute -top-3 left-6 bg-[#a26822] text-[#f8f6f0] font-mono-editorial text-[9px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Mais Procurada
                  </div>
                )}

                <div>
                  {/* Clean unboxed index and title */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-mono-editorial text-xs text-[#a26822] font-bold">
                      {modality.number}
                    </span>
                    <span className="font-mono-editorial text-[10px] text-[#3d1a0e]/50 uppercase tracking-wider font-semibold">
                      Estúdio
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-xl font-bold text-[#3d1a0e] leading-snug mb-2">
                    {modality.title}
                  </h3>

                  <p className="font-mono-editorial text-[11px] text-[#a26822] font-semibold mb-3">
                    {modality.tagline}
                  </p>

                  <p className="text-xs text-[#3d1a0e]/70 leading-relaxed mb-6 font-light">
                    {modality.description}
                  </p>

                  {/* Scope Review Note for Transformação */}
                  {modality.scopeNote && (
                    <div className="mb-6 p-3.5 bg-[#fcfbfa] border border-[#e6dfd3] rounded-xl text-[11px] text-[#3d1a0e]/75 leading-relaxed">
                      <div className="flex items-center gap-1.5 font-bold text-[#a26822] mb-1">
                        <Info className="w-3.5 h-3.5 shrink-0" />
                        <span>Escopo técnico delimitado</span>
                      </div>
                      <p>
                        A Três Olhares foca em curadoria, styling e ambientação. Intervenções civis pesadas (reforma estrutural/alvenaria) não são anunciadas como serviço validado.
                      </p>
                    </div>
                  )}

                  {/* Deliverables List */}
                  <div className="border-t border-[#e6dfd3] pt-4 mb-6">
                    <div className="font-mono-editorial text-[10px] uppercase tracking-wider text-[#3d1a0e]/60 font-bold mb-3">
                      O que está contemplado:
                    </div>
                    <ul className="space-y-2.5">
                      {modality.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#3d1a0e]/85">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#a26822] shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e6dfd3]">
                  <button
                    type="button"
                    onClick={() => onSelectModality(modality)}
                    className="w-full py-2.5 px-4 font-mono-editorial text-[10px] tracking-wider uppercase font-bold text-[#3d1a0e] bg-white hover:bg-[#3d1a0e] hover:text-[#f8f6f0] border border-[#e6dfd3] transition-colors rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Consultar formato</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CLARIFICATION CARD: "Vocês farão gestão de obras?" */}
        <div className="bg-[#f8f6f0] border border-[#e6dfd3] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-5 space-y-2">
              <div className="flex items-center gap-2 font-mono-editorial text-[10px] font-bold uppercase tracking-wider text-[#a26822]">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Esclarecimento de Escopo</span>
              </div>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#3d1a0e] leading-snug">
                {GESTAO_OBRAS_DATA.question}
              </h3>
              <p className="text-sm font-semibold text-[#a26822]">
                {GESTAO_OBRAS_DATA.answerTitle}
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#fcfbfa] p-5 sm:p-6 rounded-xl border border-[#e6dfd3] space-y-3 text-xs text-[#3d1a0e]/80 leading-relaxed font-light">
              <p>{GESTAO_OBRAS_DATA.description}</p>
              <p className="pt-2 border-t border-[#e6dfd3] text-[#3d1a0e]/70">
                <strong className="text-[#3d1a0e] font-semibold">Reformas estruturais prévias: </strong>
                {GESTAO_OBRAS_DATA.civilWorksResolution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
