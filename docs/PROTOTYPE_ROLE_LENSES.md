# Prototype role lenses

The prototype is reviewed through five roles. Each role starts from the repository’s product thesis and extracts a different responsibility. The final interface must satisfy all five at the same time.

## Product Manager

### Goal

Make the practitioner-client loop understandable and testable in one guided journey.

### Repository signals

- The practitioner creates a personalised routine.
- The client practises between sessions using a real situation and a constructed variation.
- The client edits the model’s reflection before sharing.
- The practitioner reviews the report and prepares the next routine.
- The first version should prove one routine end to end.

### Product decisions

- The guided demo is the primary product story.
- The routine, not the model response, is the unit of continuity.
- The report is the handoff between client and practitioner.
- Practitioner feedback is the final step of the first loop.
- The prototype is a guided demo for gathering feedback, not an open self-service product.

### Success criteria

A new reviewer can follow the routine from assignment to practitioner feedback and explain the value in their own words.

## UX Designer

### Goal

Make each handoff clear, safe, and easy to complete.

### Journey requirements

- Start with the practitioner’s purpose and the client’s goal.
- Keep the client’s lived account before model interpretation.
- Make tentative observations editable and rejectable.
- Label constructed situations clearly.
- Show what will be shared before submission.
- Keep client content, model suggestions, and practitioner feedback distinct.
- Make the next action obvious without hiding the wider journey.
- Preserve the same routine context as the reviewer switches roles.

### Required states

- draft routine;
- assigned routine;
- client in progress;
- model reflection ready;
- client corrections added;
- constructed exercise in progress;
- report ready to share;
- report shared;
- practitioner review ready;
- practitioner feedback saved;
- next routine in draft;
- hosted model unavailable with a complete fixture fallback.

### Success criteria

The reviewer always knows whose view they are in, what part of the routine they are completing, what is private, and what happens next.

## UI Designer

### Goal

Give the journey one visual language that feels calm, human, and useful for a therapy or coaching context.

### Visual principles

- Use one continuous workspace rather than unrelated page treatments.
- Give the routine a persistent visual spine: purpose, exercises, current step, report state.
- Give authored material the strongest visual weight.
- Use restrained borders and surfaces to separate roles and content types.
- Use one accent consistently for active progress and actions.
- Keep research language secondary to the human task.
- Make the practitioner and client views feel like two sides of the same product.
- Use motion only for meaningful state changes: assignment, handoff, completion, and feedback.

### Component inventory

- journey header with role and routine state;
- routine step rail;
- practitioner routine builder;
- client routine handoff;
- lived-account editor;
- tentative observation row;
- constructed-situation panel;
- report preview;
- practitioner feedback composer;
- next-routine draft;
- privacy and sharing boundary.

### Success criteria

The interface communicates continuity before the reviewer reads every word. The visual system supports trust, authorship, and progress without scores, streaks, or gamification.

## Full Stack Developer

### Goal

Make the guided journey work reliably with fixture data first and hosted inference as an optional enhancement.

### Technical requirements

- Model the routine, participant role, current step, report, feedback, and next-routine draft as explicit state.
- Keep practitioner and client views connected to the same seeded routine.
- Make every guided transition work without an API key.
- Keep hosted reflection behind the existing API boundary.
- Preserve local persistence, export, reset, and import behaviour.
- Keep client sharing explicit in the local prototype state.
- Do not commit private autobiographical content or credentials.
- Keep the guided state explicit so future product work can later support real links, permissions, authentication, and secure sharing.

### Success criteria

The complete guided path can be tested from a clean browser state, the fallback path produces a meaningful report, and the build remains type-safe and deployable.

## UX Writer

### Goal

Make the guided demo understandable, humane, and precise at every handoff.

### Repository signals

- The client’s lived experience comes before model interpretation.
- Model observations are tentative and always open to correction.
- Constructed situations are exercises for exploration, not predictions.
- The report belongs to the client before it is shared with the practitioner.
- Practitioner feedback guides the next routine.
- The prototype is for feedback, so the reviewer should never wonder what to type or what a control will do.

### Writing decisions

- Use “guided demo” consistently for the seeded review path.
- Use “routine” for the full sequence and “exercise” for an individual step.
- Use “lived situation” for Maya’s account and “constructed situation” for the changed-condition exercise.
- Say what the reviewer is seeing before asking them to continue.
- Make authorship visible: client-authored, model suggestion, and practitioner-authored.
- Use plain verbs: assign, open, describe, review, correct, compare, share, respond, prepare.
- Avoid clinical labels, personality claims, diagnostic language, and inflated AI language.
- Keep the reviewer oriented with one clear next action per step.

### Copy system

Every guided step should contain:

1. a role and step label;
2. a short title that states what is happening;
3. one sentence explaining why it matters;
4. visible seeded content;
5. one action that advances the journey;
6. a short handoff label explaining what comes next.

### Success criteria

A reviewer can tell who is speaking, what kind of content they are reading, whether the content is lived or constructed, what is provisional, and why the next step follows.

## Synthesis

The five roles converge on one product shape:

```text
one routine
→ two connected views
→ one lived situation
→ one reviewable model
→ one constructed exercise
→ one shared report
→ one practitioner response
→ one next routine
```

The implementation should be rebuilt around this sequence. Existing screens and components are references, not constraints.
