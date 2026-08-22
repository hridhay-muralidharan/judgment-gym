import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import { Privacy } from './components/Privacy'
import { Respond } from './components/Respond'
import { Review } from './components/Review'
import { Threads } from './components/Threads'
import { Welcome } from './components/Welcome'
import { Explore } from './components/Explore'
import { WorkoutFloor } from './components/WorkoutFloor'
import { Journey } from './components/Journey'
import { PractitionerWorkspace } from './components/PractitionerWorkspace'
import { fixtureThreads, initialTension, scenarios } from './domain/scenarios'
import { fixtureProbe } from './domain/scenarios'
import { fallbackJourneyModel, fallbackSynthesis, nextIncompleteScenarioIndex } from './domain/profile'
import type { JourneyMode, PracticeState, Reflection, Stage, StoredPractice, ThreadStatus } from './domain/types'
import { requestReflection } from './lib/reflection'
import { downloadPractice, emptyDetails, emptyPractice, normalizePractice, persistPractice, readPractice } from './lib/storage'

const initialState: PracticeState = {
  ...emptyPractice(),
  stage: 'welcome',
  selectedReflectionId: null,
  showContext: false,
  isReflecting: false,
  apiError: '',
  saved: false,
  details: emptyDetails(),
  probe: undefined,
  simulationResponse: '',
  transferNote: '',
  journeyDraft: '',
  journeyModel: undefined,
  journeyMode: 'multiple-situations',
}

