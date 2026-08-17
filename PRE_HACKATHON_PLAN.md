# Judgment Gym — Pre-Hackathon Plan

## Objective

Create and publish a standalone `judgment-gym` repository during the four-hour hackathon. The public product will demonstrate an evolving personal judgment model built through scenario-based conversations with a live AI agent.

The public repository will contain the generalised method. Personal reflections and the user's personal worldview remain private.

## Product boundary

The product is not a counselling or therapy system, personality test, moral evaluator, model-comparison benchmark, or coding-agent wrapper. It is a reflective practice that helps users express, inspect, correct, and revisit their own judgment.

The agent must preserve ambiguity and contradiction, distinguish user words from model interpretation, and treat every inference as provisional until the user reviews it.

## Pre-hackathon boundary

Pre-event work is documentation and planning only. Do not write application code, create the public GitHub repository, configure deployment, add API credentials, or execute the during-hackathon runbook.

## Technical direction

- React, Vite, and TypeScript frontend.
- Vercel server-side routes for model calls.
- OpenAI Responses API with structured outputs.
- Direct live model connectivity during the hackathon; no Codex or coding-agent wrapper.
- Local-first browser state with encrypted export/import.
- API key stored only as a server-side deployment secret.
- Fixtures reserved for tests and provider-failure recovery.

## User model

Store raw responses, tentative signals, user corrections, confirmed or contested patterns, unresolved tensions, evidence links, conditions, exceptions, and revision history. Never silently overwrite earlier judgment. Contradiction becomes a tension or condition rather than a forced personality label.

Long-term memory must use recent context, rolling summaries, profile patterns, unresolved tensions, and retrieved evidence rather than sending an entire multi-year history in every prompt.

## Source policy

Use six source-derived seeds across biography/autobiography, historical events, and verified public-domain fiction. Sources provide connected circumstances, not source-person profiles. Record provenance, licence basis, access date, and content hash. Use full excerpts only from verified public-domain editions; otherwise use original summaries and links. Write all user-facing scenarios originally.

## Demo journey

Use one coherent five-scenario path:

1. baseline;
2. changed condition;
3. role reversal or vulnerability;
4. unresolved tension;
5. transfer or user-authored scenario.

The path must demonstrate a clear first prompt, honest reflection, tentative interpretation, free-form correction, pattern refinement, adaptive scenario selection, open-question review, export, and reset.

## Completion criteria

The public MVP is ready when a new user can complete the five-scenario journey without an account, correct the agent's interpretation, see evidence-linked threads and tensions, understand why the next scenario was selected, export or delete data, and use the deployed product from a clean browser.
