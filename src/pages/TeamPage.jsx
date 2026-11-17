import React, { useState } from 'react';
import { Linkedin, Github, Mail, ArrowRight, Sparkles, ExternalLink, Code2 } from 'lucide-react';
import { teamMembers } from '../data/content';
import TeamMemberModal from '../components/TeamMemberModal';

const SectionPill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 bg-blue-100 text-blue-900 shadow-xs">
    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"/>
    {children}
  </span>
);

export default function TeamPage({ onOpenQuote }) {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="relative py-24 bg-[#0B2A6B] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80"
            alt="Notre équipe" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2A6B]/90 via-[#0B2A6B]/95 to-[#0B2A6B]" />
        
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <SectionPill>Notre équipe</SectionPill>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
            Des experts à votre <span className="text-[#FBBF24]">service</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Une équipe pluridisciplinaire d'ingénieurs et de passionnés, dédiée à transformer vos défis technologiques en succès durables.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2558] mb-2">
              Rencontrez nos talents
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              Cliquez sur un profil pour explorer son parcours, ses domaines de compétences et sa stack technique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#0062FF] hover:shadow-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col relative"
              >
                {/* Photo Frame */}
                <div className="relative h-80 overflow-hidden bg-slate-900">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/95 via-[#0B2A6B]/30 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    {member.alias ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBBF24] text-slate-950 text-xs font-black shadow-md tracking-wider">
                        <Sparkles className="w-3 h-3 fill-slate-950" />
                        {member.alias}
                      </span>
                    ) : <span />}

                    {/* Social Quick Links on Card */}
                    <div className="flex items-center gap-1.5">
                      {member.github && member.github !== '#' && (
                        <a 
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-full bg-white/20 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/30 transition-all shadow-sm"
                          aria-label="GitHub"
                          title="Profil GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.linkedin && member.linkedin !== '#' && (
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#0A66C2] text-white flex items-center justify-center backdrop-blur-md border border-white/30 transition-all shadow-sm"
                          aria-label="LinkedIn"
                          title="Profil LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-full bg-white/20 hover:bg-emerald-600 text-white flex items-center justify-center backdrop-blur-md border border-white/30 transition-all shadow-sm"
                          aria-label="Email"
                          title="Envoyer un email"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Name and Role overlay on photo bottom */}
                  <div className="absolute bottom-4 left-5 right-5 z-10 text-white">
                    <h3 className="text-lg sm:text-xl font-black leading-tight tracking-tight mb-1 text-white group-hover:text-sky-200 transition-colors">
                      {member.name}
                    </h3>
                    <div className="inline-block bg-[#0062FF] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs">
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  
                  <div>
                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {member.desc}
                    </p>

                    {/* Skills pills preview if available */}
                    {member.skills && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {member.skills.slice(0, 3).map((s, idx) => (
                          <span 
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10.5px] font-semibold"
                          >
                            {s}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10.5px] font-bold">
                            +{member.skills.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Bottom "Voir profil" interactive prompt */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0062FF] group-hover:text-[#0B2558] transition-colors">
                    <span>Voir le profil complet</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Join us CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0B2A6B] mb-4">Rejoignez notre équipe !</h2>
          <p className="text-slate-600 mb-8 text-base sm:text-lg">
            Vous êtes passionné(e) par la technologie et souhaitez relever des défis stimulants ? Nous recrutons des talents.
          </p>
          <button 
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black text-sm sm:text-base shadow-xl transition-all active:scale-95 cursor-pointer"
          >
            <span>Candidature spontanée</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Interactive Modal */}
      <TeamMemberModal 
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        onOpenQuote={onOpenQuote}
      />

    </div>
  );
}

