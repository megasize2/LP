"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // キャンバスをウィンドウサイズに合わせる
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // パーティクルの設定
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)
    const particles: Particle[] = []
    const maxDistance = 150
    const mousePosition = { x: null as number | null, y: null as number | null }

    // パーティクルの初期化
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        radius: Math.random() * 2 + 1,
        color: `rgba(0, 102, 255, ${Math.random() * 0.5 + 0.2})`,
      })
    }

    // マウス位置の追跡
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
    }

    const handleMouseLeave = () => {
      mousePosition.x = null
      mousePosition.y = null
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    // アニメーションループ
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // パーティクルの更新と描画
      particles.forEach((particle, i) => {
        // 位置の更新
        particle.x += particle.vx
        particle.y += particle.vy

        // 画面外に出たら反対側から再登場
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // パーティクルの描画
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // マウスとの接続線
        if (mousePosition.x !== null && mousePosition.y !== null) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance * 1.5) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(mousePosition.x, mousePosition.y)
            ctx.strokeStyle = `rgba(0, 102, 255, ${1 - distance / (maxDistance * 1.5)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // 他のパーティクルとの接続線
        for (let j = i + 1; j < particles.length; j++) {
          const particle2 = particles[j]
          const dx = particle.x - particle2.x
          const dy = particle.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.strokeStyle = `rgba(0, 102, 255, ${1 - distance / maxDistance})`
            ctx.lineWidth = 0.2
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30" />
}
