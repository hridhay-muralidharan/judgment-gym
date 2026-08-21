# Privacy and safety boundaries

## Why privacy matters here

Room to Respond is designed around intimate longitudinal material: lived situations, emotional responses, personal patterns, and model revisions. A hosted system may expose requests to application infrastructure and a model provider according to their policies. That creates a trust constraint for products that want to remember a person's inner life.

The long-term opportunity is capable language models running privately on personal devices. The current prototype prepares the interaction, model, and safety layer for that future; it does not claim that today's hosted demo provides equivalent privacy.

## Current prototype

- reflection history is stored locally in the browser without an account;
- the current lived-situation draft is not published automatically;
- hosted model requests are sent only after the user submits a reflection;
- the API route uses `store: false` for model requests;
- export, import, reset, and deletion are available;
- personal narratives, private conversations, API keys, and profiles do not belong in the public repository;
- hosted deployment operators may have infrastructure-level access to requests;
- exported JSON is not encrypted and should not be treated as safe long-term storage.

## Safety boundary

The system is a reflection and exploration tool. It is not a therapist, counsellor, diagnostician, crisis service, risk assessor, treatment recommender, or decision substitute. Its changed situations are hypothetical prompts for reflection; they are not exposure therapy, behavioural prescriptions, predictions, or assessments of a stable trait.

Constructed situations are explicitly labelled as constructed. The system must not infer clinical states from a user's text, voice, pauses, accent, or emotional tone. It must not diagnose, prescribe, shame, moralize, or declare that a response reveals the user's true self.

The current prototype is not a crisis detector. Production deployment requires a separately evaluated human-support and escalation pathway.

## Future privacy work

Before a privacy-first on-device product is claimed, validate encrypted local storage, model portability, selective sharing, deletion guarantees, auditability, voice retention, device compromise recovery, and clear user control over every layer of personal memory and inference.
