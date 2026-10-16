import React, { useEffect } from 'react';
import { 
  X, 
  Linkedin, 
  Github, 
  Mail, 
  Code2, 
  Smartphone, 
  Server, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  Layers, 
  Award,
  ArrowRight
} from 'lucide-react';

export default function TeamMemberModal({ member, isOpen, onClose, onOpenQuote }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/40 hover:bg-slate-900/70 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer shadow-md"
          aria-label="Fermer"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        <div className="overflow-y-auto">
          {/* Header Hero Banner with Member Info */}
          <div className="relative bg-gradient-to-r from-[#040C1E] via-[#0B2558] to-[#1565C0] p-6 sm:p-8 text-white overflow-hidden">
            {/* Tech Background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FBBF24]/20 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
              
              {/* Profile Photo Frame */}
              <div className="relative shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 p-0.5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Online / Active status pulse */}
                <div className="absolute -bottom-1.5 -right-1.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-black shadow-md border-2 border-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Actif
                </div>
              </div>

              {/* Title & Alias */}
              <div className="text-center sm:text-left flex-1 min-w-0">
                
                {/* Top Badges: Pseudo + Role Badge */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                  {member.alias && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBBF24] text-slate-950 text-xs font-black tracking-wide shadow-sm uppercase">
                      <Sparkles className="w-3 h-3 fill-slate-950" />
                      {member.alias}
                    </span>
                  )}
                  {member.badge && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-[11px] font-semibold backdrop-blur-sm">
                      <Award className="w-3 h-3 text-[#FBBF24]" />
                      {member.badge}
                    </span>
                  )}
                </div>

                {/* Full Name */}
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight mb-1">
                  {member.name}
                </h2>

                {/* Primary Role & Subtitle */}
                <div className="text-sm sm:text-base font-bold text-sky-300 mb-1">
                  {member.role}
                </div>
                {member.subtitle && (
                  <p className="text-xs text-slate-300 font-medium tracking-wide">
                    {member.subtitle}
                  </p>
                )}

                {/* Social Links */}
                <div className="flex items-center justify-center sm:justify-start gap-2.5 mt-4">
                  {member.github && member.github !== '#' && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/25 text-white text-xs font-semibold border border-white/15 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0A66C2]/80 hover:bg-[#0A66C2] text-white text-xs font-semibold transition-all"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/25 text-white text-xs font-semibold border border-white/15 transition-all"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </a>
                  )}
                </div>

              </div>

            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-6">

            {/* About / Bio */}
            <div>
              <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B2558] mb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0062FF]" />
                Présentation & Profil
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 border border-slate-100 rounded-2xl p-4">
                {member.fullBio || member.desc}
              </p>
            </div>

            {/* Specialties & Domains */}
            {member.specialties && member.specialties.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B2558] mb-3">
                  <Layers className="w-4 h-4 text-[#0062FF]" />
                  Domaines d'intervention
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {member.specialties.map((spec, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-sky-50 text-[#0062FF] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-xs font-bold text-slate-800">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills & Technologies */}
            {member.skills && member.skills.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B2558] mb-3">
                  <Code2 className="w-4 h-4 text-[#0062FF]" />
                  Technologies & Outils maîtrisés
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/80 hover:bg-blue-100/90 text-[#0B2558] font-semibold text-xs border border-blue-100 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0062FF]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Besoin d'un accompagnement sur vos projets web & mobiles ?
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Fermer
                </button>
                {onOpenQuote && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenQuote();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0B2558] hover:bg-[#1565C0] text-white font-bold text-xs shadow-md transition-all cursor-pointer shrink-0"
                  >
                    <span>Lancer un projet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
