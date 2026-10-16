import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { Link, useRouter } from '../router';
import { companyInfo } from '../data/content';

const navLinks = [
  { label: 'Accueil',   to: 'home'      },
  { label: 'À propos',  to: 'about'     },
  { label: 'Services',  to: 'services'  },
  { label: 'Portfolio', to: 'portfolio' },
  { label: 'Équipe',    to: 'team'      },
  { label: 'Blog',      to: 'blog'      },
  { label: 'Contact',   to: 'contact'   },
];

export default function Navbar({ onOpenQuote }) {
  const { currentPage } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-slate-200/60' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link to="home" className="flex items-center gap-3 shrink-0 group">
          <img 
            src="/logo.png" 
            alt="Global Software Innovation Logo" 
            className="w-12 h-12 rounded-xl object-contain bg-slate-950 p-1 shadow-md group-hover:scale-105 transition-transform"
          />
          <div className="leading-tight">
            <div className="font-black text-[13.5px] tracking-tight text-[#0B2A6B]">GLOBAL SOFTWARE</div>
            <div className="font-bold text-[11px] tracking-widest text-[#1565C0] uppercase">INNOVATION</div>
            <div className="text-[9.5px] text-slate-400 tracking-wide hidden sm:block">Innover • Développer • Sécuriser • Ensemble</div>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`relative px-3.5 py-2 text-[13.5px] font-semibold rounded-lg transition-colors ${
                currentPage === to
                  ? 'text-[#1565C0]'
                  : 'text-slate-600 hover:text-[#0B2A6B] hover:bg-slate-50'
              }`}
            >
              {label}
              {currentPage === to && (
                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[#FBBF24]" />
              )}
            </Link>
          ))}
        </nav>

        {/* ── Right CTAs ── */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a href={`tel:${companyInfo.phone}`}
             className="hidden md:flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 hover:text-[#1565C0] transition-colors">
            <Phone className="w-3.5 h-3.5" />
            {companyInfo.phone}
          </a>
          <button
            onClick={onOpenQuote}
            className="flex items-center gap-2 bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 text-[13px] font-bold px-5 py-2.5 rounded-full shadow hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            Demander un devis <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ── Mobile hamburger ── */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenQuote}
            className="text-[12px] font-bold bg-[#FBBF24] text-slate-950 px-3 py-1.5 rounded-full"
          >Devis</button>
          <button onClick={() => setOpen(!open)} className="p-2 rounded-lg text-slate-600 hover:bg-slate-100">
            {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 shadow-xl">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 rounded-lg mb-1 text-sm font-semibold transition-colors ${
                currentPage === to ? 'bg-blue-50 text-[#1565C0]' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {label}
            </Link>
          ))}
          <a href={`tel:${companyInfo.phone}`}
             className="block text-center text-sm text-slate-500 mt-3 pt-3 border-t border-slate-100">
            📞 {companyInfo.phone}
          </a>
        </div>
      )}
    </header>
  );
}
