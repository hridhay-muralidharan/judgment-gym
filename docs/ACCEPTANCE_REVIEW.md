# Room to Respond — acceptance review

This is the review standard for the finished guided prototype. A green build is necessary but insufficient.

## First-time reviewer test

Give the deployed prototype to a person who has not read the repository. Do not explain the product before they begin. After the landing page and after the guided demo, ask the questions below.

### Landing page

The reviewer should be able to answer:

- What is Room to Respond?
- Who uses it?
- What is the connection to a physical gym?
- What does the practitioner do?
- What does the client do?
- Why is the guided demo worth opening?

Failure condition: the reviewer describes it as a chatbot, journaling app, generic self-help tool, or AI therapist.

### Routine setup

The reviewer should be able to answer:

- What is being exercised?
- Why was this routine chosen?
- What will the client bring back?

Failure condition: the routine feels like a generic prompt list with no practitioner direction.

### Client exercise

The reviewer should be able to answer:

- What part is the client's real experience?
- What part is the model's suggestion?
- How can the client correct the suggestion?
- What is the purpose of the constructed situation?

Failure condition: the model appears to be diagnosing, profiling, or speaking with more authority than the client.

### Report and handoff

The reviewer should be able to answer:

- What will be shared with the practitioner?
- What did the client decide to keep or change?
- What can the practitioner learn from the report?

Failure condition: the report is a model summary that hides the client's own words or corrections.

### Practitioner feedback

The reviewer should be able to answer:

- How does the practitioner respond?
- How does that response shape the next workout?

Failure condition: the demo ends with a static report and does not show a continuing relationship.

## Persona review

### Practitioner

Can I understand the exercise, assign it, review the client's work, and shape the next routine?

### Client

Can I understand why I am doing this, work in my own words, correct the reflection, and control what is shared?

### Product manager

Can I identify the target relationship, core workflow, product mechanism, prototype proof, and open hypotheses?

### UX designer

Can a first-time user predict what happens next at every step? Are roles, authorship, status, and progress clear?

### UX writer

Does the copy sound like a person speaking to a practitioner or client? Are claims specific and appropriately certain?

### Visual designer

Does the hierarchy make the story legible? Does the visual system distinguish the client, model, constructed exercise, and practitioner without clutter?

### Full-stack developer

Does the implementation support the complete seeded journey reliably, with a fixture fallback, accessible controls, and a production-quality build?

## Release gates

The prototype can be deployed for review only when:

- the eight-step guided journey is complete;
- every step has seeded content;
- the landing page and guided demo tell the same product story;
- the reviewer can identify the practitioner-client handoff;
- model suggestions, client corrections, and practitioner feedback are visually distinct;
- no public copy makes unsupported audience, efficacy, or category claims;
- `npm run build` passes;
- the first-time reviewer test has been run on the deployed preview;
- remaining gaps are recorded rather than silently accepted.
