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
        isScrolled ? "glass-effect py-2 md:py-3" : "bg-transparent py-3 md:py-6",
      )}
    >
      <div className="container mx-auto px-0 md:px-0 flex justify-between items-center">
        <a href="#" className="flex items-center pl-2 md:pl-4">
          <img src="/images/company-logo.png" alt="TETRA CORE" className="h-8 md:h-10 object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 md:space-x-10 pr-4">
          {["ABOUT", "SKILLS", "EXPERIENCE", "HOBBIES", "CONTACT"].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-wide relative group overflow-hidden"
            >
              <span className="relative z-10 transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {["ABOUT", "SKILLS", "EXPERIENCE", "HOBBIES", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-2 text-sm tracking-wide border-b border-gray-700/30 last:border-0 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
