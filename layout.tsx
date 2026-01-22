import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'IGNITIA 2K26 - The Ultimate Creative Platform',
  description: 'Welcome to IGNITIA 2K26! Join the enchanted cosmos, compete with global champions, and unleash your creative magic. Vote now and let your talent ignite!',
  generator: 'v0.app',
  openGraph: {
    title: 'IGNITIA 2K26 - Gateway to the Enchanted Cosmos',
    description: 'Experience a world of wonder and creativity. Compete, create, and conquer in IGNITIA 2K26.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGNITIA 2K26',
    description: 'The ultimate creative platform for global champions',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
