/**
 * types.ts — Shared TypeScript interfaces for the voting data model.
 *
 * Data sourced from the official plenary session records of the
 * Congress of Peru (Congreso de la República), March 2026.
 * Primary sources: Actas del Pleno, Diario de los Debates,
 * resoluciones legislativas, and official congressional communications.
 */

/** A single parliamentary group's vote tally for one law. */
export interface PartyVote {
  /** Full name of the parliamentary group (bancada). */
  party: string;
  /** Votes in favor (A Favor). */
  aFavor: number;
  /** Votes against (En Contra). */
  enContra: number;
  /** Abstentions (Abstención). */
  abstencion: number;
}

/** The legislative approval mechanism used. */
export type ApprovalMechanism = 'insistencia' | 'promulgacion' | 'aprobacion';

/** Metadata and vote breakdown for a single law. */
export interface Law {
  /** URL-safe slug used for anchors and deep-linking. */
  id: string;
  /** Short display name for TOC and cards. */
  shortName: string;
  /** Full official name of the law or bill. */
  fullName: string;
  /** Official law/bill number (e.g. "32563"), or null if not yet numbered. */
  lawNumber: string | null;
  /** Bill numbers that were consolidated (Proyectos de Ley). */
  billNumbers: string[];
  /** Date of the plenary vote (ISO 8601). */
  date: string;
  /** How the law was approved. */
  mechanism: ApprovalMechanism;
  /** Brief description of the estimated fiscal impact. */
  fiscalImpact: string;
  /** Per-group vote breakdown. */
  votes: PartyVote[];
}
