'use client'
import { useState } from 'react'
import { concepts } from '@/data/content'

interface Props {
  text: string
  conceptKey: string
}

export default function TheoryTooltip({ text, conceptKey }: Props) {
  const [open, setOpen] = useState(false)
  const concept = concepts[conceptKey]

  if (!concept) return <span>{text}</span>

  const borderColor = concept.color === 'gold' ? '#c9a84c' : '#4a90d9'
  const colorClass = concept.color === 'gold' ? 'gold' : 'blue'

  return (
    <span
      className={`theory-word ${colorClass}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {text}
      {open && (
        <span className="theory-popup">
          <span
            style={{
              display: 'block',
              fontWeight: 600,
              color: borderColor,
              marginBottom: 6,
              fontSize: 13,
              letterSpacing: '0.02em',
            }}
          >
            {concept.term}
          </span>
          <span style={{ color: '#bbb' }}>{concept.definition}</span>
          <span
            style={{
              display: 'block',
              marginTop: 10,
              color: '#555',
              fontSize: 11,
              fontStyle: 'italic',
            }}
          >
            — {concept.source}, {concept.sourceContext}
          </span>
        </span>
      )}
    </span>
  )
}
