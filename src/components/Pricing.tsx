import React from 'react';
import { PRICING_PLANS } from '../data';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-navy-dark relative border-t border-slate-900">
      
      {/* Background radial soft light */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-electric-blue uppercase">Modelos de Inversión</h2>
          <p className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Tarifas transparentes adaptadas a tu escala
          </p>
          <p className="text-slate-400 text-md sm:text-lg font-light">
            En PINEDA CODE compras software propio, sin alquileres perpetuos ni comisiones sobre tus ventas. Elige el plan ideal para tu negocio y conviértete en dueño absoluto de tu tecnología.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="pricing-grid">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-navy-card border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group text-left ${
                plan.isPopular
                  ? 'border-electric-blue ring-2 ring-electric-blue/20 shadow-2xl scale-[1.02] lg:-translate-y-2'
                  : 'border-slate-800/80 hover:border-slate-700/80 shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-electric-blue to-blue-700 text-white font-extrabold text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg border border-electric-blue/30">
                  Recomendado ★
                </span>
              )}

              <div className="space-y-6">
                
                {/* Plan Metadata */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-display font-extrabold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-normal font-light">{plan.description}</p>
                </div>

                {/* Pricing Figures */}
                <div className="flex items-baseline gap-1 pt-2">
                  <span className="text-4xl font-mono font-extrabold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-xs text-slate-500 font-sans tracking-wide">/ {plan.period}</span>
                  )}
                </div>

                <div className="h-[1px] bg-slate-800/60"></div>

                {/* Features Checklist */}
                <ul className="space-y-3.5 flex-1" id={`pricing-bullets-${plan.id}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                      <div className="p-0.5 rounded-full bg-electric-blue/10 text-electric-cyan shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3px]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <a
                  href={`https://wa.me/56900000000?text=Hola%20Pineda%20Code!%20Me%20interesa%20contratar%20el%20*${encodeURIComponent(plan.name)}*%20de%20%24${encodeURIComponent(plan.price)}.%20%C2%BFCu%C3%A1les%20son%20los%20siguientes%20pasos%3F`}
                  target="_blank"
                  rel="noreferrer"
                  className={`block w-full py-3.5 px-6 rounded-2xl text-xs font-bold text-center transition-all cursor-pointer ${
                    plan.isPopular
                      ? 'bg-electric-blue hover:bg-electric-blue/90 text-white shadow-lg shadow-electric-blue/20'
                      : 'bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 hover:text-white'
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on perpetual costs */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 select-none" id="pricing-note">
          <Info className="h-4 w-4 text-electric-cyan" />
          <span>*Todos los precios corresponden a desarrollos finales llave en mano. No cobramos tarifas mensuales obligatorias de uso.</span>
        </div>

      </div>
    </section>
  );
}
