import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Constructor en Vivo', id: 'constructor' },
    { name: 'Casos de Uso', id: 'casos' },
    { name: 'Integraciones', id: 'integraciones' },
    { name: 'Cotizador', id: 'cotizador' },
    { name: 'Precios', id: 'precios' },
    { name: 'Preguntas', id: 'preguntas' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-dark/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => handleItemClick('inicio')}
            id="nav-logo"
          >
            <div className="bg-electric-blue p-2 rounded-lg text-white group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-electric-blue/30">
              <Code2 className="h-6 w-6" />
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight text-white">
              PINEDA<span className="text-electric-blue">CODE</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8" id="nav-links-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium hover:scale-105 transform cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center" id="nav-cta-desktop">
            <button
              onClick={() => handleItemClick('cotizador')}
              className="bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold py-2 px-5 rounded-full text-sm shadow-md shadow-electric-blue/20 hover:shadow-electric-blue/40 flex items-center gap-2 hover:gap-3 transition-all duration-200 cursor-pointer"
            >
              Empezar Proyecto
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden" id="nav-menu-mobile-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="lg:hidden absolute top-full left-0 right-0 bg-navy-dark border-b border-slate-800 shadow-2xl overflow-y-auto max-h-[85vh] animate-fade-in"
          id="nav-menu-mobile-container"
        >
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button
                onClick={() => handleItemClick('cotizador')}
                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-electric-blue/25 flex items-center justify-center gap-2"
              >
                Empezar Proyecto
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
