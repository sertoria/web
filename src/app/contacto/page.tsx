"use client";

import { useState } from "react";

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
    <div className="grid-bg pt-32">
      {/* Header */}
      <section className="px-6 md:px-12 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted text-sm tracking-widest mb-6">Contacto</p>
          <h1 className="heading-xl max-w-4xl">
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

              <div className="space-y-6 border-t border-white/10 pt-8">
                <div>
                  <h3 className="text-sm tracking-wider uppercase text-muted mb-2">Email directo</h3>
                  <a 
                    href="mailto:hola@sertoria.com" 
                    className="heading-md hover-line"
                  >
                    hola@sertoria.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm tracking-wider uppercase text-muted mb-2">Ubicación</h3>
                  <p>Madrid, España</p>
                  <p className="text-muted text-sm mt-1">Trabajamos en remoto con clientes en toda Europa</p>
                </div>
              </div>
            </div>

            {/* Right column - Form */}
            <div>
              {isSubmitted ? (
                <div className="border border-white/20 p-12 text-center">
                  <span className="font-serif text-5xl mb-6 block">✓</span>
                  <h3 className="heading-md mb-4">Mensaje recibido</h3>
                  <p className="text-muted">
                    Gracias por contactarnos. Responderemos en las próximas 24-48 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-sm tracking-wider uppercase text-muted mb-3">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.nombre}
                      onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                      className="w-full bg-transparent border border-white/20 px-4 py-4 text-white focus:border-white/50 focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm tracking-wider uppercase text-muted mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border border-white/20 px-4 py-4 text-white focus:border-white/50 focus:outline-none transition-colors"
                      placeholder="tu@empresa.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm tracking-wider uppercase text-muted mb-3">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={formState.empresa}
                      onChange={(e) => setFormState({ ...formState, empresa: e.target.value })}
                      className="w-full bg-transparent border border-white/20 px-4 py-4 text-white focus:border-white/50 focus:outline-none transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div>
                    <label className="block text-sm tracking-wider uppercase text-muted mb-3">
                      ¿Cómo podemos ayudar?
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formState.mensaje}
                      onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                      className="w-full bg-transparent border border-white/20 px-4 py-4 text-white focus:border-white/50 focus:outline-none transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto o desafío..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full border border-white px-8 py-5 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje →"}
                  </button>

                  <p className="text-xs text-muted text-center">
                    Al enviar este formulario, aceptas nuestra política de privacidad.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
