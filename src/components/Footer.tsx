import React, { useState } from 'react';
import { Github, Linkedin, MessageSquare, Mail, MapPin, Send } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900" id="footer-top-grid">
          
          {/* Column 1: Brand details (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('inicio')}>
              <img
                src="/image_931db897_(1)-Photoroom.png"
                alt="ADPIEN Logo"
                className="object-contain"
                style={{ width: '40px', height: '40px' }}
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                AD<span className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">PIEN</span>
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

          {/* Contenedor de las tres secciones */}
          <div 
            className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-[1fr_1fr_1.5fr]" 
            style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1.5fr',
              gap: '40px',
              width: '100%',
              maxWidth: '1200px'
            }}
          >
            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase text-white tracking-wider">Secciones</h4>
              <ul className="space-y-2.5 text-xs text-slate-400 font-light">
                <li><button onClick={() => onNavigate('inicio')} className="hover:text-white transition-colors cursor-pointer">Inicio</button></li>
                <li><button onClick={() => onNavigate('servicios')} className="hover:text-white transition-colors cursor-pointer">Servicios</button></li>
                <li><button onClick={() => onNavigate('constructor')} className="hover:text-white transition-colors cursor-pointer">Constructor en Vivo</button></li>
                <li><button onClick={() => onNavigate('precios')} className="hover:text-white transition-colors cursor-pointer">Precios & Planes</button></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase text-white tracking-wider">Contacto</h4>
              <ul className="space-y-3.5 text-xs text-slate-400 font-light">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-electric-cyan shrink-0" />
                  <a href="mailto:soporte@pinedacode.com" className="hover:text-white transition-colors">soporte@adpien.com</a>
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

            {/* Column 4: Newsletter Subscription */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase text-white tracking-wider">Boletín Tecnológico</h4>
              <p 
                className="text-xs text-slate-400 font-light"
                style={{ lineHeight: '1.6', letterSpacing: '0.5px', marginTop: '16px' }}
              >
                Recibe consejos semanales sobre cómo automatizar tus ventas y mejorar el rendimiento de tus canales digitales.
              </p>

              <div className="w-full mt-4 block">
                {subbed ? (
                  <div className="p-3 bg-electric-blue/10 border border-electric-blue/30 rounded-xl text-center text-[10px] text-electric-cyan font-semibold animate-fade-in">
                    ¡Gracias por suscribirte! Recibirás noticias pronto.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl w-full">
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

          </div>
        </div>

        {/* Fila de Redes Sociales */}
        <div className="footer-socials" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '20px', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <a 
            href="https://www.instagram.com/pinedacode/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/50 text-slate-400 hover:text-[#38BDF8] hover:border-[#38BDF8]/40 hover:-translate-y-[3px] opacity-60 hover:opacity-100 transition-all duration-300"
            style={{ transition: 'all 0.3s ease' }}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/pinedacode/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/50 text-slate-400 hover:text-[#38BDF8] hover:border-[#38BDF8]/40 hover:-translate-y-[3px] opacity-60 hover:opacity-100 transition-all duration-300"
            style={{ transition: 'all 0.3s ease' }}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61591552985782" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/50 text-slate-400 hover:text-[#38BDF8] hover:border-[#38BDF8]/40 hover:-translate-y-[3px] opacity-60 hover:opacity-100 transition-all duration-300"
            style={{ transition: 'all 0.3s ease' }}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
            </svg>
          </a>
          <a 
            href="https://www.tiktok.com/@pinedacode" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/50 text-slate-400 hover:text-[#38BDF8] hover:border-[#38BDF8]/40 hover:-translate-y-[3px] opacity-60 hover:opacity-100 transition-all duration-300"
            style={{ transition: 'all 0.3s ease' }}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.94 1.18 2.27 2 3.73 2.37v3.9c-1.89-.09-3.73-.89-5.11-2.19-.18-.17-.35-.35-.51-.54v7.71c.1 2.38-1.07 4.75-3.13 5.96-2.19 1.28-5.08 1.23-7.21-.14-2.11-1.36-3.21-4-2.73-6.49.43-2.22 2.24-4.09 4.47-4.52 1.45-.28 2.97.11 4.1.1v3.91c-1.05-.33-2.23-.08-3.04.7-.84.81-1.09 2.1-1.12 3.23-.02 1.2.5 2.4 1.46 3.12 1 .75 2.41.87 3.51.27 1-.55 1.62-1.63 1.62-2.78V.02z"/>
            </svg>
          </a>
        </div>

        {/* Footer Bottom (Copyrights & Legals) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[10px] sm:text-xs">
          <span>&copy; {new Date().getFullYear()} ADPIEN. Todos los derechos reservados.</span>
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
