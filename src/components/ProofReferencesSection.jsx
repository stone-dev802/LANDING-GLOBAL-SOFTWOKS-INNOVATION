import React, { useState } from 'react';
import { 
  Play, 
  Image as ImageIcon, 
  Video, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  X, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Building2,
  ExternalLink
} from 'lucide-react';
import { proofReferences, clientLogos } from '../data/content';
import { Link } from '../router';

export default function ProofReferencesSection({ onOpenQuote, title, subtitle, showLogos = true, limit = null }) {
  const [filter, setFilter] = useState('Tous');
  const [selectedProof, setSelectedProof] = useState(null);

  const categories = ['Tous', 'Démo Logiciel', 'Chantier Réseau', 'Vidéosurveillance', 'Cybersécurité'];

  const filteredItems = filter === 'Tous' 
    ? proofReferences 
    : proofReferences.filter(p => p.category === filter);

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-20 lg:py-28 bg-[#040C1E] text-white relative overflow-hidden border-t border-b border-sky-950">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 bg-sky-950/80 border border-sky-500/30 text-sky-300">
              <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span>Preuves concrètes & Références</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {title || (
                <>
                  Nos réalisations en <span className="text-[#FBBF24]">action</span> & sur le <span className="text-sky-400">terrain</span>
                </>
              )}
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {subtitle || "Découvrez nos démonstrations logicielles, nos chantiers réseaux et nos installations sécurisées en images et vidéos réelles. Parce que la confiance se construit avec des preuves."}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote && onOpenQuote()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <span>Discuter de votre projet</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#FBBF24] text-slate-950 font-black shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid of Proof References */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProof(item)}
              className="group bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-400/50 shadow-lg hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Thumbnail with overlay & badge */}
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="bg-[#0B2558]/90 backdrop-blur-md text-sky-200 text-[10px] font-bold px-2.5 py-1 rounded-full border border-sky-400/30">
                    {item.category}
                  </span>
                  <span className="bg-[#FBBF24] text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Play icon indicator for videos, or image icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {item.type === 'video' ? (
                    <div className="w-12 h-12 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-400/30 group-hover:scale-110 group-hover:bg-amber-400 transition-all">
                      <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Bottom thumbnail text info */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[11px] font-bold text-sky-400 mb-0.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{item.client}</span>
                  </div>
                  <h3 className="text-base font-black text-white leading-snug group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-grow bg-slate-900/60">
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key highlights / bullet points */}
                <div className="space-y-1.5 mb-4 border-t border-slate-800/80 pt-3">
                  {item.highlights.slice(0, 2).map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Footer link */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:text-amber-300 transition-colors">
                  <span className="flex items-center gap-1.5">
                    {item.type === 'video' ? <Video className="w-3.5 h-3.5" /> : <ImageIcon className="w-3.5 h-3.5" />}
                    <span>{item.type === 'video' ? 'Voir la démo vidéo' : 'Explorer les captures'}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client / Partner Trust Bar */}
        {showLogos && (
          <div className="mt-20 pt-10 border-t border-slate-800/80">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Déploiements et solutions adoptés par des organisations exigeantes
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {clientLogos.map((client, i) => (
                <div
                  key={i}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 text-center flex flex-col items-center justify-center hover:border-sky-500/40 hover:bg-slate-900 transition-all"
                >
                  <span className="text-xs font-black text-white mb-0.5">{client.name}</span>
                  <span className="text-[10px] text-slate-400">{client.role}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ── Lightbox / Modal for Video/Photo Showcase ── */}
      {selectedProof && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-white">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedProof(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/80 hover:bg-slate-800 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Player Area */}
            <div className="relative h-64 sm:h-80 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedProof.thumbnail}
                alt={selectedProof.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />

              {/* Overlay preview message for placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FBBF24] text-slate-950 flex items-center justify-center shadow-xl mb-3">
                  {selectedProof.type === 'video' ? (
                    <Play className="w-7 h-7 fill-slate-950 ml-1" />
                  ) : (
                    <ImageIcon className="w-7 h-7" />
                  )}
                </div>
                <div className="bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-sky-400/30 text-xs font-medium text-sky-200">
                  {selectedProof.type === 'video' 
                    ? "Espace de visionnage vidéo HD / Démonstration en direct" 
                    : "Capture haute résolution & vue détaillée du chantier"}
                </div>
              </div>

              {/* Badges on preview */}
              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full">
                  Vérifié sur le terrain
                </span>
                <span className="bg-slate-900/90 text-slate-200 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20">
                  {selectedProof.location}
                </span>
              </div>
            </div>

            {/* Details Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs font-bold text-[#FBBF24] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  <span>{selectedProof.client}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {selectedProof.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {selectedProof.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 space-y-2.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Points forts et garanties livrées
                </div>
                {selectedProof.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProof(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                >
                  Fermer
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedProof(null);
                    onOpenQuote && onOpenQuote();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black text-xs shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span>Demander une solution similaire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
