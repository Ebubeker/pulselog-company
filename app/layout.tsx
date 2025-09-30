import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OrganizationSchema, WebsiteSchema } from "@/components/seo-schema"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "PulseLog - Employee Productivity Analytics",
    template: "%s | PulseLog",
  },
  description:
    "Track employee activity and surface productivity insights while preserving privacy. GDPR compliant productivity analytics for modern teams.",
  keywords: [
    "employee productivity",
    "activity tracking",
    "privacy-first analytics",
    "team productivity",
    "GDPR compliant",
    "workplace monitoring",
    "productivity insights",
    "employee analytics",
    "desktop monitoring",
    "privacy controls",
  ],
  authors: [{ name: "PulseLog Team" }],
  creator: "PulseLog",
  publisher: "PulseLog",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pulselog.com",
    title: "PulseLog - Privacy-First Employee Productivity Analytics",
    description:
      "Track employee activity and surface productivity insights while preserving privacy. GDPR compliant productivity analytics for modern teams.",
    siteName: "PulseLog",
    images: [
      {
        url: "https://pulselog.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "PulseLog - Privacy-First Productivity Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseLog - Privacy-First Employee Productivity Analytics",
    description:
      "Track employee activity and surface productivity insights while preserving privacy. GDPR compliant productivity analytics for modern teams.",
    images: ["https://pulselog.com/twitter-image.png"],
    creator: "@pulselog",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  alternates: {
    canonical: "https://pulselog.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <link rel="canonical" href="https://pulselog.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
