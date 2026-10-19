import React from 'react';
import { 
  Code2, 
  Network, 
  ShieldCheck, 
  Cloud, 
  Rocket, 
  Cpu, 
  BarChart3, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
  Camera,
  Wrench
} from 'lucide-react';
import { servicesData } from '../data/content';

// Map icon strings to Lucide components
const iconMap = {
  CodeXml: Code2,
  Code2: Code2,
  Network: Network,
  ShieldAlert: ShieldCheck,
  ShieldCheck: ShieldCheck,
  Cloud: Cloud,
  Rocket: Rocket,
  Cpu: Cpu,
  BarChart3: BarChart3,
  GraduationCap: GraduationCap,
  Camera: Camera,
  Wrench: Wrench,
};

export default function ServicesSection({ onSelectService, onOpenQuote }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>Nos services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              Des expertises pour{' '}
              <span className="text-sky-600">vos ambitions</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Nous proposons une gamme complète de services pour répondre à tous vos besoins en matière de transformation digitale, de sécurité et d'infrastructure informatique.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Demander un devis personnalisé</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
              >
                {/* Top Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white flex items-center justify-center mb-6 shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy-900 mb-2.5 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600 group-hover:text-sky-700">
                  <span className="flex items-center gap-1">
                    En savoir plus
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-[11px] text-slate-400 group-hover:text-slate-600 font-normal">
                    Détails & Devis
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-navy-900">
                Vous avez un besoin spécifique ou un projet hybride ?
              </h4>
              <p className="text-sm text-slate-600">
                Nos architectes logiciels et consultants conçoivent des architectures adaptées à vos contraintes.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="shrink-0 px-6 py-2.5 rounded-full bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            Discuter avec un ingénieur
          </button>
        </div>

      </div>
    </section>
  );
}
