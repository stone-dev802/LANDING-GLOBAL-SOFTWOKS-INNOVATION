import React from 'react';
import { 
  Award, 
  CheckCircle, 
  Smile, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Server
} from 'lucide-react';
import { companyInfo } from '../data/content';

export default function StatsSection({ onOpenQuote }) {
  const statsList = [
    {
      value: companyInfo.stats.experience,
      label: "Années d'expérience",
      icon: Award,
      desc: "Expertise technique éprouvée"
    },
    {
      value: companyInfo.stats.projects,
      label: "Projets réalisés",
      icon: CheckCircle,
      desc: "Applications, réseaux & audits"
    },
    {
      value: companyInfo.stats.satisfaction,
      label: "Satisfaction client",
      icon: Smile,
      desc: "Engagement qualité sans compromis"
    },
    {
      value: companyInfo.stats.partners,
      label: "Partenaires & Clients",
      icon: Users,
      desc: "Entreprises & institutions de référence"
    }
  ];

  return (
    <section id="pourquoi-nous" className="relative py-20 lg:py-28 bg-navy-900 text-white overflow-hidden">
      
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Tech grid texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Proposition de valeur */}
          <div className="lg:col-span-5">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Pourquoi choisir Global Softworks Innovation ?</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight leading-tight mb-6">
              Une équipe, une vision au service de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                vos projets
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Notre force réside dans une équipe d'ingénieurs et développeurs passionnés, une approche personnalisée pour chaque métier, et un engagement constant dans l'excellence technique et la satisfaction durable de nos clients.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer active:scale-95"
              >
                <span>En savoir plus sur notre offre</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: 4 Stats badges & visual card */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {statsList.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-navy-850/80 hover:bg-navy-800 rounded-2xl p-6 border border-slate-700/60 hover:border-sky-500/50 transition-all duration-300 shadow-xl flex items-center gap-5 hover:-translate-y-1"
                  >
                    {/* Circle icon container */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-600/30 border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-sm font-bold text-slate-200 mt-0.5">
                        {stat.label}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {stat.desc}
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Quote banner matching mockups: "Des idées au réel" */}
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-sky-900/60 to-navy-850 p-5 border border-sky-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">
                    « Des idées au réel »
                  </span>
                  <span className="text-xs text-slate-300">
                    Nous transformons vos visions stratégiques en produits technologiques fiables.
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-block text-xs font-mono text-sky-400 font-semibold px-3 py-1 bg-sky-950/80 rounded-full border border-sky-800">
                Qualité Garantie
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
