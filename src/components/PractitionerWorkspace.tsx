import { useState } from 'react'

type Props = { onBack: () => void }
type DemoStep = 'routine' | 'client' | 'lived' | 'reflection' | 'constructed' | 'report' | 'review' | 'next'

const steps: { id: DemoStep; label: string }[] = [
  { id: 'routine', label: 'Choose' },
  { id: 'client', label: 'Routine' },
  { id: 'lived', label: 'Real moment' },
  { id: 'reflection', label: 'Reflection' },
  { id: 'constructed', label: 'One change' },
  { id: 'report', label: 'Bring back' },
  { id: 'review', label: 'Response' },
  { id: 'next', label: 'Next' },
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
  const phaseLabel = phase === 1 ? 'Set a direction' : phase === 2 ? 'Work through a moment' : 'Review and continue'

  return <section className="guided-demo page-narrow">
    <div className="guided-demo-heading">
      <div>
        <button className="back-button" onClick={onBack}>← Home</button>
        <p className="kicker">Guided demo · {phaseLabel}</p>
        <h2>A practitioner sets a direction.<br /><em>Maya works through a moment.</em></h2>
        <p className="guided-demo-lede">Follow one prepared routine from the first suggestion to the practitioner’s response. Nothing needs to be written.</p>
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

function ContinueButton({ children, onNext }: { children: string; onNext: () => void }) {
  return <button className="primary-button" onClick={onNext}>{children} <span>→</span></button>
}

function RoutineStep({ onNext }: { onNext: () => void }) {
  return <>
    <StepIntro label="01 · Practitioner’s turn" title="Choose what Maya will practise." copy="Maya wants more space before responding to criticism. The practitioner turns that goal into a short routine." />
    <div className="guided-two-column"><div className="guided-panel routine-panel"><div className="guided-panel-top"><span>Routine 01 · Between sessions</span><b>Prepared for Maya</b></div><h4>More room before responding</h4><p className="panel-lede">A short sequence for noticing what happens, checking the first story, trying one change, and carrying something useful forward.</p><div className="guided-exercises">{exercises.map(([number, title, faculty, copy]) => <article key={number}><span>{number}</span><div><small>{faculty}</small><strong>{title}</strong><p>{copy}</p></div><em>Included</em></article>)}</div><div className="guided-action-row"><ContinueButton onNext={onNext}>See Maya’s routine</ContinueButton><span>Next: Maya’s turn</span></div></div><aside className="guided-note"><span>Practitioner’s note</span><h4>What to look for</h4><p>Notice whether a pause becomes possible when Maya has more time, support, or language for what she wants to say.</p><dl><div><dt>Maya brings back</dt><dd>A real moment, what changed, and one open question.</dd></div><div><dt>Parts of the mind exercised</dt><dd>Noticing feelings, checking the first story, trying one change, learning.</dd></div></dl></aside></div>
  </>
}

function ClientStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="02 · Maya’s turn" title="Maya sees her routine." copy="She knows why it was suggested, what she will do, and what she will bring back to the next session." /><div className="guided-client-card"><div><span className="section-label">Maya’s routine</span><h4>More room before responding</h4><p>Bring one real moment where criticism changed what you felt able to say or do. The report will stay in your hands before it is shared.</p></div><div className="guided-client-status"><span>Set by practitioner</span><strong>4 exercises</strong></div></div><div className="guided-sequence">{exercises.map(([number, title, faculty, copy]) => <div key={number}><span>{number}</span><div><small>{faculty}</small><strong>{title}</strong><p>{copy}</p></div></div>)}</div><div className="guided-action-row"><ContinueButton onNext={onNext}>See what Maya brings in</ContinueButton><span>Next: a real moment</span></div></>
}

function LivedStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="03 · Maya’s turn" title="Start with what happened." copy="Maya brings one real work situation into the routine and shows what she felt, thought, said, did, and wanted." /><div className="guided-account-layout"><div className="guided-account"><div className="guided-panel-top"><span>Maya wrote this</span><b>Real moment</b></div><h4>Feedback in a review meeting</h4><blockquote>“{livedAccount}”</blockquote><div className="guided-details"><div><small>Felt and noticed</small><p>Exposed, embarrassed, tightness in my chest.</p></div><div><small>Thought or assumed</small><p>“I am failing again. They can see I am not good enough.”</p></div><div><small>Wanted or protected</small><p>I wanted to understand what was missing without feeling judged.</p></div><div><small>What happened afterward</small><p>I replayed the meeting and avoided opening the document that evening.</p></div></div></div><aside className="guided-note"><span>Why start here</span><h4>Begin with the real moment.</h4><p>The reflection has something concrete to work with before it offers any possible thread.</p></aside></div><div className="guided-action-row"><ContinueButton onNext={onNext}>See the reflection</ContinueButton><span>Next: what the reflection picked up</span></div></>
}

function ReflectionStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="04 · Maya’s turn" title="See what the reflection picked up." copy="The reflection suggests two possible threads from Maya’s account. Her words stay beside them, and the suggestions remain open to correction." /><div className="guided-reflection-grid"><div className="guided-account compact"><span className="section-label">Maya wrote this</span><blockquote>“I felt exposed and immediately started thinking that I was failing again. I answered briefly and wanted to leave.”</blockquote><span className="guided-authorship">Client-authored</span></div><div className="guided-observations"><span className="section-label">From the reflection</span><article><small>Possible thread · Noticing feelings</small><h4>Criticism may have become a signal to protect yourself quickly.</h4><p>You described feeling exposed, answering briefly, and wanting to leave.</p><b>Fits this moment</b></article><article><small>Possible thread · Checking the first story</small><h4>The first thought may have narrowed the options you could see.</h4><p>“I am failing again” appeared before you explained what you needed.</p><b>Depends on context</b></article><div className="guided-correction"><span className="section-label">Maya’s correction</span><p>“The important part is not becoming calm immediately. It is noticing that I have more than one possible next step.”</p></div></div></div><div className="guided-action-row"><ContinueButton onNext={onNext}>Try one thing changed</ContinueButton><span>Next: the same moment with one change</span></div></>
}

function ConstructedStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="05 · Maya’s turn" title="Try the same moment with one thing changed." copy="Maya has more time and someone she trusts to talk to afterward. This is a practice version of the situation, not a prediction." /><div className="guided-constructed"><div className="constructed-label"><span>A practice version of the situation</span><b>One change · More time and support</b></div><h4>The same review meeting, with more room afterward</h4><p>Imagine your manager points out the same gaps. This time, you have the evening free and a person you trust is available afterward. What do you say or do before leaving the meeting?</p><div className="guided-seeded-response"><span className="section-label">Maya wrote this</span><blockquote>“I would still feel the embarrassment, but I might ask which gap matters most and say that I want to come back with a clearer version tomorrow. Knowing I could talk it through afterward makes it less urgent to escape.”</blockquote></div><div className="guided-comparison"><div><small>What changed</small><p>More time and trusted support made it easier to stay with the conversation.</p></div><div><small>What stayed the same</small><p>The criticism still brought up embarrassment and the wish to protect herself.</p></div></div></div><div className="guided-action-row"><ContinueButton onNext={onNext}>Read Maya’s report</ContinueButton><span>Next: what Maya brings back</span></div></>
}

function ReportStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="06 · Maya’s turn" title="Put the useful parts in one report." copy="Maya sees the account, what the reflection picked up, what changed, and the question she wants to carry into the next session." /><div className="guided-report"><div className="guided-report-head"><div><span className="section-label">What Maya brings back</span><h4>More room before responding</h4></div><span className="guided-status">Prepared to share</span></div><div className="guided-report-sections"><article><small>Maya’s real moment</small><p>I felt exposed in the review meeting and wanted to leave before explaining what I needed.</p></article><article><small>What Maya corrected</small><p>The important part is noticing that I have more than one possible next step.</p></article><article><small>What changed in the practice version</small><p>With more time and trusted support afterward, I could ask which gap mattered most.</p></article><article><small>Question for the next session</small><p>What makes a pause feel possible when criticism activates me?</p></article></div></div><div className="guided-action-row"><ContinueButton onNext={onNext}>See the practitioner’s response</ContinueButton><span>Next: back to the practitioner</span></div></>
}

function ReviewStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="07 · Back to the practitioner" title="The practitioner sees what changed." copy="Maya’s report gives the practitioner something concrete to discuss and a direction for the next exercise." /><div className="guided-review"><div className="guided-review-top"><span className="section-label">What Maya brings back</span><b>Ready for the session</b></div><div className="guided-review-grid"><article><small>What changed</small><p>More time and trusted support made it easier to stay with the conversation and ask which gap mattered most.</p></article><article><small>What stayed open</small><p>The criticism still brought up embarrassment and the wish to protect herself.</p></article><article><small>Maya’s question</small><p>What makes a pause feel possible when criticism activates me?</p></article></div><div className="guided-feedback"><span className="section-label">The practitioner’s response</span><blockquote>“You noticed the urge to leave before deciding what you wanted to say. In our next routine, let’s practise one direct sentence while keeping that pause available.”</blockquote><span className="guided-authorship">Practitioner wrote this</span></div></div><div className="guided-action-row"><ContinueButton onNext={onNext}>See what comes next</ContinueButton><span>Next: a new routine from the report</span></div></>
}

function NextStep({ onRestart }: { onRestart: () => void }) {
  return <><StepIntro label="08 · Practitioner’s turn" title="The next routine grows from the report." copy="The practitioner keeps what helped, adds direct communication, and shapes the next exercise around the pause Maya noticed." /><div className="guided-next-routine"><div><span className="section-label">Routine 02 · Draft</span><h4>Pause, then say one direct sentence</h4><p>Keep noticing feelings and trying one change. Add practising a clear sentence for what Maya needs.</p></div><div className="guided-next-items"><span>01</span><p>Notice the urge to leave.</p><span>02</span><p>Choose one sentence that names what you need.</p><span>03</span><p>Practise saying it with more time and support available.</p></div></div><div className="guided-complete"><strong>You have seen the complete journey.</strong><p>Set a direction → work through a moment → review and continue.</p><button className="secondary-button" onClick={onRestart}>Run the demo again</button></div></>
}
