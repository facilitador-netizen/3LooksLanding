import React from 'react';
import { PENDENCIAS_DATA } from '../data/mockData';
import { X, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface PendenciasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PendenciasModal: React.FC<PendenciasModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pendencias-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#3d1a0e]/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#f8f6f0] border border-[#e6dfd3] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-6 border-b border-[#e6dfd3] flex items-center justify-between shrink-0">
          <div>
            <span className="font-mono-editorial text-[10px] uppercase tracking-wider font-bold text-[#a26822]">
              Relatório de Entrega & Alinhamento
            </span>
            <h3 id="pendencias-modal-title" className="font-serif-editorial text-2xl font-bold text-[#3d1a0e]">
              Status das 5 Pendências do Briefing
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal de pendências"
            className="min-w-[40px] min-h-[40px] rounded-xl flex items-center justify-center text-[#3d1a0e]/60 hover:text-[#3d1a0e] hover:bg-[#e6dfd3]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of 5 items */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          <p className="text-xs text-[#3d1a0e]/75 leading-relaxed mb-6 font-light">
            Conforme solicitado nas diretrizes do projeto Três Olhares, a landing page foi totalmente estruturada com estética editorial, responsiva e acessível. Abaixo está o status transparente dos itens que dependem de validação final ou materiais proprietários da equipe:
          </p>

          <div className="space-y-4">
            {PENDENCIAS_DATA.map((item, idx) => {
              const isResolved = item.status.includes('Resolvido') || item.status.includes('Tratada');
              return (
                <div
                  key={idx}
                  className="bg-[#fcfbfa] border border-[#e6dfd3] p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row sm:items-start justify-between gap-3 shadow-2xs"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-editorial text-xs font-bold text-[#a26822]">
                        0{idx + 1}.
                      </span>
                      <h4 className="font-serif-editorial text-base font-bold text-[#3d1a0e]">{item.item}</h4>
                    </div>
                    <p className="text-xs text-[#3d1a0e]/70 leading-relaxed font-light pl-6">
                      {item.detalhes}
                    </p>
                  </div>

                  <div className="shrink-0 pl-6 sm:pl-0">
                    <span
                      className={`text-[10px] font-mono-editorial font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 w-fit ${
                        isResolved
                          ? 'bg-emerald-100/90 text-emerald-900 border border-emerald-300'
                          : 'bg-[#e6dfd3] text-[#3d1a0e] border border-[#d2c4ac]'
                      }`}
                    >
                      {isResolved ? (
                        <CheckCircle className="w-3 h-3 text-emerald-700" />
                      ) : (
                        <Clock className="w-3 h-3 text-[#a26822]" />
                      )}
                      <span>{item.status}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#e6dfd3] mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3d1a0e]/60">
            <span className="font-light">Todas as diretrizes de código, layout e identidade visual foram aplicadas.</span>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#3d1a0e] text-[#f8f6f0] rounded-xl font-mono-editorial uppercase tracking-wider text-[10px] font-bold hover:bg-[#a26822] transition-colors shadow-xs"
            >
              Compreendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
