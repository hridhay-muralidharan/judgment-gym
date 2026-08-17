# Judgment Gym

Judgment Gym is a secular, private self-awareness layer for mental health products. It is designed to help a person notice patterns between therapy sessions and arrive with clearer observations, examples, and questions for a qualified clinician.

## The pitch

Therapy sessions are time-limited. People often arrive with a global feeling — “I am overwhelmed”, “something felt off”, “I keep doing this” — but without enough concrete observations to explore. Judgment Gym creates a structured loop between sessions:

1. The person reflects on a grounded situation.
2. They write what happened, what they noticed, felt, interpreted, and did.
3. AI offers a small number of tentative patterns grounded in their words.
4. The person accepts, corrects, or rejects each pattern.
5. The practice preserves examples and open questions they can choose to bring to therapy.

The product hypothesis is that better self-observation can make therapy conversations more specific and collaborative. This is a research hypothesis, not a clinical efficacy claim.

## Best initial audience

The strongest initial audience is not a broad wellness population or a follower community. It is:

**Primary buyer:** digital therapy platforms, AI-enabled mental-health companies, and telehealth providers that already have an ongoing relationship with a user and want to improve between-session engagement and session readiness.

**Initial end-user segment:** adults aged 26–49 who are already receiving therapy or another form of mental-health treatment through a digital or hybrid channel, and who struggle to remember concrete examples or identify patterns between sessions.

This is a good beachhead because the product can be introduced inside an existing care relationship. The company already owns the activation, the user already has a reason to return, and the outcome can be evaluated against session preparation and continuity rather than vague “wellness” engagement.

### Numbers behind the segment

- In the United States in 2023, **58.7 million adults (22.8%)** experienced any mental illness in the past year. Adults aged 26–49 represented the largest age-group count: **30.3 million**.
- **31.3 million U.S. adults** received mental-health treatment via telehealth in 2023. Among adults aged 26–49, the figure was **16.7 million**.
- Among U.S. adults with any mental illness, **37.6% received outpatient treatment** in 2023; among 26–49-year-olds with any mental illness, the figure was **39.2%**.
- In 2023, **6.2 million adults with any mental illness** reported an unmet need for treatment. This is evidence of need for mental-health support broadly, but it should not be treated as the immediate serviceable market for a between-session product.
- Globally, the WHO estimates that **970 million people** were living with a mental disorder in 2019. This supports the scale of the category, but the first commercial wedge should remain the narrower, therapy-engaged segment above.

These figures are directional market context, not a Judgment Gym market-size claim. The treatment and telehealth categories overlap, so the numbers must not be added together. The figures come from the [2023 SAMHSA National Survey on Drug Use and Health](https://www.samhsa.gov/data/sites/default/files/reports/rpt47095/National%20Report/National%20Report/2023-nsduh-annual-national.htm) and the [WHO mental-health overview](https://www.who.int/en/health-topics/mental-health).

### Why this audience is better than a broad consumer launch

The value proposition is concrete: help a person convert between-session experience into material they can choose to discuss with a clinician. The buyer can test this with measures such as completion of reflection prompts, proportion of users who bring a saved example or question into a session, clinician-rated session focus, user-reported session usefulness, correction rate for AI interpretations, and safety signals such as distress or inappropriate reliance.

## Why this matters for mental health AI companies

Judgment Gym could sit alongside an existing therapy or coaching experience as a between-session activation layer. It can help with:

- richer session preparation;
- more specific examples instead of only global mood labels;
- user-owned language for needs, triggers, conditions, and ambivalence;
- continuity across sessions without presenting a fixed personality profile;
- a visible correction loop that keeps AI interpretation subordinate to the user and clinician.

Potential evaluation questions include whether users bring more concrete examples to sessions, whether clinicians report better session focus, whether users can correct model interpretations, and whether the tool improves engagement without increasing distress or over-reliance on AI. These require research with clinicians, behavioural scientists, safety experts, and users.

## Product boundary

Judgment Gym is not a therapist, crisis service, diagnostic tool, risk assessor, personality test, or substitute for professional care. It must not diagnose, prescribe, moralise, shame, or claim to know what a person “really” feels. Interpretations remain provisional. The user decides what is useful, and therapy remains human-led.

If a user describes immediate danger or serious distress, a production version must provide an appropriate, static route to qualified human or emergency support. It must not pretend to provide crisis care.

## Current prototype

The Vite + React prototype demonstrates:

- five secular reflection prompts focused on experiences, patterns, conditions, needs, and ambivalence;
- local draft persistence and portable JSON export/import;
- a server-side reflection route with a bounded fixture fallback;
- tentative threads, user correction, unresolved tensions, and cross-reflection synthesis;
- clear privacy and safety boundaries.

The current profile is an operational reflection model, not a validated psychological or psychometric instrument. Stronger claims require pre-registered research and clinical review.

## Run locally

```bash
npm install
npm run dev
```

The app works without an API key by showing a bounded fixture reflection. To enable live reflections locally, copy `.env.example` to `.env`, add `OPENAI_API_KEY`, and restart the dev server. The key is read only by the server-side route under `api/reflect.ts`.

```bash
npm run build
```

## Design principles

- Secular and inclusive: no religious doctrine or worldview is imposed.
- User-owned: the person can correct every interpretation.
- Evidence-linked: patterns point back to the reflection that produced them.
- Context-sensitive: contradiction and change are preserved rather than flattened into labels.
- Safety-aware: the product supports preparation and self-awareness, not treatment.
