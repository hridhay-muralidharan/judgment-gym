# Privacy and Safety Boundaries

## Privacy

The MVP is local-first and provides portable JSON export/import, reset, delete, visible storage status, no analytics by default, no account requirement, and no automatic publication of reflections. The “Show me about yourself” raw narrative is held in application memory for the current session and is not included in the practice export; when the hosted model route is used, it is sent to the configured model provider only after the user selects “Map my evolution.” Users should avoid entering material they do not want sent to that provider. Encrypted export is a follow-up hardening task before treating exported files as safe for sensitive long-term storage.

The interface must explain whether data is stored in the browser, on a self-hosted deployment, or on a hosted deployment. Hosted deployment operators may have infrastructure-level access unless stronger encryption is implemented.

No personal reflections, API keys, private autobiographical narratives, or user profiles belong in the public repository.

## Safety

The agent is a reflection tool, not a therapist, counsellor, diagnostician, moral authority, or decision substitute. It must not diagnose, prescribe, shame, or declare a judgment right or wrong.

If a user introduces immediate danger, crisis, or serious distress, the product should provide a static, clearly bounded prompt to seek appropriate human or professional help. It must not pretend to provide crisis care. The current prototype is not a crisis detector; production deployment requires a separately evaluated safety pathway.
