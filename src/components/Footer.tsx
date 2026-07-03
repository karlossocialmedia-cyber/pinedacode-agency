import React, { useState } from 'react';
import { Code2, Github, Linkedin, MessageSquare, Mail, MapPin, Send } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [subbed, setSubbed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubbed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#050A18] border-t border-slate-900 pt-20 pb-8 relative overflow-hidden text-left select-none">
      {/* Footer background glows */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-900" id="footer-top-grid">
          
          {/* Column 1: Brand details (4 Columns) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('inicio')}>
              <div className="bg-electric-blue p-2 rounded-lg text-white shadow shadow-electric-blue/30">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                PINEDA<span className="text-electric-blue">CODE</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Llevamos tu negocio al siguiente nivel con desarrollos de software a medida de alto impacto visual y operacional. Despídete de las comisiones por venta.
            </p>

            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-8 w-8 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-electric-blue transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="h-8 w-8 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-electric-blue transition-all">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 Columns) */}
          <div className="md:col-span-2.5 space-y-4">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">Secciones</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li><button onClick={() => onNavigate('inicio')} className="hover:text-white transition-colors cursor-pointer">Inicio</button></li>
              <li><button onClick={() => onNavigate('servicios')} className="hover:text-white transition-colors cursor-pointer">Servicios</button></li>
              <li><button onClick={() => onNavigate('constructor')} className="hover:text-white transition-colors cursor-pointer">Constructor en Vivo</button></li>
              <li><button onClick={() => onNavigate('casos')} className="hover:text-white transition-colors cursor-pointer">Casos de Uso</button></li>
              <li><button onClick={() => onNavigate('cotizador')} className="hover:text-white transition-colors cursor-pointer">Cotizador Inteligente</button></li>
              <li><button onClick={() => onNavigate('precios')} className="hover:text-white transition-colors cursor-pointer">Precios & Planes</button></li>
            </ul>
          </div>

          {/* Column 3: Contact Info (2.5 Columns) */}
          <div className="md:col-span-2.5 space-y-4">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">Contacto</h4>
            <ul className="space-y-3.5 text-xs text-slate-400 font-light">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-electric-cyan shrink-0" />
                <a href="mailto:soporte@pinedacode.com" className="hover:text-white transition-colors">soporte@pinedacode.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/56900000000" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp Business</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-400 shrink-0" />
                <span>Providencia, Chile & Latam</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription (3 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">Boletín Tecnológico</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Recibe consejos semanales sobre cómo automatizar tus ventas y mejorar el rendimiento de tus canales digitales.
            </p>

            {subbed ? (
              <div className="p-3 bg-electric-blue/10 border border-electric-blue/30 rounded-xl text-center text-[10px] text-electric-cyan font-semibold animate-fade-in">
                ¡Gracias por suscribirte! Recibirás noticias pronto.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl">
                <input
                  type="email"
                  required
                  placeholder="Tu correo"
                  className="bg-transparent text-xs text-slate-300 placeholder-slate-600 px-3.5 py-2 w-full focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-electric-blue hover:bg-electric-blue/90 p-2 rounded-lg text-white transition-all cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="h-3 w-3" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom (Copyrights & Legals) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[10px] sm:text-xs">
          <span>&copy; {new Date().getFullYear()} PINEDA CODE. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a href="#privacidad" className="hover:text-slate-400 transition-colors">Política de Privacidad</a>
            <span>•</span>
            <a href="#terminos" className="hover:text-slate-400 transition-colors">Términos de Servicio</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
