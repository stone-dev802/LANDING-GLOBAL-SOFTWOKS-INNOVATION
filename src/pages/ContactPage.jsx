import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, ArrowRight, MessageCircle, Loader2 } from 'lucide-react';
import { companyInfo } from '../data/content';

const SectionPill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 bg-blue-100 text-blue-900">
    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"/>
    {children}
  </span>
);

export default function ContactPage({ onOpenQuote }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error('Erreur lors de l\'envoi.');
      setSent(true);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppUrl = () => {
    const text = `*Bonjour Global Softworks Innovation !*\n\nJe vous contacte depuis le formulaire de votre site web :\n\n👤 *Nom :* ${form.name}\n📧 *Email :* ${form.email}\n📱 *Téléphone :* ${form.phone}\n📌 *Sujet :* ${form.subject || 'Non précisé'}\n💬 *Message :* ${form.message}`;
    return `https://wa.me/237691862447?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="relative py-24 bg-[#0B2A6B] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1600&q=80"
               alt="Contact" className="w-full h-full object-cover opacity-20"/>
        </div>
        <div className="absolute inset-0 bg-[#0B2A6B]/80"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <SectionPill>Contact</SectionPill>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Parlons de votre <span className="text-[#FBBF24]">projet</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Notre équipe est disponible du lundi au vendredi pour répondre à toutes vos questions.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: Info + Map placeholder */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-[#0B2A6B] mb-6">Nos coordonnées</h2>

              <div className="space-y-5 mb-8">
                {[
                  { Icon: MapPin,  color: 'text-[#1565C0]', label: 'Adresse',  value: companyInfo.address },
                  { Icon: Phone,   color: 'text-[#FBBF24]', label: 'Téléphone / WhatsApp', value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                  { Icon: Mail,    color: 'text-[#1565C0]', label: 'Email',    value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                  { Icon: Clock,   color: 'text-slate-500',  label: 'Horaires', value: companyInfo.hours },
                ].map(({ Icon, color, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                    <div className={`w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 ${color}`}>
                      <Icon className="w-5 h-5"/>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</div>
                      {href
                        ? <a href={href} className="text-sm font-semibold text-[#0B2A6B] hover:text-[#1565C0] transition-colors">{value}</a>
                        : <div className="text-sm font-semibold text-[#0B2A6B]">{value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
                     alt="Localisation Yaoundé" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-[#0B2A6B]/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-10 h-10 text-[#FBBF24] mx-auto mb-2"/>
                    <div className="font-bold">Yaoundé, Cameroun</div>
                  </div>
                </div>
              </div>

              {/* Quick devis CTA */}
              <button onClick={onOpenQuote}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black transition-all cursor-pointer shadow-lg active:scale-95">
                Demander un devis express <ArrowRight className="w-4 h-4"/>
              </button>
            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-10">
                {sent ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10"/>
                    </div>
                    <h3 className="text-2xl font-black text-[#0B2A6B] mb-2">Message envoyé avec succès !</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                      Merci <strong>{form.name}</strong>. Votre message a bien été transmis à notre équipe par e-mail. Nous vous répondrons sous <strong>24h ouvrées</strong>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Discuter aussi sur WhatsApp</span>
                      </a>
                      <button onClick={() => setSent(false)}
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer">
                        Envoyer un autre message
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-[#0B2A6B] mb-1">Envoyez-nous un message</h2>
                    <p className="text-slate-500 text-sm mb-8">Nous vous répondons sous 24h ouvrées.</p>
                    {error && (
                      <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                        {error}
                      </div>
                    )}
                    <form 
                      onSubmit={handleSubmit} 
                      className="space-y-5"
                    >

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Nom complet *</label>
                          <input type="text" name="Nom" required value={form.name}
                            onChange={e => setForm({...form, name: e.target.value})}
                            placeholder="Jean Dupont"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FBBF24] focus:ring-1 focus:ring-[#FBBF24] transition-colors"/>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Email *</label>
                          <input type="email" name="Email" required value={form.email}
                            onChange={e => setForm({...form, email: e.target.value})}
                            placeholder="votre@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FBBF24] focus:ring-1 focus:ring-[#FBBF24] transition-colors"/>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Téléphone *</label>
                          <input type="tel" name="Telephone" required value={form.phone}
                            onChange={e => setForm({...form, phone: e.target.value})}
                            placeholder="+237 6xx xxx xxx"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FBBF24] focus:ring-1 focus:ring-[#FBBF24] transition-colors"/>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Sujet</label>
                          <select name="Sujet" value={form.subject}
                            onChange={e => setForm({...form, subject: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FBBF24] focus:ring-1 focus:ring-[#FBBF24] transition-colors bg-white text-slate-700">
                            <option value="">Choisir un sujet</option>
                            <option>Demande de devis</option>
                            <option>Renseignement technique</option>
                            <option>Partenariat</option>
                            <option>Support</option>
                            <option>Autre</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Votre message *</label>
                        <textarea name="Message" required rows={5} value={form.message}
                          onChange={e => setForm({...form, message: e.target.value})}
                          placeholder="Décrivez votre projet ou votre besoin..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FBBF24] focus:ring-1 focus:ring-[#FBBF24] transition-colors resize-none"/>
                      </div>
                      <button type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#0B2A6B] hover:bg-[#1565C0] disabled:opacity-60 text-white font-black text-base transition-all cursor-pointer shadow-xl active:scale-95">
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin"/>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5"/>
                            Envoyer le message
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-slate-400">🔒 Vos données sont confidentielles. Aucun spam.</p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
