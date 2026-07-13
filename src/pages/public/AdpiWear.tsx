import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, CheckCircle2, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export default function AdpiWear() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 antialiased flex flex-col">
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
              AD<span className="text-rose-600">PIEN</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-rose-50 text-rose-600 mb-6">
            <ShoppingBag className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            AdpiWear - Boutiques Online & Moda
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Lleva tu marca de indumentaria y accesorios al siguiente nivel. Catálogo de moda interactivo, control de tallas y colores en tiempo real, pasarelas de pago y despacho automatizado.
          </p>
        </div>

        {/* Feature Grid / Características */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Zap className="h-5 w-5 text-rose-600" /> Características del Módulo B2B
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Selector Inteligente de Variantes</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Permite a tus compradoras seleccionar la combinación perfecta de Talla (S, M, L, XL), Color e incluso tipo de tela con actualización instantánea de stock disponible.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Pasarela de Pago Multi-Moneda</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recibe tarjetas de crédito locales e internacionales, transferencias y pagos en efectivo integrando pasarelas como Stripe, Mercado Pago o PayPal de forma transparente.
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Cupones de Descuento & Campañas</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Genera campañas de marketing temporales asociando cupones especiales para influencers o rebajas estacionales de inventario (p.ej. "CYBERWEAR").
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Automatización de Guías de Despacho</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Genera etiquetas de envío automáticamente asociadas a curriers locales (Chilexpress, Starken, Correo) agilizando tu centro de fulfillment de empaquetado.
              </p>
            </div>
          </div>
        </section>

        {/* B2B Benefits / Beneficios de Negocio */}
        <section className="mb-16 p-8 rounded-3xl bg-slate-50 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-rose-600" /> Beneficios para tu Empresa
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Menor tasa de devoluciones</span>
                <span className="text-xs text-slate-600 leading-relaxed">El selector preciso de variante y guías de tallas en PDF reduce compras erróneas del usuario final.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Campañas escalables</span>
                <span className="text-xs text-slate-600 leading-relaxed">Crea colecciones estacionales en minutos sin depender de agencias de desarrollo complejas.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Incremento del ticket promedio</span>
                <span className="text-xs text-slate-600 leading-relaxed">Secciones inteligentes de "Completa el look" que sugieren accesorios y prendas combinables al checkout.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-sm">Control de inventario integrado</span>
                <span className="text-xs text-slate-600 leading-relaxed">Evita la sobreventa de productos agotados controlando en línea las variantes de tu bodega.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-rose-600 text-white rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-900/10">
          <h3 className="text-2xl font-bold mb-3">¿Listo para escalar las ventas de tu Marca?</h3>
          <p className="text-rose-100 text-sm md:text-base max-w-xl mx-auto mb-6">
            Escríbenos y nuestro equipo creará un catálogo interactivo premium, integrado y listo para vender tus colecciones de moda.
          </p>
          <a
            href="https://wa.me/56900000000?text=Hola%20ADPIEN!%20Me%20interesa%20el%20m%C3%B3dulo%20de%20Boutiques%20y%20Tiendas%20de%20Ropa.%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-rose-700 font-bold px-6 py-3 rounded-full hover:scale-105 transition-all text-sm shadow-md"
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
