import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  X, 
  ExternalLink,
  Layers,
  Server,
  ShieldCheck,
  Bot,
  Smartphone,
  Globe
} from 'lucide-react';
import { portfolioProjects } from '../data/content';

const categories = ['Tous', 'Web', 'Mobile', 'Réseau & Infra', 'Cybersécurité', 'IA & Agents'];

const SectionPill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 bg-blue-100 text-blue-900 shadow-xs">
    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"/>
    {children}
  </span>
);

export default function PortfolioPage({ onOpenQuote }) {
  const [active, setActive] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const filtered = active === 'Tous'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === active || p.tags.some(t => t.includes(active)));

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mobile': return <Smartphone className="w-3.5 h-3.5" />;
      case 'Web': return <Globe className="w-3.5 h-3.5" />;
      case 'Réseau & Infra': return <Server className="w-3.5 h-3.5" />;
      case 'Cybersécurité': return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'IA & Agents': return <Bot className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="relative py-24 bg-[#0B2A6B] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
            alt="Portfolio" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A6B] via-[#0B2A6B]/90 to-[#0B2A6B]/60"/>
        
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <SectionPill>Notre portfolio</SectionPill>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
            Des projets qui font<br/><span className="text-[#FBBF24]">la différence</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Découvrez nos réalisations concrètes en développement logiciel, infrastructures réseaux, cybersécurité et intelligence artificielle.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  active === cat
                    ? 'bg-[#FBBF24] text-slate-950 shadow-md scale-105'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <div 
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#1565C0] hover:shadow-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/95 via-[#0B2A6B]/30 to-transparent"/>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-[#FBBF24] text-slate-950 text-[10.5px] font-black px-3 py-1 rounded-full shadow-sm">
                      {getCategoryIcon(p.category)}
                      {p.category}
                    </span>
                    <span className="bg-emerald-500/90 text-white text-[10.5px] font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                      {p.status}
                    </span>
                  </div>

                  {/* Title and Impact overlay on image bottom */}
                  <div className="absolute bottom-4 left-5 right-5 z-10 text-white">
                    <h3 className="text-lg sm:text-xl font-black leading-tight tracking-tight text-white group-hover:text-sky-200 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[#FBBF24] text-xs font-bold mt-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>{p.impact}</span>
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tags.map((t) => (
                        <span 
                          key={t} 
                          className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[10.5px] font-medium rounded-lg border border-slate-200/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1565C0] group-hover:text-[#0B2558] transition-colors">
                    <span>Explorer les détails</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer shadow-md"
              aria-label="Fermer"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            <div className="overflow-y-auto">
              {/* Header Image Banner */}
              <div className="relative h-64 sm:h-72 bg-slate-950 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040C1E] via-[#040C1E]/40 to-transparent" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBBF24] text-slate-950 text-xs font-black shadow-md">
                    {getCategoryIcon(selectedProject.category)}
                    {selectedProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-md">
                    {selectedProject.status}
                  </span>
                </div>

                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight mb-1 text-white">
                    {selectedProject.title}
                  </h2>
                  <div className="text-xs sm:text-sm text-amber-300 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>{selectedProject.impact}</span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B2558] mb-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#0062FF]" />
                    À propos du projet
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 border border-slate-100 rounded-2xl p-4">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B2558] mb-3">
                    <Layers className="w-4 h-4 text-[#0062FF]" />
                    Technologies & Compétences mobilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/80 text-[#0B2558] font-semibold text-xs border border-blue-100"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0062FF]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Fermer
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenQuote();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0B2558] hover:bg-[#1565C0] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    <span>Lancer un projet similaire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

