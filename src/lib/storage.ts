import type { PracticeState, StoredPractice } from '../domain/types'
import { fixtureThreads, initialTension, scenarios } from '../domain/scenarios'
import { fallbackSynthesis } from '../domain/profile'

export const storageKey = 'judgment-gym-demo'

export function emptyPractice(): StoredPractice {
  return { response: '', correction: '', threads: [...fixtureThreads], tension: initialTension, history: [], scenarioIndex: 0 }
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
    synthesis: parsed.synthesis ?? fallbackSynthesis(history),
    scenarioIndex,
  }
}

export function readPractice(): StoredPractice | null {
  const stored = localStorage.getItem(storageKey)
  if (!stored) return null
  try {
    return normalizePractice(JSON.parse(stored))
  } catch {
    localStorage.removeItem(storageKey)
    return null
  }
}

export function persistPractice(state: Pick<PracticeState, 'response' | 'correction' | 'threads' | 'tension' | 'synthesis' | 'history' | 'scenarioIndex'>): void {
  const payload: StoredPractice = { response: state.response, correction: state.correction, threads: state.threads, tension: state.tension, synthesis: state.synthesis, history: state.history, scenarioIndex: state.scenarioIndex }
  localStorage.setItem(storageKey, JSON.stringify(payload))
}

export function downloadPractice(data: StoredPractice, filename = 'judgment-gym-practice.json'): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
