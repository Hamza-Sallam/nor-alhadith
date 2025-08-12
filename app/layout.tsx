import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans, Noto_Naskh_Arabic } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-noto-naskh-arabic",
})

export const metadata: Metadata = {
  title: "نور الحديث - Hadith AI Assistant",
  description: "Islamic AI assistant for authentic Hadith knowledge",
  icons: {
    icon: [
      {
        url: '/images/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/favicon.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/images/favicon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} ${notoNaskhArabic.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
