# Working title: Judgment Gym

Judgment Gym is the working title for a research prototype that helps people become more self-aware by reflecting on how they experience situations, make judgments, and respond over time.

The product explores a practical question:

> Can GenAI make systematic reflection practical enough to help people understand themselves better and use that understanding in daily life?

## The core loop

```text
Lived situation → experience capture → tentative self/psyche model
→ model-guided constructed situation → transfer back to lived experience
→ user correction → model revision
```

The user starts with a real event and can describe what happened, what they felt, thought, said, did, wanted, and noticed afterward. The system offers evidence-linked hypotheses through several lenses, then may propose a constructed text situation that changes one condition or explores an underrepresented dimension. The user decides whether the constructed response connects back to life.

The product is designed to preserve ambiguity. A similarity, difference, exception, rejection, or unresolved question is more useful than a confident label.

## Why this opportunity matters

The product starts from a lived situation. The person describes what happened, what they felt, thought, said, did, wanted, and noticed afterward. The system helps them identify possible patterns, explore a related situation, and carry useful understanding back into life.

The research programme will identify which forms of self-awareness connect to tangible outcomes such as emotional regulation, decision-making, self-regulation, values-aligned action, and relationships. Each connection must be supported by research or clearly marked as a hypothesis.

This is a research prototype. It does not claim clinical efficacy.

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
- [Human faculties map](docs/HUMAN_FACULTIES_MAP.md)
- [Judgment and self-awareness research](docs/JUDGMENT_SELF_AWARENESS_RESEARCH.md)
- [Product name review](docs/PRODUCT_NAME_REVIEW.md)
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
