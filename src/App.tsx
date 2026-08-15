import { ChangeEvent, useEffect, useState } from 'react'

type Stage = 'welcome' | 'respond' | 'review' | 'threads' | 'history' | 'privacy'
type ThreadStatus = 'tentative' | 'confirmed' | 'context-dependent'

type Scenario = {
  eyebrow: string
  title: string
  body: string
  context: string
  question: string
  reason: string
}

type Thread = { title: string; description: string; status: ThreadStatus; evidence: string }
type Reflection = { id: number; scenario: Scenario; response: string; correction: string; threads: Thread[]; tension: string; createdAt: string }
type StoredPractice = { response: string; correction: string; threads: Thread[]; tension: string; history: Reflection[]; scenarioIndex: number }

const scenarios: Scenario[] = [
  { eyebrow: 'Scenario 01 · The quiet disagreement', title: 'A decision you know will disappoint someone', body: 'You lead a small team. A deadline is approaching, and one proposed shortcut would protect delivery but create hidden work for a colleague who is already stretched.', context: 'The shortcut is reversible. The colleague has not been asked yet. Your manager values the deadline more than process perfection.', question: 'What would you do, and what would matter most in that moment?', reason: 'A baseline situation to notice what you protect when values pull in different directions.' },
  { eyebrow: 'Scenario 02 · The changed condition', title: 'The same shortcut now carries your name', body: 'The deadline is still approaching, but you discover that the hidden work will land on you. Taking it on would preserve your colleague’s focus and make your own week considerably harder.', context: 'No one will know whether you absorb the cost. You could still ask for help, but that would expose the original shortcut.', question: 'How does the personal cost change your decision, if at all?', reason: 'Testing whether your principle changes when the burden moves closer to you.' },
  { eyebrow: 'Scenario 03 · The role reversal', title: 'You are the person downstream', body: 'You join a project late and learn that an earlier decision created hidden work for you. The person who made it had a reasonable deadline and never intended to create harm.', context: 'You can quietly fix the issue, raise it with the team, or ask the original decision-maker to help repair it.', question: 'What would you want from the person who made that decision?', reason: 'Reversing the role to compare the care you offer with the care you expect.' },
  { eyebrow: 'Scenario 04 · The unresolved tension', title: 'When care begins to slow everyone down', body: 'A teammate repeatedly needs more context before acting. You can keep adapting the process around them, or set a firmer expectation that they make reasonable decisions with incomplete information.', context: 'They are learning quickly, but the rest of the team is beginning to carry the cost of every delay.', question: 'Where would you draw the line between patience and accountability?', reason: 'Putting two emerging considerations into direct conflict without forcing a clean answer.' },
  { eyebrow: 'Scenario 05 · Transfer', title: 'A difficult truth in a different room', body: 'A close friend asks whether you think they should accept an opportunity that looks impressive but would move them away from the people and routines that keep them well.', context: 'They want encouragement, but they have not asked for a decision. You know only part of the situation.', question: 'How would you respond without taking the decision away from them?', reason: 'Transferring the practice from work into a relationship with a different kind of responsibility.' },
]

const fixtureThreads: Thread[] = [
  { title: 'You look for the human cost inside an efficient decision.', description: 'You appear to weigh downstream burden alongside visible delivery outcomes.', status: 'tentative', evidence: 'From this response' },
  { title: 'You prefer reversible action when uncertainty is high.', description: 'You may be more willing to act when a decision can be revisited without lasting harm.', status: 'tentative', evidence: 'From this response' },
]
const storageKey = 'judgment-gym-demo'

