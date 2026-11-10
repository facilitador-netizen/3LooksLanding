import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/mockData';
import { Project, StyleCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

interface PortfolioCardProps {
  project: Project;
  onOpen: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onOpen }) => {
  const { ref, offsetY } = useParallax<HTMLDivElement>({ speed: 0.10, maxOffset: 26 });

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen();
        }
      }}
      aria-label={`Ver detalhes do projeto ${project.title}`}
      data-cursor="portfolio"
      className="group cursor-pointer select-none bg-[#f8f6f0] border border-[#e6dfd3] hover:border-[#a26822] transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between active:scale-[0.99] touch-manipulation focus-visible:outline-2 focus-visible:outline-[#a26822] shadow-xs"
    >
      <div>
        {/* Parallax Media Container */}
        <div ref={ref} className="relative aspect-[16/11] overflow-hidden bg-[#e6dfd3]/50">
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `translate3d(0, ${offsetY}px, 0) scale(1.10)`,
              willChange: 'transform',
              transition: 'transform 0.15s cubic-bezier(0, 0, 0.2, 1)',
            }}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          {/* Subtle hover overlay for desktop & tap feedback */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors pointer-events-none" />

          {/* Clean unboxed tag in corner */}
          <div className="absolute top-4 left-4 bg-[#f8f6f0]/95 backdrop-blur-xs text-[#3d1a0e] text-[10px] font-mono-editorial font-bold px-3 py-1.5 rounded-lg border border-[#e6dfd3]">
            {project.categoryLabel}
          </div>

          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f8f6f0]/95 backdrop-blur-xs text-[#3d1a0e] flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:bg-[#a26822] group-hover:text-white transition-all shadow-xs">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-[#3d1a0e]/60 mb-2 font-mono-editorial text-[10px]">
            <span>{project.location}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{project.year}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#a26822] font-semibold">{project.scope}</span>
          </div>

          <h3 className="font-serif-editorial text-2xl font-bold text-[#3d1a0e] group-hover:text-[#a26822] transition-colors leading-snug mb-2">
            {project.title}
          </h3>

          <p className="text-xs text-[#3d1a0e]/75 leading-relaxed line-clamp-2 font-light font-sans-editorial">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bottom Interactive Touch Invitation */}
      <div className="px-6 pb-5 pt-3 border-t border-[#e6dfd3] flex items-center justify-between text-xs text-[#a26822] font-semibold font-mono-editorial text-[11px]">
        <span>Explorar galeria fotográfica</span>
        <span className="text-[10px] font-mono-editorial tabular-nums text-[#3d1a0e]/50">
          {project.galleryImages.length} fotos
        </span>
      </div>
    </article>
  );
};

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<StyleCategory>('todos');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs: { id: StyleCategory; label: string }[] = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'contemporaneo', label: 'Contemporâneo Brasileiro' },
    { id: 'organico', label: 'Afetivo & Orgânico' },
    { id: 'minimalismo-quente', label: 'Minimalismo Quente' },
    { id: 'classico-renovado', label: 'Clássico Renovado' },
  ];

  const filteredProjects =
    selectedCategory === 'todos'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const handleOpenProject = (project: Project) => {
    setActiveProject(project);
  };

  const handleNextProject = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setActiveProject(filteredProjects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveProject(filteredProjects[prevIndex]);
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#faf9f6] border-t border-[#e6dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#e6dfd3] gap-6">
          <div className="max-w-2xl">
            <div className="font-mono-editorial text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[#a26822] mb-3">
              Projetos & Obras Realizadas
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#3d1a0e] tracking-tight mb-3">
              Curadoria em <span className="font-normal italic text-[#a26822]">Ação</span>
            </h2>
            <p className="text-sm sm:text-base text-[#3d1a0e]/75 font-light font-sans-editorial">
              Espaços transformados pela harmonia entre arquitetura, arte e peças que acolhem. Toque em qualquer projeto para abrir a galeria e ficha completa.
            </p>
          </div>

          <div className="text-xs text-[#3d1a0e]/60 font-mono-editorial tabular-nums">
            Mostrando {filteredProjects.length} de {PROJECTS_DATA.length} espaços selecionados
          </div>
        </div>

        {/* Style Filter Tabs (Functional Segmented Buttons) */}
        <div className="mb-10 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="flex items-center gap-2.5 min-w-max">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2.5 font-mono-editorial text-[10px] uppercase font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer touch-manipulation min-h-[40px] flex items-center ${
                    isActive
                      ? 'bg-[#3d1a0e] text-[#f8f6f0] shadow-xs'
                      : 'bg-[#f8f6f0] text-[#3d1a0e]/70 hover:text-[#3d1a0e] hover:bg-[#e6dfd3]/50 border border-[#e6dfd3]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid: Optimized for Mobile Touch & Desktop with Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onOpen={() => handleOpenProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onNavigateNext={handleNextProject}
        onNavigatePrev={handlePrevProject}
      />
    </section>
  );
};
