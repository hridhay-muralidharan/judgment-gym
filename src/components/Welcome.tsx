type Props = { onBegin: () => void; onFloor: () => void; onPrivacy: () => void; onJourney: () => void; onPractitioner: () => void; hasHistory: boolean; onThreads: () => void; allComplete: boolean }

const workouts = [
  ['Pause', 'Create more space before responding', 'attention · emotion · choice'],
  ['Perspective', 'See the story you are telling yourself', 'memory · meaning · metacognition'],
  ['Courage', 'Say what you mean when the moment gets hard', 'values · communication · self-regulation'],
  ['Flexibility', 'Make room for another possible response', 'imagination · foresight · learning'],
]

export function Welcome({ onPrivacy, onPractitioner }: Props) {
  return <section className="landing-page">
    <div className="landing-hero page-grid">
      <div className="landing-copy">
        <p className="kicker">Room to Respond</p>
        <h1>Give your mind<br /><em>a proper workout.</em></h1>
        <p className="lede">A practitioner-led way to build the mental faculties you use in conversations, decisions, work, relationships, and change.</p>
        <div className="welcome-actions"><button className="primary-button" onClick={onPractitioner}>Try a guided workout <span>→</span></button><span className="hero-support">Maya’s session is ready to go</span></div>
      </div>
      <div className="landing-preview" aria-label="Preview of today's mental workout">
        <div className="preview-topline"><span>Today’s workout</span><span>08 min</span></div>
        <div className="preview-focus"><span className="preview-number">01</span><div><p className="preview-label">Focus: Pause</p><h2>More room before responding</h2><p>Notice the reaction. Find one more possible next step.</p></div></div>
        <div className="preview-list"><div className="preview-row preview-row-done"><span>01</span><strong>Bring a real moment</strong><small>Ready</small></div><div className="preview-row"><span>02</span><strong>Notice what is happening</strong><small>Next</small></div><div className="preview-row"><span>03</span><strong>Try one thing changed</strong><small>Next</small></div></div>
        <div className="preview-footer"><span>Set by your practitioner</span><span className="preview-arrow">↗</span></div>
      </div>
    </div>

    <div className="landing-section landing-classroom">
      <div className="page-grid landing-section-head"><div className="landing-section-title"><p className="kicker">Choose a focus</p><h2>What do you want to work on?</h2></div><div className="landing-section-copy"><p>Different moments call for different faculties. A practitioner brings the right exercises together for the person and the situation.</p></div></div>
      <div className="page-grid landing-workouts">{workouts.map(([name, title, faculties], index) => <article key={name} className={index === 0 ? 'selected' : ''}><span className="workout-index">0{index + 1}</span><span className="workout-name">{name}</span><h3>{title}</h3><p>{faculties}</p><span className="workout-arrow">↗</span></article>)}</div>
    </div>

    <div className="landing-section landing-rhythm">
      <div className="page-grid landing-section-head"><div className="landing-section-title"><p className="kicker">Every session has a rhythm</p><h2>Start with a moment. Leave with a next step.</h2></div><div className="landing-section-copy"><p>Physical gyms bring exercises together into a practical routine. Room to Respond brings mental exercises together in the same spirit.</p></div></div>
      <div className="page-grid landing-rhythm-track"><article><span>Warm up</span><h3>Bring what happened.</h3><p>Start in your own words. What did you feel, think, say, do, and want?</p></article><article><span>Work</span><h3>Try one thing changed.</h3><p>Explore a bounded version of the moment with more time, support, or choice.</p></article><article><span>Cool down</span><h3>Take one thing forward.</h3><p>Notice what changed, choose what matters, and share it with your practitioner.</p></article></div>
    </div>

    <div className="landing-section landing-coach page-grid"><div className="landing-section-title"><p className="kicker">The coach stays in the loop</p><h2>Your practitioner sets the workout.</h2></div><div className="landing-section-copy"><p>The practitioner chooses the focus, reviews what comes back, and shapes the next session. The client brings the experience and decides what to keep.</p><p className="landing-pull">The result is a routine that gets more personal with every workout.</p></div></div>

    <div className="landing-section landing-why page-grid"><div className="landing-section-title"><p className="kicker">Why this idea</p><h2>The mind deserves deliberate exercise too.</h2></div><div className="landing-section-copy"><p>Modern life reduced some of the physical movement built into daily life. Cars replaced some walking. Elevators replaced some climbing. This contributed to physical inactivity. <a href="https://www.who.int/publications/i/item/9789240059153" target="_blank" rel="noreferrer">WHO Global status report</a>.</p><p>Research also studies the pressures placed on attention, emotion regulation, cognitive offloading, and decision-making. Room to Respond brings those concerns into a practical practitioner-led workout. The outcomes still need to be tested.</p></div></div>

    <div className="landing-genai page-grid"><div><p className="kicker">The adaptive layer</p><h2>The workout follows the person.</h2></div><div><p>GenAI can follow the client’s words, ask useful questions, offer a bounded variation, and prepare a report for the practitioner.</p><p>That is what makes a personalised routine possible across more situations.</p></div></div>
    <div className="landing-demo page-grid"><div><p className="kicker">Your first session</p><h2>Ready when you are.</h2><p>Follow Maya’s workout from the first prompt to the next routine. No account. Nothing to write.</p></div><button className="primary-button" onClick={onPractitioner}>Start the workout <span>→</span></button></div>
    <button className="landing-privacy" onClick={onPrivacy}>Read the privacy and safety boundary →</button>
  </section>
}
