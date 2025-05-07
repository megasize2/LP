import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen cyber-bg cyber-grid relative overflow-hidden flex items-center justify-center py-20"
    >
      {/* スキャナーライン */}
      <div className="scanner-line"></div>

      {/* バイオモーフィック形状 */}
      <div className="bio-shape bio-shape-1"></div>
      <div className="bio-shape bio-shape-2"></div>

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
            <div className="cyber-card p-6 transform-3d rotate-3d">
              <div className="hologram">
                <img src="/images/profile.jpg" alt="國吉泰史" className="w-full rounded-lg shadow-lg" />
              </div>

              {/* 装飾的なコーナー */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-500"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="md:w-1/2 w-full">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="glitch-effect neon-text" data-text="國吉 泰史">
                  國吉 泰史
                </span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto md:mx-0 mb-6"></div>
              <h2 className="text-xl md:text-2xl mb-8 neon-text-pink">YASUFUMI KUNIYOSHI</h2>

              <p className="text-lg md:text-xl mb-8 text-gray-300">
                つくるものを通して人とのつながり
                <br />
                新しい価値が生まれ、気持ちや想いが届く。
                <br />
                そんなお手伝いができればと考えています。
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#about" className="cyber-button">
                  プロフィール
                  <span className="absolute inset-0 overflow-hidden">
                    <span
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
                      style={{ transform: "translateX(-100%)", animation: "button-shine 3s infinite" }}
                    ></span>
                  </span>
                </a>
                <a href="#skills" className="cyber-button">
                  スキル
                  <span className="absolute inset-0 overflow-hidden">
                    <span
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"
                      style={{ transform: "translateX(-100%)", animation: "button-shine 3s infinite 0.5s" }}
                    ></span>
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
