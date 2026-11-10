import React from 'react';
import { QUEM_SOMOS_DATA } from '../data/mockData';
import { Compass, Layers, Palette } from 'lucide-react';

export const QuemSomos: React.FC = () => {
  const icons = [Compass, Layers, Palette];

  return (
    <section id="quem-somos" className="py-20 md:py-28 bg-[#fcfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header with Title and Mandatory Institutional Text */}
        <div className="max-w-3xl mb-14">
          <div className="font-mono-editorial text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[#a26822] mb-3">
            O Estúdio
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#3d1a0e] tracking-tight mb-6">
            Quem Somos
          </h2>
          <blockquote className="font-serif-editorial text-xl sm:text-2xl text-[#3d1a0e]/95 italic font-light leading-relaxed text-balance border-l-2 border-[#a26822]/40 pl-6 my-4">
            “{QUEM_SOMOS_DATA.institutionalText}”
          </blockquote>
        </div>

        {/* Individual 3 Professional Profiles */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-[#e6dfd3]">
            <h3 className="font-serif-editorial text-2xl font-light text-[#3d1a0e]">
              As Três <span className="font-normal italic text-[#a26822]">Especialistas</span>
            </h3>
            <span className="text-xs text-[#3d1a0e]/60 mt-1 sm:mt-0 font-light font-sans-editorial">
              Pilares complementares de apuração estética e execução
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {QUEM_SOMOS_DATA.professionals.map((prof, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={prof.id}
                  className="bg-[#f8f6f0] border border-[#e6dfd3] hover:border-[#a26822] transition-all p-6 rounded-2xl flex flex-col justify-between shadow-xs"
                >
                  <div>
                    {/* Visual Photo Card */}
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#e6dfd3]/50 border border-[#e6dfd3] mb-5 relative group">
                      <img
                        src={prof.image}
                        alt={`Profissional Três Olhares - ${prof.name}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#f8f6f0]/90 backdrop-blur-xs flex items-center justify-center text-[#a26822] shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mb-2">
                      <span className="font-mono-editorial text-[10px] uppercase tracking-wider text-[#a26822] font-bold">
                        Olhar 0{index + 1}
                      </span>
                      <h4 className="font-serif-editorial text-lg font-bold text-[#3d1a0e] mt-0.5">
                        {prof.name}
                      </h4>
                      <p className="text-xs text-[#3d1a0e]/60 mt-0.5 font-light">
                        {prof.role}
                      </p>
                    </div>

                    <div className="my-3 py-2 border-y border-[#e6dfd3] text-xs text-[#a26822] font-semibold font-mono-editorial">
                      {prof.focusArea}
                    </div>

                    <p className="text-xs text-[#3d1a0e]/75 leading-relaxed font-light">
                      {prof.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#e6dfd3] flex items-center justify-between text-[10px] font-mono-editorial text-[#3d1a0e]/50">
                    <span>Ateliê Três Olhares</span>
                    <span className="italic">São Paulo, SP</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
