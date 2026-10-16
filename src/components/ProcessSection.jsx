import React from 'react';
import { 
  Lightbulb, 
  FileCheck, 
  Code2, 
  Rocket, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { processSteps } from '../data/content';

const stepIcons = {
  Lightbulb: Lightbulb,
  FileSpreadsheet: FileCheck,
  CodeXml: Code2,
  Rocket: Rocket,
};

export default function ProcessSection({ onOpenQuote }) {
  return (
    <section id="processus" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Notre processus</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Comment <span className="text-sky-600">travaillons-nous ?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
              Un processus simple, transparent et éprouvé pour transformer vos idées en projets concrets et générateurs de résultats.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 p-2 group self-start lg:self-end"
          >
            <span>Démarrer votre projet</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {processSteps.map((step, index) => {
            const IconComponent = stepIcons[step.icon] || Code2;
            const isLast = index === processSteps.length - 1;

            return (
              <div
                key={step.number}
                className="relative bg-slate-50/80 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Connecting arrow for desktop */}
                {!isLast && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-300 group-hover:text-amber-500 transition-colors">
                    <ArrowRight className="w-6 h-6 stroke-[2.5]" />
                  </div>
                )}

                <div>
                  {/* Step Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-slate-300 group-hover:text-amber-500 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-amber-100 group-hover:bg-amber-400 text-amber-900 flex items-center justify-center transition-colors shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-navy-900 mb-2.5 group-hover:text-sky-600 transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Étape {index + 1} validée avec vous</span>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
