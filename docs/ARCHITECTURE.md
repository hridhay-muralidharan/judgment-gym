# Architecture

Judgment Gym is organised around a lived-situation → model → constructed-exploration loop.

## Layers

- `src/domain/` contains scenarios, typed experience/model records, probe fixtures, and deterministic fallback logic.
- `src/lib/storage.ts` owns local persistence and import/export normalization.
- `src/lib/reflection.ts` owns the client boundary to `/api/reflect`.
- `api/reflect.ts` is the hosted model boundary and returns structured reflection threads, tensions, synthesis, and one probe.
- `src/components/` renders the lived account, model review, constructed exploration, transfer review, model, and privacy surfaces.

## State transitions

1. The user starts with a real situation.
2. Optional structured details deepen the account.
3. The model proposes evidence-linked threads and a constructed probe.
4. The user corrects the model and may try the probe.
5. The user responds to the constructed situation.
6. The transfer view compares the two responses.
7. The user saves the exploration or returns without saving.

## Compatibility

The browser key remains `judgment-gym-demo`. Older practice exports remain readable because new fields are optional. Personal narratives and hosted model requests are not committed to the repository.
