type Props = { onBegin: () => void; onFloor: () => void; onPrivacy: () => void; onJourney: () => void; onPractitioner: () => void; hasHistory: boolean; onThreads: () => void; allComplete: boolean }

export function Welcome({ onPrivacy, onPractitioner }: Props) {
  return <section className="landing-page">
    <div className="landing-hero page-grid">
      <div className="landing-copy">
        <p className="kicker">A guided mental workout</p>
        <h1>Train your mind<br /><em>like you train your body.</em></h1>
        <p className="lede">A practitioner creates the routine. A client works through real situations. Both shape what comes next.</p>
        <div className="welcome-actions">
          <button className="primary-button" onClick={onPractitioner}>See the guided demo <span>→</span></button>
          <span className="hero-support">A prepared practitioner-client journey</span>
        </div>
      </div>

      <div className="landing-preview" aria-label="Preview of a mental workout routine">
        <div className="preview-topline"><span>Room to Respond</span><span>Routine 01</span></div>
        <div className="preview-focus"><span className="preview-number">01</span><div><p className="preview-label">Today’s focus</p><h2>More room before responding</h2><p>Notice the first reaction. Find one more possible response.</p></div></div>
        <div className="preview-list">
          <div className="preview-row preview-row-done"><span>01</span><strong>Bring a real situation</strong><small>Client</small></div>
          <div className="preview-row"><span>02</span><strong>Review what the moment shows</strong><small>Client</small></div>
          <div className="preview-row"><span>03</span><strong>Try one changed condition</strong><small>Client</small></div>
        </div>
        <div className="preview-footer"><span>Created by a practitioner</span><span className="preview-arrow">↗</span></div>
      </div>
    </div>

    <div className="landing-section landing-origin page-grid">
      <div className="landing-section-title"><p className="kicker">The starting point</p><h2>Physical gyms made exercise practical.</h2></div>
      <div className="landing-section-copy"><p>Modern life reduced some of the movement built into daily life. Cars replaced some walking. Elevators replaced some climbing. Machines reduced some manual work. This contributed to physical inactivity. <a href="https://www.who.int/publications/i/item/9789240059153" target="_blank" rel="noreferrer">WHO Global status report on physical activity</a>.</p><p>The challenges arising out of physical inactivity led to dedicated workout routines. Physical gyms bring exercises together for physical muscles. What if we had a gym for the mind? Room to Respond is such a gym.</p></div>
    </div>

    <div className="landing-section landing-faculties">
      <div className="page-grid landing-faculties-head"><div className="landing-section-title"><h2>Modern life also puts pressure on mental faculties.</h2></div><div className="landing-section-copy"><p>Notifications compete for attention. Digital tools change how people remember and decide. Faster communication creates more moments that require emotional regulation, judgement, perspective, and clear communication.</p><p className="landing-source-note">These pressures are studied across attention, emotion regulation, cognitive offloading, and decision research.</p></div></div>
      <div className="page-grid faculty-line"><div><span>Notice</span><p>Attention, perception, emotion awareness</p></div><div><span>Understand</span><p>Memory, perspective, metacognition</p></div><div><span>Choose</span><p>Values, judgement, self-regulation</p></div><div><span>Adapt</span><p>Flexibility, foresight, feedback, learning</p></div></div>
    </div>

    <div className="landing-section landing-development page-grid">
      <div className="landing-section-title"><p className="kicker">The opportunity</p><h2>Mental health has a development side.</h2></div>
      <div className="landing-section-copy"><p>Therapy and coaching help people work through difficulty. They can also help people strengthen the mental faculties they use in conversations, decisions, work, relationships, and change.</p><p>My hypothesis is that active development of these faculties will become more important as GenAI automates more execution and places greater value on judgement, taste, self-awareness, communication, emotional regulation, and sense-making.</p></div>
    </div>

    <div className="landing-section landing-method">
      <div className="page-grid"><div className="landing-section-title"><p className="kicker">The product model</p><h2>One routine. One real situation. A clearer next step.</h2></div><div className="landing-section-copy"><p>Room to Respond brings relevant exercises together into a practical routine for a client to exercise their mental faculties.</p></div></div>
      <div className="landing-method-steps page-grid">
        <article><span>01</span><h3>Set a direction</h3><p>The practitioner chooses what the client will exercise and what to look for.</p></article>
        <article><span>02</span><h3>Work through a situation</h3><p>The client brings in what happened, then explores a carefully bounded variation.</p></article>
        <article><span>03</span><h3>Review the next step</h3><p>The client shares an editable report. The practitioner shapes the next routine.</p></article>
      </div>
    </div>

    <div className="landing-section landing-genai page-grid"><div><p className="kicker">The GenAI layer</p><h2>The exercise can follow the person.</h2></div><div><p>GenAI can work with the client’s own words, ask useful questions, offer a bounded variation, and prepare a report for the practitioner.</p><p>That makes a personalised routine possible across more situations. The practitioner and client set the direction, correct the reflection, and decide what matters.</p></div></div>

    <div className="landing-demo page-grid"><div><p className="kicker">Guided demo</p><h2>Follow the whole routine.</h2><p>See a practitioner create a workout, a client work through a real situation, and the next routine take shape.</p></div><button className="primary-button" onClick={onPractitioner}>Start the guided demo <span>→</span></button></div>
    <button className="landing-privacy" onClick={onPrivacy}>Read the privacy and safety boundary →</button>
  </section>
}
