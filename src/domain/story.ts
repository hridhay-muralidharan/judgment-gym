import type { StoryModel } from './types'

export function fallbackStoryModel(narrative: string): StoryModel {
  const words = narrative.trim().split(/\s+/).filter(Boolean).length
  const hasCareerSignals = /career|job|work|product|company|role|business/i.test(narrative)
  return {
    framing: `This is a provisional narrative map built from ${words} words. It is a structured reading of what you chose to include, not a complete model of you.`,
    evolution: [
      { period: 'Earlier chapter', shift: 'An initial direction was shaped by the opportunities, expectations, and constraints present at the time.', evidence: 'Needs user review against the original narrative.' },
      { period: 'Transitions', shift: 'Later experiences appear to have changed what you value, what you can do, and what conditions help you act well.', evidence: 'Needs user review across the turning points you described.' },
      { period: 'Current direction', shift: hasCareerSignals ? 'The present direction appears to connect lived experience with a more self-endorsed form of work.' : 'The present direction is not yet specific enough to summarize safely.', evidence: 'Provisional because the hosted model was unavailable.' },
    ],
    patterns: [
      { title: 'The story contains choices under competing pressures.', description: 'External expectations, personal interest, capability, and context may not have pointed in the same direction.', status: 'tentative', evidence: 'Broad narrative-level hypothesis; review before sharing.' },
      { title: 'Meaning changed across experience.', description: 'The same type of decision may have acquired a different meaning after later transitions and reflection.', status: 'tentative', evidence: 'Broad narrative-level hypothesis; review before sharing.' },
    ],
    currentDirection: 'What you want to carry forward is still for you to define in your own words.',
    interviewNarrative: 'My path has moved through several different operating environments, and each transition clarified the kind of work in which I do my best thinking. I am now looking for a role where I can combine product judgment, workflow design, and lived interest in better mental-health support. That direction is grounded in experience, but I am continuing to test it through conversations and real product work.',
    followUps: ['Which interpretation feels most accurate?', 'What important exception or missing chapter should change this map?', 'Which parts belong in a professional interview, and which should remain private?'],
    sharingNote: 'Review every line before sharing. Remove details that are intimate, identifying, or unnecessary for the audience.',
  }
}
