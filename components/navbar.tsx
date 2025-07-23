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
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-3 md:py-6",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h2 className="text-xl font-bold tracking-wider blue-text">KUNIYOSHI</h2>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {["ホーム", "プロフィール", "スキル", "職歴", "趣味", "トレンド"].map((item, index) => (
            <a
              key={item}
              href={`#${["hero", "about", "skills", "experience", "hobbies", "contact"][index]}`}
              className="text-sm tracking-wide relative group overflow-hidden text-gray-700"
            >
              <span className="relative z-10 transition-colors group-hover:text-[#0088ff]">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0088ff] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0088ff] w-10 h-10 flex items-center justify-center rounded-full modern-card"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {["ホーム", "プロフィール", "スキル", "職歴", "趣味", "トレンド"].map((item, index) => (
              <a
                key={item}
                href={`#${["hero", "about", "skills", "experience", "hobbies", "contact"][index]}`}
                className="py-2 text-sm tracking-wide border-b border-[#0088ff]/30 last:border-0 hover:text-[#0088ff] transition-colors text-gray-700"
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
