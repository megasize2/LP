"use client"

import { useState, useEffect } from "react"
import { MenuIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <h2
            className={cn(
              "text-xl font-bold tracking-wider transition-colors duration-300",
              isScrolled ? "text-gray-900" : "text-white",
            )}
          >
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">KUNIYOSHI</span>
          </h2>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["ホーム", "プロフィール", "スキル", "職歴", "趣味", "トレンド"].map((item, index) => (
            <a
              key={item}
              href={`#${["hero", "about", "skills", "experience", "hobbies", "contact"][index]}`}
              className={cn(
                "text-sm font-medium tracking-wide relative group transition-colors duration-300",
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white",
              )}
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300",
            isScrolled
              ? "text-gray-900 bg-gray-100 hover:bg-gray-200"
              : "text-white bg-white/10 backdrop-blur-sm hover:bg-white/20",
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {["ホーム", "プロフィール", "スキル", "職歴", "趣味", "トレンド"].map((item, index) => (
              <a
                key={item}
                href={`#${["hero", "about", "skills", "experience", "hobbies", "contact"][index]}`}
                className="py-3 text-gray-700 font-medium border-b border-gray-200 last:border-0 hover:text-blue-600 transition-colors"
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
