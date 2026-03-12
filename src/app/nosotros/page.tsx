import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Sertoria",
  description: "Quiénes somos: consultores senior de IA con experiencia en enterprise. Sin consultores junior, sin subcontratación. El equipo que ves es el equipo que trabaja.",
};

export default function NosotrosPage() {
  return (
    <div className="grid-bg noise-overlay page-transition pt-32">
      {/* Header */}
      <section className="px-6 md:px-12 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted text-sm tracking-widest mb-6 animate-fade-in opacity-0">Nosotros</p>
          <h1 className="heading-xl max-w-4xl animate-fade-in opacity-0 animate-delay-100">
            Un equipo pequeño<br />
            <span className="text-muted">que hace cosas grandes</span>
          </h1>
          <p className="text-muted max-w-2xl mt-8 animate-fade-in opacity-0 animate-delay-200 text-lg leading-relaxed">
            No somos una consultora tradicional. No tenemos capas de management, 
            no subcontratamos, y el equipo que conoces en la primera reunión es 
            el mismo que escribe el código.
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-32 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <div className="flex items-center mb-8">
                <span className="section-number">01</span>
                <span className="section-line" />
                <span className="text-sm text-muted tracking-wider">Nuestra filosofía</span>
              </div>
              <h2 className="heading-lg mb-6">
                Creemos que la IA debe servir
                <span className="text-muted"> al negocio, no al revés</span>
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Hemos visto demasiados proyectos de IA que empiezan con la tecnología 
                y buscan un problema que resolver. Nosotros hacemos lo contrario: 
                empezamos por entender el negocio, identificar dónde está el valor 
                real, y solo entonces decidimos si la IA es la respuesta correcta.
              </p>
              <p className="text-muted leading-relaxed">
                A veces la respuesta es que no necesitas IA — necesitas limpiar tus 
                datos, mejorar un proceso, o simplemente una hoja de Excel bien hecha. 
                Y te lo diremos. Preferimos perder un proyecto que construir algo 
                que no genere valor.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="space-y-6">
                {[
                  {
                    title: "El problema primero",
                    description: "Entendemos el contexto antes de proponer soluciones. La tecnología es un medio, no un fin.",
                  },
                  {
                    title: "Resultados medibles",
                    description: "Si no podemos definir cómo se mide el éxito, no empezamos el proyecto.",
                  },
                  {
                    title: "Transparencia radical",
                    description: "Compartimos lo que funciona y lo que no. Sin humo, sin jerga innecesaria.",
                  },
                  {
                    title: "Transferencia de conocimiento",
                    description: "Construimos capacidad interna en tu equipo. No creamos dependencia.",
                  },
                ].map((item, index) => (
                  <div key={index} className="feature-box">
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-32 px-6 md:px-12 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-8">
              <span className="section-number">02</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">El equipo</span>
            </div>
            <h2 className="heading-lg mb-6 max-w-3xl">
              Senior engineers.
              <span className="text-muted"> No hay otra forma.</span>
            </h2>
            <p className="text-muted max-w-2xl mb-16">
              Todos los miembros del equipo tienen mínimo 8 años de experiencia 
              en tecnología y han liderado proyectos de IA en empresas reconocidas. 
              No hay roles junior porque los proyectos de IA empresarial no 
              perdonan la inexperiencia.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                initials: "JM",
                name: "Javier Martín",
                role: "Founder & AI Lead",
                bio: "Ex-Google, ex-Amazon. 15 años en ML/IA. Especialista en NLP y sistemas de recomendación a escala.",
                expertise: ["NLP", "LLMs", "RecSys", "MLOps"],
              },
              {
                initials: "LS",
                name: "Laura Sánchez",
                role: "Lead Data Scientist",
                bio: "PhD en Estadística Computacional. 10 años aplicando ML en finance y healthcare.",
                expertise: ["ML", "Time Series", "Anomaly Detection", "Forecasting"],
              },
              {
                initials: "DR",
                name: "Daniel Rodríguez",
                role: "ML Engineer",
                bio: "Ex-Spotify. Especialista en sistemas de ML en producción y arquitecturas escalables.",
                expertise: ["MLOps", "Kubernetes", "Data Engineering", "Real-time ML"],
              },
              {
                initials: "MG",
                name: "María García",
                role: "Computer Vision Lead",
                bio: "8 años en visión por computador. Ex-Tesla Autopilot. Especialista en deep learning visual.",
                expertise: ["Computer Vision", "Deep Learning", "Edge AI", "Medical Imaging"],
              },
              {
                initials: "PC",
                name: "Pablo Campos",
                role: "Solution Architect",
                bio: "15 años diseñando sistemas enterprise. AWS/GCP certified. Ex-McKinsey Digital.",
                expertise: ["Cloud Architecture", "System Design", "Integration", "Security"],
              },
              {
                initials: "AC",
                name: "Ana Castillo",
                role: "AI Strategy",
                bio: "MBA + Computer Science. 12 años ayudando a empresas a adoptar tecnología de forma efectiva.",
                expertise: ["AI Strategy", "Change Management", "Product", "Business Development"],
              },
            ].map((member, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="card-hover border border-white/10 p-6 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-medium">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-sm text-muted">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="text-[10px] tracking-wider text-muted border border-white/10 px-2 py-0.5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <p className="text-center text-sm text-muted mt-12">
              También colaboramos con una red de especialistas para proyectos 
              que requieren expertise muy específico.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-8">
              <span className="section-number">03</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">Nuestros valores</span>
            </div>
            <h2 className="heading-lg mb-16 max-w-3xl">
              Principios que guían
              <span className="text-muted"> cada decisión</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "◈",
                title: "Honestidad brutal",
                description: "Te decimos lo que necesitas escuchar, no lo que quieres escuchar. Si algo no va a funcionar, lo sabrás antes de gastar dinero en ello.",
              },
              {
                icon: "◇",
                title: "Excelencia técnica",
                description: "Código limpio, documentación completa, mejores prácticas de la industria. El trabajo que entregamos es trabajo del que estamos orgullosos.",
              },
              {
                icon: "○",
                title: "Impacto real",
                description: "No nos interesa construir demos impresionantes que nunca llegan a producción. Queremos ver nuestro trabajo generando valor real.",
              },
              {
                icon: "□",
                title: "Respeto mutuo",
                description: "Tratamos a nuestros clientes como partners inteligentes, no como cheques. Y esperamos el mismo respeto a cambio.",
              },
              {
                icon: "△",
                title: "Mejora continua",
                description: "El campo de la IA evoluciona constantemente. Dedicamos tiempo cada semana a aprender, experimentar y mejorar.",
              },
              {
                icon: "◎",
                title: "Long-term thinking",
                description: "Preferimos relaciones de largo plazo con pocos clientes que muchos proyectos cortos. Construimos para durar.",
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="border-t border-white/20 pt-6">
                  <span className="text-xl text-muted">{value.icon}</span>
                  <h3 className="font-medium mt-4 mb-3">{value.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="py-32 px-6 md:px-12 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center mb-8">
              <span className="section-number">04</span>
              <span className="section-line" />
              <span className="text-sm text-muted tracking-wider">El nombre</span>
            </div>
            <h2 className="heading-lg mb-8">
              ¿Por qué Sertoria?
            </h2>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                Quinto Sertorio fue un general romano del siglo I a.C. que, con 
                recursos limitados y lejos del centro del poder, logró construir 
                un estado independiente en Hispania que resistió durante años 
                contra las legiones de Roma.
              </p>
              <p>
                Su secreto no fue la fuerza bruta — fue la inteligencia. Entendía 
                el terreno mejor que sus enemigos. Conocía a su gente. Sabía cuándo 
                atacar y cuándo esperar. Y sobre todo, sabía que los grandes 
                resultados se consiguen paso a paso, no de golpe.
              </p>
              <p>
                Hay una anécdota famosa: para enseñar a sus tropas por qué la 
                guerrilla era más efectiva que el choque frontal, hizo traer dos 
                caballos. Un hombre fuerte intentó arrancar la cola de uno de un 
                tirón — y falló. Un hombre débil fue arrancando pelo a pelo la 
                cola del otro — y lo logró.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <blockquote className="border-l-2 border-white/30 pl-8 mt-12">
              <p className="text-xl italic leading-relaxed mb-4">
                "La paciencia puede más que la fuerza. Lo que no puede acabarse 
                junto, cede poco a poco."
              </p>
              <footer className="text-sm text-muted">— Quinto Sertorio, según Plutarco</footer>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-muted mt-12 leading-relaxed">
              Ese es nuestro approach: entender antes de actuar, medir antes de 
              escalar, y conseguir resultados sostenibles en lugar de victorias 
              efímeras. La tecnología cambia, pero los principios de buena 
              estrategia son eternos.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "2019", label: "Año de fundación" },
                { number: "50+", label: "Proyectos completados" },
                { number: "6", label: "Personas en el equipo core" },
                { number: "89%", label: "Clientes que repiten" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="stat-number-sm">{stat.number}</div>
                  <p className="text-sm text-muted mt-2">{stat.label}</p>
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
              ¿Te gustaría trabajar con nosotros?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-12">
              Siempre estamos buscando personas excepcionales. Si te apasiona 
              la IA aplicada y quieres trabajar en proyectos que importan, 
              escríbenos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium"
              >
                Contactar
                <span>→</span>
              </Link>
              <a
                href="mailto:careers@sertoria.com"
                className="btn-secondary inline-flex items-center justify-center gap-3 px-8 py-4 text-sm"
              >
                careers@sertoria.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
