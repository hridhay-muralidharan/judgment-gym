import type { Probe, Scenario, Thread } from './types'

export const scenarios: Scenario[] = [
  { eyebrow: 'Practice 01 · A lived moment', title: 'Bring one real situation into view', body: 'Describe a situation from your life that still feels meaningful, confusing, charged, or unfinished. Start with what happened in your own words. You do not need to explain yourself yet.', context: 'After you write freely, you can add what you felt, thought, said, did, wanted, and noticed afterward. Share only what feels safe to record.', question: 'What happened, and what stayed with you about it?', reason: 'A real situation gives the model evidence to work with before it proposes any interpretation or simulation.' },
  { eyebrow: 'Reflection 02 · The changed condition', title: 'When the same trigger meets a different day', body: 'Return to a situation that tends to activate a familiar response. Imagine it happening after enough sleep, with more support, or with less time pressure than usual.', context: 'There is no preferred response. Notice what changes, what stays, and which conditions seem to matter.', question: 'What changes in your response when the conditions change?', reason: 'Testing whether a pattern is fixed, situational, or connected to a specific need.' },
  { eyebrow: 'Reflection 03 · The other perspective', title: 'A conversation you want to have differently', body: 'Think of a person or situation where you felt misunderstood, unseen, or unable to say what you needed. Consider both what you wanted them to understand and what you were protecting.', context: 'You do not need to excuse anyone or take responsibility for their behaviour. This is an invitation to notice your own experience and options.', question: 'What would you want to be able to say, ask for, or understand?', reason: 'Making room for needs, boundaries, and interpretations without forcing a single story.' },
  { eyebrow: 'Reflection 04 · The unresolved tension', title: 'When two true things pull against each other', body: 'Consider a choice where looking after yourself and meeting someone else’s needs both feel important. Describe the pull without trying to solve it immediately.', context: 'You may feel care and resentment, relief and guilt, hope and fear at the same time. Contradiction is useful information here.', question: 'What are the two truths you are trying to hold at once?', reason: 'Practising language for ambivalence that can make a therapy conversation more precise.' },
  { eyebrow: 'Reflection 05 · Bring it forward', title: 'What would be useful to bring to therapy?', body: 'Look across the moments you have reflected on. Choose one pattern, question, or uncertainty that you would like a qualified clinician to help you explore.', context: 'You are not expected to reach a conclusion. A useful next step might be a concrete example, a question, or a sentence you want help finishing.', question: 'What would you like another person to understand or help you explore?', reason: 'Turning self-observation into a user-owned bridge toward a more focused therapy session.' },
]

export const fixtureThreads: Thread[] = [
  { title: 'You notice a difference between what happened and what it meant to you.', description: 'Your reflection may contain both observable details and an interpretation that could be explored further.', status: 'tentative', evidence: 'From this reflection' },
  { title: 'You can identify conditions that change how a pattern shows up.', description: 'Support, rest, pressure, and relationships may shape the response without defining you.', status: 'tentative', evidence: 'From this reflection' },
]

export const initialTension = 'Self-protection and connection may both matter here.'

export const fixtureProbe: Probe = {
  title: 'Change one condition and notice what moves',
  rationale: 'The first account gives us one context. A constructed variation can help you notice what depends on pressure, support, relationship, or perceived consequence.',
  prompt: 'Imagine the same situation, but one important condition changes. You have more time and one person you trust is available afterward. What do you say or do now, and what feels different inside?',
  dimension: 'context sensitivity',
}
