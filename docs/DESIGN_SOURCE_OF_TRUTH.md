# Room to Respond — design source of truth

This document governs the prototype's visual and interaction decisions. It is written for the person building the interface and the person reviewing it for the first time.

## Design objective

Make the practitioner-client relationship and the workout sequence understandable within seconds. The interface should feel calm, clear, and considered. It should create enough room for personal material without becoming empty or abstract.

## Information hierarchy

Every screen should answer these questions in order:

1. Where am I in the routine?
2. Who is acting now?
3. What am I being asked to notice or do?
4. What material am I reviewing?
5. What happens next?

The interface should present one primary idea per screen. Supporting explanation belongs near the action that needs it.

## Public landing page

The landing page must explain the category and the product before asking the reviewer to enter the demo.

It should communicate this sequence:

1. Physical gyms organise workouts for physical muscles.
2. Modern life has reduced some built-in physical activity and created a need for dedicated physical workouts.
3. Modern life also puts pressure on how people pay attention, regulate emotion, decide, communicate, and adapt.
4. Room to Respond applies the workout idea to mental faculties.
5. A practitioner creates a routine and a client works through it using real and constructed situations.
6. The guided demo shows the complete loop.

The landing page should use direct language. It should not lead with internal product terminology, research taxonomy, privacy architecture, or a list of abstract capabilities.

## Guided demo layout

The demo should have:

- a persistent routine progress indicator;
- a clear practitioner/client role marker;
- a short explanation of the current exercise;
- the seeded content that demonstrates the exercise;
- a visible handoff when the routine moves between practitioner and client;
- a single primary next action;
- a compact context panel showing the workout focus and faculties.

The progress indicator should describe the story, for example: “Set direction → Work through a situation → Review the report → Shape the next workout.” It should not expose implementation names such as `practitioner`, `reflection`, or `constructed` without explanation.

## Content hierarchy

Use these labels consistently:

- **Practitioner direction** — what the practitioner wants to exercise.
- **Your situation** — the client's lived account.
- **What the reflection noticed** — model suggestions.
- **Your correction** — the client's response to the model.
- **A different condition** — the constructed exercise.
- **Your report** — the client-controlled material shared with the practitioner.
- **Practitioner feedback** — the response that shapes the next routine.

Avoid clinical labels, personality labels, diagnostic language, and opaque AI labels.

## Visual treatment

- Keep the existing strength of generous white space.
- Use a restrained visual system with clear type hierarchy and few competing accents.
- Use visual differences to explain authorship and status, not as decoration.
- Give client words the greatest visual authority in reflection screens.
- Make model suggestions visibly tentative without making them visually weak or alarming.
- Make the constructed exercise visually distinct before the client responds.
- Make the report feel editable and owned by the client.
- Make the practitioner response feel like a continuation of the same routine.

## UX writing rules

- Write like a thoughtful practitioner explaining one exercise to a client.
- Prefer “What happened?” to “Describe the lived scenario.”
- Prefer “What did you feel, think, say, and do?” to “Capture your internal and external response.”
- Prefer “Does this fit?” to “Validate the model output.”
- Prefer “Try the same moment with more time to respond” to “Generate a counterfactual variation.”
- Prefer “What changed?” to “Compare response differentials.”
- Never claim that a model has discovered a trait, diagnosis, or hidden truth.
- Never say that a person uses faculties “to meet life.” Name the situation.

## Visual acceptance standard

The prototype is not ready when it merely looks clean. It is ready when a first-time reviewer can understand the relationship, the workout, the role of GenAI, the client control, and the practitioner feedback loop without external explanation.
