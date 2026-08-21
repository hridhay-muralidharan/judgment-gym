type Props = { onStart: () => void; onBack: () => void; hasHistory: boolean; onModel: () => void }

const areas = [
  { number: '01', group: 'Notice', title: 'Emotion and attention', copy: 'Notice what is happening in your body, where your attention goes, and what changes as a moment unfolds.', state: 'available' },
  { number: '02', group: 'Understand', title: 'Memory and meaning', copy: 'Look at how an experience becomes part of the story you tell yourself about what happened and who you are.', state: 'research' },
  { number: '03', group: 'Choose', title: 'Values and decisions', copy: 'Explore the motives, trade-offs, and judgments that shape what you choose to do next.', state: 'research' },
  { number: '04', group: 'Adapt', title: 'Flexibility and foresight', copy: 'Change a condition, imagine a consequence, and notice what becomes possible when the situation moves.', state: 'available' },
]

export function WorkoutFloor({ onStart, onBack, hasHistory, onModel }: Props) {
  return <section className="floor-page page-narrow">
    <div className="floor-heading"><div><button className="back-button" onClick={onBack}>← Home</button><p className="kicker">The workout floor</p><h2>Train the faculties<br /><em>you use to live.</em></h2><p className="floor-lede">Different situations call on different parts of us. Start with a real moment and choose a direction for the practice.</p></div><div className="floor-note"><span>JG / 01</span><p><strong>Every workout begins with observation.</strong> The model offers a direction. You decide what fits, what changes, and what stays open.</p></div></div>
    <div className="floor-grid">{areas.map((area) => <article className={`workout-area workout-${area.state}`} key={area.number}><div className="workout-top"><span>{area.number}</span><span>{area.state === 'available' ? 'Open to practise' : 'Research track'}</span></div><p className="workout-group">{area.group}</p><h3>{area.title}</h3><p>{area.copy}</p>{area.state === 'available' ? <button className="text-button" onClick={onStart}>{hasHistory ? 'Continue this workout' : 'Start here'} <span>→</span></button> : <span className="workout-status">Being researched</span>}</article>)}</div>
    <div className="floor-footer"><div><p className="kicker">The first workout</p><h3>A situation lab for noticing, understanding, and adapting.</h3></div><div><p>Bring in something real. Examine the sequence of feeling, thought, action, and consequence. Then change one condition and see what moves.</p><button className="primary-button" onClick={onStart}>{hasHistory ? 'Continue practice' : 'Bring in a situation'} <span>→</span></button></div></div>
    {hasHistory && <button className="resume-link floor-model-link" onClick={onModel}>Open my training record →</button>}
  </section>
}
