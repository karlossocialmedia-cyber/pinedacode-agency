import { 
  AppTemplate, 
  FeatureItem, 
  ServiceCard, 
  UseCaseTab, 
  Integration, 
  Testimonial, 
  PricingPlan, 
  FAQItem 
} from './types';

export const APP_TEMPLATES: AppTemplate[] = [
  {
    id: 'catalog',
    name: 'Catálogo Digital',
    icon: 'ShoppingBag',
    title: 'Gourmet Express',
    subtitle: 'Menú digital y pedidos directos',
    color: 'from-orange-500 to-red-600',
    features: ['Categorías organizadas', 'Carrito de compras intuitivo', 'Pedidos directo a WhatsApp', 'Control de stock básico'],
    mockupType: 'catalog'
  },
  {
    id: 'booking',
    name: 'Agendamiento de Citas',
    icon: 'Calendar',
    title: 'Barbería Eléctrica',
    subtitle: 'Reserva tu espacio en segundos',
    color: 'from-blue-600 to-indigo-800',
    features: ['Calendario de slots interactivo', 'Elección de especialista', 'Recordatorio por SMS/WhatsApp', 'Seña de pago integrada'],
    mockupType: 'booking'
  },
  {
    id: 'dashboard',
    name: 'Panel Administrativo (CRM)',
    icon: 'LayoutDashboard',
    title: 'Pineda Analytics',
    subtitle: 'Control total de tu facturación',
    color: 'from-emerald-600 to-teal-800',
    features: ['Métricas de ventas en tiempo real', 'Gestión de clientes y leads', 'Exportación a Google Sheets', 'Gráficos interactivos en D3'],
    mockupType: 'dashboard'
  },
  {
    id: 'ai',
    name: 'Asistente IA Integrado',
    icon: 'Sparkles',
    title: 'Pineda AI Butler',
    subtitle: 'Soporte inteligente 24/7',
    color: 'from-violet-600 to-fuchsia-800',
    features: ['Respuestas instantáneas con Gemini', 'Generación de sugerencias', 'Atención al cliente multilingüe', 'Conexión con base de datos'],
    mockupType: 'ai'
  }
];

export const BUILDER_FEATURES: FeatureItem[] = [
  {
    id: 'database',
    name: 'Base de Datos de Clientes',
    description: 'Guarda usuarios, historial y preferencias de forma segura.',
    category: 'Infraestructura',
    cost: 450,
    timeDays: 4,
    icon: 'Database'
  },
  {
    id: 'shopping_cart',
    name: 'Carrito de Compras y Catálogo',
    description: 'Permite seleccionar múltiples productos/servicios con variantes.',
    category: 'E-commerce',
    cost: 350,
    timeDays: 3,
    icon: 'ShoppingCart'
  },
  {
    id: 'online_payment',
    name: 'Pagos Seguros (Stripe/PayPal)',
    description: 'Pasarela de pagos internacional para tarjetas de crédito y débito.',
    category: 'E-commerce',
    cost: 500,
    timeDays: 4,
    icon: 'CreditCard'
  },
  {
    id: 'gemini_ai',
    name: 'Inteligencia Artificial (Gemini)',
    description: 'Chatbot inteligente de recomendación y asistencia automatizada.',
    category: 'Innovación',
    cost: 650,
    timeDays: 5,
    icon: 'Sparkles'
  },
  {
    id: 'whatsapp_push',
    name: 'Alertas y Chat de WhatsApp',
    description: 'Notificaciones automáticas y envío de resúmenes de pedidos directo al chat.',
    category: 'Canal de Venta',
    cost: 300,
    timeDays: 2,
    icon: 'MessageSquareText'
  },
  {
    id: 'geolocation',
    name: 'Mapas e Indicaciones de Entrega',
    description: 'Geolocalización en tiempo real para envíos con Google Maps.',
    category: 'Logística',
    cost: 400,
    timeDays: 3,
    icon: 'MapPin'
  }
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'web-apps',
    title: 'Aplicaciones Web & SaaS',
    description: 'Desarrollamos plataformas web de alto rendimiento, portales internos, CRMs y sistemas de gestión escalables con arquitecturas modernas.',
    icon: 'Laptop',
    badge: 'Popular',
    bullets: [
      'Frontend reactivo con React y Vite',
      'Panel de control (CMS / Dashboard)',
      'Arquitectura en la nube ultrarrápida',
      'Optimización SEO y carga en <1s'
    ]
  },
  {
    id: 'e-commerce-wa',
    title: 'E-commerce & Catálogos WhatsApp',
    description: 'Inspirado en el modelo de Whataform. Creamos catálogos digitales interactivos y dinámicos que envían pedidos estructurados directamente al WhatsApp de tu equipo.',
    icon: 'ShoppingBag',
    badge: 'Alta Conversión',
    bullets: [
      'Sin comisiones ocultas por venta',
      'Configuración de pasarelas de pago',
      'Carga de productos y variantes ilimitados',
      'Panel de analíticas integrado'
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Aplicaciones Móviles a Medida',
    description: 'Llevamos tu marca a los bolsillos de tus clientes. Diseñamos e implementamos aplicaciones móviles nativas o híbridas de alto impacto visual.',
    icon: 'Smartphone',
    bullets: [
      'Disponibles en iOS App Store y Android Play Store',
      'Notificaciones push personalizadas',
      'Modo offline y sincronización inteligente',
      'Acceso a cámara, GPS y biometría'
    ]
  },
  {
    id: 'ai-automation',
    title: 'Inteligencia Artificial y Automatización',
    description: 'Optimizamos tus procesos de negocio integrando Gemini AI. Automatizamos la atención, catalogación y reporte de leads sin intervención humana.',
    icon: 'Sparkles',
    badge: 'Futurista',
    bullets: [
      'Agentes inteligentes y chatbots entrenados',
      'Sincronización instantánea con Google Sheets',
      'Automatización de correos y WhatsApp Masivos',
      'Análisis predictivo de tus ventas'
    ]
  }
];

