import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight,
  Smartphone,
  Layers,
  LayoutDashboard,
  CheckCircle2
} from 'lucide-react';

// Import our beautiful custom generated business application mockups
const SLIDES = [
  {
    id: 1,
    title: "E-Commerce & Catálogo de Modas",
    subtitle: "Potencia tu Tienda de Retail y Ventas Directas",
    description: "Una vitrina digital interactiva ultrarrápida. Los usuarios añaden productos al carro de compras, eligen tallas, colores y concretan la compra mediante un flujo optimizado por chat o Webpay.",
    image: "https://i.ibb.co/whsPGyGL/close-up-person-doing-online-shopping.jpg",
    tags: ["Gestión de Inventario", "Filtros de Talla/Color", "Checkout Express", "Cupones de Descuento"],
    badge: "E-Commerce",
    accentColor: "from-blue-500/20 to-indigo-500/20 text-indigo-400 border-indigo-500/30"
  },
  {
    id: 2,
    title: "E-Commerce & Catálogo de Modas",
    subtitle: "Potencia tu Tienda de Retail y Ventas Directas",
    description: "Una vitrina digital interactiva ultrarrápida. Los usuarios añaden productos al carro de compras, eligen tallas, colores y concretan la compra mediante un flujo optimizado por chat o Webpay.",
    image: "https://i.ibb.co/WThh9Cb/wmremove-transformed-3.png",
    tags: ["Gestión de Inventario", "Filtros de Talla/Color", "Checkout Express", "Cupones de Descuento"],
    badge: "E-Commerce",
    accentColor: "from-blue-500/20 to-indigo-500/20 text-indigo-400 border-indigo-500/30"
  },
  {
    id: 3,
    title: "E-Commerce & Catálogo de Modas",
    subtitle: "Potencia tu Tienda de Retail y Ventas Directas",
    description: "Una vitrina digital interactiva ultrarrápida. Los usuarios añaden productos al carro de compras, eligen tallas, colores y concretan la compra mediante un flujo optimizado por chat o Webpay.",
    image: "https://i.ibb.co/Mk9zyMBF/wmremove-transformed-2-2.png",
    tags: ["Gestión de Inventario", "Filtros de Talla/Color", "Checkout Express", "Cupones de Descuento"],
    badge: "E-Commerce",
    accentColor: "from-blue-500/20 to-indigo-500/20 text-indigo-400 border-indigo-500/30"
  },
  {
    id: 4,
    title: "E-Commerce & Catálogo de Modas",
    subtitle: "Potencia tu Tienda de Retail y Ventas Directas",
    description: "Una vitrina digital interactiva ultrarrápida. Los usuarios añaden productos al carro de compras, eligen tallas, colores y concretan la compra mediante un flujo optimizado por chat o Webpay.",
    image: "https://i.ibb.co/M5ZPHXh6/wmremove-transformed-1-1.png",
    tags: ["Gestión de Inventario", "Filtros de Talla/Color", "Checkout Express", "Cupones de Descuento"],
    badge: "E-Commerce",
    accentColor: "from-blue-500/20 to-indigo-500/20 text-indigo-400 border-indigo-500/30"
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Next Slide function
  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // Prev Slide function
  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // Set precise slide
  const handleSetSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto loop slideshow (every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const activeSlide = SLIDES[currentIndex];

  const handleWhatsappInquiry = (appTitle: string) => {
    const text = encodeURIComponent(`Hola PINEDA CODE! Me interesó ver su demo de "${appTitle}". Quisiera saber más información sobre cómo adaptarla a mi negocio.`);
    window.open(`https://wa.me/56900000000?text=${text}`, '_blank');
  };

  return (
    <section id="demo-slider" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-electric-blue/10 border border-electric-blue/30 text-electric-cyan text-xs font-bold uppercase tracking-wider rounded-md">
            <Sparkles className="h-3 w-3" /> Galería de Aplicaciones
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Nuestros Desarrollos en Acción
          </h2>
          <p className="text-slate-400 text-sm sm:text-md font-light">
            Desliza y explora las interfaces de alto impacto que diseñamos para automatizar negocios reales. Tu aplicación se verá increíble, cargará en milisegundos y funcionará perfectamente en cualquier dispositivo.
          </p>
        </div>

        {/* Master Slider Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-navy-card/50 border border-slate-900 p-6 sm:p-10 rounded-3xl relative shadow-2xl">
          
          {/* Left Column: Information / Metadata (5 columns) */}
          <div className="lg:col-span-5 space-y-6 text-left order-2 lg:order-1" id="slider-content">
            
            {/* Slide Category Badge */}
            <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-gradient-to-r border ${activeSlide.accentColor}`}>
              {activeSlide.badge}
            </span>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight transition-all duration-300">
                {activeSlide.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-electric-cyan">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light transition-all duration-300">
              {activeSlide.description}
            </p>

            {/* Key benefits / tags list */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Especificaciones Clave:</span>
              <div className="grid grid-cols-2 gap-2">
                {activeSlide.tags.map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-light">
                    <CheckCircle2 className="h-4 w-4 text-electric-blue shrink-0" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action on the current slide */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => handleWhatsappInquiry(activeSlide.title)}
                className="bg-electric-blue hover:bg-electric-blue/90 text-white font-bold py-3 px-6 rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-electric-blue/20 hover:scale-[1.02] transition-all"
              >
                Preguntar por esta App
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Sliding High-fidelity Screenshot (7 columns) */}
          <div className="lg:col-span-7 relative flex justify-center items-center order-1 lg:order-2" id="slider-visuals">
            
            {/* Slider visual frame */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-500 transform hover:scale-105 ${
                  isAnimating ? 'opacity-40 scale-95 blur-sm' : 'opacity-100 scale-100'
                }`}
              />

              {/* Glassmorphism quick label inside image */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 p-3.5 rounded-xl flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-electric-cyan" />
                  <span className="text-[11px] font-bold text-white tracking-wide">Demo Interactiva Móvil</span>
                </div>
                <span className="text-[10px] text-slate-400 font-light">Desarrollo Llave en mano</span>
              </div>
            </div>

            {/* Left/Right manual navigational overlay buttons */}
            <button
              onClick={handlePrev}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-all cursor-pointer z-20 focus:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-electric-cyan" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-all cursor-pointer z-20 focus:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-electric-cyan" />
            </button>

          </div>

        </div>

        {/* Indicator dots bottom */}
        <div className="flex items-center justify-center gap-3 mt-8" id="slider-indicators">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSetSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index 
                  ? 'w-8 bg-electric-blue shadow shadow-electric-blue' 
                  : 'w-2.5 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
