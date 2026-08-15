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

## The proposed solution

I propose a training environment in which a user encounters meaningful, ambiguous situations and practises responding before asking an AI system for help.

The practice loop is:

1. Encounter a scenario.
2. Record an honest response: what the user feels, believes, says, and would do.
3. Explain the reasoning, trade-offs, uncertainty, and values behind that response.
4. Review the AI's tentative interpretation of recurring patterns, conditions, tensions, and changes.
5. Correct the interpretation when it is incomplete or wrong.
6. Revisit similar situations over time and observe how judgment evolves.

The AI serves as a **mirror and practice partner**. It builds a tentative model from what the user has expressed, while the user remains the authority on their own experience, values, and decisions.

This mirrors a familiar learning pattern:

- a training environment where a person can practise, make mistakes, clarify doubts, and receive feedback;
- a live environment where the person applies the skill to real circumstances.

Judgment Gym supports the training environment. Real life is where the user applies the skill and gathers further feedback.

## Cultural inspiration

My thinking is inspired by Sanatana Dharma, particularly the practice of cultivating *viveka*—discernment or the ability to distinguish wisely—through sustained *sadhana* and reflection.

In many Sanatana Dharma traditions, a seeker may orient their conduct around an ideal role model. Rama, for example, is often described as an ideal human being. A practitioner may use the question “What would Rama do?” as a reflective lens when facing a difficult situation. Through repeated practice, they examine the gap between their present response and their understanding of ideal conduct, while both their self-understanding and that ideal continue to develop.

Judgment Gym carries the structure of that practice into a digital training tool. It does not speak for any guru, sampradaya, or tradition, and it does not attempt to reproduce spiritual attainment. The same tool can serve people who share this religious framing and people who are exploring self-awareness through a secular lens.

## Target audience

My initial target segment is:

- spiritual seekers rooted in or familiar with Sanatana Dharma;
- white-collar knowledge workers living in urban environments;
- English-proficient users who already have some exposure to GenAI tools;
- people interested in self-awareness, reflective practice, and better judgment.

The broader audience includes anyone who wants to inspect how they respond to difficult situations and build a more deliberate relationship with AI assistance.

### Directional TAM proxy

As a top-of-funnel proxy, Sadhguru's primary English-language social accounts represent approximately **40 million gross followers** based on publicly reported figures available in June 2026:

| Account | Approximate audience |
| --- | ---: |
| Instagram | 13.2M followers |
| YouTube | 12.7M subscribers |
| Facebook | 10.0M followers |
| X | 4.0M followers |
| **Gross total** | **39.9M** |

This is a directional audience proxy for early exploration. The total includes people who follow Sadhguru on multiple platforms, people outside India and outside the intended demographic, and inactive or low-intent accounts. The serviceable segment—urban, English-proficient, white-collar spiritual seekers who use GenAI and want a judgment-training product—requires primary market research to estimate.

