import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-slate-950 relative border-t border-slate-900">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-electric-blue uppercase">Clientes Satisfechos</h2>
          <p className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Casos reales de transformación digital
          </p>
          <p className="text-slate-400 text-md sm:text-lg font-light">
            Descubre cómo empresas locales e internacionales han automatizado sus operaciones cotidianas y maximizado su rentabilidad de la mano de PINEDA CODE.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-navy-card border border-slate-800/80 hover:border-slate-700/80 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between group"
            >
              {/* Quote bubble absolute */}
              <div className="absolute top-6 right-6 text-slate-800 group-hover:text-electric-blue/10 transition-colors duration-300 pointer-events-none">
                <MessageSquareQuote className="h-10 w-10 stroke-[1.5px]" />
              </div>

              <div className="space-y-6 text-left">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-sm leading-relaxed font-light italic">
                  &quot;{test.text}&quot;
                </p>
              </div>

              {/* Client Info and Avatar */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-800/60 text-left">
                <img
                  src={test.image}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="h-11 w-11 rounded-full object-cover border border-slate-800 bg-slate-900 shadow"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-display leading-tight">{test.name}</h4>
                  <p className="text-xs text-slate-400 font-light mt-0.5">{test.role}</p>
                  <span className="text-[10px] font-bold text-electric-cyan">{test.company}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4 pt-1">
                {test.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
