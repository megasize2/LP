"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import HobbiesSection from "@/components/hobbies-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import SideNavigation from "@/components/side-navigation"
import MobileNavigation from "@/components/mobile-navigation"

export default function ProfilePage() {
  // パーティクル効果の初期化
  useEffect(() => {
    // パーティクルの生成
    const createParticles = () => {
      const particles = document.querySelectorAll(".particles")

      particles.forEach((container) => {
        for (let i = 0; i < 30; i++) {
          const particle = document.createElement("div")
          particle.classList.add("particle")

          // ランダムな位置と遅延を設定
          particle.style.left = `${Math.random() * 100}%`
          particle.style.top = `${Math.random() * 100}%`
          particle.style.animationDuration = `${15 + Math.random() * 10}s`
          particle.style.animationDelay = `${Math.random() * 5}s`

          container.appendChild(particle)
        }
      })
    }

    createParticles()

    // 円周上のドットの生成
    const createCircleDots = () => {
      const circleDots = document.querySelectorAll(".circle-dots")

      circleDots.forEach((container) => {
        for (let i = 0; i < 12; i++) {
          const dot = document.createElement("div")
          dot.classList.add("circle-dot")

          // 円周上の位置を計算
          const angle = (i * 30 * Math.PI) / 180
          const x = 50 + 48 * Math.cos(angle)
          const y = 50 + 48 * Math.sin(angle)

          dot.style.left = `${x}%`
          dot.style.top = `${y}%`
          dot.style.animationDelay = `${i * 0.2}s`

          container.appendChild(dot)
        }
      })
    }

    createCircleDots()

    // スクロールアニメーションの初期化
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight
        const revealTop = reveal.getBoundingClientRect().top
        const revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // 初期表示時にも実行

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen society-bg text-white pb-24 md:pb-0">
      <Navbar />
      <SideNavigation />
      <MobileNavigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
