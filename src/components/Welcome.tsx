type Props = { onBegin: () => void; onFloor: () => void; onPrivacy: () => void; onJourney: () => void; onPractitioner: () => void; hasHistory: boolean; onThreads: () => void; allComplete: boolean }

export function Welcome({ onPrivacy, onPractitioner }: Props) {
  return <section className="landing-page">
    <div className="landing-hero page-grid">
      <div className="landing-copy">
        <p className="kicker">Room to Respond</p>
        <h1>Train your mind<br /><em>like you train your body.</em></h1>
        <p className="lede">A practitioner-led mental workout for the moments that shape your life.</p>
        <div className="welcome-actions"><button className="primary-button" onClick={onPractitioner}>Follow the guided demo <span>→</span></button><span className="hero-support">A prepared journey. Nothing to write.</span></div>
      </div>
      <div className="landing-hero-side"><div className="landing-mark">RR</div><p>A practitioner creates the routine. A client practises with a real moment. The next session gets better material.</p></div>
    </div>

    <div className="landing-section landing-problem page-grid"><div className="landing-section-title"><p className="kicker">Why this exists</p><h2>The session is only part of the work.</h2></div><div className="landing-section-copy"><p>Therapy and coaching can help people understand a pattern. Real life gives them the next chance to practise it: in a conversation, a decision, a piece of feedback, or a change they did not expect.</p><p className="landing-pull">The work continues in the moments between sessions.</p></div></div>

    <div className="landing-section landing-solution"><div className="page-grid"><div className="landing-section-title"><p className="kicker">The product</p><h2>Turn a goal into a routine.</h2></div><div className="landing-section-copy"><p>A practitioner chooses what the client will practise. The client brings in a real moment, checks what the reflection picked up, tries one thing changed, and brings back what they noticed.</p></div></div><div className="landing-steps page-grid"><article><span>01</span><h3>Set a direction</h3><p>Choose the part of life the client wants to work on.</p></article><article><span>02</span><h3>Work through a moment</h3><p>Practise with a real situation and one changed condition.</p></article><article><span>03</span><h3>Review and continue</h3><p>Use the report to shape the next routine.</p></article></div></div>

    <div className="landing-section landing-buyer page-grid"><div className="landing-section-title"><p className="kicker">For practitioners</p><h2>Built around the relationship.</h2></div><div className="landing-section-copy"><p>The practitioner gives the routine its purpose. The client supplies the experience. Room to Respond helps them keep the work moving between sessions.</p><button className="text-button" onClick={onPractitioner}>See how it works <span>→</span></button></div></div>

    <div className="landing-demo page-grid"><div><p className="kicker">Guided demo</p><h2>See one routine from start to next step.</h2><p>Follow Maya’s prepared journey from a difficult review meeting to a practitioner response and a new routine.</p></div><button className="primary-button" onClick={onPractitioner}>Start Maya’s guided demo <span>→</span></button></div>
    <button className="landing-privacy" onClick={onPrivacy}>Read the privacy and safety boundary →</button>
  </section>
}
