# Human Faculties Map

## Purpose

This document is the research starting point for the product. It asks which human faculties are important in daily life, how they function, what happens when they work poorly, how they can develop, and where GenAI may have a legitimate role.

The product structure, first workout, and eventual name should follow this map.

## First-principles model

People move through a recurring loop:

```text
Situation
→ attention and perception
→ interpretation and meaning
→ emotion and bodily response
→ memory and prior learning
→ motivation and values
→ judgment and choice
→ action and communication
→ feedback and learning
```

The faculties interact. A person may misread a situation because of attention, memory, emotion, social assumptions, motivation, or some combination. The product should preserve that complexity rather than assign every difficulty to one faculty.

## Evidence labels

- **Established construct:** widely studied and reasonably well-defined.
- **Development evidence:** research shows that the faculty or a related process can change through practice or intervention.
- **GenAI fit:** a preliminary assessment of whether conversational, personalised, scenario-based AI can deliver a useful exercise.
- **Transfer:** evidence that improvement carries into a different task or real-life setting. This is a high bar and remains uncertain for many cognitive training approaches.

## Candidate map

| Faculty | Role in human life | When it works poorly | When it works well | Development evidence | Preliminary GenAI fit | Initial decision |
| --- | --- | --- | --- | --- | --- | --- |
| Attention and cognitive control | Select relevant information, resist distraction, pause, and stay with a task | Reactivity, distraction, impulsive responding, difficulty completing intentions | Focus, pausing, prioritisation, deliberate response | Executive functions are established and trainable in some conditions; transfer varies | Limited for a text-first product; stronger when paired with real-world tasks and reminders | Research, do not make a core workout yet |
| Working memory and mental manipulation | Hold information in mind and work with it while solving a problem | Losing the thread, difficulty comparing options, overload | Keeping context active, integrating information, handling complexity | Working-memory training has mixed evidence for far transfer | Weak as a direct conversational workout | Defer as a standalone workout |
| Cognitive flexibility | Shift perspective, strategy, or interpretation when conditions change | Rigidity, getting stuck, repeating a response after it stops working | Adaptation, perspective change, creative alternatives | Cognitive flexibility is a recognised executive function; development and transfer need careful testing | Promising through changed-condition and role-reversal scenarios | Candidate workout |
| Emotion awareness and regulation | Detect, understand, tolerate, and influence emotional responses | Escalation, avoidance, rumination, suppression, impulsive action | Naming emotions, choosing a response, recovering, acting with more range | Emotion regulation is a central intervention mechanism; digital interventions are being studied | Strong for guided reflection and situation-based rehearsal, with clinical safety boundaries | Strong candidate |
| Metacognition | Notice how one is thinking, assess confidence, identify uncertainty, and revise a strategy | Overconfidence, false certainty, poor error detection, repeating ineffective strategies | Calibration, reflection, error learning, strategy revision | Systematic reflection improved discovery of far-sighted decision strategies in an experiment | Strong for structured reflection, feedback, and comparison | Strong candidate |
| Autobiographical memory and meaning-making | Connect experiences across time and create continuity and meaning | Fragmented accounts, one-sided meaning, difficulty seeing change or patterns | More coherent recall, richer context, flexible meaning-making | Elaborative and evaluative remembering supports detailed and coherent autobiographical narratives; causal adult outcomes need further study | Strong for lived-account capture; risks include distortion and overinterpretation | Candidate foundation, not a workout by itself |
| Motivation, agency, and goal regulation | Choose aims, sustain effort, adjust goals, and act under constraints | Drifting, externally driven action, avoidance, stuck goals, repeated abandonment | Self-endorsed goals, persistence, flexible adjustment, agency | Self-regulation and motivation are established research areas; interventions vary by context | Conditional fit through values clarification, goal reflection, and action review | Candidate workout |
| Values and practical wisdom | Decide what matters and how to act when values conflict | Status-driven action, unclear priorities, regret, value conflict | Clearer priorities, trade-off awareness, value-aligned action | Self-determination and values research connect motivation quality with wellbeing and functioning | Promising for reflective dilemmas; evidence for AI-delivered change needs study | Candidate workout |
| Social cognition and perspective-taking | Understand other people, intentions, viewpoints, and social context | Misreading intent, egocentric interpretation, conflict escalation | Perspective-taking, empathy, clearer communication | Social cognition is established, but its components do not form one agreed taxonomy | Promising through role reversal and dialogue rehearsal; risks stereotyping and false confidence | Candidate workout with expert review |
| Imagination and prospection | Simulate possible futures, consequences, and alternative actions | Short-sightedness, difficulty planning, narrowed options | Foresight, contingency planning, creative options | Future-event simulation supports planning and decision-making; quality and accuracy vary | Strong for bounded scenario generation and comparison | Candidate capability across workouts |
| Learning and adaptation | Update beliefs and behaviour from feedback and experience | Repeating errors, defensive response to feedback, learned helplessness | Experimentation, feedback use, strategy change | Learning and metacognition research provide strong foundations; transfer must be measured | Strong as a cross-workout loop rather than a separate workout | Cross-cutting capability |

