# Open shared tool specification

The open tool lets a practitioner and client use the same routine with their own content. It follows the guided demo, while replacing seeded content with a routine that the practitioner creates and shares.

## Practitioner side

The practitioner can:

1. create a routine from a client goal;
2. select the mental faculties to exercise;
3. arrange the exercises in order;
4. write a short purpose and practitioner note;
5. define what the client will bring back;
6. share the routine with the client;
7. see whether the client has started, saved, or submitted it;
8. review the submitted report;
9. add feedback and an open question;
10. prepare the next routine from the report.

## Client side

The client can:

1. open a routine shared by the practitioner;
2. read its purpose and sharing boundary;
3. bring in a real situation;
4. add optional details about feeling, thought, speech, action, want, consequence, and present meaning;
5. review, correct, qualify, or reject model observations;
6. complete a clearly labelled constructed exercise;
7. compare the lived and constructed situations;
8. edit the report;
9. choose what to share;
10. submit the report to the practitioner;
11. read practitioner feedback when it is available.

## Shared routine record

The first implementation should treat these fields as the shared contract:

```text
routine
  id
  title
  purpose
  clientGoal
  faculties[]
  exercises[]
  practitionerNote
  sharingBoundary
  status

practice
  livedSituation
  experienceDetails
  modelObservations[]
  clientCorrections
  constructedSituation
  constructedResponse
  comparison
  report
  reportStatus

review
  practitionerFeedback
  nextQuestion
  nextRoutineDraft
```

## Sharing model for the prototype

The prototype uses local seeded state and a visible role switch. It should make the shared record feel real without pretending to provide production collaboration, authentication, or secure remote sharing.

The open workflow should make these future boundaries visible in the product architecture:

- practitioner access;
- client access;
- report ownership;
- explicit client sharing;
- practitioner feedback visibility;
- routine versioning;
- deletion and export.

## Open-tool entry points

The product should offer two clear entry points:

- **Practitioner:** create or open a routine for a client.
- **Client:** open a routine shared by a practitioner.

The guided demo remains available as a way to understand the product before using either entry point.

## Open-tool acceptance test

The open tool is ready for review when a practitioner can create a routine, a client can complete it with their own situation, and the practitioner can receive feedback-ready material without leaving the shared routine context.
