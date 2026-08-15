type Props = { onBegin: () => void; onPrivacy: () => void; hasHistory: boolean; onThreads: () => void; allComplete: boolean }

export function Welcome({ onBegin, onPrivacy, hasHistory, onThreads, allComplete }: Props) {
  return <section className="welcome page-grid">
    <div className="welcome-copy">
      <p className="kicker">A private practice for the age of AI</p>
      <h1>Keep your judgment<br /><em>in the room.</em></h1>
      <p className="lede">Meet difficult situations. Notice how you respond. Let a careful mirror help you see what is changing.</p>
      <div className="welcome-actions">
        <button className="primary-button" onClick={onBegin}>{allComplete ? 'Review your model' : hasHistory ? 'Continue practice' : 'Begin today’s practice'} <span>→</span></button>
        <button className="text-button" onClick={onPrivacy}>How your data works <span>↗</span></button>
      </div>
      <div className="principles"><span>01 / You respond first</span><span>02 / Interpretations stay tentative</span><span>03 / You remain the authority</span></div>
      {hasHistory && <button className="resume-link" onClick={onThreads}>Open my threads →</button>}
    </div>
    <div className="welcome-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="sun">JG</div><div className="art-caption">A space to practise<br />before life asks.</div></div>
  </section>
}
