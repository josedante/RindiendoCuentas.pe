/**
 * Cross-informe roll-call collection and Pearson correlation between bancadas
 * (co-voting similarity). Build-time only; consumed by SiteHome and alineacion-bancadas.
 */

import type { PartyVote } from './types';
import { blindajeCases } from './blindaje-cases';
import { proCrimeLaws } from './pro-crime-laws';
import { laws } from './laws';
import { contrarreformaLaws } from './contrarreforma-laws';
import {
  canonicalizeParty,
  displayNameForCanonicalId,
  isAggregateTotalRow,
  sortCanonicalIds,
} from './bancada-canonical';

export type AlignmentSourceType = 'procrimen' | 'blindaje' | 'gasto' | 'universitaria';

export interface AlignmentRollCall {
  id: string;
  label: string;
  date: string;
  sourceType: AlignmentSourceType;
  sourceSlug: string;
  reportHref: string;
}

export interface AlignmentDataset {
  rollCalls: AlignmentRollCall[];
  partyIds: string[];
  idToDisplay: Record<string, string>;
  correlationMatrix: (number | null)[][];
  minSharedVotes: number;
  totalRollCallsCollected: number;
  totalRollCallsContested: number;
}

const MIN_SHARED_VOTES = 4;

function mergeVotes(votes: PartyVote[]): Map<string, PartyVote> {
  const byId = new Map<string, PartyVote>();
  for (const v of votes) {
    if (isAggregateTotalRow(v.party)) continue;
    const { id, displayName } = canonicalizeParty(v.party);
    const prev = byId.get(id);
    if (!prev) {
      byId.set(id, {
        party: displayName,
        aFavor: v.aFavor,
        enContra: v.enContra,
        abstencion: v.abstencion,
      });
    } else {
      byId.set(id, {
        party: displayName,
        aFavor: prev.aFavor + v.aFavor,
        enContra: prev.enContra + v.enContra,
        abstencion: prev.abstencion + v.abstencion,
      });
    }
  }
  return byId;
}

function rollCallContested(merged: Map<string, PartyVote>): boolean {
  let enContraTotal = 0;
  for (const v of merged.values()) enContraTotal += v.enContra;
  return enContraTotal > 0;
}

function partyScore(v: PartyVote): number | null {
  const t = v.aFavor + v.enContra + v.abstencion;
  if (t <= 0) return null;
  return (v.aFavor - v.enContra) / t;
}

function pearson(pairs: { x: number; y: number }[]): number | null {
  if (pairs.length < 2) return null;
  const n = pairs.length;
  const mx = pairs.reduce((s, p) => s + p.x, 0) / n;
  const my = pairs.reduce((s, p) => s + p.y, 0) / n;
  let num = 0;
  let dx = 0;
  let dy = 0;
  for (const p of pairs) {
    const zx = p.x - mx;
    const zy = p.y - my;
    num += zx * zy;
    dx += zx * zx;
    dy += zy * zy;
  }
  if (dx === 0 || dy === 0) return null;
  const r = num / Math.sqrt(dx * dy);
  if (Number.isNaN(r)) return null;
  return r;
}

function hrefForSource(type: AlignmentSourceType, slug: string): string {
  switch (type) {
    case 'procrimen':
      return `/leyes-procrimen#${slug}`;
    case 'blindaje':
      return `/blindaje-institucional#${slug}`;
    case 'gasto':
      return `/leyes-de-gasto#${slug}`;
    case 'universitaria':
      return `/contrarreforma-universitaria#${slug}`;
    default:
      return '/';
  }
}

interface InternalRollCall extends AlignmentRollCall {
  scoresByPartyId: Map<string, number>;
  displayByPartyId: Map<string, string>;
}

function pushRollCall(
  out: InternalRollCall[],
  merged: Map<string, PartyVote>,
  base: Omit<AlignmentRollCall, never>,
): void {
  const scoresByPartyId = new Map<string, number>();
  const displayByPartyId = new Map<string, string>();
  for (const [pid, pv] of merged) {
    displayByPartyId.set(pid, pv.party);
    const sc = partyScore(pv);
    if (sc !== null) scoresByPartyId.set(pid, sc);
  }
  out.push({ ...base, scoresByPartyId, displayByPartyId });
}

