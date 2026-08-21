export type Stage = 'welcome' | 'respond' | 'review' | 'threads' | 'story' | 'privacy'
export type ThreadStatus = 'tentative' | 'confirmed' | 'context-dependent'

export type Scenario = {
  eyebrow: string
  title: string
  body: string
  context: string
  question: string
  reason: string
}

export type Thread = {
  title: string
  description: string
  status: ThreadStatus
  evidence: string
}

export type Synthesis = {
  summary: string
  recurringThemes: string[]
  changes: string[]
  connections: string[]
}

export type StoryModel = {
  framing: string
  evolution: Array<{ period: string; shift: string; evidence: string }>
  patterns: Array<{ title: string; description: string; status: 'tentative' | 'user-stated' | 'context-dependent'; evidence: string }>
  currentDirection: string
  interviewNarrative: string
  followUps: string[]
  sharingNote: string
}

export type Reflection = {
  id: number
  scenario: Scenario
  response: string
  correction: string
  threads: Thread[]
  tension: string
  synthesis?: Synthesis
  createdAt: string
}

export type StoredPractice = {
  response: string
  correction: string
  threads: Thread[]
  tension: string
  synthesis?: Synthesis
  history: Reflection[]
  scenarioIndex: number
}

export type PracticeState = {
  stage: Stage
  scenarioIndex: number
  response: string
  correction: string
  threads: Thread[]
  tension: string
  synthesis?: Synthesis
  history: Reflection[]
  selectedReflectionId: number | null
  showContext: boolean
  isReflecting: boolean
  apiError: string
  saved: boolean
  storyInput: string
  storyModel?: StoryModel
  storyError: string
}
