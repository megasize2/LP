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
      <div className="bg-white/95 backdrop-blur-sm border-t border-[#0066ff]/50 shadow-lg">
        <div className="relative">
          {/* グラデーションライン */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0066ff] to-[#00ccff] background-size-200"></div>

          <div className="flex justify-around items-center py-2 px-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex flex-col items-center justify-center px-2 py-2 relative min-w-0 flex-1 ${
                  activeSection === item.id ? "text-[#0066ff]" : "text-gray-400 hover:text-[#0066ff]"
                }`}
              >
                <div
                  className={`p-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#0066ff]/20 to-[#00ccff]/10 shadow-[0_0_10px_rgba(0,102,255,0.3)]"
                      : ""
                  }`}
                >
                  {item.icon}

                  {/* アクティブ時のパルスエフェクト */}
                  {activeSection === item.id && (
                    <span className="absolute inset-0 rounded-full bg-[#0066ff]/20 animate-ping"></span>
                  )}
                </div>
                <span className="text-xs mt-1 font-medium leading-tight text-center truncate w-full">{item.label}</span>

                {/* アクティブインジケーター */}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 w-1 h-1 bg-[#0066ff] rounded-full shadow-[0_0_5px_rgba(0,102,255,0.7)]"></span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
