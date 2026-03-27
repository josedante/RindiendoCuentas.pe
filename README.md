# RindiendoCuentas.pe

Sitio web interactivo de transparencia legislativa que analiza las votaciones nominales del Congreso de la República del Perú sobre leyes de expansión del gasto público aprobadas en marzo de 2026.

## Sobre el proyecto

Este sitio transforma un informe analítico sobre el comportamiento legislativo del Congreso peruano en una experiencia interactiva y accesible. Cubre 5 leyes controversiales aprobadas en vísperas de las elecciones generales de abril de 2026:

1. **Pensiones Magisteriales** — Nivelación a S/ 3,300 mensuales (por insistencia)
2. **Beneficios Laborales CAS (Ley 32563)** — CTS y gratificaciones para 350,000+ servidores
3. **Pensiones Militares y Policiales (Ley 32561)** — Restitución progresiva al 100% (por insistencia)
4. **Bono Veteranos de Pacificación (PL 3385)** — Pensión vitalicia de S/ 1,130
5. **Nombramiento CAS Salud (Ley 32568)** — 9,361 nombramientos automáticos (por insistencia)

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
    Header.astro              # Barra de navegación superior fija
    HeroSection.astro         # Sección hero con estadísticas resumen
    TableOfContents.astro     # Sidebar fijo (desktop) / drawer (mobile) con scroll-spy
    LawSection.astro          # Wrapper reutilizable para cada ley
    VoteChart.astro           # Gráfico Chart.js de barras horizontales apiladas
    VoteTable.astro           # Tabla HTML con ordenamiento por columnas
    VoteDisplay.astro         # Toggle entre vista de gráfico y tabla
    ComparisonChart.astro     # Gráfico comparativo entre las 5 leyes
    CollapsibleText.astro     # Sección expandible (<details>/<summary>)
    Footer.astro              # Pie de página con fuentes y créditos
  data/
    types.ts                  # Interfaces TypeScript (PartyVote, Law, etc.)
    laws.ts                   # Datos de votación de las 5 leyes + helpers
  pages/
    index.astro               # Página única con todo el contenido
  styles/
    global.css                # Tailwind CSS + tokens de diseño + tipografía
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

Los datos de votación están en `src/data/laws.ts` como un array tipado de objetos `Law`. Cada ley contiene:

- Metadatos (nombre, número de ley, fecha, mecanismo de aprobación, impacto fiscal)
- Array de `PartyVote` con los votos de cada grupo parlamentario (a favor, en contra, abstención)

Para agregar datos de futuras votaciones, crear un nuevo objeto `Law` siguiendo la misma estructura y agregarlo al array `laws`.

### Fuentes de datos

- Actas del Pleno del Congreso de la República
- Comunicaciones del Congreso (comunicaciones.congreso.gob.pe)
- Diario Oficial El Peruano
- Plataforma del Estado Peruano (gob.pe)

## Despliegue

El sitio genera HTML estático (`output: "static"` por defecto en Astro). Compatible con cualquier proveedor de hosting estático:

- **Netlify**: `npm run build` → directorio `dist/`
- **Vercel**: detecta Astro automáticamente
- **Cloudflare Pages**: `npm run build` → directorio `dist/`
- **GitHub Pages**: configurar GitHub Action con `npm run build`

## Licencia

Proyecto de transparencia y fiscalización ciudadana. Sin afiliación con el Congreso de la República ni con ningún grupo parlamentario.
