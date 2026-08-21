export type Stage = 'welcome' | 'floor' | 'respond' | 'review' | 'threads' | 'explore' | 'privacy'
export type ThreadStatus = 'tentative' | 'confirmed' | 'context-dependent'

export type Scenario = {
  eyebrow: string
  title: string
  body: string
  context: string
  question: string
  reason: string
}

export type ExperienceDetails = {
  felt: string
  thought: string
  said: string
  did: string
  wanted: string
  consequence: string
  now: string
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

export type Probe = {
  title: string
  rationale: string
  prompt: string
  dimension: string
}

export type Exploration = {
  probe: Probe
  simulationResponse: string
  transferNote: string
  createdAt: string
}

export type Reflection = {
  id: number
  scenario: Scenario
  response: string
  details?: ExperienceDetails
  correction: string
  threads: Thread[]
  tension: string
  synthesis?: Synthesis
  createdAt: string
  exploration?: Exploration
}

export type StoredPractice = {
  response: string
  correction: string
  threads: Thread[]
  tension: string
  synthesis?: Synthesis
  history: Reflection[]
  scenarioIndex: number
  details?: ExperienceDetails
  probe?: Probe
  simulationResponse?: string
  transferNote?: string
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
  details: ExperienceDetails
  probe?: Probe
  simulationResponse: string
  transferNote: string
}
