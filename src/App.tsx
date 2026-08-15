import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import { Privacy } from './components/Privacy'
import { Respond } from './components/Respond'
import { Review } from './components/Review'
import { Threads } from './components/Threads'
import { Welcome } from './components/Welcome'
import { fixtureThreads, initialTension, scenarios } from './domain/scenarios'
import { fallbackSynthesis, nextIncompleteScenarioIndex } from './domain/profile'
import type { PracticeState, Reflection, Stage, StoredPractice, ThreadStatus } from './domain/types'
import { requestReflection } from './lib/reflection'
import { downloadPractice, emptyPractice, normalizePractice, persistPractice, readPractice } from './lib/storage'

const initialState: PracticeState = {
  ...emptyPractice(),
  stage: 'welcome',
  selectedReflectionId: null,
  showContext: false,
  isReflecting: false,
  apiError: '',
  saved: false,
}

function App() {
  const [state, setState] = useState<PracticeState>(initialState)
  const [hydrated, setHydrated] = useState(false)
  const { stage, scenarioIndex, history } = state
  const scenario = scenarios[scenarioIndex]
  const profileSynthesis = state.synthesis ?? fallbackSynthesis(history)
  const isComplete = history.length >= scenarios.length
  const progress = stage === 'welcome' || stage === 'privacy' ? 0 : stage === 'respond' ? 1 : 2

  useEffect(() => {
    const saved = readPractice()
    if (saved) setState((current) => ({ ...current, ...saved, saved: false }))
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    persistPractice(state)
    setState((current) => current.saved ? current : { ...current, saved: true })
    const timer = window.setTimeout(() => setState((current) => ({ ...current, saved: false })), 1200)
    return () => window.clearTimeout(timer)
  }, [hydrated, state.response, state.correction, state.threads, state.tension, state.synthesis, state.history, state.scenarioIndex])

  const patch = (changes: Partial<PracticeState>) => setState((current) => ({ ...current, ...changes }))

  const prepareScenario = (index: number) => patch({
    scenarioIndex: index,
    response: '',
    correction: '',
    threads: [...fixtureThreads],
    tension: 'The next situation may change what this thread means.',
    synthesis: undefined,
    selectedReflectionId: null,
    showContext: false,
    apiError: '',
    stage: 'respond',
  })

  const openReflect = () => {
    const nextIndex = nextIncompleteScenarioIndex(history)
    if (nextIndex === -1) return patch({ stage: 'threads', selectedReflectionId: null })
    const currentComplete = history.some((entry) => entry.scenario.title === scenario.title)
    if (currentComplete || nextIndex !== scenarioIndex) return prepareScenario(nextIndex)
    patch({ stage: 'respond', showContext: false, apiError: '' })
  }

  const submitResponse = async () => {
    if (state.response.trim().length < 20) return
    patch({ isReflecting: true, apiError: '' })
    try {
      const result = await requestReflection(scenario, state.response, history.map((entry) => ({ scenario: entry.scenario.title, response: entry.response, correction: entry.correction, threads: entry.threads, tension: entry.tension })))
      patch({
        threads: result.threads?.length ? result.threads.map((thread) => ({ ...thread, status: 'tentative' as const })) : [...fixtureThreads],
        tension: result.tension ?? state.tension,
        synthesis: result.synthesis ?? state.synthesis,
        isReflecting: false,
        stage: 'review',
      })
    } catch {
      patch({ threads: [...fixtureThreads], isReflecting: false, stage: 'review', apiError: 'The live mirror is unavailable, so you are seeing a practice reflection. You can still correct it and continue.' })
    }
  }

  const keepReflection = () => {
    const entry: Reflection = { id: Date.now(), scenario, response: state.response, correction: state.correction, threads: state.threads, tension: state.tension, synthesis: state.synthesis, createdAt: new Date().toISOString() }
    patch({ history: [...history.filter((item) => item.scenario.title !== scenario.title), entry], stage: 'threads', selectedReflectionId: null })
  }

  const nextPractice = () => {
    const nextIndex = nextIncompleteScenarioIndex(history)
    if (nextIndex === -1) return patch({ stage: 'threads', selectedReflectionId: null })
    prepareScenario(nextIndex)
  }

  const updateThread = (index: number, status: ThreadStatus) => patch({ threads: state.threads.map((thread, itemIndex) => itemIndex === index ? { ...thread, status } : thread) })

  const reset = () => {
    localStorage.removeItem('judgment-gym-demo')
    setState({ ...initialState, threads: [...fixtureThreads] })
  }

  const exportData = () => {
    const data: StoredPractice = { response: state.response, correction: state.correction, threads: state.threads, tension: state.tension, synthesis: state.synthesis, history: state.history, scenarioIndex: state.scenarioIndex }
    downloadPractice(data)
  }

  const importData = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const imported = normalizePractice(JSON.parse(String(reader.result)))
        setState((current) => ({ ...current, ...imported, stage: 'welcome', selectedReflectionId: null, apiError: '' }))
      } catch {
        patch({ apiError: 'That file could not be imported. Choose a Judgment Gym JSON export.' })
      }
    }
    reader.readAsText(file)
    event.target.value = ''
  }

  const setStage = (nextStage: Stage) => patch({ stage: nextStage, selectedReflectionId: nextStage === 'threads' ? null : state.selectedReflectionId })
  const openThreads = () => patch({ stage: 'threads', selectedReflectionId: null })
  const backFromThreads = () => state.selectedReflectionId === null ? setStage('review') : patch({ selectedReflectionId: null })

  return <div className="app-shell">
    <header className="topbar"><button className="wordmark" onClick={() => setStage('welcome')} aria-label="Go to home"><span className="wordmark-mark">JG</span><span>Judgment Gym</span></button><nav className="topnav" aria-label="Primary navigation"><button className={stage === 'respond' || stage === 'review' ? 'active' : ''} onClick={openReflect}>Reflect</button><button className={stage === 'threads' ? 'active' : ''} onClick={openThreads}>My threads</button><button onClick={() => setStage('privacy')}>Privacy</button></nav><div className="storage-status"><span className="status-dot" /> {state.saved ? 'Saved privately' : 'Local practice'}</div></header>
    {progress > 0 && <div className="progress-wrap" aria-label={`Step ${progress} of 2`}><div className="progress-label"><span>Practice {Math.min(scenarioIndex + 1, scenarios.length)} of {scenarios.length}</span><span>{progress === 1 ? 'Response' : 'Mirror review'}</span></div><div className="progress-line"><span style={{ width: `${progress * 50}%` }} /></div></div>}
    <main>
      {stage === 'welcome' && <Welcome onBegin={openReflect} onPrivacy={() => setStage('privacy')} hasHistory={history.length > 0} onThreads={openThreads} allComplete={isComplete} />}
      {stage === 'respond' && <Respond response={state.response} setResponse={(response) => patch({ response })} scenario={scenario} showContext={state.showContext} setShowContext={(showContext) => patch({ showContext })} onSubmit={submitResponse} isReflecting={state.isReflecting} />}
      {stage === 'review' && <Review response={state.response} correction={state.correction} setCorrection={(correction) => patch({ correction })} threads={state.threads} apiError={state.apiError} updateThread={updateThread} onContinue={keepReflection} />}
      {stage === 'threads' && <Threads threads={state.threads} tension={state.tension} synthesis={profileSynthesis} history={history} selectedReflectionId={state.selectedReflectionId} isComplete={isComplete} onBack={backFromThreads} onNext={nextPractice} onOpenScenario={(id) => patch({ selectedReflectionId: id })} />}
      {stage === 'privacy' && <Privacy onBack={() => setStage('welcome')} onReset={reset} onExport={exportData} onImport={importData} />}
    </main>
    {stage !== 'welcome' && stage !== 'privacy' && <footer className="practice-footer"><span>Your words stay yours.</span><button onClick={() => setStage('privacy')}>View data controls</button></footer>}
  </div>
}

export default App
