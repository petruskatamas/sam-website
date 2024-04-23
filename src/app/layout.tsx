import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/custom/generic-components/nav/NavBar'
import { Footer } from '@/components/custom/generic-components/Footer'

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
      <body className={`${inter.className} bg-white`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
