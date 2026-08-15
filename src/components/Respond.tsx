import type { Scenario } from '../domain/types'

type Props = { response: string; setResponse: (value: string) => void; scenario: Scenario; showContext: boolean; setShowContext: (value: boolean) => void; onSubmit: () => void; isReflecting: boolean }

export function Respond({ response, setResponse, scenario, showContext, setShowContext, onSubmit, isReflecting }: Props) {
  return <section className="practice page-grid">
    <div className="scenario-column"><p className="kicker">{scenario.eyebrow}</p><h2>{scenario.title}</h2><p className="scenario-body">{scenario.body}</p><button className="context-toggle" onClick={() => setShowContext(!showContext)}><span>{showContext ? '−' : '+'}</span> Additional context</button>{showContext && <p className="context-copy">{scenario.context}</p>}<div className="selection-note"><span className="selection-icon">✦</span><div><strong>Why this scenario</strong><p>{scenario.reason}</p></div></div></div>
    <div className="response-column"><div className="response-heading"><p className="kicker">Your response</p><span>Private · autosaved</span></div><h3>{scenario.question}</h3><textarea autoFocus value={response} onChange={(event) => setResponse(event.target.value)} placeholder="There is no ideal answer here. Start with what you would actually do…" /><div className="response-footer"><span>{isReflecting ? 'Finding a careful reflection…' : response.length > 0 ? `${response.length} characters` : 'Take your time'}</span><button className="primary-button" disabled={response.trim().length < 20 || isReflecting} onClick={onSubmit}>{isReflecting ? 'Reflecting…' : 'Reflect this back'} <span>→</span></button></div></div>
  </section>
}
