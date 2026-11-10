import React from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Zap, Sparkles, Code2, Server } from 'lucide-react';
import { heroPillars, companyInfo } from '../data/content';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero({ onOpenQuote }) {
  const { t } = useLanguage();

  return (
    <section id="accueil" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50">
      
      {/* Background Tech Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{t('hero.tag', 'Votre partenaire tech & digital')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-navy-900 tracking-tight leading-[1.15] mb-6">
              {t('hero.title1', 'Des solutions numériques')}{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-sky-600">{t('hero.title2', 'sur mesure')}</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-sky-100 -rotate-1 rounded-sm -z-0" />
              </span>{' '}
              {t('hero.title3', 'pour un avenir')}{' '}
              <span className="text-amber-500 underline decoration-amber-300 decoration-wavy decoration-2">
                {t('hero.title4', 'plus connecté')}
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {t('hero.desc', companyInfo.description)}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-500 active:scale-95 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200"
              >
                <span>{t('hero.ctaServices', 'Découvrir nos services')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>{t('hero.ctaPortfolio', 'Voir nos réalisations')}</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Devis gratuit en 24h</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Garantie & Support continu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Sécurité certifiée</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Tech Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl bg-gradient-to-tr from-navy-950 via-navy-900 to-navy-850 p-4 sm:p-6 shadow-2xl border border-slate-700/50 overflow-hidden">
                
                {/* Tech background graphic */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-500/15 rounded-full blur-2xl" />

                {/* Top IDE / Terminal bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">global-softworks-core.tsx</span>
                  </div>
                  <span className="text-[10px] bg-sky-950 text-sky-400 font-mono px-2 py-0.5 rounded border border-sky-800/60">
                    Production Ready
                  </span>
                </div>

                {/* Interactive Code Preview */}
                <div className="bg-navy-950/80 rounded-xl p-4 font-mono text-xs text-slate-300 leading-relaxed border border-slate-800/80 mb-5 overflow-x-auto shadow-inner">
                  <div className="text-slate-500">// Global Softworks Innovation Engine</div>
                  <div>
                    <span className="text-sky-400">const</span> <span className="text-amber-400">gsiSolution</span> = <span className="text-sky-400">new</span> <span className="text-emerald-400">EnterpriseSystem</span>({`{`}
                  </div>
                  <div className="pl-4">
                    architecture: <span className="text-emerald-300">"Cloud & Microservices"</span>,
                  </div>
                  <div className="pl-4">
                    security: <span className="text-emerald-300">"Zero-Trust & End-to-End"</span>,
                  </div>
                  <div className="pl-4">
                    intelligence: <span className="text-amber-300">"Autonomous AI Agents"</span>,
                  </div>
                  <div className="pl-4">
                    uptime: <span className="text-sky-300">"99.98% Guaranteed"</span>
                  </div>
                  <div>{`});`}</div>
                  <div className="text-emerald-400 mt-2">
                    ✓ System initialized. Ready to deploy.
                  </div>
                </div>

                {/* Metrics / Status strip inside card */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Développement</div>
                      <div className="text-xs font-bold text-white">Full-Stack & Cloud</div>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Sécurité</div>
                      <div className="text-xs font-bold text-white">Audit & Pare-Feu</div>
                    </div>
                  </div>
                </div>

                {/* Floating pill over image/box */}
                <div className="absolute -bottom-2 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs py-1.5 px-4 rounded-full shadow-lg flex items-center gap-1.5 animate-bounce">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ensemble, créons l'innovation !</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars Strip (from Image 2 & 3) */}
        <div className="mt-16 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {heroPillars.map((pillar) => (
              <div 
                key={pillar.id}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-sky-200 hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-50 group-hover:bg-sky-500 group-hover:text-white text-sky-600 flex items-center justify-center transition-colors shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                    {pillar.title}
                  </div>
                  <div className="text-[11px] text-slate-500 hidden sm:block">
                    {pillar.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
