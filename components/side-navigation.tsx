"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Heart, Mail } from "lucide-react"

export function SideNavigation() {
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
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <motion.nav
        className="flex flex-col space-y-4 bg-black/50 backdrop-blur-md p-4 rounded-full border border-white/20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavItem
          href="#"
          active={activeSection === ""}
          icon={<Home size={18} />}
          tooltip="HOME"
          onClick={scrollToTop}
        />
        <NavItem href="#about" active={activeSection === "about"} icon={<User size={18} />} tooltip="ABOUT" />
        <NavItem href="#skills" active={activeSection === "skills"} icon={<Briefcase size={18} />} tooltip="SKILLS" />
        <NavItem href="#hobbies" active={activeSection === "hobbies"} icon={<Heart size={18} />} tooltip="HOBBIES" />
        <NavItem href="#contact" active={activeSection === "contact"} icon={<Mail size={18} />} tooltip="CONTACT" />
      </motion.nav>
    </div>
  )
}

function NavItem({
  href,
  active,
  icon,
  tooltip,
  onClick,
}: {
  href: string
  active: boolean
  icon: React.ReactNode
  tooltip: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <Link href={href} className="block relative group" onClick={onClick}>
      <motion.div
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300",
          active ? "bg-white text-black" : "text-white/70 hover:text-white hover:bg-white/20",
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {icon}

        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-1 bg-white text-black text-xs font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          {tooltip}
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </div>
      </motion.div>
    </Link>
  )
}
