# Room to Respond

Room to Respond is a mental gym for the faculties people use to live.

People use different faculties to notice what is happening, understand it, decide what it means, choose what to do, relate to others, adapt when conditions change, and learn from experience. A physical gym offers different workouts for different capacities. Room to Respond explores a similar model for these human faculties.

The product starts with real situations. GenAI helps a person examine the situation, choose a direction for practice, explore a carefully bounded variation, and carry useful understanding back into life.

## The idea

```text
Situation
→ notice what is happening
→ understand the response
→ choose a faculty to exercise
→ try a bounded variation
→ compare what changes
→ carry the learning back into life
```

The system can help a person examine feelings, body responses, thoughts, assumptions, wants, values, words, actions, consequences, and later meaning. It keeps interpretations provisional and gives the person control over what fits, what changes, and what remains unresolved.

## The workout floor

The research map currently groups possible workouts into four areas:

- **Notice** — attention, perception, emotion awareness, and bodily signals;
- **Understand** — memory, meaning-making, metacognition, assumptions, and perspective;
- **Choose** — values, motivation, judgment, decisions, and self-regulation;
- **Adapt** — cognitive flexibility, imagination, foresight, feedback, and learning.

These are working groupings. The final workout areas will follow the evidence for each faculty, the quality of the exercise, and the usefulness of the GenAI interaction.

## The first workout

The current prototype implements a situation lab:

```text
Real situation
→ emotion and thought sequence
→ assumptions and response
→ changed condition or alternative perspective
→ comparison
→ learning to carry forward
```

This first workout brings together emotion awareness, metacognition, cognitive flexibility, prospection, and learning. It is a starting point for the broader mental-gym model, not a claim that every faculty has already been solved.

## Why GenAI matters

GenAI creates a new opportunity for personal practice. It can:

- ask questions about a specific situation;
- follow the person's own words and context;
- hold a thread across multiple exercises;
- offer alternative interpretations;
- change one condition in a situation;
- rehearse a conversation or response;
- explore possible consequences;
- support text and future voice interactions;
- help compare what changed over time.

The model supports the workout. The person supplies the experience, reviews the interpretation, and decides what to carry forward.

## Research basis

Each workout needs its own evidence. The research review will cover:

- the faculty being exercised;
- what stronger functioning supports;
- what poorer functioning may make more difficult;
- whether the faculty or related process can develop;
- whether improvement transfers beyond the exercise;
- how GenAI can contribute;
- what risks and limitations need to be managed;
- how progress can be measured.

The [Human Faculties Map](docs/HUMAN_FACULTIES_MAP.md) is the current research starting point. It includes attention and cognitive control, emotion regulation, metacognition, autobiographical memory, motivation, values, social cognition, imagination, and learning.

The map includes both positive and negative framing. It examines what stronger faculties may support and what poorer functioning may make more difficult. Product claims will follow the strength of the evidence.

Relevant starting sources include [Diamond on executive functions](https://doi.org/10.1146/annurev-psych-113011-143750), [Sheppes, Suri, and Gross on emotion regulation](https://doi.org/10.1146/annurev-clinpsy-032814-112739), [Becker et al. on metacognitive reflection and decision strategies](https://doi.org/10.1017/jdm.2023.16), [Fivush on autobiographical memory](https://doi.org/10.1146/annurev.psych.121208.131702), and [Heckhausen, Wrosch, and Schulz on agency and motivation](https://doi.org/10.1146/annurev-psych-010418-103043).

## The privacy opportunity

Some workouts become more valuable when the system can remember a person's situations and patterns over time. Those workouts also involve sensitive material.

Today, people may hesitate to place intimate memories, emotional patterns, voice recordings, and personal models inside a third-party product whose infrastructure, retention, access, business incentives, or foundation-model relationships they cannot fully control.

As capable language models become practical to run offline on personal devices, private local inference may enable a new category of personal AI. Room to Respond can prepare the research, exercises, safety systems, and distribution relationships before that capability becomes widely available.

The current prototype uses hosted inference when configured. It does not claim to provide on-device privacy today. Its model contracts remain provider-independent so the inference layer can move later.

## Current prototype

- workout floor organised around the human faculties map;
- lived-situation capture with progressive detail prompts;
- tentative, evidence-linked reflection;
- user correction and context-dependent pattern status;
- model-guided constructed text exploration;
- comparison and transfer back to the lived situation;
- evolving training record with patterns, tensions, and evidence;
- local persistence, JSON export/import, reset, and deletion;
- server-side structured model route with a deterministic fallback.

## Boundaries

Room to Respond is not a therapist, diagnostic system, crisis service, risk assessor, treatment recommender, personality test, or substitute for professional care. Constructed situations are exercises for observation and reflection. They are not tests of personality or reality. The system must not infer clinical states from text, voice, pauses, accent, or emotional tone.

## Documentation

- [Human Faculties Map](docs/HUMAN_FACULTIES_MAP.md)
- [Product storyboard](docs/PRODUCT_STORYBOARD.md)
- [Product thesis](docs/PRODUCT_THESIS.md)
- [Self-model research basis](docs/SELF_MODEL_RESEARCH.md)
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
