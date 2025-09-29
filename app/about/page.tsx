import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Users, Shield, Target, Heart, CheckCircle, Star, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "About PulseLog - Privacy-First Productivity Analytics",
  description:
    "Learn about PulseLog's mission to provide actionable productivity insights while maintaining strict privacy controls and regulatory compliance.",
  openGraph: {
    title: "About PulseLog - Privacy-First Productivity Analytics",
    description:
      "Learn about PulseLog's mission to provide actionable productivity insights while maintaining strict privacy controls and regulatory compliance.",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            <Heart className="h-3 w-3 mr-1" />
            Our Story
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            Building the future of privacy-conscious productivity analytics
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
            We believe teams deserve insights that drive performance without compromising trust or privacy. 
            That's why we built PulseLog.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-black text-black" />
            <span>Trusted by 500+ teams worldwide</span>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by these fundamental principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-foreground" />
                </div>
                <CardTitle className="text-xl">Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Employee privacy isn't an afterthought—it's the foundation of everything we build. 
                  Complete control, full transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-foreground" />
                </div>
                <CardTitle className="text-xl">Actionable Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on delivering insights that actually help teams improve, 
                  not just vanity metrics that look good on dashboards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-foreground" />
                </div>
                <CardTitle className="text-xl">Team Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our tools empower both managers and employees to work better together, 
                  fostering trust and collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">Our Mission</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Productivity insights without the surveillance
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern teams need visibility into productivity patterns to support their people effectively. 
                Traditional monitoring tools create surveillance cultures that damage trust and morale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PulseLog bridges this gap by providing actionable insights while maintaining strict privacy 
                controls, employee consent mechanisms, and regulatory compliance. We help managers understand 
                when team members need support without creating a culture of surveillance.
              </p>
              
                             <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                  <span className="text-foreground">Privacy by design architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                  <span className="text-foreground">Employee consent controls</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                  <span className="text-foreground">Actionable productivity insights</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-muted/20 rounded-2xl p-8 shadow-2xl">
                <Image
                  src="/data.png"
                  alt="PulseLog Data Analytics Dashboard"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground font-medium">
                    Real insights, real privacy protection
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-muted/40 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-muted/60 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Story */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why we built PulseLog</h2>
            <div className="w-24 h-1 bg-foreground mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-foreground font-bold text-lg">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    After years of managing distributed engineering teams, our founders experienced firsthand 
                    the challenge of supporting team productivity without creating surveillance culture. Existing 
                    tools either provided invasive monitoring that damaged trust, or surface-level metrics that 
                    offered little actionable insight.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-foreground font-bold text-lg">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    PulseLog was founded on the principle that productivity analytics should empower both managers 
                    and employees. Our platform detects when team members are stuck or struggling, surfaces 
                    productivity patterns, and provides insights for better resource allocation - all while giving 
                    employees full control over their privacy and data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      {/* <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-2xl bg-muted/20">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Quote className="h-12 w-12 text-muted-foreground mx-auto mb-6 opacity-50" />
                <blockquote className="text-2xl font-medium text-foreground leading-relaxed mb-8">
                  "PulseLog transformed how we support our team. We can now proactively help when someone 
                  is stuck, and our developers appreciate the privacy controls that keep them in control 
                  of their data."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center">
                    <span className="text-foreground font-bold text-xl">SC</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-lg">Sarah Chen</p>
                    <p className="text-muted-foreground">CTO, TechFlow Solutions</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">40%</div>
                  <div className="text-sm text-muted-foreground">Faster resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">25%</div>
                  <div className="text-sm text-muted-foreground">Sprint improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">90%</div>
                  <div className="text-sm text-muted-foreground">Employee satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">$200K</div>
                  <div className="text-sm text-muted-foreground">Annual savings</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to build a privacy-conscious productivity culture?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking teams who trust PulseLog with their productivity insights.
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
