import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce a Sertoria: nuestra historia, valores y enfoque en consultoría de IA empresarial.",
};

const values = [
  {
    title: "Honestidad Radical",
    description: "Si algo no va a funcionar, lo decimos. Si no somos los adecuados para un proyecto, lo admitimos. La confianza se construye con verdad, no con promesas.",
    icon: "◇",
  },
  {
    title: "Obsesión por el Impacto",
    description: "No medimos éxito por horas facturadas o modelos desplegados. Lo medimos por el valor generado: costes reducidos, ingresos aumentados, decisiones mejoradas.",
    icon: "◈",
  },
  {
    title: "Simplicidad",
    description: "La complejidad es fácil. Lo difícil es hacer simple lo complejo. Buscamos siempre la solución más elegante, no la más impresionante.",
    icon: "○",
  },
];

const team = [
  {
    role: "Estrategia & Liderazgo",
    description: "Definición de roadmaps, alineación con negocio, gestión de stakeholders.",
  },
  {
    role: "Data Science & ML",
    description: "Modelos predictivos, NLP, computer vision, MLOps.",
  },
  {
    role: "Ingeniería de Datos",
    description: "Pipelines, arquitecturas cloud, integración de sistemas.",
  },
  {
    role: "Producto & UX",
    description: "Diseño de soluciones centradas en el usuario, dashboards, interfaces.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="grid-bg noise-overlay page-transition pt-32">
      {/* Header */}
      <section className="px-6 md:px-12 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted text-sm tracking-widest mb-6 animate-fade-in opacity-0">Nosotros</p>
          <h1 className="heading-xl max-w-4xl animate-fade-in opacity-0 animate-delay-100">
            Quiénes somos<br />
            <span className="text-muted">y por qué hacemos esto</span>
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">01</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Origen</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <ScrollReveal>
              <h2 className="heading-lg mb-6">
                Sertoria nace de una convicción:
                <span className="text-muted"> la IA debe generar valor real.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-6 text-muted">
                <p>
                  Hemos visto demasiados proyectos de IA que terminan en cajones. 
                  Pilotos brillantes que nunca escalan. Dashboards que nadie consulta. 
                  Modelos que no sobreviven al contacto con la realidad.
                </p>
                <p>
                  Sertoria existe para hacer las cosas de otra manera. No vendemos 
                  tecnología; diseñamos soluciones que funcionan. No prometemos 
                  revoluciones; entregamos mejoras medibles. No nos vamos después 
                  del despliegue; acompañamos hasta que el valor está capturado.
                </p>
                <p className="border-l-2 border-white/20 pl-6 italic">
                  El nombre viene de Sertorio, el general romano que demostró que 
                  la estrategia inteligente supera a la fuerza bruta. Eso es lo que 
                  hacemos: usar la inteligencia —artificial y humana— de forma 
                  estratégica.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">02</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Valores</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="card-hover border-t border-white/10 pt-8 h-full p-6">
                  <span className="text-4xl text-muted">{value.icon}</span>
                  <h3 className="heading-md mt-6 mb-4">{value.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Approach */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-16">
              <span className="section-number">03</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Equipo</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="heading-lg mb-8">
                No somos una fábrica de consultores.
                <span className="text-muted"> Somos un equipo reducido de especialistas.</span>
              </h2>
              <p className="text-muted mb-8">
                Cada proyecto de Sertoria tiene involucrados a los mismos 
                profesionales que diseñaron la estrategia. No hay juniors 
                aprendiendo a tu costa. Las mismas personas que hacen el diagnóstico 
                son las que implementan la solución.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-6">
                {team.map((member, index) => (
                  <div 
                    key={index}
                    className="border border-white/10 p-6 hover:border-white/30 transition-colors group"
                  >
                    <h4 className="font-medium mb-2 group-hover:text-white transition-colors">
                      {member.role}
                    </h4>
                    <p className="text-sm text-muted">
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-lg mb-8">
              Colaboramos con una red de especialistas
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Según las necesidades de cada proyecto: científicos de datos, 
              ingenieros de ML, expertos en cloud, diseñadores de producto. 
              Siempre el equipo adecuado para el desafío específico.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-lg mb-6">
              ¿Quiere saber más?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-12">
              La mejor manera de conocernos es tener una conversación. 
              Sin compromisos, sin presentaciones interminables. 
              Solo un café virtual y una charla honesta.
            </p>
            <Link
              href="/contacto"
              className="btn-glow inline-flex items-center gap-3 border border-white px-10 py-5 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              Hablemos
              <span className="text-lg">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
