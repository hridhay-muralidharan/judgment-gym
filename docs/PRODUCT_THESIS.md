# Room to Respond — product thesis

Room to Respond is a research prototype for therapists and life coaches to create personalised mental workout routines for clients. Clients practise between sessions using real-life situations, guided scenarios, text, and voice, then share reviewable reports with their practitioner.

We can understand Room to Respond through a parallel with physical activity. Modern life reduced some of the physical activity built into daily life. Cars replaced some walking. Elevators replaced some climbing. Machines reduced some manual work. This contributed to physical inactivity. ([WHO Global status report on physical activity](https://www.who.int/publications/i/item/9789240059153)).

The challenges arising out of physical inactivity have led us to dedicated workout routines. For example, physical gyms provide physical workouts for physical muscles. They bring different exercises together in a practical routine. What if we had a gym for the mind? Room to Respond is such a gym.

## A Gym for the mind!

Modern life also changes how people use their minds. Social media, notifications, and smartphones compete for attention; digital environments shape how people experience and regulate emotion; search, recommendation systems, and generative AI make it easier to offload remembering, comparing, drafting, and deciding; and faster communication and more complex work create more frequent social and practical judgments.

We’ve attempted to address many of these challenges through therapy. However, mental health also has a development side to it. People can work with therapists and life coaches to strengthen the mental faculties: attention, emotion awareness, self-regulation, perspective, motivation, judgment, communication, flexibility, foresight, and learning. With GenAI shifting skill development toward subtler skills such as judgment, taste, self-awareness, communication, emotional regulation, and sense-making, my hypothesis is that people will increasingly place more emphasis on active development of mental faculties. More details can be found in [From mental healthcare to mental fitness](MENTAL_FITNESS_CATEGORY_THESIS.md).

## Target Audience

Room to Respond is for therapists, life coaches, and clients who already use technology for mental health, wellbeing, coaching, journaling, meditation, habits, learning, or personal development. The practitioner is the buyer and routine creator. The client is the person who practises between sessions and shares a report. Digital mental-health, therapy, coaching, and wellbeing companies are potential distribution partners.

The audience is global. The [Target audience and market](TARGET_AUDIENCE.md) snapshot shows the current TAM and SAM signals and the available geographic distribution of digital mental-health users.

## What are the mental faculties and how do we organise them?

We can group mental faculties by the role that they play in any situation:

- **Notice:** attention, perception, emotion awareness, and bodily signals. Diamond's review of executive functions covers attention, inhibition, working memory, and flexibility as core capacities for controlling thought and action ([source](https://doi.org/10.1146/annurev-psych-113011-143750)).
- **Understand:** memory, meaning-making, metacognition, assumptions, and perspective. Research on autobiographical memory describes how people connect experiences with identity and life narratives ([Fivush](https://doi.org/10.1080/00207594.2011.596541)).
- **Choose:** values, motivation, judgment, decisions, and self-regulation. Self-determination theory connects autonomy, competence, and relatedness with motivation and wellbeing ([Deci, Olafsen, and Ryan](https://doi.org/10.1146/annurev-orgpsych-032516-113108)).
- **Adapt:** cognitive flexibility, imagination, foresight, feedback, and learning. Research links executive flexibility and prospection with changing strategy, planning, and action ([Diamond](https://doi.org/10.1146/annurev-psych-113011-143750); [Szpunar](https://pmc.ncbi.nlm.nih.gov/articles/PMC4074678/)).

A mental workout can follow a real situation from perception through action and learning and move across all 4 groups. Room to Respond brings the relevant exercises together into a practical routine for a client to exercise their mental faculties.

## Prototype: one practitioner-led mental workout

A practitioner assigns the first routine. The client brings in a real situation and describes what happened, what they felt, thought, said, did, wanted, and noticed afterward.

The system then:

1. reflects back a few tentative observations for the client to keep, revise, or reject;
2. changes one condition in the situation, such as the amount of time or support available;
3. asks the client to respond to the changed situation;
4. compares the two responses and asks what could be useful in real life;
5. creates a report that the client can edit and share with the practitioner.

The practitioner reviews what changed, what stayed open, and what the client wants to explore. This informs the next routine.

The workout exercises emotion awareness, metacognition, cognitive flexibility, prospection, and learning. Memory, values, social cognition, and meaning-making may also appear in the account. This first routine is a research prototype; evaluation will examine which outcomes the prompts affect and how exercises for a wider range of faculties can be combined into efficient mental workout routines.

For longer accounts, the input text box can be configured to analyse one event, several events within one situation, or several situations across time.

## Role of Gen AI

GenAI marks an inflection point because it can build a workout around the client's own situation and adapt the next exercise to the client's words, context, and previous practice. It can:

- asking context-specific questions;
- retaining a user-correctable practice history;
- offering multiple interpretations;
- generating changed conditions and alternative perspectives;
- supporting role-play and dialogue rehearsal;
- exploring possible consequences;
- helping compare situations across time;
- supporting text and future voice interaction.

The client supplies the experience, reviews the interpretation, and decides what to carry forward. The practitioner sets the direction and reviews the report.

## Research and validation

Each faculty needs its own research review. The review should cover:

- the faculty's role in human life;
- the difficulties associated with poorer functioning;
- the outcomes associated with stronger functioning;
- evidence that the faculty or related process can develop;
- evidence for transfer beyond the exercise;
- the appropriate role for GenAI;
- risks, limitations, and population differences;
- meaningful progress measures.

## Privacy: the guardrail and the roadblock

Privacy is central because the product works with intimate situations, emotional responses, personal patterns, and changes across time. A practitioner-client product also needs clear control over what the client shares, what the practitioner can review, and what the model processes. A hosted product sends that material through an application operator and a model provider.

On-device inference opens the path to privacy-first personal AI products. Personal memory and reasoning can stay on the user's device. The launch standard includes local encryption, deletion, recovery, sharing, and device security alongside capable reasoning.

The go-to-market trigger is therefore a hypothesis: launch the privacy-first version when on-device models can provide the reasoning quality needed for the workouts and the full privacy system has been validated.

The preparation period requires validated workouts and outcome measures, therapist, coach, and client review, a user-controlled model of experiences and uncertainty, text and voice interaction designs, local storage and deletion safeguards, selective sharing, a portable model layer, and distribution relationships with therapists and mental-health organisations. Today's prototype uses hosted inference when configured and prepares these foundations for a future on-device product.

## Product name

“Room to Respond” is the approved product name. It names the space the product creates for people to notice, understand, practise, and choose across different human faculties.

## Boundaries

Room to Respond is a reflection and exploration product. Therapy, diagnosis, crisis support, risk assessment, treatment recommendations, and care decisions belong with qualified professionals and services. Constructed situations are exercises for observation and reflection. The system operates on the user's words and context and does not infer clinical states from text, voice, pauses, accent, or emotional tone.
