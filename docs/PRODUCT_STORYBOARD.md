# Room to Respond — product storyboard

## What the product is

Room to Respond is a practitioner-led mental fitness platform. Therapists and life coaches create personalised mental workout routines for clients. Clients practise between sessions using real situations, guided scenarios, text, and voice, then share reviewable reports with their practitioner.

Physical gyms provide physical workouts for physical muscles. Room to Respond explores mental workouts for the faculties people use to live: noticing, feeling, remembering, interpreting, deciding, relating, adapting, and learning.

The practitioner gives the routine its purpose and boundaries. The client supplies the lived experience. GenAI helps personalise the exercise, organise the reflection, and prepare a report. The practitioner reviews what happened and guides the next routine.

## Screen 1 — Practitioner workspace

The practitioner sees a client list, active routines, recent reports, and open questions for the next session.

For each client, the practitioner can:

- record the agreed goal or area of development;
- select the faculties involved;
- choose exercises from the workout library;
- assemble a routine for the period between sessions;
- add context, instructions, and a sharing boundary;
- review submitted reports;
- give feedback and prepare the next routine.

The first prototype uses a seeded practitioner and client so the workflow can be reviewed without account creation.

## Screen 2 — Create a routine

The practitioner starts with a client goal, such as:

- create more space before responding to criticism;
- recognise activation earlier in a difficult conversation;
- compare interpretations before making a decision;
- practise a more direct request;
- learn from feedback without shutting down.

The practitioner selects a faculty or combination of faculties, chooses exercises, and decides how the client will report back.

The first routine combines:

```text
emotion awareness
→ metacognition
→ cognitive flexibility
→ prospection
→ learning from comparison
```

Each routine shows its research basis, exercise purpose, evidence status, instructions, and open questions for review.

## Screen 3 — Client routine

The client sees the assigned routine in a simple sequence:

1. Name the moment.
2. Check the first story.
3. Change one condition.
4. Carry one useful question forward.

The client can bring in a real situation and describe:

- what happened;
- what they noticed;
- what they felt and what their body noticed;
- what they thought or assumed;
- what they wanted or protected;
- what they said and did;
- what happened afterward;
- what they believe now.

The client can use text or voice as the interaction develops. The client can edit every generated reflection before deciding what to share.

## Screen 4 — Model review

The system returns a reviewable reflection:

- what appears to have happened;
- which faculties may have been involved;
- what evidence supports that reading;
- possible alternative explanations;
- open questions;
- what could be explored next.

The client can accept, edit, qualify, reject, or leave the reflection open. The practitioner sees the submitted version and the client's corrections.

## Screen 5 — Changed-condition exercise

The system creates a bounded variation of the lived situation. It may change:

- the level of social pressure;
- the amount of time available;
- the information known at the time;
- the presence of support;
- the desired outcome;
- the role each person is playing;
- the consequence being considered.

The variation is clearly labelled as constructed. It gives the client a place to observe what changes when the conditions change.

## Screen 6 — Client report

The client compares the lived situation and the changed condition:

- What stayed the same?
- What changed?
- What became easier or harder?
- What did the exercise reveal about the original situation?
- What remains open?
- What would be useful to discuss with the practitioner?

The report contains the client's account, edited model reflection, response to the changed condition, transfer note, and a question or observation to carry into the next session.

## Screen 7 — Practitioner review

The practitioner report view organises:

- the routine assigned;
- the client's original situation;
- the client's response and corrections;
- the constructed exercise;
- what changed across the two conditions;
- recurring threads across previous routines;
- open questions for the next session;
- the client's own requested focus.

The practitioner can add a note, adjust the faculty focus, change the exercise difficulty, or create the next routine.

The report supports a session. It does not replace the practitioner's relationship, judgement, or clinical responsibility.

## Screen 8 — Progress across routines

Over time, the practitioner and client can review:

- situations explored;
- faculties involved;
- conditions that change a response;
- strategies that helped;
- strategies that created difficulty;
- questions that recur;
- changes the client endorses;
- transfer into real situations and agreed goals.

Progress is tied to the faculty and client goal being exercised. Engagement and time spent describe use; they do not describe development on their own.

## Screen 9 — What GenAI contributes

GenAI can provide:

- personalised follow-up questions;
- continuity across a client's situations;
- multiple interpretations for review;
- changed-condition scenarios;
- role-play and dialogue practice;
- future-consequence exploration;
- pattern retrieval across submitted reports;
- text and voice interaction;
- a structured draft for practitioner review.

The practitioner sets the direction. The client supplies the experience and chooses what to share. The model organises and adapts the routine.

## Screen 10 — Research and progress

Each workout has a research card that explains:

- the faculty being exercised;
- the human goal it may support;
- the exercise mechanism;
- the evidence status;
- what progress could look like;
- how transfer will be assessed;
- open questions for therapist and client review.

The category thesis separates research-backed foundations, promising mechanisms, trends to track, product hypotheses, and research gaps.

## Screen 11 — Privacy and practitioner control

The product works with intimate situations, emotional responses, personal patterns, and changes across time. The client controls what becomes part of the practitioner report. The practitioner controls the routine and review layer. Hosted inference and future on-device inference have separate documented privacy properties.

The current prototype validates the exercise, routine, report, safety, and distribution workflow using hosted inference. The research, validated routines, practitioner relationships, safety design, and distribution channels need to be ready when capable on-device models can support privacy-first personal AI products.

## First version

The first version demonstrates one complete practitioner-led routine:

```text
practitioner creates routine
→ client completes lived-situation exercise
→ client explores a changed condition
→ client submits a report
→ practitioner reviews and prepares the next routine
```

The broader workout floor remains visible as a research roadmap. Each additional workout earns its place through evidence, design, therapist review, client experience, and evaluation.

## The final story

> Room to Respond gives therapists and life coaches a way to create personalised mental workout routines for clients. Clients practise between sessions, share what they notice, and return with a clearer report. Practitioners use that report to guide the next conversation and the next workout.
