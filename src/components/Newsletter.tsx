import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    // Simulate brief network submission for polished feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <section className="py-20 md:py-24 bg-[#faf9f6] border-t border-[#e6dfd3] relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#3d1a0e 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
        <div className="font-mono-editorial text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[#a26822] mb-3">
          Caderno de Curadoria & Pensamento
        </div>

        <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#3d1a0e] tracking-tight mb-4 text-balance">
          Inspirações do <span className="font-normal italic text-[#a26822]">Estúdio</span>
        </h2>

        <p className="text-sm sm:text-base text-[#3d1a0e]/75 font-light max-w-xl mx-auto leading-relaxed mb-8 text-balance font-sans-editorial">
          Uma seleção mensal de peças garimpadas, ensaios sobre arquitetura de interiores, viagens de pesquisa e novidades nos bastidores da Três Olhares. Sem excessos, apenas essência.
        </p>

        {submitted ? (
          <div className="bg-[#f8f6f0] border border-[#e6dfd3] p-6 rounded-2xl max-w-md mx-auto space-y-2 animate-in fade-in duration-300 shadow-xs">
            <div className="w-9 h-9 rounded-full bg-[#a26822]/15 text-[#a26822] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-serif-editorial text-xl font-bold text-[#3d1a0e]">
              Bem-vindo ao nosso repertório
            </h4>
            <p className="text-xs text-[#3d1a0e]/75 leading-relaxed font-light">
              Obrigado por se conectar. Em breve você receberá nossa próxima edição de ensaios e curadorias autorais.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5 items-stretch"
          >
            <div className="relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                aria-label="Endereço de e-mail para newsletter"
                className="w-full px-4 py-3 text-xs bg-white border border-[#e6dfd3] rounded-xl text-[#3d1a0e] placeholder:text-[#3d1a0e]/40 focus:outline-none focus:border-[#a26822] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-[#3d1a0e] hover:bg-[#a26822] text-[#f8f6f0] font-mono-editorial text-[10px] uppercase tracking-wider font-bold rounded-xl transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xs"
            >
              <span>{loading ? 'Inscrevendo...' : 'Receber Inspirações'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="mt-4 text-[10px] font-mono-editorial text-[#3d1a0e]/50 font-light">
          Respeitamos sua privacidade. Compartilhamos apenas conteúdo curado com carinho, no máximo uma vez ao mês.
        </div>
      </div>
    </section>
  );
};
