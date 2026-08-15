import { scenarios } from './scenarios'
import type { Reflection, Synthesis } from './types'

export function fallbackSynthesis(history: Reflection[]): Synthesis | undefined {
  if (history.length === 0) return undefined
  const themeCounts = new Map<string, number>()
  history.flatMap((entry) => entry.threads).forEach((thread) => {
    const key = thread.title.trim()
    themeCounts.set(key, (themeCounts.get(key) ?? 0) + 1)
  })
  const recurringThemes = [...themeCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([title, count]) => count > 1 ? `${title} · appears in ${count} scenarios` : title)
  const corrections = history.filter((entry) => entry.correction.trim()).length
  const completed = history.length
  return {
    summary: completed >= scenarios.length ? `Across all ${completed} scenarios, your responses now form a record of how judgment moves with context and circumstance.` : `Your first ${completed} reflection${completed === 1 ? '' : 's'} now form${completed === 1 ? 's' : ''} a starting point. More scenarios will show what repeats, changes, or depends on context.`,
    recurringThemes: recurringThemes.length ? recurringThemes : ['No recurring pattern yet'],
    changes: corrections ? [`You have added or revised your interpretation in ${corrections} scenario${corrections === 1 ? '' : 's'}.`] : ['More scenarios will give this model something to compare.'],
    connections: completed >= 2 ? [`The profile currently links evidence across ${completed} completed scenarios.`] : ['Each scenario will remain available as evidence.'],
  }
}

export function nextIncompleteScenarioIndex(history: Reflection[]): number {
  const completed = new Set(history.map((entry) => entry.scenario.title))
  return scenarios.findIndex((scenario) => !completed.has(scenario.title))
}
