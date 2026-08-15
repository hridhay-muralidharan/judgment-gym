import type { Synthesis, Thread } from '../domain/types'

export type HistoryInput = { scenario: string; response: string; correction: string; threads: Thread[]; tension: string }
export type ReflectionResult = { threads?: Array<Pick<Thread, 'title' | 'description' | 'evidence'>>; tension?: string; synthesis?: Synthesis }
