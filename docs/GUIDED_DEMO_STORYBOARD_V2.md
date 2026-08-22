# Guided demo storyboard v2

## Purpose

The guided demo should let a first-time reviewer understand Room to Respond without reading the repository or learning the product vocabulary.

The reviewer follows one prepared story about Maya and her practitioner. Nothing needs to be written. Every screen answers three questions:

1. Who is acting now?
2. What is happening in this part of the routine?
3. What happens next?

## The landing page

### Main message

**Train your mind like you train your body.**

**A practitioner creates a mental workout. A client exercises it through the moments that shape life.**

This is the first explanation of the product. The landing page should then explain the development side of mental health, the physical-gym parallel, the practitioner-led solution, and the role of GenAI.

### Primary action

**Follow Maya’s guided routine**

Supporting text:

> This is a prepared demo. You can follow the full journey without entering anything.

### How it works

Show three large, plain-language stages:

| Stage | What the reviewer understands |
| --- | --- |
| **Set a direction** | A practitioner chooses what the client will practise. |
| **Work through a moment** | The client brings in a real situation, checks what the reflection picked up, and tries one change. |
| **Review and continue** | The client shares what they noticed. The practitioner responds and prepares the next routine. |

### Demo context

Show the prepared story before the reviewer starts:

> **Maya’s focus:** make more space before responding to criticism.
>
> You will see a practitioner suggest a routine, Maya work through a difficult review meeting, and the practitioner use her report to shape what comes next.

This gives the reviewer the reason for the journey before the first click.

## Persistent journey frame

The guided experience uses one consistent shell.

### Header

Left: `Maya’s routine`

Right: `Guided demo · Step 1 of 8`

### Phase progress

Show three phases rather than eight equal navigation items:

```text
Set a direction  →  Work through a moment  →  Review and continue
```

The current phase is active. Completed phases remain visible. Future phases are visible but quiet.

### Current-turn label

Every screen has a clear label:

- `Practitioner’s turn`
- `Maya’s turn`
- `Back to the practitioner`

This label should appear before the screen title, not be hidden in navigation.

### Action rule

Each screen has one primary action. The button says what the reviewer is about to see:

- `See Maya’s routine`
- `See what Maya brings in`
- `See the reflection`
- `Try one thing changed`
- `Read Maya’s report`
- `See the practitioner’s response`
- `See what comes next`

## Guided steps

### Step 1 — Practitioner sets a direction

**Turn:** Practitioner’s turn

**Title:** Choose what Maya will practise

**Explanation:** Maya wants to create more space before responding to criticism. The practitioner turns that goal into a short routine.

**Visible content:**

- Maya’s focus;
- four exercises;
- a short practitioner note;
- what Maya will bring back.

**Primary action:** `See Maya’s routine`

### Step 2 — Maya sees the routine

**Turn:** Maya’s turn

**Title:** Maya knows what she is practising

**Explanation:** The routine gives Maya a clear reason to begin and shows how the work will return to the next session.

**Visible content:**

- the routine purpose;
- the four exercises in simple language;
- the sharing boundary.

**Primary action:** `See what Maya brings in`

### Step 3 — Maya brings in a real moment

**Turn:** Maya’s turn

**Title:** Start with what happened

**Explanation:** Maya brings in a difficult review meeting and describes what she felt, thought, said, did, and wanted.

**Visible content:**

- the full seeded account;
- selected details from the account;
- a visible `Maya wrote this` label.

**Primary action:** `See the reflection`

### Step 4 — Maya checks what the reflection picked up

**Turn:** Maya’s turn

**Title:** See what the reflection picked up

**Explanation:** The reflection suggests two possible threads from Maya’s account. Maya’s words stay beside them, and the suggestions remain open to correction.

**Visible content:**

- Maya’s account;
- two plain-language reflection cards;
- `This came from the reflection` label;
- Maya’s prepared correction.

Avoid leading with “metacognition”, “emotion awareness”, or “model-suggested observations”. If needed, show the faculty name as a small secondary label.

**Primary action:** `Try one thing changed`

### Step 5 — Maya tries one thing changed

**Turn:** Maya’s turn

**Title:** Try the same moment with one thing changed

**Explanation:** The situation stays familiar, but Maya has more time and someone she trusts to talk to afterward.

**Visible content:**

- a clear `A practice version of the situation` label;
- the changed condition;
- Maya’s prepared response;
- what changed and what stayed the same.

Avoid “constructed situation” as the main heading. It can appear in supporting text if needed.

**Primary action:** `Read Maya’s report`

### Step 6 — Maya prepares what to bring back

**Turn:** Maya’s turn

**Title:** Put the useful parts in one report

**Explanation:** Maya sees the account, the reflection she corrected, what changed, and the question she wants to carry into the next session.

**Visible content:**

- lived moment;
- Maya’s correction;
- changed condition;
- open question;
- `Maya wrote this` and `From the reflection` labels where relevant.

**Primary action:** `See the practitioner’s response`

The demo treats the report as already shared. The reviewer should not need to click through a simulated permission dialog.

### Step 7 — Practitioner responds

**Turn:** Back to the practitioner

**Title:** The practitioner sees what changed

**Explanation:** Maya’s report gives the practitioner something concrete to discuss and a direction for the next exercise.

**Visible content:**

- what changed;
- what stayed open;
- Maya’s question;
- practitioner feedback;
- clear authorship labels.

**Primary action:** `See what comes next`

### Step 8 — The next routine is ready

**Turn:** Practitioner’s turn

**Title:** The next routine grows from the report

**Explanation:** The practitioner keeps the useful focus, adds direct communication, and shapes the next exercise around the pause Maya noticed.

**Visible content:**

- the next routine title;
- what stays from the first routine;
- what is newly added;
- the complete loop in one line.

**Primary action:** `Run the demo again`

## Language map

| Current internal wording | Guided-demo wording |
| --- | --- |
| Practitioner workspace | Practitioner’s turn |
| Client view | Maya’s turn |
| Model review | See what the reflection picked up |
| Tentative observations | Possible threads |
| Model-suggested observations | From the reflection |
| Constructed situation | A practice version of the situation |
| Client report | What Maya brings back |
| Practitioner review | The practitioner sees what changed |
| Mental faculties | The parts of the mind this routine exercises |
| Cognitive flexibility | Trying one thing changed |
| Metacognition | Checking the first story |
| Emotion awareness | Noticing feelings and body signals |

## Completion test

After the redesign, a reviewer should be able to answer these questions from the interface alone:

- What is Room to Respond?
- Who is the product for?
- What is the practitioner doing?
- What is the client doing?
- Why does the client try a changed version of the situation?
- What comes back to the practitioner?
- How does the next routine follow from the report?

If the reviewer needs the repository, a tooltip, or verbal explanation to answer one of these, the information architecture or copy is not finished.
