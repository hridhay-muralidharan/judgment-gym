import type { HistoryInput, ReflectionResult } from './reflectionTypes'
import type { Scenario } from '../domain/types'

export async function requestReflection(scenario: Scenario, response: string, history: HistoryInput[]): Promise<ReflectionResult> {
  const result = await fetch('/api/reflect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ scenario: `${scenario.title}\n${scenario.body}\n${scenario.context}`, response, history }),
  })
  if (!result.ok) throw new Error('Model route unavailable')
  return await result.json() as ReflectionResult
}
