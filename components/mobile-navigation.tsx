"use client"

import { useEffect, useState } from "react"
import { HomeIcon, UserIcon, BriefcaseIcon, AwardIcon, HeartIcon, MailIcon } from "lucide-react"

export default function MobileNavigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // 初期状態を設定

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { id: "hero", icon: <HomeIcon className="w-5 h-5" />, label: "TOP" },
    { id: "about", icon: <UserIcon className="w-5 h-5" />, label: "プロフィール" },
    { id: "skills", icon: <AwardIcon className="w-5 h-5" />, label: "スキル" },
    { id: "experience", icon: <BriefcaseIcon className="w-5 h-5" />, label: "職歴" },
    { id: "hobbies", icon: <HeartIcon className="w-5 h-5" />, label: "趣味" },
    { id: "contact", icon: <MailIcon className="w-5 h-5" />, label: "トレンド" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass-effect border-t border-gray-800/30 shadow-lg">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex flex-col items-center justify-center px-2 py-1 ${
                activeSection === item.id ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              <div className={`p-1 rounded-full ${activeSection === item.id ? "bg-blue-900/50" : ""}`}>{item.icon}</div>
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
