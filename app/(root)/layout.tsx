'use client'
const Footer = dynamic(() => import('@/components/main/Footer'), {
  ssr: false,
})
const NavBar = dynamic(() => import('@/components/main/NavBar'), {
  ssr: false,
})
import Background from '@/components/main/Background/Background'
import { ClerkProvider } from '@clerk/nextjs'
import dynamic from 'next/dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <head></head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </ClerkProvider>
  )
}
