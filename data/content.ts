export interface ConceptDefinition {
  term: string
  definition: string
  source: string
  sourceContext: string
  color: 'gold' | 'blue'
}

export interface Highlight {
  text: string
  conceptKey: string
}

export interface InterviewEntry {
  id: number
  question: string
  answer: string
  highlights: Highlight[]
  tags: string[]
}

export interface InsightQuote {
  text: string
  context: string
}

export const concepts: Record<string, ConceptDefinition> = {
  double_consciousness: {
    term: 'Double Consciousness',
    definition:
      'The sense of always looking at oneself through the eyes of others — a psychological tension between one\'s own identity and the identity imposed by society. Du Bois described it as "this sense of always looking at one\'s self through the eyes of others, of measuring one\'s soul by the tape of a world that looks on in amused contempt and pity."',
    source: 'W.E.B. Du Bois',
    sourceContext: 'The Souls of Black Folk (1903)',
    color: 'gold',
  },
  two_ness: {
    term: 'Two-ness',
    definition:
      'Du Bois described the feeling of inhabiting two selves simultaneously — "two souls, two thoughts, two unreconciled strivings." This internal division is not weakness, but the product of navigating a world that demands you be legible to others before you can be fully yourself.',
    source: 'W.E.B. Du Bois',
    sourceContext: 'The Souls of Black Folk (1903)',
    color: 'gold',
  },
  veil: {
    term: 'The Veil',
    definition:
      'Du Bois\' metaphor for the invisible barrier that distorts how marginalized people see themselves — because they are always seen through the distorting lens of dominant society first. To see through the veil means to recognize that distortion, not to eliminate it.',
    source: 'W.E.B. Du Bois',
    sourceContext: 'The Souls of Black Folk (1903)',
    color: 'gold',
  },
  social_tyranny: {
    term: 'Social Tyranny',
    definition:
      'Mill argued that society exercises a tyranny "more formidable than many kinds of political oppression" through collective opinion and social pressure. Unlike law, it leaves fewer escape routes — it reaches into daily life and colonizes the soul itself.',
    source: 'John Stuart Mill',
    sourceContext: 'On Liberty (1859)',
    color: 'blue',
  },
  individuality: {
    term: 'Individuality',
    definition:
      'For Mill, individuality is not mere eccentricity but the development of one\'s own faculties through genuine engagement with the world. He argued that a person who "lets the world choose his plan of life for him has no need of any other faculty than the ape-like one of imitation."',
    source: 'John Stuart Mill',
    sourceContext: 'On Liberty (1859)',
    color: 'blue',
  },
}

export const interviewData: InterviewEntry[] = [
  {
    id: 1,
    question: 'Does AI change how you express yourself?',
    answer:
      "Yeah, honestly it does. When I write something and then run it through ChatGPT to 'clean it up,' it sounds more polished — but it doesn't quite sound like me anymore. There's this strange tension: I want to be understood clearly, but I also want people to know it's actually me speaking. It reminds me of Du Bois' double consciousness — this constant awareness of measuring your own voice against how others will receive it. The AI becomes a kind of internal audience. You write, it rewrites, and gradually you start writing for the rewrite.",
    highlights: [{ text: 'double consciousness', conceptKey: 'double_consciousness' }],
    tags: ['double_consciousness', 'identity', 'voice'],
  },
  {
    id: 2,
    question: 'Do you feel pressured to use AI in your academic writing?',
    answer:
      "It's not like anyone forces you. But there's an invisible expectation — especially in academic settings. If everyone around you is producing polished, AI-assisted work, and yours looks 'raw' or uneven, it stands out in a bad way. You conform without being told to. Mill would call this social tyranny — pressure that operates not through law or explicit rules, but through collective opinion and silent judgment. The scary part is how natural it feels. You don't experience it as pressure. You experience it as just... trying to do well.",
    highlights: [{ text: 'social tyranny', conceptKey: 'social_tyranny' }],
    tags: ['social_tyranny', 'conformity', 'Mill'],
  },
  {
    id: 3,
    question: 'How does your experience as a non-native speaker shape this?',
    answer:
      "It amplifies everything. As a non-native speaker, I'm already hyper-aware of how my English sounds. There's always this two-ness — the voice inside my head, which thinks in Mandarin and structures ideas in a certain rhythm, and the voice I produce in English, which I'm constantly monitoring and adjusting. AI gives me a tool to close that gap. But it also makes the gap feel more real, more necessary to close. Before AI, I could tell myself: this is just how I write. Now there's always a 'better version' available. That's a strange kind of pressure.",
    highlights: [{ text: 'two-ness', conceptKey: 'two_ness' }],
    tags: ['two_ness', 'language', 'identity'],
  },
  {
    id: 4,
    question: "What do you actually lose when AI 'improves' your writing?",
    answer:
      "The accent. Not literally — but the rhythm of how I think. The way I structure ideas is shaped by my first language, by my culture, by the specific path my mind has traveled. When AI smooths that out, it's more efficient, more readable. But something authentic disappears. It's like wearing a mask that makes people trust you more — and after a while, you start to forget what your own face looks like. The polish is real. But so is the loss.",
    highlights: [],
    tags: ['identity', 'authenticity', 'language'],
  },
  {
    id: 5,
    question: 'Is this conformity harmful, or is it just smart adaptation?',
    answer:
      "That's the hard question. I don't think adaptation is inherently bad — we all adapt our register to context. But Mill makes a distinction I keep coming back to: between growing through genuine engagement with the world, and being shaped by external pressure without awareness. The danger isn't using AI. The danger is using AI without realizing it's changing you. When that awareness disappears, so does your ability to push back. You lose individuality — not because anyone took it, but because you handed it over one edit at a time, each edit feeling like a small improvement.",
    highlights: [{ text: 'individuality', conceptKey: 'individuality' }],
    tags: ['individuality', 'Mill', 'conformity'],
  },
  {
    id: 6,
    question: 'What would you want AI tools to do differently?',
    answer:
      "Ask what I actually meant. Right now, most AI tools work by replacing — they take your words and offer a cleaner version. What if instead they asked: 'what were you trying to say here?' That would be a tool that expands you rather than replaces you. Du Bois talked about seeing through the veil — recognizing the distortion that society imposes on your self-perception. I think that's the first step with AI too. You have to see the veil before you can decide what to do about it. Most people never get there. They just accept the rewrite.",
    highlights: [{ text: 'the veil', conceptKey: 'veil' }],
    tags: ['veil', 'Du Bois', 'awareness'],
  },
]

export const insightQuotes: InsightQuote[] = [
  {
    text: 'It sounds better, but not like me.',
    context: 'On AI-polished writing',
  },
  {
    text: "You're not forced, but you still change.",
    context: 'On invisible social pressure',
  },
  {
    text: "There's an invisible expectation.",
    context: 'On conformity in academic writing',
  },
  {
    text: 'You start to forget what your own face looks like.',
    context: 'On losing authentic voice',
  },
]
