import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CustomCursor from '@/components/Cursor/CustomCursor'
import MarqueeFooter from '@/components/Footer/MarqueeFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OFAMessier',
  description: 'One For All Messier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor/>
        <Navbar/>
        {children}
        <MarqueeFooter/>
      </body>
    </html>
  )
}
