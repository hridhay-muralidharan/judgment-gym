type Props = { onBegin: () => void; onPrivacy: () => void; hasHistory: boolean; onThreads: () => void; allComplete: boolean }

export function Welcome({ onBegin, onPrivacy, hasHistory, onThreads, allComplete }: Props) {
  return <section className="welcome page-grid">
    <div className="welcome-copy">
      <p className="kicker">Lived experience · model-guided exploration</p>
      <h1>Start with what happened.<br /><em>See what it opens.</em></h1>
      <p className="lede">Bring a real situation into view, examine how you experienced it, and use carefully constructed variations to notice what changes, repeats, or remains unresolved.</p>
      <div className="welcome-actions">
        <button className="primary-button" onClick={onBegin}>{allComplete ? 'Review your model' : hasHistory ? 'Continue practice' : 'Try a reflection'} <span>→</span></button>
        <button className="text-button" onClick={onBegin}>Start with a lived moment <span>↗</span></button>
      </div>
      <div className="principles"><span>01 / Lived moments first</span><span>02 / Patterns stay tentative</span><span>03 / Simulation returns to life</span></div>
      {hasHistory && <button className="resume-link" onClick={onThreads}>Open my threads →</button>}
      <button className="resume-link" onClick={onPrivacy}>Read the privacy and safety boundary →</button>
    </div>
    <div className="welcome-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="sun">JG</div><div className="art-caption">Lived moment · model ·<br />constructed situation · return.</div></div>
    <div className="pitch-strip"><span className="pitch-label">The practice loop</span><strong>A real situation gives the model somewhere honest to begin.</strong><span>Judgment Gym connects lived accounts, tentative self/psyche patterns, and bounded text or voice explorations that can lead back to the user's own experience.</span></div>
  </section>
}
