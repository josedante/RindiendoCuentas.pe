/**
 * contrarreforma-laws.ts — Vote reconstructions for three milestones in the rollback
 * of Peru's university reform (Ley 30220 / SUNEDU), 2022–2025.
 *
 * Sources: actas del Pleno y Comisión Permanente, texto consolidado, prensa y
 * documentación citada en la investigación fuente (source-data).
 */

import type { Law } from './types';

/** Ordered union of bancadas for cross-hito comparison charts. */
export const contrarreformaPartyNames = [
  'Fuerza Popular',
  'Perú Libre',
  'Alianza para el Progreso (APP)',
  'Acción Popular',
  'Renovación Popular',
  'Podemos Perú',
  'Bloque Magisterial de Concertación Nacional',
  'Somos Perú',
  'Avanza País',
  'Cambio Democrático - Juntos por el Perú',
  'No Agrupados',
  'Bancada Socialista',
  'Honor y Democracia',
] as const;

export const contrarreformaLaws: Law[] = [
  {
    id: 'ley-31520-sunedu',
    shortName: 'Ley 31520 — Captura del Consejo Directivo SUNEDU',
    fullName:
      'Ley 31520 que restablece la autonomía y la institucionalidad de las universidades peruanas (modificación del artículo 17 y del Consejo Directivo de la SUNEDU)',
    lawNumber: '31520',
    billNumbers: [],
    date: '2022-07-13',
    mechanism: 'insistencia',
    category: 'universitaria',
    fiscalImpact:
      'Recomposición corporativa del Consejo Directivo de la SUNEDU: representación de universidades públicas y privadas en el órgano máximo del regulador, con efectos sobre licenciamiento y designación del superintendente.',
    votes: [
      { party: 'Fuerza Popular', aFavor: 23, enContra: 0, abstencion: 0 },
      { party: 'Perú Libre', aFavor: 14, enContra: 2, abstencion: 0 },
      { party: 'Acción Popular', aFavor: 11, enContra: 2, abstencion: 1 },
      { party: 'Alianza para el Progreso (APP)', aFavor: 9, enContra: 1, abstencion: 0 },
      { party: 'Renovación Popular', aFavor: 8, enContra: 0, abstencion: 0 },
      { party: 'Bloque Magisterial de Concertación Nacional', aFavor: 6, enContra: 0, abstencion: 0 },
      { party: 'Avanza País', aFavor: 0, enContra: 9, abstencion: 0 },
      { party: 'Cambio Democrático - Juntos por el Perú', aFavor: 0, enContra: 5, abstencion: 0 },
      { party: 'Podemos Perú', aFavor: 3, enContra: 1, abstencion: 1 },
      { party: 'Somos Perú', aFavor: 1, enContra: 4, abstencion: 0 },
      { party: 'No Agrupados', aFavor: 1, enContra: 15, abstencion: 2 },
    ],
    sourceDocuments: [
      {
        label: 'Texto consolidado Ley 31520 (Congreso)',
        url: 'https://leyes.congreso.gob.pe/Documentos/2021_2026/ADLP/Texto_Consolidado/31520-TXM.pdf',
      },
      {
        label: 'Dispositivo en El Peruano (referencia)',
        url: 'https://busquedas.elperuano.pe/dispositivo/NL/2088561-1',
      },
    ],
  },
  {
    id: 'ley-32105-licenciamiento',
    shortName: 'Ley 32105 — Licenciamiento permanente y virtualidad',
    fullName:
      'Ley 32105 que modifica la Ley Universitaria en materia de licenciamiento institucional y modalidades de educación superior (artículos 13, 47 y 15-A de la Ley 30220)',
    lawNumber: '32105',
    billNumbers: [],
    date: '2024-07-24',
    mechanism: 'comision-permanente',
    category: 'universitaria',
    fiscalImpact:
      'Instaura licenciamiento permanente y habilita la modalidad 100% virtual sin el ciclo de renovación periódica; reduce incentivos de reinversión en calidad e investigación.',
    votes: [
      { party: 'Fuerza Popular', aFavor: 4, enContra: 0, abstencion: 1 },
      { party: 'Alianza para el Progreso (APP)', aFavor: 3, enContra: 0, abstencion: 0 },
      { party: 'Perú Libre', aFavor: 3, enContra: 0, abstencion: 0 },
      { party: 'Renovación Popular', aFavor: 2, enContra: 0, abstencion: 0 },
      { party: 'Bloque Magisterial de Concertación Nacional', aFavor: 2, enContra: 0, abstencion: 0 },
      { party: 'Somos Perú', aFavor: 1, enContra: 0, abstencion: 0 },
      { party: 'Podemos Perú', aFavor: 1, enContra: 0, abstencion: 0 },
      { party: 'Honor y Democracia', aFavor: 1, enContra: 0, abstencion: 1 },
      { party: 'Avanza País', aFavor: 0, enContra: 2, abstencion: 0 },
      { party: 'Cambio Democrático - Juntos por el Perú', aFavor: 0, enContra: 2, abstencion: 0 },
      { party: 'Bancada Socialista', aFavor: 0, enContra: 1, abstencion: 0 },
      { party: 'No Agrupados', aFavor: 0, enContra: 1, abstencion: 0 },
      { party: 'Acción Popular', aFavor: 0, enContra: 0, abstencion: 1 },
    ],
    sourceDocuments: [
      {
        label: 'Votación Comisión Permanente 2023–2024 (PDF, Congreso)',
        url: 'https://api.congreso.gob.pe/spley-portal-service/archivo/MTY1MTk1/pdf',
      },
      {
        label: 'Texto Ley 32105 (referencia LP Derecho)',
        url: 'https://img.lpderecho.pe/wp-content/uploads/2024/08/Ley-32105-LPDerecho.pdf',
      },
    ],
  },
  {
    id: 'veinte-universidades-nacionales',
    shortName: 'Creación en bloque de 20 universidades nacionales',
    fullName:
      'Dictamen acumulativo — creación de 20 nuevas universidades nacionales en 15 departamentos (segunda votación en el Pleno)',
    lawNumber: null,
    billNumbers: [],
    date: '2025-03-20',
    mechanism: 'aprobacion',
    category: 'universitaria',
    fiscalImpact:
      'Creación legislativa masiva sin partidas presupuestales asignadas; el MEF advirtió falta de viabilidad fiscal. Redacción en términos de «autorización» a Ejecutivo y gobiernos subnacionales.',
    votes: [
      { party: 'Fuerza Popular', aFavor: 16, enContra: 0, abstencion: 0 },
      { party: 'Perú Libre', aFavor: 11, enContra: 0, abstencion: 0 },
      { party: 'Alianza para el Progreso (APP)', aFavor: 10, enContra: 0, abstencion: 0 },
      { party: 'Podemos Perú', aFavor: 7, enContra: 0, abstencion: 0 },
      { party: 'Bloque Magisterial de Concertación Nacional', aFavor: 7, enContra: 0, abstencion: 0 },
      { party: 'Renovación Popular', aFavor: 5, enContra: 0, abstencion: 0 },
      { party: 'Somos Perú', aFavor: 4, enContra: 0, abstencion: 0 },
      { party: 'Acción Popular', aFavor: 3, enContra: 0, abstencion: 2 },
      { party: 'Avanza País', aFavor: 0, enContra: 0, abstencion: 6 },
      { party: 'Cambio Democrático - Juntos por el Perú', aFavor: 0, enContra: 0, abstencion: 5 },
      { party: 'No Agrupados', aFavor: 0, enContra: 0, abstencion: 4 },
    ],
    sourceDocuments: [
      {
        label: 'Cobertura con resultado 63-0-17 (Caretas)',
        url: 'https://caretas.pe/politica/congreso-aprueba-la-creacion-de-20-universidades-en-regiones-del-pais/',
      },
      {
        label: 'Cobertura y advertencias del MEF (El Búho)',
        url: 'https://elbuho.pe/2025/03/congreso-aprueba-la-creacion-de-20-universidades-publicas-en-diversos-departamentos/',
      },
    ],
  },
];
