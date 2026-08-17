type Props = { onBegin: () => void; onPrivacy: () => void; hasHistory: boolean; onThreads: () => void; allComplete: boolean }

export function Welcome({ onBegin, onPrivacy, hasHistory, onThreads, allComplete }: Props) {
  return <section className="welcome page-grid">
    <div className="welcome-copy">
      <p className="kicker">A self-awareness layer for mental health care</p>
      <h1>Bring more of yourself<br /><em>into the conversation.</em></h1>
      <p className="lede">A private between-session practice that helps people slow down, notice patterns, and arrive with clearer material for the next therapy conversation.</p>
      <div className="welcome-actions">
        <button className="primary-button" onClick={onBegin}>{allComplete ? 'Review your model' : hasHistory ? 'Continue practice' : 'Try a reflection'} <span>→</span></button>
        <button className="text-button" onClick={onPrivacy}>Privacy and safety <span>↗</span></button>
      </div>
      <div className="principles"><span>01 / You respond first</span><span>02 / Patterns stay tentative</span><span>03 / Therapy stays human-led</span></div>
      {hasHistory && <button className="resume-link" onClick={onThreads}>Open my threads →</button>}
    </div>
    <div className="welcome-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="sun">JG</div><div className="art-caption">Notice · name · bring<br />what matters to therapy.</div></div>
    <div className="pitch-strip"><span className="pitch-label">For mental health AI teams</span><strong>Self-awareness is the missing loop between care conversations.</strong><span>Structured reflection can help users turn vague experience into specific observations, questions, and examples they can choose to discuss with a qualified professional.</span></div>
  </section>
}
