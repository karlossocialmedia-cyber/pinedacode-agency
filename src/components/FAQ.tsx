import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, MessageSquareCode } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="preguntas" className="py-24 bg-slate-950 relative border-t border-slate-900">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-electric-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-electric-blue uppercase">Resolvamos tus dudas</h2>
          <p className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Preguntas Frecuentes
          </p>
          <p className="text-slate-400 text-md sm:text-lg font-light">
            Todo lo que necesitas saber sobre el desarrollo de software a medida, flujos con WhatsApp y nuestra metodología de trabajo en PINEDA CODE.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden text-left ${
                  isOpen 
                    ? 'bg-navy-card border-electric-blue shadow-lg shadow-electric-blue/5' 
                    : 'bg-navy-card/40 border-slate-900 hover:border-slate-800'
                }`}
              >
                {/* Trigger head */}
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-white text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 text-slate-400 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-electric-blue text-white border-electric-blue' : ''
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated Body */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] border-t border-slate-900' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 sm:p-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live consultation widget */}
        <div className="mt-14 bg-gradient-to-r from-electric-blue/10 to-blue-900/10 border border-electric-blue/20 p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-6 text-left shadow-lg">
          <div className="space-y-2">
            <h4 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <MessageSquareCode className="h-5 w-5 text-electric-cyan" /> ¿Aún tienes preguntas particulares?
            </h4>
            <p className="text-xs text-slate-300 font-light max-w-lg">
              Conversa directamente con nuestro equipo de ingenieros fundadores de PINEDA CODE. Te asesoramos sin ningún tipo de compromiso de compra.
            </p>
          </div>
          <a
            href="https://wa.me/56900000000?text=Hola%20Pineda%20Code!%20He%20visto%20las%20Preguntas%20Frecuentes%20en%20su%20web%20y%20me%20quedaron%20algunas%20dudas%20que%20quisiera%20consultar%20con%20un%20ingeniero."
            target="_blank"
            rel="noreferrer"
            className="bg-electric-blue hover:bg-electric-blue/90 text-white font-bold py-3.5 px-6 rounded-2xl text-xs whitespace-nowrap shadow-md shadow-electric-blue/20 cursor-pointer text-center"
          >
            Chatear con un Ingeniero
          </a>
        </div>

      </div>
    </section>
  );
}
