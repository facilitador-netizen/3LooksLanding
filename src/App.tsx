/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Diferenciais } from './components/Diferenciais';
import { Modalidades } from './components/Modalidades';
import { JornadaTimeline } from './components/JornadaTimeline';
import { QuemSomos } from './components/QuemSomos';
import { Portfolio } from './components/Portfolio';
import { FAQ } from './components/FAQ';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ContatoModal } from './components/ContatoModal';
import { PendenciasModal } from './components/PendenciasModal';
import { BackToTop } from './components/BackToTop';
import { ScrollReveal } from './components/ScrollReveal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { Modality } from './types';

const JSON_LD_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "additionalType": "https://schema.org/InteriorDesignStudio",
  "name": "Três Olhares — Estúdio de Curadoria, Produção e Styling",
  "alternateName": "Três Olhares",
  "description": "Estúdio de curadoria autoral, gestão de fornecedores e produção final para interiores e arquitetura. Transformamos ambientes em espaços com identidade, alma e equilíbrio.",
  "image": "/assets/aistudio/image_90d452f6.png",
  "telephone": "+55-11-98765-4321",
  "email": "contato@tresolhares.com.br",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "São Paulo"
    },
    {
      "@type": "Country",
      "name": "Brasil"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Curadoria e Design de Interiores",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Curadoria Autoral & Garimpo",
          "description": "Pesquisa e seleção dedicada de mobiliário brasileiro moderno e contemporâneo, obras de arte e luminárias assinadas."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Styling & Ambientação",
          "description": "Intervenção estética focada em camadas sensoriais: tapeçaria, almofadas sob medida, cortinas de linho e iluminação pontual."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Produção Completa & Turnkey",
          "description": "Planejamento do conceito até a entrega pronta para morar com gestão de fornecedores e logística."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Transformação de Ambientes",
          "description": "Repaginação visual completa de livings e dormitórios com marcenaria decorativa e curadoria sem reformas civis brutas."
        }
      }
    ]
  }
};

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPendenciasOpen, setIsPendenciasOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string>('Curadoria Autoral & Garimpo');

  const handleSelectModality = (modality: Modality) => {
    setSelectedInterest(modality.title);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-[#3d1a0e] flex flex-col font-sans-editorial selection:bg-[#e6dfd3] selection:text-[#3d1a0e]">
      {/* Schema.org Structured Data (JSON-LD) for Local & Professional Service SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_DATA) }}
      />

      {/* Fixed Minimalist Editorial Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Bespoke Editorial Custom Cursor (Active for Fine Pointer Devices) */}
      <CustomCursor />

      {/* Top Bar Navigation */}
      <Header
        onOpenContact={() => setIsContactOpen(true)}
        onOpenPendencias={() => setIsPendenciasOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. Diferenciais & Antes/Depois */}
        <ScrollReveal>
          <Diferenciais />
        </ScrollReveal>

        {/* 3. Modalidades de Atuação */}
        <ScrollReveal>
          <Modalidades onSelectModality={handleSelectModality} />
        </ScrollReveal>

        {/* 3.1 Linha do Tempo Visual - Sua Jornada */}
        <ScrollReveal>
          <JornadaTimeline />
        </ScrollReveal>

        {/* 4. Quem Somos & O Trio de Especialistas */}
        <ScrollReveal>
          <QuemSomos />
        </ScrollReveal>

        {/* 5. Portfólio com Validação Mobile & Lightbox */}
        <ScrollReveal>
          <Portfolio />
        </ScrollReveal>

        {/* 6. Perguntas Frequentes (FAQ) - Curadoria vs Reforma Convencional */}
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>

        {/* 7. Newsletter - Inspirações do Estúdio */}
        <ScrollReveal>
          <Newsletter />
        </ScrollReveal>
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenPendencias={() => setIsPendenciasOpen(true)}
      />

      {/* Interactive Modals */}
      <ContatoModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialInterest={selectedInterest}
      />

      <PendenciasModal
        isOpen={isPendenciasOpen}
        onClose={() => setIsPendenciasOpen(false)}
      />
    </div>
  );
}
