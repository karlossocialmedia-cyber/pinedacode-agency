import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Utensils, CheckCircle2, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export default function AdpiRest() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 antialiased flex flex-col">
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
              AD<span className="text-orange-600">PIEN</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-orange-50 text-orange-600 mb-6">
            <Utensils className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            AdpiRest - Restaurantes y Control de Cajas
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            La herramienta definitiva para restaurantes, cafés y bistrós. Comandera digital, mapa interactivo de mesas, y control absoluto de inventario y arqueo de cajas en tiempo real.
          </p>
        </div>

        {/* Feature Grid / Características */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-600" /> Características del Módulo B2B
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Comandera Digital & Cocina en Red</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Los garzones envían pedidos desde sus tablets directamente a los monitores o impresoras de cocina y barra, reduciendo la confusión de comensales.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Control de Mesas & Cuentas Divididas</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Visualización intuitiva del estado de las mesas (Libre, Ocupada, Esperando Cuenta) y la opción de dividir cuentas complejas con un toque.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Arqueo de Turnos y Multi-Caja</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Control ciego de cierres de caja por operario, reportando discrepancias de efectivo de manera automatizada.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Recetas & Descargo de Insumos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cada plato o bebida vendida descuenta automáticamente los ingredientes proporcionales del inventario maestro (carne, pan, licores).
              </p>
            </div>
          </div>
        </section>

        {/* B2B Benefits / Beneficios de Negocio */}
        <section className="mb-16 p-8 rounded-3xl bg-slate-50 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-orange-600" /> Beneficios para tu Empresa
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Carga de servicio más rápida</span>
                <span className="text-xs text-slate-600 leading-relaxed">Se reducen los tiempos de espera del comensal hasta en un 40% gracias a la comandera digital.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Disminución de mermas e "invitaciones"</span>
                <span className="text-xs text-slate-600 leading-relaxed">Cada trago o comida servida debe estar registrada previamente en el software antes de su entrega.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Cálculo real de rentabilidad</span>
                <span className="text-xs text-slate-600 leading-relaxed">Conoce cuáles son tus platillos estrella y tus márgenes reales descontando mermas del costo de recetas.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Seguridad financiera absoluta</span>
                <span className="text-xs text-slate-600 leading-relaxed">Reporte y trazabilidad de anulaciones de pedidos, descuentos y cortesías otorgadas.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-orange-600 text-white rounded-3xl p-8 md:p-12 shadow-xl shadow-orange-900/10">
          <h3 className="text-2xl font-bold mb-3">¿Listo para controlar la cocina y la caja?</h3>
          <p className="text-orange-100 text-sm md:text-base max-w-xl mx-auto mb-6">
            Impulsa el flujo de trabajo de tu restaurante y dile adiós a las comandas extraviadas. Solicita una demostración y cotización según tu número de mesas.
          </p>
          <a
            href="https://wa.me/56900000000?text=Hola%20ADPIEN!%20Me%20interesa%20el%20m%C3%B3dulo%20de%20Restaurantes%20y%20Control%20de%20Cajas.%20Quisiera%20agendar%20una%20demostraci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-700 font-bold px-6 py-3 rounded-full hover:scale-105 transition-all text-sm shadow-md"
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
