import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/custom/generic-components/nav/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SAM - Simple Accounting Management',
  description: 'EGY JÓ SAM MINDENT LÁT'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-500`}>
        <NavBar />
        <main className="w-full max-w-screen-lg mx-auto">{children}</main>
      </body>
    </html>
  )
}
