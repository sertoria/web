import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metodología | Sertoria",
  description: "Nuestro proceso de trabajo: Discovery, POC, Producción y Evolución. Diseñado para minimizar riesgo y maximizar valor en proyectos de IA.",
};

const phases = [
  {
    number: "01",
    name: "Discovery",
    duration: "1–2 semanas",
    objective: "Entender el problema real y definir el camino",
    description: "Antes de escribir una línea de código, necesitamos entender el contexto. ¿Cuál es el problema de negocio? ¿Qué datos existen? ¿Quién usará la solución? ¿Cómo se mide el éxito?",
    activities: [
      "Entrevistas con stakeholders clave",
      "Auditoría de datos disponibles",
      "Mapeo de procesos actuales",
      "Análisis de viabilidad técnica",
      "Definición de métricas de éxito",
      "Identificación de quick wins",
    ],
    deliverables: [
      "Documento de requisitos y alcance",
      "Assessment de madurez de datos",
      "Propuesta de solución técnica",
      "Roadmap con fases y timeline",
      "Presupuesto detallado",
    ],
    outcome: "Tendrás claridad total sobre qué vamos a construir, por qué, y cómo sabremos si funciona.",
  },
  {
    number: "02",
    name: "Proof of Concept",
    duration: "4–6 semanas",
    objective: "Demostrar valor antes de escalar",
    description: "Construimos un prototipo funcional con datos reales para validar que la solución propuesta resuelve el problema. Este es el momento de aprender y ajustar, con inversión controlada.",
    activities: [
      "Setup de entorno de desarrollo",
      "Preparación y limpieza de datos",
      "Desarrollo del modelo o sistema core",
      "Integración básica con sistemas existentes",
      "Testing con usuarios reales",
      "Iteración basada en feedback",
    ],
    deliverables: [
      "Prototipo funcional",
      "Documentación técnica inicial",
      "Métricas de rendimiento del modelo",
      "Informe de lecciones aprendidas",
      "Go/No-go recommendation",
    ],
    outcome: "Verás la solución funcionando con tus datos antes de comprometerte a un proyecto mayor.",
  },
  {
    number: "03",
    name: "Producción",
    duration: "8–16 semanas",
    objective: "Construir una solución robusta y escalable",
    description: "Con el POC validado, pasamos a desarrollo completo. Trabajamos en sprints de 2 semanas con demos regulares. La solución se construye con los estándares de calidad que requiere un entorno enterprise.",
    activities: [
      "Arquitectura de producción",
      "Desarrollo iterativo en sprints",
      "Integración completa con sistemas",
      "Testing exhaustivo (unit, integration, e2e)",
      "Setup de monitoreo y alertas",
      "Documentación completa",
      "Formación del equipo interno",
    ],
    deliverables: [
      "Sistema en producción",
      "Pipeline de CI/CD configurado",
      "Suite de tests automatizados",
      "Documentación técnica y de usuario",
      "Runbook de operaciones",
      "Sesiones de formación grabadas",
    ],
    outcome: "Una solución en producción, documentada, monitorizada, y con tu equipo formado para operarla.",
  },
  {
    number: "04",
    name: "Evolución",
    duration: "Continuo",
    objective: "Mantener y mejorar el valor generado",
    description: "El lanzamiento no es el final — es el principio. Los sistemas de IA necesitan mantenimiento, reentrenamiento, y mejora continua basada en datos de uso real.",
    activities: [
      "Monitoreo de rendimiento del modelo",
      "Análisis de drift y degradación",
      "Reentrenamiento periódico",
      "Implementación de mejoras",
      "Soporte técnico",
      "Actualizaciones de dependencias",
    ],
    deliverables: [
      "Informes mensuales de rendimiento",
      "Actualizaciones de modelo según necesidad",
      "Mejoras incrementales",
      "Soporte técnico según SLA",
    ],
    outcome: "Un sistema que mejora con el tiempo en lugar de degradarse.",
  },
];

