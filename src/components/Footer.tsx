import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="heading-md mb-4">Sertoria</h3>
            <p className="text-muted text-sm max-w-md leading-relaxed">
              Inteligencia artificial al servicio de la empresa. 
              Transformamos organizaciones mediante analítica avanzada, 
              optimización de procesos e implantación estratégica de IA.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider uppercase text-muted">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/servicios" className="hover-line">Servicios</Link></li>
              <li><Link href="/metodologia" className="hover-line">Metodología</Link></li>
              <li><Link href="/nosotros" className="hover-line">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover-line">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider uppercase text-muted">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>Madrid, España</li>
              <li>
                <a href="mailto:hola@sertoria.com" className="hover:text-white transition-colors">
                  hola@sertoria.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} Sertoria. Todos los derechos reservados.</p>
          <p className="text-xs tracking-wider">
            La excelencia precede al resultado
          </p>
        </div>
      </div>
    </footer>
  );
}
