import React, { useState } from 'react';
import { Clock, User, ArrowRight, Tag, CheckCircle, Loader2 } from 'lucide-react';
import { blogPosts } from '../data/content';

const SectionPill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 bg-blue-100 text-blue-900">
    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"/>
    {children}
  </span>
);

export default function BlogPage() {
  const [subEmail, setSubEmail] = useState('');
  const [subStatus, setSubStatus] = useState('idle'); // idle | loading | success | error
  const [subError, setSubError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subEmail) return;
    setSubStatus('loading');
    setSubError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subEmail }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Erreur lors de l\'inscription.');
      }
      setSubStatus('success');
      setSubEmail('');
    } catch (err) {
      setSubStatus('error');
      setSubError(err.message || 'Une erreur est survenue. Réessayez.');
    }
  };

  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="relative py-24 bg-[#0B2A6B] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80"
               alt="Blog" className="w-full h-full object-cover opacity-20"/>
        </div>
        <div className="absolute inset-0 bg-[#0B2A6B]/80"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <SectionPill>Notre blog</SectionPill>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Actualités &amp; <span className="text-[#FBBF24]">Insights Tech</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Nos experts partagent leurs connaissances sur les tendances technologiques, la cybersécurité et l'innovation digitale en Afrique.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured article (first) */}
          <div className="mb-12 group">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#1565C0] hover:shadow-2xl shadow-sm transition-all duration-300 grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img src={blogPosts[0].image} alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B2A6B]/20"/>
                <span className="absolute top-4 left-4 bg-[#FBBF24] text-slate-950 text-[10px] font-black px-3 py-1 rounded-full">
                  À la une
                </span>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="inline-block text-[11px] font-bold text-[#1565C0] uppercase tracking-widest mb-3">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B2A6B] mb-4 group-hover:text-[#1565C0] transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5"/>{blogPosts[0].author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/>{blogPosts[0].readTime} de lecture</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                <button className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B2A6B] hover:bg-[#1565C0] text-white font-bold text-sm transition-all cursor-pointer">
                  Lire l'article <ArrowRight className="w-4 h-4"/>
                </button>
              </div>
            </div>
          </div>

          {/* Other articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#1565C0] hover:shadow-xl shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <img src={post.image} alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A6B]/60 to-transparent"/>
                  <span className="absolute top-4 left-4 bg-[#FBBF24] text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-[#0B2A6B] mb-2 group-hover:text-[#1565C0] transition-colors">{post.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><User className="w-3.5 h-3.5"/>{post.author}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5"/>{post.readTime}</span>
                    </div>
                    <button className="flex items-center gap-1 font-bold text-[#1565C0] hover:text-[#0B2A6B] transition-colors cursor-pointer">
                      Lire <ArrowRight className="w-3.5 h-3.5"/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="mt-16 bg-gradient-to-r from-[#0B2A6B] to-[#1565C0] rounded-3xl p-10 text-center text-white">
            <h3 className="text-2xl font-black mb-2">Restez informé(e) de nos actualités</h3>
            <p className="text-slate-300 text-sm mb-6">Recevez nos derniers articles et conseils tech directement dans votre boîte mail.</p>

            {subStatus === 'success' ? (
              <div className="flex items-center justify-center gap-3 py-3">
                <CheckCircle className="w-6 h-6 text-emerald-400"/>
                <p className="text-emerald-300 font-bold text-sm">Merci ! Vous êtes bien inscrit(e) à notre newsletter.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input
                  type="email"
                  required
                  value={subEmail}
                  onChange={e => setSubEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="flex-grow px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-300 text-sm focus:outline-none focus:border-[#FBBF24] transition-colors"
                />
                <button
                  type="submit"
                  disabled={subStatus === 'loading'}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] disabled:opacity-60 text-slate-950 font-black text-sm transition-all cursor-pointer"
                >
                  {subStatus === 'loading' ? (
                    <><Loader2 className="w-4 h-4 animate-spin"/> Envoi...</>
                  ) : "S'abonner"}
                </button>
              </form>
            )}
            {subStatus === 'error' && (
              <p className="mt-3 text-red-300 text-xs">{subError}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