function App() {
  const [stage, setStage] = useState<Stage>('welcome')
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [response, setResponse] = useState('')
  const [correction, setCorrection] = useState('')
  const [threads, setThreads] = useState<Thread[]>(fixtureThreads)
  const [tension, setTension] = useState('Efficiency and care may both matter to you.')
  const [history, setHistory] = useState<Reflection[]>([])
  const [saved, setSaved] = useState(false)
  const [showContext, setShowContext] = useState(false)
  const [isReflecting, setIsReflecting] = useState(false)
  const [apiError, setApiError] = useState('')

  const scenario = scenarios[scenarioIndex]
  const progress = stage === 'welcome' || stage === 'privacy' || stage === 'history' ? 0 : stage === 'respond' ? 1 : 2

  useEffect(() => {
    const stored = localStorage.getItem(storageKey)
    if (!stored) return
    try {
      const parsed = JSON.parse(stored) as Partial<StoredPractice>
      setResponse(parsed.response ?? '')
      setCorrection(parsed.correction ?? '')
      setThreads(parsed.threads?.length ? parsed.threads : fixtureThreads)
      setTension(parsed.tension ?? 'Efficiency and care may both matter to you.')
      setHistory(parsed.history ?? [])
      setScenarioIndex(Math.min(parsed.scenarioIndex ?? 0, scenarios.length - 1))
    } catch { localStorage.removeItem(storageKey) }
  }, [])

  useEffect(() => {
    const payload: StoredPractice = { response, correction, threads, tension, history, scenarioIndex }
    localStorage.setItem(storageKey, JSON.stringify(payload))
    setSaved(true)
    const timer = window.setTimeout(() => setSaved(false), 1200)
    return () => window.clearTimeout(timer)
  }, [response, correction, threads, tension, history, scenarioIndex])

  const begin = () => { setStage('respond'); setShowContext(false) }
  const submitResponse = async () => {
    if (response.trim().length < 20) return
    setIsReflecting(true); setApiError('')
    try {
      const result = await fetch('/api/reflect', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ scenario: `${scenario.title}\n${scenario.body}\n${scenario.context}`, response }) })
      if (!result.ok) throw new Error('Model route unavailable')
      const data = await result.json() as { threads?: Array<Pick<Thread, 'title' | 'description' | 'evidence'>>; tension?: string }
      if (data.threads?.length) setThreads(data.threads.map((thread) => ({ ...thread, status: 'tentative' })))
      if (data.tension) setTension(data.tension)
    } catch { setApiError('The live mirror is unavailable, so you are seeing a practice reflection. You can still correct it and continue.') }
    finally { setIsReflecting(false); setStage('review') }
  }

  const keepReflection = () => {
    const entry: Reflection = { id: Date.now(), scenario, response, correction, threads, tension, createdAt: new Date().toISOString() }
    setHistory((current) => [...current.filter((item) => item.scenario.title !== scenario.title), entry])
    setStage('threads')
  }

  const nextPractice = () => {
    if (scenarioIndex >= scenarios.length - 1) { setStage('history'); return }
    setScenarioIndex((current) => current + 1); setResponse(''); setCorrection(''); setThreads(fixtureThreads); setTension('The next situation may change what this thread means.'); setApiError(''); setShowContext(false); setStage('respond')
  }

  const reset = () => { localStorage.removeItem(storageKey); setResponse(''); setCorrection(''); setThreads(fixtureThreads); setTension('Efficiency and care may both matter to you.'); setHistory([]); setScenarioIndex(0); setStage('welcome') }
  const updateThread = (index: number, status: ThreadStatus) => setThreads((current) => current.map((thread, itemIndex) => itemIndex === index ? { ...thread, status } : thread))

  const exportData = () => downloadJson({ response, correction, threads, tension, history, scenarioIndex }, 'judgment-gym-practice.json')
  const importData = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; if (!file) return
    const reader = new FileReader()
    reader.onload = () => { try { const parsed = JSON.parse(String(reader.result)) as Partial<StoredPractice>; setResponse(parsed.response ?? ''); setCorrection(parsed.correction ?? ''); setThreads(parsed.threads ?? fixtureThreads); setTension(parsed.tension ?? 'Efficiency and care may both matter to you.'); setHistory(parsed.history ?? []); setScenarioIndex(Math.min(parsed.scenarioIndex ?? 0, scenarios.length - 1)); setStage('welcome') } catch { setApiError('That file could not be imported. Choose a Judgment Gym JSON export.') } }
    reader.readAsText(file); event.target.value = ''
  }

  return <div className="app-shell">
    <header className="topbar"><button className="wordmark" onClick={() => setStage('welcome')} aria-label="Go to home"><span className="wordmark-mark">JG</span><span>Judgment Gym</span></button><nav className="topnav" aria-label="Primary navigation"><button className={stage === 'respond' || stage === 'review' ? 'active' : ''} onClick={() => setStage('respond')}>Reflect</button><button className={stage === 'threads' ? 'active' : ''} onClick={() => setStage('threads')}>My threads</button><button className={stage === 'history' ? 'active' : ''} onClick={() => setStage('history')}>History</button><button onClick={() => setStage('privacy')}>Privacy</button></nav><div className="storage-status"><span className="status-dot" /> {saved ? 'Saved privately' : 'Local practice'}</div></header>
    {progress > 0 && <div className="progress-wrap" aria-label={`Step ${progress} of 2`}><div className="progress-label"><span>Practice {Math.min(scenarioIndex + 1, scenarios.length)} of {scenarios.length}</span><span>{progress === 1 ? 'Response' : 'Mirror review'}</span></div><div className="progress-line"><span style={{ width: `${progress * 50}%` }} /></div></div>}
    <main>
      {stage === 'welcome' && <Welcome onBegin={begin} onPrivacy={() => setStage('privacy')} hasHistory={history.length > 0} onHistory={() => setStage('history')} />}
      {stage === 'respond' && <Respond response={response} setResponse={setResponse} scenario={scenario} showContext={showContext} setShowContext={setShowContext} onSubmit={submitResponse} isReflecting={isReflecting} />}
      {stage === 'review' && <Review response={response} correction={correction} setCorrection={setCorrection} threads={threads} apiError={apiError} updateThread={updateThread} onContinue={keepReflection} />}
      {stage === 'threads' && <Threads threads={threads} tension={tension} practiceNumber={scenarioIndex + 1} isComplete={scenarioIndex >= scenarios.length - 1} onBack={() => setStage('review')} onNew={nextPractice} />}
      {stage === 'history' && <History entries={history} onBack={() => setStage('welcome')} onExport={exportData} />}
      {stage === 'privacy' && <Privacy onBack={() => setStage('welcome')} onReset={reset} onExport={exportData} onImport={importData} />}
    </main>
    {stage !== 'welcome' && stage !== 'privacy' && <footer className="practice-footer"><span>Your words stay yours.</span><button onClick={() => setStage('privacy')}>View data controls</button></footer>}
  </div>
}

