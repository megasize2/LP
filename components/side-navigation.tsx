"use client"

import { useEffect, useState } from "react"
import { HomeIcon, UserIcon, BriefcaseIcon, AwardIcon, HeartIcon, MailIcon } from "lucide-react"

export default function SideNavigation() {
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
    { id: "hero", icon: <HomeIcon className="w-4 h-4" />, label: "TOP" },
    { id: "about", icon: <UserIcon className="w-4 h-4" />, label: "プロフィール" },
    { id: "skills", icon: <AwardIcon className="w-4 h-4" />, label: "スキル" },
    { id: "experience", icon: <BriefcaseIcon className="w-4 h-4" />, label: "職歴" },
    { id: "hobbies", icon: <HeartIcon className="w-4 h-4" />, label: "趣味" },
    { id: "contact", icon: <MailIcon className="w-4 h-4" />, label: "トレンド" },
  ]

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="cyber-card py-4 px-2 rounded-full">
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`flex flex-col items-center justify-center group relative ${
                  activeSection === item.id ? "text-cyan-400" : "text-gray-500 hover:text-cyan-400"
                }`}
              >
                <div
                  className={`p-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                      : "group-hover:bg-gray-800"
                  }`}
                >
                  {item.icon}

                  {/* アクティブ時のパルスエフェクト */}
                  {activeSection === item.id && (
                    <span className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping"></span>
                  )}
                </div>
                <span className="absolute right-full mr-2 cyber-card text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
