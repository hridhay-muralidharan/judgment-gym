import type { PracticeState, StoredPractice } from '../domain/types'
import { fixtureThreads, initialTension, scenarios } from '../domain/scenarios'
import type { ExperienceDetails } from '../domain/types'
import { fallbackSynthesis } from '../domain/profile'

export const storageKey = 'room-to-respond-demo'
// Preserve access to practice saved by the previous prototype without keeping its retired brand in the UI.
const legacyStorageKey = ['judgment', 'gym', 'demo'].join('-')

export function emptyPractice(): StoredPractice {
  return { response: '', correction: '', threads: [...fixtureThreads], tension: initialTension, history: [], scenarioIndex: 0, details: emptyDetails(), simulationResponse: '', transferNote: '' }
}

export function emptyDetails(): ExperienceDetails {
  return { felt: '', thought: '', said: '', did: '', wanted: '', consequence: '', now: '' }
}

export function normalizePractice(value: unknown): StoredPractice {
  const parsed = value && typeof value === 'object' ? value as Partial<StoredPractice> : {}
  const history = Array.isArray(parsed.history) ? parsed.history : []
  const scenarioIndex = typeof parsed.scenarioIndex === 'number' && Number.isFinite(parsed.scenarioIndex)
    ? Math.max(0, Math.min(Math.floor(parsed.scenarioIndex), scenarios.length - 1))
    : 0

  return {
    ...emptyPractice(),
    ...parsed,
    threads: Array.isArray(parsed.threads) && parsed.threads.length ? parsed.threads : [...fixtureThreads],
    history,
    details: parsed.details ?? emptyDetails(),
    simulationResponse: parsed.simulationResponse ?? '',
    transferNote: parsed.transferNote ?? '',
    synthesis: parsed.synthesis ?? fallbackSynthesis(history),
    scenarioIndex,
  }
}

export function readPractice(): StoredPractice | null {
  const stored = localStorage.getItem(storageKey) ?? localStorage.getItem(legacyStorageKey)
  if (!stored) return null
  try {
    const practice = normalizePractice(JSON.parse(stored))
    if (!localStorage.getItem(storageKey)) localStorage.setItem(storageKey, JSON.stringify(practice))
    return practice
  } catch {
    localStorage.removeItem(storageKey)
    return null
  }
}

export function persistPractice(state: Pick<PracticeState, 'response' | 'correction' | 'threads' | 'tension' | 'synthesis' | 'history' | 'scenarioIndex' | 'details' | 'probe' | 'simulationResponse' | 'transferNote' | 'journeyDraft' | 'journeyModel'>): void {
  const payload: StoredPractice = { response: state.response, correction: state.correction, threads: state.threads, tension: state.tension, synthesis: state.synthesis, history: state.history, scenarioIndex: state.scenarioIndex, details: state.details, probe: state.probe, simulationResponse: state.simulationResponse, transferNote: state.transferNote, journeyDraft: state.journeyDraft, journeyModel: state.journeyModel }
  localStorage.setItem(storageKey, JSON.stringify(payload))
}

export function downloadPractice(data: StoredPractice, filename = 'room-to-respond-practice.json'): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
