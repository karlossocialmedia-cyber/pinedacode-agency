import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Home, 
  Printer, 
  Store, 
  Utensils, 
  Flame, 
  Car, 
  ShoppingBag,
  ChevronDown
} from 'lucide-react';

export default function NavbarPublico() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    { name: 'Imprenta y Publicidad', path: '/adspien-imprenta', icon: Printer, color: 'text-purple-500' },
    { name: 'Minimarkets y Almacenes', path: '/adpimarket', icon: Store, color: 'text-blue-500' },
    { name: 'Restaurantes y Cajas', path: '/adpirest', icon: Utensils, color: 'text-orange-500' },
    { name: 'Fast Food y Delivery', path: '/adfood', icon: Flame, color: 'text-red-500' },
    { name: 'Talleres Mecánicos', path: '/adpigar', icon: Car, color: 'text-emerald-500' },
    { name: 'Tiendas de Ropa & Boutiques', path: '/adpiwear', icon: ShoppingBag, color: 'text-rose-500' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-[#0b1329]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3' 
          : 'bg-[#0b1329]/60 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsOpen(false)}>
            <div className="h-9 w-auto flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 100 100" className="h-8 w-auto text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="adpienLogoGradPublic" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d2ff" />
                    <stop offset="40%" stopColor="#0066ff" />
                    <stop offset="70%" stopColor="#7c3bed" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <path
                  d="M 25 80 C 25 80 25 45 35 40 C 45 35 55 35 65 42 C 75 50 78 68 62 75 C 46 82 35 70 38 58 C 42 45 58 48 72 40 L 85 30"
                  stroke="url(#adpienLogoGradPublic)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 70 30 L 85 30 L 85 45"
                  stroke="url(#adpienLogoGradPublic)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight text-white">
              AD<span className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">PIEN</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Inicio
            </Link>

            {/* Soluciones Dropdown (Hover) */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                Soluciones B2B <ChevronDown className="h-4 w-4" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[320px] bg-[#0f172a]/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-4 z-50 hidden group-hover:block animate-fade-in">
                <div className="grid gap-2">
                  {solutions.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                      >
                        <div className={`${item.color} p-2 rounded-lg bg-white/5 group-hover/item:scale-110 transition-transform`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{item.name}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">Módulo B2B Especializado</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact WhatsApp */}
            <a
              href="https://wa.me/56900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold py-2 px-5 rounded-full flex items-center gap-2 shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="h-4 w-4 text-white fill-white" /> Contactar por WhatsApp
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden">
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0b1329] border-b border-slate-800 shadow-2xl overflow-y-auto max-h-[85vh] animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-4">
            
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all"
            >
              <Home className="h-5 w-5 text-slate-400" />
              <span className="font-semibold text-sm">Inicio</span>
            </Link>

            <div className="space-y-1">
              <div className="px-4 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Soluciones Especializadas B2B
              </div>
              <div className="grid gap-1">
                {solutions.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-6 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
                    >
                      <IconComponent className={`h-4.5 w-4.5 ${item.color}`} />
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Link para WhatsApp */}
            <div className="pt-2">
              <a
                href="https://wa.me/56900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5 text-white fill-white" /> Conversar por WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
