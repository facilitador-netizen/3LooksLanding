import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Check, Compass } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNavigateNext,
  onNavigatePrev,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Reset active image when project changes
  useEffect(() => {
    setActiveImageIdx(0);
  }, [project?.id]);

  // Handle ESC key and keyboard arrows
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigateNext();
      } else if (e.key === 'ArrowLeft') {
        onNavigatePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock scroll safely
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose, onNavigateNext, onNavigatePrev]);

  if (!project) return null;

  const currentGallery = project.galleryImages.length > 0 ? project.galleryImages : [project.coverImage];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-[#3d1a0e]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl h-[100dvh] sm:h-auto sm:max-h-[90vh] bg-[#f8f6f0] sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-[#e6dfd3]">
        {/* Modal Top Bar */}
        <div className="h-16 px-6 sm:px-8 border-b border-[#e6dfd3] bg-[#f8f6f0] flex items-center justify-between shrink-0 z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono-editorial text-[10px] uppercase tracking-wider font-bold text-[#a26822]">
              {project.categoryLabel}
            </span>
            <span className="text-[#3d1a0e]/20">·</span>
            <span className="text-xs text-[#3d1a0e]/60 font-mono-editorial tabular-nums">
              {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next controls */}
            <div className="flex items-center gap-1.5 mr-2">
              <button
                type="button"
                onClick={onNavigatePrev}
                aria-label="Projeto anterior"
                className="w-9 h-9 rounded-xl border border-[#e6dfd3] bg-white hover:bg-[#e6dfd3]/50 flex items-center justify-center text-[#3d1a0e] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onNavigateNext}
                aria-label="Próximo projeto"
                className="w-9 h-9 rounded-xl border border-[#e6dfd3] bg-white hover:bg-[#e6dfd3]/50 flex items-center justify-center text-[#3d1a0e] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close button with large touch target (min 44px) */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar detalhes do projeto"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[#3d1a0e] hover:bg-[#a26822] text-[#f8f6f0] transition-colors cursor-pointer shadow-xs"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          <div className="p-6 sm:p-8 space-y-8">
            {/* Main Image & Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#e6dfd3]/50 border border-[#e6dfd3]">
                <img
                  src={currentGallery[activeImageIdx]}
                  alt={`${project.title} - Foto ${activeImageIdx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-300"
                />

                {/* Subtitle pill-free tag */}
                <div className="absolute bottom-4 left-4 bg-[#3d1a0e]/80 backdrop-blur-xs text-[#f8f6f0] text-[10px] font-mono-editorial font-bold px-3 py-1 rounded-lg">
                  Foto {activeImageIdx + 1} de {currentGallery.length}
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {currentGallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                  {currentGallery.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImageIdx(i)}
                      className={`relative w-20 h-14 sm:w-24 sm:h-16 shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIdx === i ? 'border-[#a26822] ring-2 ring-[#a26822]/30' : 'border-[#e6dfd3] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Miniatura ${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-[#e6dfd3]">
              {/* Left Column: Title and Narrative */}
              <div className="lg:col-span-8 space-y-4">
                <div>
                  <h2
                    id="modal-project-title"
                    className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-[#3d1a0e]"
                  >
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#a26822] font-semibold mt-1 font-mono-editorial">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#3d1a0e]/75 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Curated Highlights */}
                <div className="pt-4 border-t border-[#e6dfd3]">
                  <h4 className="font-mono-editorial text-[10px] uppercase tracking-wider font-bold text-[#3d1a0e] mb-3">
                    Destaques de Curadoria & Produção:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.curationHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#3d1a0e]/85">
                        <Check className="w-3.5 h-3.5 text-[#a26822] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Metadata Box */}
              <div className="lg:col-span-4 bg-[#fcfbfa] p-6 rounded-2xl border border-[#e6dfd3] space-y-4 h-fit shadow-xs">
                <div className="font-mono-editorial text-[10px] uppercase tracking-wider font-bold text-[#3d1a0e] pb-2 border-b border-[#e6dfd3]">
                  Ficha do Projeto
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[#3d1a0e]/60 block font-light">Localização</span>
                    <span className="font-semibold text-[#3d1a0e]">{project.location}</span>
                  </div>

                  <div>
                    <span className="text-[#3d1a0e]/60 block font-light">Ano de Entrega</span>
                    <span className="font-mono-editorial tabular-nums font-semibold text-[#3d1a0e]">{project.year}</span>
                  </div>

                  <div>
                    <span className="text-[#3d1a0e]/60 block font-light">Escopo Contratado</span>
                    <span className="font-semibold text-[#a26822]">{project.scope}</span>
                  </div>

                  <div>
                    <span className="text-[#3d1a0e]/60 block font-light">Estilo Predominante</span>
                    <span className="font-semibold text-[#3d1a0e]">{project.categoryLabel}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#e6dfd3]">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full py-2.5 text-center font-mono-editorial text-[10px] tracking-wider uppercase font-bold text-[#f8f6f0] bg-[#3d1a0e] hover:bg-[#a26822] transition-colors rounded-xl cursor-pointer shadow-xs"
                  >
                    Voltar ao Portfólio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
