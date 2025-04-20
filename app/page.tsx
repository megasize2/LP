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
  return (
    <div className="min-h-screen bg-white text-gray-800 pb-16 md:pb-0">
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
