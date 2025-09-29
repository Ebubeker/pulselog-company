import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Download PulseLog - Desktop Agent for All Platforms",
  description:
    "Download PulseLog desktop agent for Windows, macOS, and Linux. Enterprise deployment guides and system requirements included.",
  openGraph: {
    title: "Download PulseLog - Desktop Agent for All Platforms",
    description:
      "Download PulseLog desktop agent for Windows, macOS, and Linux. Enterprise deployment guides and system requirements included.",
  },
}

export default function DownloadPage() {
  // Temporarily redirect download page to contact page
  redirect('/contact')
}
