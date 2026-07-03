import React, { useRef, useState, useEffect } from 'react';
import { 
  Wrench, 
  Briefcase, 
  Puzzle, 
  Calculator, 
  Tag, 
  HelpCircle, 
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface QuickNavTabsProps {
  onNavigate: (sectionId: string) => void;
}

export default function QuickNavTabs({ onNavigate }: QuickNavTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { name: 'Constructor en Vivo', id: 'constructor', icon: Wrench },
    { name: 'Casos de Uso', id: 'casos', icon: Briefcase },
    { name: 'Integraciones', id: 'integraciones', icon: Puzzle },
    { name: 'Cotización', id: 'cotizador', icon: Calculator },
    { name: 'Precio', id: 'precios', icon: Tag },
    { name: 'Preguntas', id: 'preguntas', icon: HelpCircle },
  ];

  // Monitor scroll positioning to show/hide gradient indicators & left/right indicators
  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Run once initially
      checkScroll();
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
    };
  }, []);

  // Track which section is currently visible on the screen
  useEffect(() => {
    const handleIntersection = () => {
      const scrollPosition = window.scrollY + 200; // Offset for sticky headers
      
      // Default to inicio
      let current = 'inicio';
      
      const sections = ['constructor', 'casos', 'integraciones', 'cotizador', 'precios', 'preguntas'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleIntersection);
    return () => window.removeEventListener('scroll', handleIntersection);
  }, []);

  // Scroll tab container left/right
  const scrollTabs = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleTabClick = (id: string) => {
    setActiveSection(id);
    onNavigate(id);
  };

  return (
    <div 
      id="quick-nav-container"
      className="sticky top-[72px] z-40 w-full bg-navy-dark/95 backdrop-blur-md border-b border-slate-900 shadow-md py-2.5 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between gap-4">
        
        {/* Left Arrow Button for mobile/scrolling */}
        {showLeftArrow && (
          <button 
            onClick={() => scrollTabs('left')}
            className="absolute left-1 sm:left-4 z-10 bg-slate-900/90 border border-slate-800 p-1.5 rounded-full text-slate-300 hover:text-white transition-all shadow-md focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}

        {/* Swipeable Tabs strip container */}
        <div 
          ref={containerRef}
          onScroll={checkScroll}
          className="flex-1 flex items-center gap-2.5 overflow-x-auto scrollbar-none py-1 px-2 select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          id="quick-nav-slider-scroll"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-electric-blue text-white shadow-lg shadow-electric-blue/20 scale-[1.03] border border-electric-cyan/30'
                    : 'bg-slate-950/60 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-900 hover:border-slate-800'
                }`}
                id={`quick-tab-${item.id}`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-electric-cyan' : 'text-slate-500'}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right Arrow Button for mobile/scrolling */}
        {showRightArrow && (
          <button 
            onClick={() => scrollTabs('right')}
            className="absolute right-1 sm:right-4 z-10 bg-slate-900/90 border border-slate-800 p-1.5 rounded-full text-slate-300 hover:text-white transition-all shadow-md focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}

        {/* Divider & Action Tab (Empezar Proyecto) */}
        <div className="shrink-0 border-l border-slate-800 pl-4 py-1 hidden sm:flex items-center" id="quick-nav-cta">
          <button
            onClick={() => handleTabClick('cotizador')}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <Zap className="h-3 w-3 text-yellow-300 fill-yellow-300 animate-pulse" />
            Empezar Proyecto
          </button>
        </div>

      </div>
    </div>
  );
}
