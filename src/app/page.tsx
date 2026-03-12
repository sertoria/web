import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="grid-bg noise-overlay page-transition">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <p className="text-muted text-sm tracking-widest mb-8 animate-fade-in opacity-0">
              Consultoría de Inteligencia Artificial
            </p>
            <h1 className="heading-xl mb-8 animate-fade-in opacity-0 animate-delay-100">
              IA que entrega ROI<br />
              <span className="text-muted">— rápido, seguro, medible</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mb-6 animate-fade-in opacity-0 animate-delay-200">
              Aplicamos inteligencia artificial donde más impacta en sus flujos de trabajo 
              — reduciendo tiempos, eliminando errores y mejorando eficiencia sin 
              disrumpir cómo trabajan sus equipos.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted mb-12 animate-fade-in opacity-0 animate-delay-250">
              <span className="border border-white/20 px-3 py-1">POC en 4-6 semanas</span>
              <span className="border border-white/20 px-3 py-1">ROI documentado</span>
              <span className="border border-white/20 px-3 py-1">GDPR compliant</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animate-delay-300">
              <Link
                href="/contacto"
                className="btn-glow inline-flex items-center justify-center gap-3 border border-white bg-white text-black px-8 py-4 text-sm tracking-wider hover:bg-transparent hover:text-white transition-all duration-300"
              >
                Agendar Consulta Estratégica
                <span className="text-lg">→</span>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-4 text-sm tracking-wider text-white hover:border-white/50 transition-colors"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animate-delay-500">
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="text-xs tracking-widest">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Results Section - Inspired by Markovate */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-center text-sm text-muted tracking-widest mb-4">RESULTADOS REALES</p>
            <h2 className="text-center heading-md mb-16">Casos de éxito en múltiples industrias</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: "Manufactura",
                metric: "70%",
                description: "Reducción en tiempo de estimación",
                detail: "Automatización de análisis de planos y detección de defectos redujo tiempos de inspección mejorando precisión y cumplimiento.",
              },
              {
                industry: "Servicios Financieros",
                metric: "85%",
                description: "Precisión en detección de fraude",
                detail: "Sistema de ML para monitoreo de transacciones en tiempo real, reduciendo falsos positivos y acelerando la detección.",
              },
              {
                industry: "Retail",
                metric: "3.2x",
                description: "ROI en primer año",
                detail: "Motor de recomendaciones personalizado aumentó conversión y ticket medio sin incrementar costes de adquisición.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="card-hover border border-white/10 p-8 h-full">
                  <span className="text-xs tracking-widest text-muted uppercase">{item.industry}</span>
                  <div className="stat-number my-4">{item.metric}</div>
                  <h3 className="font-medium mb-3">{item.description}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { number: "50+", label: "Proyectos IA entregados" },
                { number: "90%", label: "Time-to-value más rápido" },
                { number: "12+", label: "Años de experiencia" },
                { number: "100%", label: "GDPR compliant" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="stat-number mb-2">{stat.number}</div>
                  <p className="text-sm text-muted tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services - Full Stack AI */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">01</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Soluciones Full-Stack</span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="heading-lg mb-6 max-w-3xl">
              Soluciones de IA completas,
              <span className="text-muted"> diseñadas para impacto real</span>
            </h2>
            <p className="text-muted max-w-2xl mb-16">
              Ayudamos a empresas a diseñar y escalar soluciones de IA que entregan 
              resultados medibles. Desde preparación de datos hasta sistemas en producción.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "◇",
                title: "IA Generativa",
                description: "Aplicaciones que van más allá del experimento. Automatización de workflows, generación de contenido y creatividad aplicada con ROI medible.",
              },
              {
                icon: "◈",
                title: "Agentes Autónomos",
                description: "Asistentes digitales que actúan como compañeros de equipo. Reducen errores, eliminan tareas repetitivas y liberan a tu equipo para trabajo de alto valor.",
              },
              {
                icon: "○",
                title: "IA Conversacional",
                description: "Sistemas que entienden contexto, intención y sentimiento. Experiencias naturales que fortalecen relaciones con clientes.",
              },
              {
                icon: "□",
                title: "Computer Vision",
                description: "Convertimos imágenes y video en insights accionables. Inspección automatizada, control de calidad y análisis visual a escala.",
              },
              {
                icon: "△",
                title: "Machine Learning",
                description: "Modelos diseñados, entrenados y optimizados para resolver desafíos complejos. Desde recomendaciones hasta detección de fraude.",
              },
              {
                icon: "◎",
                title: "Plataformas de Datos",
                description: "Infraestructura moderna para alimentar sus modelos. Data lakes, pipelines ETL y arquitecturas que escalan con su negocio.",
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="card-hover group border border-white/10 p-6 h-full">
                  <span className="text-2xl text-muted group-hover:text-white transition-colors">
                    {service.icon}
                  </span>
                  <h3 className="font-medium mt-4 mb-3">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-12 text-center">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-sm border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                Ver todos los servicios <span>→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">02</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Expertise Sectorial</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <ScrollReveal>
              <h2 className="heading-lg mb-6">
                Experiencia profunda
                <span className="text-muted"> en industrias clave</span>
              </h2>
              <p className="text-muted mb-8">
                No aplicamos soluciones genéricas. Cada industria tiene sus 
                particularidades, su regulación y sus oportunidades únicas 
                para la IA.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                {[
                  { name: "Manufactura", focus: "Mantenimiento predictivo, control de calidad, optimización de producción" },
                  { name: "Servicios Financieros", focus: "Detección de fraude, scoring crediticio, automatización de compliance" },
                  { name: "Retail & eCommerce", focus: "Personalización, demand forecasting, optimización de inventario" },
                  { name: "Salud", focus: "Diagnóstico asistido, gestión de historiales, optimización de recursos" },
                  { name: "Logística", focus: "Optimización de rutas, previsión de demanda, automatización de almacén" },
                ].map((industry, index) => (
                  <div
                    key={index}
                    className="group border border-white/10 p-4 hover:border-white/30 transition-colors cursor-default"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-medium mb-1">{industry.name}</h3>
                        <p className="text-sm text-muted">{industry.focus}</p>
                      </div>
                      <span className="text-muted group-hover:text-white transition-colors">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach - Inspired by Markovate */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">03</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Nuestro Approach</span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="heading-lg mb-16 max-w-3xl">
              Combinamos estrategia, tecnología y 
              <span className="text-muted"> rigor en la ejecución</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "POC en 4-6 semanas",
                description: "Vea impacto rápido con nuestro enfoque de prototipado acelerado. Sin meses de planificación.",
              },
              {
                number: "02",
                title: "End-to-End",
                description: "Desde preparación de datos hasta deployment y monitoreo — nos encargamos de todo.",
              },
              {
                number: "03",
                title: "Compliance nativo",
                description: "GDPR, ISO 27001, mejores prácticas de seguridad implementadas desde el diseño.",
              },
              {
                number: "04",
                title: "ROI documentado",
                description: "Case studies con resultados medibles y cuantificables. Sin métricas de vanidad.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="border-t border-white/20 pt-6">
                  <span className="text-xs text-muted tracking-widest">{item.number}</span>
                  <h3 className="font-medium mt-2 mb-3">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial with attribution */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <blockquote className="text-center">
              <p className="heading-md mb-8 italic leading-relaxed">
                "Sertoria entendió rápidamente nuestra visión. Su equipo entregó una 
                solución robusta que redujo errores, mejoró tiempos de respuesta y 
                aceleró nuestro time-to-market. Operaron como extensión de nuestro 
                equipo — responsivos, accountable y orientados a soluciones."
              </p>
              <footer className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg">
                  MR
                </div>
                <div>
                  <p className="font-medium">Miguel Rodríguez</p>
                  <p className="text-sm text-muted">Director de Innovación, Grupo Industrial</p>
                </div>
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote Section - Sertorio */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="border-l-2 border-white/30 pl-8 md:pl-12">
              <p className="text-xl md:text-2xl text-muted italic leading-relaxed mb-6">
                "La paciencia puede más que la fuerza. Lo que no puede acabarse 
                junto, cede poco a poco. Nada resiste a la asiduidad."
              </p>
              <footer className="text-sm">
                <span className="text-white">Quinto Sertorio</span>
                <span className="text-muted"> — General romano, s. I a.C.</span>
              </footer>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">04</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Preguntas Frecuentes</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {[
              {
                q: "¿Cuánto tiempo toma ver resultados?",
                a: "Nuestros POCs entregan valor en 4-6 semanas. Proyectos de implementación completa típicamente toman 3-6 meses dependiendo del alcance.",
              },
              {
                q: "¿Trabajan con empresas de cualquier tamaño?",
                a: "Nos especializamos en medianas y grandes empresas que ya tienen datos y procesos que optimizar. No hacemos proyectos genéricos.",
              },
              {
                q: "¿Cómo garantizan la seguridad de nuestros datos?",
                a: "Implementamos prácticas GDPR y ISO 27001 desde el diseño. Podemos trabajar on-premise o en clouds privadas según sus requerimientos.",
              },
              {
                q: "¿Qué diferencia a Sertoria de otras consultoras?",
                a: "No vendemos tecnología, vendemos resultados. Cada proyecto tiene métricas de éxito definidas antes de empezar y ROI documentado al terminar.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="border-b border-white/10 pb-6">
                  <h3 className="font-medium mb-3">{item.q}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-muted text-sm tracking-widest mb-6">PRÓXIMO PASO</p>
            <h2 className="heading-xl mb-6">
              Descubra cómo la IA encaja<br />
              <span className="text-muted">en sus workflows actuales</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-12">
              30 minutos. Sin presentaciones genéricas. Solo una evaluación 
              honesta de oportunidades para su organización.
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
