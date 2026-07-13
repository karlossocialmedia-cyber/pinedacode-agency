import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavbarPublico from './components/NavbarPublico';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import Process from './components/Process';
import Services from './components/Services';
import OnlineStores from './components/OnlineStores';
import BookingServices from './components/BookingServices';
import Restaurants from './components/Restaurants';
import DigitalProducts from './components/DigitalProducts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// Import our 6 independent B2B public pages
import AdsPienImprenta from './pages/public/AdsPienImprenta';
import AdpiMarket from './pages/public/AdpiMarket';
import AdpiRest from './pages/public/AdpiRest';
import Adfood from './pages/public/Adfood';
import AdpiGar from './pages/public/AdpiGar';
import AdpiWear from './pages/public/AdpiWear';

// ScrollToTop helper to reset window scroll position on route transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LandingPage() {
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
      <NavbarPublico />

      {/* Sections Wrapper */}
      <main className="flex-1 relative z-10">
        
        {/* 1. Hero Section & Template Switcher */}
        <Hero onNavigate={handleNavigate} />

        {/* Widescreen Business App Showcase Slider */}
        <ImageSlider />

        {/* 1.5. Nuestro Proceso (How it works in 4 visual steps) */}
        <Process />

        {/* 2. Services / What we build */}
        <Services />

        {/* 3. Tiendas Online (New interactive replica section) */}
        <OnlineStores />

        {/* 3.5. Servicios y Citas (Interactive booking section) */}
        <BookingServices />

        {/* 3.6. Restaurantes (Interactive restaurants section) */}
        <Restaurants />

        {/* 3.7. Productos Digitales (Interactive digital products section) */}
        <DigitalProducts />

        {/* 7. Client Testimonials */}
        <Testimonials />

      </main>

      {/* Footer Details */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/adspien-imprenta" element={<AdsPienImprenta />} />
        <Route path="/adpimarket" element={<AdpiMarket />} />
        <Route path="/adpirest" element={<AdpiRest />} />
        <Route path="/adfood" element={<Adfood />} />
        <Route path="/adpigar" element={<AdpiGar />} />
        <Route path="/adpiwear" element={<AdpiWear />} />
      </Routes>
    </BrowserRouter>
  );
}
