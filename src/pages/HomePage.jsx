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
import ProofReferencesSection from '../components/ProofReferencesSection';

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

      {/* ══════ 1. HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#040C1E]">

        {/* Background: laptop photo + dark gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040C1E] via-[#040C1E]/90 to-[#040C1E]/40" />
        </div>

        {/* Bottom-right corner decorations */}
        <div className="absolute bottom-0 right-0 w-32 h-32 z-10 pointer-events-none overflow-hidden">
          <div className="absolute bottom-[-20px] right-[-20px] w-28 h-14 bg-[#0284C7] rotate-45" />
          <div className="absolute bottom-[-10px] right-[-10px] w-20 h-20 bg-[#FBBF24] rotate-45 opacity-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* ── LEFT COLUMN ── */}
            <div className="lg:col-span-7">

              {/* Badge pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F1F3D]/80 border border-sky-500/30 text-sky-200 text-[11px] font-semibold backdrop-blur mb-5">
                <Rocket className="w-3 h-3 text-[#FBBF24]" />
                Votre partenaire digital de confiance
              </div>

              {/* H1 */}
              <h1 className="text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-black text-white leading-[1.2] tracking-tight mb-3">
                Des solutions numériques{' '}
                <span className="text-[#FBBF24] relative inline-block">
                  sur mesure
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-[#FBBF24] rounded-full" />
                </span>
                {' '}pour un avenir{' '}
                <span className="text-[#38BDF8]">plus connecté</span>
              </h1>

              {/* Yellow accent bar */}
              <div className="w-12 h-[3px] bg-[#FBBF24] rounded-full mb-5" />

              {/* Description */}
              <p className="text-[12.5px] sm:text-[13px] text-slate-300 leading-relaxed mb-7 max-w-[480px]">
                Global Softworks Innovation est une équipe de passionnés en technologie, spécialisée dans le développement logiciel, les réseaux, la cybersécurité et le déploiement d'applications. Nous aidons les entreprises et les organisations à innover, se protéger et performer dans le digital.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  Découvrir nos services
                </button>
                <button
                  onClick={() => navigate('portfolio')}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0F1F3D]/70 hover:bg-[#0F1F3D] border border-sky-500/30 text-white font-semibold text-sm backdrop-blur transition-all cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-[#1565C0] flex items-center justify-center">
                    <Play className="w-3 h-3 fill-white ml-0.5" />
                  </div>
                  Voir notre portfolio
                </button>
              </div>

              {/* Bottom 3 pillars */}
              <div className="border-t border-slate-800 pt-4 grid grid-cols-3 gap-4">
                {[
                  { icon: Crosshair, label: 'Innovation', sub: 'Des solutions modernes' },
                  { icon: Shield,    label: 'Sécurité',   sub: 'Vos données protégées' },
                  { icon: Users,     label: 'Accompagnement', sub: 'Une équipe à vos côtés' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-sky-950/60 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white">{label}</div>
                      <div className="text-[10px] text-slate-500">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN — Glassmorphic card ── */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden p-px bg-gradient-to-b from-sky-400/50 to-sky-800/20 shadow-2xl shadow-sky-500/20">
                <div className="bg-[#071329]/85 backdrop-blur-xl rounded-2xl p-6 border border-sky-400/20">

                  {/* Brand header */}
                  <div className="flex items-center gap-4 mb-5 pb-4 border-b border-slate-800">
                    <img
                      src="/logo.png"
                      alt="GSI"
                      className="w-16 h-16 rounded-xl object-contain bg-slate-950 p-1.5 border border-sky-400/30 shadow shrink-0"
                    />
                    <div>
                      <div className="text-[15px] font-black text-white tracking-wide uppercase">GLOBAL SOFTWORKS</div>
                      <div className="text-[13px] font-black text-[#FBBF24] tracking-widest uppercase mt-1">INNOVATION</div>
                      <div className="text-[11px] text-slate-400 mt-1">Innover • Développer • Sécuriser • Ensemble</div>
                    </div>
                  </div>

                  {/* 4 Stats grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { icon: Users,     color: 'bg-blue-600/30 border-blue-400/50 text-sky-400',    value: '7+',   label: "Années d'expérience" },
                      { icon: Code2,     color: 'bg-purple-600/30 border-purple-400/50 text-purple-300', value: '50+',  label: 'Projets réalisés' },
                      { icon: UserCheck, color: 'bg-emerald-600/30 border-emerald-400/50 text-emerald-400', value: '100%', label: 'Satisfaction client' },
                      { icon: Handshake, color: 'bg-amber-600/30 border-amber-400/50 text-amber-400', value: '30+',  label: 'Partenaires & Clients' },
                    ].map(({ icon: Icon, color, value, label }) => (
                      <div key={label} className="bg-slate-900/70 border border-slate-700/50 rounded-xl p-3 flex items-center justify-between group hover:border-sky-400/40 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 ${color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[15px] font-black text-[#FBBF24]">{value}</div>
                            <div className="text-[11px] text-slate-400 leading-tight">{label}</div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>

                  {/* Italic slogan */}
                  <div className="text-right font-serif italic text-[#FBBF24] text-base font-bold -rotate-1 pr-1">
                    Ensemble, créons l'innovation !
                  </div>
                </div>
              </div>
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
              <div 
                key={p.id}
                onClick={() => navigate(`project/${p.id}`)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#1565C0] hover:shadow-2xl shadow-sm transition-all duration-300 flex flex-col hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/80 to-transparent"/>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-[#FBBF24] text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full">{p.category}</span>
                    <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">{p.status}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-lg font-black text-white group-hover:text-sky-200 transition-colors">{p.title}</div>
                    <div className="text-[11px] text-[#FBBF24] font-semibold mt-0.5">{p.impact}</div>
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-3">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-mono rounded-lg">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`project/${p.id}`);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 group-hover:bg-[#1565C0] text-[#1565C0] group-hover:text-white font-bold text-xs transition-all shadow-xs cursor-pointer"
                    >
                      <span>Voir les détails</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 6.5 PREUVES TERRAIN & RÉFÉRENCES (RÉALISATIONS EN ACTION) ══════ */}
      <ProofReferencesSection onOpenQuote={onOpenQuote} limit={6} />

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
