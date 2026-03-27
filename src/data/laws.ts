/**
 * laws.ts — Structured voting data for the 5 fiscal expansion laws
 * approved by the Peruvian Congress in March 2026.
 *
 * Data transcribed from official plenary session vote records
 * (Actas del Pleno) of the Congress of Peru, March 12, 2026.
 *
 * Sources:
 * - Asistencia y Votaciones a las Sesiones del Pleno, congreso.gob.pe
 * - Comunicaciones del Congreso (comunicaciones.congreso.gob.pe)
 * - Diario Oficial El Peruano (ley promulgada)
 * - Plataforma del Estado Peruano (gob.pe)
 */

import type { Law } from './types';

export const laws: Law[] = [
  // ── 1. Pensiones Magisteriales ──────────────────────────────────────
  {
    id: 'pensiones-magisteriales',
    shortName: 'Pensiones Magisteriales',
    fullName:
      'Ley de Nivelación de Pensiones Magisteriales a la Primera Escala RIM',
    lawNumber: null,
    billNumbers: ['3864', '4786', '8911'],
    date: '2026-03-12',
    mechanism: 'insistencia',
    fiscalImpact:
      'Nivelación a S/ 3,300 mensuales para decenas de miles de maestros cesantes y jubilados. Impacto no cuantificado oficialmente; el MEF advirtió que destruye los fundamentos actuariales de la ONP.',
    votes: [
      { party: 'Fuerza Popular', aFavor: 16, enContra: 0, abstencion: 0 },
      { party: 'Alianza para el Progreso', aFavor: 13, enContra: 0, abstencion: 0 },
      { party: 'Perú Libre', aFavor: 12, enContra: 0, abstencion: 0 },
      { party: 'Podemos Perú', aFavor: 10, enContra: 0, abstencion: 0 },
      { party: 'Renovación Popular', aFavor: 8, enContra: 0, abstencion: 0 },
      { party: 'Acción Popular', aFavor: 8, enContra: 0, abstencion: 0 },
      { party: 'Somos Perú', aFavor: 7, enContra: 0, abstencion: 0 },
      { party: 'Avanza País', aFavor: 2, enContra: 0, abstencion: 3 },
      { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 7, enContra: 0, abstencion: 0 },
      { party: 'Bancada Socialista', aFavor: 4, enContra: 0, abstencion: 0 },
      { party: 'Honor y Democracia', aFavor: 4, enContra: 0, abstencion: 0 },
      { party: 'Bloque Democrático Popular', aFavor: 3, enContra: 0, abstencion: 0 },
      { party: 'No Agrupados', aFavor: 2, enContra: 0, abstencion: 0 },
    ],
  },

  // ── 2. Beneficios CAS (Ley 32563) ──────────────────────────────────
  {
    id: 'beneficios-cas',
    shortName: 'Beneficios Laborales CAS',
    fullName:
      'Ley 32563 sobre Beneficios Laborales y Derechos Plenos para el Régimen CAS',
    lawNumber: '32563',
    billNumbers: [],
    date: '2026-03-12',
    mechanism: 'promulgacion',
    fiscalImpact:
      'Costo fiscal recurrente estimado entre S/ 2,800 y S/ 3,050 millones anuales. Otorga CTS (100% de remuneración por año) y gratificaciones completas a más de 350,000 servidores CAS.',
    votes: [
      { party: 'Fuerza Popular', aFavor: 18, enContra: 0, abstencion: 0 },
      { party: 'Alianza para el Progreso', aFavor: 16, enContra: 0, abstencion: 0 },
      { party: 'Perú Libre', aFavor: 14, enContra: 0, abstencion: 0 },
      { party: 'Podemos Perú', aFavor: 12, enContra: 0, abstencion: 0 },
      { party: 'Renovación Popular', aFavor: 8, enContra: 1, abstencion: 2 },
      { party: 'Acción Popular', aFavor: 9, enContra: 0, abstencion: 0 },
      { party: 'Somos Perú', aFavor: 9, enContra: 0, abstencion: 0 },
      { party: 'Avanza País', aFavor: 4, enContra: 1, abstencion: 1 },
      { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 7, enContra: 0, abstencion: 0 },
      { party: 'Bancada Socialista', aFavor: 5, enContra: 0, abstencion: 0 },
      { party: 'Honor y Democracia', aFavor: 4, enContra: 0, abstencion: 1 },
      { party: 'Bloque Democrático Popular', aFavor: 3, enContra: 0, abstencion: 0 },
      { party: 'No Agrupados', aFavor: 1, enContra: 0, abstencion: 0 },
    ],
  },

  // ── 3. Pensiones Militares y Policiales (Ley 32561) ─────────────────
  {
    id: 'pensiones-militares',
    shortName: 'Pensiones Militares y Policiales',
    fullName:
      'Ley 32561 sobre Reforma de Pensiones del Personal Militar y Policial',
    lawNumber: '32561',
    billNumbers: [],
    date: '2026-03-12',
    mechanism: 'insistencia',
    fiscalImpact:
      'Restituye progresivamente pensión equivalente al 100% de la remuneración en actividad. Aporte mixto: 15% del personal + 10% del Estado. El MEF advirtió descalce actuarial inevitable a largo plazo.',
    votes: [
      { party: 'Fuerza Popular', aFavor: 18, enContra: 0, abstencion: 0 },
      { party: 'Alianza para el Progreso', aFavor: 14, enContra: 0, abstencion: 0 },
      { party: 'Perú Libre', aFavor: 8, enContra: 0, abstencion: 3 },
      { party: 'Podemos Perú', aFavor: 10, enContra: 0, abstencion: 0 },
      { party: 'Renovación Popular', aFavor: 10, enContra: 0, abstencion: 0 },
      { party: 'Acción Popular', aFavor: 8, enContra: 0, abstencion: 0 },
      { party: 'Somos Perú', aFavor: 7, enContra: 0, abstencion: 0 },
      { party: 'Avanza País', aFavor: 6, enContra: 0, abstencion: 0 },
      { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 2, enContra: 0, abstencion: 2 },
      { party: 'Bancada Socialista', aFavor: 2, enContra: 0, abstencion: 0 },
      { party: 'Honor y Democracia', aFavor: 3, enContra: 0, abstencion: 0 },
      { party: 'Bloque Democrático Popular', aFavor: 0, enContra: 0, abstencion: 0 },
      { party: 'No Agrupados', aFavor: 0, enContra: 0, abstencion: 0 },
    ],
  },

  // ── 4. Bono Veteranos Pacificación (PL 3385) ───────────────────────
  {
    id: 'bono-veteranos',
    shortName: 'Bono Veteranos de Pacificación',
    fullName:
      'Proyecto de Ley 3385 sobre el Bono Mensual Vitalicio para Veteranos de la Pacificación',
    lawNumber: null,
    billNumbers: ['3385'],
    date: '2026-03-12',
    mechanism: 'aprobacion',
    fiscalImpact:
      'Pensión mensual vitalicia de S/ 1,130 por veterano calificado. Pasivo permanente sobre el erario. El MEF advirtió que la expansión de padrones podría multiplicar exponencialmente el número de beneficiarios.',
    votes: [
      { party: 'Fuerza Popular', aFavor: 15, enContra: 0, abstencion: 0 },
      { party: 'Alianza para el Progreso', aFavor: 10, enContra: 0, abstencion: 2 },
      { party: 'Perú Libre', aFavor: 5, enContra: 5, abstencion: 2 },
      { party: 'Podemos Perú', aFavor: 8, enContra: 0, abstencion: 0 },
      { party: 'Renovación Popular', aFavor: 9, enContra: 0, abstencion: 0 },
      { party: 'Acción Popular', aFavor: 6, enContra: 1, abstencion: 0 },
      { party: 'Somos Perú', aFavor: 5, enContra: 0, abstencion: 0 },
      { party: 'Avanza País', aFavor: 6, enContra: 0, abstencion: 0 },
      { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 2, enContra: 4, abstencion: 1 },
      { party: 'Bancada Socialista', aFavor: 0, enContra: 3, abstencion: 1 },
      { party: 'Honor y Democracia', aFavor: 4, enContra: 0, abstencion: 0 },
      { party: 'Bloque Democrático Popular', aFavor: 1, enContra: 2, abstencion: 1 },
      { party: 'No Agrupados', aFavor: 0, enContra: 0, abstencion: 3 },
    ],
  },

  // ── 5. Nombramiento CAS Salud (Ley 32568) ──────────────────────────
  {
    id: 'nombramiento-cas-salud',
    shortName: 'Nombramiento CAS Salud',
    fullName:
      'Ley 32568 sobre Nombramiento del Personal CAS del Sector Salud',
    lawNumber: '32568',
    billNumbers: [],
    date: '2026-03-12',
    mechanism: 'insistencia',
    fiscalImpact:
      'Nombramiento automático de 9,361 servidores CAS al régimen permanente (DL 276 / DL 728). Rigidiza presupuestos de Minsa y EsSalud con obligaciones laborales permanentes.',
    votes: [
      { party: 'Fuerza Popular', aFavor: 15, enContra: 0, abstencion: 4 },
      { party: 'Alianza para el Progreso', aFavor: 13, enContra: 0, abstencion: 2 },
      { party: 'Perú Libre', aFavor: 14, enContra: 0, abstencion: 0 },
      { party: 'Podemos Perú', aFavor: 11, enContra: 0, abstencion: 0 },
      { party: 'Renovación Popular', aFavor: 7, enContra: 0, abstencion: 3 },
      { party: 'Acción Popular', aFavor: 8, enContra: 0, abstencion: 1 },
      { party: 'Somos Perú', aFavor: 8, enContra: 0, abstencion: 0 },
      { party: 'Avanza País', aFavor: 4, enContra: 0, abstencion: 2 },
      { party: 'Juntos por el Perú - Bloque Magisterial', aFavor: 7, enContra: 0, abstencion: 0 },
      { party: 'Bancada Socialista', aFavor: 5, enContra: 0, abstencion: 0 },
      { party: 'Honor y Democracia', aFavor: 4, enContra: 0, abstencion: 0 },
      { party: 'Bloque Democrático Popular', aFavor: 2, enContra: 0, abstencion: 0 },
      { party: 'No Agrupados', aFavor: 0, enContra: 0, abstencion: 0 },
    ],
  },
];

/* ── Derived helpers ─────────────────────────────────────────────────── */

/** Compute total votes across all groups for a given law. */
export function getTotals(law: Law) {
  return law.votes.reduce(
    (acc, v) => ({
      aFavor: acc.aFavor + v.aFavor,
      enContra: acc.enContra + v.enContra,
      abstencion: acc.abstencion + v.abstencion,
    }),
    { aFavor: 0, enContra: 0, abstencion: 0 },
  );
}

/** All unique parliamentary group names, ordered by average seat size. */
export const partyNames = [
  'Fuerza Popular',
  'Alianza para el Progreso',
  'Perú Libre',
  'Podemos Perú',
  'Renovación Popular',
  'Acción Popular',
  'Somos Perú',
  'Avanza País',
  'Juntos por el Perú - Bloque Magisterial',
  'Bancada Socialista',
  'Honor y Democracia',
  'Bloque Democrático Popular',
  'No Agrupados',
];

/** Human-readable labels for the approval mechanism. */
export const mechanismLabels: Record<string, string> = {
  insistencia: 'Aprobado por insistencia',
  promulgacion: 'Promulgado por el Ejecutivo',
  aprobacion: 'Aprobado en el Pleno',
};
