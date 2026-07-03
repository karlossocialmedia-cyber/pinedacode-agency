import React, { useState } from 'react';
import { APP_TEMPLATES } from '../data';
import { 
  ShoppingBag, 
  Calendar, 
  LayoutDashboard, 
  Sparkles, 
  ArrowRight, 
  Check, 
  MessageSquare, 
  ChevronRight, 
  Coins, 
  TrendingUp, 
  Clock, 
  User, 
  Star 
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [activeTab, setActiveTab] = useState('catalog');

  const activeTemplate = APP_TEMPLATES.find(t => t.id === activeTab) || APP_TEMPLATES[0];

  // Helper to render icons dynamically
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'Calendar':
        return <Calendar className={className} />;
      case 'LayoutDashboard':
        return <LayoutDashboard className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      default:
        return <ShoppingBag className={className} />;
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-24 overflow-hidden bg-navy-dark">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-electric-cyan/10 rounded-full blur-[150px] animate-pulse-slow"></div>
      
      {/* Decorative Dotted Grid Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8" id="hero-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-cyan text-sm font-semibold tracking-wide animate-fade-in" id="hero-tag">
              <Sparkles className="h-4 w-4 animate-spin-slow" />
              <span>Agencia de Software Premium</span>
            </div>

            {/* Main Headline & Slogan */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                {/* Slogan adaptation */}
                Llevamos tu negocio <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-blue-500 to-electric-cyan">
                  al siguiente nivel
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                Desarrollamos software a medida, aplicaciones web de alta velocidad y plataformas de e-commerce conectadas a WhatsApp que multiplican tus ventas y automatizan tus operaciones cotidianas.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('cotizador')}
                className="bg-electric-blue hover:bg-electric-blue/90 text-white font-bold px-8 py-4 rounded-xl text-md shadow-lg shadow-electric-blue/30 hover:shadow-electric-blue/50 flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Cotizar Proyecto Gratis
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => onNavigate('casos')}
                className="bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 font-semibold px-8 py-4 rounded-xl text-md flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
              >
                Ver Demostraciones
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4" id="hero-trust">
              <div>
                <span className="block text-2xl sm:text-3xl font-mono font-extrabold text-white">50+</span>
                <span className="text-xs sm:text-sm text-slate-400">Proyectos creados</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-mono font-extrabold text-electric-cyan">99%</span>
                <span className="text-xs sm:text-sm text-slate-400">Clientes contentos</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-mono font-extrabold text-white">24/7</span>
                <span className="text-xs sm:text-sm text-slate-400">Soporte técnico</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Mockup Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative" id="hero-right">
            
            {/* Glow Behind Mobile */}
            <div className={`absolute -inset-4 bg-gradient-to-r ${activeTemplate.color} opacity-20 blur-2xl rounded-full transition-all duration-500`}></div>

            {/* Interactive Tab Switcher above device */}
            <div className="w-full max-w-sm mb-6 flex flex-wrap gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800 z-10">
              {APP_TEMPLATES.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => setActiveTab(tpl.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeTab === tpl.id
                      ? 'bg-electric-blue text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {renderIcon(tpl.icon, 'h-3.5 w-3.5')}
                  <span className="hidden sm:inline">{tpl.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Smartphone device Mockup */}
            <div className="relative w-[310px] h-[610px] bg-slate-950 rounded-[40px] border-[10px] border-slate-800 shadow-2xl overflow-hidden flex flex-col z-10 transition-transform duration-500 hover:scale-[1.02] hover:border-slate-700">
              {/* Speaker & Camera Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-5 w-32 bg-slate-800 rounded-b-xl z-30 flex items-center justify-center">
                <div className="h-1.5 w-12 bg-slate-900 rounded-full"></div>
              </div>

              {/* Status Bar */}
              <div className="h-6 bg-slate-950/50 flex justify-between items-center px-6 pt-1 text-[10px] font-mono text-slate-400 z-20">
                <span>09:41</span>
                <div className="flex gap-1.5 items-center">
                  <span>5G</span>
                  <div className="h-2 w-4 border border-slate-400 rounded-sm bg-slate-400"></div>
                </div>
              </div>

              {/* App Content Frame */}
              <div className="flex-1 bg-slate-950 flex flex-col justify-between overflow-hidden relative">
                
                {/* Simulated App Head */}
                <div className="p-4 pt-2 border-b border-slate-900 bg-slate-900/40 flex items-center gap-2">
                  <div className={`h-8 w-8 rounded-full bg-gradient-to-tr ${activeTemplate.color} flex items-center justify-center text-white font-bold text-xs`}>
                    {activeTemplate.title.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">{activeTemplate.title}</h3>
                    <p className="text-[9px] text-slate-400 font-medium">{activeTemplate.subtitle}</p>
                  </div>
                </div>

                {/* Simulated Screen Body */}
                <div className="flex-1 p-3 overflow-y-auto space-y-3 flex flex-col justify-start">
                  
                  {/* APP MOCKUP TYPE: CATALOG */}
                  {activeTemplate.mockupType === 'catalog' && (
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-1 text-[9px] bg-slate-900/60 p-1.5 rounded-lg border border-slate-800 text-slate-300">
                        <Star className="h-2.5 w-2.5 text-yellow-400 fill-yellow-400" />
                        <span>4.9 (180 pedidos completados)</span>
                      </div>
                      
                      <p className="text-[10px] font-bold text-slate-300">Hamburguesas Especiales</p>
                      
                      {/* Product Item 1 */}
                      <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800 flex justify-between items-center gap-2">
                        <div className="flex-1">
                          <h4 className="text-[10px] font-bold text-white">Doble Cheddar Burger</h4>
                          <p className="text-[8px] text-slate-400">Doble carne premium, cheddar fundido, salsa especial Pineda.</p>
                          <span className="text-[10px] font-mono font-bold text-electric-cyan">$8.99</span>
                        </div>
                        <button className="bg-electric-blue text-white p-1 rounded-lg text-[9px] font-bold flex items-center justify-center w-5 h-5">+</button>
                      </div>

                      {/* Product Item 2 */}
                      <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800 flex justify-between items-center gap-2">
                        <div className="flex-1">
                          <h4 className="text-[10px] font-bold text-white">Crispy Chicken BBQ</h4>
                          <p className="text-[8px] text-slate-400">Pollo crujiente, tocino ahumado, cebolla caramelizada, BBQ.</p>
                          <span className="text-[10px] font-mono font-bold text-electric-cyan">$7.50</span>
                        </div>
                        <button className="bg-electric-blue text-white p-1 rounded-lg text-[9px] font-bold flex items-center justify-center w-5 h-5">+</button>
                      </div>

                      {/* Floating Basket */}
                      <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-2 rounded-xl text-[9px] font-semibold text-center flex justify-between items-center shadow-lg text-white">
                        <span className="flex items-center gap-1"><ShoppingBag className="h-3 w-3" /> Ver Carrito (2)</span>
                        <span className="font-mono font-bold">$16.49</span>
                      </div>
                    </div>
                  )}

                  {/* APP MOCKUP TYPE: BOOKING */}
                  {activeTemplate.mockupType === 'booking' && (
                    <div className="space-y-3 text-left">
                      <p className="text-[10px] font-bold text-slate-300">Selecciona tu Servicio</p>
                      <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 flex items-center justify-between">
                        <span className="text-[9px] text-white font-medium">Corte VIP + Barba Perfilada</span>
                        <span className="text-[9px] font-mono text-electric-cyan font-bold">$25.00</span>
                      </div>

                      <p className="text-[10px] font-bold text-slate-300">Elige Profesional</p>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-electric-blue/10 border border-electric-blue/40 p-1.5 rounded-lg text-center">
                          <div className="h-5 w-5 rounded-full bg-electric-blue mx-auto mb-1 flex items-center justify-center text-[7px] text-white font-bold">M</div>
                          <span className="block text-[7px] text-white font-semibold">Mateo P.</span>
                        </div>
                        <div className="flex-1 bg-slate-900 border border-slate-800 p-1.5 rounded-lg text-center">
                          <div className="h-5 w-5 rounded-full bg-slate-700 mx-auto mb-1 flex items-center justify-center text-[7px] text-white font-bold">L</div>
                          <span className="block text-[7px] text-slate-400">Lucas R.</span>
                        </div>
                      </div>

                      <p className="text-[10px] font-bold text-slate-300">Horarios Disponibles Hoy</p>
                      <div className="grid grid-cols-3 gap-1.5">
                        <span className="bg-slate-900 py-1 text-center text-[8px] text-slate-400 rounded border border-slate-800">10:00 AM</span>
                        <span className="bg-electric-blue text-white py-1 text-center text-[8px] font-bold rounded">11:30 AM</span>
                        <span className="bg-slate-900 py-1 text-center text-[8px] text-slate-400 rounded border border-slate-800">03:00 PM</span>
                      </div>
                    </div>
                  )}

                  {/* APP MOCKUP TYPE: DASHBOARD */}
                  {activeTemplate.mockupType === 'dashboard' && (
                    <div className="space-y-3 text-left">
                      {/* Metric cards */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800">
                          <span className="text-[7px] text-slate-400 block uppercase tracking-wider">Ventas de Hoy</span>
                          <span className="text-[11px] font-mono font-bold text-emerald-400">$1,450.00</span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800">
                          <span className="text-[7px] text-slate-400 block uppercase tracking-wider">Nuevos Leads</span>
                          <span className="text-[11px] font-mono font-bold text-electric-cyan">+48</span>
                        </div>
                      </div>

                      {/* Mini Graph using CSS divs */}
                      <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] text-white font-semibold flex items-center gap-1"><TrendingUp className="h-2.5 w-2.5 text-emerald-400" /> Conversiones</span>
                          <span className="text-[7px] text-slate-400 font-mono">Últimos 4 meses</span>
                        </div>
                        
                        <div className="h-16 flex items-end justify-between px-2 pt-2 gap-2">
                          <div className="w-full flex flex-col items-center gap-1">
                            <div className="w-4 bg-slate-800 h-6 rounded-t-sm transition-all duration-300"></div>
                            <span className="text-[6px] text-slate-500 font-mono">Mar</span>
                          </div>
                          <div className="w-full flex flex-col items-center gap-1">
                            <div className="w-4 bg-slate-800 h-10 rounded-t-sm transition-all duration-300"></div>
                            <span className="text-[6px] text-slate-500 font-mono">Abr</span>
                          </div>
                          <div className="w-full flex flex-col items-center gap-1">
                            <div className="w-4 bg-electric-blue/40 h-12 rounded-t-sm transition-all duration-300"></div>
                            <span className="text-[6px] text-slate-500 font-mono">May</span>
                          </div>
                          <div className="w-full flex flex-col items-center gap-1">
                            <div className="w-4 bg-electric-blue h-14 rounded-t-sm transition-all duration-300"></div>
                            <span className="text-[6px] text-white font-mono">Jun</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* APP MOCKUP TYPE: AI */}
                  {activeTemplate.mockupType === 'ai' && (
                    <div className="space-y-3 text-left">
                      {/* Chat messages */}
                      <div className="space-y-2 text-[9px]">
                        <div className="bg-slate-900/80 p-2 rounded-xl rounded-tr-none border border-slate-800 text-slate-300 ml-6">
                          ¿Tienen alguna solución web de reservas para mi spa que mande alertas al WhatsApp?
                        </div>
                        <div className="bg-electric-blue/10 border border-electric-blue/20 p-2 rounded-xl rounded-tl-none text-white mr-6 flex items-start gap-1.5">
                          <div className="bg-electric-blue p-1 rounded-full text-white text-[7px] shrink-0 mt-0.5">
                            <Sparkles className="h-2 w-2" />
                          </div>
                          <div>
                            ¡Hola! Sí, en <strong>PINEDA CODE</strong> desarrollamos reservadores premium a medida con alertas automáticas. El cliente selecciona su hora y el sistema le envía un link por WhatsApp.
                          </div>
                        </div>
                      </div>

                      {/* Quick chips */}
                      <div className="flex gap-1 overflow-x-auto pb-1">
                        <span className="bg-slate-900 text-white border border-slate-800 py-1 px-1.5 rounded-full text-[7px] shrink-0">¿Cuánto cuesta?</span>
                        <span className="bg-slate-900 text-white border border-slate-800 py-1 px-1.5 rounded-full text-[7px] shrink-0">Ver un ejemplo</span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Simulated Footer Action Button */}
                <div className="p-3 border-t border-slate-900 bg-slate-950/90">
                  {activeTemplate.mockupType === 'catalog' && (
                    <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/10">
                      <MessageSquare className="h-3.5 w-3.5" /> Enviar Pedido a WhatsApp
                    </button>
                  )}
                  {activeTemplate.mockupType === 'booking' && (
                    <button className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white text-[10px] font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-1 shadow-md shadow-electric-blue/10">
                      Agendar Turno de Inmediato
                    </button>
                  )}
                  {activeTemplate.mockupType === 'dashboard' && (
                    <div className="flex gap-2 justify-between items-center">
                      <span className="text-[8px] text-slate-500">Sesión iniciada como Admin</span>
                      <button className="bg-slate-800 text-white py-1 px-2.5 rounded-lg text-[8px] font-bold border border-slate-700">Ver Reportes</button>
                    </div>
                  )}
                  {activeTemplate.mockupType === 'ai' && (
                    <div className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 flex justify-between items-center">
                      <span className="text-[8px] text-slate-500">Pregunta al asistente Pineda AI...</span>
                      <button className="bg-electric-blue p-1 rounded-lg text-white"><ChevronRight className="h-3 w-3" /></button>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Float badges on the sides */}
            <div className="absolute top-24 -left-12 bg-slate-900/90 border border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-2 max-w-[150px] z-20 animate-float hidden md:flex">
              <div className="bg-emerald-500/10 p-2 rounded-xl text-emerald-400">
                <Coins className="h-5 w-5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400">Conversión</span>
                <span className="block text-xs font-bold text-white">+380% más</span>
              </div>
            </div>

            <div className="absolute bottom-20 -right-12 bg-slate-900/90 border border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-2 max-w-[150px] z-20 animate-float [animation-delay:2s] hidden md:flex">
              <div className="bg-electric-blue/10 p-2 rounded-xl text-electric-blue">
                <Clock className="h-5 w-5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400">Velocidad</span>
                <span className="block text-xs font-bold text-white">0.5s Carga</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
