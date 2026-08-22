type Props = { onBegin: () => void; onFloor: () => void; onPrivacy: () => void; onJourney: () => void; onPractitioner: () => void; hasHistory: boolean; onThreads: () => void; allComplete: boolean }

export function Welcome({ onPrivacy, onPractitioner }: Props) {
  return <section className="landing-page">
    <div className="landing-hero page-grid">
      <div className="landing-copy">
        <p className="kicker">From mental healthcare to mental fitness</p>
        <h1>Train your mind<br /><em>like you train your body.</em></h1>
        <p className="lede">Room to Respond is a gym for the mind: a practitioner-led way to develop the faculties people use to meet life.</p>
        <div className="welcome-actions"><button className="primary-button" onClick={onPractitioner}>Follow the guided demo <span>→</span></button><span className="hero-support">A prepared journey. Nothing to write.</span></div>
      </div>
      <div className="landing-hero-side"><div className="landing-mark">RR</div><p>Attention. Emotion. Judgment. Communication. Flexibility. Learning. A workout can bring the right exercises together around a person’s real life.</p></div>
    </div>

    <div className="landing-section landing-problem page-grid"><div className="landing-section-title"><p className="kicker">The opportunity</p><h2>Mental health has a development side.</h2></div><div className="landing-section-copy"><p>Therapy and coaching help people work through difficulty. People also want to develop the faculties they use every day: attention, emotion regulation, judgment, communication, flexibility, and learning.</p><p className="landing-pull">The next shift is from only addressing problems to actively developing the mind.</p></div></div>

    <div className="landing-section landing-solution"><div className="page-grid"><div className="landing-section-title"><p className="kicker">The physical-gym parallel</p><h2>Physical gyms make workouts practical.</h2></div><div className="landing-section-copy"><p>Modern life reduced some of the movement built into daily life. Gyms brought exercises together into routines for specific muscles. What if we applied the same thinking to the mind?</p><p className="landing-pull">Room to Respond brings mental exercises together into practical workouts.</p></div></div><div className="landing-steps page-grid"><article><span>01</span><h3>Choose a focus</h3><p>Start with the faculty or life goal a person wants to develop.</p></article><article><span>02</span><h3>Exercise through situations</h3><p>Use real moments and bounded variations to notice what changes.</p></article><article><span>03</span><h3>Build the next workout</h3><p>Review what happened and choose what to practise next.</p></article></div></div>

    <div className="landing-section landing-buyer page-grid"><div className="landing-section-title"><p className="kicker">The practitioner’s role</p><h2>Create the workout. Guide the development.</h2></div><div className="landing-section-copy"><p>The practitioner sets the direction, chooses the exercises, and reviews what the client brings back. The client supplies the experience. GenAI helps adapt the workout to the person, the situation, and what changes over time.</p><button className="text-button" onClick={onPractitioner}>See the guided workout <span>→</span></button></div></div>

    <div className="landing-demo page-grid"><div><p className="kicker">Guided demo</p><h2>See the idea in action.</h2><p>Follow Maya’s prepared workout from a development goal, through real and simulated situations, to the next routine.</p></div><button className="primary-button" onClick={onPractitioner}>Start the guided demo <span>→</span></button></div>
    <button className="landing-privacy" onClick={onPrivacy}>Read the privacy and safety boundary →</button>
  </section>
}
