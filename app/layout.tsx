import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google" // Reverting to Inter font
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "gK", // Changed from "Gaurav Khanal | Portfolio"
  description: "AI Product Manager with a passion for smart systems, NLP, and data-driven solutions.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
