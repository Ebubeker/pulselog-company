import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Eye, Lock, Database, UserCheck, FileText, Clock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - PulseLog",
  description:
    "PulseLog's comprehensive privacy policy. Learn how we protect your data with privacy-first design, GDPR compliance, and employee controls.",
  openGraph: {
    title: "Privacy Policy - PulseLog",
    description:
      "PulseLog's comprehensive privacy policy. Learn how we protect your data with privacy-first design, GDPR compliance, and employee controls.",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Privacy Policy
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">Privacy-first by design</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8">
            We built PulseLog with privacy as a core principle. Learn how we protect your data and respect employee
            rights.
          </p>
          <p className="text-sm text-muted-foreground">Last updated: January 15, 2025 • Effective: January 15, 2025</p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-muted-foreground">
              These principles guide every decision we make about data collection and processing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 text-muted-foreground mb-2" />
                <CardTitle className="text-lg">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clear communication about what data we collect, how we use it, and who has access.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <UserCheck className="h-8 w-8 text-muted-foreground mb-2" />
                <CardTitle className="text-lg">Employee Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Employees can pause tracking, access their data, and control privacy settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-muted-foreground mb-2" />
                <CardTitle className="text-lg">Data Minimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We collect only the data necessary for productivity insights and business purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-muted-foreground mb-2" />
                <CardTitle className="text-lg">Security First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security with encryption, access controls, and regular audits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Alert className="mb-8">
              <Shield className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> This privacy policy applies to PulseLog's data collection and processing.
                Your organization may have additional privacy policies that govern how they use PulseLog data.
              </AlertDescription>
            </Alert>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  What Data We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Activity Data</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Application names and usage duration</li>
                    <li>• Website URLs and time spent (domain-level only by default)</li>
                    <li>• Keystroke and mouse activity levels (not content)</li>
                    <li>• Window titles (automatically obfuscated for sensitive applications)</li>
                    <li>• File names and paths (configurable, can be disabled)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">System Information</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Operating system and version</li>
                    <li>• Hardware specifications (CPU, RAM, disk space)</li>
                    <li>• Network connectivity status</li>
                    <li>• PulseLog agent version and configuration</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Account Information</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Name and email address</li>
                    <li>• Organization and role information</li>
                    <li>• User preferences and privacy settings</li>
                    <li>• Authentication and session data</li>
                  </ul>
                </div>

                <Alert>
                  <Eye className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Content Protection:</strong> PulseLog never captures screen content, keystrokes, or personal
                    communications. All sensitive content is automatically obfuscated or filtered out.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Employee Rights & Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Pause & Resume Tracking</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Employees can pause PulseLog tracking at any time using:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• System tray icon (Windows/Linux)</li>
                    <li>• Menu bar icon (macOS)</li>
                    <li>• Keyboard shortcut (configurable)</li>
                    <li>• Web dashboard controls</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Data Access Rights</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• View all personal activity data collected</li>
                    <li>• Export personal data in standard formats</li>
                    <li>• Request data correction or deletion</li>
                    <li>• Access audit logs of data access</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Privacy Settings</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Configure content obfuscation levels</li>
                    <li>• Set application-specific privacy rules</li>
                    <li>• Control data sharing with managers</li>
                    <li>• Manage consent preferences</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Data Security & Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Encryption</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• TLS 1.3 encryption for all data in transit</li>
                    <li>• AES-256 encryption for data at rest</li>
                    <li>• End-to-end encryption for sensitive communications</li>
                    <li>• Regular key rotation and management</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Access Controls</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Role-based access control (RBAC)</li>
                    <li>• Multi-factor authentication required</li>
                    <li>• Regular access reviews and audits</li>
                    <li>• Principle of least privilege enforcement</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Infrastructure Security</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• SOC2 Type II certified infrastructure</li>
                    <li>• Regular penetration testing</li>
                    <li>• 24/7 security monitoring</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Data Retention & Deletion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Default Retention Periods</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Activity data: 12 months (configurable by organization)</li>
                    <li>• Aggregated reports: 24 months</li>
                    <li>• Account information: Duration of employment + 30 days</li>
                    <li>• Audit logs: 7 years (compliance requirement)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Automated Deletion</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Data is automatically deleted according to retention policies:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Daily cleanup of expired activity data</li>
                    <li>• Monthly purge of deleted user accounts</li>
                    <li>• Quarterly review of retention policies</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Manual Deletion Requests</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Employee-initiated deletion (immediate)</li>
                    <li>• Organization-requested deletion (within 30 days)</li>
                    <li>• Legal or compliance-required deletion (within 72 hours)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Compliance & Regulations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">GDPR Compliance (EU)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Lawful basis: Legitimate interest (Article 6(1)(f))</li>
                    <li>• Data subject rights fully supported</li>
                    <li>• Privacy by design and by default</li>
                    <li>• Data Protection Impact Assessments conducted</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">CCPA Compliance (California)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Consumer rights to know, delete, and opt-out</li>
                    <li>• No sale of personal information</li>
                    <li>• Transparent privacy practices</li>
                    <li>• Non-discrimination for privacy choices</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Additional Standards</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• SOC2 Type II certification</li>
                    <li>• ISO 27001 implementation (in progress)</li>
                    <li>• NIST Cybersecurity Framework alignment</li>
                    <li>• Industry-specific compliance as required</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Contact & Data Requests
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Privacy Officer</h4>
                  <p className="text-sm text-muted-foreground">
                    Email: privacy@pulselog.com
                    <br />
                    Response time: Within 72 hours
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Data Subject Requests</h4>
                  <p className="text-sm text-muted-foreground">
                    For data access, correction, or deletion requests:
                    <br />
                    Email: data-requests@pulselog.com
                    <br />
                    Response time: Within 30 days
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Security Incidents</h4>
                  <p className="text-sm text-muted-foreground">
                    Report security concerns immediately:
                    <br />
                    Email: security@pulselog.com
                    <br />
                    Phone: +1 (555) SECURITY (24/7)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Alert>
              <Clock className="h-4 w-4" />
              <AlertDescription>
                This privacy policy may be updated periodically. We will notify users of material changes via email and
                in-app notifications at least 30 days before changes take effect.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
    </div>
  )
}
