import React from 'react';
import { Send, ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-blue-950 p-8 sm:p-12 text-white shadow-2xl border border-sky-500/20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left Content */}
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 p-0.5 shrink-0 shadow-lg shadow-sky-500/30 hidden sm:flex items-center justify-center">
              <div className="w-full h-full bg-navy-900 rounded-[14px] flex items-center justify-center">
                <Send className="w-8 h-8 text-sky-400" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 text-sky-300 border border-sky-800 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Transformation digitale & Performance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Prêt à donner vie à votre projet ?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
                Discutons de vos besoins et trouvons ensemble la meilleure architecture technologique adaptée à votre budget.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 relative z-10 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-amber-400 hover:bg-amber-500 active:scale-95 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${companyInfo.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-navy-850 hover:bg-navy-800 border border-slate-700 text-slate-200 font-semibold text-sm sm:text-base transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Nous contacter</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
