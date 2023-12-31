import { ClerkProvider } from '@clerk/nextjs'
import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Billian Finances',
  description: 'Manage all of your finances with one tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="bg-gray_blue-9">
          <div className={inter.className}>
            <Navbar />
            <main className="pt-16 min-h-screen">{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
