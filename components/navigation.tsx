"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
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
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className={`${isActive('/') ? 'text-foreground' : 'text-muted-foreground'} hover:text-black transition-colors`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`${isActive('/about') ? 'text-foreground' : 'text-muted-foreground'} hover:text-black transition-colors`}
              >
                About
              </Link>
              {/* HIDDEN: Download link temporarily disabled */}
              {/* <Link 
                href="/download" 
                className={`${isActive('/download') ? 'text-foreground' : 'text-muted-foreground'} hover:text-black transition-colors`}
              >
                Download
              </Link> */}
              <Link 
                href="/contact" 
                className={`${isActive('/contact') ? 'text-foreground' : 'text-muted-foreground'} hover:text-black transition-colors`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/contact">Book Demo</Link>
            </Button>
            <Button asChild>
              {/* HIDDEN: Download link temporarily disabled - redirecting to quote */}
              <Link href="/quote">Get Started</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <Link 
                href="/" 
                className={`block px-3 py-2 ${isActive('/') ? 'text-foreground' : 'text-muted-foreground'} hover:text-black transition-colors`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-2 ${isActive('/about') ? 'text-foreground' : 'text-muted-foreground'} hover:text-black transition-colors`}
              >
                About
              </Link>
              {/* HIDDEN: Download link temporarily disabled */}
              {/* <Link 
                href="/download" 
                className={`block px-3 py-2 ${isActive('/download') ? 'text-foreground' : 'text-muted-foreground'} hover:text-black transition-colors`}
              >
                Download
              </Link> */}
              <Link 
                href="/contact" 
                className={`block px-3 py-2 ${isActive('/contact') ? 'text-foreground' : 'text-muted-foreground'} hover:text-black transition-colors`}
              >
                Contact
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/contact">Book Demo</Link>
                </Button>
                <Button className="w-full" asChild>
                  {/* HIDDEN: Download link temporarily disabled - redirecting to quote */}
                  <Link href="/quote">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
