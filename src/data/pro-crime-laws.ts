/**
 * pro-crime-laws.ts — Structured voting data for the 6 "Leyes Pro-Crimen"
 * identified by Peru's Ministerio Público and the investigative outlet
 * Convoca.pe as laws that weaken the criminal prosecution system.
 *
 * DATA METHODOLOGY:
 *
 * The official vote records (Actas del Pleno) are scanned images without
 * extractable text, preventing automated per-party vote extraction.
 * The original scanned PDFs are hosted at /documentos/votaciones-procrimen/
 * for public transparency and independent verification.
 *
 * Aggregate vote counts come from cross-validated secondary sources:
 * - Convoca.pe: "17 congresistas votaron de manera reiterada a favor de
 *   leyes procrimen" (2025 investigation)
 * - Wikipedia: Ley 32108 article with detailed vote history
 * - La República: Per-congressperson vote lists for Ley 32108 modification
 * - Infobae Peru: Ley 32181 vote coverage
 * - HRW: "Legislar para la impunidad" (July 2025 report)
 * - Official Congress communications (comunicaciones.congreso.gob.pe)
 *
 * Per-party breakdowns are only available where press sources published
 * sufficiently detailed data. Where only aggregate totals are known,
 * votes are recorded under a single "Total (ver acta)" entry.
 *
 * IMPORTANT: The `votes` field on each Law contains the final/primary vote.
 * The `voteStages` field contains the full multi-stage progression.
 */

import type { Law, VoteStage, SourceDocument } from './types';

/**
 * Narrative descriptions for each law's impact on the justice system.
 * Sourced from the Ministerio Público statement (Jan 2026) and
 * Convoca.pe / HRW analysis.
 */
export const proCrimeLawDescriptions: Record<string, string> = {
  'ley-soto': `Reduce drásticamente los plazos de prescripción para delitos de corrupción y crimen organizado. Antes de esta ley, los plazos se suspendían mientras durara el proceso; ahora, los casos que superen ciertos plazos quedan automáticamente extinguidos. Según el Ministerio Público, beneficia directamente a funcionarios investigados por corrupción al permitir que sus casos prescriban antes de llegar a sentencia.`,

  'colaboracion-eficaz': `Impone límites temporales estrictos al proceso de colaboración eficaz, la herramienta más poderosa del sistema penal contra redes de corrupción y crimen organizado. Los aspirantes a colaborador eficaz deben completar el proceso dentro de plazos que los fiscales consideran insuficientes para casos complejos con múltiples imputados. La ley fue aprobada por insistencia tras el veto del Ejecutivo.`,

  'lesa-humanidad': `Redefine los delitos de lesa humanidad estableciendo requisitos que, según la Corte IDH y organismos internacionales, son más restrictivos que los estándares del Estatuto de Roma. Establece que solo califican como lesa humanidad actos cometidos como parte de un "ataque generalizado y sistemático" conforme a una "política organizacional", lo que podría impedir la persecución de casos emblemáticos como los de Barrios Altos y La Cantuta.`,

  'crimen-organizado': `Redefine "organización criminal" con requisitos más exigentes: requiere "estructura compleja" de 3+ personas con "carácter permanente o por tiempo indefinido". Exige la presencia obligatoria de un abogado defensor público durante allanamientos, lo que fiscales y policías consideran un obstáculo operativo que permite la destrucción de evidencia. Fue descrita por el Ministerio Público como "un retroceso de 20 años en la lucha contra el crimen organizado".`,

  'detencion-preliminar': `Elimina la detención preliminar en casos de no flagrancia, impidiendo que los jueces ordenen la detención temporal de sospechosos para asegurar la investigación. Antes de esta ley, los jueces podían ordenar la detención preliminar cuando existían indicios de delito con pena superior a 4 años y riesgo de fuga. La ley fue posteriormente revertida parcialmente ante la presión pública, pero la versión original estuvo vigente durante un breve período.`,

  'sanciones-fiscales': `Establece un régimen de sanciones económicas y administrativas contra fiscales y jueces que cometan "irregularidades" en sus funciones, incluyendo multas significativas. Los críticos señalan que esto crea un efecto intimidatorio (chilling effect) sobre la independencia judicial, desincentivando a los operadores de justicia de investigar casos sensibles contra personas con poder político.`,
};

