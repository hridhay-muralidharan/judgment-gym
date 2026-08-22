type Props = { onBegin: () => void; onFloor: () => void; onPrivacy: () => void; onJourney: () => void; onPractitioner: () => void; hasHistory: boolean; onThreads: () => void; allComplete: boolean }

export function Welcome({ onPrivacy, onPractitioner }: Props) {
  return <section className="landing page-grid">
    <div className="landing-copy">
      <p className="kicker">Room to Respond · Guided demo</p>
      <h1>A practitioner creates a routine.<br /><em>A client works through a moment.</em></h1>
      <p className="lede">Together, they see what changes and choose what to practise next.</p>
      <div className="welcome-actions"><button className="primary-button" onClick={onPractitioner}>Follow Maya’s guided routine <span>→</span></button></div>
      <p className="demo-review-note">A prepared demo for product feedback. You can follow the whole journey without entering anything.</p>
      <button className="resume-link" onClick={onPrivacy}>Read the privacy and safety boundary →</button>
    </div>
    <div className="landing-story" aria-label="How the routine works">
      <div className="landing-story-line" />
      <article><span>01</span><div><strong>Set a direction</strong><p>The practitioner chooses what Maya will practise.</p></div></article>
      <article><span>02</span><div><strong>Work through a moment</strong><p>Maya brings in a real situation, checks the reflection, and tries one change.</p></div></article>
      <article><span>03</span><div><strong>Review and continue</strong><p>Maya shares what she noticed. The practitioner shapes the next routine.</p></div></article>
      <div className="landing-client"><span>DEMO CLIENT</span><strong>Maya R.</strong><p>More space before responding to criticism.</p></div>
    </div>
    <div className="landing-footer"><span className="pitch-label">What you are about to see</span><strong>One complete routine, from the first suggestion to the next exercise.</strong><span>Follow the practitioner’s turn, Maya’s turn, and the report that brings them back together.</span></div>
  </section>
}
