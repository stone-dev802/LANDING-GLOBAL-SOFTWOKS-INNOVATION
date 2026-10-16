import React from 'react';
import { Facebook, Linkedin, Youtube, MapPin, Mail, Phone, Clock, ChevronRight, ArrowUp } from 'lucide-react';
import { Link } from '../router';
import { companyInfo, servicesData } from '../data/content';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-[#060D1F] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* ── 4-col grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">

          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Global Software Innovation Logo" 
                className="w-12 h-12 rounded-xl object-contain bg-slate-950 p-1 border border-slate-700 shadow-md"
              />
              <div>
                <div className="font-black text-sm text-white tracking-tight">GLOBAL SOFTWARE</div>
                <div className="font-bold text-[11px] text-sky-400 tracking-widest uppercase">INNOVATION</div>
                <div className="text-[10px] text-slate-400">Innover • Développer • Sécuriser • Ensemble</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Des solutions numériques intelligentes et sécurisées pour aujourd'hui et pour demain.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { Icon: Facebook, href: '#', hover: 'hover:bg-blue-700'  },
                { label: '𝕏',   href: '#', hover: 'hover:bg-slate-700' },
                { Icon: Linkedin, href: '#', hover: 'hover:bg-blue-600'  },
                { Icon: Youtube,  href: '#', hover: 'hover:bg-red-600'   },
              ].map((s, i) => (
                <a key={i} href={s.href}
                   className={`w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors ${s.hover}`}>
                  {s.Icon ? <s.Icon className="w-4 h-4"/> : <span className="text-xs font-bold">{s.label}</span>}
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Liens rapides</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Accueil',         to: 'home'      },
                { label: 'À propos',        to: 'about'     },
                { label: 'Services',        to: 'services'  },
                { label: 'Portfolio',       to: 'portfolio' },
                { label: 'Équipe',          to: 'team'      },
                { label: 'Blog',            to: 'blog'      },
                { label: 'Contact',         to: 'contact'   },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="flex items-center gap-1.5 hover:text-[#FBBF24] transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600"/>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Nos services</h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link to="services" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors truncate">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0"/>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5"/>{companyInfo.address}</li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0"/>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors truncate text-xs">{companyInfo.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FBBF24] shrink-0"/>
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white font-mono font-semibold transition-colors">{companyInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-slate-400 shrink-0"/>{companyInfo.hours}</li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2026 Global Softworks Innovation. Tous droits réservés.</span>
          <div className="flex items-center gap-6">
            <span className="font-semibold text-slate-300">
              Innovation • <span className="text-sky-400">Technologie</span> • <span className="text-[#FBBF24]">Sécurité</span>
            </span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#1565C0] text-slate-400 hover:text-white flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4"/>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
