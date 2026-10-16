import React from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';
import { teamMembers } from '../data/content';

const SectionPill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 bg-blue-100 text-blue-900">
    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"/>
    {children}
  </span>
);

export default function TeamPage({ onOpenQuote }) {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="relative py-24 bg-[#0B2A6B] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80"
               alt="Notre équipe" className="w-full h-full object-cover opacity-20"/>
        </div>
        <div className="absolute inset-0 bg-[#0B2A6B]/80"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <SectionPill>Notre équipe</SectionPill>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Des experts à votre <span className="text-[#FBBF24]">service</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Une équipe pluridisciplinaire de passionnés, formés aux meilleures pratiques et certifiés par les acteurs technologiques les plus reconnus.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#1565C0] hover:shadow-2xl shadow-sm transition-all duration-300 hover:-translate-y-2">
                {/* Photo */}
                <div className="relative h-72 overflow-hidden">
                  <img src={member.image} alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/90 via-[#0B2A6B]/20 to-transparent"/>
                  {/* Name on photo */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-xl font-black text-white">{member.name}</h3>
                    <div className="inline-block mt-1.5 bg-[#FBBF24] text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full">{member.role}</div>
                  </div>
                  {/* LinkedIn button */}
                  <a href={member.linkedin}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-[#0A66C2] flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4"/>
                  </a>
                </div>
                {/* Bio */}
                <div className="p-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0B2A6B] mb-4">Rejoignez notre équipe !</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Vous êtes passionné(e) par la technologie et souhaitez relever des défis stimulants ? Nous recrutons des talents.
          </p>
          <button onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black text-base shadow-xl transition-all active:scale-95 cursor-pointer">
            Candidature spontanée <ArrowRight className="w-4 h-4"/>
          </button>
        </div>
      </section>
    </div>
  );
}
