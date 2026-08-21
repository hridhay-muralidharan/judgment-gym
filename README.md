# Judgment Gym

Judgment Gym is a research prototype for systematic metacognitive reflection: helping people examine how they form judgments in lived situations, test what changes across contexts, and revise their understanding over time.

The product explores a practical question:

> Can GenAI make systematic metacognitive reflection practical enough to help people discover better ways of judging and responding to situations, without claiming authority over what their experiences mean?

## The core loop

```text
Lived situation → experience capture → tentative self/psyche model
→ model-guided constructed situation → transfer back to lived experience
→ user correction → model revision
```

The user starts with a real event and can describe what happened, what they felt, thought, said, did, wanted, and noticed afterward. The system offers evidence-linked hypotheses through several lenses, then may propose a constructed text situation that changes one condition or explores an underrepresented dimension. The user decides whether the constructed response connects back to life.

The product is designed to preserve ambiguity. A similarity, difference, exception, rejection, or unresolved question is more useful than a confident label.

## Why this opportunity matters

Research distinguishes generic self-awareness from more useful metacognitive capabilities: monitoring how one is thinking, calibrating confidence, noticing uncertainty, and revising a strategy. In an experimental study, systematic metacognitive reflection helped people discover adaptive, far-sighted decision strategies faster than participants who did not reflect between decisions. [Becker et al., 2023](https://www.cambridge.org/core/journals/judgment-and-decision-making/article/systematic-metacognitive-reflection-helps-people-discover-farsighted-decision-strategies-a-processtracing-experiment/BA25E058C30249E1A22D464A6145165E)

GenAI creates an opportunity to make this kind of reflection interactive, personalised, longitudinal, and available between human conversations. It can help a person reconstruct what happened, identify the assumptions and feelings that shaped a judgment, generate a bounded variation, and compare the response across conditions. Judgment Gym tests whether this can produce clearer questions and observations for the user and, when they choose, for a qualified professional.

This is a research hypothesis. Judgment Gym does not claim clinical efficacy.

## The self/psyche model

V1 uses a layered model rather than one grand theory:

- narrative identity and change across life chapters;
- values, motivations, and psychological needs;
- episode-level situation, interpretation, feeling, action, and consequence;
- tentative coping and protective responses;
- relational context and perspective;
- conditions, contradictions, exceptions, and unresolved tensions.

The system distinguishes observed, user-stated, tentative, context-dependent, rejected, and unresolved material. See [Self-model research basis](docs/SELF_MODEL_RESEARCH.md).

## The privacy opportunity

Judgment Gym works with intimate longitudinal material. Today, users may hesitate to place memories, emotional patterns, voice recordings, or personal models inside a third-party product whose infrastructure, retention, business incentives, or foundation-model relationships they cannot fully control.

As capable language models become practical to run offline on personal devices, private local inference may unlock personal AI products that are difficult to offer credibly today. Judgment Gym's preparation work is to validate the interaction and safety layer before that capability arrives: lived-scenario capture, self/psyche model design, constructed text and voice exploration, transfer methods, correction, provenance, consent, and distribution through mental-health AI and digital therapy companies.

The current prototype uses a hosted model route when configured. It does not claim to provide on-device privacy. Its architecture keeps the model contract provider-independent so the inference layer can move later.

## Boundaries

Judgment Gym is not a therapist, diagnostic system, crisis service, risk assessor, treatment recommender, personality test, or substitute for professional care. Constructed situations are not tests of personality or reality. The system must not infer clinical states from text, voice, pauses, accent, or emotional tone.

## Current prototype

- lived-situation capture with progressive detail prompts;
- tentative, evidence-linked model review;
- user correction and context-dependent pattern status;
- model-guided constructed text exploration;
- transfer review back to the lived situation;
- evolving threads, tensions, and scenario evidence;
- local persistence, JSON export/import, reset, and deletion;
- server-side structured model route with a deterministic fallback.

The public repository contains no private autobiographical material, private conversations, or API credentials.

## Run locally

```bash
npm install
npm run dev
```

The app works with a fixture fallback by default. To enable the hosted model route, copy `.env.example` to `.env`, add `OPENAI_API_KEY`, and restart the dev server. The key is read only by `api/reflect.ts`.

Build verification:

```bash
npm run build
```

## Documentation

- [Product thesis](docs/PRODUCT_THESIS.md)
- [Self-model research basis](docs/SELF_MODEL_RESEARCH.md)
- [Judgment and self-awareness research](docs/JUDGMENT_SELF_AWARENESS_RESEARCH.md)
- [Agent model](docs/AGENT_MODEL.md)
- [Frontend journey](docs/FRONTEND_JOURNEY.md)
- [Lived-to-constructed journey](docs/SCENARIO_JOURNEY.md)
- [Privacy and safety](docs/PRIVACY_AND_SAFETY.md)
- [Evaluation plan](docs/EVALUATION_PLAN.md)
- [Therapist review packet](docs/THERAPIST_REVIEW_PACKET.md)
- [Architecture](docs/ARCHITECTURE.md)

## Research references

- [McAdams: The Psychology of Life Stories](https://doi.org/10.1037/1089-2680.5.2.100)
- [Ryan and Deci: Self-Determination Theory](https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf)
- [Bär et al.: Early Maladaptive Schemas and Schema Modes](https://doi.org/10.1111/papt.12465)
- [Muste et al.: Systematic Review of Schema Therapy](https://pubmed.ncbi.nlm.nih.gov/37002933/)
- [Risko and Gilbert: Cognitive Offloading](https://doi.org/10.1016/j.tics.2016.07.002)
- [Becker et al.: Systematic Metacognitive Reflection and Decision Strategies](https://doi.org/10.1017/jdm.2023.16)
- [Sunderaraman et al.: Self-awareness for Financial Decision-making](https://doi.org/10.1371/journal.pone.0235558)

These references inform the research direction. They do not validate Judgment Gym's model or establish clinical efficacy.
