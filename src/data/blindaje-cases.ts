/**
 * Datos del informe «Blindaje institucional»: cuatro votaciones clave (SAC, CP, Pleno).
 * Totales por fila sin fila TOTAL (VoteTable agrega desde bancadas / imputados).
 *
 * Metodología y enlaces: public/documentos/blindaje-institucional/README.md
 */

import type { BlindajeCase } from './types';

export function getBlindajeVoteTotals(votes: PartyVote[]) {
  return votes.reduce(
    (acc, v) => ({
      aFavor: acc.aFavor + v.aFavor,
      enContra: acc.enContra + v.enContra,
      abstencion: acc.abstencion + v.abstencion,
    }),
    { aFavor: 0, enContra: 0, abstencion: 0 },
  );
}

export const blindajeCases: BlindajeCase[] = [
  {
    id: 'caso-rolex',
    shortName: "Caso Rolex — archivo en la SAC",
    fullName:
      "Archivo de la denuncia constitucional contra Dina Boluarte (art. 117, inmunidad presidencial). Votación del informe final de calificación.",
    date: '2025-04-12',
    venue: 'sac',
    resultLine: '10 votos a favor del archivo, 6 en contra, 2 abstenciones.',
    voteSourceNote:
      'Desglose nominal por bancada según reconstrucción publicada en prensa y crónica parlamentaria (12 de abril de 2025).',
    votes: [
      { party: 'Fuerza Popular', aFavor: 4, enContra: 0, abstencion: 0 },
      { party: 'Acción Popular', aFavor: 2, enContra: 0, abstencion: 0 },
      { party: 'Alianza para el Progreso (APP)', aFavor: 1, enContra: 0, abstencion: 1 },
      { party: 'Honor y Democracia', aFavor: 1, enContra: 0, abstencion: 0 },
      { party: 'Bloque Magisterial', aFavor: 1, enContra: 0, abstencion: 0 },
      { party: 'Juntos por el Perú Voces del Pueblo', aFavor: 1, enContra: 0, abstencion: 0 },
      { party: 'Renovación Popular', aFavor: 0, enContra: 3, abstencion: 0 },
      { party: 'Perú Libre', aFavor: 0, enContra: 1, abstencion: 0 },
      { party: 'Bancada Socialista', aFavor: 0, enContra: 1, abstencion: 0 },
      { party: 'Bloque Democrático Popular', aFavor: 0, enContra: 1, abstencion: 0 },
      { party: 'Somos Perú', aFavor: 0, enContra: 0, abstencion: 1 },
    ],
    sourceDocuments: [
      {
        label: 'Congreso — Alerta bibliográfica (contexto parlamentario)',
        url: 'https://www.congreso.gob.pe/Docs/biblioteca/files/alerta-bibliografica-2025/g2024abr3.pdf',
      },
      {
        label: 'Infobae — Congresistas que votaron a favor de archivar la denuncia (Caso Rolex)',
        url: 'https://www.infobae.com/peru/2025/04/11/los-rolex-de-dina-boluarte-quienes-son-los-congresistas-que-votaron-a-favor-de-archivar-la-denuncia-contra-la-presidenta/',
      },
    ],
  },
  {
    id: 'denuncia-509',
    shortName: 'Denuncia Constitucional 509 — muertes en protestas',
    fullName:
      'Archivo en la Comisión Permanente por muertes y lesiones en protestas (dic. 2022 – ene. 2023). Votación de fondo del informe.',
    date: '2025-09-11',
    venue: 'comision-permanente',
    resultLine: '12 votos a favor del archivo, 10 en contra, 0 abstenciones.',
    voteSourceNote:
      'Filas agregadas por eje político donde la síntesis pública no individualiza los 22 sufragantes; totales concilian con la votación de fondo reportada.',
    votes: [
      { party: 'Alianza para el Progreso (APP)', aFavor: 1, enContra: 0, abstencion: 0 },
      { party: 'Acción Popular', aFavor: 1, enContra: 0, abstencion: 0 },
      { party: 'Bloque Democrático Popular', aFavor: 0, enContra: 2, abstencion: 0 },
      { party: 'Perú Libre', aFavor: 0, enContra: 1, abstencion: 0 },
      {
        party: 'Otras bancadas de izquierda / No agrupados',
        aFavor: 0,
        enContra: 7,
        abstencion: 0,
      },
      {
        party: 'Otras bancadas de derecha y centro (FP, Avanza País, RP, etc.)',
        aFavor: 10,
        enContra: 0,
        abstencion: 0,
      },
    ],
    sourceDocuments: [
      {
        label: 'Comunicaciones del Congreso — Nota de archivo DC 509',
        url: 'https://comunicaciones.congreso.gob.pe/noticias/comision-permanente-archiva-denuncia-constitucional-contra-presidenta-dina-boluarte-por-muertes-durante-protestas-sociales/',
      },
      {
        label: 'Agenda Comisión Permanente (11-09-2025) — PDF',
        url: 'https://comunicaciones.congreso.gob.pe/wpuploads/2025/09/AGENDA-CP-11-09-2025.pdf',
      },
    ],
  },
  {
    id: 'patricia-benavides',
    shortName: 'Patricia Benavides — rechazo del informe en la SAC',
    fullName:
      'Rechazo del informe de calificación que admitía la denuncia constitucional (DC 602); efecto: archivo. 25 de julio de 2025.',
    date: '2025-07-25',
    venue: 'sac',
    resultLine: '7 votos a favor del archivo (rechazo del informe), 6 en contra, 2 abstenciones.',
    voteSourceNote:
      'Mayoría simple rechaza el informe técnico favorable; abstenciones de Perú Libre inclinó la balanza. Crónica: El Búho, comunicaciones del Congreso.',
    votes: [
      { party: 'Fuerza Popular', aFavor: 5, enContra: 0, abstencion: 0 },
      { party: 'Renovación Popular', aFavor: 1, enContra: 1, abstencion: 0 },
      { party: 'Honor y Democracia', aFavor: 1, enContra: 0, abstencion: 0 },
      { party: 'Alianza para el Progreso (APP)', aFavor: 0, enContra: 2, abstencion: 0 },
      { party: 'Acción Popular', aFavor: 0, enContra: 1, abstencion: 0 },
      { party: 'Bancada Socialista', aFavor: 0, enContra: 1, abstencion: 0 },
      { party: 'Juntos por el Perú', aFavor: 0, enContra: 1, abstencion: 0 },
      { party: 'Perú Libre', aFavor: 0, enContra: 0, abstencion: 2 },
    ],
    sourceDocuments: [
      {
        label: 'Comunicaciones del Congreso — SAC no aprueba informe de calificación (Benavides)',
        url: 'https://comunicaciones.congreso.gob.pe/noticias/subcomision-de-acusaciones-constitucionales-no-aprueba-informe-de-calificacion-de-denuncia-contra-patricia-benavides/',
      },
      {
        label: 'El Búho — Blindaje express a Patricia Benavides',
        url: 'https://elbuho.pe/2025/07/de-manera-super-express-y-en-contra-del-informe-legal-que-admitia-la-denuncia-sac-blinda-a-patricia-benavides/',
      },
    ],
  },
  {
    id: 'los-ninos',
    shortName: "Caso 'Los Niños' — Pleno",
    fullName:
      'Votación del informe final que recomendaba acusar y suspender a cuatro congresistas de Acción Popular (umbral 52 votos no alcanzado).',
    date: '2023-05-18',
    venue: 'pleno',
    resultLine:
      'Cuatro votaciones separadas por imputado; en todas faltaron votos para llegar a 52 a favor de la acusación.',
    voteSourceNote:
      'Cada fila es un imputado: «A favor» = votos que rechazaron la acusación / blindaje; «En contra» = votos por acusar y suspender.',
    votes: [
      { party: 'Raúl Doroteo Carbajo', aFavor: 44, enContra: 37, abstencion: 4 },
      { party: 'Darwin Espinoza Vargas', aFavor: 43, enContra: 37, abstencion: 5 },
      { party: 'Jorge Luis Flores Ancachi', aFavor: 43, enContra: 38, abstencion: 6 },
      { party: 'Elvis Vergara Mendoza', aFavor: 42, enContra: 39, abstencion: 5 },
    ],
    sourceDocuments: [
      {
        label: 'El Peruano — Pleno desestimó acusar a congresistas del caso Los Niños',
        url: 'https://elperuano.pe/noticia/213089-pleno-del-congreso-desestimo-acusar-a-congresistas-del-caso-los-ninos',
      },
      {
        label: 'Diario de Debates — Comisión Permanente (PDF, contexto legislativo)',
        url: 'https://www3.congreso.gob.pe/Docs/DGP/diariodebates/files/diario-debates/per-2022-18(t).pdf',
      },
      {
        label: 'RPP — Archivo de acusaciones constitucionales contra legisladores',
        url: 'https://rpp.pe/politica/congreso/congreso-blinda-a-los-ninos-y-manda-al-archivo-acusaciones-constitucionales-contra-legisladores-noticia-1485294',
      },
    ],
  },
];
