# RindiendoCuentas.pe

Sitio web interactivo de transparencia legislativa que analiza las votaciones nominales del Congreso de la República del Perú. Cubre dos ejes temáticos: leyes de expansión del gasto público (marzo 2026) y leyes que debilitan el sistema de persecución penal (2023–2024).

## Sobre el proyecto

Este sitio transforma informes analíticos sobre el comportamiento legislativo del Congreso peruano en experiencias interactivas y accesibles.

### Leyes de Gasto Público (Marzo 2026)

5 leyes controversiales aprobadas en vísperas de las elecciones generales de abril de 2026:

1. **Pensiones Magisteriales** — Nivelación a S/ 3,300 mensuales (por insistencia)
2. **Beneficios Laborales CAS (Ley 32563)** — CTS y gratificaciones para 350,000+ servidores
3. **Pensiones Militares y Policiales (Ley 32561)** — Restitución progresiva al 100% (por insistencia)
4. **Bono Veteranos de Pacificación (PL 3385)** — Pensión vitalicia de S/ 1,130
5. **Nombramiento CAS Salud (Ley 32568)** — 9,361 nombramientos automáticos (por insistencia)

### Leyes Pro-Crimen (2023–2024)

6 leyes identificadas por el Ministerio Público y Convoca.pe como debilitantes del sistema de persecución penal:

1. **Ley 31751 (Ley Soto)** — Reducción de plazos de prescripción para delitos de corrupción
2. **Ley 31990 (Colaboración Eficaz)** — Límites temporales al proceso de colaboración eficaz (insistencia)
3. **Ley 32107 (Lesa Humanidad)** — Redefinición de delitos de lesa humanidad
4. **Ley 32108 (Crimen Organizado)** — Redefinición de organización criminal + abogado en allanamientos
5. **Ley 32181 (Detención Preliminar)** — Eliminación de la detención preliminar sin flagrancia
6. **Ley 32182 (Sanciones a Fiscales)** — Régimen sancionador para fiscales y jueces

## Stack técnico

- **[Astro](https://astro.build/) v6** — Framework de sitio estático con islands architecture
- **[Tailwind CSS](https://tailwindcss.com/) v4** — Utilidades CSS vía `@tailwindcss/vite`
- **[Chart.js](https://www.chartjs.org/) v4** — Gráficos interactivos de barras horizontales apiladas
- **TypeScript** — Datos de votación tipados

## Estructura del proyecto

```
src/
  components/
    Layout.astro              # HTML base, meta tags, JSON-LD, global CSS
    Header.astro              # Barra de navegación superior fija con cross-page nav
    HeroSection.astro         # Sección hero con estadísticas resumen (gasto)
    TableOfContents.astro     # Sidebar fijo (desktop) / drawer (mobile) con scroll-spy
    LawSection.astro          # Wrapper reutilizable para cada ley
    VoteChart.astro           # Gráfico Chart.js de barras horizontales apiladas
    VoteTable.astro           # Tabla HTML con ordenamiento por columnas
    VoteDisplay.astro         # Toggle entre vista de gráfico y tabla
    VoteStages.astro          # Tabs para leyes con múltiples etapas de votación
    SourceDocuments.astro     # Links de descarga de PDFs fuente
    ComparisonChart.astro     # Gráfico comparativo entre leyes (gasto)
    CollapsibleText.astro     # Sección expandible (<details>/<summary>)
    Footer.astro              # Pie de página con fuentes y créditos
  data/
    types.ts                  # Interfaces TypeScript (PartyVote, Law, VoteStage, etc.)
    laws.ts                   # Datos de votación — 5 leyes de gasto + helpers
    pro-crime-laws.ts         # Datos de votación — 6 leyes pro-crimen + helpers
  pages/
    index.astro               # Leyes de gasto público (marzo 2026)
    leyes-procrimen.astro     # Leyes pro-crimen (2023–2024)
  styles/
    global.css                # Tailwind CSS + tokens de diseño + tipografía
public/
  documentos/
    votaciones-procrimen/     # PDFs escaneados de actas de votación del Congreso
      README.md               # Proveniencia y enlaces originales
```

## Desarrollo local

**Requisitos:** Node.js >= 22.12.0

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:4321)
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación
npm run preview
```

## Datos de votación

### Leyes de gasto (`src/data/laws.ts`)

Array tipado de objetos `Law` con datos de votación por bancada para las 5 leyes de gasto. Fuentes: Actas del Pleno, comunicaciones del Congreso, Diario Oficial El Peruano.

### Leyes pro-crimen (`src/data/pro-crime-laws.ts`)

Array tipado de objetos `Law` con soporte para múltiples etapas de votación (`voteStages`) y documentos fuente (`sourceDocuments`). Los datos agregados provienen de fuentes secundarias verificadas (los PDFs originales son imágenes escaneadas sin texto extraíble).

Para agregar datos de futuras votaciones, crear un nuevo objeto `Law` siguiendo la misma estructura y agregarlo al array correspondiente.

### Fuentes de datos

**Leyes de gasto:**
- Actas del Pleno del Congreso de la República
- Comunicaciones del Congreso (comunicaciones.congreso.gob.pe)
- Diario Oficial El Peruano
- Plataforma del Estado Peruano (gob.pe)

**Leyes pro-crimen:**
- Actas de Asistencia y Votación del Pleno (PDFs escaneados, hospedados en `/documentos/votaciones-procrimen/`)
- Convoca.pe: "17 congresistas votaron de manera reiterada a favor de leyes procrimen"
- Human Rights Watch: "Legislar para la Impunidad" (julio 2025)
- La República, Infobae Peru, Wikipedia (per-party data where available)

## Despliegue

El sitio genera HTML estático (`output: "static"` por defecto en Astro). Compatible con cualquier proveedor de hosting estático:

- **Netlify**: `npm run build` → directorio `dist/`
- **Vercel**: detecta Astro automáticamente
- **Cloudflare Pages**: `npm run build` → directorio `dist/`
- **GitHub Pages**: configurar GitHub Action con `npm run build`

## Licencia

Proyecto de transparencia y fiscalización ciudadana. Sin afiliación con el Congreso de la República ni con ningún grupo parlamentario.