function App() {
  const [state, setState] = useState<PracticeState>(initialState)
  const [hydrated, setHydrated] = useState(false)
  const { stage, scenarioIndex, history } = state
  const scenario = scenarios[scenarioIndex]
  const profileSynthesis = state.synthesis ?? fallbackSynthesis(history)
  const isComplete = history.length >= scenarios.length
  const progress = stage === 'welcome' || stage === 'floor' || stage === 'practitioner' || stage === 'privacy' ? 0 : stage === 'respond' || stage === 'explore' || stage === 'journey' ? 1 : 2

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
  }, [hydrated, state.response, state.details, state.correction, state.threads, state.tension, state.synthesis, state.history, state.scenarioIndex, state.probe, state.simulationResponse, state.transferNote, state.journeyDraft, state.journeyModel, state.journeyMode])

  const patch = (changes: Partial<PracticeState>) => setState((current) => ({ ...current, ...changes }))

  const prepareScenario = (index: number) => patch({
    scenarioIndex: index,
    response: '',
    correction: '',
    threads: [...fixtureThreads],
    tension: 'The next situation may change what this thread means.',
    details: emptyDetails(),
    probe: undefined,
    simulationResponse: '',
    transferNote: '',
    synthesis: undefined,
    selectedReflectionId: null,
    showContext: false,
    apiError: '',
    stage: 'respond',
  })

  const openReflect = () => {
    const nextIndex = nextIncompleteScenarioIndex(history)
    if (nextIndex === -1) return patch({ stage: 'welcome', selectedReflectionId: null })
    const currentComplete = history.some((entry) => entry.scenario.title === scenario.title)
    if (currentComplete || nextIndex !== scenarioIndex) return prepareScenario(nextIndex)
    patch({ stage: 'respond', showContext: false, apiError: '' })
  }

  const submitResponse = async () => {
    if (state.response.trim().length < 20) return
    patch({ isReflecting: true, apiError: '' })
    try {
      const result = await requestReflection(scenario, state.response, state.details, history.map((entry) => ({ scenario: entry.scenario.title, response: entry.response, details: entry.details, correction: entry.correction, threads: entry.threads, tension: entry.tension })))
      patch({
        threads: result.threads?.length ? result.threads.map((thread) => ({ ...thread, status: 'tentative' as const })) : [...fixtureThreads],
        tension: result.tension ?? state.tension,
        synthesis: result.synthesis ?? state.synthesis,
        probe: result.probe ?? fixtureProbe,
        isReflecting: false,
        stage: 'review',
      })
    } catch {
      patch({ threads: [...fixtureThreads], probe: fixtureProbe, isReflecting: false, stage: 'review', apiError: 'The live model is unavailable, so you are seeing a practice reflection and a bounded fixture exploration. You can still correct it and continue.' })
    }
  }

  const keepReflection = () => {
    const entry: Reflection = { id: Date.now(), scenario, response: state.response, details: state.details, correction: state.correction, threads: state.threads, tension: state.tension, synthesis: state.synthesis, createdAt: new Date().toISOString(), exploration: state.probe && state.simulationResponse.trim() ? { probe: state.probe, simulationResponse: state.simulationResponse, transferNote: state.transferNote, createdAt: new Date().toISOString() } : undefined }
    patch({ history: [...history.filter((item) => item.scenario.title !== scenario.title), entry], stage: 'threads', selectedReflectionId: null })
  }

  const nextPractice = () => {
    const nextIndex = nextIncompleteScenarioIndex(history)
    if (nextIndex === -1) return patch({ stage: 'threads', selectedReflectionId: null })
    prepareScenario(nextIndex)
  }

  const updateThread = (index: number, status: ThreadStatus) => patch({ threads: state.threads.map((thread, itemIndex) => itemIndex === index ? { ...thread, status } : thread) })

  const reset = () => {
    localStorage.removeItem('room-to-respond-demo')
    setState({ ...initialState, threads: [...fixtureThreads] })
  }

  const exportData = () => {
    const data: StoredPractice = { response: state.response, correction: state.correction, threads: state.threads, tension: state.tension, synthesis: state.synthesis, history: state.history, scenarioIndex: state.scenarioIndex, details: state.details, probe: state.probe, simulationResponse: state.simulationResponse, transferNote: state.transferNote, journeyDraft: state.journeyDraft, journeyModel: state.journeyModel, journeyMode: state.journeyMode }
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
        patch({ apiError: 'That file could not be imported. Choose a Room to Respond JSON export.' })
      }
    }
    reader.readAsText(file)
    event.target.value = ''
  }

  const setStage = (nextStage: Stage) => patch({ stage: nextStage, selectedReflectionId: nextStage === 'threads' ? null : state.selectedReflectionId })
  const openFloor = () => patch({ stage: 'floor' })
  const openThreads = () => patch({ stage: 'threads', selectedReflectionId: null })
  const openJourney = () => patch({ stage: 'journey' })
  const openPractitioner = () => patch({ stage: 'practitioner' })
  const generateJourney = async () => {
    if (state.journeyDraft.trim().length < 120) return
    patch({ journeyModel: fallbackJourneyModel(state.journeyDraft, state.journeyMode), isReflecting: true, apiError: '' })
    try {
      const response = await fetch('/api/journey', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ narrative: state.journeyDraft, mode: state.journeyMode }) })
      if (!response.ok) throw new Error('Journey model unavailable')
      patch({ journeyModel: await response.json(), isReflecting: false })
    } catch {
      patch({ isReflecting: false, apiError: 'The live model did not return a model. This provisional local model is available to edit and discuss; try again when the hosted route is configured.' })
    }
  }
  const openExplore = () => state.probe ? patch({ stage: 'explore', simulationResponse: '', transferNote: '' }) : openReflect()
  const backFromThreads = () => state.selectedReflectionId === null ? setStage('review') : patch({ selectedReflectionId: null })

  return <div className="app-shell">
    <header className="topbar"><button className="wordmark" onClick={() => setStage('welcome')} aria-label="Go to home"><span className="wordmark-mark">RR</span><span>Room to Respond</span></button><nav className="topnav" aria-label="Primary navigation"><button className={stage === 'practitioner' ? 'active' : ''} onClick={openPractitioner}>Guided demo</button><button onClick={() => setStage('privacy')}>Privacy</button></nav><div className="storage-status"><span className="status-dot" /> Review prototype</div></header>
    {progress > 0 && <div className="progress-wrap" aria-label={`Step ${progress} of 2`}><div className="progress-label"><span>{stage === 'explore' ? 'Model-guided exploration' : `Practice ${Math.min(scenarioIndex + 1, scenarios.length)} of ${scenarios.length}`}</span><span>{stage === 'explore' ? 'Simulation and transfer' : progress === 1 ? 'Lived account' : 'Model review'}</span></div><div className="progress-line"><span style={{ width: `${progress * 50}%` }} /></div></div>}
    <main>
      {stage === 'welcome' && <Welcome onBegin={isComplete ? openThreads : openReflect} onFloor={openFloor} onPrivacy={() => setStage('privacy')} onPractitioner={openPractitioner} hasHistory={history.length > 0} onThreads={openThreads} onJourney={openJourney} allComplete={isComplete} />}
      {stage === 'floor' && <WorkoutFloor onStart={openReflect} onBack={() => setStage('welcome')} hasHistory={history.length > 0} onModel={openThreads} />}
      {stage === 'practitioner' && <PractitionerWorkspace onBack={() => setStage('welcome')} />}
      {stage === 'respond' && <Respond response={state.response} setResponse={(response) => patch({ response })} details={state.details} setDetails={(details) => patch({ details })} scenario={scenario} showContext={state.showContext} setShowContext={(showContext) => patch({ showContext })} onSubmit={submitResponse} isReflecting={state.isReflecting} />}
      {stage === 'review' && <Review response={state.response} correction={state.correction} setCorrection={(correction) => patch({ correction })} threads={state.threads} probe={state.probe} apiError={state.apiError} updateThread={updateThread} onExplore={openExplore} onContinue={keepReflection} />}
      {stage === 'threads' && <Threads threads={state.threads} synthesis={profileSynthesis} history={history} selectedReflectionId={state.selectedReflectionId} isComplete={isComplete} onBack={backFromThreads} onNext={nextPractice} onOpenScenario={(id) => patch({ selectedReflectionId: id })} />}
      {stage === 'explore' && state.probe && <Explore probe={state.probe} response={state.response} simulationResponse={state.simulationResponse} setSimulationResponse={(simulationResponse) => patch({ simulationResponse })} transferNote={state.transferNote} setTransferNote={(transferNote) => patch({ transferNote })} onSave={keepReflection} />}
      {stage === 'journey' && <Journey draft={state.journeyDraft} setDraft={(journeyDraft) => patch({ journeyDraft })} mode={state.journeyMode} setMode={(journeyMode: JourneyMode) => patch({ journeyMode, journeyModel: undefined })} model={state.journeyModel} isReflecting={state.isReflecting} apiError={state.apiError} onGenerate={generateJourney} onBack={() => setStage('welcome')} />}
      {stage === 'privacy' && <Privacy onBack={() => setStage('welcome')} onReset={reset} onExport={exportData} onImport={importData} />}
    </main>
    {stage !== 'welcome' && stage !== 'privacy' && <footer className="practice-footer"><span>Your words stay yours.</span><button onClick={() => setStage('privacy')}>View data controls</button></footer>}
  </div>
}

export default App
