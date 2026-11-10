import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  X, 
  RotateCcw, 
  ArrowUp,
  MessageCircle, 
  Globe, 
  ShieldCheck, 
  Camera, 
  CreditCard,
  ExternalLink,
  ChevronRight,
  FileText
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { bilingualKnowledge } from '../i18n/translations';
import { companyInfo } from '../data/content';

export default function AiAssistantWidget({ onOpenQuote }) {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  // Quick prompt cards defined in translations
  const promptIcons = {
    Globe: <Globe className="w-4 h-4 text-sky-500" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
    Camera: <Camera className="w-4 h-4 text-amber-500" />,
    CreditCard: <CreditCard className="w-4 h-4 text-blue-500" />
  };

  const prompts = [
    {
      id: 'dev',
      icon: 'Globe',
      title: lang === 'fr' ? 'Développement Web & Mobile' : 'Web & Mobile Apps',
      desc: lang === 'fr' ? 'Applications sur-mesure, e-commerce, ERP & APIs performantes' : 'Custom platforms, iOS & Android apps, ERP & APIs',
      query: lang === 'fr' ? 'Parlez-moi de vos services de développement web et mobile.' : 'Tell me about your web and mobile development services.'
    },
    {
      id: 'cyber',
      icon: 'ShieldCheck',
      title: lang === 'fr' ? 'Audit & Cybersécurité' : 'Cybersecurity & Audit',
      desc: lang === 'fr' ? 'Pentest, conformité, protection des données & anti-ransomware' : 'Penetration testing, data security, SOC & defense',
      query: lang === 'fr' ? 'Quels services de cybersécurité proposez-vous ?' : 'What cybersecurity and pentesting services do you provide?'
    },
    {
      id: 'network_cctv',
      icon: 'Camera',
      title: lang === 'fr' ? 'Vidéosurveillance & Réseau' : 'CCTV & Network Cabling',
      desc: lang === 'fr' ? 'Caméras HD/IP, câblage structuré, NVR & monitoring 24/7' : 'HD/IP cameras, cabling, NVR servers & 24/7 monitoring',
      query: lang === 'fr' ? 'Comment se passe une installation de caméras ou de câblage réseau ?' : 'How does a CCTV camera or network cabling installation work?'
    },
    {
      id: 'quote',
      icon: 'CreditCard',
      title: lang === 'fr' ? 'Tarifs & Devis Rapide' : 'Pricing & Instant Quote',
      desc: lang === 'fr' ? 'Estimation gratuite sous 24h et accompagnement personnalisé' : 'Free quote within 24h with tailored consultation',
      query: lang === 'fr' ? 'Combien coûte un projet et comment obtenir un devis gratuit ?' : 'How much does a project cost and how do I get a free quote?'
    }
  ];

  const handleSend = (textToSend = null) => {
    const queryText = (textToSend !== null ? textToSend : input).trim();
    if (!queryText) return;

    // Add user message
    const userMsg = { sender: 'user', text: queryText, time: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Natural matching in bilingual knowledge base
    const lower = queryText.toLowerCase();
    let answerText = t('ai.fallbackResponse');
    let matchedAction = null;

    for (const item of bilingualKnowledge) {
      const matchFr = item.keywordsFr.some((kw) => lower.includes(kw));
      const matchEn = item.keywordsEn.some((kw) => lower.includes(kw));
      if (matchFr || matchEn) {
        answerText = lang === 'fr' ? item.responseFr : item.responseEn;
        if (item.keywordsFr.includes('devis') || item.keywordsFr.includes('prix')) {
          matchedAction = 'quote';
        }
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: answerText,
          action: matchedAction,
          time: new Date()
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([]);
    setInput('');
    setIsTyping(false);
  };

  const openWhatsAppHuman = () => {
    const defaultMsg = lang === 'fr'
      ? "Bonjour Global Softworks Innovation ! J'échangeais avec votre assistant IA sur le site et je souhaite parler directement à un conseiller humain."
      : "Hello Global Softworks Innovation! I was chatting with your AI assistant on your website and would like to talk directly with a human advisor.";
    const url = `https://wa.me/${companyInfo.whatsapp || '237691862447'}?text=${encodeURIComponent(defaultMsg)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* ── FLOATING LAUNCHER BUTTON (Bottom Left matching Image 1) ── */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 select-none">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer l'assistant IA" : "Ouvrir l'assistant IA GSI"}
          className="relative group w-14 h-14 rounded-full bg-[#040C1E] border-2 border-[#FBBF24] p-0.5 shadow-2xl shadow-black/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full border border-[#FBBF24]/40 animate-ping pointer-events-none" />

          {/* Robot avatar container */}
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#040C1E] via-[#0B2A6B] to-[#1565C0] flex items-center justify-center">
            {isOpen ? (
              <X className="w-6 h-6 text-[#FBBF24]" />
            ) : (
              <Bot className="w-7 h-7 text-[#FBBF24] transition-transform group-hover:rotate-6" />
            )}
          </div>

          {/* Online green indicator badge */}
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#040C1E] shadow-sm" />
        </button>

        {/* Floating tooltip badge when closed */}
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold border border-white/10 shadow-xl cursor-pointer backdrop-blur-md transition-all hover:border-[#FBBF24]/50"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t('ai.title')}</span>
          </div>
        )}
      </div>

      {/* ── CHATPOPUP WINDOW (Styled to Image 1) ── */}
      {isOpen && (
        <div 
          role="dialog"
          aria-label={t('ai.title')}
          className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[82vh] bg-white rounded-3xl shadow-2xl shadow-black/40 border border-slate-200/80 flex flex-col overflow-hidden animate-fadeIn"
        >
          {/* Header Bar */}
          <div className="bg-[#040C1E] text-white px-5 py-4 flex items-center justify-between border-b-2 border-[#FBBF24] relative shrink-0">
            <div className="flex items-center gap-3">
              {/* Bot Icon with gold circular ring */}
              <div className="relative w-10 h-10 rounded-full border-2 border-[#FBBF24] bg-[#0B2A6B] flex items-center justify-center shrink-0 shadow-md">
                <Bot className="w-5 h-5 text-[#FBBF24]" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#040C1E]" />
              </div>

              <div>
                <h3 className="font-black text-sm text-white tracking-tight flex items-center gap-2">
                  <span>{t('ai.title')}</span>
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t('ai.status')}</span>
                </div>
              </div>
            </div>

            {/* Action buttons (New Chat & Close) */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title={lang === 'fr' ? 'Nouvelle conversation' : 'New conversation'}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title={lang === 'fr' ? 'Fermer' : 'Close'}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 bg-gradient-to-b from-slate-50/70 to-white">
            {messages.length === 0 ? (
              /* ── Welcome Screen (Identical to Image 1) ── */
              <div className="flex flex-col items-center text-center pt-2 pb-4">
                {/* Glowing Avatar */}
                <div className="w-16 h-16 rounded-full bg-[#040C1E] border-2 border-[#FBBF24] flex items-center justify-center shadow-xl shadow-amber-400/10 mb-3.5">
                  <Bot className="w-8 h-8 text-[#FBBF24]" />
                </div>

                <h4 className="text-xl font-black text-[#0B2A6B] tracking-tight mb-1.5">
                  {t('ai.welcomeTitle')}
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mb-5 leading-relaxed">
                  {t('ai.welcomeSubtitle')}
                </p>

                {/* 4 Quick Prompts (2x2 Grid) */}
                <div className="grid grid-cols-2 gap-2.5 w-full text-left">
                  {prompts.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSend(p.query)}
                      className="p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-[#FBBF24] hover:shadow-md transition-all duration-200 text-left flex flex-col justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="mb-2 p-1.5 w-7 h-7 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {promptIcons[p.icon]}
                        </div>
                        <div className="text-[12px] font-black text-slate-800 leading-snug mb-1 group-hover:text-[#0B2A6B]">
                          {p.title}
                        </div>
                        <div className="text-[10px] text-slate-500 leading-relaxed line-clamp-2">
                          {p.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* ── Message Thread ── */
              <div className="space-y-3.5">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 ${
                      m.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {m.sender === 'bot' && (
                      <div className="w-7 h-7 rounded-full bg-[#040C1E] border border-[#FBBF24] flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-4 h-4 text-[#FBBF24]" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-xs ${
                        m.sender === 'user'
                          ? 'bg-[#0B2A6B] text-white rounded-br-xs'
                          : 'bg-white border border-slate-200 text-slate-800 rounded-bl-xs'
                      }`}
                    >
                      <p className="whitespace-pre-line">{m.text}</p>

                      {/* Optional inline CTA if topic is related to quotes */}
                      {m.action === 'quote' && onOpenQuote && (
                        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setIsOpen(false);
                              onOpenQuote();
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black text-[11px] shadow-sm transition-all cursor-pointer"
                          >
                            <FileText className="w-3 h-3" />
                            <span>{t('ai.actionQuote')}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2.5 justify-start text-xs text-slate-400">
                    <div className="w-7 h-7 rounded-full bg-[#040C1E] border border-[#FBBF24] flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-[#FBBF24]" />
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl px-3.5 py-2 flex items-center gap-1 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Bottom Input Area (Styled to Image 1) */}
          <div className="p-3 bg-white border-t border-slate-100 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="relative flex items-center"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('ai.inputPlaceholder')}
                className="w-full pl-4 pr-12 py-3 rounded-full bg-white border-2 border-[#FBBF24]/80 focus:border-[#FBBF24] focus:outline-none focus:ring-2 focus:ring-[#FBBF24]/20 text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition-all shadow-inner"
              />

              {/* Up-arrow send button */}
              <button
                type="submit"
                disabled={!input.trim()}
                className={`absolute right-1.5 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  input.trim()
                    ? 'bg-[#0B2A6B] hover:bg-[#1565C0] text-white shadow-md cursor-pointer'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <ArrowUp className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>

            {/* Bottom disclaimer & Talk to human advisor */}
            <div className="mt-2 px-1 flex flex-wrap items-center justify-between gap-1.5 text-[10.5px] text-slate-400">
              <span className="truncate max-w-[210px]">{t('ai.disclaimer')}</span>
              <button
                type="button"
                onClick={openWhatsAppHuman}
                className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-bold hover:underline cursor-pointer"
              >
                <MessageCircle className="w-3 h-3" />
                <span>{t('ai.talkToHuman')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
