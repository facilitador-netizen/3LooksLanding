import React from 'react';
import { DIFERENCIAIS_DATA } from '../data/mockData';
import { Check, X } from 'lucide-react';

export const Diferenciais: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-[#faf9f6] border-y border-[#e6dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="font-mono-editorial text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[#a26822] mb-3">
            Diferenciais & Filosofia
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#3d1a0e] tracking-tight text-balance mb-6">
            Você não compra decoração.{' '}
            <span className="font-normal italic text-[#a26822]">Você compra tranquilidade.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#3d1a0e]/80 leading-relaxed font-light font-sans-editorial max-w-2xl mx-auto">
            {DIFERENCIAIS_DATA.subtitle}
          </p>
        </div>

        {/* Real Before / After Image Transformation Card */}
        <div className="mb-20">
          <div className="bg-[#f8f6f0] border border-[#e6dfd3] rounded-2xl p-5 sm:p-7 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#e6dfd3] mb-5 gap-3">
              <div>
                <h3 className="font-serif-editorial text-base sm:text-lg font-bold text-[#3d1a0e]">
                  Transformação Real de Espaço
                </h3>
                <p className="text-xs text-[#3d1a0e]/70 font-light">
                  Living em São Paulo: de um ambiente saturado a um refúgio acolhedor, iluminado e atemporal
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono-editorial text-[10px] uppercase tracking-wider text-[#a26822] bg-[#e6dfd3]/60 px-3 py-1 rounded-full font-bold">
                  Comparativo Fotográfico Oficial
                </span>
              </div>
            </div>

            <div
              data-cursor="portfolio"
              className="relative rounded-xl overflow-hidden aspect-[16/9] bg-[#e6dfd3]/50 border border-[#e6dfd3] cursor-pointer"
            >
              <img
                src={DIFERENCIAIS_DATA.antesDepoisImage}
                alt="Transformação de ambiente: Antes e Depois da ambientação do Estúdio Três Olhares"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Subtle architectural labels */}
              <div className="absolute top-4 left-4 bg-[#3d1a0e]/85 backdrop-blur-xs text-white text-[10px] font-mono-editorial font-bold px-3 py-1.5 uppercase tracking-wider rounded-lg shadow-xs">
                Antes · Estado Inicial
              </div>
              <div className="absolute top-4 right-4 bg-[#a26822]/95 backdrop-blur-xs text-white text-[10px] font-mono-editorial font-bold px-3 py-1.5 uppercase tracking-wider rounded-lg shadow-xs">
                Depois · Curadoria Três Olhares
              </div>
            </div>
          </div>
        </div>

        {/* COMPARATIVE SECTION: DUAS COLUNAS LADO A LADO */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 pb-4 border-b border-[#e6dfd3]">
            <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#3d1a0e]">
              O Modelo Convencional <span className="font-normal italic text-[#a26822]">vs</span> A Experiência Três Olhares
            </h3>
            <p className="text-xs sm:text-sm text-[#3d1a0e]/70 mt-1 font-light">
              Entenda o que muda na gestão, orçamento e tranquilidade do seu lar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Column 1: O Modelo Convencional */}
            <div className="bg-[#f8f6f0] border border-[#e6dfd3] p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#e6dfd3] mb-6">
                  <div>
                    <span className="font-mono-editorial text-[10px] uppercase tracking-wider text-[#3d1a0e]/50 font-bold">Abordagem Comum</span>
                    <h4 className="font-serif-editorial text-xl font-bold text-[#3d1a0e]/75">O Modelo Convencional</h4>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#e6dfd3] flex items-center justify-center text-[#3d1a0e]/60">
                    <X className="w-4 h-4" />
                  </span>
                </div>

                <ul className="space-y-4">
                  {DIFERENCIAIS_DATA.modeloConvencional.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#3d1a0e]/70 leading-relaxed font-light">
                      <span className="mt-1 w-4 h-4 rounded-full bg-[#e6dfd3] text-[#3d1a0e]/60 flex items-center justify-center shrink-0">
                        <X className="w-2.5 h-2.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#e6dfd3] text-xs text-[#3d1a0e]/60 italic font-light">
                Resultado frequente: sobrecarga mental e ambiente sem harmonia estética.
              </div>
            </div>

            {/* Column 2: A Experiência Três Olhares */}
            <div className="bg-[#f8f6f0] border-2 border-[#a26822] p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between relative">
              <div className="absolute -top-3.5 right-6 bg-[#a26822] text-[#f8f6f0] font-mono-editorial text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full shadow-xs">
                Método Exclusivo
              </div>

              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#e6dfd3] mb-6">
                  <div>
                    <span className="font-mono-editorial text-[10px] uppercase tracking-wider text-[#a26822] font-bold">Nossa Assinatura</span>
                    <h4 className="font-serif-editorial text-xl font-bold text-[#3d1a0e]">A Experiência Três Olhares</h4>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#a26822]/15 flex items-center justify-center text-[#a26822]">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </div>

                <ul className="space-y-4">
                  {DIFERENCIAIS_DATA.experienciaTresOlhares.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#3d1a0e] font-normal leading-relaxed">
                      <span className="mt-1 w-4 h-4 rounded-full bg-[#a26822]/20 text-[#a26822] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#e6dfd3] text-xs text-[#a26822] font-semibold">
                Resultado garantido: entrega com chave na mão, emoção ao entrar e tranquilidade absoluta.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
