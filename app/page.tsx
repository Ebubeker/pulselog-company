import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo-schema"
import { BarChart3, Shield, TrendingUp, Users, Clock, CheckCircle } from "lucide-react"

export default function HomePage() {
  const faqs = [
    {
      question: "How does PulseLog protect employee privacy?",
      answer:
        "PulseLog uses automatic content obfuscation, employee pause controls, and privacy-first design. Employees can control their privacy settings and pause tracking at any time.",
    },
    {
      question: "What operating systems does PulseLog support?",
      answer:
        "PulseLog supports Windows 10+, macOS 11+, and major Linux distributions including Ubuntu, RHEL, and CentOS.",
    },
    {
      question: "Can employees see their own data?",
      answer:
        "Yes, employees have full access to view, export, and request deletion of their personal activity data through the dashboard.",
    },
    {
      question: "How accurate is the productivity tracking?",
      answer:
        "PulseLog uses advanced algorithms to accurately detect active work time, application usage, and productivity patterns with minimal false positives.",
    },
    {
      question: "What happens to data when an employee leaves?",
      answer:
        "Employee data is automatically deleted 30 days after account deactivation, or immediately upon request, in compliance with data retention policies.",
    },
  ]

  return (
    <div className="min-h-screen">
      <ProductSchema
        name="PulseLog"
        description="Privacy-first employee productivity analytics platform that tracks activity while preserving privacy and maintaining GDPR compliance"
        category="Productivity Software"
        operatingSystem={["Windows", "macOS", "Linux"]}
        applicationCategory="BusinessApplication"
        offers={{
          price: "0",
          priceCurrency: "USD",
          description: "14-day free trial",
        }}
        aggregateRating={{
          ratingValue: "4.8",
          ratingCount: "127",
        }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://pulselog.com" }]} />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Privacy-First Productivity Analytics
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Smarter VA-Management With Real-Time AI Insights
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              PulseLog helps managers track employee activity and detect roadblocks, keeping projects moving smoothly
            </p>
            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href="/quote">
                  Get a Quote
                  <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for privacy-conscious teams</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the insights you need without compromising employee trust or regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-gray-700 mb-2" />
                <CardTitle>Real-time Activity Tracking</CardTitle>
                <CardDescription>Monitor application usage and productivity patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Application and website tracking</li>
                  <li>• Keystroke and mouse activity detection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-gray-700 mb-2" />
                <CardTitle>Privacy-First Design</CardTitle>
                <CardDescription>Content obfuscation and employee consent controls</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automatic content blurring</li>
                  <li>• Employee pause controls</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-gray-700 mb-2" />
                <CardTitle>Productivity Analytics</CardTitle>
                <CardDescription>Actionable insights for managers and teams</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Productivity trend analysis</li>
                  <li>• Blocker detection and alerts</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-gray-700 mb-2" />
                <CardTitle>Team Management</CardTitle>
                <CardDescription>Role-based access and team organization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Granular permission controls</li>
                  <li>• Department-level reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-gray-700 mb-2" />
                <CardTitle>Time Tracking</CardTitle>
                <CardDescription>Accurate time allocation and project tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automatic time categorization</li>
                  <li>• Project-based time allocation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-gray-700 mb-2" />
                <CardTitle>Compliance Ready</CardTitle>
                <CardDescription>GDPR, CCPA compliant with audit trails</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complete audit logging</li>
                  <li>• Data retention controls</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How PulseLog works</h2>
            <p className="text-xl text-muted-foreground">Simple setup, powerful insights in four steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-muted/50 text-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Install Desktop Agent</h3>
              <p className="text-muted-foreground">Deploy across your team with enterprise tools</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-muted/50 text-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Collect Activity Data</h3>
              <p className="text-muted-foreground">Automatic tracking with privacy preservation</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-muted/50 text-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Actionable Insights</h3>
              <p className="text-muted-foreground">Dashboard analytics and productivity reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Drive measurable business outcomes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">25%</div>
              <h3 className="text-lg font-semibold mb-2">Faster Issue Resolution</h3>
              <p className="text-muted-foreground">Detect when employees are stuck and provide timely support</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">40%</div>
              <h3 className="text-lg font-semibold mb-2">Improved Focus Time</h3>
              <p className="text-muted-foreground">Identify and eliminate productivity distractions</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">60%</div>
              <h3 className="text-lg font-semibold mb-2">More Accurate Billing</h3>
              <p className="text-muted-foreground">Precise time tracking for client and project billing</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <h3 className="text-lg font-semibold mb-2">Compliance Coverage</h3>
              <p className="text-muted-foreground">GDPR and CCPA compliant data handling</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15min</div>
              <h3 className="text-lg font-semibold mb-2">Setup Time</h3>
              <p className="text-muted-foreground">Enterprise deployment with existing tools</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Social Proof */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by forward-thinking teams</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "PulseLog helped us identify productivity bottlenecks without making our team feel surveilled. The
                  privacy controls are exactly what we needed."
                </p>
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">CTO, TechFlow Solutions</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The insights from PulseLog transformed how we support our engineering team. We can now proactively
                  help when someone is stuck."
                </p>
                <div>
                  <p className="font-semibold">Marcus Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Engineering Manager, DataCore</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Finally, a productivity tool that respects employee privacy while giving us the data we need for
                  better resource planning."
                </p>
                <div>
                  <p className="font-semibold">Jennifer Walsh</p>
                  <p className="text-sm text-muted-foreground">Head of Operations, CloudScale</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Application Overview Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Powerful Desktop Application
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PulseLog runs seamlessly in the background on Windows, macOS, and Linux, 
                automatically tracking your team's activity without disrupting their workflow.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Intelligent Activity Tracking</h3>
                    <p className="text-muted-foreground">Monitors applications, websites, and active time with smart categorization</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Privacy-First Design</h3>
                    <p className="text-muted-foreground">No screenshots, no keylogging - only productivity insights that matter</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Real-time Analytics</h3>
                    <p className="text-muted-foreground">Live dashboards and detailed reports help teams optimize their performance</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button size="lg" asChild>
                  {/* HIDDEN: Download link temporarily disabled - redirecting to quote */}
                  <Link href="/quote">
                    Get a Quote
                    <span className="ml-2">→</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Laptop Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/laptop.png"
                  alt="PulseLog Dashboard on Laptop"
                  width={500}
                  height={350}
                  className="w-full max-w-lg h-auto"
                  priority
                />
                
                {/* Floating activity indicators */}
                <div className="absolute -right-4 top-16 animate-pulse">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                </div>
                <div className="absolute -left-6 top-32 animate-pulse delay-1000">
                  <div className="w-2 h-2 bg-muted-foreground/60 rounded-full"></div>
                </div>
                <div className="absolute -right-2 bottom-20 animate-pulse delay-500">
                  <div className="w-2.5 h-2.5 bg-muted-foreground/80 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about PulseLog's privacy-first approach</p>
          </div>

          <div className="space-y-6">
            {faqs.slice(0, 6).map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/contact">Have more questions? Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to understand your team's productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get custom pricing tailored to your team's needs and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100" asChild>
              <Link href="/quote">
                Get a Quote
                <span className="ml-2">→</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Book Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
