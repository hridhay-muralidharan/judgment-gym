import { useState } from 'react'

type Props = { onBack: () => void }
type DemoStep = 'routine' | 'client' | 'lived' | 'reflection' | 'constructed' | 'report' | 'review' | 'next'

const steps: { id: DemoStep; label: string }[] = [
  { id: 'routine', label: 'Set the goal' },
  { id: 'client', label: 'See the workout' },
  { id: 'lived', label: 'Warm up' },
  { id: 'reflection', label: 'Notice' },
  { id: 'constructed', label: 'Main movement' },
  { id: 'report', label: 'Cooldown' },
  { id: 'review', label: 'Trainer review' },
  { id: 'next', label: 'Progression' },
]

const exercises = [
  ['01', 'Name the moment', 'Emotion awareness', 'Notice what happened and what your body was already telling you.'],
  ['02', 'Check the first story', 'Metacognition', 'Separate what you know from what you assumed in the moment.'],
  ['03', 'Change one condition', 'Cognitive flexibility', 'Try the situation with more time and trusted support available afterward.'],
  ['04', 'Carry it forward', 'Learning and foresight', 'Choose one question or response to bring into the next real situation.'],
]

const livedAccount = 'In the review meeting, my manager pointed out that the requirements document still had gaps. I felt exposed and immediately started thinking that I was failing again. I answered briefly, said I would fix it, and then wanted to leave the conversation. Later, I kept replaying the criticism and felt embarrassed that I had not explained what I was struggling with.'

export function PractitionerWorkspace({ onBack }: Props) {
  const [step, setStep] = useState<DemoStep>('routine')

  const currentIndex = steps.findIndex((item) => item.id === step)
  const next = () => setStep(steps[Math.min(currentIndex + 1, steps.length - 1)].id)
  const goTo = (nextStep: DemoStep) => setStep(nextStep)

  const phase = currentIndex <= 0 ? 1 : currentIndex <= 5 ? 2 : 3
  const phaseLabel = phase === 1 ? 'Set the workout' : phase === 2 ? 'Warm up and work' : 'Cool down and progress'

  return <section className="guided-demo page-narrow">
    <div className="guided-demo-heading">
      <div>
        <button className="back-button" onClick={onBack}>← Home</button>
        <p className="kicker">Maya’s workout · {phaseLabel}</p>
        <h2>One session.<br /><em>More room to respond.</em></h2>
        <p className="guided-demo-lede">Step into a prepared workout. The practitioner sets the focus, Maya works through a real moment, and the next routine takes shape.</p>
      </div>
      <div className="guided-demo-client"><span>DEMO CLIENT</span><strong>Maya R.</strong><p>More space before responding to criticism.</p></div>
    </div>

    <div className="guided-progress" aria-label={`Phase ${phase} of 3, step ${currentIndex + 1} of ${steps.length}`}>
      {[{ number: 1, label: 'Set a direction', first: 'routine' as DemoStep }, { number: 2, label: 'Work through a moment', first: 'client' as DemoStep }, { number: 3, label: 'Review and continue', first: 'review' as DemoStep }].map((item) => <button key={item.number} className={item.number === phase ? 'active' : item.number < phase ? 'complete' : ''} onClick={() => goTo(item.first)}><span>{String(item.number).padStart(2, '0')}</span>{item.label}</button>)}
      <div className="guided-local-progress"><strong>Step {currentIndex + 1} of {steps.length}</strong><span>{steps[currentIndex].label}</span></div>
    </div>

    <div className="guided-demo-stage">
      {step === 'routine' && <RoutineStep onNext={next} />}
      {step === 'client' && <ClientStep onNext={next} />}
      {step === 'lived' && <LivedStep onNext={next} />}
      {step === 'reflection' && <ReflectionStep onNext={next} />}
      {step === 'constructed' && <ConstructedStep onNext={next} />}
      {step === 'report' && <ReportStep onNext={next} />}
      {step === 'review' && <ReviewStep onNext={next} />}
      {step === 'next' && <NextStep onRestart={() => setStep('routine')} />}
    </div>
  </section>
}

function StepIntro({ label, title, copy }: { label: string; title: string; copy: string }) {
  return <div className="guided-step-intro"><p className="kicker">{label}</p><h3>{title}</h3><p>{copy}</p></div>
}

