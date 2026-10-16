import React from 'react';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Award, 
  Users, 
  Smile, 
  Star, 
  Rocket, 
  ChevronRight, 
  Code2, 
  Target, 
  Handshake, 
  UserCheck, 
  Crosshair 
} from 'lucide-react';
import { Link, useRouter } from '../router';
import { companyInfo, heroPillars, servicesData, processSteps, portfolioProjects, aiBotKnowledge } from '../data/content';

/* ── small helpers ──────────────────────────────────── */
const SectionPill = ({ color = 'blue', children }) => (
  <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5
    ${color === 'amber' ? 'bg-amber-100 text-amber-900' : 'bg-blue-100 text-blue-900'}`}>
    <span className={`w-1.5 h-1.5 rounded-full ${color === 'amber' ? 'bg-amber-500' : 'bg-blue-600'}`}/>
    {children}
  </span>
);

/* ════════════════════════════════════════════════════ */
export default function HomePage({ onOpenQuote }) {
  const { navigate } = useRouter();

  return (
    <div className="flex flex-col">

      {/* ══════ 1. HERO (Exact to Mockup Image 2) ══════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#040C1E]">

        {/* High-tech Laptop Background Photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80"
            alt="Workspace tech de développement"
            className="w-full h-full object-cover object-center opacity-40"
          />
          {/* Dark gradient leaving the laptop center visible while keeping text crisp */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040C1E] via-[#040C1E]/95 via-45% to-[#040C1E]/40" />
        </div>

        {/* Geometric corner stripes (Blue & Yellow) as in mockup Image 2 */}
        <div className="absolute bottom-0 right-0 w-44 h-44 overflow-hidden pointer-events-none z-10">
          <div className="absolute -bottom-20 -right-8 w-44 h-24 bg-[#0284C7] rotate-45 transform" />
          <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-[#FBBF24] rotate-45 transform shadow-lg" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">

          {/* Left: Text & CTA (7 Cols) */}
          <div className="lg:col-span-7">
            
            {/* 1. Top Capsule Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-400/30 text-sky-200 text-xs font-semibold backdrop-blur-md mb-4 shadow-sm">
              <Rocket className="w-3.5 h-3.5 text-[#FBBF24] fill-[#FBBF24]" />
              <span>Votre partenaire digital de confiance</span>
            </div>

            {/* 2. Main Headline (Refined font size: neither too small nor too big) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-white leading-[1.18] mb-4 tracking-tight">
              Des solutions numériques{' '}
              <span className="text-[#FBBF24] relative inline-block">
                sur mesure
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#FBBF24] rounded-full" />
              </span>{' '}
              pour un avenir{' '}
              <span className="text-[#38BDF8]">plus connecté</span>
            </h1>

            {/* 3. Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-xl">
              Global Software Innovation est une équipe de passionnés en technologie, spécialisée dans le développement logiciel, les réseaux, la cybersécurité et le déploiement d'applications. Nous aidons les entreprises et les organisations à innover, se protéger et performer dans le digital.
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                <span>Découvrir nos services</span>
              </button>

              <button
                onClick={() => navigate('portfolio')}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900/60 hover:bg-slate-800/80 border border-sky-400/40 text-white font-bold text-xs sm:text-sm backdrop-blur-sm transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-[#1565C0] flex items-center justify-center text-white">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span>Voir notre portfolio</span>
              </button>
            </div>

            {/* 5. Bottom 3 Trust Pillars (Directly inside hero as in Mockup 2) */}
            <div className="pt-5 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <Crosshair className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Innovation</div>
                  <div className="text-[11px] text-slate-400">Des solutions modernes</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Sécurité</div>
                  <div className="text-[11px] text-slate-400">Vos données protégées</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Accompagnement</div>
                  <div className="text-[11px] text-slate-400">Une équipe à vos côtés</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Glassmorphic Tech Card + 4 Stat Badges (5 Cols) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-end relative">
            
            {/* Outer Glowing Glassmorphic Container */}
            <div className="w-full relative rounded-3xl p-[1.5px] bg-gradient-to-b from-sky-400/60 via-sky-500/20 to-transparent shadow-2xl shadow-sky-500/20">
              <div className="bg-[#071329]/90 backdrop-blur-xl rounded-[22px] p-4 sm:p-5 border border-sky-400/20">
                
                {/* Brand Header */}
                <div className="flex items-center gap-3 mb-4 pb-3.5 border-b border-slate-800/80">
                  <img 
                    src="/logo.png" 
                    alt="Global Software Innovation" 
                    className="w-12 h-12 rounded-xl object-contain bg-slate-950 p-1 border border-sky-400/40 shadow-md shrink-0"
                  />
                  <div>
                    <div className="text-xs font-black text-white tracking-wide uppercase leading-none">GLOBAL SOFTWARE</div>
                    <div className="text-[11px] font-black text-[#FBBF24] tracking-widest uppercase mt-0.5 leading-tight">INNOVATION</div>
                    <div className="text-[9.5px] text-slate-300 mt-1">Innover • Développer • Sécuriser • Ensemble</div>
                  </div>
                </div>

                {/* 4 Stats Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Stat 1: 7+ Années */}
                  <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-2.5 flex items-center justify-between hover:border-sky-400/50 transition-colors group">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-400/50 text-sky-400 flex items-center justify-center shrink-0">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white group-hover:text-[#FBBF24] transition-colors">7+</div>
                        <div className="text-[9.5px] text-slate-300 leading-tight">Années d'expérience</div>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
                  </div>

                  {/* Stat 2: 50+ Projets */}
                  <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-2.5 flex items-center justify-between hover:border-sky-400/50 transition-colors group">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-purple-600/30 border border-purple-400/50 text-purple-300 flex items-center justify-center shrink-0">
                        <Code2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white group-hover:text-[#FBBF24] transition-colors">50+</div>
                        <div className="text-[9.5px] text-slate-300 leading-tight">Projets réalisés</div>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
                  </div>

                  {/* Stat 3: 100% Satisfaction */}
                  <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-2.5 flex items-center justify-between hover:border-sky-400/50 transition-colors group">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-600/30 border border-emerald-400/50 text-emerald-400 flex items-center justify-center shrink-0">
                        <UserCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white group-hover:text-[#FBBF24] transition-colors">100%</div>
                        <div className="text-[9.5px] text-slate-300 leading-tight">Satisfaction client</div>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
                  </div>

                  {/* Stat 4: 30+ Partenaires */}
                  <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-2.5 flex items-center justify-between hover:border-sky-400/50 transition-colors group">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-amber-600/30 border border-amber-400/50 text-amber-400 flex items-center justify-center shrink-0">
                        <Handshake className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white group-hover:text-[#FBBF24] transition-colors">30+</div>
                        <div className="text-[9.5px] text-slate-300 leading-tight">Partenaires &amp; Clients</div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                </div>

              </div>
            </div>

            {/* Handwritten Energetic Slogan */}
            <div className="mt-3.5 mr-2 font-serif italic font-bold text-sm sm:text-base text-[#FBBF24] -rotate-2 drop-shadow-md">
              Ensemble, créons l'innovation !
            </div>

          </div>

        </div>
      </section>

      {/* ══════ 2. PILLARS STRIP ════════════════════════════════ */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroPillars.map((p) => (
              <div key={p.title} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                <div className="w-9 h-9 rounded-xl bg-blue-100 group-hover:bg-[#1565C0] text-[#1565C0] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <Zap className="w-4 h-4"/>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#1565C0] transition-colors">{p.title}</div>
                  <div className="text-[11px] text-slate-500 hidden sm:block">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 3. SERVICES PREVIEW ═════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionPill>Nos services</SectionPill>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2A6B] tracking-tight leading-tight">
                Des expertises pour<br/><span className="text-[#1565C0]">vos ambitions</span>
              </h2>
              <p className="mt-4 text-slate-600 max-w-xl">
                Une gamme complète de services pour répondre à tous vos besoins de transformation digitale, de sécurité et d'infrastructure.
              </p>
            </div>
            <Link to="services"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1565C0] text-[#1565C0] font-bold text-sm hover:bg-[#1565C0] hover:text-white transition-all">
              Voir tous nos services <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((svc, i) => (
              <div key={svc.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#1565C0] hover:shadow-2xl shadow-sm transition-all duration-300 flex flex-col hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/70 to-transparent"/>
                  <span className="absolute top-3 right-3 bg-[#FBBF24] text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {svc.badge}
                  </span>
                </div>
                {/* Body */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-[#0B2A6B] mb-2 group-hover:text-[#1565C0] transition-colors">{svc.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed flex-grow mb-4">{svc.shortDesc}</p>
                  <Link to="services"
                    className="flex items-center gap-1 text-xs font-bold text-[#1565C0] group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-3.5 h-3.5"/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 4. WHY US / STATS ═══════════════════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80"
               alt="Tech background" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-[#0B2A6B]/92"/>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left text */}
            <div className="text-white">
              <SectionPill color="amber">Pourquoi nous choisir ?</SectionPill>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
                Une équipe, une vision<br/>
                <span className="text-[#38BDF8]">au service de vos projets</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-lg">
                Notre force réside dans une équipe d'ingénieurs passionnés, une approche personnalisée et un engagement constant envers l'excellence technique et la satisfaction de nos clients.
              </p>
              <button onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black text-sm transition-all cursor-pointer shadow-xl shadow-amber-500/20 active:scale-95">
                En savoir plus <ArrowRight className="w-4 h-4"/>
              </button>
            </div>

            {/* Right stats + photo */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                {companyInfo.stats.map((s) => (
                  <div key={s.label}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors group">
                    <div className="text-3xl font-black text-[#FBBF24] group-hover:scale-110 transition-transform">{s.value}</div>
                    <div className="text-sm font-semibold text-slate-200 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
              {/* Team photo */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-52 relative">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                     alt="Équipe Global Softworks" className="w-full h-full object-cover"/>
                <div className="absolute bottom-4 right-4 italic font-bold text-[#FBBF24] text-lg drop-shadow-lg">
                  Des idées au réel !
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ 5. PROCESS ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionPill color="amber">Notre processus</SectionPill>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2A6B] tracking-tight">
              Comment <span className="text-[#1565C0]">travaillons-nous ?</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Un processus transparent et éprouvé pour transformer vos idées en produits concrets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, i) => (
              <div key={step.number}
                className="relative bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-[#FBBF24] hover:shadow-xl group transition-all duration-300">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 text-slate-300 group-hover:text-[#FBBF24] z-10">
                    <ArrowRight className="w-6 h-6"/>
                  </div>
                )}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-[#FBBF24] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#FBBF24]/10 group-hover:bg-[#FBBF24] text-[#D97706] group-hover:text-slate-950 flex items-center justify-center transition-all shadow-sm">
                    <span className="text-xl">
                      {step.number === '01' ? '💡' : step.number === '02' ? '📋' : step.number === '03' ? '⚙️' : '🚀'}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-[#0B2A6B] text-base mb-2 group-hover:text-[#1565C0] transition-colors">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 6. PORTFOLIO PREVIEW ════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionPill>Notre portfolio</SectionPill>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2A6B] tracking-tight">
                Des projets qui font<br/><span className="text-[#1565C0]">la différence</span>
              </h2>
            </div>
            <Link to="portfolio"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1565C0] text-[#1565C0] font-bold text-sm hover:bg-[#1565C0] hover:text-white transition-all">
              Voir tout notre portfolio <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.slice(0, 6).map((p) => (
              <div key={p.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#1565C0] hover:shadow-2xl shadow-sm transition-all duration-300 flex flex-col hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/80 to-transparent"/>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-[#FBBF24] text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full">{p.category}</span>
                    <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">{p.status}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-lg font-black text-white">{p.title}</div>
                    <div className="text-[11px] text-[#FBBF24] font-semibold mt-0.5">{p.impact}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-mono rounded-lg">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 7. AI WIDGET ════════════════════════════════════ */}
      <AiStrip onOpenQuote={onOpenQuote}/>

      {/* ══════ 8. CTA BANNER ═══════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80"
                 alt="CTA banner" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-[#0B2A6B]/90"/>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-10 sm:p-14 text-white">
              <div>
                <h2 className="text-2xl sm:text-4xl font-black mb-2">Prêt à donner vie à votre projet ?</h2>
                <p className="text-slate-300 text-sm sm:text-base">Discutons de vos besoins et trouvons ensemble la meilleure solution.</p>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                <button onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black text-sm transition-all active:scale-95 cursor-pointer shadow-xl">
                  Demander un devis <ArrowRight className="w-4 h-4"/>
                </button>
                <Link to="contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-sm transition-all">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Inline AI strip ─────────────────────────────────── */
function AiStrip({ onOpenQuote }) {
  const [msg, setMsg] = React.useState('');
  const [response, setResponse] = React.useState('');

  const handleSend = () => {
    if (!msg.trim()) return;
    const lower = msg.toLowerCase();
    let found = "Merci pour votre question ! Nos experts vous répondent sous 24h. N'hésitez pas à demander un devis gratuit !";
    for (const item of aiBotKnowledge) {
      if (item.keywords.some(k => lower.includes(k))) { found = item.response; break; }
    }
    setResponse(found);
  };

  return (
    <section className="py-12 bg-[#060D1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-sky-500/20 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&q=80"
               alt="IA background" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
          <div className="absolute inset-0 bg-[#060D1F]/80"/>

          <div className="relative z-10 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-300 text-[11px] font-bold mb-4">
                ✨ IA intégrée à votre site
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-3">Votre assistant IA disponible 24h/24</h2>
              <p className="text-slate-300 text-sm">
                Posez vos questions sur nos services, tarifs ou délais et obtenez une réponse instantanée.
              </p>
              {response && (
                <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 leading-relaxed">
                  🤖 {response}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="text"
                  value={msg}
                  onChange={e => setMsg(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="Ex : Quels sont vos délais de livraison ?"
                  className="w-full bg-slate-900 text-white placeholder-slate-500 text-sm rounded-full px-5 py-4 pr-14 border border-slate-700 focus:outline-none focus:border-[#FBBF24] transition-colors"
                />
                <button onClick={handleSend}
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-bold text-xs transition-all cursor-pointer">
                  Envoyer
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Tarifs ?","Délais ?","App mobile ?","Cybersécurité ?"].map(q => (
                  <button key={q} onClick={() => { setMsg(q); }}
                    className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] hover:bg-slate-700 transition-colors cursor-pointer">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
