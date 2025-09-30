import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CheckCircle, Mail, Clock, ArrowLeft, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You - PulseLog | Your Message Has Been Received",
  description: "Thank you for contacting PulseLog. Your message has been received and our team will respond within 2 hours during business hours.",
  keywords: [
    "thank you",
    "message received",
    "PulseLog contact",
    "support confirmation",
    "quote request received",
    "contact confirmation"
  ],
  openGraph: {
    title: "Thank You - PulseLog | Your Message Has Been Received",
    description: "Thank you for contacting PulseLog. Your message has been received and our team will respond within 2 hours during business hours.",
    url: "https://pulselog.com/thank-you",
    siteName: "PulseLog",
    images: [
      {
        url: "https://pulselog.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "Thank You - PulseLog Message Received",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You - PulseLog | Your Message Has Been Received",
    description: "Thank you for contacting PulseLog. Your message has been received and our team will respond within 2 hours during business hours.",

    creator: "@pulselog",
  },
  alternates: {
    canonical: "https://pulselog.com/thank-you",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <CheckCircle className="h-24 w-24 text-green-600 mx-auto mb-6" />
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              <Mail className="h-3 w-3 mr-1" />
              Message Received
            </Badge>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your message has been successfully received. Our team will review your inquiry and get back to you within 2 hours during business hours.
          </p>
        </div>
      </section>

      {/* Confirmation Details */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What Happens Next */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  What Happens Next?
                </CardTitle>
                <CardDescription>
                  Here's what you can expect from our team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Message Review</h4>
                    <p className="text-sm text-muted-foreground">Our team will review your inquiry within 30 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Response</h4>
                    <p className="text-sm text-muted-foreground">We'll respond within 2 hours during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Follow-up</h4>
                    <p className="text-sm text-muted-foreground">We'll work with you to address your needs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Need Immediate Help?</CardTitle>
                <CardDescription>
                  If you need urgent assistance, here's how to reach us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Email Support</h4>
                  <p className="text-sm text-muted-foreground mb-2">For general inquiries and support</p>
                  <p className="text-sm font-mono bg-muted px-2 py-1 rounded">support@pulselog.ai</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-sm text-muted-foreground">Monday - Friday</p>
                  <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM PST</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">Within 2 hours during business hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Learn More About Us
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Thank you for choosing PulseLog for your productivity analytics needs.
          </p>
        </div>
      </section>
    </div>
  )
}
