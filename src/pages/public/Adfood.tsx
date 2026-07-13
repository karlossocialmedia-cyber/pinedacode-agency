import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Flame, CheckCircle2, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export default function Adfood() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-100 antialiased flex flex-col">
      {/* Top Bar Navigation */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Volver a Inicio
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg tracking-tight text-slate-900">
              AD<span className="text-red-600">PIEN</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-red-50 text-red-600 mb-6">
            <Flame className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Adfood - Fast Food & Delivery Express
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Tu propio ecosistema de pedidos de comida rápida para delivery o retiro local. Vende directamente en línea, sin comisiones de aplicaciones intermediarias abusivas y fideliza a tu comunidad.
          </p>
        </div>

        {/* Feature Grid / Características */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Zap className="h-5 w-5 text-red-600" /> Características del Módulo B2B
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Menú Dinámico de Alta Conversión</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Estructurado con modificadores y agregados opcionales u obligatorios (p.ej. papas extra, salsa, término de cocción) que aumentan el ticket de compra.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Despacho por Google Maps</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cálculo de costos de envío exactos basados en la geolocalización o en radios de kilómetros personalizados en tiempo real.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Pedidos Estructurados Directo a WhatsApp</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                El pedido sale formateado y limpio con toda la información (items, total, dirección, método de pago, cambio si paga con efectivo) directo a tu celular.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Horarios de Atención & Control de Cocina</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Abre y cierra tu tienda online de forma automática o manual, y define tiempos de entrega estimados dinámicos según saturación de cocina.
              </p>
            </div>
          </div>
        </section>

        {/* B2B Benefits / Beneficios de Negocio */}
        <section className="mb-16 p-8 rounded-3xl bg-slate-50 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-red-600" /> Beneficios para tu Empresa
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Incremento del margen de ganancia</span>
                <span className="text-xs text-slate-600 leading-relaxed">Sálvate de perder del 15% al 30% de tus ingresos que cobran las apps de delivery tradicionales.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Dueño absoluto de tus datos</span>
                <span className="text-xs text-slate-600 leading-relaxed">Obtén la base de datos de números telefónicos de tus clientes para campañas de marketing en fechas festivas.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Menos errores de comunicación</span>
                <span className="text-xs text-slate-600 leading-relaxed">Se elimina la toma de pedidos telefónica manual donde es fácil anotar mal una dirección o un ingrediente.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Incremento de ticket promedio</span>
                <span className="text-xs text-slate-600 leading-relaxed">Sugerencias cruzadas automáticas al añadir un producto (p.ej. "¿Deseas agregar bebida y agrandar papas?").</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-red-600 text-white rounded-3xl p-8 md:p-12 shadow-xl shadow-red-900/10">
          <h3 className="text-2xl font-bold mb-3">¿Listo para potenciar tu Delivery Express?</h3>
          <p className="text-red-100 text-sm md:text-base max-w-xl mx-auto mb-6">
            Duplica tus pedidos canalizando tu tráfico de Instagram y Facebook directamente a tu tienda digital corporativa.
          </p>
          <a
            href="https://wa.me/56900000000?text=Hola%20ADPIEN!%20Me%20interesa%20el%20m%C3%B3dulo%20de%20Fast%20Food%20y%20Delivery%20Express.%20Quisiera%20saber%20m%C3%A1s."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-red-700 font-bold px-6 py-3 rounded-full hover:scale-105 transition-all text-sm shadow-md"
          >
            <MessageSquare className="h-4 w-4" /> Conversar por WhatsApp
          </a>
        </section>
      </main>

      {/* Footer minimalista */}
      <footer className="border-t border-slate-100 py-6 bg-slate-50 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} ADPIEN. Todos los derechos reservados.
      </footer>
    </div>
  );
}
