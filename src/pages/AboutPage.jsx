import React from 'react';
import { ArrowRight, CheckCircle2, Target, Lightbulb, Globe } from 'lucide-react';
import { companyInfo, processSteps } from '../data/content';

const SectionPill = ({ color = 'blue', children }) => (
  <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5
    ${color === 'amber' ? 'bg-amber-100 text-amber-900' : 'bg-blue-100 text-blue-900'}`}>
    <span className={`w-1.5 h-1.5 rounded-full ${color === 'amber' ? 'bg-amber-500' : 'bg-blue-600'}`}/>
    {children}
  </span>
);

const values = [
  { icon: '🎯', title: 'Excellence', desc: "Nous ne livrons que des solutions que nous serions fiers de signer de notre nom." },
  { icon: '🤝', title: 'Partenariat', desc: "Nous ne sommes pas des prestataires, mais des partenaires de long terme de votre transformation." },
  { icon: '🔒', title: 'Intégrité', desc: "Transparence totale sur les délais, les coûts et les défis techniques rencontrés." },
  { icon: '🚀', title: 'Innovation', desc: "Nous intégrons en permanence les dernières technologies pour vous offrir un avantage compétitif." },
];

export default function AboutPage({ onOpenQuote }) {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="relative py-28 bg-[#0B2A6B] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
               alt="À propos" className="w-full h-full object-cover opacity-20"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A6B]/95 to-[#1565C0]/60"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          <div>
            <SectionPill color="amber">À propos de nous</SectionPill>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
              Une équipe de passionnés<br/>au service de votre <span className="text-[#FBBF24]">avenir digital</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">{companyInfo.description}</p>
            <button onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black text-sm transition-all active:scale-95 cursor-pointer shadow-xl">
              Travaillez avec nous <ArrowRight className="w-4 h-4"/>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {companyInfo.stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <div className="text-4xl font-black text-[#FBBF24]">{s.value}</div>
                <div className="text-sm font-semibold text-white mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                 alt="Notre équipe" className="rounded-3xl w-full object-cover h-96 shadow-2xl"/>
            <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3">
              <img src="/logo.png" alt="Logo GSI" className="w-12 h-12 object-contain rounded-xl" />
              <div className="pr-3 text-white">
                <div className="text-xs font-black">GLOBAL SOFTWORKS</div>
                <div className="text-[10px] text-[#FBBF24] font-bold">INNOVATION</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#FBBF24] rounded-2xl p-5 text-slate-950 shadow-xl">
              <div className="text-3xl font-black">7+</div>
              <div className="text-xs font-bold">Années d'expertise</div>
            </div>
          </div>
          <div>
            <SectionPill>Notre histoire</SectionPill>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2A6B] mb-6">
              Nés de la passion,<br/><span className="text-[#1565C0]">façonnés par l'expérience</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Fondée à Yaoundé, Cameroun, Global Softworks Innovation est née de la volonté de combler le fossé entre les entreprises africaines et les technologies de pointe mondiales.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Depuis notre création, nous avons accompagné plus de 50 organisations — PME, institutions publiques, startups — dans leur transformation digitale avec des solutions robustes, sécurisées et adaptées au contexte local et international.
            </p>
            <ul className="space-y-3">
              {[
                "Développement de solutions pour 12+ secteurs d'activité",
                "Équipe de 20+ ingénieurs et experts certifiés",
                "Présence dans 5 pays africains",
                "Partenaire officiel de solutions cloud enterprise",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionPill color="amber">Nos valeurs</SectionPill>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2A6B]">
              Ce qui nous distingue
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#1565C0] hover:shadow-xl transition-all group text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-black text-[#0B2A6B] text-lg mb-2 group-hover:text-[#1565C0] transition-colors">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionPill>Notre méthode</SectionPill>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2A6B]">
              Comment <span className="text-[#1565C0]">travaillons-nous ?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.number}
                className="relative bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-[#FBBF24] hover:shadow-lg group transition-all text-center">
                <div className="text-5xl mb-3">
                  {step.number === '01' ? '💡' : step.number === '02' ? '📋' : step.number === '03' ? '⚙️' : '🚀'}
                </div>
                <div className="text-2xl font-black text-slate-200 group-hover:text-[#FBBF24] transition-colors mb-2">{step.number}</div>
                <h3 className="font-bold text-[#0B2A6B] text-base mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
