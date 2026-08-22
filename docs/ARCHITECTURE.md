# Architecture

Room to Respond is organised around a practitioner routine → client practice → report → practitioner review loop.

## Layers

- `src/domain/` contains scenarios, typed experience/model records, probe fixtures, and deterministic fallback logic.
- `src/lib/storage.ts` owns local persistence and import/export normalization.
- `src/lib/reflection.ts` owns the client boundary to `/api/reflect`.
- `api/reflect.ts` is the hosted model boundary for a single lived situation and returns structured reflection threads, tensions, synthesis, and one probe.
- `api/journey.ts` is the hosted model boundary for a private long-form account and returns a chronological, faculty-linked evolution model and editable account draft.
- `src/components/PractitionerWorkspace.tsx` renders the seeded practitioner routine builder, client routine, and assignment/report handoff.
- `src/components/` renders the lived account, model review, constructed exploration, transfer review, training record, long-form map, practitioner workspace, and privacy surfaces.

## State transitions

1. The practitioner creates or selects a routine for a client.
2. The client starts with a real situation and adds optional structured details.
3. The model proposes evidence-linked threads and a constructed probe.
4. The client corrects the model and may try the probe.
5. The client responds to the constructed situation.
6. The transfer view compares the two responses and creates a report.
7. The practitioner reviews the report and prepares the next routine.

## Compatibility

The browser key remains `room-to-respond-demo`. Older practice exports remain readable because new fields are optional. Personal narratives and hosted model requests are not committed to the repository. The current practitioner workspace is a seeded prototype; client identity, authentication, permissions, secure sharing, and server-side reports remain product work for a production deployment.
