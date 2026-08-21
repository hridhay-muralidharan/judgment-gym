import type { StoryModel } from '../domain/types'

type Props = { input: string; setInput: (value: string) => void; model?: StoryModel; setModel: (model: StoryModel) => void; error: string; onGenerate: () => void; isGenerating: boolean }

export function Narrative({ input, setInput, model, setModel, error, onGenerate, isGenerating }: Props) {
  return <section className="story-page page-narrow">
    <div className="story-hero"><div><p className="kicker">Show me about yourself</p><h2>Your story, with its evolution intact.</h2><p className="story-lede">Paste a long-form account of your path. Judgment Gym will organize the turning points, tensions, and current direction into a reviewable model and a short spoken version.</p></div><div className="story-boundary"><span>◌</span><p><strong>Private by design.</strong> This text is not stored in the public repository. With the hosted demo, it is sent to the configured model provider only when you choose to generate.</p></div></div>
    <div className="story-workspace">
      <div className="story-input"><div className="section-label"><span>1 / Your raw account</span><span>{input.length ? `${input.length} characters` : 'Not saved here'}</span></div><textarea value={input} onChange={(event) => setInput(event.target.value)} placeholder="Write freely: chapters, transitions, choices, mistakes, what changed, and what you are moving toward…" /><div className="story-input-footer"><span>Include only what you are comfortable processing in this environment.</span><button className="primary-button" disabled={input.trim().length < 80 || isGenerating} onClick={onGenerate}>{isGenerating ? 'Mapping…' : 'Map my evolution'} <span>→</span></button></div></div>
      {error && <div className="model-notice">◌ {error}</div>}
      {model && <StoryOutput model={model} setModel={setModel} />}
    </div>
  </section>
}

function StoryOutput({ model, setModel }: { model: StoryModel; setModel: (model: StoryModel) => void }) {
  return <div className="story-output">
    <div className="story-output-head"><div><p className="kicker">2 / Reviewable model</p><h3>{model.framing}</h3></div><span className="story-status">Provisional · edit before sharing</span></div>
    <div className="evolution-timeline">{model.evolution.map((item) => <article key={item.period}><span className="timeline-marker" /><div><span className="section-label">{item.period}</span><h4>{item.shift}</h4><p>{item.evidence}</p></div></article>)}</div>
    <div className="story-patterns"><div className="section-label"><span>Patterns to review</span><span>Hypotheses, not labels</span></div>{model.patterns.map((pattern) => <article key={pattern.title}><div><h4>{pattern.title}</h4><p>{pattern.description}</p></div><span className={`status status-${pattern.status}`}>{pattern.status}</span><small>↳ {pattern.evidence}</small></article>)}</div>
    <div className="story-direction"><span className="section-label">Current direction</span><p>{model.currentDirection}</p></div>
    <div className="interview-output"><div className="section-label"><span>3 / Interview version</span><span>Edit before sharing</span></div><textarea className="interview-editor" value={model.interviewNarrative} onChange={(event) => setModel({ ...model, interviewNarrative: event.target.value })} /><p className="sharing-note">{model.sharingNote}</p></div>
    <div className="story-followups"><div className="section-label"><span>Before you share</span><span>Questions for correction</span></div><ul>{model.followUps.map((question) => <li key={question}>{question}</li>)}</ul></div>
    <div className="story-footer-note"><strong>Useful depth is selective depth.</strong> The interviewer needs a memorable account of your evolution and direction, not your complete private history.</div>
  </div>
}
