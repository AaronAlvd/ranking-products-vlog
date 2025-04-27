import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Product Rankings Blog</title>
        <meta name="description" content="Find the best products ranked and reviewed by experts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph default tags */}
        <meta property="og:site_name" content="ProductRankings" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Product Rankings Blog" />
        <meta property="og:description" content="Find the best products ranked and reviewed by experts" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Card default tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Product Rankings Blog" />
        <meta name="twitter:description" content="Find the best products ranked and reviewed by experts" />
        <meta name="twitter:image" content="/twitter-image.jpg" />
      </head>
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
        {children}
        </Suspense >
        <Footer />
      </body>
    </html>
  )
}

