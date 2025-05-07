import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen society-bg network-grid relative overflow-hidden flex items-center justify-center py-20"
    >
      {/* スキャナーライン */}
      <div className="scanner-line"></div>

      {/* データフロー背景 */}
      <div className="data-flow"></div>

      {/* パーティクル効果 */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 10}s`,
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
                <h2 className="english-title text-[#0ff] text-xl md:text-2xl mb-2">PROFILE</h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 gold-title">國吉 泰史</h1>
                <div className="h-1 w-32 bg-gradient-to-r from-[#0ff] to-[#0ff]/30 mx-auto md:mx-0 mb-6"></div>
                <h2 className="text-xl md:text-2xl mb-8 text-white">YASUFUMI KUNIYOSHI</h2>
              </div>

              <p className="text-lg md:text-xl mb-8 text-gray-300">
                つくるものを通して人とのつながり
                <br />
                新しい価値が生まれ、気持ちや想いが届く。
                <br />
                そんなお手伝いができればと考えています。
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#about" className="society-button">
                  プロフィール
                  <span className="absolute inset-0 overflow-hidden">
                    <span
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#0ff]/20 to-transparent"
                      style={{ transform: "translateX(-100%)", animation: "button-shine 3s infinite" }}
                    ></span>
                  </span>
                </a>
                <a href="#skills" className="society-button">
                  スキル
                  <span className="absolute inset-0 overflow-hidden">
                    <span
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#0ff]/20 to-transparent"
                      style={{ transform: "translateX(-100%)", animation: "button-shine 3s infinite 0.5s" }}
                    ></span>
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="md:w-1/2 w-full">
            <div className="relative">
              {/* 円形フレーム */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto circle-frame flex items-center justify-center">
                <img src="/images/profile.jpg" alt="國吉泰史" className="w-full h-full object-cover" />

                {/* 円周上のドット */}
                <div className="circle-dots" style={{ animation: "rotate-dots 20s linear infinite" }}>
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

              {/* 六角形パターン装飾 */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 hexagon-pattern opacity-30"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 hexagon-pattern opacity-30"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
