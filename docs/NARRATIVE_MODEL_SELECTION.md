# Narrative model selection for Room to Respond

## Why this document exists

The prototype has been receiving local improvements while losing the larger story. This document defines the model used to keep the category, buyer, product, and demo connected.

## Repository truths to preserve

The repository already establishes these points:

1. Mental health has a development side alongside curative care.
2. Modern life creates reasons to deliberately develop attention, emotion regulation, judgment, communication, flexibility, foresight, and learning.
3. Physical gyms make physical workouts practical by bringing exercises together for specific muscles and goals.
4. Room to Respond applies that organising idea to mental faculties.
5. Practitioners create personalised mental workout routines.
6. Clients exercise those routines through real and simulated situations.
7. GenAI adapts the routine to the person’s context, words, and changes over time.
8. The guided practitioner-client loop is the first product demonstration, not the whole category.

## Candidate models researched

### 1. Positioning and category model

Positioning frameworks ask what category the product belongs to, who it is for, what alternative people use today, and what differentiated value it provides. April Dunford’s positioning work is useful because it forces the product story to connect category, best-fit customer, alternatives, differentiated capability, and value ([Positioning](https://www.aprildunford.com/category/positioning)).

**Useful for Room to Respond:** defining mental fitness as a development category and making the practitioner the buyer.

**Insufficient on its own:** it does not explain the sequence of understanding inside the product or the client’s experience.

### 2. Jobs-to-Be-Done

Jobs-to-Be-Done focuses on the progress a person is trying to make and why they choose a solution in a particular situation. The framework is useful for avoiding feature-led product descriptions and identifying the real job behind a request ([Harvard Business Review](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done)).

**Useful for Room to Respond:** separating the practitioner’s job from the client’s job.

```text
Practitioner job:
Help a client deliberately develop a mental faculty through a routine that can be reviewed and adapted.

Client job:
Use a real situation to notice, try, and carry forward a more useful way of meeting life.
```

**Insufficient on its own:** it does not provide the category story or the interface hierarchy.

### 3. User mental-model and information-architecture model

Users approach a new product with an existing mental model. The interface needs to introduce the new model gradually, use familiar relationships, and keep the current task clear. Information hierarchy is particularly important when the content itself is cognitively demanding.

**Useful for Room to Respond:** making “mental workout” understandable through the familiar physical-gym model before introducing faculties, research constructs, or GenAI.

**Insufficient on its own:** it does not define the buyer’s value proposition or the category opportunity.

### 4. Cognitive-load and progressive-disclosure model

Cognitive-load theory distinguishes between the complexity of the subject and the unnecessary complexity introduced by presentation. Interface hierarchy and contextual guidance can reduce the effort users spend figuring out how to proceed ([Sweller, van Merriënboer, and Paas](https://doi.org/10.1016/0959-4752%2894%2990003-5); [HCI cognitive-workload survey](https://doi.org/10.1145/3582272)).

**Useful for Room to Respond:** reveal the product in layers: category first, then routine, then one exercise, then the report.

**Insufficient on its own:** it helps the experience make sense but does not create the founder narrative.

## Selected synthesis

Room to Respond needs a layered model that combines the strengths of all four approaches:

```text
CATEGORY
What new shift is happening?
        ↓
NEED
What human development problem follows from that shift?
        ↓
BUYER JOB
What does the practitioner need to help the client do?
        ↓
PRODUCT MODEL
How does a mental workout organise that work?
        ↓
GENAI MECHANISM
Why can this become personal, adaptive, and useful now?
        ↓
VISIBLE PROOF
What does one workout look like in practice?
        ↓
NEXT ACTION
What should the reviewer understand or do next?
```

This is the working **Category-to-Aha model**.

## Room to Respond through the model

### Category

Mental health is expanding from a primarily curative frame toward active development of the mental faculties people use to meet life.

### Need

People need practical, repeatable ways to develop those faculties. A list of faculties or isolated advice does not create a workout.

### Buyer job

Therapists and life coaches need a way to create structured, personalised routines that clients can exercise through situations and review together.

### Product model

Room to Respond is a gym for the mind. It brings exercises for different faculties into a practical routine around a person’s goals and situations.

### GenAI mechanism

GenAI can adapt the exercise to the client’s own words, connect real situations with bounded variations, hold useful context, and prepare a reviewable report. The practitioner sets the direction and interprets the work.

### Visible proof

The guided demo shows one mental workout:

```text
development goal
→ practitioner-created routine
→ real situation
→ reflection and correction
→ changed condition
→ report
→ practitioner feedback
→ next routine
```

### Next action

The reviewer should leave understanding the category, the practitioner’s role, the client’s role, and why the guided workout is a credible first demonstration.

## Application rules

### Landing page

Follow the full Category-to-Aha sequence. The landing page earns attention with the category shift and uses the guided demo as proof.

### Guided demo

Begin with the development goal and the practitioner-created workout. Do not begin with the between-session logistics. Those are part of the proof sequence.

### Interface

Use the physical-gym model to make the new product understandable. Use progressive disclosure to introduce faculties, GenAI, and evidence only when they become relevant.

### Copy

Every local sentence must answer to the layer above it. A button, label, or card can focus attention, but it cannot redefine the product around a smaller use case.

## Coherence test

Before changing or deploying any artifact, ask:

1. Which Category-to-Aha layer does this change serve?
2. Does the change preserve the layers above and below it?
3. Would a first-time reviewer understand the product without repository context?
4. Is the guided demo proving the product model or merely showing a workflow?
5. Does the final screen make the larger category feel more credible?
