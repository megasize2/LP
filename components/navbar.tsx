"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-3 sm:py-4 md:py-6 px-4">
      <div className="container mx-auto">
        {/* Logo container with left quarter positioning */}
        <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
          <div className="w-1/4 flex justify-start">
            <div className="h-10 md:h-14">
              <img src="/images/tetra-core-logo.png" alt="TETRA CORE" className="h-full object-contain" />
            </div>
          </div>
          <div className="w-3/4"></div>
        </div>
      </div>

      {/* Border line below logo */}
      <div className="border-b border-gray-100 mb-2 md:mb-4"></div>

      {/* Mobile Navigation Button - Only visible on mobile */}
      <div className="container mx-auto flex justify-end lg:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="container mx-auto lg:hidden py-2 md:py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>
              SKILLS
            </MobileNavLink>
            <MobileNavLink href="#hobbies" onClick={() => setIsMenuOpen(false)}>
              HOBBIES
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              CONTACT
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
