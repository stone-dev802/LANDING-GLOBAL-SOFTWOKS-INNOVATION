import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { portfolioProjects } from '../data/content';

const categories = ['Tous', 'Web', 'Mobile', 'Réseau & Infra', 'Cybersécurité', 'IA & Agents'];

const SectionPill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 bg-blue-100 text-blue-900">
    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"/>
    {children}
  </span>
);

export default function PortfolioPage({ onOpenQuote }) {
  const [active, setActive] = useState('Tous');

  const filtered = active === 'Tous'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === active || p.tags.some(t => t.includes(active)));

  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="relative py-24 bg-[#0B2A6B] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
               alt="Portfolio" className="w-full h-full object-cover opacity-15"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A6B] to-[#0B2A6B]/50"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <SectionPill>Notre portfolio</SectionPill>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Des projets qui font<br/><span className="text-[#FBBF24]">la différence</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Découvrez quelques-unes de nos réalisations et l'impact de nos solutions sur nos clients.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  active === cat
                    ? 'bg-[#FBBF24] text-slate-950 shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <div key={p.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#1565C0] hover:shadow-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/90 via-[#0B2A6B]/30 to-transparent"/>
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    <span className="bg-[#FBBF24] text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full">{p.category}</span>
                    <span className="bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">{p.status}</span>
                  </div>
                  {/* Title on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-black text-white">{p.title}</h3>
                    <p className="text-[#FBBF24] text-xs font-semibold mt-0.5">↑ {p.impact}</p>
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-mono rounded-lg border border-slate-200">{t}</span>
                    ))}
                  </div>
                  <button onClick={onOpenQuote}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-[#1565C0] text-[#1565C0] text-xs font-bold hover:bg-[#1565C0] hover:text-white transition-all cursor-pointer">
                    Projet similaire ? Demander un devis <ArrowRight className="w-3.5 h-3.5"/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
