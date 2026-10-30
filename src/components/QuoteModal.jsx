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
  Users,
  Camera,
  Wrench,
  MessageCircle,
  Loader2
} from 'lucide-react';
import { companyInfo } from '../data/content';

export default function QuoteModal({ isOpen, onClose, preselectedService }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
    { id: 'reseau', title: 'Installation Réseau & Infrastructure', icon: Network },
    { id: 'videosurveillance', title: 'Installation Caméras & Vidéosurveillance', icon: Camera },
    { id: 'cyber', title: 'Cybersécurité', icon: ShieldCheck },
    { id: 'cloud', title: 'Cloud & Hébergement', icon: Cloud },
    { id: 'devops', title: "Déploiement d'Applications", icon: Rocket },
    { id: 'ia', title: 'IA & Agents Autonomes', icon: Cpu },
    { id: 'business', title: 'Solutions Business', icon: BarChart3 },
    { id: 'maintenance', title: 'Maintenance & Support IT', icon: Wrench },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Envoi asynchrone par Email via FormSubmit.co
    try {
      await fetch("https://formsubmit.co/ajax/thomyashton@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[DEVIS GSI] Nouvelle demande de ${form.name}`,
          _template: "table",
          _captcha: "false",
          Nom: form.name,
          Entreprise: form.company || 'Particulier / Non précisé',
          Email: form.email,
          Telephone: form.phone,
          Services_Souhaites: form.services.join(', ') || 'Non précisé',
          Budget_Estime: form.budget,
          Description_Projet: form.message
        })
      });
    } catch (err) {
      console.warn("Envoi email silencieux :", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const getWhatsAppUrl = () => {
    const text = `*Bonjour Global Softworks Innovation !*\n\nJe viens de soumettre une demande de devis sur votre site :\n\n👤 *Nom :* ${form.name}\n🏢 *Entreprise :* ${form.company || 'N/A'}\n📧 *Email :* ${form.email}\n📱 *Tél :* ${form.phone}\n🛠️ *Services :* ${form.services.join(', ') || 'N/A'}\n💰 *Budget :* ${form.budget}\n📝 *Projet :* ${form.message}`;
    return `https://wa.me/237691862447?text=${encodeURIComponent(text)}`;
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* ── Main Modal Card (Compact size fitting within viewport) ── */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-auto max-h-[96vh] flex flex-col">
        
        {submitted ? (
          /* ── State: Demande confirmée ── */
          <div className="p-8 sm:p-12 text-center my-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B2558] mb-2">
              Demande reçue avec succès !
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-5">
              Merci <strong>{form.name}</strong>. Votre demande a bien été transmise à notre équipe par e-mail. Nous vous recontacterons sous <strong>24h ouvrées</strong>.
            </p>
            <div className="bg-slate-50 rounded-xl p-4 text-left text-xs text-slate-700 max-w-sm mx-auto border border-slate-200 space-y-1.5 mb-6">
              <div><strong>Services :</strong> {form.services.join(', ') || 'Non précisé'}</div>
              <div><strong>Budget :</strong> {form.budget}</div>
              <div><strong>Email :</strong> {form.email}</div>
              <div><strong>Téléphone :</strong> {form.phone}</div>
            </div>

            {/* Action Buttons: WhatsApp direct + Fermer */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Confirmer aussi sur WhatsApp</span>
              </a>

              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0B2558] hover:bg-[#1565C0] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                Fermer la fenêtre
              </button>
            </div>
          </div>
        ) : (
          /* ── Two Columns Layout (Compact & Pixel Perfect) ── */
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
            
            {/* ══════════════ LEFT COLUMN: THE FORM (65%) ══════════════ */}
            <div className="lg:col-span-8 p-4 sm:p-5 lg:p-6 relative">
              
              {/* Close Button top-right */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Fermer"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* 1. Top Capsule Tag */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-100 mb-2">
                <div className="w-4 h-4 rounded-full bg-[#FBBF24] flex items-center justify-center text-slate-950">
                  <Rocket className="w-2.5 h-2.5 fill-slate-950" />
                </div>
                <span className="text-[10px] font-black tracking-wider text-slate-700 uppercase">
                  DEVIS GRATUIT &amp; SANS ENGAGEMENT
                </span>
              </div>

              {/* 2. Main Title & Subtitle */}
              <h2 className="text-xl sm:text-2xl font-black text-[#0B2558] tracking-tight leading-tight mb-1">
                Parlons de votre projet
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mb-3.5 max-w-xl">
                Remplissez ce formulaire et notre équipe d'experts vous répondra sous 24h ouvrées avec une proposition adaptée à vos besoins.
              </p>

              <form onSubmit={handleSubmit}>
                
                {/* 3. Inputs Row 1: Nom complet & Entreprise */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
                  {/* Nom complet */}
                  <div>
                    <label className="flex items-center gap-1 text-[11px] font-bold text-slate-800 mb-1">
                      <User className="w-3 h-3 text-slate-600" />
                      <span>Nom complet *</span>
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jean Dupont"
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062FF] focus:ring-1 focus:ring-[#0062FF] transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Entreprise */}
                  <div>
                    <label className="flex items-center gap-1 text-[11px] font-bold text-slate-800 mb-1">
                      <Building2 className="w-3 h-3 text-slate-600" />
                      <span>Entreprise</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Mon Entreprise SARL"
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062FF] focus:ring-1 focus:ring-[#0062FF] transition-all bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Inputs Row 2: Email & Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-1 text-[11px] font-bold text-slate-800 mb-1">
                      <Mail className="w-3 h-3 text-slate-600" />
                      <span>Email *</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="votre@email.com"
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062FF] focus:ring-1 focus:ring-[#0062FF] transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="flex items-center gap-1 text-[11px] font-bold text-slate-800 mb-1">
                      <Phone className="w-3 h-3 text-slate-600" />
                      <span>Téléphone *</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+237 6XX XXX XXX"
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062FF] focus:ring-1 focus:ring-[#0062FF] transition-all bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Service(s) souhaité(s) * */}
                <div className="mb-3">
                  <label className="flex items-center gap-1 text-[11px] font-bold text-slate-800 mb-1.5">
                    <Settings className="w-3 h-3 text-slate-600" />
                    <span>Service(s) souhaité(s) *</span>
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {servicesList.map((svc) => {
                      const IconComponent = svc.icon;
                      const isSelected = form.services.includes(svc.title);

                      return (
                        <button
                          type="button"
                          key={svc.id}
                          onClick={() => toggleService(svc.title)}
                          className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[10.5px] sm:text-[11px] font-medium border transition-all text-left cursor-pointer ${
                            isSelected
                              ? 'bg-[#0062FF] text-white border-[#0062FF] shadow-xs font-semibold'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 min-w-0 pr-1">
                            <IconComponent className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-[#0062FF]'}`} />
                            <span className="truncate leading-tight">{svc.title}</span>
                          </div>
                          {isSelected && (
                            <Check className="w-3 h-3 shrink-0 text-white ml-0.5 stroke-[2.5]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 6. Budget indicatif */}
                <div className="mb-3">
                  <label className="flex items-center gap-1 text-[11px] font-bold text-slate-800 mb-1.5">
                    <Target className="w-3 h-3 text-slate-600" />
                    <span>Budget indicatif</span>
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {budgetOptions.map((opt) => {
                      const isSelected = form.budget === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setForm({ ...form, budget: opt })}
                          className={`flex items-center justify-center gap-1.5 py-1.5 px-1.5 rounded-lg text-[11px] font-medium border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#0062FF] text-white border-[#0062FF] shadow-xs font-bold'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <span className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                          <span className="truncate">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 7. Description de votre besoin * */}
                <div className="mb-3">
                  <label className="flex items-center gap-1 text-[11px] font-bold text-slate-800 mb-1">
                    <FileText className="w-3 h-3 text-slate-600" />
                    <span>Description de votre besoin *</span>
                  </label>

                  <div className="relative">
                    <FileText className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                    <textarea
                      required
                      rows={2}
                      value={form.message}
                      onChange={handleMessageChange}
                      placeholder="Décrivez brièvement votre projet, vos objectifs, vos contraintes..."
                      className="w-full pl-8 pr-3 pt-2 pb-5 rounded-lg border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062FF] focus:ring-1 focus:ring-[#0062FF] transition-all resize-none bg-white"
                    />
                    <span className="absolute bottom-1.5 right-2.5 text-[9.5px] text-slate-400 font-mono">
                      {charCount}/1000
                    </span>
                  </div>
                </div>

                {/* 8. Bottom Footer: Security guarantee & Submit button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                    <Shield className="w-3 h-3 text-slate-500 shrink-0" />
                    <span>Vos informations sont sécurisées et ne seront jamais partagées.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] disabled:opacity-60 text-slate-950 font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer shrink-0"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3 h-3 fill-slate-950" />
                        <span>Envoyer ma demande &gt;</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>

            {/* ══════════════ RIGHT COLUMN: TECH SIDEBAR (35%) ══════════════ */}
            <div className="lg:col-span-4 bg-[#08183A] text-white flex flex-col justify-between relative overflow-hidden p-4 sm:p-5">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Diagonal yellow stripe in bottom right */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#FBBF24] rotate-45 transform pointer-events-none z-20" />

              <div>
                {/* 1. Header with Logo & Brand */}
                <div className="flex items-center gap-2.5 mb-1.5">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-9 h-9 rounded-lg object-contain bg-slate-950 p-1 border border-slate-700 shrink-0 shadow-sm"
                  />
                  <div>
                    <div className="font-black text-xs tracking-tight text-white uppercase leading-none">
                      GLOBAL SOFTWORKSS
                    </div>
                    <div className="font-extrabold text-[9.5px] tracking-widest text-sky-400 uppercase leading-tight">
                      INNOVATION
                    </div>
                  </div>
                </div>

                <p className="text-[10.5px] text-slate-300 leading-relaxed mb-4">
                  Des solutions digitales sur mesure pour un avenir connecté
                </p>

                {/* 2. Three Feature Badges with Circles */}
                <div className="space-y-2.5 mb-4">
                  {/* Badge 1 */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#FBBF24] flex items-center justify-center text-slate-950 shadow-sm shrink-0">
                      <Zap className="w-4 h-4 fill-slate-950" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white leading-tight">Réponse rapide</div>
                      <div className="text-[9.5px] text-slate-400">Sous 24h ouvrées</div>
                    </div>
                  </div>

                  {/* Badge 2 */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-900/60 border border-sky-400/40 text-sky-300 flex items-center justify-center shadow-sm shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white leading-tight">Devis personnalisé</div>
                      <div className="text-[9.5px] text-slate-400">Selon vos besoins</div>
                    </div>
                  </div>

                  {/* Badge 3 */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-900/60 border border-sky-400/40 text-sky-300 flex items-center justify-center shadow-sm shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white leading-tight">Une équipe d'experts</div>
                      <div className="text-[9.5px] text-slate-400">À votre écoute</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Tech Workspace Card with Laptop Image & Handwritten quote */}
              <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-lg group mt-auto">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
                  alt="Tech workspace"
                  className="w-full h-28 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08183A]/95 via-[#08183A]/40 to-transparent" />

                {/* Handwritten script slogan */}
                <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                  <div className="font-serif italic font-bold text-xs sm:text-sm leading-tight drop-shadow-md text-slate-100">
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
