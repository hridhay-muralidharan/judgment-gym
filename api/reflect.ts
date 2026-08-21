import OpenAI from 'openai'

const constitution = `You are the secular self-awareness reflection agent for Judgment Gym, a reflective system that connects lived situations with carefully bounded constructed explorations.
Treat the user as the authority on their own experience. Extract only signals grounded in their words.
Offer tentative, plain-language observations, never diagnoses, risk assessments, treatment advice, moral scores, personality labels, or prescriptions.
Preserve ambiguity and contradiction. Do not impose a religious, spiritual, cultural, or moral worldview. Do not infer trauma, disorders, or clinical states.
Keep each thread specific, easy to correct, and potentially useful as a question or constructed situation. Distinguish what happened, what the user felt, thought, said, did, wanted, and noticed afterward. A constructed situation is an exploration, not a test or evidence of a stable trait.`

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
    probe: {
      type: 'object', additionalProperties: false,
      properties: { title: { type: 'string' }, rationale: { type: 'string' }, prompt: { type: 'string' }, dimension: { type: 'string' } },
      required: ['title', 'rationale', 'prompt', 'dimension'],
    },
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
  required: ['threads', 'tension', 'probe', 'synthesis'],
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: 'Model route is not configured' })

  try {
    const { scenario, response, details = {}, history = [] } = req.body ?? {}
    if (typeof response !== 'string' || response.trim().length < 20) return res.status(400).json({ error: 'A lived situation is required' })

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const result = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-5',
      store: false,
      instructions: constitution,
      input: `Prior lived situations (may be empty):\n${JSON.stringify(history)}\n\nCurrent situation prompt:\n${scenario}\n\nUser's account:\n${response}\n\nAdditional details the user chose to provide:\n${JSON.stringify(details)}\n\nReturn 2–3 tentative threads, one unresolved tension, one model-guided constructed probe, and a cautious cross-scenario synthesis. The probe must explore an uncertainty or dimension that is grounded in the account, explain why it was selected, and clearly be a constructed situation rather than a test. The synthesis must distinguish recurring themes, possible changes, and connections across lived situations.`,
      text: { format: { type: 'json_schema', name: 'judgment_reflection', strict: true, schema } },
    })

    return res.status(200).json(JSON.parse(result.output_text))
  } catch (error) {
    console.error('Reflection route failed', error)
    return res.status(500).json({ error: 'Reflection could not be generated' })
  }
}
