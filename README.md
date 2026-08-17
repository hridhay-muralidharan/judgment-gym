# Judgment Gym

Judgment Gym is a reflective practice for training self-awareness and judgment in an age when increasingly capable AI systems can perform more of our cognitive work.

I am building this project for [GrowthX's Build for India hackathon](https://growthx.club/events/build-for-india-blr). The question I am exploring is simple:

> If we deliberately train our bodies because machines have reduced the amount of physical effort required in daily life, should we also deliberately train our judgment as AI systems reduce the amount of mental effort required in knowledge work?

Judgment Gym is an emerging research direction into how people can deliberately train judgment and self-awareness as AI systems take on more cognitive work. The hackathon prototype is an initial training environment for exploring that question responsibly.

## The problem

Industrialisation, urbanisation, motorised transport, household automation, and desk-based work have reduced the amount of incidental physical activity in many people's daily lives. Physical inactivity and sedentary behaviour are now established public-health concerns, associated with higher risks across cardiovascular disease, type 2 diabetes, some cancers, and mortality. That is why people intentionally make time for walking, strength training, yoga, sport, and other forms of exercise.

AI introduces a parallel research question for mental work. Writing, research, planning, analysis, summarisation, and parts of decision-making can increasingly be delegated to AI systems. This creates opportunities for **cognitive offloading**: a person may spend less time forming an independent view, noticing uncertainty, weighing competing values, or explaining why a decision is sound.

Existing research gives us useful starting points for investigating this question:

- The literature on [cognitive offloading](https://doi.org/10.1016/j.tics.2016.07.002) describes how people use external tools and environments to reduce cognitive demand.
- A classic study on the [Google effect](https://pubmed.ncbi.nlm.nih.gov/21764755/) found that when people expected information to remain available externally, they were more likely to remember where to find it than the information itself.
- A 2025 [Microsoft Research / Carnegie Mellon study](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/?lang=en) reports self-reported reductions in cognitive effort among knowledge workers using GenAI. The study offers evidence about perceived effort and critical-thinking behaviour in a survey context.
- A 2025 [preprint on LLM-assisted essay writing](https://arxiv.org/abs/2506.08872) reports neural and behavioural differences between study conditions. The work examines a specific task and sample, making it an early contribution to a broader research programme.

The research opportunity is: **people may need deliberate practice to remain active participants in their own judgment when AI makes cognitive delegation frictionless.**

## The mental-health extension

The same pattern matters for mental health and personal development. A person who wants to strengthen self-awareness and judgment can use a between-session practice to slow down an experience, distinguish what happened from the meaning they made of it, and notice what changes with context. They may bring those observations into therapy as a coaching-style space for exploration, reflection, and skill-building when that fits their goals.

The product hypothesis is that better self-observation can give a person clearer material for collaborative conversations with a therapist or coach. This remains a research hypothesis; clinical efficacy requires dedicated study.

Judgment Gym is therefore being re-oriented as a secular self-awareness layer for mental-health AI and digital therapy products. It can help users create clearer examples, questions, and observations that they may choose to bring into a session with a qualified clinician.

## The proposed solution

I propose a training environment in which a user encounters meaningful, ambiguous situations and practises responding before asking an AI system for help.

The practice loop is:

1. Encounter a scenario or recall a recent experience.
2. Record an honest response: what happened, what the user noticed, felt, interpreted, and did.
3. Explain the reasoning, uncertainty, needs, and trade-offs behind that response.
4. Review the AI's tentative interpretation of recurring patterns, conditions, tensions, and changes.
5. Correct the interpretation when it is incomplete or wrong.
6. Revisit similar situations over time and identify a question or example the user may choose to bring to therapy.

The AI serves as a **mirror and practice partner**. It builds a tentative model from what the user has expressed, while the user remains the authority on their own experience, values, and decisions.

This mirrors a familiar learning pattern:

- a training environment where a person can practise, make mistakes, clarify doubts, and receive feedback;
- a live environment where the person applies the skill to real circumstances or brings the material into a human-led therapy session.

Judgment Gym supports the training environment. Real life and professional care are where the user applies the skill and gathers further feedback.

## Target audience

The strongest initial audience is a focused B2B2C segment with a clear development-oriented use case:

**Primary buyer:** digital therapy platforms, telehealth providers, and AI-enabled mental-health companies that already have an ongoing relationship with a user and want to improve between-session engagement and session readiness.

**Initial end-user segment:** adults aged 26–49 who are already receiving therapy or another form of mental-health treatment through a digital or hybrid channel, and who struggle to remember concrete examples or identify patterns between sessions.

This is a good beachhead because the product can be introduced inside an existing support relationship. The company already owns the activation, the user already has a reason to return, and the outcome can be evaluated through self-awareness practice, reflection quality, goal progress, and continuity of engagement.

### Directional market context

- In the United States in 2023, **58.7 million adults (22.8%)** experienced any mental illness in the past year. Adults aged 26–49 represented the largest age-group count: **30.3 million**.
- **31.3 million U.S. adults** received mental-health treatment via telehealth in 2023. Among adults aged 26–49, the figure was **16.7 million**.
- Among U.S. adults with any mental illness, **37.6% received outpatient treatment** in 2023; among 26–49-year-olds with any mental illness, the figure was **39.2%**.
- In 2023, **6.2 million adults with any mental illness** reported an unmet need for treatment. This signals broad unmet need for mental-health support; the immediate serviceable market for a between-session product remains the narrower, therapy-engaged segment above.
- Globally, the WHO estimates that **970 million people** were living with a mental disorder in 2019. This supports the scale of the category; the first commercial wedge remains the narrower, therapy-engaged segment above.

These figures provide directional market context. Judgment Gym market sizing requires dedicated research, and the treatment and telehealth categories overlap, so each figure should be read separately. The figures come from the [2023 SAMHSA National Survey on Drug Use and Health](https://www.samhsa.gov/data/sites/default/files/reports/rpt47095/National%20Report/National%20Report/2023-nsduh-annual-national.htm) and the [WHO mental-health overview](https://www.who.int/en/health-topics/mental-health).

Potential evaluation questions include whether users bring more concrete examples to sessions, whether clinicians report better session focus, whether users can correct model interpretations, and whether the tool improves engagement alongside monitoring for distress or over-reliance on AI.

## A research direction, with a hackathon prototype

I see Judgment Gym as an emerging research direction, with the hackathon prototype serving as its first practical experiment. The underlying research question is how people can deliberately practise judgment and self-awareness as AI systems make cognitive delegation increasingly easy.

The hackathon prototype is an initial probe into that question. It focuses on building a provisional model of the user's expressed judgment and self-awareness. It is intended to demonstrate:

- scenario-based reflection;
- structured capture of feelings, observations, actions, reasoning, uncertainty, and trade-offs;
- user correction of the AI's interpretation;
- evidence-linked patterns and unresolved tensions;
- adaptive selection of a next scenario;
- export, reset, and deletion of the user's reflections.

### What the v1 user model is based on

The v1 model is an **operational reflection profile**. It is an early prototype for organising four deliberately modest inputs:

1. the user's own words about a concrete situation;
2. tentative, plain-language threads extracted from that response;
3. the user's acceptance, correction, rejection, or qualification of those threads; and
4. unresolved tensions and the scenarios that provide evidence for them.

The current prototype stores responses, corrections, thread status, scenario context, and revision history. Its two demo threads make the interaction legible and serve as interaction fixtures. Validation of the psychological framework remains future research. The live model route grounds interpretations in the user's response and returns two or three tentative threads plus one unresolved tension. The profile stays close to observable responses and user corrections.

This is an intentional training-wheel model: it helps a person externalise and inspect their own experience. Repeated evidence and user correction can make the profile more useful. Scientific validation would require study of the constructs, prompts, review process, clinical workflow, and outcomes.

Taking this direction further would require collaboration with psychologists, behavioural scientists, metacognition researchers, clinicians, safety experts, and people with lived experience to determine which aspects of self-awareness can be represented, what evidence is appropriate, how bias and overinterpretation should be controlled, how scenarios should be designed and sequenced, which scenarios are psychologically meaningful without being manipulative or leading, and how the product should be evaluated.

This expert input supports both the user model and the situations presented to users. Scenario quality is part of the product's validity: poorly designed scenarios could prime users toward preferred answers, confuse temporary emotional states with stable patterns, or create unnecessary distress.

### Immersive scenario research

Another research direction is whether GenAI can generate rich, context-sensitive scenarios and convert them into multimodal immersive experiences, including virtual-reality environments. GenAI could produce the visual environment, characters, dialogue, ambient sound, and changing events of a situation. A user might experience a decision-maker's deadline pressure through spatial context, spoken interaction, competing signals, time pressure, and the consequences of different actions.

Developing this direction would require research into scenario generation, virtual-reality interaction, embodiment, narrative design, presence, emotional safety, accessibility, and the validity of responses produced in simulation compared with real-world behaviour.

## Boundaries and safety

Judgment Gym supports reflection, self-awareness practice, and preparation for conversations with qualified professionals. The product scope excludes crisis care, diagnosis, risk assessment, personality testing, and treatment prescription. The agent preserves ambiguity and contradiction, treats interpretations as provisional, and uses respectful, non-shaming language.

If a user describes immediate danger or serious distress, a production version provides an appropriate, static route to qualified human or emergency support.

The MVP is designed around local-first storage, visible data handling, portable JSON export/import, reset, and deletion. The public repository excludes personal reflections, API keys, and private user profiles. Encrypted export is a follow-up hardening task before treating exports as safe for sensitive long-term storage.

## Status

The current build includes the reflective scenario flow, local draft persistence, tentative mirror review, synthesized cross-scenario threads and tensions, scenario evidence history, privacy controls, JSON export/import/reset, and a server-side model route with a fixture fallback. The demo is deployed on Vercel and the repository is published on GitHub.

## Run locally

```bash
npm install
npm run dev
```

The app shows a bounded fixture reflection by default. To enable live reflections locally, copy `.env.example` to `.env`, add `OPENAI_API_KEY`, and restart the dev server. The key is read only by the server-side route under `api/reflect.ts`.

Build verification:

```bash
npm run build
```

## Deploy

This project is configured for Vercel. Deploy the repository, then add `OPENAI_API_KEY` as a sensitive production environment variable in the Vercel project and redeploy. Keep the key in the server-side environment and out of the frontend.

Planning documents:

- [Product plan](PRE_HACKATHON_PLAN.md)
- [Agent model](docs/AGENT_MODEL.md)
- [Frontend journey](docs/FRONTEND_JOURNEY.md)
- [Scenario journey](docs/SCENARIO_JOURNEY.md)
- [Privacy and safety](docs/PRIVACY_AND_SAFETY.md)
- [Hackathon runbook](docs/HACKATHON_RUNBOOK.md)
- [Architecture](docs/ARCHITECTURE.md)

## Evidence and further reading

- [WHO: Guidelines on Physical Activity and Sedentary Behaviour (2020)](https://www.who.int/publications/i/item/9789240015128)
- [Lee et al.: Impact of Physical Inactivity on the World's Major Non-Communicable Diseases, *The Lancet* (2012)](https://doi.org/10.1016/S0140-6736(12)61031-9)
- [Risko & Gilbert: Cognitive Offloading, *Trends in Cognitive Sciences* (2016)](https://doi.org/10.1016/j.tics.2016.07.002)
- [Sparrow, Liu & Wegner: Google Effects on Memory, *Science* (2011)](https://doi.org/10.1126/science.1207745)
- [Lee et al.: The Impact of Generative AI on Critical Thinking, CHI (2025)](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/?lang=en)
- [Kosmyna et al.: Your Brain on ChatGPT, arXiv preprint (2025)](https://arxiv.org/abs/2506.08872)
