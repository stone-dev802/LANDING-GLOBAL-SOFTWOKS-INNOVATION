import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  X, 
  MessageSquare, 
  CheckCircle2, 
  CornerDownLeft,
  ArrowRight
} from 'lucide-react';
import { aiBotKnowledge, companyInfo } from '../data/content';

export default function AiAssistantWidget({ onOpenQuote }) {
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'bot',
      text: "Bonjour ! 👋 Je suis l'assistant IA de Global Softworks Innovation. Comment puis-je vous aider aujourd'hui ? (Tarifs, services, délais, prise de contact...)"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const quickQuestions = [
    "Quels sont vos délais ?",
    "Comment demander un devis ?",
    "Développement mobile ?",
    "Audit de cybersécurité ?",
    "Où êtes-vous basés ?"
  ];

  const handleAsk = (questionText) => {
    const textToProcess = questionText || query;
    if (!textToProcess.trim()) return;

    // Expand the chat panel if not already open
    setIsExpanded(true);

    // Add user message
    const newHistory = [...chatHistory, { sender: 'user', text: textToProcess }];
    setChatHistory(newHistory);
    setQuery('');
    setIsTyping(true);

    // Find smart match from knowledge base
    const lower = textToProcess.toLowerCase();
    let responseText = "Merci pour votre question ! Nos ingénieurs sont à votre disposition pour vous répondre en détail. N'hésitez pas à demander un devis gratuit ou à nous contacter au " + companyInfo.phone + ".";

    for (const item of aiBotKnowledge) {
      if (item.keywords.some((kw) => lower.includes(kw))) {
        responseText = item.response;
        break;
      }
    }

    setTimeout(() => {
      setChatHistory((prev) => [...prev, { sender: 'bot', text: responseText }]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAsk();
    }
  };

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container matching mockups */}
        <div className="relative rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-sky-950 p-6 sm:p-8 lg:p-10 text-white shadow-2xl border border-sky-500/20 overflow-hidden">
          
          {/* Subtle light effect */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Robot Avatar & Info */}
            <div className="lg:col-span-6 flex items-center gap-5">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 p-0.5 shrink-0 shadow-lg shadow-sky-500/30">
                <div className="w-full h-full bg-navy-900 rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <Bot className="w-9 h-9 sm:w-11 sm:h-11 text-sky-300 animate-pulse" />
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-navy-900 rounded-full" />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-950 text-sky-300 border border-sky-800 text-[11px] font-semibold mb-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>IA intégrée à votre site</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Votre assistant IA disponible 24h/24
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                  Posez vos questions techniques ou commerciales et obtenez des réponses instantanées.
                </p>
              </div>
            </div>

            {/* Right Interactive Prompt Bar */}
            <div className="lg:col-span-6">
              <div className="flex flex-col gap-3">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Posez votre question (ex: Quels sont vos tarifs ?)..."
                    className="w-full bg-slate-900/90 text-white placeholder-slate-400 text-sm rounded-full pl-5 pr-14 py-3.5 border border-slate-700/80 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all shadow-inner"
                  />
                  <button
                    onClick={() => handleAsk()}
                    className="absolute right-1.5 w-10 h-10 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 flex items-center justify-center shadow-md transition-transform active:scale-90 cursor-pointer"
                    title="Envoyer la question"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick question pill buttons */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-slate-400 text-[11px]">Suggestions :</span>
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAsk(q)}
                      className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 text-[11px] transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Expandable Chat Conversation Drawer */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-slate-800/80 animate-fadeIn">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-sky-400 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Conversation avec l'Assistant GSI
                </span>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition-colors"
                >
                  Fermer la discussion ✕
                </button>
              </div>

              <div className="max-h-60 overflow-y-auto space-y-3 p-4 bg-navy-950/90 rounded-2xl border border-slate-800">
                {chatHistory.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0 text-xs">
                        🤖
                      </div>
                    )}
                    <div
                      className={`max-w-md p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-amber-400 text-slate-950 font-medium rounded-br-none'
                          : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 pl-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:0.4s]" />
                    <span>L'assistant réfléchit...</span>
                  </div>
                )}
              </div>

              <div className="mt-3 flex items-center justify-end gap-3">
                <button
                  onClick={onOpenQuote}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold underline"
                >
                  Demander un devis formel directement →
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
