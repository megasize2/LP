"use client"

import { useEffect, useState } from "react"
import { HomeIcon, UserIcon, BriefcaseIcon, AwardIcon, HeartIcon, MailIcon } from "lucide-react"

export default function MobileNavigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      // スクロール方向に基づいてナビゲーションの表示/非表示を制御
      if (scrollPosition > lastScrollY + 50) {
        setIsVisible(false)
      } else if (scrollPosition < lastScrollY - 10) {
        setIsVisible(true)
      }
      setLastScrollY(scrollPosition)

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
  }, [lastScrollY])

  const navItems = [
    { id: "hero", icon: <HomeIcon className="w-5 h-5" />, label: "TOP" },
    { id: "about", icon: <UserIcon className="w-5 h-5" />, label: "プロフィール" },
    { id: "skills", icon: <AwardIcon className="w-5 h-5" />, label: "スキル" },
    { id: "experience", icon: <BriefcaseIcon className="w-5 h-5" />, label: "職歴" },
    { id: "hobbies", icon: <HeartIcon className="w-5 h-5" />, label: "趣味" },
    { id: "contact", icon: <MailIcon className="w-5 h-5" />, label: "トレンド" },
  ]

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-black/90 backdrop-blur-lg border-t border-blue-500/50 shadow-lg">
        <div className="relative">
          {/* 装飾的なスキャンライン */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent animate-scanline"></div>

          <div className="flex justify-around items-center py-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex flex-col items-center justify-center px-2 py-1 relative ${
                  activeSection === item.id ? "text-blue-300" : "text-white/80 hover:text-blue-300"
                }`}
              >
                <div
                  className={`p-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-600/40 to-blue-400/40 shadow-[0_0_10px_rgba(0,123,255,0.7)]"
                      : ""
                  }`}
                >
                  {item.icon}

                  {/* アクティブ時のパルスエフェクト */}
                  {activeSection === item.id && (
                    <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping"></span>
                  )}
                </div>
                <span className="text-xs mt-1 font-medium text-outline">{item.label}</span>

                {/* アクティブインジケーター */}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_5px_rgba(0,123,255,0.7)]"></span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