const principles = [
  {
    title: "El contexto define la solución",
    description: "No existe una 'mejor' arquitectura de IA. La solución correcta depende del problema, los datos, el equipo, y las restricciones de cada organización. Por eso empezamos siempre por entender.",
  },
  {
    title: "Valor incremental, riesgo controlado",
    description: "Preferimos entregar pequeñas mejoras frecuentes que grandes releases arriesgados. Cada entrega debe generar valor por sí misma, incluso si el proyecto se detiene mañana.",
  },
  {
    title: "Los datos mandan",
    description: "No nos enamoramos de tecnologías ni de arquitecturas. Dejamos que los datos nos digan qué funciona. Si algo no mejora las métricas, lo descartamos.",
  },
  {
    title: "La adopción es tan importante como la tecnología",
    description: "Una solución perfecta que nadie usa es inútil. Diseñamos pensando en los usuarios finales, involucramos a los stakeholders, y dedicamos tiempo a change management.",
  },
  {
    title: "Documentación como ciudadano de primera",
    description: "El código sin documentación es deuda técnica. Todo lo que construimos viene con documentación completa: arquitectura, APIs, runbooks, y guías de troubleshooting.",
  },
  {
    title: "Transferencia de conocimiento real",
    description: "Nuestro objetivo es que tu equipo pueda operar y evolucionar la solución sin nosotros. Incluimos formación, pair programming, y documentación detallada en cada proyecto.",
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
            Un proceso diseñado<br />
            <span className="text-muted">para reducir riesgo</span>
          </h1>
          <p className="text-muted max-w-2xl mt-8 animate-fade-in opacity-0 animate-delay-200 text-lg leading-relaxed">
            La mayoría de proyectos de IA fallan. Nuestro proceso está diseñado 
            para que el tuyo no sea uno de ellos.
          </p>
        </div>
      </section>

      {/* Why methodology matters */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  stat: "87%",
                  label: "de proyectos de IA",
                  context: "no llegan a producción",
                  source: "Gartner, 2024",
                },
                {
                  stat: "76%",
                  label: "de ejecutivos",
                  context: "no confían en sus datos",
                  source: "KPMG Survey, 2024",
                },
                {
                  stat: "2.5x",
                  label: "más probabilidad de éxito",
                  context: "con metodología structured",
                  source: "McKinsey, 2024",
                },
              ].map((item, index) => (
                <div key={index} className="p-6">
                  <div className="stat-number-sm">{item.stat}</div>
                  <p className="font-medium mt-2">{item.label}</p>
                  <p className="text-sm text-muted">{item.context}</p>
                  <p className="text-xs text-muted mt-2">{item.source}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-center text-muted mb-12">
              Nuestro proceso en 4 fases, diseñado para validar antes de escalar
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {phases.map((phase, index) => (
                <div key={index} className="text-center p-4 border border-white/5 bg-white/[0.01]">
                  <span className="text-xs text-muted tracking-wider">{phase.number}</span>
                  <h3 className="font-medium mt-2">{phase.name}</h3>
                  <p className="text-xs text-muted mt-1">{phase.duration}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Detailed Phases */}
      {phases.map((phase, phaseIndex) => (
        <section
          key={phase.number}
          className={`py-32 px-6 md:px-12 border-b border-white/5 ${phaseIndex % 2 === 1 ? 'bg-white/[0.01]' : ''}`}
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <div className="flex items-center">
                  <span className="section-number">{phase.number}</span>
                  <span className="section-line" />
                  <span className="text-sm text-muted tracking-wider">{phase.name}</span>
                </div>
                <span className="badge">{phase.duration}</span>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <ScrollReveal>
                <h2 className="heading-lg mb-4">{phase.name}</h2>
                <p className="text-xl text-muted mb-6">{phase.objective}</p>
                <p className="text-muted leading-relaxed mb-8">{phase.description}</p>
                <div className="p-6 border border-white/10 bg-white/[0.02]">
                  <p className="text-sm font-medium mb-2">Outcome</p>
                  <p className="text-sm text-muted">{phase.outcome}</p>
                </div>
              </ScrollReveal>

              <div className="space-y-8">
                <ScrollReveal delay={100}>
                  <div>
                    <h3 className="text-sm tracking-wider uppercase text-muted mb-4">Actividades</h3>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className="text-muted mt-1">→</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                  <div>
                    <h3 className="text-sm tracking-wider uppercase text-muted mb-4">Entregables</h3>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted">
                          <span className="text-white/50">◇</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Principles */}
      <section className="py-32 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-8">
              <span className="section-number">05</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Principios</span>
            </div>
            <h2 className="heading-lg mb-16 max-w-3xl">
              Seis principios que guían
              <span className="text-muted"> cada decisión</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="border-t border-white/20 pt-6">
                  <span className="text-xs text-muted tracking-wider">0{index + 1}</span>
                  <h3 className="font-medium mt-3 mb-3">{principle.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{principle.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Tech */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="heading-md mb-8 text-center">Stack tecnológico</h2>
            <p className="text-center text-muted max-w-2xl mx-auto mb-12">
              No estamos casados con ninguna tecnología. Elegimos las herramientas 
              correctas para cada problema.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { category: "LLMs", tools: ["OpenAI", "Anthropic", "Azure OpenAI", "Llama", "Mistral"] },
                { category: "ML Frameworks", tools: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LightGBM"] },
                { category: "MLOps", tools: ["MLflow", "Weights & Biases", "DVC", "Kubeflow", "BentoML"] },
                { category: "Data", tools: ["Snowflake", "Databricks", "BigQuery", "Redshift", "dbt"] },
                { category: "Cloud", tools: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform"] },
                { category: "Orchestration", tools: ["LangChain", "LlamaIndex", "Airflow", "Prefect", "Temporal"] },
              ].map((stack, index) => (
                <div key={index} className="col-span-1">
                  <h3 className="text-xs tracking-wider uppercase text-muted mb-3">{stack.category}</h3>
                  <div className="space-y-1">
                    {stack.tools.map((tool, i) => (
                      <p key={i} className="text-sm">{tool}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
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
              El primer paso es siempre una conversación. Cuéntanos tu desafío 
              y te diremos honestamente si podemos ayudar.
            </p>
            <Link
              href="/contacto"
              className="btn-primary inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-medium"
            >
              Solicitar Discovery Call
              <span className="text-lg">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
