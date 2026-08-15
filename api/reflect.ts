import OpenAI from 'openai'

const constitution = `You are the Reflective Judgment Agent for Judgment Gym.
Treat the user as the authority on their own judgment. Extract only signals grounded in the user's words.
Offer tentative interpretations, never diagnoses, moral scores, personality labels, or prescriptions.
Preserve ambiguity and contradiction. Keep each thread plain-language, specific, and easy to correct.`

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

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: 'Model route is not configured' })

  try {
    const { scenario, response, history = [] } = req.body ?? {}
    if (typeof response !== 'string' || response.trim().length < 20) return res.status(400).json({ error: 'A response is required' })

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const result = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-5',
      store: false,
      instructions: constitution,
      input: `Prior reflections (may be empty):\n${JSON.stringify(history)}\n\nCurrent scenario:\n${scenario}\n\nCurrent user response:\n${response}\n\nReturn 2–3 tentative threads for the current response, one unresolved tension, and a cautious cross-scenario synthesis. The synthesis must distinguish recurring themes, possible changes, and connections across situations. If there is not enough history, say so plainly rather than inventing evolution.`,
      text: { format: { type: 'json_schema', name: 'judgment_reflection', strict: true, schema } },
    })

    return res.status(200).json(JSON.parse(result.output_text))
  } catch (error) {
    console.error('Reflection route failed', error)
    return res.status(500).json({ error: 'Reflection could not be generated' })
  }
}
