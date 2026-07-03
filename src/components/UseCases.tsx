import React, { useState } from 'react';
import { USE_CASE_TABS } from '../data';
import { 
  Utensils, 
  Calendar, 
  ShoppingBag, 
  Users, 
  Check, 
  ArrowRight, 
  Plus, 
  Minus, 
  MessageSquare,
  Sparkles,
  Award,
  DollarSign
} from 'lucide-react';

export default function UseCases() {
  const [activeTab, setActiveTab] = useState('restaurant');

  // Interactive Simulator States
  // 1. Restaurant
  const [burgerQty, setBurgerQty] = useState(1);
  const burgerPrice = 8.50;
  const [showOrderCode, setShowOrderCode] = useState(false);

  // 2. Booking
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Carlos Pineda');
  const [selectedDay, setSelectedDay] = useState('Martes 13');
  const [selectedHour, setSelectedHour] = useState('15:30');
  const [bookingStatus, setBookingStatus] = useState('idle'); // 'idle' | 'success'

  // 3. E-commerce
  const [selectedSize, setSelectedSize] = useState('M');
  const [purchaseStatus, setPurchaseStatus] = useState('idle'); // 'idle' | 'paying' | 'success'

  // 4. Lead Capturing
  const [funnelStep, setFunnelStep] = useState(1);
  const [projectBudget, setProjectBudget] = useState('');
  const [leadEmail, setLeadEmail] = useState('');

  const getTabIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className={className} />;
      case 'Calendar':
        return <Calendar className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'Users':
        return <Users className={className} />;
      default:
        return <ShoppingBag className={className} />;
    }
  };

  const handleResetSimulators = () => {
    setBurgerQty(1);
    setShowOrderCode(false);
    setBookingStatus('idle');
    setPurchaseStatus('idle');
    setFunnelStep(1);
    setProjectBudget('');
    setLeadEmail('');
  };

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    handleResetSimulators();
  };

  // Structured WhatsApp order string for the Restaurant Simulator
  const orderMessageText = `🍔 *PEDIDO NUEVO - BURGER STOP* 🍔
------------------------------------
*Cliente:* Karlos (Prueba de Demo)
*Detalle:*
- ${burgerQty}x Doble Cheddar Burger ($${burgerPrice.toFixed(2)} c/u)
*Total:* $${(burgerQty * burgerPrice).toFixed(2)} USD
*Entrega:* Retiro en tienda
------------------------------------
_Enviado automáticamente desde el Catálogo de PINEDA CODE_`;

  return (
    <section id="casos" className="py-24 bg-slate-950 relative border-t border-slate-900">
      {/* Glow */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-electric-blue/5 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-electric-blue uppercase">Casos de Éxito & Sectores</h2>
          <p className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Diseños optimizados para tu sector
          </p>
          <p className="text-slate-400 text-md sm:text-lg font-light">
            Modelamos la experiencia de usuario perfecta según el giro comercial de tu marca. Elige un sector e interactúa con el simulador real a la derecha.
          </p>
        </div>

        {/* Dynamic Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Tab selection */}
          <div className="lg:col-span-5 space-y-4" id="usecases-left-tabs">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Elige tu categoría de negocio</span>
            
            <div className="space-y-3">
              {USE_CASE_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`w-full p-4 rounded-2xl border text-left flex gap-4 items-center transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-navy-card border-electric-blue text-white shadow-xl shadow-electric-blue/5'
                        : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:bg-slate-900/40 hover:text-white hover:border-slate-800'
                    }`}
                  >
                    <div className={`p-3 rounded-xl transition-colors ${
                      isActive ? 'bg-electric-blue text-white' : 'bg-slate-900 text-slate-400'
                    }`}>
                      {getTabIcon(tab.icon, 'h-5 w-5')}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white font-display leading-tight">{tab.title}</h4>
                      <p className="text-xs text-slate-400 font-light mt-0.5">{tab.subtitle}</p>
                    </div>
                    {isActive && <div className="h-2 w-2 rounded-full bg-electric-cyan animate-pulse"></div>}
                  </button>
                );
              })}
            </div>

            {/* Description Card */}
            <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800/80 text-left mt-6">
              <h5 className="text-xs font-bold text-electric-cyan uppercase tracking-wider mb-2">¿Cómo ayudamos a este sector?</h5>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {USE_CASE_TABS.find(t => t.id === activeTab)?.description}
              </p>
            </div>
          </div>

          {/* Right: Actual working interactive simulators */}
          <div className="lg:col-span-7 flex justify-center" id="usecases-right-simulator">
            
            <div className="relative w-full max-w-md bg-navy-card rounded-3xl border border-slate-800/80 p-6 shadow-2xl flex flex-col justify-between min-h-[460px] overflow-hidden">
              
              {/* Highlight design */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-electric-blue/10 rounded-full blur-xl"></div>
              
              {/* Simulator Title Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4 select-none">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold">Simulador Interactivo en Vivo</span>
                </div>
                <button 
                  onClick={handleResetSimulators}
                  className="text-[9px] hover:text-white text-slate-500 font-bold font-mono tracking-tight uppercase"
                >
                  Restaurar Demo ↺
                </button>
              </div>

              {/* SIMULATOR: RESTAURANT */}
              {activeTab === 'restaurant' && (
                <div className="flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-display font-bold text-white">Burger Stop</h4>
                        <p className="text-xs text-slate-400">Pide por WhatsApp sin comisiones</p>
                      </div>
                      <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded-full">
                        Abierto
                      </span>
                    </div>

                    {/* Menu Item Box */}
                    <div className="bg-slate-950 p-4 rounded-2xl border border-slate-900 flex justify-between items-center gap-4">
                      <div className="flex-1 space-y-1">
                        <span className="text-[9px] uppercase font-bold text-orange-400">La más pedida 🔥</span>
                        <h5 className="text-sm font-bold text-white">Doble Cheddar Burger</h5>
                        <p className="text-[11px] text-slate-400">Doble carne, queso cheddar fundido, cebollas grilladas.</p>
                        <span className="text-sm font-mono font-extrabold text-electric-cyan block pt-1">$8.50 USD</span>
                      </div>
                      
                      {/* Counter */}
                      <div className="flex flex-col items-center gap-1 bg-slate-900 p-1.5 rounded-xl border border-slate-800 shrink-0">
                        <button 
                          onClick={() => setBurgerQty(Math.max(1, burgerQty - 1))}
                          className="p-1 hover:bg-slate-800 rounded text-slate-300"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-mono font-bold text-white">{burgerQty}</span>
                        <button 
                          onClick={() => setBurgerQty(burgerQty + 1)}
                          className="p-1 hover:bg-slate-800 rounded text-slate-300"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Order Button / Preview Message */}
                  <div className="space-y-3">
                    {showOrderCode ? (
                      <div className="space-y-2 animate-fade-in">
                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-900">
                          <span className="text-[8px] text-slate-500 block font-bold font-mono tracking-wider uppercase mb-1">Estructura del Mensaje que se envía a WhatsApp:</span>
                          <pre className="text-[9px] font-mono text-slate-300 leading-snug whitespace-pre-wrap">
                            {orderMessageText}
                          </pre>
                        </div>
                        <button 
                          onClick={() => setShowOrderCode(false)}
                          className="w-full bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs py-2 rounded-xl border border-slate-800 font-semibold"
                        >
                          Volver a editar pedido
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs px-2 select-none">
                          <span className="text-slate-400">Subtotal</span>
                          <span className="font-mono font-bold text-white">${(burgerQty * burgerPrice).toFixed(2)} USD</span>
                        </div>
                        <button
                          onClick={() => setShowOrderCode(true)}
                          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
                        >
                          <MessageSquare className="h-4 w-4" />
                          Generar Pedido de WhatsApp
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* SIMULATOR: BOOKING */}
              {activeTab === 'booking' && (
                <div className="flex-1 flex flex-col justify-between space-y-4 text-left">
                  {bookingStatus === 'idle' ? (
                    <>
                      <div className="space-y-3.5">
                        <div>
                          <h4 className="text-lg font-display font-bold text-white">Clínica Dental Pineda</h4>
                          <p className="text-xs text-slate-400 font-light">Agendamiento médico en un clic</p>
                        </div>

                        {/* Professional selector */}
                        <div className="space-y-1.5">
                          <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider block">1. Especialista</span>
                          <div className="grid grid-cols-2 gap-2">
                            {['Dr. Carlos Pineda', 'Dra. Sofía Rosales'].map((doc) => (
                              <button
                                key={doc}
                                onClick={() => setSelectedDoctor(doc)}
                                className={`p-2 rounded-xl border text-xs text-center font-semibold transition-all cursor-pointer ${
                                  selectedDoctor === doc
                                    ? 'bg-electric-blue/15 border-electric-blue text-white'
                                    : 'bg-slate-950/60 border-slate-900 text-slate-400'
                                }`}
                              >
                                {doc}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Day selector */}
                        <div className="space-y-1.5">
                          <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider block">2. Selecciona el Día</span>
                          <div className="grid grid-cols-3 gap-2">
                            {['Lunes 12', 'Martes 13', 'Miércoles 14'].map((day) => (
                              <button
                                key={day}
                                onClick={() => setSelectedDay(day)}
                                className={`p-2 rounded-xl border text-[10px] text-center font-bold transition-all cursor-pointer ${
                                  selectedDay === day
                                    ? 'bg-electric-blue/15 border-electric-blue text-white shadow'
                                    : 'bg-slate-950/60 border-slate-900 text-slate-400'
                                }`}
                              >
                                {day}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Hour selector */}
                        <div className="space-y-1.5">
                          <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider block">3. Turno Disponible</span>
                          <div className="grid grid-cols-3 gap-2">
                            {['09:00 AM', '15:30', '18:00 PM'].map((hr) => (
                              <button
                                key={hr}
                                onClick={() => setSelectedHour(hr)}
                                className={`p-1.5 rounded-lg border text-[10px] text-center font-mono font-bold transition-all cursor-pointer ${
                                  selectedHour === hr
                                    ? 'bg-electric-blue text-white border-electric-blue'
                                    : 'bg-slate-950/40 border-slate-900 text-slate-500 hover:text-slate-300'
                                }`}
                              >
                                {hr}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Confirm CTA */}
                      <button
                        onClick={() => setBookingStatus('success')}
                        className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-bold py-3.5 px-6 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-electric-blue/20 cursor-pointer"
                      >
                        Confirmar Reserva para {selectedDay}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4 animate-fade-in">
                      <div className="h-16 w-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl font-bold animate-bounce">
                        ✓
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-md font-bold text-white">¡Reserva Completada!</h4>
                        <p className="text-xs text-slate-400">
                          Tu cita con el <strong className="text-white">{selectedDoctor}</strong> para el <strong className="text-white">{selectedDay} a las {selectedHour}</strong> ha sido agendada.
                        </p>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 text-[10px] text-slate-400 leading-snug w-full">
                        💬 <strong className="text-emerald-400">Sincronización:</strong> Hemos bloqueado este slot en Google Calendar y enviado un recordatorio de confirmación por WhatsApp.
                      </div>
                      <button 
                        onClick={() => setBookingStatus('idle')}
                        className="text-xs text-electric-cyan font-bold hover:underline"
                      >
                        Agendar otra cita de prueba
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* SIMULATOR: E-COMMERCE */}
              {activeTab === 'ecommerce' && (
                <div className="flex-1 flex flex-col justify-between space-y-4 text-left">
                  {purchaseStatus === 'idle' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                        <div className="sm:col-span-4 h-24 bg-gradient-to-tr from-indigo-900 to-slate-950 rounded-2xl flex items-center justify-center border border-slate-800 text-3xl shrink-0">
                          👕
                        </div>
                        <div className="sm:col-span-8 space-y-1">
                          <span className="text-[9px] uppercase font-bold text-violet-400">Colección Limitada</span>
                          <h4 className="text-md font-bold text-white leading-tight">Oversized Cyberpunk Tee</h4>
                          <span className="text-md font-mono font-bold text-electric-cyan">$29.99 USD</span>
                        </div>
                      </div>

                      {/* Size selectors */}
                      <div className="space-y-2">
                        <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider block">Selecciona Talla</span>
                        <div className="flex gap-2.5">
                          {['S', 'M', 'L', 'XL'].map((sz) => (
                            <button
                              key={sz}
                              onClick={() => setSelectedSize(sz)}
                              className={`h-9 w-9 rounded-xl border flex items-center justify-center font-mono font-bold text-xs transition-all cursor-pointer ${
                                selectedSize === sz
                                  ? 'bg-electric-blue text-white border-electric-blue'
                                  : 'bg-slate-950 border-slate-900 text-slate-400'
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Delivery Form */}
                      <div className="space-y-2">
                        <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider block">Detalles de Entrega</span>
                        <input 
                          type="text" 
                          placeholder="Tu dirección de envío (ej. Av. Providencia 400)" 
                          disabled
                          className="w-full bg-slate-950 border border-slate-900 rounded-xl px-3 py-2 text-xs text-slate-300 placeholder-slate-600 focus:outline-none"
                          value="Calle de Prueba #452, Santiago de Chile"
                        />
                      </div>

                      {/* Buy Action */}
                      <button
                        onClick={() => {
                          setPurchaseStatus('paying');
                          setTimeout(() => {
                            setPurchaseStatus('success');
                          }, 1800);
                        }}
                        className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-bold py-3.5 px-6 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-electric-blue/20 cursor-pointer"
                      >
                        Comprar Talla ({selectedSize}) • $29.99 USD
                      </button>
                    </>
                  )}

                  {purchaseStatus === 'paying' && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4 animate-pulse">
                      <div className="h-10 w-10 rounded-full border-2 border-electric-blue border-t-transparent animate-spin"></div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Procesando Pago Seguro</h4>
                        <p className="text-[11px] text-slate-400 font-light mt-1">Conectando de forma encriptada con la pasarela de Stripe...</p>
                      </div>
                    </div>
                  )}

                  {purchaseStatus === 'success' && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4 animate-fade-in">
                      <div className="h-16 w-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl font-bold animate-bounce">
                        ✓
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-md font-bold text-white">¡Compra Exitosa!</h4>
                        <p className="text-xs text-slate-400">
                          Tu pedido de la camiseta en talla <strong className="text-white">{selectedSize}</strong> ha sido confirmado y cargado en el sistema de ventas.
                        </p>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 text-[10px] text-slate-400 leading-snug w-full">
                        💰 <strong className="text-emerald-400">Logística automatizada:</strong> Se ha generado un comprobante de pago Stripe y se ha enviado una solicitud de despacho instantánea a la bodega.
                      </div>
                      <button 
                        onClick={() => setPurchaseStatus('idle')}
                        className="text-xs text-electric-cyan font-bold hover:underline"
                      >
                        Hacer otra compra de prueba
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* SIMULATOR: LEAD CAPTURING */}
              {activeTab === 'leads' && (
                <div className="flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-display font-bold text-white">Pineda Consultores</h4>
                      <p className="text-xs text-slate-400">Cuestionarios interactivos de captación</p>
                    </div>

                    {funnelStep === 1 && (
                      <div className="space-y-4 animate-fade-in">
                        <p className="text-xs text-slate-300 font-light">
                          Pregunta de filtro: ¿Cuál es el rango de presupuesto de desarrollo que dispones para tu nuevo proyecto?
                        </p>
                        
                        <div className="space-y-2">
                          {[
                            'Menor de $1,000 USD',
                            'De $1,000 a $3,000 USD',
                            'Mayor de $3,000 USD'
                          ].map((option) => (
                            <button
                              key={option}
                              onClick={() => {
                                setProjectBudget(option);
                                setFunnelStep(2);
                              }}
                              className="w-full p-3 bg-slate-950 border border-slate-900 hover:border-slate-700 rounded-xl text-xs text-left font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {funnelStep === 2 && (
                      <div className="space-y-4 animate-fade-in">
                        <p className="text-xs text-slate-300 font-light">
                          Seleccionaste: <strong className="text-electric-cyan">{projectBudget}</strong>. <br />
                          Ingresa tu correo para recibir una propuesta formal adaptada a este rango de presupuesto:
                        </p>
                        
                        <div className="space-y-3">
                          <input 
                            type="email" 
                            placeholder="Tu correo electrónico (ej. nombre@empresa.com)" 
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-3 text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-electric-blue transition-colors"
                            value={leadEmail}
                            onChange={(e) => setLeadEmail(e.target.value)}
                          />
                          <button
                            onClick={() => {
                              if (leadEmail.trim() === '') {
                                alert('Por favor ingresa un correo de prueba.');
                                return;
                              }
                              setFunnelStep(3);
                            }}
                            className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-bold py-3 px-6 rounded-xl text-xs flex items-center justify-center gap-2"
                          >
                            Recibir Propuesta Personalizada
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => setFunnelStep(1)}
                          className="text-[10px] text-slate-500 font-bold hover:text-slate-300 block text-center"
                        >
                          ← Volver a cambiar presupuesto
                        </button>
                      </div>
                    )}

                    {funnelStep === 3 && (
                      <div className="space-y-4 text-center p-4 animate-fade-in">
                        <div className="h-14 w-14 rounded-full bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center text-electric-cyan text-xl font-bold mx-auto">
                          ✨
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-white">¡Prospecto Calificado!</h4>
                          <p className="text-xs text-slate-400">
                            Hemos registrado tu interés en el rango de <strong className="text-white">{projectBudget}</strong> y enviado una propuesta a <strong className="text-white">{leadEmail}</strong>.
                          </p>
                        </div>
                        <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-900 text-[9px] text-slate-400 leading-relaxed text-left">
                          📊 <strong className="text-electric-cyan">Eficiencia:</strong> El sistema de PINEDA CODE acaba de registrar este prospecto calificado en Google Sheets y alertó a tu asesor por WhatsApp con toda la información.
                        </div>
                        <button 
                          onClick={() => setFunnelStep(1)}
                          className="text-xs text-electric-cyan font-bold hover:underline"
                        >
                          Reiniciar formulario de prueba
                        </button>
                      </div>
                    )}

                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