export const USE_CASE_TABS: UseCaseTab[] = [
  {
    id: 'restaurant',
    title: 'Restauración',
    icon: 'Utensils',
    subtitle: 'Menú Digital Autogestionable',
    description: 'Permite a tus clientes escanear un código QR en la mesa o acceder desde tus redes sociales, seleccionar sus platillos favoritos con agregados, calcular el costo de envío automáticamente y enviar el pedido estructurado directamente a la cocina o barra vía WhatsApp.',
    mockTitle: 'Burger Stop',
    mockSubtitle: 'Delivery & Retiro'
  },
  {
    id: 'booking',
    title: 'Reservaciones',
    icon: 'Calendar',
    subtitle: 'Agendamiento y Señal de Pago',
    description: 'Ideal para clínicas médicas, estéticas, barberías o consultores independientes. Tus clientes eligen la fecha, la hora, el servicio específico y el profesional preferido de tu staff. Pueden realizar un pago parcial para asegurar la reserva y recibir recordatorios automáticos.',
    mockTitle: 'Clínica Dental Pineda',
    mockSubtitle: 'Agendamiento Web'
  },
  {
    id: 'ecommerce',
    title: 'Tiendas E-commerce',
    icon: 'ShoppingBag',
    subtitle: 'Venta Directa sin Fricciones',
    description: 'Una experiencia de compra simplificada en un solo clic. Ideal para marcas de ropa, repostería o tecnología que quieren vender sin obligar al usuario a crearse complejas cuentas. El cliente llena su carrito, ingresa su dirección de envío, paga con tarjeta de forma segura y confirma su orden.',
    mockTitle: 'Vibe Streetwear',
    mockSubtitle: 'Tienda Oficial'
  },
  {
    id: 'leads',
    title: 'Servicios & Consultoría',
    icon: 'Users',
    subtitle: 'Captación Calificada de Clientes',
    description: 'Reemplaza los aburridos formularios de contacto por cuestionarios dinámicos y lúdicos que filtran las necesidades de tus clientes. Obtén toda la información estructurada que tu equipo de ventas necesita para preparar una propuesta comercial perfecta antes de contactarlos.',
    mockTitle: 'Pineda Consultores',
    mockSubtitle: 'Asesorías Financieras'
  }
];

