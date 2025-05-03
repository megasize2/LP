"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CinematicTitleProps {
  text: string
  size?: "small" | "medium" | "large"
  className?: string
}

export function CinematicTitle({ text, size = "large", className }: CinematicTitleProps) {
  // Split text into characters for animation
  const characters = text.split("")

  // Define size classes
  const sizeClasses = {
    small: "text-2xl sm:text-3xl",
    medium: "text-3xl sm:text-4xl md:text-5xl",
    large: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  }

  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h2
      className={cn("font-bold tracking-wider text-white relative", sizeClasses[size], className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Text shadow for cinematic effect */}
      <span className="absolute -left-1 -top-1 opacity-20 blur-sm text-white select-none">{text}</span>

      {/* Main text with character animation */}
      <div className="relative">
        {characters.map((char, index) => (
          <motion.span key={`${char}-${index}`} variants={child} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.h2>
  )
}
