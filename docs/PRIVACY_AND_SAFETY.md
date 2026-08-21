# Privacy and safety boundaries

## Why privacy matters here

Room to Respond is designed around intimate longitudinal material: lived situations, emotional responses, personal patterns, and model revisions. A hosted system may expose requests to application infrastructure and a model provider according to their policies. That creates a trust constraint for products that want to remember a person's inner life.

The long-term opportunity is capable language models running privately on personal devices. Today's prototype prepares the interaction, model, and safety layer for that future. Hosted inference and on-device inference are documented separately so users can understand the privacy properties of each.

## Current prototype

- reflection history is stored locally in the browser and the current prototype requires no account;
- the current lived-situation draft is published only when the user chooses to send it for reflection;
- hosted model requests are sent after the user submits a reflection or asks for a long-form account map;
- the API route uses `store: false` for model requests;
- export, import, reset, and deletion are available;
- personal narratives, private conversations, API keys, and profiles remain outside the public repository;
- hosted deployment operators may have infrastructure-level access to requests;
- exported JSON is unencrypted and intended for user-controlled transfer. Secure long-term storage is part of the privacy-first product work.

## Safety boundary

The system is a reflection and exploration tool. Therapy, counselling, diagnosis, crisis support, risk assessment, treatment recommendations, and consequential decisions belong with qualified people and services. Its changed situations are hypothetical prompts for reflection.

Constructed situations are explicitly labelled as constructed. The model operates on the user's words and context; it does not infer clinical states from text, voice, pauses, accent, or emotional tone. Model outputs use plain, non-clinical language and avoid diagnosis, prescription, shame, moral judgment, and claims about a user's true self.

The current prototype has no crisis-detection pathway. Production deployment requires a separately evaluated human-support and escalation pathway.

## Future privacy work

A privacy-first on-device product requires encrypted local storage, model portability, selective sharing, deletion guarantees, auditability, voice-retention controls, device-compromise recovery, and clear user control over every layer of personal memory and inference. These capabilities define the launch standard for the on-device opportunity.
