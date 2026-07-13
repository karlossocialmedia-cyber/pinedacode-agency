import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, CheckCircle2, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export default function AdsPienImprenta() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 antialiased flex flex-col">
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
              AD<span className="text-purple-600">PIEN</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-purple-50 text-purple-600 mb-6">
            <Printer className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            AdsPien Imprenta & Publicidad
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Optimiza la cotización, recepción y producción de material publicitario, gigantografías, folletería y merchandising corporativo de forma automatizada y sin fricciones.
          </p>
        </div>

        {/* Feature Grid / Características */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-600" /> Características del Módulo B2B
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Cotizador Automático de M²</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Permite calcular el presupuesto exacto según medidas personalizadas, materiales elegidos, tintas y acabados especiales al instante.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Carga de Diseños en Alta Calidad</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Área dedicada para que el cliente suba sus archivos vectoriales (PDF, AI, PSD) con previsualización inteligente y verificación de formato.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Gestión de Estados de Producción</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Control completo de las etapas: "En Cola", "Impresión", "Terminados" y "Listo para Despacho", con notificaciones automáticas al usuario.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Pedidos de Repetición Rápidos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Historial clínico de solicitudes que permite a tus clientes corporativos reordenar folletería o tarjetas con un solo clic.
              </p>
            </div>
          </div>
        </section>

        {/* B2B Benefits / Beneficios de Negocio */}
        <section className="mb-16 p-8 rounded-3xl bg-slate-50 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-purple-600" /> Beneficios para tu Empresa
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Ahorro del 80% de tiempo</span>
                <span className="text-xs text-slate-600 leading-relaxed">Elimina las llamadas y correos interminables para realizar presupuestos manuales.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Precisión quirúrgica en costos</span>
                <span className="text-xs text-slate-600 leading-relaxed">Sincroniza tus costos base y evita errores de cálculo que afecten tu rentabilidad.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Fidelización de cuentas</span>
                <span className="text-xs text-slate-600 leading-relaxed">Ofrece un panel autogestionable que convertirá a tu imprenta en el proveedor preferido.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Control de entregas blindado</span>
                <span className="text-xs text-slate-600 leading-relaxed">Visualiza la carga de trabajo de tus plóters y prensas para optimizar tus despachos.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-xl shadow-purple-900/10">
          <h3 className="text-2xl font-bold mb-3">¿Listo para modernizar tu imprenta?</h3>
          <p className="text-purple-100 text-sm md:text-base max-w-xl mx-auto mb-6">
            Escríbenos para agendar una demostración en vivo con datos reales de tu taller y descubre el retorno de inversión inmediato.
          </p>
          <a
            href="https://wa.me/56900000000?text=Hola%20ADPIEN!%20Me%20interesa%20el%20m%C3%B3dulo%20de%20Imprenta%20y%20Publicidad.%20Quisiera%20solicitar%20una%20demostraci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-6 py-3 rounded-full hover:scale-105 transition-all text-sm shadow-md"
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
