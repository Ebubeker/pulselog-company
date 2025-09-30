import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Get a Quote - PulseLog Enterprise Pricing | Custom Productivity Analytics",
  description: "Get a custom quote for PulseLog Enterprise. Tailored pricing for large teams with custom deployment and compliance needs. Request your quote today.",
  keywords: [
    "PulseLog pricing",
    "enterprise productivity analytics",
    "custom quote",
    "team productivity pricing",
    "employee monitoring cost",
    "productivity software pricing",
    "enterprise deployment",
    "custom analytics solution",
    "workplace monitoring pricing",
    "productivity insights cost"
  ],
  openGraph: {
    title: "Get a Quote - PulseLog Enterprise Pricing",
    description: "Get a custom quote for PulseLog Enterprise. Tailored pricing for large teams with custom deployment and compliance needs.",
    url: "https://pulselog.com/quote",
    siteName: "PulseLog",
    images: [
      {
        url: "https://pulselog.com/og-quote.png",
        width: 1200,
        height: 630,
        alt: "Get a Quote - PulseLog Enterprise Pricing",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Quote - PulseLog Enterprise Pricing",
    description: "Get a custom quote for PulseLog Enterprise. Tailored pricing for large teams with custom deployment and compliance needs.",

    creator: "@pulselog",
  },
  alternates: {
    canonical: "https://pulselog.com/quote",
  },
  other: {
    "article:author": "PulseLog Team",
    "article:section": "Pricing",
    "article:tag": "quote,pricing,enterprise,custom,deployment",
  },
}

export default function QuotePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get a quote
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tell us about your needs and we'll provide a custom quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Request a Quote</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you quickly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form 
                className="space-y-6" 
                action="https://formsubmit.co/support@pulselog.ai" 
                method="POST"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Quote Request - PulseLog" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://pulselog.com/thank-you" />
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" placeholder="John Smith" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" name="company" placeholder="Acme Corporation" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Tell us about your team size, requirements, and what you're looking to achieve with PulseLog..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800" size="lg">
                  Request Quote
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  We'll review your request and provide a detailed quote within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