The broader opportunity includes seekers across many traditions and secular users. The [official Isha list of digital handles](https://isha.sadhguru.org/en/official-digital-handles) supports account identity, while the [June 2026 audience snapshot](https://app.chartmetric.com/artist/841786) provides the platform-level figures used for this proxy.

## A research direction, with a hackathon prototype

I see Judgment Gym as an emerging research direction, with the hackathon prototype serving as its first practical experiment. The underlying research question is how people can deliberately practise judgment and self-awareness as AI systems make cognitive delegation increasingly easy.

The hackathon prototype is an initial probe into that question. It focuses on building a provisional model of the user's expressed judgment to support self-awareness. It is intended to demonstrate:

- scenario-based reflection;
- structured capture of feelings, speech, actions, reasoning, uncertainty, and trade-offs;
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

The current prototype stores responses, corrections, thread status, scenario context, and revision history. Its two demo threads make the interaction legible and serve as interaction fixtures. They are not derived from a validated psychological framework. The live model route grounds interpretations in the user's response and returns two or three tentative threads plus one unresolved tension. The profile stays close to observable responses and user corrections.

This is an intentional training-wheel model: it helps a person externalise and inspect their own judgment. Repeated evidence and user correction can make the profile more useful. Scientific validation would require study of the constructs, prompts, review process, and outcomes.

Taking this direction further would require two distinct research tracks:

- **Role-model research:** offline textual and cultural research with advanced sadhaks, gurus, and scholars to build responsible models of figures such as Rama without fabricating their judgment.
- **User-model and scenario research:** offline collaboration with psychologists, behavioural scientists, metacognition researchers, and related experts to determine which aspects of judgment and self-awareness can be represented, what evidence is appropriate, how bias and overinterpretation should be controlled, how scenarios should be designed and sequenced, which scenarios are psychologically meaningful without being manipulative or leading, and how the product should be evaluated.

This expert input supports both the user model and the situations presented to users. Scenario quality is part of the product's validity: poorly designed scenarios could prime users toward preferred answers, confuse temporary emotional states with stable patterns, or create unnecessary distress.

Only after that work should the product make stronger claims about cognitive development or compare a user's responses with a role-model model.

### Indic judgment models and societal challenges

One of my larger objectives with this repository is to contribute to putting India on the world map as *Vishwaguru*—a source of wisdom that can contribute to humanity's most difficult problems. GenAI creates an opportunity to explore this through models of judgment grounded in India's spiritual and cultural traditions.

Indic AI labs such as [Sarvam AI](https://www.sarvam.ai/) are uniquely positioned to explore this direction. A future research programme could study how the judgment of mahatmas and role models such as Rama might be represented through careful textual, cultural, spiritual, and historical research. Agents configured on such models could interact with world models to understand how complex social, ecological, and economic systems behave, and apply that understanding to problems such as air pollution, sustainability, climate change, affordable housing, rural development, ecology conservation, and other societal challenges.

In this framing, the world model helps an agent understand what is happening, what may happen next, and which interventions could change the system. The judgment model could guide its understanding of what is *sat* and *dharma*. The combination could become a research foundation for agents that work with people on complex societal challenges.

The research question is whether agents grounded in models of higher judgment can help people reason about these challenges with greater concern for long-term consequences, dignity, interdependence, duty, and the needs of communities that are often overlooked. This would require collaboration with advanced sadhaks, gurus, scholars, psychologists, behavioural scientists, domain experts, and communities directly affected by the problems being studied. It would also require rigorous evaluation of how such agents reason, whose values they represent, where they fail, and how human decision-makers should use their guidance.

### Immersive scenario research

Another research direction is whether GenAI can generate rich, context-sensitive scenarios and convert them into multimodal immersive experiences, including virtual-reality environments. GenAI could produce the visual environment, characters, dialogue, ambient sound, and changing events of a situation. A user might experience a decision-maker's deadline pressure through spatial context, spoken interaction, competing signals, time pressure, and the consequences of different actions.

Developing this direction would require research into scenario generation, virtual-reality interaction, embodiment, narrative design, presence, emotional safety, accessibility, and the validity of responses produced in simulation compared with real-world behaviour.

## Boundaries and safety

Judgment Gym is a reflection tool, not therapy, counselling, diagnosis, spiritual authority, a personality test, or a substitute for professional or real-world decision support. The agent should preserve ambiguity and contradiction, treat interpretations as provisional, and never shame the user or declare a response morally right or wrong.

The MVP is designed around local-first storage, visible data handling, portable JSON export/import, reset, and deletion. Personal reflections, API keys, and private user profiles should not be committed to the public repository. Encrypted export is a follow-up hardening task before treating exports as safe for sensitive long-term storage.

## Status

The hackathon demo is complete and frozen. The current build includes the reflective scenario flow, local draft persistence, tentative mirror review, synthesized cross-scenario threads and tensions, scenario evidence history, privacy controls, JSON export/import/reset, and a server-side model route with a fixture fallback. The demo is deployed on Vercel and the repository is published on GitHub.

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
- [Architecture](docs/ARCHITECTURE.md)

## Evidence and further reading

- [WHO: Guidelines on Physical Activity and Sedentary Behaviour (2020)](https://www.who.int/publications/i/item/9789240015128)
- [Lee et al.: Impact of Physical Inactivity on the World's Major Non-Communicable Diseases, *The Lancet* (2012)](https://doi.org/10.1016/S0140-6736(12)61031-9)
- [Risko & Gilbert: Cognitive Offloading, *Trends in Cognitive Sciences* (2016)](https://doi.org/10.1016/j.tics.2016.07.002)
- [Sparrow, Liu & Wegner: Google Effects on Memory, *Science* (2011)](https://doi.org/10.1126/science.1207745)
- [Lee et al.: The Impact of Generative AI on Critical Thinking, CHI (2025)](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/?lang=en)
- [Kosmyna et al.: Your Brain on ChatGPT, arXiv preprint (2025)](https://arxiv.org/abs/2506.08872)
- [Isha Foundation: Sadhguru's and Isha's official digital handles](https://isha.sadhguru.org/en/official-digital-handles)
- [Chartmetric: Sadhguru audience snapshot, refreshed June 2026](https://app.chartmetric.com/artist/841786)