/* ── The six pro-crime laws ────────────────────────────────────────────── */

export const proCrimeLaws: Law[] = [
  // ── 1. Ley 31751 — "Ley Soto" ──────────────────────────────────────
  {
    id: 'ley-soto',
    shortName: 'Ley Soto (Prescripción)',
    fullName:
      'Ley que modifica el Código Penal y el Código de Procedimientos Penales respecto de los plazos de prescripción de la acción penal',
    lawNumber: '31751',
    billNumbers: ['4386'],
    date: '2023-05-11',
    mechanism: 'aprobacion',
    fiscalImpact:
      'Reduce plazos de prescripción, permitiendo la extinción de procesos penales por corrupción. El Ministerio Público estimó que decenas de casos activos podrían prescribir.',
    category: 'procrimen',
    votes: [
      { party: 'Total (ver acta)', aFavor: 90, enContra: 0, abstencion: 0 },
    ],
    voteStages: [
      {
        label: 'Primera Votación',
        date: '2023-04-13',
        venue: 'pleno',
        votes: [
          { party: 'Total (ver acta)', aFavor: 79, enContra: 0, abstencion: 0 },
        ],
      },
      {
        label: 'Segunda Votación',
        date: '2023-05-11',
        venue: 'pleno',
        votes: [
          { party: 'Total (ver acta)', aFavor: 90, enContra: 0, abstencion: 0 },
        ],
      },
    ],
    sourceDocuments: [
      {
        label: 'Acta de Asistencia y Votación — Pleno 13/04/2023 (1ra votación)',
        path: '/documentos/votaciones-procrimen/ley-31751-primera-votacion-pleno-13-04-2023.pdf',
        sourceUrl: 'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/BC4178D0A2AA9C4E0525899700524FBA/$FILE/Asis_vot_OFICIAL_13-04-2023.pdf',
      },
      {
        label: 'Acta de Asistencia y Votación — Pleno 11/05/2023 (2da votación)',
        path: '/documentos/votaciones-procrimen/ley-31751-segunda-votacion-pleno-11-05-2023.pdf',
        sourceUrl: 'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/29472350CE0C791F052589B30062CAB5/$FILE/Asis_vot_OFICIAL_11-05-23.pdf',
      },
    ],
  },

  // ── 2. Ley 31990 — Colaboración Eficaz ─────────────────────────────
  {
    id: 'colaboracion-eficaz',
    shortName: 'Colaboración Eficaz',
    fullName:
      'Ley que regula los plazos y condiciones del proceso especial de colaboración eficaz',
    lawNumber: '31990',
    billNumbers: [],
    date: '2023-12-14',
    mechanism: 'insistencia',
    fiscalImpact:
      'Impone plazos que limitan la colaboración eficaz, herramienta clave contra redes de corrupción. Aprobada por insistencia pese a la observación del Ejecutivo.',
    category: 'procrimen',
    votes: [
      { party: 'Total (ver acta)', aFavor: 89, enContra: 15, abstencion: 2 },
    ],
    voteStages: [
      {
        label: 'Primera Votación',
        date: '2023-11-01',
        venue: 'pleno',
        votes: [
          { party: 'Total (ver acta)', aFavor: 85, enContra: 0, abstencion: 0 },
        ],
      },
      {
        label: 'Exoneración de Segunda Votación',
        date: '2023-11-01',
        venue: 'pleno',
        votes: [
          { party: 'Total (ver acta)', aFavor: 83, enContra: 0, abstencion: 0 },
        ],
      },
      {
        label: 'Insistencia',
        date: '2023-12-14',
        venue: 'pleno',
        votes: [
          { party: 'Total (ver acta)', aFavor: 89, enContra: 15, abstencion: 2 },
        ],
      },
    ],
    sourceDocuments: [
      {
        label: 'Acta de Asistencia y Votación — Pleno 14/12/2023 (Insistencia)',
        path: '/documentos/votaciones-procrimen/ley-31990-insistencia-pleno-14-12-2023.pdf',
        sourceUrl: 'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/B4F7B160875C072805258A85005AFFF5/$FILE/Asis_y_vot_OFICIAL_de_la_sesión_del-14-12-2023.pdf',
      },
    ],
  },

  // ── 3. Ley 32107 — Delitos de Lesa Humanidad ───────────────────────
  {
    id: 'lesa-humanidad',
    shortName: 'Delitos de Lesa Humanidad',
    fullName:
      'Ley que define y sanciona los delitos de lesa humanidad y establece procedimientos especiales',
    lawNumber: '32107',
    billNumbers: [],
    date: '2024-07-04',
    mechanism: 'aprobacion',
    fiscalImpact:
      'Redefine lesa humanidad con criterios más restrictivos que el Estatuto de Roma. La Corte IDH expresó preocupación por su impacto en casos emblemáticos.',
    category: 'procrimen',
    votes: [
      { party: 'Total (ver acta)', aFavor: 15, enContra: 0, abstencion: 0 },
    ],
    voteStages: [
      {
        label: 'Aprobación en el Pleno',
        date: '2024-06-12',
        venue: 'pleno',
        votes: [
          { party: 'Total (ver acta)', aFavor: 60, enContra: 0, abstencion: 0 },
        ],
      },
      {
        label: 'Aprobación en Comisión Permanente',
        date: '2024-07-04',
        venue: 'comision-permanente',
        votes: [
          { party: 'Total (ver acta)', aFavor: 15, enContra: 0, abstencion: 0 },
        ],
      },
    ],
    sourceDocuments: [],
  },

  // ── 4. Ley 32108 — Crimen Organizado ───────────────────────────────
  {
    id: 'crimen-organizado',
    shortName: 'Crimen Organizado',
    fullName:
      'Ley que modifica la Ley 30077, Ley contra el Crimen Organizado, y otros dispositivos legales',
    lawNumber: '32108',
    billNumbers: [],
    date: '2024-08-09',
    mechanism: 'promulgacion',
    fiscalImpact:
      'Redefine "organización criminal" y exige abogado defensor en allanamientos. El Ministerio Público lo calificó como "retroceso de 20 años" en la lucha contra el crimen.',
    category: 'procrimen',
    votes: [
      { party: 'Total (ver acta)', aFavor: 50, enContra: 0, abstencion: 0 },
    ],
    voteStages: [
      {
        label: 'Primera Votación (Pleno)',
        date: '2024-05-30',
        venue: 'pleno',
        votes: [
          { party: 'Total (ver acta)', aFavor: 50, enContra: 0, abstencion: 0 },
        ],
      },
      {
        label: 'Segunda Votación (Comisión Permanente)',
        date: '2024-07-04',
        venue: 'comision-permanente',
        votes: [
          { party: 'Total (ver acta)', aFavor: 12, enContra: 9, abstencion: 3 },
        ],
      },
      {
        label: 'Modificatoria (Ley 32138)',
        date: '2024-10-16',
        venue: 'pleno',
        votes: [
          { party: 'Fuerza Popular', aFavor: 19, enContra: 0, abstencion: 0 },
          { party: 'Alianza para el Progreso', aFavor: 10, enContra: 0, abstencion: 0 },
          { party: 'Perú Libre', aFavor: 9, enContra: 0, abstencion: 0 },
          { party: 'Otros partidos a favor', aFavor: 43, enContra: 0, abstencion: 0 },
          { party: 'En contra / Abstención', aFavor: 0, enContra: 23, abstencion: 8 },
        ],
      },
    ],
    sourceDocuments: [
      {
        label: 'Acta de Asistencia y Votación — Pleno 30/05/2024 (1ra votación)',
        path: '/documentos/votaciones-procrimen/ley-32108-primera-votacion-pleno-30-05-2024.pdf',
        sourceUrl: 'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/63269A17867358D305258B2D0063AE77/$FILE/Asis_y_vot_de_la_sesión_del_30-5-2024.pdf',
      },
      {
        label: 'Acta de Asistencia y Votación — Pleno 16/10/2024 (Modificatoria Ley 32138)',
        path: '/documentos/votaciones-procrimen/ley-32108-modificatoria-pleno-16-10-2024.pdf',
        sourceUrl: 'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/4FCA4A4E8B40D3E805258BB8006FDC39/$FILE/Asis_y_vot_del_16_10_2024.pdf',
      },
    ],
  },

  // ── 5. Ley 32181 — Detención Preliminar ────────────────────────────
  {
    id: 'detencion-preliminar',
    shortName: 'Detención Preliminar',
    fullName:
      'Ley que modifica el Código Procesal Penal respecto de la detención preliminar en casos de no flagrancia',
    lawNumber: '32181',
    billNumbers: [],
    date: '2024-12-12',
    mechanism: 'promulgacion',
    fiscalImpact:
      'Elimina la detención preliminar sin flagrancia, impidiendo detener temporalmente a sospechosos durante la investigación. Promulgada el 12/12/2024, revertida parcialmente el 14/12/2024.',
    category: 'procrimen',
    votes: [
      { party: 'Total (ver acta)', aFavor: 94, enContra: 0, abstencion: 0 },
    ],
    voteStages: [
      {
        label: 'Primera Votación',
        date: '2024-11-21',
        venue: 'pleno',
        votes: [
          { party: 'Total (ver acta)', aFavor: 94, enContra: 0, abstencion: 0 },
        ],
      },
      {
        label: 'Exoneración de Segunda Votación',
        date: '2024-11-21',
        venue: 'pleno',
        votes: [
          { party: 'Total (ver acta)', aFavor: 88, enContra: 0, abstencion: 0 },
        ],
      },
    ],
    sourceDocuments: [
      {
        label: 'Acta de Asistencia y Votación — Pleno 21/11/2024',
        path: '/documentos/votaciones-procrimen/ley-32181-32182-pleno-21-11-2024.pdf',
        sourceUrl: 'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/3A18859F9196262905258BDC00623E7D/$FILE/Asis_y_vot_del_21_11_2024.pdf',
      },
    ],
  },

  // ── 6. Ley 32182 — Sanciones a Fiscales y Jueces ──────────────────
  {
    id: 'sanciones-fiscales',
    shortName: 'Sanciones a Fiscales y Jueces',
    fullName:
      'Ley que establece el régimen sancionador para fiscales y jueces que incurran en irregularidades funcionales',
    lawNumber: '32182',
    billNumbers: [],
    date: '2024-11-22',
    mechanism: 'aprobacion',
    fiscalImpact:
      'Crea un régimen de multas y sanciones sobre fiscales y jueces, generando un efecto intimidatorio sobre la independencia judicial según organismos de DDHH.',
    category: 'procrimen',
    votes: [
      { party: 'Total (ver acta)', aFavor: 84, enContra: 0, abstencion: 0 },
    ],
    voteStages: [
      {
        label: 'Primera Votación',
        date: '2024-11-21',
        venue: 'pleno',
        votes: [
          { party: 'Total (ver acta)', aFavor: 84, enContra: 0, abstencion: 0 },
        ],
      },
      {
        label: 'Exoneración de Segunda Votación',
        date: '2024-11-22',
        venue: 'pleno',
        votes: [
          { party: 'Total (ver acta)', aFavor: 82, enContra: 0, abstencion: 0 },
        ],
      },
    ],
    sourceDocuments: [
      {
        label: 'Acta de Asistencia y Votación — Pleno 21/11/2024',
        path: '/documentos/votaciones-procrimen/ley-32181-32182-pleno-21-11-2024.pdf',
        sourceUrl: 'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/3A18859F9196262905258BDC00623E7D/$FILE/Asis_y_vot_del_21_11_2024.pdf',
      },
      {
        label: 'Acta de Asistencia y Votación — Pleno 22/11/2024',
        path: '/documentos/votaciones-procrimen/ley-32181-32182-pleno-22-11-2024.pdf',
        sourceUrl: 'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/36DA964D8B7C547A05258BDD00772364/$FILE/Asis_y_vot_del_22_11_2024.pdf',
      },
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

/** Compute totals for a specific VoteStage. */
export function getStageTotals(stage: VoteStage) {
  return stage.votes.reduce(
    (acc, v) => ({
      aFavor: acc.aFavor + v.aFavor,
      enContra: acc.enContra + v.enContra,
      abstencion: acc.abstencion + v.abstencion,
    }),
    { aFavor: 0, enContra: 0, abstencion: 0 },
  );
}

/** Human-readable labels for the approval mechanism. */
export const mechanismLabels: Record<string, string> = {
  insistencia: 'Aprobado por insistencia',
  promulgacion: 'Promulgado por el Ejecutivo',
  aprobacion: 'Aprobado en el Pleno',
};

/** Venue labels for display. */
export const venueLabels: Record<string, string> = {
  pleno: 'Pleno del Congreso',
  'comision-permanente': 'Comisión Permanente',
};
