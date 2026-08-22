import { useState } from 'react'

type Props = { onStartClient: () => void; onBack: () => void }

const exercises = [
  { number: '01', title: 'Name the moment', faculty: 'Emotion awareness', copy: 'Describe what happened, what you felt, and what your body noticed.' },
  { number: '02', title: 'Check the first story', faculty: 'Metacognition', copy: 'Separate what you know from what you assumed in the moment.' },
  { number: '03', title: 'Change one condition', faculty: 'Cognitive flexibility', copy: 'Try the situation with more time, support, or information and notice what moves.' },
  { number: '04', title: 'Carry it forward', faculty: 'Learning and foresight', copy: 'Choose one question or response to bring into the next real situation.' },
]

export function PractitionerWorkspace({ onStartClient, onBack }: Props) {
  const [view, setView] = useState<'practitioner' | 'client' | 'report'>('practitioner')
  const [assigned, setAssigned] = useState(false)

  return <section className="practitioner-page page-narrow">
    <div className="practitioner-heading">
      <div>
        <button className="back-button" onClick={onBack}>← Home</button>
        <p className="kicker">Practitioner workspace</p>
        <h2>Create the routine.<br /><em>Review what changes.</em></h2>
        <p className="practitioner-lede">A practitioner sets the direction. A client practises between sessions and brings the learning back.</p>
      </div>
      <div className="practitioner-context"><span>DEMO CLIENT</span><strong>Maya R.</strong><p>Building more space between criticism and response.</p></div>
    </div>

    <div className="workspace-switch" role="tablist" aria-label="Demo workspace view">
      <button className={view === 'practitioner' ? 'selected' : ''} onClick={() => setView('practitioner')} role="tab" aria-selected={view === 'practitioner'}>Practitioner view</button>
      <button className={view === 'client' ? 'selected' : ''} onClick={() => setView('client')} role="tab" aria-selected={view === 'client'}>Client view</button>
      <button className={view === 'report' ? 'selected' : ''} onClick={() => setView('report')} role="tab" aria-selected={view === 'report'}>Review report</button>
    </div>

    {view === 'practitioner' ? <PractitionerView assigned={assigned} onAssign={() => setAssigned(true)} onClientView={() => setView('client')} /> : view === 'client' ? <ClientView assigned={assigned} onStart={onStartClient} /> : <ReportView assigned={assigned} onNextRoutine={() => setView('practitioner')} />}
  </section>
}

function PractitionerView({ assigned, onAssign, onClientView }: { assigned: boolean; onAssign: () => void; onClientView: () => void }) {
  return <div className="workspace-body">
    <div className="routine-builder">
      <div className="workspace-section-heading"><div><span className="section-label">Routine 01 · Between sessions</span><h3>More room before responding</h3></div><span className={`assignment-state ${assigned ? 'is-assigned' : ''}`}>{assigned ? 'Assigned to Maya' : 'Draft routine'}</span></div>
      <p className="routine-intro">A four-part routine for noticing activation, checking the first interpretation, trying a changed condition, and carrying one useful question into life.</p>
      <div className="exercise-list">{exercises.map((exercise) => <article className="exercise-row" key={exercise.number}><span className="exercise-number">{exercise.number}</span><div><span className="exercise-faculty">{exercise.faculty}</span><h4>{exercise.title}</h4><p>{exercise.copy}</p></div><span className="exercise-check">Included</span></article>)}</div>
      <div className="routine-actions"><button className="primary-button" onClick={onAssign}>{assigned ? 'Routine assigned' : 'Assign to Maya'} <span>→</span></button><button className="text-button" onClick={onClientView}>Preview client view <span>↗</span></button></div>
    </div>
    <aside className="practitioner-sidebar"><span className="section-label">Practitioner notes</span><h3>What this routine is for</h3><p>Help Maya observe the moment before she moves into flight or self-criticism.</p><dl><div><dt>Faculty focus</dt><dd>Emotion awareness · metacognition · flexibility</dd></div><div><dt>Client report</dt><dd>Situation, response, changed condition, open question</dd></div><div><dt>Next review</dt><dd>Bring one completed exercise to the next session</dd></div></dl><p className="sidebar-note">The practitioner decides what the routine means and how it should progress.</p></aside>
  </div>
}

function ClientView({ assigned, onStart }: { assigned: boolean; onStart: () => void }) {
  return <div className="client-view">
    <div className="client-banner"><div><span className="section-label">Maya's assigned routine</span><h3>More room before responding</h3><p>Complete these exercises before your next session. Bring back what you notice, including anything that feels unclear.</p></div><span className="client-progress">{assigned ? 'Ready to begin' : 'Not assigned yet'}</span></div>
    <div className="client-steps">{exercises.map((exercise, index) => <article key={exercise.number} className={index === 0 ? 'current' : ''}><span>{exercise.number}</span><div><small>{exercise.faculty}</small><h4>{exercise.title}</h4><p>{exercise.copy}</p></div><strong>{index === 0 ? 'Start' : 'Next'}</strong></article>)}</div>
    <div className="client-start"><p><strong>Your report stays editable.</strong> You decide what to share with your practitioner.</p><button className="primary-button" disabled={!assigned} onClick={onStart}>{assigned ? 'Begin the workout' : 'Assign the routine first'} <span>→</span></button></div>
  </div>
}

function ReportView({ assigned, onNextRoutine }: { assigned: boolean; onNextRoutine: () => void }) {
  return <div className="report-view">
    <div className="report-heading"><div><span className="section-label">Client report · Maya R.</span><h3>{assigned ? 'More room before responding' : 'A report will appear here'}</h3><p>{assigned ? 'Submitted after the client compared the lived situation with the changed condition.' : 'Assign the routine, then review the client report here.'}</p></div><span className="report-status">{assigned ? 'Ready for review' : 'Awaiting routine'}</span></div>
    <div className="report-grid"><article><span className="section-label">What changed</span><p>With more time and trusted support available afterward, Maya noticed the urge to leave the conversation before deciding what she wanted to say.</p></article><article><span className="section-label">Client correction</span><p>“The important part is not becoming calm immediately. It is noticing that I have more than one possible next step.”</p></article><article><span className="section-label">Bring to session</span><p>Explore what makes a pause feel possible and practise one direct sentence for the next feedback conversation.</p></article></div>
    <div className="report-footer"><p><strong>Practitioner action:</strong> adjust the next routine around pause, direct communication, and feedback.</p><button className="primary-button" onClick={onNextRoutine}>Prepare next routine <span>→</span></button></div>
  </div>
}
