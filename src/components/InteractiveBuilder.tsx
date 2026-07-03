import React, { useState } from 'react';
import { BUILDER_FEATURES } from '../data';
import { 
  Database, 
  ShoppingCart, 
  CreditCard, 
  Sparkles, 
  MessageSquareText, 
  MapPin, 
  Layers, 
  Settings, 
  Clock, 
  Coins,
  Check,
  Plus,
  Minus
} from 'lucide-react';

export default function InteractiveBuilder() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['database', 'shopping_cart', 'whatsapp_push']);

  const toggleFeature = (id: string) => {
    if (selectedIds.includes(id)) {
      // Keep at least one selected for visual richness, or allow empty
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className={className} />;
      case 'ShoppingCart':
        return <ShoppingCart className={className} />;
      case 'CreditCard':
        return <CreditCard className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'MessageSquareText':
        return <MessageSquareText className={className} />;
      case 'MapPin':
        return <MapPin className={className} />;
      default:
        return <Settings className={className} />;
    }
  };

  // Calculations
  const baseCost = 250; // Base cost for architecture/setup
  const baseTime = 3;   // Base time for design/setup
  
  const totalCost = baseCost + BUILDER_FEATURES
    .filter(f => selectedIds.includes(f.id))
    .reduce((sum, f) => sum + f.cost, 0);

  // Time concurrency formula: base time + largest feature + remaining features scaled down
  const selectedFeatures = BUILDER_FEATURES.filter(f => selectedIds.includes(f.id));
  const maxFeatureTime = selectedFeatures.length > 0 ? Math.max(...selectedFeatures.map(f => f.timeDays)) : 0;
  const remainingTime = selectedFeatures.length > 1 
    ? selectedFeatures.filter(f => f.timeDays !== maxFeatureTime).reduce((sum, f) => sum + f.timeDays, 0) * 0.4
    : 0;
  const totalTime = Math.ceil(baseTime + maxFeatureTime + remainingTime);

  return (
    <section id="constructor" className="py-24 bg-navy-dark relative border-t border-slate-900">
      {/* Background Gradients */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-electric-cyan/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-electric-blue uppercase">Laboratorio de Desarrollo</h2>
          <p className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Diseña tu software a medida en tiempo real
          </p>
          <p className="text-slate-400 text-md sm:text-lg font-light">
            Selecciona los módulos tecnológicos que necesita tu negocio y observa cómo nuestra arquitectura inteligente ensambla la interfaz y calcula el presupuesto de inmediato.
          </p>
        </div>

        {/* Builder Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="builder-container">
          
          {/* Left Side: Modular Checklist */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6" id="builder-left-controls">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Módulos Disponibles</span>
              
              <div className="space-y-3.5">
                {BUILDER_FEATURES.map((feat) => {
                  const isSelected = selectedIds.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 select-none ${
                        isSelected
                          ? 'bg-slate-900/80 border-electric-blue/50 shadow-md shadow-electric-blue/5'
                          : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/40 hover:border-slate-700/80'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-lg border transition-colors ${
                          isSelected 
                            ? 'bg-electric-blue/15 border-electric-blue text-electric-cyan' 
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}>
                          {getIcon(feat.icon, 'h-5 w-5')}
                        </div>
                        <div className="text-left">
                          <h4 className="text-sm font-bold text-white leading-snug">{feat.name}</h4>
                          <p className="text-xs text-slate-400 leading-normal max-w-md">{feat.description}</p>
                        </div>
                      </div>

                      {/* Checkbox state */}
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-electric-blue text-white scale-110' 
                          : 'border border-slate-700 hover:border-slate-500'
                      }`}>
                        {isSelected && <Check className="h-3.5 w-3.5 stroke-[3px]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price & Time Summary Widget */}
            <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 shadow-xl">
              <div className="flex items-center gap-6 text-left w-full sm:w-auto justify-around sm:justify-start">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
                    <Coins className="h-3.5 w-3.5 text-electric-cyan" /> Presupuesto Estimado
                  </span>
                  <div className="text-3xl font-mono font-extrabold text-white">
                    ${totalCost}
                    <span className="text-xs text-slate-500 font-sans font-normal ml-1">USD</span>
                  </div>
                </div>
                
                <div className="w-[1px] h-10 bg-slate-800 hidden sm:block"></div>
                
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-violet-400" /> Tiempo de Desarrollo
                  </span>
                  <div className="text-3xl font-mono font-extrabold text-white">
                    {totalTime}
                    <span className="text-xs text-slate-500 font-sans font-normal ml-1">días hábiles</span>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto text-right">
                <a
                  href={`https://wa.me/56900000000?text=Hola%20Pineda%20Code!%20He%20cotizado%20un%20proyecto%20a%20medida%20con%20los%20siguientes%20m%C3%B3dulos%3A%20${encodeURIComponent(selectedFeatures.map(f => f.name).join(', '))}.%20El%20estimado%20es%20de%20%24${totalCost}%20USD%20en%20${totalTime}%20d%C3%ADas.%20Me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n.`}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-gradient-to-r from-electric-blue to-blue-700 hover:from-electric-blue/95 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl text-xs transition-all shadow-lg shadow-electric-blue/20"
                >
                  Confirmar Propuesta en WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Smart Phone Screen compiling live modules */}
          <div className="lg:col-span-5 flex items-center justify-center relative" id="builder-right-preview">
            
            {/* Phone Container */}
            <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[38px] border-8 border-slate-800 shadow-2xl flex flex-col overflow-hidden">
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-28 bg-slate-800 rounded-b-xl z-30 flex items-center justify-center">
                <div className="h-1 w-10 bg-slate-900 rounded-full"></div>
              </div>

              {/* Status bar */}
              <div className="h-5 bg-slate-950 flex justify-between items-center px-6 pt-1 text-[9px] font-mono text-slate-500 z-20 select-none">
                <span>09:41</span>
                <span>LTE</span>
              </div>

              {/* Simulated App Screen */}
              <div className="flex-1 bg-slate-950 p-3 overflow-y-auto space-y-3 relative flex flex-col justify-start">
                
                {/* Header of Built App */}
                <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl text-center space-y-1 mt-1">
                  <span className="text-[11px] font-display font-extrabold text-white block">Mi Aplicación Inteligente</span>
                  <p className="text-[8px] text-slate-500">Módulos ensablados por Pineda Code</p>
                </div>

                {/* Empty State */}
                {selectedIds.length === 0 && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-4 space-y-3">
                    <Layers className="h-10 w-10 text-slate-700 animate-bounce" />
                    <p className="text-[10px] text-slate-400 font-light">
                      Ningún módulo activo. Toca los elementos a la izquierda para empezar a ensamblar la app de tu negocio en vivo.
                    </p>
                  </div>
                )}

                {/* MODULE 1: WHATSAPP NOTIFICATION BANNER */}
                {selectedIds.includes('whatsapp_push') && (
                  <div className="bg-slate-900 border border-emerald-500/20 p-2 rounded-xl text-left flex gap-2 items-start relative overflow-hidden animate-fade-in shadow-md shadow-emerald-950/20">
                    <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-emerald-500"></div>
                    <div className="p-1 bg-emerald-500/10 rounded text-emerald-500 shrink-0">
                      <MessageSquareText className="h-3.5 w-3.5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-[8px] font-extrabold text-emerald-400 uppercase tracking-wide">Notificación WhatsApp</span>
                        <span className="text-[7px] text-slate-500 font-mono">Ahora</span>
                      </div>
                      <p className="text-[9px] text-slate-300 leading-tight">
                        &quot;¡Hola! Tu cotización de software ha sido cargada con éxito. Un agente de Pineda te atenderá.&quot;
                      </p>
                    </div>
                  </div>
                )}

                {/* MODULE 2: DATABASE CLIENTS MODULE */}
                {selectedIds.includes('database') && (
                  <div className="bg-slate-900/90 border border-slate-800/80 p-2.5 rounded-xl text-left space-y-1.5 animate-fade-in">
                    <span className="text-[8px] uppercase tracking-wider font-bold text-slate-500 flex items-center gap-1">
                      <Database className="h-2.5 w-2.5 text-electric-cyan" /> Base de Datos (Cloud)
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[8px] bg-slate-950 py-1 px-1.5 rounded">
                        <span className="text-white">ID #0034 • Carlos Mendoza</span>
                        <span className="text-emerald-400 font-mono">Activo</span>
                      </div>
                      <div className="flex items-center justify-between text-[8px] bg-slate-950 py-1 px-1.5 rounded">
                        <span className="text-white">ID #0035 • Sofía Alarcón</span>
                        <span className="text-emerald-400 font-mono">Activo</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODULE 3: SHOPPING CART */}
                {selectedIds.includes('shopping_cart') && (
                  <div className="bg-slate-900/90 border border-slate-800/80 p-2.5 rounded-xl text-left space-y-1.5 animate-fade-in">
                    <span className="text-[8px] uppercase tracking-wider font-bold text-slate-500 flex items-center gap-1">
                      <ShoppingCart className="h-2.5 w-2.5 text-orange-400" /> Catálogo & Carrito
                    </span>
                    <div className="flex justify-between items-center gap-2 bg-slate-950 p-1.5 rounded-lg border border-slate-900">
                      <div className="h-7 w-7 bg-slate-900 rounded border border-slate-800 flex items-center justify-center text-[10px]">📦</div>
                      <div className="flex-1 text-[8px]">
                        <h5 className="font-bold text-white">Servicio Premium Web</h5>
                        <p className="text-slate-500 font-mono">$250.00 x 1</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="h-4 w-4 bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold text-white"><Minus className="h-2.5 w-2.5" /></button>
                        <span className="text-[8px] text-white font-bold font-mono">1</span>
                        <button className="h-4 w-4 bg-slate-800 rounded flex items-center justify-center text-[8px] font-bold text-white"><Plus className="h-2.5 w-2.5" /></button>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODULE 4: GEMINI AI BOT CHAT */}
                {selectedIds.includes('gemini_ai') && (
                  <div className="bg-slate-900/90 border border-slate-800/80 p-2.5 rounded-xl text-left space-y-2 animate-fade-in">
                    <span className="text-[8px] uppercase tracking-wider font-bold text-slate-500 flex items-center gap-1">
                      <Sparkles className="h-2.5 w-2.5 text-violet-400" /> Inteligencia Artificial (Gemini)
                    </span>
                    <div className="space-y-1.5">
                      <div className="bg-slate-950 p-1.5 rounded-lg rounded-tl-none border border-slate-900 text-[8px] text-slate-300">
                        ✨ <strong className="text-white">Pineda AI:</strong> ¡Hola! Detecto que buscas desarrollar una app. ¿Sabías que con alertas de WhatsApp puedes subir un 45% tus conversiones?
                      </div>
                    </div>
                  </div>
                )}

                {/* MODULE 5: STRIPE PAYMENT */}
                {selectedIds.includes('online_payment') && (
                  <div className="bg-slate-900/90 border border-slate-800/80 p-2.5 rounded-xl text-left space-y-2 animate-fade-in">
                    <span className="text-[8px] uppercase tracking-wider font-bold text-slate-500 flex items-center gap-1">
                      <CreditCard className="h-2.5 w-2.5 text-blue-400" /> Checkout Stripe Seguro
                    </span>
                    <div className="space-y-1">
                      <div className="bg-slate-950 border border-slate-900 rounded p-1 flex justify-between items-center text-[8px]">
                        <span className="text-slate-400">•••• •••• •••• 4242</span>
                        <span className="text-slate-500 font-mono">12/28</span>
                      </div>
                      <button className="w-full bg-electric-blue text-white text-[8px] font-bold py-1 px-3 rounded flex items-center justify-center gap-1 shadow">
                        Pagar $250.00 USD
                      </button>
                    </div>
                  </div>
                )}

                {/* MODULE 6: GEOLOCATION delivery */}
                {selectedIds.includes('geolocation') && (
                  <div className="bg-slate-900/90 border border-slate-800/80 p-2.5 rounded-xl text-left space-y-1.5 animate-fade-in">
                    <span className="text-[8px] uppercase tracking-wider font-bold text-slate-500 flex items-center gap-1">
                      <MapPin className="h-2.5 w-2.5 text-red-400" /> Logística & Geolocalización
                    </span>
                    
                    {/* Simulated Map */}
                    <div className="h-16 bg-slate-950 rounded-lg relative overflow-hidden border border-slate-900 flex items-center justify-center">
                      {/* Dotted route lines representing a map */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:8px_8px]"></div>
                      
                      {/* Dotted path line */}
                      <svg className="absolute inset-0 h-full w-full" strokeDasharray="3,3">
                        <path d="M 20 50 Q 120 10 240 40" fill="transparent" stroke="#00F0FF" strokeWidth="2" />
                      </svg>
                      
                      {/* Scoot / Destination Pin */}
                      <div className="absolute left-[20px] top-[45px] h-2 w-2 rounded-full bg-electric-blue animate-ping"></div>
                      <div className="absolute left-[20px] top-[45px] h-2 w-2 rounded-full bg-electric-blue"></div>
                      
                      <div className="absolute right-[40px] top-[30px] h-3.5 w-3.5 rounded-full bg-red-500 flex items-center justify-center text-[7px] text-white font-bold animate-pulse">
                        <MapPin className="h-2 w-2" />
                      </div>
                      
                      <span className="absolute bottom-1 right-2 text-[6px] font-mono bg-slate-900/80 py-0.5 px-1 rounded text-electric-cyan border border-slate-800">
                        Entrega: 12 min
                      </span>
                    </div>
                  </div>
                )}

              </div>

              {/* Device Home Indicator */}
              <div className="h-5 bg-slate-950 flex items-center justify-center z-20">
                <div className="h-1 w-24 bg-slate-700 rounded-full"></div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
