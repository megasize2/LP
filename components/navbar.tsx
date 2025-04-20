"use client"

import { useState, useEffect } from "react"
import { MenuIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm py-2 md:py-4 shadow-sm" : "bg-transparent py-3 md:py-6",
      )}
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img
              src="/images/tetra-core-logo.png"
              alt="tetra Core"
              className="h-12 md:h-16 w-96 md:w-[32rem] mr-2 object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 md:space-x-10">
          <a href="#about" className="text-sm tracking-wide hover:text-blue-500 transition-colors">
            ABOUT
          </a>
          <a href="#skills" className="text-sm tracking-wide hover:text-blue-500 transition-colors">
            SKILLS
          </a>
          <a href="#experience" className="text-sm tracking-wide hover:text-blue-500 transition-colors">
            EXPERIENCE
          </a>
          <a href="#hobbies" className="text-sm tracking-wide hover:text-blue-500 transition-colors">
            HOBBIES
          </a>
          <a href="#contact" className="text-sm tracking-wide hover:text-blue-500 transition-colors">
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#about" className="py-2 text-sm tracking-wide" onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </a>
            <a href="#skills" className="py-2 text-sm tracking-wide" onClick={() => setIsMenuOpen(false)}>
              SKILLS
            </a>
            <a href="#experience" className="py-2 text-sm tracking-wide" onClick={() => setIsMenuOpen(false)}>
              EXPERIENCE
            </a>
            <a href="#hobbies" className="py-2 text-sm tracking-wide" onClick={() => setIsMenuOpen(false)}>
              HOBBIES
            </a>
            <a href="#contact" className="py-2 text-sm tracking-wide" onClick={() => setIsMenuOpen(false)}>
              CONTACT
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
