'use client'
import { useState, Fragment } from 'react'
import { InterviewEntry, Highlight } from '@/data/content'
import TheoryTooltip from './TheoryTooltip'

function parseAnswer(answer: string, highlights: Highlight[]) {
  if (highlights.length === 0) return answer

  // Build list of replacements sorted by position
  type Segment = { start: number; end: number; highlight: Highlight }
  const segments: Segment[] = []

  for (const h of highlights) {
    const idx = answer.toLowerCase().indexOf(h.text.toLowerCase())
    if (idx !== -1) {
      segments.push({ start: idx, end: idx + h.text.length, highlight: h })
    }
  }

  if (segments.length === 0) return answer

  segments.sort((a, b) => a.start - b.start)

  const parts: React.ReactNode[] = []
  let cursor = 0

  for (const seg of segments) {
    if (cursor < seg.start) {
      parts.push(answer.slice(cursor, seg.start))
    }
    parts.push(
      <TheoryTooltip
        key={seg.highlight.conceptKey}
        text={answer.slice(seg.start, seg.end)}
        conceptKey={seg.highlight.conceptKey}
      />
    )
    cursor = seg.end
  }

  if (cursor < answer.length) {
    parts.push(answer.slice(cursor))
  }

  return parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)
}

interface Props {
  entry: InterviewEntry
  index: number
}

export default function InterviewCard({ entry, index }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="interview-card">
      {/* Question row */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-7 py-6 flex items-start gap-5 group"
        aria-expanded={open}
      >
        {/* Index number */}
        <span
          style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 11,
            color: '#444',
            letterSpacing: '0.1em',
            paddingTop: 4,
            minWidth: 20,
            userSelect: 'none',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Question text */}
        <span
          style={{
            flex: 1,
            fontSize: 16,
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 400,
            color: open ? '#e8e8e8' : '#aaa',
            transition: 'color 0.2s ease',
            lineHeight: 1.6,
          }}
        >
          {entry.question}
        </span>

        {/* Toggle icon */}
        <span
          style={{
            color: '#444',
            fontSize: 18,
            transition: 'transform 0.3s ease, color 0.2s ease',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            paddingTop: 2,
            userSelect: 'none',
          }}
        >
          +
        </span>
      </button>

      {/* Answer */}
      <div className={`answer-body ${open ? 'open' : ''}`}>
        <div
          style={{
            padding: '4px 56px 28px 56px',
            borderTop: '1px solid #1a1a1a',
          }}
        >
          <p
            style={{
              fontSize: 16,
              color: '#c0c0c0',
              lineHeight: 1.9,
              marginTop: 20,
            }}
          >
            {parseAnswer(entry.answer, entry.highlights)}
          </p>

          {/* Tags */}
          {entry.tags.length > 0 && (
            <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: 10,
                    letterSpacing: '0.08em',
                    color: '#444',
                    border: '1px solid #1e1e1e',
                    borderRadius: 2,
                    padding: '3px 8px',
                    textTransform: 'uppercase',
                  }}
                >
                  {tag.replace(/_/g, ' ')}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
