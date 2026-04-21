import RevealWrapper from '@/components/RevealWrapper'
import InterviewCard from '@/components/InterviewCard'
import { interviewData, insightQuotes, concepts } from '@/data/content'

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #111',
        background: 'rgba(8,8,8,0.85)',
        backdropFilter: 'blur(12px)',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <span style={{ fontSize: 12, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase' }}>
        AI · Language · Identity
      </span>
      <div style={{ display: 'flex', gap: 32 }}>
        {[
          ['Interview', '#interview'],
          ['Theory', '#theory'],
          ['Philosophy', '#philosophy'],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            style={{
              fontSize: 12,
              letterSpacing: '0.1em',
              color: '#555',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseOver={(e) => ((e.target as HTMLElement).style.color = '#999')}
            onMouseOut={(e) => ((e.target as HTMLElement).style.color = '#555')}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 40px 80px',
        maxWidth: 800,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: 11,
          letterSpacing: '0.2em',
          color: '#444',
          textTransform: 'uppercase',
          marginBottom: 40,
        }}
      >
        Sociology · Language · Technology
      </div>

      <h1
        style={{
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: '#e8e8e8',
          marginBottom: 32,
        }}
      >
        AI, Language
        <br />
        & Identity
      </h1>

      <p
        style={{
          fontSize: 18,
          color: '#888',
          maxWidth: 520,
          lineHeight: 1.8,
          marginBottom: 60,
        }}
      >
        Does AI improve communication — or does it subtly reshape identity and push
        individuals toward conformity?
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ width: 1, height: 48, background: '#222' }} />
        <div>
          <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#555', marginBottom: 4 }}>
            An interview with
          </div>
          <div style={{ fontSize: 16, color: '#999' }}>Tom Liu, UCLA Sociology</div>
        </div>
      </div>

      <a
        href="#interview"
        style={{
          marginTop: 80,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          fontFamily: 'system-ui, sans-serif',
          fontSize: 12,
          letterSpacing: '0.1em',
          color: '#444',
          textDecoration: 'none',
          textTransform: 'uppercase',
          transition: 'color 0.2s',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: 32,
            height: 1,
            background: '#333',
          }}
        />
        Read the interview
      </a>
    </section>
  )
}

// ─── Profile ──────────────────────────────────────────────────────────────────
function Profile() {
  return (
    <section style={{ padding: '100px 40px', borderTop: '1px solid #111' }}>
      <div className="reading-col">
        <RevealWrapper>
          <div
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 10,
              letterSpacing: '0.2em',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: 32,
            }}
          >
            The Subject
          </div>

          <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
            {/* Avatar placeholder */}
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: '#141414',
                border: '1px solid #1e1e1e',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Georgia, serif',
                fontSize: 24,
                color: '#333',
              }}
            >
              T
            </div>

            <div>
              <h2 style={{ fontSize: 22, fontWeight: 400, color: '#d8d8d8', marginBottom: 6 }}>
                Tom Liu
              </h2>
              <div
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: 12,
                  color: '#555',
                  marginBottom: 20,
                  letterSpacing: '0.05em',
                }}
              >
                Undergraduate, Sociology · UCLA · Born in Chengdu, China
              </div>
              <p style={{ fontSize: 15, color: '#888', lineHeight: 1.85, maxWidth: 500 }}>
                Tom studies the intersection of media, technology, and identity formation.
                As a non-native English speaker navigating American academic culture,
                he has experienced first-hand the subtle pressure that AI writing tools
                exert on language and self-expression. This interview explores what theory
                can tell us about that pressure — and what it means for who we become.
              </p>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

