"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ContactoPage() {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    empresa: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío (conectar con backend real)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="grid-bg noise-overlay page-transition pt-32">
      {/* Header */}
      <section className="px-6 md:px-12 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted text-sm tracking-widest mb-6 animate-fade-in opacity-0">Contacto</p>
          <h1 className="heading-xl max-w-4xl animate-fade-in opacity-0 animate-delay-100">
            Iniciemos<br />
            <span className="text-muted">una conversación</span>
          </h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Left column - Info */}
            <div>
              <ScrollReveal>
                <div className="flex items-center mb-12">
                  <span className="section-number">01</span>
                  <span className="section-line" />
                  <span className="text-sm text-muted tracking-wider">El primer paso</span>
                </div>

                <h2 className="heading-lg mb-8">
                  No hay compromiso.<br />
                  <span className="text-muted">Solo una conversación.</span>
                </h2>

                <div className="space-y-6 text-muted mb-12">
                  <p>
                    Cuéntenos brevemente sobre su organización y lo que tiene en mente. 
                    No necesita una propuesta estructurada ni un brief detallado. 
                    A veces las mejores conversaciones empiezan con "tenemos un problema 
                    y no sabemos si la IA puede ayudar".
                  </p>
                  <p>
                    Respondemos en 24-48 horas. Si lo que nos cuenta encaja con lo que 
                    hacemos, proponemos una llamada de 30 minutos. Sin presentaciones 
                    corporativas, sin equipo comercial. Solo las personas que trabajarían 
                    en su proyecto.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="space-y-8 border-t border-white/10 pt-8">
                  <div className="group">
                    <h3 className="text-sm tracking-wider uppercase text-muted mb-3">Email directo</h3>
                    <a 
                      href="mailto:hola@sertoria.com" 
                      className="heading-md hover-line inline-block"
                    >
                      hola@sertoria.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm tracking-wider uppercase text-muted mb-3">Ubicación</h3>
                    <p className="text-lg">Madrid, España</p>
                    <p className="text-muted text-sm mt-2">
                      Trabajamos en remoto con clientes en toda Europa
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm tracking-wider uppercase text-muted mb-3">Horario</h3>
                    <p className="text-muted text-sm">
                      Lunes a Viernes, 9:00 - 18:00 CET
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right column - Form */}
            <ScrollReveal delay={150}>
              <div>
                {isSubmitted ? (
                  <div className="border border-white/20 p-12 text-center h-full flex flex-col justify-center">
                    <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h3 className="heading-md mb-4">Mensaje recibido</h3>
                    <p className="text-muted">
                      Gracias por contactarnos. Responderemos en las próximas 24-48 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm tracking-wider uppercase text-muted mb-3">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.nombre}
                          onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                          className="w-full bg-transparent border border-white/20 px-4 py-4 text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>

                      <div>
                        <label className="block text-sm tracking-wider uppercase text-muted mb-3">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-transparent border border-white/20 px-4 py-4 text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors"
                          placeholder="tu@empresa.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm tracking-wider uppercase text-muted mb-3">
                        Empresa
                      </label>
                      <input
                        type="text"
                        value={formState.empresa}
                        onChange={(e) => setFormState({ ...formState, empresa: e.target.value })}
                        className="w-full bg-transparent border border-white/20 px-4 py-4 text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div>
                      <label className="block text-sm tracking-wider uppercase text-muted mb-3">
                        ¿Cómo podemos ayudar? *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={formState.mensaje}
                        onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                        className="w-full bg-transparent border border-white/20 px-4 py-4 text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors resize-none"
                        placeholder="Cuéntanos sobre tu proyecto o desafío..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-glow w-full border border-white px-8 py-5 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </span>
                      ) : (
                        <span>Enviar Mensaje →</span>
                      )}
                    </button>

                    <p className="text-xs text-muted text-center pt-4">
                      Al enviar este formulario, aceptas nuestra política de privacidad.
                      <br />
                      No compartimos tus datos con terceros.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map or additional section */}
      <section className="py-16 px-6 md:px-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-medium mb-2">Respuesta rápida</h3>
                <p className="text-sm text-muted">24-48 horas máximo</p>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="font-medium mb-2">Sin compromiso</h3>
                <p className="text-sm text-muted">Primera conversación gratuita</p>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="font-medium mb-2">Confidencial</h3>
                <p className="text-sm text-muted">NDA disponible si lo necesitas</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
