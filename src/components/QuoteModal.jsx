import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  Send, 
  User, 
  Building2, 
  Mail, 
  Phone, 
  Settings, 
  Code2, 
  Network, 
  ShieldCheck, 
  Cloud, 
  Rocket, 
  Cpu, 
  BarChart3, 
  GraduationCap, 
  Check, 
  Target, 
  FileText, 
  Shield, 
  Zap, 
  Users 
} from 'lucide-react';
import { companyInfo } from '../data/content';

export default function QuoteModal({ isOpen, onClose, preselectedService }) {
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: preselectedService ? [preselectedService.title] : ['Développement Logiciel'],
    budget: '500k - 2M FCFA',
    message: '',
  });

  if (!isOpen) return null;

  const servicesList = [
    { id: 'dev', title: 'Développement Logiciel', icon: Code2 },
    { id: 'reseau', title: 'Réseaux & Infrastructure', icon: Network },
    { id: 'cyber', title: 'Cybersécurité', icon: ShieldCheck },
    { id: 'cloud', title: 'Cloud & Hébergement', icon: Cloud },
    { id: 'devops', title: "Déploiement d'Applications", icon: Rocket },
    { id: 'ia', title: 'IA & Agents Autonomes', icon: Cpu },
    { id: 'business', title: 'Solutions Business', icon: BarChart3 },
    { id: 'formation', title: 'Formation & Conseil', icon: GraduationCap },
  ];

  const budgetOptions = [
    '< 500k FCFA',
    '500k - 2M FCFA',
    '2M - 10M FCFA',
    '> 10M FCFA',
  ];

  const toggleService = (title) => {
    setForm((prev) => {
      const exists = prev.services.includes(title);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== title)
          : [...prev.services, title],
      };
    });
  };

  const handleMessageChange = (e) => {
    const val = e.target.value;
    if (val.length <= 1000) {
      setForm({ ...form, message: val });
      setCharCount(val.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-navy-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* ── Main Modal Card ── */}
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-auto">
        
        {submitted ? (
          /* ── State: Demande confirmée ── */
          <div className="p-10 sm:p-14 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2558] mb-3">
              Demande reçue avec succès !
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Merci <strong>{form.name}</strong>. Notre équipe d'experts a bien reçu votre demande et vous contactera sous <strong>24h ouvrées</strong> avec une proposition adaptée à vos besoins.
            </p>
            <div className="bg-slate-50 rounded-2xl p-5 text-left text-xs text-slate-700 max-w-md mx-auto border border-slate-200 space-y-2 mb-8">
              <div><strong>Services sélectionnés :</strong> {form.services.join(', ') || 'Non précisé'}</div>
              <div><strong>Budget indicatif :</strong> {form.budget}</div>
              <div><strong>Email de contact :</strong> {form.email}</div>
              <div><strong>Téléphone :</strong> {form.phone}</div>
            </div>
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-full bg-[#0B2558] hover:bg-[#1565C0] text-white font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          /* ── Two Columns Layout (Exact to Mockup) ── */
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* ══════════════ LEFT COLUMN: THE FORM (65%) ══════════════ */}
            <div className="lg:col-span-8 p-6 sm:p-8 lg:p-9 relative">
              
              {/* Close Button top-right */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* 1. Top Capsule Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100/80 mb-4">
                <div className="w-5 h-5 rounded-full bg-[#FBBF24] flex items-center justify-center text-slate-950">
                  <Rocket className="w-3 h-3 fill-slate-950" />
                </div>
                <span className="text-[11px] font-black tracking-wider text-slate-700 uppercase">
                  DEVIS GRATUIT &amp; SANS ENGAGEMENT
                </span>
              </div>

              {/* 2. Main Title & Subtitle */}
              <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-black text-[#0B2558] tracking-tight leading-tight mb-2">
                Parlons de votre projet
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 max-w-xl">
                Remplissez ce formulaire et notre équipe d'experts vous répondra sous 24h ouvrées avec une proposition adaptée à vos besoins.
              </p>

              <form onSubmit={handleSubmit}>
                
                {/* 3. Inputs Row 1: Nom complet & Entreprise */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Nom complet */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5">
                      <User className="w-3.5 h-3.5 text-slate-700" />
                      <span>Nom complet *</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jean Dupont"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062FF] focus:ring-1 focus:ring-[#0062FF] transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Entreprise */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-700" />
                      <span>Entreprise</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Mon Entreprise SARL"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062FF] focus:ring-1 focus:ring-[#0062FF] transition-all bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Inputs Row 2: Email & Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-700" />
                      <span>Email *</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="votre@email.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062FF] focus:ring-1 focus:ring-[#0062FF] transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-700" />
                      <span>Téléphone *</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+237 6XX XXX XXX"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062FF] focus:ring-1 focus:ring-[#0062FF] transition-all bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Service(s) souhaité(s) * */}
                <div className="mb-5">
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-2.5">
                    <Settings className="w-3.5 h-3.5 text-slate-700" />
                    <span>Service(s) souhaité(s) *</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {servicesList.map((svc) => {
                      const IconComponent = svc.icon;
                      const isSelected = form.services.includes(svc.title);

                      return (
                        <button
                          type="button"
                          key={svc.id}
                          onClick={() => toggleService(svc.title)}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[11px] sm:text-xs font-medium border transition-all text-left cursor-pointer ${
                            isSelected
                              ? 'bg-[#0062FF] text-white border-[#0062FF] shadow-sm font-semibold'
                              : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate pr-1">
                            <IconComponent className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-[#0062FF]'}`} />
                            <span className="truncate">{svc.title}</span>
                          </div>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 shrink-0 text-white ml-1 stroke-[2.5]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 6. Budget indicatif */}
                <div className="mb-5">
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-2">
                    <Target className="w-3.5 h-3.5 text-slate-700" />
                    <span>Budget indicatif</span>
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((opt) => {
                      const isSelected = form.budget === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setForm({ ...form, budget: opt })}
                          className={`flex items-center justify-center gap-2 py-2 px-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#0062FF] text-white border-[#0062FF] shadow-sm font-bold'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                          </span>
                          <span className="truncate">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 7. Description de votre besoin * */}
                <div className="mb-5">
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5">
                    <FileText className="w-3.5 h-3.5 text-slate-700" />
                    <span>Description de votre besoin *</span>
                  </label>

                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <textarea
                      required
                      rows={3}
                      value={form.message}
                      onChange={handleMessageChange}
                      placeholder="Décrivez brièvement votre projet, vos objectifs, vos contraintes..."
                      className="w-full pl-10 pr-4 pt-3 pb-7 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062FF] focus:ring-1 focus:ring-[#0062FF] transition-all resize-none bg-white"
                    />
                    <span className="absolute bottom-2 right-3 text-[10px] text-slate-400 font-mono">
                      {charCount}/1000
                    </span>
                  </div>
                </div>

                {/* 8. Bottom Footer: Security guarantee & Submit button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <Shield className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>Vos informations sont sécurisées et ne seront jamais partagées.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer shrink-0"
                  >
                    <Send className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Envoyer ma demande &gt;</span>
                  </button>
                </div>

              </form>

            </div>

            {/* ══════════════ RIGHT COLUMN: TECH SIDEBAR (35%) ══════════════ */}
            <div className="lg:col-span-4 bg-[#08183A] text-white flex flex-col justify-between relative overflow-hidden p-6 sm:p-7">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Diagonal yellow stripe in bottom right (as in mockup) */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-[#FBBF24] rotate-45 transform pointer-events-none z-20" />

              <div>
                {/* 1. Header with Logo & Brand */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-12 h-12 rounded-xl object-contain bg-slate-950 p-1 border border-slate-700 shrink-0 shadow-md"
                  />
                  <div>
                    <div className="font-black text-sm tracking-tight text-white uppercase leading-none">
                      GLOBAL SOFTWARES
                    </div>
                    <div className="font-extrabold text-[11px] tracking-widest text-sky-400 uppercase leading-tight">
                      INNOVATION
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-8">
                  Des solutions digitales sur mesure pour un avenir connecté
                </p>

                {/* 2. Three Feature Badges with Circles */}
                <div className="space-y-4 mb-8">
                  {/* Badge 1 */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-[#FBBF24] flex items-center justify-center text-slate-950 shadow-md shrink-0">
                      <Zap className="w-5 h-5 fill-slate-950" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Réponse rapide</div>
                      <div className="text-[11px] text-slate-400">Sous 24h ouvrées</div>
                    </div>
                  </div>

                  {/* Badge 2 */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-blue-900/60 border border-sky-400/40 text-sky-300 flex items-center justify-center shadow-md shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Devis personnalisé</div>
                      <div className="text-[11px] text-slate-400">Selon vos besoins</div>
                    </div>
                  </div>

                  {/* Badge 3 */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-blue-900/60 border border-sky-400/40 text-sky-300 flex items-center justify-center shadow-md shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Une équipe d'experts</div>
                      <div className="text-[11px] text-slate-400">À votre écoute</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Tech Workspace Card with Laptop Image & Handwritten quote */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl group mt-auto">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&q=80"
                  alt="Tech workspace"
                  className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08183A]/95 via-[#08183A]/40 to-transparent" />

                {/* Handwritten script slogan */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="font-serif italic font-bold text-base sm:text-lg leading-tight drop-shadow-md text-slate-100">
                    Ensemble, construisons vos projets !
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
