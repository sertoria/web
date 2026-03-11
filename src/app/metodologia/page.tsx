import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metodología",
  description: "Nuestra metodología de trabajo: principios y fases para proyectos de IA empresarial exitosos.",
};

const phases = [
  {
    number: "01",
    title: "Diagnóstico",
    duration: "1-2 semanas",
    description: "Antes de proponer, escuchamos. Analizamos su contexto, sus datos, sus procesos actuales. Identificamos oportunidades reales, no soluciones buscando problemas.",
    outputs: ["Mapa de procesos actual", "Inventario de datos", "Quick wins identificados", "Informe de viabilidad"],
  },
  {
    number: "02",
    title: "Estrategia",
    duration: "2-3 semanas",
    description: "Diseñamos el roadmap. Qué hacer primero, qué puede esperar, qué impacto esperar de cada iniciativa. Todo con métricas claras y plazos realistas.",
    outputs: ["Roadmap priorizado", "Business case por iniciativa", "Arquitectura propuesta", "Plan de recursos"],
  },
  {
    number: "03",
    title: "Piloto",
    duration: "4-8 semanas",
    description: "Implementamos un piloto acotado. Suficientemente ambicioso para demostrar valor, suficientemente controlado para limitar riesgos. Medimos todo.",
    outputs: ["MVP funcional", "Métricas de baseline", "Aprendizajes documentados", "Go/No-go fundamentado"],
  },
  {
    number: "04",
    title: "Escalado",
    duration: "Variable",
    description: "Si el piloto demuestra valor, escalamos. Integramos con sistemas existentes, formamos equipos, establecemos governance. La adopción es tan importante como la tecnología.",
    outputs: ["Integración completa", "Equipo formado", "Documentación técnica", "SLAs definidos"],
  },
  {
    number: "05",
    title: "Evolución",
    duration: "Continuo",
    description: "La IA no es un proyecto, es una capacidad. Monitorizamos rendimiento, iteramos sobre el modelo, identificamos nuevas oportunidades. Mejora continua real.",
    outputs: ["Monitorización activa", "Iteraciones periódicas", "Expansión de casos de uso", "Transferencia de conocimiento"],
  },
];

const principles = [
  {
    title: "El contexto define la solución",
    description: "No existe la 'mejor IA'. Existe la IA adecuada para su contexto: sus datos, su equipo, sus restricciones, sus objetivos.",
  },
  {
    title: "Los datos sin estrategia son ruido",
    description: "Tener datos no es tener insights. El valor está en saber qué preguntas hacer, cómo estructurar la información y cómo actuar sobre ella.",
  },
  {
    title: "La adopción importa más que la tecnología",
    description: "El mejor modelo es inútil si nadie lo usa. Diseñamos para las personas que operarán el sistema, no para impresionar en una demo.",
  },
  {
    title: "Medir es el primer paso para mejorar",
    description: "Si no podemos medir el impacto, no podemos justificar la inversión. Establecemos baselines y métricas desde el día uno.",
  },
  {
    title: "La simplicidad es la máxima sofisticación",
    description: "A veces un dashboard bien diseñado vale más que un modelo de deep learning. Buscamos la solución más simple que resuelva el problema.",
  },
];

export default function MetodologiaPage() {
  return (
    <div className="grid-bg noise-overlay page-transition pt-32">
      {/* Header */}
      <section className="px-6 md:px-12 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted text-sm tracking-widest mb-6 animate-fade-in opacity-0">Metodología</p>
          <h1 className="heading-xl max-w-4xl animate-fade-in opacity-0 animate-delay-100">
            Cómo trabajamos<br />
            <span className="text-muted">y por qué funciona</span>
          </h1>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">Principios</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Lo que guía cada decisión</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="card-hover border border-white/10 p-8 h-full">
                  <span className="font-serif text-3xl text-muted">{index + 1}</span>
                  <h3 className="heading-md mt-4 mb-4">{principle.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">Fases</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">El proceso de principio a fin</span>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <ScrollReveal key={phase.number} delay={index * 50}>
                <div className="grid md:grid-cols-12 gap-8 items-start border-b border-white/5 pb-16 last:border-0 last:pb-0 group">
                  <div className="md:col-span-1">
                    <span className="font-serif text-4xl text-muted group-hover:text-white transition-colors duration-500">
                      {phase.number}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="heading-md">{phase.title}</h3>
                      <span className="text-xs text-muted border border-white/10 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-muted leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  <div className="md:col-span-6">
                    <h4 className="text-sm text-muted tracking-wider uppercase mb-6">
                      Entregables
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phase.outputs.map((output, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm group/item">
                          <span className="text-muted group-hover/item:text-white transition-colors">→</span>
                          <span className="group-hover/item:text-white transition-colors">{output}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
              ¿Listo para empezar?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-12">
              El primer paso es siempre una conversación. 
              Sin PowerPoints de 50 páginas, sin promesas vacías. 
              Solo una evaluación honesta de lo que podemos lograr juntos.
            </p>
            <Link
              href="/contacto"
              className="btn-glow inline-flex items-center gap-3 border border-white px-10 py-5 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              Solicitar Diagnóstico
              <span className="text-lg">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
