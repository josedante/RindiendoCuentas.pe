# Votaciones Nominales — Leyes Pro-Crimen (2023–2024)

Actas oficiales de asistencia y votación del Congreso de la República del Perú,
correspondientes a las sesiones donde se aprobaron las seis leyes identificadas por el
Ministerio Público como debilitantes del sistema de persecución penal.

## Fuente primaria

Portal de Asistencias y Votaciones del Pleno y la Comisión Permanente:
https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/new_asistenciavotacion?OpenForm

El sitio web enlaza directamente a cada PDF en **congreso.gob.pe**; no se hospedan copias
(p. ej. por límites de tamaño en hosting estático).

## Enlaces a actas (portal del Congreso)

| Id | Sesión | Ley(es) relevante(s) | PDF oficial |
|----|--------|----------------------|-------------|
| Pleno 13/04/2023 | 1ra votación | Ley 31751 (Ley Soto) — 79 a favor | [Abrir PDF](https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/BC4178D0A2AA9C4E0525899700524FBA/$FILE/Asis_vot_OFICIAL_13-04-2023.pdf) |
| Pleno 11/05/2023 | 2da votación | Ley 31751 — 90 a favor | [Abrir PDF](https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/29472350CE0C791F052589B30062CAB5/$FILE/Asis_vot_OFICIAL_11-05-23.pdf) |
| Pleno 14/12/2023 | Insistencia | Ley 31990 (Colaboración eficaz) — 89-15-2 | [Abrir PDF](https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/B4F7B160875C072805258A85005AFFF5/$FILE/Asis_y_vot_OFICIAL_de_la_sesión_del-14-12-2023.pdf) |
| Pleno 06/06/2024 | 1.ª votación | Ley 32107 (Lesa humanidad, PL 6951) — 60-36-11 | [Abrir PDF](https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/EF0AF29DCB91CC5C05258B340065377D/$FILE/Asis_y_vot_de_la_sesión_del_6-6-2024.pdf) |
| Pleno 30/05/2024 | 1ra votación | Ley 32108 (Crimen organizado) — 50 a favor | [Abrir PDF](https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/63269A17867358D305258B2D0063AE77/$FILE/Asis_y_vot_de_la_sesión_del_30-5-2024.pdf) |
| Pleno 16/10/2024 | Modificatoria | Ley 32138 (modifica 32108) — 81-23-8 | [Abrir PDF](https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/4FCA4A4E8B40D3E805258BB8006FDC39/$FILE/Asis_y_vot_del_16_10_2024.pdf) |
| Pleno 21/11/2024 | Votaciones de sesión | Leyes 32181 y 32182 | [Abrir PDF](https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/3A18859F9196262905258BDC00623E7D/$FILE/Asis_y_vot_del_21_11_2024.pdf) |
| Pleno 22/11/2024 | Votaciones de sesión | Leyes 32181 y 32182 | [Abrir PDF](https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/36DA964D8B7C547A05258BDD00772364/$FILE/Asis_y_vot_del_22_11_2024.pdf) |

## Matriz ley → etapa → desglose por bancada

Los valores por bancada viven en `src/data/pro-crime-stages-votes.ts` y se ensamblan en
`src/data/pro-crime-laws.ts`. Cada etapa puede tener `dataProvenance` y `sourceNote`
en la página web. Leyenda:

| Código en UI | Significado |
|--------------|-------------|
| `acta_oficial` | Transcripción manual desde el PDF del acta (objetivo del proyecto). |
| `acta_total_solamente` | Solo se publica el total agregado; sin PDF indexado o sin desglose nominal transcrito. |
| `fuente_secundaria` | Reconstrucción a partir de prensa / informes; cuadrada con el total del acta. |
| `estimacion_proporcional` | Distribución Hamilton u otro reparto proporcional al total oficial (ver nota en cada etapa). |

| Ley | Etapa | Fecha | Enlace acta (Congreso) | Método del desglose |
|-----|--------|-------|------------------------|---------------------|
| 31751 | 1.ª votación Pleno | 2023-04-13 | Sí (tabla arriba) | Proporcional al total 79 (79-0-0). |
| 31751 | 2.ª votación Pleno | 2023-05-11 | Sí | Proporcional al total 90 (90-0-0). |
| 31990 | 1.ª votación / exoneración | 2023-11-01 | No | Proporcional a totales 85 y 83. |
| 31990 | Insistencia | 2023-12-14 | Sí | Secundario ajustado a 89-15-2. |
| 32107 | 1.ª votación Pleno | 2024-06-06 | Sí | Proporcional (Hamilton) a totales oficiales 60-36-11; contrastar acta. |
| 32107 | 2.ª votación CP | 2024-07-04 | No | Secundario nominal 15-12-0 (sin PDF de CP en el portal del Pleno). |
| 32108 | 1.ª votación Pleno | 2024-05-30 | Sí | Proporcional al total 50. |
| 32108 | 2.ª votación CP | 2024-07-04 | No | Solo total 12-9-3. |
| 32138 | Modificatoria Pleno | 2024-10-16 | Sí | Secundario cuadrado a 81-23-8. |
| 32181 | 1.ª votación / exoneración | 2024-11-21 | Sí (21/11) | Proporcional a 94 y 88. |
| 32182 | 1.ª votación / exoneración | 2024-11-21 / 22 | Sí (21/11 y 22/11) | Proporcional a 84 y 82. |

Mapeo de nombres de bancada (acta → pantalla): `src/data/procrimen-bancada-mapping.ts`.

## Notas

- Cada PDF contiene el acta completa de asistencia y votación de la sesión, no solo la
  votación de la ley específica. Las votaciones de múltiples dictámenes pueden aparecer
  en un mismo archivo.
- Los PDF del portal son imágenes escaneadas; el desglose por bancada del sitio se
  obtuvo por transcripción manual o metodología indicada en la tabla anterior.
- Las votaciones de la Comisión Permanente (Ley 32107 y 2.ª votación de Ley 32108) no
  están disponibles como PDFs individuales en el portal de asistencias del Pleno.
- Última revisión de matrices de datos y enlaces: marzo 2026.

## Fuentes secundarias

- Convoca.pe: "17 congresistas votaron de manera reiterada a favor de leyes procrimen"
  https://convoca.pe/agenda-propia/17-congresistas-votaron-de-manera-reiterada-favor-de-leyes-procrimen-y-ahora-buscan
- Wikipedia: Ley 32108 https://es.wikipedia.org/wiki/Ley_32108
- HRW: "Legislar para la impunidad" https://www.hrw.org/es/report/2025/07/08/legislar-para-la-impunidad
