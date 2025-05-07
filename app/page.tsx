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
    <div className="min-h-screen cyber-bg text-white pb-24 md:pb-0">
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
