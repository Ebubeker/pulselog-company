import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <Image 
                src="/activity.png" 
                alt="PulseLog Activity Icon" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              PulseLog
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Privacy-first employee activity tracking and productivity analytics for modern teams. Understand what your
              team is working on without compromising privacy.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Follow Us</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link 
                  href="https://twitter.com/pulselog" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link 
                  href="https://linkedin.com/company/pulselog" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} PulseLog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
