# Architecture

Judgment Gym is organised around a small practice state machine rather than around individual UI patches.

## Layers

- `src/domain/` contains scenarios, domain types, next-scenario rules, and the deterministic synthesis fallback. It has no browser or network dependencies.
- `src/lib/storage.ts` owns the local persistence contract and import/export normalization. Browser storage and imported JSON use the same normalization path.
- `src/lib/reflection.ts` owns the client boundary to `/api/reflect`; the API route remains the server boundary for the OpenAI call.
- `src/components/` contains screen-level views. Components render state and emit user intent; they do not decide which scenario comes next or write persistence directly.
- `src/App.tsx` coordinates transitions between `welcome`, `respond`, `review`, `threads`, and `privacy`.

## State transitions

1. `Reflect` resumes the current incomplete scenario, opens the next incomplete scenario, or opens the completed model.
2. Submitting a response produces a review state. The response is never replaced by the model.
3. Keeping a reflection adds or replaces evidence for that scenario and returns to the synthesized model.
4. The synthesized model is always shown above scenario evidence. A scenario can be opened independently for its original response and threads.
5. Importing data normalizes older or partial exports before returning to the welcome state, so a saved five-scenario journey remains reviewable.

## Compatibility contract

The browser key remains `judgment-gym-demo`. Exported JSON continues to use the existing top-level fields: `response`, `correction`, `threads`, `tension`, `synthesis`, `history`, and `scenarioIndex`.

The normalization layer supplies safe defaults, clamps the scenario index, and reconstructs a deterministic synthesis when an older export has history but no saved synthesis. This allows architecture changes without requiring users to delete their practice data.
