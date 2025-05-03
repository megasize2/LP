"use client"

import { useEffect, useRef } from "react"

export function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    // Animation variables
    let animationId: number
    let frame = 0

    // Draw film grain
    const drawGrain = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create noise
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        // Random noise value
        const noise = Math.random() * 20

        // Set RGB values (grayscale)
        data[i] = noise // R
        data[i + 1] = noise // G
        data[i + 2] = noise // B
        data[i + 3] = 5 // Alpha (very subtle)
      }

      ctx.putImageData(imageData, 0, 0)

      // Increment frame and request next animation
      frame++
      animationId = requestAnimationFrame(drawGrain)
    }

    // Start animation
    drawGrain()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30"
      aria-hidden="true"
    />
  )
}
