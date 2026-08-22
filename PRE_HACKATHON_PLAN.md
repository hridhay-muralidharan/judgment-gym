# Room to Respond 2.0 — Product and implementation plan

## Objective

Build and share a trustworthy research prototype for improving self-awareness through reflection across lived and constructed situations.

The public repository will contain the generalised method. Personal reflections and the user's personal worldview remain private.

## Product boundary

The product is not a counselling or therapy system, personality test, moral evaluator, model-comparison benchmark, or coding-agent wrapper. It is a reflective practice that helps users understand their feelings, thoughts, values, patterns, and responses. Its central research question is whether GenAI can make systematic reflection practical and useful in daily life.

The agent must preserve ambiguity and contradiction, distinguish user words from model interpretation, and treat every inference as provisional until the user reviews it.

## Technical direction

- React, Vite, and TypeScript frontend.
- Vercel server-side routes for model calls.
- OpenAI Responses API with structured outputs.
- Direct live model connectivity through a server-side provider boundary; no coding-agent wrapper.
- Local-first browser state with encrypted export/import.
- API key stored only as a server-side deployment secret.
- Fixtures reserved for tests and provider-failure recovery.
- Text first, with voice treated as a future input layer requiring separate consent and evaluation.
- Provider-independent model contracts so hosted inference can later move to capable on-device models.

## User model

Store raw responses, tentative signals, user corrections, confirmed or contested patterns, unresolved tensions, evidence links, conditions, exceptions, and revision history. Never silently overwrite earlier judgment. Contradiction becomes a tension or condition rather than a forced personality label.

Long-term memory must use recent context, rolling summaries, profile patterns, unresolved tensions, and retrieved evidence rather than sending an entire multi-year history in every prompt.

## Scenario policy

Write user-facing scenarios originally. Keep them culturally inclusive, non-leading, and psychologically bounded. Prompts should invite observation rather than prime a preferred answer, and each scenario should explain why it was selected without implying that the product knows the user's mind.

## Demo journey

Use a coherent lived-to-constructed path:

1. lived situation;
2. deeper experience detail;
3. tentative model and correction;
4. model-guided changed condition, role reversal, or transfer;
5. comparison back to the lived situation and model revision.

The path must demonstrate a clear lived-situation prompt, honest detail capture, tentative interpretation, free-form correction, probe selection rationale, a clearly labelled constructed situation, transfer back to the lived account, model revision, export, and reset.

## Completion criteria

The public MVP is ready when a practitioner can create a seeded client routine, the client can complete the lived-to-constructed loop, correct the agent's interpretation, understand why a probe was selected, submit a reviewable report, export or delete data, and read the product's model, privacy, safety, and therapist-review documentation from a clean browser.
