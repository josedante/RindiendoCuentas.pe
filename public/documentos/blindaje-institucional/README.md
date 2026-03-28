# Blindaje institucional — Metodología y fuentes

Informe en **`/blindaje-institucional`**: cuatro votaciones sobre archivo de denuncias
constitucionales / antejuicios (2023–2026). Los datos agregados viven en
**`src/data/blindaje-cases.ts`** (`BlindajeCase`, `PartyVote[]`). La página usa los mismos
componentes interactivos que el resto del sitio (`VoteDisplay`, `VoteChart`, `VoteTable`).

## Casos e instancia

| Id | Instancia | Fecha (votación clave) | Notas |
|----|-----------|-------------------------|--------|
| `caso-rolex` | SAC | 2025-04-12 | Desglose por bancada según reconstrucción en prensa especializada. |
| `denuncia-509` | Comisión Permanente | 2025-09-11 | **Desglose agregado** por eje político: la síntesis pública no lista nominalmente a los 22 sufragantes; los totales 12-10-0 concilian con la votación de fondo. |
| `patricia-benavides` | SAC | 2025-07-25 | Rechazo del informe que admitía la denuncia = archivo; crónica parlamentaria y comunicaciones del Congreso. |
| `los-ninos` | Pleno | 2023-05-18 | Cada fila es un **imputado**; «A favor» en la UI = votos que rechazaron la acusación (blindaje). |

## Procedencia

- **Congreso:** comunicaciones oficiales, agendas en PDF, Diario de los Debates donde aplica.
- **Prensa e investigación:** desglose nominal cuando el acta no está publicada de inmediato con el mismo nivel de detalle (ej. Caso Rolex).
- **DC 509:** ver nota metodológica en el propio informe y pie bajo el gráfico en la web.

## Cómo actualizar

1. Editar matrices en **`src/data/blindaje-cases.ts`** (sin fila `TOTAL` en `votes`: la tabla del sitio suma las filas).
2. Añadir o cambiar enlaces en `sourceDocuments` del mismo objeto.
3. Si cambia el relato largo, editar **`src/pages/blindaje-institucional.astro`** (introducción, colapsables, conclusión, obras citadas).
4. Ejecutar `npm run build` antes de publicar.

## Enlaces útiles

- Comunicaciones del Congreso: https://comunicaciones.congreso.gob.pe/
- Diario de los Debates: https://www.congreso.gob.pe/diario-de-los-debates
