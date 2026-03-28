/**
 * pro-crime-laws.ts — Structured voting data for the 6 "Leyes Pro-Crimen"
 * identified by Peru's Ministerio Público and Convoca.pe.
 *
 * DATA METHODOLOGY (actualizado marzo 2026):
 *
 * Los PDF del portal de Asistencias y Votaciones son imágenes escaneadas; el
 * desglose por bancada se obtuvo por transcripción manual o, cuando no hubo
 * acta descargable, por totales oficiales más distribución documentada (ver
 * `public/documentos/votaciones-procrimen/README.md` y `pro-crime-stages-votes.ts`).
 *
 * Cada VoteStage puede incluir `dataProvenance` y `sourceNote` (mostrados en la UI).
 */

import type { Law, VoteStage } from './types';
import {
  leySotoPrimeraPleno,
  leySotoSegundaPleno,
  ley31990Primera,
  ley31990Exoneracion,
  ley31990Insistencia,
  ley32108PrimeraPleno,
  ley32138Modificatoria,
  ley32181Primera,
  ley32181Exoneracion,
  ley32182Primera,
  ley32182Exoneracion,
  ley32107Pleno,
  ley32107ComisionPermanente,
} from './pro-crime-stages-votes';

export const proCrimeLawDescriptions: Record<string, string> = {
  'ley-soto': `Reduce drásticamente los plazos de prescripción para delitos de corrupción y crimen organizado. Antes de esta ley, los plazos se suspendían mientras durara el proceso; ahora, los casos que superen ciertos plazos quedan automáticamente extinguidos. Según el Ministerio Público, beneficia directamente a funcionarios investigados por corrupción al permitir que sus casos prescriban antes de llegar a sentencia.`,

  'colaboracion-eficaz': `Impone límites temporales estrictos al proceso de colaboración eficaz, la herramienta más poderosa del sistema penal contra redes de corrupción y crimen organizado. Los aspirantes a colaborador eficaz deben completar el proceso dentro de plazos que los fiscales consideran insuficientes para casos complejos con múltiples imputados. La ley fue aprobada por insistencia tras el veto del Ejecutivo.`,

  'lesa-humanidad': `Redefine los delitos de lesa humanidad estableciendo requisitos que, según la Corte IDH y organismos internacionales, son más restrictivos que los estándares del Estatuto de Roma. Establece que solo califican como lesa humanidad actos cometidos como parte de un "ataque generalizado y sistemático" conforme a una "política organizacional", lo que podría impedir la persecución de casos emblemáticos como los de Barrios Altos y La Cantuta.`,

  'crimen-organizado': `Redefine "organización criminal" con requisitos más exigentes: requiere "estructura compleja" de 3+ personas con "carácter permanente o por tiempo indefinido". Exige la presencia obligatoria de un abogado defensor público durante allanamientos, lo que fiscales y policías consideran un obstáculo operativo que permite la destrucción de evidencia. Fue descrita por el Ministerio Público como "un retroceso de 20 años en la lucha contra el crimen organizado".`,

  'detencion-preliminar': `Elimina la detención preliminar en casos de no flagrancia, impidiendo que los jueces ordenen la detención temporal de sospechosos para asegurar la investigación. Antes de esta ley, los jueces podían ordenar la detención preliminar cuando existían indicios de delito con pena superior a 4 años y riesgo de fuga. La ley fue posteriormente revertida parcialmente ante la presión pública, pero la versión original estuvo vigente durante un breve período.`,

  'sanciones-fiscales': `Establece un régimen de sanciones económicas y administrativas contra fiscales y jueces que cometan "irregularidades" en sus funciones, incluyendo multas significativas. Los críticos señalan que esto crea un efecto intimidatorio (chilling effect) sobre la independencia judicial, desincentivando a los operadores de justicia de investigar casos sensibles contra personas con poder político.`,
};

const notaCp32108: VoteStage = {
  label: 'Segunda Votación (Comisión Permanente)',
  date: '2024-07-04',
  venue: 'comision-permanente',
  votes: [
    {
      party: 'Total — Comisión Permanente (acta)',
      aFavor: 12,
      enContra: 9,
      abstencion: 3,
    },
  ],
  dataProvenance: 'acta_total_solamente',
  sourceNote:
    'No hay PDF individual en el portal de Asistencias del Pleno para esta sesión de la CP. Totales según registro previo del trámite; desglose nominal por bancada no transcrito aquí.',
};

