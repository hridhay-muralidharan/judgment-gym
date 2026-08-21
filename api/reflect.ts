import OpenAI from 'openai'

const constitution = `You are the secular self-awareness reflection agent for Judgment Gym, a between-session support tool for mental health products.
Treat the user as the authority on their own experience. Extract only signals grounded in their words.
Offer tentative, plain-language observations, never diagnoses, risk assessments, treatment advice, moral scores, personality labels, or prescriptions.
Preserve ambiguity and contradiction. Do not impose a religious, spiritual, cultural, or moral worldview. Do not infer trauma, disorders, or clinical states.
Keep each thread specific, easy to correct, and potentially useful as a question or example the user may choose to bring to a qualified clinician.`

const schema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    threads: {
      type: 'array',
      minItems: 2,
      maxItems: 3,
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          title: { type: 'string' },
          description: { type: 'string' },
          evidence: { type: 'string' },
        },
        required: ['title', 'description', 'evidence'],
      },
    },
    tension: { type: 'string' },
    synthesis: {
      type: 'object',
      additionalProperties: false,
      properties: {
        summary: { type: 'string' },
        recurringThemes: { type: 'array', items: { type: 'string' }, minItems: 1, maxItems: 3 },
        changes: { type: 'array', items: { type: 'string' }, minItems: 1, maxItems: 3 },
        connections: { type: 'array', items: { type: 'string' }, minItems: 1, maxItems: 3 },
      },
      required: ['summary', 'recurringThemes', 'changes', 'connections'],
    },
  },
  required: ['threads', 'tension', 'synthesis'],
}

const storySchema = {
  type: 'object', additionalProperties: false,
  properties: {
    framing: { type: 'string' },
    evolution: { type: 'array', minItems: 2, maxItems: 5, items: { type: 'object', additionalProperties: false, properties: { period: { type: 'string' }, shift: { type: 'string' }, evidence: { type: 'string' } }, required: ['period', 'shift', 'evidence'] } },
    patterns: { type: 'array', minItems: 2, maxItems: 5, items: { type: 'object', additionalProperties: false, properties: { title: { type: 'string' }, description: { type: 'string' }, status: { type: 'string', enum: ['tentative', 'user-stated', 'context-dependent'] }, evidence: { type: 'string' } }, required: ['title', 'description', 'status', 'evidence'] } },
    currentDirection: { type: 'string' },
    interviewNarrative: { type: 'string' },
    followUps: { type: 'array', minItems: 2, maxItems: 4, items: { type: 'string' } },
    sharingNote: { type: 'string' },
  },
  required: ['framing', 'evolution', 'patterns', 'currentDirection', 'interviewNarrative', 'followUps', 'sharingNote'],
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: 'Model route is not configured' })

  try {
    const { mode = 'reflection', scenario, response, history = [], narrative } = req.body ?? {}
    if (mode === 'story') {
      if (typeof narrative !== 'string' || narrative.trim().length < 80) return res.status(400).json({ error: 'A longer narrative is required' })
      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
      const result = await client.responses.create({
        model: process.env.OPENAI_MODEL || 'gpt-5', store: false,
        instructions: `${constitution}\n\nYou are also a narrative editor. Organize the user's autobiographical account into an evolution, not a diagnosis. Use narrative identity as the organizing frame; use values and motivation, episode-level situation/interpretation/emotion/action structure, and cautious coping-language observations only when grounded in the text. Separate observed or user-stated material from tentative hypotheses. Preserve competing explanations and do not infer trauma, attachment style, disorders, or childhood causes unless the user explicitly states them. Produce a 120–170 word professional interview narrative that is truthful, memorable, and excludes intimate details unless necessary. Do not mention therapy in the interview narrative unless the user explicitly asks for it.`,
        input: `User's raw narrative:\n${narrative}\n\nReturn a reviewable longitudinal model. Every evolution item and pattern must include evidence wording that reminds the user why it is provisional.`,
        text: { format: { type: 'json_schema', name: 'judgment_story_model', strict: true, schema: storySchema }, },
      })
      return res.status(200).json(JSON.parse(result.output_text))
    }
    if (typeof response !== 'string' || response.trim().length < 20) return res.status(400).json({ error: 'A response is required' })

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const result = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-5',
      store: false,
      instructions: constitution,
      input: `Prior reflections (may be empty):\n${JSON.stringify(history)}\n\nCurrent scenario:\n${scenario}\n\nCurrent user response:\n${response}\n\nReturn 2–3 tentative threads for the current response, one unresolved tension, and a cautious cross-scenario synthesis. The synthesis must distinguish recurring themes, possible changes, and connections across situations. When history is limited, describe the model as provisional and grounded in the available evidence.`,
      text: { format: { type: 'json_schema', name: 'judgment_reflection', strict: true, schema } },
    })

    return res.status(200).json(JSON.parse(result.output_text))
  } catch (error) {
    console.error('Reflection route failed', error)
    return res.status(500).json({ error: 'Reflection could not be generated' })
  }
}
