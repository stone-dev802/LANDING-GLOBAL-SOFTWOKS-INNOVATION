import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Calendar, 
  User, 
  Briefcase, 
  ShieldCheck, 
  Smartphone, 
  Globe, 
  Server, 
  Cpu, 
  ExternalLink,
  ChevronRight,
  Target,
  Lightbulb,
  Play,
  Video,
  Image as ImageIcon
} from 'lucide-react';
import { useRouter } from '../router';
import { portfolioProjects, proofReferences } from '../data/content';

export default function ProjectDetailPage({ projectId, onOpenQuote }) {
  const { navigate } = useRouter();

  // Find project by id
  const project = portfolioProjects.find((p) => String(p.id) === String(projectId)) || portfolioProjects[0];

  const [activeImage, setActiveImage] = useState(
    project.gallery && project.gallery.length > 0 ? project.gallery[0] : project.image
  );

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web':          return <Globe className="w-4 h-4" />;
      case 'Mobile':       return <Smartphone className="w-4 h-4" />;
      case 'Cybersécurité':return <ShieldCheck className="w-4 h-4" />;
      case 'Réseau & Infra':return <Server className="w-4 h-4" />;
      case 'IA & Agents':  return <Cpu className="w-4 h-4" />;
      default:             return <Briefcase className="w-4 h-4" />;
    }
  };

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  // Trouver si une référence / démo vidéo existe pour ce projet
  const matchedProof = proofReferences.find((ref) => 
    (project.proofId && ref.id === project.proofId) ||
    (ref.projectId && String(ref.projectId) === String(project.id)) ||
    ref.title.toLowerCase().includes(project.title.toLowerCase().slice(0, 10)) ||
    (project.client && ref.client.toLowerCase().includes(project.client.toLowerCase().slice(0, 8)))
  );

  const [activeMediaMode, setActiveMediaMode] = useState('photo');

  return (
    <div className="pt-24 min-h-screen bg-slate-50/60 pb-20">
      
      {/* Top Breadcrumb & Return button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => navigate('portfolio')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-[#0B2558] font-bold text-xs sm:text-sm border border-slate-200 shadow-sm transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Retour au portfolio</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <span 
              onClick={() => navigate('portfolio')} 
              className="hover:text-sky-600 cursor-pointer hidden sm:inline"
            >
              Portfolio
            </span>
            <ChevronRight className="w-3.5 h-3.5 hidden sm:inline" />
            <span className="text-[#0B2558] max-w-[200px] sm:max-w-none truncate font-bold">
              {project.title}
            </span>
          </div>
        </div>
      </div>

      {/* Main Project Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        
        {/* Header Block */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
              {getCategoryIcon(project.category)}
              <span>{project.category}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-xs">
              {project.status}
            </span>
            {project.year && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{project.year}</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2558] tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-900 text-sm font-bold">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{project.impact}</span>
          </div>
        </div>

        {/* Gallery & Main visual showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0062FF]" />
              Démonstrations & Captures réelles
            </h2>

            {/* Toggle Video / Photo si démo vidéo disponible */}
            {matchedProof && (
              <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200/80 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveMediaMode('photo')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeMediaMode === 'photo'
                      ? 'bg-white text-[#0B2558] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 text-sky-600" />
                  <span>Photos & Captures</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMediaMode('video')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeMediaMode === 'video'
                      ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Démo en action / Vidéo</span>
                </button>
              </div>
            )}
          </div>

          {/* Mode Démo Vidéo en action */}
          {matchedProof && activeMediaMode === 'video' ? (
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-900 bg-slate-950 h-[320px] sm:h-[450px] lg:h-[520px] shadow-2xl flex items-center justify-center">
                {matchedProof.videoUrl ? (
                  <video
                    src={matchedProof.videoUrl}
                    controls
                    playsInline
                    poster={matchedProof.thumbnail || activeImage}
                    className="w-full h-full object-contain bg-black"
                  />
                ) : (
                  <>
                    <img
                      src={matchedProof.thumbnail || activeImage}
                      alt={matchedProof.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                      <div className="w-20 h-20 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-400/40 mb-4 hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-8 h-8 fill-slate-950 ml-1" />
                      </div>
                      <span className="bg-slate-900/90 text-amber-300 border border-amber-400/30 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                        {matchedProof.badge || "Démonstration en direct"}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white max-w-lg mb-2">
                        {matchedProof.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                        {matchedProof.description}
                      </p>
                    </div>

                    <div className="absolute bottom-4 left-6 flex items-center gap-2">
                      <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
                        Vérifié sur le terrain
                      </span>
                      <span className="bg-slate-900/80 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20">
                        {matchedProof.location || "En production"}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Points forts de la démo */}
              <div className="p-4 bg-sky-50/60 rounded-2xl border border-sky-100 flex flex-wrap gap-4 items-center justify-between">
                <span className="text-xs font-bold text-[#0B2558]">Points certifiés lors du déploiement :</span>
                <div className="flex flex-wrap gap-3">
                  {matchedProof.highlights.map((h, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-white px-3 py-1 rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Mode Captures d'écrans & Photos */
            <div>
              {/* Active Large Display */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 h-[320px] sm:h-[450px] lg:h-[520px] shadow-inner mb-4">
                <img
                  src={activeImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Thumbnails Strip */}
              {galleryImages.length > 1 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative rounded-xl overflow-hidden h-20 sm:h-24 border-2 transition-all cursor-pointer ${
                        activeImage === img
                          ? 'border-[#0062FF] ring-2 ring-[#0062FF]/20 shadow-md scale-[1.02]'
                          : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                      }`}
                    >
                      <img src={img} alt={`${project.title} capture ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Details Grid: Left Info & Right Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Left Column (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Description & Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 className="text-lg font-black text-[#0B2558] mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#0062FF]" />
                Contexte et présentation du projet
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenge & Solution */}
            {(project.challenge || project.solution) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.challenge && (
                  <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
                      <Target className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#0B2558] text-sm mb-2">Le Défi</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#0B2558] text-sm mb-2">Notre Solution</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Results / Deliverables */}
            {project.results && project.results.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h3 className="text-lg font-black text-[#0B2558] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Résultats & Livrables clés
                </h3>
                <ul className="space-y-3">
                  {project.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Right Sidebar (1 col) */}
          <div className="space-y-6">
            
            {/* Tech stack card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#0B2558] mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0062FF]" />
                Technologies & Outils
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-[#0B2558] font-semibold text-xs border border-blue-100"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0062FF]" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Client & Role */}
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
                {project.client && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Client / Périmètre
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0B2558]">
                      {project.client}
                    </span>
                  </div>
                )}
                {project.role && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Rôle de notre équipe
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      {project.role}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-[#0B2558] to-[#1565C0] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-black mb-2">Un projet similaire en vue ?</h4>
                <p className="text-xs text-sky-200 leading-relaxed mb-6">
                  Nos ingénieurs et architectes conçoivent des solutions adaptées à vos objectifs précis. Parlons-en dès aujourd'hui.
                </p>
                <button
                  type="button"
                  onClick={() => onOpenQuote()}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span>Demander un devis personnalisé</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
