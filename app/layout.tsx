import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${merriweather.variable}`}>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
