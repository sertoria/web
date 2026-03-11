# Sertoria

**Inteligencia Artificial Empresarial**

Web corporativa de Sertoria, consultora especializada en IA empresarial: analítica avanzada, optimización de procesos e implantación estratégica.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Estilos:** Tailwind CSS v4
- **Tipografías:** Cormorant Garamond (serif) + Inter (sans)
- **Lenguaje:** TypeScript

## Diseño

Inspirado en [Obsidian Assembly](https://obsidianassembly.com/):
- Minimalista, dark mode
- Mucho whitespace
- Tipografía serif elegante
- Animaciones sutiles
- Copy evocador pero profesional

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing principal |
| `/servicios` | Servicios de IA (Analítica, Optimización, Implantación, IA Generativa) |
| `/metodologia` | Principios y fases de trabajo |
| `/nosotros` | Historia, valores y enfoque |
| `/contacto` | Formulario de contacto |

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Servir build
npm start
```

## Deploy

Preparado para deploy en:
- **Vercel** (recomendado): `vercel deploy`
- **Cualquier hosting Node.js**
- **Static export**: añadir `output: 'export'` en `next.config.ts`

## TODO

- [ ] Conectar formulario de contacto con backend (Resend, SendGrid, etc.)
- [ ] Añadir favicon y OG images personalizados
- [ ] SEO: meta tags específicos por página
- [ ] Analytics (Plausible, Vercel Analytics)
- [ ] Página de política de privacidad
- [ ] Blog/casos de estudio (opcional)

## Estructura

```
src/
├── app/
│   ├── page.tsx          # Home
│   ├── servicios/
│   ├── metodologia/
│   ├── nosotros/
│   ├── contacto/
│   ├── layout.tsx        # Layout global
│   └── globals.css       # Estilos globales
└── components/
    ├── Navigation.tsx
    └── Footer.tsx
```

---

*La excelencia precede al resultado.*
