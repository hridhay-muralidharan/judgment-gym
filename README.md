# Room to Respond

Room to Respond is a research prototype for turning real-life situations into short, structured practices for noticing, understanding, choosing, and adapting. Its role is reflection support; therapy and clinical judgment remain with qualified professionals.

Modern life reduced some of the physical activity built into daily life. Cars replaced some walking. Elevators replaced some climbing. Machines reduced some manual work. This contributed to physical inactivity, which is studied in relation to urban design, transport, and access to public space ([WHO Global status report on physical activity](https://www.who.int/publications/i/item/9789240059153)).

Physical gyms provide physical workouts for physical muscles. They bring different exercises together in a practical routine.

## Why a gym for mental faculties?

Modern life also changes how people use their minds:

- social media, notifications, and smartphones compete for attention. Experimental research has found measurable attention costs from smartphone presence, while research on universal shorter attention spans is mixed ([study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10249922/));
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

These are Room to Respond's working groups. They bring together constructs studied in different research traditions so a workout can follow a real situation from perception through action and learning. A single situation can move through all four.

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

Memory, values, social cognition, and meaning-making may appear in the account. Direct development effects for these faculties remain untested. More research is needed to determine which outcomes the prompts affect and how exercises for a wider range of faculties can be combined into efficient mental workout routines.

## Why GenAI marks the inflection point for Room to Respond

GenAI marks an inflection point because it can build a workout around the person's own situation and adapt the next exercise to the person's words, context, and previous practice. It can:

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

## Privacy: the guardrail and the roadblock

Privacy is central because the product works with intimate situations, emotional responses, personal patterns, and changes across time. A hosted product sends that material through an application operator and a model provider. Users may reasonably question who can retain it, access it, use it to improve systems, or connect it with their identity.

On-device inference opens the path to privacy-first personal AI products. Personal memory and reasoning can stay on the user's device. The launch standard includes local encryption, deletion, recovery, sharing, and device security alongside capable reasoning.

The go-to-market trigger is therefore a hypothesis: launch the privacy-first version when on-device models can provide the reasoning quality needed for the workouts and the full privacy system has been validated.

Until that point, Room to Respond needs to have the following in place:

- validated workouts and outcome measures;
- therapist and user review of model behaviour and safety boundaries;
- a user-controlled model of experiences, faculties, changes, and uncertainty;
- text and voice interaction designs;
- local storage, deletion, encryption, selective sharing, and recovery flows;
- a portable model layer that can move from hosted to on-device inference;
- distribution relationships with therapists, digital-therapy companies, and mental-health organisations.

Today's prototype uses hosted inference when configured. It prepares the interaction, research foundation, and portable model layer for a future on-device product.

## What the current prototype does

A person brings in a real event that still feels important, confusing, charged, or unfinished. The prototype asks them to describe what happened and what they felt, thought, said, did, wanted, and noticed afterward.

The AI offers a few tentative observations. The person can accept them, qualify them, reject them, or add something the AI missed. The prototype then creates a changed version of the situation. The person responds to that version and compares it with the original.

The result is a small record of what may repeat, what changes with context, and what the person wants to keep exploring. For longer accounts, the input text box can be configured to analyse one event, several events within one situation, or several situations across time.

This is a research prototype. Whether the workout develops a faculty or improves mental health remains an empirical question for future evaluation.

## Boundaries

Room to Respond is a reflection and exploration product. Therapy, diagnosis, crisis support, risk assessment, treatment recommendations, and care decisions belong with qualified professionals and services. Constructed situations are exercises for observation and reflection. The system operates on the user's words and context and does not infer clinical states from text, voice, pauses, accent, or emotional tone.

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