// ─── Interview ────────────────────────────────────────────────────────────────
function Interview() {
  return (
    <section id="interview" style={{ padding: '100px 40px', borderTop: '1px solid #111' }}>
      <div className="reading-col">
        <RevealWrapper>
          <div
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 10,
              letterSpacing: '0.2em',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            The Interview
          </div>
          <p
            style={{
              fontSize: 13,
              color: '#555',
              fontFamily: 'system-ui, sans-serif',
              marginBottom: 48,
              lineHeight: 1.6,
            }}
          >
            Click any question to expand. Hover{' '}
            <span style={{ color: '#c9a84c', borderBottom: '1px solid rgba(201,168,76,0.4)' }}>
              gold
            </span>{' '}
            or{' '}
            <span style={{ color: '#4a90d9', borderBottom: '1px solid rgba(74,144,217,0.4)' }}>
              blue
            </span>{' '}
            terms for theory definitions.
          </p>
        </RevealWrapper>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {interviewData.map((entry, i) => (
            <RevealWrapper key={entry.id} delay={i * 60}>
              <InterviewCard entry={entry} index={i} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Theory (Du Bois) ─────────────────────────────────────────────────────────
function Theory() {
  const duBoisConcepts = ['double_consciousness', 'two_ness', 'veil']

  return (
    <section id="theory" style={{ padding: '100px 40px', borderTop: '1px solid #111' }}>
      <div className="reading-col">
        <RevealWrapper>
          <div
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 10,
              letterSpacing: '0.2em',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Sociology Layer
          </div>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: '#c9a84c',
              marginBottom: 12,
              letterSpacing: '-0.01em',
            }}
          >
            W.E.B. Du Bois
          </h2>
          <p style={{ fontSize: 15, color: '#777', marginBottom: 48, lineHeight: 1.85 }}>
            Du Bois wrote about the experience of Black Americans at the turn of the 20th century.
            His concepts illuminate something universal: what happens when you must always see yourself
            through another&apos;s eyes. In 2025, AI has become a new kind of mirror — one that
            reflects not who you are, but who the algorithm expects you to be.
          </p>
        </RevealWrapper>

        {/* Concept cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {duBoisConcepts.map((key, i) => {
            const c = concepts[key]
            return (
              <RevealWrapper key={key} delay={i * 80}>
                <div
                  style={{
                    padding: '28px 32px',
                    background: '#0c0c0c',
                    border: '1px solid #1a1a1a',
                    borderLeft: '3px solid rgba(201, 168, 76, 0.4)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: 11,
                      letterSpacing: '0.12em',
                      color: '#c9a84c',
                      textTransform: 'uppercase',
                      marginBottom: 10,
                    }}
                  >
                    {c.term}
                  </div>
                  <p style={{ fontSize: 15, color: '#888', lineHeight: 1.85, margin: 0 }}>
                    {c.definition}
                  </p>
                  <div
                    style={{
                      marginTop: 12,
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: 11,
                      color: '#3a3a3a',
                      fontStyle: 'italic',
                    }}
                  >
                    {c.sourceContext}
                  </div>
                </div>
              </RevealWrapper>
            )
          })}
        </div>

        {/* Du Bois quote */}
        <RevealWrapper delay={240}>
          <blockquote
            style={{
              margin: '60px 0 0',
              padding: '28px 32px',
              borderLeft: '3px solid rgba(201, 168, 76, 0.6)',
              background: 'rgba(201, 168, 76, 0.03)',
            }}
          >
            <p
              style={{
                fontSize: 18,
                color: '#c0c0c0',
                lineHeight: 1.85,
                fontStyle: 'italic',
                margin: '0 0 16px',
              }}
            >
              &quot;It is a peculiar sensation, this double-consciousness, this sense of always
              looking at one&apos;s self through the eyes of others, of measuring one&apos;s soul
              by the tape of a world that looks on in amused contempt and pity.&quot;
            </p>
            <cite
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 12,
                color: '#555',
                fontStyle: 'normal',
              }}
            >
              — W.E.B. Du Bois, The Souls of Black Folk (1903)
            </cite>
          </blockquote>
        </RevealWrapper>
      </div>
    </section>
  )
}

// ─── Insights ─────────────────────────────────────────────────────────────────
function Insights() {
  return (
    <section style={{ padding: '100px 40px', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <RevealWrapper>
          <div
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 10,
              letterSpacing: '0.2em',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: 48,
              textAlign: 'center',
            }}
          >
            Key Insights
          </div>
        </RevealWrapper>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
          }}
        >
          {insightQuotes.map((q, i) => (
            <RevealWrapper key={i} delay={i * 80}>
              <div className="insight-card">
                <p
                  style={{
                    fontSize: 17,
                    color: '#d0d0d0',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: 16,
                  }}
                >
                  &ldquo;{q.text}&rdquo;
                </p>
                <div
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: 11,
                    color: '#444',
                    letterSpacing: '0.05em',
                  }}
                >
                  {q.context}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Philosophy (Mill) ───────────────────────────────────────────────────────
function Philosophy() {
  return (
    <section id="philosophy" style={{ padding: '100px 40px', borderTop: '1px solid #111' }}>
      <div className="reading-col">
        <RevealWrapper>
          <div
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 10,
              letterSpacing: '0.2em',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Philosophy Layer
          </div>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: '#4a90d9',
              marginBottom: 12,
              letterSpacing: '-0.01em',
            }}
          >
            John Stuart Mill
          </h2>
          <p style={{ fontSize: 15, color: '#777', marginBottom: 48, lineHeight: 1.85 }}>
            Mill wrote <em>On Liberty</em> in 1859 to defend individual freedom against the
            growing power of collective opinion. His fear was not government tyranny — it was
            the subtler tyranny of social conformity. He could not have imagined AI. But he
            described it precisely.
          </p>
        </RevealWrapper>

        {/* Concept cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {['social_tyranny', 'individuality'].map((key, i) => {
            const c = concepts[key]
            return (
              <RevealWrapper key={key} delay={i * 80}>
                <div
                  style={{
                    padding: '28px 32px',
                    background: '#0c0c0c',
                    border: '1px solid #1a1a1a',
                    borderLeft: '3px solid rgba(74, 144, 217, 0.4)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: 11,
                      letterSpacing: '0.12em',
                      color: '#4a90d9',
                      textTransform: 'uppercase',
                      marginBottom: 10,
                    }}
                  >
                    {c.term}
                  </div>
                  <p style={{ fontSize: 15, color: '#888', lineHeight: 1.85, margin: 0 }}>
                    {c.definition}
                  </p>
                  <div
                    style={{
                      marginTop: 12,
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: 11,
                      color: '#3a3a3a',
                      fontStyle: 'italic',
                    }}
                  >
                    {c.sourceContext}
                  </div>
                </div>
              </RevealWrapper>
            )
          })}
        </div>

        {/* Mill quote */}
        <RevealWrapper delay={160}>
          <blockquote
            style={{
              margin: '60px 0 0',
              padding: '28px 32px',
              borderLeft: '3px solid rgba(74, 144, 217, 0.6)',
              background: 'rgba(74, 144, 217, 0.03)',
            }}
          >
            <p
              style={{
                fontSize: 18,
                color: '#c0c0c0',
                lineHeight: 1.85,
                fontStyle: 'italic',
                margin: '0 0 16px',
              }}
            >
              &quot;Society can and does execute its own mandates: and if it issues wrong
              mandates instead of right, or any mandates at all in things with which it ought
              not to meddle, it practises a social tyranny more formidable than many kinds of
              political oppression.&quot;
            </p>
            <cite
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 12,
                color: '#555',
                fontStyle: 'normal',
              }}
            >
              — John Stuart Mill, On Liberty (1859)
            </cite>
          </blockquote>
        </RevealWrapper>

        {/* The connection */}
        <RevealWrapper delay={200}>
          <div
            style={{
              marginTop: 60,
              padding: '28px 32px',
              border: '1px solid #1a1a1a',
              background: '#0c0c0c',
            }}
          >
            <div
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 10,
                letterSpacing: '0.15em',
                color: '#333',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              The Connection
            </div>
            <p style={{ fontSize: 15, color: '#777', lineHeight: 1.9, margin: 0 }}>
              AI does not force anyone to write differently. It simply offers a better version.
              That is exactly the mechanism Mill feared: not the threat of punishment, but the
              constant, frictionless availability of the approved form. The danger is not the
              technology — it is the invisibility of the pressure it creates.
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