function collectContestedRollCalls(): InternalRollCall[] {
  const out: InternalRollCall[] = [];

  for (const law of proCrimeLaws) {
    const stages = law.voteStages?.length
      ? law.voteStages
      : [{ label: 'Votación', date: law.date, venue: 'pleno' as const, votes: law.votes }];

    let stageIdx = 0;
    for (const stage of stages) {
      if (stage.votes.length === 1 && isAggregateTotalRow(stage.votes[0].party)) continue;

      const merged = mergeVotes(stage.votes);
      if (!rollCallContested(merged)) continue;

      pushRollCall(out, merged, {
        id: `procrimen:${law.id}:${stageIdx++}`,
        label: `${law.shortName} — ${stage.label}`,
        date: stage.date,
        sourceType: 'procrimen',
        sourceSlug: law.id,
        reportHref: hrefForSource('procrimen', law.id),
      });
    }
  }

  for (const c of blindajeCases) {
    if (c.id === 'los-ninos') continue;
    const merged = mergeVotes(c.votes);
    if (!rollCallContested(merged)) continue;

    pushRollCall(out, merged, {
      id: `blindaje:${c.id}`,
      label: c.shortName,
      date: c.date,
      sourceType: 'blindaje',
      sourceSlug: c.id,
      reportHref: hrefForSource('blindaje', c.id),
    });
  }

  for (const law of laws) {
    const merged = mergeVotes(law.votes);
    if (!rollCallContested(merged)) continue;

    pushRollCall(out, merged, {
      id: `gasto:${law.id}`,
      label: law.shortName,
      date: law.date,
      sourceType: 'gasto',
      sourceSlug: law.id,
      reportHref: hrefForSource('gasto', law.id),
    });
  }

  for (const law of contrarreformaLaws) {
    const merged = mergeVotes(law.votes);
    if (!rollCallContested(merged)) continue;

    pushRollCall(out, merged, {
      id: `universitaria:${law.id}`,
      label: law.shortName,
      date: law.date,
      sourceType: 'universitaria',
      sourceSlug: law.id,
      reportHref: hrefForSource('universitaria', law.id),
    });
  }

  return out;
}

function countCollectedStages(): number {
  let n = 0;
  for (const law of proCrimeLaws) {
    const stages = law.voteStages?.length
      ? law.voteStages
      : [{ label: 'Votación', date: law.date, venue: 'pleno' as const, votes: law.votes }];
    for (const stage of stages) {
      if (stage.votes.length === 1 && isAggregateTotalRow(stage.votes[0].party)) continue;
      n++;
    }
  }
  n += blindajeCases.filter((c) => c.id !== 'los-ninos').length;
  n += laws.length;
  n += contrarreformaLaws.length;
  return n;
}

export function buildAlignmentDataset(): AlignmentDataset {
  const totalRollCallsCollected = countCollectedStages();
  const contested = collectContestedRollCalls();
  const totalRollCallsContested = contested.length;

  const idToDisplay = new Map<string, string>();
  for (const rc of contested) {
    for (const [pid, label] of rc.displayByPartyId) {
      const fromAlias = displayNameForCanonicalId(pid);
      idToDisplay.set(pid, fromAlias ?? label);
    }
  }

  const idSet = new Set<string>();
  for (const rc of contested) {
    for (const pid of rc.scoresByPartyId.keys()) idSet.add(pid);
  }

  const partyIds = sortCanonicalIds([...idSet], idToDisplay);

  const correlationMatrix: (number | null)[][] = partyIds.map(() =>
    partyIds.map(() => null as number | null),
  );

  for (let i = 0; i < partyIds.length; i++) {
    for (let j = i; j < partyIds.length; j++) {
      const a = partyIds[i];
      const b = partyIds[j];
      const pairs: { x: number; y: number }[] = [];
      for (const rc of contested) {
        const x = rc.scoresByPartyId.get(a);
        const y = rc.scoresByPartyId.get(b);
        if (x !== undefined && y !== undefined) pairs.push({ x, y });
      }
      const r = pairs.length >= MIN_SHARED_VOTES ? pearson(pairs) : null;
      correlationMatrix[i][j] = r;
      correlationMatrix[j][i] = r;
    }
  }

  const rollCalls: AlignmentRollCall[] = contested.map(
    ({ scoresByPartyId: _s, displayByPartyId: _d, ...rest }) => rest,
  );

  return {
    rollCalls,
    partyIds,
    idToDisplay: Object.fromEntries(idToDisplay),
    correlationMatrix,
    minSharedVotes: MIN_SHARED_VOTES,
    totalRollCallsCollected,
    totalRollCallsContested,
  };
}
