# Guided demo journey

The guided demo is the main way a reviewer understands Room to Respond. It follows one complete routine between a practitioner and a client.

Every step contains seeded demo content, including the client’s situation and response, model observations, client corrections, the constructed response, the report, practitioner feedback, and the next routine draft. The reviewer should be able to move through the whole story without creating an account or supplying private information.

## Demo story

Maya is working with a practitioner on creating more space before responding to criticism. The practitioner creates a short routine. Maya brings in a real work situation, reviews a provisional reflection, tries a changed condition, and sends an edited report back. The practitioner reads the report, gives feedback, and prepares the next routine.

## Journey

### 1. Practitioner suggests a routine

The reviewer enters the practitioner view and sees:

- the client goal: create more space before responding to criticism;
- the faculties being exercised: emotion awareness, metacognition, cognitive flexibility, and learning;
- the four exercises in order;
- what the client will bring back;
- the practitioner’s note about what to look for.

The primary action is **Assign this routine**. The routine then becomes available in the client view.

### 2. Client opens the shared routine

The reviewer switches to the client view and sees the assigned routine, its purpose, the four exercises, and the sharing boundary.

The client knows:

- why this routine was suggested;
- what to write about;
- what will be shared with the practitioner;
- that every generated reflection can be corrected before sharing.

The primary action is **Begin the routine**.

### 3. Client brings in a real situation

The guided demo shows Maya describing a real situation in one open writing space. The prompt asks for what happened in the client’s own words.

Optional prompts help the client add:

- what they felt or noticed in their body;
- what they thought or assumed;
- what they said or held back;
- what they did next;
- what they wanted, needed, or protected;
- what happened afterward;
- what they think about it now.

The reviewer can continue with Maya’s seeded account or replace it with their own text. The demo submits the seeded account for reflection.

### 4. Client reviews and corrects the reflection

The product shows Maya’s words first, followed by a small number of tentative observations. Each observation includes the evidence it came from and controls to mark it as:

- fits this moment;
- depends on context;
- needs work.

The guided demo includes Maya’s correction: “The important part is not becoming calm immediately. It is noticing that I have more than one possible next step.” The reviewer can edit this correction or write their own.

The reviewer should understand that the model is a mirror the client can correct. It is not presenting a personality label or a clinical conclusion.

### 5. Client completes a constructed exercise

The product presents one clearly labelled constructed situation. It changes one condition from the lived situation, such as having more time or trusted support available afterward.

The guided demo includes Maya’s response to the changed situation and her comparison with the lived account. The reviewer can edit both.

Maya records:

- what stayed the same;
- what changed;
- what became easier or harder;
- whether the exercise was useful;
- what should be carried forward.

The constructed situation is an exercise for noticing possibilities. It is not a prediction of how the client would behave.

### 6. Client submits an editable report

The report brings together:

- the routine and its purpose;
- the lived situation;
- the client’s corrections to the reflection;
- the constructed response;
- the comparison between the two situations;
- an open question or observation for the next session.

The guided demo shows the completed report before sharing. The reviewer can see what will be shared and can return to edit it.

The primary action is **Share report with practitioner**.

### 7. Practitioner reviews the report

The reviewer returns to the practitioner view and sees the submitted report organised around the routine:

- the client’s original account;
- the client’s corrections;
- what changed when the condition changed;
- the client’s own transfer note;
- open questions for the next session.

Client-authored content is visually distinct from model suggestions and practitioner notes.

### 8. Practitioner gives feedback and prepares the next routine

The guided demo includes a short practitioner feedback note:

> You noticed the urge to leave before deciding what you wanted to say. In our next routine, let’s practise one direct sentence while keeping that pause available.

The practitioner can then:

- keep the same faculty focus;
- add direct communication;
- change the condition in the next exercise;
- leave a question for the client;
- prepare the next routine.

The demo ends with the next routine in draft, making the loop visible.

## Guided-demo controls

The prototype uses seeded content for Maya so the reviewer can reach the aha moment quickly. The reviewer can move between practitioner view and client view using visible journey controls. The guided path should always make the next handoff obvious.

The demo does not require:

- account creation;
- a real client identity;
- a real therapist identity;
- private autobiographical information;
- a live model response.

The fixture fallback should still show the complete journey when hosted inference is unavailable.

## Acceptance test

The guided demo is complete when a new reviewer can answer these questions without explanation:

1. What is the practitioner trying to help the client practise?
2. What does the client do with a real situation?
3. How can the client correct the model?
4. Why is there a constructed situation?
5. What does the practitioner receive?
6. How does the practitioner use the report to shape the next routine?

Room to Respond should feel like one shared routine moving between two people, not a set of independent tools.