// ─── Conclusion ───────────────────────────────────────────────────────────────
function Conclusion() {
  return (
    <section style={{ padding: '120px 40px 160px', borderTop: '1px solid #111' }}>
      <div className="reading-col">
        <RevealWrapper>
          <div
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 10,
              letterSpacing: '0.2em',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: 48,
            }}
          >
            Conclusion
          </div>

          <p
            style={{
              fontSize: 20,
              color: '#c0c0c0',
              lineHeight: 1.9,
              marginBottom: 32,
              letterSpacing: '-0.01em',
            }}
          >
            Tom Liu is not opposed to AI. He is opposed to using it without awareness.
          </p>

          <p style={{ fontSize: 15, color: '#777', lineHeight: 1.9, marginBottom: 24 }}>
            What Du Bois called the veil — the distorting lens through which marginalized people
            are forced to see themselves — has a contemporary counterpart. For non-native speakers
            navigating English-language academic institutions in the age of AI, that lens is the
            algorithm that always knows how to say it better.
          </p>

          <p style={{ fontSize: 15, color: '#777', lineHeight: 1.9, marginBottom: 24 }}>
            What Mill called social tyranny — the pressure that operates not through law but through
            collective expectation — has found a new delivery mechanism. AI does not demand conformity.
            It merely makes conformity seamless. One edit at a time. One rewrite at a time.
          </p>

          <p style={{ fontSize: 15, color: '#777', lineHeight: 1.9, marginBottom: 60 }}>
            The question is not whether to use these tools. The question is whether you can see the
            veil they create — and choose, with full awareness, what to do about it.
          </p>

          <div
            style={{
              paddingTop: 40,
              borderTop: '1px solid #111',
              fontFamily: 'system-ui, sans-serif',
              fontSize: 13,
              color: '#555',
              fontStyle: 'italic',
              lineHeight: 1.7,
            }}
          >
            This project does not just analyze AI — it demonstrates how theory lives inside
            real experience.
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #111',
        padding: '32px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'system-ui, sans-serif',
        fontSize: 11,
        color: '#333',
        letterSpacing: '0.05em',
      }}
    >
      <span>AI, Language & Identity</span>
      <span>UCLA Sociology · 2025</span>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Interview />
        <Theory />
        <Insights />
        <Philosophy />
        <Conclusion />
      </main>
      <Footer />
    </>
  )
}
