/**
 * types.ts — Shared TypeScript interfaces for the voting data model.
 *
 * Data sourced from the official plenary session records of the
 * Congress of Peru (Congreso de la República).
 *
 * Primary sources:
 * - Actas del Pleno y la Comisión Permanente
 * - Diario de los Debates
 * - Resoluciones legislativas
 * - Official congressional communications
 * - Convoca.pe investigative analysis (for pro-crime law cross-validation)
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

/** Thematic category for grouping laws on separate pages. */
export type LawCategory = 'gasto' | 'procrimen';

/** How per-bancada numbers were obtained (shown on leyes-procrimen). */
export type VoteStageProvenance =
  | 'acta_oficial'
  | 'acta_total_solamente'
  | 'fuente_secundaria'
  | 'estimacion_proporcional';

/**
 * A single stage in a multi-vote legislative process.
 * Laws may pass through primera votación, segunda votación,
 * exoneración, insistencia, or Comisión Permanente votes.
 */
export interface VoteStage {
  /** Human-readable label (e.g. "Primera Votación", "Insistencia"). */
  label: string;
  /** Date of this specific vote (ISO 8601). */
  date: string;
  /** Where this vote took place. */
  venue: 'pleno' | 'comision-permanente';
  /** Per-group vote breakdown for this stage. */
  votes: PartyVote[];
  /** Optional classification for data quality / audit trail. */
  dataProvenance?: VoteStageProvenance;
  /** Short note under the chart (methodology, PDF link hint, caveats). */
  sourceNote?: string;
}

/** A reference to a hosted PDF source document. */
export interface SourceDocument {
  /** Display label for the link. */
  label: string;
  /** Path relative to the site root (e.g. "/documentos/votaciones-procrimen/..."). */
  path: string;
  /** Original URL where the document was obtained. */
  sourceUrl?: string;
}

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
  /** Per-group vote breakdown (for the primary/final vote). */
  votes: PartyVote[];
  /** Thematic category. Defaults to 'gasto' if omitted. */
  category?: LawCategory;
  /** Multiple vote stages when a law went through several rounds. */
  voteStages?: VoteStage[];
  /** Hosted PDF source documents for transparency. */
  sourceDocuments?: SourceDocument[];
}
