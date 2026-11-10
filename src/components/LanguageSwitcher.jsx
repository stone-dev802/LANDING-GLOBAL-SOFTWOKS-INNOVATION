import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSwitcher({ className = '', variant = 'pill' }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Sélecteur de langue / Language selector"
      className={`inline-flex items-center gap-1.5 p-1 rounded-full bg-[#040C1E] border-2 border-[#FBBF24] shadow-lg shadow-black/20 select-none ${className}`}
    >
      {/* Globe Icon */}
      <div className="pl-2 pr-1 text-[#FBBF24] flex items-center justify-center">
        <Globe className="w-4 h-4 stroke-[2.2]" />
      </div>

      {/* English button (GB EN) */}
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`px-3 py-1 rounded-full text-[11px] font-black tracking-wider transition-all duration-300 cursor-pointer ${
          lang === 'en'
            ? 'bg-[#FBBF24] text-slate-950 shadow-md scale-100'
            : 'text-slate-300 hover:text-white hover:bg-white/10'
        }`}
      >
        GB <span className="opacity-80 font-bold">EN</span>
      </button>

      {/* French button (FR FR) */}
      <button
        type="button"
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
        className={`px-3 py-1 rounded-full text-[11px] font-black tracking-wider transition-all duration-300 cursor-pointer ${
          lang === 'fr'
            ? 'bg-[#FBBF24] text-slate-950 shadow-md scale-100'
            : 'text-slate-300 hover:text-white hover:bg-white/10'
        }`}
      >
        FR <span className="opacity-80 font-bold">FR</span>
      </button>
    </div>
  );
}