function downloadJson(data: unknown, filename: string) { const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = filename; link.click(); URL.revokeObjectURL(url) }

function Welcome({ onBegin, onPrivacy, hasHistory, onHistory }: { onBegin: () => void; onPrivacy: () => void; hasHistory: boolean; onHistory: () => void }) { return <section className="welcome page-grid"><div className="welcome-copy"><p className="kicker">A private practice for the age of AI</p><h1>Keep your judgment<br /><em>in the room.</em></h1><p className="lede">Meet difficult situations. Notice how you respond. Let a careful mirror help you see what is changing.</p><div className="welcome-actions"><button className="primary-button" onClick={onBegin}>Begin today’s practice <span>→</span></button><button className="text-button" onClick={onPrivacy}>How your data works <span>↗</span></button></div><div className="principles"><span>01 / You respond first</span><span>02 / Interpretations stay tentative</span><span>03 / You remain the authority</span></div>{hasHistory && <button className="resume-link" onClick={onHistory}>Review your practice history →</button>}</div><div className="welcome-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="sun">JG</div><div className="art-caption">A space to practise<br />before life asks.</div></div></section> }

function Respond({ response, setResponse, scenario, showContext, setShowContext, onSubmit, isReflecting }: { response: string; setResponse: (value: string) => void; scenario: Scenario; showContext: boolean; setShowContext: (value: boolean) => void; onSubmit: () => void; isReflecting: boolean }) { return <section className="practice page-grid"><div className="scenario-column"><p className="kicker">{scenario.eyebrow}</p><h2>{scenario.title}</h2><p className="scenario-body">{scenario.body}</p><button className="context-toggle" onClick={() => setShowContext(!showContext)}><span>{showContext ? '−' : '+'}</span> Additional context</button>{showContext && <p className="context-copy">{scenario.context}</p>}<div className="selection-note"><span className="selection-icon">✦</span><div><strong>Why this scenario</strong><p>{scenario.reason}</p></div></div></div><div className="response-column"><div className="response-heading"><p className="kicker">Your response</p><span>Private · autosaved</span></div><h3>{scenario.question}</h3><textarea autoFocus value={response} onChange={(event) => setResponse(event.target.value)} placeholder="There is no ideal answer here. Start with what you would actually do…" /><div className="response-footer"><span>{isReflecting ? 'Finding a careful reflection…' : response.length > 0 ? `${response.length} characters` : 'Take your time'}</span><button className="primary-button" disabled={response.trim().length < 20 || isReflecting} onClick={onSubmit}>{isReflecting ? 'Reflecting…' : 'Reflect this back'} <span>→</span></button></div></div></section> }

function Review({ response, correction, setCorrection, threads, apiError, updateThread, onContinue }: { response: string; correction: string; setCorrection: (value: string) => void; threads: Thread[]; apiError: string; updateThread: (index: number, status: ThreadStatus) => void; onContinue: () => void }) { return <section className="review page-grid"><div className="review-intro"><p className="kicker">The mirror · first pass</p><h2>Here’s what I might be noticing.</h2><p>These are provisional reflections, grounded only in what you wrote. Keep what feels true. Correct what doesn’t.</p><div className="tentative-note"><span>◌</span> Nothing here is a diagnosis or a score.</div></div><div className="review-content">{apiError && <div className="model-notice">◌ {apiError}</div>}<div className="your-words"><div className="section-label"><span>Your words</span><span>Original response</span></div><blockquote>“{response}”</blockquote></div><div className="thread-list">{threads.map((thread, index) => <article className="thread-card" key={`${thread.title}-${index}`}><div className="thread-card-top"><span className="thread-number">0{index + 1}</span><span className={`tentative-tag status-${thread.status}`}>{thread.status}</span></div><h3>{thread.title}</h3><p>{thread.description}</p><div className="thread-evidence">↳ {thread.evidence}</div><div className="thread-actions"><button onClick={() => updateThread(index, 'confirmed')}>Feels true</button><button onClick={() => updateThread(index, 'context-dependent')}>It depends</button><button onClick={() => updateThread(index, 'tentative')}>Needs work</button></div></article>)}</div><label className="correction-label" htmlFor="correction">What did I miss, get wrong, or oversimplify?</label><textarea id="correction" value={correction} onChange={(event) => setCorrection(event.target.value)} placeholder="Add a condition, exception, or correction…" /><button className="primary-button continue-button" onClick={onContinue}>Keep this reflection <span>→</span></button></div></section> }

function Threads({ threads, tension, practiceNumber, isComplete, onBack, onNew }: { threads: Thread[]; tension: string; practiceNumber: number; isComplete: boolean; onBack: () => void; onNew: () => void }) { return <section className="threads-page page-narrow"><div className="threads-header"><div><p className="kicker">Practice {practiceNumber} · your evolving model</p><h2>Threads, not labels.</h2><p>Patterns stay connected to the situations that gave rise to them. They can change.</p></div><button className="primary-button" onClick={onNew}>{isComplete ? 'View history' : 'Next practice'} <span>→</span></button></div><div className="thread-overview">{threads.map((thread, index) => <article className="overview-row" key={`${thread.title}-${index}`}><span className="thread-number">0{index + 1}</span><div><h3>{thread.title}</h3><p>{thread.description}</p></div><span className={`status status-${thread.status}`}>{thread.status}</span></article>)}</div><div className="tension-box"><span className="tension-mark">∿</span><div><p className="kicker">Unresolved tension</p><h3>{tension}</h3><p>This tension is being held open. A future scenario can change the conditions and see what moves.</p></div></div><button className="back-button" onClick={onBack}>← Back to mirror review</button></section> }

function History({ entries, onBack, onExport }: { entries: Reflection[]; onBack: () => void; onExport: () => void }) { return <section className="history-page page-narrow"><button className="back-button" onClick={onBack}>← Back</button><div className="threads-header"><div><p className="kicker">Your record</p><h2>Practice history.</h2><p>Earlier responses remain available as evidence. Your model is allowed to change.</p></div><button className="secondary-button" onClick={onExport}>Export all data</button></div>{entries.length === 0 ? <div className="empty-history"><p>No completed practices yet.</p><button className="primary-button" onClick={onBack}>Begin a practice <span>→</span></button></div> : <div className="history-list">{entries.slice().reverse().map((entry) => <article className="history-entry" key={entry.id}><div><span className="kicker">{entry.scenario.eyebrow}</span><h3>{entry.scenario.title}</h3><p>{new Date(entry.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</p></div><blockquote>“{entry.response}”</blockquote><div className="history-evidence">{entry.threads.length} tentative threads · {entry.correction ? 'correction added' : 'no correction added'}</div></article>)}</div>}</section> }

function Privacy({ onBack, onReset, onExport, onImport }: { onBack: () => void; onReset: () => void; onExport: () => void; onImport: (event: ChangeEvent<HTMLInputElement>) => void }) { return <section className="privacy-page page-narrow"><button className="back-button" onClick={onBack}>← Back</button><p className="kicker">Privacy and boundaries</p><h2>A practice should feel private.</h2><p className="privacy-lede">This prototype stores your reflection in this browser. It does not need an account, and nothing is published automatically.</p><div className="privacy-list"><div><span>01</span><div><h3>Local by default</h3><p>Your draft, profile, and history are stored in browser storage on this device.</p></div></div><div><span>02</span><div><h3>You are the authority</h3><p>The AI proposes interpretations. You can accept, revise, reject, or leave them unresolved.</p></div></div><div><span>03</span><div><h3>Always portable</h3><p>Export a copy of your whole practice or import it on another device.</p></div></div></div><div className="privacy-actions"><button className="secondary-button" onClick={onExport}>Export my practice</button><label className="secondary-button file-button">Import practice<input type="file" accept="application/json,.json" onChange={onImport} /></label><button className="danger-button" onClick={onReset}>Delete local practice</button></div></section> }

export default App
