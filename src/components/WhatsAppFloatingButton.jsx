import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/content';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function WhatsAppFloatingButton() {
  const { lang, t } = useLanguage();

  const defaultMessage = lang === 'fr'
    ? "Bonjour Global Softworks Innovation ! Je viens de visiter votre site web et je souhaite échanger avec vous concernant un projet."
    : "Hello Global Softworks Innovation! I just visited your website and would like to discuss a project with your team.";

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp || '237691862447'}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside aria-label="Actions rapides" className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* ── Language Switcher Toggle Pill (Exact layout matching Image 2) ── */}
      <div className="transition-all duration-300 hover:scale-105">
        <LanguageSwitcher />
      </div>

      {/* ── WhatsApp Floating Button ── */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('common.chatOnWhatsApp', 'Discuter sur WhatsApp')}
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/40"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-[#25D366] rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-[#25D366] rounded-full" />
        </div>
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          {t('common.chatOnWhatsApp', 'Discuter sur WhatsApp')}
        </span>
      </a>
    </aside>
  );
}
