# Judgment Gym

Judgment Gym is a reflective practice for training self-awareness and judgment in an age when increasingly capable AI systems can perform more of our cognitive work.

The project is being built for [GrowthX's Build for India hackathon](https://growthx.club/events/build-for-india-blr). Its central question is simple:

> If we deliberately train our bodies because machines have reduced the amount of physical effort required in daily life, should we also deliberately train our judgment as AI systems reduce the amount of mental effort required in knowledge work?

This is a product hypothesis, not a claim that AI has already made people less intelligent. The evidence for that long-term claim is not yet settled. Judgment Gym is an attempt to build a useful training environment while studying the question responsibly.

## The problem

Industrialisation, urbanisation, motorised transport, household automation, and desk-based work have reduced the amount of incidental physical activity in many people's daily lives. Physical inactivity and sedentary behaviour are now established public-health concerns, associated with higher risks across cardiovascular disease, type 2 diabetes, some cancers, and mortality. That is why people intentionally make time for walking, strength training, yoga, sport, and other forms of exercise.

AI introduces an analogous possibility for mental work. Writing, research, planning, analysis, summarisation, and even parts of decision-making can increasingly be delegated to AI systems. Delegation can be valuable, but it can also create opportunities for **cognitive offloading**: the person may spend less time forming an independent view, noticing uncertainty, weighing competing values, or explaining why a decision is sound.

Existing research gives us reasons to investigate this risk, but not grounds for sweeping conclusions:

- The literature on [cognitive offloading](https://doi.org/10.1016/j.tics.2016.07.002) describes how people use external tools and environments to reduce cognitive demand.
- A classic study on the [Google effect](https://pubmed.ncbi.nlm.nih.gov/21764755/) found that when people expected information to remain available externally, they were more likely to remember where to find it than the information itself.
- A 2025 [Microsoft Research / Carnegie Mellon study](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/?lang=en) reports self-reported reductions in cognitive effort among knowledge workers using GenAI. It is a survey study, so it does not establish that GenAI causes a lasting decline in critical-thinking ability.
- A 2025 [preprint on LLM-assisted essay writing](https://arxiv.org/abs/2506.08872) reports neural and behavioural differences between study conditions. Because it is a preprint with a narrow task and sample, its findings should be treated as preliminary rather than definitive evidence of general cognitive decline.

The product opportunity is therefore not “AI is making everyone mentally weaker.” It is: **people may need deliberate practice to remain active participants in their own judgment when AI makes cognitive delegation frictionless.**

## The proposed solution

Judgment Gym creates a training environment in which a user encounters meaningful, ambiguous situations and practices responding before asking an AI system for help.

The loop is:

1. Encounter a scenario.
2. Record an honest response: what the user feels, believes, says, and would do.
3. Explain the reasoning, trade-offs, uncertainty, and values behind that response.
4. Review the AI's tentative interpretation of recurring patterns, conditions, tensions, and changes.
5. Correct the interpretation when it is incomplete or wrong.
6. Revisit similar situations over time and observe how judgment evolves.

The AI acts as a **mirror and practice partner**, not as a moral authority. It models the user's expressed judgment; it does not claim to know the user's true personality, assign moral scores, diagnose them, or decide what they should do.

This mirrors a familiar learning pattern:

- a training environment where a person can practise, make mistakes, clarify doubts, and receive feedback;
- a live environment where the person applies the skill to real circumstances.

Judgment Gym is intended to support the first environment. Real life remains the second.

## Cultural inspiration

The product is inspired by Sanatana Dharma, particularly the practice of cultivating *viveka*—discernment or the ability to distinguish wisely—through sustained *sadhana* and reflection.

In many Sanatana Dharma traditions, a seeker may orient their conduct around an ideal role model. Rama, for example, is often described as an ideal human being. A practitioner may use the question “What would Rama do?” as a reflective lens when facing a difficult situation. Through repeated practice, they examine the gap between their present response and their understanding of ideal conduct, while both their self-understanding and that ideal continue to develop.

Judgment Gym translates the structure of that practice into a digital training tool without claiming to reproduce spiritual attainment or speak for any guru, sampradaya, or tradition. It is designed to be usable by people who do not share this religious framing and simply want to become more self-aware.

## Target audience

The initial audience is:

- spiritual seekers rooted in or familiar with Sanatana Dharma;
- white-collar knowledge workers living in urban environments;
- English-proficient users who already have some exposure to GenAI tools;
- people interested in self-awareness, reflective practice, and better judgment.

The broader audience is anyone who wants to inspect how they respond to difficult situations and build a more deliberate relationship with AI assistance.

### Directional TAM proxy

As a top-of-funnel proxy, Sadhguru's primary English-language social accounts represent approximately **40 million gross followers** based on publicly reported figures available in June 2026:

| Account | Approximate audience |
| --- | ---: |
| Instagram | 13.2M followers |
| YouTube | 12.7M subscribers |
| Facebook | 10.0M followers |
| X | 4.0M followers |
| **Gross total** | **39.9M** |

This is a directional audience proxy, not a validated TAM or a forecast of users. The total double-counts people who follow Sadhguru on multiple platforms, includes people outside India and outside the intended demographic, and includes inactive or low-intent accounts. The actual serviceable segment—urban, English-proficient, white-collar spiritual seekers who use GenAI and want a judgment-training product—will be materially smaller and needs primary market research to estimate.

The broader opportunity includes seekers across many traditions and secular users. The [official Isha list of digital handles](https://isha.sadhguru.org/en/official-digital-handles) supports account identity, while the [June 2026 audience snapshot](https://app.chartmetric.com/artist/841786) provides the platform-level figures used for this proxy.

## Hackathon MVP

Version 1 focuses on building a provisional model of the user's expressed judgment to support self-awareness. The MVP is intended to demonstrate:

- scenario-based reflection;
- structured capture of feelings, speech, actions, reasoning, uncertainty, and trade-offs;
- user correction of the AI's interpretation;
- evidence-linked patterns and unresolved tensions;
- adaptive selection of a next scenario;
- export, reset, and deletion of the user's reflections.

### What the v1 user model is based on

The v1 model is an **operational reflection profile**, not a psychological diagnosis or validated personality model. It is based on four deliberately modest inputs:

1. the user's own words about a concrete situation;
2. tentative, plain-language threads extracted from that response;
3. the user's acceptance, correction, rejection, or qualification of those threads; and
4. unresolved tensions and the scenarios that provide evidence for them.

The current prototype stores responses, corrections, thread status, scenario context, and revision history. Its two demo threads are fixtures that make the interaction legible; they are not claims about the user and are not derived from a validated psychological framework. The live model route is instructed to ground interpretations in the user's response and return two or three tentative threads plus one unresolved tension. It does not infer hidden traits, assign scores, diagnose, moralise, or claim to know the user's true personality.

This is an intentional training-wheel model: it helps a person externalise and inspect their own judgment. It should become more useful through repeated evidence and user correction, but it should not be presented as scientifically validated until the constructs, prompts, review process, and outcomes have been studied.

Future versions need two distinct research tracks:

- **Role-model research:** offline textual and cultural research with advanced sadhaks, gurus, and scholars to build responsible models of figures such as Rama without fabricating their judgment.
- **User-model research:** offline collaboration with psychologists, behavioural scientists, metacognition researchers, and related experts to determine which aspects of judgment and self-awareness can be represented, what evidence is appropriate, how bias and overinterpretation should be controlled, and how the product should be evaluated.

Only after that work should the product make stronger claims about cognitive development or compare a user's responses with a role-model model.

## Boundaries and safety

Judgment Gym is a reflection tool, not therapy, counselling, diagnosis, spiritual authority, a personality test, or a substitute for professional or real-world decision support. The agent should preserve ambiguity and contradiction, treat interpretations as provisional, and never shame the user or declare a response morally right or wrong.

The MVP is designed around local-first storage, visible data handling, portable JSON export/import, reset, and deletion. Personal reflections, API keys, and private user profiles should not be committed to the public repository. Encrypted export is a follow-up hardening task before treating exports as safe for sensitive long-term storage.

## Status

The hackathon build is now in progress. The current slice includes the reflective scenario flow, local draft persistence, tentative mirror review, thread review, privacy controls, export/reset, and a server-side model route with a fixture fallback.

## Run locally

```bash
npm install
npm run dev
```

The app works without an API key by showing a bounded fixture reflection. To enable live reflections locally, copy `.env.example` to `.env`, add `OPENAI_API_KEY`, and restart the dev server. The key is read only by the server-side route under `api/reflect.ts`.

Build verification:

```bash
npm run build
```

## Deploy

This project is configured for Vercel. Deploy the repository, then add `OPENAI_API_KEY` as a sensitive production environment variable in the Vercel project and redeploy. Never commit the key or paste it into the frontend.

Planning documents:

- [Product plan](PRE_HACKATHON_PLAN.md)
- [Agent model](docs/AGENT_MODEL.md)
- [Frontend journey](docs/FRONTEND_JOURNEY.md)
- [Scenario journey](docs/SCENARIO_JOURNEY.md)
- [Privacy and safety](docs/PRIVACY_AND_SAFETY.md)
- [Hackathon runbook](docs/HACKATHON_RUNBOOK.md)

## Evidence and further reading

- [WHO: Guidelines on Physical Activity and Sedentary Behaviour (2020)](https://www.who.int/publications/i/item/9789240015128)
- [Lee et al.: Impact of Physical Inactivity on the World's Major Non-Communicable Diseases, *The Lancet* (2012)](https://doi.org/10.1016/S0140-6736(12)61031-9)
- [Risko & Gilbert: Cognitive Offloading, *Trends in Cognitive Sciences* (2016)](https://doi.org/10.1016/j.tics.2016.07.002)
- [Sparrow, Liu & Wegner: Google Effects on Memory, *Science* (2011)](https://doi.org/10.1126/science.1207745)
- [Lee et al.: The Impact of Generative AI on Critical Thinking, CHI (2025)](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/?lang=en)
- [Kosmyna et al.: Your Brain on ChatGPT, arXiv preprint (2025)](https://arxiv.org/abs/2506.08872)
- [Isha Foundation: Sadhguru's and Isha's official digital handles](https://isha.sadhguru.org/en/official-digital-handles)
- [Chartmetric: Sadhguru audience snapshot, refreshed June 2026](https://app.chartmetric.com/artist/841786)
