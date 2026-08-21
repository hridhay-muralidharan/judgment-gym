# Room to Respond

Room to Respond is a research prototype for turning real-life situations into short, structured practices for noticing, understanding, choosing, and adapting. It is designed to support reflection, not to replace therapy or make clinical judgments.

Modern life reduced some of the physical activity built into daily life. Cars replaced some walking. Elevators replaced some climbing. Machines reduced some manual work. This contributed to physical inactivity, which is studied in relation to urban design, transport, and access to public space ([WHO Global status report on physical activity](https://www.who.int/publications/i/item/9789240059153)).

Physical gyms provide physical workouts for physical muscles. They bring different exercises together in a practical routine.

## Why a gym for mental faculties?

Modern life also changes how people use their minds:

- social media, notifications, and smartphones compete for attention. Experimental research has found measurable attention costs from smartphone presence, while the wider claim of universally shorter attention spans remains unsettled ([study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10249922/));
- digital environments shape how people experience, express, and regulate emotion. Research finds a relationship between emotion dysregulation and problematic smartphone use, with meaningful variation across studies ([systematic review and meta-analysis](https://pubmed.ncbi.nlm.nih.gov/36497921/));
- search, recommendation systems, and generative AI make it easier to offload remembering, comparing, drafting, and deciding. Research on cognitive offloading shows that external tools change the demands placed on memory and metacognition ([review](https://pmc.ncbi.nlm.nih.gov/articles/PMC9971128/));
- faster communication and more complex work create more frequent social and practical judgments.

These pressures show up together in real situations. A difficult conversation can involve attention, emotion regulation, memory, perspective, judgment, communication, and learning at the same time.

Room to Respond explores mental workouts for mental faculties. The aim is to bring the relevant exercises together into a practical routine for the way a person is meeting a situation.

## What are the mental faculties and how do we organise them?

The first working map groups faculties by the part they play in meeting a situation:

- **Notice** — attention, perception, emotion awareness, and bodily signals. Executive-function research describes attention, inhibition, and cognitive control as core capacities for selecting what matters and pausing before responding ([Diamond](https://doi.org/10.1146/annurev-psych-113011-143750)). Emotion-regulation research adds the importance of identifying emotional responses and the point at which a person can influence them ([Gross](https://doi.org/10.1080/1047840X.2014.940781)).
- **Understand** — memory, meaning-making, metacognition, assumptions, and perspective. Autobiographical-memory research describes how people connect experiences with identity and life narratives ([Fivush](https://doi.org/10.1080/00207594.2011.596541)); metacognition helps people examine how they reached a conclusion.
- **Choose** — values, motivation, judgment, decisions, and self-regulation. Self-determination research connects autonomy, competence, and relatedness with motivation and wellbeing ([Deci, Olafsen, and Ryan](https://doi.org/10.1146/annurev-orgpsych-032516-113108)). Decision research shows that structured reflection can improve the discovery of far-sighted strategies ([Becker et al.](https://doi.org/10.1017/jdm.2023.16)).
- **Adapt** — cognitive flexibility, imagination, foresight, feedback, and learning. Executive-function research identifies flexibility as a core capacity, while prospection research connects imagining possible futures with planning and action ([Diamond](https://doi.org/10.1146/annurev-psych-113011-143750); [Szpunar](https://pmc.ncbi.nlm.nih.gov/articles/PMC4074678/)).

These are Room to Respond's working groups, not an established taxonomy of the psyche. They bring together constructs studied in different research traditions so a workout can follow a real situation from perception through action and learning. A single situation can move through all four.

## Prototype: one mental workout

The current prototype asks a person to bring in one real situation. They describe what happened, what they felt, thought, said, did, wanted, and noticed afterward.

The system then:

1. reflects back a few tentative observations;
2. lets the person keep, revise, or reject each one;
3. changes one condition in the situation, such as the amount of time or support available;
4. asks the person to imagine how they might respond in that changed situation;
5. compares the two responses and asks what could be useful in real life.

This workout currently invites practice in:

- emotion awareness — noticing feelings and bodily responses;
- metacognition — examining thoughts, assumptions, and certainty;
- cognitive flexibility — trying another interpretation or response;
- prospection — considering what may happen next;
- learning — comparing responses and carrying forward a question or strategy.

Memory, values, social cognition, and meaning-making may appear in the account, but the current prototype does not claim to develop each of them directly. More research is needed to determine whether these prompts develop any faculty, which outcomes they affect, and how exercises for a wider range of faculties can be combined into efficient mental workout routines.

## The practice loop

```text
Situation
→ notice what is happening
→ understand the response
→ choose a faculty to exercise
→ try a bounded variation
→ compare what changes
→ carry the learning back into life
```

The system can help a person examine feelings, body responses, thoughts, assumptions, wants, values, words, actions, consequences, and later meaning. It keeps interpretations provisional and gives the person control over what fits, what changes, and what remains unresolved. The changed situation is a hypothetical exercise, not exposure therapy, a prediction, or evidence of a stable trait.

## Why GenAI marks the inflection point for Room to Respond

GenAI marks an inflection point because it can build a workout around the person's own situation rather than giving everyone the same exercise. It can:

- ask questions about a specific situation;
- follow the person's own words and context;
- hold a thread across multiple exercises;
- offer alternative interpretations;
- change one condition in a situation;
- rehearse a conversation or response;
- explore possible consequences;
- support text and future voice interactions;
- help compare what changed over time.

The person supplies the experience, reviews the interpretation, and decides what to carry forward. The research question is whether this personalisation improves the quality, consistency, and transfer of mental practice. The risks are equally important: a model can misread an account, intensify rumination, create false confidence, or make a person outsource self-interpretation.

The [Human Faculties Map](docs/HUMAN_FACULTIES_MAP.md) is the current research starting point. It includes attention and cognitive control, emotion regulation, metacognition, autobiographical memory, motivation, values, social cognition, imagination, and learning.

The [Modern life and mental faculties](docs/MODERN_LIFE_AND_MENTAL_FACULTIES.md) document explains the physical-gym origin, the evidence for environmental pressure on selected faculties, and the boundaries of the analogy. The [Professional journey model](docs/PROFESSIONAL_JOURNEY_MODEL.md) describes how a private long-form account can become an evidence-linked model of change across contexts.

## When should a privacy-first product go to market?

Some workouts become more valuable when the system can remember a person's situations and patterns over time. Those workouts also involve sensitive material.

Today, people may hesitate to place intimate memories, emotional patterns, voice recordings, and personal models inside a third-party product whose infrastructure, retention, access, business incentives, or foundation-model relationships they cannot fully control.

The go-to-market trigger is a hypothesis: capable language models may eventually run offline on personal devices with reasoning quality that is useful for this work. Until that is possible and validated, sending intimate longitudinal material to a hosted product remains a major trust barrier.

Until that point, Room to Respond needs to have the following in place:

- validated workouts and outcome measures;
- therapist and user review of model behaviour and safety boundaries;
- a user-controlled model of experiences, faculties, changes, and uncertainty;
- text and voice interaction designs;
- local storage, deletion, encryption, selective sharing, and recovery flows;
- a portable model layer that can move from hosted to on-device inference;
- distribution relationships with therapists, digital-therapy companies, and mental-health organisations.

The current prototype uses hosted inference when configured. It prepares the interaction and research foundation; it does not claim to provide on-device privacy today.

## What the current prototype does

A person brings in a real event that still feels important, confusing, charged, or unfinished. The prototype asks them to describe what happened and what they felt, thought, said, did, wanted, and noticed afterward.

The AI offers a few tentative observations. The person can accept them, qualify them, reject them, or add something the AI missed. The prototype then creates a changed version of the situation. The person responds to that version and compares it with the original.

The result is a small record of what may repeat, what changes with context, and what the person wants to keep exploring. A separate journey view can organise a longer personal or professional account into periods, faculties, possible changes, and open questions.

This is a research prototype. It shows how a mental workout might feel; it does not yet prove that the workout develops a faculty or improves mental health.

## Boundaries

Room to Respond is not a therapist, diagnostic system, crisis service, risk assessor, treatment recommender, personality test, or substitute for professional care. Constructed situations are exercises for observation and reflection. They are not tests of personality or reality. The system must not infer clinical states from text, voice, pauses, accent, or emotional tone.

## Documentation

- [Human Faculties Map](docs/HUMAN_FACULTIES_MAP.md)
- [Product storyboard](docs/PRODUCT_STORYBOARD.md)
- [Product thesis](docs/PRODUCT_THESIS.md)
- [Self-model research basis](docs/SELF_MODEL_RESEARCH.md)
- [Modern life and mental faculties](docs/MODERN_LIFE_AND_MENTAL_FACULTIES.md)
- [Professional journey model](docs/PROFESSIONAL_JOURNEY_MODEL.md)
- [Agent model](docs/AGENT_MODEL.md)
- [Frontend journey](docs/FRONTEND_JOURNEY.md)
- [Lived-to-constructed journey](docs/SCENARIO_JOURNEY.md)
- [Privacy and safety](docs/PRIVACY_AND_SAFETY.md)
- [Evaluation plan](docs/EVALUATION_PLAN.md)
- [Therapist review packet](docs/THERAPIST_REVIEW_PACKET.md)
- [Product name review](docs/PRODUCT_NAME_REVIEW.md)
- [Product naming research](docs/NAME_RESEARCH.md)
- [Architecture](docs/ARCHITECTURE.md)

## Run locally

```bash
npm install
npm run dev
```

The app works with a fixture fallback by default. To enable the hosted model route, copy `.env.example` to `.env`, add `OPENAI_API_KEY`, and restart the dev server. The key is read only by `api/reflect.ts`.

```bash
npm run build
```

The public repository contains no private autobiographical material, private conversations, or API credentials.
