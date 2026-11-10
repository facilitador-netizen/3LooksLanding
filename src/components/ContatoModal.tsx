import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

interface ContatoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export const ContatoModal: React.FC<ContatoModalProps> = ({
  isOpen,
  onClose,
  initialInterest,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [interest, setInterest] = useState(initialInterest || 'Consultoria de Curadoria');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCity('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#3d1a0e]/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-[#f8f6f0] border border-[#e6dfd3] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#e6dfd3] flex items-center justify-between">
          <div>
            <span className="font-mono-editorial text-[10px] uppercase tracking-wider font-bold text-[#a26822]">
              Estúdio Três Olhares
            </span>
            <h3 id="contact-modal-title" className="font-serif-editorial text-2xl font-bold text-[#3d1a0e]">
              Iniciar Diálogo de Ambientação
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar formulário de contato"
            className="min-w-[40px] min-h-[40px] rounded-xl flex items-center justify-center text-[#3d1a0e]/60 hover:text-[#3d1a0e] hover:bg-[#e6dfd3]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#a26822]/15 text-[#a26822] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif-editorial text-2xl font-bold text-[#3d1a0e]">
                Mensagem Recebida com Sucesso
              </h4>
              <p className="text-sm text-[#3d1a0e]/75 max-w-md mx-auto leading-relaxed font-light">
                Obrigado pelo interesse, {name || 'visitante'}. Nossa equipe de curadoria entrará em contato em até 24 horas úteis para agendar uma conversa inicial.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#3d1a0e] text-[#f8f6f0] font-mono-editorial text-[10px] uppercase tracking-wider font-bold rounded-xl hover:bg-[#a26822] transition-colors"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#3d1a0e]/75 leading-relaxed font-light">
                Compartilhe conosco brevemente sobre o seu imóvel, expectativas ou o momento em que se encontra a sua casa.
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#3d1a0e] mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Clara Silveira"
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#e6dfd3] rounded-xl text-[#3d1a0e] focus:outline-none focus:border-[#a26822] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3d1a0e] mb-1">
                    E-mail para Retorno *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="clara@exemplo.com.br"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#e6dfd3] rounded-xl text-[#3d1a0e] focus:outline-none focus:border-[#a26822] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3d1a0e] mb-1">
                    WhatsApp ou Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 98765-4321"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#e6dfd3] rounded-xl text-[#3d1a0e] focus:outline-none focus:border-[#a26822] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3d1a0e] mb-1">
                    Cidade / Bairro do Imóvel
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: São Paulo, Jardins"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#e6dfd3] rounded-xl text-[#3d1a0e] focus:outline-none focus:border-[#a26822] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3d1a0e] mb-1">
                    Formato de Interesse
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#e6dfd3] rounded-xl text-[#3d1a0e] focus:outline-none focus:border-[#a26822] transition-colors"
                  >
                    <option value="Curadoria Autoral & Garimpo">01. Curadoria Autoral & Garimpo</option>
                    <option value="Styling & Ambientação">02. Styling & Ambientação</option>
                    <option value="Produção Completa & Turnkey">03. Produção Completa & Turnkey</option>
                    <option value="Transformação de Ambientes">04. Transformação de Ambientes</option>
                    <option value="Outro assunto">Outro alinhamento</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3d1a0e] mb-1">
                  Conte um pouco sobre o espaço ou dúvidas
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: Apartamento recém-entregue, gostaríamos de harmonizar o living e a área gourmet com peças autorais..."
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#e6dfd3] rounded-xl text-[#3d1a0e] focus:outline-none focus:border-[#a26822] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#3d1a0e] hover:bg-[#a26822] text-[#f8f6f0] font-mono-editorial text-[10px] uppercase tracking-wider font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Solicitação ao Estúdio</span>
                </button>
              </div>

              <div className="text-[10px] font-mono-editorial text-[#3d1a0e]/60 text-center pt-2">
                Seus dados serão tratados com absoluto sigilo e utilizados exclusivamente para o contato do estúdio.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
