import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('gsi_lang');
      if (saved === 'en' || saved === 'fr') return saved;
      // Auto-detect browser language if first visit
      const browserLang = navigator.language?.toLowerCase() || '';
      return browserLang.startsWith('en') ? 'en' : 'fr';
    } catch {
      return 'fr';
    }
  });

  const setLang = (newLang) => {
    if (newLang !== 'fr' && newLang !== 'en') return;
    setLangState(newLang);
    try {
      localStorage.setItem('gsi_lang', newLang);
      document.documentElement.lang = newLang;
    } catch (e) {
      // storage unavailable
    }
  };

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  // Translation helper: t('nav.home') -> 'Accueil' or 'Home'
  const t = (path, fallback = '') => {
    const keys = path.split('.');
    let cur = translations[lang];
    for (const k of keys) {
      if (cur && typeof cur === 'object' && k in cur) {
        cur = cur[k];
      } else {
        // Fallback to french then to fallback string
        let fb = translations.fr;
        for (const fk of keys) {
          if (fb && typeof fb === 'object' && fk in fb) {
            fb = fb[fk];
          } else {
            return fallback || path;
          }
        }
        return fb || fallback || path;
      }
    }
    return cur || fallback || path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
