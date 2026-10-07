# ALC Studio Home

Sitio web de ALC Studio Home. Next.js (App Router) + TypeScript + Tailwind CSS 4.
Páginas: Inicio, Servicios, Proyectos (con filtros y antes/después).

## Empezar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # verificación de producción
```

El archivo `.env.local` ya viene listo (copia de `.env.example`). Ajusta:
- `NEXT_PUBLIC_SITE_URL`: dominio final (afecta sitemap, SEO y datos estructurados).
- `NEXT_PUBLIC_CONTACT_EMAIL`: correo que recibe el formulario (hoy el actual; luego `contacto@dominio`).

## Estructura

```
src/
  app/                  rutas y metadata (solo composición, sin lógica)
  config/site.ts        datos del negocio: contacto, redes, navegación (edita aquí)
  components/           layout (Header, Footer, WhatsApp) y ui (Button, SectionHeading)
  features/
    home/               secciones del inicio
    services/data/      servicios y pasos del proceso
    projects/           tipos, datos, componentes (tarjeta, galería, visor antes/después)
    contact/            formulario y proveedor de envío (send-message.ts)
  lib/                  utilidades (whatsapp, seo, cn)
scripts/optimize-images.mjs   optimiza fotos y genera el manifiesto
public/brand/           logos (negro, blanco, solo símbolo)
```

Cada `feature` es independiente. Si el sitio crece (tienda, panel, blog), se agrega una carpeta nueva en `features/` sin tocar el resto. El acceso a datos de proyectos está en `features/projects/data/index.ts`, así se puede cambiar a un CMS o base de datos sin tocar los componentes.

## Agregar un proyecto nuevo

1. Crea `content/raw/<slug>/after/` con las fotos del trabajo terminado y, si corresponde, `content/raw/<slug>/before/` con las del antes. Nómbralas `01.jpg`, `02.jpg`... (el orden del nombre es el orden en la galería; la `01` es la portada).
2. Ejecuta `npm run images` (convierte a WebP, redimensiona y actualiza `manifest.generated.json`).
3. Agrega la ficha en `src/features/projects/data/projects.ts` (título, categoría, ubicación, descripción) con el mismo `slug`.

## Formulario

Usa FormSubmit (sin API key). **La primera vez** que alguien envía el formulario, FormSubmit manda un correo de activación a la casilla destino: hay que abrirlo y confirmar. Para cambiar de proveedor (Resend, etc.) se reemplaza solo `src/features/contact/send-message.ts`.

## Despliegue (Vercel)

Importa el repositorio, define las variables de entorno y despliega. Luego conecta el dominio.
