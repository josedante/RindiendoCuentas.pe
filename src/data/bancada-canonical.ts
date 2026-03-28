/**
 * Canonical parliamentary group keys for cross-informe alignment analysis.
 * Maps raw `PartyVote.party` strings from blindaje, procrimen, gasto and universitaria
 * datasets onto stable ids and a single display label per bloc.
 *
 * Synthetic / pooled rows (e.g. DC 509 aggregates) keep their own ids — they are not merged
 * into named bancadas. See public/documentos/alineacion-bancadas/README.md.
 */

import { procrimenPartyOrder } from './procrimen-bancada-mapping';

/** Stable id used in matrices; display label for UI. */
export interface CanonicalParty {
  id: string;
  displayName: string;
}

/**
 * Exact raw label → canonical. Keys must match source data strings byte-for-byte.
 */
const ALIAS_TO_CANONICAL: Record<string, CanonicalParty> = {
  'Fuerza Popular': { id: 'fuerza-popular', displayName: 'Fuerza Popular' },
  'Acción Popular': { id: 'accion-popular', displayName: 'Acción Popular' },
  'Alianza para el Progreso': { id: 'alianza-progreso', displayName: 'Alianza para el Progreso' },
  'Alianza para el Progreso (APP)': { id: 'alianza-progreso', displayName: 'Alianza para el Progreso' },
  'Perú Libre': { id: 'peru-libre', displayName: 'Perú Libre' },
  'Renovación Popular': { id: 'renovacion-popular', displayName: 'Renovación Popular' },
  'Podemos Perú': { id: 'podemos-peru', displayName: 'Podemos Perú' },
  'Somos Perú': { id: 'somos-peru', displayName: 'Somos Perú' },
  'Avanza País': { id: 'avanza-pais', displayName: 'Avanza País' },
  'Juntos por el Perú - Bloque Magisterial': {
    id: 'bloque-magisterial',
    displayName: 'Juntos por el Perú - Bloque Magisterial',
  },
  'Bloque Magisterial de Concertación Nacional': {
    id: 'bloque-magisterial',
    displayName: 'Juntos por el Perú - Bloque Magisterial',
  },
  'Bloque Magisterial': {
    id: 'bloque-magisterial',
    displayName: 'Juntos por el Perú - Bloque Magisterial',
  },
  'Perú Bicentenario': { id: 'peru-bicentenario', displayName: 'Perú Bicentenario' },
  'Honor y Democracia': { id: 'honor-democracia', displayName: 'Honor y Democracia' },
  'Bancada Socialista': { id: 'bancada-socialista', displayName: 'Bancada Socialista' },
  'Bloque Democrático Popular': {
    id: 'bloque-democratico-popular',
    displayName: 'Bloque Democrático Popular',
  },
  'Cambio Democrático - Juntos por el Perú': {
    id: 'cambio-democratico-jpp',
    displayName: 'Cambio Democrático - Juntos por el Perú',
  },
  'Juntos por el Perú - Voces del Pueblo': {
    id: 'jpp-voces-pueblo',
    displayName: 'Juntos por el Perú - Voces del Pueblo',
  },
  'Juntos por el Perú Voces del Pueblo': {
    id: 'jpp-voces-pueblo',
    displayName: 'Juntos por el Perú - Voces del Pueblo',
  },
  'Juntos por el Perú': { id: 'juntos-peru', displayName: 'Juntos por el Perú' },
  'No Agrupados': { id: 'no-agrupados', displayName: 'No Agrupados' },
  'Otras bancadas de izquierda / No agrupados': {
    id: 'pooled-izquierda-dc509',
    displayName: 'Otras bancadas de izquierda / No agrupados',
  },
  'Otras bancadas de derecha y centro (FP, Avanza País, RP, etc.)': {
    id: 'pooled-derecha-dc509',
    displayName: 'Otras bancadas de derecha y centro (FP, Avanza País, RP, etc.)',
  },
};

function slugFromRaw(raw: string): string {
  return (
    raw
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{M}/gu, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 80) || 'unknown'
  );
}

/** Map a source row label to canonical id + display name. */
export function canonicalizeParty(raw: string): CanonicalParty {
  const known = ALIAS_TO_CANONICAL[raw];
  if (known) return known;
  const id = `raw-${slugFromRaw(raw)}`;
  return { id, displayName: raw };
}

/** Display label for a canonical id when the id came from a known alias. */
export function displayNameForCanonicalId(id: string): string | undefined {
  for (const c of Object.values(ALIAS_TO_CANONICAL)) {
    if (c.id === id) return c.displayName;
  }
  return undefined;
}

/** Row is a single aggregate total, not a bancada breakdown. */
export function isAggregateTotalRow(party: string): boolean {
  return /^Total\s+[—\-]/i.test(party.trim()) || party.includes('Total —');
}

/**
 * Display order: procrimen bloc order first, then pooled / extra ids, then alphabetical.
 */
export function sortCanonicalIds(ids: string[], idToDisplay: Map<string, string>): string[] {
  const orderIndex = new Map<string, number>();
  procrimenPartyOrder.forEach((name, i) => {
    const entry = Object.values(ALIAS_TO_CANONICAL).find((c) => c.displayName === name);
    if (entry) orderIndex.set(entry.id, i);
  });
  ['juntos-peru', 'pooled-izquierda-dc509', 'pooled-derecha-dc509'].forEach((id, i) => {
    if (!orderIndex.has(id)) orderIndex.set(id, 80 + i);
  });

  return [...ids].sort((a, b) => {
    const ia = orderIndex.get(a);
    const ib = orderIndex.get(b);
    if (ia !== undefined && ib !== undefined && ia !== ib) return ia - ib;
    if (ia !== undefined && ib === undefined) return -1;
    if (ia === undefined && ib !== undefined) return 1;
    const da = idToDisplay.get(a) ?? a;
    const db = idToDisplay.get(b) ?? b;
    return da.localeCompare(db, 'es');
  });
}