function ContinueButton({ children, onNext, disabled = false }: { children: string; onNext: () => void; disabled?: boolean }) {
  return <button className="primary-button" onClick={onNext} disabled={disabled}>{children} <span>→</span></button>
}

function RoutineStep({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState('Pause')
  return <>
    <StepIntro label="01 · Choose the workout" title="Start with one thing to build." copy="A good workout has a focus. Maya’s practitioner chooses a little more space before responding to criticism." />
    <div className="guided-focus-picker"><div className="focus-picker-head"><span>Coach’s call</span><strong>Choose today’s focus</strong></div><div className="focus-options">{['Pause', 'Perspective', 'Courage'].map((focus) => <button key={focus} className={selected === focus ? 'focus-option active' : 'focus-option'} onClick={() => setSelected(focus)}><span>{focus === 'Pause' ? '01' : focus === 'Perspective' ? '02' : '03'}</span><strong>{focus}</strong><small>{focus === 'Pause' ? 'More room before responding' : focus === 'Perspective' ? 'See another side of the moment' : 'Say what matters clearly'}</small></button>)}</div><div className="focus-selected"><span>Selected for Maya</span><strong>{selected === 'Pause' ? 'More room before responding' : `${selected} in a difficult moment`}</strong><p>Four short exercises. One real situation. Something useful to carry forward.</p></div></div>
    <div className="guided-two-column guided-routine-layout"><div className="guided-panel routine-panel"><div className="guided-panel-top"><span>Workout 01 · Prepared for Maya</span><b>Ready to assign</b></div><h4>More room before responding</h4><p className="panel-lede">A Pause workout for finding one more option before acting on the first reaction.</p><div className="workout-card-meta"><div><small>Workout format</small><strong>Pause</strong></div><div><small>Faculty focus</small><strong>Emotion awareness · judgment</strong></div><div><small>Challenge</small><strong>One real work moment</strong></div></div><div className="guided-exercises">{exercises.map(([number, title, faculty, copy]) => <article key={number}><span>{number}</span><div><small>{faculty}</small><strong>{title}</strong><p>{copy}</p></div><em>Ready</em></article>)}</div><div className="guided-action-row"><ContinueButton onNext={onNext}>Assign this workout</ContinueButton><span>Next: Maya warms up</span></div></div><aside className="guided-note"><span>Coach’s eye</span><h4>Look for more options.</h4><p>Notice whether a pause becomes possible when Maya has more time, support, or language for what she wants to say.</p><dl><div><dt>Session rhythm</dt><dd>Warm-up · main movement · cooldown</dd></div><div><dt>Bring back</dt><dd>A real moment, what changed, and one open question.</dd></div><div><dt>Next progression</dt><dd>Practise one direct sentence.</dd></div></dl></aside></div>
  </>
}

function ClientStep({ onNext }: { onNext: () => void }) {
  const [ready, setReady] = useState(false)
  return <><StepIntro label="02 · Enter the session" title="Your focus is set. Let’s begin." copy="Maya sees the plan before she starts. She knows what she is practising and what she can bring back." /><div className="guided-arrival"><div className="arrival-main"><span className="section-label">Maya’s workout</span><h4>More room before responding</h4><p>Bring one real moment where criticism changed what you felt able to say or do. The report stays in your hands before it is shared.</p><button className={ready ? 'arrival-ready' : 'arrival-start'} onClick={() => setReady(true)}>{ready ? 'Ready to begin' : 'I’m ready'} <span>✓</span></button></div><div className="arrival-side"><span>Today’s rhythm</span><strong>Warm up</strong><p>Bring a moment</p><strong>Work</strong><p>Try one thing changed</p><strong>Cool down</strong><p>Take one thing forward</p></div></div><div className="guided-action-row"><ContinueButton onNext={onNext} disabled={!ready}>Bring in a real moment</ContinueButton><span>{ready ? 'Maya is ready' : 'Choose “I’m ready” first'}</span></div></>
}

function LivedStep({ onNext }: { onNext: () => void }) {
  const [revealed, setRevealed] = useState(false)
  return <><StepIntro label="03 · Warm up" title="Bring one real moment." copy="Maya starts with what actually happened. She does not need the perfect explanation. The moment is enough." /><div className="guided-warmup"><div className="warmup-prompt"><span>Coach’s prompt</span><h4>Think of a moment when criticism changed what you felt able to say or do.</h4><p>Notice the details. What did you feel, think, say, do, and want?</p><button className="warmup-reveal" onClick={() => setRevealed(!revealed)}>{revealed ? 'Hide Maya’s moment' : 'See Maya’s moment'} <span>{revealed ? '↑' : '↓'}</span></button></div>{revealed && <div className="guided-account warmup-account"><div className="guided-panel-top"><span>Maya wrote this</span><b>Real moment</b></div><h4>Feedback in a review meeting</h4><blockquote>“{livedAccount}”</blockquote><div className="guided-details"><div><small>Felt and noticed</small><p>Exposed, embarrassed, tightness in my chest.</p></div><div><small>Thought or assumed</small><p>“I am failing again. They can see I am not good enough.”</p></div><div><small>Wanted or protected</small><p>I wanted to understand what was missing without feeling judged.</p></div><div><small>Afterward</small><p>I replayed the meeting and avoided opening the document.</p></div></div></div>}</div><div className="guided-action-row"><ContinueButton onNext={onNext}>Start the reflection</ContinueButton><span>{revealed ? 'Moment brought in' : 'Maya’s moment is ready'}</span></div></>
}

function ReflectionStep({ onNext }: { onNext: () => void }) {
  const [kept, setKept] = useState<string[]>([])
  const toggle = (item: string) => setKept((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item])
  return <><StepIntro label="04 · Notice" title="Coach the reflection." copy="The reflection offers possibilities, not verdicts. Maya decides which observations fit this moment." /><div className="guided-reflection-grid guided-reflection-workout"><div className="guided-account compact"><span className="section-label">Maya’s words</span><blockquote>“I felt exposed and immediately started thinking that I was failing again. I answered briefly and wanted to leave.”</blockquote><span className="guided-authorship">Client-authored</span></div><div className="guided-observations"><span className="section-label">Pick what fits</span><article className={kept.includes('protect') ? 'observation-choice selected' : 'observation-choice'}><button onClick={() => toggle('protect')}><span>{kept.includes('protect') ? '✓' : '+'}</span><div><small>Possible thread · Emotion</small><h4>Criticism may have become a signal to protect yourself quickly.</h4><p>You described feeling exposed, answering briefly, and wanting to leave.</p></div></button></article><article className={kept.includes('story') ? 'observation-choice selected' : 'observation-choice'}><button onClick={() => toggle('story')}><span>{kept.includes('story') ? '✓' : '+'}</span><div><small>Possible thread · Metacognition</small><h4>The first thought may have narrowed the options you could see.</h4><p>“I am failing again” appeared before you explained what you needed.</p></div></button></article><div className="guided-correction"><span className="section-label">Maya’s correction</span><p>“The important part is noticing that I have more than one possible next step.”</p></div></div></div><div className="guided-action-row"><ContinueButton onNext={onNext}>Try one thing changed</ContinueButton><span>{kept.length} reflection{kept.length === 1 ? '' : 's'} kept</span></div></>
}

function ConstructedStep({ onNext }: { onNext: () => void }) {
  const [condition, setCondition] = useState('More time and support')
  return <><StepIntro label="05 · Work" title="Try one thing changed." copy="Now Maya runs the moment again. The changed condition gives her a little more room to discover another response." /><div className="guided-condition-picker"><span className="section-label">Choose the condition</span><div className="condition-options"><button className={condition === 'More time and support' ? 'condition-option active' : 'condition-option'} onClick={() => setCondition('More time and support')}>More time and support</button><button className={condition === 'One clear sentence' ? 'condition-option active' : 'condition-option'} onClick={() => setCondition('One clear sentence')}>One clear sentence ready</button></div></div><div className="guided-constructed"><div className="constructed-label"><span>A practice version</span><b>One change · {condition}</b></div><h4>The same review meeting, with more room afterward</h4><p>Imagine your manager points out the same gaps. This time, {condition === 'More time and support' ? 'you have the evening free and a person you trust is available afterward.' : 'you have one sentence ready to explain what you need.'} What do you say or do before leaving the meeting?</p><div className="guided-seeded-response"><span className="section-label">Maya’s response</span><blockquote>“I would still feel the embarrassment, but I might ask which gap matters most and say that I want to come back with a clearer version tomorrow. Knowing I could talk it through afterward makes it less urgent to escape.”</blockquote></div><div className="guided-comparison"><div><small>What opened up</small><p>More room made it easier to stay with the conversation and ask which gap mattered most.</p></div><div><small>What stayed present</small><p>The criticism still brought up embarrassment and the wish to protect herself.</p></div></div></div><div className="guided-action-row"><ContinueButton onNext={onNext}>Cool down with the report</ContinueButton><span>One condition explored</span></div></>
}

function ReportStep({ onNext }: { onNext: () => void }) {
  const [shared, setShared] = useState(false)
  return <><StepIntro label="06 · Cool down" title="Keep the useful part." copy="Maya reviews what she wants to carry forward. The report is hers to edit before it reaches the practitioner." /><div className="guided-report guided-share-card"><div className="guided-report-head"><div><span className="section-label">Maya’s take-home report</span><h4>More room before responding</h4></div><span className={shared ? 'guided-status shared' : 'guided-status'}>{shared ? 'Ready to share' : 'In Maya’s hands'}</span></div><div className="guided-report-sections"><article><small>What happened</small><p>I felt exposed in the review meeting and wanted to leave before explaining what I needed.</p></article><article><small>What I noticed</small><p>The important part is noticing that I have more than one possible next step.</p></article><article><small>What changed</small><p>With more room afterward, I could ask which gap mattered most.</p></article><article><small>What I want to explore</small><p>What makes a pause feel possible when criticism activates me?</p></article></div><button className={shared ? 'share-report shared' : 'share-report'} onClick={() => setShared(true)}>{shared ? 'Report ready for the practitioner ✓' : 'Share this report with the practitioner →'}</button></div><div className="guided-action-row"><ContinueButton onNext={onNext} disabled={!shared}>Send it to the practitioner</ContinueButton><span>{shared ? 'Maya chose what to share' : 'Share the report to continue'}</span></div></>
}

function ReviewStep({ onNext }: { onNext: () => void }) {
  const [direction, setDirection] = useState('Direct communication')
  return <><StepIntro label="07 · Coach forward" title="Turn the insight into the next workout." copy="The practitioner sees what opened up and chooses where Maya goes next. Progress is a better question, not a perfect response." /><div className="guided-review guided-coach-review"><div className="guided-review-top"><span className="section-label">Maya’s report</span><b>Session complete</b></div><div className="guided-review-grid"><article><small>What opened up</small><p>More room made it easier to stay with the conversation and ask which gap mattered most.</p></article><article><small>What stayed present</small><p>The criticism still brought up embarrassment and the wish to protect herself.</p></article><article><small>Maya’s question</small><p>What makes a pause feel possible when criticism activates me?</p></article></div><div className="guided-feedback"><span className="section-label">The practitioner’s coaching note</span><blockquote>“You noticed the urge to leave before deciding what you wanted to say. Let’s keep that pause available.”</blockquote><span className="guided-authorship">Practitioner wrote this</span></div><div className="next-focus"><span className="section-label">Choose the next focus</span><div><button className={direction === 'Direct communication' ? 'next-focus-option active' : 'next-focus-option'} onClick={() => setDirection('Direct communication')}>Direct communication</button><button className={direction === 'More time' ? 'next-focus-option active' : 'next-focus-option'} onClick={() => setDirection('More time')}>More time to respond</button></div><p>Next: {direction}. The routine grows from what Maya noticed today.</p></div></div><div className="guided-action-row"><ContinueButton onNext={onNext}>Build the next workout</ContinueButton><span>{direction} selected</span></div></>
}

function NextStep({ onRestart }: { onRestart: () => void }) {
  return <><StepIntro label="08 · Cool down" title="Take one thing into the next moment." copy="Maya noticed that a pause can create another option. The practitioner turns that discovery into the next workout." /><div className="guided-next-routine"><div><span className="section-label">Next workout · Ready to try</span><h4>Pause, then say one direct sentence</h4><p>Keep noticing feelings and trying one change. Add practising a clear sentence for what Maya needs.</p></div><div className="guided-next-items"><span>01</span><p>Notice the urge to leave.</p><span>02</span><p>Choose one sentence that names what you need.</p><span>03</span><p>Practise saying it with more time and support available.</p></div></div><div className="guided-complete"><strong>That was a complete mental workout.</strong><p>You set a focus, worked through a moment, and found a next step.</p><button className="secondary-button" onClick={onRestart}>Do another workout</button></div></>
}
