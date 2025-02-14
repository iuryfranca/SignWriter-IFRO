import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SignWriter IFRO',
  description: 'Created with Iury',
  generator: 'Iury França',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
