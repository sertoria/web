import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Sertoria",
  description: "Servicios de IA empresarial: IA generativa, agentes autónomos, computer vision, machine learning y plataformas de datos.",
};

const services = [
  {
    number: "I",
    title: "IA Generativa",
    subtitle: "Del experimento a producción",
    timeline: "POC: 4-6 semanas",
    description: "Diseñamos aplicaciones de IA generativa que van más allá del experimento. Automatización de workflows críticos, generación de contenido y creatividad aplicada con ROI medible y seguridad enterprise.",
    capabilities: [
      "Implementación de LLMs empresariales (GPT-4, Claude, Llama)",
      "RAG y bases de conocimiento inteligentes",
      "Generación de contenido automatizada",
      "Copilots y asistentes personalizados",
      "Fine-tuning y adaptación de modelos",
    ],
    useCases: [
      "Documentación técnica automatizada",
      "Soporte al cliente 24/7 con contexto",
      "Análisis de contratos y compliance",
    ],
  },
  {
    number: "II",
    title: "Agentes Autónomos",
    subtitle: "Teammates digitales",
    timeline: "POC: 6-8 semanas",
    description: "Desarrollamos asistentes de IA que actúan como compañeros de equipo confiables. Toman decisiones, ejecutan tareas y escalan solo cuando es necesario — reduciendo errores y liberando a su equipo para trabajo de alto valor.",
    capabilities: [
      "Orquestación de workflows multi-paso",
      "Integración con sistemas existentes (ERP, CRM)",
      "Toma de decisiones basada en reglas + IA",
      "Escalado inteligente a humanos",
      "Monitoreo y logging completo",
    ],
    useCases: [
      "Procesamiento de pedidos end-to-end",
      "Gestión de incidencias IT",
      "Onboarding automatizado de clientes",
    ],
  },
  {
    number: "III",
    title: "Computer Vision",
    subtitle: "Ver para entender",
    timeline: "POC: 8-10 semanas",
    description: "Convertimos imágenes y video en insights accionables. Desde inspección automatizada de calidad hasta análisis de documentos visuales, nuestras soluciones mejoran precisión mientras reducen costes.",
    capabilities: [
      "Detección y clasificación de defectos",
      "OCR inteligente y extracción de datos",
      "Análisis de planos y blueprints",
      "Monitoreo de seguridad y compliance",
      "Análisis de inventario visual",
    ],
    useCases: [
      "Control de calidad en línea de producción",
      "Procesamiento de facturas y albaranes",
      "Inspección de activos e infraestructura",
    ],
  },
  {
    number: "IV",
    title: "Machine Learning",
    subtitle: "Predicción y optimización",
    timeline: "POC: 6-10 semanas",
    description: "Diseñamos, entrenamos y desplegamos modelos de ML que resuelven desafíos complejos de negocio. Desde sistemas de recomendación hasta detección de fraude, con métricas claras y monitoreo continuo.",
    capabilities: [
      "Modelos predictivos y forecasting",
      "Sistemas de recomendación",
      "Detección de anomalías y fraude",
      "Segmentación y clustering",
      "MLOps y modelo lifecycle management",
    ],
    useCases: [
      "Predicción de demanda y stock",
      "Scoring crediticio y riesgo",
      "Mantenimiento predictivo",
    ],
  },
  {
    number: "V",
    title: "IA Conversacional",
    subtitle: "Experiencias naturales",
    timeline: "POC: 4-6 semanas",
    description: "Creamos sistemas que entienden contexto, intención y sentimiento. Experiencias de conversación que se sienten naturales y relevantes, convirtiendo cada interacción en una oportunidad.",
    capabilities: [
      "Chatbots con comprensión profunda",
      "Voicebots y asistentes de voz",
      "Análisis de sentimiento en tiempo real",
      "Enrutamiento inteligente de conversaciones",
      "Integración multicanal (web, WhatsApp, Teams)",
    ],
    useCases: [
      "Atención al cliente automatizada",
      "Asistentes de ventas conversacionales",
      "Help desk interno con IA",
    ],
  },
  {
    number: "VI",
    title: "Plataformas de Datos",
    subtitle: "Cimientos sólidos",
    timeline: "Según alcance",
    description: "Construimos la infraestructura que alimenta sus modelos de IA. Data lakes, pipelines ETL y arquitecturas modernas que escalan con su negocio y cumplen con los estándares más exigentes.",
    capabilities: [
      "Diseño de arquitectura de datos moderna",
      "Data lakes y warehouses en cloud",
      "Pipelines ETL/ELT automatizados",
      "Gobierno de datos y calidad",
      "Integración de fuentes heterogéneas",
    ],
    useCases: [
      "Consolidación de datos de múltiples ERPs",
      "Data mesh para organizaciones grandes",
      "Migración a arquitectura cloud-native",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <div className="grid-bg noise-overlay page-transition pt-32">
      {/* Header */}
      <section className="px-6 md:px-12 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted text-sm tracking-widest mb-6 animate-fade-in opacity-0">Servicios</p>
          <h1 className="heading-xl max-w-4xl animate-fade-in opacity-0 animate-delay-100">
            Soluciones Full-Stack<br />
            <span className="text-muted">diseñadas para impacto</span>
          </h1>
          <p className="text-muted max-w-2xl mt-8 animate-fade-in opacity-0 animate-delay-200">
            Desde la estrategia hasta la implementación en producción. 
            Cada servicio incluye métricas de éxito definidas, documentación 
            completa y transferencia de conocimiento.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.number}
          className={`py-24 px-6 md:px-12 border-b border-white/5 ${index % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
                <div className="flex items-center">
                  <span className="section-number">{service.number}</span>
                  <span className="section-line" />
                  <span className="text-sm text-muted tracking-wider">{service.subtitle}</span>
                </div>
                <span className="text-xs border border-white/20 px-3 py-1 text-muted">
                  {service.timeline}
                </span>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-3 gap-12 md:gap-16">
              <ScrollReveal>
                <div className="lg:col-span-1">
                  <h2 className="heading-lg mb-6">{service.title}</h2>
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <div>
                  <h3 className="text-sm text-muted tracking-wider uppercase mb-6">
                    Capacidades
                  </h3>
                  <ul className="space-y-3">
                    {service.capabilities.map((capability, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span className="text-muted mt-1">◇</span>
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div>
                  <h3 className="text-sm text-muted tracking-wider uppercase mb-6">
                    Casos de Uso
                  </h3>
                  <ul className="space-y-3">
                    {service.useCases.map((useCase, i) => (
                      <li
                        key={i}
                        className="border-l-2 border-white/20 pl-4 text-sm text-muted hover:text-white hover:border-white/50 transition-colors"
                      >
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Engagement Models - Inspired by Addepto */}
      <section className="py-32 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">+</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Modelos de Colaboración</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Proyecto llave en mano",
                description: "Definimos alcance, ejecutamos y entregamos. Ideal para iniciativas con objetivos claros y plazo definido.",
                best: "POCs, MVPs, proyectos acotados",
              },
              {
                title: "Equipo extendido",
                description: "Nuestros expertos se integran con su equipo. Colaboración cercana, transferencia de conocimiento continua.",
                best: "Transformaciones grandes, capacitación",
              },
              {
                title: "Servicios gestionados",
                description: "Nos encargamos de operar y evolucionar sus sistemas de IA. Usted se enfoca en el negocio.",
                best: "Sistemas en producción, mejora continua",
              },
            ].map((model, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="card-hover border border-white/10 p-8 h-full">
                  <h3 className="font-medium mb-4">{model.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">{model.description}</p>
                  <p className="text-xs text-muted">
                    <span className="text-white">Mejor para:</span> {model.best}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-lg mb-6">
              ¿Tiene un desafío específico?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-12">
              Si su caso no encaja exactamente en estas categorías, hablemos. 
              La mayoría de proyectos interesantes combinan varios servicios 
              de formas únicas.
            </p>
            <Link
              href="/contacto"
              className="btn-glow inline-flex items-center gap-3 border border-white bg-white text-black px-10 py-5 text-sm tracking-wider hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Agendar Consulta Estratégica
              <span className="text-lg">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
