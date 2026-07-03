import React from 'react';
import Navbar from './components/Navbar';
import QuickNavTabs from './components/QuickNavTabs';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import Services from './components/Services';
import InteractiveBuilder from './components/InteractiveBuilder';
import UseCases from './components/UseCases';
import Integrations from './components/Integrations';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scroll due to fixed navbar
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-dark text-slate-100 flex flex-col font-sans selection:bg-electric-blue selection:text-white antialiased">
      {/* Decorative Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-electric-blue/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Navigation Header */}
      <Navbar onNavigate={handleNavigate} />

      {/* Sections Wrapper */}
      <main className="flex-1 relative z-10">
        
        {/* Quick horizontal-sliding navigation tabs */}
        <QuickNavTabs onNavigate={handleNavigate} />

        {/* 1. Hero Section & Template Switcher */}
        <Hero onNavigate={handleNavigate} />

        {/* Widescreen Business App Showcase Slider */}
        <ImageSlider />

        {/* 2. Services / What we build */}
        <Services />

        {/* 3. Interactive Code Builder / Solution Assembler */}
        <InteractiveBuilder />

        {/* 4. Use Cases with Interactive Mini-apps */}
        <UseCases />

        {/* 5. Tool Integrations Showcase */}
        <Integrations />

        {/* 6. Ultimate Quote Calculator & WhatsApp Form */}
        <Calculator />

        {/* 7. Client Testimonials */}
        <Testimonials />

        {/* 8. Transparent Investment plans */}
        <Pricing />

        {/* 9. FAQ Section */}
        <FAQ />

      </main>

      {/* Footer Details */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
