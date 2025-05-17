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
  // アニメーション効果の初期化
  useEffect(() => {
    // フェードインアニメーションの初期化
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll(".fade-in")
      const modernCards = document.querySelectorAll(".modern-card")

      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active")
        }
      })

      modernCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top
        const cardVisible = 150

        if (cardTop < window.innerHeight - cardVisible) {
          card.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("load", handleScroll)
    handleScroll() // 初期表示時にも実行

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("load", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-800 pb-24 md:pb-0">
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
