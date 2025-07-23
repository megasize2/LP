import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center py-16 px-4 sm:py-20"
    >
      {/* 装飾線 - モバイルでは控えめに */}
      <div className="decorative-line decorative-line-1 hidden sm:block"></div>
      <div className="decorative-line decorative-line-2 hidden sm:block"></div>

      {/* 動く背景ドット - モバイルでは数を減らす */}
      <div className="animated-dots">
        {Array.from({ length: window.innerWidth < 768 ? 8 : 20 }).map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 3}px`,
              height: `${3 + Math.random() * 3}px`,
              animationDuration: `${15 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between md:gap-12">
          <ScrollReveal direction="left" className="w-full md:w-1/2">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <h2 className="text-blue-600 text-lg sm:text-xl md:text-2xl mb-3 font-bold">PROFILE</h2>
                <h1
                  className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 blue-gradient-text leading-tight"
                  data-text="國吉 泰史"
                >
                  國吉 泰史
                </h1>
                <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-[#0066ff] to-[#00ccff] mx-auto md:mx-0 mb-4"></div>
                <h2 className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-700 font-medium">YASUFUMI KUNIYOSHI</h2>
              </div>

              <div className="text-base sm:text-lg md:text-xl mb-8 text-gray-600 space-y-2">
                <p className="leading-relaxed">つくるものを通して人とのつながり</p>
                <p className="leading-relaxed">新しい価値が生まれ、気持ちや想いが届く。</p>
                <p className="leading-relaxed">そんなお手伝いができればと考えています。</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#about" className="modern-button pulse-button text-center py-4 px-8 text-base font-semibold">
                  プロフィール
                </a>
                <a href="#skills" className="modern-button pulse-button text-center py-4 px-8 text-base font-semibold">
                  スキル
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="w-full md:w-1/2">
            <div className="relative flex justify-center">
              {/* 円形フレーム - モバイルでサイズ調整 */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 circle-frame flex items-center justify-center floating glow">
                <img src="/images/profile.jpg" alt="國吉泰史" className="w-full h-full object-cover" />

                {/* 円周上のドット - モバイルでは数を減らす */}
                <div className="circle-dots rotating">
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180
                    const x = 50 + 45 * Math.cos(angle)
                    const y = 50 + 45 * Math.sin(angle)
                    return (
                      <div
                        key={i}
                        className="circle-dot w-2 h-2 sm:w-3 sm:h-3"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          animationDelay: `${i * 0.3}s`,
                        }}
                      ></div>
                    )
                  })}
                </div>
              </div>

              {/* 装飾的な円 - モバイルでは小さく */}
              <div className="absolute -top-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-dashed border-[#0088ff]/30 rounded-full rotating"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border border-[#0088ff]/40 rounded-full rotating-reverse"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
