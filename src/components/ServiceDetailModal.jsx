import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onOpenQuoteForService }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge */}
        {service.badge && (
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            {service.badge}
          </span>
        )}

        <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Features List */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 mb-6">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Ce qui est inclus dans cette prestation :
          </h4>
          <ul className="space-y-2.5">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Security & Quality guarantee */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <ShieldCheck className="w-4 h-4 text-sky-600" />
          <span>Accompagnement, tests d'assurance qualité et support réactif inclus.</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenQuoteForService(service);
            }}
            className="flex-1 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Demander un devis pour ce service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="sm:w-auto px-5 py-3.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-colors"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
}
