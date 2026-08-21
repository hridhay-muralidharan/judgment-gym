import { scenarios } from './scenarios'
import type { JourneyMode, JourneyModel, Reflection, Synthesis } from './types'

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
    summary: completed >= scenarios.length ? `Across all ${completed} reflections, you now have a record of what you notice, what changes with context, and what may be useful to explore in therapy.` : `Your first ${completed} reflection${completed === 1 ? '' : 's'} now form${completed === 1 ? 's' : ''} a starting point. More reflections will show what repeats, changes, or depends on context.`,
    recurringThemes: recurringThemes.length ? recurringThemes : ['No recurring pattern yet'],
    changes: corrections ? [`You have added or revised your interpretation in ${corrections} scenario${corrections === 1 ? '' : 's'}.`] : ['More scenarios will give this model something to compare.'],
    connections: completed >= 2 ? [`The profile currently links evidence across ${completed} completed scenarios.`] : ['Each scenario will remain available as evidence.'],
  }
}

export function nextIncompleteScenarioIndex(history: Reflection[]): number {
  const completed = new Set(history.map((entry) => entry.scenario.title))
  return scenarios.findIndex((scenario) => !completed.has(scenario.title))
}

export function fallbackJourneyModel(raw: string, mode: JourneyMode): JourneyModel {
  const years = [...new Set(raw.match(/\b(?:19|20)\d{2}\b/g) ?? [])]
  const labels = mode === 'single-event' ? ['One event'] : mode === 'one-situation' ? ['Before the situation', 'During the situation', 'After the situation'] : years.length >= 4 ? years.slice(0, 5) : ['Early context', 'First transition', 'Learning through work', 'Current direction']
  const periods = labels.map((label, index) => ({
    label,
    context: index === 0 ? 'An earlier environment shaped the expectations and options available.' : 'A new role or transition created a different set of demands.',
    turningPoint: index === labels.length - 1 ? 'The account now points toward a more self-endorsed direction.' : 'The person had to make sense of a changed situation and decide what to do next.',
    faculties: index % 2 === 0 ? ['meaning-making', 'motivation', 'judgment'] : ['emotion regulation', 'cognitive flexibility', 'learning'],
    shift: index === 0 ? 'Starting point for the model; interpretation remains open.' : 'A possible change in how the person responds to pressure, feedback, or uncertainty.',
    evidence: 'Generated as a provisional fallback. Re-run with the hosted model for evidence-linked extraction from the private account.',
  }))
  return {
    thesis: 'This account describes a person learning to distinguish inherited expectations from self-endorsed direction while building agency through changing work contexts.',
    periods,
    evolution: ['External expectations and perceived evaluation appear important in earlier decisions.', 'Repeated transitions created opportunities to build independent judgment, practical agency, and learning.', 'The current direction appears more connected to intrinsic interest and contribution.'],
    openQuestions: ['Which changes feel genuinely self-endorsed, and which still depend on approval or status?', 'Which situations reliably narrow the available response?', 'What evidence would show that a new strategy transfers into daily life?'],
    interviewNarrative: 'My career has moved through several transitions that taught me how context, pressure, feedback, and motivation shape the way I work. Over time I have become more independent in my judgment and clearer about the kind of problems I want to work on: using product and AI capabilities in ways that support human wellbeing.',
  }
}