export const INTEGRATIONS: Integration[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    description: 'Recibe resúmenes, alertas y órdenes directas con formato estructurado.',
    logo: 'MessageSquareCode',
    category: 'Canal'
  },
  {
    id: 'stripe',
    name: 'Stripe Payments',
    description: 'Procesa tarjetas de crédito/débito globales de manera segura con 3D Secure.',
    logo: 'CreditCard',
    category: 'Pagos'
  },
  {
    id: 'sheets',
    name: 'Google Sheets',
    description: 'Guarda automáticamente cada pedido o cotización en una hoja de cálculo.',
    logo: 'FileSpreadsheet',
    category: 'Datos'
  },
  {
    id: 'gemini',
    name: 'Gemini AI Engine',
    description: 'Inteligencia artificial que auto-clasifica consultas e interactúa con clientes.',
    logo: 'Cpu',
    category: 'Inteligencia'
  },
  {
    id: 'paypal',
    name: 'PayPal Checkout',
    description: 'Agrega un método de pago rápido respaldado por millones de usuarios.',
    logo: 'Wallet',
    category: 'Pagos'
  },
  {
    id: 'calendar',
    name: 'Google Calendar',
    description: 'Bloquea y sincroniza automáticamente las reservas hechas en tu plataforma.',
    logo: 'CalendarCheck',
    category: 'Productividad'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alejandro Domínguez',
    role: 'CEO & Fundador',
    company: 'Sabor y Carbón Restaurant',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    text: 'PINEDA CODE transformó radicalmente nuestra operación de delivery. Nos construyeron un menú digital con checkout a WhatsApp inspirado en el sistema de Whataform, pero adaptado a nuestra cocina. ¡Nuestras ventas se duplicaron en solo 40 días!',
    rating: 5,
    tags: ['E-commerce', 'WhatsApp']
  },
  {
    id: 'test-2',
    name: 'Mariana Rosas',
    role: 'Directora de Operaciones',
    company: 'Clínica Dermacare',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    text: 'Estábamos perdiendo clientes porque las reservas telefónicas colapsaban. El equipo de PINEDA CODE nos desarrolló un sistema de reserva web con sincronización a Google Calendar y pago de seña integrado. Práctico, rápido y libre de fricciones.',
    rating: 5,
    tags: ['SaaS', 'Reservas']
  },
  {
    id: 'test-3',
    name: 'Juan Carlos Pineda',
    role: 'Director Ejecutivo',
    company: 'Apex Importadores',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    text: 'Teníamos un CRM obsoleto que nadie usaba. PINEDA CODE diseñó una intranet a medida con reportes en tiempo real y flujos automatizados con Gemini AI. El soporte es impecable y la velocidad del software es asombrosa.',
    rating: 5,
    tags: ['Software a Medida', 'AI']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'startup',
    name: 'Plan E-Commerce Express',
    price: '$399',
    period: 'pago único',
    description: 'La solución perfecta para comercios locales que quieren digitalizar su catálogo y recibir pedidos de forma rápida y profesional directamente en WhatsApp.',
    features: [
      'Hasta 150 productos con categorías',
      'Integración con Botón de WhatsApp',
      'Formulario de dirección & envío',
      'Carga de página instantánea (<0.8s)',
      'Alojamiento incluido por 1 año',
      'Código QR de regalo para tu tienda'
    ],
    isPopular: false,
    ctaText: 'Solicitar Express'
  },
  {
    id: 'business',
    name: 'Plan Pro Web & Checkout',
    price: '$899',
    period: 'pago único',
    description: 'Para marcas y empresas en crecimiento que necesitan una plataforma web robusta con pasarela de pago segura, cupones de descuento y control de panel de administración.',
    features: [
      'Productos ilimitados con variaciones',
      'Pasarela Stripe, PayPal o MercadoPago',
      'Sincronización automática con Google Sheets',
      'Panel de Gestión de Ventas (Dashboard)',
      'Dominio propio personalizado (.com / .net)',
      '1 mes de soporte post-lanzamiento premium'
    ],
    isPopular: true,
    ctaText: 'Empezar Plan Pro'
  },
  {
    id: 'enterprise',
    name: 'Plan Custom Enterprise & AI',
    price: 'A Medida',
    period: 'cotización personalizada',
    description: 'Software exclusivo diseñado desde cero para solucionar problemas de tu negocio. Ideal para automatizaciones complejas, integraciones de IA (Gemini) y flujos corporativos.',
    features: [
      'Desarrollo 100% desde cero (React + Node)',
      'Integración de Inteligencia Artificial (Gemini API)',
      'Sincronización con ERPs o software existente',
      'Base de datos SQL / NoSQL dedicada',
      'Optimizado para miles de usuarios simultáneos',
      'Soporte técnico prioritario 24/7 de por vida'
    ],
    isPopular: false,
    ctaText: 'Hablar con Consultor'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Qué diferencia hay entre PINEDA CODE y un constructor no-code como Whataform?',
    answer: 'Whataform es una excelente plataforma de suscripción mensual donde tú mismo construyes tus formularios con plantillas preestablecidas. En PINEDA CODE, desarrollamos soluciones personalizadas que tú posees al 100%. No hay cuotas de suscripción mensuales forzosas por el uso de tu software, el diseño se adapta a la perfección a tu identidad visual y podemos programar cualquier lógica compleja o integración de IA que los constructores estándar no admiten.'
  },
  {
    question: '¿Cómo funciona la integración con WhatsApp?',
    answer: 'Estructuramos el pedido, reserva o consulta del cliente en un formato sumamente limpio y profesional. Cuando el cliente hace clic en enviar, el sistema lo redirige a WhatsApp con el mensaje ya redactado y cargado en el carrito de compras. Tu equipo solo debe presionar "enviar" y recibirá la orden lista para despachar. ¡También podemos automatizar el proceso para que se registre solo en tu Google Sheets!'
  },
  {
    question: '¿Tienen soporte técnico incluido?',
    answer: '¡Por supuesto! Todos nuestros proyectos incluyen soporte técnico garantizado ante cualquier falla de servidor o de código de manera gratuita por periodos que van desde 3 meses hasta soporte vitalicio según el plan. Nos aseguramos de que tu negocio nunca se detenga.'
  },
  {
    question: '¿Puedo integrar pasarelas de pago locales de mi país?',
    answer: 'Sí. A diferencia de las plataformas rígidas, en PINEDA CODE integramos pasarelas internacionales líderes como Stripe y PayPal, pero también pasarelas locales según tu país (Mercado Pago, Kushki, PayU, dLocal, Wompi, etc.) para que tus clientes paguen en su moneda nacional.'
  },
  {
    question: '¿Cuál es el tiempo de entrega de un proyecto?',
    answer: 'Los proyectos exprés de catálogo digital se entregan en un promedio de 5 a 7 días hábiles. Los proyectos corporativos profesionales toman de 2 a 4 semanas, y los desarrollos a medida de nivel Enterprise se planifican en hitos de entrega quincenales según la complejidad.'
  }
];
