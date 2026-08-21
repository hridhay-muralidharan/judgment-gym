# Self-model research basis for v1

Room to Respond uses a transparent episode-and-development model. Psychotherapy, personality research, motivation research, and narrative psychology offer complementary constructs for different purposes.

## The model used in the product

The model has five layers:

1. **Context:** environment, role, relationships, incentives, constraints, culture, and life stage.
2. **Lived episode:** what happened; what the person noticed; body and emotion; thought and interpretation; what they said and did; what they wanted; consequence; and later meaning.
3. **Faculties:** attention, emotion regulation, memory, meaning-making, metacognition, cognitive flexibility, motivation, values, judgment, social cognition, imagination, and learning.
4. **Development:** repeated patterns, context shifts, new strategies, unresolved tensions, and evidence of change.
5. **Epistemic status:** observation, user interpretation, model hypothesis, uncertainty, contradiction, and user correction.

This is a working product model for reflection. Clinical formulation, personality testing, and a theory of the whole psyche remain outside the product's scope.

## What is actually implemented in v1

The current prototype implements a simpler version of this model. It records the situation, the person's account of what they felt, thought, said, did, wanted, and noticed afterward; tentative observations; the person's corrections; an unresolved tension; a constructed variation; and what changed when the person compared the two responses. The long-form map accepts one text input and can be configured for one event, several events within one situation, or several situations across time.

The research lenses below guide future design and therapist review. Current implementation uses them as conceptual references, with no diagnostic or clinical assessment layer. The current model is an episode-and-development map informed by CBT, schema, and narrative-identity concepts.

## Layer 1 — Narrative identity

Narrative identity is the organizing layer for longitudinal work. McAdams describes identity as an internalized, evolving life story that gives experiences unity and purpose. Research on life stories also examines chapters, key scenes, turning points, self-event connections, and autobiographical reasoning.

**What it contributes:** timelines, transitions, turning points, identity themes, continuity, change, and the user's current direction.

**What the product may say:** “Your account describes a shift from externally expected roles toward work you experience as more self-endorsed.”

**Language the product excludes:** “This is your true identity” and “your life has one underlying meaning.”

Source: [McAdams, The Psychology of Life Stories](https://doi.org/10.1037/1089-2680.5.2.100).

## Layer 2 — Values and motivation

Self-Determination Theory provides a useful lens for examining autonomy, competence, and relatedness. It is especially relevant to Room to Respond because lived narratives often involve tension between external expectations, status, mastery, contribution, and self-endorsed direction.

**What it contributes:** possible motives, need tensions, external versus self-endorsed reasons, and conditions that support agency.

**Use:** a value or need is presented as a hypothesis about the episode. The system asks whether the interpretation fits and preserves alternatives.

Source: [Ryan and Deci, Self-Determination Theory and the Facilitation of Intrinsic Motivation](https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf).

## Layer 3 — Episode-level cognitive-behavioural formulation

For a specific event, a CBT-style formulation can organize the relationship between situation, automatic interpretation, emotion or body response, behaviour, short-term consequence, and longer-term consequence. This is useful for making a reflection concrete without pretending to formulate a person clinically.

**What it contributes:** event-level structure, alternative interpretations, response options, and evidence for or against a conclusion.

**Use:** the product uses a lightweight reflection map. Clinical case formulation, disorder, trauma, and treatment inferences belong with qualified clinicians.

## Layer 4 — Schema and coping-language lens

Schema therapy offers language for recurring beliefs, unmet needs, and coping modes. It can help a person discuss whether a protective response appears in more than one context. However, the evidence base is heterogeneous and many schema constructs were developed in clinical settings.

**What it contributes:** careful hypotheses about recurring protective strategies, inner criticism, avoidance, overcompensation, or a more supportive adult stance.

**Use:** schema language remains optional and plain language comes first. The product does not assign diagnostic labels, modes, or established childhood explanations.

Source: [Bär et al., Early Maladaptive Schemas and Schema Modes in Clinical Disorders](https://doi.org/10.1111/papt.12465), and [Muste et al., A Systematic Review of the Heterogeneity of Schema Therapy](https://pubmed.ncbi.nlm.nih.gov/37002933/).

## Why these research lenses belong together

They answer different questions:

| Question | Lens | V1 representation |
| --- | --- | --- |
| What changed across the person's life? | Narrative identity | chapters, turning points, identity shifts |
| What appears to matter in a decision? | Values and motivation | possible values, needs, and external pressures |
| What happened in this episode? | CBT-style map | situation, interpretation, emotion, action, consequence |
| What may recur under pressure? | Schema/coping language | tentative protective pattern, conditions, exceptions |

These lenses answer different questions and may inform future workouts. They should remain visibly separate from the product's observations. The model must preserve the distinction between observation, interpretation, and clinical concept. It should show the evidence that led to a hypothesis and invite correction.

## v1 claim contract

Every generated claim should be one of:

- **Observed:** directly represented in the user's words.
- **User-stated:** an interpretation the user explicitly supplied.
- **Tentative:** a model-generated hypothesis requiring review.
- **Context-dependent:** a pattern the user says changes with circumstances.
- **Unresolved:** a useful question or tension without a conclusion.

Model-generated claims stay in the tentative category until the user endorses the wording for this context. Endorsed wording remains revisable.

## Research gaps

Before making clinical or efficacy claims, Room to Respond needs expert review and studies of:

- whether the prompts elicit useful, non-leading reflection;
- whether model claims are accurate and well-calibrated;
- whether user correction improves the model or merely increases agreement;
- whether the flow reduces or increases rumination;
- whether users retain agency rather than outsourcing self-interpretation;
- whether therapists find the outputs useful and not burdensome;
- how the model behaves across cultures, languages, identities, and different therapy approaches.

## From lived account to constructed exploration

The model is also a constructed-exploration tool. A lived account supplies evidence about a person-in-context. The system can use open questions in that account to select a constructed probe: change one condition, reverse a role, explore an underrepresented need, or transfer the pattern to another domain. The resulting response is new evidence about the person's response under that constructed condition and remains context-specific.

The important research question is whether comparison between the lived and constructed situations helps a person notice a useful distinction and return to the lived situation with a better question. A simulation that does not transfer back to real experience may be interesting but is not yet a Room to Respond outcome.
