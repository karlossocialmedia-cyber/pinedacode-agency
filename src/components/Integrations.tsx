import React, { useState } from 'react';
import { INTEGRATIONS } from '../data';
import { 
  MessageSquareCode, 
  CreditCard, 
  FileSpreadsheet, 
  Cpu, 
  Wallet, 
  CalendarCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function Integrations() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { name: 'Todas', id: 'all' },
    { name: 'Pasarelas de Pago', id: 'Pagos' },
    { name: 'Bases de Datos & Hojas', id: 'Datos' },
    { name: 'Canales & Chat', id: 'Canal' },
    { name: 'Inteligencia Artificial', id: 'Inteligencia' }
  ];

  const filteredIntegrations = filter === 'all' 
    ? INTEGRATIONS 
    : INTEGRATIONS.filter(item => item.category === filter);

  const getLogoIcon = (logoName: string, className: string) => {
    switch (logoName) {
      case 'MessageSquareCode':
        return <MessageSquareCode className={className} />;
      case 'CreditCard':
        return <CreditCard className={className} />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Wallet':
        return <Wallet className={className} />;
      case 'CalendarCheck':
        return <CalendarCheck className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Canal':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Pagos':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Datos':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Inteligencia':
        return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
      default:
        return 'bg-slate-800 text-slate-400';
    }
  };

  return (
    <section id="integraciones" className="py-24 bg-slate-950 relative border-t border-slate-900">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-electric-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-electric-blue uppercase">Automatización Total</h2>
          <p className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Conectamos tu plataforma con tus herramientas favoritas
          </p>
          <p className="text-slate-400 text-md sm:text-lg font-light">
            No pierdas tiempo copiando datos de forma manual. Sincronizamos tu software a medida con las pasarelas, hojas de cálculo, calendarios y motores de Inteligencia Artificial líderes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="integrations-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4.5 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-electric-blue border-electric-blue text-white shadow-md shadow-electric-blue/10'
                  : 'bg-navy-card/40 border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="integrations-grid">
          {filteredIntegrations.map((item) => (
            <div
              key={item.id}
              className="bg-navy-card border border-slate-800/80 hover:border-slate-700/85 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group relative flex flex-col justify-between"
            >
              {/* Corner Glow effect */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-electric-blue/5 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Icon Frame */}
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-electric-blue/40 group-hover:bg-electric-blue/10 text-slate-300 group-hover:text-electric-cyan transition-all duration-300">
                    {getLogoIcon(item.logo, 'h-6 w-6')}
                  </div>
                  
                  {/* Category Pill */}
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getCategoryColor(item.category)}`}>
                    {item.category === 'Canal' && 'Canal de Venta'}
                    {item.category === 'Pagos' && 'Pasarela'}
                    {item.category === 'Datos' && 'Base de Datos'}
                    {item.category === 'Inteligencia' && 'Inteligencia Artificial'}
                    {item.category === 'Productividad' && 'Productividad'}
                  </span>
                </div>

                <div className="text-left space-y-1">
                  <h4 className="text-md font-bold text-white group-hover:text-electric-cyan transition-colors">{item.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>

              {/* Verified Checkbox */}
              <div className="pt-4 mt-4 border-t border-slate-800/40 flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 group-hover:text-slate-400 select-none">
                <CheckCircle2 className="h-3.5 w-3.5 text-electric-cyan" />
                <span>Integración nativa garantizada</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Quote */}
        <div className="mt-14 bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-violet-400 shrink-0" />
            <p className="text-xs text-slate-300 font-light">
              ¿Usas un software interno o un ERP específico? Desarrollamos la <strong>API o Webhook de conexión customizado</strong> a la medida de tu software empresarial.
            </p>
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById('cotizador');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-bold text-electric-cyan whitespace-nowrap hover:underline cursor-pointer"
          >
            Hablar con un ingeniero →
          </button>
        </div>

      </div>
    </section>
  );
}
