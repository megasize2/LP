import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center py-20"
    >
      {/* 装飾線 */}
      <div className="decorative-line decorative-line-1"></div>
      <div className="decorative-line decorative-line-2"></div>

      {/* 動く背景ドット */}
      <div className="animated-dots">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <ScrollReveal direction="left" className="md:w-1/2 w-full">
            <div className="text-center md:text-left">
              <div className="mb-4">
                <h2 className="text-[#0088ff] text-xl md:text-2xl mb-2 font-bold">PROFILE</h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 blue-gradient-text" data-text="國吉 泰史">
                  國吉 泰史
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-[#0066ff] to-[#00ccff] mx-auto md:mx-0 mb-6"></div>
                <h2 className="text-xl md:text-2xl mb-8 text-gray-700">YASUFUMI KUNIYOSHI</h2>
              </div>

              <p className="text-lg md:text-xl mb-8 text-gray-600">
                つくるものを通して人とのつながり
                <br />
                新しい価値が生まれ、気持ちや想いが届く。
                <br />
                そんなお手伝いができればと考えています。
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#about" className="modern-button pulse-button">
                  プロフィール
                </a>
                <a href="#skills" className="modern-button pulse-button">
                  スキル
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="md:w-1/2 w-full">
            <div className="relative">
              {/* 円形フレーム */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto circle-frame flex items-center justify-center floating glow">
                <img src="/images/profile.jpg" alt="國吉泰史" className="w-full h-full object-cover" />

                {/* 円周上のドット */}
                <div className="circle-dots rotating">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180
                    const x = 50 + 48 * Math.cos(angle)
                    const y = 50 + 48 * Math.sin(angle)
                    return (
                      <div
                        key={i}
                        className="circle-dot"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      ></div>
                    )
                  })}
                </div>
              </div>

              {/* 装飾的な円 */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-dashed border-[#0088ff]/30 rounded-full rotating"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 border border-[#0088ff]/40 rounded-full rotating-reverse"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
