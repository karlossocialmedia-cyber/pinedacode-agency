import React from 'react';
import { SERVICES } from '../data';
import { Laptop, ShoppingBag, Smartphone, Sparkles, Check } from 'lucide-react';

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="h-6 w-6 text-electric-blue" />;
      case 'ShoppingBag':
        return <ShoppingBag className="h-6 w-6 text-emerald-400" />;
      case 'Smartphone':
        return <Smartphone className="h-6 w-6 text-electric-cyan" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-violet-400" />;
      default:
        return <Laptop className="h-6 w-6 text-electric-blue" />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-slate-950 relative border-t border-slate-900">
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-electric-blue/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-electric-blue uppercase">Nuestras Soluciones</h2>
          <p className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            ¿Qué desarrollamos para ti?
          </p>
          <p className="text-slate-400 text-md sm:text-lg font-light">
            No adaptamos tu negocio a un software prefabricado. Creamos la herramienta tecnológica exacta que necesitas, optimizada para convertir y escalar sin límites.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-navy-card border border-slate-800/85 hover:border-slate-700/80 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-electric-blue/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-6">
                {/* Icon & Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:bg-electric-blue/15 group-hover:border-electric-blue/40 transition-colors duration-300">
                    {getIcon(srv.icon)}
                  </div>
                  {srv.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-cyan">
                      {srv.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-extrabold text-white group-hover:text-electric-cyan transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>

                {/* Features Bullets */}
                <ul className="space-y-2.5 pt-2" id={`services-bullets-${srv.id}`}>
                  {srv.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="h-4 w-4 text-electric-cyan shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Indicator */}
              <div className="pt-6 mt-6 border-t border-slate-800/50 flex items-center justify-between text-xs font-bold text-electric-cyan group-hover:text-white transition-colors">
                <span>Solicitar detalles del servicio</span>
                <div className="h-7 w-7 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 group-hover:bg-electric-blue group-hover:text-white transition-all duration-300">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
