import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenPendencias: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenPendencias }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#faf9f6] text-[#3d1a0e]/80 text-xs py-12 px-4 sm:px-8 border-t border-[#e6dfd3]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start text-left">
        {/* Column 1: Brand & Contact Info */}
        <div className="space-y-4">
          <BrandLogo size="sm" layout="horizontal" />

          <p className="text-[11px] text-[#2e3e2b]/90 leading-relaxed font-sans-editorial">
            Transformamos casas em experiências completas, da concepção à entrega final das chaves.
          </p>

          <div className="space-y-1.5 text-[11px] font-sans-editorial text-[#3d1a0e]/85 pt-1">
            <p>
              <strong className="text-[#3d1a0e]">Atendimento:</strong> contato@tresolhares.com.br
            </p>
            <p>
              <strong className="text-[#3d1a0e]">WhatsApp:</strong> +55 11 99822-3283
            </p>
            <p className="text-[#2e3e2b]/80">
              <strong className="text-[#3d1a0e]">Ateliê:</strong> Av. Brigadeiro Faria Lima, 3477 · São Paulo, SP
            </p>
          </div>

          <div className="pt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenContact}
              className="px-4 py-2 bg-[#3d1a0e] hover:bg-[#a26822] text-[#f8f6f0] text-[10px] font-mono-editorial uppercase font-bold tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Falar com o Estúdio
            </button>
            <button
              type="button"
              onClick={onOpenPendencias}
              className="px-3 py-2 bg-[#f8f6f0] hover:bg-[#e6dfd3] border border-[#e6dfd3] text-[#3d1a0e] text-[10px] font-mono-editorial uppercase rounded-lg transition-colors cursor-pointer"
            >
              Pendências
            </button>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3 font-mono-editorial text-[11px] uppercase tracking-wider text-[#3d1a0e]/80">
          <h4 className="font-serif-editorial text-sm font-bold text-[#3d1a0e] normal-case tracking-normal">
            Navegação Rápida
          </h4>
          <div className="space-y-2.5 font-sans-editorial text-xs normal-case text-[#3d1a0e]/75">
            <a href="#diferenciais" className="block hover:text-[#a26822] transition-colors">
              Diferenciais de Atuação
            </a>
            <a href="#modalidades" className="block hover:text-[#a26822] transition-colors">
              Modalidades de Projeto
            </a>
            <a href="#jornada" className="block hover:text-[#a26822] transition-colors">
              Sua Jornada em Linha do Tempo
            </a>
            <a href="#quem-somos" className="block hover:text-[#a26822] transition-colors">
              Quem Somos & As Três Especialistas
            </a>
            <a href="#portfolio" className="block hover:text-[#a26822] transition-colors">
              Portfólio & Galerias Fotográficas
            </a>
            <a href="#faq" className="block hover:text-[#a26822] transition-colors">
              Perguntas Frequentes (FAQ)
            </a>
          </div>
        </div>

        {/* Column 3: Social & Curadoria Cards */}
        <div className="space-y-3">
          <h4 className="font-serif-editorial text-sm font-bold text-[#3d1a0e]">
            Redes & Curadoria
          </h4>

          <div className="grid grid-cols-2 gap-2 pt-0.5">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-2.5 py-2 rounded-lg bg-[#f8f6f0] border border-[#e6dfd3] text-[#3d1a0e] text-[10px] font-mono-editorial hover:border-[#a26822] hover:text-[#a26822] transition-colors group cursor-pointer"
              title="Instagram Oficial Três Olhares"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#a26822] group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-2.5 py-2 rounded-lg bg-[#f8f6f0] border border-[#e6dfd3] text-[#3d1a0e] text-[10px] font-mono-editorial hover:border-[#a26822] hover:text-[#a26822] transition-colors group cursor-pointer"
              title="TikTok Oficial Três Olhares"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#a26822] group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.58c1.33.95 2.96 1.51 4.72 1.56V6.69z"/>
              </svg>
              <span>TikTok</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-2.5 py-2 rounded-lg bg-[#f8f6f0] border border-[#e6dfd3] text-[#3d1a0e] text-[10px] font-mono-editorial hover:border-[#a26822] hover:text-[#a26822] transition-colors group cursor-pointer"
              title="LinkedIn Oficial Três Olhares"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#a26822] group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.85 18.5V10.13H5.06V18.5h2.79z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* Pinterest */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-2.5 py-2 rounded-lg bg-[#f8f6f0] border border-[#e6dfd3] text-[#3d1a0e] text-[10px] font-mono-editorial hover:border-[#a26822] hover:text-[#a26822] transition-colors group cursor-pointer"
              title="Pinterest Moodboards Três Olhares"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#a26822] group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
              </svg>
              <span>Pinterest</span>
            </a>
          </div>

          <p className="text-[10px] font-sans-editorial text-[#3d1a0e]/60 italic pt-0.5">
            Acompanhe novidades, projetos e ensaios visuais
          </p>
        </div>

        {/* Column 4: Atendimento & Ateliê */}
        <div className="space-y-3">
          <h4 className="font-serif-editorial text-sm font-bold text-[#3d1a0e]">
            Atendimento & Agendamento
          </h4>
          <p className="text-[11px] text-[#3d1a0e]/75 font-sans-editorial leading-relaxed">
            Atendimentos presenciais sob agendamento no ateliê em São Paulo ou consultoria remota para todo o país.
          </p>

          <div className="space-y-1.5 text-[11px] font-mono-editorial text-[#3d1a0e]/70 pt-1">
            <p>Segunda a Sexta · 09h às 18h</p>
            <p className="text-[#a26822] font-semibold">Projetos sob curadoria dedicada</p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full py-2.5 px-4 bg-[#f8f6f0] hover:bg-[#3d1a0e] hover:text-[#f8f6f0] border border-[#e6dfd3] text-[#3d1a0e] font-mono-editorial text-[10px] uppercase font-bold tracking-wider rounded-xl transition-all cursor-pointer text-center"
            >
              Iniciar Contato
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright and Back to Top */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#e6dfd3] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <p className="text-[11px] text-[#3d1a0e]/80">
            © 2026 Três Olhares. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-[#3d1a0e]/50 mt-0.5">
            Curadoria, produção e gestão de projetos residenciais chave na mão.
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao início da página"
          className="flex items-center gap-1.5 text-xs text-[#3d1a0e]/70 hover:text-[#a26822] transition-colors cursor-pointer group"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
