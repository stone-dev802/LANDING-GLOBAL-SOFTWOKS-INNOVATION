import React, { useState } from 'react';
import { RouterProvider, useRouter } from './router';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import AiAssistantWidget from './components/AiAssistantWidget';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

/* ── Page router ── */
function AppContent() {
  const { currentPage } = useRouter();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [preselected, setPreselected] = useState(null);

  const openQuote = (service = null) => {
    setPreselected(service);
    setQuoteOpen(true);
  };
  const closeQuote = () => {
    setQuoteOpen(false);
    setPreselected(null);
  };

  const renderPage = () => {
    if (currentPage.startsWith('project/')) {
      const projectId = currentPage.replace('project/', '');
      return <ProjectDetailPage projectId={projectId} onOpenQuote={openQuote} />;
    }

    switch (currentPage) {
      case 'home':       return <HomePage    onOpenQuote={openQuote}/>;
      case 'about':      return <AboutPage   onOpenQuote={openQuote}/>;
      case 'services':   return <ServicesPage onOpenQuote={openQuote}/>;
      case 'portfolio':  return <PortfolioPage onOpenQuote={openQuote}/>;
      case 'team':       return <TeamPage    onOpenQuote={openQuote}/>;
      case 'blog':       return <BlogPage/>;
      case 'contact':    return <ContactPage onOpenQuote={openQuote}/>;
      default:           return <HomePage    onOpenQuote={openQuote}/>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased">
      <Navbar onOpenQuote={() => openQuote()}/>
      <main className="flex-grow">{renderPage()}</main>
      <Footer onOpenQuote={() => openQuote()}/>
      
      {/* ── AI Assistant (Bottom-Left launcher & popup - Image 1) ── */}
      <AiAssistantWidget onOpenQuote={() => openQuote()} />

      {/* ── Floating WhatsApp & Language Switcher (Bottom-Right - Image 2) ── */}
      <WhatsAppFloatingButton />

      <QuoteModal isOpen={quoteOpen} onClose={closeQuote} preselectedService={preselected}/>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppContent/>
      </RouterProvider>
    </LanguageProvider>
  );
}
