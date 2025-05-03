import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-16 pb-8 md:pt-32 md:pb-20 bg-black section-pattern relative overflow-hidden mobile-dark section-overlay min-h-[90vh] md:min-h-0 flex items-center"
    >
      {/* 未来的な装飾要素 - 透明度を下げる */}
      <div className="absolute top-0 left-0 w-full h-full tech-grid-bg opacity-15"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
      <div
        className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>

      {/* デジタルラインの装飾 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scanline"></div>
      <div
        className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 via-transparent to-blue-500 animate-scanline"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center">
          <ScrollReveal direction="left" className="md:w-1/2 mb-6 md:mb-0 md:pr-8 md:pr-12 w-full">
            <div className="relative card-3d max-w-[280px] mx-auto md:max-w-none">
              {/* 装飾的な要素 */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 border-t-2 border-l-2 border-blue-500 opacity-70 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-12 h-12 md:w-20 md:h-20 border-b-2 border-r-2 border-blue-500 opacity-70 animate-pulse-slow"></div>

              {/* 画像コンテナ */}
              <div className="card-3d-inner relative z-10 bg-gray-900 p-2 rounded-lg shadow-lg overflow-hidden border border-blue-500/50">
                {/* スキャンライン効果 */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-scanline"></div>

                <img
                  src="/images/profile.jpg"
                  alt="國吉泰史"
                  className="w-full max-w-md mx-auto rounded-md transition-transform duration-700 hover:scale-105"
                />

                {/* デジタルエフェクト装飾 */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500/10 to-transparent opacity-60"></div>

                {/* コーナーアクセント */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
              </div>

              {/* データフロー効果 */}
              <div className="absolute bottom-0 left-0 w-full h-1 animate-dataFlow"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="md:w-1/2 w-full">
            <div className="relative text-container important-section">
              {/* 装飾的な円 */}
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-12 h-12 md:w-20 md:h-20 bg-blue-500/10 rounded-full opacity-50 animate-float"></div>

              <div className="relative z-10">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mobile-heading mb-4 md:mb-6 relative text-center md:text-left">
                  <span className="block relative bg-black/70 py-2 px-4 rounded-lg shadow-md inline-block">
                    <span
                      className="relative z-10 text-white font-medium"
                      style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0.8)" }}
                    >
                      國吉 泰史
                    </span>
                    {/* グリッチエフェクトは控えめに */}
                    <span
                      className="absolute top-0 left-0 w-full text-blue-300/10 animate-glitch"
                      style={{
                        textShadow: "1px 0 #3a86ff20, -1px 0 #3a86ff20",
                        opacity: "0.2",
                        filter: "brightness(0.8) contrast(0.9)",
                      }}
                      aria-hidden="true"
                    >
                      國吉 泰史
                    </span>
                  </span>
                  <span
                    className="block text-lg md:text-xl digital-text mt-3 md:mt-4 animate-pulse-slow relative section-title bg-black/70 py-1 px-4 rounded-lg shadow-md inline-block"
                    style={{ textShadow: "0 0 8px rgba(59, 130, 246, 0.5), 0 1px 3px rgba(0, 0, 0, 0.9)" }}
                  >
                    YASUFUMI KUNIYOSHI
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-blue-500/40"></span>
                  </span>
                </h1>

                <p
                  className="mobile-readable-light text-base md:text-xl leading-relaxed max-w-lg bg-black/80 p-3 rounded-lg shadow-lg mt-4 font-medium text-white mx-auto md:mx-0 text-center md:text-left"
                  style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.9)" }}
                >
                  つくるものを通して人とのつながり
                  <br />
                  新しい価値が生まれ、気持ちや想いが届く。
                  <br />
                  そんなお手伝いができればと考えています。
                </p>

                {/* デジタル装飾線 */}
                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse-slow mx-auto md:mx-0"></div>

                {/* スクロールダウンインジケーター */}
                <div className="mt-8 flex items-center gap-2 text-sm text-blue-400 animate-pulse-slow justify-center md:justify-start">
                  <span className="inline-block w-5 h-5 border-b-2 border-r-2 border-blue-400 transform rotate-45"></span>
                  <span
                    className="bg-black/60 px-2 py-1 rounded text-white"
                    style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.8)" }}
                  >
                    スクロールして詳細を見る
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