## Strongest initial opportunities

The first research pass suggests four areas with the clearest combination of human importance, development evidence, and GenAI fit:

1. **Emotion awareness and regulation** — lived situations, emotional sequence, response options, and bounded rehearsal.
2. **Metacognition** — confidence, assumptions, uncertainty, error, and strategy revision.
3. **Cognitive flexibility and prospection** — changed conditions, alternative interpretations, future consequences, and scenario comparison.
4. **Autobiographical meaning-making** — organising experiences across time and noticing continuity, change, and meaning.

These are provisional research priorities. They are not yet the final workout list.

## Faculties that should remain connected

Motivation, values, social cognition, and learning should remain connected to the first prototype because they shape what a person notices, wants, chooses, and learns. They should not be added as separate workouts until their exercises and measures are clear.

Attention and working memory are important human faculties. A text-first conversational product has a weaker natural fit for directly training them. They may become relevant through practice design, voice, mobile interaction, or integration with real-world tasks.

## A first workout candidate

The strongest current candidate is a combined workout rather than a single-faculty exercise:

```text
Lived situation
→ emotion and thought sequence
→ assumptions and confidence
→ alternative interpretation or changed condition
→ response comparison
→ future consequence
→ action or question to carry into life
```

This combines emotion awareness, metacognition, cognitive flexibility, prospection, and learning. The research task is to determine whether combining them improves the exercise or makes the product too vague.

## Research sources

- [Diamond, Executive Functions](https://doi.org/10.1146/annurev-psych-113011-143750)
- [Sheppes, Suri, and Gross, Emotion Regulation and Psychopathology](https://doi.org/10.1146/annurev-clinpsy-032814-112739)
- [Bjureberg, The Role of Emotion Regulation in Clinical Interventions](https://doi.org/10.1146/annurev-clinpsy-061324-072853)
- [Becker et al., Systematic Metacognitive Reflection and Decision Strategies](https://doi.org/10.1017/jdm.2023.16)
- [Sunderaraman et al., Self-awareness for Financial Decision-making](https://doi.org/10.1371/journal.pone.0235558)
- [Fivush, The Development of Autobiographical Memory](https://doi.org/10.1146/annurev.psych.121208.131702)
- [Heckhausen, Wrosch, and Schulz, Agency and Motivation in Adulthood and Old Age](https://doi.org/10.1146/annurev-psych-010418-103043)
- [Deci, Olafsen, and Ryan, Self-Determination Theory in Work Organizations](https://doi.org/10.1146/annurev-orgpsych-032516-113108)
- [The Structure of Social Cognition](https://doi.org/10.1146/annurev-psych-010416-044046)
- [Hassabis and Maguire, The Role of the Hippocampus in Prediction and Imagination](https://doi.org/10.1146/annurev.psych.60.110707.163508)

These sources establish constructs and research directions. They do not validate a Judgment Gym intervention. Product claims require testing the specific exercise, population, and outcome.
