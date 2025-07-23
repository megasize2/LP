"use client"

import { useEffect, useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* 全画面背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/profile.jpg')",
          transform: `translateY(${scrollY * 0.5}px)`, // パララックス効果
        }}
      />

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />

      {/* 装飾的なグラフィック要素 */}
      <div className="absolute inset-0">
        {/* 幾何学的な装飾 */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse" />
        <div
          className="absolute bottom-32 right-16 w-24 h-24 border border-blue-400/30 rotate-45 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg rotate-12 animate-pulse" />

        {/* フローティングドット */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollReveal direction="scale">
            {/* サブタイトル */}
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium tracking-wider uppercase">
                Profile
              </span>
            </div>

            {/* メインタイトル */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                國吉 泰史
              </span>
            </h1>

            {/* 英語名 */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white/80 mb-8 tracking-widest">
              YASUFUMI KUNIYOSHI
            </h2>

            {/* 区切り線 */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-8" />

            {/* 説明文 */}
            <div className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 space-y-3 font-light leading-relaxed">
              <p>つくるものを通して人とのつながり</p>
              <p>新しい価値が生まれ、気持ちや想いが届く。</p>
              <p>そんなお手伝いができればと考えています。</p>
            </div>

            {/* CTA ボタン */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#about"
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">プロフィールを見る</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#skills"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">スキルを見る</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm mb-2 font-light tracking-wider">SCROLL</span>
          <ChevronDownIcon className="w-6 h-6" />
        </div>
      </div>

      {/* 装飾的なライン */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  )
}
