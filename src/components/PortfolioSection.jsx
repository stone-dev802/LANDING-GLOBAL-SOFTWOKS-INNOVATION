import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Smartphone, 
  Globe, 
  Server, 
  ShieldCheck, 
  Bot, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { portfolioProjects } from '../data/content';

export default function PortfolioSection({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = [
    'Tous',
    'Web',
    'Mobile',
    'Réseau & Infra',
    'Cybersécurité',
    'IA & Agents'
  ];

  const filteredProjects = activeFilter === 'Tous'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeFilter || p.tags.includes(activeFilter));

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
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>Notre portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Des projets qui font{' '}
              <span className="text-sky-600">la différence</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
              Découvrez quelques-unes de nos réalisations récentes et l'impact de nos solutions sur l'activité de nos clients.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 group self-start md:self-end"
          >
            <span>Lancer un projet similaire</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2">
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                    : 'bg-white hover:bg-slate-200 text-slate-600 border border-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              {/* Visual Banner Preview */}
              <div className="relative h-48 bg-gradient-to-tr from-navy-950 via-navy-900 to-slate-800 p-6 flex flex-col justify-between overflow-hidden">
                {/* Tech background graphics */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Visual badge depending on category */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-800/90 text-sky-300 border border-sky-400/30 text-xs font-semibold backdrop-blur-sm">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/70 px-2.5 py-0.5 rounded-full border border-emerald-800">
                    {project.status}
                  </span>
                </div>

                {/* Center visual representation */}
                <div className="relative z-10 my-auto text-center">
                  <div className="text-xl font-black text-white tracking-wide group-hover:scale-105 transition-transform">
                    {project.title}
                  </div>
                  <div className="text-xs text-sky-300/80 mt-1 font-mono">
                    {project.tags.join(' • ')}
                  </div>
                </div>

                {/* Bottom impact bar */}
                <div className="relative z-10 bg-navy-950/80 -mx-6 -mb-6 px-4 py-2 border-t border-slate-800 flex items-center gap-2 text-[11px] text-amber-300">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{project.impact}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600">
                  <span className="flex items-center gap-1 group-hover:underline">
                    Détails du projet
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              ✕
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-4">
              {getCategoryIcon(selectedProject.category)}
              <span>{selectedProject.category}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-navy-900 mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6 space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Technologies utilisées
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-800 font-semibold shadow-2xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-200 text-xs text-amber-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Impact mesuré : {selectedProject.impact}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenQuote();
                }}
                className="flex-1 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3 rounded-xl text-sm transition-all shadow-md"
              >
                Demander un devis pour un projet équivalent
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
