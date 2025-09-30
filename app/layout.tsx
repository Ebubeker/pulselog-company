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
    default: "PulseLog - Privacy-First Employee Productivity Analytics | GDPR Compliant Team Monitoring",
    template: "%s | PulseLog",
  },
  description:
    "Track employee activity and surface productivity insights while preserving privacy. GDPR compliant productivity analytics for modern teams. Free trial available.",
  keywords: [
    "employee productivity tracking",
    "privacy-first analytics",
    "GDPR compliant monitoring",
    "team productivity software",
    "workplace activity tracking",
    "employee monitoring software",
    "productivity insights dashboard",
    "desktop monitoring tool",
    "privacy controls",
    "employee analytics platform",
    "workplace productivity",
    "team performance tracking",
    "employee time tracking",
    "productivity management",
    "workplace surveillance",
    "employee engagement",
    "productivity metrics",
    "workplace analytics",
    "employee dashboard",
    "productivity reporting"
  ],
  authors: [{ name: "PulseLog Team", url: "https://pulselog.com/about" }],
  creator: "PulseLog",
  publisher: "PulseLog",
  category: "Technology",
  classification: "Business Software",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
        url: "https://pulselog.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "PulseLog - Privacy-First Productivity Analytics Dashboard",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseLog - Privacy-First Employee Productivity Analytics",
    description:
      "Track employee activity and surface productivity insights while preserving privacy. GDPR compliant productivity analytics for modern teams.",
    creator: "@pulselog",
    site: "@pulselog",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
    other: {
      "msvalidate.01": "microsoft-verification-code",
    },
  },
  alternates: {
    canonical: "https://pulselog.com",
    languages: {
      "en-US": "https://pulselog.com",
    },
  },
  other: {
    "application-name": "PulseLog",
    "apple-mobile-web-app-title": "PulseLog",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#1a1a1a",
    "theme-color": "#1a1a1a",
  },
  generator: 'Next.js'
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
