import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Compass } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Conceito & Escopo',
    question: 'Qual a diferença entre a curadoria da Três Olhares e uma reforma convencional?',
    answer:
      'A reforma convencional foca em infraestrutura civil bruta (alvenaria, quebra-quebra e demolição). A Três Olhares atua no que transforma o espaço em lar: curadoria de arte e design brasileiro, iluminação acolhedora, camadas têxteis e produção presencial no local, sem o desgaste de obras pesadas.',
  },
  {
    category: 'Mobiliário Existente',
    question: 'Vocês trabalham com imóveis já mobiliados?',
    answer:
      'Sim. Na modalidade de Styling & Ambientação, valorizamos peças com valor afetivo e as harmonizamos com novas camadas de iluminação, tapetes, cortinas de linho e objetos de arte, renovando o ambiente sem descartes desnecessários.',
  },
  {
    category: 'Prazos & Agilidade',
    question: 'Quanto tempo dura o processo até a entrega final?',
    answer:
      'A jornada completa dura em média de 4 a 8 semanas — desde a imersão e o caderno conceitual até a chegada dos pedidos e o dia da produção final com a casa pronta para viver.',
  },
  {
    category: 'Fornecedores & Orçamentos',
    question: 'Como funciona a gestão de fornecedores e compras?',
    answer:
      'Centralizamos cotações, prazos e logística com ateliês de marcenaria fina, tapeceiros e galerias parceiras. O morador conta com um único canal de contato e uma planilha orçamentária consolidada.',
  },
  {
    category: 'Investimento & Execução',
    question: 'É possível fasear as aquisições do projeto?',
    answer:
      'Sim. O caderno conceitual é entregue com orçamento detalhado por prioridades, permitindo executar a produção integral de imediato ou adquirir os itens em etapas com segurança estética.',
  },
  {
    category: 'Atendimento & Regiões',
    question: 'O estúdio atende fora da cidade de São Paulo?',
    answer:
      'Sim. Realizamos a produção presencial em São Paulo (capital, interior e litoral) e consultoria de curadoria remota para outras regiões do país, com caderno executivo completo e links diretos.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#fcfbfa] border-t border-[#e6dfd3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="font-mono-editorial text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[#a26822] mb-3">
            Tira-Dúvidas & Segurança
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#3d1a0e] tracking-tight mb-4 text-balance">
            Perguntas <span className="font-normal italic text-[#a26822]">Frequentes</span>
          </h2>
          <p className="text-sm sm:text-base text-[#3d1a0e]/75 font-light leading-relaxed text-balance font-sans-editorial">
            Tudo o que você precisa saber sobre como a curadoria e a ambientação autoral se diferenciam de reformas civis convencionais.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={idx}
                className="bg-[#f8f6f0] border border-[#e6dfd3] rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs hover:border-[#a26822]"
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#a26822]"
                  >
                    <div className="space-y-1.5 pr-2">
                      <span className="font-mono-editorial text-[10px] uppercase tracking-wider text-[#a26822] font-bold block">
                        {item.category}
                      </span>
                      <span className="font-serif-editorial text-lg sm:text-xl font-bold text-[#3d1a0e] leading-snug block">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border border-[#e6dfd3] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-[#3d1a0e] text-[#f8f6f0] rotate-180 border-[#3d1a0e]' : 'bg-[#fcfbfa] text-[#3d1a0e]/60'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#3d1a0e]/75 leading-relaxed font-light border-t border-[#e6dfd3] mt-1">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center text-xs text-[#3d1a0e]/60 border-t border-[#e6dfd3] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-light">
          <span>Ainda tem dúvidas sobre o escopo do seu espaço?</span>
          <a
            href="#diferenciais"
            className="text-[#a26822] hover:text-[#3d1a0e] font-semibold underline underline-offset-4 transition-colors font-sans-editorial"
          >
            Revisar a matriz comparativa completa
          </a>
        </div>
      </div>
    </section>
  );
};
