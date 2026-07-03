import React, { useState } from 'react';
import { 
  Smartphone, 
  Laptop, 
  Layers, 
  CreditCard, 
  Database, 
  Sparkles, 
  MessageSquare, 
  BarChart3, 
  FileSpreadsheet, 
  Coins, 
  Clock, 
  ArrowRight,
  Send,
  Check
} from 'lucide-react';

export default function Calculator() {
  // Config states
  const [platform, setPlatform] = useState<'web' | 'mobile' | 'both'>('web');
  const [designLevel, setDesignLevel] = useState<'standard' | 'premium' | 'advanced'>('premium');
  
  // Modules checked
  const [modules, setModules] = useState<string[]>([
    'payment',
    'database',
    'whatsapp'
  ]);

  // Lead inputs
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Toggle helpers
  const handleToggleModule = (id: string) => {
    if (modules.includes(id)) {
      setModules(modules.filter(m => m !== id));
    } else {
      setModules([...modules, id]);
    }
  };

  // Pricing formula
  const getPlatformCost = () => {
    if (platform === 'web') return 450;
    if (platform === 'mobile') return 650;
    return 950; // both
  };

  const getDesignCost = () => {
    if (designLevel === 'standard') return 150;
    if (designLevel === 'premium') return 350;
    return 550; // advanced
  };

  const moduleItems = [
    { id: 'payment', name: 'Pasarela de Pago (Stripe/PayPal)', cost: 300, days: 3, icon: CreditCard, color: 'text-blue-400' },
    { id: 'database', name: 'Base de Datos & Auth Usuarios', cost: 250, days: 3, icon: Database, color: 'text-emerald-400' },
    { id: 'gemini', name: 'Inteligencia Artificial Gemini AI', cost: 400, days: 5, icon: Sparkles, color: 'text-violet-400' },
    { id: 'whatsapp', name: 'Alertas Automáticas WhatsApp', cost: 200, days: 2, icon: MessageSquare, color: 'text-green-400' },
    { id: 'dashboard', name: 'Panel Estadístico (Dashboard)', cost: 250, days: 3, icon: BarChart3, color: 'text-indigo-400' },
    { id: 'sheets', name: 'Sincronización Google Sheets', cost: 100, days: 1, icon: FileSpreadsheet, color: 'text-teal-400' }
  ];

  const totalModulesCost = moduleItems
    .filter(m => modules.includes(m.id))
    .reduce((sum, m) => sum + m.cost, 0);

  const subtotal = getPlatformCost() + getDesignCost() + totalModulesCost;

  // Time calculation
  const getBaseDays = () => {
    if (platform === 'web') return 6;
    if (platform === 'mobile') return 8;
    return 12;
  };

  const maxModuleDays = modules.length > 0 
    ? Math.max(...moduleItems.filter(m => modules.includes(m.id)).map(m => m.days)) 
    : 0;
  
  const additionalDays = modules.length > 1
    ? moduleItems.filter(m => modules.includes(m.id) && m.days !== maxModuleDays).reduce((sum, m) => sum + m.days, 0) * 0.35
    : 0;

  const totalDays = Math.ceil(getBaseDays() + maxModuleDays + additionalDays);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) {
      alert('Por favor ingresa tu nombre y correo para estructurar tu cotización.');
      return;
    }

    // Prepare WhatsApp Message
    const platformLabel = platform === 'web' ? 'Web App' : platform === 'mobile' ? 'Mobile App (iOS/Android)' : 'Multiplataforma (Web + Mobile)';
    const designLabelStr = designLevel === 'standard' ? 'Express/Optimizado' : designLevel === 'premium' ? 'Diseño Premium Custom' : 'Interfaz de Ultra Alta Gama UX/UI';
    const selectedModulesList = moduleItems.filter(m => modules.includes(m.id)).map(m => m.name).join(', ');

    const whatsappText = `🚀 *COTIZACIÓN DE SOFTWARE - PINEDA CODE* 🚀
------------------------------------
*Cliente:* ${clientName}
*Email:* ${clientEmail}

*Plataforma:* ${platformLabel}
*Diseño:* ${designLabelStr}
*Módulos Seleccionados:* ${selectedModulesList || 'Ninguno'}

*Notas Adicionales:* ${clientNotes || 'Ninguna'}
------------------------------------
*Inversión Estimada:* $${subtotal} USD
*Tiempo de Entrega:* ${totalDays} días hábiles
------------------------------------
_Generado desde el Cotizador de pinedacode.com_`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/56900000000?text=${encodedText}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  return (
    <section id="cotizador" className="py-24 bg-navy-dark relative border-t border-slate-900">
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-electric-blue uppercase">Cotizador Inteligente</h2>
          <p className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Calcula el costo de tu proyecto al instante
          </p>
          <p className="text-slate-400 text-md sm:text-lg font-light">
            Selecciona el tipo de plataforma, la complejidad del diseño y las funcionalidades extras. Obtén una cotización preliminar transparente y envíala a nuestro WhatsApp.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-2xl mx-auto bg-navy-card border border-emerald-500/30 p-12 rounded-3xl text-center space-y-6 animate-fade-in shadow-2xl">
            <div className="h-20 w-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-4xl font-bold mx-auto animate-bounce">
              ✓
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-white">¡Cotización Estructurada!</h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm">
                Hemos preparado el desglose para <strong className="text-white">{clientName}</strong>. Te estamos redirigiendo a nuestro chat de WhatsApp para agendar una reunión de validación.
              </p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl text-xs text-slate-500 font-mono">
              Si no te redirige automáticamente en un instante, haz clic en el siguiente enlace:<br />
              <button 
                onClick={() => {
                  const platformLabel = platform === 'web' ? 'Web App' : platform === 'mobile' ? 'Mobile App' : 'Ambas';
                  const msg = `Hola Pineda Code! Soy ${clientName}. He cotizado un desarrollo tipo: ${platformLabel} por un costo estimado de $${subtotal} USD.`;
                  window.open(`https://wa.me/56900000000?text=${encodeURIComponent(msg)}`, '_blank');
                }} 
                className="text-electric-cyan underline font-bold mt-2 hover:text-white block mx-auto"
              >
                Abrir WhatsApp de PINEDA CODE Manualmente ↗
              </button>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
            >
              Volver a editar la cotización
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="calculator-grid">
            
            {/* Left Side: Selections (8 Columns) */}
            <div className="lg:col-span-8 bg-navy-card/80 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-8 text-left" id="calculator-selections">
              
              {/* Option 1: Platform */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Laptop className="h-4 w-4 text-electric-blue" /> 1. Elige la Plataforma
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setPlatform('web')}
                    className={`p-4 rounded-xl border text-left flex flex-col justify-between h-32 transition-all cursor-pointer ${
                      platform === 'web'
                        ? 'bg-electric-blue/10 border-electric-blue text-white shadow'
                        : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-300'
                    }`}
                  >
                    <Laptop className="h-6 w-6 text-electric-blue" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Web App / E-commerce</h4>
                      <p className="text-[10px] text-slate-400 font-light mt-0.5">Plataforma responsive para computadoras y móviles.</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setPlatform('mobile')}
                    className={`p-4 rounded-xl border text-left flex flex-col justify-between h-32 transition-all cursor-pointer ${
                      platform === 'mobile'
                        ? 'bg-electric-blue/10 border-electric-blue text-white shadow'
                        : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-300'
                    }`}
                  >
                    <Smartphone className="h-6 w-6 text-electric-cyan" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Mobile App</h4>
                      <p className="text-[10px] text-slate-400 font-light mt-0.5">Aplicación nativa subida a Play Store e iOS App Store.</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setPlatform('both')}
                    className={`p-4 rounded-xl border text-left flex flex-col justify-between h-32 transition-all cursor-pointer ${
                      platform === 'both'
                        ? 'bg-electric-blue/10 border-electric-blue text-white shadow'
                        : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-300'
                    }`}
                  >
                    <Layers className="h-6 w-6 text-violet-400" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Multiplataforma</h4>
                      <p className="text-[10px] text-slate-400 font-light mt-0.5">Web y Mobile unificadas con una sola base de datos.</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Option 2: Design Level */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-violet-400" /> 2. Complejidad del Diseño Visual
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'standard', name: 'Optimizado Express', desc: 'Basado en maquetas optimizadas de alto rendimiento.', price: '+$150 USD' },
                    { id: 'premium', name: 'Premium Personalizado', desc: 'Diseño exclusivo creado de cero según tu identidad de marca.', price: '+$350 USD' },
                    { id: 'advanced', name: 'Gama Alta UX/UI', desc: 'Interactividad profunda, animaciones fluidas, sonido 3D o shaders.', price: '+$550 USD' }
                  ].map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setDesignLevel(level.id as any)}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between h-32 transition-all cursor-pointer ${
                        designLevel === level.id
                          ? 'bg-electric-blue/10 border-electric-blue text-white shadow'
                          : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-300'
                      }`}
                    >
                      <span className="text-xs font-mono font-bold text-electric-cyan">{level.price}</span>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{level.name}</h4>
                        <p className="text-[10px] text-slate-400 font-light mt-0.5">{level.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Extra Modules (Checkboxes) */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">3. Agrega Módulos Funcionales</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {moduleItems.map((mod) => {
                    const isChecked = modules.includes(mod.id);
                    const IconComp = mod.icon;
                    return (
                      <div
                        key={mod.id}
                        onClick={() => handleToggleModule(mod.id)}
                        className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer select-none transition-all ${
                          isChecked
                            ? 'bg-slate-900 border-electric-blue/40 text-white'
                            : 'bg-slate-950/50 border-slate-900 text-slate-400 hover:border-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComp className={`h-5 w-5 ${isChecked ? mod.color : 'text-slate-500'}`} />
                          <div className="text-left">
                            <h4 className="text-xs font-bold text-white">{mod.name}</h4>
                            <span className="text-[10px] text-slate-500 font-mono">+${mod.cost} USD • +{mod.days}d</span>
                          </div>
                        </div>
                        <div className={`h-4 w-4 rounded flex items-center justify-center transition-all ${
                          isChecked ? 'bg-electric-blue text-white' : 'border border-slate-700'
                        }`}>
                          {isChecked && <Check className="h-3 w-3 stroke-[3px]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Side: Totals & Form (4 Columns) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6" id="calculator-totals">
              
              {/* Box 1: Dynamic Pricing Stats */}
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-3xl text-left space-y-6 shadow-xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Resumen de Propuesta</span>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Plataforma</span>
                    <span className="text-xs font-bold text-white font-mono">
                      ${getPlatformCost()} USD
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Estilo de Diseño</span>
                    <span className="text-xs font-bold text-white font-mono">
                      ${getDesignCost()} USD
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Módulos Extras ({modules.length})</span>
                    <span className="text-xs font-bold text-white font-mono">
                      ${totalModulesCost} USD
                    </span>
                  </div>
                  
                  <div className="h-[1px] bg-slate-800"></div>

                  <div className="flex justify-between items-end">
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Inversión Final</span>
                      <div className="text-3xl font-mono font-extrabold text-white flex items-baseline">
                        ${subtotal}
                        <span className="text-[10px] text-slate-500 font-sans font-normal ml-1">USD</span>
                      </div>
                    </div>
                    
                    <div className="text-right space-y-0.5">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Entrega</span>
                      <div className="text-sm font-bold text-electric-cyan font-mono">
                        ~{totalDays} días
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2: Customer Contacts Form */}
              <form onSubmit={handleWhatsAppSend} className="bg-slate-950 border border-slate-800 p-6 rounded-3xl text-left space-y-4 shadow-xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Completa tus Datos</span>
                
                <div className="space-y-3">
                  <div>
                    <input 
                      type="text"
                      required
                      placeholder="Tu Nombre Comercial"
                      className="w-full bg-slate-900 border border-slate-800/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>

                  <div>
                    <input 
                      type="email"
                      required
                      placeholder="Correo Electrónico"
                      className="w-full bg-slate-900 border border-slate-800/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <textarea 
                      placeholder="Comentarios adicionales o tu número telefónico..."
                      rows={2}
                      className="w-full bg-slate-900 border border-slate-800/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all resize-none"
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-bold py-3.5 px-6 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-electric-blue/20 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  Generar Cotización WhatsApp
                </button>
              </form>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
