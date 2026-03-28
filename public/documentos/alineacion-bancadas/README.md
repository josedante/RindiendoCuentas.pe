# Alineación entre bancadas (co-votación)

Metodología del análisis publicado en `/alineacion-bancadas`. El código fuente está en `src/data/bancada-alignment.ts` y `src/data/bancada-canonical.ts`.

## Objetivo

Medir **similitud de comportamiento** entre bancadas parlamentarias en las votaciones que RindiendoCuentas.pe ya reconstruye: no son «alianzas» declaradas ni una única dimensión ideológica, sino **correlación de co-votación** entre totales agregados por bancada.

## Fuentes de datos

| Origen | Módulo | Inclusión |
|--------|--------|-----------|
| Leyes pro-crimen | `src/data/pro-crime-laws.ts`, etapas en `voteStages` | Cada etapa con filas por bancada |
| Blindaje institucional | `src/data/blindaje-cases.ts` | Cada caso **excepto** `los-ninos` |
| Leyes de gasto (marzo 2026) | `src/data/laws.ts` | Una corte por ley (`votes`) |
| Contrarreforma universitaria | `src/data/contrarreforma-laws.ts` | Una corte por hito (`votes`) |

## Exclusiones explícitas

1. **Caso «Los Niños»** (`blindaje-cases`, id `los-ninos`): las filas son imputados, no bancadas; la semántica de `aFavor` / `enContra` no es comparable al resto.
2. **Etapas solo con total agregado**: p. ej. segunda votación en Comisión Permanente de la ley 32108 cuando la única fila es `Total — Comisión Permanente (acta)` (`pro-crime-laws.ts`, `notaCp32108`).
3. **Votaciones sin oposición** (tras canonicalización): si la suma de `enContra` en todas las bancadas es **0**, la corte no entra en el análisis (evita dominar la correlación con plenos unánimes).

## Canonicalización de nombres

Las etiquetas de acta difieren entre informes (`Alianza para el Progreso (APP)` vs `Alianza para el Progreso`, `Bloque Magisterial` vs `Juntos por el Perú - Bloque Magisterial`, etc.). El mapa en `bancada-canonical.ts` fusiona alias en un **id estable** y un **nombre para mostrar** único.

Las filas **agrupadas por diseño** en los datos fuente —por ejemplo, en la Denuncia Constitucional 509— no se descomponen en bancadas individuales: permanecen como nodos con su etiqueta literal (`pooled-izquierda-dc509`, `pooled-derecha-dc509`).

## Puntuación por bancada y por votación

Para cada bancada con al menos un voto en la corte:

\[
\text{score} = \frac{\text{a favor} - \text{en contra}}{\text{a favor} + \text{en contra} + \text{abstención}}
\]

Las abstenciones cuentan en el denominador y atenúan el valor absoluto del saldo neto.

## Correlación

Entre cada par de bancadas se calcula la **correlación de Pearson** sobre los pares de puntuaciones en las votaciones donde **ambas** bancadas tienen dato. Si hay menos de **4** votaciones compartidas (`MIN_SHARED_VOTES` en código), la celda no se estima (se muestra «—»).

## Roadmap (datos más finos)

- Votación **nominal** por congresista desde PDFs / portal del Congreso, con la misma trazabilidad que el resto del sitio.
- A partir de roll calls nominales: escalas tipo NOMINATE u otras reducciones de dimensión, detección de bloques dentro de bancadas y redes legislativo-legislador.

## Mantenimiento

Al añadir leyes o casos con nuevas etiquetas de bancada, actualizar `ALIAS_TO_CANONICAL` en `bancada-canonical.ts` si la etiqueta no debe aparecer como nodo `raw-*` separado.
