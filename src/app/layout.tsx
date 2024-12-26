import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'paper deadline'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body>
        <div className="min-h-screen flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}