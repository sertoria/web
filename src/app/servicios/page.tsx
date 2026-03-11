import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios de IA empresarial: analítica avanzada, optimización de procesos, implantación estratégica e IA generativa.",
};

const services = [
  {
    number: "I",
    title: "Analítica Avanzada",
    subtitle: "De datos a decisiones",
    description: "Implementamos sistemas de analítica que transforman información dispersa en insights accionables. Dashboards en tiempo real, modelos predictivos y alertas inteligentes.",
    capabilities: [
      "Business Intelligence y visualización de datos",
      "Modelos predictivos y machine learning",
      "Segmentación y análisis de comportamiento",
      "Forecasting y series temporales",
      "Detección de anomalías",
    ],
  },
  {
    number: "II",
    title: "Optimización de Procesos",
    subtitle: "Eficiencia medible",
    description: "Identificamos cuellos de botella, automatizamos tareas repetitivas y rediseñamos flujos de trabajo. El objetivo: que su equipo dedique su tiempo a lo que realmente importa.",
    capabilities: [
      "Automatización de procesos (RPA + IA)",
      "Procesamiento de documentos inteligente",
      "Chatbots y asistentes virtuales",
      "Optimización de cadena de suministro",
      "Gestión inteligente de recursos",
    ],
  },
  {
    number: "III",
    title: "Implantación Estratégica",
    subtitle: "Transformación real",
    description: "No basta con tener la tecnología; hay que integrarla. Diseñamos roadmaps de adopción, formamos equipos y aseguramos que la IA genere valor desde el primer día.",
    capabilities: [
      "Auditoría de madurez en IA",
      "Diseño de estrategia de datos",
      "Selección e integración de herramientas",
      "Programas de formación y upskilling",
      "Gobierno de datos e IA responsable",
    ],
  },
  {
    number: "IV",
    title: "IA Generativa",
    subtitle: "La nueva frontera",
    description: "Large Language Models, generación de contenido, asistentes especializados. Llevamos la IA generativa del experimento al entorno de producción con seguridad y control.",
    capabilities: [
      "Implementación de LLMs empresariales",
      "RAG y bases de conocimiento inteligentes",
      "Generación de contenido automatizada",
      "Copilots y asistentes personalizados",
      "Fine-tuning de modelos",
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
            Capacidades<br />
            <span className="text-muted">al servicio del negocio</span>
          </h1>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.number}
          className="py-24 px-6 md:px-12 border-b border-white/5"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center mb-12">
                <span className="section-number">{service.number}</span>
                <span className="section-line" />
                <span className="text-sm text-muted tracking-wider">{service.subtitle}</span>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
              <ScrollReveal>
                <h2 className="heading-lg mb-6">{service.title}</h2>
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h3 className="text-sm text-muted tracking-wider uppercase mb-6">
                  Capacidades
                </h3>
                <ul className="space-y-4">
                  {service.capabilities.map((capability, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 border-b border-white/5 pb-4 group hover:border-white/20 transition-colors"
                    >
                      <span className="font-serif text-muted text-sm group-hover:text-white transition-colors">{i + 1}</span>
                      <span className="text-sm">{capability}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-lg mb-6">
              ¿No encuentra lo que busca?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-12">
              Cada organización es única. Si tiene un desafío específico que no 
              encaja en estas categorías, hablemos. Probablemente tengamos una solución.
            </p>
            <Link
              href="/contacto"
              className="btn-glow inline-flex items-center gap-3 border border-white px-10 py-5 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              Iniciar Conversación
              <span className="text-lg">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
