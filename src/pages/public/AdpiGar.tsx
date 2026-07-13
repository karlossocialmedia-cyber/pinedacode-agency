import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Car, CheckCircle2, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export default function AdpiGar() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 antialiased flex flex-col">
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
              AD<span className="text-emerald-600">PIEN</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
            <Car className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            AdpiGar - Talleres Mecánicos y Automotriz
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Sistematiza el ingreso de vehículos, historiales de mantención, presupuestos de repuestos y asignación de mecánicos con un CRM y panel interactivo de alto desempeño.
          </p>
        </div>

        {/* Feature Grid / Características */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Zap className="h-5 w-5 text-emerald-600" /> Características del Módulo B2B
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Ficha Clínica Digital de Vehículos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Registro completo de marca, modelo, patente, kilometraje e historial de reparaciones y diagnósticos anteriores con un solo escaneo de placa.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Presupuestos de Repuestos e Insumos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cotiza piezas, lubricantes y mano de obra de forma transparente y envía el presupuesto directo para aprobación del cliente vía web.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Asignación de Bahías & Mecánicos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Organiza el flujo de trabajo interno en tu taller: visualiza qué mecánicos están libres y qué elevador o fosa tiene un auto en espera.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Reporte Fotográfico de Evidencia</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sube fotos de piezas desgastadas para que el cliente corporativo o particular entienda exactamente el motivo de la sustitución y apruebe en línea.
              </p>
            </div>
          </div>
        </section>

        {/* B2B Benefits / Beneficios de Negocio */}
        <section className="mb-16 p-8 rounded-3xl bg-slate-50 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-600" /> Beneficios para tu Empresa
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Confianza y transparencia de élite</span>
                <span className="text-xs text-slate-600 leading-relaxed">La visualización de evidencia fotográfica elimina controversias con clientes y aumenta cierres de presupuestos.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Historial indestructible</span>
                <span className="text-xs text-slate-600 leading-relaxed">Conserva de forma segura todos los trabajos realizados a flotas vehiculares corporativas para auditoría B2B.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Facturación precisa y sin mermas</span>
                <span className="text-xs text-slate-600 leading-relaxed">Cada perno, arandela o galón de aceite usado queda asociado inequívocamente al ticket del vehículo.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Optimización de mano de obra</span>
                <span className="text-xs text-slate-600 leading-relaxed">Mide el tiempo promedio empleado por tus mecánicos para diagnosticar y estandarizar costos de horas taller.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-emerald-600 text-white rounded-3xl p-8 md:p-12 shadow-xl shadow-emerald-900/10">
          <h3 className="text-2xl font-bold mb-3">¿Listo para sistematizar tu Taller Automotriz?</h3>
          <p className="text-emerald-100 text-sm md:text-base max-w-xl mx-auto mb-6">
            Eleva el nivel de profesionalismo de tu negocio. Ofrece reportes digitales profesionales a tus clientes con AdpiGar.
          </p>
          <a
            href="https://wa.me/56900000000?text=Hola%20ADPIEN!%20Me%20interesa%20el%20m%C3%B3dulo%20de%20Talleres%20Mec%C3%A1nicos%20y%20Automotriz.%20Quisiera%20solicitar%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:scale-105 transition-all text-sm shadow-md"
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
