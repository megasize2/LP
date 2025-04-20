"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, User, Briefcase, Heart, Mail } from "lucide-react"

export function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("")

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "hobbies", "contact"]

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <nav className="flex justify-around items-center bg-white border-t border-gray-200 py-2 px-4 shadow-lg">
        <NavItem href="#" active={activeSection === ""} icon={<Home size={20} />} label="HOME" onClick={scrollToTop} />
        <NavItem href="#about" active={activeSection === "about"} icon={<User size={20} />} label="ABOUT" />
        <NavItem href="#skills" active={activeSection === "skills"} icon={<Briefcase size={20} />} label="SKILLS" />
        <NavItem href="#hobbies" active={activeSection === "hobbies"} icon={<Heart size={20} />} label="HOBBIES" />
        <NavItem href="#contact" active={activeSection === "contact"} icon={<Mail size={20} />} label="CONTACT" />
      </nav>
    </div>
  )
}

function NavItem({
  href,
  active,
  icon,
  label,
  onClick,
}: {
  href: string
  active: boolean
  icon: React.ReactNode
  label: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <Link href={href} className="flex flex-col items-center" onClick={onClick}>
      <div
        className={cn(
          "flex items-center justify-center p-1 rounded-full transition-all duration-300",
          active ? "text-black" : "text-gray-500",
        )}
      >
        {icon}
      </div>
      <span className={cn("text-xs mt-1 font-medium", active ? "text-black" : "text-gray-500")}>{label}</span>
    </Link>
  )
}
