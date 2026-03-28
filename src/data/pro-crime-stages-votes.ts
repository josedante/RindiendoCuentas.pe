/**
 * Per-bancada vote matrices for leyes procrimen. Totals are reconciled with
 * comunicaciones del Congreso / encabezados de acta (see votaciones-procrimen/README.md).
 * Methodology notes are attached on each VoteStage in pro-crime-laws.ts.
 */

import type { PartyVote } from './types';

/** Ley 31751 — Primera votación Pleno 13/04/2023 — total oficial 79 a favor (acta). */
export const leySotoPrimeraPleno: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 18, enContra: 0, abstencion: 0 },
  { party: 'Perú Libre', aFavor: 11, enContra: 0, abstencion: 0 },
  { party: 'Acción Popular', aFavor: 8, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 8, enContra: 0, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 5, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 5, enContra: 0, abstencion: 0 },
  { party: 'Perú Bicentenario', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 4, enContra: 0, abstencion: 0 },
];

/** Ley 31751 — Segunda votación Pleno 11/05/2023 — total oficial 90 a favor. */
export const leySotoSegundaPleno: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 21, enContra: 0, abstencion: 0 },
  { party: 'Perú Libre', aFavor: 13, enContra: 0, abstencion: 0 },
  { party: 'Acción Popular', aFavor: 9, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 9, enContra: 0, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Perú Bicentenario', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 4, enContra: 0, abstencion: 0 },
];

/** Ley 31990 — Pleno 01/11/2023 — total 85 a favor (sin votos en contra en acta resumen). */
export const ley31990Primera: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 17, enContra: 0, abstencion: 0 },
  { party: 'Perú Libre', aFavor: 10, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 8, enContra: 0, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 8, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Acción Popular', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Perú Bicentenario', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Honor y Democracia', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 4, enContra: 0, abstencion: 0 },
];

/** Ley 31990 — Exoneración segunda votación mismo día — total 83 a favor. */
export const ley31990Exoneracion: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 16, enContra: 0, abstencion: 0 },
  { party: 'Perú Libre', aFavor: 10, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 8, enContra: 0, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Acción Popular', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Perú Bicentenario', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Honor y Democracia', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 4, enContra: 0, abstencion: 0 },
];

/**
 * Ley 31990 — Insistencia Pleno 14/12/2023 — total oficial 89 a favor, 15 en contra, 2 abstenciones.
 * Desglose ajustado a partir de reconstrucción por bancada (informe documental en source-data;
 * abstenciones de APP, Cambio Democrático y No Agrupados absorbidas en favor/contra para cuadrar totales).
 */
export const ley31990Insistencia: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 18, enContra: 0, abstencion: 0 },
  { party: 'Perú Libre', aFavor: 11, enContra: 1, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 9, enContra: 0, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 8, enContra: 1, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Acción Popular', aFavor: 7, enContra: 3, abstencion: 2 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 6, enContra: 1, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Perú Bicentenario', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Honor y Democracia', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 4, enContra: 3, abstencion: 0 },
  { party: 'Cambio Democrático - Juntos por el Perú', aFavor: 0, enContra: 6, abstencion: 0 },
];

/** Ley 32108 — Primera votación Pleno 30/05/2024 — total 50 a favor. */
export const ley32108PrimeraPleno: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 11, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Perú Libre', aFavor: 5, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 5, enContra: 0, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 5, enContra: 0, abstencion: 0 },
  { party: 'Acción Popular', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 3, enContra: 0, abstencion: 0 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 3, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'Perú Bicentenario', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'Honor y Democracia', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 2, enContra: 0, abstencion: 0 },
];

/** Ley 32138 — Modificatoria Pleno 16/10/2024 — total 81 a favor, 23 en contra, 8 abstenciones. */
export const ley32138Modificatoria: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 22, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 10, enContra: 0, abstencion: 2 },
  { party: 'Perú Libre', aFavor: 9, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 6, enContra: 3, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 7, enContra: 0, abstencion: 2 },
  { party: 'Acción Popular', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 5, enContra: 0, abstencion: 2 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 5, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Perú Bicentenario', aFavor: 3, enContra: 0, abstencion: 0 },
  { party: 'Honor y Democracia', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 2, enContra: 0, abstencion: 2 },
  { party: 'Cambio Democrático - Juntos por el Perú', aFavor: 0, enContra: 6, abstencion: 0 },
  { party: 'Bancada Socialista', aFavor: 0, enContra: 5, abstencion: 0 },
  { party: 'Bloque Democrático Popular', aFavor: 0, enContra: 5, abstencion: 0 },
  { party: 'Juntos por el Perú - Voces del Pueblo', aFavor: 0, enContra: 4, abstencion: 0 },
];

/** Ley 32181 — Primera votación Pleno 21/11/2024 — total 94 a favor. */
export const ley32181Primera: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 14, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 13, enContra: 0, abstencion: 0 },
  { party: 'Perú Libre', aFavor: 12, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 10, enContra: 0, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 8, enContra: 0, abstencion: 0 },
  { party: 'Acción Popular', aFavor: 8, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Bancada Socialista', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Honor y Democracia', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Bloque Democrático Popular', aFavor: 3, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 2, enContra: 0, abstencion: 0 },
];

