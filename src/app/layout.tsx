import type { Metadata, Viewport } from 'next'
import '@/app/globals.css'
import { IDENTITY } from '@/lib/constants'

export const metadata: Metadata = {
  title:       `Wayne Systems | ${IDENTITY.role}`,
  description: IDENTITY.tagline,
  authors:     [{ name: IDENTITY.name }],
  openGraph: {
    title:       `Wayne Systems | ${IDENTITY.role}`,
    description: IDENTITY.tagline,
    type:        'website',
  },
}

export const viewport: Viewport = {
  themeColor:   '#08080a',
  width:        'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}