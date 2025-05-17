"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "flip" | "rotate" | "zoom"
}

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active")
            }, delay)
          }
        })
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, delay])

  const getRevealClass = () => {
    switch (direction) {
      case "left":
        return "fade-in translate-x-[-30px]"
      case "right":
        return "fade-in translate-x-[30px]"
      case "scale":
        return "fade-in scale-95"
      case "flip":
        return "fade-in [transform:rotateY(20deg)]"
      case "rotate":
        return "fade-in [transform:rotate(5deg)]"
      case "zoom":
        return "fade-in scale-90"
      default:
        return "fade-in"
    }
  }

  return (
    <div ref={ref} className={`${getRevealClass()} ${className}`}>
      {children}
    </div>
  )
}
