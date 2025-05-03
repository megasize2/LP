"use client"

import type React from "react"
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <SocialIcon href="https://github.com" icon={<Github className="h-5 w-5" />} />
      <SocialIcon href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} />
      <SocialIcon href="https://linkedin.com" icon={<Linkedin className="h-5 w-5" />} />
      <SocialIcon href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} />
      <SocialIcon href="mailto:example@example.com" icon={<Mail className="h-5 w-5" />} />
    </div>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}
