import Link from "next/link";

export default function NosotrosPage() {
  return (
    <div className="grid-bg pt-32">
      {/* Header */}
      <section className="px-6 md:px-12 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted text-sm tracking-widest mb-6">Nosotros</p>
          <h1 className="heading-xl max-w-4xl">
            Quiénes somos<br />
            <span className="text-muted">y por qué hacemos esto</span>
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <span className="section-number">01</span>
            <span className="section-line" />
            <span className="text-sm text-muted tracking-wider">Origen</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="heading-lg mb-6">
                Sertoria nace de una convicción:
                <span className="text-muted"> la IA debe generar valor real.</span>
              </h2>
            </div>
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
              <p>
                El nombre viene de Sertorio, el general romano que demostró que 
                la estrategia inteligente supera a la fuerza bruta. Eso es lo que 
                hacemos: usar la inteligencia —artificial y humana— de forma 
                estratégica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <span className="section-number">02</span>
            <span className="section-line" />
            <span className="text-sm text-muted tracking-wider">Valores</span>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Honestidad Radical",
                description: "Si algo no va a funcionar, lo decimos. Si no somos los adecuados para un proyecto, lo admitimos. La confianza se construye con verdad, no con promesas.",
              },
              {
                title: "Obsesión por el Impacto",
                description: "No medimos éxito por horas facturadas o modelos desplegados. Lo medimos por el valor generado: costes reducidos, ingresos aumentados, decisiones mejoradas.",
              },
              {
                title: "Simplicidad",
                description: "La complejidad es fácil. Lo difícil es hacer simple lo complejo. Buscamos siempre la solución más elegante, no la más impresionante.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="border-t border-white/10 pt-8"
              >
                <span className="font-serif text-3xl text-muted">{index + 1}</span>
                <h3 className="heading-md mt-4 mb-4">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <span className="section-number">03</span>
            <span className="section-line" />
            <span className="text-sm text-muted tracking-wider">Enfoque</span>
          </div>

          <div className="max-w-3xl">
            <h2 className="heading-lg mb-12">
              No somos una fábrica de consultores.
              <span className="text-muted"> Somos un equipo reducido de especialistas.</span>
            </h2>

            <div className="space-y-8 text-muted">
              <p>
                Cada proyecto de Sertoria tiene involucrados a los mismos 
                profesionales que diseñaron la estrategia. No hay juniors 
                aprendiendo a tu costa. No hay rotación de personal a mitad 
                de proyecto. Las mismas personas que hacen el diagnóstico 
                son las que implementan la solución.
              </p>
              <p>
                Trabajamos con pocos clientes a la vez. Preferimos hacer 
                menos proyectos, pero hacerlos bien. Cada cliente merece 
                nuestra atención completa, no ser un número en un pipeline.
              </p>
              <p>
                Colaboramos con una red de especialistas según las necesidades 
                de cada proyecto: científicos de datos, ingenieros de ML, 
                expertos en cloud, diseñadores de producto. Siempre el equipo 
                adecuado para el desafío específico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
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
            className="inline-flex items-center gap-3 border border-white px-10 py-5 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          >
            Hablemos
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
