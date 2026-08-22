import { useState } from 'react'

type Props = { onBack: () => void }
type DemoStep = 'routine' | 'client' | 'lived' | 'reflection' | 'constructed' | 'report' | 'review' | 'next'

const steps: { id: DemoStep; label: string }[] = [
  { id: 'routine', label: 'Routine' },
  { id: 'client', label: 'Client view' },
  { id: 'lived', label: 'Lived moment' },
  { id: 'reflection', label: 'Reflection' },
  { id: 'constructed', label: 'Changed condition' },
  { id: 'report', label: 'Report' },
  { id: 'review', label: 'Practitioner review' },
  { id: 'next', label: 'Next routine' },
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

  return <section className="guided-demo page-narrow">
    <div className="guided-demo-heading">
      <div>
        <button className="back-button" onClick={onBack}>← Home</button>
        <p className="kicker">Guided demo · one complete routine</p>
        <h2>From a practitioner’s direction<br /><em>back to the next routine.</em></h2>
        <p className="guided-demo-lede">Follow Maya’s seeded journey from assignment, through practice, to practitioner feedback. Nothing needs to be written.</p>
      </div>
      <div className="guided-demo-client"><span>DEMO CLIENT</span><strong>Maya R.</strong><p>More space before responding to criticism.</p></div>
    </div>

    <div className="guided-stepper" aria-label="Guided demo steps">
      {steps.map((item, index) => <button key={item.id} className={item.id === step ? 'active' : index < currentIndex ? 'complete' : ''} onClick={() => goTo(item.id)}><span>{String(index + 1).padStart(2, '0')}</span>{item.label}</button>)}
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
    <StepIntro label="01 · Practitioner view" title="Create the routine." copy="The practitioner starts with a client goal and chooses the sequence that will be practised between sessions." />
    <div className="guided-two-column"><div className="guided-panel routine-panel"><div className="guided-panel-top"><span>Routine 01 · Between sessions</span><b>Draft routine</b></div><h4>More room before responding</h4><p className="panel-lede">Help Maya notice the moment before she moves into flight or self-criticism.</p><div className="guided-exercises">{exercises.map(([number, title, faculty, copy]) => <article key={number}><span>{number}</span><div><small>{faculty}</small><strong>{title}</strong><p>{copy}</p></div><em>Included</em></article>)}</div><div className="guided-action-row"><ContinueButton onNext={onNext}>Assign this routine</ContinueButton><span>Assigned to Maya after this step</span></div></div><aside className="guided-note"><span>Practitioner note</span><h4>What to look for</h4><p>Notice whether a pause becomes possible when Maya has more time, support, or language for what she wants to say.</p><dl><div><dt>Client brings back</dt><dd>Situation, response, changed condition, open question</dd></div><div><dt>Faculty focus</dt><dd>Emotion awareness · metacognition · flexibility · learning</dd></div></dl></aside></div>
  </>
}

function ClientStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="02 · Client view" title="Open the assigned routine." copy="Maya sees why the routine was suggested, what she will practise, and what will return to the next session." /><div className="guided-client-card"><div><span className="section-label">Maya’s assigned routine</span><h4>More room before responding</h4><p>Bring one real situation where criticism changed what you felt able to say or do. The report stays editable before you share it.</p></div><div className="guided-client-status"><span>Assigned by practitioner</span><strong>4 exercises</strong></div></div><div className="guided-sequence">{exercises.map(([number, title, faculty, copy]) => <div key={number}><span>{number}</span><div><small>{faculty}</small><strong>{title}</strong><p>{copy}</p></div></div>)}</div><div className="guided-action-row"><ContinueButton onNext={onNext}>Begin Maya’s routine</ContinueButton><span>Seeded demo content continues</span></div></>
}

function LivedStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="03 · Lived situation" title="Start with what happened." copy="Maya brings one real work situation into the routine. The demo includes the full account so the reviewer can focus on the experience." /><div className="guided-account-layout"><div className="guided-account"><div className="guided-panel-top"><span>Maya’s lived account</span><b>Seeded content</b></div><h4>Feedback in a review meeting</h4><blockquote>“{livedAccount}”</blockquote><div className="guided-details"><div><small>Felt and noticed</small><p>Exposed, embarrassed, tightness in my chest.</p></div><div><small>Thought or assumed</small><p>“I am failing again. They can see I am not good enough.”</p></div><div><small>Wanted or protected</small><p>I wanted to understand what was missing without feeling judged.</p></div><div><small>What happened afterward</small><p>I replayed the meeting and avoided opening the document that evening.</p></div></div></div><aside className="guided-note"><span>Why begin here</span><h4>The experience comes first.</h4><p>The model has something concrete to work with before it offers any interpretation or exercise.</p></aside></div><div className="guided-action-row"><ContinueButton onNext={onNext}>Review what the model noticed</ContinueButton><span>Next: a provisional reflection</span></div></>
}

function ReflectionStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="04 · Model review" title="A mirror Maya can correct." copy="The model offers a few tentative observations. Maya’s account stays visible, and her correction is part of the report." /><div className="guided-reflection-grid"><div className="guided-account compact"><span className="section-label">Maya’s account</span><blockquote>“I felt exposed and immediately started thinking that I was failing again. I answered briefly and wanted to leave.”</blockquote><span className="guided-authorship">Client-authored</span></div><div className="guided-observations"><span className="section-label">Tentative observations</span><article><small>01 · Emotion awareness</small><h4>Criticism may have become a signal to protect yourself quickly.</h4><p>Evidence: you describe feeling exposed, answering briefly, and wanting to leave.</p><b>Fits this moment</b></article><article><small>02 · Metacognition</small><h4>The first interpretation may have narrowed the options you could see.</h4><p>Evidence: “I am failing again” appeared before you explained what you needed.</p><b>Depends on context</b></article><div className="guided-correction"><span className="section-label">Maya’s correction</span><p>“The important part is not becoming calm immediately. It is noticing that I have more than one possible next step.”</p></div></div></div><div className="guided-action-row"><ContinueButton onNext={onNext}>Try the changed condition</ContinueButton><span>Next: a constructed exercise</span></div></>
}

function ConstructedStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="05 · Constructed situation" title="Change one condition." copy="The demo gives Maya more time and trusted support after the conversation. It is an exercise for noticing what moves." /><div className="guided-constructed"><div className="constructed-label"><span>Constructed situation</span><b>Text practice · Cognitive flexibility</b></div><h4>The same review meeting, with more room afterward</h4><p>Imagine your manager points out the same gaps. This time, you have the evening free and a person you trust is available afterward. What do you say or do before leaving the meeting?</p><div className="guided-seeded-response"><span className="section-label">Maya’s response</span><blockquote>“I would still feel the embarrassment, but I might ask which gap matters most and say that I want to come back with a clearer version tomorrow. Knowing I could talk it through afterward makes it less urgent to escape.”</blockquote></div><div className="guided-comparison"><div><small>What changed</small><p>More time and trusted support made it easier to stay with the conversation.</p></div><div><small>What stayed</small><p>The criticism still activated embarrassment and the wish to protect herself.</p></div></div></div><div className="guided-action-row"><ContinueButton onNext={onNext}>See Maya’s report</ContinueButton><span>Next: compare and carry forward</span></div></>
}

function ReportStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="06 · Client report" title="Turn the exercise into something shareable." copy="Maya sees the complete report before it reaches the practitioner. The report keeps her words, corrections, and open question together." /><div className="guided-report"><div className="guided-report-head"><div><span className="section-label">Report for practitioner · Maya R.</span><h4>More room before responding</h4></div><span className="guided-status">Ready to share</span></div><div className="guided-report-sections"><article><small>Lived situation</small><p>I felt exposed in the review meeting and wanted to leave before explaining what I needed.</p></article><article><small>Client correction</small><p>The important part is noticing that I have more than one possible next step.</p></article><article><small>Changed condition</small><p>With more time and trusted support afterward, I could ask which gap mattered most.</p></article><article><small>Question for next session</small><p>What makes a pause feel possible when criticism activates me?</p></article></div></div><div className="guided-action-row"><ContinueButton onNext={onNext}>Share report with practitioner</ContinueButton><span>Maya’s report is now visible in practitioner review</span></div></>
}

function ReviewStep({ onNext }: { onNext: () => void }) {
  return <><StepIntro label="07 · Practitioner review" title="Review what changed." copy="The practitioner receives the report as a session aid: what happened, what Maya corrected, and what became possible under a different condition." /><div className="guided-review"><div className="guided-review-top"><span className="section-label">Client report · Maya R.</span><b>Submitted</b></div><div className="guided-review-grid"><article><small>What changed</small><p>More time and trusted support made it easier to stay with the conversation and ask which gap mattered most.</p></article><article><small>What stayed open</small><p>The criticism still activated embarrassment and the wish to protect herself.</p></article><article><small>Client’s question</small><p>What makes a pause feel possible when criticism activates me?</p></article></div><div className="guided-feedback"><span className="section-label">Practitioner feedback</span><blockquote>“You noticed the urge to leave before deciding what you wanted to say. In our next routine, let’s practise one direct sentence while keeping that pause available.”</blockquote><span className="guided-authorship">Practitioner-authored</span></div></div><div className="guided-action-row"><ContinueButton onNext={onNext}>Prepare the next routine</ContinueButton><span>Feedback becomes the next direction</span></div></>
}

function NextStep({ onRestart }: { onRestart: () => void }) {
  return <><StepIntro label="08 · Next routine" title="The loop returns to practice." copy="The practitioner carries the report into the next routine instead of treating the exercise as a final answer." /><div className="guided-next-routine"><div><span className="section-label">Routine 02 · Draft</span><h4>Pause, then say one direct sentence</h4><p>Keep the focus on emotion awareness and flexibility. Add communication as the next faculty to exercise.</p></div><div className="guided-next-items"><span>01</span><p>Notice the urge to leave.</p><span>02</span><p>Choose one sentence that names what you need.</p><span>03</span><p>Practise saying it with more time and support available.</p></div></div><div className="guided-complete"><strong>You have seen the complete journey.</strong><p>Practitioner direction → client practice → reviewable report → practitioner feedback → next routine.</p><button className="secondary-button" onClick={onRestart}>Run the demo again</button></div></>
}
