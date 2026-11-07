import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { servicesData } from '../data/content';

const SectionPill = ({ color = 'blue', children }) => (
  <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5
    ${color === 'amber' ? 'bg-amber-100 text-amber-900' : 'bg-blue-100 text-blue-900'}`}>
    <span className={`w-1.5 h-1.5 rounded-full ${color === 'amber' ? 'bg-amber-500' : 'bg-blue-600'}`}/>
    {children}
  </span>
);

export default function ServicesPage({ onOpenQuote }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="pt-24">

      {/* ── Page Hero ── */}
      <section className="relative py-24 overflow-hidden bg-[#0B2A6B]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
               alt="Services" className="w-full h-full object-cover opacity-15"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A6B] to-[#0B2A6B]/60"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <SectionPill>Nos services</SectionPill>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Une expertise complète<br/>pour <span className="text-[#FBBF24]">tous vos projets</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Nous vous accompagnons de la conception à la mise en production avec des solutions innovantes, fiables et sécurisées, adaptées à vos besoins.
          </p>
        </div>
      </section>

      {/* ── All 8 Services ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((svc, i) => (
              <div key={svc.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#1565C0] hover:shadow-2xl shadow-sm transition-all duration-300 flex flex-col md:flex-row">
                {/* Image side */}
                <div className="relative md:w-64 h-52 md:h-auto shrink-0 overflow-hidden">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B2A6B]/20"/>
                  <span className="absolute top-3 left-3 bg-[#FBBF24] text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full">{svc.badge}</span>
                </div>
                {/* Text side */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-black text-[#0B2A6B] mb-2 group-hover:text-[#1565C0] transition-colors">{svc.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{svc.fullDesc}</p>
                    <ul className="space-y-1.5 mb-4">
                      {svc.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"/>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedService(svc)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-blue-50 text-[#1565C0] hover:bg-[#1565C0] hover:text-white transition-all cursor-pointer shadow-2xs"
                    >
                      <span>Voir les détails</span>
                      <ArrowRight className="w-3.5 h-3.5"/>
                    </button>
                    <button
                      onClick={() => onOpenQuote(svc)}
                      className="ml-auto text-xs font-black bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 px-4 py-2 rounded-full transition-all active:scale-95 cursor-pointer shadow-sm hover:shadow-md"
                    >
                      Demander un devis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal service details */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative h-56 overflow-hidden rounded-t-3xl">
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/80 to-transparent"/>
              <button onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors">
                <X className="w-5 h-5"/>
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="bg-[#FBBF24] text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full">{selectedService.badge}</span>
                <h3 className="text-2xl font-black text-white mt-1">{selectedService.title}</h3>
              </div>
            </div>
            <div className="p-7">
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{selectedService.fullDesc}</p>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Ce qui est inclus :</h4>
              <ul className="space-y-2.5 mb-7">
                {selectedService.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"/>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => { setSelectedService(null); onOpenQuote(selectedService); }}
                className="w-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                Demander un devis pour ce service <ArrowRight className="w-4 h-4"/>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
