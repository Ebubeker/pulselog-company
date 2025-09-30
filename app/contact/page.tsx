import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contact PulseLog - Get in Touch with Our Team | Support & Sales",
  description: "Contact PulseLog for demos, support, or sales inquiries. Our team responds within 2 hours during business hours. Get help with productivity analytics.",
  keywords: [
    "contact PulseLog",
    "PulseLog support",
    "productivity analytics support",
    "employee monitoring help",
    "PulseLog demo",
    "sales inquiry",
    "customer support",
    "technical support",
    "productivity software help",
    "workplace analytics support"
  ],
  openGraph: {
    title: "Contact PulseLog - Get in Touch with Our Team",
    description: "Contact PulseLog for demos, support, or sales inquiries. Our team responds within 2 hours during business hours.",
    url: "https://pulselog.com/contact",
    siteName: "PulseLog",
    images: [
      {
        url: "https://pulselog.com/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact PulseLog - Support and Sales Team",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PulseLog - Get in Touch with Our Team",
    description: "Contact PulseLog for demos, support, or sales inquiries. Our team responds within 2 hours during business hours.",

    creator: "@pulselog",
  },
  alternates: {
    canonical: "https://pulselog.com/contact",
  },
  other: {
    "article:author": "PulseLog Team",
    "article:section": "Support",
    "article:tag": "contact,support,sales,demo,help",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to see how PulseLog can help your team? Send us a message and we'll get back to you within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you quickly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form 
                    className="space-y-6" 
                    action="https://formsubmit.co/support@pulselog.ai" 
                    method="POST"
                  >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission - PulseLog" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="https://pulselog.com/thank-you" />
                    
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="John Smith" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" placeholder="Acme Corp" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your team's needs or questions about PulseLog..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">support@pulselog.ai</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Within 2 hours during business hours</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">Monday-Friday<br />9 AM - 6 PM PST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
