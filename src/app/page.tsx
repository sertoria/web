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
              Inteligencia Artificial Empresarial
            </p>
            <h1 className="heading-xl mb-8 animate-fade-in opacity-0 animate-delay-100">
              La Excelencia<br />
              <span className="text-muted">Precede al Resultado</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 animate-fade-in opacity-0 animate-delay-200">
              Transformamos organizaciones mediante inteligencia artificial. 
              Analítica, optimización y estrategia al servicio de sus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animate-delay-300">
              <Link
                href="/servicios"
                className="btn-glow inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                Explorar Servicios
                <span className="text-lg">→</span>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-wider text-muted hover:text-white transition-colors"
              >
                Iniciar Conversación
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

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { number: "97%", label: "Satisfacción cliente" },
                { number: "3x", label: "ROI promedio" },
                { number: "50+", label: "Proyectos entregados" },
                { number: "24h", label: "Tiempo de respuesta" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="stat-number mb-2">{stat.number}</div>
                  <p className="text-sm text-muted tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">01</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">No Todo Es Visible</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <ScrollReveal>
              <h2 className="heading-lg mb-6">
                La inteligencia artificial no es una herramienta.
                <span className="text-muted"> Es una transformación.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-6 text-muted">
                <p>
                  No implementamos soluciones genéricas. Cada organización tiene 
                  su contexto, sus datos, sus desafíos específicos. Nuestro trabajo 
                  comienza por entender profundamente antes de proponer.
                </p>
                <p>
                  La IA efectiva es invisible cuando funciona bien: procesos más 
                  eficientes, decisiones mejor informadas, resultados tangibles. 
                  El valor está en la integración, no en la tecnología aislada.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">02</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Áreas de Enfoque</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "I",
                title: "Analítica Avanzada",
                description: "Convertimos datos en decisiones. Modelos predictivos, dashboards inteligentes y sistemas de alerta que anticipan tendencias.",
              },
              {
                number: "II",
                title: "Optimización de Procesos",
                description: "Identificamos ineficiencias y automatizamos lo automatizable. El resultado: equipos enfocados en lo que importa.",
              },
              {
                number: "III",
                title: "Implantación Estratégica",
                description: "Integramos IA en el núcleo de su operación. Sin fricciones, con formación, con resultados medibles.",
              },
            ].map((service, index) => (
              <ScrollReveal key={service.number} delay={index * 100}>
                <div className="card-hover group border border-white/10 p-8">
                  <span className="font-serif text-4xl text-muted group-hover:text-white transition-colors duration-500">
                    {service.number}
                  </span>
                  <h3 className="heading-md mt-6 mb-4">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/servicios"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Saber más <span>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Preview */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">03</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Principios</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="heading-lg mb-8">
                Cinco principios guían cada proyecto
              </h2>
              <Link
                href="/metodologia"
                className="btn-glow inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                Ver Metodología
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                {[
                  "El contexto define la solución",
                  "Los datos sin estrategia son ruido",
                  "La adopción importa más que la tecnología",
                  "Medir es el primer paso para mejorar",
                  "La simplicidad es la máxima sofisticación",
                ].map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 border-b border-white/5 pb-4 group hover:border-white/20 transition-colors"
                  >
                    <span className="font-serif text-muted group-hover:text-white transition-colors">{index + 1}</span>
                    <p className="text-sm md:text-base">{principle}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <blockquote>
              <p className="heading-lg mb-8 italic">
                "La diferencia entre datos y decisiones es la inteligencia que los conecta."
              </p>
              <footer className="text-muted text-sm tracking-wider">
                — Filosofía Sertoria
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-muted text-sm tracking-widest mb-6">Iniciemos</p>
            <h2 className="heading-xl mb-8">
              ¿Hablamos?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-12">
              Cada proyecto comienza con una conversación. Sin compromiso, 
              sin presentaciones genéricas. Solo una evaluación honesta de 
              lo que podemos hacer juntos.
            </p>
            <Link
              href="/contacto"
              className="btn-glow inline-flex items-center gap-3 border border-white px-10 py-5 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              Solicitar Consulta
              <span className="text-lg">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