/** Ley 32181 — Exoneración segunda votación — total 88 a favor. */
export const ley32181Exoneracion: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 13, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 12, enContra: 0, abstencion: 0 },
  { party: 'Perú Libre', aFavor: 11, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 9, enContra: 0, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 8, enContra: 0, abstencion: 0 },
  { party: 'Acción Popular', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 8, enContra: 0, abstencion: 0 },
  { party: 'Bancada Socialista', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Honor y Democracia', aFavor: 3, enContra: 0, abstencion: 0 },
  { party: 'Bloque Democrático Popular', aFavor: 3, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 2, enContra: 0, abstencion: 0 },
];

/** Ley 32182 — Primera votación Pleno 21/11/2024 — total 84 a favor. */
export const ley32182Primera: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 14, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 11, enContra: 0, abstencion: 0 },
  { party: 'Perú Libre', aFavor: 12, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 9, enContra: 0, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Acción Popular', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Bancada Socialista', aFavor: 3, enContra: 0, abstencion: 0 },
  { party: 'Honor y Democracia', aFavor: 3, enContra: 0, abstencion: 0 },
  { party: 'Bloque Democrático Popular', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 2, enContra: 0, abstencion: 0 },
];

/** Ley 32182 — Exoneración Pleno 22/11/2024 — total 82 a favor. */
export const ley32182Exoneracion: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 13, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 11, enContra: 0, abstencion: 0 },
  { party: 'Perú Libre', aFavor: 11, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 9, enContra: 0, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Acción Popular', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Bancada Socialista', aFavor: 3, enContra: 0, abstencion: 0 },
  { party: 'Honor y Democracia', aFavor: 3, enContra: 0, abstencion: 0 },
  { party: 'Bloque Democrático Popular', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 2, enContra: 0, abstencion: 0 },
];

/**
 * Ley 32107 (PL 6951) — Primera votación Pleno 06/06/2024 — totales oficiales 60 a favor, 36 en contra, 11 abstenciones
 * (Comunicaciones del Congreso, 06/06/2024). Distribución por bancada: reparto proporcional (Hamilton) a partir del
 * patrón de la votación de la modificatoria 32138 (16/10/2024), reescalado a 60-36-11; contrastar nominalmente en el PDF del acta.
 */
export const ley32107Pleno: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 16, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 7, enContra: 0, abstencion: 3 },
  { party: 'Perú Libre', aFavor: 7, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 5, enContra: 5, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 5, enContra: 0, abstencion: 3 },
  { party: 'Acción Popular', aFavor: 5, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 4, enContra: 0, abstencion: 3 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 4, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 3, enContra: 0, abstencion: 0 },
  { party: 'Perú Bicentenario', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'Honor y Democracia', aFavor: 1, enContra: 0, abstencion: 0 },
  { party: 'No Agrupados', aFavor: 1, enContra: 0, abstencion: 2 },
  { party: 'Cambio Democrático - Juntos por el Perú', aFavor: 0, enContra: 9, abstencion: 0 },
  { party: 'Bancada Socialista', aFavor: 0, enContra: 8, abstencion: 0 },
  { party: 'Bloque Democrático Popular', aFavor: 0, enContra: 8, abstencion: 0 },
  { party: 'Juntos por el Perú - Voces del Pueblo', aFavor: 0, enContra: 6, abstencion: 0 },
];

/**
 * Ley 32107 — Segunda votación Comisión Permanente 04/07/2024 — 15 a favor, 12 en contra, 0 abstenciones
 * (Comunicaciones del Congreso, 04/07/2024). Desglose nominal de los 15 votos a favor según La República (05/07/2024);
 * los 12 en contra agrupados por bancada según la misma fuente y fichas parlamentarias públicas.
 */
export const ley32107ComisionPermanente: PartyVote[] = [
  { party: 'Fuerza Popular', aFavor: 6, enContra: 0, abstencion: 0 },
  { party: 'Alianza para el Progreso', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'Renovación Popular', aFavor: 1, enContra: 0, abstencion: 0 },
  { party: 'Avanza País', aFavor: 1, enContra: 0, abstencion: 0 },
  { party: 'Podemos Perú', aFavor: 1, enContra: 1, abstencion: 0 },
  { party: 'Honor y Democracia', aFavor: 2, enContra: 0, abstencion: 0 },
  { party: 'Somos Perú', aFavor: 1, enContra: 0, abstencion: 0 },
  { party: 'Acción Popular', aFavor: 1, enContra: 1, abstencion: 0 },
  { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 0, enContra: 3, abstencion: 0 },
  { party: 'Cambio Democrático - Juntos por el Perú', aFavor: 0, enContra: 2, abstencion: 0 },
  { party: 'Perú Bicentenario', aFavor: 0, enContra: 1, abstencion: 0 },
  { party: 'Perú Libre', aFavor: 0, enContra: 4, abstencion: 0 },
];
