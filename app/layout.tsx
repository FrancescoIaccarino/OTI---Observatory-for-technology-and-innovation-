import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OTI - Observatory for Technology and Innovation',
  description: 'A bridge between research, business, and policy. Analyzing technological trends with scientific rigor.',
  keywords: ['technology', 'innovation', 'research', 'fintech', 'legal tech', 'policy'],
  authors: [{ name: 'OTI Observatory' }],
  openGraph: {
    title: 'OTI - Observatory for Technology and Innovation',
    description: 'A bridge between research, business, and policy',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
