import "./globals.css"

import type React from "react"
import Head from "next/head"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <SpeedInsights />
        <Analytics />
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
