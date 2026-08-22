type Props = { onBegin: () => void; onFloor: () => void; onPrivacy: () => void; onJourney: () => void; onPractitioner: () => void; hasHistory: boolean; onThreads: () => void; allComplete: boolean }

export function Welcome({ onBegin, onFloor, onPrivacy, onJourney, onPractitioner, hasHistory, onThreads, allComplete }: Props) {
  return <section className="welcome page-grid">
    <div className="welcome-copy">
      <p className="kicker">A mental gym for human faculties</p>
      <h1>Exercise the parts of you<br /><em>that meet life.</em></h1>
      <p className="lede">Practitioners create the routine. Clients bring real moments, practise between sessions, and return with a clearer report of what they noticed, chose, and learned.</p>
      <div className="welcome-actions">
        <button className="primary-button" onClick={onFloor}>Enter the workout floor <span>→</span></button>
        <button className="text-button" onClick={onBegin}>{allComplete ? 'Review your training record' : hasHistory ? 'Continue a practice' : 'Start with a real moment'} <span>↗</span></button>
      </div>
      <div className="principles"><span>01 / Real situations</span><span>02 / Provisional patterns</span><span>03 / Practice returns to life</span></div>
      {hasHistory && <button className="resume-link" onClick={onThreads}>Open my threads →</button>}
      <button className="resume-link" onClick={onPractitioner}>Open the practitioner workspace →</button>
      <button className="resume-link" onClick={onJourney}>Map a longer account →</button>
      <button className="resume-link" onClick={onPrivacy}>Read the privacy and safety boundary →</button>
    </div>
    <div className="welcome-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="sun">RR</div><div className="art-caption">Notice · understand ·<br />choose · adapt.</div></div>
    <div className="pitch-strip"><span className="pitch-label">The gym model</span><strong>A routine a practitioner can shape around the person.</strong><span>GenAI helps personalise the exercise, hold the thread between sessions, and prepare a report for the next conversation.</span></div>
  </section>
}
