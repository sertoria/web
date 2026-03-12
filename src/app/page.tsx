import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="grid-bg noise-overlay page-transition">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 relative radial-overlay overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in opacity-0">
              <span className="badge">Consultoría de IA</span>
              <span className="hidden sm:block w-12 h-px bg-gradient-to-r from-white/30 to-transparent" />
            </div>
            
            {/* Main headline */}
            <h1 className="heading-xl mb-6 animate-fade-in opacity-0 animate-delay-100">
              Inteligencia artificial<br />
              <span className="text-muted">que genera resultados.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted max-w-2xl mb-8 animate-fade-in opacity-0 animate-delay-200 leading-relaxed">
              Diseñamos, construimos y desplegamos soluciones de IA que transforman 
              operaciones y crean ventaja competitiva. Sin experimentos — solo 
              impacto medible.
            </p>
            
            {/* Value props */}
            <div className="flex flex-wrap gap-3 mb-12 animate-fade-in opacity-0 animate-delay-250">
              <span className="badge">⚡ POC en 4–6 semanas</span>
              <span className="badge">📊 ROI documentado</span>
              <span className="badge">🔒 GDPR native</span>
              <span className="badge">🏢 Enterprise-ready</span>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animate-delay-300">
              <Link
                href="/contacto"
                className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium tracking-wide"
              >
                Solicitar Consulta Estratégica
                <span className="text-lg">→</span>
              </Link>
              <Link
                href="/servicios"
                className="btn-secondary inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-wide"
              >
                Explorar Capacidades
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animate-delay-600">
          <div className="flex flex-col items-center gap-3 text-muted">
            <span className="text-[10px] tracking-[0.3em] uppercase">Descubrir</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent animate-pulse-soft" />
          </div>
        </div>
      </section>

      {/* Logos / Social Proof Bar */}
      <section className="py-16 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-center text-xs text-muted tracking-[0.2em] uppercase mb-10">
              Tecnologías que implementamos
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
              {["OpenAI", "Anthropic", "Azure AI", "AWS", "GCP", "Snowflake", "Databricks", "LangChain"].map((tech) => (
                <span key={tech} className="text-sm md:text-base font-light tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results / Impact Section */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs text-muted tracking-[0.2em] uppercase mb-4">Impacto demostrable</p>
              <h2 className="heading-lg max-w-3xl mx-auto">
                Resultados que hablan
                <span className="text-muted"> por sí mismos</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                metric: "73%",
                label: "Reducción en tiempo de procesamiento",
                context: "Automatización de análisis de documentos en sector legal",
                industry: "Legal & Compliance",
              },
              {
                metric: "2.4M€",
                label: "Ahorro anual identificado",
                context: "Optimización de cadena de suministro con ML predictivo",
                industry: "Manufactura",
              },
              {
                metric: "91%",
                label: "Precisión en clasificación",
                context: "Sistema de detección de defectos en línea de producción",
                industry: "Industrial",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="card-hover border border-white/10 p-8 h-full group">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted">{item.industry}</span>
                  <div className="stat-number-sm my-4 group-hover:scale-105 transition-transform duration-500">{item.metric}</div>
                  <h3 className="font-medium mb-3 text-sm">{item.label}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.context}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-16 text-center">
              <p className="text-muted text-sm mb-6">
                Cada proyecto incluye métricas de baseline y seguimiento post-implementación
              </p>
              <Link href="/contacto" className="inline-flex items-center gap-2 text-sm border-b border-white/30 pb-1 hover:border-white transition-colors">
                Ver más casos de estudio <span>→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do - Services Overview */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-6">
              <span className="section-number">01</span>
              <span className="section-line" />
            </div>
            <h2 className="heading-lg mb-6 max-w-3xl">
              Soluciones de IA full-stack,
              <span className="text-muted"> desde estrategia hasta producción</span>
            </h2>
            <p className="text-muted max-w-2xl mb-16">
              No somos un laboratorio de investigación. Construimos sistemas que 
              funcionan en el mundo real, con la robustez y escalabilidad que 
              requieren las empresas.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              {
                icon: "◆",
                title: "IA Generativa",
                description: "LLMs empresariales, RAG, generación de contenido. Del experimento a producción con seguridad y control.",
                link: "/servicios#generativa",
              },
              {
                icon: "◇",
                title: "Agentes Autónomos",
                description: "Workflows automatizados que toman decisiones, ejecutan tareas y escalan a humanos cuando es necesario.",
                link: "/servicios#agentes",
              },
              {
                icon: "○",
                title: "Computer Vision",
                description: "Inspección de calidad, OCR inteligente, análisis de documentos visuales. Precisión a escala.",
                link: "/servicios#vision",
              },
              {
                icon: "□",
                title: "Machine Learning",
                description: "Modelos predictivos, sistemas de recomendación, detección de anomalías. MLOps incluido.",
                link: "/servicios#ml",
              },
              {
                icon: "△",
                title: "IA Conversacional",
                description: "Chatbots con comprensión profunda, voicebots, análisis de sentimiento en tiempo real.",
                link: "/servicios#conversacional",
              },
              {
                icon: "◎",
                title: "Data Platform",
                description: "Arquitecturas de datos modernas. Data lakes, pipelines ETL, gobierno de datos.",
                link: "/servicios#data",
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <Link href={service.link} className="block bg-[#050505] p-8 h-full group hover:bg-white/[0.02] transition-colors duration-500">
                  <span className="text-2xl text-muted group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </span>
                  <h3 className="font-medium mt-6 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-muted mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explorar <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-6">
              <span className="section-number">02</span>
              <span className="section-line" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <h2 className="heading-lg mb-6">
                  Un approach diseñado
                  <span className="text-muted"> para minimizar riesgo</span>
                </h2>
                <p className="text-muted mb-8">
                  La mayoría de proyectos de IA fallan por exceso de ambición inicial 
                  o falta de foco en el problema de negocio. Nuestro proceso está 
                  diseñado para entregar valor incremental y medible.
                </p>
                <Link 
                  href="/metodologia" 
                  className="btn-secondary inline-flex items-center gap-3 px-6 py-3 text-sm"
                >
                  Ver metodología completa
                </Link>
              </div>
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Discovery Sprint",
                    duration: "1–2 semanas",
                    description: "Entendemos su contexto, identificamos quick wins y definimos métricas de éxito. Sin esta fase, no empezamos.",
                  },
                  {
                    number: "02",
                    title: "Proof of Concept",
                    duration: "4–6 semanas",
                    description: "Construimos un prototipo funcional con datos reales. Usted ve resultados antes de comprometerse a un proyecto mayor.",
                  },
                  {
                    number: "03",
                    title: "Producción",
                    duration: "8–16 semanas",
                    description: "Desarrollo iterativo con releases frecuentes. Monitoreo, testing y documentación incluidos.",
                  },
                  {
                    number: "04",
                    title: "Evolución",
                    duration: "Continuo",
                    description: "Soporte post-launch, mejora continua basada en datos de uso real, y transferencia de conocimiento.",
                  },
                ].map((step, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="feature-box">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs tracking-[0.2em] text-muted">{step.number}</span>
                        <span className="text-xs text-muted">{step.duration}</span>
                      </div>
                      <h3 className="font-medium mb-2">{step.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-6">
              <span className="section-number">03</span>
              <span className="section-line" />
            </div>
            <h2 className="heading-lg mb-16 max-w-3xl">
              Expertise sectorial
              <span className="text-muted"> que acelera resultados</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Manufactura & Industrial",
                applications: ["Mantenimiento predictivo", "Control de calidad visual", "Optimización de producción"],
              },
              {
                name: "Servicios Financieros",
                applications: ["Detección de fraude", "Scoring crediticio", "Automatización de compliance"],
              },
              {
                name: "Retail & eCommerce",
                applications: ["Personalización", "Demand forecasting", "Dynamic pricing"],
              },
              {
                name: "Salud & Life Sciences",
                applications: ["Análisis de imágenes médicas", "NLP clínico", "Optimización operacional"],
              },
              {
                name: "Logística & Supply Chain",
                applications: ["Optimización de rutas", "Gestión de inventario", "Predicción de demanda"],
              },
              {
                name: "Legal & Compliance",
                applications: ["Revisión de contratos", "Due diligence", "Búsqueda semántica"],
              },
            ].map((industry, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="group border border-white/5 p-6 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-500">
                  <h3 className="font-medium mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {industry.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {industry.applications.map((app, i) => (
                      <span key={i} className="text-xs text-muted border border-white/10 px-2 py-1">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sertoria - Differentiators */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-6">
              <span className="section-number">04</span>
              <span className="section-line" />
            </div>
            <h2 className="heading-lg mb-16 max-w-3xl">
              Por qué elegir Sertoria
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sin consultores junior",
                description: "El equipo que hace el pitch es el equipo que hace el trabajo. Senior engineers en cada proyecto.",
              },
              {
                title: "ROI o no hay factura",
                description: "Definimos métricas de éxito antes de empezar. Si no las alcanzamos, ajustamos hasta lograrlo.",
              },
              {
                title: "Código es suyo",
                description: "Todo el código, documentación y modelos son de su propiedad. Sin vendor lock-in.",
              },
              {
                title: "Transferencia real",
                description: "No creamos dependencia. Formamos a su equipo para que pueda operar y evolucionar la solución.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="border-t border-white/20 pt-6">
                  <h3 className="font-medium mb-3">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="testimonial-card">
              <p className="heading-sm leading-relaxed mb-8 pl-8">
                "Lo que diferencia a Sertoria es que entienden que la tecnología es solo 
                una parte del puzzle. Dedicaron tiempo real a entender nuestros procesos, 
                nuestras limitaciones y nuestros objetivos antes de proponer nada. El 
                resultado fue una solución que nuestro equipo adoptó sin fricción y que 
                sigue generando valor un año después."
              </p>
              <div className="flex items-center gap-4 pl-8">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                  CR
                </div>
                <div>
                  <p className="font-medium">Carmen Ruiz</p>
                  <p className="text-sm text-muted">Directora de Transformación Digital</p>
                  <p className="text-xs text-muted">Grupo Industrial — 2.400 empleados</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sertorio Quote */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="border-l-2 border-white/20 pl-8 md:pl-12">
              <p className="text-xl md:text-2xl text-muted italic leading-relaxed mb-6">
                "La paciencia puede más que la fuerza. Lo que no puede acabarse 
                junto, cede poco a poco. Nada resiste a la asiduidad."
              </p>
              <footer className="text-sm">
                <span className="text-white">Quinto Sertorio</span>
                <span className="text-muted"> — General romano, estratega de Hispania, s. I a.C.</span>
              </footer>
              <p className="text-xs text-muted mt-4 max-w-xl">
                Nuestro nombre rinde homenaje a quien demostró que la estrategia 
                inteligente y la ejecución paciente vencen a la fuerza bruta.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-6">
              <span className="section-number">05</span>
              <span className="section-line" />
            </div>
            <h2 className="heading-lg mb-16">Preguntas frecuentes</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              {
                q: "¿Cuánto cuesta un proyecto típico?",
                a: "Un POC suele estar entre 15.000€ y 40.000€ dependiendo de la complejidad. Proyectos de implementación completa varían según alcance. Siempre damos presupuesto cerrado después del discovery.",
              },
              {
                q: "¿Trabajáis con startups o solo enterprise?",
                a: "Principalmente con medianas y grandes empresas que ya tienen datos y procesos que optimizar. Para startups muy early-stage, solemos recomendar alternativas más ligeras.",
              },
              {
                q: "¿Qué pasa si el POC no funciona?",
                a: "Ocurre poco, pero ocurre. Si el POC demuestra que la solución no es viable, os lo diremos claramente y no continuaremos. Preferimos un POC fallido a un proyecto fallido.",
              },
              {
                q: "¿Cómo garantizáis la seguridad de nuestros datos?",
                a: "Cumplimos GDPR por defecto. Podemos trabajar on-premise, en vuestra VPC, o con datos anonimizados. Firmamos NDA y DPA antes de acceder a cualquier dato.",
              },
              {
                q: "¿Hacéis mantenimiento post-proyecto?",
                a: "Sí. Ofrecemos contratos de soporte y evolución continua. Pero también os enseñamos a operar la solución para que no dependáis de nosotros si no queréis.",
              },
              {
                q: "¿Qué os diferencia de las grandes consultoras?",
                a: "Hacemos el trabajo nosotros mismos, no subcontratamos. Menos overhead, más velocidad, y las personas que conoces en el pitch son las que escriben el código.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="border-b border-white/10 pb-8">
                  <h3 className="font-medium mb-3">{item.q}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-white/[0.02] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-xs text-muted tracking-[0.2em] uppercase mb-6">Siguiente paso</p>
            <h2 className="heading-xl mb-6">
              ¿Preparado para ver<br />
              <span className="text-muted">qué puede hacer la IA por ti?</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-12">
              30 minutos de conversación. Sin presentaciones genéricas. 
              Solo una evaluación honesta de las oportunidades para tu organización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="btn-primary inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-medium tracking-wide"
              >
                Agendar Consulta Estratégica
                <span className="text-lg">→</span>
              </Link>
              <a
                href="mailto:hola@sertoria.com"
                className="btn-secondary inline-flex items-center justify-center gap-3 px-10 py-5 text-sm"
              >
                hola@sertoria.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