export const proCrimeLaws: Law[] = [
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
    votes: leySotoSegundaPleno,
    voteStages: [
      {
        label: 'Primera Votación',
        date: '2023-04-13',
        venue: 'pleno',
        votes: leySotoPrimeraPleno,
        dataProvenance: 'estimacion_proporcional',
        sourceNote:
          'Total oficial 79 votos a favor (0 en contra, 0 abstenciones). Distribución por bancada: método Hamilton a partir de la composición de la segunda votación, ajustada al total de esta etapa; contrastar con el PDF del 13/04/2023.',
      },
      {
        label: 'Segunda Votación',
        date: '2023-05-11',
        venue: 'pleno',
        votes: leySotoSegundaPleno,
        dataProvenance: 'estimacion_proporcional',
        sourceNote:
          'Total oficial 90-0-0 según acta del Pleno 11/05/2023. Distribución: asignación proporcional (Hamilton) coherente con el peso de bancadas en la legislatura; verificar nominalmente en el PDF.',
      },
    ],
    sourceDocuments: [
      {
        label: 'Acta de Asistencia y Votación — Pleno 13/04/2023 (1ra votación)',
        path: '/documentos/votaciones-procrimen/ley-31751-primera-votacion-pleno-13-04-2023.pdf',
        sourceUrl:
          'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/BC4178D0A2AA9C4E0525899700524FBA/$FILE/Asis_vot_OFICIAL_13-04-2023.pdf',
      },
      {
        label: 'Acta de Asistencia y Votación — Pleno 11/05/2023 (2da votación)',
        path: '/documentos/votaciones-procrimen/ley-31751-segunda-votacion-pleno-11-05-2023.pdf',
        sourceUrl:
          'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/29472350CE0C791F052589B30062CAB5/$FILE/Asis_vot_OFICIAL_11-05-23.pdf',
      },
    ],
  },

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
    votes: ley31990Insistencia,
    voteStages: [
      {
        label: 'Primera Votación',
        date: '2023-11-01',
        venue: 'pleno',
        votes: ley31990Primera,
        dataProvenance: 'estimacion_proporcional',
        sourceNote:
          'Total 85 a favor. Distribución proporcional a partir del patrón de la insistencia (14/12/2023), ajustada al total de esta votación.',
      },
      {
        label: 'Exoneración de Segunda Votación',
        date: '2023-11-01',
        venue: 'pleno',
        votes: ley31990Exoneracion,
        dataProvenance: 'estimacion_proporcional',
        sourceNote:
          'Total 83 a favor. Misma metodología proporcional que la primera votación del mismo día.',
      },
      {
        label: 'Insistencia',
        date: '2023-12-14',
        venue: 'pleno',
        votes: ley31990Insistencia,
        dataProvenance: 'fuente_secundaria',
        sourceNote:
          'Total oficial 89-15-2 (acta Pleno 14/12/2023). Desglose por bancada reconciliado con reconstrucción documental y ajuste de abstenciones para cuadrar con el acta; PDF hospedado en este sitio.',
      },
    ],
    sourceDocuments: [
      {
        label: 'Acta de Asistencia y Votación — Pleno 14/12/2023 (Insistencia)',
        path: '/documentos/votaciones-procrimen/ley-31990-insistencia-pleno-14-12-2023.pdf',
        sourceUrl:
          'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/B4F7B160875C072805258A85005AFFF5/$FILE/Asis_y_vot_OFICIAL_de_la_sesión_del-14-12-2023.pdf',
      },
    ],
  },

  {
    id: 'lesa-humanidad',
    shortName: 'Delitos de Lesa Humanidad',
    fullName:
      'Ley que define y sanciona los delitos de lesa humanidad y establece procedimientos especiales',
    lawNumber: '32107',
    billNumbers: ['6951'],
    date: '2024-07-04',
    mechanism: 'aprobacion',
    fiscalImpact:
      'Redefine lesa humanidad con criterios más restrictivos que el Estatuto de Roma. La Corte IDH expresó preocupación por su impacto en casos emblemáticos.',
    category: 'procrimen',
    votes: ley32107ComisionPermanente,
    voteStages: [
      {
        label: 'Primera votación (Pleno)',
        date: '2024-06-06',
        venue: 'pleno',
        votes: ley32107Pleno,
        dataProvenance: 'estimacion_proporcional',
        sourceNote:
          'Totales oficiales 60-36-11 según Comunicaciones del Congreso (06/06/2024). Desglose por bancada: método Hamilton a partir del patrón de la votación de la modificatoria 32138 (16/10/2024), reescalado a esos totales; verificar en el PDF del acta del Pleno 06/06/2024 hospedado en este sitio.',
      },
      {
        label: 'Segunda votación (Comisión Permanente)',
        date: '2024-07-04',
        venue: 'comision-permanente',
        votes: ley32107ComisionPermanente,
        dataProvenance: 'fuente_secundaria',
        sourceNote:
          'Totales oficiales 15-12-0 según Comunicaciones del Congreso (04/07/2024): https://comunicaciones.congreso.gob.pe/noticias/en-segunda-votacion-aprueban-dictamen-que-precisa-la-aplicacion-y-alcances-de-lesa-humanidad-y-crimenes-de-guerra/ — Los 15 votos a favor y la agrupación de los 12 en contra por bancada se tomaron de cobertura de La República (05/07/2024); no hay PDF de asistencia de la CP de esa fecha en el portal del Pleno indexado aquí.',
      },
    ],
    sourceDocuments: [
      {
        label: 'Acta de Asistencia y Votación — Pleno 06/06/2024 (primera votación, PL 6951)',
        path: '/documentos/votaciones-procrimen/ley-32107-pleno-06-06-2024.pdf',
        sourceUrl:
          'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/EF0AF29DCB91CC5C05258B340065377D/$FILE/Asis_y_vot_de_la_sesión_del_6-6-2024.pdf',
      },
    ],
  },

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
    votes: ley32138Modificatoria,
    voteStages: [
      {
        label: 'Primera Votación (Pleno)',
        date: '2024-05-30',
        venue: 'pleno',
        votes: ley32108PrimeraPleno,
        dataProvenance: 'estimacion_proporcional',
        sourceNote:
          'Total 50 votos a favor. Distribución proporcional (Hamilton) a partir del patrón de la modificatoria (Ley 32138) del 16/10/2024, escalada al total de esta etapa.',
      },
      notaCp32108,
      {
        label: 'Modificatoria (Ley 32138)',
        date: '2024-10-16',
        venue: 'pleno',
        votes: ley32138Modificatoria,
        dataProvenance: 'fuente_secundaria',
        sourceNote:
          'Total oficial 81-23-8. Desglose compatible con totales y con cobertura de prensa; vocería «Juntos — Voces del Pueblo» agregada para cuadrar oposición nominal. Ver PDF del 16/10/2024.',
      },
    ],
    sourceDocuments: [
      {
        label: 'Acta de Asistencia y Votación — Pleno 30/05/2024 (1ra votación)',
        path: '/documentos/votaciones-procrimen/ley-32108-primera-votacion-pleno-30-05-2024.pdf',
        sourceUrl:
          'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/63269A17867358D305258B2D0063AE77/$FILE/Asis_y_vot_de_la_sesión_del_30-5-2024.pdf',
      },
      {
        label: 'Acta de Asistencia y Votación — Pleno 16/10/2024 (Modificatoria Ley 32138)',
        path: '/documentos/votaciones-procrimen/ley-32108-modificatoria-pleno-16-10-2024.pdf',
        sourceUrl:
          'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/4FCA4A4E8B40D3E805258BB8006FDC39/$FILE/Asis_y_vot_del_16_10_2024.pdf',
      },
    ],
  },

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
    votes: ley32181Primera,
    voteStages: [
      {
        label: 'Primera Votación',
        date: '2024-11-21',
        venue: 'pleno',
        votes: ley32181Primera,
        dataProvenance: 'estimacion_proporcional',
        sourceNote:
          'Total 94 a favor. Distribución modelada a partir del patrón de las leyes de gasto público (marzo 2026) en el mismo orden de bancadas, escalada al total oficial.',
      },
      {
        label: 'Exoneración de Segunda Votación',
        date: '2024-11-21',
        venue: 'pleno',
        votes: ley32181Exoneracion,
        dataProvenance: 'estimacion_proporcional',
        sourceNote: 'Total 88 a favor. Mismo modelo proporcional que la primera votación del 21/11/2024.',
      },
    ],
    sourceDocuments: [
      {
        label: 'Acta de Asistencia y Votación — Pleno 21/11/2024',
        path: '/documentos/votaciones-procrimen/ley-32181-32182-pleno-21-11-2024.pdf',
        sourceUrl:
          'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/3A18859F9196262905258BDC00623E7D/$FILE/Asis_y_vot_del_21_11_2024.pdf',
      },
    ],
  },

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
    votes: ley32182Primera,
    voteStages: [
      {
        label: 'Primera Votación',
        date: '2024-11-21',
        venue: 'pleno',
        votes: ley32182Primera,
        dataProvenance: 'estimacion_proporcional',
        sourceNote:
          'Total 84 a favor. Distribución proporcional al modelo de la Ley 32181 en la misma sesión (21/11/2024).',
      },
      {
        label: 'Exoneración de Segunda Votación',
        date: '2024-11-22',
        venue: 'pleno',
        votes: ley32182Exoneracion,
        dataProvenance: 'estimacion_proporcional',
        sourceNote: 'Total 82 a favor. Ajuste proporcional respecto de la primera votación de la Ley 32182.',
      },
    ],
    sourceDocuments: [
      {
        label: 'Acta de Asistencia y Votación — Pleno 21/11/2024',
        path: '/documentos/votaciones-procrimen/ley-32181-32182-pleno-21-11-2024.pdf',
        sourceUrl:
          'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/3A18859F9196262905258BDC00623E7D/$FILE/Asis_y_vot_del_21_11_2024.pdf',
      },
      {
        label: 'Acta de Asistencia y Votación — Pleno 22/11/2024',
        path: '/documentos/votaciones-procrimen/ley-32181-32182-pleno-22-11-2024.pdf',
        sourceUrl:
          'https://www2.congreso.gob.pe/Sicr/RelatAgenda/PlenoComiPerm20112016.nsf/Apleno/36DA964D8B7C547A05258BDD00772364/$FILE/Asis_y_vot_del_22_11_2024.pdf',
      },
    ],
  },
];

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

export const mechanismLabels: Record<string, string> = {
  insistencia: 'Aprobado por insistencia',
  promulgacion: 'Promulgado por el Ejecutivo',
  aprobacion: 'Aprobado en el Pleno',
};

export const venueLabels: Record<string, string> = {
  pleno: 'Pleno del Congreso',
  'comision-permanente': 'Comisión Permanente',
};
