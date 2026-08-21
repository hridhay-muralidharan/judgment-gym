import OpenAI from 'openai'

const constitution = `You are the private journey-mapping agent for Room to Respond. Turn a user's long-form account into a cautious, evidence-linked evolution model across contexts.
Do not diagnose, infer trauma, assign personality types, judge morality, or claim to know the user's true self. Treat every interpretation as a hypothesis. Separate what the user directly described from your synthesis. Preserve contradiction and uncertainty. Do not invent events, dates, employers, motives, or outcomes. Use plain language. The user remains the authority and must edit the result before sharing it.`

const schema = {
  type: 'object', additionalProperties: false,
  properties: {
    thesis: { type: 'string' },
    periods: { type: 'array', minItems: 1, maxItems: 8, items: { type: 'object', additionalProperties: false, properties: {
      label: { type: 'string' }, context: { type: 'string' }, turningPoint: { type: 'string' }, faculties: { type: 'array', items: { type: 'string' }, minItems: 1, maxItems: 4 }, shift: { type: 'string' }, evidence: { type: 'string' },
    }, required: ['label', 'context', 'turningPoint', 'faculties', 'shift', 'evidence'] } },
    evolution: { type: 'array', items: { type: 'string' }, minItems: 2, maxItems: 5 },
    openQuestions: { type: 'array', items: { type: 'string' }, minItems: 2, maxItems: 5 },
    interviewNarrative: { type: 'string' },
  },
  required: ['thesis', 'periods', 'evolution', 'openQuestions', 'interviewNarrative'],
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: 'Model route is not configured' })
  try {
    const narrative = req.body?.narrative
    const mode = req.body?.mode || 'multiple-situations'
    if (!['single-event', 'one-situation', 'multiple-situations'].includes(mode)) return res.status(400).json({ error: 'A valid account scope is required' })
    if (typeof narrative !== 'string' || narrative.trim().length < 120) return res.status(400).json({ error: 'A longer account is required' })
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const result = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-5', store: false, instructions: constitution,
      input: `Map this private account using the selected scope: ${mode}. If the scope is single-event, focus on one episode and its sequence. If it is one-situation, identify several events within one context and show how they relate. If it is multiple-situations, keep periods chronological and show changes across contexts. Use only the supplied material. Every evidence field should briefly point to the user's account rather than inventing a citation. The interview narrative should be 100–150 words, first person, and suitable as a draft answer to a product-management interviewer.\n\nPRIVATE ACCOUNT:\n${narrative}`,
      text: { format: { type: 'json_schema', name: 'room_to_respond_journey', strict: true, schema } },
    })
    return res.status(200).json(JSON.parse(result.output_text))
  } catch (error) {
    console.error('Journey route failed', error)
    return res.status(500).json({ error: 'Journey model could not be generated' })
  }
}
