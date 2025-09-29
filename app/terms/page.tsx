import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileText, Scale, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - PulseLog",
  description:
    "PulseLog's terms of service and user agreement. Understand your rights and responsibilities when using our productivity analytics platform.",
  openGraph: {
    title: "Terms of Service - PulseLog",
    description:
      "PulseLog's terms of service and user agreement. Understand your rights and responsibilities when using our productivity analytics platform.",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Terms of Service
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8">
            These terms govern your use of PulseLog's productivity analytics platform and services.
          </p>
          <p className="text-sm text-muted-foreground">Last updated: January 15, 2025 • Effective: January 15, 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Alert className="mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> By using PulseLog, you agree to these terms. If you don't agree, please
                don't use our services. These terms include important limitations of our liability.
              </AlertDescription>
            </Alert>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and PulseLog, Inc.
                  ("PulseLog," "we," "us," or "our") regarding your use of the PulseLog productivity analytics platform
                  and related services (collectively, the "Service").
                </p>
                <p className="text-sm text-muted-foreground">
                  By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. If you
                  are using the Service on behalf of an organization, you represent that you have the authority to bind
                  that organization to these Terms.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  PulseLog provides productivity analytics software that tracks employee activity to surface insights
                  about productivity patterns, detect when team members need support, and provide managers with
                  actionable data while maintaining privacy controls.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Service Components Include:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Desktop agent software for Windows, macOS, and Linux</li>
                    <li>Web-based dashboard and analytics platform</li>
                    <li>API access for data integration (Pro and Enterprise plans)</li>
                    <li>Customer support and documentation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>3. User Accounts and Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Account Creation</h4>
                  <p className="text-sm text-muted-foreground">
                    To use PulseLog, you must create an account and provide accurate, complete information. You are
                    responsible for maintaining the confidentiality of your account credentials.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Organization Accounts</h4>
                  <p className="text-sm text-muted-foreground">
                    Organization administrators are responsible for managing user access, configuring privacy settings,
                    and ensuring compliance with applicable laws and internal policies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Account Security</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Use strong, unique passwords</li>
                    <li>Enable multi-factor authentication when available</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>You are responsible for all activities under your account</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>4. Acceptable Use Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Permitted Uses</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Monitor productivity and activity patterns of consenting employees</li>
                    <li>Generate reports and analytics for business purposes</li>
                    <li>Integrate with other business systems via our API</li>
                    <li>Use data for internal business decision-making</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prohibited Uses</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Monitor employees without proper consent or legal basis</li>
                    <li>Use the Service to violate privacy laws or regulations</li>
                    <li>Attempt to reverse engineer or hack the Service</li>
                    <li>Share access credentials with unauthorized parties</li>
                    <li>Use the Service for illegal or unethical purposes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Data Ownership</h4>
                  <p className="text-sm text-muted-foreground">
                    You retain ownership of all data collected through the Service. PulseLog acts as a data processor
                    and will only use your data as instructed by you and as described in our Privacy Policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Compliance Responsibilities</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Ensure proper legal basis for employee monitoring</li>
                    <li>Obtain necessary consents and provide required notices</li>
                    <li>Comply with applicable privacy laws (GDPR, CCPA, etc.)</li>
                    <li>Implement appropriate organizational and technical measures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Employee Rights</h4>
                  <p className="text-sm text-muted-foreground">
                    You must respect employee privacy rights, including their ability to pause tracking, access their
                    data, and request corrections or deletions as required by law.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>6. Subscription and Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Subscription Plans</h4>
                  <p className="text-sm text-muted-foreground">
                    PulseLog offers various subscription plans with different features and user limits. Current pricing
                    is available on our website and may change with 30 days' notice.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Payment Terms</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Subscriptions are billed monthly or annually in advance</li>
                    <li>All fees are non-refundable except as required by law</li>
                    <li>Late payments may result in service suspension</li>
                    <li>You are responsible for all applicable taxes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Free Trial</h4>
                  <p className="text-sm text-muted-foreground">
                    We offer a 14-day free trial for new customers. No credit card is required to start your trial. Your
                    subscription will begin after the trial period ends unless you cancel.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>7. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">PulseLog's Rights</h4>
                  <p className="text-sm text-muted-foreground">
                    PulseLog retains all rights, title, and interest in the Service, including all software,
                    documentation, and related intellectual property. You receive a limited, non-exclusive license to
                    use the Service according to these Terms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Your Rights</h4>
                  <p className="text-sm text-muted-foreground">
                    You retain all rights to your data and content. You grant PulseLog a limited license to process your
                    data solely to provide the Service and as described in our Privacy Policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Feedback</h4>
                  <p className="text-sm text-muted-foreground">
                    Any feedback, suggestions, or ideas you provide about the Service may be used by PulseLog without
                    compensation or attribution.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>8. Service Availability and Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Service Level</h4>
                  <p className="text-sm text-muted-foreground">
                    We strive to maintain 99.9% uptime for our Service, but we don't guarantee uninterrupted access. We
                    may perform maintenance that temporarily affects Service availability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Support</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Email support for all plans</li>
                    <li>Priority support for Team and Pro plans</li>
                    <li>Dedicated support for Enterprise plans</li>
                    <li>Documentation and self-help resources</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  9. Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Important Legal Notice:</strong> This section limits our liability. Please read carefully.
                  </AlertDescription>
                </Alert>
                <div>
                  <h4 className="font-semibold mb-2">Disclaimer of Warranties</h4>
                  <p className="text-sm text-muted-foreground">
                    THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS
                    OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Limitation of Damages</h4>
                  <p className="text-sm text-muted-foreground">
                    IN NO EVENT SHALL PULSELOG BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                    PUNITIVE DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE 12
                    MONTHS PRECEDING THE CLAIM.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>10. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Termination by You</h4>
                  <p className="text-sm text-muted-foreground">
                    You may cancel your subscription at any time through your account settings or by contacting support.
                    Cancellation takes effect at the end of your current billing period.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Termination by PulseLog</h4>
                  <p className="text-sm text-muted-foreground">
                    We may suspend or terminate your access for violations of these Terms, non-payment, or if required
                    by law. We'll provide reasonable notice when possible.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Effect of Termination</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Your access to the Service will end immediately</li>
                    <li>Your data will be deleted according to our retention policy</li>
                    <li>You may export your data before termination</li>
                    <li>Outstanding fees remain due</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>11. General Provisions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Governing Law</h4>
                  <p className="text-sm text-muted-foreground">
                    These Terms are governed by the laws of the State of California, USA, without regard to conflict of
                    law principles.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                  <p className="text-sm text-muted-foreground">
                    Any disputes will be resolved through binding arbitration in San Francisco, California, except for
                    claims that may be brought in small claims court.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Changes to Terms</h4>
                  <p className="text-sm text-muted-foreground">
                    We may update these Terms periodically. Material changes will be communicated via email and in-app
                    notifications at least 30 days before taking effect.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <p className="text-sm text-muted-foreground">
                    Questions about these Terms? Contact us at legal@pulselog.com or:
                    <br />
                    PulseLog, Inc.
                    <br />
                    123 Innovation Drive
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
