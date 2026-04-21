import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI, Language & Identity — An Interview with Tom Liu',
  description:
    'An interactive storytelling website exploring how AI shapes human expression, identity, and conformity — through the lens of W.E.B. Du Bois and John Stuart Mill.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
