/**
 * Canonical parliamentary group labels for procrimen vote data (legislature 2021–2026).
 *
 * Aligns with `partyNames` in laws.ts where the same bancada exists. Extra groups
 * that appear in actas from this period but not in the March 2026 gasto dataset are
 * included here for display consistency.
 *
 * Acta / media label → display name (use display name in PartyVote.party):
 * - "Bloque Magisterial de Concertación" → "Juntos por el Perú - Bloque Magisterial"
 * - "Cambio Democrático - Juntos por el Perú" → "Cambio Democrático - Juntos por el Perú"
 * - "Alianza para el Progreso (APP)" → "Alianza para el Progreso"
 * - "Juntos por el Perú - Voces del Pueblo" → "Juntos por el Perú - Voces del Pueblo"
 *
 * See public/documentos/votaciones-procrimen/README.md for per-stage methodology.
 */

/** Suggested sort order for charts (largest typical blocs first, then alphabetical tail). */
export const procrimenPartyOrder: string[] = [
  'Fuerza Popular',
  'Alianza para el Progreso',
  'Perú Libre',
  'Podemos Perú',
  'Renovación Popular',
  'Acción Popular',
  'Somos Perú',
  'Avanza País',
  'Juntos por el Perú - Bloque Magisterial',
  'Perú Bicentenario',
  'Honor y Democracia',
  'Bancada Socialista',
  'Bloque Democrático Popular',
  'Cambio Democrático - Juntos por el Perú',
  'Juntos por el Perú - Voces del Pueblo',
  'No Agrupados',
];
